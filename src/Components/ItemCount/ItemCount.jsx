
import styles from './ItemCount.module.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const ItemCount = ({ handlleAddToCart }) => {

  const navigate = useNavigate();

  const [contador, setContador] = useState(1);
  const [prodAgregado, setProdAgregado] = useState(true)

  const handlleAdd = () => {
    setContador(contador + 1)
  }
  const handlleSub = () => {
    if (contador > 1) setContador(contador - 1);
  }

  const handlleTerminarCompra = () => {
    setProdAgregado(true)
    navigate("/cart")
  };

  const handlleAgregarAlCarrito = () => {
    setProdAgregado(false)
    handlleAddToCart(contador);
  };


  return (
    <div className={styles.contiene}>
      <div>
        <button onClick={handlleAdd}> + </button>
        <span> {contador} </span>
        <button onClick={handlleSub}> - </button>
      </div>
      {prodAgregado ?
        <button onClick={handlleAgregarAlCarrito} className={styles.iButton}>Agregar al carrito</button>
        :
        <button className={styles.iButton} onClick={handlleTerminarCompra}>Ver el Carrito</button>}
    </div>
  )
}

