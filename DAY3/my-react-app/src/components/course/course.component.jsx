import React, { Component } from "react";

export default class Course extends Component {
  render() {
    // const { imageUrl, title, description, price, likes } = this.props.coursedetails;

    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={this.props.coursedetails.imageUrl} className="card-img-top" alt="Course Image" />
        <div className="card-body">
          <h5 className="card-title">{this.props.coursedetails.title}</h5>
          <p className="card-text">{this.props.coursedetails.description}</p>
          <p className="card-text">${this.props.coursedetails.price}</p>
          <button className="btn btn-outline-primary">{this.props.coursedetails.likes}</button>
        </div>
      </div>
    );
  }
}
