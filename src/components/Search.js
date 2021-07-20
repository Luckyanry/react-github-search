import {useState, useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {GithubContext} from "../context/github/githubContext";

export const Search = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = (e) => {
    if (e.key !== "Enter") return;

    github.clearUsers();

    if (value.trim()) {
      alert.hide();
      github.search(value.trim());
    } else {
      alert.show("Please, enter the username!");
    }
  };

  return (
    <div className="form-group">
      <input
        className="form-control"
        type="text"
        placeholder="Enter the username... and press 'Enter'"
        vulue={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  );
};
