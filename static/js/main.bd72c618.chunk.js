(this["webpackJsonpprml-frontend"]=this["webpackJsonpprml-frontend"]||[]).push([[0],{109:function(t,e,i){},110:function(t,e,i){},240:function(t,e,i){"use strict";i.r(e);var n=i(0),a=i.n(n),s=i(12),o=i.n(s),r=(i(109),i(4)),c=i(5),d=i(10),l=i(9),u=(i(110),i(269)),h=i(274),g=i(275),m=i.p+"static/media/Doctor1.4b5526fa.png",j=i.p+"static/media/Doctor2.5f2049e6.png",b=i.p+"static/media/Doctor3.127fc5ab.png",f=i(67),p=i.n(f),D=i(49),O=i(3),x=function(t){Object(d.a)(i,t);var e=Object(l.a)(i);function i(t){var n;return Object(r.a)(this,i),(n=e.call(this,t)).state={drugData:t.drugData,chartData:{labels:["Anger","Anticipation","Disgust","Fear","Joy","Negative","Positive","Sadness","Surprise","Trust"],datasets:[{label:"Emotion associated with the chosen drug",data:[t.drugData[0].Anger,t.drugData[0].Anticipation,t.drugData[0].Disgust,t.drugData[0].Fear,t.drugData[0].Joy,t.drugData[0].Negative,t.drugData[0].Positive,t.drugData[0].Sadness,t.drugData[0].Surprise,t.drugData[0].Trust],backgroundColor:["#DE4839","#E07C24","#6AC47E","#D9AAF6","#FF6666","#F7CD2E","#3DBE29","#CAD5E2","#51E1ED","#2827CC"]}]}},n}return Object(c.a)(i,[{key:"render",value:function(){return Object(O.jsx)("div",{style:{height:"100%",width:"90%",margin:"auto"},children:Object(O.jsx)(D.b,{data:this.state.chartData,options:{title:{display:!0,text:"Emotions associated with the chosen drug",fontSize:20},legend:{display:!0,position:"right"}}})})}}]),i}(n.Component),y=function(t){Object(d.a)(i,t);var e=Object(l.a)(i);function i(t){var n;return Object(r.a)(this,i),(n=e.call(this,t)).state={conditionsData:t.conditionsData,chartData:{labels:t.labels,datasets:[{label:t.condition,data:t.data,backgroundColor:["#DE4839","#E07C24","#6AC47E","#D9AAF6","#FF6666","#F7CD2E","#3DBE29","#CAD5E2","#51E1ED","#2827CC"]}],options:{title:{display:!0,text:t.condition,fontSize:40},legend:{display:!0,position:"right"}}}},n}return Object(c.a)(i,[{key:"render",value:function(){return Object(O.jsx)("div",{style:{height:"100%",width:"100%",margin:"auto"},children:Object(O.jsx)(D.a,{data:this.state.chartData})})}}]),i}(n.Component),v=function(t){Object(d.a)(i,t);var e=Object(l.a)(i);function i(){var t;return Object(r.a)(this,i),(t=e.call(this)).handleConditionChange=function(e){t.setState({condition:e.target.value,conditionsFlag:!1,conditionDrugs:[],conditionsPredictions:[]})},t.handleConditionSubmit=function(e){if(""!==t.state.condition){for(var i,n=t.state.conditionsData.filter((function(e){return e.condition.includes(t.state.condition)})),a=[],s=[],o=0,r=0;i=n[r++];){var c=i.drugName,d=i.predictions;o+=parseFloat(d),a.push(c),s.push(parseFloat(d))}for(var l=0,u=s.length;l<u;l++)s[l]=s[l]/o*100;t.setState({conditionsFlag:!0,conditionDrugs:a,conditionsPredictions:s})}},t.handleConditionClear=function(e){t.setState({condition:"",conditionsFlag:!1,conditionDrugs:[],conditionsPredictions:[]})},t.handleDrugChange=function(e){t.setState({drug:e.target.value,drugSelected:[],drugFlag:!1})},t.handleDrugSubmit=function(e){if(""!==t.state.drug){var i=t.state.emotionsData.filter((function(e){return e.DrugName.includes(t.state.drug)}));t.setState({drugSelected:i,drugFlag:!0})}},t.handleDrugClear=function(e){t.setState({drug:"",drugSelected:[],drugFlag:!1})},t.state={condition:"",conditionsFlag:!1,conditionsData:[],uniqueConditions:[],conditionDrugs:[],conditionsPredictions:[],drug:"",drugFlag:!1,emotionsData:[],drugSelected:[]},t}return Object(c.a)(i,[{key:"componentDidMount",value:function(){var t=this;p.a.init({key:"1x6wMW_1i66aLaWAfwLpYd5PDyujEShyHt7bIXU5b4fQ",simpleSheet:!0}).then((function(e,i){t.setState({conditionsData:e})})).then((function(){for(var e,i={},n=[],a=0;e=t.state.conditionsData[a++];){var s=e.condition;s in i||(i[s]=1,n.push(s))}t.setState({uniqueConditions:n})})),p.a.init({key:"1y0tJFI-PgyzZMnH96qzaSmjFp-6aU_Co2NeIT5w4Q9o",simpleSheet:!0}).then((function(e,i){t.setState({emotionsData:e})}))}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{className:"heading",children:"Pill Recommendation System \ud83d\udc8a"}),Object(O.jsxs)(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:8,style:{width:"100%",height:"auto",margin:"auto"},children:[Object(O.jsx)(u.a,{item:!0,xs:12,sm:12,md:6,lg:6,style:{margin:"auto"},children:Object(O.jsx)("p",{className:"problemStatement",children:"We understood how Data Science and Text Mining have been of significant importance in the health care industry and aim to answer the following questions through our platform: How to use sentiment analysis and predictive modelling to recommend the most effective drugs for the given condition? What is the emotional inclination of users towards a chosen drug? In this project the main aim is to examine the use of sentiment analysis on drug reviews that can aid in identify new opportunities and challenges for any pharmaceutical business. The project aims at classifying the various reviews on the specified drugs based on their polarity with the aid of their rating."})}),Object(O.jsx)(u.a,{item:!0,xs:12,sm:12,md:6,lg:6,style:{margin:"auto"},children:Object(O.jsx)("img",{src:m,className:"DoctorImage1",alt:"Stay Safe ;)"})})]}),Object(O.jsxs)(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:8,style:{width:"100%",height:"auto",margin:"auto"},children:[Object(O.jsx)(u.a,{item:!0,xs:12,sm:12,md:6,lg:6,style:{margin:"auto"},children:this.state.conditionsFlag?Object(O.jsx)(y,{condition:"Top drug for ".concat(this.state.condition),labels:this.state.conditionDrugs,data:this.state.conditionsPredictions}):Object(O.jsx)("img",{src:j,className:"DoctorImage2",alt:"Stay Safe ;)"})}),Object(O.jsx)(u.a,{item:!0,xs:12,sm:12,md:6,lg:6,style:{margin:"auto"},children:Object(O.jsxs)("div",{className:"form",children:[Object(O.jsx)("p",{className:"description",children:"Analyzing the drugs descriptions, conditions, reviews and then recommending it using Deep Learning Models, for each health condition of a patient"}),Object(O.jsxs)(h.a,{displayEmpty:!0,style:{width:"50%"},value:this.state.condition,onChange:this.handleConditionChange,children:[Object(O.jsx)(g.a,{value:"",disabled:!0,children:"Condition"}),this.state.uniqueConditions.map((function(t){return Object(O.jsx)(g.a,{value:t,children:t},t)}))]}),Object(O.jsxs)("div",{className:"buttons",children:[Object(O.jsx)("button",{id:"submitButton",onClick:this.handleConditionSubmit,children:"Search"}),Object(O.jsx)("button",{id:"clearButton",onClick:this.handleConditionClear,children:"Clear"})]})]})})]}),Object(O.jsxs)(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:8,style:{width:"100%",height:"auto",margin:"auto"},children:[Object(O.jsx)(u.a,{item:!0,xs:12,sm:12,md:6,lg:6,style:{margin:"auto"},children:Object(O.jsxs)("div",{className:"form",children:[Object(O.jsx)("p",{className:"description",children:"Check emotions associated with a particular drug"}),Object(O.jsxs)(h.a,{displayEmpty:!0,style:{width:"50%"},value:this.state.drug,onChange:this.handleDrugChange,children:[Object(O.jsx)(g.a,{value:"",disabled:!0,children:"Drug"}),this.state.emotionsData.map((function(t){return Object(O.jsx)(g.a,{value:t.DrugName,children:t.DrugName},t.DrugName)}))]}),Object(O.jsxs)("div",{className:"buttons",children:[Object(O.jsx)("button",{id:"submitButton",onClick:this.handleDrugSubmit,children:"Search"}),Object(O.jsx)("button",{id:"clearButton",onClick:this.handleDrugClear,children:"Clear"})]})]})}),Object(O.jsx)(u.a,{item:!0,xs:12,sm:12,md:6,lg:6,style:{margin:"auto"},children:this.state.drugFlag?Object(O.jsx)(x,{drugData:this.state.drugSelected}):Object(O.jsx)("img",{src:b,className:"DoctorImage3",alt:"Stay Safe ;)"})})]}),Object(O.jsx)("div",{style:{width:"100%",height:"5vh",margin:"auto"},children:Object(O.jsxs)("p",{className:"footer",children:["Made with ","<3"," by"," ",Object(O.jsx)("a",{href:"mailto:goyal.16@iitj.ac.in",target:"_blank",rel:"noreferrer",children:"Aditi,"})," ",Object(O.jsx)("a",{href:"mailto:jain.38@iitj.ac.in",target:"_blank",rel:"noreferrer",children:"Darshit,"})," ","and"," ",Object(O.jsx)("a",{href:"mailto:agarwal.10@iitj.ac.in",target:"_blank",rel:"noreferrer",children:"Harsh"})," "]})})]})}}]),i}(n.Component),C=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,277)).then((function(e){var i=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,o=e.getTTFB;i(t),n(t),a(t),s(t),o(t)}))};o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root")),C()}},[[240,1,2]]]);
//# sourceMappingURL=main.bd72c618.chunk.js.map