import{W as r,D as s,C as a,P as i,K as m}from"./index-CXGKr8ll.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const c=()=>{const t=window;t.addEventListener("statusTap",()=>{r(()=>{const n=document.elementFromPoint(t.innerWidth/2,t.innerHeight/2);if(!n)return;const e=s(n);e&&new Promise(o=>a(e,o)).then(()=>{i(async()=>{e.style.setProperty("--overflow","hidden"),await m(e,300),e.style.removeProperty("--overflow")})})})})};export{c as startStatusTap};
