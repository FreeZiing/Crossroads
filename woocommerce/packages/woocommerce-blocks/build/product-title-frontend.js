(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[54],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n(103);var c=n(47);const r=()=>c.m>1},135:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return b}));var c=n(72),r=n(114),o=n(61),s=n(63);const a=e=>Object(o.a)(e)?JSON.parse(e)||{}:Object(s.a)(e)?e:{},l=e=>{if(!Object(r.a)()||"function"!=typeof c.__experimentalGetSpacingClassesAndStyles)return{style:{}};const t=Object(s.a)(e)?e:{},n=a(t.style);return Object(c.__experimentalGetSpacingClassesAndStyles)({...t,style:n})},i=e=>{const t=Object(s.a)(e)?e:{},n=a(t.style),c=Object(s.a)(n.typography)?n.typography:{};return{style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:c.fontSize,lineHeight:c.lineHeight,fontWeight:c.fontWeight,textTransform:c.textTransform,fontFamily:t.fontFamily}}},u=e=>{if(!Object(r.a)())return{className:"",style:{}};const t=Object(s.a)(e)?e:{},n=a(t.style);return Object(c.__experimentalUseColorProps)({...t,style:n})},b=e=>{if(!Object(r.a)())return{className:"",style:{}};const t=Object(s.a)(e)?e:{},n=a(t.style);return Object(c.__experimentalUseBorderProps)({...t,style:n})}},256:function(e,t,n){"use strict";var c=n(10),r=n.n(c),o=n(0),s=n(19),a=n(4),l=n.n(a);n(257),t.a=e=>{let{className:t="",disabled:n=!1,name:c,permalink:a="",rel:i,style:u,onClick:b,...d}=e;const p=l()("wc-block-components-product-name",t);if(n){const e=d;return Object(o.createElement)("span",r()({className:p},e,{dangerouslySetInnerHTML:{__html:Object(s.decodeEntities)(c)}}))}return Object(o.createElement)("a",r()({className:p,href:a,rel:i},d,{dangerouslySetInnerHTML:{__html:Object(s.decodeEntities)(c)},style:u}))}},257:function(e,t){},329:function(e,t){},417:function(e,t,n){"use strict";n.r(t);var c=n(118),r=n(0),o=n(4),s=n.n(o),a=n(46),l=n(114),i=n(256),u=n(31),b=(n(329),n(135));const d=e=>{let{children:t,headingLevel:n,elementType:c="h"+n,...o}=e;return Object(r.createElement)(c,o,t)};var p=Object(c.withProductDataContext)(e=>{const{className:t,headingLevel:n=2,showProductLink:c=!0,align:o}=e,{parentClassName:p}=Object(a.useInnerBlockLayoutContext)(),{product:m}=Object(a.useProductDataContext)(),{dispatchStoreEvent:y}=Object(u.a)(),f=Object(b.b)(e),O=Object(b.c)(e),j=Object(b.d)(e);return m.id?Object(r.createElement)(d,{headingLevel:n,className:s()(t,f.className,"wc-block-components-product-title",{[p+"__product-title"]:p,["wc-block-components-product-title--align-"+o]:o&&Object(l.a)()}),style:Object(l.a)()?{...O.style,...j.style,...f.style}:{}},Object(r.createElement)(i.a,{disabled:!c,name:m.name,permalink:m.permalink,rel:c?"nofollow":"",onClick:()=>{y("product-view-link",{product:m})}})):Object(r.createElement)(d,{headingLevel:n,className:s()(t,f.className,"wc-block-components-product-title",{[p+"__product-title"]:p,["wc-block-components-product-title--align-"+o]:o&&Object(l.a)()}),style:Object(l.a)()?{...O.style,...j.style,...f.style}:{}})});let m={headingLevel:{type:"number",default:2},showProductLink:{type:"boolean",default:!0},productId:{type:"number",default:0}};Object(l.a)()&&(m={...m,align:{type:"string"},color:{type:"string"},customColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"}});var y=m;t.default=Object(c.withFilteredAttributes)(y)(p)},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}));const c=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function r(e,t){return c(e)&&t in e}}}]);