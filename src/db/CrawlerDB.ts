import DBUtil from './DBUtil';

class CrawlerDB {

    dbUtil: DBUtil;

    constructor() {
        this.dbUtil = new DBUtil();
    }

    async test() {
        const db = await this.dbUtil.getDB();
        // const res = await db.createCollection("movie3");

        let res = await db.collection('inserts').insertOne({ ccc: new Date() });

        console.log(res);
    }
}


export default CrawlerDB;