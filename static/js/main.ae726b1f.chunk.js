(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(6),i=a.n(r),l=a(1),o=a(2),c=a(4),p=a(3),m=(a(12),a(13),function(t){Object(c.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={translate:0,gap:20},t.listSize=t.props.images.length*t.props.itemWidth+t.state.gap*t.props.images.length,t.carouselSize=t.props.frameSize*t.props.itemWidth+t.state.gap*t.props.frameSize,t.carouselStep=t.props.step*t.props.itemWidth+t.state.gap*t.props.step,t.maxscroll=t.listSize-t.carouselSize,t.scrollRight=function(){t.state.translate-t.carouselStep>=-t.maxscroll?t.setState((function(e){return{translate:e.translate-t.carouselStep}})):t.setState({translate:-t.maxscroll})},t.scrollLeft=function(){t.state.translate+t.carouselStep<0?t.setState((function(e){return{translate:e.translate+t.carouselStep}})):t.setState({translate:0})},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.state,e=t.translate,a=t.gap,n=this.props,r=n.images,i=n.itemWidth,l=n.animationDuration,o={width:this.carouselSize},c={transform:"translateX(".concat(e,"px)"),gap:a,transition:"transform ".concat(l,"ms")},p={width:this.carouselSize-a};return s.a.createElement("div",{className:"carousel",style:o},s.a.createElement("ul",{className:"carousel__list",style:c},r.map((function(t){return s.a.createElement("li",{className:"carousel__item",key:t},s.a.createElement("img",{src:t,alt:"1",height:i,width:i}))}))),s.a.createElement("div",{className:"carousel__buttons",style:p},s.a.createElement("button",{type:"button",className:"button",disabled:0===e,onClick:this.scrollLeft},"<"),s.a.createElement("button",{type:"button",className:"button",disabled:e===-this.maxscroll,onClick:this.scrollRight},">")))}}]),a}(s.a.Component));m.defaultProps={step:3,frameSize:3,itemWidth:130,animationDuration:1e3};var u=m,g=function(t){Object(c.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.state.images;return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Carousel with ",t.length," images"),s.a.createElement(u,{images:t,step:3,frameSize:3,itemWidth:130,animationDuration:1e3}))}}]),a}(s.a.Component);i.a.render(s.a.createElement(g,null),document.getElementById("root"))},7:function(t,e,a){t.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.ae726b1f.chunk.js.map