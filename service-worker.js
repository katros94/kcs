if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let a={};const d=e=>s(e,n),g={module:{uri:n},exports:a,require:d};i[n]=Promise.all(c.map((e=>g[e]||d(e)))).then((e=>(r(...e),a)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"katrina-rosales-web"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/kcs/css/index.3a11e759.css",revision:null},{url:"/kcs/img/13.cd1ef9df.png",revision:null},{url:"/kcs/img/images/1.png",revision:"2dcb93875bc365c77dcb85bd52973cca"},{url:"/kcs/img/images/10.png",revision:"7379366f2ab2a3847e6408de80924324"},{url:"/kcs/img/images/11.png",revision:"b4781d7871b9997c4b0edce2e10661c2"},{url:"/kcs/img/images/12.png",revision:"5a473857487e3b9bca38fd648fd22df1"},{url:"/kcs/img/images/13.png",revision:"82cf0208ecf8e75429df766bc84b41e2"},{url:"/kcs/img/images/2.png",revision:"c900fb1532ea74df77019ca0c72ae4fd"},{url:"/kcs/img/images/3.png",revision:"28dc3bd3dea5e512bebc753326cf275b"},{url:"/kcs/img/images/4.png",revision:"c64bf7b2e6e6608ddc09381cac95972b"},{url:"/kcs/img/images/5.png",revision:"35357f09826a2c2c58cd17cb59904a67"},{url:"/kcs/img/images/6.png",revision:"be783cd3936037e23b4755c3f897073b"},{url:"/kcs/img/images/7.png",revision:"6ec112b511c88abbf1140d44e2af96d9"},{url:"/kcs/img/images/8.png",revision:"dc709624d294e2027b4992c803811930"},{url:"/kcs/img/images/header-background-1.png",revision:"9c528dd424407ee786d5b89a26ba4e3b"},{url:"/kcs/img/images/header-background-2.png",revision:"8856818a81447c5940cbf1d471c897e9"},{url:"/kcs/img/images/header-background-3.png",revision:"fe8846acb31b924fb670a76f769a672d"},{url:"/kcs/img/images/profileImg.jpg",revision:"7fb5245394b3300c7e683d9e9fe2ca57"},{url:"/kcs/img/logo.50cf8808.png",revision:null},{url:"/kcs/index.html",revision:"9086ddef2aa7f5476cf492b66ed353e6"},{url:"/kcs/js/chunk-vendors.57da7dd4.js",revision:null},{url:"/kcs/js/index.a26f0066.js",revision:null},{url:"/kcs/manifest.json",revision:"5a84937c047151288fa388e0b15c9247"},{url:"/kcs/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
