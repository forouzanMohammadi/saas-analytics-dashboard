import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe--m5YJ3pT.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./createLucideIcon-DTLDqpze.js";import{n as a,t as o}from"./utils-Dm4OyE3Q.js";var s,c;function l(){return(l=e((()=>{r(),s=[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]],c=i(`chevron-left`,s)})))()}var u,d;function f(){return(f=e((()=>{r(),u=[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]],d=i(`chevron-right`,u)})))()}function p(e,t){if(t<=7)return Array.from({length:t},(e,t)=>t+1);let n=[1];e>3&&n.push(`ellipsis`);let r=Math.max(2,e-1),i=Math.min(t-1,e+1);for(let e=r;e<=i;e++)n.push(e);return e<t-2&&n.push(`ellipsis`),n.push(t),n}function m({page:e,totalPages:t,onPageChange:n,className:r}){let i=p(e,t);return(0,h.jsxs)(`div`,{className:o(`flex items-center gap-1`,r),children:[(0,h.jsx)(`button`,{type:`button`,disabled:e<=1,onClick:()=>n(e-1),"aria-label":`Previous page`,className:`flex size-8 items-center justify-center rounded-lg border-[1.5px] border-(--border) bg-(--surface) text-(--text-secondary) disabled:cursor-not-allowed disabled:opacity-40`,children:(0,h.jsx)(c,{size:15})}),i.map((t,r)=>t===`ellipsis`?(0,h.jsx)(`span`,{className:`flex size-8 items-center justify-center text-[12.5px] text-(--text-muted)`,children:`…`},`ellipsis-${r}`):(0,h.jsx)(`button`,{type:`button`,onClick:()=>n(t),"aria-current":t===e?`page`:void 0,className:o(`flex size-8 items-center justify-center rounded-lg text-[12.5px] font-medium transition-colors`,t===e?`bg-(--primary) text-white`:`text-(--text-secondary) hover:bg-(--search-bg)`),children:t},t)),(0,h.jsx)(`button`,{type:`button`,disabled:e>=t,onClick:()=>n(e+1),"aria-label":`Next page`,className:`flex size-8 items-center justify-center rounded-lg border-[1.5px] border-(--border) bg-(--surface) text-(--text-secondary) disabled:cursor-not-allowed disabled:opacity-40`,children:(0,h.jsx)(d,{size:15})})]})}var h;function g(){return(g=e((()=>{l(),f(),a(),h=n(),m.__docgenInfo={description:``,methods:[],displayName:`Pagination`,props:{page:{required:!0,tsType:{name:`number`},description:``},totalPages:{required:!0,tsType:{name:`number`},description:``},onPageChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(page: number) => void`,signature:{arguments:[{type:{name:`number`},name:`page`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var _,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{_=t(),g(),v=n(),y={title:`Components/Data Display/Pagination`,component:m,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{page:{control:`number`,min:1},totalPages:{control:`number`,min:1},onPageChange:{control:!1,table:{disable:!0}},className:{control:!1}}},b={args:{page:1,totalPages:5,onPageChange:()=>{}}},x={args:{page:1,totalPages:10,onPageChange:()=>{}},render:e=>{let[t,n]=(0,_.useState)(e.page);return(0,v.jsx)(m,{...e,page:t,onPageChange:n})}},S={args:{page:1,totalPages:10,onPageChange:()=>{}}},C={args:{page:5,totalPages:10,onPageChange:()=>{}}},w={args:{page:10,totalPages:10,onPageChange:()=>{}}},T={args:{page:12,totalPages:50,onPageChange:()=>{}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    totalPages: 5,
    onPageChange: () => {}
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    totalPages: 10,
    onPageChange: () => {}
  },
  render: args => {
    const [page, setPage] = useState(args.page);
    return <Pagination {...args} page={page} onPageChange={setPage} />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    totalPages: 10,
    onPageChange: () => {}
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    page: 5,
    totalPages: 10,
    onPageChange: () => {}
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    page: 10,
    totalPages: 10,
    onPageChange: () => {}
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    page: 12,
    totalPages: 50,
    onPageChange: () => {}
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Interactive`,`FirstPage`,`MiddlePage`,`LastPage`,`ManyPages`]})))()}D();export{b as Default,S as FirstPage,x as Interactive,w as LastPage,T as ManyPages,C as MiddlePage,E as __namedExportsOrder,y as default};