(function(t){function e(e){for(var r,n,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},i={app:0},o=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/newwebsite/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),i=a.n(r);i.a},"0fbe":function(t,e,a){t.exports=a.p+"img/StuffYouWatchLandingNew.ef9895c1.jpg"},1309:function(t,e,a){"use strict";var r=a("fdc7"),i=a.n(r);i.a},1977:function(t,e,a){"use strict";var r=a("ac34"),i=a.n(r);i.a},"25f1":function(t,e,a){"use strict";var r=a("99df"),i=a.n(r);i.a},3239:function(t,e,a){"use strict";var r=a("cd3e"),i=a.n(r);i.a},"3f24":function(t,e,a){t.exports=a.p+"img/ComputerImageNew.605303c0.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-header"),a("router-view")],1)},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("span",{staticClass:"triangle"}),a("ul",[a("li",[a("router-link",{attrs:{to:"/",exact:""}},[t._v("Home")])],1),a("li",[a("router-link",{attrs:{to:"/About",exact:""}},[t._v("About Me")])],1),a("li",[a("router-link",{attrs:{to:"/Projects",exact:""}},[t._v("Projects")])],1),a("li",[a("router-link",{attrs:{to:"/Contact",exact:""}},[t._v("Contact Me")])],1)]),a("br")])},s=[],c={},l=c,u=(a("efd0"),a("2877")),d=Object(u["a"])(l,n,s,!1,null,"2e605eb2",null),p=d.exports,h={name:"App",components:{"app-header":p}},v=h,m=(a("034f"),Object(u["a"])(v,i,o,!1,null,null,null)),f=m.exports,b=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",[a("h1",{staticStyle:{"font-size":"60px"}},[t._v("About Me")]),a("div",{staticStyle:{margin:"auto","padding-top":"2%","padding-left":"20%","padding-right":"20%",fontSize:"1.25em"}},[a("h2",[t._v("Who is Sean?")]),a("br"),t._v(" I'm a recent graduate from the University of Houston with a B.S. in computer science. I'm passionate about learning new technologies, solving problems, and always strive for excellence. My studies were heavily focused on object-oriented programming, data structures and algorithms. However, in my free time I've learned and continue to learn various technologies. "),a("br"),a("br"),a("div",[t._v(" I love binging movies & shows, listening to music, working out, playing video games, and recently, drawing/painting! ")]),a("br"),a("h2",[t._v("Technologies ")]),a("br"),t._v(" JavaScript | HTML | CSS | React | Vue.js | Node.js | MySQL | C++ | Python | Java "),a("br"),a("br"),a("br"),a("h2",[t._v("What am I currently trying to learn/interested in? ")]),a("br"),t._v(" .NET framework and mobile development ")])])])},w=[],y={name:"AboutMe",props:{}},_=y,x=a("6544"),S=a.n(x),k=a("7496"),T=Object(u["a"])(_,g,w,!1,null,"657b2553",null),C=T.exports;S()(T,{VApp:k["a"]});var A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",[r("h1",{staticStyle:{"font-size":"60px"}},[t._v("Hi, I'm Sean.")]),r("br"),r("div",{staticStyle:{"font-size":"20px"}},[t._v("Just a recent graduate trying to become a software developer. Come join me!")]),r("br"),r("br"),r("v-btn",{attrs:{fab:"",dark:"","x-large":"",color:"black"},on:{click:function(e){return t.openLinkedin()}}},[r("v-icon",{attrs:{"x-large":"",dark:""}},[t._v("fab fa-linkedin")])],1),r("span",{staticStyle:{"padding-left":"3em"}}),r("v-btn",{attrs:{fab:"",dark:"","x-large":"",color:"black"},on:{click:function(e){return t.openGithub()}}},[r("v-icon",{attrs:{"x-large":"",dark:""}},[t._v("fab fa-github")])],1),r("div",[r("br"),r("img",{staticStyle:{width:"450px",height:"250px"},attrs:{src:a("3f24")}})])],1)])},j=[],B={name:"Homepage",props:{msg:String},methods:{openLinkedin:function(){window.open("https://www.linkedin.com/in/sean-de-mesa-54378b17a","_blank")},openGithub:function(){window.open("https://github.com/seandemesa","_blank")}}},V=B,I=a("8336"),z=a("132d"),M=Object(u["a"])(V,A,j,!1,null,"24db217e",null),O=M.exports;S()(M,{VApp:k["a"],VBtn:I["a"],VIcon:z["a"]});var L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",[r("h1",{staticStyle:{"font-size":"60px"}},[t._v("Projects")]),r("br"),r("v-container",[r("v-row",{staticStyle:{height:"2500px"},attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",lg:"4"}},[r("br"),r("h2",[t._v("Stuff You Watch")]),r("br"),r("p",[t._v("An application that allows you to create a personalized list of movies and shows you've watched.")]),r("v-btn",{attrs:{color:"blue darken-1"},on:{click:function(e){return t.redirectToStuffYouWatch()}}},[t._v("Check out more")])],1),r("v-col",{attrs:{cols:"12",lg:"8"}},[r("img",{staticStyle:{"border-radius":"50px",width:"75%",height:"450px"},attrs:{src:a("0fbe")}})]),r("v-col",{attrs:{cols:"12",lg:"8"}},[r("img",{staticStyle:{"border-radius":"50px",width:"75%",height:"450px"},attrs:{src:a("b39d")}})]),r("v-col",{attrs:{cols:"12",lg:"4"}},[r("br"),r("h2",[t._v("Texas COVID-19 Visualization")]),r("br"),r("p",[t._v("Full stack application that visualizes data about COVID-19 in Texas into charts.")]),r("v-btn",{attrs:{color:"blue darken-1"},on:{click:function(e){return t.redirectToTXCovid19()}}},[t._v("Check out more")])],1),r("v-col",{attrs:{cols:"12",lg:"4"}},[r("br"),r("h2",[t._v("Citruscide (Bunjiman's Quest)")]),r("br"),r("p",[t._v("A 2-D video game with simple controls, but insane difficulty (inspired by Metroidvania & Cuphead).")]),r("v-btn",{attrs:{color:"blue darken-1"},on:{click:function(e){return t.redirectToCitruscide()}}},[t._v("Check out more")])],1),r("v-col",{attrs:{cols:"12",lg:"8"}},[r("img",{staticStyle:{"border-radius":"50px",width:"75%",height:"450px"},attrs:{src:a("6223")}})]),r("v-col",{attrs:{cols:"12",lg:"8"}},[r("img",{staticStyle:{"border-radius":"50px",width:"75%",height:"450px"},attrs:{src:a("7127")}})]),r("v-col",{attrs:{cols:"12",lg:"4"}},[r("br"),r("h2",[t._v("A.I. Agent")]),r("br"),r("p",[t._v("An agent who learns from its matrix environment and attempts to optimize its future paths.")]),r("v-btn",{attrs:{color:"blue darken-1"},on:{click:function(e){return t.redirectToAIAgent()}}},[t._v("Check out more")])],1)],1)],1)],1),r("div")])},D=[],E={name:"Projects",props:{},data:function(){return{}},methods:{redirectToStuffYouWatch:function(){this.$router.push({path:"/StuffYouWatch"})},redirectToTXCovid19:function(){this.$router.push({path:"/TXCovid19"})},redirectToCitruscide:function(){this.$router.push({path:"/Citruscide"})},redirectToAIAgent:function(){this.$router.push({path:"/AIAgent"})}}},W=E,P=(a("25f1"),a("62ad")),$=a("a523"),N=a("0fd9"),Q=Object(u["a"])(W,L,D,!1,null,"ce19faf2",null),Y=Q.exports;S()(Q,{VApp:k["a"],VBtn:I["a"],VCol:P["a"],VContainer:$["a"],VRow:N["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("svg",{staticStyle:{"vertical-align":"middle"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"}})]),a("span",{staticStyle:{"padding-left":"1em","font-size":"20px"}},[t._v("seandemesa1@yahoo.com")]),a("br"),a("br"),a("iframe",{attrs:{src:"https://docs.google.com/forms/d/e/1FAIpQLSdqmsYuzNKBEiE-1irnFlvnmvrZU2p--1gdQlHGBBLkReuIGg/viewform?embedded=true",width:"50%",height:"677",frameborder:"0",marginheight:"0",marginwidth:"0"}},[t._v("Loading…")])])},F=[],H={name:"Contact",props:{}},U=H,X=Object(u["a"])(U,R,F,!1,null,"15af7a5e",null),J=X.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("h1",[t._v("Stuff You Watch")]),a("br"),a("div",{staticStyle:{"font-size":"20px"}},[t._v(" TL;DR: A full stack application that allows you to create a personalized list of movies and shows you've watched. ")]),a("br"),a("br"),a("a",[a("iframe",{attrs:{width:"60%",height:"500px",src:"https://www.youtube.com/embed/0TTV1U64OYY",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),a("br"),a("br"),a("div",{staticClass:"normalTexts",staticStyle:{width:"70%",margin:"auto"}},[t._v(" *Note: Website is currently down since AWS isn't free ")]),a("div",{staticClass:"normalTexts",staticStyle:{width:"70%",margin:"auto"}},[a("br"),a("h3",[t._v("Full Description:")]),a("br"),t._v(" A web application that allows users to create a personalized list of movies or TV shows that they've watched into 1 convinient place. Users can register for an account, search for their movie/show using a search function that utilizes an "),a("a",{attrs:{href:"https://www.imdb.com/",target:"_blank"}},[t._v("IMDb")]),t._v(" API, then add the item to their list which is connected to their account.Furthermore, they can adjust the dates they watched, add a personal rating, or add a description to each and any item, all of which gets stored to a database. ")]),a("div",{staticClass:"normalTexts",staticStyle:{width:"70%",margin:"auto"}},[a("br"),a("h3",[t._v("Technologies Used:")]),a("br"),t._v(" React, Node.js, Express, MySQL (AWS RDS), Heroku ")]),a("div",{staticClass:"normalTexts",staticStyle:{width:"70%",margin:"auto"}},[a("br"),a("h3",[t._v("My responsibilities:")]),a("br"),t._v(" Everything (i.e. Self-project) ")]),a("br"),a("br"),a("br")])}],K={name:"SutffYouWatch",props:{}},Z=K,tt=(a("1309"),Object(u["a"])(Z,G,q,!1,null,"55eb5a3c",null)),et=tt.exports,at=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",[r("h1",[t._v("Texas COVID-19 Visualization")]),r("br"),r("div",{staticStyle:{"font-size":"20px"}},[t._v(" TL;DR: Full stack application that visualizes data about COVID-19 in Texas into charts. ")]),r("br"),r("br"),r("img",{staticStyle:{"border-radius":"5px",width:"60%",height:"500px"},attrs:{src:a("b39d")}}),r("div",{staticClass:"normalTexts",staticStyle:{width:"70%",margin:"auto"}},[t._v(" *Note: Website is currently down since AWS isn't free ")]),r("div",{staticClass:"normalTexts",staticStyle:{width:"70%",margin:"auto"}},[r("br"),r("h3",[t._v("Full Description:")]),r("br"),t._v(" Website which visualizes data about COVID-19 in Texas into various charts. Data is extrapolated from "),r("a",{attrs:{href:"https://dshs.texas.gov/coronavirus/additionaldata.aspx",target:"_blank"}},[t._v("https://dshs.texas.gov/coronavirus/additionaldata.aspx")]),t._v(" in an excel file. It is run through scripts which converts each sheet into seperate .csv files which are then inputted appropriately into MySQL tables. Data from database is then called from the front end and visualized into appropriate charts. ")]),r("div",{staticClass:"normalTexts",staticStyle:{width:"70%",margin:"auto"}},[r("br"),r("h3",[t._v("Technologies Used:")]),r("br"),t._v(" Vue.js, vue-chartjs, Node.js, Express, MySQL (AWS RDS), Heroku ")]),r("div",{staticClass:"normalTexts",staticStyle:{width:"70%",margin:"auto"}},[r("br"),r("h3",[t._v("My responsibilities:")]),r("br"),t._v(" Everything (i.e. Self-project) ")]),r("br"),r("br"),r("br")])])},rt=[],it={name:"TXCovid19",props:{},methods:{openWebsite:function(){window.open("https://txcovid19data.herokuapp.com","_blank")}}},ot=it,nt=(a("3239"),Object(u["a"])(ot,at,rt,!1,null,"c374b7d4",null)),st=nt.exports;S()(nt,{VApp:k["a"]});var ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",[a("h1",[t._v("Citruscide (Bunjiman's Quest)")]),a("br"),a("div",{staticStyle:{"font-size":"20px"}},[t._v(" TL;DR: An 8-bit style, 2-D video game with simple controls, but insane difficulty (inspired by "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Metroidvania",target:"_blank"}},[t._v("Metroidvania")]),t._v(" & "),a("a",{attrs:{href:"http://www.cupheadgame.com/",target:"_blank"}},[t._v("Cuphead.")]),t._v("). ")]),a("br"),a("br"),1==t.BossToShow?a("a",[a("iframe",{attrs:{width:"60%",height:"500px",src:"https://www.youtube.com/embed/AlHw-gq8gIg",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]):t._e(),2==t.BossToShow?a("a",[a("iframe",{attrs:{width:"60%",height:"500px",src:"https://www.youtube.com/embed/8Q-wQxd4IzM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]):t._e(),3==t.BossToShow?a("a",[a("iframe",{attrs:{width:"60%",height:"500px",src:"https://www.youtube.com/embed/6B5im93P0C8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]):t._e(),5==t.BossToShow?a("a",[a("iframe",{attrs:{width:"60%",height:"500px",src:"https://www.youtube.com/embed/J4ymak72zKk",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]):t._e(),a("div",[a("br"),a("v-menu",{attrs:{"offset-y":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"red accent-3",dark:""}},"v-btn",i,!1),r),[t._v(" Want to see more bosses? ")])]}}])},[a("v-list",[a("v-list-item",{on:{click:function(e){return t.changeToBoss(1)}}},[a("v-list-item-title",[t._v("Boss 1")])],1),a("v-list-item",{on:{click:function(e){return t.changeToBoss(2)}}},[a("v-list-item-title",[t._v("Boss 2")])],1),a("v-list-item",{on:{click:function(e){return t.changeToBoss(3)}}},[a("v-list-item-title",[t._v("Boss 3")])],1),a("v-list-item",{on:{click:function(e){return t.changeToBoss(5)}}},[a("v-list-item-title",[t._v("Boss 5 (Yes 5, not 4)")])],1)],1)],1)],1),a("div",{staticClass:"normalTexts",staticStyle:{width:"70%",margin:"auto"}},[a("br"),a("h3",[t._v("Full Description:")]),a("br"),t._v(" An 8-bit/retro metroidvania style game that was heavily inspired by Cuphead. Players control Bunjiman, our main character whose magic sword shoots lemons. Why? Because. The controls consists of WASD / arrow keys for movement and space to shoot. The game includes 5 short levels along with 6 bosses that ramp up with difficulty and intensity that are designed to have the player learn from their mistakes frequently in order to defeat them. ")]),a("br"),a("div",{staticClass:"normalTexts",staticStyle:{width:"70%",margin:"auto"}},[t._v(" Fun fact! Many of my team members could barely beat the earlier bosses and neglected to even seriously attempt the latter ones despite everyone being self-proclaimed gamers. ")]),a("div",{staticClass:"normalTexts",staticStyle:{width:"70%",margin:"auto"}},[a("br"),a("h3",[t._v("Technologies Used:")]),a("br"),t._v(" Unity, C# ")]),a("div",{staticClass:"normalTexts",staticStyle:{width:"70%",margin:"auto"}},[a("br"),a("h3",[t._v("My responsibilities:")]),a("br"),t._v(" Design and implementation of all 6 bosses. Player controls and health system. ")]),a("br"),a("br"),a("br")])])},lt=[],ut={name:"Citruscide",props:{},data:function(){return{BossNum1:!0,BossToShow:1,bossNums:[{title:"Boss 1"},{title:"Boss 2"},{title:"Boss 3"},{title:"Boss 5"}]}},methods:{changeToBoss:function(t){this.BossToShow=t},changeToBoss02:function(){this.BossToShow=2}}},dt=ut,pt=(a("1977"),a("8860")),ht=a("da13"),vt=a("5d23"),mt=a("e449"),ft=Object(u["a"])(dt,ct,lt,!1,null,"26feda7b",null),bt=ft.exports;S()(ft,{VApp:k["a"],VBtn:I["a"],VList:pt["a"],VListItem:ht["a"],VListItemTitle:vt["a"],VMenu:mt["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",[a("h1",[t._v("A.I. Agent")]),a("br"),a("div",{staticStyle:{"font-size":"20px"}},[t._v(" TL;DR: An agent who learns from its matrix environment and attempts to optimize its future paths. ")]),a("br"),a("br"),1==t.VidToShow?a("a",[a("iframe",{attrs:{width:"60%",height:"500px",src:"https://www.youtube.com/embed/7EwIX77Ch0A",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]):t._e(),2==t.VidToShow?a("a",[a("iframe",{attrs:{width:"60%",height:"500px",src:"https://www.youtube.com/embed/yvd8nlgwLDU",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]):t._e(),3==t.VidToShow?a("a",[a("iframe",{attrs:{width:"60%",height:"500px",src:"https://www.youtube.com/embed/CxnGp9lrSL0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]):t._e(),a("div",[a("br"),a("v-menu",{attrs:{"offset-y":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"red accent-3",dark:""}},"v-btn",i,!1),r),[t._v(" Want to see a different approach? ")])]}}])},[a("v-list",[a("v-list-item",{on:{click:function(e){return t.changeVid(1)}}},[a("v-list-item-title",[t._v("Experiment 1")])],1),a("v-list-item",{on:{click:function(e){return t.changeVid(2)}}},[a("v-list-item-title",[t._v("Experiment 4")])],1),a("v-list-item",{on:{click:function(e){return t.changeVid(3)}}},[a("v-list-item-title",[t._v("Experiment 5")])],1)],1)],1)],1),a("div",{staticClass:"normalTexts",staticStyle:{width:"70%",margin:"auto"}},[a("br"),a("h3",[t._v("Full Description:")]),a("br"),t._v(' An agent is tasked with the objective of finding pickup spots(spaces in the matrix which the agent can "pick up" an object [i.e. change state to "is carrying"]) to carry over to a dropoff spot(spaces in the matrix which the agent can "drop off " the object [i.e. change state to "can pick up"]) and repeat this process until every pickup spot is empty and every dropoff spot is full. It utilizes a combination of different reinforcement learning algorithms ('),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Q-learning",target:"_blank"}},[t._v("Q-Learning")]),t._v(" & "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/State-action-reward-state-action",target:"_blank"}},[t._v("SARSA")]),t._v(") and policies which decide its behavior to try and effectively learn the world. In the above video(s), the green numbers represent a more favorable path to the agent based on its previous behavior, whilst the red represent a more negative path. ")]),a("br"),a("div",{staticClass:"normalTexts",staticStyle:{width:"70%",margin:"auto"}},[a("br"),a("h3",[t._v("Technologies Used:")]),a("br"),t._v(" Python, pygame ")]),a("div",{staticClass:"normalTexts",staticStyle:{width:"70%",margin:"auto"}},[a("br"),a("h3",[t._v("My responsibilities:")]),a("br"),t._v(" Combining team members code. Creating a visual to see the agent act in near real-time ")]),a("br"),a("br"),a("br")])])},wt=[],yt={name:"AIAgent",props:{},data:function(){return{BossNum1:!0,VidToShow:1,bossNums:[{title:"Boss 1"},{title:"Boss 2"},{title:"Boss 3"},{title:"Boss 5"}]}},methods:{changeVid:function(t){this.VidToShow=t}}},_t=yt,xt=(a("dcff"),Object(u["a"])(_t,gt,wt,!1,null,"52af5f2a",null)),St=xt.exports;S()(xt,{VApp:k["a"],VBtn:I["a"],VList:pt["a"],VListItem:ht["a"],VListItemTitle:vt["a"],VMenu:mt["a"]});var kt=[{path:"/",component:O},{path:"/About",component:C},{path:"/Projects",component:Y},{path:"/Contact",component:J},{path:"/StuffYouWatch",component:et},{path:"/TXCovid19",component:st},{path:"/Citruscide",component:bt},{path:"/AIAgent",component:St}],Tt=a("f309");r["a"].use(Tt["a"]);var Ct=new Tt["a"]({});r["a"].config.productionTip=!1,r["a"].use(b["a"]);var At=new b["a"]({routes:kt,mode:"history"});new r["a"]({render:function(t){return t(f)},vuetify:Ct,router:At}).$mount("#app")},6223:function(t,e,a){t.exports=a.p+"img/Citruscide Bosses.3f66ddea.jpg"},7127:function(t,e,a){t.exports=a.p+"img/AIAgentNew.e9ba7e22.jpg"},"85ec":function(t,e,a){},"99df":function(t,e,a){},ac34:function(t,e,a){},b39d:function(t,e,a){t.exports=a.p+"img/TXCovid19Charts.b2cf8721.jpg"},cd3e:function(t,e,a){},dcff:function(t,e,a){"use strict";var r=a("f7dc"),i=a.n(r);i.a},dd14:function(t,e,a){},efd0:function(t,e,a){"use strict";var r=a("dd14"),i=a.n(r);i.a},f7dc:function(t,e,a){},fdc7:function(t,e,a){}});
//# sourceMappingURL=app.53b6cc3b.js.map