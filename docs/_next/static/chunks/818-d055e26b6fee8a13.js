"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[818],{3815:function(e,s,l){l.d(s,{WL:function(){return g},wp:function(){return m},Ak:function(){return w},ol:function(){return y},Vp:function(){return A}});var t=l(5893),a=l(7294),n=l(5675),r=l.n(n),i={src:"/dash-reviews-frontend/_next/static/media/pic-1.a9500cda.png",height:36,width:36,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AMS5v8zS1oSCiGIzNpyPk+Hp7c7IzI1lbwDIzdNSW2IAAAAAMjwAAACWnaLZ2NyYfYYAnqStAAAAMTQ3T0JAPjQ0ADhCzcLGyKisAGBdZykoJkk+PGRKQmJTUQsiI6OboNrAwgBkZ3BiTUeJaF2wjH6lfm+Sb16GjJPSvcEAipKdaE1Gqnhms4x9u4p4gmZdwcbLz8XKAIuQmT9GTGRDO41mYGVRTH9LS9LEyNHO0wBtdoNPVl0AEhVBMjI+NjOkcWOxmp7Nx81Uvln2Qek9YAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},c=l(1664),o=l.n(c),d=l(9019),x=l.n(d);function m(e){let{children:s,className:l}=e;return(0,t.jsx)("div",{className:null!=l?l:"",children:(0,t.jsxs)("div",{className:"container py-4 flex flex-row items-center gap-2 sm:gap-6 text-onyx",children:[(0,t.jsx)(o(),{href:"/",children:(0,t.jsxs)("div",{className:"flex flex-row items-center gap-1 text-sm",children:[(0,t.jsx)("p",{className:"".concat(x().className," font-bold"),children:"SPOTTA"}),(0,t.jsx)("span",{className:"px-1 py-px text-white text-xs bg-cornflower",children:"NG"})]})}),(0,t.jsx)("div",{className:"flex-1",children:s}),(0,t.jsxs)("div",{className:"ms-auto flex flex-row items-center justify-end gap-px sm:gap-2",children:[(0,t.jsx)("p",{className:"hidden sm:block",children:"Welcome!"}),(0,t.jsx)("div",{className:"self-stretch",children:(0,t.jsx)(r(),{width:32,src:i,alt:"profile pic",className:"h-full aspect-square rounded-full"})})]})]})})}let u=[{name:"Schools",value:"school"},{name:"Hospitals",value:"hospital"},{name:"Resort Park",value:"resort-park"},{name:"Shopping Malls",value:"shopping-mall"},{name:"Airport",value:"airport"},{name:"Train Station",value:"train-station"},{name:"Nightlife",value:"nightlife"}];var f=l(6582),h=l(7771),p=l(7696),j=l(3935);function g(e){let{openModal:s}=e,[l,n]=(0,a.useState)(!1),[r,i]=(0,a.useState)([]),[c,o]=(0,a.useState)(0),[d,x]=(0,a.useState)(""),[m,g]=(0,a.useState)(!1),[v,N]=(0,a.useState)(!1),b=(0,a.useRef)([]),{reviews:w,updateReviews:A}=(0,f.QK)(),k=(e,s)=>{b.current[s]=e},y=e=>{let s=e.target.value,l=[...r];if(r.includes(s)){let e=l.indexOf(s);l.splice(e,1)}else l.push(s);i(l)},C=(e,s)=>{o(s+1),b.current.forEach((e,l)=>{var t,a,n;null===(t=e.firstElementChild)||void 0===t||t.classList.remove("fill-transparent","fill-golden"),l<=s?null===(a=e.firstElementChild)||void 0===a||a.classList.add("fill-golden"):null===(n=e.firstElementChild)||void 0===n||n.classList.add("fill-transparent")})};return(0,a.useEffect)(()=>{r.length>0&&null!==c&&d.trim().length>0?N(!0):N(!1)},[r,c,d]),(0,a.useEffect)(()=>{console.log(w)},[w]),(0,j.createPortal)((0,t.jsxs)("div",{className:"fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10",children:[(0,t.jsx)("div",{className:"absolute z-10 w-full h-full bg-dark-blue-grey/90",onClick:()=>s(!1)}),(0,t.jsxs)("div",{className:"relative z-20 w-11/12 sm:w-4/5 max-w-screen-md p-4 flex flex-col items-stretch justify-start gap-4 rounded-md bg-milk-white text-sm",children:[l&&(0,t.jsx)("div",{className:"absolute left-0 top-0 z-[5] h-full w-full bg-transparent",onClick:()=>n(!1)}),(0,t.jsx)("p",{className:"self-center",children:"Review Location"}),(0,t.jsx)("h3",{className:"text-xl",children:"Bonnie and Clyde Street, Ajao State, Lagos"}),(0,t.jsxs)("div",{className:"bg-alice-blue rounded-md",children:[(0,t.jsxs)("button",{onClick:()=>{n(e=>!e)},className:"w-full p-2 flex flex-row item-center justify-between",children:[(0,t.jsx)("p",{className:"truncate",children:r.length>0?r.join(", "):"Select Amenities"}),(0,t.jsx)(p.kc8,{className:"text-2xl"})]}),l&&(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)("div",{className:"absolute left-0 right-0 z-10 w-full p-2 grid grid-cols-3 md:grid-cols-5 content-start gap-y-4 bg-blue-100",children:u.map((e,s)=>(0,t.jsxs)("div",{className:"flex flex-row items-center justify-start gap-2 text-sm",children:[(0,t.jsx)("input",{id:"".concat(e.value),type:"checkbox",value:e.value,onChange:y,checked:r.includes(e.value)}),(0,t.jsx)("label",{htmlFor:"".concat(e.value),children:e.name})]},"item-".concat(s)))})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Rate Location"}),(0,t.jsx)("div",{className:"flex flex-row items-center justify-start gap-2",children:[...[,,,,,].keys()].map((e,s)=>(0,t.jsx)("div",{ref:e=>{k(e,s)},children:(0,t.jsx)(h.pHD,{className:"text-2xl stroke-[15px] fill-transparent cursor-pointer",onClick:e=>C(e,s)})},"item-".concat(s)))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Write Review"}),(0,t.jsx)("div",{children:(0,t.jsx)("textarea",{rows:3,className:"w-full p-2 rounded-md bg-alabaster resize-none border-[1px] border-cornflower",value:d,onChange:e=>x(e.target.value)})})]}),(0,t.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,t.jsx)("input",{id:"anon",type:"checkbox",checked:m,onChange:()=>g(e=>!e)}),(0,t.jsx)("label",{htmlFor:"anon",children:"Post as Anonymous"})]}),(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,t.jsx)("div",{children:(0,t.jsx)("button",{className:"w-full py-2 bg-cornflower border-[1px] border-cornflower text-white  rounded-md disabled:opacity-50 disabled:cursor-not-allowed",onClick:()=>{let e=[...w],l={locationId:0,locationName:"Bonny and Clyde Street, Ajao Estate, Lagos",date:new Date,commentData:{opName:"Jane Doe",anon:m,opId:1,commentText:d,likeCount:0,dislikeCount:0,commentCount:0,amenities:r,rating:c,pictureUrls:[]}};e.push(l),A(e),localStorage.setItem("db",JSON.stringify(e)),console.log("submitted successfully"),console.log(l),s(!1)},disabled:!v,children:"SUBMIT"})}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{className:"w-full py-2 bg-white text-cornflower border-[1px] border-cornflower rounded-md",onClick:()=>s(!1),children:"CANCEL"})})]})]})]}),document.body)}var v=l(2091),N=l(9332),b={src:"/dash-reviews-frontend/_next/static/media/avatar.579f7bc3.svg",height:32,width:32,blurWidth:0,blurHeight:0};function w(e){let{review:{locationName:s,commentData:{opName:l,likeCount:n,dislikeCount:i,commentCount:c,commentText:o,rating:d,anon:x,amenities:m}},showAllStars:u}=e,f=(0,N.usePathname)(),p=(0,a.useMemo)(()=>l.split(" ").map((e,s)=>s>0?e[0]:e).join(" ")+".",[l]);return(0,t.jsxs)("div",{className:"min-w-[80%] p-4 flex flex-col items-stretch justify-start whitespace-normal border-b-[1px] border-b-gray-200 ".concat("/"===f?"bg-white rounded-xl":"gap-2"),children:[(0,t.jsxs)("div",{className:"flex flex-row items-center justify-start gap-2",children:[(0,t.jsx)(r(),{src:b,width:32,height:32,alt:"pic",className:"h-fit aspect-square rounded-full"}),(0,t.jsxs)("div",{className:"flex ".concat("/"===f?"flex-col items-start":"flex-col md:flex-row items-start md:items-center md:gap-2"),children:[(0,t.jsx)("p",{className:"font-bold",children:x?"Anonymous":p}),(0,t.jsx)("p",{className:"text-xs",children:"2 months ago"})]}),"/"===f?(0,t.jsxs)("div",{className:"ms-auto",children:[(0,t.jsx)("p",{className:"text-xs font-bold",children:s.split(" ").slice(-2).join(" ")}),(0,t.jsx)("div",{className:"flex flex-row items-center",children:[...[,,,,,].keys()].map((e,s)=>(0,t.jsx)(h.pHD,{className:"stroke-[30px] ".concat(s<=d?"fill-golden":"fill-transparent")},"item-".concat(s)))})]}):(0,t.jsxs)("div",{className:"ms-auto flex flex-row items-center gap-2",children:[(0,t.jsx)(h.pHD,{className:"fill-golden"}),(0,t.jsx)("p",{children:d.toFixed(1)})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:o})}),(0,t.jsxs)("div",{className:"mt-auto flex flex-row items-center justify-start gap-3 text-base",children:[(0,t.jsxs)("div",{className:"flex flex-row items-center justify-start gap-1",children:[(0,t.jsx)(h.L7p,{className:"".concat("/"===f?"fill-grey-goose":"fill-transparent stroke-[50px] stroke-down-river")}),(0,t.jsx)("p",{children:n})]}),(0,t.jsxs)("div",{className:"flex flex-row items-center justify-start gap-1",children:[(0,t.jsx)(h.Ov5,{className:"".concat("/"===f?"fill-grey-goose":"fill-transparent stroke-[50px] stroke-down-river")}),(0,t.jsx)("p",{children:i})]}),(0,t.jsxs)("div",{className:"flex flex-row items-center justify-start gap-1 ms-6",children:[(0,t.jsx)(v.diV,{className:"".concat("/"===f?"fill-grey-goose":"fill-transparent stroke-[50px] stroke-down-river")}),(0,t.jsx)("p",{children:c})]}),"/"===f&&(0,t.jsx)("div",{className:"ms-auto px-2 py-px rounded-xl border-[1px] border-red-900 bg-red-200 text-xs",children:m[0]})]})]})}function A(e){let{name:s}=e;return(0,t.jsx)("div",{className:"px-2.5 py-1 border-[1px] border-dark-jungle-green rounded text-black bg-white text-center text-xs capitalize",children:(0,t.jsx)("p",{children:s})})}var k=l(8318);function y(e){let{className:s,iconClassName:l,inputClassName:a,value:n,onChange:r}=e;return(0,t.jsxs)("div",{className:"flex items-center gap-3 rounded-md px-3 border-[1px] ".concat(null!=s?s:""),children:[(0,t.jsx)(k.uFR,{className:l}),(0,t.jsx)("input",{className:"w-full bg-transparent outline-none py-4 text-sm ".concat(null!=a?a:""),placeholder:"Enter address",value:n,onChange:e=>r(e.target.value)}),n.length>0&&(0,t.jsx)(k.bjh,{className:"ms-auto",onClick:()=>r("")})]})}},7818:function(e,s,l){l.d(s,{R:function(){return i}});var t=l(5893);l(7294);var a=l(3815),n=l(2471),r=l.n(n);function i(e){let{children:s,navbarClassName:l,navbarContent:n}=e;return(0,t.jsxs)("div",{className:"h-full flex flex-col items-stretch overflow-hidden pb-4 ".concat(r().className),children:[(0,t.jsx)(a.wp,{className:l,children:n}),s]})}}}]);