(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-562f825d"],{"0032":function(t,e,r){},"2c28":function(t,e,r){"use strict";r("99af");var a=r("2fa3");e["a"]={getCategorys:function(){return a["a"].get("/categoryies")},getCategory:function(t){return a["a"].get("/category/".concat(t))},getCategoryProducts:function(t){return a["a"].get("/category/".concat(t,"/products"))},getSubCategory:function(t){return a["a"].get("/category/".concat(t.category,"/subcategory/").concat(t.subCategory,"/products"))},getSubCategoryProducts:function(t){return a["a"].get("/subcategory/".concat(t,"/products"))},getProducts:function(){return a["a"].get("/products")},getProduct:function(t){return a["a"].get("/product/".concat(t))},postOrder:function(t){return a["a"].post("/order",t)},getOrder:function(t){return a["a"].get("/order/".concat(t))}}},"3c4a":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"top-margin ml-3"},[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$router.push("/shop/home")}}},[t._v("首頁")])]),r("li",{staticClass:"breadcrumb-item"},[r("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.switchPath(t.category.id)}}},[t._v(t._s(t.category.title))])]),r("li",{staticClass:"breadcrumb-item active"},[t._v(" "+t._s(t.categoryGuide.title)+" ")])])]),r("div",{staticClass:"text-left"},[r("h2",{staticClass:"text-left mt-3 mb-5 "},[t._v(t._s(t.categoryGuide.title))]),r("div",{staticClass:"container"},[r("ProductCard",{ref:"subProductCard",attrs:{sub:t.categoryGuide.id}})],1)])],1)},s=[],n=(r("96cf"),r("1da1")),c=r("e915"),i=r("2c28"),o={components:{ProductCard:c["a"]},data:function(){return{para:"",sub:"",category:{},products:[],isLoading:!1,categoryGuide:{}}},methods:{switchPath:function(t){this.$router.push({name:"Products",params:{category:t}})},getSubCategory:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s,n,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e,r.next=3,i["a"].getSubCategory(t);case 3:s=r.sent,n=s.data,c=s.statusText,"success"===n.status&&"OK"===c&&(a.category=n.category,a.categoryGuide=n.subCategory);case 7:case"end":return r.stop()}}),r)})))()}},created:function(){this.getSubCategory(this.$route.params)},watch:{$route:function(){var t={category:this.category.id,subCategory:this.$route.params.subCategory};this.getSubCategory(t)}}},u=o,d=(r("5288"),r("2877")),g=Object(d["a"])(u,a,s,!1,null,"31659479",null);e["default"]=g.exports},"4b1c":function(t,e,r){"use strict";var a=r("f588"),s=r.n(a);s.a},"4c53":function(t,e,r){"use strict";var a=r("23e7"),s=r("857a"),n=r("af03");a({target:"String",proto:!0,forced:n("sub")},{sub:function(){return s(this,"sub","","")}})},"4de4":function(t,e,r){"use strict";var a=r("23e7"),s=r("b727").filter,n=r("1dde"),c=r("ae40"),i=n("filter"),o=c("filter");a({target:"Array",proto:!0,forced:!i||!o},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},5288:function(t,e,r){"use strict";var a=r("0032"),s=r.n(a);s.a},6930:function(t,e,r){t.exports=r.p+"img/logo.b92b8896.jpg"},8418:function(t,e,r){"use strict";var a=r("c04e"),s=r("9bf2"),n=r("5c6c");t.exports=function(t,e,r){var c=a(e);c in t?s.f(t,c,n(0,r)):t[c]=r}},"857a":function(t,e,r){var a=r("1d80"),s=/"/g;t.exports=function(t,e,r,n){var c=String(a(t)),i="<"+e;return""!==r&&(i+=" "+r+'="'+String(n).replace(s,"&quot;")+'"'),i+">"+c+"</"+e+">"}},"99af":function(t,e,r){"use strict";var a=r("23e7"),s=r("d039"),n=r("e8b5"),c=r("861d"),i=r("7b0b"),o=r("50c4"),u=r("8418"),d=r("65f0"),g=r("1dde"),l=r("b622"),f=r("2d00"),p=l("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",m=f>=51||!s((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),v=g("concat"),y=function(t){if(!c(t))return!1;var e=t[p];return void 0!==e?!!e:n(t)},C=!m||!v;a({target:"Array",proto:!0,forced:C},{concat:function(t){var e,r,a,s,n,c=i(this),g=d(c,0),l=0;for(e=-1,a=arguments.length;e<a;e++)if(n=-1===e?c:arguments[e],y(n)){if(s=o(n.length),l+s>h)throw TypeError(b);for(r=0;r<s;r++,l++)r in n&&u(g,l,n[r])}else{if(l>=h)throw TypeError(b);u(g,l++,n)}return g.length=l,g}})},af03:function(t,e,r){var a=r("d039");t.exports=function(t){return a((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},e915:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._l(t.pageProducts,(function(e){return a("div",{key:e.id,staticClass:"col-md-3 col-6 mb-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"inner"},[a("a",{attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.getDetail(e.id)}}},[e.image1?a("img",{staticClass:"card-img-top",attrs:{src:e.image1,alt:e.title+"產品照"}}):a("img",{staticClass:"card-img-top",attrs:{src:r("6930")}})]),a("button",{staticClass:"wish",attrs:{type:"button"}},[t.wishListId.includes(e.id)?a("div",{on:{click:function(r){return t.addToWishList(e,t.status=!1)}}},[a("i",{staticClass:"fas fa-heart text-primary"})]):a("div",{on:{click:function(r){return t.addToWishList(e,t.status=!0)}}},[a("i",{staticClass:"far fa-heart text-muted"})])]),a("button",{staticClass:"see-more",attrs:{type:"button"},on:{click:function(r){return r.preventDefault(),t.getDetail(e.id)}}},[a("i",{staticClass:"fas fa-search"},[t._v(" see more")])])]),a("div",{staticClass:"card-body px-0"},[a("div",{staticClass:"card-title d-flex mb-0"},[a("div",{staticClass:"mr-auto"},[a("button",{staticClass:"p-0",attrs:{type:"button"},on:{click:function(r){return r.preventDefault(),t.getDetail(e.id)}}},[a("h5",{staticClass:"text-left text-muted"},[t._v(" "+t._s(e.title.substring(0,9)+" ....")+" ")])])])]),a("div",{staticClass:"price-style card-text text-left my-0"},[a("span",{staticClass:"mr-2"},[t._v(" NT."+t._s(e.price)+" ")]),0!=e.origin_price?a("span",{staticClass:"line-through text-muted"},[t._v(" NT."+t._s(e.origin_price)+" ")]):t._e()])])])])})),t.sub||t.category?a("Paginate",{attrs:{"page-count":t.pageNum,"prev-text":"<<","prev-class":"page-item","prev-link-class":"page-link","next-text":">>","next-class":"page-item","next-link-class":"page-link","click-handler":t.pageCallBack,"page-class":"page-item","page-link-class":"page-link","container-class":"pagination col-md-12 col-12"}}):t._e()],2)},s=[],n=(r("4de4"),r("4160"),r("d81d"),r("4c53"),r("159b"),r("96cf"),r("1da1")),c=r("2c28"),i={props:["newArrival","para","sub","alsoLikeCategory","alsoLikeId","category"],data:function(){return{pageNum:1,pageSize:12,currentPage:1,products:[],wishList:[],isLoading:!1}},computed:{wishListId:function(){return this.$store.state.wishList.map((function(t){return t.id}))},pageProducts:function(){var t=this,e=t.setPageNum();return e&&e.length>0?(e=e.filter((function(e){return e.page===t.currentPage})),e):[]}},methods:{getProducts:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a,s,n,i,o,u,d,g,l,f,p,h,b,m,v;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t,r.isLoading=!0,r.products=[],!r.category){e.next=10;break}return e.next=6,c["a"].getCategoryProducts(r.category);case 6:a=e.sent,s=a.data,n=a.statusText,"success"===s.status&&"OK"===n&&s.categoryProducts.forEach((function(t){t.enabled&&r.products.push(t)}));case 10:if(!r.sub){e.next=17;break}return e.next=13,c["a"].getSubCategoryProducts(r.sub);case 13:i=e.sent,o=i.data,u=i.statusText,"success"===o.status&&"OK"===u&&o.products.forEach((function(t){t.enabled&&r.products.push(t)}));case 17:if(!r.alsoLikeCategory){e.next=24;break}return e.next=20,c["a"].getCategoryProducts(r.alsoLikeCategory);case 20:d=e.sent,g=d.data,l=d.statusText,"success"===g.status&&"OK"===l&&(f=g.categoryProducts.filter((function(t){return t.id!==r.alsoLikeId})),f.forEach((function(t){t.enabled&&r.products.push(t)})));case 24:if(!r.newArrival){e.next=31;break}return e.next=27,c["a"].getProducts();case 27:p=e.sent,h=p.data,b=p.statusText,"success"===h.status&&"OK"===b&&(m=function(t){return new Date(t).getTime()},v=h.products.filter((function(t){return t.enabled})),v.sort((function(t,e){return m(e.createdAt)-m(t.createdAt)})),v.forEach((function(t,e){e<r.newArrival&&r.products.push(t)})));case 31:r.isLoading=!1;case 32:case"end":return e.stop()}}),e)})))()},getDetail:function(t){this.$router.push({name:"Product",params:{id:t}})},addToWishList:function(t,e){this.$store.commit("setWishList",t),e?this.$swal({icon:"success",title:"新增願望清單",showConfirmButton:!1,timer:1e3}):this.$swal({icon:"error",title:"刪除願望清單",showConfirmButton:!1,timer:1e3})},setPageNum:function(){var t=this,e=t.products;return t.pageNum=Math.ceil(e.length/t.pageSize),e.forEach((function(e,r){t.$set(e,"page",parseInt(r/t.pageSize,10)+1),t.$set(e,"num",r+1)})),e},pageCallBack:function(t){this.currentPage=t}},watch:{category:function(){this.getProducts()},sub:function(){this.getProducts()},alsoLikeCategory:function(){this.getProducts()},products:function(){this.setPageNum()}},created:function(){this.getProducts()}},o=i,u=(r("4b1c"),r("2877")),d=Object(u["a"])(o,a,s,!1,null,"11df8968",null);e["a"]=d.exports},f588:function(t,e,r){}}]);
//# sourceMappingURL=chunk-562f825d.2a1661e6.js.map