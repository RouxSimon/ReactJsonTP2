import React from "react";
import axios from "axios";

class ClientAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        id: "",
        numero: "",
        telephone: ""
      },
      checkForm: false
    };
    this.handlenumeroChange = this.handlenumeroChange.bind(this);
    this.handletelephoneChange = this.handletelephoneChange.bind(this);
  }

  componentDidMount() {
    this.state.items.id = Math.floor(Math.random() * 13098792);
  }

  handlenumeroChange(e) {
    this.state.items.numero = e.target.value;
    this.setState(this.state.items);
  }
  handletelephoneChange(e) {
    this.state.items.telephone = e.target.value;
    this.setState(this.state.items);
  }
  clear() {
    this.state.items.telephone = "";
    this.state.items.numero = "";
    this.state.items.id = Math.floor(Math.random() * 13098792);

    this.setState(this.state.items);
  }

  onSubmit = (e) => {
    e.preventDefault();
    // alert(JSON.stringify(this.state.items));
    let myLocalStorage2 =
      JSON.parse(localStorage.getItem("chambre.json")) || [];
    myLocalStorage2.push(this.state.items);

    localStorage.setItem("chambre.json", JSON.stringify(myLocalStorage2));

    this.clear();
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
          <h3>Ajouter une chambre</h3>
        </div>
        <form onSubmit={(e) => this.onSubmit(e)}>
          {divAlert}
          <div className="form-group">
            <label
              style={{
                marginRight: "2%"
              }}
            >
              Numéro de la chambre
            </label>
            <input
              type="number"
              id="numero"
              name="numero"
              placeholder="Numero de la chambre"
              value={this.state.items.numero}
              onChange={this.handlenumeroChange}
            />
          </div>

          <div className="form-group">
            <label>Telephone</label>
            <input
              type="number"
              id="telephone"
              name="telephone"
              placeholder="Entrer un telephone"
              value={this.state.items.telephone}
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
export default ClientAdd;
