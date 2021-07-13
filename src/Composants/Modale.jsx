import React from 'react';
import '../App.css';

 const Modale = ({visible, cache}) => visible ? (

    <React.Fragment>
        <div className="overlay"/>

        <div className="wrapper">
            <div className="modale">
                
                <button type="button" className="fermer" onClick={cache}>
                    <span>X</span>
                </button>

                <p>
                    Bonjour je suis une modale 
                </p>
            </div>
            
        </div>
    </React.Fragment>

) : null;

export default Modale;    

    



