(function(e){function t(t){for(var r,i,a=t[0],c=t[1],l=t[2],d=0,p=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1935:function(e,t,n){"use strict";n("b074")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"wrapper-content"},[n("section",[n("div",{staticClass:"container"},[e.message?n("Message",{attrs:{message:e.message}}):e._e(),n("NewNote",{attrs:{note:e.note},on:{addNote:e.addNote}}),n("div",{staticClass:"note-header"},[n("h1",[e._v(e._s(e.title))]),n("Search",{attrs:{value:e.search,placeholder:"Find your note"},on:{search:function(t){e.search=t}}}),n("div",{staticClass:"icons"},[n("svg",{class:{active:e.grid},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(t){e.grid=!0}}},[n("rect",{attrs:{x:"3",y:"3",width:"7",height:"7"}}),n("rect",{attrs:{x:"14",y:"3",width:"7",height:"7"}}),n("rect",{attrs:{x:"14",y:"14",width:"7",height:"7"}}),n("rect",{attrs:{x:"3",y:"14",width:"7",height:"7"}})]),n("svg",{class:{active:!e.grid},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(t){e.grid=!1}}},[n("line",{attrs:{x1:"8",y1:"6",x2:"21",y2:"6"}}),n("line",{attrs:{x1:"8",y1:"12",x2:"21",y2:"12"}}),n("line",{attrs:{x1:"8",y1:"18",x2:"21",y2:"18"}}),n("line",{attrs:{x1:"3",y1:"6",x2:"3",y2:"6"}}),n("line",{attrs:{x1:"3",y1:"12",x2:"3",y2:"12"}}),n("line",{attrs:{x1:"3",y1:"18",x2:"3",y2:"18"}})])])],1),n("Notes",{attrs:{notes:e.notesFilter,grid:e.grid},on:{remove:e.removeNote}})],1)])])])},s=[],i=(n("a434"),n("ac1f"),n("841c"),n("498a"),n("4de4"),n("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message"},[n("p",[e._v("Message component - "+e._s(e.message))])])}),a=[],c={name:"Message",props:{message:{type:String,required:!0,default:"default message"}}},l=c,u=(n("62f7"),n("2877")),d=Object(u["a"])(l,i,a,!1,null,"85981884",null),p=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"new-note"},[n("label",[e._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.note.title,expression:"note.title"}],attrs:{type:"text"},domProps:{value:e.note.title},on:{input:function(t){t.target.composing||e.$set(e.note,"title",t.target.value)}}}),n("label",[e._v("Description")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.note.descr,expression:"note.descr"}],domProps:{value:e.note.descr},on:{input:function(t){t.target.composing||e.$set(e.note,"descr",t.target.value)}}}),n("button",{staticClass:"btn btnPrimary buttonNewNotes",on:{click:e.addNote}},[e._v("New note")])])},h=[],v={name:"NewNote",props:{note:{type:Object,required:!0}},methods:{addNote:function(){this.$emit("addNote",this.note)}}},g=v,m=(n("72c7"),Object(u["a"])(g,f,h,!1,null,null,null)),w=m.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notes"},e._l(e.notes,(function(t,r){return n("div",{key:r,staticClass:"note",class:{full:!e.grid}},[n("div",{staticClass:"note-header",class:{full:!e.grid}},[n("p",[e._v(e._s(t.title))]),n("p",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.removeNote(r)}}},[e._v("X")])]),n("div",{staticClass:"note-body"},[n("p",[e._v(e._s(t.descr))]),n("span",[e._v(e._s(t.date))])])])})),0)},x=[],b={name:"Notes",props:{notes:{type:Array,required:!0},grid:{type:Boolean,required:!0}},methods:{removeNote:function(e){console.log("Note id ".concat(e,"- removed")),this.$emit("remove",e)}}},_=b,N=(n("1935"),Object(u["a"])(_,y,x,!1,null,null,null)),k=N.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper__search"},[n("div",{staticClass:"search"},[n("div",{staticClass:"search-icon"},[n("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),n("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})])},j=[],O={props:{value:{type:String,required:!0},placeholder:{type:String,default:"Search"}},data:function(){return{search:this.value}},watch:{search:function(e){this.$emit("search",e)}}},S=O,D=(n("fa4a"),Object(u["a"])(S,C,j,!1,null,"86dd303c",null)),P=D.exports,$={name:"App",components:{Search:P,Message:p,NewNote:w,Notes:k},data:function(){return{title:"Notes App",message:null,grid:!0,search:"",note:{title:"",descr:""},notes:[{title:"First Note",descr:"Description for first note",date:new Date(Date.now()).toLocaleString()},{title:"Second Note",descr:"Description for Second note",date:new Date(Date.now()).toLocaleString()},{title:"Third Note",descr:"Description for Third note",date:new Date(Date.now()).toLocaleString()}]}},methods:{addNote:function(){var e=this.note,t=e.title,n=e.descr;if(""===t)return this.message="Title can`t be blank",!1;this.notes.push({title:t,descr:n,date:new Date(Date.now()).toLocaleString()}),this.note.title="",this.note.descr="",this.message=null},removeNote:function(e){this.notes.splice(e,1)}},computed:{notesFilter:function(){var e=this.notes,t=this.search;return t?(t=t.trim().toLowerCase(),e=e.filter((function(e){if(-1!==e.title.toLowerCase().indexOf(t))return e})),e):e}}},M=$,T=Object(u["a"])(M,o,s,!1,null,null,null),L=T.exports;n("c1c3");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(L)}}).$mount("#app")},"62f7":function(e,t,n){"use strict";n("d5de")},"72c7":function(e,t,n){"use strict";n("f1b9")},aad9:function(e,t,n){},b074:function(e,t,n){},c1c3:function(e,t,n){},d5de:function(e,t,n){},f1b9:function(e,t,n){},fa4a:function(e,t,n){"use strict";n("aad9")}});