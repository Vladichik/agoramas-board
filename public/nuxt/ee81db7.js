(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{305:function(t,e,r){},306:function(t,e,r){"use strict";r.r(e);r(9),r(14),r(7),r(16),r(17),r(13),r(8);var n=r(2),c=r(60);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"NavDrawer",mixins:[r(214).a],data:function(){return{isOpen:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)(["open_drawer"])),watch:{open_drawer:function(t){this.isOpen=t,console.log(t)}}},v=r(44),O=r(66),f=r.n(O),m=r(154),w=r(292),j=r(291),d=r(303),y=r(161),h=r(315),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{attrs:{right:t.isRight,"mini-variant":t.isOpen,permanent:""}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item",{attrs:{link:""}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-folder")])],1),t._v(" "),r("v-list-item-title",[t._v("My Files")])],1),t._v(" "),r("v-list-item",{attrs:{link:""}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-account-multiple")])],1),t._v(" "),r("v-list-item-title",[t._v("Shared with me")])],1),t._v(" "),r("v-list-item",{attrs:{link:""}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-star")])],1),t._v(" "),r("v-list-item-title",[t._v("Starred")])],1)],1)],1)}),[],!1,null,"77153930",null);e.default=component.exports;f()(component,{VIcon:m.a,VList:w.a,VListItem:j.a,VListItemIcon:d.a,VListItemTitle:y.a,VNavigationDrawer:h.a})},313:function(t,e,r){"use strict";r(305)},316:function(t,e,r){"use strict";r.r(e);r(9),r(14),r(7),r(16),r(17),r(13),r(8);var n=r(2),c=r(306),o=r(60);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={components:{NavDrawer:c.default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["open_drawer"]))},O=(r(313),r(44)),component=Object(O.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"ag-main-content"},[e("nav-drawer"),this._v(" "),e("main")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavDrawer:r(306).default})}}]);