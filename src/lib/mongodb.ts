import { MongoClient } from "mongodb";

// 개발 중에는 코드를 고칠 때마다 이 파일이 다시 실행됩니다.
// 그때마다 새로 연결하면 연결 수가 계속 늘어나므로, 한 번 만든 연결을 전역에 보관해 재사용합니다.
const globalForMongo = globalThis as unknown as {
  mongoClientPromise?: Promise<MongoClient>;
};

// MongoDB에 연결된 클라이언트를 돌려줍니다. 처음 부를 때만 실제로 연결합니다.
export function getMongoClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 없습니다. .env.local을 확인하세요.");
  }

  if (!globalForMongo.mongoClientPromise) {
    const client = new MongoClient(uri, {
      // DB에 닿지 않을 때 너무 오래 기다리지 않도록 5초로 제한합니다.
      serverSelectionTimeoutMS: 5000,
    });
    globalForMongo.mongoClientPromise = client.connect().catch((error) => {
      // 연결에 실패하면 보관한 것을 지워서, 다음 요청 때 다시 연결을 시도하게 합니다.
      globalForMongo.mongoClientPromise = undefined;
      throw error;
    });
  }

  return globalForMongo.mongoClientPromise;
}
