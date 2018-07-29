/** layui-v1.0.9_rls MIT License By http://www.layui.com */
 ;layui.define(function(a){"use strict";function e(a){new p(a)}var t=document,r="getElementById",n="getElementsByTagName",s=0,p=function(a){var e=this;(e.config=a||{}).item=s++,e.render(!0)};p.on=function(a,e,t){return a.attachEvent?a.attachEvent("on"+e,function(){t.call(a,window.even)}):a.addEventListener(e,t,!1),p},p.prototype.type=function(){var a=this.config;if("object"==typeof a.cont)return void 0===a.cont.length?2:3},p.prototype.view=function(){var a=this,e=a.config,t=[],r={};if(e.record=e.record||0,e.pages=0|e.pages,e.curr=0|e.curr||1,e.groups="groups"in e?0|e.groups:5,e.first="first"in e?e.first:"&#x9996;&#x9875;",e.last="last"in e?e.last:"&#x672B;&#x9875;",e.prev="prev"in e?e.prev:"&#x4E0A;&#x4E00;&#x9875;",e.next="next"in e?e.next:"&#x4E0B;&#x4E00;&#x9875;",e.pages<=1)return"";for(e.groups>e.pages&&(e.groups=e.pages),e.record&&t.push('<span class="layui-laypage-record">共 '+e.record+" 条记录</span>"),r.index=Math.ceil((e.curr+(e.groups>1&&e.groups!==e.pages?1:0))/(0===e.groups?1:e.groups)),e.curr>1&&e.prev&&t.push('<a href="javascript:;" class="layui-laypage-prev" data-page="'+(e.curr-1)+'">'+e.prev+"</a>"),r.index>1&&e.first&&0!==e.groups&&t.push('<a href="javascript:;" class="laypage_first" data-page="1"  title="&#x9996;&#x9875;">'+e.first+"</a><span>&#x2026;</span>"),r.poor=Math.floor((e.groups-1)/2),r.start=r.index>1?e.curr-r.poor:1,r.end=r.index>1?function(){var a=e.curr+(e.groups-r.poor-1);return a>e.pages?e.pages:a}():e.groups,r.end-r.start<e.groups-1&&(r.start=r.end-e.groups+1);r.start<=r.end;r.start++)r.start===e.curr?t.push('<span class="layui-laypage-curr"><em class="layui-laypage-em" '+(/^#/.test(e.skin)?'style="background-color:'+e.skin+';"':"")+"></em><em>"+r.start+"</em></span>"):t.push('<a href="javascript:;" data-page="'+r.start+'">'+r.start+"</a>");return e.pages>e.groups&&r.end<e.pages&&e.last&&0!==e.groups&&t.push('<span>&#x2026;</span><a href="javascript:;" class="layui-laypage-last" title="&#x5C3E;&#x9875;"  data-page="'+e.pages+'">'+e.last+"</a>"),r.flow=!e.prev&&0===e.groups,(e.curr!==e.pages&&e.next||r.flow)&&t.push(function(){return r.flow&&e.curr===e.pages?'<span class="layui-laypage-nomore" title="&#x5DF2;&#x6CA1;&#x6709;&#x66F4;&#x591A;">'+e.next+"</span>":'<a href="javascript:;" class="layui-laypage-next" data-page="'+(e.curr+1)+'">'+e.next+"</a>"}()),'<div class="layui-box layui-laypage layui-laypage-'+(e.skin?function(a){return/^#/.test(a)?"molv":a}(e.skin):"default")+'" id="layui-laypage-'+a.config.item+'">'+t.join("")+function(){return e.skip?'<span class="layui-laypage-total">&#x5230;&#x7B2C; <input type="number" min="1" onkeyup="this.value=this.value.replace(/\\D/, \'\');" value="'+e.curr+'" class="layui-laypage-skip"> &#x9875; <button type="button" class="layui-laypage-btn">&#x786e;&#x5b9a;</button></span>':""}()+"</div>"},p.prototype.jump=function(a){if(a){for(var e=this,t=e.config,r=a.children,s=a[n]("button")[0],i=a[n]("input")[0],u=0,o=r.length;u<o;u++)"a"===r[u].nodeName.toLowerCase()&&p.on(r[u],"click",function(){var a=0|this.getAttribute("data-page");t.curr=a,e.render()});s&&p.on(s,"click",function(){var a=0|i.value.replace(/\s|\D/g,"");a&&a<=t.pages&&(t.curr=a,e.render())})}},p.prototype.render=function(a){var e=this,n=e.config,s=e.type(),p=e.view();2===s?n.cont.innerHTML=p:3===s?n.cont.html(p):t[r](n.cont).innerHTML=p,n.jump&&n.jump(n,a),e.jump(t[r]("layui-laypage-"+n.item)),n.hash&&!a&&(location.hash="!"+n.hash+"="+n.curr)},a("laypage",e)});