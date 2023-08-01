import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, removeProductFromCart } from '../reducers/cart/cartSlice'
import products from "../../data";

const ProductDetail = () => {
  const { id } = useParams()

  const product = products.find(product => product.id == id)

  const dispatch = useDispatch()

  const { productsList } = useSelector(state => state.cart)

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
    <h2 className="h2">Product Detail</h2>
    <div className="product-detail">
                    <h4>{product.name}</h4>

                    <div className="img-container-detail">
                     <img src={product.img} alt={product.name} />
                    </div>

                    <p><b>Price:</b> {product.price} $</p>
                    <p><b>Category:</b> {product.category}</p>
                    <p><b>Description:</b></p>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sunt dolorem incidunt ea, totam aut fugiat maiores deleniti consectetur iure facere sapiente necessitatibus cum officia autem quas architecto illo quidem?</p>
                    <button
                      className={`btn ${productsList.find(pdt => pdt.id === product.id) ? "btn-danger" : "btn-success"}`}
                      onClick={() => handleAddOrRemoveProduct(product.id)}
                    >
                      {productsList.find(pdt => pdt.id === product.id) ? "Remove from" : "Add to"} Cart
                    </button>
   </div>
    </>
  )
}

export default ProductDetail