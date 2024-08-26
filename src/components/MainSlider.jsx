import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../designs/Loader";
import { Link } from "react-router-dom";
function MainSlider() {
  let [fetching, setFetching] = useState(false);
  let [data, setData] = useState([]);
  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;
    setFetching(true);
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s", { signal })
      .then((res) => res.json())
      .then((item) => {
        setData(item.meals);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
    {fetching ? <Loader/> : 
      <div className="slider-container" style={{width: '90%', margin: 'auto'}}>
        <Slider {...settings} >
          {data.map((item) => (
            <Link key={item.idMeal} to={`/${item.idMeal}`}>
            <div key={item.idMeal} className="img__wrap d-flex justify-content-center slider align-items-center">
              <img className="img__img" height='220px' width='90%' style={{borderRadius : '15px'}}
                src={item.strMealThumb}
              ></img>
                <div className="img__description">
                  <p style={{color : 'rgb(0,140,255)'}}>Food Details</p>
                  <p>{item.strMeal}</p>
                  <p>{item.strArea}</p>
                  <p>Category : {item.strCategory}</p>
                </div>
            </div>
            </Link>
          ))}
        </Slider>
      </div>
    }
    </>
  );
}

export default MainSlider;
