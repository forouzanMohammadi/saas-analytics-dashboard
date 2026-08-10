import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe--m5YJ3pT.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./utils-Dm4OyE3Q.js";function a({className:e,...t}){return(0,d.jsx)(`div`,{className:`w-full overflow-x-auto rounded-2xl border border-(--border) bg-(--surface)`,children:(0,d.jsx)(`table`,{className:i(`w-full border-collapse text-left text-[13px]`,e),...t})})}function o({className:e,...t}){return(0,d.jsx)(`thead`,{className:i(`border-b border-(--border)`,e),...t})}function s({className:e,...t}){return(0,d.jsx)(`tbody`,{className:i(`divide-y divide-(--border)`,e),...t})}function c({className:e,...t}){return(0,d.jsx)(`tr`,{className:i(`hover:bg-(--search-bg)/60`,e),...t})}function l({className:e,...t}){return(0,d.jsx)(`th`,{className:i(`px-4 py-3 text-[12px] font-medium text-(--text-secondary)`,e),...t})}function u({className:e,...t}){return(0,d.jsx)(`td`,{className:i(`px-4 py-3 text-(--text)`,e),...t})}var d;function f(){return(f=e((()=>{t(),r(),d=n(),a.__docgenInfo={description:``,methods:[],displayName:`Table`},o.__docgenInfo={description:``,methods:[],displayName:`TableHeader`},s.__docgenInfo={description:``,methods:[],displayName:`TableBody`},c.__docgenInfo={description:``,methods:[],displayName:`TableRow`},l.__docgenInfo={description:``,methods:[],displayName:`TableHead`},u.__docgenInfo={description:``,methods:[],displayName:`TableCell`}})))()}var p,m,h,g,_,v;function y(){return(y=e((()=>{f(),p=n(),m={title:`Components/Data Display/Table`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{className:{control:!1},children:{control:!1}}},h={args:{children:null},render:()=>(0,p.jsx)(`div`,{className:`w-190`,children:(0,p.jsxs)(a,{children:[(0,p.jsx)(o,{children:(0,p.jsxs)(c,{children:[(0,p.jsx)(l,{children:`User`}),(0,p.jsx)(l,{children:`Status`}),(0,p.jsx)(l,{children:`Plan`}),(0,p.jsx)(l,{className:`text-right`,children:`Revenue`})]})}),(0,p.jsxs)(s,{children:[(0,p.jsxs)(c,{children:[(0,p.jsx)(u,{className:`font-medium`,children:`Anna Smith`}),(0,p.jsx)(u,{children:`Active`}),(0,p.jsx)(u,{children:`Pro`}),(0,p.jsx)(u,{className:`text-right`,children:`$1,920`})]}),(0,p.jsxs)(c,{children:[(0,p.jsx)(u,{className:`font-medium`,children:`Michael Kim`}),(0,p.jsx)(u,{children:`Active`}),(0,p.jsx)(u,{children:`Enterprise`}),(0,p.jsx)(u,{className:`text-right`,children:`$4,280`})]}),(0,p.jsxs)(c,{children:[(0,p.jsx)(u,{className:`font-medium`,children:`Sarah Johnson`}),(0,p.jsx)(u,{children:`Inactive`}),(0,p.jsx)(u,{children:`Free`}),(0,p.jsx)(u,{className:`text-right`,children:`$0`})]})]})]})})},g={args:{children:null},render:()=>(0,p.jsx)(`div`,{className:`w-190`,children:(0,p.jsxs)(a,{children:[(0,p.jsx)(o,{children:(0,p.jsxs)(c,{children:[(0,p.jsx)(l,{children:`Customer`}),(0,p.jsx)(l,{children:`Email`}),(0,p.jsx)(l,{children:`Subscription`}),(0,p.jsx)(l,{className:`text-right`,children:`Monthly Revenue`})]})}),(0,p.jsxs)(s,{children:[(0,p.jsxs)(c,{children:[(0,p.jsx)(u,{className:`font-medium`,children:`Alexander Anderson`}),(0,p.jsx)(u,{children:`alexander.anderson@example.com`}),(0,p.jsx)(u,{children:`Enterprise`}),(0,p.jsx)(u,{className:`text-right`,children:`$8,420`})]}),(0,p.jsxs)(c,{children:[(0,p.jsx)(u,{className:`font-medium`,children:`Christopher Williams`}),(0,p.jsx)(u,{children:`christopher.williams@example.com`}),(0,p.jsx)(u,{children:`Professional`}),(0,p.jsx)(u,{className:`text-right`,children:`$2,840`})]})]})]})})},_={args:{children:null},render:()=>(0,p.jsx)(`div`,{className:`w-190`,children:(0,p.jsxs)(a,{children:[(0,p.jsx)(o,{children:(0,p.jsxs)(c,{children:[(0,p.jsx)(l,{children:`User`}),(0,p.jsx)(l,{children:`Status`}),(0,p.jsx)(l,{children:`Plan`}),(0,p.jsx)(l,{className:`text-right`,children:`Revenue`})]})}),(0,p.jsx)(s,{children:(0,p.jsx)(c,{children:(0,p.jsx)(u,{colSpan:4,className:`py-12 text-center text-(--text-secondary)`,children:`No users found.`})})})]})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="w-190">\r
      <Table>\r
        <TableHeader>\r
          <TableRow>\r
            <TableHead>User</TableHead>\r
            <TableHead>Status</TableHead>\r
            <TableHead>Plan</TableHead>\r
            <TableHead className="text-right">Revenue</TableHead>\r
          </TableRow>\r
        </TableHeader>\r
