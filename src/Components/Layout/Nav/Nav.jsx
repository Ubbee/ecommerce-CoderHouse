import styles from './nav.module.css';
import { CartWidget } from '/src/Components/CartWidget/CartWidget.jsx'
import { Link, NavLink } from 'react-router-dom'

export const Nav = () => {
    return (
        <header>
            <nav className={styles.background}>
                <a href=""><img src="./src/Components/Layout/Footer/img/image.png" alt="iconoCarrito" /></a>
                <ul>
                    <li><Link to="/category/men's clothing">♂ Ropa<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke="currentColor" d="M4.5 15L12 7.5L19.5 15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg></Link></li>
                    <li><Link to="/category/jewelery">Joyeria<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke="currentColor" d="M4.5 15L12 7.5L19.5 15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg></Link></li>
                    <li><Link to="/">Home<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke="currentColor" d="M4.5 15L12 7.5L19.5 15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg></Link></li>
                    <li><Link to="/category/electronics">Tecnologia<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke="currentColor" d="M4.5 15L12 7.5L19.5 15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg></Link></li>
                    <li><Link to="/category/women's clothing">Ropa ♀<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke="currentColor" d="M4.5 15L12 7.5L19.5 15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg></Link></li>
                </ul>
                <CartWidget />
            </nav>
        </header>


    )
}
