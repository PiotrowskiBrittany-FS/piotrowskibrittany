import React from "react";

//Images
import Logo from '../images/logo_small.png';
import Eventite from '../images/eventite.png';
import EveryBank from '../images/everybank.png';
import Popcorner from '../images/popcorner.png';
import Puparazzi from '../images/puparazzi.png';
import StriveSimple from '../images/strivesimple.png';
import TaskManager from '../images/taskmanager.png';


const Home = () =>{
  return(
    <div>
        <div style={styles.logoContainer}>
            <img style={styles.logo} src={Logo} alt="logo"></img>
        </div>
        <div style={styles.container}>
            <h1 style={styles.title}>About Me</h1>
            <p style={styles.about}>My journey in web development began at Full Sail University where I studied HTML, CSS, JavaScript, Node.js, React, Express.js, C#, and SQL. Combining my technical expertise with a strong understanding of user experience, I process a holistic approach to web development that focuses on both aesthetics and functionality.</p>
        </div>
        <div style={styles.container}>
            <h1 style={styles.title}>Skills</h1>
            <div style={styles.skillsContainer}>
                <p style={styles.skills}>HTML</p>
                <p style={styles.skills}>CSS</p>
                <p style={styles.skills}>JavaScript</p>
            </div>
            <div style={styles.skillsContainer}>
                <p style={styles.skills}>React</p>
                <p style={styles.skills}>C#</p>
                <p style={styles.skills}>Express.js</p>
            </div>
            <div style={styles.skillsContainer}>
                <p style={styles.skills}>Node.js</p>
                <p style={styles.skills}>SQL</p>
                <p style={styles.skills}>MongoDB</p>
            </div>
        </div>
        <div style={styles.container}>
            <h1 style={styles.title}>Projects</h1>
            <div style={styles.projectSection}>
                <div style={styles.project}>
                    <h2>Project Name</h2>
                    <img style={styles.projectImg} src={Eventite} alt="eventite"></img>
                    <p>Snippet of Project</p><button>More Info</button>
                    <button>GitHub</button>
                </div>
                <div style={styles.project}>
                    <h2>Project Name</h2>
                    <img style={styles.projectImg} src={EveryBank} alt="every bank"></img>
                    <p>Snippet of Project</p><button>More Info</button>
                    <button>GitHub</button>
                </div>
            </div>
            <div style={styles.projectSection}>
                <div style={styles.project}>
                    <h2>Project Name</h2>
                    <img style={styles.projectImg} src={Popcorner} alt="popcorner"></img>
                    <p>Snippet of Project</p><button>More Info</button>
                    <button>GitHub</button>
                </div>
                <div style={styles.project}>
                    <h2>Project Name</h2>
                    <img style={styles.projectImg} src={Puparazzi} alt="puparazzi"></img>
                    <p>Snippet of Project</p><button>More Info</button>
                    <button>GitHub</button>
                </div>
            </div>
            <div style={styles.projectSection}>
                <div style={styles.project}>
                    <h2>Project Name</h2>
                    <img style={styles.projectImg} src={StriveSimple} alt="strive simple"></img>
                    <p>Snippet of Project</p><button>More Info</button>
                    <button>GitHub</button>
                </div>
                <div style={styles.project}>
                    <h2>Project Name</h2>
                    <img style={styles.projectImg} src={TaskManager} alt="task manager"></img>
                    <p>Snippet of Project</p><button>More Info</button>
                    <button>GitHub</button>
                </div>
            </div>
        </div>
              
    </div>
  )
}

export default Home;

const styles ={
    container: {
        margin: 'auto',
        padding: '1.5rem',
        width: '50%',
        marginBottom: '2rem',
        color: '#C4D1D2',
        borderStyle: 'solid',
        borderWidth: '0.25rem',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '1rem',
        paddingBottom: '1rem',
        color: '#008080'
    },
    logoContainer: {
        margin: 'auto',
        padding: '.5rem',
        width: '75%',
        display: 'flex',
        justifyContent: 'center'
    },
    logo:{
        fontSize: '16px',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: '#000',
        width: '50%',
        height: '50%'
    },
    skillsContainer: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    about: {
        padding: '1rem',
        
    },
    skills:{
        paddingTop: '0.50rem',
        paddingBottom: '0.50rem',
        paddingRight: '1.5rem',
        paddingLeft: '1.5rem',
        color: '#000',
        borderStyle: 'solid',
        borderWidth: '0px',
        borderRadius: '10px',
        boxShadow: "2px 2px 5px #071516",
        backgroundColor: '#C4D1D2',
        fontWeight: 'bold',
        marginBottom: '1rem',
        marginRight: '1rem',
        width: '5rem',
        textAlign: 'center',
        height: '1rem'
    },
    projectSection: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    project: {
        padding: '1rem',
    },
    projectImg: {
        width: '75%',
        height: '50%'
    }
}