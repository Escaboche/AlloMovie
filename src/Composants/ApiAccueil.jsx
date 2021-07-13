import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Cards from './Cards';

 const ApiAccueil = () => {
    const [results , setResults] = useState([]);
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        setIsLoad(false);

        axios.get(`https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`)
        
        .then((res) => {
            setResults(res.data.results);
            setIsLoad(true);
            
            
        })
    },[])
   


    return (
        <>
        
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
                Chargement ...
            </h1>
        </>
        }


        
         </>             
           
            
        
    )
}


export default ApiAccueil;


    
    



