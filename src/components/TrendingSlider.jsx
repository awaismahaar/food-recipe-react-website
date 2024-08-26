import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";
import ShortLoader from "../designs/ShortLoader";
function TrendingSlider() {
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
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
    {fetching ? <ShortLoader/> : 
      <div className="slider-container" style={{width: '100%', margin: '25px auto'}}>
        <Slider {...settings} >
          {data.map((item) => (
            <Link key={item.idMeal} to={`/${item.idMeal}`}>
            <div key={item.idMeal} className="d-flex slider-1 justify-content-center align-items-center">
              <img height='170px' width='50%' style={{borderRadius : '15px'}}
                src={item.strMealThumb}
              ></img>
  
            </div>
            </Link>
          ))}
        </Slider>
      </div>
    }
    </>
  );
}

export default TrendingSlider;
