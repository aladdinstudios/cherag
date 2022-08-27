(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[587],{1042:function(a,b,c){"use strict";c.d(b,{Z:function(){return o}});var d=c(1870),e=c(8174),f=c.n(e),g=c(1664),h=c.n(g),i=c(5893),j=function(a){var b=a.children;return(0,i.jsx)(h(),{href:"/ui/".concat(b),passHref:!0,children:(0,i.jsx)(d.zx,{width:150,bg:d.DM.white,fontSize:18,color:d.DM.black,children:b})})},k=j,l=function(){return(0,i.jsx)(d.ZC,{style:{width:"20%",padding:20},children:(0,i.jsxs)(f(),{children:[(0,i.jsx)(k,{children:"Alert"}),(0,i.jsx)(k,{children:"Avatar"}),(0,i.jsx)(k,{children:"Button"}),(0,i.jsx)(k,{children:"Card"}),(0,i.jsx)(k,{children:"Checkbox"}),(0,i.jsx)(k,{children:"Div"}),(0,i.jsx)(k,{children:"Divider"}),(0,i.jsx)(k,{children:"Dropdown"}),(0,i.jsx)(k,{children:"IconButton"}),(0,i.jsx)(k,{children:"Image"}),(0,i.jsx)(k,{children:"Input"}),(0,i.jsx)(k,{children:"RadioButton"}),(0,i.jsx)(k,{children:"Spinner"}),(0,i.jsx)(k,{children:"Switch"}),(0,i.jsx)(k,{children:"Text"}),(0,i.jsx)(k,{children:"TextArea"}),(0,i.jsx)(k,{children:"TextArea"}),(0,i.jsx)(k,{children:"TextArea"}),(0,i.jsx)(k,{children:"TextArea"}),(0,i.jsx)(k,{children:"TextArea"}),(0,i.jsx)(k,{children:"TextArea"})]})})},m=l,n=function(a){var b=a.children;return(0,i.jsxs)(d.ZC,{style:{flex:1,flexDirection:"row"},children:[(0,i.jsx)(m,{}),(0,i.jsx)(d.ZC,{children:b})]})},o=n},5229:function(a,b,c){"use strict";c.d(b,{B:function(){return i}});var d=c(1870),e=c(7786),f=c(2029),g={border:"#f6f6f6"},h=c(5893),i=function(a){var b=a.componentName,c=a.componentDescription,i=a.importCodeString,j=a.usecaseCodeStringArr,k=a.children,l=a.propertics;return(0,h.jsxs)(d.ZC,{style:{marginTop:80,marginLeft:80,height:"auto"},children:[(0,h.jsx)(d.xv,{style:{fontSize:30,fontWeight:"bold",paddingBottom:30},children:b}),(0,h.jsx)(d.xv,{style:{paddingBottom:25},children:c}),(0,h.jsx)(d.ZC,{children:(0,h.jsx)(e.Z,{language:"tsx",style:f.Z,children:i})}),(0,h.jsx)(d.xv,{style:{fontSize:30,fontWeight:"bold",marginTop:25},children:"Usage"}),j.map(function(a){return(0,h.jsxs)(d.ZC,{children:[(0,h.jsx)(d.xv,{style:{fontSize:24,marginVertical:20},children:a.name}),(0,h.jsx)(e.Z,{language:"tsx",style:f.Z,children:a.code})]},a.name)}),(0,h.jsx)(d.ZC,{style:{marginTop:30,backgroundColor:d.DM.lightGray5,width:"100%",height:"30%",alignItems:"center",justifyContent:"center"},children:k}),(0,h.jsx)(d.xv,{style:{fontSize:30,fontWeight:"bold",marginVertical:20},children:"Props"}),(0,h.jsxs)(d.ZC,{style:{flexDirection:"row"},children:[(0,h.jsx)(d.xv,{style:{fontWeight:"bold",width:200},children:"Name"}),(0,h.jsx)(d.xv,{style:{fontWeight:"bold",width:200},children:"Type"}),(0,h.jsx)(d.xv,{style:{fontWeight:"bold"},children:"Description"})]}),(0,h.jsx)(d.iz,{thickness:1,color:g.border,style:{marginVertical:10}}),l.map(function(a){return(0,h.jsxs)(d.ZC,{children:[(0,h.jsxs)(d.ZC,{style:{flexDirection:"row"},children:[(0,h.jsx)(d.xv,{style:{width:200},children:a.name}),(0,h.jsx)(d.xv,{style:{width:200},children:a.type}),(0,h.jsx)(d.xv,{style:{width:500},children:a.des})]},a.name),(0,h.jsx)(d.iz,{thickness:1,color:g.border,style:{marginVertical:10}})]},a.name)})]})}},9889:function(a,b,c){"use strict";c.r(b);var d=c(1870),e=c(7294),f=c(8174),g=c.n(f),h=c(1042),i=c(5229),j=c(5893),k=function(){var a=(0,e.useState)([]),b=a[0],c=a[1];return(0,j.jsx)(g(),{showsHorizontalScrollIndicator:!1,children:(0,j.jsx)(i.B,{componentName:"Checkbox",componentDescription:"Checkboxes allow the selection of multiple options from various childred.",importCodeString:"import { Checkbox, CheckboxItem, CheckboxValue } from 'cherag-ui'",usecaseCodeStringArr:[{name:"",code:'\n    render{\n        const [checkboxes, setCheckboxes] = useState<CheckboxValue[]>([]);\n      return(\n        <Checkbox values={checkboxes} onChange={setCheckboxes}>\n            <CheckboxItem value="1">Checkbox 1</CheckboxItem>\n            <CheckboxItem value="2">Checkbox 2</CheckboxItem>\n            <CheckboxItem value="3">Checkbox 3</CheckboxItem>\n        </Checkbox>\n        );\n    };'}],propertics:[{name:"values",type:"string[]",des:"Selected items of checkbox."},{name:"children",type:"React.ReactNode",des:"Child elements of checkbox."},{name:"onChange",type:"(values: any) => any",des:"The callback return when any children Checkbox is checked or unchecked.."}],children:(0,j.jsxs)(d.XZ,{values:b,onChange:c,children:[(0,j.jsx)(d.oC,{value:"1",children:"Checkbox 1"}),(0,j.jsx)(d.oC,{value:"2",children:"Checkbox 2"}),(0,j.jsx)(d.oC,{value:"3",children:"Checkbox 3"})]})})})};k.getLayout=function(a){return(0,j.jsx)(h.Z,{children:a})},b.default=k},8462:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui/Checkbox",function(){return c(9889)}])}},function(a){a.O(0,[311,234,174,748,774,888,179],function(){var b;return a(a.s=8462)}),_N_E=a.O()}])