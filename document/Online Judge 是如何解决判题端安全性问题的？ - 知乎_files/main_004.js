(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1067:function(e,t,a){var n=a(583),c=a(259),o=a(257),i=a(93),s=a(207),l=a(258),r=a(256),d=a(325),u=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(s(e)&&(i(e)||"string"==typeof e||"function"==typeof e.splice||l(e)||d(e)||o(e)))return!e.length;var t=c(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(r(e))return!n(e).length;for(var a in e)if(u.call(e,a))return!1;return!0}},2642:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return F}));var n=a(55),c=a.n(n),o=a(1),i=a.n(o),s=a(11),l=a.n(s),r=a(996),d=a(1067),u=a.n(d);var g={"淘宝":"taobao","天猫":"tmall","京东":"jingdong","京东自营":"jingdongSale","知乎":"zhihu","美团酒旅":"meituanhotel","苏宁":"suning","有赞":"youzan"},m=a(3),b=a.n(m),v=a(30),O=a(5),j={1:"正版保障 · 七天无理由退货",2:"正版保障 · 京东快递"},p=function(e){var t=e.className,a=e.style,n=e.id,c=e.skuId,i=e.imgUrl,s=e.title,r=e.price,d=void 0===r?0:r,u=e.source,m=e.productType,b=e.showBottomLine,p=void 0===b||b,f=e.abInfo,h=e.zaData,k=void 0===h?{}:h,C=e.onClick,y="¥ ".concat(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.trimZero,n=void 0!==a&&a,c=String(e).padStart(2,"0").slice(-2);return n&&"00"===c?"".concat(Math.floor(e/100)):"".concat(Math.floor(e/100),".").concat(c)}(parseInt(d))),N=u,S=(f||{}).params;"zhihu"===g[u]&&7===m&&(N="知乎 · 纸书");var w=(null==S?void 0:S.length)>0&&"0"!==S[0].value&&"zhihu"===g[u]&&7===m;Object(o.useEffect)((function(){(null==k?void 0:k.showId)&&v.a.trackCardShow(null,{id:null==k?void 0:k.showId,path:[{module_name:"".concat(n,"_").concat(c,"_").concat(g[u])}]})}),[]);return Object(O.g)("div",{className:l()("GoodsItemCard",t),style:Object.assign({},a,{height:w?122:94}),onClick:function(){(null==k?void 0:k.clickId)&&v.a.trackEvent(null,{id:null==k?void 0:k.clickId,action:"OpenUrl",path:[{module_name:"".concat(n,"_").concat(c,"_").concat(g[u])}]}),"function"==typeof C&&C()}},Object(O.g)("div",{className:"GoodsItemCard-left"},Object(O.g)("div",{className:"GoodsItemCard-imgLayer"}),Object(O.g)("img",{className:"GoodsItemCard-imgUrl",src:i,alt:"",onError:function(){}})),Object(O.g)("div",{className:"GoodsItemCard-right"},Object(O.g)("div",{className:"GoodsItemCard-title"},s),Object(O.g)("div",{className:"GoodsItemCard-footer"},Object(O.g)("span",{className:"GoodsItemCard-price"},y),Object(O.g)("span",{className:"GoodsItemCard-footerText"},N)),w&&Object(O.g)("span",{className:"GoodsItemCard-footerIcon"},j[S[0].value])),Object(O.g)("div",{className:"GoodsItemCard-bottomLine",style:{display:p?"block":"none"}}))};p.prototype={className:b.a.string,style:b.a.object,imgUrl:b.a.string.isRequired,title:b.a.string.isRequired,price:b.a.number,source:b.a.string.isRequired,productType:b.a.number,showBottomLine:b.a.bool,onClick:b.a.func};var f=p,h=a(1005),k=a(28),C=a.n(k),y=function(){return Object(O.g)(i.a.Fragment,null)},N={SkeletonH01:function(e){var t=e.lineClass;return Object(O.g)(i.a.Fragment,null,Object(O.g)("div",{className:t}),Object(O.g)("div",{className:t}))},SkeletonP01:function(e){var t=e.lineClass,a=e.blockClass;return Object(O.g)(i.a.Fragment,null,Object(O.g)("div",{className:a}),Object(O.g)("div",null,Object(O.g)("div",{className:t}),Object(O.g)("div",{className:t})))},SkeletonT01:function(e){var t=e.lineClass;return Object(O.g)(i.a.Fragment,null,Object(O.g)("div",{className:t}),Object(O.g)("div",{className:t}),Object(O.g)("div",{className:t}),Object(O.g)("div",{className:t}))},SkeletonT02:function(e){var t=e.lineClass;return Object(O.g)(i.a.Fragment,null,Object(O.g)("div",{className:t}),Object(O.g)("div",{className:t}),Object(O.g)("div",{className:t}))},SkeletonC01:function(e){var t=e.lineClass,a=e.blockClass;return Object(O.g)(i.a.Fragment,null,Object(O.g)("div",{className:a}),Object(O.g)("div",null,Object(O.g)("div",{className:t}),Object(O.g)("div",{className:t})))},SkeletonC02:function(e){var t=e.lineClass,a=e.blockClass;return Object(O.g)(i.a.Fragment,null,Object(O.g)("div",null,Object(O.g)("div",{className:t}),Object(O.g)("div",{className:t})),Object(O.g)("div",{className:a}))},SkeletonC03:function(e){var t=e.lineClass,a=e.blockClass;return Object(O.g)(i.a.Fragment,null,Object(O.g)("div",{className:a}),Object(O.g)("div",{style:{width:"100%"}},Object(O.g)("div",{className:t}),Object(O.g)("div",{className:t})))},SkeletonI01:function(e){var t=e.blockClass;return Object(O.g)(i.a.Fragment,null,Object(O.g)("div",{className:t}))},SkeletonSpacing:y,SkeletonFill:y},S=i.a.memo((function(e){var t,a=e.variant,n=void 0===a?"H01":a,c=e.height,o=e.width,i=void 0===o?"auto":o,s=e.animation,r=void 0===s?"ease-in":s,d="skeleton__line--".concat(n.toLowerCase()),u="skeleton--".concat(n.toLowerCase()),g=l()(C()({skeleton__block:!0},"skeleton__block--".concat(n.toLowerCase()),!0)),m=l()(C()({skeleton__line:!0},d,!0)),b=l()((t={skeleton:!0},C()(t,u,!0),C()(t,"skeleton--ease-in","ease-in"===r),t)),v={width:i};c&&["Spacing","Fill"].includes(n)&&(v.height="number"==typeof c?"".concat(c,"px"):c);var j=N["Skeleton".concat(n)];return Object(O.g)("section",{className:b,style:v},Object(O.g)(j,{variant:n,lineClass:m,blockClass:g}))}));S.propTypes={variant:b.a.string,height:b.a.oneOfType([b.a.string,b.a.number]),width:b.a.oneOfType([b.a.string,b.a.number]),animation:b.a.oneOfType([b.a.bool,b.a.string])};var w=S;var I=i.a.memo((function(e){var t=e.content,a=function(e){return("string"==typeof e?e.split(","):e).map((function(e){var t=e.split("-"),a=c()(t,2),n=a[0],o=a[1];return["Spacing","Fill"].includes(n)?{type:n,height:+o}:{type:n,count:+o||1}}))}(void 0===t?"T01":t);return Object(O.g)(i.a.Fragment,null,a.map((function(e,t){var a=e.type,n=e.count,c=e.height;return n?Array.from({length:n}).map((function(e,n){return Object(O.g)(w,{variant:a,key:"".concat(t,"-").concat(n)})})):Object(O.g)(w,{variant:a,height:c,key:"".concat(t,"-").concat(c)})})))}));I.prototype={content:Object(m.oneOfType)([Object(m.arrayOf)(m.string),m.string])};var T=I,_=a(232),G={"京东":"jingdong","淘宝":"taobao","拼多多":"pinduoduo","苏宁":"suning","美团酒旅":"meituanhotel","知乎":"zhihu","有赞":"youzan"},z=function(e){var t=e.className,a=e.style,n=e.showModal,s=void 0===n||n,d=e.withModal,g=void 0===d||d,m=e.modalTitle,b=void 0===m?"该商品的所有购买渠道":m,j=e.id,p=e.url,k=void 0===p?"":p,C=e.fetcherOptions,y=void 0===C?{}:C,N=e.scenes,S=void 0===N?0:N,w=e.fetcher,I=void 0===w?r.a:w,z=e.onClose,F=e.onSelectCard;Object(_.g)();var L=Object(o.useState)(0),M=c()(L,2),x=M[0],E=M[1],U=Object(o.useState)(!1),R=c()(U,2),B=R[0],q=R[1],A=Object(o.useState)([]),D=c()(A,2),P=D[0],H=D[1],J=Object(o.useState)(!1),Z=c()(J,2),K=Z[0],Q=Z[1],V=Object(o.useState)(null),W=c()(V,2),X=W[0],Y=W[1];Object(o.useEffect)((function(){v.a.trackCardShow(null,{id:10331,path:[{module_name:j}]}),Object(r.a)("/consume/bff/ab?name=book_kpwz").then((function(e){var t=e.data;t&&Y({params:[t]})})).catch((function(){}))}),[]),Object(o.useEffect)((function(){q(!0);var e=k||"/api/v4/mcn/linkcard/".concat(j,"?scenes=").concat(S);I(e,y).then((function(e){var t=e.data,a=[];u()(t)||(a.push(Object.assign({},t,{children:null})),"[object Array]"===Object.prototype.toString.call(t.children)&&t.children.length&&(a=a.concat(t.children))),H(a)})).catch((function(){Q(!0)})).finally((function(){setTimeout((function(){q(!1)}),500)}))}),[j,x]);var $=Object(O.g)("div",{className:"GoodsCardList-container"},B?Object(O.g)(i.a.Fragment,null,Object(O.g)(T,{content:"C03,Spacing-26,C03",height:72})):K?Object(O.g)("div",{className:"GoodsCardList-error"},Object(O.g)("div",{className:"GoodsCardList-errorDesc"},"Oops~ 出错了"),Object(O.g)("div",{className:"GoodsCardList-errorBtn",onClick:function(){E(x+1)}},"刷新重试")):P.length?P.map((function(e){var t=e.id,a=e.skuid,n=e.title,c=e.url,o=e.img_url,i=e.price,s=e.source,l=e.product_type;return Object(O.g)(_.b,{key:"".concat(s,"-").concat(t,"-").concat(a),block:"goodsRecommend_polymericCardPopup_goodsCard",content:{type:"GoodsRecommend",id:"".concat(t,"-").concat(a,"-").concat(G[s])},extra:{link:{url:c}}},Object(O.g)(_.e,{shouldTrackShow:!0,shouldTrackClick:!0,className:"GoodsCardList-listItem",zaType:"Card",zaText:n,zaAction:"OpenUrl",zaEventType:"Click",extra:{link:{url:c}}},Object(O.g)(f,{id:t,skuId:a,title:n,imgUrl:o,price:i,source:s,productType:l,showBottomLine:!1,abInfo:X,zaData:{showId:10371,clickId:10372},onClick:function(){return t=e,void(F&&F(t));var t}})))})):null);return g?Object(O.g)(h.a,{className:l()("GoodsCardList",t),style:a,size:"large",title:b,onClose:z},s&&$):$};z.prototype={className:b.a.string,style:b.a.object,showModal:b.a.bool,withModal:b.a.bool,modalTitle:b.a.string,id:b.a.string,url:b.a.string,fetcherOptions:b.a.object,scenes:b.a.number,fetcher:b.a.func,onClose:b.a.func,onSelectCard:b.a.func};var F=z}}]);
//# sourceMappingURL=main.GoodsRecommendGoodsCardList.0ba91d7a67a10ad00e33.js.map