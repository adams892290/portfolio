(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i(7),r=i.n(c),o=i(2),s=i(3),a=i(5),l=i(4),d=i.p+"static/media/project1.20547600.png",h=i.p+"static/media/project2.295c0599.png",j=(i.p,i(0)),p=[{id:1,title:"YelpCamp Campgrounds",link:"https://enigmatic-reef-31158.herokuapp.com/",image:d,description:Object(j.jsxs)("div",{id:"project-desc",children:[Object(j.jsx)("p",{children:"A website made for the purpose of finding new customers for campground owners in an easy and simple way."}),Object(j.jsx)("h4",{children:"Technologies used:"}),Object(j.jsx)("p",{children:"ReactJS, MongoDB, Mongoose, ExpressJS, NodeJS, CSS, HTML"}),Object(j.jsx)("p",{children:"The whole API creation alongside with the authentication is done manually from scratch."})]})},{id:2,title:"Coaching Institute",link:"https://frozen-refuge-21029.herokuapp.com/",image:h,description:Object(j.jsxs)("div",{id:"project-desc",children:[Object(j.jsx)("p",{children:"This is the blueprint of the website that I created for coaching institute."}),Object(j.jsx)("h4",{children:"Technologies used:"}),Object(j.jsx)("p",{children:"MongoDB, Mongoose, ExpressJS,EJS Templates, NodeJS, CSS, HTML"}),Object(j.jsx)("p",{children:"It has been designed to store data of the students, upload test scores, display their performance graphs and much more!"})]})}],b=function(e){Object(a.a)(i,e);var t=Object(l.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(s.a)(i,[{key:"render",value:function(){var e=this.props.project,t=e.title,i=e.description,n=e.link,c=e.image;return Object(j.jsxs)("div",{style:{display:"inline-block",margin:10},children:[Object(j.jsx)("h3",{children:t}),Object(j.jsx)("img",{src:c,style:{width:300,height:200}}),i,Object(j.jsx)("a",{href:n,target:"_blank",children:"See Project"})]})}}]),i}(n.Component),u=function(e){Object(a.a)(i,e);var t=Object(l.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(s.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Highlighted Projects"}),p.map((function(e){return Object(j.jsx)(b,{project:e},e.id)}))]})}}]),i}(n.Component),O=[{id:2,image:i.p+"static/media/github_icon.ccc9e199.png",link:"https://github.com/adams892290"},{id:3,image:i.p+"static/media/linkedin_icon.27cd6ff7.png",link:"https://www.linkedin.com/in/aditya-kumar-singh-957182203/"}],m=function(e){Object(a.a)(i,e);var t=Object(l.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(s.a)(i,[{key:"render",value:function(){var e=this.props.socialProfile,t=e.image,i=e.link;return Object(j.jsx)("div",{style:{display:"inline-block",margin:30},children:Object(j.jsx)("a",{href:i,children:Object(j.jsx)("img",{src:t,style:{width:35,height:35}})})})}}]),i}(n.Component),g=function(e){Object(a.a)(i,e);var t=Object(l.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(s.a)(i,[{key:"render",value:function(){return Object(j.jsx)("div",{children:O.map((function(e){return Object(j.jsx)(m,{socialProfile:e},e.id)}))})}}]),i}(n.Component),f=(i(13),i.p+"static/media/IMG-20210206-WA0029.0d1514f7.jpg"),x=["An engineering student","Web developement is a big hobby","Looking for new projects"],y=function(e){Object(a.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(o.a)(this,i);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={titleIndex:0},e.mountInterval=function(){setInterval((function(){var t=(e.state.titleIndex+1)%x.length;e.setState({titleIndex:t})}),1e3)},e}return Object(s.a)(i,[{key:"render",value:function(){var e=x[this.state.titleIndex];return console.log(e),Object(j.jsx)("p",{children:e})}},{key:"componentDidMount",value:function(){this.mountInterval()}}]),i}(n.Component),v=function(e){Object(a.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(o.a)(this,i);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={displayBio:!1},e.toggleDisplayBio=function(){e.setState({displayBio:!e.state.displayBio})},e}return Object(s.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:f,alt:"profile-picture",style:{width:280,height:280,borderRadius:140},id:"circle-image"}),Object(j.jsx)("h1",{children:"Hello!"}),Object(j.jsx)("p",{children:"I'm Aditya Kumar Singh, a student pursuing B.Tech in Computer Science in the second year of college."}),Object(j.jsx)("p",{children:"Check my bio for more details."}),Object(j.jsx)("p",{children:Object(j.jsx)(y,{})}),this.state.displayBio?Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"About:"}),Object(j.jsx)("p",{children:"Hi! I'm Aditya Kumar Singh, a B.Tech in Computer Science from School of Engineering in Kochi,India."}),Object(j.jsx)("p",{children:"I'm a web developer who is always looking for new and exciting web development projects."}),Object(j.jsx)("h3",{children:"Skills:"}),Object(j.jsx)("p",{children:"NodeJS, MongoDB, Express, ReactJS, HTML, CSS, EJS"}),Object(j.jsx)("p",{children:"In my few months of the journey of web development I've done various small scale projects, infact this porfolio website is also made from scratch with the help of ReactJS."}),Object(j.jsx)("p",{children:"Go ahead and checkout the projects."}),Object(j.jsx)("button",{onClick:this.toggleDisplayBio,children:"Hide Bio"})]}):Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:this.toggleDisplayBio,children:"See Bio"})}),Object(j.jsx)("hr",{}),Object(j.jsx)(u,{}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{children:"Like what you see? Contact Me!"}),Object(j.jsx)("i",{children:" mail: adams892290@gmail.com"}),Object(j.jsx)(g,{})]})}}]),i}(n.Component);r.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.09e7b4a3.chunk.js.map