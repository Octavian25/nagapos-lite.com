(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1199:function(a,e,t){"use strict";t.r(e);var n=t(13),r=t(14),i=t(23),l=t(16),c=t(15),o=t(0),u=t.n(o),s=t(27),d=t(5),b=t(25),m=t(107),g=t(130),p=t(10),h=Object(o.lazy)(function(){return t.e(101).then(t.bind(null,1184))}),j=function(a){Object(l.a)(t,a);var e=Object(c.a)(t);function t(a){var r;return Object(n.a)(this,t),(r=e.call(this,a)).state={isLoading:!1,LaporanDataPenjualan:[],export:!1},r.handleSubmit=r.handleSubmit.bind(Object(i.a)(r)),r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var a=JSON.parse(Object(d.l)("userdata"));this.setState({username:a.user_id})}},{key:"handleSubmit",value:function(a){var e=this;this.setState({isLoading:!0});var t={tgl_awal:Object(d.e)(m(new Date(a.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(d.e)(m(new Date(a.tgl_akhir)).format("YYYY-MM-DD"))};Object(p.e)("penjualan-tukar/reports?tanggal[gte]=".concat(t.tgl_awal,"&tanggal[lte]=").concat(t.tgl_akhir)).then(function(a){0===a.data.length?(Object(b.e)("info","Data Yang Di Cari Tidak Ada !!!"),e.setState({isLoading:!1,export:!1})):(Object(b.e)("success","Laporan Batal Terjual Tersedia"),Object(d.m)("tgl_laporan",JSON.stringify(t)),e.setState({export:!0,isLoading:!1,LaporanDataPenjualan:a.data}))}).catch(function(a){Object(b.e)("info","Data Yang Di Cari Tidak Ada !!!"),e.setState({export:!1,isLoading:!1})})}},{key:"render",value:function(){var a=this;return u.a.createElement("div",null,u.a.createElement("ol",{className:"breadcrumb float-xl-right"},u.a.createElement("li",{className:"breadcrumb-item"},u.a.createElement(s.b,{to:"#"},"Laporan")),u.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Barang Tukar")),u.a.createElement("h1",{className:"page-header"},"Laporan Barang Tukar "),u.a.createElement(g.a,null,u.a.createElement(g.c,null,"Laporan Barang Tukar"),u.a.createElement(g.b,null,u.a.createElement(h,{export:this.state.export,isLoading:this.state.isLoading,LaporanDataPenjualan:this.state.LaporanDataPenjualan,onSubmit:function(e){return a.handleSubmit(e)}}))))}}]),t}(o.Component);e.default=j}}]);
//# sourceMappingURL=100.a1f6773c.chunk.js.map