(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1292:function(e,a,t){"use strict";t.r(a);var n=t(13),s=t(14),r=t(23),i=t(16),l=t(15),o=t(0),c=t.n(o),u=t(27),d=t(130),m=t(108),p=t.n(m),h=t(77),b=t.n(h),f=t(173),E=t.n(f),v=t(12),g=t(158),S=t(40),O=t(22),j=t.n(O),k=t(25),N=t(10),U=t(46),_=t(223),w=t(335),y=t(336),D=t(29),M=t(743),T=t(53),C=t.n(T),x=[{value:"ADMIN",name:"ADMIN"},{value:"OWN",name:"OWNER"},{value:"KASIR",name:"KASIR"},{value:"SPV",name:"SUPERVISOR"}],B=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.props.isEdit?document.getElementById("usere_name").focus():document.getElementById("user_id").focus()},100)}},{key:"render",value:function(){var e=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}},c.a.createElement(w.a,{id:"user_id",label:"User Id",name:"user_id",nouperCase:!0,readOnly:this.props.isEdit,placeholder:"Silahkan Masukan User Id",component:D.e}),c.a.createElement(w.a,{id:"usere_name",name:"usere_name",component:D.e,type:"text",nouperCase:!0,label:"Username",placeholder:"Masukan Username"}),c.a.createElement("div",{className:"form-group"},c.a.createElement(w.a,{label:"Level",name:"level",options:x,value:this.props.level,placeholder:"Silahkan Pilih Level",component:D.f})),this.props.isEdit?null:c.a.createElement(c.a.Fragment,null,c.a.createElement(w.a,{name:"password",component:D.e,type:"password",label:"Password",nouperCase:!0,placeholder:"Masukan Passsword"})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 text-right"},c.a.createElement("button",{className:"btn btn-primary",disabled:this.props.submitting,type:"submit"},this.props.isLoading?c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"),"\xa0",c.a.createElement("button",{className:"btn btn-white",onClick:function(){return e.props.dispatch(Object(v.Ab)())},type:"button",disabled:this.props.isLoading},"Batal"))),this.props.isLoading?c.a.createElement(C.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(o.Component);B=Object(y.a)({form:"ModalTambahUsers",enableReinitialize:!0,validate:M.a})(B);var I=Object(S.b)(function(e){if(null!==e.manageusers.ShowModalTambahUser)return{initialValues:{user_id:e.manageusers.ShowModalTambahUser.user_id,usere_name:e.manageusers.ShowModalTambahUser.usere_name,level:e.manageusers.ShowModalTambahUser.level}}},null)(B),L=h.Search.SearchBar,P=h.CSVExport.ExportCSVButton,A=function(e,a){j.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>User Id "+e+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(t){t.isConfirmed&&Object(N.b)("users/delete/id/"+e,{data:{user_id:e}}).then(function(){Object(k.d)("Data Berhasil Di Hapus").then(function(){return a(Object(g.e)())})})})},K=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"user_id",text:"User Id ",sort:!0},{dataField:"usere_name",text:"User Name"},{dataField:"level",text:"Level"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(e,a){var t={user_id:a.user_id,usere_name:a.usere_name,level:a.level};return c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-12"},c.a.createElement("button",{onClick:function(){return s.formEditBaki(t)},className:"btn btn-primary mr-3"},c.a.createElement("i",{className:"fa fa-edit"})),c.a.createElement("button",{onClick:function(){return A(a.user_id,s.props.dispatch)},className:"btn btn-danger"},c.a.createElement("i",{className:"fa fa-trash"}))))}}]},s.handleSubmit=s.handleSubmit.bind(Object(r.a)(s)),s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(g.e)())}},{key:"handleSubmit",value:function(e){var a=this;if(this.setState({isLoading:!0}),void 0===e.level)return Object(k.b)("Silahkan Pilih Status"),!1;if(3===e.level)return Object(k.b)("Silahkan Pilih Status"),!1;var t={user_name:e.usere_name,level:e.level},n={user_id:e.user_id,user_name:e.usere_name,level:e.level,password:e.password,retype_password:e.password};this.state.isEdit?Object(N.k)("users/update/id/"+e.user_id,t).then(function(){a.props.dispatch(Object(v.Ab)())}).then(function(){Object(k.d)("Data Berhasil Di Edit"),a.props.dispatch(Object(g.e)())}).then(function(){a.props.dispatch(Object(U.d)("ModalTambahUsers"))}).then(function(){a.setState({isLoading:!1})}).catch(function(e){a.setState({isLoading:!1}),Object(k.a)(void 0===e.response?"Terjadi Kesalahan Saat Menyimpan Data":/e11000/i.test(e.response.data)?"User Id Sudah Terdaftar":e.response.data)}):Object(N.g)("users/add/user",n).then(function(){a.props.dispatch(Object(v.Ab)())}).then(function(){Object(k.d)("Data Berhasil Di Simpan"),a.props.dispatch(Object(g.e)())}).then(function(){a.setState({isLoading:!1})}).then(function(){a.props.dispatch(Object(U.d)("ModalTambahUsers"))}).catch(function(e){a.setState({isLoading:!1}),Object(k.a)(void 0===e.response?"Terjadi Kesalahan Saat Menyimpan Data":/e11000/i.test(e.response.data)?"User Id Sudah Terdaftar":e.response.data)})}},{key:"formEditBaki",value:function(e){this.props.dispatch(Object(v.Bb)()),this.props.dispatch(Object(g.d)(e)),this.setState({isEdit:!0})}},{key:"ShowModalTambahUser",value:function(){this.props.dispatch(Object(v.Bb)()),this.props.dispatch(Object(g.d)(!1)),this.setState({isEdit:!1})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("ol",{className:"breadcrumb float-xl-right"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement(u.b,{to:"#"},"Manage Users")),c.a.createElement("li",{className:"breadcrumb-item active"},"Data Users")),c.a.createElement("h1",{className:"page-header"},"Data Users "),c.a.createElement(d.a,null,c.a.createElement(d.c,null,"Data Users"),c.a.createElement("br",null),c.a.createElement("div",{className:"container"},c.a.createElement(b.a,{keyField:"user_id",data:this.props.DataUsers||[],columns:this.state.columns,search:!0,exportCSV:{fileName:"Export Data Users.csv"}},function(a){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement("button",{onClick:function(){return e.ShowModalTambahUser()},className:"btn btn-primary"}," ",c.a.createElement("i",{className:"fa fa-plus"})," ")),c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement(L,a.searchProps))),c.a.createElement("hr",null),c.a.createElement("div",{className:"col-12"},c.a.createElement(p.a,Object.assign({pagination:E()()},a.baseProps)),c.a.createElement("br",null)),c.a.createElement("div",{className:"col-6"},c.a.createElement(P,a.csvProps,"Export CSV!!")))})),c.a.createElement("br",null),c.a.createElement(_.a,{title:this.state.isEdit?"Edit Data Users":"Tambah Data Users",size:"P",content:c.a.createElement(I,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:function(a){return e.handleSubmit(a)}})})))}}]),t}(c.a.Component);a.default=Object(S.b)(function(e){return{DataUsers:e.manageusers.getDataUser,hideModal:e.datamaster.modalDialog}},null)(K)},743:function(e,a,t){"use strict";a.a=function(e){var a={};return e.user_id||(a.user_id="User Id Tidak Boleh Kosong"),e.user_name||(a.user_name="Username Tidak Boleh Kosong"),e.level||(a.level="Level Harus Dipilih "),a}}}]);
//# sourceMappingURL=28.55c7f5dd.chunk.js.map