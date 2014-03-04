UUI.BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,y,C,T,I,E,w,P,b,D=o.img,U=o.title,O=void 0===o.spacing?0:o.spacing,N=o.href,L=o.target,V=o.style,M=o.onTap,k=o.onMouseover,_=o.onMouseout;r=A({style:{display:"block",textAlign:"center",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:N,target:L,onTap:function(e){void 0!==M&&M(e,t)},onMouseover:function(e){void 0!==k&&k(e,t)},onMouseout:function(e){void 0!==_&&_(e,t)}}),void 0!==U&&r.prepend(i=DIV({children:[void 0===U?"":U]})),void 0!==D&&r.prepend(DIV({style:{marginBottom:void 0!==U?O:0},children:[D]})),t.setTitle=u=function(e){i.removeAllChildren(),i.append(e)},t.getImg=d=function(){return D},t.getDom=c=function(){return r},t.append=f=function(e){r.append(e)},t.appendTo=a=function(e){return e.append(r),t},t.prepend=l=function(e){r.prepend(e)},t.prependTo=p=function(e){return e.prepend(r),t},t.after=s=function(e){r.after(e)},t.insertAfter=v=function(e){return e.after(r),t},t.before=h=function(e){r.before(e)},t.insertBefore=g=function(e){return e.before(r),t},t.remove=m=function(){r.remove()},t.removeAllChildren=S=function(){r.removeAllChildren()},t.getParent=y=function(){return r.getParent()},t.setParent=C=function(e){r.setParent(e)},t.getChildren=T=function(){return r.getChildren()},t.addStyle=I=function(e){r.addStyle(e)},void 0!==V&&I(V),t.show=E=function(){r.show()},t.hide=w=function(){r.hide()},t.checkIsShow=P=function(){return r.checkIsShow()},t.tap=b=function(){M()}}}),UUI.BUTTON_H=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,i,f,a,l,p,s,v,h,g,m,S,y,C,T,I,E,w,P,b,D,U=o.img,O=o.title,N=void 0===o.spacing?0:o.spacing,L=o.href,V=o.target,M=o.style,k=o.onTap,_=o.onMouseover,R=o.onMouseout;r=A({style:{display:"block",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:L,target:V,onTap:function(e){void 0!==k&&k(e,t)},onMouseover:function(e){void 0!==_&&_(e,t)},onMouseout:function(e){void 0!==R&&R(e,t)},children:[i=DIV({style:{flt:"left"},children:[void 0===O?"":O]}),CLEAR_BOTH()]}),void 0!==U&&(U.addStyle({flt:"left"}),void 0===U.getStyle("margin")&&void 0===U.getStyle("marginRight")&&U.addStyle({marginRight:N}),r.prepend(U),u=EVENT({node:U,name:"load"},function(){i.addStyle({marginTop:(U.getHeight()-i.getHeight())/2}),u.remove()})),t.setTitle=d=function(e){i.removeAllChildren(),i.append(e)},t.getImg=c=function(){return U},t.getDom=f=function(){return r},t.append=a=function(e){r.append(e)},t.appendTo=l=function(e){return e.append(r),t},t.prepend=p=function(e){r.prepend(e)},t.prependTo=s=function(e){return e.prepend(r),t},t.after=v=function(e){r.after(e)},t.insertAfter=h=function(e){return e.after(r),t},t.before=g=function(e){r.before(e)},t.insertBefore=m=function(e){return e.before(r),t},t.remove=S=function(){r.remove()},t.removeAllChildren=y=function(){r.removeAllChildren()},t.getParent=C=function(){return r.getParent()},t.setParent=T=function(e){r.setParent(e)},t.getChildren=I=function(){return r.getChildren()},t.addStyle=E=function(e){r.addStyle(e)},void 0!==M&&E(M),t.show=w=function(){r.show()},t.hide=P=function(){r.hide()},t.checkIsShow=b=function(){return r.checkIsShow()},t.tap=D=function(){k()}}}),UUI.FULL_CHECKBOX=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,y,C,A,T,I,E,w,P,b,D,U,O,N=o.name,L=o.label,V=o.value,M=o.children,k=o.wrapperStyle,_=o.inputStyle,R=o.onChange;r=DIV({style:{position:"relative"},on:{tap:function(e){i.toggleCheck(),e.stop()}},children:[i=INPUT({style:{flt:"left",marginRight:5},name:N,type:"checkbox",onChange:function(e){void 0!==R&&R(e,t)},value:V}),u=SPAN({style:{flt:"left"},children:[L]}),CLEAR_BOTH()]}),r.isValidWrapper=!0,t.getDom=d=function(){return r},t.append=c=function(e){r.append(e)},void 0!==M&&EACH(M,function(e){u.after(e)}),t.appendTo=f=function(e){return e.append(r),t},t.prepend=a=function(e){r.prepend(e)},t.prependTo=l=function(e){return e.prepend(r),t},t.after=p=function(e){r.after(e)},t.insertAfter=s=function(e){return e.after(r),t},t.before=v=function(e){r.before(e)},t.insertBefore=h=function(e){return e.before(r),t},t.remove=g=function(){r.remove()},t.removeAllChildren=m=function(){r.removeAllChildren()},t.getParent=S=function(){return r.getParent()},t.setParent=y=function(e){r.setParent(e)},t.getChildren=C=function(){return r.getChildren()},t.getName=A=function(){return N},t.getValue=T=function(){return i.getValue()},t.setValue=I=function(e){i.setValue(e)},t.select=E=function(){i.select()},t.blur=w=function(){i.blur()},t.addWrapperStyle=P=function(e){r.addStyle(e)},void 0!==k&&P(k),t.addInputStyle=b=function(e){i.addStyle(e)},void 0!==_&&b(_),t.show=D=function(){r.show()},t.hide=U=function(){r.hide()},t.checkIsShow=O=function(){return r.checkIsShow()}}}),UUI.FULL_INPUT=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,y,C,A,T,I,E,w,P,b,D,U,O,N,L,V,M,k=o.name,_=o.type,R=o.placeholder,B=o.value,F=o.wrapperStyle,H=o.inputStyle,x=o.onChange,W=o.onKeydown,K=o.onKeyup,Y=COMBINE_DATA({origin:{position:"absolute",top:0,color:"#999",cursor:"text"},extend:void 0!==H&&"center"===H.textAlign?{left:0,width:"100%",textAlign:"center"}:{left:void 0===B?0:B.length}});i=DIV({style:{padding:5,backgroundColor:"#FFF"},children:[DIV({style:{position:"relative",overflow:"hidden"},children:[u=INPUT({style:{width:"100%",border:"none"},name:k,type:_,value:B,onChange:function(e){c(),void 0!==x&&x(e,t)},onKeydown:function(e){void 0!==W&&W(e,t)},onKeyup:function(e){void 0!==K&&K(e,t)}}),d=UUI.TEXT_BUTTON({style:Y,title:R,onTap:function(){D()}})]})]}),c=RAR(function(){var e=u.getValue(),n=0,t=u.getStyle("fontSize"),o=void 0===t?12:parseInt(t,10);"center"===u.getStyle("textAlign")?(d.addStyle({left:0,width:"100%",textAlign:"center"}),""===e?d.show():d.hide()):(REPEAT(e.length,function(t){var o=e.charAt(t);n+=escape(o).length>4?1.8:1}),d.addStyle({left:n*o/1.6+(n>0?5:0),width:"auto",textAlign:"left"}))}),EVENT({node:u,name:"keydown"},function(){r=DELAY(function(){c()})}),i.addAfterRemoveProc(function(){void 0!==r&&r.remove()}),i.isValidWrapper=!0,t.getInputDom=f=function(){return u},t.getDom=a=function(){return i},t.append=l=function(e){i.append(e)},t.appendTo=p=function(e){return e.append(i),t},t.prepend=s=function(e){i.prepend(e)},t.prependTo=v=function(e){return e.prepend(i),t},t.after=h=function(e){i.after(e)},t.insertAfter=g=function(e){return e.after(i),t},t.before=m=function(e){i.before(e)},t.insertBefore=S=function(e){return e.before(i),t},t.remove=y=function(){i.remove()},t.removeAllChildren=C=function(){i.removeAllChildren()},t.getParent=A=function(){return i.getParent()},t.setParent=T=function(e){i.setParent(e)},t.getChildren=I=function(){return i.getChildren()},t.getName=E=function(){return k},t.getValue=w=function(){return u.getValue()},t.setValue=P=function(e){u.setValue(e)},t.select=b=function(){u.select()},t.focus=D=function(){u.focus()},t.blur=U=function(){u.blur()},t.addWrapperStyle=O=function(e){i.addStyle(e)},void 0!==F&&O(F),t.addInputStyle=N=function(e){u.addStyle(e),d.addStyle(e),d.addStyle(Y)},void 0!==H&&N(H),t.show=L=function(){i.show()},t.hide=V=function(){i.hide()},t.checkIsShow=M=function(){return i.checkIsShow()}}}),UUI.FULL_SELECT=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,y,C,A,T,I,E,w,P,b,D,U,O,N=o.name,L=o.value,V=o.options,M=o.wrapperStyle,k=o.selectStyle,_=o.onChange;r=DIV({style:{padding:5,backgroundColor:"#FFF",position:"relative"},children:[i=SELECT({style:{width:"100%",border:"none"},onChange:function(e){void 0!==_&&_(e,t)},name:N})]}),r.isValidWrapper=!0,t.getDom=u=function(){return r},t.append=d=function(e){r.append(e)},t.appendTo=c=function(e){return e.append(r),t},t.prepend=f=function(e){r.prepend(e)},t.prependTo=a=function(e){return e.prepend(r),t},t.after=l=function(e){r.after(e)},t.insertAfter=p=function(e){return e.after(r),t},t.before=s=function(e){r.before(e)},t.insertBefore=v=function(e){return e.before(r),t},t.remove=h=function(){r.remove()},t.removeAllChildren=g=function(){r.removeAllChildren()},t.getParent=m=function(){return r.getParent()},t.setParent=S=function(e){r.setParent(e)},t.getChildren=y=function(){return r.getChildren()},t.getName=C=function(){return N},t.getValue=A=function(){return i.getValue()},t.setValue=T=function(e){i.setValue(e)},void 0!==L&&T(L),t.select=I=function(){i.select()},t.blur=E=function(){i.blur()},t.addWrapperStyle=w=function(e){r.addStyle(e)},void 0!==M&&w(M),t.addSelectStyle=P=function(e){i.addStyle(e)},void 0!==k&&P(k),t.addOption=b=function(e){i.append(e)},void 0!==V&&EACH(V,function(e){b(e)}),t.show=D=function(){r.show()},t.hide=U=function(){r.hide()},t.checkIsShow=O=function(){return r.checkIsShow()}}}),UUI.FULL_SUBMIT=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,y,C,A,T,I=void 0===o?void 0:o.style,E=void 0===o?void 0:o.value,w=void 0===o?void 0:o.onMouseover,P=void 0===o?void 0:o.onMouseout;r=INPUT({type:"submit",style:{border:"none",width:"100%",padding:"10px 0",cursor:"pointer"},onMouseover:function(e){void 0!==w&&w(e,t)},onMouseout:function(e){void 0!==P&&P(e,t)}}),void 0!==E&&r.setValue(E),t.getDom=i=function(){return r},t.append=u=function(e){r.append(e)},t.appendTo=d=function(e){return e.append(r),t},t.prepend=c=function(e){r.prepend(e)},t.prependTo=f=function(e){return e.prepend(r),t},t.after=a=function(e){r.after(e)},t.insertAfter=l=function(e){return e.after(r),t},t.before=p=function(e){r.before(e)},t.insertBefore=s=function(e){return e.before(r),t},t.remove=v=function(){r.remove()},t.removeAllChildren=h=function(){r.removeAllChildren()},t.getParent=g=function(){return r.getParent()},t.setParent=m=function(e){r.setParent(e)},t.getChildren=S=function(){return r.getChildren()},t.addStyle=y=function(e){r.addStyle(e)},void 0!==I&&y(I),t.show=C=function(){r.show()},t.hide=A=function(){r.hide()},t.checkIsShow=T=function(){return r.checkIsShow()}}}),UUI.FULL_TEXTAREA=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,y,C,A,T,I,E,w,P,b,D,U,O,N,L=o.name,V=o.placeholder,M=o.value,k=o.wrapperStyle,_=o.textareaStyle,R=o.onChange,B=o.onKeydown,F=o.onKeyup;r=DIV({style:{padding:5,backgroundColor:"#FFF",position:"relative",height:100},children:[i=TEXTAREA({style:{width:"100%",height:"100%",backgroundColor:"transparent",border:"none"},name:L,placeholder:V,onChange:function(e){void 0!==R&&R(e,t)},onKeydown:function(e){void 0!==B&&B(e,t)},onKeyup:function(e){void 0!==F&&F(e,t)},value:M})]}),r.isValidWrapper=!0,t.getTextareaDom=u=function(){return i},t.getDom=d=function(){return r},t.append=c=function(e){r.append(e)},t.appendTo=f=function(e){return e.append(r),t},t.prepend=a=function(e){r.prepend(e)},t.prependTo=l=function(e){return e.prepend(r),t},t.after=p=function(e){r.after(e)},t.insertAfter=s=function(e){return e.after(r),t},t.before=v=function(e){r.before(e)},t.insertBefore=h=function(e){return e.before(r),t},t.remove=g=function(){r.remove()},t.removeAllChildren=m=function(){r.removeAllChildren()},t.getParent=S=function(){return r.getParent()},t.setParent=y=function(e){r.setParent(e)},t.getChildren=C=function(){return r.getChildren()},t.getName=A=function(){return L},t.getValue=T=function(){return i.getValue()},t.setValue=I=function(e){i.setValue(e)},t.select=E=function(){i.select()},t.focus=w=function(){i.focus()},t.blur=P=function(){i.blur()},t.addWrapperStyle=b=function(e){r.addStyle(e)},void 0!==k&&b(k),t.addTextareaStyle=D=function(e){i.addStyle(e)},void 0!==_&&D(_),t.show=U=function(){r.show()},t.hide=O=function(){r.hide()},t.checkIsShow=N=function(){return r.checkIsShow()}}}),UUI.FULL_UPLOAD_FORM=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,y,C,A,T,I,E,w,P,b,D,U,O,I,E,w,N=o.wrapperStyle,L=o.formStyle,V=o.inputStyle,M=o.uploadingStyle,k=o.box,_=o.afterUpload,R=o.onChange;r=DIV({style:{padding:5,background:"#FFF",position:"relative"},children:[d=IFRAME({style:{display:"none"},name:"__UPLOAD_FORM_"+t.id}),i=FORM({action:"/"+k.boxName+"/__UPLOAD?"+CONFIG.version,target:"__UPLOAD_FORM_"+t.id,method:"POST",enctype:"multipart/form-data",style:{padding:5},children:[u=INPUT({type:"file",isMultiple:!0,style:{width:"100%",height:"100%",color:"#000",border:"none"},onChange:function(e){void 0!==R&&R(e,t)}}),INPUT({type:"submit",style:{visibility:"hidden",position:"absolute"}})]}),c=UUI.PANEL({wrapperStyle:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"none"},contentStyle:{backgroundColor:"#000",position:"absolute",top:"50%",left:"50%",width:100,marginLeft:-55,marginTop:-13,padding:5,textAlign:"center",borderRadius:10},children:["Uploading..."]})]}),i.isValidWrapper=!0,EVENT({node:d,name:"load"},function(){var e=global["__UPLOAD_FORM_"+t.id],n=void 0!==e?e.fileDataSet:void 0,o=void 0!==e?e.errorCode:void 0;(void 0!==n||void 0!==o)&&(EACH(n,function(e,t){n[t]=UNPACK_DATA(e)}),u.setValue(""),_(n,o)),c.hide()}),EVENT({node:u,name:"change"},function(){c.show(),i.submit(!0)}),t.getDom=f=function(){return r},t.append=a=function(e){r.append(e)},t.appendTo=l=function(e){return e.append(r),t},t.prepend=p=function(e){r.prepend(e)},t.prependTo=s=function(e){return e.prepend(r),t},t.after=v=function(e){r.after(e)},t.insertAfter=h=function(e){return e.after(r),t},t.before=g=function(e){r.before(e)},t.insertBefore=m=function(e){return e.before(r),t},t.remove=S=function(){r.remove()},t.removeAllChildren=y=function(){r.removeAllChildren()},t.getParent=C=function(){return r.getParent()},t.setParent=A=function(e){r.setParent(e)},t.getChildren=T=function(){return r.getChildren()},t.show=I=function(){r.show()},t.hide=E=function(){r.hide()},t.checkIsShow=w=function(){return r.checkIsShow()},t.select=P=function(){u.select()},t.addWrapperStyle=b=function(e){r.addStyle(e)},void 0!==N&&b(N),t.addFormStyle=D=function(e){i.addStyle(e)},void 0!==L&&D(L),t.addInputStyle=U=function(e){u.addStyle(e)},void 0!==V&&U(V),t.addUploadingStyle=O=function(e){c.addWrapperStyle(e)},void 0!==M&&O(M),t.show=I=function(){r.show()},t.hide=E=function(){r.hide()},t.checkIsShow=w=function(){return r.checkIsShow()}}}),UUI.IMG_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,y,C,T,I,E,w,P=o.img,b=o.href,D=o.target,U=o.style,O=o.onTap,N=o.onMouseover,L=o.onMouseout;r=A({style:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:b,target:D,onTap:function(e){void 0!==O&&O(e,t)},onMouseover:function(e){void 0!==N&&N(e,t)},onMouseout:function(e){void 0!==L&&L(e,t)},children:[P]}),t.getImg=i=function(){return P},t.getDom=u=function(){return r},t.append=d=function(e){r.append(e)},t.appendTo=c=function(e){return e.append(r),t},t.prepend=f=function(e){r.prepend(e)},t.prependTo=a=function(e){return e.prepend(r),t},t.after=l=function(e){r.after(e)},t.insertAfter=p=function(e){return e.after(r),t},t.before=s=function(e){r.before(e)},t.insertBefore=v=function(e){return e.before(r),t},t.remove=h=function(){r.remove()},t.removeAllChildren=g=function(){r.removeAllChildren()},t.getParent=m=function(){return r.getParent()},t.setParent=S=function(e){r.setParent(e)},t.getChildren=y=function(){return r.getChildren()},t.addStyle=C=function(e){r.addStyle(e)},void 0!==U&&C(U),t.show=T=function(){r.show()},t.hide=I=function(){r.hide()},t.checkIsShow=E=function(){return r.checkIsShow()},t.tap=w=function(){r.tap()}}}),UUI.LIST=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,y,C,A,T,I,E,w,P,b=void 0===o?void 0:o.children,D=void 0===o?void 0:o.style,U=void 0===o?void 0:o.items,O=[],N={};void 0===U&&(U={}),r=UL(),t.getDom=i=function(){return r},t.append=u=function(e){r.append(e)},void 0!==b&&EACH(b,function(e){u(e)}),t.appendTo=d=function(e){return e.append(r),t},t.prepend=c=function(e){r.prepend(e)},t.prependTo=f=function(e){return e.prepend(r),t},t.after=a=function(e){r.after(e)},t.insertAfter=l=function(e){return e.after(r),t},t.before=p=function(e){r.before(e)},t.insertBefore=s=function(e){return e.before(r),t},t.remove=v=function(){r.remove()},t.removeAllChildren=h=function(){r.removeAllChildren()},t.getParent=g=function(){return r.getParent()},t.setParent=m=function(e){r.setParent(e)},t.getChildren=S=function(){return r.getChildren()},t.addStyle=y=function(e){r.addStyle(e)},void 0!==D&&y(D),t.addItem=C=function(e){var n=e.key,t=e.item,o=e.isFirst;void 0!==U[n]?(t.insertBefore(U[n]),O[FIND_KEY({data:O,value:U[n]})]=t,U[n].remove()):o===!0&&O.length>0?(t.insertBefore(O[0]),O.unshift(t)):(r.append(t),O.push(t)),U[n]=t},EACH(U,function(e){O.push(e),r.append(e)}),t.removeItem=A=function(e){var n=U[e],t=N[e];void 0!==n&&n.remove(),void 0!==t&&EACH(t,function(e){e()}),REMOVE({data:O,value:n}),REMOVE_AT({data:U,key:e}),REMOVE_AT({data:N,key:e})},t.addRemoveItemHandler=T=function(e,n){void 0===N[e]&&(N[e]=[]),N[e].push(n)},t.removeAllItems=I=function(){EACH(U,function(e,n){var t=N[n];e.remove(),void 0!==t&&EACH(t,function(e){e()})}),U={},O=[],N={}},t.show=E=function(){r.show()},t.hide=w=function(){r.hide()},t.checkIsShow=P=function(){return r.checkIsShow()}}}),UUI.LOADING=CLASS({init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h=o.wrapperStyle,g=o.contentStyle,m=o.indicator,S=o.msg;r=UUI.MODAL({wrapperStyle:COMBINE_DATA({origin:{textAlign:"center"},extend:h}),contentStyle:g,isCannotClose:!0,children:[void 0===m?"":m,P({style:void 0===m?{}:{marginTop:10},children:[S]})]}),t.getDom=i=function(){return r.getDom()},t.append=u=function(e){r.append(e)},t.prepend=d=function(e){r.prepend(e)},t.after=c=function(e){r.after(e)},t.before=f=function(e){r.before(e)},t.remove=a=function(){r.remove()},t.removeAllChildren=l=function(){r.removeAllChildren()},t.getChildren=p=function(){return r.getChildren()},t.addWrapperStyle=s=function(e){r.addWrapperStyle(e)},t.addContentStyle=v=function(e){r.addContentStyle(e)}}}),UUI.MODAL=CLASS({init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,y,C=void 0===o?void 0:o.children,A=void 0===o?void 0:o.wrapperStyle,T=void 0===o?void 0:o.contentStyle,I=void 0===o?void 0:o.xStyle,E=void 0===o?void 0:o.xImg,w=void 0===o?void 0:o.isCannotClose,P=void 0===o?void 0:o.onClose;void 0===E&&w!==!0&&(E=IMG({src:UUI.R("x.png")})),r=DIV({children:[i=DIV(),w===!0?"":UUI.IMG_BUTTON({style:COMBINE_DATA({origin:{position:"absolute"},extend:void 0===I?{top:-20,right:-20,padding:10}:I}),img:E,onTap:function(){h(),void 0!==P&&P()},onMouseover:function(){S({opacity:.8})},onMouseout:function(){S({opacity:1})}})]}).appendTo(BODY),f=RAR(function(){var e,n=(WIN_WIDTH()-r.getWidth())/2+SCROLL_LEFT(),t=(WIN_HEIGHT()-r.getHeight())/2+SCROLL_TOP();r.addStyle({position:"absolute",left:0>n?0:n,top:0>t?0:t}),(e=function(n){EACH(n,function(n){n.type===IMG&&EVENT({node:n,name:"load"},function(){f()}),void 0!==n.getChildren&&e(n.getChildren())})})(r.getChildren())}),r.addAfterShowProc(f),u=EVENT({name:"resize"},f),d=EVENT({name:"scroll"},f),c=EVENT({name:"keydown"},function(e){27===e.getKeyCode()&&w!==!0&&(h(),void 0!==P&&P())}),r.addAfterRemoveProc(function(){u.remove(),d.remove(),c.remove()}),t.getDom=a=function(){return r},t.append=l=function(e){i.append(e),f()},void 0!==C&&EACH(C,function(e){l(e)}),t.prepend=p=function(e){i.prepend(e),f()},t.after=s=function(e){r.after(e),f()},t.before=v=function(e){r.before(e),f()},t.remove=h=function(){r.remove()},t.removeAllChildren=g=function(){r.removeAllChildren()},t.getChildren=m=function(){return r.getChildren()},t.addWrapperStyle=S=function(e){r.addStyle(e),f()},void 0!==A&&S(A),t.addContentStyle=y=function(e){i.addStyle(e),f()},void 0!==T&&y(T)}}),UUI.NOTICE=CLASS({init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h=o.wrapperStyle,g=o.contentStyle,m=o.isCannotClose,S=o.msg;r=UUI.MODAL({wrapperStyle:COMBINE_DATA({origin:{textAlign:"center"},extend:h}),contentStyle:g,isCannotClose:!0,children:[S]}),t.getDom=i=function(){return r.getDom()},t.append=u=function(e){r.append(e)},t.prepend=d=function(e){r.prepend(e)},t.after=c=function(e){r.after(e)},t.before=f=function(e){r.before(e)},t.remove=a=function(){r.remove()},t.removeAllChildren=l=function(){r.removeAllChildren()},t.getChildren=p=function(){return r.getChildren()},t.addWrapperStyle=s=function(e){r.addWrapperStyle(e)},t.addContentStyle=v=function(e){r.addContentStyle(e)},m!==!0&&DELAY(2,a)}}),UUI.PANEL=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,y,C,A,T,I,E,w=void 0===o?void 0:o.children,P=void 0===o?void 0:o.wrapperStyle,b=void 0===o?void 0:o.contentStyle;r=DIV({children:[i=DIV()]}),t.getDom=u=function(){return r},t.append=d=function(e){i.append(e)},void 0!==w&&EACH(w,function(e){d(e)}),t.appendTo=c=function(e){return e.append(r),t},t.prepend=f=function(e){i.prepend(e)},t.prependTo=a=function(e){return e.prepend(r),t},t.after=l=function(e){r.after(e)},t.insertAfter=p=function(e){return e.after(r),t},t.before=s=function(e){r.before(e)},t.insertBefore=v=function(e){return e.before(r),t},t.remove=h=function(){r.remove()},t.removeAllChildren=g=function(){i.removeAllChildren()},t.getParent=m=function(){return r.getParent()},t.setParent=S=function(e){r.setParent(e)},t.getChildren=y=function(){return i.getChildren()},t.addWrapperStyle=C=function(e){r.addStyle(e)},void 0!==P&&C(P),t.addContentStyle=A=function(e){i.addStyle(e)},void 0!==b&&A(b),t.show=T=function(){r.show()},t.hide=I=function(){r.hide()},t.checkIsShow=E=function(){return r.checkIsShow()}}}),UUI.TABLE=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,y,C,A,T,I,E,w,P,b=void 0===o?void 0:o.children,D=void 0===o?void 0:o.style,U=void 0===o?void 0:o.trs,O=[],N={};void 0===U&&(U={}),r=TABLE(),t.getDom=i=function(){return r},t.append=u=function(e){r.append(e)},void 0!==b&&EACH(b,function(e){u(e)}),t.appendTo=d=function(e){return e.append(r),t},t.prepend=c=function(e){r.prepend(e)},t.prependTo=f=function(e){return e.prepend(r),t},t.after=a=function(e){r.after(e)},t.insertAfter=l=function(e){return e.after(r),t},t.before=p=function(e){r.before(e)},t.insertBefore=s=function(e){return e.before(r),t},t.remove=v=function(){r.remove()},t.removeAllChildren=h=function(){r.removeAllChildren()},t.getParent=g=function(){return r.getParent()},t.setParent=m=function(e){r.setParent(e)},t.getChildren=S=function(){return r.getChildren()},t.addStyle=y=function(e){r.addStyle(e)},void 0!==D&&y(D),t.addTR=C=function(e){var n=e.key,t=e.tr,o=e.isFirst;void 0!==U[n]?(t.insertBefore(U[n]),O[FIND_KEY({data:O,value:U[n]})]=t,U[n].remove()):o===!0&&O.length>0?(t.insertBefore(O[0]),O.unshift(t)):(r.append(t),O.push(t)),U[n]=t},EACH(U,function(e){O.push(e),r.append(e)}),t.removeTR=A=function(e){var n=U[e],t=N[e];void 0!==n&&n.remove(),void 0!==t&&EACH(t,function(e){e()}),REMOVE({data:O,value:n}),REMOVE_AT({data:U,key:e}),REMOVE_AT({data:N,key:e})},t.addRemoveTRHandler=T=function(e,n){void 0===N[e]&&(N[e]=[]),N[e].push(n)},t.removeAllTRs=I=function(){EACH(U,function(e,n){var t=N[n];e.remove(),void 0!==t&&EACH(t,function(e){e()})}),U={},O=[],N={}},t.show=E=function(){r.show()},t.hide=w=function(){r.hide()},t.checkIsShow=P=function(){return r.checkIsShow()}}}),UUI.TEXT_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,y,C,T,I,E,w,P,b=o.title,D=o.href,U=o.target,O=o.style,N=o.onTap,L=o.onMouseover,V=o.onMouseout;r=A({style:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:D,target:U,onTap:function(e){void 0!==N&&N(e,t)},onMouseover:function(e){void 0!==L&&L(e,t)},onMouseout:function(e){void 0!==V&&V(e,t)},children:[i=SPAN({children:[void 0===b?"":b]})]}),t.setTitle=u=function(e){i.removeAllChildren(),i.append(e)},t.getDom=d=function(){return r},t.append=c=function(e){r.append(e)},t.appendTo=f=function(e){return e.append(r),t},t.prepend=a=function(e){r.prepend(e)},t.prependTo=l=function(e){return e.prepend(r),t},t.after=p=function(e){r.after(e)},t.insertAfter=s=function(e){return e.after(r),t},t.before=v=function(e){r.before(e)},t.insertBefore=h=function(e){return e.before(r),t},t.remove=g=function(){r.remove()},t.removeAllChildren=m=function(){r.removeAllChildren()},t.getParent=S=function(){return r.getParent()},t.setParent=y=function(e){r.setParent(e)},t.getChildren=C=function(){return r.getChildren()},t.addStyle=T=function(e){r.addStyle(e)},void 0!==O&&T(O),t.show=I=function(){r.show()},t.hide=E=function(){r.hide()},t.checkIsShow=w=function(){return r.checkIsShow()},t.tap=P=function(){r.tap()}}}),UUI.VALID_FORM=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,y,C,A,T,I,E,w,b,D,U=void 0===o?void 0:o.errorMsgs,O=void 0===o?void 0:o.onSubmit,N=void 0===o?void 0:o.children,L=void 0===o?void 0:o.style,V=void 0===o?void 0:o.errorMsgStyle,M=[];r=FORM({onSubmit:function(e){void 0!==O&&O(e,t)}}),r.addAfterRemoveProc(function(){EACH(M,function(e){e.remove()})}),t.getDom=i=function(){return r},t.append=u=function(e){r.append(e)},void 0!==N&&EACH(N,function(e){u(e)}),t.appendTo=d=function(e){return e.append(r),t},t.prepend=c=function(e){r.prepend(e)},t.prependTo=f=function(e){return e.prepend(r),t},t.after=a=function(e){r.after(e)},t.insertAfter=l=function(e){return e.after(r),t},t.before=p=function(e){r.before(e)},t.insertBefore=s=function(e){return e.before(r),t},t.remove=v=function(){r.remove()},t.removeAllChildren=h=function(){r.removeAllChildren()},t.getParent=g=function(){return r.getParent()},t.setParent=m=function(e){r.setParent(e)},t.getChildren=S=function(){return r.getChildren()},t.getData=y=function(){return r.getData()},t.setData=C=function(e){return r.setData(e)},t.submit=A=function(){r.submit()},t.showErrors=T=function(e){var n=COPY_DATA(e),o=function(e){EACH(e.getChildren(),function(e){var t,r,i,u;void 0!==e.getValue&&void 0!==e.getName&&(t=e.getName(),r=n[t],void 0!==r&&void 0!==U&&(i=U[t][r.type],"function"==typeof i&&(i=i(void 0!==r.validParam?r.validParam:r.validParams)),(e.getParent().getParent().isValidWrapper===!0?e.getParent().getParent():e.getParent().isValidWrapper===!0?e.getParent():e).after(u=P({style:V,children:[i]})),REMOVE_AT({data:n,key:t}),M.push(DELAY(2,function(e){u.remove(),REMOVE({data:M,value:e})})))),o(e)})};o(t)},t.getErrorMsgs=I=function(e){var n=COPY_DATA(e),o=[],r=function(e){EACH(e.getChildren(),function(e){var t,i,u;void 0!==e.getValue&&void 0!==e.getName&&(t=e.getName(),i=n[t],void 0!==i&&void 0!==U&&(u=U[t][i.type],"function"==typeof u&&(u=u(void 0!==i.validParam?i.validParam:i.validParams)),o.push(u),REMOVE_AT({data:n,key:t}))),r(e)})};return r(t),o},t.addStyle=E=function(e){r.addStyle(e)},void 0!==L&&E(L),t.show=w=function(){r.show()},t.hide=b=function(){r.hide()},t.checkIsShow=D=function(){return r.checkIsShow()}}}),UUI.V_CENTER=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,y,C,A,T,I,E,w=void 0===o?void 0:o.children,P=void 0===o?void 0:o.wrapperStyle,b=void 0===o?void 0:o.contentStyle;r=TABLE({style:{width:"100%",margin:0,padding:0},children:[TR({style:{margin:0,padding:0},children:[i=TD({style:{margin:0,padding:0}})]})]}),t.getDom=u=function(){return r},t.append=d=function(e){i.append(e)},void 0!==w&&EACH(w,function(e){d(e)}),t.appendTo=c=function(e){return e.append(r),t},t.prepend=f=function(e){i.prepend(e)},t.prependTo=a=function(e){return e.prepend(r),t},t.after=l=function(e){r.after(e)},t.insertAfter=p=function(e){return e.after(r),t},t.before=s=function(e){r.before(e)},t.insertBefore=v=function(e){return e.before(r),t},t.remove=h=function(){r.remove()},t.removeAllChildren=g=function(){i.removeAllChildren()},t.getParent=m=function(){return r.getParent()},t.setParent=S=function(e){r.setParent(e)},t.getChildren=y=function(){return i.getChildren()},t.addWrapperStyle=C=function(e){r.addStyle(e)},void 0!==P&&C(P),t.addContentStyle=A=function(e){i.addStyle(e)},void 0!==b&&A(b),t.show=T=function(){r.show()},t.hide=I=function(){r.hide()},t.checkIsShow=E=function(){return r.checkIsShow()}}});