(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return l});a(53);var n=a(0),r=a.n(n),i=a(155),o=a(150),c=a(151),u=a(152);t.default=function(e){var t=e.data;return r.a.createElement(u.a,null,r.a.createElement("div",{className:Object(i.a)("display:flex;background-color:lightblue;flex-direction:column;")},r.a.createElement("h1",{className:Object(i.a)("display:inline-block;border-bottom:1px solid;")},"Amazing Pandas Eating Things"),r.a.createElement("h4",null,t.allMarkdownRemark.totalCount," Posts"),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id},r.a.createElement(o.Link,{to:t.fields.slug,className:Object(i.a)("text-decoration:none;color:inherit;")},r.a.createElement("h3",{className:Object(i.a)("margin-bottom:",Object(c.a)(.25),";")},t.frontmatter.title," ",r.a.createElement("span",{className:Object(i.a)("color:#bbb;")},"— ",t.frontmatter.date)),r.a.createElement("p",null,t.excerpt)))})))};var l="2068765159"},149:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return b}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(148),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(27);a.d(t,"waitForRouteChange",function(){return l.c});var s=a(149),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var m=a(38);a.d(t,"parsePath",function(){return m.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function b(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(156),r=a.n(n),i=a(157),o=a.n(i),c=new r.a(o.a),u=c.rhythm},152:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),o=a(155),c=a(150),u=a(151);t.a=function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"3892401927",render:function(e){return i.a.createElement("div",{className:Object(o.a)("margin:0 auto;max-width:700px;padding:",Object(u.a)(2),";padding-top:",Object(u.a)(1.5),";")},i.a.createElement(c.Link,{to:"/"},i.a.createElement("h3",{className:Object(o.a)("margin-bottom:",Object(u.a)(2),";display:inline-block;font-style:normal;")},e.site.siteMetadata.title)),i.a.createElement(c.Link,{to:"/about/",className:Object(o.a)("float:right;")},"About"),t)},data:n})}},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Pandas Eating Lots"}}}}},154:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(52),u=a(1),l=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=component---src-pages-index-js-9fb4eeabf2578bbe566b.js.map