(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{7234:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return v}});var r=n(2640),i=n(7294),o=n(9473),s=n(2925),c=n(4093),u=n(9008),l=n.n(u),a=n(7650),d=n(1163),f=n(1586),h=n(8110),g=n(5900),p=n(5893),v=!0;t.default=function(){var e=(0,o.I0)(),t=(0,d.useRouter)().query.id,n=(0,o.v9)(function(e){return e.post}),u=n.mainPosts,v=n.hasMorePosts,w=n.loadUserPostsLoading,m=n.retweetError,x=(0,o.v9)(function(e){return e.user}).userInfo,j=(0,a.YD)(),y=(0,r.Z)(j,3),b=y[0],_=y[1];return y[2],(0,i.useEffect)(function(){_&&v&&!w&&e({type:f.x5,lastId:u[u.length-1]&&u[u.length-1].id,data:t})},[u.length,v,t]),(0,i.useEffect)(function(){m&&alert(m)},[m]),(0,p.jsxs)(g.Z,{children:[x&&(0,p.jsxs)(l(),{children:[(0,p.jsxs)("title",{children:[x.nickname,"님의 글"]}),(0,p.jsx)("meta",{name:"description",content:"".concat(x.nickname,"님의 게시글")}),(0,p.jsx)("meta",{property:"og:title",content:"".concat(x.nickname,"님의 게시글")}),(0,p.jsx)("meta",{property:"og:description",content:"".concat(x.nickname,"님의 게시글")}),(0,p.jsx)("meta",{property:"og:image",content:"https://nodebird.com/favicon.ico"}),(0,p.jsx)("meta",{property:"og:url",content:"https://nodebird.com/user/".concat(t)})]}),x?(0,p.jsx)(s.Z,{actions:[(0,p.jsxs)("div",{children:["짹짹",(0,p.jsx)("br",{}),x.Posts]},"twit"),(0,p.jsxs)("div",{children:["팔로잉",(0,p.jsx)("br",{}),x.Followings]},"following"),(0,p.jsxs)("div",{children:["팔로워",(0,p.jsx)("br",{}),x.Followers]},"follower")],children:(0,p.jsx)(s.Z.Meta,{avatar:(0,p.jsx)(c.C,{children:x.nickname[0]}),title:x.nickname})}):null,u.map(function(e){return(0,p.jsx)(h.Z,{post:e},e.id)}),(0,p.jsx)("div",{ref:v&&!w?b:void 0,style:{height:40}})]})}},217:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[id]",function(){return n(7234)}])},7650:function(e,t,n){"use strict";let r;n.d(t,{YD:function(){return u}});var i=n(7294);let o=new Map,s=new WeakMap,c=0;function u({threshold:e,delay:t,trackVisibility:n,rootMargin:u,root:l,triggerOnce:a,skip:d,initialInView:f,fallbackInView:h,onChange:g}={}){var p;let[v,w]=i.useState(null),m=i.useRef(),[x,j]=i.useState({inView:!!f,entry:void 0});m.current=g,i.useEffect(()=>{let i;if(!d&&v)return i=function(e,t,n={},i=r){if(void 0===window.IntersectionObserver&&void 0!==i){let r=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}let{id:u,observer:l,elements:a}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var n;return`${t}_${"root"===t?(n=e.root)?(s.has(n)||(c+=1,s.set(n,c.toString())),s.get(n)):"0":e[t]}`}).toString(),n=o.get(t);if(!n){let r;let i=new Map,s=new IntersectionObserver(t=>{t.forEach(t=>{var n;let o=t.isIntersecting&&r.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=i.get(t.target))||n.forEach(e=>{e(o,t)})})},e);r=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:i},o.set(t,n)}return n}(n),d=a.get(e)||[];return a.has(e)||a.set(e,d),d.push(t),l.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(a.delete(e),l.unobserve(e)),0===a.size&&(l.disconnect(),o.delete(u))}}(v,(e,t)=>{j({inView:e,entry:t}),m.current&&m.current(e,t),t.isIntersecting&&a&&i&&(i(),i=void 0)},{root:l,rootMargin:u,threshold:e,trackVisibility:n,delay:t},h),()=>{i&&i()}},[Array.isArray(e)?e.toString():e,v,l,u,a,d,n,h,t]);let y=null==(p=x.entry)?void 0:p.target,b=i.useRef();v||!y||a||d||b.current===y||(b.current=y,j({inView:!!f,entry:void 0}));let _=[w,x.inView,x.entry];return _.ref=_[0],_.inView=_[1],_.entry=_[2],_}}},function(e){e.O(0,[885,337,913,778,535,774,888,179],function(){return e(e.s=217)}),_N_E=e.O()}]);