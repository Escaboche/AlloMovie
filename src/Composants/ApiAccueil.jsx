import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AcceuilCards from './AcceuilCards';

 const ApiAccueil = () => {
    const [results , setResults] = useState([]);
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        setIsLoad(false);

        axios.get(`https://api.themoviedb.org/3/movie/671/recommendations?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`)
        
        .then((res) => {
            setResults(res.data.results);
            console.log(res)
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
                                <AcceuilCards movie={movie}/>
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


    
    



