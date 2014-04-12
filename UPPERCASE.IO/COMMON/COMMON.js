global.CALENDAR=CALENDAR=CLASS({init:function(t,n,e,r){"use strict";var a,i,u,o,A,E,c;e.getYear=a=function(){return r.getFullYear()},e.getMonth=i=function(){return r.getMonth()+1},e.getDate=u=function(){return r.getDate()},e.getDay=o=function(){return r.getDay()},e.getHour=A=function(){return r.getHours()},e.getMinute=E=function(){return r.getMinutes()},e.getSecond=c=function(){return r.getSeconds()}}}),global.CONFIG=CONFIG={isDevMode:!1,port:8888,defaultBoxName:"UPPERCASE.IO",defaultTitle:"UPPERCASE.IO",discription:"WELCOME!",defaultLang:"en",contactAddress:"contact@btncafe.com",maxUploadFileMB:10,isMobileFullScreen:!1},global.DELAY=DELAY=CLASS({init:function(t,n,e,r,a){"use strict";var i,u;void 0===a&&(a=r,r=0),i=setTimeout(function(){a(e)},1e3*r),e.remove=u=function(){clearTimeout(i)}}}),global.EACH=EACH=METHOD({run:function(t,n,e){"use strict";var r,a,i;if(void 0===n)return!1;if(CHECK_IS_ARRAY(n)===!0||CHECK_IS_ARGUMENTS(n)===!0)for(r=n.length,i=0;r>i;i+=1){if(e(n[i],i)===!1)return!1;n.length===r-1&&(i-=1,r-=1)}else for(a in n)if(n.hasOwnProperty(a)===!0&&e(n[a],a)===!1)return!1;return!0}}),global.FIND_KEY=FIND_KEY=METHOD({run:function(t,n){"use strict";var e,r=n.data,a=n.value;return EACH(r,function(t,n){return t===a?(e=n,!1):void 0}),e}}),global.FOR=FOR=METHOD({run:function(t,n,e){"use strict";var r,a=n.start,i=n.end;for(r=parseInt(a,10);r<=parseInt(i,10);r+=1)e(r)}}),global.INTEGER=INTEGER=METHOD({run:function(t,n){"use strict";return void 0===n?void 0:parseInt(n,10)}}),global.INTERVAL=INTERVAL=CLASS({init:function(t,n,e,r,a){"use strict";var i,u;void 0===a&&(a=r,r=0),i=setInterval(function(){a(e)},0===r?1:1e3*r),e.remove=u=function(){clearInterval(i)}}}),global.LOOP=LOOP=CLASS({statics:function(t){"use strict";var n,e,r,a,i,u,o,A,E,c=[],l=[];r=function(){var t,e,r,a,i,u=Date.now(),o=u-n;for(a=0;a<c.length;a+=1)if(t=c[a],void 0!==t.fps&&t.fps>0){for(void 0===t.timeSigma&&(t.timeSigma=0,t.countSigma=0),e=parseInt(t.fps/(1e3/o)*(t.timeSigma/o+1),10)-t.countSigma,void 0!==t.start&&t.start(),r=t.interval,i=0;e>i;i+=1)r();void 0!==t.end&&t.end(o),t.countSigma+=e,t.timeSigma+=o,t.timeSigma>1e3&&(t.timeSigma=void 0)}for(a=0;a<l.length;a+=1)l[a](o);n=u},a=function(){void 0===e&&(n=Date.now(),e=INTERVAL(r))},i=function(){c.length<=0&&l.length<=0&&(e.remove(),e=void 0)},t.addLoopInfo=u=function(t){c.push(t),a()},t.removeLoopInfo=o=function(t){REMOVE({data:c,value:t}),i()},t.addRun=A=function(t){l.push(t),a()},t.removeRun=E=function(t){REMOVE({data:l,value:t}),i()}},init:function(t,n,e,r,a){"use strict";var i,u,o,A=void 0===a?r:void 0,E=void 0===a||CHECK_IS_DATA(a)!==!0?void 0:a.start,c=void 0===a?void 0:CHECK_IS_DATA(a)!==!0?a:a.interval,l=void 0===a||CHECK_IS_DATA(a)!==!0?void 0:a.end;void 0!==a?(t.addLoopInfo(i={fps:r,start:E,interval:c,end:l}),e.changeFPS=u=function(t){i.fps=t},e.remove=o=function(){t.removeLoopInfo(i)}):(t.addRun(A),e.remove=o=function(){t.removeRun(A)})}}),FOR_BOX(function(t){"use strict";t.MODEL=CLASS({init:function(){}})}),global.OVERRIDE=OVERRIDE=METHOD({run:function(t,n,e){"use strict";e(n)}}),global.PACK_DATA=PACK_DATA=METHOD({run:function(t,n){"use strict";var e=COPY_DATA(n),r=[];return EACH(e,function(t,n){t instanceof Date==!0?(e[n]=INTEGER(t.getTime()),r.push(n)):CHECK_IS_DATA(t)===!0?e[n]=PACK_DATA(t):CHECK_IS_ARRAY(t)===!0&&EACH(t,function(n,e){CHECK_IS_DATA(n)===!0&&(t[e]=PACK_DATA(n))})}),e.__DATE_ATTR_NAMES=r,e}}),global.RANDOM=RANDOM=METHOD({run:function(t,n){"use strict";return Math.floor(Math.random()*(n+1))}}),global.RAR=RAR=METHOD({run:function(t,n,e){"use strict";return void 0===e?(e=n)():e(n),e}}),global.REAL=REAL=METHOD({run:function(t,n){"use strict";return void 0===n?void 0:parseFloat(n)}}),global.REMOVE=REMOVE=METHOD({run:function(t,n){"use strict";var e=n.data,r=n.value;EACH(e,function(t,n){t===r&&REMOVE_AT({data:e,key:n})})}}),global.REMOVE_AT=REMOVE_AT=METHOD({run:function(t,n){"use strict";var e=n.data,r=n.key;CHECK_IS_ARRAY(e)===!0?e.splice(r,1):CHECK_IS_DATA(e)===!0&&delete e[r]}}),global.REMOVE_TO_DELETE=REMOVE_TO_DELETE=METHOD({run:function(t,n){"use strict";EACH(n,function(t,e){t===TO_DELETE?REMOVE_AT({key:e,data:n}):(CHECK_IS_DATA(t)===!0||CHECK_IS_ARRAY(t)===!0)&&REMOVE_TO_DELETE(t)})}}),global.REPEAT=REPEAT=METHOD({run:function(t,n,e){"use strict";var r;for(r=0;r<parseInt(n,10)&&e(r)!==!1;r+=1);}}),global.RUN=RUN=METHOD({run:function(t,n){"use strict";return n()}}),global.TO_DELETE=TO_DELETE=null,global.UNPACK_DATA=UNPACK_DATA=METHOD({run:function(t,n){"use strict";var e=COPY_DATA(n);return void 0!==e.__DATE_ATTR_NAMES&&(EACH(e.__DATE_ATTR_NAMES,function(t){e[t]=new Date(e[t])}),delete e.__DATE_ATTR_NAMES),EACH(e,function(t,n){CHECK_IS_DATA(t)===!0?e[n]=UNPACK_DATA(t):CHECK_IS_ARRAY(t)===!0&&EACH(t,function(n,e){CHECK_IS_DATA(n)===!0&&(t[e]=UNPACK_DATA(n))})}),e}}),global.VALID=VALID=CLASS({statics:function(t){"use strict";var n,e,r,a,i,u,o,A,E,c,l,_,f,C,s,T,v,D,d,R,g;t.notEmpty=n=function(t){var n=void 0===t||t===TO_DELETE?"":String(t);return CHECK_IS_ARRAY(t)===!0||""!==n.trim()},t.regex=e=function(t){var n=t.pattern,e=String(t.value);return e===e.match(n)[0]},t.size=r=function(t){var n=t.min,e=t.max,r=String(t.value),a=r.length;return void 0===n&&(n=0),a>=n&&(void 0===e||e>=a)},t.integer=a=function(t){var e=String(t);return n(t)===!0&&null!==e.match(/^(?:-?(?:0|[1-9][0-9]*))$/)},t.real=i=function(t){var e=String(t);return n(t)===!0&&null!==e.match(/^(?:-?(?:0|[1-9][0-9]*))?(?:\.[0-9]*)?$/)},t.bool=u=function(t){var n=String(t);return"true"===n||"false"===n},t.date=o=function(t){var n=String(t),e=Date.parse(n);return isNaN(e)===!1},t.min=A=function(t){var n=t.min,e=t.value;return i(e)===!0&&e>=n},t.max=E=function(t){var n=t.max,e=t.value;return i(e)===!0&&n>=e},t.email=c=function(t){var e=String(t);return n(t)===!0&&null!==e.match(/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/)},t.png=l=function(t){var e=String(t);return n(t)===!0&&null!==e.match(/^data:image\/png;base64,/)},t.url=_=function(t){var e=String(t);return n(t)===!0&&null!==e.match(/^(?:(?:ht|f)tp(?:s?)\:\/\/|~\/|\/)?(?:\w+:\w+@)?((?:(?:[-\w\d{1-3}]+\.)+(?:com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|edu|co\.uk|ac\.uk|it|fr|tv|museum|asia|local|travel|[a-z]{2}))|((\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)(\.(\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)){3}))(?::[\d]{1,5})?(?:(?:(?:\/(?:[-\w~!$+|.,=]|%[a-f\d]{2})+)+|\/)+|\?|#)?(?:(?:\?(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)(?:&(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(?:#(?:[-\w~!$ |\/.,*:;=]|%[a-f\d]{2})*)?$/i)&&e.length<=2083},t.username=f=function(t){var e=String(t);return n(t)===!0&&null!==e.match(/^[_a-zA-Z0-9\-]+$/)},t.id=C=function(t){var e=String(t);return n(t)===!0&&null!==e.match(/[0-9a-f]{24}/)&&24===e.length},t.one=s=function(t){var n=t.value,e=t.array;return EACH(e,function(t){return n===t?!1:void 0})===!1},t.array=T=function(t){return CHECK_IS_ARRAY(t)===!0},t.data=v=function(t){return CHECK_IS_DATA(t)===!0},t.element=D=function(t){var n=t.array,e=VALID({_:t.validData});return EACH(n,function(t){return e.check({data:{_:t}}).checkHasError()===!0?!1:void 0})===!0},t.property=d=function(t){var n=t.data,e=VALID({_:t.validData});return EACH(n,function(t){return e.check({data:{_:t}}).checkHasError()===!0?!1:void 0})===!0},t.detail=R=function(t){var n=t.data,e=VALID(t.validDataSet);return!e.check({data:n}).checkHasError()},t.equal=g=function(t){var n=t.value,e=String(n),r=t.validValue,a=String(r);return e===a}},init:function(t,n,e,r){"use strict";var a;e.check=a=CLASS({init:function(n,e,a,i){var u,o,A=i.data,E=i.isExceptUndefined,c=!1,l={};EACH(r,function(n,e){EACH(n,function(n,r){var a=A[e];if(E===!0&&void 0===a)return!1;if("notEmpty"!==r&&t.notEmpty(a)!==!0)return("integer"===r||"real"===r||"bool"===r||"date"===r)&&(A[e]=TO_DELETE),!0;if("one"===r){if(t.one({array:n,value:a})===!1)return c=!0,l[e]={type:r,array:n,value:a},!1}else if("element"===r){if(t.element({validData:n,array:a})===!1)return c=!0,l[e]={type:r,validData:n,array:a},!1}else if("property"===r){if(t.property({validData:n,data:a})===!1)return c=!0,l[e]={type:r,validData:n,data:a},!1}else if("detail"===r){if(t.detail({validDataSet:n,data:a})===!1)return c=!0,l[e]={type:r,validDataSet:n,data:a},!1}else if("size"===r){if(t[r](COMBINE_DATA(CHECK_IS_DATA(n)===!0?{origin:n,extend:{value:a}}:{origin:{min:n,max:n},extend:{value:a}}))===!1)return c=!0,l[e]={type:r,validParams:n,value:a},!1}else if("regex"===r){if(t[r]({pattern:n,value:a})===!1)return c=!0,l[e]={type:r,validParam:n,value:a},!1}else if("min"===r){if(t[r]({min:n,value:a})===!1)return c=!0,l[e]={type:r,validParam:n,value:a},!1}else if("max"===r){if(t[r]({max:n,value:a})===!1)return c=!0,l[e]={type:r,validParam:n,value:a},!1}else if("equal"===r){if(t[r]({value:a,validValue:n})===!1)return c=!0,l[e]={type:r,validParam:n,value:a},!1}else if(n===!0&&t[r](a)===!1)return c=!0,l[e]={type:r,value:a},!1;t.notEmpty(a)===!0&&"string"==typeof a&&("integer"===r?A[e]=INTEGER(a):"real"===r?A[e]=REAL(a):"bool"===r?A[e]="true"===a:"date"===r?A[e]=new Date(a):"username"===r&&(A[e]=a.toLowerCase()))})}),a.checkHasError=u=function(){return c},a.getErrors=o=function(){return l}}})}}),global.CHECK_ARE_SAME_ARRAYS=CHECK_ARE_SAME_ARRAYS=METHOD({run:function(t,n){"use strict";var e,r=n.array1,a=n.array2;return void 0===r||void 0===a||r.length!==a.length?!1:e=EACH(r,function(t,n){if(t instanceof Date==!0){if(a[n]instanceof Date!=!0||t.getTime()!==a[n].getTime())return!1}else if(CHECK_IS_DATA(t)===!0){if(CHECK_ARE_SAME_DATA_SET({data1:t,data2:a[n]})!==!0)return!1}else if(CHECK_IS_ARRAY(t)===!0){if(CHECK_ARE_SAME_ARRAYS({array1:t,array2:a[n]})!==!0)return!1}else if(t!==a[n])return!1})}}),global.CHECK_ARE_SAME_DATA_SET=CHECK_ARE_SAME_DATA_SET=METHOD({run:function(t,n){"use strict";var e,r=n.data1,a=n.data2;return void 0===r||void 0===a?!1:(e=function(t,n){var e;return e=EACH(t,function(t,e){if(t instanceof Date==!0){if(n[e]instanceof Date!=!0||t.getTime()!==n[e].getTime())return!1}else if(CHECK_IS_DATA(t)===!0){if(CHECK_ARE_SAME_DATA_SET({data1:t,data2:n[e]})!==!0)return!1}else if(CHECK_IS_ARRAY(t)===!0){if(CHECK_ARE_SAME_ARRAYS({array1:t,array2:n[e]})!==!0)return!1}else if(t!==n[e])return!1})},e(r,a)===!0&&e(a,r)===!0)}}),global.CHECK_IS_ARGUMENTS=CHECK_IS_ARGUMENTS=METHOD({run:function(t,n){"use strict";return void 0!==n&&n!==TO_DELETE&&"object"==typeof n&&("[object Arguments]"===Object.prototype.toString.call(n)||void 0!==n.callee&&"function"==typeof n.callee)?!0:!1}}),global.CHECK_IS_ARRAY=CHECK_IS_ARRAY=METHOD({run:function(t,n){"use strict";return void 0!==n&&n!==TO_DELETE&&"object"==typeof n&&"[object Array]"===Object.prototype.toString.call(n)?!0:!1}}),global.CHECK_IS_DATA=CHECK_IS_DATA=METHOD({run:function(t,n){"use strict";return void 0!==n&&n!==TO_DELETE&&CHECK_IS_ARGUMENTS(n)!==!0&&CHECK_IS_ARRAY(n)!==!0&&n instanceof Date!=!0&&"object"==typeof n?!0:!1}}),global.CHECK_IS_EMPTY_DATA=CHECK_IS_EMPTY_DATA=METHOD({run:function(t,n){"use strict";return CHECK_ARE_SAME_DATA_SET({data1:n,data2:{}})}}),global.COMBINE_ARRAY=COMBINE_ARRAY=METHOD({run:function(t,n){"use strict";var e=n.origin,r=n.extend,a=COPY_ARRAY(e);return void 0!==r&&EXTEND_ARRAY({origin:a,extend:r}),a}}),global.COMBINE_DATA=COMBINE_DATA=METHOD({run:function(t,n){"use strict";var e=n.origin,r=n.extend,a=COPY_DATA(e);return void 0!==r&&EXTEND_DATA({origin:a,extend:r}),a}}),global.COPY_ARRAY=COPY_ARRAY=METHOD({run:function(t,n){"use strict";var e=[];return EACH(n,function(t){e.push(t instanceof Date==!0?new Date(t.getTime()):CHECK_IS_DATA(t)===!0?COPY_DATA(t):CHECK_IS_ARRAY(t)===!0?COPY_ARRAY(t):t)}),e}}),global.COPY_DATA=COPY_DATA=METHOD({run:function(t,n){"use strict";var e={};return EACH(n,function(t,n){e[n]=t instanceof Date==!0?new Date(t.getTime()):CHECK_IS_DATA(t)===!0?COPY_DATA(t):CHECK_IS_ARRAY(t)===!0?COPY_ARRAY(t):t}),e}}),global.EXTEND_ARRAY=EXTEND_ARRAY=METHOD({run:function(t,n){"use strict";var e=n.origin,r=n.extend;EACH(r,function(t){e.push(t instanceof Date==!0?new Date(t.getTime()):CHECK_IS_DATA(t)===!0?COPY_DATA(t):CHECK_IS_ARRAY(t)===!0?COPY_ARRAY(t):t)})}}),global.EXTEND_DATA=EXTEND_DATA=METHOD({run:function(t,n){"use strict";var e=n.origin,r=n.extend;EACH(r,function(t,n){t instanceof Date==!0?e[n]=new Date(t.getTime()):CHECK_IS_DATA(t)===!0?(void 0===e[n]&&(e[n]={}),EXTEND_DATA({origin:e[n],extend:t})):CHECK_IS_ARRAY(t)===!0?(void 0===e[n]&&(e[n]=[]),EXTEND_ARRAY({origin:e[n],extend:t})):e[n]=t})}});