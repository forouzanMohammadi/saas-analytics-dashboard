import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./createLucideIcon-DTLDqpze.js";import{n as i,t as a}from"./Button-PsES2BkM.js";import{n as o,t as s}from"./search-BBYdmBEx.js";var c,l;function u(){return(u=e((()=>{n(),c=[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]],l=r(`arrow-right`,c)})))()}var d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{o(),u(),i(),d=t(),f={title:`Components/Buttons/Button`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`soft`,`ghost`,`destructive`,`success`,`warning`],description:`Visual style of the button.`},size:{control:`inline-radio`,options:[`default`,`sm`,`lg`,`icon`],description:`Controls the button size.`},loading:{control:`boolean`,description:`Shows a loading spinner and disables interaction.`},disabled:{control:`boolean`,description:`Disables the button.`},children:{control:`text`,description:`Button label.`}}},p={args:{children:`Button`,variant:`primary`,size:`default`,loading:!1,disabled:!1}},m={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,d.jsx)(a,{variant:`primary`,children:`Primary`}),(0,d.jsx)(a,{variant:`secondary`,children:`Secondary`}),(0,d.jsx)(a,{variant:`soft`,children:`Soft`}),(0,d.jsx)(a,{variant:`ghost`,children:`Ghost`}),(0,d.jsx)(a,{variant:`destructive`,children:`Destructive`}),(0,d.jsx)(a,{variant:`success`,children:`Success`}),(0,d.jsx)(a,{variant:`warning`,children:`Warning`})]})},h={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,d.jsx)(a,{size:`sm`,children:`Small`}),(0,d.jsx)(a,{size:`default`,children:`Default`}),(0,d.jsx)(a,{size:`lg`,children:`Large`})]})},g={render:()=>(0,d.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,d.jsxs)(a,{children:[(0,d.jsx)(s,{}),`Search`]}),(0,d.jsxs)(a,{children:[`Continue`,(0,d.jsx)(l,{})]})]})},_={render:()=>(0,d.jsx)(a,{size:`icon`,"aria-label":`Search`,children:(0,d.jsx)(s,{})})},v={args:{children:`Loading...`,loading:!0,variant:`primary`}},y={args:{children:`Disabled`,disabled:!0,variant:`primary`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    size: "default",
    loading: false,
    disabled: false
  }
}`,...p.parameters?.docs?.source},description:{story:`Interactive playground for exploring all Button props.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center justify-center gap-3">\r
      <Button variant="primary">Primary</Button>\r
      <Button variant="secondary">Secondary</Button>\r
      <Button variant="soft">Soft</Button>\r
      <Button variant="ghost">Ghost</Button>\r
      <Button variant="destructive">Destructive</Button>\r
      <Button variant="success">Success</Button>\r
      <Button variant="warning">Warning</Button>\r
    </div>
}`,...m.parameters?.docs?.source},description:{story:`All available visual variants.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center justify-center gap-3">\r
      <Button size="sm">Small</Button>\r
      <Button size="default">Default</Button>\r
      <Button size="lg">Large</Button>\r
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Available button sizes.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Button>\r
        <Search />\r
        Search\r
      </Button>\r
\r
      <Button>\r
        Continue\r
        <ArrowRight />\r
      </Button>\r
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Button with a leading icon.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Button size="icon" aria-label="Search">\r
      <Search />\r
    </Button>
}`,..._.parameters?.docs?.source},description:{story:`Icon-only button.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Loading...",
    loading: true,
    variant: "primary"
  }
}`,...v.parameters?.docs?.source},description:{story:`Loading state.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Disabled",
    disabled: true,
    variant: "primary"
  }
}`,...y.parameters?.docs?.source},description:{story:`Disabled state.`,...y.parameters?.docs?.description}}},b=[`Playground`,`Variants`,`Sizes`,`WithIcon`,`IconOnly`,`Loading`,`Disabled`]})))()}x();export{y as Disabled,_ as IconOnly,v as Loading,p as Playground,h as Sizes,m as Variants,g as WithIcon,b as __namedExportsOrder,f as default};