import React, { useState } from "react";
import ClassBasedcomp from "./Classcomp";
import UserContext from "../Utils/UserContext";
const About = () => {
  //  count state
  const [count, setCount] = useState(10); 

  // for memo state 
  const [arr, setarr] = useState([1,3,5,7]); 

  // function for useMemo 
  const memefun = () =>{
    return Math.max(...arr);
    console.log("show max");
  }

  // useMemo 
  // const callmemofun = useMemo(memefun() ,[])

  return (
    <div>
      <h1>About</h1>
      <UserContext.Consumer>
        {(data) => <h1>{data.loggedInUser}</h1>}
      </UserContext.Consumer>
      <ClassBasedcomp name={"Yazhini React Developer(class)"} />

      {/* count schange btn  */}
      <button
        className="px-2 bg-primary py-1 text-white rounded-md"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add Count
      </button>
      <p>{count}</p>

{/* btn for usememo change  */}
<button
        className="px-2 bg-primary py-1 text-white rounded-md"
        onClick={() => {
          memefun();
        }}
      >
        Add Count
      </button>
      <p>{JSON.stringify(...arr)}</p> 

    </div>
  );
};

export default About;
