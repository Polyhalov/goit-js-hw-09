const e=document.querySelector('input[name="delay"]'),t=document.querySelector('input[name="step"]'),o=document.querySelector('input[name="amount"]');function n(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector('button[type="submit"]').addEventListener("click",(u=>{u.preventDefault();let l=Number(e.value),i=Number(t.value);for(let e=0;e<o.value;e++)n(1+e,l+e*i).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.c51dba43.js.map
