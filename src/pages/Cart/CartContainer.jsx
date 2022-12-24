import { CartListProducts } from './Components/CartListProducts.jsx'
import '../../scss/cart.scss'
const CartContainer = () => {
  return (
    <section className='bg-main2 py-6'>
      <CartListProducts />
    </section>
  )
}
export default CartContainer
