(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1252:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(14),l=a(23),o=a(16),c=a(15),i=a(0),s=a.n(i),d=a(27),u=a(130),g=a(40),m=a(10),b=a(336),E=(a(351),a(25)),h=a(335),p=a(29),f=a(5),k=a(87),O=a(132),y=a(131),j=a.n(y),_=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r}return Object(r.a)(a,[{key:"render",value:function(){var e=0,t=0;return this.props.data.forEach(function(a,n){a.detail.forEach(function(a,n){a.stock_on_hand,t+=a.berat_atribut,e+=a.berat}),a.detail.length}),s.a.createElement(s.a.Fragment,null,s.a.createElement(j.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Hancur Barang",sheet:"Laporan Hancur Barang",buttonText:"Export Exel"}),s.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"8"}," Laporan Hancur Barang ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"8"}," Periode ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"8"}," ",0===Object(f.l)("tgl_laporan").length?null:JSON.parse(Object(f.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(f.l)("tgl_laporan")).tgl_akhir," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"8"}," TOKO :  ",Object(f.j)().nama_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"8"}," ALAMAT :  ",Object(f.j)().alamat_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"8"})),s.a.createElement("tr",null,s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE GUDANG"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE BAKI"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE BARCODE"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA BARANG"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KONDISI BARANG"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA ATRIBUT"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"BERAT ATRIBUT"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"BERAT"))),s.a.createElement("tbody",null,this.props.data.map(function(e,t){return s.a.createElement("div",{key:t},e.detail.map(function(e,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",null," ",++t),s.a.createElement("td",null," ",e.kode_gudang),s.a.createElement("td",null," ",e.kode_baki),s.a.createElement("td",null,"\xa0",e.kode_barcode),s.a.createElement("td",null," ",e.nama_barang),s.a.createElement("td",null," ",e.kondisi_barang),s.a.createElement("td",null," ",e.nama_atribut),s.a.createElement("td",{style:{textAlign:"right"}}," ",Object(f.f)(e.berat_atribut,2)),s.a.createElement("td",{style:{textAlign:"right"}}," ",Object(f.f)(e.berat,2)))}))})),s.a.createElement("tfoot",null,s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"5",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}}," ","Total"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," "),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," "),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",Object(f.f)(t,2)," "),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",Object(f.f)(e,2)," ")))))}}]),a}(i.Component),v=a(106),x=(a(222),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=new v.default("l","mm",[297,210]),a=[],n=30,r=0,l=0;t.setFontSize(15),t.text("LAPORAN HANCUR BARANG",14,15),t.setFontSize(20),t.text(Object(f.j)().nama_toko,200,15),t.setFontSize(8);var o=Object(f.j)().alamat_toko.length;o>20&&t.text(Object(f.j)().alamat_toko.slice(0,48),200,20),o>50&&t.text(Object(f.j)().alamat_toko.slice(48,90),200,25),t.setFontSize(10),t.setProperties({title:"Laporan Hancur Barang"}),t.text("PERIODE : ".concat(0===Object(f.l)("tgl_laporan").length?null:JSON.parse(Object(f.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(f.l)("tgl_laporan")).tgl_akhir),14,25);var c=1;e.forEach(function(e,t){e.detail.forEach(function(e,t){var n=[c,e.kode_gudang,e.kode_baki,e.kode_barcode,e.nama_barang,e.kondisi_barang,e.nama_atribut,{content:Object(f.f)(e.berat_atribut,3),styles:{halign:"right"}},{content:Object(f.f)(e.berat,3),styles:{halign:"right"}}];parseFloat(e.berat),parseFloat(e.berat_atribut),r+=parseFloat(e.berat),l+=parseFloat(e.berat_atribut),a.push(n),++c}),e.detail.length});var i=[{content:"Total",colSpan:5,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"",styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"",styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(Object(f.f)(l,3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(Object(f.f)(r,3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}}];a.push(i);var s=[{colSpan:9,content:"Printed By ".concat(JSON.parse(Object(f.l)("userdata")).user_id," / ").concat(Object(f.i)()),styles:{fontStyle:"italic",textColor:"#000"}}];a.push(s),t.autoTable({head:[[{content:"No"},{content:"Kode Gudang"},{content:"Kode Baki"},{content:"BARCODE"},{content:"NAMA BARANG"},{content:"Kondisi Barang"},{content:"NAMA ATR"},{content:"BRT ATR",styles:{halign:"right"}},{content:"BERAT",styles:{halign:"right"}}]],body:a,startY:n,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"}}),n=t.autoTableEndPosY()+3,a=[];var d=t.internal.getNumberOfPages(),u=t.internal.pageSize.width,g=t.internal.pageSize.height;t.setFontSize(10);for(var m=1;m<d+1;m++){var b=u/2,E=g-10;t.setPage(m),t.text("".concat(m," of ").concat(d),b,E,{align:"center"})}var h=t.output("datauristring"),p=window.open();p.document.open(),p.document.write("<html><head><title>Laporan Hancur Barang</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+h+"></embed></body></html>")}),S=a(53),A=a.n(S),N=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={date:new Date},r.setStartDate=r.setStartDate.bind(Object(l.a)(r)),r.setLastDate=r.setLastDate.bind(Object(l.a)(r)),r}return Object(r.a)(a,[{key:"exportPdf",value:function(){x(this.props.LaporanDataBarang)}},{key:"setStartDate",value:function(e){this.setState({tgl_awal:new Date(e)})}},{key:"setLastDate",value:function(e){this.setState({tgl_akhir:new Date(e)})}},{key:"render",value:function(){var e=this,t=[];this.props.LaporanDataBarang.forEach(function(e){e.detail.forEach(function(e){t.push(e),e.berat})});var a=[{dataField:"kode_gudang",text:"Kode Gudang",footerAttrs:{colSpan:"4"},footer:function(e,a,n,r){return s.a.createElement("div",null,"Total Barang  : ",t.length," ")}},{dataField:"kode_baki",text:"Kode Baki"},{dataField:"kode_barcode",text:"Kode Barcode"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"berat",text:"Berat",headerClasses:"text-right",formatter:function(e){return s.a.createElement("div",{className:"text-right"}," ",Object(f.f)(e,2)," ")},footer:function(e){return s.a.createElement("div",{className:"text-right"}," ",Object(f.f)(e.reduce(function(e,t){return e+t},0),2)," ")}}];return s.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(h.a,{name:"tgl_awal",component:p.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(t){return e.setStartDate(t)},placeholder:"Masukan Tanggal Dari"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(h.a,{name:"tgl_akhir",component:p.c,type:"text",selected:this.state.tgl_akhir,onChange:function(t){return e.setLastDate(t)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"text-right"},s.a.createElement("label",null,"\xa0"),s.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),s.a.createElement("div",{className:"col-12"},s.a.createElement(k.a,{keyField:"kode_gudang",data:this.props.export?t:[],columns:a,empty:!0,textEmpty:"Data Laporan Hancur Barang Kosong"})),s.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("button",{type:"button",onClick:function(){return e.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(_,{data:this.props.LaporanDataBarang}))))),this.props.isLoading?s.a.createElement(A.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(i.Component);N=Object(b.a)({form:"HeadHancurBarang",enableReinitialize:!0,validate:O.a})(N);var D=Object(g.b)(function(e){return{initialValues:{tgl_awal:Object(f.h)(),tgl_akhir:Object(f.h)()}}})(N),B=a(107),C=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={isEdit:!1,modalDialog:!1,isLoading:!1,username:!1,export:!1,LaporanDataBarang:[],tgl_awal:new Date,tgl_akhir:new Date},r.handleSubmit=r.handleSubmit.bind(Object(l.a)(r)),r}return Object(r.a)(a,[{key:"handleSubmit",value:function(e){var t=this;this.setState({isLoading:!0});var a={tgl_awal:Object(f.e)(B(new Date(e.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(f.e)(B(new Date(e.tgl_akhir)).format("YYYY-MM-DD"))};Object(m.i)("hancurbarang/get/report",a).then(function(e){0===e.data.length?(Object(E.e)("info","Data Yang Anda Cari Tidak Ada"),t.setState({isLoading:!1,export:!1})):(Object(f.m)("tgl_laporan",JSON.stringify(a)),Object(E.e)("success","Laporan Hancur Barang Tersedia"),t.setState({LaporanDataBarang:e.data,isLoading:!1,export:!0}))}).catch(function(e){return t.errorHandling(e)})}},{key:"errorHandling",value:function(e){Object(E.a)(e),this.setState({isLoading:!1,export:!1})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(d.b,{to:"#"},"Laporan Barang")),s.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Hancur Barang")),s.a.createElement("h1",{className:"page-header"},"Laporan Hancur Barang "),s.a.createElement(u.a,null,s.a.createElement(u.c,null,"Filter Laporan"),s.a.createElement("br",null),s.a.createElement("div",{className:"container"},s.a.createElement(D,{export:this.state.export,LaporanDataBarang:this.state.LaporanDataBarang,isLoading:this.state.isLoading,onSubmit:function(t){return e.handleSubmit(t)}})),s.a.createElement("br",null)))}}]),a}(s.a.Component);C=Object(b.a)({form:"FormLaporanHancurBarang",enableReinitialize:!0})(C);t.default=Object(g.b)(function(e){return{hideModal:e.datamaster.modalDialog}},null)(C)}}]);
//# sourceMappingURL=77.f619aad3.chunk.js.map