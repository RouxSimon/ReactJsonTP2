import React from "react";
import axios from "axios";

class ReservationAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: "",
        numeroReservation: "",
        dateReservation: "",
        dateDebut: "",
        dateFin: "",
        montant: ""
      },
      checkForm: false
    };
    this.handlenumeroReservationChange = this.handlenumeroReservationChange.bind(
      this
    );
    this.handledateReservationChange = this.handledateReservationChange.bind(
      this
    );
    this.handledateDebutChange = this.handledateDebutChange.bind(this);
    this.handledateFinChange = this.handledateFinChange.bind(this);
    this.handlemontantChange = this.handlemontantChange.bind(this);
  }

  handlenumeroReservationChange(e) {
    this.state.item.numeroReservation = e.target.value;
    this.setState(this.state.item);
  }
  handledateReservationChange(e) {
    this.state.item.dateReservation = e.target.value;
    this.setState(this.state.item);
  }
  handledateDebutChange(e) {
    this.state.item.dateDebut = e.target.value;
    this.setState(this.state.item);
  }
  handledateFinChange(e) {
    this.state.item.dateFin = e.target.value;
    this.setState(this.state.item);
  }
  handlemontantChange(e) {
    this.state.item.montant = e.target.value;
    this.setState(this.state.item);
  }

  onSubmit = (e) => {
    e.preventDefault();
    // alert(JSON.stringify(this.state.item));

    this.state.item.datedereservation = e.target.value;

    axios
      .post(
        "https://62055a81161670001741b9aa.mockapi.io/reservation",
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
          <h3>Ajouter une Reservation</h3>
        </div>
        <form onSubmit={(e) => this.onSubmit(e)}>
          {divAlert}
          <div className="form-group">
            <label>Numéro de réservation</label>
            <input
              type="number"
              id="numeroReservation"
              name="numeroReservation"
              placeholder="Entrer un numero de reservation"
              value={this.state.item.numeroReservation}
              onChange={this.handlenumeroReservationChange}
            />
          </div>

          <div className="form-group">
            <label>date de réservation</label>
            <input
              type="date"
              id="dateReservation"
              name="dateReservation"
              placeholder="Entrer une date de réservation"
              value={this.state.item.dateReservation}
              onChange={this.handledateReservationChange}
            />
          </div>

          <div className="form-group">
            <label>Date de début</label>
            <input
              type="date"
              id="dateDebut"
              name="dateDebut"
              placeholder="Entrer une date de début"
              value={this.state.item.dateDebut}
              onChange={this.handledateDebutChange}
            />
          </div>

          <div className="form-group">
            <label>Date de fin</label>
            <input
              type="date"
              id="dateFin"
              name="dateFin"
              placeholder="Entrer une date de fin"
              value={this.state.item.dateFin}
              onChange={this.handledateFinChange}
            />
          </div>

          <div className="form-group">
            <label>montant</label>
            <input
              type="number"
              id="montant"
              name="montant"
              placeholder="Entrer un montant"
              value={this.state.item.montant}
              onChange={this.handlemontantChange}
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
export default ReservationAdd;
