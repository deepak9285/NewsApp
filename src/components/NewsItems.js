import React from "react";

//export class NewsItems extends Component {
const NewsItems = (props) => {
  //render() {
  let { Title, description, imageurl, newsUrl, publishedAt, author, source } =
    props;
  return (
    <div className="my-3">
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "90%", zIndex: "1" }}
        >
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img
          src={
            !imageurl
              ? "https://static.politico.com/77/ea/4457fc2b4cd58ba9c27e654cfd6a/https-delivery-gettyimages.com/downloads/1239919482"
              : imageurl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{Title}...</h5>

          <h6>
            <span className="badge bg-secondary">New</span>
          </h6>
          <p className="card-text">{description}...</p>
          <p>
            <small className="text-muted">
              By {!author ? "unknown" : author} on{" "}
              {new Date(publishedAt).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-primary"
          >
            {/* target=_blank means it open the page in new tab  */}
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
