(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf69588c"],{"01eb":function(t,a,e){},"3f2d":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container storages mb-5"},[e("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),t._m(0),e("div",{staticClass:"row mb-3"},t._l(t.storages,(function(a,i){return e("div",{key:i,staticClass:"col-md-2 p-2 "},[e("img",{staticClass:"rounded img-fluid",class:{forDelete:!0===a.forDelete},attrs:{src:a.path,alt:"image"+i},on:{click:function(e){return t.addToTempData(a)}}})])})),0),e("button",{staticClass:"btn btn-block btn-outline-dark",attrs:{type:"button"},on:{click:t.openModal}},[t._v(" 刪除點選的資料 ")]),e("Pagination",{attrs:{pages:t.pagination},on:{emitPages:t.getData}}),e("div",{staticClass:"modal fade",attrs:{id:"deleteModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(1),0===t.tempData.length?e("div",{staticClass:"modal-body"},[t._v("目前未選擇任何資料！")]):e("div",{staticClass:"modal-body mb-3"},[t._v("是否刪除以下資料 (刪除後將無法恢復)。")]),e("div",{staticClass:"container"},[e("div",{staticClass:"row mb-3 justify-content-center"},t._l(t.tempData,(function(t,a){return e("div",{key:a,staticClass:"col-md-4 p-2"},[e("img",{staticClass:"rounded img-fluid",attrs:{src:t.path,alt:"delete"+a}})])})),0)]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.cancelDelete}},[t._v("取消")]),0!==t.tempData.length?e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteData}},[t._v("確認刪除")]):t._e()])])])])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-left p-2 mb-3"},[e("span",[t._v("> 如需刪除圖片，請點選圖片，並按下頁面下方的按鈕")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("刪除資料")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],n=(e("99af"),e("4160"),e("159b"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"my-3"},[e("nav",{attrs:{"aria-label":"navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a,i){return e("li",{key:i,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.emitPages(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])}),o=[],c={props:{pages:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{emitPages:function(t){this.$emit("emitPages",t)}}},r=c,l=e("2877"),d=Object(l["a"])(r,n,o,!1,null,null,null),u=d.exports,p={components:{Pagination:u},data:function(){return{storages:[],tempData:[],pagination:{},isLoading:!1}},created:function(){},methods:{getData:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api/").concat("61d0f120-1ac2-427c-9a10-878a710b2b57","/admin/storage?paged=24&page=").concat(a);this.$http.get(e).then((function(a){t.storages=a.data.data,t.storages.forEach((function(a){t.$set(a,"forDelete",!1)})),t.pagination=a.data.meta.pagination,t.isLoading=!1})).catch((function(){t.isLoading=!1,t.$swal({icon:"error",title:"無法取得圖片列表，請嘗試重整頁面。"})}))},addToTempData:function(t){this.$set(t,"forDelete",!t.forDelete)},openModal:function(){var t=this;this.isLoading=!0,this.storages.forEach((function(a){!0===a.forDelete&&t.tempData.push(a)})),$("#deleteModal").modal("show"),this.isLoading=!1},cancelDelete:function(){this.isLoading=!0,this.tempData=[],$("#deleteModal").modal("hide"),this.isLoading=!1},deleteData:function(){var t=this;this.isLoading=!0,this.tempData.forEach((function(a){var e="".concat("https://course-ec-api.hexschool.io/api/").concat("61d0f120-1ac2-427c-9a10-878a710b2b57","/admin/storage/").concat(a.id);t.$http.delete(e).then((function(){t.tempData=[],$("#deleteModal").modal("hide"),t.getData(),t.isLoading=!1,t.$swal({icon:"success",title:"刪除成功！"})})).catch((function(){t.isLoading=!1,t.$swal({icon:"error",title:"刪除發生錯誤，請再試一次！"})}))}))}}},f=p,g=(e("eadb"),Object(l["a"])(f,i,s,!1,null,"7c972c3f",null));a["default"]=g.exports},8418:function(t,a,e){"use strict";var i=e("c04e"),s=e("9bf2"),n=e("5c6c");t.exports=function(t,a,e){var o=i(a);o in t?s.f(t,o,n(0,e)):t[o]=e}},"99af":function(t,a,e){"use strict";var i=e("23e7"),s=e("d039"),n=e("e8b5"),o=e("861d"),c=e("7b0b"),r=e("50c4"),l=e("8418"),d=e("65f0"),u=e("1dde"),p=e("b622"),f=e("2d00"),g=p("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",b=f>=51||!s((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),v=u("concat"),_=function(t){if(!o(t))return!1;var a=t[g];return void 0!==a?!!a:n(t)},C=!b||!v;i({target:"Array",proto:!0,forced:C},{concat:function(t){var a,e,i,s,n,o=c(this),u=d(o,0),p=0;for(a=-1,i=arguments.length;a<i;a++)if(n=-1===a?o:arguments[a],_(n)){if(s=r(n.length),p+s>m)throw TypeError(h);for(e=0;e<s;e++,p++)e in n&&l(u,p,n[e])}else{if(p>=m)throw TypeError(h);l(u,p++,n)}return u.length=p,u}})},eadb:function(t,a,e){"use strict";var i=e("01eb"),s=e.n(i);s.a}}]);
//# sourceMappingURL=chunk-bf69588c.7210844d.js.map