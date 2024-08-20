import { useDispatch, useSelector } from "react-redux";
import FoodCard from "./FoodCard";
import { clearCart } from "../Utils/cartSlice";
import RestorentCatogery from "./RestorentCatogery";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  // clear cart 
  const dispatch = useDispatch();
  const handleClearCart = () =>{
    console.log("clear cart")
    dispatch(clearCart());
  }

  return (
    <div className="grid justify-content-center md:px-60 dark:bg-gray-700 h_100">
      <div className="container border rounded-md p-3">
        <div className="flex justify-between">
          <div className="col-span">
          <h1 className="text-bold dark:text-white">Cart</h1>
          </div>
          <div className="text-right col-span mb-2">
          <button className="bg-accent px-2 py-1 rounded-md text-white text-sm" onClick={() => handleClearCart()}>Clear Cart</button>
          </div>
        </div>
        <hr></hr>
        {cartItems.length === 0 && <h1 className="text-center pt-5 text-accent font-bold">Your Cart is Empty!!! </h1>}
        
        {cartItems.length > 0 &&
          cartItems.map((cartItems,index) => (
            <FoodCard key={cartItems?.id} data={cartItems} index={index}/>
          ))
          }
      </div>
    </div>
  );
};
export default Cart;
