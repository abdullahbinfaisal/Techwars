import firestore from "./firebase"

const getUsers = async () => {
    const snapshot = await firestore.collection("users").get()
    snapshot.docs.forEach( docs => console.log(docs.data()));
}

export { getUsers };