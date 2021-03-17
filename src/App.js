import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import "./app.css";
import profilePic from "./assets/IMG-20210206-WA0029.jpg";
import Title from "./title";

class App extends Component {

    state = { displayBio: false }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }


    render() {



        return (
            <div>
                <img src={profilePic} alt="profile-picture" style={{ width: 200, height: 200, borderRadius: 100 }} />
                <h1>Hello!</h1>
                <p>I'm Aditya Kumar Singh, a student pursuing B.Tech in Computer Science in the second year of college.</p>
                <p>Check my bio for more details.</p>
                <p><Title /></p>

                {(this.state.displayBio) ?
                    (<div>
                        <h3>About:</h3>
                        <p>Hi! I'm Aditya Kumar Singh, a B.Tech in Computer Science from School of Engineering in Kochi,India.</p>
                        <p>I'm a web developer who is always looking for new and exciting web development projects.</p>
                        <h3>Skills:</h3>
                        <p>NodeJS, MongoDB, Express, ReactJS, HTML, CSS, EJS</p>
                        <p>In my few months of the journey of web development I've done various small scale projects, infact this porfolio website is also made from scratch with the help of ReactJS.</p>
                        <p>Go ahead and checkout the projects.</p>
                        <button onClick={this.toggleDisplayBio}>Hide Bio</button>
                    </div>) :
                    <div>
                        <button onClick={this.toggleDisplayBio}>See Bio</button>
                    </div>}
                <hr />

                <Projects />
                <div>Like what you see? Contect Me!</div>
                <i> mail: adams892290@gmail.com</i>
                <SocialProfiles />
            </div >
        )
    }
}

export default App;