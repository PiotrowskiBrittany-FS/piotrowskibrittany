import React from "react";

const Navigation = ()=>{
    return(
        <div style={styles.container}>
            <div style={styles.buttons}>
                <a href="#about" style={styles.links}>About</a>
                <a href="#skills" style={styles.links}>Skills</a>
                <a href="#projects" style={styles.links}>Projects</a>
                <a href="#contact" style={styles.links}>Contact</a>
                <a href="www.linkedin.com/in/brittany-piotrowski-ab80b815b" style={styles.links}>Resume</a>
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