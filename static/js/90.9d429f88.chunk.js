(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1238:function(t,e,a){"use strict";a.r(e);var n=a(13),r=a(14),l=a(23),o=a(16),c=a(15),i=a(0),s=a.n(i),g=a(27),m=a(5),u=a(25),h=a(130),d=a(10),E=a(40),b=a(335),p=a(336),f=a(29),O=a(87),k=a(131),_=a.n(k),y=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={},r}return Object(r.a)(a,[{key:"render",value:function(){var t=0;return this.props.data.forEach(function(e,a){e.detail.forEach(function(e,a){e.berat,e.berat_nota,e.harga_rata,e.harga_nota,t=t+e.harga||0}),e.detail.length}),s.a.createElement(s.a.Fragment,null,s.a.createElement(_.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Batal Pembelian",sheet:"Laporan Batal Pembelian",buttonText:"Export Exel"}),s.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"11"}," LAPORAN BATAL PEMBELIAN ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"11"},"Periode"," ",0===Object(m.l)("tgl_laporan").length?null:JSON.parse(Object(m.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(m.l)("tgl_laporan")).tgl_akhir," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"11"}," TOKO :  ",Object(m.j)().nama_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"11"}," ALAMAT :  ",Object(m.j)().alamat_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"11"})),s.a.createElement("tr",null,s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Tanggal"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Kode Sales"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"No Faktur Beli"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Nama Customer"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO HP"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA BARANG"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT NOTA"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA RATA"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA NOTA"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA BELI"))),s.a.createElement("tbody",null,this.props.data.map(function(t,e){return s.a.createElement(s.a.Fragment,null,t.detail.map(function(t,e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("tr",null,s.a.createElement("td",null," ",t.tgl_system),s.a.createElement("td",null," ",t.kode_sales),s.a.createElement("td",null," ",t.no_faktur_beli),s.a.createElement("td",null,t.nama_customer),s.a.createElement("td",null,t.no_hp),s.a.createElement("td",null," ",t.nama_barang),s.a.createElement("td",{style:{textAlign:"right"}}," ",Object(m.f)(t.berat,3)),s.a.createElement("td",{style:{textAlign:"right"}}," ",Object(m.f)(t.berat_nota,3)),s.a.createElement("td",{style:{textAlign:"right"}},t.harga_rata.toLocaleString("kr-KO")),s.a.createElement("td",{style:{textAlign:"right"}},t.harga_nota.toLocaleString("kr-KO")),s.a.createElement("td",{style:{textAlign:"right"}},void 0===t.harga?0:t.harga.toLocaleString("kr-KO"))))}),s.a.createElement("tr",null,s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"},colSpan:"6"}," ","Sub Total :"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",Object(m.f)(t.detail.map(function(t){return t.berat}).reduce(function(t,e){return t+e},0),3)," "),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",Object(m.f)(t.detail.map(function(t){return t.berat_nota}).reduce(function(t,e){return t+e},0),3)," "),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},t.detail.map(function(t){return t.harga_rata}).reduce(function(t,e){return t+e},0).toLocaleString("kr-KO")," "),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},t.detail.map(function(t){return t.harga_nota}).reduce(function(t,e){return t+e},0).toLocaleString("kr-KO")," "),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},t.detail.map(function(t){return t.harga||0}).reduce(function(t,e){return t+e},0).toLocaleString("kr-KO")," ")))})),s.a.createElement("tfoot",null)))}}]),a}(i.Component),S=a(106),x=(a(222),function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=new S.default("L","mm"),n=[],r=[],l=30;a.setFontSize(15),a.text("LAPORAN BATAL PEMBELIAN",14,15),a.setFontSize(20),a.text(Object(m.j)().nama_toko,200,15),a.setFontSize(8);var o=Object(m.j)().alamat_toko.length;o>20&&a.text(Object(m.j)().alamat_toko.slice(0,48),200,20),o>50&&a.text(Object(m.j)().alamat_toko.slice(48,90),200,25),a.setFontSize(10),a.setProperties({title:"LAPORAN BATAL PEMBELIAN"}),a.text("PERIODE : ".concat(0===Object(m.l)("tgl_laporan").length?null:JSON.parse(Object(m.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(m.l)("tgl_laporan")).tgl_akhir),14,25),t=[[{content:"Tanggal"},{content:"Kode Sales"},{content:"No Faktur Beli"},{content:"Nama Customer"},{content:"No Hp"},{content:"Nama Barang"},{content:"Berat",styles:{halign:"right"}},{content:"Berat Nota",styles:{halign:"right"}},{content:"Harga Rata",styles:{halign:"right"}},{content:"Harga Nota",styles:{halign:"right"}},{content:"Harga Beli",styles:{halign:"right"}}]];var c=0,i=0,s=0,g=0,u=0;e.forEach(function(t,e){t.detail.forEach(function(t,e){var a=[{content:"".concat(t.tgl_system),styles:{cellWidth:20}},t.kode_sales,t.no_faktur_beli,t.nama_customer,t.no_hp,t.nama_barang,{content:"".concat(Object(m.f)(t.berat,3)),styles:{halign:"right"}},{content:"".concat(Object(m.f)(t.berat_nota,3)),styles:{halign:"right"}},{content:"".concat(t.harga_rata.toLocaleString("kr-KO")),styles:{halign:"right"}},{content:"".concat(t.harga_nota.toLocaleString("kr-KO")),styles:{halign:"right"}},{content:"".concat(void 0===t.harga?0:t.harga.toLocaleString("kr-KO")),styles:{halign:"right"}}];i+=t.berat,s+=t.berat_nota,g+=t.harga_rata,u+=t.harga_nota,c=c+t.harga||0,t.berat,t.berat_nota,t.harga_rata,t.harga_nota,n.push(a)}),t.detail.length});var h=[{content:"Subtotal :",colSpan:6,styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(Object(m.f)(i,3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(Object(m.f)(s,3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(g.toLocaleString("kr-KO")),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(u.toLocaleString("kr-KO")),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(c.toLocaleString("kr-KO")),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}}];n.push(h);var d=[{colSpan:9,content:"Printed By ".concat(JSON.parse(Object(m.l)("userdata")).user_id," / ").concat(Object(m.i)()),styles:{fontStyle:"italic",textColor:"#000"}}];n.push(d),a.autoTable({head:t,body:n,foot:r,startY:l,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:10},footStyles:{lineWidth:.02,lineColor:"#000",fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"}}),l=a.autoTableEndPosY()+3,n=[],r=[];var E=a.internal.getNumberOfPages(),b=a.internal.pageSize.width,p=a.internal.pageSize.height;a.setFontSize(10);for(var f=1;f<E+1;f++){var O=b/2,k=p-10;a.setPage(f),a.text("".concat(f," of ").concat(E),O,k,{align:"center"})}var _=a.output("datauristring"),y=window.open();y.document.open(),y.document.write("<html><head><title>LAPORAN BATAL PEMBELIAN</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+_+"></embed></body></html>")}),v=a(53),N=a.n(v),j=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={date:new Date},r.setStartDate=r.setStartDate.bind(Object(l.a)(r)),r.setLastDate=r.setLastDate.bind(Object(l.a)(r)),r}return Object(r.a)(a,[{key:"handleSubmit",value:function(t){console.log(t)}},{key:"exportPdf",value:function(){x(this.props.datapembelian)}},{key:"setStartDate",value:function(t){this.setState({tgl_awal:new Date(t)})}},{key:"setLastDate",value:function(t){this.setState({tgl_akhir:new Date(t)})}},{key:"render",value:function(){var t=this,e=[],a=0,n=0,r=0;this.props.datapembelian.forEach(function(t){t.detail.forEach(function(t){e.push(t),t.berat,t.berat_nota,a+=t.harga_rata,n+=t.harga_nota,r=r+t.harga||0})});var l=[{dataField:"kode_sales",text:"Kode Sales",footerAttrs:{colSpan:"4"},footer:function(t,a,n,r){return s.a.createElement("div",null,"Total Barang : ",e.length," ")}},{dataField:"nama_customer",text:"Nama Customer"},{dataField:"no_hp",text:"No Hp"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"berat",text:"Berat",headerClasses:"text-right",formatter:function(t){return s.a.createElement("div",{className:"text-right"}," ",Object(m.f)(t,3)," ")},footer:function(t){return s.a.createElement("div",{className:"text-right"}," ",Object(m.f)(t.reduce(function(t,e){return t+e},0),3)," ")}},{dataField:"berat_nota",text:"Berat Nota",headerClasses:"text-right",formatter:function(t){return s.a.createElement("div",{className:"text-right"}," ",Object(m.f)(t,3)," ")},footer:function(t){return s.a.createElement("div",{className:"text-right"}," ",Object(m.f)(t.reduce(function(t,e){return t+e},0),3)," ")}},{dataField:"harga_rata",text:"Harga Rata",headerClasses:"text-right",footer:function(t,e,n,r){return s.a.createElement("div",{className:"text-right"},a.toLocaleString("kr-KO")," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}},{dataField:"harga_nota",text:"Harga Nota",headerClasses:"text-right",footer:function(t,e,a,r){return s.a.createElement("div",{className:"text-right"},n.toLocaleString("kr-KO")," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}},{dataField:"harga",text:"Harga Beli",headerClasses:"text-right",footer:function(t,e,a,n){return s.a.createElement("div",{className:"text-right"},r.toLocaleString("kr-KO")," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},void 0===t?0:t.toLocaleString("kr-KO"))}}];return s.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(b.a,{name:"tgl_awal",component:f.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(e){return t.setStartDate(e)},placeholder:"Masukan Tanggal Dari"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(b.a,{name:"tgl_akhir",component:f.c,type:"text",selected:this.state.tgl_akhir,onChange:function(e){return t.setLastDate(e)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"text-right"},s.a.createElement("label",null,"\xa0"),s.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(O.a,{keyField:"no_hp",data:this.props.export?e:[],columns:l,empty:!0,textEmpty:"Data Laporan Batal Pembelian Kosong"})),s.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("button",{type:"button",onClick:function(){return t.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(y,{data:this.props.datapembelian}))))),this.props.isLoading?s.a.createElement(N.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(i.Component);j=Object(p.a)({form:"HeadFormBatalBeli",enableReinitialize:!0})(j);var A=Object(E.b)(function(t){return{initialValues:{tgl_awal:Object(m.h)(),tgl_akhir:Object(m.h)()}}})(j),L=a(107),C=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={isLoading:!1,export:!1,datapembelian:[]},r.handleSubmit=r.handleSubmit.bind(Object(l.a)(r)),r}return Object(r.a)(a,[{key:"handleSubmit",value:function(t){var e=this;this.setState({isLoading:!0});var a={tgl_awal:Object(m.e)(L(new Date(t.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(m.e)(L(new Date(t.tgl_akhir)).format("YYYY-MM-DD"))};Object(d.i)("batalpembelian/get/report",a).then(function(t){0===t.data.length?(Object(u.e)("info","Data Yang Anda Cari Tidak Ada"),e.setState({isLoading:!1,datapembelian:[],export:!1})):(Object(u.e)("success","Laporan Batal Beli Tersedia"),Object(m.m)("tgl_laporan",JSON.stringify(a)),e.setState({export:!0,isLoading:!1,datapembelian:t.data}))}).catch(function(t){e.setState({isLoading:!1}),Object(u.e)("info","Data Yang Anda Cari Tidak Ada")})}},{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(g.b,{to:"#"},"Laporan")),s.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Batal Pembelian")),s.a.createElement("h1",{className:"page-header"},"Laporan Batal Pembelian "),s.a.createElement(h.a,null,s.a.createElement(h.c,null,"Laporan Batal Pembelian"),s.a.createElement("br",null),s.a.createElement(h.b,null,s.a.createElement(A,{export:this.state.export,isLoading:this.state.isLoading,datapembelian:this.state.datapembelian,onSubmit:function(e){return t.handleSubmit(e)}})),s.a.createElement("br",null)))}}]),a}(s.a.Component);e.default=C}}]);
//# sourceMappingURL=90.9d429f88.chunk.js.map