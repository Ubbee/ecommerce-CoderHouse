import { useCartContext } from '../../context/CartContext.jsx'
import { Link } from 'react-router-dom';
import styles from '../CartWidget/cartWidget.module.css'

export const CartWidget = () => {
    const { totalQty } = useCartContext();

    return (
        <div className={styles.carros}>
            <Link to="/cart">🛒</Link>
            <p>{totalQty}</p>
        </div>
    );
};
