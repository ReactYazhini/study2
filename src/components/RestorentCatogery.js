import { IoIosArrowDropdown } from "react-icons/io";
import FoodCard from "./FoodCard";

const RestorentCatogery = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowIndex();
  };

  const innerIteamCard = data?.categories || data?.itemCards;

  return (
    <div>
      <div className=" border rounded-md border-black-300 shadow-md my-2 p-2">
        <div
          className="flex justify-between cursor-pointer"
          onClick={data?.itemCards ? handleClick : ""}>
          <div className="font-bold text-gray-800 text-lg">
            <h2 className="mb-2 dark:text-white">{data?.title}</h2>
          </div>
          {data?.itemCards && (
            <div>
              <IoIosArrowDropdown className="dark:text-white" />
            </div>
          )}
        </div>
        {innerIteamCard?.length > 0 &&
          innerIteamCard?.map((categories) =>
            showItems && categories?.card?.info ? (
              <FoodCard
                key={categories?.card?.info?.id}
                data={categories?.card?.info}
              />
            ) : (
              categories?.itemCards?.map((innerNestedIteamCards, index) => (
                <div key={innerNestedIteamCards?.card?.info?.id}>
                  {/* Inner Title  */}
                  {index === 0 && (
                    <div
                      className="flex justify-between cursor-pointer"
                      onClick={handleClick}
                    >
                      <div>
                        <h4 className="dark:text-white text-md font-bold text-blue-800 mb-2">
                          {categories?.title}
                        </h4>
                      </div>
                      <div>
                        <IoIosArrowDropdown className="dark:text-white" />
                      </div>
                    </div>
                  )}
                  {showItems && (
                    <FoodCard
                      data={innerNestedIteamCards?.card?.info}
                      key={innerNestedIteamCards?.card?.info?.id}
                    />
                  )}
                </div>
              ))
            )
          )}
      </div>
    </div>
  );
};

export default RestorentCatogery;
