(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6540:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return x},default:function(){return j}});var r=n(2640),i=n(7294),s=n(9473),o=n(9008),a=n.n(o),c=n(7650),u=n(5900),l=n(4538),d=n(9673),f=n(1889),h=n(2485),p=n(1586),v=n(7463),g=n(5893),m=function(){var e=(0,s.v9)(function(e){return e.post}),t=e.imagePaths,n=e.addPostDone,o=(0,s.I0)(),a=(0,i.useRef)(),c=(0,h.Z)(""),u=(0,r.Z)(c,3),m=u[0],y=u[1],x=u[2];(0,i.useEffect)(function(){n&&x("")},[n]);var j=(0,i.useCallback)(function(){if(!m||!m.trim())return alert("게시글을 작성하세요.");var e=new FormData;t.forEach(function(t){e.append("image",t)}),e.append("content",m),o({type:p.z9,data:e})},[m,t]),w=(0,i.useCallback)(function(){a.current.click()},[a.current]),b=(0,i.useCallback)(function(e){console.log("images: "+e.target.files);var t=new FormData;[].forEach.call(e.target.files,function(e){t.append("image",e)}),o({type:p.QA,data:t})},[]),_=(0,i.useCallback)(function(e){return function(){o({type:p.Po,data:e})}},[]);return(0,g.jsxs)(l.Z,{style:{margin:"10px 0 20px"},encType:"mutipart/form-data",onFinish:j,children:[(0,g.jsx)(d.Z.TextArea,{value:m,onChange:y,maxLength:140,placeholder:"어떤 신기한 일이 있었나요?"}),(0,g.jsxs)("div",{children:[(0,g.jsx)("input",{type:"file",name:"image",multiple:!0,hidden:!0,ref:a,onChange:b}),(0,g.jsx)(f.Z,{onClick:w,children:"이미지 업로드"}),(0,g.jsx)(f.Z,{type:"primary",style:{float:"right"},htmlType:"submit",children:"짹짹"})]}),(0,g.jsx)("div",{children:t.map(function(e,t){return(0,g.jsxs)("div",{style:{display:"inline-block"},children:[(0,g.jsx)("img",{src:"".concat(v.y,"/").concat(e),style:{width:"200px"},alt:e}),(0,g.jsx)("div",{children:(0,g.jsx)(f.Z,{onClick:_(t),children:"제거"})})]},e)})})]})},y=n(8110),x=!0,j=function(){var e=(0,s.I0)(),t=(0,s.v9)(function(e){return e.user}).me,n=(0,s.v9)(function(e){return e.post}),o=n.mainPosts,l=n.hasMorePosts,d=n.loadPostsLoading,f=n.retweetError;(0,i.useEffect)(function(){f&&alert(f)},[f]);var h=(0,c.YD)(),v=(0,r.Z)(h,3),x=v[0],j=v[1];return v[2],(0,i.useEffect)(function(){if(j&&l&&!d){var t,n=null===(t=o[o.length-1])||void 0===t?void 0:t.id;e({type:p.aO,lastId:n})}},[j,l,d,o]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(a(),{children:[(0,g.jsx)("meta",{charSet:"utf-8"}),(0,g.jsx)("title",{children:"NodeBird"})]}),(0,g.jsxs)(u.Z,{children:[t&&(0,g.jsx)(m,{}),o.map(function(e){return(0,g.jsx)(y.Z,{post:e},e.id)}),(0,g.jsx)("div",{ref:l&&!d?x:void 0,style:{height:40}})]})]})}},5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6540)}])},7650:function(e,t,n){"use strict";let r;n.d(t,{YD:function(){return c}});var i=n(7294);let s=new Map,o=new WeakMap,a=0;function c({threshold:e,delay:t,trackVisibility:n,rootMargin:c,root:u,triggerOnce:l,skip:d,initialInView:f,fallbackInView:h,onChange:p}={}){var v;let[g,m]=i.useState(null),y=i.useRef(),[x,j]=i.useState({inView:!!f,entry:void 0});y.current=p,i.useEffect(()=>{let i;if(!d&&g)return i=function(e,t,n={},i=r){if(void 0===window.IntersectionObserver&&void 0!==i){let r=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}let{id:c,observer:u,elements:l}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var n;return`${t}_${"root"===t?(n=e.root)?(o.has(n)||(a+=1,o.set(n,a.toString())),o.get(n)):"0":e[t]}`}).toString(),n=s.get(t);if(!n){let r;let i=new Map,o=new IntersectionObserver(t=>{t.forEach(t=>{var n;let s=t.isIntersecting&&r.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=s),null==(n=i.get(t.target))||n.forEach(e=>{e(s,t)})})},e);r=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:i},s.set(t,n)}return n}(n),d=l.get(e)||[];return l.has(e)||l.set(e,d),d.push(t),u.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(l.delete(e),u.unobserve(e)),0===l.size&&(u.disconnect(),s.delete(c))}}(g,(e,t)=>{j({inView:e,entry:t}),y.current&&y.current(e,t),t.isIntersecting&&l&&i&&(i(),i=void 0)},{root:u,rootMargin:c,threshold:e,trackVisibility:n,delay:t},h),()=>{i&&i()}},[Array.isArray(e)?e.toString():e,g,u,c,l,d,n,h,t]);let w=null==(v=x.entry)?void 0:v.target,b=i.useRef();g||!w||l||d||b.current===w||(b.current=w,j({inView:!!f,entry:void 0}));let _=[m,x.inView,x.entry];return _.ref=_[0],_.inView=_[1],_.entry=_[2],_}}},function(e){e.O(0,[885,337,913,778,535,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);