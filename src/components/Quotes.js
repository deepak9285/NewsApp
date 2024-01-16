import React, { Component } from "react";
import Quotesitems from "./Quotesitems";

export class Quotes extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      Loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=e82bfd1dbde74283af5eb86278b32dcb&page=1&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalresults: parsedData.totalResults, // Corrected property name
    });
  }

  handleNextClick = async () => {
    console.log("Next");
    if (
      this.state.page + 1 >=
      Math.ceil(this.state.totalResults / this.state.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&apiKey=e82bfd1dbde74283af5eb86278b32dcb&page=${
        this.state.page + 1
      }&pagesize=${this.props.pageSize}`;
      this.setState({ Loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        Loading: false,
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  handlePrevClick = async () => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&apiKey=e82bfd1dbde74283af5eb86278b32dcb&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({ Loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      Loading: false,
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>Welcome to todays news headlines</h1>
          <div className="col">
            <div className="row">
              {this.state.articles.map((element, id) => {
                return (
                  <div className="col" key={element.url}>
                    <Quotesitems
                      Imageurl={element.urlToImage}
                      newsUrl={element.url}
                      description={
                        !element.description ? "" : element.description
                      }
                      title={element.title.slice}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="button">
            <button
              type="button"
              onClick={this.handlePrevClick}
              className="btn btn-dark"
              disabled={this.state.page <= 1}
            >
              Previous
            </button>
            <button
              type="button"
              onClick={this.handleNextClick}
              className="btn btn-dark"
              disabled={
                this.state.page + 1 >=
                Math.ceil(this.state.totalResults / this.state.pageSize)
              }
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Quotes;
