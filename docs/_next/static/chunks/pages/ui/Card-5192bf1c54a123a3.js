(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{1042:function(a,b,c){"use strict";c.d(b,{Z:function(){return n}});var d=c(1870),e=c(8174),f=c.n(e);c(7294);var g=c(5893),h=function(a){var b=a.children,c=a.onPress;return(0,g.jsx)(d.zx,{width:150,bg:d.DM.white,fontSize:18,color:d.DM.black,onPress:c,children:b})},i=h,j=c(1163),k=function(){var a=(0,j.useRouter)();return(0,g.jsx)(d.ZC,{style:{width:"20%",padding:20},children:(0,g.jsxs)(f(),{children:[(0,g.jsx)(i,{onPress:function(){return a.push("/ui/Alert")},children:"Alert"}),(0,g.jsx)(i,{onPress:function(){return a.push("/ui/Avatar")},children:"Avatar"}),(0,g.jsx)(i,{onPress:function(){return a.push("/ui/Button")},children:"Button"}),(0,g.jsx)(i,{onPress:function(){return a.push("/ui/Card")},children:"Card"}),(0,g.jsx)(i,{onPress:function(){return a.push("/ui/Checkbox")},children:"Checkbox"}),(0,g.jsx)(i,{children:"Div"}),(0,g.jsx)(i,{children:"Divider"}),(0,g.jsx)(i,{children:"Card"}),(0,g.jsx)(i,{children:"Dropdown"}),(0,g.jsx)(i,{children:"Divider"}),(0,g.jsx)(i,{children:"IconButton"}),(0,g.jsx)(i,{children:"Image"}),(0,g.jsx)(i,{children:"Input"}),(0,g.jsx)(i,{children:"RadioButton"}),(0,g.jsx)(i,{children:"Spinner"}),(0,g.jsx)(i,{children:"Switch"}),(0,g.jsx)(i,{children:"Text"}),(0,g.jsx)(i,{children:"TextArea"}),(0,g.jsx)(i,{children:"TextArea"}),(0,g.jsx)(i,{children:"TextArea"}),(0,g.jsx)(i,{children:"TextArea"}),(0,g.jsx)(i,{children:"TextArea"}),(0,g.jsx)(i,{children:"TextArea"})]})})},l=k,m=function(a){var b=a.children;return(0,g.jsxs)(d.ZC,{style:{flex:1,flexDirection:"row"},children:[(0,g.jsx)(l,{}),(0,g.jsx)(d.ZC,{children:b})]})},n=m},5229:function(a,b,c){"use strict";c.d(b,{B:function(){return i}});var d=c(1870),e=c(7786),f=c(2029),g={border:"#f6f6f6"},h=c(5893),i=function(a){var b=a.componentName,c=a.componentDescription,i=a.importCodeString,j=a.usecaseCodeStringArr,k=a.children,l=a.propertics;return(0,h.jsxs)(d.ZC,{style:{marginTop:80,marginLeft:80,height:"auto"},children:[(0,h.jsx)(d.xv,{style:{fontSize:30,fontWeight:"bold",paddingBottom:30},children:b}),(0,h.jsx)(d.xv,{style:{paddingBottom:25},children:c}),(0,h.jsx)(d.ZC,{style:{},children:(0,h.jsx)(e.Z,{language:"tsx",style:f.Z,children:i})}),(0,h.jsx)(d.xv,{style:{fontSize:30,fontWeight:"bold",marginTop:25},children:"Usage"}),j.map(function(a){return(0,h.jsxs)(d.ZC,{children:[(0,h.jsx)(d.xv,{style:{fontSize:24,marginVertical:20},children:a.name}),(0,h.jsx)(e.Z,{language:"tsx",style:f.Z,children:a.code})]},a.name)}),(0,h.jsx)(d.ZC,{style:{marginTop:30,backgroundColor:d.DM.lightGray5,width:"100%",height:"30%",alignItems:"center",justifyContent:"center"},children:k}),(0,h.jsx)(d.xv,{style:{fontSize:30,fontWeight:"bold",marginVertical:20},children:"Props"}),(0,h.jsxs)(d.ZC,{style:{flexDirection:"row"},children:[(0,h.jsx)(d.xv,{style:{fontWeight:"bold",width:200},children:"Name"}),(0,h.jsx)(d.xv,{style:{fontWeight:"bold",width:200},children:"Type"}),(0,h.jsx)(d.xv,{style:{fontWeight:"bold"},children:"Description"})]}),(0,h.jsx)(d.iz,{thickness:1,color:g.border,style:{marginVertical:10}}),l.map(function(a){return(0,h.jsxs)(d.ZC,{children:[(0,h.jsxs)(d.ZC,{style:{flexDirection:"row"},children:[(0,h.jsx)(d.xv,{style:{width:200},children:a.name}),(0,h.jsx)(d.xv,{style:{width:200},children:a.type}),(0,h.jsx)(d.xv,{style:{width:500},children:a.des})]},a.name),(0,h.jsx)(d.iz,{thickness:1,color:g.border,style:{marginVertical:10}})]},a.name)})]})}},3760:function(a,b,c){"use strict";c.r(b);var d=c(1870),e=c(8174),f=c.n(e),g=c(1042),h=c(5229),i=c(5893),j=function(){return(0,i.jsx)(f(),{showsHorizontalScrollIndicator:!1,children:(0,i.jsx)(h.B,{componentName:"Card",componentDescription:"Card component is a structure of material that provide as an entry point to more detailed information.",importCodeString:"import { Card } from 'cherag-ui'",usecaseCodeStringArr:[{name:"",code:'\n    <Card\n      w={250}\n      style={{\n        width: 250,\n        height: 380,\n      }}\n      title="The Garden City"\n      subTitle="The Silicon Valley of BD"\n      category="Photo"\n      footerText="6 mins ago"\n      footerStyle={{\n        width: 80,\n        fontSize: 14,\n      }}\n      paragraphStyle={{ fontSize: 14, color: COLORS.blackish }}\n      subTitleStyle={{ fontSize: 12 }}\n      titleStyle={{ fontSize: 22, color: COLORS.blackish }}\n    >\n      Bengaluru also called Bangalore is the center of BD high-tech\n      industry. The city is also known for its parks and nightlife Bengaluru\n      also called Bangalore is the center of BD high-tech industry. The city\n      is also known for its parks and nightlife\n   </Card>'}],propertics:[{name:"title",type:"string",des:"Title of card."},{name:"subTitle",type:"string",des:"Subtitle of card."},{name:"footerText",type:"string",des:"Footer text of card."},{name:"category",type:"string",des:"Name of the category."},{name:"w",type:"number",des:"Image with of card."},{name:"h",type:"number",des:"Image height of card."},{name:"categoryBgColor",type:"string",des:"Category background color of card."},{name:"children",type:"React.ReactNode | string",des:"Paragraph of card."},{name:"titleStyle",type:"StyleProp<ViewStyle>",des:"Title style of card."},{name:"subTitleStyle",type:"StyleProp<ViewStyle>",des:"Subtitle style of card."},{name:"paragraphStyle",type:"StyleProp<ViewStyle>",des:"Paragraph style of card."}],children:(0,i.jsx)(d.Zb,{w:250,style:{width:250,height:380},title:"The Garden City",subTitle:"The Silicon Valley of BD",category:"Photo",footerText:"6 mins ago",footerStyle:{width:80,fontSize:14},paragraphStyle:{fontSize:14,color:d.DM.blackish},subTitleStyle:{fontSize:12},titleStyle:{fontSize:22,color:d.DM.blackish},children:"Bengaluru also called Bangalore is the center of BD high-tech industry. The city is also known for its parks and nightlife Bengaluru also called Bangalore is the center of BD high-tech industry. The city is also known for its parks and nightlife"})})})};j.getLayout=function(a){return(0,i.jsx)(g.Z,{children:a})},b.default=j},3888:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui/Card",function(){return c(3760)}])}},function(a){a.O(0,[311,870,25,748,774,888,179],function(){var b;return a(a.s=3888)}),_N_E=a.O()}])