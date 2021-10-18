
import {
  Switch,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


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
import Header from "./components/Layout/Header";
import CreateEquipment from "./components/Equipment/CreateEquipment";

import CartState from "./components/context/Cart/CartState";
import EquipState from "./components/context/Equipment/EquipState";

const stripePromise = loadStripe("pk_test_51JlgnJCBdMx5CgSUp1z3MIGOwwzzYEmi1r19hx7O1HbhDSo5O2rIaULZTbjQfq4tKkpYK5o7RDSSizIM4m1NqrLu00PxAu5IJ3");

function App() {
  return (
    <>
      <Elements stripe={stripePromise}>
        <CartState>
          <EquipState>

            <Router>

              <Header />
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
                <Route exact path="/crear-equipos" component={CreateEquipment} />
                <Route exact path="/detalles-equipo/:idEquipo" component={DetailsEquipment} />

              </Switch>
            </Router>

          </EquipState>
        </CartState>
      </Elements>
    </>
  );
}

export default App;
