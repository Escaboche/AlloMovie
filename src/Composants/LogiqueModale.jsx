import {useState} from 'react';

const LogiqueModale = () => {
    const [visible, changeVisible] = useState(false);

    const toggle = () => {
        changeVisible(!visible)
        
    }
    
    return (
        visible,
        toggle
            
        
    )
}

export default LogiqueModale
