parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"epB2":[function(require,module,exports) {
var t=function(t,e){a.prototype.prefix=t;var i=new n(document.getElementsByClassName(t)[0]);for(var s in e)i.add(e[s]);i.updateTotal()};function e(t,e){var n=new a(t);this.check=n.className("check"),this.name=n.className("name"),this.price=n.className("price"),this.num=n.className("num"),this.add=n.className("add"),this.reduce=n.className("reduce"),this.subtotal=n.className("subtotal"),this.inventory=n.className("inventory"),this.del=n.className("del"),this.data=e,this.inventory.textContent=e.inventory,this.name.textContent=e.name,this.price.textContent=e.price.toFixed(2),this.num.textContent=e.num}function a(t){this.obj=t}function n(t){this.items=[];var e=new a(t);this.all=e.className("all"),this.bottom=e.className("bottom"),this.num=e.className("total-num"),this.price=e.className("total-price"),this.tmp=e.className("item"),this.tmp.parentNode.removeChild(this.tmp);var n=this;this.all.onclick=function(){n.checkAll()}}n.prototype={add:function(t){var a=this.tmp.cloneNode(!0),n=new e(a,t),i=this;n.check.onclick=function(){i.updateTotal()},n.add.onclick=function(){if(n.num.textContent=++n.data.num,!(n.data.num<=n.data.inventory))return window.alert("库存有限"),void(n.num.textContent=--n.data.num);n.updateSubtotal(),i.updateTotal()},n.reduce.onclick=function(){n.data.num>1?(n.num.textContent=--n.data.num,n.updateSubtotal(),i.updateTotal()):alert("至少选择1件，如果不需要，请直接删除")},n.del.onclick=function(){confirm("您确定要删除此商品吗？")&&(a.parentNode.removeChild(a),i.del(n),i.updateTotal())},n.updateSubtotal(),this.items.push(n),this.bottom.before(a)},updateTotal:function(){var t=0,e=0;for(var a in this.items){var n=this.items[a];n.check.checked&&(t+=n.data.num,e+=n.data.num*n.data.price,n.data.inventory-n.data.num)}this.num.textContent=t,this.price.textContent=e.toFixed(2)},checkAll:function(){for(var t in this.items)this.items[t].check.checked=!0;this.updateTotal()},del:function(t){for(var e in this.items)this.items[e]===t&&delete this.items[e]}},e.prototype={updateSubtotal:function(){this.subtotal.textContent=(this.data.num*this.data.price).toFixed(2)}},a.prototype={prefix:"",className:function(t){return this.obj.getElementsByClassName(this.prefix+"-"+t)[0]}};
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.e424fc0d.map