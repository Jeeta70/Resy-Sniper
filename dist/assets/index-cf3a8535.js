import{i as d,r as m,j as e,e as j,B as h}from"./index-0ada2867.js";import{C as u,j as f,a3 as g}from"./tabs-2c0b351f.js";import{a as N}from"./restaurant-bd94c07c.js";import{M as b}from"./map-pin-64bcb84d.js";import{P as y}from"./phone-f15161f8.js";const v=d("ChevronsLeft",[["polyline",{points:"11 17 6 12 11 7",key:"1ueymj"}],["polyline",{points:"18 17 13 12 18 7",key:"18fy0m"}]]),k=d("ChevronsRight",[["polyline",{points:"13 17 18 12 13 7",key:"oq0h83"}],["polyline",{points:"6 17 11 12 6 7",key:"3k300q"}]]),w=d("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),p=({children:s,autoSlide:l=!1,autoSlideInterval:r=3e3,className:a=""})=>{const[o,i]=m.useState(0),c=()=>i(t=>t===0?s.length-1:t-1),n=()=>i(t=>t===s.length-1?0:t+1);return m.useEffect(()=>{if(!l)return;const t=setInterval(n,r);return()=>clearInterval(t)},[]),e.jsxs("div",{className:j("overflow-hidden relative sm:h-1/3 h-[300px]",a),children:[e.jsx("div",{className:"flex h-full transition-transform ease-out duration-500 max-h-1/2",style:{transform:`translateX(-${o*100}%)`},children:s}),e.jsxs("div",{className:"absolute inset-0 flex items-center justify-between p-4",children:[e.jsx("button",{onClick:c,className:"p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white",children:e.jsx(v,{})}),e.jsx("button",{onClick:n,className:"p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white",children:e.jsx(k,{})})]}),e.jsx("div",{className:"absolute bottom-4 right-0 left-0",children:e.jsx("div",{className:"flex items-center justify-center gap-2",children:s.map((t,x)=>e.jsx("div",{className:`transition-all w-10 h-2 bg-white rounded-full${o===x?"p-1 bg-red-600":"bg-opacity-50"}`},x))})})]})},_=({restaurant:s,handleSelectResturant:l})=>e.jsx(e.Fragment,{children:e.jsxs(u,{className:"",children:[e.jsx("img",{className:"rounded-t-lg max-h-[100px] w-full",src:s.cover_image_url,alt:""}),e.jsxs(f,{className:"w-3/5 p-6",children:[e.jsx("p",{className:"my-3 text-xs font-normal text-gray-700 dark:text-gray-400 hidden",children:"$$$$"}),e.jsxs("h5",{className:"mb-2 text-base font-normal tracking-tight ",children:[s.address_1,",",s.locality,",",s.country,",",s.postal_code]}),e.jsxs("p",{className:"mb-3 text-xs font-normal text-blue",children:[e.jsx(b,{className:"inline-block",size:15}),e.jsx("span",{className:"ml-1 text-xs",children:" Get Directions"})]}),e.jsxs("p",{className:"mb-3 text-xs font-normal text-blue",children:[e.jsx(y,{className:"inline-block",size:15}),e.jsxs("span",{className:"ml-1 text-xs",children:[" ",s.restuarant_phone_number]})]}),e.jsxs("p",{className:"mb-3 text-xs font-normal text-blue",children:[e.jsx(w,{className:"inline-block",size:15}),e.jsx("a",{className:"ml-1 text-xs",target:"_blank",href:s.restaurant_website,children:s.restaurant_website})]})]}),e.jsxs(g,{className:"flex gap-3",children:[e.jsx(h,{variant:"outline",className:"w-full",onClick:l,children:"Select"}),e.jsx(h,{variant:"primary",className:"w-full",children:"Reserve"})]})]})}),z=()=>{const{singleResturant:s,isLoading:l,isSuccess:r}=N(),a=m.useMemo(()=>{if(!l&&r)return s==null?void 0:s.data},[l,r,s]);function o(){}const i=["https://i.ibb.co/ncrXc2V/1.png","https://i.ibb.co/B3s7v4h/5.png","https://i.ibb.co/yg7BSdM/4.png","https://i.ibb.co/yg7BSdM/7.png"];return e.jsx(e.Fragment,{children:l?"Is loading":e.jsx("main",{className:"pt-8 max-h-screen sm:overflow-y-hidden",children:e.jsxs("div",{className:"mx-auto max-w-screen-xl px-8 ",children:[e.jsx("header",{className:"mb-4 lg:mb-6",children:e.jsxs("p",{className:"text-2xl font-bold",children:[" ",a.venue_name]})}),e.jsx("div",{className:"col-span-2 block sm:hidden ",children:e.jsx(p,{autoSlide:!1,children:i.map((c,n)=>e.jsx("img",{src:c,alt:"",className:"w-full rounded-lg "},n))})}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-5 gap-2",children:[e.jsxs("article",{className:"format format-sm  col-span-3 sm:p-10 ",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("p",{className:"my-3 text-xs font-medium text-light ",children:"$$$$"}),e.jsxs("p",{className:"my-3  text-xs font-medium text-light",children:[e.jsx(b,{className:"inline-block"})," Prospective height"]})]}),e.jsx("h4",{className:"font-bold text-sm mb-3",children:"Why We Like it"}),e.jsx("p",{className:"text-xs leading-5 font-normal text-light mb-3",children:"This is not just any hotel lobby bar. There’s nothing better than nestling yourself into one of the plush velvet or leather armchairs, martini in hand, and gazing up at that incredible nine-floor atrium. And Tom Colicchio’s classic small bites never disappoint."}),e.jsx("h4",{className:"font-bold text-sm mb-3",children:"Need to know"}),e.jsx("p",{className:"text-xs leading-5 font-normal text-light mb-3",children:a.need_to_know_description}),e.jsxs("h4",{className:"font-bold text-sm mb-4",children:["About ",a.venue_name]}),e.jsx("p",{className:"text-xs leading-5 font-normal text-light mb-3",children:a.about_description})]}),e.jsxs("div",{className:"col-span-2  ",children:[e.jsx(p,{autoSlide:!1,className:"hidden sm:block",children:i.map((c,n)=>e.jsx("img",{src:c,alt:"",className:"w-full rounded-lg "},n))}),e.jsx("div",{className:"mt-3",children:e.jsx(_,{restaurant:a,handleSelectResturant:o})})]})]})]})})})};export{z as default};
