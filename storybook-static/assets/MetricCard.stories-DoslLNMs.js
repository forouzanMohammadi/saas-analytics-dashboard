import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe--m5YJ3pT.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./createLucideIcon-DTLDqpze.js";import{a,c as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./users-BhC5jIQ8.js";import{n as p,t as m}from"./utils-Dm4OyE3Q.js";var h,g;function _(){return(_=e((()=>{r(),h=[[`path`,{d:`M16 17h6v-6`,key:`t6n2it`}],[`path`,{d:`m22 17-8.5-8.5-5 5L2 7`,key:`x473p`}]],g=i(`trending-down`,h)})))()}var v,y;function b(){return(b=e((()=>{r(),v=[[`path`,{d:`M16 7h6v6`,key:`box55l`}],[`path`,{d:`m22 7-8.5 8.5-5-5L2 17`,key:`1t1m79`}]],y=i(`trending-up`,v)})))()}function x({className:e,size:t=`default`,...n}){return(0,C.jsx)(`div`,{"data-slot":`card`,"data-size":t,className:m(`group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl`,e),...n})}function S({className:e,...t}){return(0,C.jsx)(`div`,{"data-slot":`card-content`,className:m(`px-(--card-spacing)`,e),...t})}var C;function w(){return(w=e((()=>{t(),p(),C=n(),x.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{size:{required:!1,tsType:{name:`union`,raw:`"default" | "sm"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"sm"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}}}},S.__docgenInfo={description:``,methods:[],displayName:`CardContent`}})))()}function T({title:e,value:t,className:n,variant:r=`simple`,trend:i,sparklineData:a,icon:o}){let s=typeof t==`number`?t.toLocaleString(`en-US`):t;return(0,D.jsx)(x,{className:m(`border border-(--border) bg-white shadow-none rounded-2xl ring-0`,n),children:(0,D.jsx)(S,{className:`p-5`,children:(0,D.jsxs)(`div`,{className:`flex items-start justify-between gap-3`,children:[(0,D.jsxs)(`div`,{className:`space-y-1.5 min-w-0`,children:[(0,D.jsx)(`p`,{className:`text-sm font-medium text-(--text-secondary) truncate`,children:e}),(0,D.jsx)(`p`,{className:`text-2xl font-semibold tracking-tight text-(--text)`,children:s}),r===`trend`&&i&&(0,D.jsxs)(`div`,{className:m(`inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded-full text-xs font-medium`,i.isPositive?`bg-emerald-50 text-emerald-600`:`bg-red-50 text-red-600`),children:[i.isPositive?(0,D.jsx)(y,{className:`size-3`}):(0,D.jsx)(g,{className:`size-3`}),i.value]})]}),r===`sparkline`&&a&&a.length>0?(0,D.jsx)(E,{data:a,className:`mt-1`}):o&&(0,D.jsx)(`div`,{className:`text-(--text-secondary) shrink-0`,children:o})]})})})}function E({data:e,className:t}){let n=Math.max(...e),r=Math.min(...e),i=n-r||1,a=e.map((t,n)=>`${n/(e.length-1)*80},${32-(t-r)/i*32}`).join(` `);return(0,D.jsx)(`svg`,{width:80,height:32,viewBox:`0 0 80 32`,className:m(`shrink-0`,t),fill:`none`,children:(0,D.jsx)(`polyline`,{points:a,stroke:`var(--primary)`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}var D;function O(){return(O=e((()=>{w(),p(),b(),_(),D=n(),T.__docgenInfo={description:``,methods:[],displayName:`MetricCard`,props:{title:{required:!0,tsType:{name:`string`},description:``},value:{required:!0,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},className:{required:!1,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"simple" | "trend" | "sparkline"`,elements:[{name:`literal`,value:`"simple"`},{name:`literal`,value:`"trend"`},{name:`literal`,value:`"sparkline"`}]},description:``,defaultValue:{value:`"simple"`,computed:!1}},trend:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{\r
  value: string\r
  isPositive?: boolean\r
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`isPositive`,value:{name:`boolean`,required:!1}}]}},description:``},sparklineData:{required:!1,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:``},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})))()}var k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{o(),l(),c(),s(),O(),k=n(),A={title:`Components/Cards/MetricCard`,component:T,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{title:{control:`text`,description:`Metric label displayed above the value.`},value:{control:`text`,description:`Main metric value.`},variant:{control:`inline-radio`,options:[`simple`,`trend`,`sparkline`],description:`Visual presentation of the metric.`},trend:{control:`object`,description:`Trend information displayed when variant is trend.`},sparklineData:{control:`object`,description:`Numeric data used to render the sparkline.`},icon:{control:!1,description:`Optional icon displayed on the right side.`},className:{control:!1}}},j={args:{title:`Total Revenue`,value:`$48,290`,variant:`trend`,trend:{value:`+12.5%`,isPositive:!0},sparklineData:[40,45,42,55,52,65,61,72,68,80]}},M={args:{title:`Total Revenue`,value:`$48,290`,variant:`simple`}},N={args:{title:`Monthly Revenue`,value:`$24,580`,variant:`trend`,trend:{value:`+12.5%`,isPositive:!0}}},P={args:{title:`Churn Rate`,value:`4.8%`,variant:`trend`,trend:{value:`-2.1%`,isPositive:!1}}},F={args:{title:`Active Users`,value:12480,variant:`sparkline`,sparklineData:[40,45,42,55,52,65,61,72,68,80]}},I={args:{title:`Total Users`,value:12840,variant:`simple`,icon:(0,k.jsx)(f,{className:`size-5`})}},L={args:{title:`Revenue`,value:`$84,290`,variant:`trend`,trend:{value:`+18.4%`,isPositive:!0},icon:(0,k.jsx)(a,{className:`size-5`})}},R={args:{title:`Orders`,value:3248,variant:`sparkline`,sparklineData:[20,32,28,40,36,48,45,58,52,64],icon:(0,k.jsx)(u,{className:`size-5`})}},z={args:{title:`Active Sessions`,value:842,variant:`simple`,icon:(0,k.jsx)(d,{className:`size-5`})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Total Revenue",
    value: "$48,290",
    variant: "trend",
    trend: {
      value: "+12.5%",
      isPositive: true
    },
    sparklineData: [40, 45, 42, 55, 52, 65, 61, 72, 68, 80]
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Total Revenue",
    value: "$48,290",
    variant: "simple"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Monthly Revenue",
    value: "$24,580",
    variant: "trend",
    trend: {
      value: "+12.5%",
      isPositive: true
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Churn Rate",
    value: "4.8%",
    variant: "trend",
    trend: {
      value: "-2.1%",
      isPositive: false
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Active Users",
    value: 12480,
    variant: "sparkline",
    sparklineData: [40, 45, 42, 55, 52, 65, 61, 72, 68, 80]
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Total Users",
    value: 12840,
    variant: "simple",
    icon: <Users className="size-5" />
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Revenue",
    value: "$84,290",
    variant: "trend",
    trend: {
      value: "+18.4%",
      isPositive: true
    },
    icon: <DollarSign className="size-5" />
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Orders",
    value: 3248,
    variant: "sparkline",
    sparklineData: [20, 32, 28, 40, 36, 48, 45, 58, 52, 64],
    icon: <ShoppingCart className="size-5" />
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Active Sessions",
    value: 842,
    variant: "simple",
    icon: <Activity className="size-5" />
  }
}`,...z.parameters?.docs?.source}}},B=[`Playground`,`Simple`,`WithTrend`,`NegativeTrend`,`WithSparkline`,`WithIcon`,`Revenue`,`Orders`,`ActivityMetric`]})))()}V();export{z as ActivityMetric,P as NegativeTrend,R as Orders,j as Playground,L as Revenue,M as Simple,I as WithIcon,F as WithSparkline,N as WithTrend,B as __namedExportsOrder,A as default};