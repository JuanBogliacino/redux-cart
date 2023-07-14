import ProductsList from '../components/ProductsList'
import products from '../../data'

const Home = () => {
  return (
   <>
    <h2 className='h2'>Home</h2>
    <ProductsList products={products} />
   </>
  )
}

export default Home