import { useSelector, useDispatch } from 'react-redux';
import RestaurentMenuList from './RestaurentMenuList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clearCartItem = () => {
    dispatch(clearCart());
  }

  return (
    <div className='m-auto w-6/12'>
      <div className='text-center'>
        <div className="text-2xl font-bold">Cart</div>
        {cartItems.length > 0 && <button className='m-2 p-2 text-white bg-black rounded-lg' onClick={clearCartItem}>Clear Cart</button>}
      </div>
      {!cartItems.length ?
        <h1 className='text-center font-bold text-3xl'>Cart is empty!!!</h1> :
        <RestaurentMenuList menu={cartItems} hideAddButton={true} />
      }
    </div>
  )
}

export default Cart;