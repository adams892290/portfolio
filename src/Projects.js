import React, { Component } from "react";
import projects from "./data/projects";

class Project extends Component {

    render() {
        const { title, description, link, image } = this.props.project;

        return (
            <div style={{ display: "inline-block", margin: 10 }}>
                <h3>{title}</h3>
                <img src={image} style={{ width: 300, height: 200 }}></img>
                {description}
                <a href={link} target="_blank">See Project</a>
            </div>
        )
    }
}

class Projects extends Component {
    render() {

        return (
            <div>
                <h2>Highlighted Projects</h2>
                {
                    projects.map(function (ele) {
                        return <Project key={ele.id} project={ele} />
                    })
                }
            </div>

        )

    }
}

export default Projects;