import { useState, useEffect } from "react";
import Title from "../styles/Title.jsx";
import Card from "../styles/Card.jsx";
import Gradient from "../styles/Gradient.jsx";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import FavButton from "./FavButton.jsx";

function RecentlyViewed() {
  const [recent, setRecent] = useState([]);
  const [splidePage, setSplidePage] = useState(4);

  const updateSplidePage = () => {
    if (window.innerWidth < 621) {
      setSplidePage(1);
    } else if (window.innerWidth < 980) {
      setSplidePage(2);
    } else if (window.innerWidth < 1290) {
      setSplidePage(3);
    } else {
      setSplidePage(4);
    }
  };

  const getRecent = () => {
    const check = JSON.parse(localStorage.getItem("recent"));

    if (check) {
      setRecent(check);
    }
  };

  useEffect(() => {
    getRecent();
    updateSplidePage();

    window.addEventListener("resize", updateSplidePage);

    return () => {
      window.removeEventListener("resize", updateSplidePage);
    };
  }, []);

  return (
    <div>
      {recent.length > 0 ? (
        <>
          <Title>Recently viewed</Title>
          <Splide
            options={{
              perPage: splidePage,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "3rem",
            }}
          >
            {recent.map((recent) => {
              return (
                <SplideSlide key={recent.id}>
                  <Link to={"/recipe/" + recent.id}>
                    <Card>
                      <p>{recent.title}</p>
                      <img src={recent.image} alt={recent.title} />
                      <Gradient />
                    </Card>
                  </Link>
                  <FavButton item={recent} id={recent.id} name={"slide"} />
                </SplideSlide>
              );
            })}
          </Splide>
        </>
      ) : (
        <>
          <Title>Recently viewed</Title>
          <div className="favSlideError">No items viewed </div>
        </>
      )}
    </div>
  );
}

export default RecentlyViewed;
