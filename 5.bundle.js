(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{73:function(e,a,i){"use strict";i.d(a,"c",(function(){return n})),i.d(a,"d",(function(){return s})),i.d(a,"b",(function(){return l})),i.d(a,"a",(function(){return o}));var r=i(11),t=i.n(r);const n={images:t.a.arrayOf(t.a.string.isRequired),isPremium:t.a.bool.isRequired,title:t.a.string.isRequired,isFavorite:t.a.bool.isRequired,rating:t.a.number.isRequired,type:t.a.string.isRequired,bedrooms:t.a.number.isRequired,maxAdults:t.a.number.isRequired,price:t.a.number.isRequired,goods:t.a.arrayOf(t.a.string.isRequired),host:t.a.shape({avatarUrl:t.a.string.isRequired,id:t.a.number.isRequired,isPro:t.a.bool.isRequired,name:t.a.string.isRequired}),description:t.a.string.isRequired},s={comment:t.a.string.isRequired,date:t.a.string.isRequired,id:t.a.number.isRequired,rating:t.a.number.isRequired,user:t.a.shape({avatarUrl:t.a.string.isRequired,id:t.a.number.isRequired,isPro:t.a.bool.isRequired,name:t.a.string.isRequired})},l={id:t.a.number.isRequired,isFavorite:t.a.bool.isRequired,isPremium:t.a.bool.isRequired,previewImage:t.a.string.isRequired,price:t.a.number.isRequired,rating:t.a.number.isRequired,title:t.a.string.isRequired,type:t.a.string.isRequired,city:t.a.shape({name:t.a.string.isRequired})},o={avatarUrl:t.a.string.isRequired,email:t.a.string.isRequired,id:t.a.number.isRequired,isPro:t.a.bool.isRequired,name:t.a.string.isRequired}},74:function(e,a,i){"use strict";var r=i(0),t=i.n(r),n=i(18),s=i(12),l=i(11),o=i.n(l),m=i(19),u=i(73),c=i(31),d=i(30),p=i(29);const _={border:"none",backgroundColor:"transparent"},g=({isAuth:e,user:a,onLogout:i})=>t.a.createElement("header",{className:"header"},t.a.createElement("div",{className:"container"},t.a.createElement("div",{className:"header__wrapper"},t.a.createElement("div",{className:"header__left"},t.a.createElement(m.b,{className:"header__logo-link header__logo-link--active",to:"/"},t.a.createElement("img",{className:"header__logo",src:"img/logo.svg",alt:"6 cities logo",width:"81",height:"41"}))),t.a.createElement("nav",{className:"header__nav"},t.a.createElement("ul",{className:"header__nav-list"},t.a.createElement("li",{className:"header__nav-item user"},t.a.createElement(m.b,{className:"header__nav-link header__nav-link--profile",to:e?"/favorites":"/login"},t.a.createElement("div",{className:"header__avatar-wrapper user__avatar-wrapper",style:e&&{backgroundImage:a.avatarUrl}||{}}),t.a.createElement("span",{className:e?"header__user-name user__name":"header__login"},e&&a.email||"Sign in"))),e&&t.a.createElement("li",{className:"header__nav-item user"},t.a.createElement("button",{className:"header__nav-link header__nav-link--profile",style:_,onClick:()=>i(),"data-testid":"logout"},t.a.createElement("span",{className:"header__login"},"Logout"))))))));g.propTypes={isAuth:o.a.bool.isRequired,user:o.a.shape(u.a),onLogout:o.a.func.isRequired};const b={onLogout:d.c};a.a=Object(s.d)(Object(n.b)(e=>({user:Object(c.b)(e)}),b),p.a)(g)},92:function(e,a,i){"use strict";i.r(a);var r=i(0),t=i.n(r),n=i(11),s=i.n(n),l=i(74),o=i(18),m=i(30);const u=({onSubmit:e})=>{const[a,i]=Object(r.useState)(""),[n,s]=Object(r.useState)("");return t.a.createElement("form",{className:"login__form form",action:"#",method:"post",onSubmit:i=>{i.preventDefault(),e({email:a,password:n})},"data-testid":"form"},t.a.createElement("div",{className:"login__input-wrapper form__input-wrapper"},t.a.createElement("label",{className:"visually-hidden"},"E-mail"),t.a.createElement("input",{className:"login__input form__input",type:"email",name:"email",placeholder:"Email",required:!0,autoComplete:"on",value:a,onChange:e=>{i(e.target.value)},"data-testid":"email"})),t.a.createElement("div",{className:"login__input-wrapper form__input-wrapper"},t.a.createElement("label",{className:"visually-hidden"},"Password"),t.a.createElement("input",{className:"login__input form__input",type:"password",name:"password",placeholder:"Password",required:!0,autoComplete:"on",value:n,onChange:e=>{s(e.target.value)},"data-testid":"password"})),t.a.createElement("button",{className:"login__submit form__submit button",type:"submit"},"Sign in"))};u.propTypes={onSubmit:s.a.func.isRequired};const c={onSubmit:m.b};var d=Object(o.b)(null,c)(u),p=i(29),_=i(3);const g=({isAuth:e})=>e?t.a.createElement(_.a,{to:"/"}):t.a.createElement("div",{className:"page page--gray page--login"},t.a.createElement(l.a,null),t.a.createElement("main",{className:"page__main page__main--login"},t.a.createElement("div",{className:"page__login-container container"},t.a.createElement("section",{className:"login"},t.a.createElement("h1",{className:"login__title"},"Sign in"),t.a.createElement(d,null)),t.a.createElement("section",{className:"locations locations--login locations--current"},t.a.createElement("div",{className:"locations__item"},t.a.createElement("a",{className:"locations__item-link",href:"#"},t.a.createElement("span",null,"Amsterdam")))))));g.propTypes={isAuth:s.a.bool.isRequired};a.default=Object(p.a)(g)}}]);
//# sourceMappingURL=5.bundle.js.map