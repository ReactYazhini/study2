import { useDispatch } from "react-redux";
import { addItem,removeItem } from "../Utils/cartSlice";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const FoodCard = ({ data }) => {
  const [itemAdded, setItemAdded] = useState([]);
  // const items = useSelector(state => state.card.items);

  //Dispatch add items
  const dispatch = useDispatch();
  const handleAddItem = (items) => {
    dispatch(addItem(items));
  };

  const removeItems = (items) => {
    console.log(items,"removed");
    dispatch(removeItem(items));
  };

  return (
    <div
      className="grid grid-cols-12 drop-shadow-xl rounded-md p-5 bg-white align-middle dark:bg-gray-900 mb-3"
      key={data?.id}
    >
      {/* Name  */}
      <div className="col-span-10">
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
      <div className="col-span-2 justify-center align-middle">
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
            <button
              className="rounded-md px-3 py-1 bg-white shadow-md text-green-500 mx-auto text-xs font-bold"
              onClick={() => handleAddItem(data)}
            >
              ADD +
            </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
