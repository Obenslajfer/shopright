!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./public",r(r.s=1)}([function(e,t){e.exports=require("mongoose")},function(e,t,r){r(2),e.exports=r(7)},function(e,t,r){const n=r(0),o=process.env.MONGO_ATLAS_URL||r(3).databaseUrl,{app:i,port:s}=r(4);n.connect(o,{useUnifiedTopology:!0,useNewUrlParser:!0}).then(()=>{i.listen(s,()=>console.log(`App listening on port ${s}!`))}),e.exports={app:i,port:s}},function(e,t){e.exports={databaseURL:"mongodb+srv://pontusbovin:korv1234@cluster0-6objk.mongodb.net/test?retryWrites=true&w=majority"}},function(e,t,r){const n=r(5),o=n(),i=process.env.PORT||8080,s=r(6),u="/",c="/product",p="/gallery",a="/add-product",d="gallery",l="product",f="main";o.use(n.static("public")),o.use(n.urlencoded({extended:!0})),o.set("view engine","ejs"),o.get(p,async(e,t)=>{const r=await s.find();t.status(200).render(d,{productList:r})}),o.get(c,(e,t)=>{t.status(200).render(l,{})}),o.post(a,(e,t)=>{new s({name:e.body.name,price:e.body.price,description:e.body.description,imgUrl:e.body.imgUrl}).save(),t.status(200).redirect(p)}),o.get(u,(e,t)=>{t.status(200).render(f,{})}),e.exports={app:o,port:i,express:n}},function(e,t){e.exports=require("express")},function(e,t,r){const n=r(0),o=new n.Schema({name:String,price:Number,description:String,imgUrl:String}),i=n.model("product",o);e.exports=i},function(e,t){}]);