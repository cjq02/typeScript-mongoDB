import CrawlerDB from './db/CrawlerDB'

class Application {
    static main() :void {
        let db = new CrawlerDB();
        db.test();
    }
}

Application.main();