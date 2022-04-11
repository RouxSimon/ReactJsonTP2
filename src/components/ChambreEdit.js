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
        numero: "",
        telephone: ""
      },
      checkForm: false
    };

    this.handlenumeroChange = this.handlenumeroChange.bind(this);
    this.handletelephoneChange = this.handletelephoneChange.bind(this);
    console.log(this.props.match.params.id);
    console.log(this.props.match);
  }

  componentDidMount() {
    axios
      .get(
        "https://62055a81161670001741b9aa.mockapi.io/chambre/" +
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

    axios
      .put(
        "https://62055a81161670001741b9aa.mockapi.io/chambre/" +
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
