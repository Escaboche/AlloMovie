import React, {useState , useEffect} from 'react';
import axios from 'axios';
import Cards from './Cards';
import {Formik , Form, Field} from 'formik/dist/index';
import Button from '@material-ui/core/Button';



export const SearchBar = () => {
    const [query , setQuery] = useState(''); 
    const [results , setResults] = useState([]); 
    const [isLoad , setIsLoad] = useState(true);
    const [initialValues] = useState({search : ''});
    
    const Submit = (values) => {
        setIsLoad(false);
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7db9d91174d2436ccb6e7d2eeaefafeb&
        language=fr-FR&page=1&query=${values.search}&include_adult=false`)
        
        .then((res) => {
            setResults(res.data.results);
            setIsLoad(true);
            
        })
    }

    return (
        <>

        <Formik onSubmit={Submit} initialValues={initialValues}>
            <Form>
                <Field  type="text" name="search" placeholder="Rechercher des films"/>
                <Button type="submit" variant="outlined" color="primary">Rechercher</Button>  
            </Form>
        </Formik> 
        
        {isLoad ? 

        <>

        <div>
                {results.length > 0 && (
                    <ul className="results">
                        {results.map((movie) => (
                            <li key={movie.id}>
                                <Cards movie={movie}/>
                            </li>
                        ))}
                    </ul>
                        
                )}
        </div>
        </>

        : 
        
        <>
            <h1>
                Loading...
            </h1>
        </>
        }


        
         </>             
           
            
        
    )
}


