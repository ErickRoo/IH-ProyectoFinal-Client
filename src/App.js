
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

// Contextos
import CartState from "./context/Cart/CartState";
import EquipState from "./context/Equipment/EquipState";
import UsersState from "./context/Users/UsersState";

//Middlewares de Routes
import AuthRoute from "./components/Routes/AuthRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";

const stripePromise = loadStripe("pk_test_51JlgnJCBdMx5CgSUp1z3MIGOwwzzYEmi1r19hx7O1HbhDSo5O2rIaULZTbjQfq4tKkpYK5o7RDSSizIM4m1NqrLu00PxAu5IJ3");

function App() {
  return (
    <>
      <Elements stripe={stripePromise}>
        <CartState>
          <EquipState>
            <UsersState>

              <Router>

                <Header />
                <Switch>

                  {/* RUTAS PRIVADAS */}
                  <PrivateRoute exact path="/perfil" component={Profile} />
                  <PrivateRoute exact path="/form-compra" component={Buy} />
                  <PrivateRoute exact path="/form-renta" component={Rent} />
                  <PrivateRoute exact path="/crear-equipos" component={CreateEquipment} />


                  {/* RUTAS DE AUTENTICACIÓN */}
                  <AuthRoute exact path="/iniciar-sesion" component={Login} />
                  <AuthRoute exact path="/crear-cuenta" component={Signup} />

                  {/* RUTAS PUBLICAS */}
                  <PublicRoute exact path="/" component={Home} />
                  <PublicRoute exact path="/lista-equipos" component={ListEquipment} />
                  <PublicRoute exact path="/detalles-equipo/:idEquipo" component={DetailsEquipment} />

                </Switch>
              </Router>

            </UsersState>
          </EquipState>
        </CartState>
      </Elements>
    </>
  );
}

export default App;
