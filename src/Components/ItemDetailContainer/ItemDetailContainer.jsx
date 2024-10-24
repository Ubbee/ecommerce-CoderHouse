import styles from './itemDetailContainer.module.css'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { Loading } from '../Loading/Loading'
import { useState } from 'react'
import { useEffect } from 'react'
import { db } from '../../firebase/dbConnection'
import { collection, getDoc, doc } from "firebase/firestore";


export const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true);

    const { ProductId } = useParams()

    useEffect(() => {
        setLoading(true);
        const productsCollection = collection(db, "productos")
        const refDoc = doc(productsCollection, ProductId);

        getDoc(refDoc)
        .then((doc) => {
            setProduct({ id: doc.id, ...doc.data() });
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        })


    }, [ProductId])

    console.log(product)

    return (
        <div className={styles.container}>
            {loading === true ? <Loading /> : <ItemDetail producto={product}  />}
        </div>
    )
}
