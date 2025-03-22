import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  personalProjectsHeader,
  personalProjects,
} from "../../portfolio.js";
import "./PersonalProjects.css";
import PersonalProjectsImg from "./PersonalProjectsImg";

class PersonalProjects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="personal-projects-main">
        <div className="basic-personal-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="personal-projects-heading-div">
              <div className="personal-projects-heading-img-div">
                <PersonalProjectsImg theme={theme} />
              </div>
              <div className="personal-projects-heading-text-div">
                <h1
                  className="personal-projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {personalProjectsHeader.title}
                </h1>
                <p
                  className="personal-projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {personalProjectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {personalProjects.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} key={repo.id} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="personal-project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default PersonalProjects;
