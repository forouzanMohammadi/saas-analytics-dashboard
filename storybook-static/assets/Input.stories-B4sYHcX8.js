import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./eye-D_yRUwBX.js";import{n as i,t as a}from"./search-BBYdmBEx.js";import{n as o,t as s}from"./Input-ySxW2udH.js";var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{i(),n(),o(),c=t(),l={title:`Components/Forms/Input`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`text`,`email`,`password`,`number`,`search`,`tel`,`url`]},placeholder:{control:`text`},error:{control:`text`},disabled:{control:`boolean`},startIcon:{control:!1,table:{disable:!0}},endIcon:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}}}},u={args:{placeholder:`Enter your name`,type:`text`}},d={args:{placeholder:`Search...`,type:`search`},render:e=>(0,c.jsx)(s,{...e,startIcon:(0,c.jsx)(a,{size:16})})},f={args:{placeholder:`Enter password`,type:`password`},render:e=>(0,c.jsx)(s,{...e,endIcon:(0,c.jsx)(r,{size:16})})},p={args:{value:`invalid@email`,type:`email`,error:`Please enter a valid email address.`}},m={args:{value:`Disabled input`,disabled:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your name",
    type: "text"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search...",
    type: "search"
  },
  render: args => <Input {...args} startIcon={<Search size={16} />} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter password",
    type: "password"
  },
  render: args => <Input {...args} endIcon={<Eye size={16} />} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: "invalid@email",
    type: "email",
    error: "Please enter a valid email address."
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: "Disabled input",
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithStartIcon`,`WithEndIcon`,`WithError`,`Disabled`]})))()}g();export{u as Default,m as Disabled,f as WithEndIcon,p as WithError,d as WithStartIcon,h as __namedExportsOrder,l as default};