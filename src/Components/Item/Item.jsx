 import styles from './item.module.css';
import { Link, NavLink } from 'react-router-dom'

export const Item = ({ id, title, description, price, image }) => {

    return (
        <div className={styles.item}>
            <img src={image} alt="" variant="top" />
            <div>
                <h1>{title}</h1>
                <Link to={`/products/${id}`} className={styles.pe}>
                    Ver Mas!
                </Link>
            </div>
        </div>
    )
}

