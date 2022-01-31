import React, { Component } from "react";
import Axios from "axios";
import { API_URL } from "./helper/ApiUrl.js";
import './App.css';


class App extends Component {
  state = { 
    data: [],
  } 
  
  componentDidMount() {
    Axios.get(`${API_URL}`, {
      headers: {'x-api-key': 'f8736d54-2294-4edd-b06f-11b36a3c5362'},
      params: {
        limit: 9,
      },
    }).then((res) => {
      this.setState({
        data: res.data
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  renderImage = () => {
    return this.state.data.map((val) => {
      return (
        <div className="card-container" key={val.id}>
          <div>
            <div className="img-container">
              <img src={val.image.url}/>
            </div>
          </div>
          <div>
            <div className="desc-container">              
              <h2>{val.name}</h2>              
              <h6>{val.origin}</h6>              
              <p>{val.description}</p>              
              <p>Wikipedia : <a href={val.wikipedia_url} target="_blank">{val.wikipedia_url}</a></p> 
            </div>            
          </div>
        </div>
      );
    });
  }

  render() { 
    return (
      <div>
        <div className="title-content">
          <h1>Quick JS Test (TheCatApi)</h1>
        </div>
        {this.renderImage()}
      </div>
    );
  }
}
 

export default App;
