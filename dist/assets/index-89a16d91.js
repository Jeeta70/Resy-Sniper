import{j as e,B as o,b as S,c as C,d as F,g as A,t as j,r as f,u as I}from"./index-0ada2867.js";import{C as N,i as b,u as g,j as i,F as y,a as m,b as d,d as x,S as R,f as E,g as T,h as k,e as u,I as h,t as v,k as $,c as p,l as B}from"./tabs-2c0b351f.js";import{I as P}from"./index-7501fa9f.js";const V=({image:a,cardStyle:t,setdisableContinueButton:s})=>e.jsxs(N,{className:t,children:[e.jsx(b,{children:e.jsx("img",{src:a,alt:"",className:"h-10 w-24"})}),e.jsx(O,{setdisableContinueButton:s})]}),Y=({image:a,cardStyle:t})=>{const s=g({resolver:v($),defaultValues:{countryCode:"+91",phoneNumber:""}});function c(n){console.log(n)}return e.jsxs(N,{className:t,children:[e.jsx(b,{className:"",children:e.jsx("img",{src:a,alt:"",className:"h-10 w-24 mx-auto"})}),e.jsx(i,{children:e.jsxs(y,{...s,children:[e.jsx("div",{className:"font-medium text-sm text-center mb-4",children:"Your OpenTable phone number"}),e.jsxs("form",{onSubmit:s.handleSubmit(c),className:"space-y-7",children:[e.jsxs("div",{className:"flex",children:[e.jsx(m,{control:s.control,name:"countryCode",render:({field:n})=>e.jsx(e.Fragment,{children:e.jsxs(d,{className:"sm:w-1/3 w-2/12 relative",children:[e.jsx(x,{children:e.jsx(e.Fragment,{children:e.jsxs(R,{value:"+91",onValueChange:n.onChange,children:[e.jsx(E,{className:"rounded-e-none",children:e.jsx(T,{placeholder:"Select a prefix"})}),e.jsx(k,{position:"popper",children:e.jsx(P,{})})]})})}),e.jsx(u,{className:"absolute -bottom-5 text-xs"})]})})}),e.jsx(m,{control:s.control,name:"phoneNumber",render:({field:n})=>e.jsx(e.Fragment,{children:e.jsxs(d,{className:"w-full mt-auto relative",children:[e.jsx(x,{children:e.jsx(e.Fragment,{children:e.jsx(h,{className:"border-gray-300  bg-white rounded-s-none",id:"phone",placeholder:"000-000-0000",...n})})}),e.jsx(u,{className:"absolute -bottom-5 text-xs"})]})})})]}),e.jsx("div",{className:"font-normal text-sm text-center text-light",children:"OpenTable will send you a message with a code"}),e.jsx(o,{className:"w-full",type:"submit",children:"Connect"})]})]})})]})},L=()=>{const{mutate:a,isPending:t}=S({mutationFn:({email:s,password:c})=>C.post(`${F}/api/resylogin`,{email:s,password:c},{headers:{Authorization:`Bearer ${A("access_token")}`}}),onSuccess:()=>{j({description:"sucessfully connected",variant:"dark"})},onError:s=>{j({description:s.response.data.message,variant:"destructive"})}});return{connectResyAccount:a,isLoading:t}},O=({setdisableContinueButton:a})=>{const{connectResyAccount:t,isLoading:s}=L(),[c,n]=f.useState("default"),l=g({resolver:v(B),defaultValues:{email:"donotreply@resysniper.com",password:"Pa$sw0rd23!25Vv"}});function w(r){t(r,{onSuccess:()=>{n("success"),l.reset(),a(!1)},onError:()=>{n("error")}})}return e.jsxs(e.Fragment,{children:[c==="default"&&e.jsx(i,{children:e.jsx(y,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(w),className:"space-y-6",children:[e.jsx(m,{control:l.control,name:"email",render:({field:r})=>e.jsxs(d,{className:"relative",children:[e.jsx(p,{className:"text-sm font-normal",children:"Email"}),e.jsx(x,{children:e.jsx(h,{placeholder:"Your email",...r})}),e.jsx(u,{className:"absolute -bottom-5 text-xs"})]})}),e.jsx(m,{control:l.control,name:"password",render:({field:r})=>e.jsxs(d,{className:"relative",children:[e.jsx(p,{className:"text-sm font-normal",children:"Password"}),e.jsx(x,{children:e.jsx(h,{placeholder:"Your password",...r})}),e.jsx(u,{className:"absolute -bottom-5 text-xs"})]})}),e.jsx(o,{className:"w-full",type:"submit",disabled:s,children:"Connect"})]})})}),c==="success"&&e.jsx(i,{className:"grid gap-4 h-4/6",children:e.jsxs("div",{className:"item-center space-y-10",children:[e.jsx("img",{src:"./connectAccount/connectedTick.svg",alt:"",srcSet:"",className:"mx-auto"}),e.jsx("div",{className:"space-y-1",children:e.jsx("p",{className:"text-sm font-medium text-light text-center",children:"Your Resy account successfully connected"})}),e.jsx(o,{className:"w-full",type:"submit",variant:"selected",disabled:!0,children:"Connected"})]})}),c==="error"&&e.jsx(i,{className:"grid gap-4 h-4/6",children:e.jsxs("div",{className:"item-center space-y-10",children:[e.jsx("img",{src:"./connectAccount/incorrectPasswordIcon.svg",alt:"",srcSet:"",className:"mx-auto"}),e.jsx("div",{className:"space-y-1",children:e.jsx("p",{className:"text-sm font-medium text-light text-center",children:"Email and password do not match"})}),e.jsx(o,{className:"w-full",type:"submit",variant:"default",onClick:()=>n("default"),children:"TryAgain"})]})})]})},U=()=>{const a=I(),[t,s]=f.useState(!0);return e.jsxs("div",{className:"sm:h-svh sm:w-svw flex flex-col justify-evenly p-4 sm:justify-evenly",children:[e.jsxs("div",{className:"mb-3 sm:mb-0 text-center",children:[e.jsx("h1",{className:"sm:mb-14 text-primary text-4xl font-bold",children:"RESY SNIPER"}),e.jsxs("span",{children:[e.jsx("h2",{className:"font-bold text-2xl",children:"Connect Accounts"}),e.jsx("p",{className:"text-light font-normal text-sm",children:"At least one account should be connected"})]})]}),e.jsxs("div",{className:"flex flex-col justify-center items-center sm:flex-row gap-4 sm:gap-10",children:[e.jsx(V,{image:"./connectAccount/resy.svg",cardStyle:"w-full sm:w-[450px] mr-0 sm:ml-auto h-96",setdisableContinueButton:s}),e.jsx(Y,{image:"./connectAccount/openTable.svg",cardStyle:"w-full sm:w-[450px] mr-0 sm:mr-auto h-96"})]}),e.jsx(o,{onClick:()=>a("/subscription"),className:"w-full sm:w-auto mt-4 sm:mt-0 mx-auto",variant:t?"outline":"primary",type:"submit",disabled:t,children:"Continue"})]})};export{U as default};
