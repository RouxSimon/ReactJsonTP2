import React from "react";
import { Link } from "react-router-dom";

// var data = require("./chambre.json");
// localStorage.setItem("chambre.json", JSON.stringify(data));

class ChambreList extends React.Component {
  constructor(props2) {
    super(props2);
    this.state = { items: [], checkdelete: false };
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    let myLocalStorage = localStorage.getItem("chambre.json");
    if (myLocalStorage !== null) {
      this.setState({ items: JSON.parse(myLocalStorage) });
    }
  }

  deleteItem(e) {
    const idChambre = e.target.id;

    let itemsUpdate = this.state.items.filter(function (item) {
      return item.id != idChambre;
    });

    this.state.items = itemsUpdate;

    try {
      this.setState(this.state);
      this.state.checkdelete = true;
      localStorage.setItem("chambre.json", JSON.stringify(this.state.items));
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    let divAlert = "";

    if (this.state.checkdelete) {
      divAlert = (
        <div className="alert alert-success" role="alert">
          L'enregistrement a été éffectué avec succés.
        </div>
      );
    }
    this.lists = this.state.items.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.numero}</td>
        <td>{item.telephone}</td>
        <td>
          <Link to={"/chambreEdit/" + item.id} className="btn btn-primary">
            Editer
          </Link>
          <button
            className="btn btn-danger"
            id={item.id}
            onClick={this.deleteItem}
          >
            Supprimer
          </button>
        </td>
      </tr>
    ));
    return (
      <div align="center">
        <h3 align="center">Liste des chambres </h3>
        {divAlert}
        <table
          border="1"
          style={{
            marginLeft: "20%",
            textAlign: "center"
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  width: "5%"
                }}
              >
                ID
              </th>
              <td>Numero</td>
              <td>Telephone</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>{this.lists}</tbody>
        </table>
      </div>
    );
  }
}
export default ChambreList;
