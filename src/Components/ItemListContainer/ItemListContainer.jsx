import styles from './itemListContainer.module.css'
import { ItemList } from '../ItemList/ItemList'
import { useFetch } from '../../Hooks/useFetch'
import { Loading } from '../Loading/Loading'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/dbConnection'
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from 'react'
import { useEffect } from 'react'

export const ItemListContainer = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {

        const productsCollection = collection(db, "productos")

        if (categoryId) {
            const consulta = query(productsCollection, where("category", "==", categoryId));
            getDocs(consulta).then(({ docs }) => {
                const prodFromDocs = docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setProduct(prodFromDocs);              /* " id: doc.id " sirve para agregar el valor id a las propiedades del objeto y setearla con el existente en la base de datos */
                setLoading(false);
            }).catch((error) => {
                console.log(error);
            })

        } else {

            getDocs(productsCollection).then(({ docs }) => {
                const prodFromDocs = docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setProduct(prodFromDocs);              /* " id: doc.id " sirve para agregar el valor id a las propiedades del objeto y setearla con el existente en la base de datos */
                setLoading(false);
            }).catch((error) => {
                console.log(error);
            })
        }

    }, [categoryId])



    return (
        <div className={styles.container}>
            {loading === true ? <Loading /> : <ItemList productsList={product} />}
        </div>
    )
}
