import { CartListProducts } from './Components/CartListProducts.jsx'
import '../../scss/cart.scss'

export const CartContainer = () => {
  return (
    <section className='bg-main2 py-6'>
      <CartListProducts />
    </section>
  )
}
