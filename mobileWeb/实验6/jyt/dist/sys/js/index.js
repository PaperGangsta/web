function init(){jsonData(HEADER_TMPL,HEADER_DATA,cbRenderHeader,cbErr),jsonData(SLIDER_TMPL,SLIDER_DATA,cbRenderSlider,cbErr),jsonData(HOMEINFO_TMPL,HONEINFO_DATA,cbRenderHomeinfo,cbErr),jsonData(FOOTER_TMPL,HEADER_DATA,cbRenderFooter,cbErr),setInterval(doSlider,3e3)}function cbErr(e){console.log(e)}function cbRenderSlider(e,n){tmpl=$.templates(e[0]),$(".intro").append(tmpl.render(n[0])),$(".intro-item").children().eq(0).addClass("active"),$(".m-list").children().eq(0).children().addClass("active")}function cbRenderHeader(e,n){tmpl=$.templates(e[0]),$("header").append(tmpl.render(n[0]))}function cbRenderHomeinfo(e,n){tmpl=$.templates(e[0]),$(".home-infos").append(tmpl.render(n[0]))}function cbRenderFooter(e,n){tmpl=$.templates(e[0]),$("footer").append(tmpl.render(n[0]))}function doSlider(){index=parseInt($(".active").index()),3<index+1?index%=3:index++,$(".active").removeClass("active"),$(".intro-item").children().eq(index).addClass("active"),$(".m-list").children().eq(index).children().addClass("active")}$(init);