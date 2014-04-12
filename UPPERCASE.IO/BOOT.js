global.BOOT=BOOT=function(params){"use strict";var fs=require("fs"),path=require("path"),MULTI_LANG_SUPPORT=params.MULTI_LANG_SUPPORT,MULTI_PLATFORM_SUPPORT=params.MULTI_PLATFORM_SUPPORT,rootPath=__dirname+"/..",browserScript="\nglobal = window;\n",securedBrowserScript="\nglobal = window;\n",platformScripts={},css="",logoText,pageContent="",initMultiPlatformScripts,saveMultiPlatformScripts,stringifyJSONWithFunction,loadAll,generatePageContent,startServer,startREPL;initMultiPlatformScripts=function(){var t,e;for(t in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(t)===!0&&(e=MULTI_PLATFORM_SUPPORT[t],platformScripts[t]=void 0===e.initScript?"":e.initScript)},saveMultiPlatformScripts=function(){var t,e;for(t in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(t)===!0&&(e=MULTI_PLATFORM_SUPPORT[t],fs.writeFileSync(e.path,platformScripts[t]))},stringifyJSONWithFunction=function(data){return JSON.stringify(data,function(t,e){return"function"==typeof e?"__THIS_IS_FUNCTION_START__"+e.toString()+"__THIS_IS_FUNCTION_END__":e},"	").replace(/("__THIS_IS_FUNCTION_START__(.*)__THIS_IS_FUNCTION_END__")/g,function(match,content){return eval("("+eval('"'+content.substring('"__THIS_IS_FUNCTION_START__'.length,content.length-'__THIS_IS_FUNCTION_END__"'.length)+'"')+")").toString()})},loadAll=function(){var t,e,n,r,i,o,s,a,c,O,P,S,_,l,f,p,E,C;t=function(t){var e=t.path,n=t.name;return fs.statSync(rootPath+"/"+e).isDirectory()===!0&&"."!==n[0]&&"node_modules"!==n&&"not_load"!==n&&"deprecated"!==n&&"_"!==n[0]},e=function(){fs.readdirSync(rootPath).forEach(function(e){var n,r,i,o,s,a;if(t({path:e,name:e})===!0)if(r=e.split("."),1===r.length){global[e]=BOX(e),browserScript+="global."+e+" = "+e+" = BOX('"+e+"');\n",securedBrowserScript+="global."+e+" = "+e+" = BOX('"+e+"');\n";for(a in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(a)===!0&&(platformScripts[a]+="global."+e+" = "+e+" = BOX('"+e+"');\n")}else for(o=global,s="",n=0;n<r.length;n+=1)if(i=r[n],s+=(""===s?"":".")+i,n<r.length-1){o=void 0!==o[i]?o[i]:o[i]={},browserScript+="if (global."+s+" === undefined) { global."+s+" = "+s+" = {}; }\n",securedBrowserScript+="if (global."+s+" === undefined) { global."+s+" = "+s+" = {}; }\n";for(a in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(a)===!0&&(platformScripts[a]+="if (global."+s+" === undefined) { global."+s+" = "+s+" = {}; }\n")}else{o[i]=BOX(e),browserScript+="global."+s+" = "+s+" = BOX('"+e+"');\n",securedBrowserScript+="global."+s+" = "+s+" = BOX('"+e+"');\n";for(a in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(a)===!0&&(platformScripts[a]+="global."+s+" = "+s+" = BOX('"+e+"');\n")}})},n=function(t){var e,n,r,i=rootPath+"/"+t,o=path.extname(t);if(i.substring(0,(rootPath+"/UPPERCASE.IO").length)!==rootPath+"/UPPERCASE.IO")for(e in MULTI_LANG_SUPPORT)if(MULTI_LANG_SUPPORT.hasOwnProperty(e)===!0&&o==="."+e)return n="//"+fs.statSync(i).mtime.getTime(),(fs.existsSync(i+".__UPPERCASE_IO_COMPILED")===!1||fs.readFileSync(i+".__UPPERCASE_IO_COMPILED").toString().substring(0,n.length)!==n)&&(r=n+"\n"+MULTI_LANG_SUPPORT[e](fs.readFileSync(i).toString(),i),fs.writeFileSync(i+".__UPPERCASE_IO_COMPILED",r)),void require(i+".__UPPERCASE_IO_COMPILED");".js"===o?require(i):".__UPPERCASE_IO_COMPILED"===o&&fs.existsSync(i.substring(0,i.length-".__UPPERCASE_IO_COMPILED".length))===!1&&fs.unlinkSync(i)},r=function(t){var e,n,r,i=rootPath+"/"+t,o=path.extname(t);if(i.substring(0,(rootPath+"/UPPERCASE.IO").length)!==rootPath+"/UPPERCASE.IO")for(e in MULTI_LANG_SUPPORT)if(MULTI_LANG_SUPPORT.hasOwnProperty(e)===!0&&o==="."+e)return n="//"+fs.statSync(i).mtime.getTime(),fs.existsSync(i+".__UPPERCASE_IO_COMPILED")===!1||fs.readFileSync(i+".__UPPERCASE_IO_COMPILED").toString().substring(0,n.length)!==n?(r=n+"\n"+MULTI_LANG_SUPPORT[e](fs.readFileSync(i).toString(),i),fs.writeFileSync(i+".__UPPERCASE_IO_COMPILED",r)):r=fs.readFileSync(i+".__UPPERCASE_IO_COMPILED").toString(),browserScript+=r+"\n",void(securedBrowserScript+=r+"\n");".js"===o?(r=fs.readFileSync(i).toString(),browserScript+=r+"\n",securedBrowserScript+=r+"\n"):".__UPPERCASE_IO_COMPILED"===o&&fs.existsSync(i.substring(0,i.length-".__UPPERCASE_IO_COMPILED".length))===!1&&fs.unlinkSync(i)},i=function(t){var e,n,r,i=rootPath+"/"+t,o=path.extname(t);if(i.substring(0,(rootPath+"/UPPERCASE.IO").length)!==rootPath+"/UPPERCASE.IO")for(e in MULTI_LANG_SUPPORT)if(MULTI_LANG_SUPPORT.hasOwnProperty(e)===!0&&o==="."+e)return n="//"+fs.statSync(i).mtime.getTime(),fs.existsSync(i+".__UPPERCASE_IO_COMPILED")===!1||fs.readFileSync(i+".__UPPERCASE_IO_COMPILED").toString().substring(0,n.length)!==n?(r=n+"\n"+MULTI_LANG_SUPPORT[e](fs.readFileSync(i).toString(),i),fs.writeFileSync(i+".__UPPERCASE_IO_COMPILED",r)):r=fs.readFileSync(i+".__UPPERCASE_IO_COMPILED").toString(),void(securedBrowserScript+=r+"\n");".js"===o?(r=fs.readFileSync(i).toString(),securedBrowserScript+=r+"\n"):".__UPPERCASE_IO_COMPILED"===o&&fs.existsSync(i.substring(0,i.length-".__UPPERCASE_IO_COMPILED".length))===!1&&fs.unlinkSync(i)},o=function(t,e){var n,r,i,o=rootPath+"/"+e,s=path.extname(e);if(o.substring(0,(rootPath+"/UPPERCASE.IO").length)!==rootPath+"/UPPERCASE.IO")for(n in MULTI_LANG_SUPPORT)if(MULTI_LANG_SUPPORT.hasOwnProperty(n)===!0&&s==="."+n)return r="//"+fs.statSync(o).mtime.getTime(),fs.existsSync(o+".__UPPERCASE_IO_COMPILED")===!1||fs.readFileSync(o+".__UPPERCASE_IO_COMPILED").toString().substring(0,r.length)!==r?(i=r+"\n"+MULTI_LANG_SUPPORT[n](fs.readFileSync(o).toString(),o),fs.writeFileSync(o+".__UPPERCASE_IO_COMPILED",i)):i=fs.readFileSync(o+".__UPPERCASE_IO_COMPILED").toString(),void(platformScripts[t]+=i+"\n");".js"===s?(i=fs.readFileSync(o).toString(),platformScripts[t]+=i+"\n"):".__UPPERCASE_IO_COMPILED"===s&&fs.existsSync(o.substring(0,o.length-".__UPPERCASE_IO_COMPILED".length))===!1&&fs.unlinkSync(o)},s=function(t){var e;n(t),r(t);for(e in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(e)===!0&&o(e,t)},a=function(e,n){var r=function(e){var i,o;if(fs.existsSync(e)===!0)for(i=[],fs.readdirSync(e).forEach(function(r){var o=e+"/"+r;t({path:o,name:r})===!0?i.push(o):fs.statSync(rootPath+"/"+o).isDirectory()!==!0&&n(o)}),o=0;o<i.length;o+=1)r(i[o])};FOR_BOX(function(t){r(t.boxName+"/"+e)})},c=function(t){a(t,n)},O=function(t){a(t,r)},P=function(t){a(t,i)},S=function(){var t;for(t in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(t)===!0&&a(t,function(e){o(t,e)})},_=function(t){a(t,s)},l=function(){var t;if(void 0!==params){if(void 0!==params.CONFIG){EXTEND_DATA({origin:global.CONFIG,extend:params.CONFIG}),browserScript+="EXTEND_DATA({ origin : global.CONFIG, extend : "+stringifyJSONWithFunction(params.CONFIG)+" });\n",securedBrowserScript+="EXTEND_DATA({ origin : global.CONFIG, extend : "+stringifyJSONWithFunction(params.CONFIG)+" });\n";for(t in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(t)===!0&&(platformScripts[t]+="EXTEND_DATA({ origin : global.CONFIG, extend : "+stringifyJSONWithFunction(params.CONFIG)+" });\n")}void 0!==params.SERVER_CONFIG&&(EXTEND_DATA({origin:global.SERVER_CONFIG,extend:params.SERVER_CONFIG}),SERVER_CONFIG.rootPath=rootPath),void 0!==params.BROWSER_CONFIG&&(browserScript+="EXTEND_DATA({ origin : global.BROWSER_CONFIG, extend : "+stringifyJSONWithFunction(params.BROWSER_CONFIG)+" });\n",securedBrowserScript+="EXTEND_DATA({ origin : global.BROWSER_CONFIG, extend : "+stringifyJSONWithFunction(params.BROWSER_CONFIG)+" });\n");for(t in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(t)===!0&&void 0!==params[t+"_CONFIG"]&&(platformScripts[t]+="EXTEND_DATA({ origin : global."+t+"_CONFIG, extend : "+stringifyJSONWithFunction(params[t+"_CONFIG"])+" });\n")}CONFIG.version=String((new Date).getTime()),browserScript+="CONFIG.version = "+CONFIG.version+";\n",securedBrowserScript+="CONFIG.version = "+CONFIG.version+";\n";for(t in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(t)===!0&&(platformScripts[t]+="CONFIG.version = "+CONFIG.version+";\n")},f=function(){var t=UPPERCASE.IO.MODULE("mongolian");UPPERCASE.IO.db=(new t).db(SERVER_CONFIG.dbName),SERVER_CONFIG.isNotRequiringDBAuth!==!0&&UPPERCASE.IO.db.auth(SERVER_CONFIG.dbUsername,SERVER_CONFIG.dbPassword)},p=function(t){var e=rootPath+"/"+t,n=path.extname(t),r=fs.readFileSync(e).toString();".css"===n&&(css+=r)},E=function(){var t,e=UPPERCASE.IO.MODULE("uglify-js"),n=UPPERCASE.IO.MODULE("sqwish");browserScript=e.minify(browserScript,{fromString:!0,mangle:!0}).code,securedBrowserScript=e.minify(securedBrowserScript,{fromString:!0,mangle:!0}).code,css=n.minify(css);for(t in platformScripts)platformScripts.hasOwnProperty(t)===!0&&(platformScripts[t]=e.minify(platformScripts[t],{fromString:!0,mangle:!0}).code)},C=function(){logoText=fs.readFileSync(rootPath+"/UPPERCASE.IO/LOGO"),browserScript="/* Welcome to JavaScript World! :)\n"+logoText+"\n  Contact: "+CONFIG.contactAddress+"\n\n*/"+browserScript,css="/* Welcome to CSS World! :)\n"+logoText+"\n  Contact: "+CONFIG.contactAddress+"\n\n*/"+css},s("UPPERCASE.IO/METHOD.js"),s("UPPERCASE.IO/CLASS.js"),s("UPPERCASE.IO/OBJECT.js"),s("UPPERCASE.IO/BOX.js"),s("UPPERCASE.IO/FOR_BOX.js"),e(),_("COMMON"),c("SERVER"),O("BROWSER"),P("BROWSER_SECURED"),S(),r("UPPERCASE.IO/BROWSER_FIX.js"),l(),SERVER_CONFIG.isNotUsingDB!==!0&&f(),r("UPPERCASE.IO/BROWSER_INIT.js"),p("UPPERCASE.IO/STYLE.css"),CONFIG.isDevMode!==!0&&E(),C()},generatePageContent=function(){pageContent+="<!DOCTYPE html>",pageContent+="<!--\n\n  Welcome! :)\n"+logoText+"\n  Contact: "+CONFIG.contactAddress+"\n\n-->",pageContent+="<html>",pageContent+="<head>",pageContent+='<meta charset="utf-8">',pageContent+='<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'+(CONFIG.isMobileFullScreen===!0?", minimal-ui":"")+'">',pageContent+='<meta name="google" value="notranslate">',void 0!==CONFIG.googleSiteVerificationKey&&(pageContent+='<meta name="google-site-verification" content="'+CONFIG.googleSiteVerificationKey+'" />'),pageContent+='<meta http-equiv="X-UA-Compatible" content="IE=Edge, chrome=1">',void 0!==CONFIG.description&&(pageContent+='<meta name="description" content="'+CONFIG.description+'">'),pageContent+="<title>"+CONFIG.defaultTitle+"</title>",pageContent+='<link rel="stylesheet" type="text/css" href="__CSS?'+CONFIG.version+'" />',pageContent+="</head>",pageContent+="<body>",pageContent+="<noscript>",pageContent+='<p style="padding:15px;">',pageContent+="자바스크립트 기능이 꺼져있습니다. 브라우저의 자바스크립트 기능을 켜 주시기 바랍니다. 감사합니다~! ^-^",pageContent+="<br>",pageContent+="JavaScript is disabled. Please enable JavaScript in your browser. Thank you~! :)",pageContent+="</p>",pageContent+="</noscript>",pageContent+='<script type="text/javascript" src="__SCRIPT?'+CONFIG.version+'"></script>',pageContent+="</body>",pageContent+="</html>"},startServer=function(){var t,e,n,r,i=require("http"),o=require("https"),s=UPPERCASE.IO.MODULE("socket.io"),a=UPPERCASE.IO.MODULE("formidable").IncomingForm,c=UPPERCASE.IO.MODULE("imagemagick");r=function(t,e){var n,r,i,o,s,O,P,S,_,l,f,p,E,C,I,u,d,g,R,T,F,U,h,m,N,A=t.url,v={};s=function(t){var e=path.extname(t);return".png"===e?"image/png":".jpg"===e||".jpeg"===e?"image/jpeg":".gif"===e?"image/gif":".js"===e?"text/javascript":".css"===e?"text/css":".txt"===e?"text/plain":".html"===e?"text/html":".swf"===e?"application/x-shockwave-flash":"application/octet-stream"},O=function(t){return"text/javascript"===t?"utf-8":"text/css"===t?"utf-8":"text/plain"===t?"binary":"text/html"===t?"utf-8":"image/png"===t?"binary":"image/jpeg"===t?"binary":"image/gif"===t?"binary":"application/x-shockwave-flash"===t?"binary":"binary"},P=function(){var t=A.indexOf("?");-1!==t&&(r=A.substring(t+1),A=A.substring(0,t))},S=function(){n=A.substring(1)},_=function(){var t=n.indexOf("/");-1===t?i=CONFIG.defaultBoxName:(i=n.substring(0,t),n=n.substring(t+1))},l=function(){var t=n.indexOf("/");-1===t?o="":(o=n.substring(0,t),n=n.substring(t+1))},f=function(){var e;return void 0===t.headers.authorization?!1:(e=new Buffer(t.headers.authorization.split(" ")[1],"base64").toString().split(":"),console.log("Decoded authorization: "+e),e[0]===SERVER_CONFIG.securedUsername&&e[1]===SERVER_CONFIG.securedPassword)},p=function(e){return void 0===e?void 0!==t.headers["if-none-match"]:t.headers["if-none-match"]===e},E=function(t){e.writeHead(302,{Location:t}),e.end()},C=function(){console.log("Someone is trying to AUTH!: "+t.connection.remoteAddress),e.statusCode=401,e.setHeader("WWW-Authenticate",'Basic realm="AUTH"'),e.end()},I=function(){e.statusCode=304,e.end()},u=function(t){var n=t.key,r=t.content,i=t.contentType,o=t.encoding;e.setHeader("Content-Type",i),void 0!==n&&e.setHeader("ETag",n),e.statusCode=200,e.end(r,o)},d=function(){E("/"+CONFIG.defaultBoxName+"/R/favicon.ico")},g=function(){return void 0===t.headers.authorization?void C():f()===!0?void E(SERVER_CONFIG.authedPageUrl):void E("/UPPERCASE.IO/R/AUTH_ERROR.html")},R=function(){u({content:pageContent,contentType:"text/html",encoding:"utf-8"})},T=function(){p(CONFIG.version)===!0&&CONFIG.isDevMode!==!0?I():r!==CONFIG.version&&CONFIG.isDevMode!==!0?E(A+"?"+CONFIG.version):u(f()===!0?{key:CONFIG.version,content:securedBrowserScript,contentType:"text/javascript",encoding:"utf-8"}:{key:CONFIG.version,content:browserScript,contentType:"text/javascript",encoding:"utf-8"})},F=function(){p(CONFIG.version)===!0&&CONFIG.isDevMode!==!0?I():r!==CONFIG.version&&CONFIG.isDevMode!==!0?E(A+"?"+CONFIG.version):u({key:CONFIG.version,content:css,contentType:"text/css",encoding:"utf-8"})},U=function(){var n=new a,r=[],o={};n.uploadDir="__RF/"+i+"/__TEMP/",fs.existsSync(rootPath+"/"+n.uploadDir)===!1&&console.log("Not exists folder: "+rootPath+"/"+n.uploadDir),void 0!==global[i]&&fs.existsSync(rootPath+"/"+n.uploadDir)===!0?(n.on("field",function(t,e){o[t]=e}).on("file",function(t,e){r.push({tempPath:e.path,size:e.size,name:e.name,type:e.type,lastModifiedDate:e.lastModifiedDate})}).on("end",function(){var t=global[i].DB("__UPLOAD_FILE"),n=0;EACH(r,function(s){var a=s.tempPath;return s.size>1024*CONFIG.maxUploadFileMB*1024?(e.writeHead(200,{"Content-Type":"text/html"}),e.end("<script>errorCode='SIZE'</script>","utf-8"),!1):(EACH(o,function(t,e){""!==t.trim()&&(s[e]=t)}),REMOVE_AT({data:s,key:"tempPath"}),void c.readMetadata(a,function(o,O){var P=function(){t.createData(s,function(t,o){var s=UPPERCASE.IO.MODULE("mv"),c=rootPath+"/__RF/"+i+"/"+o.id;void 0===t&&s(a,c,function(){n+=1,n===r.length&&(EACH(r,function(t,e){r[e]=PACK_DATA(t)}),e.writeHead(200,{"Content-Type":"text/html"}),e.end("<script>fileDataSet="+JSON.stringify(r)+"</script>","utf-8")),console.log("File '"+c+"' ("+o.name+", "+o.size+" byte) uploaded.")})})};void 0!==O.exif?(s.exif=O.exif,c.convert([a,"-auto-orient",a],function(){P()})):P()}))})}).on("error",function(){e.writeHead(200,{"Content-Type":"text/html"}),e.end("<script>errorCode='ERROR'</script>","utf-8")}),n.parse(t)):(e.writeHead(200,{"Content-Type":"text/html"}),e.end("<script>errorCode='ERROR'</script>","utf-8"))},h=function(){var t,e,o;p(CONFIG.version)===!0?I():r!==CONFIG.version?E(A+"?"+CONFIG.version):(t=rootPath+"/"+i+"/R/"+n,void 0!==v[t]?u(v[t]):(e=s(n),o=O(e),fs.exists(t,function(n){n===!0?fs.readFile(t,o,function(n,r){null!==n?N():u(v[t]={key:CONFIG.version,content:r,contentType:e,encoding:o})}):N()})))},m=function(){var t;p()===!0?I():(t=rootPath+"/__RF/"+i+"/"+n,fs.exists(t,function(e){e===!0?fs.readFile(t,"binary",function(e,n){null!==e?N():fs.stat(t,function(t,e){null!==t?N():u({key:e.size+"-"+Date.parse(e.mtime),content:n,contentType:"application/octet-stream",encoding:"binary"})})}):N()}))},N=function(){E(SERVER_CONFIG.errorPageUrl)},P(),S(),"favicon.ico"===n?d():"__AUTH"===n?g():""===n?R():"__SCRIPT"===n?T():"__CSS"===n?F():(_(),l(),"R"===o?h(i):"RF"===o?m(i):"__UPLOAD"===n&&"POST"===t.method.toUpperCase()?U():N())},t=i.createServer(r).listen(CONFIG.port),void 0!==SERVER_CONFIG.securedPort&&(e=o.createServer({key:fs.readFileSync(rootPath+"/"+SERVER_CONFIG.securedKeyFileName),cert:fs.readFileSync(rootPath+"/"+SERVER_CONFIG.securedCrtFileName)},r).listen(SERVER_CONFIG.securedPort)),n=s.listen(t),CONFIG.isDevMode===!0?n.set("log level",2):n.set("log level",1),n.set("transports",["websocket","flashsocket","xhr-polling","jsonp-polling"]),CONNS.type.socketPack=n.sockets,OBJECT.init(),FOR_BOX(function(t){void 0!==t.MAIN&&t.MAIN()}),console.log("["+CONFIG.defaultTitle+" BOOTED] http://localhost:"+CONFIG.port+(void 0!==SERVER_CONFIG.securedPort?" and secured server started. https://localhost:"+SERVER_CONFIG.securedPort:""))},startREPL=function(){DELAY(1,function(){var t=require("repl");t.start({prompt:"UPPERCASE.IO> ",input:process.stdin,output:process.stdout})})},initMultiPlatformScripts(),loadAll(),saveMultiPlatformScripts(),generatePageContent(),startServer(),SERVER_CONFIG.isNotUsingREPL!==!0&&startREPL()};