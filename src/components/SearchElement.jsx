import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Loader from "../designs/Loader";

function SearchElement() {
    let {item} = useParams()
    console.log(useParams())

    let [fetching, setFetching] = useState(false);
    let [data, setData] = useState([]);
    useEffect(() => {
     let controller = new AbortController();
     let signal = controller.signal;
     setFetching(true);
     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`, { signal })
       .then((res) => res.json())
       .then((item) => {
         console.log(item.meals);
         setData(item.meals);
         setFetching(false);
       });
 
     return () => {
       controller.abort();
     };
   }, [item]);
  return (
    <>
    {fetching ? <Loader/> : 
    <div style={{
        width:'90%',
        margin:'auto',
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit, minmax(15rem, 1fr))',
        gridGap:'1rem',
        marginTop:'2rem'
    
    }}>
    {data.map(item => 
       <Link key={item.idMeal} to={`/${item.idMeal}`}>
        <div key={item.idMeal} style={{textAlign: 'center'}}>
                <div className="img d-flex justify-center">
                    <img src={item.strMealThumb} alt="" style={{width:'13rem'}} />
                </div>
                 <h3 className="text-white mt-2 text-center">{item.strMeal}</h3>
            </div>
            </Link>
  
     )}
     </div>
    }
     </>
  )
}

export default SearchElement