import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ExpenseEntryItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], checkdelete: false };
    this.deleteItem = this.deleteItem.bind(this);

    // console.log(this.props.match);
  }
  componentDidMount() {
    axios
      .get("https://62055a81161670001741b9aa.mockapi.io/hotel")
      .then((response) => {
        this.setState({ items: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteItem(e) {
    console.log(e.target.id);
    // alert(e.target.innerHTML);

    const idHotel = e.target.id;

    axios
      .delete("https://62055a81161670001741b9aa.mockapi.io/hotel/" + idHotel)
      .then((response) => {
        console.log(response);
        let itemsUpadte = this.state.items.filter(function (item) {
          return item.id != idHotel;
        });

        this.state.items = itemsUpadte;

        // console.log(itemsUpadte);

        if (response.status == 200) {
          this.state.checkdelete = true;
          this.setState(this.state);
        }

        console.log(this.state.checkdelete);
      })
      .catch(function (error) {
        console.log(error);
      });
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
        <td>{item.nom}</td>
        <td>{item.adresse}</td>
        <td>{item.telephone}</td>
        <td>
          <Link to={"/edit/" + item.id} className="btn btn-primary">
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
        <h3 align="center">Liste des hôtels </h3>
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
              <th>Nom</th>
              <th>Adresse</th>
              <th>Telephone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.lists}</tbody>
        </table>
      </div>
    );
  }
}
export default ExpenseEntryItemList;
