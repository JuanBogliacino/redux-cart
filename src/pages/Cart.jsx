import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeProductFromCart } from '../reducers/cart/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const { productsList, totalPrice } = useSelector(state => state.cart);

  const handleRemoveProduct = (product) => dispatch(removeProductFromCart(product));

  return (
    <>
    <h2 className='h2'>Cart</h2>
          {
            productsList.length == 0
            ? <h4 className='not-cart-result'>No products in the cart</h4>
            : (
            <>
            <div className='cart-info'>
             <button className='btn btn-danger' onClick={() => dispatch(clearCart())}>Clear Cart</button>
             <h4><b>Total price:</b> {totalPrice} $</h4>
            </div>
            <div className="products-container">
            {
              productsList.map(product => {
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
                    <button className="btn btn-danger" onClick={() => handleRemoveProduct(product)}>Delete</button>
                  </div>
                )
              })
            }
            </div>
            </>
            )
          }
    </>
  )
}

export default Cart