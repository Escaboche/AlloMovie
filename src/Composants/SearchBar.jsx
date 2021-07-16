import React, { useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import { Formik, Form, Field } from "formik/dist/index";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paginate from './Paginate';

export const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [initialValues] = useState({ search: "" });

  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  

  const Submit = (values) => {
    setIsLoad(false);

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&
        language=fr-FR&query=${values.search}&include_adult=false`
      )

      .then((res) => {
        setResults(res.data.results);
        setTotalResults(res.data.total_results);
        setIsLoad(true);
      });
  };

  

  const nextPage = (pageNumber, values) => {
    setIsLoad(false);

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie/?api_key=${process.env.REACT_APP_KEY}&language=fr-FRquery=${values.search}&page=${pageNumber}&total_results=500&total_page=50`
      )

      .then((res) => {
        setResults(res.data.results);
        setCurrentPage(pageNumber);
        setIsLoad(true);
        
      })
      .catch((err) => console.log(err));
  };

  
  const numberOfPages = Math.floor(totalResults / 20)
  
  return (
    <>
      <Formik onSubmit={Submit} initialValues={initialValues}>
        <Form>
          <Field type="text" name="search" placeholder="Rechercher des films" />
          <Button type="submit" variant="outlined" color="primary">
            Rechercher
          </Button>
        </Form>
      </Formik>

      {isLoad ? (
        <>
          <div>
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
          {totalResults > 20 ? <Paginate  numberOfPages={numberOfPages} nextPage={nextPage} currentPage={currentPage} /> : 'React en bois ' }
                    
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
