import{j as s,u as n,r as c}from"./index-0ada2867.js";import{C as o,j as m,a3 as d}from"./tabs-2c0b351f.js";import{I as x,S as j}from"./searchAndFilterSection-5bc2eb39.js";import{u as h}from"./restaurant-bd94c07c.js";import{S as e}from"./skeleton-3ab4137b.js";import"./map-pin-64bcb84d.js";import"./index-92be0a52.js";const u=()=>{const a=[1,2,3,4,5,6,7,8,9,10,11,12];return s.jsx("div",{className:"grid grid-cols-4 gap-4",children:a.map(l=>s.jsxs(o,{className:"h-[42vh]",children:[s.jsx(e,{className:"rounded-t-lg h-1/2 w-full "}),s.jsxs(m,{children:[s.jsx(e,{className:"my-3 w-1/5 ",children:s.jsx(e,{className:"inline-block"})}),s.jsx(e,{className:"my-2",children:s.jsx(e,{className:"inline-block"})}),s.jsx(e,{className:"mb-3 w-1/3 ",children:s.jsx(e,{className:"inline-block"})})]}),s.jsxs(d,{className:"flex gap-3",children:[s.jsx(e,{className:"w-full h-1/2",children:s.jsx(e,{className:"inline-block"})}),s.jsx(e,{className:"w-full h-1/2",children:s.jsx(e,{className:"inline-block"})})]})]},l))})},N=({restaurants:a,sectionTitle:l})=>{const r=n();return s.jsxs("div",{children:[s.jsxs("div",{className:"flex justify-between",children:[s.jsx("h1",{className:"my-4 text-lg font-semibold	",children:l}),s.jsx("h1",{className:"my-4 text-primary",role:"button",onClick:()=>r("/restaurants/top-picks"),children:"See all"})]}),s.jsx("div",{className:"grid grid-cols-4 gap-4",children:a.map((i,t)=>s.jsx(x,{restaurant:i,layout:{displayFooter:!0}},t))})]})},S=()=>{const{searchRestaurants:a,isLoading:l}=h(),r=c.useMemo(()=>{if(!l)return(a==null?void 0:a.data)??[]},[l,a==null?void 0:a.data]);return s.jsxs("div",{className:"w-full h-screen p-10",children:[s.jsx("h1",{className:"font-bold text-2xl mb-4",children:"Restaurants"}),s.jsx(j,{}),s.jsx("div",{className:"mt-5",children:l&&s.jsx(u,{})}),!l&&s.jsx(N,{restaurants:r,sectionTitle:"All Restaurants"})]})};export{S as default};
