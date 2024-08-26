import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Button from "../designs/Button";
import Loader from "../designs/Loader";

function RecipeDetails() {
  let {idMeal} =  useParams()
  console.log(useParams());
  let [fetching, setFetching] = useState(false);
  let [instructions, setInstructions] = useState(false);
  let [data, setData] = useState([]);
  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;
    setFetching(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`, { signal })
      .then((res) => res.json())
      .then((item) => {
        console.log(item.meals[0]);
        setData(item.meals[0]);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, [idMeal]);
  
  return (
    <>
    { fetching ? <Loader/> :
    <div className="card m-auto" style={{maxWidth: '1240px', backgroundColor: 'rgba(8, 8, 37, 0.75)', color: 'white'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={data.strMealThumb} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body text-center">
      {instructions ?
      <>
       <p className="card-text mb-2">{data.strInstructions}</p>
       <Button onClick={()=> setInstructions(false)}>Go Back</Button>
       </>
        : 
      <>
        <h1 className="card-title fs-1" style={{color : 'blue',fontWeight: '700'}}>Food Details</h1>
        <h3 className="card-title">Food Name : {data.strMeal}</h3>
        <h3 className="card-title">Food Country : {data.strArea}</h3>
        <h3 className="card-title">Food Category : {data.strCategory}</h3>
        <Button onClick={()=> setInstructions(!instructions)}>See Instructions</Button>
        </>
      }
      </div>
    </div>
  </div>
</div>
}
</>
  )
}

export default RecipeDetails