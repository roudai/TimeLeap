(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{258:function(t,e,r){t.exports=r.p+"img/top.24eeb19.webp"},259:function(t,e,r){var content=r(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("950050f2",content,!0,{sourceMap:!1})},260:function(t,e,r){var map={"./anzu.webp":261,"./anzu_icon.webp":262,"./logo.webp":184,"./owari.webp":263,"./owari_icon.webp":264,"./runa.webp":265,"./runa_icon.webp":266,"./top.webp":258,"./yuri.webp":267,"./yuri_icon.webp":268};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=260},261:function(t,e,r){t.exports=r.p+"img/anzu.c714d48.webp"},262:function(t,e,r){t.exports=r.p+"img/anzu_icon.f9b38b4.webp"},263:function(t,e,r){t.exports=r.p+"img/owari.2a11658.webp"},264:function(t,e,r){t.exports=r.p+"img/owari_icon.678d8a0.webp"},265:function(t,e,r){t.exports=r.p+"img/runa.8b52d47.webp"},266:function(t,e,r){t.exports=r.p+"img/runa_icon.2700f88.webp"},267:function(t,e,r){t.exports=r.p+"img/yuri.a22b2b4.webp"},268:function(t,e,r){t.exports=r.p+"img/yuri_icon.82ad2e1.webp"},269:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAYCAYAAADtaU2/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAANySURBVEhLtVZbSFRRFJ3yQeQzrcTMQKnPgoKivnsQhJ/91G8/9VHZh199lVBaPsrRTHvYS4UaCnoalRpEpYWFSaJRWFqYc++dl/N2VnufuTPO6HGaSVuwuXDvPWeds/c6ax8DFgitn9043OlAyV0b9j20o/qdC8OaX/86jTG7Hy5fAIJYcQXQPugWHxJF/4QfRZc0pNQqyKrXsPyChtwGDUvPq0iidydeO+H0BjCk+rDbZMP22zYxThB3fPPCcHwCT0e84mW8GKXVZxkVQVTYbJkVq5ssSKtTUdSswVBpRto5Fb6pgBgriA8+cyDDSB/PKKh97xIf4sGWW1YilpNGRl6jhrWXNXSPenGscxLGPleQeP8jOzL1CVJqVey4Y4OT6hATAapTuRlrZpDIgndeyLuuULD3vl0MF8QVvU6kEmHox3RKzwqqVQ3tPkAEMjz46sGiKiU85m+RRjUv657UR+vEXyx+qoEStfqCJg3JtJh0o4ojlJ6+cZ8YEMJj0sXi6viI8ynVHJEQxIxSOgrJNdO7DgUvgOtoqFZhOKVgM9X1EGmi7KUTGZSZmf/LgmvMqY6EIGZVO0jyu0juK/knURNZaKIEmZSFeEQVCj5iW1utgjAEQbyHDj2LquSeDQUXNV0MCxcs3AMdQVGFIIi7ftA5JsXl/wdSDt7U1f5og9JrHMD668E0ygbOJ1gjOfUqBszR9hkWl907JdxlGdlePGcz3sijLK67YtFZphEmZrjJNLjerOBCWqlsokSCN8Bu2E4NZCaiiHt++WAa8qCajCObPFg2WSLBmikmq9TtOQpRxMMqGwmZeV3w3MkmizeCuzXDNCzvelHEjLZBDwynFayi1c6n1tx0Nt2cXdsQZhEzOOW5DeRUZxXh24nWmw0jr1GFV5ZjHVLiED7+9qH8jVP0XBmBLNj52NlG7VP6LHLEJH4+4sHGG9agjUpIIoPLkk1HMalGgdUTm5RBxNHp4F1W9rpoImoM1PZYmTKiyOB/2Pn4auOPkd5IGF6NebGhhRR40iwUzX2ZeydPNpe42FbZkbiWhioVxXTnevE9sWtTONUfxv3YabKSbaqiRql0UWNhZZPdsZvxM4PeL6F7E7/PIfFta7PiCXW2uS4LsSCt8dufPrR88qCix4nSLoe4kx2lJ98Yrw24xe4mqY3+O4A/fvL47NfhoecAAAAASUVORK5CYII="},270:function(t,e,r){t.exports=r.p+"img/instagram.d6d9297.png"},271:function(t,e,r){"use strict";r(259)},272:function(t,e,r){var n=r(73)(!1);n.push([t.i,".icon{height:auto;width:1rem}.twitter{margin-bottom:-.1rem}.instagram{margin-bottom:-.2rem}",""]),t.exports=n},273:function(t,e,r){"use strict";r.r(e);r(43);var n={props:{name:{type:String,required:!0},color:{type:String,required:!0},twitter:{type:String,required:!0},instagram:{type:String,required:!0},image:{type:String,required:!0}},methods:{imagePath:function(){return r(260)("./".concat(this.image,".webp"))},twitterPath:function(){return"https://twitter.com/"+"".concat(this.twitter)},instagramPath:function(){return"https://www.instagram.com/"+"".concat(this.instagram)}}},o=(r(271),r(26)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"artist"},[e("nuxt-link",{attrs:{to:"/"}},[e("figure",{staticClass:"image is-2by3"},[e("img",{attrs:{src:t.imagePath(),alt:t.name}})])]),t._v(" "),e("div",{staticClass:"box has-text-centered"},[e("div",{staticClass:"is-size-4"},[t._v(t._s(t.name))]),t._v(" "),e("div",[t._v(t._s(t.color))]),t._v(" "),e("div",[e("img",{staticClass:"icon twitter",attrs:{src:r(269),alt:"twitter"}}),e("a",{attrs:{href:t.twitterPath()}},[t._v("@"+t._s(t.twitter))])]),t._v(" "),e("div",[e("img",{staticClass:"icon instagram",attrs:{src:r(270),alt:"twitter"}}),t._v(" "),e("a",{attrs:{href:t.instagramPath()}},[t._v(t._s(t.instagram))])]),t._v(" "),e("div")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);