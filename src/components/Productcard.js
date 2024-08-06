import { FaRegStarHalfStroke } from "react-icons/fa6";
import { PRODUCT_CARD_IMG_CLOUD_LINK } from "../Utils/namedexport";

const Productcard = (props) => {
  const { resCard } = props;
  const { id, name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla } =
    resCard?.info;

  return (
    <div className="rounded-lg border border-transparent  hover:border-slate-400 p-2 dark:bg-gray-900 bg-blue-50 cursor-pointer shadow-md hover:shadow-2xl">
      {/* { avgRating >= 4.5 ? 
     (<label className="bg-black text-white rounded-md m-1 p-2 absolute -ml-2 -mt-2 ">
          Promoted
        </label>) : ""
        } */}
        {
      (PRODUCT_CARD_IMG_CLOUD_LINK + cloudinaryImageId) ? (
        <img
        src={PRODUCT_CARD_IMG_CLOUD_LINK + cloudinaryImageId}
        className="w-full rounded-lg h-[250px] overflow-hidden sm:h-[150px]"
      />
      ):""
     } 
     
      <h2 className="text-base font-bold mb-1 mt-2 truncate dark:text-white">
        {name}
      </h2>
      <p className="text-xs text-slate-500 h-[35px] dark:text-slate-300">
        {cuisines.join(", ")}
      </p>
      <div className="grid grid-cols-10 gap-4 items-center my-1 bottom-2 ">
        <div className="col-span-4 text-xs font-bold dark:text-white">
          {costForTwo}
        </div>
        <div className="col-span-4 text-xs font-bold dark:text-white">
          {sla?.slaString}
        </div>
        <div className="col-span-2 text-xs font-bold flex items-center dark:text-white">
          {avgRating}&nbsp;
          <FaRegStarHalfStroke className="text-cyan-400" />
        </div>
      </div>
    </div>
  );
};

export const HierarchyComponent = (Productcard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black text-white rounded-md m-1 p-2 absolute">
          Promoted
        </label>
        <Productcard {...props} />
      </div>
    );
  };
};
export default Productcard;
