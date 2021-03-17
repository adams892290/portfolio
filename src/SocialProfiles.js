import React, { Component } from "react";
import SOCIAL_PROFILES from "./data/socialProfiles";

class SocialProfile extends Component {
    render() {

        const { image, link } = this.props.socialProfile;
        return (
            <div style={{ display: "inline-block", margin: 30 }}>
                <a href={link}><img src={image} style={{ width: 35, height: 35 }} /></a>
            </div>
        )
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <div>
                {
                    SOCIAL_PROFILES.map(function (ele) {
                        return <SocialProfile key={ele.id} socialProfile={ele} />
                    })
                }
            </div>
        )
    }
}

export default SocialProfiles;