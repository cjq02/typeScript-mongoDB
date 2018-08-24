import * as mongodb from 'mongodb';

class DBUtil {
    
    private dbName: string;
    private url: string;

    constructor() {
        this.url = 'mongodb://172.96.211.88:27017';
        this.dbName = 'aaa';
    }

    async createConnection() {
        return await mongodb.MongoClient.connect(this.url);
    }

    public async getDB() {
        const conn = await this.createConnection();
        return conn.db(this.dbName);
    }
}

export default DBUtil;