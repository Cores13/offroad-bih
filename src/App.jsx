import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
    <div className="App">
    <Navbar />

      <div className="thumbnail">
          <h1 className="thumbnail-title">PRVI OFF ROAD KLUB U BOSNI I HERCEGOVINI</h1>
      </div>

      <div className="d-flex flex-column main">
          <div className="d-flex flex-column col-9 m-auto mb-4">

              <h1 className="small-title">Nezaboravna iskustva, puno zabave i adrenalina</h1>
              <hr style={{background: "#F5A30F"}} />

              <div className="infom">
                  <p>Kontaktirajte nas putem telefona</p>
                  <p style={{color: "#F5A30F", fontSize: "25px"}}>+387 63 886 467</p>
              </div>

              <div className="infom">
                  <p>Kontaktirajte nas putem email-a</p>
                  <p style={{color: "#F5A30F", fontSize: "25px"}}>info@offroad.ba</p>
              </div>

        </div>
      </div>

      <div className="container2 d-flex flex-row thumbnail-2">
          <h1 className="small-title text-center m-auto">It’s not the destination, it's the journey.</h1>
      </div>
      
    <Footer />
    </div>
    </>
  );
}

export default App;
