import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ExpenseEntryItemList from "./components/ExpenseEntryItemList";
import ExpenseEntryItemAdd from "./components/ExpenseEntryItemAdd";
import ExpenseEntryItemEdit from "./components/ExpenseEntryItemEdit";
import ClientList from "./components/ClientList";
import ClientEdit from "./components/ClientEdit";
import ClientAdd from "./components/ClientAdd";
import ReservationList from "./components/ReservationList";
import ReservationEdit from "./components/ReservationEdit";
import ReservationAdd from "./components/ReservationAdd";
import ChambreList from "./components/ChambreList";
import ChambreEdit from "./components/ChambreEdit";
import ChambreAdd from "./components/ChambreAdd";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              Mes hôtels
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/index"} className="nav-link">
                    Liste des hôtels
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/client"} className="nav-link">
                    Liste des clients
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/ReservationList"} className="nav-link">
                    Listes des reservations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/ChambreList"} className="nav-link">
                    Listes des chambres
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/create"} className="nav-link">
                    Ajouter un hôtel
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/clientAdd"} className="nav-link">
                    Ajouter un client
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/ReservationAdd"} className="nav-link">
                    Ajouter une reservation
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/ChambreAdd"} className="nav-link">
                    Ajouter une chambre
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Switch>
          <Route exact path="/create" component={ExpenseEntryItemAdd} />
          <Route path="/edit/:id" component={ExpenseEntryItemEdit} />
          <Route path="/index" component={ExpenseEntryItemList} />
          <Route path="/client" component={ClientList} />
          <Route path="/clientEdit/:id" component={ClientEdit} />
          <Route path="/clientAdd" component={ClientAdd} />
          <Route path="/ReservationAdd" component={ReservationAdd} />
          <Route path="/ReservationList" component={ReservationList} />
          <Route path="/ReservationEdit/:id" component={ReservationEdit} />
          <Route path="/ChambreAdd" component={ChambreAdd} />
          <Route path="/ChambreList" component={ChambreList} />
          <Route path="/ChambreEdit/:id" component={ChambreEdit} />
          <Route path="/" component={ExpenseEntryItemList} />
        </Switch>
      </Router>
    );
  }
}
export default App;
