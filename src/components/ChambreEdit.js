import React from "react";

class ClientEdit extends React.Component {
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

  componentDidMount() {
    let chambres = JSON.parse(localStorage.getItem("chambre.json"));
    for (let i = 0; i < chambres.length; i++) {
      const chambre = chambres[i];
      if (chambre.id === parseInt(this.props.match.params.id, 10)) {
        this.setState({ item: chambre });
        break;
      }
    }
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

    let myLocalStorage2 =
      JSON.parse(localStorage.getItem("chambre.json")) || [];

    for (let i = 0; i < myLocalStorage2.length; i++) {
      const chambre = myLocalStorage2[i];
      if (chambre.id === parseInt(this.props.match.params.id, 10)) {
        this.state.checkForm = true;
        myLocalStorage2.splice(i, 1, this.state.item);
        break;
      }
    }
    this.setState(this.state);
    localStorage.setItem("chambre.json", JSON.stringify(myLocalStorage2));
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
          <h3>Modifier une chambre</h3>
        </div>

        <form onSubmit={(e) => this.onSubmit(e)}>
          {divAlert}
          <div className="form-group">
            <label>Numero</label>
            <input
              type="number"
              id="numero"
              name="numero"
              placeholder="Enter un numero"
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
