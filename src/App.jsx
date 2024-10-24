import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer.jsx'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from './Components/Cart/Cart.jsx'
import { Error } from './Components/Error/Error.jsx'
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer.jsx'
import { Layout } from './Components/Layout/Layout.jsx'
import CartContextProvider from './context/CartContext.jsx'
import { Home } from './Pages/Home/Home.jsx'

function App(props) {
  return (
    <CartContextProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
          <Route path="/addd" element={<Home />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path='/products/:ProductId' element={<ItemDetailContainer />} />
            <Route path='*' element={<Error />}></Route>
          </Route>
        </Routes>
      </Router>
    </CartContextProvider>
  )
}
export default App
