import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, discription, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display:"flex",
            justifyContent:"flex-end",
            position:"absolute",
            right:0
          }}>
        <span className="badge rounded-pill bg-danger" >
                {source}
              </span>
          </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
            
            </h5>
            <p className="card-text">{discription}</p>
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
            <br />
            <a
              rel="noreferre"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              {" "}
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
