import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmerui from "./shimmer";
import useProductInfo from "../Utils/useProductInfo";
import RestorentCatogery from "./RestorentCatogery";

const ProductInnerpage = () => {
  // const [productInfo, setProductInfo] = React.useState();

  let { resId } = useParams();

  const productInfo = useProductInfo(resId);
 
  const [showIndex,setShowIndex] = useState(0);

  console.log(productInfo);
  let catogeryPath =
    productInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  console.log(catogeryPath, "catogerypath");

  if (
    productInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      ?.card?.itemCards[0]?.card?.info === " "
  )
    return <Shimmerui />;

  let card = productInfo?.cards[0]?.card?.card?.text;

  return (
    <div className="bg-pink-50 dark:bg-gray-700 ">
      <div className="container py-4">
        <div className="grid justify-content-center md:px-60">
          <h1 className="dark:text-white text-lg font-bold my-2 italic">
            {card}
          </h1>

          <div className="container">
            {catogeryPath?.length > 0 &&
              catogeryPath?.map((c,index) => (
                // console.log(c?.card?.card?.title)
                <RestorentCatogery
                  key={c?.card?.card?.title}
                  data={c?.card?.card}
                  showItems ={index === showIndex ? true : false}
                  setShowIndex = {() => setShowIndex(index !== showIndex ? index : "")}
                />
              ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductInnerpage;
