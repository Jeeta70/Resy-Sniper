import{n as i,j as e,k as o,p as d,B as l,r as c,u}from"./index-26cc47ac.js";import{C as x,j as m,X as h,Y as v,Z as p,_ as t,W as j,T as g,U as f,V as y}from"./index-3736381e.js";import{P as b}from"./plus-a7376916.js";const N=i("GripHorizontal",[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]]),C=d("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground",active:"bg-[#336DDE] text-white rounded-sm"}},defaultVariants:{variant:"default"}});function w({className:s,variant:a,...n}){return e.jsx("div",{className:o(C({variant:a}),s),...n})}const k=()=>e.jsxs(x,{className:"flex h-[20vh]  my-5",children:[e.jsx("div",{children:e.jsx("img",{className:"rounded-l-lg h-full",src:"../restaurant/restaurant.png",alt:""})}),e.jsxs(m,{className:"space-y-2 my-auto w-full",children:[e.jsx("div",{className:"space-y-1",children:e.jsx(w,{variant:"active",children:"Active"})}),e.jsxs("div",{className:"space-y-1 flex justify-between",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-base font-bold",children:"The Coop at Double Chicken Please"}),e.jsx("p",{className:"font-medium text-xs text-light",children:"Cancel reservation 4  people Dec 23, Dec30 5:00-7:00PM, 10:00-11:00 PM"})]}),e.jsx("div",{children:e.jsxs(h,{children:[e.jsx(v,{asChild:!0,children:e.jsx(l,{variant:"ghost",className:"h-8 w-8 p-0",children:e.jsx(N,{className:"h-4 w-4"})})}),e.jsxs(p,{align:"end",children:[e.jsx(t,{onClick:()=>navigator.clipboard.writeText("payment.id"),children:"Edit"}),e.jsx(t,{children:"Pause"}),e.jsx(t,{children:"Cancel"})]})]})})]})]})]}),D=()=>{const[s]=c.useState([{id:1,value:"all",label:"All",count:16},{id:2,value:"active",label:"Active",count:2},{id:3,value:"paused",label:"Paused",count:1},{id:4,value:"completed",label:"Completed",count:12},{id:5,value:"canceled",label:"Canceled",count:1}]),[a,n]=c.useState(s[0]);return e.jsx(e.Fragment,{children:e.jsxs(j,{defaultValue:"all",className:"",children:[e.jsx(g,{className:"grid grid-cols-5 w-1/2",children:s.map(r=>e.jsx(f,{onClick:()=>n(r),value:r.value,children:r.label.concat("(").concat(r.count.toString()).concat(")")},r.id))}),e.jsx(y,{value:(a==null?void 0:a.value)??n(s[0]),className:"",children:Array.from({length:a.count}).map(()=>e.jsx(k,{}))})]})})},A=()=>{const s=u();return e.jsxs("div",{className:"w-full h-screen p-10",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{className:" font-bold text-2xl",children:"My Reservations"}),e.jsxs(l,{variant:"primary",className:"hidden sm:inline-flex",onClick:()=>s("/reservations/add-reservation"),children:[e.jsx(b,{className:"mr-3"})," Add Reservation"]})]}),e.jsx(D,{})]})};export{A as default};
