import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TrainList from './components/TrainList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
      all: [{
        aimed_departure_time: '',
        destination_name: 'Loading...',
        platform: '',
        expected_departure_time: ''
      }]
    }
  }
};

  componentDidMount() {
    var component = this;
    var dataUrl = 'https://departure-board-server.herokuapp.com/'

    setInterval(() => {
      fetch(dataUrl)
      .then((resp) => resp.json())
      .then((data) => {
        component.setState({
          data: data.departures
        });
      })
    }, 1000);
  }

  render() {

    return (
      <div className="App">
         <TrainList data={this.state.data} />
      </div>
    );
  };
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
