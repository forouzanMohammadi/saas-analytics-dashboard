import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./utils-Dm4OyE3Q.js";function i({label:e,value:t,subtitle:n,className:i}){let o=Math.min(100,Math.max(0,t));return(0,a.jsxs)(`div`,{className:r(`rounded-2xl border border-(--border) bg-(--surface) p-4 shadow-[0_1px_12px_rgba(30,27,46,0.03)]`,i),children:[(0,a.jsxs)(`div`,{className:`mb-2 flex items-center justify-between`,children:[(0,a.jsx)(`p`,{className:`text-sm font-medium text-(--text)`,children:e}),(0,a.jsxs)(`span`,{className:`text-sm text-(--text-secondary)`,children:[o,`%`]})]}),(0,a.jsx)(`div`,{className:`h-1.75 w-full rounded-full bg-(--primary-bg)`,children:(0,a.jsx)(`div`,{className:`h-full rounded-full bg-(--primary) transition-[width]`,style:{width:`${o}%`},role:`progressbar`,"aria-valuenow":o,"aria-valuemin":0,"aria-valuemax":100})}),n?(0,a.jsx)(`p`,{className:`mt-1.5 text-xs text-(--text-muted)`,children:n}):null]})}var a;function o(){return(o=e((()=>{n(),a=t(),i.__docgenInfo={description:``,methods:[],displayName:`ProgressCard`,props:{label:{required:!0,tsType:{name:`string`},description:``},value:{required:!0,tsType:{name:`number`},description:``},subtitle:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{o(),s={title:`Components/Cards/ProgressCard`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Label displayed above the progress bar.`},value:{control:{type:`range`,min:0,max:100,step:1},description:`Progress value from 0 to 100.`},subtitle:{control:`text`,description:`Optional supporting text displayed below the progress bar.`},className:{control:!1}}},c={args:{label:`Storage Usage`,value:68,subtitle:`68 GB of 100 GB used`}},l={args:{label:`Storage Usage`,value:25,subtitle:`25 GB of 100 GB used`}},u={args:{label:`Storage Usage`,value:60,subtitle:`60 GB of 100 GB used`}},d={args:{label:`Storage Usage`,value:85,subtitle:`85 GB of 100 GB used`}},f={args:{label:`Profile Completion`,value:100,subtitle:`Your profile is complete`}},p={args:{label:`Project Progress`,value:72}},m={args:{label:`Clamped Value`,value:120,subtitle:`Values above 100 are clamped to 100%`}},h={args:{label:`Clamped Value`,value:-20,subtitle:`Values below 0 are clamped to 0%`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Storage Usage",
    value: 68,
    subtitle: "68 GB of 100 GB used"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Storage Usage",
    value: 25,
    subtitle: "25 GB of 100 GB used"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Storage Usage",
    value: 60,
    subtitle: "60 GB of 100 GB used"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Storage Usage",
    value: 85,
    subtitle: "85 GB of 100 GB used"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Profile Completion",
    value: 100,
    subtitle: "Your profile is complete"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Project Progress",
    value: 72
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Clamped Value",
    value: 120,
    subtitle: "Values above 100 are clamped to 100%"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Clamped Value",
    value: -20,
    subtitle: "Values below 0 are clamped to 0%"
  }
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`Low`,`Medium`,`High`,`Complete`,`WithoutSubtitle`,`AboveMaximum`,`BelowMinimum`]})))()}_();export{m as AboveMaximum,h as BelowMinimum,f as Complete,d as High,l as Low,u as Medium,c as Playground,p as WithoutSubtitle,g as __namedExportsOrder,s as default};