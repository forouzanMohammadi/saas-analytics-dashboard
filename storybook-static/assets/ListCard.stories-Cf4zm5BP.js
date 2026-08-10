import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe--m5YJ3pT.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./utils-Dm4OyE3Q.js";function a({className:e,children:t}){return(0,s.jsx)(`div`,{className:i(`divide-y divide-(--border) rounded-2xl border border-(--border) bg-(--surface) shadow-[0_1px_12px_rgba(30,27,46,0.03)]`,e),children:t})}function o({avatar:e,title:t,subtitle:n,value:r,className:a}){return(0,s.jsxs)(`div`,{className:i(`flex items-center justify-between gap-3 px-4 py-3.5`,a),children:[(0,s.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,s.jsx)(`div`,{className:`flex size-9 shrink-0 items-center justify-center rounded-full bg-(--avatar-bg) text-[11px] font-medium text-(--primary-dark)`,children:e}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{className:`text-sm font-medium text-(--text)`,children:t}),n?(0,s.jsx)(`p`,{className:`text-xs text-(--text-secondary)`,children:n}):null]})]}),r?(0,s.jsx)(`span`,{className:`text-sm font-medium text-(--text)`,children:r}):null]})}var s;function c(){return(c=e((()=>{t(),r(),s=n(),a.__docgenInfo={description:``,methods:[],displayName:`ListCard`,props:{className:{required:!1,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}},o.__docgenInfo={description:``,methods:[],displayName:`ListCardItem`,props:{avatar:{required:!0,tsType:{name:`string`},description:``},title:{required:!0,tsType:{name:`string`},description:``},subtitle:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var l,u,d,f,p,m,h;function g(){return(g=e((()=>{c(),l=n(),u={title:`Components/Cards/ListCard`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{className:{control:!1},children:{control:!1}}},d={args:{children:null},render:()=>(0,l.jsx)(`div`,{className:`w-105`,children:(0,l.jsxs)(a,{children:[(0,l.jsx)(o,{avatar:`JD`,title:`John Doe`,subtitle:`john@example.com`,value:`$2,480`}),(0,l.jsx)(o,{avatar:`AS`,title:`Anna Smith`,subtitle:`anna@example.com`,value:`$1,920`}),(0,l.jsx)(o,{avatar:`MK`,title:`Michael Kim`,subtitle:`michael@example.com`,value:`$1,640`})]})})},f={args:{children:null},render:()=>(0,l.jsx)(`div`,{className:`w-105`,children:(0,l.jsxs)(a,{children:[(0,l.jsx)(o,{avatar:`JD`,title:`John Doe`,subtitle:`john@example.com`}),(0,l.jsx)(o,{avatar:`AS`,title:`Anna Smith`,subtitle:`anna@example.com`}),(0,l.jsx)(o,{avatar:`MK`,title:`Michael Kim`,subtitle:`michael@example.com`})]})})},p={args:{children:null},render:()=>(0,l.jsx)(`div`,{className:`w-105`,children:(0,l.jsxs)(a,{children:[(0,l.jsx)(o,{avatar:`JD`,title:`John Doe`,value:`$2,480`}),(0,l.jsx)(o,{avatar:`AS`,title:`Anna Smith`,value:`$1,920`}),(0,l.jsx)(o,{avatar:`MK`,title:`Michael Kim`,value:`$1,640`})]})})},m={args:{children:null},render:()=>(0,l.jsx)(`div`,{className:`w-105`,children:(0,l.jsx)(a,{children:(0,l.jsx)(o,{avatar:`JD`,title:`John Doe`,subtitle:`john@example.com`,value:`$2,480`})})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="w-105">\r
      <ListCard>\r
        <ListCardItem avatar="JD" title="John Doe" subtitle="john@example.com" value="$2,480" />\r
\r
        <ListCardItem avatar="AS" title="Anna Smith" subtitle="anna@example.com" value="$1,920" />\r
\r
        <ListCardItem avatar="MK" title="Michael Kim" subtitle="michael@example.com" value="$1,640" />\r
      </ListCard>\r
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="w-105">\r
      <ListCard>\r
        <ListCardItem avatar="JD" title="John Doe" subtitle="john@example.com" />\r
\r
        <ListCardItem avatar="AS" title="Anna Smith" subtitle="anna@example.com" />\r
\r
        <ListCardItem avatar="MK" title="Michael Kim" subtitle="michael@example.com" />\r
      </ListCard>\r
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="w-105">\r
      <ListCard>\r
        <ListCardItem avatar="JD" title="John Doe" value="$2,480" />\r
\r
        <ListCardItem avatar="AS" title="Anna Smith" value="$1,920" />\r
\r
        <ListCardItem avatar="MK" title="Michael Kim" value="$1,640" />\r
      </ListCard>\r
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="w-105">\r
      <ListCard>\r
        <ListCardItem avatar="JD" title="John Doe" subtitle="john@example.com" value="$2,480" />\r
      </ListCard>\r
    </div>
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithoutValues`,`WithoutSubtitles`,`SingleItem`]})))()}g();export{d as Default,m as SingleItem,p as WithoutSubtitles,f as WithoutValues,h as __namedExportsOrder,u as default};