import React from "react";
import PropTypes from "prop-types";
import "./Profile.css";

function Profile(props) {
  return (
    <div className="profile-card">
      <div className="profile-picture">{props.children}</div>
      <div className="informations">
        <h3>
          {" "}
          <span className="label"> Name : </span> {props.fullName}{" "}
        </h3>
        <p>
          {" "}
          <span className="label"> Profession : </span> {props.profession}{" "}
        </p>
        <p>
          {" "}
          <span className="label"> Bio : </span> {props.bio}{" "}
        </p>
        <button
          onClick={() => props.handleName(props.fullName)}
          className="btn-profile"
        >
          {" "}
          Say Hello!{" "}
        </button>
      </div>
    </div>
  );
}

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
};

Profile.defaultProps = {
  fullName: "N/A",
  bio: "N/A",
  profession: "N/A",
  handleName: () => {
    alert(`There is no user!`);
  },
};

export default Profile;
