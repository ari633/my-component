import{f as W}from"./index-iZ8NAl3x.js";import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as a,g as D}from"./index-DmM0KDA7.js";function V({title:s,titleId:n,...o},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},o),s?a.createElement("title",{id:n},s):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))}const I=a.forwardRef(V);function $({title:s,titleId:n,...o},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},o),s?a.createElement("title",{id:n},s):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))}const E=a.forwardRef($);function M({title:s,titleId:n,...o},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},o),s?a.createElement("title",{id:n},s):null,a.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z",clipRule:"evenodd"}))}const z=a.forwardRef(M);var w={exports:{}},j,O;function B(){if(O)return j;O=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return j=s,j}var T,C;function Z(){if(C)return T;C=1;var s=B();function n(){}function o(){}return o.resetWarningCache=n,T=function(){function r(g,i,y,x,f,d){if(d!==s){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}r.isRequired=r;function l(){return r}var u={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:l,element:r,elementType:r,instanceOf:l,node:r,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:o,resetWarningCache:n};return u.PropTypes=u,u},T}var k;function A(){return k||(k=1,w.exports=Z()()),w.exports}var G=A();const p=D(G),N=({multiple:s=!1,withSearch:n=!1,outlined:o=!1,options:r=[],label:l="Label",placeholder:u="",onChange:g=()=>{}})=>{const[i,y]=a.useState([]),[x,f]=a.useState(!1),[d,m]=a.useState(""),b=a.useRef(null);a.useEffect(()=>{const e=c=>{b.current&&!b.current.contains(c.target)&&f(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),a.useEffect(()=>{i.length>0&&g({selected:i})},[i,g]);const q=e=>{y(c=>s?c.includes(e)?c.filter(v=>v!==e):[...c,e]:[e]),s||f(!1)},R=e=>{y(c=>c.filter(v=>v!==e))},S=r.filter(e=>e.toLowerCase().includes(d.toLowerCase())),F=e=>d?e.replace(new RegExp(`(${d})`,"gi"),'<span class="bg-teal-500">$1</span>'):e;return t.jsxs("div",{className:"flex",children:[t.jsx("div",{className:"pr-4 w-1/5",children:l}),t.jsxs("div",{className:"relative w-4/5",ref:b,children:[t.jsx("div",{className:`min-h-10 rounded-md border border-gray-300 p-2 flex flex-wrap items-center gap-2 cursor-pointer ${o&&"bg-gray-300"}`,onClick:()=>f(!x),children:i.length===0?t.jsx("span",{className:"text-gray-500",children:u}):s?i.map(e=>t.jsxs("div",{className:"bg-gray-200 text-xs rounded-full px-2 py-0.5 flex items-center",children:[e,t.jsx("button",{className:"ml-2 text-black hover:text-gray-500",onClick:c=>{c.stopPropagation(),R(e)},children:t.jsx(E,{className:"size-3"})})]},e)):t.jsxs("div",{className:"text-gray-500 flex items-center w-full",children:[t.jsx("span",{children:i[0]}),t.jsx("button",{className:"ml-2 text-black hover:text-gray-500 absolute right-2",onClick:e=>{e.stopPropagation(),R(i[0])},children:t.jsx(E,{className:"size-5"})})]})}),x&&t.jsxs("div",{className:"absolute left-0 right-0 bg-white border border-gray-300 mt-2 shadow-md z-10",children:[n&&t.jsxs("div",{className:"relative",children:[t.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500",children:t.jsx(I,{className:"size-5 text-gray-400"})}),t.jsx("input",{type:"text",className:"w-full py-2 px-10 border-b border-gray-200 focus:outline-none",value:d,onChange:e=>m(e.target.value)}),d&&t.jsx("span",{className:"absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400",onClick:()=>m(""),children:t.jsx(z,{className:"size-5"})})]}),t.jsx("div",{className:"max-h-40 overflow-y-auto",children:S.length===0?t.jsx("p",{className:"p-2 text-gray-500",children:"No options found"}):S.map(e=>t.jsx("div",{className:`p-2 cursor-pointer hover:bg-blue-100 ${i.includes(e)?"bg-blue-200":""}`,onClick:()=>q(e),dangerouslySetInnerHTML:{__html:F(e)}},e))})]})]})]})};N.propTypes={multiple:p.bool,withSearch:p.bool,outlined:p.bool,options:p.arrayOf(p.string),label:p.string,placeholder:p.string,onChange:p.func};N.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{multiple:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},withSearch:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},outlined:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},label:{defaultValue:{value:'"Label"',computed:!1},description:"",type:{name:"string"},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1}}};const Y={title:"Form/Dropdown",component:N,argTypes:{},args:{onChange:W(),placeholder:"Select",label:"Label",options:["Apple","Banana","Cherry","Date","Grape","Orange","Mango","Pineapple","Strawberry"],multiple:!0,withSearch:!0,outlined:!1}},h={args:{}};var P,L,_;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {}
}`,...(_=(L=h.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const J=["Primary"];export{h as Primary,J as __namedExportsOrder,Y as default};
