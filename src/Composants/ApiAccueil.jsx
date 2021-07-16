import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import "../App.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const ApiAccueil = () => {
  const [results, setResults] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  

  useEffect(() => {
    setIsLoad(false);

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_KEY}&language=fr-FR&page=1`
      )

      .then((res) => {
        setResults(res.data.results);
        setIsLoad(true);
      })
      .catch((err) => console.log(err));
  }, []);



  
  return (
    <>
      {isLoad ? (
        <>
          <div>
            <h1>Nos Recommandations</h1>

            {results.length > 0 && (
              <ul className="resultsul">
                {results.map((movie) => (
                  <li className="alphali" key={movie.id}>
                    <Cards movie={movie} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      ) : (
        <>
          <h1>
            <CircularProgress />
          </h1>
        </>
      )}
    </>
  );
};

export default ApiAccueil;
