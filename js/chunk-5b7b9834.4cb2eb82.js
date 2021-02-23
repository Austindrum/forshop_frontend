(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b7b9834"],{"2c28":function(t,r,e){"use strict";e("99af");var a=e("2fa3");r["a"]={getCategorys:function(){return a["a"].get("/categoryies")},getCategory:function(t){return a["a"].get("/category/".concat(t))},getCategoryProducts:function(t){return a["a"].get("/category/".concat(t,"/products"))},getSubCategory:function(t){return a["a"].get("/category/".concat(t.category,"/subcategory/").concat(t.subCategory,"/products"))},getSubCategoryProducts:function(t){return a["a"].get("/subcategory/".concat(t,"/products"))},getProducts:function(){return a["a"].get("/products")},getProduct:function(t){return a["a"].get("/product/".concat(t))},postOrder:function(t){return a["a"].post("/order",t)},getOrder:function(t){return a["a"].get("/order/".concat(t))}}},8117:function(t,r,e){"use strict";e.r(r);var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(r){t.isLoading=r}}}),e("div",{staticClass:"row d-flex justify-content-center bg-light"},[e("div",{staticClass:"col-md-6 order-info py-3"},[e("div",{staticClass:"card text-left"},[e("h3",{staticClass:"card-header"},[t._v("訂單明細")]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"d-flex mb-3"},[e("div",{staticClass:"card-text width-control mr-auto"},[t._v("購買時間")]),e("div",{staticClass:"card-text text-right"},[t._v(t._s(t.order.createdAt))])]),e("div",{staticClass:"d-flex mb-3"},[e("div",{staticClass:"card-text width-control mr-auto"},[t._v("商品數量")]),e("div",{staticClass:"card-text"},[t._v(t._s(t.itemNum)+" 件")])]),e("div",{staticClass:"d-flex mb-4"},[e("div",{staticClass:"card-text width-control mr-auto"},[t._v("總金額")]),e("span",[t._v("NT."+t._s(t.total))])]),e("hr"),t._l(t.order.Products,(function(r,a){return e("div",{key:a,staticClass:"card mb-2 px-2 pt-2 pb-4"},[e("div",{staticClass:"card-body d-flex py-0"},[e("div",{staticClass:"margin-control"},[e("img",{staticClass:"rounded d-block",attrs:{src:r.image1,alt:r.title}})]),e("div",{staticClass:"text-left py-2"},[e("div",{staticClass:"d-flex"},[e("h5",{staticClass:"mr-auto"},[t._v(t._s(r.title))])])])])])}))],2)])]),e("div",{staticClass:"col-md-6 py-3"},[e("div",{staticClass:"card text-left"},[e("h3",{staticClass:"card-header"},[t._v("收件人資訊")]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"d-flex mb-3"},[e("div",{staticClass:"card-text width-control mr-auto"},[t._v("付款方式")]),e("div",{staticClass:"card-text text-right"},[t._v(t._s(t.order.payment))])]),e("div",{staticClass:"d-flex mb-3"},[e("div",{staticClass:"card-text width-control mr-auto"},[t._v("姓名")]),e("div",{staticClass:"card-text text-right"},[t._v(t._s(t.order.name))])]),e("div",{staticClass:"d-flex mb-3"},[e("div",{staticClass:"card-text width-control mr-auto"},[t._v("地址")]),e("div",{staticClass:"card-text text-right"},[t._v(t._s(t.order.address))])]),e("div",{staticClass:"d-flex mb-3"},[e("div",{staticClass:"card-text width-control mr-auto"},[t._v("電話")]),e("div",{staticClass:"card-text text-right"},[t._v(t._s(t.order.tel))])]),e("div",{staticClass:"d-flex mb-3"},[e("div",{staticClass:"card-text width-control mr-auto"},[t._v("e-mail")]),e("div",{staticClass:"card-text text-right"},[t._v(t._s(t.order.email))])])])]),e("div",{staticClass:"d-flex justify-content-center"},[e("button",{staticClass:"btn btn-primary btn-block text-white mt-5 w-50",attrs:{type:"button"},on:{click:t.payOrder}},[t._v("確認付款")])])])])],1)},s=[],c=(e("4160"),e("159b"),e("96cf"),e("1da1")),i=e("2c28"),o={data:function(){return{order:[],orderId:"",isLoading:!1,itemNum:0,total:0}},methods:{getDetailed:function(t){var r=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,s,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=r,a.isLoading=!0,a.orderId=t,e.next=5,i["a"].getOrder(t);case 5:s=e.sent,c=s.data,o=s.statusText,"success"===c.status&&"OK"===o&&(a.order=c.order,a.order.Products.forEach((function(t){a.itemNum+=t.OrderItem.num})),a.order.Products.forEach((function(t){a.total+=t.OrderItem.num*t.price}))),a.isLoading=!1;case 10:case"end":return e.stop()}}),e)})))()},payOrder:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e=t,e.isLoading=!0,e.$swal({icon:"success",title:"購買成功！",html:'<p style="font-size: 12px; margin-top: 1rem;">訂單已完成，此次購買的商品約 3 ~ 5 個工作天會送達，非常感謝您對 ForShop 風格小舖的支持！</p>'}),e.$store.commit("deleteAllCartItems"),e.$router.push("/shop/home");case 5:case"end":return r.stop()}}),r)})))()}},created:function(){this.orderId=this.$route.params.orderId,this.getDetailed(this.orderId)}},d=o,n=(e("a97a"),e("2877")),u=Object(n["a"])(d,a,s,!1,null,"0b5ebf61",null);r["default"]=u.exports},8418:function(t,r,e){"use strict";var a=e("c04e"),s=e("9bf2"),c=e("5c6c");t.exports=function(t,r,e){var i=a(r);i in t?s.f(t,i,c(0,e)):t[i]=e}},"99af":function(t,r,e){"use strict";var a=e("23e7"),s=e("d039"),c=e("e8b5"),i=e("861d"),o=e("7b0b"),d=e("50c4"),n=e("8418"),u=e("65f0"),l=e("1dde"),v=e("b622"),f=e("2d00"),g=v("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",C=f>=51||!s((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),x=l("concat"),p=function(t){if(!i(t))return!1;var r=t[g];return void 0!==r?!!r:c(t)},b=!C||!x;a({target:"Array",proto:!0,forced:b},{concat:function(t){var r,e,a,s,c,i=o(this),l=u(i,0),v=0;for(r=-1,a=arguments.length;r<a;r++)if(c=-1===r?i:arguments[r],p(c)){if(s=d(c.length),v+s>m)throw TypeError(h);for(e=0;e<s;e++,v++)e in c&&n(l,v,c[e])}else{if(v>=m)throw TypeError(h);n(l,v++,c)}return l.length=v,l}})},a97a:function(t,r,e){"use strict";var a=e("eb6e"),s=e.n(a);s.a},eb6e:function(t,r,e){}}]);
//# sourceMappingURL=chunk-5b7b9834.4cb2eb82.js.map