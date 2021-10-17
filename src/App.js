import './App.css';

import {
  Switch,
  BrowserRouter as Router,
  Route
} from "react-router-dom";


// Rutas privadas
import Profile from "./components/User/Profile";

// Rutas de autenticación
import Signup from "./components/User/Signup";
import Login from "./components/User/Login";

// Rutas públicas
import Home from './components/Home';
import Buy from "./components/Purchase/Buy";
import Rent from "./components/Purchase/Rent";
import ListEquipment from "./components/Equipment/ListEquipment";
import DetailsEquipment from "./components/Equipment/DetailsEquipment";


function App() {
  return (
    <>
      <Router>
        <Switch>

          {/* RUTAS PRIVADAS */}
          <Route exact path="/perfil" component={Profile} />
          <Route exact path="/form-compra" component={Buy} />
          <Route exact path="/form-renta" component={Rent} />


          {/* RUTAS DE AUTENTICACIÓN */}
          <Route exact path="/iniciar-sesion" component={Login} />
          <Route exact path="/crear-cuenta" component={Signup} />

          {/* RUTAS PUBLICAS */}
          <Route exact path="/" component={Home} />
          <Route exact path="/lista-equipos" component={ListEquipment} />
          <Route exact path="/detalles-equipo/:idEquipo" component={DetailsEquipment} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
