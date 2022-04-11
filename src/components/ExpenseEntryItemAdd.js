import React from "react";
import axios from "axios";

class ExpenseEntryItemAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        nom: "",
        adresse: "",
        telephone: ""
      },
      checkForm: false
    };
    this.handlenomChange = this.handlenomChange.bind(this);
    this.handleadresseChange = this.handleadresseChange.bind(this);
    this.handletelephoneChange = this.handletelephoneChange.bind(this);
  }

  handlenomChange(e) {
    this.state.item.nom = e.target.value;
    this.setState(this.state.item);
  }
  handleadresseChange(e) {
    this.state.item.adresse = e.target.value;
    this.setState(this.state.item);
  }
  handletelephoneChange(e) {
    this.state.item.telephone = e.target.value;
    this.setState(this.state.item);
  }
  onSubmit = (e) => {
    e.preventDefault();
    // alert(JSON.stringify(this.state.item));

    this.state.item.telepone = e.target.value;

    axios
      .post(
        "https://62055a81161670001741b9aa.mockapi.io/hotel",
        this.state.item
      )
      .then((response) => {
        console.log(response);
        if (response.status == 201) {
          this.state.checkForm = true;
          this.setState(this.state);
        }

        console.log(this.state.checkForm);
        // this.setState({ items: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    let divAlert = "";

    if (this.state.checkForm) {
      divAlert = (
        <div className="alert alert-success" role="alert">
          L'enregistrement a été éffectué avec succés.
        </div>
      );
    }
    return (
      <div id="container">
        <div>
          <h3>Ajouter un hôtel</h3>
        </div>
        <form onSubmit={(e) => this.onSubmit(e)}>
          {divAlert}
          <div className="form-group">
            <label>Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              placeholder="Enter un nom"
              value={this.state.item.nom}
              onChange={this.handlenomChange}
            />
          </div>

          <div className="form-group">
            <label>Adresse</label>
            <input
              type="text"
              id="adresse"
              name="adresse"
              placeholder="Enter une adresse"
              value={this.state.item.adresse}
              onChange={this.handleadresseChange}
            />
          </div>

          <div className="form-group">
            <label>Telephone</label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              placeholder="Enter un telephone"
              value={this.state.item.telephone}
              onChange={this.handletelephoneChange}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Envoyer" />
          </div>
        </form>
      </div>
    );
  }
}
export default ExpenseEntryItemAdd;
