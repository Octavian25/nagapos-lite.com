(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1257:function(t,e,a){"use strict";a.r(e);var n=a(13),i=a(14),l=a(23),r=a(16),o=a(15),c=a(2),s=a(0),d=a.n(s),u=a(40),m=a(335),b=a(336),g=a(29),h=a(5),p=a(87),O=a(53),f=a.n(O),E=a(106),v=(a(222),function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=new E.default("l","mm",[297,210]),n=[],i=30;a.setFontSize(15),a.text("LAPORAN OTORISASI AKUN",14,15),a.setFontSize(20),a.text(Object(h.j)().nama_toko,200,15),a.setFontSize(8);var l=Object(h.j)().alamat_toko.length;l>20&&a.text(Object(h.j)().alamat_toko.slice(0,48),200,20),l>50&&a.text(Object(h.j)().alamat_toko.slice(48,90),200,25),a.setFontSize(10),a.setProperties({title:"LAPORAN OTORISASI AKUN"}),t=[[{content:"No"},{content:"USER ID"},{content:"KATEGORI"},{content:"DESKRIPSI"},{content:"KETERANGAN"}]],e.forEach(function(t,e){var a=[{content:"".concat(++e),styles:{cellWidth:10}},t.user_id,t.kategori,t.description,t.keterangan];n.push(a)});var r=[{colSpan:6,content:"Printed By ".concat(JSON.parse(Object(h.l)("userdata")).user_id," / ").concat(Object(h.i)()),styles:{fontStyle:"italic",textColor:"#000"}}];n.push(r),a.autoTable({head:t,body:n,startY:i,theme:"plain",rowPageBreak:"avoid",margin:{top:10},bodyStyles:{fontSize:8},headStyles:{fontSize:8,textColor:"#000",fillColor:"#E8E5E5"}}),i=a.autoTableEndPosY()+3,n=[];var o=a.internal.getNumberOfPages(),c=a.internal.pageSize.width,s=a.internal.pageSize.height;a.setFontSize(10);for(var d=1;d<o+1;d++){var u=c/2,m=s-10;a.setPage(d),a.text("".concat(d," of ").concat(o),u,m,{align:"center"})}var b=a.output("datauristring"),g=window.open();g.document.open(),g.document.write("<html><head><title>LAPORAN BARANG DETAIL</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+b+"></embed></body></html>")}),S=function(t){Object(r.a)(a,t);var e=Object(o.a)(a);function a(t){var i;return Object(n.a)(this,a),(i=e.call(this,t)).state={date:new Date},i.setStartDate=i.setStartDate.bind(Object(l.a)(i)),i.setLastDate=i.setLastDate.bind(Object(l.a)(i)),i}return Object(i.a)(a,[{key:"handleSubmit",value:function(t){console.log(t)}},{key:"exportPdf",value:function(){}},{key:"setStartDate",value:function(t){this.setState({tgl_awal:new Date(t)})}},{key:"setLastDate",value:function(t){this.setState({tgl_akhir:new Date(t)})}},{key:"render",value:function(){var t=this;return d.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-lg-4"},d.a.createElement(m.a,{name:"tgl_awal",component:g.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(e){return t.setStartDate(e)},placeholder:"Masukan Tanggal Dari"})),d.a.createElement("div",{className:"col-lg-4"},d.a.createElement(m.a,{name:"tgl_akhir",component:g.c,type:"text",selected:this.state.tgl_akhir,onChange:function(e){return t.setLastDate(e)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),d.a.createElement("div",{className:"col-lg-4 text"},d.a.createElement("div",{className:"text-right"},d.a.createElement("label",null,"\xa0"),d.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?d.a.createElement(d.a.Fragment,null,d.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),d.a.createElement("div",{className:"col-lg-12"},d.a.createElement(p.a,{keyField:"no_hp",data:this.props.dataAuthorization,columns:[{dataField:"user_id",text:"User Id",footerAttrs:{colSpan:"4"}},{dataField:"kategori",text:"Kategori"},{dataField:"description",text:"Deskripsi"},{dataField:"keterangan",text:"Keterangan"}],empty:!0,textEmpty:"Data Laporan Otorisasi Kosong"})),d.a.createElement("div",{className:this.props.dataAuthorization.length>0?"col-lg-12":"col-lg-12 d-none"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-lg-6"},d.a.createElement("button",{type:"button",onClick:function(){return v(t.props.dataAuthorization)},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),d.a.createElement("div",{className:"col-lg-6"})))),this.props.isLoading?d.a.createElement(f.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(s.Component);S=Object(b.a)({form:"HeadLaporanAuthorization",enableReinitialize:!0})(S);var k=Object(u.b)(function(t){return{initialValues:{tgl_awal:Object(h.h)(),tgl_akhir:Object(h.h)()}}})(S),j=a(10),A=function(t){Object(r.a)(a,t);var e=Object(o.a)(a);function a(t){var i;return Object(n.a)(this,a),(i=e.call(this,t)).state={isLoading:!1,export:!1,dataAuthorization:[]},i.handleSubmit=i.handleSubmit.bind(Object(l.a)(i)),i}return Object(i.a)(a,[{key:"handleSubmit",value:function(t){var e=this,a={tgl_awal:Object(c.y)(Object(c.K)(new Date(t.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(c.y)(Object(c.K)(new Date(t.tgl_akhir)).format("YYYY-MM-DD"))};this.setState({isLoading:!0}),Object(j.d)("authorization/reports?tanggal[gte]=".concat(a.tgl_awal,"&tanggal[lte]=").concat(a.tgl_akhir)).then(function(t){0===t.data.length?(Object(c.t)("info","Data Yang Di Cari Tidak Ada !!!"),e.setState({dataAuthorization:[],isLoading:!1})):(Object(c.t)("success","Laporan Otorisasi Tersedia"),e.setState({dataAuthorization:t.data,isLoading:!1}))}).catch(function(t){Object(c.t)("info","Data Yang Di Cari Tidak Ada !!!")})}},{key:"render",value:function(){var t=this;return c.n.createElement("div",null,c.n.createElement("ol",{className:"breadcrumb float-xl-right"},c.n.createElement("li",{className:"breadcrumb-item"},c.n.createElement(c.g,{to:"#"},"Laporan")),c.n.createElement("li",{className:"breadcrumb-item active"},"Laporan Otorisasi")),c.n.createElement("h1",{className:"page-header"},"Laporan Otorisasi "),c.n.createElement(c.k,null,c.n.createElement(c.m,null,"Laporan Otorisasi"),c.n.createElement("br",null),c.n.createElement("div",{className:"container"},c.n.createElement(k,{dataAuthorization:this.state.dataAuthorization,onSubmit:function(e){return t.handleSubmit(e)},export:this.state.export,isLoading:this.state.isLoading})),c.n.createElement("br",null)))}}]),a}(c.n.Component);A=Object(c.O)({form:"LaporanOtorisasi",enableReinitialize:!0})(A);e.default=Object(c.u)(function(t){return{initialValues:{tgl_awal:Object(c.E)(),tgl_akhir:Object(c.E)()}}})(A)}}]);
//# sourceMappingURL=89.6928a583.chunk.js.map