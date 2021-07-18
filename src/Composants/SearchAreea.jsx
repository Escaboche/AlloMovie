import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const SearchAreea = (props) => {
    return (
        <div className="betaTest">
            <form onSubmit={props.submit}  noValidate autoComplete="on">
                <TextField id="standard-basic" label="Rechercher un film" onChange={props.change} />
                <Button type="submit" variant="outlined" color="primary">
                    Rechercher
                </Button>
            </form>
        </div>
    )
}

export default SearchAreea
