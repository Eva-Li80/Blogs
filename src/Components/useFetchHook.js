// import { useEffect, useState } from "react";

// const useFetchHook = (url) => {
//     const [data, setData] = useState([]);
//     const [pending, setPending] = useState(true);
  
//     useEffect(() => {
//       setTimeout(() => {
//         fetch(url)
//           .then(res => res.json())
//           .then(data => {
//             setData(data);
//             setPending(false);
//           })
//           .catch(err => {
//             console.log(err.message);
//           });
//       }, 500);

//     }, [url]);

//     return (
//         {data, pending}
//       );
// }
 
// export default useFetchHook;