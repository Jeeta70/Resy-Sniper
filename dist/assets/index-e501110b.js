import{j as s,B as j}from"./index-2db72f4d.js";import{u as h,C as u,p,q as f,F as b,a,b as c,c as n,d as o,I as l,e as t,r as N}from"./index-b727b4c8.js";import{t as C}from"./zod-c4fcd526.js";const m=({image:d,cardStyle:x})=>{const r=h({resolver:C(N),defaultValues:{email:"",password:""}});function i(e){console.log(e)}return s.jsxs(u,{className:x,children:[s.jsx(p,{children:s.jsx("img",{src:d,alt:"",className:"h-10 w-24"})}),s.jsx(f,{children:s.jsx(b,{...r,children:s.jsxs("form",{onSubmit:r.handleSubmit(i),className:"space-y-6",children:[s.jsx(a,{control:r.control,name:"email",render:({field:e})=>s.jsxs(c,{children:[s.jsx(n,{children:"Email"}),s.jsx(o,{children:s.jsx(l,{placeholder:"Your email",...e})}),s.jsx(t,{})]})}),s.jsx(a,{control:r.control,name:"password",render:({field:e})=>s.jsxs(c,{children:[s.jsx(n,{children:"Password"}),s.jsx(o,{children:s.jsx(l,{placeholder:"Your password",...e})}),s.jsx(t,{})]})}),s.jsx(j,{className:"w-full",type:"submit",children:"Connect"})]})})})]})},S=()=>s.jsxs("div",{className:"h-svh ",children:[s.jsxs("div",{className:"mb-3 sm:mb-0 sm:h-1/4 text-center",children:[s.jsx("h1",{className:"mb-3 sm:mb-14 text-[#F94633] text-5xl font-bold",children:"RESY SNIPER"}),s.jsxs("span",{children:[s.jsx("h2",{className:"font-bold text-3xl",children:"Coneect Account"}),s.jsx("p",{className:"text-[#12171A]",children:"At least one accoint should be connected"})]})]}),s.jsxs("div",{className:"flex flex-col justify-center items-center sm:flex-row gap-4 sm:gap-10",children:[s.jsx(m,{image:"./connectAccount/resy.svg",cardStyle:"w-[350px] ml-0 sm:ml-auto"}),s.jsx(m,{image:"./connectAccount/openTable.svg",cardStyle:"w-[350px] mr-0 sm:mr-auto"})]})]});export{S as default};
