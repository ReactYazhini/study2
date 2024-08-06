import Productcard, { HierarchyComponent } from "./Productcard";
import React from "react";
import Shimmerui from "./shimmer";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { FaSearchengin } from "react-icons/fa6";
import { LuSearchX } from "react-icons/lu";
import { productListcontainerjson } from "../Utils/productListcontainerjson";

// let productJSON = productjson;

const Productlistcontainer = () => {
  // State variable
  const [productJSON, setproductJSON] = React.useState([]); ///productjson

  const [filteredProductJSON, setFilteredProductJSON] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState("");

  const HierarchyComponentCard = HierarchyComponent(Productcard);

  React.useEffect(() => {
    fetchData();
    console.log("test");
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   productListcontainerjson
    //   // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01420&lng=76.99410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );

    // console.log(productListcontainerjson)
    // const json = await data.json();

    //  console.log(json);
    //  console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    setproductJSON(
      productListcontainerjson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredProductJSON(
      productListcontainerjson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus2 = useOnlineStatus();

  if (onlineStatus2 === false) {
    return <h1>Please check Your Online</h1>;
  }
  return productJSON.length === 0 ? (
    <Shimmerui />
  ) : (
    <div>
      <div>
        <Banner />
      </div>
      <div className="dark:bg-gray-700 pt-5 mainSec_bg">
        <div className="grid container pt-2 mx-auto justify-end">
          <div className="group flex items-center relative">
            {/* search input with filter icon  */}
            <div className=" flex justify-between items-center">
              <div className="group flex items-center relative">
                <input
                  type="text"
                  placeholder="Search Here"
                  className="w-[200px] rounded-full group-hover:w-[300px] border border-gray-300 transition-all duration-300  focus:outline-none focus:border-1 px-2 py-1 focus:border-primary group-hover:border-primary focus:w-[300px] "
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                />
                {/* serach filter btn  */}
                <FaSearchengin
                  className="absolute right-10 text-gray-500 group-hover:text-primary cursor-pointer"
                  onClick={() => {
                    const searchProdct = productJSON.filter((data) =>
                      data?.info?.name
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    );
                    setFilteredProductJSON(searchProdct);
                  }}
                />
                {/* clear serach btn  */}
                <LuSearchX
                  className="absolute right-3 text-gray-500 group-hover:text-accent cursor-pointer"
                  onClick={() => {
                    setFilteredProductJSON(productJSON);
                    setSearchValue("");
                  }}
                />
              </div>
            </div>

            {/* above rating 4 filter  */}
            <div className="flex mx-3">
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded-sm"
                onClick={() => {
                  const filteredData = productJSON.filter(
                    (data) => data.info.avgRating > 4
                  );
                  console.log(filteredData);
                  setFilteredProductJSON(filteredData);
                }}
              >
                Above 4 Rating
              </button>
              <button
                className="bg-accent text-white px-4 ml-3 py-1 rounded-sm"
                onClick={() => {
                  const filteredData = productJSON.filter(
                    (data) => data.info.avgRating > 4
                  );
                  console.log(filteredData);
                  setFilteredProductJSON(filteredData);
                }}
              >
               clear
              </button>
            </div>

            {/* username change using context  */}
            {/* <div className="mx-3">
              <input
                className="border border-gray-300 rounded-md p-1"
                value={loggedInUser}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div> */}
          </div>
        </div>
        <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {filteredProductJSON.map((data) => (
              <Link key={data.info.id} to={"/resturants/" + data.info.id}>
                {data.info.avgRating > 4.5 ? (
                  <HierarchyComponentCard resCard={data} />
                ) : (
                  <Productcard resCard={data} />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productlistcontainer;
