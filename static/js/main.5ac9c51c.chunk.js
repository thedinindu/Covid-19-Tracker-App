(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{189:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(65),c=t.n(r),o=(t(76),t(36)),s=t.n(o),u=t(66),i=t(15),m=t(1),d=t(18),E=(t(78),t(13)),b=t.n(E),h=t(70),y=t(25),p=t(37),g=t.n(p),T=t(191),v=t(67),x=function(e){var a=e.data;return console.log(a),n.a.createElement(v.a,{data:a,options:{responsive:!0,height:"600px",width:"600px"}})};var w=function(){var e=Object(l.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)([]),o=Object(i.a)(c,2),E=o[0],p=o[1],v=Object(l.useState)([]),w=Object(i.a)(v,2),f=w[0],C=w[1],B=Object(l.useState)(""),R=Object(i.a)(B,2),j=R[0],k=R[1],O=Object(l.useState)({}),S=Object(i.a)(O,2),D=S[0],_=S[1];Object(l.useEffect)((function(){A(),b.a.all([b.a.get("https://corona.lmao.ninja/v2/all"),b.a.get("https://corona.lmao.ninja/v2/countries"),b.a.get("http://hpb.health.gov.lk/api/get-current-statistical")]).then((function(e){r(e[0].data),p(e[1].data),C(e[2].data.data)})).catch((function(e){console.log(e)}))}),[]);var A=function(){var e=Object(u.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://corona.lmao.ninja/v2/historical/sri lanka");case 3:a=e.sent,_({labels:Object.keys(a.data.timeline.cases),datasets:[{label:"Covid-19 Cases",fill:!1,lineTension:.1,backgroundColor:"rgba(0, 0, 0, 1)",borderColor:"rgba(50,50,50,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(170,0,0,1)",pointBackgroundColor:"#fff",pointBorderWidth:5,pointHoverRadius:8,pointHoverBackgroundColor:"rgba(170,0,0,1)",pointHoverBorderColor:"rgba(255,255,255,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:Object.values(a.data.timeline.cases)}]}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),H=new Date(parseInt(t.updated)).toString(),I=E.filter((function(e){return""!==j?e.country.includes(j):e})).map((function(e,a){return n.a.createElement(m.a,{key:a,border:"primary",style:{borderRadius:"0",margin:"10px"}},n.a.createElement(m.a.Img,{variant:"top",src:e.countryInfo.flag,style:{height:"130px"}}),n.a.createElement(m.a.Body,null,n.a.createElement(m.a.Title,null,e.country),n.a.createElement(m.a.Text,null,"Cases - ",e.cases),n.a.createElement(m.a.Text,null,"Deaths - ",e.deaths),n.a.createElement(m.a.Text,null,"Recovered - ",e.recovered),n.a.createElement(m.a.Text,null,"Today's Cases - ",e.todayCases),n.a.createElement(m.a.Text,null,"Today's Deaths - ",e.todayDeaths),n.a.createElement(m.a.Text,null,"Active - ",e.active),n.a.createElement(m.a.Text,null,"Critical - ",e.critical)))}));return n.a.createElement("div",{className:"text-center",style:{margin:"10px",backgroundColor:"#F0F8FF"}},n.a.createElement("br",null),n.a.createElement("h1",{style:{textAlign:"center"}},"Covid-19 Live Status"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",null,"Local Status"),n.a.createElement("h6",{style:{textAlign:"center"}},"Last Updated - ",n.a.createElement(g.a,null,f.update_date_time)),n.a.createElement("br",null),n.a.createElement(T.a,{style:{color:"white"}},n.a.createElement(d.a,null,n.a.createElement(m.a,{bg:"dark",style:{width:"18rem",borderRadius:"0"}},n.a.createElement(m.a.Body,null,n.a.createElement(m.a.Title,null,"Total Cases"),n.a.createElement(m.a.Text,null,f.local_total_cases))),n.a.createElement(m.a,{bg:"secondary",style:{width:"18rem",borderRadius:"0"}},n.a.createElement(m.a.Body,null,n.a.createElement(m.a.Title,null,"Today's Cases"),n.a.createElement(m.a.Text,null,f.local_new_cases))),n.a.createElement(m.a,{bg:"primary",style:{width:"18rem",borderRadius:"0"}},n.a.createElement(m.a.Body,null,n.a.createElement(m.a.Title,null,"Active Cases"),n.a.createElement(m.a.Text,null,f.local_active_cases)))),n.a.createElement("br",null),n.a.createElement(d.a,null,n.a.createElement(m.a,{bg:"danger",style:{width:"18rem",borderRadius:"0"}},n.a.createElement(m.a.Body,null,n.a.createElement(m.a.Title,null,"Total Deaths"),n.a.createElement(m.a.Text,null,f.local_deaths))),n.a.createElement(m.a,{bg:"warning",style:{width:"18rem",borderRadius:"0"}},n.a.createElement(m.a.Body,null,n.a.createElement(m.a.Title,null,"Today's Deaths"),n.a.createElement(m.a.Text,null,f.local_new_deaths))),n.a.createElement(m.a,{bg:"success",style:{width:"18rem",borderRadius:"0"}},n.a.createElement(m.a.Body,null,n.a.createElement(m.a.Title,null,"Recovered"),n.a.createElement(m.a.Text,null,f.local_recovered))))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",null,"Global Status"),n.a.createElement("h6",{style:{textAlign:"center"}},"Last Updated - ",n.a.createElement(g.a,null,H)),n.a.createElement("br",null),n.a.createElement(T.a,{style:{color:"white"}},n.a.createElement(d.a,null,n.a.createElement(m.a,{bg:"dark",style:{width:"18rem",borderRadius:"0"}},n.a.createElement(m.a.Body,null,n.a.createElement(m.a.Title,null,"Total Cases"),n.a.createElement(m.a.Text,null,t.cases))),n.a.createElement(m.a,{bg:"secondary",style:{width:"18rem",borderRadius:"0"}},n.a.createElement(m.a.Body,null,n.a.createElement(m.a.Title,null,"Today's Cases"),n.a.createElement(m.a.Text,null,t.todayCases))),n.a.createElement(m.a,{bg:"primary",style:{width:"18rem",borderRadius:"0"}},n.a.createElement(m.a.Body,null,n.a.createElement(m.a.Title,null,"Active Cases"),n.a.createElement(m.a.Text,null,t.active)))),n.a.createElement("br",null),n.a.createElement(d.a,null,n.a.createElement(m.a,{bg:"danger",style:{width:"18rem",borderRadius:"0"}},n.a.createElement(m.a.Body,null,n.a.createElement(m.a.Title,null,"Total Deaths"),n.a.createElement(m.a.Text,null,t.deaths))),n.a.createElement(m.a,{bg:"warning",style:{width:"18rem",borderRadius:"0"}},n.a.createElement(m.a.Body,null,n.a.createElement(m.a.Title,null,"Today's Deaths"),n.a.createElement(m.a.Text,null,t.todayDeaths))),n.a.createElement(m.a,{bg:"success",style:{width:"18rem",borderRadius:"0"}},n.a.createElement(m.a.Body,null,n.a.createElement(m.a.Title,null,"Recovered"),n.a.createElement(m.a.Text,null,t.recovered))))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(T.a,null,n.a.createElement("h3",null,"Daily Statistics of Local Cases"),n.a.createElement(x,{data:D})),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(T.a,null,n.a.createElement(y.a,{style:{margin:"10px"}},n.a.createElement(y.a.Group,{controlId:"formGroupSearch"},n.a.createElement(y.a.Control,{type:"text",placeholder:"Search by country",onChange:function(e){return k(e.target.value)}}))),n.a.createElement(h.a,{queries:[{columns:3,query:"min-width: 500px"},{columns:4,query:"min-width: 1000px"}]},I)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,a,t){e.exports=t(189)},76:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.5ac9c51c.chunk.js.map