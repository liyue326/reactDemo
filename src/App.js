import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData:[]
    }
  }
  componentDidMount() {
    const that = this;
    axios.get("http://localhost:8081/")
      .then(function (res) {
        res.data instanceof Array && that.setState({
          userData: res.data
        })
      })
      .catch(function (error) {
        console.log(error);
      })

  }
  render() {
    const {userData} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{'测试jenkins自动部署'}</h1>
        </header>
        <p className="App-intro">
          {userData.map(({productId,productName})=>{
            return (<div><span>{productId}</span><span>{productName}</span></div>)
          })}
        </p>
      </div>
    );
  }
}

export default App;
