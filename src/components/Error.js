import React from 'react';
import {useRouteError} from 'react-router-dom';
import Navbar from './Navbar';

const Error = () => {
 const err = useRouteError();

 console.log(err)

  return (
    <div>
    <Navbar/>
    Error</div>
  )
}

export default Error;


// // count increment
// const [count, setCount] = useState(10);

// // for pure function and useMemo demo
// const [arr, setArry] = useState([1, 3, 5, 7]);

// const showMax = () => {
//   console.log("show max");
//   return Math.max(...arr);
// };

// const memoExample = useMemo(() => showMax(), [arr]);
// //





{/* <button
type="button"
className="px-2 py-1 rounded-sm bg-black text-white m-3"
onClick={() => setCount(count + 1)}
>
Count add
</button>
<p>{count}</p> */}

      // {/* this btn change the arr then only allow useMemo for showmax function  */}
      // <button
      //   type="button"
      //   className="px-2 py-1 rounded-sm bg-primary text-white m-3"
      //   onClick={() => setArry([...arr, Math.round(count * Math.random())])}
      // >
      //   Count add
      // </button>
      // <h2>Show Max - {memoExample}</h2>
      // <h2>{JSON.stringify(arr)}</h2>
      // {/* ............ */}