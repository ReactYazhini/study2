import React from "react";
import { PRODUCT_API ,test} from "../Utils/namedexport";

const useProductInfo = (resId) => {
  const [productInfo, setProductInfo] = React.useState();

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(PRODUCT_API + resId );
    // const json = await data.json();
    setProductInfo(test?.data);
  };

  return productInfo;
};


export default useProductInfo;