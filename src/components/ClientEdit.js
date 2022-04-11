import React from "react";
import axios from "axios";
//import { Redirect } from "react-router-dom";
// <Redirect to="/index" />

class ClientEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: "",
        nom: "",
        prenom: "",
        adresse: "",
        ville: "",
        pays: "",
        codePostale: "",
        mail: "",
        telephone: ""
      },
      checkForm: false
    };

    this.handlenomChange = this.handlenomChange.bind(this);
    this.handleadresseChange = this.handleadresseChange.bind(this);
    this.handletelephoneChange = this.handletelephoneChange.bind(this);
    console.log(this.props.match.params.id);
    console.log(this.props.match);
  }

  componentDidMount() {
    axios
      .get(
        "https://62055a81161670001741b9aa.mockapi.io/client/" +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({ item: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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

    axios
      .put(
        "https://62055a81161670001741b9aa.mockapi.io/client/" +
          this.state.item.id,
        this.state.item
      )
      .then((response) => {
        console.log(response);
        // this.setState({ items: response.data });
        if (response.status == 200) {
          this.state.checkForm = true;
          this.setState(this.state);
        }

        console.log(this.state.checkForm);
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
          La mise à jour a été éffectué avec succés
        </div>
      );
    }

    return (
      <div id="container">
        <div>
          <h3>Modifier un client</h3>
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
            <label>Prenom</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              placeholder="Enter un prenom"
              value={this.state.item.prenom}
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
              onChange={this.handleprenomChange}
            />
          </div>

          <div className="form-group">
            <label>Ville</label>
            <input
              type="text"
              id="ville"
              name="ville"
              placeholder="Enter une ville"
              value={this.state.item.ville}
              onChange={this.handlevilleChange}
            />
          </div>

          <div className="form-group">
            <label>Pays</label>
            <input
              type="text"
              id="pays"
              name="pays"
              placeholder="Enterun pays"
              value={this.state.item.pays}
              onChange={this.handlepaysChange}
            />
          </div>

          <div className="form-group">
            <label>Code postale</label>
            <input
              type="number"
              id="codePostale"
              name="codePostale"
              placeholder="Enter un CP"
              value={this.state.item.codePostale}
              onChange={this.handlecodePostaleChange}
            />
          </div>

          <div className="form-group">
            <label>Mail</label>
            <input
              type="text"
              id="mail"
              name="mail"
              placeholder="Enter un mail"
              value={this.state.item.mail}
              onChange={this.handlemailChange}
            />
          </div>

          <div className="form-group">
            <label>Telephone</label>
            <input
              type="number"
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
export default ClientEdit;
