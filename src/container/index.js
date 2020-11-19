import React, { Component } from "react";
import axios from "axios";
import "./home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      //   fullname: "",

      name: "",
      title: "",
      first: "",
      last: "",
      email: "",
      street: "",
      post: "",
      city: "",
      country: "",
      picture: "",
    };
  }

  componentDidMount() {
    this.getRandomUser();
    // this.initState();
  }
  getRandomUser() {
    // console.log("Welcome");
    let url = "https://randomuser.me/api/";
    const request = axios.get(url);
    request
      .then((response) => {
        // console.log("Response:", response.data.results);
        this.setState({
          data: response.data.results[0],
          //   name: response.data.results[0].name,
          title: response.data.results[0].name.title,
          first: response.data.results[0].name.first,
          last: response.data.results[0].name.last,

          street: response.data.results[0].location.street.name,
          post: response.data.results[0].location.street.number,
          city: response.data.results[0].location.city,
          country: response.data.results[0].location.country,
          //   post :response.data.results[0].location.street.number,
          email: response.data.results[0].email,
          picture: response.data.results[0].picture.large,
        });
      })
      .catch((error) => {
        console.log("AXIOS ERROR", error);
      });
  }

  //   initState() {
  //     this.setState({
  //       //   fullname: this.state.data.name.title +" "+ this.state.data.name.first +" "+ this.state.data.name.last
  //     });
  //   }
  render() {
    console.log(this.state.data);

    if (this.state.data !== undefined) {
      return (
        <div className="home-container">
          <div className="home-box">
            <div className="home-box-content">
              <strong style={{fontSize:"28px"}}>
                {this.state.title +
                  " " +
                  this.state.first +
                  " " +
                  this.state.last}
              </strong>
              <strong>
                {this.state.email}
              </strong>

              <p style={{marginTop:"0px"}}>
                {this.state.street +
                  " " +
                  this.state.post +
                  ", " +
                  this.state.city +
                  ", " +
                  this.state.country}
              </p>

              <img src={this.state.picture} />
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Home;
