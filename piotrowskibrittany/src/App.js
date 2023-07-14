import React from 'react';
import { HashRouter as Routes, Route } from 'react-router-dom';

//Components
import Navigation from "./components/Navigation";
import Footer from './components/Footer';

//Routes
import Home from './pages/Home';

function App(){
  return(
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <Navigation />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Home" element={<Home />}/>
            
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}


export default App;


const styles = {
  container:{
    backgroundColor: '#071516',
    height: "100%",
    width: "100%"
  },
  wrapper: {
    padding: "2rem",
  },
}