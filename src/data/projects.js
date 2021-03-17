import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import React from "react";

const projects = [
    {
        id: 1,
        title: "YelpCamp Campgrounds",
        link: "https://enigmatic-reef-31158.herokuapp.com/",
        image: project1,
        description: (<div id="project-desc">
            <p>
                A website made for the purpose of finding new customers for campground owners in an easy and simple way.
            </p>
            <h4>Technologies used:</h4>
            <p>ReactJS, MongoDB, Mongoose, ExpressJS, NodeJS, CSS, HTML</p>
            <p>The whole API creation alongside with the authentication is done manually from scratch.</p>
        </div>)
    },
    {
        id: 2,
        title: "Coaching Institute",
        link: "https://frozen-refuge-21029.herokuapp.com/",
        image: project2,
        description: (<div id="project-desc">
            <p>
                This is the blueprint of the website that I created for coaching institute.
            </p>
            <h4>Technologies used:</h4>
            <p>MongoDB, Mongoose, ExpressJS,EJS Templates, NodeJS, CSS, HTML</p>
            <p>It has been designed to store data of the students, upload test scores, display their performance graphs and much more!</p>
        </div>)
    }
];

export default projects;