import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe--m5YJ3pT.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./createLucideIcon-DTLDqpze.js";import{n as o,t as s}from"./utils-Dm4OyE3Q.js";var c,l;function u(){return(u=t((()=>{i(),c=[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]],l=a(`chevron-down`,c)})))()}var d,f,p;function m(){return(m=t((()=>{d=e(n(),1),u(),o(),f=r(),p=d.forwardRef(({className:e,error:t,disabled:n,children:r,...i},a)=>(0,f.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,f.jsxs)(`div`,{className:`relative flex items-center`,children:[(0,f.jsx)(`select`,{ref:a,"data-slot":`select`,disabled:n,"aria-invalid":!!t,className:s(`w-full appearance-none rounded-[9px] border-[1.5px] border-(--border) bg-(--surface) px-3 py-2 pr-9 text-sm text-(--text) outline-none transition-colors`,`focus-visible:border-(--primary) focus-visible:ring-3 focus-visible:ring-(--primary)/20`,`aria-invalid:border-(--danger) aria-invalid:focus-visible:ring-(--danger)/20`,`disabled:cursor-not-allowed disabled:border-(--border) disabled:bg-(--search-bg) disabled:text-(--text-muted)`,e),...i,children:r}),(0,f.jsx)(l,{className:`pointer-events-none absolute right-3 size-4 text-(--text-muted)`})]}),t?(0,f.jsx)(`p`,{className:`text-xs text-(--danger)`,children:t}):null]})),p.displayName=`Select`,p.__docgenInfo={description:``,methods:[],displayName:`Select`,props:{error:{required:!1,tsType:{name:`string`},description:``}}}})))()}var h,g,_,v,y,b,x,S;function C(){return(C=t((()=>{m(),h=r(),g={title:`Components/Forms/Select`,component:p,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{disabled:{control:`boolean`},error:{control:`text`},className:{control:!1,table:{disable:!0}},children:{control:!1,table:{disable:!0}}}},_=(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`option`,{value:``,children:`Select a country`}),(0,h.jsx)(`option`,{value:`us`,children:`United States`}),(0,h.jsx)(`option`,{value:`uk`,children:`United Kingdom`}),(0,h.jsx)(`option`,{value:`de`,children:`Germany`}),(0,h.jsx)(`option`,{value:`fr`,children:`France`})]}),v={args:{defaultValue:``},render:e=>(0,h.jsx)(p,{...e,children:_})},y={args:{defaultValue:`de`},render:e=>(0,h.jsx)(p,{...e,children:_})},b={args:{error:`Please select a country.`},render:e=>(0,h.jsx)(p,{...e,children:_})},x={args:{disabled:!0,defaultValue:`de`},render:e=>(0,h.jsx)(p,{...e,children:_})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ""
  },
  render: args => <Select {...args}>{options}</Select>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "de"
  },
  render: args => <Select {...args}>{options}</Select>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Please select a country."
  },
  render: args => <Select {...args}>{options}</Select>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "de"
  },
  render: args => <Select {...args}>{options}</Select>
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithValue`,`WithError`,`Disabled`]})))()}C();export{v as Default,x as Disabled,b as WithError,y as WithValue,S as __namedExportsOrder,g as default};