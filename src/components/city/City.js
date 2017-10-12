import React, { Component } from 'react';

class App extends Component {
  constructor(props){
      super(props)
      this.state = {}
  }

  componentWillMount(){
    this.props.getCities();
  }

  render() {

    let { cities } = this.props

    let CityList = cities.map((city, i) =>
                    <li key={`city-${i}`}>{city.name}</li>
                 );

    return (
      <ul>{CityList}</ul>
    );
  }
}

export default App;
