/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articals, setarticals] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalresults, settotalresults] = useState(0);
  // static defaultProps = { ye sbb function based component me code ke end me likhte h
  //   country: "india",
  //   pageSize: 8,
  // };
  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  // };
  // articals = [];
  // constructor(props) {
  //   super();
  //   this.state = {
  //     articals: this.articals,
  //     loading: false,
  //     page: 1,
  //     totalresults: 0,
  //   };
  // }
  const updateNews = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    setarticals(parsedData.articles);
    setloading(false);
    settotalresults(parsedData.totalresults);
    // this.setState({
    //   articals: parsedData.articles,
    //   totalresults: parsedData.totalresults,
    //   loading: false,
    // });
    props.setProgress(100);
  };
  // const componentDidMount=async ()=> {
  //   //ye kab run krega jab apka render method run ho jayega
  //   //async function apni body ke andar wait krr sakta kuch promises ko resolve krne ka
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e82bfd1dbde74283af5eb86278b32dcb&page=1&pagesize=${this.props.pageSize}`;

  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // this.setState({
  //   //   articals: parsedData.articles,
  //   //   totalresults: parsedData.totalresults,
  //   //   Loading: false,
  //   // });
  //   updateNews();
  //   document.title = `${props.category}-News monkey`;
  // }
  //component did mount jo kaam krr rha h whi kaam mera use effect krega
  useEffect(() => {
    updateNews();
    document.title = `${props.category}-News monkey`;
  }, []);

  // handlePrevClick = async () => {
  //   // console.log("prev");
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //   this.props.country
  //   // }&category=${
  //   //   this.props.category
  //   // }&apiKey=e82bfd1dbde74283af5eb86278b32dcb&page=${
  //   //   this.state.page - 1
  //   // }&pagesize=${this.props.pageSize}`;
  //   // this.setState({ loading: true });
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articals: parsedData.articles,
  //   //   loading: false,
  //   // });
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };
  // handleNextClick = async () => {
  //   // console.log("next");
  //   // if (
  //   //   this.state.page + 1 >=
  //   //   Math.ceil(this.state.totalresults / this.props.pageSize)
  //   // ) {
  //   //   return;
  //   // } else {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //     this.props.country
  //   //   }&category=${
  //   //     this.props.category
  //   //   }&apiKey=e82bfd1dbde74283af5eb86278b32dcb&page=${
  //   //     this.state.page + 1
  //   //   }&pagesize=${this.props.pageSize}`;
  //   //   this.setState({ loading: true });
  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json();
  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articals: parsedData.articles,
  //   //     loading: false,
  //   //   });
  //   // }
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pagesize=${props.pageSize}`;
    setloading(true);
    setpage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticals(articals.concat(parsedData.articles));
    settotalresults(parsedData.totalresults);
    setloading(false);
    // setState({
    //   articals: articals.concat(parsedData.articles),
    //   totalresults: parsedData.totalresults,
    // });
  };

  return (
    <>
      <div className="container my-3">
        <h1 className="text-center" style={{ marginTop: "70px" }}>
          News Monkey- Top {props.category} head lines
        </h1>
        {loading && <Spinner />}
        {/* //iss line ka mtlb hai kii jabb loading true h bhai spinner ko dikhye warna nhi */}
        {/* iteration of articals */}
        <InfiniteScroll
          dataLength={articals.length}
          next={fetchMoreData}
          hasMore={articals.length !== totalresults}
          loader={<Spinner />}
        >
          <div className="row">
            {/* {!this.state.loading && */}
            {articals.map((element, id) => {
              return (
                <div className="col-md-4" key={id}>
                  <NewsItems
                    Title={element.title ? element.title.slice(0, 45) : " "} //if element.title!=null then make blank string
                    imageurl={element.urlToImage}
                    description={
                      element.description
                        ? element.description.slice(0, 76)
                        : " "
                    }
                    newsUrl={element.url}
                    publishedAt={element.publishedAt}
                    author={element.author}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
              <button
                type="button"
                disabled={this.state.page <= 1}
                className="btn btn-dark"
                onClick={this.handlePrevClick}
              >
                &larr; Previous
              </button>
              <button
                type="button"
                disabled={
                  this.state.page + 1 >=
                  Math.ceil(this.state.totalresults / this.props.pageSize)
                }
                className="btn btn-dark"
                onClick={this.handleNextClick}
              >
                Next &rarr;
              </button>
            </div> */}
      </div>
    </>
  );
};
News.propTypes = {
  country: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
};
export default News;
