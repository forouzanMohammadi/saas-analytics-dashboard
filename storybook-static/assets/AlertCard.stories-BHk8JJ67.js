import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./createLucideIcon-DTLDqpze.js";import{n as i,t as a}from"./utils-Dm4OyE3Q.js";import{n as o,t as s}from"./dist-BhQfhzKx.js";var c,l;function u(){return(u=e((()=>{n(),c=[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]],l=r(`circle-check`,c)})))()}var d,f;function p(){return(p=e((()=>{n(),d=[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]],f=r(`circle-x`,d)})))()}var m,h;function g(){return(g=e((()=>{n(),m=[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]],h=r(`sparkles`,m)})))()}var _,v;function y(){return(y=e((()=>{n(),_=[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]],v=r(`triangle-alert`,_)})))()}function b({variant:e=`insight`,title:t,description:n,icon:r,className:i}){let o=r??C[e??`insight`];return(0,x.jsxs)(`div`,{className:a(S({variant:e}),i),children:[(0,x.jsx)(o,{size:17,strokeWidth:2,className:`mt-0.5 shrink-0`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{className:`text-[13px] font-semibold`,children:t}),n?(0,x.jsx)(`p`,{className:`mt-0.5 text-[12px] opacity-80`,children:n}):null]})]})}var x,S,C;function w(){return(w=e((()=>{o(),g(),y(),u(),p(),i(),x=t(),S=s(`flex items-start gap-2.5 rounded-2xl px-4 py-3.5`,{variants:{variant:{insight:`bg-[var(--primary-bg)] text-[var(--primary-dark)]`,warning:`bg-[var(--warning-bg)] text-[var(--warning-text)]`,success:`bg-[var(--success-bg)] text-[var(--success)]`,danger:`bg-[var(--danger-bg)] text-[var(--danger)]`}},defaultVariants:{variant:`insight`}}),C={insight:h,warning:v,success:l,danger:f},b.__docgenInfo={description:``,methods:[],displayName:`AlertCard`,props:{title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},icon:{required:!1,tsType:{name:`LucideIcon`},description:``},className:{required:!1,tsType:{name:`string`},description:``},variant:{defaultValue:{value:`"insight"`,computed:!1},required:!1}},composes:[`VariantProps`]}})))()}var T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{g(),w(),T={title:`Components/Cards/AlertCard`,component:b,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`insight`,`warning`,`success`,`danger`]},title:{control:`text`},description:{control:`text`},icon:{control:!1},className:{control:!1}}},E={args:{variant:`insight`,title:`New insight available`,description:`Your conversion rate increased by 12% this week.`}},D={args:{variant:`warning`,title:`Usage limit approaching`,description:`You have used 85% of your monthly usage limit.`}},O={args:{variant:`success`,title:`Payment successful`,description:`Your subscription has been successfully renewed.`}},k={args:{variant:`danger`,title:`Payment failed`,description:`We couldn't process your latest payment.`}},A={args:{variant:`insight`,title:`Custom notification`,description:`This alert demonstrates a custom icon.`,icon:h}},j={args:{variant:`success`,title:`Changes saved successfully`}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "insight",
    title: "New insight available",
    description: "Your conversion rate increased by 12% this week."
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Usage limit approaching",
    description: "You have used 85% of your monthly usage limit."
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Payment successful",
    description: "Your subscription has been successfully renewed."
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    title: "Payment failed",
    description: "We couldn't process your latest payment."
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "insight",
    title: "Custom notification",
    description: "This alert demonstrates a custom icon.",
    icon: Sparkles
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Changes saved successfully"
  }
}`,...j.parameters?.docs?.source}}},M=[`Insight`,`Warning`,`Success`,`Danger`,`CustomIcon`,`WithoutDescription`]})))()}N();export{A as CustomIcon,k as Danger,E as Insight,O as Success,D as Warning,j as WithoutDescription,M as __namedExportsOrder,T as default};