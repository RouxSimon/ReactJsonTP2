import React from "react";
import axios from "axios";

class ClientAdd extends React.Component {
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
    this.handletelephoneChange = this.handletelephoneChange.bind(this);
    this.handleadresseChange = this.handleadresseChange.bind(this);
    this.handleprenomChange = this.handleprenomChange.bind(this);
    this.handlevilleChange = this.handlevilleChange.bind(this);
    this.handlecodePostaleChange = this.handlecodePostaleChange.bind(this);
    this.handlepaysChange = this.handlepaysChange.bind(this);
    this.handlemailChange = this.handlemailChange.bind(this);
  }

  handlenomChange(e) {
    this.state.item.nom = e.target.value;
    this.setState(this.state.item);
  }
  handletelephoneChange(e) {
    this.state.item.telephone = e.target.value;
    this.setState(this.state.item);
  }
  handleadresseChange(e) {
    this.state.item.adresse = e.target.value;
    this.setState(this.state.item);
  }
  handleprenomChange(e) {
    this.state.item.prenom = e.target.value;
    this.setState(this.state.item);
  }
  handlevilleChange(e) {
    this.state.item.ville = e.target.value;
    this.setState(this.state.item);
  }
  handlecodePostaleChange(e) {
    this.state.item.codePostale = e.target.value;
    this.setState(this.state.item);
  }
  handlepaysChange(e) {
    this.state.item.pays = e.target.value;
    this.setState(this.state.item);
  }
  handlemailChange(e) {
    this.state.item.mail = e.target.value;
    this.setState(this.state.item);
  }

  onSubmit = (e) => {
    e.preventDefault();
    // alert(JSON.stringify(this.state.item));

    this.state.item.telephone = e.target.value;

    axios
      .post(
        "https://62055a81161670001741b9aa.mockapi.io/client",
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
              Nom
            </label>
            <input
              type="string"
              id="nom"
              name="nom"
              placeholder="Nom de l'hotel"
              value={this.state.item.nom}
              onChange={this.handlenomChange}
            />
          </div>

          <div className="form-group">
            <label>Prenom</label>
            <input
              type="string"
              id="prenom"
              name="prenom"
              placeholder="Entrer un prenom"
              value={this.state.item.prenom}
              onChange={this.handleprenomChange}
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
            <label>Adresse</label>
            <input
              type="string"
              id="adresse"
              name="adresse"
              placeholder="Entrer une adresse"
              value={this.state.item.adresse}
              onChange={this.handleadresseChange}
            />
          </div>

          <div className="form-group">
            <label>Ville</label>
            <input
              type="string"
              id="ville"
              name="ville"
              placeholder="Entrer un ville"
              value={this.state.item.ville}
              onChange={this.handlevilleChange}
            />
          </div>

          <div className="form-group">
            <label>Code Postale</label>
            <input
              type="number"
              id="codePostale"
              name="codePostale"
              placeholder="Entrer un code Postale"
              value={this.state.item.codePostale}
              onChange={this.handlecodePostaleChange}
            />
          </div>

          <div className="form-group">
            <label>Pays</label>
            <input
              type="string"
              id="pays"
              name="pays"
              placeholder="Entrer un pays"
              value={this.state.item.pays}
              onChange={this.handlepaysChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="string"
              id="mail"
              name="mail"
              placeholder="Entrer un mail"
              value={this.state.item.mail}
              onChange={this.handlemailChange}
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
