import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: { Work: true, Internships: true } };
  }
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => {
          return (
            <Panel
              className="accord-panel"
              title={section["title"]}
              key={section["title"]}
              onClick={() => {
                this.setState({
                  expanded: {
                    ...this.state.expanded,
                    [section["title"]]: !this.state.expanded[section["title"]],
                  },
                });
              }}
              expanded={this.state.expanded[section["title"]]}
              overrides={{
                Header: {
                  style: () => ({
                    backgroundColor: `${theme.body}`,
                    border: `1px solid`,
                    borderRadius: `5px`,
                    borderColor: `${theme.headerColor}`,
                    marginBottom: `3px`,
                    fontFamily: "Google Sans Regular",
                    color: `${theme.text}`,
                    ":hover": {
                      color: `${theme.secondaryText}`,
                    },
                  }),
                },
                Content: {
                  style: () => ({
                    backgroundColor: `${theme.body}`,
                  }),
                },
              }}
            >
              {section["experiences"].map((experience) => {
                return (
                  <ExperienceCard
                    key={experience}
                    experience={experience}
                    theme={theme}
                  />
                );
              })}
            </Panel>
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;
