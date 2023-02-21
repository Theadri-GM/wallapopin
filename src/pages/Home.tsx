import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useEffect, useState } from 'react';
import { Pelicula } from '../pages/Pelicula';
import './Home.css';

const Home: React.FC = () => {

const url = "http://www.omdbapi.com/?apikey=92042319&s=Harry Potter";

const [peliculas, setPeliculas] = useState([]);
const [url_set, setUrl] = useState(url);
const [busqueda, setBusqueda] = useState(" "); // Y otro para la búsqueda que hacemos en la barra de búsqueda.

useEffect(() => {
  fetch(url_set).then(res=>res.json()).then(data=>{
    //console.log(data.Search);
    setPeliculas(data.Search);
})
  
}, [url_set])

 // Con esta función lo que hacemos es, que cada vez que se llame, si se pulsa enter, hará una nueva búsqueda poniendo la url gracias al setUrl añadiendole la busqeuda que hayamos realizado y
  // despues, la busqueda la pondremos vacía, para que al volver hacer otra búsqueda, no nos salga la anterior búsqueda.
  const busquedaPeliculas=(evt: { key: any; })=>{
    if(evt.key=="Enter")
    {
      setUrl("http://www.omdbapi.com/?apikey=92042319&s="+busqueda);
      setBusqueda(" ");
    }

  }

  return (
    <>
      <IonHeader translucent={true}>
            <div className='barraBusqueda'>
              <IonToolbar>
                <IonSearchbar animated={true} placeholder="Busca categoria" onIonChange={(e: any) => setBusqueda(e.target.value)} onKeyPress={busquedaPeliculas}></IonSearchbar>
                
              </IonToolbar>
            </div>
        </IonHeader>
        <IonContent fullscreen>
            <div className='contenedor'>
              {
              peliculas.map((res, pos) => {
                return( <Pelicula info={res} key={pos}/>
                )
              })
            }
            </div>
        </IonContent>
    </>
  );
};

export default Home;
