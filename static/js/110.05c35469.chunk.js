(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1245:function(e,t,a){"use strict";a.r(t);var n=a(13),l=a(14),r=a(23),o=a(16),c=a(15),i=a(2),s=a(0),m=a.n(s),d=a(40),u=a(335),g=a(336),E=a(29),b=a(5),S=a(87),p=a(132),h=a(53),v=a.n(h),k=a(106),O=(a(222),function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new k.default("l","mm",[297,210])),n=[],l=30;a.setFontSize(15),a.text("LAPORAN SERVICE SELESAI",14,15),a.setFontSize(20),a.text(Object(b.j)().nama_toko,200,15),a.setFontSize(8);var r=Object(b.j)().alamat_toko.length;r>20&&a.text(Object(b.j)().alamat_toko.slice(0,48),200,20),r>50&&a.text(Object(b.j)().alamat_toko.slice(48,90),200,25),a.setFontSize(10),a.setProperties({title:"LAPORAN SERVICE SELESAI"}),a.text("PERIODE : ".concat(0===Object(b.l)("tgl_laporan").length?null:JSON.parse(Object(b.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(b.l)("tgl_laporan")).tgl_akhir),14,25),e=[[{content:"NO SERVICE"},{content:"TGL TRANSAKSI"},{content:"NAMA CUSTOMER"},{content:"SALES"},{content:"DESKRIPSI"},{content:"BERAT",styles:{halign:"right"}},{content:"QTY",styles:{halign:"right"}},{content:"ONGKOS",styles:{halign:"right"}}]];var o=0;t.forEach(function(e,t){o+=e.detail_barang.ongkos;var a=[e.no_faktur_service,e.tgl_system,e.nama_customer,e.alamat_customer,e.kode_sales,e.detail_barang.deskripsi,{content:e.detail_barang.berat.toFixed(3),styles:{halign:"right"}},{content:parseInt(e.detail_barang.ongkos).toLocaleString("kr-KO"),styles:{halign:"right"}}];n.push(a)});var c=[{content:"Total Transaksi: ".concat(t.length),colSpan:8,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:parseInt(o).toLocaleString("kr-KO"),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}}];n.push(c);var i=[{content:"Printed By ".concat(JSON.parse(Object(b.l)("userdata")).user_id," / ").concat(Object(b.i)()),colSpan:7,styles:{fontStyle:"italic",textColor:"#000"}}];n.push(i),a.autoTable({head:e,body:n,startY:l,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"},tableLineColor:[255,255,255],tableLineWidth:1}),l=a.autoTableEndPosY()+3,n=[];var s=a.internal.getNumberOfPages(),m=a.internal.pageSize.width,d=a.internal.pageSize.height;a.setFontSize(10);for(var u=1;u<s+1;u++){var g=m/2,E=d-10;a.setPage(u),a.text("".concat(u," of ").concat(s),g,E,{align:"center"})}a.save("LAPORAN SERVICE SELESAI.pdf")}),f=a(131),_=a.n(f),x=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={},l}return Object(l.a)(a,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(_.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Service Masuk",sheet:"Laporan Service Masuk",buttonText:"Export Exel"}),m.a.createElement("table",{id:"table-to-xls",style:{display:"none"}},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",{colSpan:"5",style:{textAlign:"center"}}," ","LAPORAN SERVICE MASUK"," ")),m.a.createElement("tr",null,m.a.createElement("th",{colSpan:"5"}," Periode ")),m.a.createElement("tr",null,m.a.createElement("th",{colSpan:"5"}," ",0===Object(b.l)("tgl_laporan").length?null:JSON.parse(Object(b.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(b.l)("tgl_laporan")).tgl_akhir," ")),m.a.createElement("tr",null,m.a.createElement("th",{colSpan:"5"}," TOKO : ",Object(b.j)().nama_toko," ")),m.a.createElement("tr",null,m.a.createElement("th",{colSpan:"5"}," ALAMAT : ",Object(b.j)().alamat_toko," ")),m.a.createElement("tr",null),m.a.createElement("tr",null,m.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO SERVICE"),m.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TGL TRANSAKSI"),m.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA CUSTOME"),m.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"ALAMAT"),m.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"SALES"),m.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"DESKRIPSI"),m.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"BERAT"),m.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"ONGKOS"))),m.a.createElement("tbody",null,this.props.data.map(function(e,t){return m.a.createElement(m.a.Fragment,null,m.a.createElement("tr",{key:t},m.a.createElement("td",null,e.no_faktur_service),m.a.createElement("td",null,e.tgl_system),m.a.createElement("td",null,e.nama_customer),m.a.createElement("td",null,e.alamat_customer),m.a.createElement("td",null,e.kode_sales),m.a.createElement("td",null,e.detail_barang.deskripsi),m.a.createElement("td",null,e.detail_barang.berat.toFixed(2)),m.a.createElement("td",null,e.detail_barang.ongkos.toLocaleString("kr-KO"))))})),m.a.createElement("tfoot",null,m.a.createElement("tr",null,m.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"},colSpan:"8"},"Total Transaksi ",this.props.data.length)))))}}]),a}(s.Component),L=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={date:new Date,columns:[{dataField:"no_faktur_service",text:"No Service",footerAttrs:{colSpan:"8"},footer:function(e,t,a,n){return m.a.createElement("div",null,"Total Transaksi : ",l.props.LaporanServiceSelesai.length," ")}},{dataField:"tgl_system",text:"Tgl Transaksi"},{dataField:"nama_customer",text:"Nama Customer"},{dataField:"alamat_customer",text:"Alamat"},{dataField:"kode_sales",text:"Sales"},{dataField:"detail_barang.deskripsi",text:"Deskripsi"},{dataField:"detail_barang.berat",text:"Berat",headerClasses:"text-right",formatter:function(e){return m.a.createElement("div",{className:"text-right"},e.toFixed(2))}},{dataField:"detail_barang.ongkos",text:"Ongkos",headerClasses:"text-right",formatter:function(e){return m.a.createElement("div",{className:"text-right"},e.toLocaleString("kr-KO"))}}]},l.setStartDate=l.setStartDate.bind(Object(r.a)(l)),l.setLastDate=l.setLastDate.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"exportPdf",value:function(){O(this.props.LaporanServiceSelesai)}},{key:"setStartDate",value:function(e){this.setState({tgl_awal:new Date(e)})}},{key:"setLastDate",value:function(e){this.setState({tgl_akhir:new Date(e)})}},{key:"render",value:function(){var e=this;return m.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(u.a,{name:"tgl_awal",component:E.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(t){return e.setStartDate(t)},placeholder:"Masukan Tanggal Dari"})),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(u.a,{name:"tgl_akhir",component:E.c,type:"text",selected:this.state.tgl_akhir,onChange:function(t){return e.setLastDate(t)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement("div",{className:"text-right"},m.a.createElement("label",null,"\xa0"),m.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?m.a.createElement(m.a.Fragment,null,m.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement(S.a,{keyField:"no_faktur_service",data:this.props.export?this.props.LaporanServiceSelesai:[],columns:this.state.columns,empty:!0,textEmpty:"Data Laporan Service Selesai Kosong"})),m.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-6"},m.a.createElement("button",{type:"button",onClick:function(){return e.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),m.a.createElement("div",{className:"col-lg-6"},m.a.createElement(x,{data:this.props.LaporanServiceSelesai}))))),this.props.isLoading?m.a.createElement(v.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(s.Component);L=Object(g.a)({form:"HeadServiceSelesai",enableReinitialize:!0,validate:p.a})(L);var y=Object(d.b)(function(e){return{initialValues:{tgl_awal:Object(b.h)(),tgl_akhir:Object(b.h)()}}})(L),j=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={isLoading:!1,LaporanServiceSelesai:[],export:!1},l.handleSubmit=l.handleSubmit.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){var t=this,a={tgl_awal:Object(i.y)(Object(i.K)(new Date(e.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(i.y)(Object(i.K)(new Date(e.tgl_akhir)).format("YYYY-MM-DD"))};this.setState({isLoading:!0}),Object(i.N)("service/get/serviceselesai",a).then(function(e){if(0===e.data.length)return Object(i.t)("info","Laporan Service Selesai Kosong"),t.setState({export:!1,isLoading:!1}),!1;Object(i.t)("success","Laporan Service Selesai Tersedia"),t.setState({LaporanServiceSelesai:e.data,isLoading:!1,export:!0})}).catch(function(e){Object(i.t)("info","Data Yang Di Cari Tidak Ada !!!"),t.setState({export:!1,isLoading:!1})})}},{key:"render",value:function(){var e=this;return i.n.createElement("div",null,i.n.createElement("ol",{className:"breadcrumb float-xl-right"},i.n.createElement("li",{className:"breadcrumb-item"},i.n.createElement(i.g,{to:"#"},"Laporan")),i.n.createElement("li",{className:"breadcrumb-item active"},"Laporan Service Selesai")),i.n.createElement("h1",{className:"page-header"},"Laporan Service Selesai "),i.n.createElement(i.k,null,i.n.createElement(i.m,null,"Laporan Service Selesai"),i.n.createElement("br",null),i.n.createElement(i.l,null,i.n.createElement(y,{export:this.state.export,isLoading:this.state.isLoading,LaporanServiceSelesai:this.state.LaporanServiceSelesai,onSubmit:function(t){return e.handleSubmit(t)}})),i.n.createElement("br",null)))}}]),a}(i.n.Component);j=Object(i.O)({form:"LaporanServiceSelesai",enableReinitialize:!0})(j);t.default=Object(i.u)(null)(j)}}]);
//# sourceMappingURL=110.05c35469.chunk.js.map