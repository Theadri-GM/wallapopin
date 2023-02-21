import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import PaginaPrincipal from './pages/PaginaPrincipal';
import PaginaLogin from './pages/PaginaLogin'
import PaginaRegistro from './pages/PaginaRegistro'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Redirect to="/PaginaPrincipal" />
        </Route>
        <Route exact path="/PaginaPrincipal">
          <PaginaPrincipal />
        </Route>
        <Route exact path="/PaginaLogin">
          <Redirect to="/PaginaLogin" />
            <PaginaLogin />
        </Route>
        <Route exact path="/PaginaRegistro">
          <Redirect to="/PaginaRegistro" />
            <PaginaRegistro />
        </Route>
        <Route exact path="/Home">
          <Redirect to="/Home" />
            <Home />
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
