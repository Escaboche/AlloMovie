import React, {useState} from "react";
import Button from "@material-ui/core/Button";

export const Favoris = ({ params }) => {

 
const [favoris, setFavoris] = useState(JSON.parse(localStorage.getItem('movieAdd')));




  const favorisConfirme = () => {
    //Ajouter une alerte de succés
  }

  const addFav = () => {
    
    

    //s'il y a des valeurs dans le local storage
    if (localStorage.getItem('movieAdd')) {
      favoris.push(params);
      localStorage.setItem('movieAdd', JSON.stringify(favoris));
      favorisConfirme();
    }
    //S'il n'y a pas de valeurs
    else {
      setFavoris = [];
      favoris.push(params);
      localStorage.setItem('movieAdd', JSON.stringify(favoris));
      
      favorisConfirme();
    }

   
  };

  return (
    <>
      <Button onClick={addFav} size="small">
        Favoris
      </Button>
    </>
  );
};

export default Favoris;


