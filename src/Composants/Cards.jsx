import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Favoris from './Favoris';
import Typography from '@material-ui/core/Typography';
import  Modal  from 'react-modal';
import '../App.css';

Modal.setAppElement('#root')

const Cards = ({movie}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    
    return (
        
        <div className='allCard'>
            <Card style={{borderRadius: '10%'}}>
                <CardContent>
                    <Typography variant="h5" color="textPrimary" gutterBottom>
                        {movie.title}
                    </Typography>
                    <Typography component="h2">
                        {movie.poster_path ? ( 
                            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title} Poster`}/>
                            )
                            
                             :

                            <div className='fillerPoster'></div>
                
                            } 
                    </Typography>
                </CardContent>
                <hr/>
                    <CardActions>
                    <div>
                        <Button onClick={() => setModalIsOpen(true)}  className="button">Details</Button>
                        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                            <h2>{movie.title}</h2>
                            <h3>{movie.release_date}</h3>
                            {movie.poster_path ? ( 
                            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title} Poster`}/>
                            )
                            
                             :

                            <div className='fillerPoster'></div>
                
                            } 
                            <h3>{movie.overview}</h3>
                            <Button onClick={() => setModalIsOpen(false)}>Fermer</Button>
                        </Modal>
                    </div>
                        <Favoris params={movie}/>
                        
                    </CardActions>
            </Card>
            
        </div>
    )
}

export default Cards




