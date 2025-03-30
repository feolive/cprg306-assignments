import { collection, getDocs, addDoc, query, deleteDoc, doc } from "firebase/firestore";


export const getItems = async ({db, userId}) => {
  const q = query(
    collection(db, "users", userId, "items")
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ docId: doc.id, ...doc.data() }));
};

export const addItem = async (db, userId, item) => {
  const itemsRef = collection(db, "users", userId, "items");
  return addDoc(itemsRef, item);
};

export const deleteItem = async (db, userId, id) => {
  const itemsRef = collection(db, "users", userId, "items");
  return deleteDoc(doc(itemsRef, id));
};

