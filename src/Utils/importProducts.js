import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/dbConnection";


export const importProducts = () => {
    const productsCollection = collection(db, "productos")

    const url = "https://fakestoreapi.com/products"
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            data.forEach((product) => {
                addDoc(productsCollection, product)
                    .then((doc) => {
                        console.log("cocumento escrito con ID:", doc.id);
                    })
                    .catch((error) => {
                        console.error("Documento añadido de Error:", error);
                    });
            })
        })
        .catch(error => {
            console.error(error)
        })

}

