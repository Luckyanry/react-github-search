import React from "react";
import {Link} from "react-router-dom";

export const Card = ({user}) => (
  <div className="card">
    <img src={user.avatar_url} alt={user.login} />
    <div className="card-body">
      <h3 className="card-title text-center mb-4">{user.login}</h3>
      <div className="col text-center">
        <Link to={`/profile/` + user.login} className="btn btn-primary mr-4">
          More info
        </Link>
        <a
          className="btn btn-dark"
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open profile
        </a>
      </div>
    </div>
  </div>
);
