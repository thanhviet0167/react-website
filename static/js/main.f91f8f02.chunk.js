(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{18:function(e,t,a){},53:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),r=a.n(n),s=a(22),i=a.n(s),o=a(20),l=a.n(o),d=a(29),h=a(7),u=a(8),b=a(6),j=a(10),p=a(9),m=(a(32),a(11)),_=a(3),O=(a(53),["btn--primary","btn--outline"]),x=["btn--medium","btn--large"],g=function(e){var t=e.children,a=e.type,n=e.onClick,r=e.buttonStyle,s=e.buttonSize,i=O.includes(r)?r:O[0],o=x.includes(s)?s:x[0];return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(_.b,{to:"/sign-in",className:"btn-mobile",children:Object(c.jsx)("button",{className:"btn ".concat(i," ").concat(o),onClick:n,type:a,children:t})})})},f=function(e){var t=e.children,a=e.type,n=e.onClick,r=e.buttonStyle,s=e.buttonSize,i=O.includes(r)?r:O[0],o=x.includes(s)?s:x[0];return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(_.b,{to:"/cart",className:"btn-mobile",children:Object(c.jsx)("button",{className:"btn ".concat(i," ").concat(o),onClick:n,type:a,children:t})})})},v=(a(61),a(93));console.log("Navbar");var y=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleClick=function(){n.setState({click:!n.state.click})},n.closeMobileMenu=function(){n.setState({click:!1})},n.showButton=function(){window.innerWidth<=960?n.setState({button:!1}):n.setState({button:!0})},n.handleButtonClick=function(){n.setState((function(e){return{open:!e.open}}))},n.handle_logout=function(){localStorage.removeItem("token"),console.log(n.props.logged_in),n.setState({logged_in:!1,username:""}),console.log(n.props.logged_in),Object(m.a)("/")},n.log_in=Object(c.jsxs)("li",{className:"nav-item",children:[Object(c.jsxs)(_.b,{to:"/cart",className:"nav-links-mobile",onClick:n.closeMobileMenu,children:[Object(c.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-cart",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})}),n.props.amount,"-",n.props.total,"$"]}),Object(c.jsx)(_.b,{to:"/sign-in",className:"nav-links-mobile",onClick:n.closeMobileMenu,children:"Sign in"})]}),n.log_out=Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsxs)("div",{className:"nav-links-mobile",children:[Object(c.jsxs)(_.b,{to:"/cart",className:"nav-links-mobile",onClick:n.closeMobileMenu,children:[Object(c.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-cart",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})}),n.props.amount,"-",n.props.total,"$"]}),Object(c.jsxs)(v.a,{children:[Object(c.jsx)(v.a.Toggle,{variant:"info",id:"dropdown-basic",children:n.props.username}),Object(c.jsxs)(v.a.Menu,{children:[Object(c.jsx)(v.a.Item,{href:"#/action-1",children:"Infor"}),Object(c.jsx)(v.a.Item,{children:Object(c.jsx)(_.b,{to:"/cart",children:"My card"})}),Object(c.jsx)(v.a.Item,{href:"/sign-in",onClick:n.props.handle_logout,children:"Logout"})]})]})]})}),n.handleClickOutside=function(e){n.container.current&&!n.container.current.contains(e.target)&&n.setState({open:!1})},n.handleClick=n.handleClick.bind(Object(b.a)(n)),n.container=r.a.createRef(),n.state={click:!1,button:!0,open:!1},n}return Object(u.a)(a,[{key:"componentWillMount",value:function(){this.showButton()}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.showButton),document.addEventListener("mousedown",this.handleClickOutside),console.log(this.props.amount)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.showButton),document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("nav",{className:"navbar",ref:this.container,children:Object(c.jsxs)("div",{className:"navbar-container",children:[Object(c.jsxs)(_.b,{to:"/",className:"navbar-logo",onClick:this.closeMobileMenu&&this.props.handle_clear,children:["VEGANIMAL ",Object(c.jsx)("i",{className:"fab fa-typo3"})]}),Object(c.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(c.jsx)("i",{className:this.state.click?"fas fa-times":"fas fa-bars"})}),Object(c.jsxs)("ul",{className:this.state.click?"nav-menu active":"nav-menu",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(_.b,{to:"/",className:"nav-links",onClick:this.closeMobileMenu&&this.props.handle_clear,children:"Home"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(_.b,{to:"/services",className:"nav-links",onClick:this.closeMobileMenu&&this.props.handle_clear,children:"Services"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(_.b,{to:"/products",className:"nav-links",onClick:this.closeMobileMenu&&this.props.handle_clear,children:"Products"})}),this.props.logged_in?this.log_out:this.log_in]}),this.props.logged_in?this.state.button&&Object(c.jsx)(g,{buttonStyle:"btn--outline",children:Object(c.jsxs)(v.a,{children:[Object(c.jsx)(v.a.Toggle,{variant:"info",id:"dropdown-basic",children:this.props.username}),Object(c.jsxs)(v.a.Menu,{children:[Object(c.jsx)(v.a.Item,{href:"#/action-1",children:"Infor"}),Object(c.jsx)(v.a.Item,{children:Object(c.jsx)(_.b,{to:"/cart",children:"My card"})}),Object(c.jsx)(v.a.Item,{href:"/sign-in",onClick:this.props.handle_logout,children:"Logout"})]})]})}):this.state.button&&Object(c.jsx)(g,{buttonStyle:"btn--outline",onClick:this.props.handle_clear,children:"SIGN-IN"}),this.state.button&&Object(c.jsxs)(f,{onClick:this.props.handle_clear,buttonStyle:"btn--outline",to:"/cart",children:[Object(c.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-cart",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})}),this.props.amount,"-",this.props.total,"$"]})]})})})}}]),a}(n.Component);a(18),a(63);var N=function(){return Object(c.jsxs)("div",{className:"hero-container",children:[Object(c.jsx)("h1",{children:"ADVENTURE AWAIT"}),Object(c.jsx)("p",{children:"What are you waitting for?"}),Object(c.jsxs)("div",{className:"hero-btns",children:[Object(c.jsx)(g,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"GET STARTED"}),Object(c.jsxs)(g,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",children:["WATCH TRAILER ",Object(c.jsx)("i",{className:"far fa-play-circle"})]})]})]})},k=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this,e)).handle_detail=function(e){c.props.handle_detail(e),c.props.handle_clear()},c.state={product_detail:c.props.product},c.handle_detail=c.handle_detail.bind(Object(b.a)(c)),c}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("li",{className:"cards__item",children:Object(c.jsxs)(_.b,{className:"cards__item__link",to:"/product-detail?"+this.state.product_detail.product_name,onClick:function(){return e.handle_detail(e.state.product_detail)},children:[Object(c.jsx)("figure",{className:"cards__item__pic-wrap","data-category":this.props.product.product_name,children:Object(c.jsx)("img",{src:this.props.product.path,"aria-hidden":!0,alt:"Travel Image",className:"cards__item__img"})}),Object(c.jsxs)("div",{className:"cards__item__info",children:[Object(c.jsx)("h5",{className:"cards__item__text",children:this.props.product.description}),Object(c.jsxs)("h5",{className:"cards__item__text",children:[this.props.product.price,this.props.product.currency,"-Number:",this.props.product.count]}),Object(c.jsx)("button",{to:"/product-detail?"+this.state.product_detail.product_name,onClick:this.props.handle_clear,children:"See detail"})]})]})},this.props.product.product_name)})}}]),a}(n.Component),S=(a(64),function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={list_card:[],temp:[],my_data:e.props.list_product,not_only:!0},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.list_product),1===this.props.list_product.length&&this.setState({not_only:!1}),this.setState({list_card:this.state.my_data.map((function(t,a){return Object(c.jsx)(k,{product:t,handle_detail:e.props.handle_detail,handle_clear:e.props.handle_clear})}))})}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"cards",children:[Object(c.jsx)("h1",{children:"Check out these EPIC Destinations!"}),Object(c.jsx)("div",{className:"cards__container",children:Object(c.jsx)("div",{className:"cards__wrapper",children:Object(c.jsx)("ul",{className:"cards__items",children:this.state.list_card})})})]})}}]),a}(n.Component));a(65);var w=function(){return Object(c.jsxs)("div",{className:"footer-container",children:[Object(c.jsxs)("section",{className:"footer-subscription",children:[Object(c.jsx)("p",{className:"footer-subscription-heading",children:"Join the Adventure newsletter to receive our best vacation deals"}),Object(c.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at any time."}),Object(c.jsx)("div",{className:"input-areas",children:Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),Object(c.jsx)(g,{buttonStyle:"btn--outline",children:"Submit"})]})})]}),Object(c.jsxs)("div",{className:"footer-links",children:[Object(c.jsxs)("div",{className:"footer-link-wrapper",children:[Object(c.jsxs)("div",{className:"footer-link-items",children:[Object(c.jsx)("h2",{children:"About Us"}),Object(c.jsx)(_.b,{to:"/sign-up",children:"How it works"}),Object(c.jsx)(_.b,{to:"/",children:"Testimonials"}),Object(c.jsx)(_.b,{to:"/",children:"Careers"}),Object(c.jsx)(_.b,{to:"/",children:"Investors"}),Object(c.jsx)(_.b,{to:"/",children:"Terms of Service"})]}),Object(c.jsxs)("div",{className:"footer-link-items",children:[Object(c.jsx)("h2",{children:"Contact Us"}),Object(c.jsx)(_.b,{to:"/",children:"Contact"}),Object(c.jsx)(_.b,{to:"/",children:"Support"}),Object(c.jsx)(_.b,{to:"/",children:"Destinations"}),Object(c.jsx)(_.b,{to:"/",children:"Sponsorships"})]})]}),Object(c.jsxs)("div",{className:"footer-link-wrapper",children:[Object(c.jsxs)("div",{className:"footer-link-items",children:[Object(c.jsx)("h2",{children:"Videos"}),Object(c.jsx)(_.b,{to:"/",children:"Submit Video"}),Object(c.jsx)(_.b,{to:"/",children:"Ambassadors"}),Object(c.jsx)(_.b,{to:"/",children:"Agency"}),Object(c.jsx)(_.b,{to:"/",children:"Influencer"})]}),Object(c.jsxs)("div",{className:"footer-link-items social",children:[Object(c.jsx)("h2",{children:"Social Media"}),Object(c.jsx)(_.b,{id:"ins",children:"Instagram"}),Object(c.jsx)(_.b,{id:"fb",children:"Facebook"}),Object(c.jsx)(_.b,{id:"ytb",children:"Youtube"}),Object(c.jsx)(_.b,{id:"tw",children:"Twitter"})]})]})]}),Object(c.jsx)("section",{className:"social-media",children:Object(c.jsxs)("div",{className:"social-media-wrap",children:[Object(c.jsx)("div",{className:"footer-logo",children:Object(c.jsxs)(_.b,{to:"/",className:"social-logo",children:["VEGANIMAL",Object(c.jsx)("i",{className:"fab fa-typo3"})]})}),Object(c.jsx)("small",{className:"website-rights",children:"VEGANIMAL \xa9 2020"}),Object(c.jsxs)("div",{className:"social-icons",children:[Object(c.jsx)(_.b,{className:"social-icon-link facebook",id:"FB",target:"_blank","aria-label":"Facebook",children:Object(c.jsx)("i",{className:"fab fa-facebook-f"})}),Object(c.jsx)(_.b,{className:"social-icon-link instagram",id:"INS",target:"_blank","aria-label":"Instagram",children:Object(c.jsx)("i",{className:"fab fa-instagram"})}),Object(c.jsx)(_.b,{className:"social-icon-link youtube",id:"YTB",target:"_blank","aria-label":"Youtube",children:Object(c.jsx)("i",{className:"fab fa-youtube"})}),Object(c.jsx)(_.b,{className:"social-icon-link twitter",id:"TW",target:"_blank","aria-label":"Twitter",children:Object(c.jsx)("i",{className:"fab fa-twitter"})}),Object(c.jsx)(_.b,{className:"social-icon-link linkedin",id:"LK",target:"_blank","aria-label":"LinkedIn",children:Object(c.jsx)("i",{className:"fab fa-linkedin"})})]})]})})]})},C=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this,e)).state={},c}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(c.jsx)("div",{})}}]),a}(n.Component),M=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return this.props.search?Object(c.jsx)(m.a,{to:"/search?key="+this.props.search}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(N,{}),Object(c.jsx)(S,{list_product:this.props.list_product,handle_detail:this.props.handle_detail,handle_clear:this.props.handle_clear}),Object(c.jsx)(C,{}),Object(c.jsx)(w,{})]})}}]),a}(n.Component);var I=function(){return Object(c.jsx)("h1",{className:"services",children:"SERVICES"})};var T=function(){return Object(c.jsx)("h1",{className:"products",children:"PRODUCTS"})},A=a(17),z=(a(66),function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={username:"",password:"",email:""},e.handle_change=function(t){var a=t.target.name,c=t.target.value;e.setState((function(e){var t=Object(A.a)({},e);return t[a]=c,t}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return this.props.logged_in?Object(c.jsx)(m.a,{to:"/"}):this.props.search?Object(c.jsx)(m.a,{to:"/search?key="+this.props.search}):Object(c.jsxs)("div",{className:"sign--up",children:[Object(c.jsx)("h1",{className:"text-center",children:"Registration form"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("form",{className:"form-group text-center",onSubmit:function(t){return e.props.handle_signup(t,e.state)},children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col-lg-12",children:[Object(c.jsx)("label",{className:"font-weight-bold",children:"Username:"}),Object(c.jsx)("input",{type:"text",id:"userNameSignUp",name:"username",value:this.state.username,onChange:this.handle_change,className:"form-control",placeholder:"Enter your Username......"})]})}),Object(c.jsx)("label",{className:"font-weight-bold",children:"Email"}),Object(c.jsx)("input",{type:"email",id:"emailSignUp",name:"email",value:this.state.email,onChange:this.handle_change,className:"form-control",placeholder:"Enter your Email....."}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-lg-6",children:[Object(c.jsx)("label",{className:"font-weight-bold",children:"Password:"}),Object(c.jsx)("input",{type:"password",id:"passwordSignUp",name:"password",value:this.state.password,onChange:this.handle_change,className:"form-control",placeholder:"Enter new Password......"})]}),Object(c.jsx)("span",{id:"security-password"}),Object(c.jsxs)("div",{class:"col-lg-6",children:[Object(c.jsx)("label",{className:"font-weight-bold",children:"Re-type Password:"}),Object(c.jsx)("input",{type:"password",id:"rePasswordSignUp",name:"s_R_password",className:"form-control",placeholder:"Enter Password again......"})]})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("select",{id:"genderSignUp",name:"s_gender",onChange:this.changeHandler,className:"form-control form-control-lg",children:[Object(c.jsx)("option",{children:"Male"}),Object(c.jsx)("option",{children:"Female"}),Object(c.jsx)("option",{children:"Other"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:Object(c.jsx)("span",{id:"alert-box"})}),Object(c.jsx)("input",{type:"submit",name:"submit",value:"Submit",className:"btn btn-primary btn-block btn-lg"})]})]})}}]),a}(n.Component)),E=(a(67),function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={username:"",password:""},e.handle_change=function(t){var a=t.target.name,c=t.target.value;e.setState((function(e){var t=Object(A.a)({},e);return t[a]=c,t}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){if(this.props.logged_in)return Object(c.jsx)(m.a,{to:"/"})}},{key:"render",value:function(){var e=this;return this.props.logged_in?Object(c.jsx)(m.a,{to:"/"}):this.props.search?Object(c.jsx)(m.a,{to:"/search?key="+this.props.search}):Object(c.jsx)("div",{className:"login-container",children:Object(c.jsxs)("form",{className:"login-form",onSubmit:function(t){return e.props.handle_login(t,e.state)},children:[Object(c.jsx)("h1",{children:"Login"}),Object(c.jsx)("h6",{children:"Fill your account into this form to login"}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.handle_change,placeholder:"Username"})}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{class:"form-group",children:Object(c.jsx)("input",{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.handle_change,placeholder:"Password"})}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"forgot-link",children:[Object(c.jsxs)("div",{className:"form",children:[Object(c.jsx)("input",{type:"checkbox",name:"remember",value:""}),Object(c.jsx)("label",{for:"remember",children:"Remember your account"})]}),Object(c.jsx)("p",{children:Object(c.jsx)(_.b,{to:"#",children:"Forgot Password?"})})]}),Object(c.jsx)("button",{type:"submit",className:"btn mt-5 btn-custom btn-primary btn-block rounded-pill btn-lg login-button",children:"Login"}),Object(c.jsxs)("p",{className:"mt-3 font-weight-normal",children:["Don't have an account ",Object(c.jsx)(_.b,{to:"/sign-up",children:Object(c.jsx)("strong",{className:"text-primary","data-toggle":"modal","data-target":"#sign-up",children:"Register now"})})]})]})})}}]),a}(n.Component)),D=(a(68),function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this,e)).handle_change=function(e){var t=e.target.name,a=e.target.value;c.setState((function(e){var c=Object(A.a)({},e);return c[t]=a,c}))},c.handle_amount=function(e,t){e<1&&alert("Can't not add product when number is 0"),e>0&&c.props.handle_amount(e,t)},c.state={product:[],amount:0},c.handle_amount=c.handle_amount.bind(Object(b.a)(c)),c}return Object(u.a)(a,[{key:"componentDidMount",value:function(){console.log("Card detail"),console.log(this.props.product_detail),console.log("Number"),console.log(this.state.amount)}},{key:"render",value:function(){var e=this;return this.props.search?Object(c.jsx)(m.a,{to:"/search?key="+this.props.search}):this.props.product_detail.price?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"product-details",children:Object(c.jsxs)("div",{className:"details",children:[Object(c.jsx)("div",{className:"big-img",children:Object(c.jsx)("img",{src:this.props.product_detail.path,alt:""})}),Object(c.jsxs)("div",{className:"box",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{children:this.props.product_detail.product_name}),Object(c.jsxs)("span",{children:[this.props.product_detail.price,this.props.product_detail.currency]})]}),Object(c.jsxs)("span",{children:["Number:",this.props.product_detail.count]})," ",Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:["Type: ",this.props.product_detail.type_product]}),Object(c.jsx)("p",{children:"Vegetarian food has health benefits and enhances resistance"}),Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"number",name:"amount",value:this.state.amount,onChange:this.handle_change})," The number of products"]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"cart",onClick:function(){return e.handle_amount(e.state.amount,e.props.product_detail)},children:"Add to cart"})]})]})}),Object(c.jsx)(w,{})]}):Object(c.jsx)(m.a,{to:"/"})}}]),a}(n.Component)),H=(a(69),function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={search:""},e.handle_change=function(t){var a=t.target.name,c=t.target.value;e.setState((function(e){var t=Object(A.a)({},e);return t[a]=c,t}))},e.handle_clear_search=function(){e.setState({search:""})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("form",{className:"nav-search",onSubmit:function(t){return e.props.handle_search(t,e.state)},children:[Object(c.jsx)("input",{className:"search",name:"search",value:this.state.search,onChange:this.handle_change,placeholder:"  Search...",type:"text"}),Object(c.jsx)("button",{type:"submit",className:"button_search",onClick:this.props.handle_clear_type,children:"Search"}),Object(c.jsx)("button",{type:"button",className:"button_search",onClick:this.handle_clear_search,children:"Clear"})]})}}]),a}(n.Component)),L=a(24),B=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this,e)).handle_sort=function(e,t){console.log(t),c.props.handle_sort(e,t)},c.handle_type=function(e){c.props.handle_type(e)},c.state={not_null:!0,list_product:Object(L.orderBy)(c.props.list_search,[c.props.orderBy],[c.props.orderDir]),type_product:c.props.type_product},c.props.type_product.length>0&&c.setState({list_product:Object(L.filter)(c.state.list_product,["type_product",c.props.type_product])}),c.list_type=Object(L.filter)(c.state.list_product,["type_product",c.props.type_product]),c.handle_sort=c.handle_sort.bind(Object(b.a)(c)),c.handle_type=c.handle_type.bind(Object(b.a)(c)),c}return Object(u.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props.list_search)}},{key:"render",value:function(){var e=this;return Object(c.jsxs)(c.Fragment,{children:[this.state.type_product,Object(c.jsxs)("div",{Style:"display: flex; with:40%",children:[Object(c.jsxs)(v.a,{children:[Object(c.jsx)(v.a.Toggle,{Style:"margin-left : 30%;  cursor: pointer;",variant:"primary",id:"dropdown-basic",children:"Sort"}),Object(c.jsxs)(v.a.Menu,{children:[Object(c.jsx)(v.a.Item,{role:"button",onClick:function(){return e.handle_sort("price","asc")},children:"Low"}),Object(c.jsx)(v.a.Item,{role:"button",onClick:function(){return e.handle_sort("price","desc")},children:"Hight"})]})]}),Object(c.jsxs)(v.a,{children:[Object(c.jsx)(v.a.Toggle,{Style:"margin-left: 50%",variant:"success",id:"dropdown-basic",children:"Type"}),Object(c.jsxs)(v.a.Menu,{children:[Object(c.jsx)(v.a.Item,{role:"button",onClick:function(){return e.handle_type("fruit")},children:"Fruit"}),Object(c.jsx)(v.a.Item,{role:"button",onClick:function(){return e.handle_type("vegetables")},children:"Vegetables"})]})]})]}),this.list_type.length?Object(c.jsx)(S,{list_product:this.list_type,handle_detail:this.props.handle_detail,handle_clear:this.props.handle_clear}):Object(c.jsx)(S,{list_product:this.state.list_product,handle_detail:this.props.handle_detail,handle_clear:this.props.handle_clear}),this.props.list_search.length?"":Object(c.jsx)("h3",{Style:"text-align:center; \r margin-top:10%;",children:"No matching results were found"}),Object(c.jsx)(m.a,{to:"/search?key="+this.props.search})]})}}]),a}(n.Component),J=(a(71),function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var c;Object(h.a)(this,a),(c=t.call(this,e)).handle_add=function(e){c.props.handle_add(e)},c.handle_remove=function(e){c.props.handle_remove(e)},c.handle_clear_cart=function(){c.props.handle_clear_cart()},c.handle_buy_cart=function(e,t){if(e){var a={username:e,list_cart:t};c.props.handle_buy_cart(a)}else alert("You have sign in to buy cart")},c.state={},c.list_cart=[];for(var n=0;n<c.props.product_cart.list_cart.length;n++)c.list_cart.push(c.props.product_cart.list_cart[n]),c.list_cart[n].number_cart=c.props.product_cart.number_cart[n],c.list_cart[n].index=n;return c.handle_add=c.handle_add.bind(Object(b.a)(c)),c.handle_remove=c.handle_remove.bind(Object(b.a)(c)),c.handle_clear_cart=c.handle_clear_cart.bind(Object(b.a)(c)),c.handle_buy_cart=c.handle_buy_cart.bind(Object(b.a)(c)),c}return Object(u.a)(a,[{key:"componentDidMount",value:function(){console.log("Cart----"),console.log(this.props.product_cart),console.log(this.list_cart)}},{key:"render",value:function(){var e=this;return this.props.search?Object(c.jsx)(m.a,{to:"/search?key="+this.props.search}):this.list_cart.length?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"Cart",children:[Object(c.jsx)("h2",{children:"My Card"}),Object(c.jsxs)("ul",{class:"list-group container",children:[Object(c.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(c.jsx)("div",{children:"Product Name"}),Object(c.jsx)("div",{children:"Number"}),Object(c.jsx)("div",{children:"Total"}),Object(c.jsx)("div",{children:"Add"}),Object(c.jsx)("div",{children:"Remove"})]}),this.list_cart.map((function(t){return Object(c.jsxs)("li",{class:"list-group-item d-flex justify-content-between align-items-center",children:[Object(c.jsx)("div",{children:t.product_name}),Object(c.jsx)("span",{className:"badge badge-primary badge-pill",children:t.number_cart}),Object(c.jsxs)("span",{className:"badge badge-primary badge-pill",children:[t.number_cart*t.price,"$"]}),Object(c.jsx)("button",{onClick:function(){return e.handle_add(t.index)},children:"Add"}),Object(c.jsx)("button",{onClick:function(){return e.handle_remove(t.index)},children:"Remove"})]})})),Object(c.jsx)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:Object(c.jsx)("button",{onClick:function(){return e.handle_buy_cart(e.props.username,e.list_cart)},children:"Buy cart"})}),Object(c.jsx)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:Object(c.jsx)("button",{onClick:function(){return e.handle_clear_cart()},children:"Clear cart"})})]})]}),Object(c.jsx)(w,{})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"Cart",children:[Object(c.jsx)("h2",{children:"My Card"}),Object(c.jsxs)("ul",{class:"list-group container",children:[Object(c.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(c.jsx)("div",{children:"Product Name"}),Object(c.jsx)("div",{children:"Number"}),Object(c.jsx)("div",{children:"Total"}),Object(c.jsx)("div",{children:"Add"}),Object(c.jsx)("div",{children:"Remove"})]}),Object(c.jsx)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:Object(c.jsx)("div",{children:"My Card is empty"})}),Object(c.jsx)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:Object(c.jsxs)("button",{className:"Home",children:[Object(c.jsx)(_.b,{to:"/",children:"Go to Home"})," "]})})]})]}),Object(c.jsx)(w,{})]})}}]),a}(n.Component)),F=a(25),P=a.n(F),U=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handle_search=function(e,t){e.preventDefault(),n.setState({search:t.search}),P()({method:"POST",url:"http://localhost:8000/core/search/",data:t,headers:{"Content-Type":"application/json"}}).then((function(e){return n.setState({list_search:e.data}),Object(c.jsx)(m.a,{to:"/search"})})).catch((function(e){console.log(e)}))},n.handle_login=function(e,t){e.preventDefault(),fetch("http://localhost:8000/token-auth/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.token?(localStorage.setItem("token",e.token),console.log(e.token),n.setState({logged_in:!0,displayed_form:"",username:e.user.username})):alert("User or password not correct")}))},n.handle_buy_cart=function(e){fetch("http://localhost:8000/core/add_card/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e)})),n.handle_clear_cart()},n.handle_signup=function(e,t){e.preventDefault(),fetch("http://localhost:8000/core/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){"A user with that username already exists."!==e.username[0]?(localStorage.setItem("token",e.token),n.setState({logged_in:!0,displayed_form:"",username:e.username})):alert("A user with that username already exists.")}))},n.handle_logout=function(){localStorage.removeItem("token"),n.setState({logged_in:!1,username:""})},n.handle_clear=function(){n.setState({search:""}),n.handle_clear_sort(),console.log("Clear")},n.handle_clear_sort=function(){n.setState({orderDir:"",orderBy:""})},n.handle_sort=function(e,t){n.setState({orderBy:e,orderDir:t})},n.handle_clear_type=function(){n.setState({type_product:""}),n.handle_clear_sort()},n.handle_type=function(e){n.setState({type_product:e})},n.handle_detail=function(e){n.setState({product_detail:e}),n.product_details=e},n.handle_amount=function(e,t){var a=n.product_cart.list_cart.indexOf(t.product_name);-1!==a?Number(n.product_cart.number_cart[a])+Number(e)<=n.product_cart.list_cart.count?n.product_cart.number_cart[a]=Number(n.product_cart.number_cart[a])+Number(e):alert("Can't add more product because purchase quantity is greater than available quantity"):Number(e)<=t.count?(n.product_cart.list_cart.push(t),n.product_cart.number_cart.push(Number(e))):alert("Can't add more product because purchase quantity is greater than available quantity");for(var c=0,r=0;r<n.product_cart.list_cart.length;r++)c=Number(c)+Number(n.product_cart.list_cart[r].price)*Number(n.product_cart.number_cart[r]);n.setState({amount:n.product_cart.list_cart.length}),n.setState({total:c}),localStorage.setItem("list_cart",JSON.stringify(n.product_cart.list_cart)),localStorage.setItem("number_cart",JSON.stringify(n.product_cart.number_cart)),console.log("Update"),console.log(n.product_cart),console.log(JSON.parse(localStorage.getItem("list_cart")))},n.handle_add=function(e){if(Number(n.product_cart.number_cart[e])+Number(1)<=n.product_cart.list_cart[e].count){n.product_cart.number_cart[e]=Number(n.product_cart.number_cart[e])+Number(1),n.setState({amount:n.product_cart.list_cart.length});for(var t=0,a=0;a<n.product_cart.list_cart.length;a++)t=Number(t)+Number(n.product_cart.list_cart[a].price)*Number(n.product_cart.number_cart[a]);n.setState({total:t})}else alert("Can't add more product because purchase quantity is greater than available quantity");localStorage.setItem("list_cart",JSON.stringify(n.product_cart.list_cart)),localStorage.setItem("number_cart",JSON.stringify(n.product_cart.number_cart))},n.handle_remove=function(e){n.product_cart.number_cart[e]=Number(n.product_cart.number_cart[e])-Number(1),0===n.product_cart.number_cart[e]&&(n.product_cart.list_cart.splice(e,1),n.product_cart.number_cart.splice(e,1)),n.setState({amount:n.product_cart.list_cart.length});for(var t=0,a=0;a<n.product_cart.list_cart.length;a++)t=Number(t)+Number(n.product_cart.list_cart[a].price)*Number(n.product_cart.number_cart[a]);n.setState({total:t}),localStorage.setItem("list_cart",JSON.stringify(n.product_cart.list_cart)),localStorage.setItem("number_cart",JSON.stringify(n.product_cart.number_cart))},n.handle_clear_cart=function(){n.product_cart.list_cart=[],n.product_cart.number_cart=[],n.setState({amount:0}),n.setState({total:0}),localStorage.setItem("list_cart",JSON.stringify(n.product_cart.list_cart)),localStorage.setItem("number_cart",JSON.stringify(n.product_cart.number_cart))},n.state={displayed_form:"",logged_in:!!localStorage.getItem("token"),username:"",list_product:[],list_search:[],search:"",orderBy:"",orderDir:"",type_product:"",product_detail:[],total:0,amount:0},n.product_details=[],JSON.parse(localStorage.getItem("list_cart"))?n.product_cart={list_cart:JSON.parse(localStorage.getItem("list_cart")),number_cart:JSON.parse(localStorage.getItem("number_cart"))}:(n.product_cart={list_cart:[],number_cart:[]},console.log("Hereeeeeeeeeeeeeeeeeee")),n.handle_sort=n.handle_sort.bind(Object(b.a)(n)),n.handle_type=n.handle_type.bind(Object(b.a)(n)),n.handle_detail=n.handle_detail.bind(Object(b.a)(n)),n.handle_amount=n.handle_amount.bind(Object(b.a)(n)),n.handle_add=n.handle_add.bind(Object(b.a)(n)),n.handle_remove=n.handle_remove.bind(Object(b.a)(n)),n.handle_clear_cart=n.handle_clear_cart.bind(Object(b.a)(n)),n.handle_buy_cart=n.handle_buy_cart.bind(Object(b.a)(n)),n}return Object(u.a)(a,[{key:"componentWillMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()({method:"GET",url:"http://localhost:8000/core/products/",headers:{"Content-Type":"application/json"}}).then((function(e){t.setState({cart_list:e.data})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,c=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=0,a=0;a<this.product_cart.list_cart.length;a++)t=Number(t)+Number(this.product_cart.list_cart[a].price)*Number(this.product_cart.number_cart[a]);if(this.setState({amount:this.product_cart.list_cart.length}),this.setState({total:t}),!this.state.logged_in){e.next=7;break}return e.next=7,fetch("http://localhost:8000/core/current_user/",{headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){c.setState({username:e.username})}));case 7:return e.next=9,P()({method:"GET",url:"http://localhost:8000/core/products/",headers:{"Content-Type":"application/json"}}).then((function(e){c.setState({list_product:e.data})})).catch((function(e){console.log(e)}));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(_.a,{children:[Object(c.jsx)(y,{logged_in:this.state.logged_in,handle_logout:this.handle_logout,username:this.state.username,handle_clear:this.handle_clear,handle_clear_sort:this.state.handle_clear_sort,cart:this.state.cart,total:this.state.total,amount:this.state.amount}),Object(c.jsx)(H,{handle_search:this.handle_search,handle_clear_type:this.handle_clear_type}),this.state.amount,Object(c.jsxs)(m.d,{children:[Object(c.jsx)(m.b,{path:"/",exact:!0,component:function(){return Object(c.jsx)(M,{list_product:e.state.list_product,search:e.state.search,handle_detail:e.handle_detail,handle_clear:e.handle_clear})}}),Object(c.jsx)(m.b,{path:"/services",exact:!0,component:I}),Object(c.jsx)(m.b,{path:"/products",exact:!0,component:T}),Object(c.jsx)(m.b,{path:"/product-detail",exact:!0,component:function(){return Object(c.jsx)(D,{product_detail:e.product_details,search:e.state.search,handle_clear:e.handle_clear,handle_amount:e.handle_amount})}}),Object(c.jsx)(m.b,{path:"/sign-up",exact:!0,component:function(){return Object(c.jsx)(z,{handle_signup:e.handle_signup,logged_in:e.state.logged_in,search:e.state.search})}}),Object(c.jsx)(m.b,{path:"/sign-in",exact:!0,component:function(){return Object(c.jsx)(E,{handle_login:e.handle_login,logged_in:e.state.logged_in,search:e.state.search})}}),Object(c.jsx)(m.b,{path:"/search",exact:!0,component:function(){return Object(c.jsx)(B,{list_product:e.state.list_product,list_search:e.state.list_search,search:e.state.search,handle_sort:e.handle_sort,orderDir:e.state.orderDir,orderBy:e.state.orderBy,handle_type:e.handle_type,type_product:e.state.type_product,handle_detail:e.handle_detail,product_detail:e.product_details,handle_clear:e.handle_clear})}}),Object(c.jsx)(m.b,{path:"/cart",exact:!0,component:function(){return Object(c.jsx)(J,{product_cart:e.product_cart,handle_add:e.handle_add,handle_remove:e.handle_remove,handle_clear_cart:e.handle_clear_cart,search:e.state.search,handle_buy_cart:e.handle_buy_cart,username:e.state.username})}})]})]})})}}]),a}(n.Component);i.a.render(Object(c.jsx)(U,{}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.f91f8f02.chunk.js.map