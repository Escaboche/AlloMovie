import React, { useState } from "react";
import axios from "axios";
import SearchAreea from "./SearchAreea";
import Movie from "./Movie";
import Paginate from "./Paginate";

export const SearchBar = () => {

  const [results, setResults] = useState([]);
  const [, setIsLoad] = useState(true);
  const [search, setSearch] = useState("");

  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const Submit = (e) => {
    setIsLoad(false);
    e.preventDefault();

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&
        language=fr-FR&query=${search}&include_adult=false`
      )

      .then((res) => {
        
        setResults(res.data.results);
        setTotalResults(res.data.total_results);
        setIsLoad(true);
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const nextPage = (pageNumber) => {
    setIsLoad(false);

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie/?api_key=${process.env.REACT_APP_KEY}&language=fr-FR&query=${search}&page=${pageNumber}`
      )

      .then((res) => {
        setResults(res.data.results);
        setCurrentPage(pageNumber);
        setIsLoad(true);
      })
      .catch((err) => console.log(err));
  };


  const numberOfPages = Math.floor(totalResults / 20);

  return (
    <>
      <SearchAreea submit={Submit} change={handleChange} />
      <Movie results={results} totalResults={totalResults} />

      {totalResults > 20 ? (
        <Paginate
          numberOfPages={numberOfPages}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      ) : (
        ""
      )}
      <Paginate />
    </>
  );
};
