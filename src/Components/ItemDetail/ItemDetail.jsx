import styles from './itemDetail.module.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';

export const ItemDetail = ({ producto }) => {

    const { addToCart } = useCartContext();

    const handleAddToCart = (cantItems) => {
        addToCart(producto, cantItems);
    };

    
    return (
        <div className={styles.itemD}>
            <img src={producto.image} alt="" variant="top" />
            <div>
                <h1>{producto.title}</h1>
                <p>{producto.description}</p>
                <p>{producto.price}</p>
                <ItemCount handlleAddToCart={handleAddToCart} />
            </div>
        </div>
    )
}
