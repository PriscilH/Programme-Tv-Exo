import Logo from './assets/logo-m6.png';
import './App.css';
// Import du fichier JSON
import ProgramList from './assets/programme.json';


function App () {
  return (
    <div className="App">
      <header><img className="logo" src={Logo} /> <h1>M6</h1></header>
      {/* .map() sur le tableau ProgramList (JSON) */}
        {ProgramList.map((element, index) => {
        return (
           // Pour chaque élément du tableau ProgramList, on retourne un composant Section 
           // on passe en props au composant Section : category -> item.category et images -> item.images
           <section>
           <p className="time">{element.time}</p>
              <img src={element.image} alt="thumbnail" />
              <div className="details">
                <h2>{element.title}</h2>
                <p>{element.type}</p>
                <div className="duration">
                  <p>{element.duration}</p>
                  {element.direct === true && <li>Direct</li>}
                  {element.isUnseen === true && <li>Inédit</li>}
                </div> 
              </div> 
           </section>  
        );
        })}
    </div>
  );
};

export default App;
