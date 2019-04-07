import React, { Component } from 'react';
import './App.css';
import ShopCard from '../Components/ShopCard.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      shopData: []
    }
  }

  updateLocationValue = (event) => {
    this.setState({location: event.target.value})
  }

  onSubmitLocation = () => {
    if(this.state.location === '') {
      window.alert('please input your location');
      return;
    }
    fetch('http://localhost:3000/', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        location: this.state.location
      })
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    .then(data => this.setState({ shopData: data.businesses })
    )
  }

  render() {
    return (
      <div className="App">
				<h1>RAMEN MAPS</h1>
        <p>location:</p>
        <input 
          onChange={this.updateLocationValue}
          type="text"
        />
        <button onClick={this.onSubmitLocation}>
        submit
        </button>
        <ShopCard shopData={this.state.shopData} />
      </div>
    );
  }
}

export default App;
