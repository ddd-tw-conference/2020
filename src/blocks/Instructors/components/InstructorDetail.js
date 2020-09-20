import PropTypes from "prop-types";
import React from "react";
import "../instructorStyle.css";

const InstructorDetail = (props) => {
  // const LINKTYPE = {
  //   FACEBOOK: 'facebook',
  //   GITHUB: 'github',
  //   LINKEDIN: 'linkedin',
  // }
  const LINK_ICON_MAP = {
    facebook: "/img/facebook.svg",
    github: "/img/github.svg",
  };

  const renderLinks = (links) => {
    return Object.keys(links).map((key) => {
      return (
        <div>
          <a target="_blank" href={links[key]} rel="noopener noreferrer">
            <img src={LINK_ICON_MAP[key]} alt={key} />
          </a>
        </div>
      );
    });
  };
  const renderLinksComponent = (name, links) => {
    if (links) {
      return (
        <div className="row instructorConnect">
          Follow {name} - {renderLinks(props.links)}
        </div>
      );
    }
    return null;
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <img src={process.env.PUBLIC_URL + props.imgSrc} alt={props.name} />
        </div>
        <div className="col-8 align-content-start">
          <div className="row instructorName">{props.name}</div>
          <div className="row instructorTitle">{props.jobTitle}</div>
          <div
            className="row instructorDetail"
            dangerouslySetInnerHTML={{ __html: props.detail }}
          />
          {renderLinksComponent(props.name, props.links)}
        </div>
      </div>
    </div>
  );
};

InstructorDetail.propTypes = {
  //
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  imgSrc: PropTypes.string,
  detail: PropTypes.string,
  links: PropTypes.object,
};

export default InstructorDetail;
