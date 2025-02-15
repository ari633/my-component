import{w as u,e as a,u as x}from"./index-iZ8NAl3x.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";const p=()=>e.jsx("article",{children:e.jsxs("section",{className:"storybook-page",children:[e.jsx("h2",{children:"Pages in Storybook"}),e.jsxs("p",{children:["We recommend building UIs with a"," ",e.jsx("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:e.jsx("strong",{children:"component-driven"})})," ","process starting with atomic components and ending with pages."]}),e.jsx("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),e.jsxs("ul",{children:[e.jsx("li",{children:'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'}),e.jsx("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),e.jsxs("p",{children:["Get a guided tutorial on component-driven development at"," ",e.jsx("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer",children:"Storybook tutorials"}),". Read more in the"," ",e.jsx("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),e.jsxs("div",{className:"tip-wrapper",children:[e.jsx("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the"," ",e.jsx("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("g",{fill:"none",fillRule:"evenodd",children:e.jsx("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})});p.__docgenInfo={description:"",methods:[],displayName:"Page"};const j={title:"Example/Page",component:p,parameters:{layout:"fullscreen"}},t={},o={play:async({canvasElement:g})=>{const s=u(g),n=s.getByRole("button",{name:/Log in/i});await a(n).toBeInTheDocument(),await x.click(n),await a(n).not.toBeInTheDocument();const m=s.getByRole("button",{name:/Log out/i});await a(m).toBeInTheDocument()}};var r,i,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,d,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const y=["LoggedOut","LoggedIn"];export{o as LoggedIn,t as LoggedOut,y as __namedExportsOrder,j as default};
