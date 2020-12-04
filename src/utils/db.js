import Dexie from "dexie";

const db = new Dexie("imageDb");
db.version(1).stores({
  images: `date, title`,
});

export default db;
