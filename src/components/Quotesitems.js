import React, { Component } from "react";

export class Quotesitems extends Component {
  render() {
    let { title, newsUrl, Imageurl, description } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={Imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href={newsUrl}
            rel="noreferrer"
            className="btn btn-primary"
            target="_blank"
          >
            Read full articles
          </a>
        </div>
      </div>
    );
  }
}

export default Quotesitems;
