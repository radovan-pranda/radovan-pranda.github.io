(this["webpackJsonpradovan-pranda-github-io"]=this["webpackJsonpradovan-pranda-github-io"]||[]).push([[5],{42:function(a,e,t){"use strict";t.d(e,"a",(function(){return n}));t(0);var n={npm:"https://www.npmjs.com/~unexplored_radovan",paypal:"https://paypal.me/prandaradovan",googleplay:"https://play.google.com/store/apps/developer?id=Radovan+Pranda",msstore:"",linkedin:"https://www.linkedin.com/in/radovan-pranda/",jaspravim:"https://www.jaspravim.sk/profil/deltoy",jaudelam:"https://www.jaudelam.cz/profil/deltoy",twitter:"https://twitter.com/RadovanPranda"}},46:function(a){a.exports=JSON.parse('{"a":"https://github.com/radovan-pranda"}')},47:function(a,e,t){a.exports=t.p+"static/media/loading.6e3e05e2.svg"},56:function(a,e,t){"use strict";var n=t(2),l=t(6),s=t(0),r=t.n(s),c=t(7),o=t.n(c),i=t(41),m=t.n(i),p=t(40),d={light:o.a.bool,dark:o.a.bool,full:o.a.bool,fixed:o.a.string,sticky:o.a.string,color:o.a.string,role:o.a.string,tag:p.o,className:o.a.string,cssModule:o.a.object,expand:o.a.oneOfType([o.a.bool,o.a.string])},u=function(a){var e,t=a.expand,s=a.className,c=a.cssModule,o=a.light,i=a.dark,d=a.fixed,u=a.sticky,b=a.color,g=a.tag,v=Object(l.a)(a,["expand","className","cssModule","light","dark","fixed","sticky","color","tag"]),h=Object(p.k)(m()(s,"navbar",function(a){return!1!==a&&(!0===a||"xs"===a?"navbar-expand":"navbar-expand-"+a)}(t),((e={"navbar-light":o,"navbar-dark":i})["bg-"+b]=b,e["fixed-"+d]=d,e["sticky-"+u]=u,e)),c);return r.a.createElement(g,Object(n.a)({},v,{className:h}))};u.propTypes=d,u.defaultProps={tag:"nav",expand:!1},e.a=u},64:function(a,e,t){"use strict";var n=t(2),l=t(6),s=t(0),r=t.n(s),c=t(7),o=t.n(c),i=t(41),m=t.n(i),p=t(40),d={tabs:o.a.bool,pills:o.a.bool,vertical:o.a.oneOfType([o.a.bool,o.a.string]),horizontal:o.a.string,justified:o.a.bool,fill:o.a.bool,navbar:o.a.bool,card:o.a.bool,tag:p.o,className:o.a.string,cssModule:o.a.object},u=function(a){var e=a.className,t=a.cssModule,s=a.tabs,c=a.pills,o=a.vertical,i=a.horizontal,d=a.justified,u=a.fill,b=a.navbar,g=a.card,v=a.tag,h=Object(l.a)(a,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),f=Object(p.k)(m()(e,b?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(a){return!1!==a&&(!0===a||"xs"===a?"flex-column":"flex-"+a+"-column")}(o),{"nav-tabs":s,"card-header-tabs":g&&s,"nav-pills":c,"card-header-pills":g&&c,"nav-justified":d,"nav-fill":u}),t);return r.a.createElement(v,Object(n.a)({},h,{className:f}))};u.propTypes=d,u.defaultProps={tag:"ul",vertical:!1},e.a=u},65:function(a,e,t){"use strict";var n=t(2),l=t(6),s=t(0),r=t.n(s),c=t(7),o=t.n(c),i=t(41),m=t.n(i),p=t(40),d={tag:p.o,active:o.a.bool,className:o.a.string,cssModule:o.a.object},u=function(a){var e=a.className,t=a.cssModule,s=a.active,c=a.tag,o=Object(l.a)(a,["className","cssModule","active","tag"]),i=Object(p.k)(m()(e,"nav-item",!!s&&"active"),t);return r.a.createElement(c,Object(n.a)({},o,{className:i}))};u.propTypes=d,u.defaultProps={tag:"li"},e.a=u},66:function(a,e,t){"use strict";var n=t(2),l=t(6),s=t(0),r=t.n(s),c=t(7),o=t.n(c),i=t(41),m=t.n(i),p=t(40),d={tag:p.o,className:o.a.string,cssModule:o.a.object},u=function(a){var e=a.className,t=a.cssModule,s=(a.active,a.tag),c=Object(l.a)(a,["className","cssModule","active","tag"]),o=Object(p.k)(m()(e,"navbar-text"),t);return r.a.createElement(s,Object(n.a)({},c,{className:o}))};u.propTypes=d,u.defaultProps={tag:"span"},e.a=u},82:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return z}));var n=t(12),l=t(13),s=t(16),r=t(15),c=t(14),o=t(0),i=t.n(o),m=t(1),p=(t(8),t(43)),d=t.n(p),u=t(44),b=t(71),g=t(56),v=t(72),h=t(64),f=t(65),E=t(66),k=t(73),j=t(74),N=t(46),y=t(42),O=[{path:"/about-me",exact:!0,component:i.a.lazy((function(){return t.e(9).then(t.bind(null,78))}))},{path:"/donate",component:i.a.lazy((function(){return Promise.all([t.e(1),t.e(10)]).then(t.bind(null,70))}))}],w=t(45),x=t(47),M=t.n(x),z=function(a){Object(r.a)(t,a);var e=Object(c.a)(t);function t(a){var l;return Object(n.a)(this,t),(l=e.call(this,a)).showMenu=function(){this.setState({isOpen:!this.state.isOpen})}.bind(Object(s.a)(l)),l.navigate=function(a){this.props.history.push(a)}.bind(Object(s.a)(l)),l.state={json:[],value:{},isOpen:!1},l}return Object(l.a)(t,[{key:"render",value:function(){var a=this;return i.a.createElement(o.Fragment,null,i.a.createElement(g.a,{color:"light light-normal text-center",light:!0,expand:"md",className:"bg-white"},i.a.createElement(b.a,{className:"container-nav"},i.a.createElement(w.HashLink,{className:"navbar-brand",to:"/"},i.a.createElement("img",{src:"./assets/logo-radovanpranda.png"})),i.a.createElement("button",{className:"navbar-toggler",onClick:this.showMenu},i.a.createElement(d.a,{path:u.j,size:1.1})),i.a.createElement(v.a,{isOpen:this.state.isOpen,navbar:!0},i.a.createElement(h.a,{className:"mr-auto",navbar:!0},i.a.createElement(f.a,null,i.a.createElement(w.HashLink,{className:"nav-link",to:"/#projects"},"Projects")),i.a.createElement(f.a,null,i.a.createElement(w.HashLink,{className:"nav-link",to:"/#collaboration"},"Collaboration")),i.a.createElement(f.a,null,i.a.createElement(w.HashLink,{className:"nav-link",to:"/about-me"},"About me"))),i.a.createElement(E.a,null,i.a.createElement("a",{href:y.a.linkedin,className:"btn-ico-link btn-linkedin"},i.a.createElement(d.a,{path:u.i,size:1.1})),i.a.createElement("a",{href:y.a.twitter,className:"btn-ico-link btn-twitter"},i.a.createElement(d.a,{path:u.l,size:1.1})),i.a.createElement("a",{href:y.a.googleplay,className:"btn-ico-link btn-googleplay"},i.a.createElement(d.a,{path:u.e,size:1.1})),i.a.createElement("a",{href:N.a,className:"btn-ico-link btn-github"},i.a.createElement(d.a,{path:u.d,size:1.1})),i.a.createElement("a",{href:y.a.npm,className:"btn-ico-link btn-npm"},i.a.createElement(d.a,{path:u.k,size:1.6})),i.a.createElement(w.HashLink,{to:"/donate",className:"btn-ico-link btn-donate"},i.a.createElement(d.a,{path:u.f,size:1.1})," ",i.a.createElement("span",null,"Donate")))))),i.a.createElement(o.Suspense,{fallback:i.a.createElement(b.a,null,i.a.createElement("div",{class:"loading"},i.a.createElement("img",{src:M.a,alt:"",height:"50",width:"50"})))},i.a.createElement(m.g,null,O.map((function(e,t){return e.component?i.a.createElement(m.d,{key:t,path:e.path,exact:e.exact,name:e.name,render:function(t){return i.a.createElement(e.component,Object.assign({},t,{page_loading:a.props.loading,loading:a.props.loading,processing:a.props.processing,onRedirect:a.navigate}))}}):null})))),i.a.createElement("footer",null,i.a.createElement(b.a,null,i.a.createElement(k.a,null,i.a.createElement(j.a,{sm:6,className:"copy-ls"},i.a.createElement("img",{src:"./assets/logo-radovanpranda.png",className:"logo-footer navbar-brand disabled mr-0"}),i.a.createElement("div",{className:"copy mt-1"},"Radovan Pranda \xa9 ",(new Date).getFullYear())),i.a.createElement(j.a,{sm:6,className:"copy-rs"},i.a.createElement("div",{className:"copy"},"Developed, designed and maintained by ",i.a.createElement("a",{href:"https://radovan-pranda.github.io/"},"Radovan Pranda")))))))}}]),t}(o.Component)}}]);
//# sourceMappingURL=5.7932e666.chunk.js.map