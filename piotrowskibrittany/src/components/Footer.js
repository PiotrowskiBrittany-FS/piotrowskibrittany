import React from "react";
//import {Link} from 'react-router-dom';

const Footer = ()=>{
    return(
        <div style={styles.wrapper}>        
            <p style={styles.copyright}>Copyright &copy; Brittany Piotrowski</p>
        </div>
    )
}
export default Footer;

const styles ={
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        marginTop: '5rem'
    },
    copyright: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: 'auto',
        padding: '1rem',
        color: '#C4D1D2',
    }

}