import React from "react";

//Images
import Logo from '../images/logo_small.png';
import Eventite from '../images/eventite.png';
import EveryBank from '../images/everybank.png';
import Popcorner from '../images/popcorner.png';
import Puparazzi from '../images/puparazzi.png';

import ContactPhoto from '../images/contact.jpeg';


const Home = () =>{
  return(
    <div>
        <div style={styles.logoContainer}>
            <img style={styles.logo} src={Logo} alt="logo"></img>
        </div>
        <div style={styles.container} id="about">
            <h1 style={styles.title}>About Me</h1>
            <p style={styles.about}>As a web developer, I began at Full Sail University where I studied HTML, CSS, JavaScript, Node.js, React, Express.js, C#, and SQL. Combining my technical expertise with a strong understanding of user experience, I process a holistic approach to web development that focuses on both aesthetics and functionality.</p>
            <p style={styles.about}>I have successfully designed and implemented various websites and web applications, utilizing my expertise in HTML, CSS, JavaScript, and responsive design principles in my time at Full Sail University. I have a proven record of accomplishment of collaborating with cross-functional teams to deliver high-quality projects on time and within budget. Additionally, my strong problem-solving skills and attention to detail have allowed me to identify and resolve complex technical issues efficiently. I believe in my technical skills, creativity, and ability to adapt to innovative technologies to accomplish any task given to me.</p>
        </div>
        <div style={styles.container} id="skills">
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
            <h1 style={styles.title} id="projects">Projects</h1>
            <div style={styles.projectSection}>
                <div style={styles.project}>
                    <h2>Eventite</h2>
                    <img style={styles.projectImg} src={Eventite} alt="eventite"></img>
                    <p style={styles.projectInfo}>Eventite was created using React and connecting APIs to get information about events and add images that a user could use to openly display an event they were wanting to share.</p>
                    <a href="https://github.com/PiotrowskiBrittany-FS/Piotrowski_Brittany_PRW/tree/dev" style={styles.github}>GitHub</a>
                </div>
            </div>
            <div style={styles.projectSection}>
                <div style={styles.project}>
                    <h2>EveryBank</h2>
                    <img style={styles.projectImg} src={EveryBank} alt="every bank"></img>
                    <p style={styles.projectInfo}>Every Bank was created from scratch by using React and CSS. This application allows for users to add their bank account information from anywhere and give the application a name for the account. Users can also keep track of their credit cards and see a recommended payment to increase their credit score and credit limit.</p>
                    <a href="https://github.com/ePortfolios/wdd463-2305-PiotrowskiBrittany-FS/tree/production" style={styles.github}>GitHub</a>
                </div>
            </div>
            <div style={styles.projectSection}>
                <div style={styles.project}>
                    <h2>Popcorner</h2>
                    <img style={styles.projectImg} src={Popcorner} alt="popcorner"></img>
                    <p style={styles.projectInfo}>Popcorner was build from scratch using React and connecting an API database called Movie DB. The application allows users to go from one page to another to find the latest movies, most popular movies and allows users to search for movies within the database.</p>
                    <a href="https://github.com/PiotrowskiBrittany-FS/WD5" style={styles.github}>GitHub</a>
                </div>
            </div>
            <div style={styles.projectSection}>
                <div style={styles.project}>
                    <h2>Puparazzi</h2>
                    <img style={styles.projectImg} src={Puparazzi} alt="puparazzi"></img>
                    <p style={styles.projectInfo}>Puparazzi was created from scratch using JavaScript, HTML, and CSS. The application allows users to post images to a social media for dog lovers. Users can also shop on an online store and view products and services in their area.</p>
                    <a href="https://github.com/PiotrowskiBrittany-FS/ProjectPortfolio3" style={styles.github}>GitHub</a>
                </div>
            </div>
        </div>
        <div style={styles.container} id="contact">
            <h1 style={styles.title}>Contact Me</h1>
            <div style={styles.contactContainer}>
                <img style={styles.contactImg} src={ContactPhoto} alt="contact "></img>
                <div style={styles.contact}>
                    <p style={styles.contactInfo}>Phone: 404.307.0208</p>
                    <p style={styles.contactInfo}>Email me @ piotrowskideveloper@gmail.com</p>
                    <p style={styles.contactInfo}><a href="www.linkedin.com/in/brittany-piotrowski-ab80b815b" style={styles.linkedIn}>Message me on LinkedIn</a></p>
                </div>
                
            </div>
            

        </div>
        <div style={styles.container} id="resume">
            <a href="www.linkedin.com/in/brittany-piotrowski-ab80b815b" style={styles.resume}><h1 style={styles.title}>Click here to see my Resume</h1></a>
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
        justifyContent: 'space-around',
        flexWrap: 'wrap'
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
        width: '50%',
        textAlign: 'center',
        height: '1rem'
    },
    projectSection: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingBottom: '2.5rem',
        marginBottom: '2.5rem'
    },
    project: {
        padding: '1rem',
        textAlign: 'center',
    },
    projectImg: {
        width: '75%',
        height: '60%',
    },
    projectnfo: {
        paddingLeft: '2rem',
        paddingRight: '2rem'
    },
    github: {
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
        margin: '1.25rem',
        textAlign: 'center',
        fontSize: '12px',
        textDecoration: 'none',
        cursor: 'pointer'
    },
    contactContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    contactImg: {
        width: '25%',
        height: '10%',
        textAlign: 'center',
        justifyContent: 'center',
        padding: '1rem'
    },
    contactInfo: {
        padding: '1rem'
    },
    contact: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    linkedIn: {
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
        textAlign: 'center',
        fontSize: '12px',
        textDecoration: 'none',
        cursor: 'pointer'
    },
    resume: {
        textDecoration: 'none'
    }
}