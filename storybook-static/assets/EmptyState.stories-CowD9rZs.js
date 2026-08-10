import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./createLucideIcon-DTLDqpze.js";import{n as i,t as a}from"./Button-PsES2BkM.js";import{n as o,t as s}from"./utils-Dm4OyE3Q.js";var c,l;function u(){return(u=e((()=>{n(),c=[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]],l=r(`chart-column`,c)})))()}var d,f;function p(){return(p=e((()=>{n(),d=[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]],f=r(`plus`,d)})))()}function m({title:e,description:t,action:n,icon:r,className:i}){return(0,h.jsxs)(`div`,{className:s(`flex min-h-161.5 w-full flex-col items-center justify-center`,`rounded-[42px] border border-dashed`,`border-(--border) bg-(--surface)`,`px-6 py-16 text-center`,i),children:[(0,h.jsx)(`div`,{className:`\r
          mb-10 flex size-35.5 items-center justify-center\r
          rounded-[38px]\r
          bg-(--primary-bg)\r
          text-(--primary)\r
        `,children:r??(0,h.jsx)(l,{className:`size-14.5`,strokeWidth:2.2})}),(0,h.jsxs)(`div`,{className:`max-w-175`,children:[(0,h.jsx)(`h2`,{className:`\r
            text-[42px] font-semibold leading-[1.2]\r
            tracking-[-0.03em]\r
            text-(--text)\r
          `,children:e}),(0,h.jsx)(`p`,{className:`\r
            mt-4\r
            text-[30px] font-normal leading-[1.4]\r
            tracking-[-0.02em]\r
            text-(--text-secondary)\r
          `,children:t})]}),n&&(0,h.jsx)(`div`,{className:`mt-11`,children:n})]})}var h;function g(){return(g=e((()=>{u(),o(),h=t(),m.__docgenInfo={description:``,methods:[],displayName:`EmptyState`,props:{title:{required:!0,tsType:{name:`string`},description:``},description:{required:!0,tsType:{name:`string`},description:``},action:{required:!1,tsType:{name:`ReactNode`},description:``},icon:{required:!1,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var _,v,y,b,x,S;function C(){return(C=e((()=>{u(),p(),g(),i(),_=t(),v={title:`Components/Cards/EmptyState`,component:m,parameters:{layout:`fullscreen`},tags:[`autodocs`],argTypes:{title:{control:`text`},description:{control:`text`},icon:{control:!1},action:{control:!1},className:{control:!1}}},y={args:{title:`No data available`,description:`There is no data to display yet. Start by adding your first item.`},render:e=>(0,_.jsx)(m,{...e,icon:(0,_.jsx)(l,{size:40,strokeWidth:1.6})})},b={args:{title:`No projects yet`,description:`Create your first project to start tracking your analytics.`},render:e=>(0,_.jsx)(m,{...e,icon:(0,_.jsx)(l,{size:40,strokeWidth:1.6}),action:(0,_.jsxs)(a,{variant:`primary`,children:[(0,_.jsx)(f,{size:16}),`Create Project`]})})},x={args:{title:`Nothing here yet`,description:`Once you add some data, it will appear here.`},render:e=>(0,_.jsx)(m,{...e})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No data available",
    description: "There is no data to display yet. Start by adding your first item."
  },
  render: args => <EmptyState {...args} icon={<BarChart3 size={40} strokeWidth={1.6} />} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No projects yet",
    description: "Create your first project to start tracking your analytics."
  },
  render: args => <EmptyState {...args} icon={<BarChart3 size={40} strokeWidth={1.6} />} action={<Button variant="primary">\r
          <Plus size={16} />\r
          Create Project\r
        </Button>} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Nothing here yet",
    description: "Once you add some data, it will appear here."
  },
  render: args => <EmptyState {...args} />
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithAction`,`WithoutIcon`]})))()}C();export{y as Default,b as WithAction,x as WithoutIcon,S as __namedExportsOrder,v as default};