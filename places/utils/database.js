import * as SQLite from 'expo-sqlite';

const database = SQLite.openDatabase('places.db');

export function init() {
  const promising = new Promise((resolve, reject) => {
    database.transaction((trans) => {
      trans.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
      id TEXT NOT NULL,
      title TEXT NOT NULL,
      imageUrl TEXT NOT NULL,
      address TEXT NOT NULL,
      latitude REAL NOT NULL,
      longitude REAL NOT NULL 
    )`,
        [],
        () => resolve(),
        (_, error) => reject(error)
      );
    });
  });

  return promising;
}

export function insertPlace(place) {
  const promising = new Promise((resolve, reject) => {
    database.transaction((trans) => {
      trans.executeSql(
        `INSERT INTO places
      (id, title, imageUrl, address, latitude, longitude)
      VALUES (?, ?, ?, ?, ?, ?)`,
        [place.id, place.title, place.imageUrl, place.address, place.location.latitude, place.location.longitude],
        (_trans, result) => {
          console.log(result);
          resolve(result);
        },
        (_, error) => reject(error)
      );
    });
  });

  return promising;
}

export function removeTable() {
  const promising = new Promise((resolve, reject) => {
    database.transaction((trans) => {
      trans.executeSql(
        `DROP TABLE places`,
        [],
        (_trans, result) => {
          console.log(result);
          resolve(result);
        },
        (_, error) => reject(error)
      );
    });
  });

  return promising;
  
}

export function fetchDataPlaces() {
  const promising = new Promise((resolve, reject) => {
    database.transaction((trans) => {
      trans.executeSql(
        `SELECT * FROM places`,
        [],
        (_trans, result) => {
          resolve(result.rows._array);
        },
        (_, error) => reject(error)
      );
    });
  });

  return promising;
}

export function fetchDataDetails(id) {
  const promising = new Promise((resolve, reject) => {
    database.transaction((trans) => {
      trans.executeSql(
        `SELECT * FROM places WHERE id = ?`,
        [id],
        (_trans, result) => {
          resolve(result.rows._array[0]);
        },
        (_, error) => reject(error)
      );
    });
  });

  return promising;
}