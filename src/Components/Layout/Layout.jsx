import { Nav } from './Nav/Nav.jsx'
import { Footer } from './Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <div>
            <Nav />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
