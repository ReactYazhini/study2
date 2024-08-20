import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Utils/cartSlice";
import { FaStar } from "react-icons/fa";
import { useReducer, useState } from "react";

const FoodCard = ({ data, index }) => {
  // console.log(index,"cartdata")
  const [itemAdded, setItemAdded] = useState([]);
  const ItemsCount = useSelector((store) => store.cart.items);

  //Dispatch add items
  const dispatch = useDispatch();
  const handleAddItem = (items) => {
    dispatch(
      addItem({
        id: items?.id,
        name: items?.name,
        price: items?.price,
        imageId: items?.imageId,
      })
    );
  };

  const cartRedfn = (state, action) => {
    switch (action.type) {
      case "INC":
        return { count: state.count + 1 };
      case "DEC":
        return { count: state.count - 1 };
    }
  };

  const [state, cartdispatch] = useReducer(cartRedfn, { count: 0 });

  const removeItems = (items) => {
    console.log(items, "removed");
    dispatch(removeItem(items));
  };

  const qtyFun = (data) => {
    const localItems = JSON.parse(localStorage.getItem("items") || []);
    const qtyfind = localItems && localItems.find((i) => i?.id === data?.id);
    const qtyValue = qtyfind
      ? qtyfind?.qty
      : state.count <= 0
      ? (state.count = 0)
      : state.count;
    return qtyValue;
    console.log(qtyValue);
    // console.log(JSON.parse(localStorage.getItem("items")).filter(items => (data?.id === items?.id) ? console.log(items?.qty,"qty")
  };

  return (
    <div
      className=" grid grid-cols-12 drop-shadow-xl rounded-md p-5 bg-white align-middle dark:bg-gray-900 mb-3"
      key={data?.id}
    >
      {/* Name  */}
      <div className="md:col-span-10 col-span-8">
        <h4 className="dark:text-white font-medium">{data?.name}</h4>

        {/* Price  */}
        <h4 className="dark:text-white text-gray-600">
          ₹{data?.price ? data?.price / 100 : data?.defaultPrice / 100}
        </h4>

        {/* Rating  */}
        {data?.ratings?.aggregatedRating?.rating ? (
          <div className="flex mt-2">
            <FaStar className=" dark:text-white text-green-600/100 pt-1 " />{" "}
            <h4 className="dark:text-white text-green-600/100 pl-1">
              {data?.ratings?.aggregatedRating?.rating}
              <span className="text-gray-500 dark:text-white mx-2">
                (
                {data?.ratings?.aggregatedRating?.ratingCountV2
                  ? data?.ratings?.aggregatedRating?.ratingCountV2
                  : "-"}
                )
              </span>
            </h4>
          </div>
        ) : (
          ""
        )}

        {/* description  */}
        <p className="dark:text-white text-gray-400 text-xs">
          {data?.description}
        </p>
      </div>

      {/* Img  */}
      <div className="md:col-span-2 justify-center align-middle col-span-4">
        {data?.imageId !== undefined ? (
          <img
            className="rounded-lg shadow-xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
              data?.imageId
            }
          />
        ) : null}

        <div className="grid justify-center -mt-3">
          <div className="rounded-md px-3 py-1 bg-white shadow-md  mx-auto text-xs font-bold">
            <button
              className="mr-2 text-green-500 text-md"
              onClick={() => {
                handleAddItem(data);
                cartdispatch({ type: "INC" });
              }}
            >
              +
            </button>
            {localStorage.getItem("items").length > 0
              ? qtyFun(data)
              : (state.count <= 0
              ? state.count = 0
              : state.count)}

            <button
              className="ml-2 text-red-500 font-weight-bold text-lg"
              onClick={() => {
                removeItems(data);
                cartdispatch({ type: "DEC" });
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
