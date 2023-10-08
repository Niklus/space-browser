import Dexie from "dexie";

const db = new Dexie("imageDb");
db.version(1).stores({
  images: `id, title`,
});

export default db;
