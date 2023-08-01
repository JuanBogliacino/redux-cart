import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, removeProductFromCart } from '../reducers/cart/cartSlice'
import { Link } from 'react-router-dom'
import FilterBar from './FilterBar'

const ProductsList = ({ products }) => {
  const dispatch = useDispatch()

  const { productsList, categoryActive } = useSelector(state => state.cart)

  if (categoryActive != '') {
    products = products.filter(pdt => pdt.category == categoryActive)
  }

  const handleAddOrRemoveProduct = (productId) => {
    const product = products.find(product => product.id == productId)
    if (productsList.find(pdt => pdt.id === productId)) {
      dispatch(removeProductFromCart(product))
    } else {
      dispatch(addProductToCart(product))
    }
  }

  return (
    <>
        <h2>Product List</h2>

        <FilterBar />

        <h2 className='h2-category'>{categoryActive}</h2>

          <div className="products-container">
            {
              products.map(product => {
                return (
                  <div key={product.id} className="product">
                    <h4>{product.name}</h4>

                    <Link to={`/product/${product.id}`}>
                    <div className="img-container">
                     <img src={product.img} alt={product.name} />
                    </div>
                    </Link>

                    <p><b>Price:</b> {product.price} $</p>
                    <p><b>Category:</b> {product.category}</p>
                    <button
                      className={`btn ${productsList.find(pdt => pdt.id === product.id) ? "btn-danger" : "btn-success"}`}
                      onClick={() => handleAddOrRemoveProduct(product.id)}
                    >
                      {productsList.find(pdt => pdt.id === product.id) ? "Remove from" : "Add to"} Cart
                    </button>
                  </div>
                )
              })
            }
          </div>
      </>
  )
}

export default ProductsList