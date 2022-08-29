(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39],{1042:function(a,b,c){"use strict";c.d(b,{Z:function(){return o}});var d=c(1870),e=c(1664),f=c.n(e),g=c(8174),h=c.n(g),i=c(5893),j=function(a){var b=a.children;return(0,i.jsx)(f(),{href:"/ui/".concat(b),passHref:!0,children:(0,i.jsx)(d.zx,{width:150,bg:d.DM.white,fontSize:18,color:d.DM.black,children:b})})},k=j,l=function(){return(0,i.jsxs)(d.ZC,{style:{width:"10%",margin:50,alignItems:"center"},children:[(0,i.jsx)(f(),{href:"/ui",passHref:!0,children:(0,i.jsx)(d.zx,{width:180,bg:d.DM.white,fontSize:25,color:d.DM.errorIcon,style:{marginBottom:20},children:"Components"})}),(0,i.jsxs)(h(),{children:[(0,i.jsx)(k,{children:"Alert"}),(0,i.jsx)(k,{children:"Avatar"}),(0,i.jsx)(k,{children:"Button"}),(0,i.jsx)(k,{children:"Card"}),(0,i.jsx)(k,{children:"Checkbox"}),(0,i.jsx)(k,{children:"Div"}),(0,i.jsx)(k,{children:"Divider"}),(0,i.jsx)(k,{children:"Dropdown"}),(0,i.jsx)(k,{children:"IconButton"}),(0,i.jsx)(k,{children:"Image"}),(0,i.jsx)(k,{children:"Input"}),(0,i.jsx)(k,{children:"RadioButton"}),(0,i.jsx)(k,{children:"Spinner"}),(0,i.jsx)(k,{children:"Switch"}),(0,i.jsx)(k,{children:"Text"}),(0,i.jsx)(k,{children:"TextArea"})]})]})},m=l,n=function(a){var b=a.children;return(0,i.jsxs)(d.ZC,{style:{flex:1,flexDirection:"row"},children:[(0,i.jsx)(m,{}),(0,i.jsx)(d.ZC,{children:b})]})},o=n},5229:function(a,b,c){"use strict";c.d(b,{B:function(){return i}});var d=c(1870),e=c(7786),f=c(2029),g={border:"#f6f6f6"},h=c(5893),i=function(a){var b=a.componentName,c=a.componentDescription,i=a.importCodeString,j=a.usecaseCodeStringArr,k=a.children,l=a.propertics;return(0,h.jsxs)(d.ZC,{style:{marginTop:80,marginLeft:80,height:"auto"},children:[(0,h.jsx)(d.xv,{style:{fontSize:30,fontWeight:"bold",paddingBottom:30},children:b}),(0,h.jsx)(d.xv,{style:{paddingBottom:25},children:c}),(0,h.jsx)(d.ZC,{children:(0,h.jsx)(e.Z,{language:"tsx",style:f.Z,children:i})}),(0,h.jsx)(d.xv,{style:{fontSize:30,fontWeight:"bold",marginTop:25},children:"Usage"}),j.map(function(a){return(0,h.jsxs)(d.ZC,{children:[(0,h.jsx)(d.xv,{style:{fontSize:24,marginVertical:20},children:a.name}),(0,h.jsx)(e.Z,{language:"tsx",style:f.Z,children:a.code})]},a.name)}),(0,h.jsx)(d.ZC,{style:{marginTop:30,backgroundColor:d.DM.lightGray5,width:"100%",height:"30%",alignItems:"center",justifyContent:"center"},children:k}),(0,h.jsx)(d.xv,{style:{fontSize:30,fontWeight:"bold",marginVertical:20},children:"Props"}),(0,h.jsxs)(d.ZC,{style:{flexDirection:"row"},children:[(0,h.jsx)(d.xv,{style:{fontWeight:"bold",width:200},children:"Name"}),(0,h.jsx)(d.xv,{style:{fontWeight:"bold",width:200},children:"Type"}),(0,h.jsx)(d.xv,{style:{fontWeight:"bold"},children:"Description"})]}),(0,h.jsx)(d.iz,{thickness:1,color:g.border,style:{marginVertical:10}}),l.map(function(a){return(0,h.jsxs)(d.ZC,{children:[(0,h.jsxs)(d.ZC,{style:{flexDirection:"row"},children:[(0,h.jsx)(d.xv,{style:{width:200},children:a.name}),(0,h.jsx)(d.xv,{style:{width:200},children:a.type}),(0,h.jsx)(d.xv,{style:{width:500},children:a.des})]},a.name),(0,h.jsx)(d.iz,{thickness:1,color:g.border,style:{marginVertical:10}})]},a.name)})]})}},9452:function(a,b,c){"use strict";c.r(b);var d=c(1870),e=c(8174),f=c.n(e),g=c(1042),h=c(5229),i=c(5893),j=function(){return(0,i.jsx)(f(),{showsHorizontalScrollIndicator:!1,children:(0,i.jsx)(h.B,{componentName:"Image",componentDescription:"The Image component allows one to display images.",importCodeString:'import { Image } from "cherag-ui"\'',usecaseCodeStringArr:[{name:"absolute import",code:'\n    <Image\n      w={120}\n      h={120}\n      size={10}\n      source={require("../../assets/cat.jpg")}\n      alt="Immage not found"\n    />'},{name:"Url import",code:'\n    <Image\n      w={80}\n      h={80}\n      size={10}\n      source={{\n        uri: "https://avatars.githubusercontent.com/u/1342004?s=64&v=4",\n      }}\n      alt="Immage not found"\n    />'}],propertics:[{name:"w",type:"number",des:"Width of Image."},{name:"h",type:"number",des:"Height of Image."},{name:"size",type:"number",des:"Image ratio size."},{name:"source",type:"StyleProp<ImageSource>",des:"Style of Image."}],children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Ee,{w:120,h:120,size:10,source:c(3995)}),(0,i.jsx)(d.Ee,{w:80,h:80,size:90,source:{uri:"https://avatars.githubusercontent.com/u/1342004?s=64&v=4"}})]})})})};j.getLayout=function(a){return(0,i.jsx)(g.Z,{children:a})},b.default=j},6487:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui/Image",function(){return c(9452)}])},3995:function(a,b,c){"use strict";c.r(b),b.default={src:"/cherag/_next/static/media/cat.52cb24fc.jpg",height:375,width:500,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAjAyn/8QAGxAAAQQDAAAAAAAAAAAAAAAAAwECBRIABBH/2gAIAQEAAT8AhNUKwplINt2B5bP/xAAZEQEAAgMAAAAAAAAAAAAAAAABAhEABDH/2gAIAQIBAT8A2ZIxp7ef/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEDESH/2gAIAQMBAT8AhSp4f//Z"}}},function(a){a.O(0,[311,234,488,774,888,179],function(){var b;return a(a.s=6487)}),_N_E=a.O()}])