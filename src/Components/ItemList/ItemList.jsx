import { Item } from '../Item/Item';
import styles from './itemList.module.css';


export const ItemList = ({ productsList }) => {
    return (

        <div className={styles.itemList}>
            {productsList.map((elem) => {
                return <Item key={elem.id} {...elem} />
            })}
        </div>

    )
}