import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./utils-Dm4OyE3Q.js";import{n as i,t as a}from"./dist-BhQfhzKx.js";function o({variant:e,label:t,className:n}){return(0,s.jsxs)(`span`,{className:r(`inline-flex items-center gap-1.5 text-[12.5px] text-(--text)`,n),children:[(0,s.jsx)(`span`,{className:c({variant:e})}),t]})}var s,c;function l(){return(l=e((()=>{i(),n(),s=t(),c=a(`size-[7px] rounded-full`,{variants:{variant:{online:`bg-[var(--success)]`,offline:`bg-[var(--text-muted)]`,busy:`bg-[var(--danger)]`,away:`bg-[var(--warning)]`}},defaultVariants:{variant:`online`}}),o.__docgenInfo={description:``,methods:[],displayName:`StatusDot`,props:{label:{required:!0,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``}},composes:[`VariantProps`]}})))()}var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{l(),u=t(),d={title:`Components/Feedback/StatusDot`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`online`,`offline`,`busy`,`away`]},label:{control:`text`},className:{control:!1}}},f={args:{variant:`online`,label:`Online`}},p={args:{variant:`offline`,label:`Offline`}},m={args:{variant:`busy`,label:`Busy`}},h={args:{variant:`away`,label:`Away`}},g={args:{variant:`online`,label:`Online`},render:()=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,u.jsx)(o,{variant:`online`,label:`Online`}),(0,u.jsx)(o,{variant:`offline`,label:`Offline`}),(0,u.jsx)(o,{variant:`busy`,label:`Busy`}),(0,u.jsx)(o,{variant:`away`,label:`Away`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "online",
    label: "Online"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "offline",
    label: "Offline"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "busy",
    label: "Busy"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "away",
    label: "Away"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "online",
    label: "Online"
  },
  render: () => <div className="flex flex-col gap-3">\r
      <StatusDot variant="online" label="Online" />\r
\r
      <StatusDot variant="offline" label="Offline" />\r
\r
      <StatusDot variant="busy" label="Busy" />\r
\r
      <StatusDot variant="away" label="Away" />\r
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Online`,`Offline`,`Busy`,`Away`,`AllStatuses`]})))()}v();export{g as AllStatuses,h as Away,m as Busy,p as Offline,f as Online,_ as __namedExportsOrder,d as default};