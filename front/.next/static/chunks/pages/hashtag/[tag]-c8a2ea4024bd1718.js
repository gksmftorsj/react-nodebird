(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{3722:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSP:function(){return f}});var r=n(2640),i=n(7294),s=n(9473),o=n(1163),u=n(7650),a=n(1586),c=n(8110),l=n(5900),d=n(5893),f=!0;e.default=function(){var t=(0,s.I0)(),e=(0,o.useRouter)().query.tag,n=(0,s.v9)(function(t){return t.post}),f=n.mainPosts,h=n.hasMorePosts,g=n.loadHashtagPostsLoading,v=(0,u.YD)(),w=(0,r.Z)(v,3),_=w[0],p=w[1];return w[2],(0,i.useEffect)(function(){p&&h&&!loadPostsLoading&&t({type:a.az,lastId:f[f.length-1]&&f[f.length-1].id,data:e})},[p,h,g,f]),(0,d.jsxs)(l.Z,{children:[f.map(function(t){return(0,d.jsx)(c.Z,{post:t},t.id)}),(0,d.jsx)("div",{ref:h&&!g?_:void 0,style:{height:40}})]})}},7077:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hashtag/[tag]",function(){return n(3722)}])},7650:function(t,e,n){"use strict";let r;n.d(e,{YD:function(){return a}});var i=n(7294);let s=new Map,o=new WeakMap,u=0;function a({threshold:t,delay:e,trackVisibility:n,rootMargin:a,root:c,triggerOnce:l,skip:d,initialInView:f,fallbackInView:h,onChange:g}={}){var v;let[w,_]=i.useState(null),p=i.useRef(),[y,b]=i.useState({inView:!!f,entry:void 0});p.current=g,i.useEffect(()=>{let i;if(!d&&w)return i=function(t,e,n={},i=r){if(void 0===window.IntersectionObserver&&void 0!==i){let r=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}let{id:a,observer:c,elements:l}=function(t){let e=Object.keys(t).sort().filter(e=>void 0!==t[e]).map(e=>{var n;return`${e}_${"root"===e?(n=t.root)?(o.has(n)||(u+=1,o.set(n,u.toString())),o.get(n)):"0":t[e]}`}).toString(),n=s.get(e);if(!n){let r;let i=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{var n;let s=e.isIntersecting&&r.some(t=>e.intersectionRatio>=t);t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=s),null==(n=i.get(e.target))||n.forEach(t=>{t(s,e)})})},t);r=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:o,elements:i},s.set(e,n)}return n}(n),d=l.get(t)||[];return l.has(t)||l.set(t,d),d.push(e),c.observe(t),function(){d.splice(d.indexOf(e),1),0===d.length&&(l.delete(t),c.unobserve(t)),0===l.size&&(c.disconnect(),s.delete(a))}}(w,(t,e)=>{b({inView:t,entry:e}),p.current&&p.current(t,e),e.isIntersecting&&l&&i&&(i(),i=void 0)},{root:c,rootMargin:a,threshold:t,trackVisibility:n,delay:e},h),()=>{i&&i()}},[Array.isArray(t)?t.toString():t,w,c,a,l,d,n,h,e]);let E=null==(v=y.entry)?void 0:v.target,R=i.useRef();w||!E||l||d||R.current===E||(R.current=E,b({inView:!!f,entry:void 0}));let k=[_,y.inView,y.entry];return k.ref=k[0],k.inView=k[1],k.entry=k[2],k}}},function(t){t.O(0,[885,337,913,778,535,774,888,179],function(){return t(t.s=7077)}),_N_E=t.O()}]);