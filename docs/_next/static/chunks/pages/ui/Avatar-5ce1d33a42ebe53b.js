(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69],{1042:function(a,b,c){"use strict";c.d(b,{Z:function(){return o}});var d=c(1870),e=c(8174),f=c.n(e),g=c(1664),h=c.n(g),i=c(5893),j=function(a){var b=a.children;return(0,i.jsx)(h(),{href:"/ui/".concat(b),passHref:!0,children:(0,i.jsx)(d.zx,{width:150,bg:d.DM.white,fontSize:18,color:d.DM.black,children:b})})},k=j,l=function(){return(0,i.jsx)(d.ZC,{style:{width:"20%",padding:20},children:(0,i.jsxs)(f(),{children:[(0,i.jsx)(k,{children:"Alert"}),(0,i.jsx)(k,{children:"Avatar"}),(0,i.jsx)(k,{children:"Button"}),(0,i.jsx)(k,{children:"Card"}),(0,i.jsx)(k,{children:"Checkbox"}),(0,i.jsx)(k,{children:"Div"}),(0,i.jsx)(k,{children:"Divider"}),(0,i.jsx)(k,{children:"Dropdown"}),(0,i.jsx)(k,{children:"IconButton"}),(0,i.jsx)(k,{children:"Image"}),(0,i.jsx)(k,{children:"Input"}),(0,i.jsx)(k,{children:"RadioButton"}),(0,i.jsx)(k,{children:"Spinner"}),(0,i.jsx)(k,{children:"Switch"}),(0,i.jsx)(k,{children:"Text"}),(0,i.jsx)(k,{children:"TextArea"}),(0,i.jsx)(k,{children:"TextArea"}),(0,i.jsx)(k,{children:"TextArea"}),(0,i.jsx)(k,{children:"TextArea"}),(0,i.jsx)(k,{children:"TextArea"}),(0,i.jsx)(k,{children:"TextArea"})]})})},m=l,n=function(a){var b=a.children;return(0,i.jsxs)(d.ZC,{style:{flex:1,flexDirection:"row"},children:[(0,i.jsx)(m,{}),(0,i.jsx)(d.ZC,{children:b})]})},o=n},5229:function(a,b,c){"use strict";c.d(b,{B:function(){return i}});var d=c(1870),e=c(7786),f=c(2029),g={border:"#f6f6f6"},h=c(5893),i=function(a){var b=a.componentName,c=a.componentDescription,i=a.importCodeString,j=a.usecaseCodeStringArr,k=a.children,l=a.propertics;return(0,h.jsxs)(d.ZC,{style:{marginTop:80,marginLeft:80,height:"auto"},children:[(0,h.jsx)(d.xv,{style:{fontSize:30,fontWeight:"bold",paddingBottom:30},children:b}),(0,h.jsx)(d.xv,{style:{paddingBottom:25},children:c}),(0,h.jsx)(d.ZC,{style:{},children:(0,h.jsx)(e.Z,{language:"tsx",style:f.Z,children:i})}),(0,h.jsx)(d.xv,{style:{fontSize:30,fontWeight:"bold",marginTop:25},children:"Usage"}),j.map(function(a){return(0,h.jsxs)(d.ZC,{children:[(0,h.jsx)(d.xv,{style:{fontSize:24,marginVertical:20},children:a.name}),(0,h.jsx)(e.Z,{language:"tsx",style:f.Z,children:a.code})]},a.name)}),(0,h.jsx)(d.ZC,{style:{marginTop:30,backgroundColor:d.DM.lightGray5,width:"100%",height:"30%",alignItems:"center",justifyContent:"center"},children:k}),(0,h.jsx)(d.xv,{style:{fontSize:30,fontWeight:"bold",marginVertical:20},children:"Props"}),(0,h.jsxs)(d.ZC,{style:{flexDirection:"row"},children:[(0,h.jsx)(d.xv,{style:{fontWeight:"bold",width:200},children:"Name"}),(0,h.jsx)(d.xv,{style:{fontWeight:"bold",width:200},children:"Type"}),(0,h.jsx)(d.xv,{style:{fontWeight:"bold"},children:"Description"})]}),(0,h.jsx)(d.iz,{thickness:1,color:g.border,style:{marginVertical:10}}),l.map(function(a){return(0,h.jsxs)(d.ZC,{children:[(0,h.jsxs)(d.ZC,{style:{flexDirection:"row"},children:[(0,h.jsx)(d.xv,{style:{width:200},children:a.name}),(0,h.jsx)(d.xv,{style:{width:200},children:a.type}),(0,h.jsx)(d.xv,{style:{width:500},children:a.des})]},a.name),(0,h.jsx)(d.iz,{thickness:1,color:g.border,style:{marginVertical:10}})]},a.name)})]})}},1145:function(a,b,c){"use strict";c.r(b);var d=c(1870),e=c(8174),f=c.n(e),g=c(1042),h=c(5229),i=c(5893),j=function(){return(0,i.jsx)(f(),{showsHorizontalScrollIndicator:!1,children:(0,i.jsx)(h.B,{componentName:"Avatar",componentDescription:"The Avatar component can display profile pictures, text, icon to represent a user.",importCodeString:"import { Avatar } from 'cherag-ui'",usecaseCodeStringArr:[{name:"Avatar.Image",code:'\n    <Avatar.Image\n      size={60}\n      dotSize={20}\n      dotColor={COLORS.green}\n      source={{\n        uri: "https://avatars.githubusercontent.com/u/1342004?s=64&v=4",\n      }}\n    />'},{name:"Avatar.Icon",code:'\n    <Avatar.Icon\n      style={{ paddingTop: 10 }}\n      iconColor={COLORS.red}\n      bgColor={COLORS.lightGray}\n      iconSize={35}\n      icon="heart"\n    />'},{name:"Avatar.Text",code:'\n    <Avatar.Text\n      style={{ paddingTop: 20 }}\n      bgColor={COLORS.border}\n      textColor={COLORS.white}\n      size={60}\n      label="XD"\n    />'}],propertics:[{name:"dotSize",type:"number",des:"For providing props to resize active dot inside Avatar Image."},{name:"dotColor",type:"string",des:"For providing props to chage active dot color inside Avatar Image."},{name:"size",type:"number",des:"Size of Avatar."},{name:"style",type:"StyleProp<ViewStyle>",des:"Cherag-ui has default style, could change custom style."},{name:"imageStyle",type:"StyleProp<ViewStyle>",des:"For providing props to styling Image component inside Avatar."}],children:(0,i.jsxs)(d.ZC,{style:{flexDirection:"row"},children:[(0,i.jsx)(d.qE.Image,{size:60,dotSize:20,dotColor:d.DM.green,source:{uri:"https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}}),(0,i.jsx)(d.qE.Icon,{style:{paddingTop:10},iconColor:d.DM.red,bgColor:d.DM.lightGray,iconSize:35,icon:"heart"}),(0,i.jsx)(d.qE.Text,{style:{paddingTop:20},bgColor:d.DM.border,textColor:d.DM.white,size:60,label:"XD"})]})})})};j.getLayout=function(a){return(0,i.jsx)(g.Z,{children:a})},b.default=j},2593:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui/Avatar",function(){return c(1145)}])}},function(a){a.O(0,[311,234,174,748,774,888,179],function(){var b;return a(a.s=2593)}),_N_E=a.O()}])