\r
        <TableBody>\r
          <TableRow>\r
            <TableCell className="font-medium">\r
              Anna Smith\r
            </TableCell>\r
            <TableCell>Active</TableCell>\r
            <TableCell>Pro</TableCell>\r
            <TableCell className="text-right">\r
              $1,920\r
            </TableCell>\r
          </TableRow>\r
\r
          <TableRow>\r
            <TableCell className="font-medium">\r
              Michael Kim\r
            </TableCell>\r
            <TableCell>Active</TableCell>\r
            <TableCell>Enterprise</TableCell>\r
            <TableCell className="text-right">\r
              $4,280\r
            </TableCell>\r
          </TableRow>\r
\r
          <TableRow>\r
            <TableCell className="font-medium">\r
              Sarah Johnson\r
            </TableCell>\r
            <TableCell>Inactive</TableCell>\r
            <TableCell>Free</TableCell>\r
            <TableCell className="text-right">\r
              $0\r
            </TableCell>\r
          </TableRow>\r
        </TableBody>\r
      </Table>\r
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="w-190">\r
      <Table>\r
        <TableHeader>\r
          <TableRow>\r
            <TableHead>Customer</TableHead>\r
            <TableHead>Email</TableHead>\r
            <TableHead>Subscription</TableHead>\r
            <TableHead className="text-right">\r
              Monthly Revenue\r
            </TableHead>\r
          </TableRow>\r
        </TableHeader>\r
\r
        <TableBody>\r
          <TableRow>\r
            <TableCell className="font-medium">\r
              Alexander Anderson\r
            </TableCell>\r
            <TableCell>\r
              alexander.anderson@example.com\r
            </TableCell>\r
            <TableCell>Enterprise</TableCell>\r
            <TableCell className="text-right">\r
              $8,420\r
            </TableCell>\r
          </TableRow>\r
\r
          <TableRow>\r
            <TableCell className="font-medium">\r
              Christopher Williams\r
            </TableCell>\r
            <TableCell>\r
              christopher.williams@example.com\r
            </TableCell>\r
            <TableCell>Professional</TableCell>\r
            <TableCell className="text-right">\r
              $2,840\r
            </TableCell>\r
          </TableRow>\r
        </TableBody>\r
      </Table>\r
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="w-190">\r
      <Table>\r
        <TableHeader>\r
          <TableRow>\r
            <TableHead>User</TableHead>\r
            <TableHead>Status</TableHead>\r
            <TableHead>Plan</TableHead>\r
            <TableHead className="text-right">\r
              Revenue\r
            </TableHead>\r
          </TableRow>\r
        </TableHeader>\r
\r
        <TableBody>\r
          <TableRow>\r
            <TableCell colSpan={4} className="py-12 text-center text-(--text-secondary)">\r
              No users found.\r
            </TableCell>\r
          </TableRow>\r
        </TableBody>\r
      </Table>\r
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithLongContent`,`Empty`]})))()}y();export{h as Default,_ as Empty,g as WithLongContent,v as __namedExportsOrder,m as default};