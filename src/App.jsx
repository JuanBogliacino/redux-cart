import { Link, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Components
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'

function App() {
  const { totalCount } = useSelector(state => state.cart)

  return (
    <>
     <div className="d-flex py-4">
        <Link className="btn btn-primary mx-2 text-white" to="/">Home</Link>
        <div className="ms-auto">
          <Link className="btn btn-primary position-relative" to="/cart">
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalCount}
            </span>
          </Link>
        </div>
      </div>

     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/product/:id' element={<ProductDetail />} />
     </Routes>
    </>
  )
}

export default App