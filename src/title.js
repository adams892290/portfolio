import React, { Component } from "react";

const TITLE = ["An engineering student", "Web developement is a big hobby", "Looking for new projects"];

class Title extends Component {

    state = { titleIndex: 0 };

    mountInterval = () => {
        setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLE.length;

            this.setState({ titleIndex });

        }, 1000);
    }

    render() {
        const title = TITLE[this.state.titleIndex];
        console.log(title);
        return (
            <p>{title}</p>
        );
    }

    componentDidMount() {
        this.mountInterval();
    }
}

export default Title;