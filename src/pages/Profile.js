import {useContext, useEffect} from "react";
import {Link} from "react-router-dom";

import {GithubContext} from "../context/github/githubContext";
import {Repos} from "../components/Repos";

export const Profile = ({match}) => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    // eslint-disable-next-line
  }, []);

  if (loading) <p className="text-center">Loading...</p>;

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    created_at,
    email,
    site_admin,
    updated_at,
  } = user;

  return (
    <>
      <Link className="btn btn-link" to={"/"}>
        Back to home
      </Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img style={{width: "150px"}} src={avatar_url} alt={login} />
              <h3>{name}</h3>
              {location && <p>Location: {location}</p>}
              {site_admin && <p>Admin</p>}
            </div>
            <div className="col">
              {bio && (
                <>
                  <h3>Biography</h3>
                  <p>{bio}</p>
                </>
              )}

              <div className="badge badge-primary mr-2 p-2">
                Followers: {followers}
              </div>

              <div className="badge badge-success mr-2 p-2">
                Following: {following}
              </div>

              <div className="badge badge-info mr-2 p-2">
                Repositories: {public_repos}
              </div>

              <div className="badge badge-dark p-2">Gists: {public_gists}</div>

              <ul className="pt-3">
                {login && (
                  <li>
                    <strong>Username: </strong> {login}
                  </li>
                )}

                {company && (
                  <li>
                    <strong>Company: </strong> {company}
                  </li>
                )}

                {blog && (
                  <li>
                    <strong>Website: </strong> {blog}
                  </li>
                )}

                {email && (
                  <li>
                    <strong>Email: </strong> {email}
                  </li>
                )}

                <li>
                  <strong>Last activity: </strong>
                  {new Date(updated_at).toLocaleDateString()}
                </li>

                <li>
                  <strong>Registration date: </strong>
                  {new Date(created_at).toLocaleDateString()}
                </li>
              </ul>

              <a
                className="btn btn-dark mb-3"
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open profile
              </a>
            </div>
          </div>
        </div>
      </div>

      <Repos repos={repos} />
    </>
  );
};
