import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })

      //this.setState atualiza ou add apenas a propriedade selecionada (errorMessage ou lat);
    );
  }

  //helper function -
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
      //importou SeasonDisplay (o objetivo n eh mostrar a latitude, mas a estacao do ano)
      //e a prop "lat" do App component no SeasonDisplay
      //foi passada state do component pai e passada para o children como prop
    }
    return (
      <div>
        <Spinner message="Please accept location request" />!
      </div>
    );
    //erro comum: render () {return (<div>Latitude {asdsad}</div>;)} - colocar ";" depois da div
  }

  render() {
    return <div className="border-red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
