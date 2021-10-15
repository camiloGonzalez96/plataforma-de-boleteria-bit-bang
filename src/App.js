import Home from "./components/pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Eventos from "./components/pages/Eventos";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import UserData from "./components/pages/UserData";
import Evento from "./components/pages/Evento";
import CrearEvento from "./components/admin/CrearEvento";
import EditarEvento from "./components/admin/EditarEvento";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/eventos" component={Eventos} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/user" component={UserData} />
          <Route path='/evento/:id' component={Evento}/>
          <Route path='/crear-evento' component={CrearEvento}/>
          <Route path='/editar-evento/:id' component={EditarEvento}/>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
