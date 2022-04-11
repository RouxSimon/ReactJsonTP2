import React from "react";
import axios from "axios";

class ClientAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: "",
        numero: "",
        telephone: ""
      },
      checkForm: false
    };
    this.handlenumeroChange = this.handlenumeroChange.bind(this);
    this.handletelephoneChange = this.handletelephoneChange.bind(this);
  }

  handlenumeroChange(e) {
    this.state.item.numero = e.target.value;
    this.setState(this.state.item);
  }
  handletelephoneChange(e) {
    this.state.item.telephone = e.target.value;
    this.setState(this.state.item);
  }

  onSubmit = (e) => {
    e.preventDefault();
    // alert(JSON.stringify(this.state.item));

    this.state.item.telephone = e.target.value;

    axios
      .post(
        "https://62055a81161670001741b9aa.mockapi.io/chambre",
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
          <h3>Ajouter un Client</h3>
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
              value={this.state.item.numero}
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
export default ClientAdd;
