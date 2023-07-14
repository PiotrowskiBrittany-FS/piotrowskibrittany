import React from "react";
import {Link} from 'react-router-dom';

const Navigation = ()=>{
    return(
        <div style={styles.container}>
            <div style={styles.buttons}>
                <Link style={styles.links} to="/About">About</Link>
                <Link style={styles.links} to="/About">Skills</Link>
                <Link style={styles.links} to="/About">Projects</Link>
                <Link style={styles.links} to="/About">Contact</Link>
                <Link style={styles.links} to="/About">Resume</Link>
            </div>
        </div>
    )
}
export default Navigation;

const styles ={
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    buttons:{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    links:{
        paddingTop: '0.50rem',
        paddingBottom: '0.50rem',
        paddingRight: '1.5rem',
        paddingLeft: '1.5rem',
        color: '#000',
        textDecoration: 'none',
        borderStyle: 'solid',
        borderWidth: '0px',
        borderRadius: '10px',
        cursor: 'pointer',
        boxShadow: "2px 2px 5px #071516",
        backgroundColor: '#C4D1D2',
        fontWeight: 'bold',
        marginBottom: '1rem',
        marginRight: '1rem',
        width: '7rem',
        textAlign: 'center',
        height: '1rem'
    },

}