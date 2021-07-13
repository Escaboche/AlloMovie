import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Cards = ({movie}) => {
    return (
        
        <div className='resultCard'>
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {movie.title}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {movie.poster_path ? ( 
                            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title} Poster`}/>
                            )
                            
                             :

                            <div className='fillerPoster'></div>
                
                            } 
                    </Typography>
                </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">Details</Button>
                        <Button size="small" >Favoris</Button>
                    </CardActions>
            </Card>
            
        </div>
    )
}

export default Cards




