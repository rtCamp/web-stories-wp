(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1936:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"toSvg",(function(){return toSvg})),__webpack_require__.d(__webpack_exports__,"toSvgDataURL",(function(){return toSvgDataURL})),__webpack_require__.d(__webpack_exports__,"toCanvas",(function(){return toCanvas})),__webpack_require__.d(__webpack_exports__,"toPixelData",(function(){return toPixelData})),__webpack_require__.d(__webpack_exports__,"toPng",(function(){return toPng})),__webpack_require__.d(__webpack_exports__,"toJpeg",(function(){return toJpeg})),__webpack_require__.d(__webpack_exports__,"toBlob",(function(){return es_toBlob})),__webpack_require__.d(__webpack_exports__,"getWebFontEmbedCss",(function(){return getWebFontEmbedCss}));var __awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};const WOFF="application/font-woff",mimes={woff:WOFF,woff2:WOFF,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"},uuid=function uuid(){let counter=0;return()=>(counter+=1,`u${`0000${(Math.random()*Math.pow(36,4)<<0).toString(36)}`.slice(-4)}${counter}`)}();function getMimeType(url){const ext=function getExtension(url){const match=/\.([^./]*?)$/g.exec(url);return match?match[1]:""}(url).toLowerCase();return mimes[ext]||""}function isDataUrl(url){return-1!==url.search(/^(data:)/)}function toDataURL(content,mimeType){return`data:${mimeType};base64,${content}`}function getDataURLContent(dataURL){return dataURL.split(/,/)[1]}function canvasToBlob(canvas){return canvas.toBlob?new Promise((resolve=>canvas.toBlob(resolve))):function toBlob(canvas){return new Promise((resolve=>{const binaryString=window.atob(canvas.toDataURL().split(",")[1]),len=binaryString.length,binaryArray=new Uint8Array(len);for(let i=0;i<len;i+=1)binaryArray[i]=binaryString.charCodeAt(i);resolve(new Blob([binaryArray],{type:"image/png"}))}))}(canvas)}function toArray(arrayLike){const result=[];for(let i=0,l=arrayLike.length;i<l;i+=1)result.push(arrayLike[i]);return result}function px(node,styleProperty){const val=window.getComputedStyle(node).getPropertyValue(styleProperty);return parseFloat(val.replace("px",""))}function getPixelRatio(){let ratio,FINAL_PROCESS;try{FINAL_PROCESS=process}catch(e){}const val=FINAL_PROCESS&&FINAL_PROCESS.env?FINAL_PROCESS.env.devicePixelRatio:null;return val&&(ratio=parseInt(val,10),isNaN(ratio)&&(ratio=1)),ratio||window.devicePixelRatio||1}function createImage(url){return new Promise(((resolve,reject)=>{const image=new Image;image.onload=()=>resolve(image),image.onerror=reject,image.crossOrigin="anonymous",image.src=url}))}const cache={};function getBlobFromURL(url,options){let href=url.replace(/\?.*/,"");if(function isFont(filename){return/ttf|otf|eot|woff2?/i.test(filename)}(href)&&(href=href.replace(/.*\//,"")),cache[href])return cache[href];options.cacheBust&&(url+=(/\?/.test(url)?"&":"?")+(new Date).getTime());const promise=(window.fetch?window.fetch(url).then((res=>res.blob().then((blob=>({blob:blob,contentType:res.headers.get("Content-Type")||""}))))).then((({blob:blob,contentType:contentType})=>new Promise(((resolve,reject)=>{const reader=new FileReader;reader.onloadend=()=>resolve({contentType:contentType,blob:reader.result}),reader.onerror=reject,reader.readAsDataURL(blob)})))).then((({blob:blob,contentType:contentType})=>({contentType:contentType,blob:getDataURLContent(blob)}))):new Promise(((resolve,reject)=>{const req=new XMLHttpRequest;req.onreadystatechange=()=>{if(4!==req.readyState)return;if(200!==req.status)return void reject(new Error(`Failed to fetch resource: ${url}, status: ${req.status}`));const encoder=new FileReader;encoder.onloadend=()=>{resolve({blob:getDataURLContent(encoder.result),contentType:req.getResponseHeader("Content-Type")||""})},encoder.readAsDataURL(req.response)},req.ontimeout=()=>{reject(new Error(`Timeout of 30000ms occured while fetching resource: ${url}`))},req.responseType="blob",req.timeout=3e4,req.open("GET",url,!0),req.send()}))).catch((reason=>{let placeholder="";if(options.imagePlaceholder){const parts=options.imagePlaceholder.split(/,/);parts&&parts[1]&&(placeholder=parts[1])}let msg=`Failed to fetch resource: ${url}`;return reason&&(msg="string"==typeof reason?reason:reason.message),msg&&console.error(msg),placeholder}));return cache[href]=promise,promise}var clonePseudoElements_Pseudo;(clonePseudoElements_Pseudo||(clonePseudoElements_Pseudo={})).clonePseudoElement=function clonePseudoElement(nativeNode,clonedNode,pseudo){const style=window.getComputedStyle(nativeNode,pseudo),content=style.getPropertyValue("content");if(""===content||"none"===content)return;const className=uuid();try{clonedNode.className=`${clonedNode.className} ${className}`}catch(err){return}const styleElement=document.createElement("style");styleElement.appendChild(function getPseudoElementStyle(className,pseudo,style){const selector=`.${className}:${pseudo}`,cssText=style.cssText?function formatCssText(style){const content=style.getPropertyValue("content");return`${style.cssText} content: '${content.replace(/'|"/g,"")}';`}(style):function formatCssProperties(style){return toArray(style).map((name=>`${name}: ${style.getPropertyValue(name)}${style.getPropertyPriority(name)?" !important":""};`)).join(" ")}(style);return document.createTextNode(`${selector}{${cssText}}`)}(className,pseudo,style)),clonedNode.appendChild(styleElement)};var cloneNode_awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};function decorate(nativeNode,clonedNode){return cloneNode_awaiter(this,void 0,void 0,(function*(){return clonedNode instanceof Element?Promise.resolve().then((()=>function cloneCssStyle(nativeNode,clonedNode){const source=window.getComputedStyle(nativeNode),target=clonedNode.style;if(!target)return;source.cssText?target.cssText=source.cssText:toArray(source).forEach((name=>{target.setProperty(name,source.getPropertyValue(name),source.getPropertyPriority(name))}))}(nativeNode,clonedNode))).then((()=>function clonePseudoElements(nativeNode,clonedNode){[":before",":after"].forEach((pseudo=>clonePseudoElements_Pseudo.clonePseudoElement(nativeNode,clonedNode,pseudo)))}(nativeNode,clonedNode))).then((()=>function cloneInputValue(nativeNode,clonedNode){nativeNode instanceof HTMLTextAreaElement&&(clonedNode.innerHTML=nativeNode.value);nativeNode instanceof HTMLInputElement&&clonedNode.setAttribute("value",nativeNode.value)}(nativeNode,clonedNode))).then((()=>clonedNode)):clonedNode}))}function cloneNode(nativeNode,options,isRoot){return cloneNode_awaiter(this,void 0,void 0,(function*(){return isRoot||!options.filter||options.filter(nativeNode)?Promise.resolve(nativeNode).then((clonedNode=>function cloneSingleNode(node,options){return cloneNode_awaiter(this,void 0,void 0,(function*(){if(node instanceof HTMLCanvasElement){const dataURL=node.toDataURL();return"data:,"===dataURL?Promise.resolve(node.cloneNode(!1)):createImage(dataURL)}return node instanceof HTMLVideoElement&&node.poster?Promise.resolve(node.poster).then((url=>getBlobFromURL(url,options))).then((data=>toDataURL(data.blob,getMimeType(node.poster)||data.contentType))).then((dataURL=>createImage(dataURL))):Promise.resolve(node.cloneNode(!1))}))}(clonedNode,options))).then((clonedNode=>function cloneChildren(nativeNode,clonedNode,options){var _a;return cloneNode_awaiter(this,void 0,void 0,(function*(){const children=toArray((null!==(_a=nativeNode.shadowRoot)&&void 0!==_a?_a:nativeNode).childNodes);return 0===children.length?Promise.resolve(clonedNode):children.reduce(((done,child)=>done.then((()=>cloneNode(child,options))).then((clonedChild=>{clonedChild&&clonedNode.appendChild(clonedChild)}))),Promise.resolve()).then((()=>clonedNode))}))}(nativeNode,clonedNode,options))).then((clonedNode=>decorate(nativeNode,clonedNode))):Promise.resolve(null)}))}const URL_REGEX=/url\((['"]?)([^'"]+?)\1\)/g,URL_WITH_FORMAT_REGEX=/url\([^)]+\)\s*format\((["'])([^"']+)\1\)/g,FONT_SRC_REGEX=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function shouldEmbed(string){return-1!==string.search(URL_REGEX)}function embedResources(cssString,baseUrl,options){if(!shouldEmbed(cssString))return Promise.resolve(cssString);const filteredCssString=function filterPreferredFontFormat(str,{preferredFontFormat:preferredFontFormat}){return preferredFontFormat?str.replace(FONT_SRC_REGEX,(match=>{for(;;){const[src,,format]=URL_WITH_FORMAT_REGEX.exec(match)||[];if(!format)return"";if(format===preferredFontFormat)return`src: ${src};`}})):str}(cssString,options);return Promise.resolve(filteredCssString).then(parseURLs).then((urls=>urls.reduce(((done,url)=>done.then((ret=>function embedResources_embed(cssString,resourceURL,baseURL,options,get){const resolvedURL=baseURL?function resolveUrl(url,baseUrl){if(url.match(/^[a-z]+:\/\//i))return url;if(url.match(/^\/\//))return window.location.protocol+url;if(url.match(/^[a-z]+:/i))return url;const doc=document.implementation.createHTMLDocument(),base=doc.createElement("base"),a=doc.createElement("a");doc.head.appendChild(base),doc.body.appendChild(a),baseUrl&&(base.href=baseUrl);return a.href=url,a.href}(resourceURL,baseURL):resourceURL;return Promise.resolve(resolvedURL).then((url=>get?get(url):getBlobFromURL(url,options))).then((data=>"string"==typeof data?toDataURL(data,getMimeType(resourceURL)):toDataURL(data.blob,getMimeType(resourceURL)||data.contentType))).then((dataURL=>cssString.replace(function urlToRegex(url){return new RegExp(`(url\\(['"]?)(${function embedResources_escape(url){return url.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}(url)})(['"]?\\))`,"g")}(resourceURL),`$1${dataURL}$3`))).then((content=>content),(()=>resolvedURL))}(ret,url,baseUrl,options)))),Promise.resolve(filteredCssString))))}function parseURLs(str){const result=[];return str.replace(URL_REGEX,((raw,quotation,url)=>(result.push(url),raw))),result.filter((url=>!isDataUrl(url)))}var embedImages_awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};function embedImages(clonedNode,options){return embedImages_awaiter(this,void 0,void 0,(function*(){return clonedNode instanceof Element?Promise.resolve(clonedNode).then((node=>function embedBackground(clonedNode,options){var _a;return embedImages_awaiter(this,void 0,void 0,(function*(){const background=null===(_a=clonedNode.style)||void 0===_a?void 0:_a.getPropertyValue("background");return background?Promise.resolve(background).then((cssString=>embedResources(cssString,null,options))).then((cssString=>(clonedNode.style.setProperty("background",cssString,clonedNode.style.getPropertyPriority("background")),clonedNode))):Promise.resolve(clonedNode)}))}(node,options))).then((node=>function embedImageNode(clonedNode,options){if(!(clonedNode instanceof HTMLImageElement)||isDataUrl(clonedNode.src))return Promise.resolve(clonedNode);const src=clonedNode.src;return Promise.resolve(src).then((url=>getBlobFromURL(url,options))).then((data=>toDataURL(data.blob,getMimeType(src)||data.contentType))).then((dataURL=>new Promise(((resolve,reject)=>{clonedNode.onload=resolve,clonedNode.onerror=reject,clonedNode.srcset="",clonedNode.src=dataURL})))).then((()=>clonedNode),(()=>clonedNode))}(node,options))).then((node=>function embedChildren(clonedNode,options){return embedImages_awaiter(this,void 0,void 0,(function*(){const deferreds=toArray(clonedNode.childNodes).map((child=>embedImages(child,options)));return Promise.all(deferreds).then((()=>clonedNode))}))}(node,options))):Promise.resolve(clonedNode)}))}var embedWebFonts_awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};const cssFetchPromiseStore={};function parseWebFontRules(clonedNode){return embedWebFonts_awaiter(this,void 0,void 0,(function*(){return new Promise(((resolve,reject)=>{clonedNode.ownerDocument||reject(new Error("Provided element is not within a Document")),resolve(toArray(clonedNode.ownerDocument.styleSheets))})).then((styleSheets=>function getCssRules(styleSheets){return embedWebFonts_awaiter(this,void 0,void 0,(function*(){const ret=[],promises=[];return styleSheets.forEach((sheet=>{if("cssRules"in sheet)try{toArray(sheet.cssRules).forEach(((item,index)=>{if(item.type===CSSRule.IMPORT_RULE){let importIndex=index+1;promises.push(fetchCSS(item.href,sheet).then(embedFonts).then((cssText=>{parseCSS(cssText).forEach((rule=>{try{sheet.insertRule(rule,rule.startsWith("@import")?importIndex+=1:sheet.cssRules.length)}catch(error){console.log("Error inserting rule from remote css",{rule:rule,error:error})}}))})).catch((e=>{console.log("Error loading remote css",e.toString())})))}}))}catch(e){const inline=styleSheets.find((a=>null===a.href))||document.styleSheets[0];null!=sheet.href&&promises.push(fetchCSS(sheet.href,inline).then(embedFonts).then((cssText=>{parseCSS(cssText).forEach((rule=>{inline.insertRule(rule,sheet.cssRules.length)}))})).catch((e=>{console.log("Error loading remote stylesheet",e.toString())}))),console.log("Error inlining remote css file",e.toString())}})),Promise.all(promises).then((()=>(styleSheets.forEach((sheet=>{if("cssRules"in sheet)try{toArray(sheet.cssRules).forEach((item=>{ret.push(item)}))}catch(e){console.log(`Error while reading CSS rules from ${sheet.href}`,e.toString())}})),ret)))}))}(styleSheets))).then(getWebFontRules)}))}function getWebFontCss(node,options){return embedWebFonts_awaiter(this,void 0,void 0,(function*(){return parseWebFontRules(node).then((rules=>Promise.all(rules.map((rule=>{const baseUrl=rule.parentStyleSheet?rule.parentStyleSheet.href:null;return embedResources(rule.cssText,baseUrl,options)}))))).then((cssStrings=>cssStrings.join("\n")))}))}function getWebFontRules(cssRules){return cssRules.filter((rule=>rule.type===CSSRule.FONT_FACE_RULE)).filter((rule=>shouldEmbed(rule.style.getPropertyValue("src"))))}function parseCSS(source){if(void 0===source)return[];let cssText=source;const css=[],importRegex=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;cssText=cssText.replace(/(\/\*[\s\S]*?\*\/)/gi,"");const keyframesRegex=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");let arr;for(;arr=keyframesRegex.exec(cssText),null!==arr;)css.push(arr[0]);cssText=cssText.replace(keyframesRegex,"");const unified=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){if(arr=importRegex.exec(cssText),null===arr){if(arr=unified.exec(cssText),null===arr)break;importRegex.lastIndex=unified.lastIndex}else unified.lastIndex=importRegex.lastIndex;css.push(arr[0])}return css}function fetchCSS(url,sheet){if(cssFetchPromiseStore[url])return cssFetchPromiseStore[url];const promise=fetch(url).then((res=>({url:url,cssText:res.text()})),(e=>{console.log("ERROR FETCHING CSS: ",e.toString())}));return cssFetchPromiseStore[url]=promise,promise}function embedFonts(data){return embedWebFonts_awaiter(this,void 0,void 0,(function*(){return data.cssText.then((resolved=>{let cssText=resolved;const regexUrlFind=/url\(["']?([^"')]+)["']?\)/g,fontLoadedPromises=(cssText.match(/url\([^)]+\)/g)||[]).map((location=>{let url=location.replace(regexUrlFind,"$1");if(!url.startsWith("https://")){const source=data.url;url=new URL(url,source).href}return new Promise(((resolve,reject)=>{fetch(url).then((res=>res.blob())).then((blob=>{const reader=new FileReader;reader.addEventListener("load",(res=>{cssText=cssText.replace(location,`url(${reader.result})`),resolve([location,reader.result])})),reader.readAsDataURL(blob)})).catch(reject)}))}));return Promise.all(fontLoadedPromises).then((()=>cssText))}))}))}function createSvgDataURL(clonedNode,width,height){const xmlns="http://www.w3.org/2000/svg",svg=document.createElementNS(xmlns,"svg"),foreignObject=document.createElementNS(xmlns,"foreignObject");return svg.setAttributeNS("","width",`${width}`),svg.setAttributeNS("","height",`${height}`),svg.setAttributeNS("","viewBox",`0 0 ${width} ${height}`),foreignObject.setAttributeNS("","width","100%"),foreignObject.setAttributeNS("","height","100%"),foreignObject.setAttributeNS("","x","0"),foreignObject.setAttributeNS("","y","0"),foreignObject.setAttributeNS("","externalResourcesRequired","true"),svg.appendChild(foreignObject),foreignObject.appendChild(clonedNode),function svgToDataURL(svg){return __awaiter(this,void 0,void 0,(function*(){return Promise.resolve().then((()=>(new XMLSerializer).serializeToString(svg))).then(encodeURIComponent).then((html=>`data:image/svg+xml;charset=utf-8,${html}`))}))}(svg)}var es_awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};function getImageSize(domNode,options={}){return{width:options.width||function getNodeWidth(node){const leftBorder=px(node,"border-left-width"),rightBorder=px(node,"border-right-width");return node.clientWidth+leftBorder+rightBorder}(domNode),height:options.height||function getNodeHeight(node){const topBorder=px(node,"border-top-width"),bottomBorder=px(node,"border-bottom-width");return node.clientHeight+topBorder+bottomBorder}(domNode)}}function toSvg(domNode,options={}){return es_awaiter(this,void 0,void 0,(function*(){const{width:width,height:height}=getImageSize(domNode,options);return cloneNode(domNode,options,!0).then((clonedNode=>function embedWebFonts(clonedNode,options){return embedWebFonts_awaiter(this,void 0,void 0,(function*(){return(null!=options.fontEmbedCss?Promise.resolve(options.fontEmbedCss):getWebFontCss(clonedNode,options)).then((cssString=>{const styleNode=document.createElement("style"),sytleContent=document.createTextNode(cssString);return styleNode.appendChild(sytleContent),clonedNode.firstChild?clonedNode.insertBefore(styleNode,clonedNode.firstChild):clonedNode.appendChild(styleNode),clonedNode}))}))}(clonedNode,options))).then((clonedNode=>embedImages(clonedNode,options))).then((clonedNode=>function applyStyleWithOptions(clonedNode,options){const{style:style}=clonedNode;options.backgroundColor&&(style.backgroundColor=options.backgroundColor),options.width&&(style.width=`${options.width}px`),options.height&&(style.height=`${options.height}px`);const manual=options.style;return null!=manual&&Object.keys(manual).forEach((key=>{style[key]=manual[key]})),clonedNode}(clonedNode,options))).then((clonedNode=>createSvgDataURL(clonedNode,width,height)))}))}const toSvgDataURL=toSvg;function toCanvas(domNode,options={}){return es_awaiter(this,void 0,void 0,(function*(){return toSvg(domNode,options).then(createImage).then(function delay(ms){return args=>new Promise((resolve=>{setTimeout((()=>{resolve(args)}),ms)}))}(100)).then((image=>{const canvas=document.createElement("canvas"),context=canvas.getContext("2d"),ratio=options.pixelRatio||getPixelRatio(),{width:width,height:height}=getImageSize(domNode,options),canvasWidth=options.canvasWidth||width,canvasHeight=options.canvasHeight||height;return canvas.width=canvasWidth*ratio,canvas.height=canvasHeight*ratio,canvas.style.width=`${canvasWidth}`,canvas.style.height=`${canvasHeight}`,options.backgroundColor&&(context.fillStyle=options.backgroundColor,context.fillRect(0,0,canvas.width,canvas.height)),context.drawImage(image,0,0,canvas.width,canvas.height),canvas}))}))}function toPixelData(domNode,options={}){return es_awaiter(this,void 0,void 0,(function*(){const{width:width,height:height}=getImageSize(domNode,options);return toCanvas(domNode,options).then((canvas=>canvas.getContext("2d").getImageData(0,0,width,height).data))}))}function toPng(domNode,options={}){return es_awaiter(this,void 0,void 0,(function*(){return toCanvas(domNode,options).then((canvas=>canvas.toDataURL()))}))}function toJpeg(domNode,options={}){return es_awaiter(this,void 0,void 0,(function*(){return toCanvas(domNode,options).then((canvas=>canvas.toDataURL("image/jpeg",options.quality||1)))}))}function es_toBlob(domNode,options={}){return es_awaiter(this,void 0,void 0,(function*(){return toCanvas(domNode,options).then(canvasToBlob)}))}function getWebFontEmbedCss(domNode,options={}){return es_awaiter(this,void 0,void 0,(function*(){return getWebFontCss(domNode,options)}))}}}]);