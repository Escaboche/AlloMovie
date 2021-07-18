import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Cards from "./Cards";

const Movie = (props) => {
  const [isLoad] = useState(true);

  return (
    <>
      {isLoad ? (
        <>
          <div>
            {props.results.length > 0 && (
              <ul className="resultsul">
                {props.results.map((movie) => (
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

export default Movie;
