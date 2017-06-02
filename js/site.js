!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function o(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return m.iterable&&(e[Symbol.iterator]=function(){return e}),e}function n(t){this.map={},t instanceof n?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function s(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function a(t){var e=new FileReader,r=s(e);return e.readAsArrayBuffer(t),r}function h(t){var e=new FileReader,r=s(e);return e.readAsText(t),r}function u(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(m.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(m.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(m.arrayBuffer&&m.blob&&v(t))this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!B(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return h(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(u(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(c)}),this.json=function(){return this.text().then(JSON.parse)},this}function y(t){var e=t.toUpperCase();return _.indexOf(e)>-1?e:t}function l(t,e){var r=(e=e||{}).body;if(t instanceof l){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new n(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new n(e.headers)),this.method=y(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function c(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function p(t){var e=new n;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}}),e}function b(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new n(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var m={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(m.arrayBuffer)var w=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],v=function(t){return t&&DataView.prototype.isPrototypeOf(t)},B=ArrayBuffer.isView||function(t){return t&&w.indexOf(Object.prototype.toString.call(t))>-1};n.prototype.append=function(t,o){t=e(t),o=r(o);var n=this.map[t];this.map[t]=n?n+","+o:o},n.prototype.delete=function(t){delete this.map[e(t)]},n.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},n.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},n.prototype.set=function(t,o){this.map[e(t)]=r(o)},n.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},n.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),o(t)},n.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),o(t)},n.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),o(t)},m.iterable&&(n.prototype[Symbol.iterator]=n.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];l.prototype.clone=function(){return new l(this,{body:this._bodyInit})},d.call(l.prototype),d.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new n(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var A=[301,302,303,307,308];b.redirect=function(t,e){if(-1===A.indexOf(e))throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})},t.Headers=n,t.Request=l,t.Response=b,t.fetch=function(t,e){return new Promise(function(r,o){var n=new l(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:p(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;r(new b(e,t))},i.onerror=function(){o(new TypeError("Network request failed"))},i.ontimeout=function(){o(new TypeError("Network request failed"))},i.open(n.method,n.url,!0),"include"===n.credentials?i.withCredentials=!0:"omit"===n.credentials&&(i.withCredentials=!1),"responseType"in i&&m.blob&&(i.responseType="blob"),n.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send(void 0===n._bodyInit?null:n._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this);
!function(){var e=function(t){var r=new e.Builder;return r.pipeline.add(e.trimmer,e.stopWordFilter,e.stemmer),r.searchPipeline.add(e.stemmer),t.call(r,r),r.build()};e.version="2.0.4",e.utils={},e.utils.warn=function(e){return function(t){e.console&&console.warn&&console.warn(t)}}(this),e.utils.asString=function(e){return void 0===e||null===e?"":e.toString()},e.idf=function(e,t){var r=0;for(var i in e)"_index"!=i&&(r+=Object.keys(e[i]).length);var n=(t-r+.5)/(r+.5);return Math.log(1+Math.abs(n))},e.Token=function(e,t){this.str=e||"",this.metadata=t||{}},e.Token.prototype.toString=function(){return this.str},e.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},e.Token.prototype.clone=function(t){return t=t||function(e){return e},new e.Token(t(this.str,this.metadata),this.metadata)},e.tokenizer=function(t){if(null==t||void 0==t)return[];if(Array.isArray(t))return t.map(function(t){return new e.Token(e.utils.asString(t).toLowerCase())});for(var r=t.toString().trim().toLowerCase(),i=r.length,n=[],s=0,o=0;s<=i;s++){var a=s-o;(r.charAt(s).match(e.tokenizer.separator)||s==i)&&(a>0&&n.push(new e.Token(r.slice(o,s),{position:[o,a],index:n.length})),o=s+1)}return n},e.tokenizer.separator=/[\s\-]+/,e.Pipeline=function(){this._stack=[]},e.Pipeline.registeredFunctions=Object.create(null),e.Pipeline.registerFunction=function(t,r){r in this.registeredFunctions&&e.utils.warn("Overwriting existing registered function: "+r),t.label=r,e.Pipeline.registeredFunctions[t.label]=t},e.Pipeline.warnIfFunctionNotRegistered=function(t){t.label&&t.label in this.registeredFunctions||e.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",t)},e.Pipeline.load=function(t){var r=new e.Pipeline;return t.forEach(function(t){var i=e.Pipeline.registeredFunctions[t];if(!i)throw new Error("Cannot load unregistered function: "+t);r.add(i)}),r},e.Pipeline.prototype.add=function(){Array.prototype.slice.call(arguments).forEach(function(t){e.Pipeline.warnIfFunctionNotRegistered(t),this._stack.push(t)},this)},e.Pipeline.prototype.after=function(t,r){e.Pipeline.warnIfFunctionNotRegistered(r);var i=this._stack.indexOf(t);if(-1==i)throw new Error("Cannot find existingFn");i+=1,this._stack.splice(i,0,r)},e.Pipeline.prototype.before=function(t,r){e.Pipeline.warnIfFunctionNotRegistered(r);var i=this._stack.indexOf(t);if(-1==i)throw new Error("Cannot find existingFn");this._stack.splice(i,0,r)},e.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},e.Pipeline.prototype.run=function(e){for(var t=this._stack.length,r=0;r<t;r++){var i=this._stack[r];e=e.reduce(function(t,r,n){var s=i(r,n,e);return void 0===s||""===s?t:t.concat(s)},[])}return e},e.Pipeline.prototype.runString=function(t){var r=new e.Token(t);return this.run([r]).map(function(e){return e.toString()})},e.Pipeline.prototype.reset=function(){this._stack=[]},e.Pipeline.prototype.toJSON=function(){return this._stack.map(function(t){return e.Pipeline.warnIfFunctionNotRegistered(t),t.label})},e.Vector=function(e){this._magnitude=0,this.elements=e||[]},e.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0;for(var t=0,r=this.elements.length/2,i=r-t,n=Math.floor(i/2),s=this.elements[2*n];i>1&&(s<e&&(t=n),s>e&&(r=n),s!=e);)i=r-t,n=t+Math.floor(i/2),s=this.elements[2*n];return s==e?2*n:s>e?2*n:s<e?2*(n+1):void 0},e.Vector.prototype.insert=function(e,t){this.upsert(e,t,function(){throw"duplicate index"})},e.Vector.prototype.upsert=function(e,t,r){this._magnitude=0;var i=this.positionForIndex(e);this.elements[i]==e?this.elements[i+1]=r(this.elements[i+1],t):this.elements.splice(i,0,e,t)},e.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,t=this.elements.length,r=1;r<t;r+=2){var i=this.elements[r];e+=i*i}return this._magnitude=Math.sqrt(e)},e.Vector.prototype.dot=function(e){for(var t=0,r=this.elements,i=e.elements,n=r.length,s=i.length,o=0,a=0,u=0,h=0;u<n&&h<s;)(o=r[u])<(a=i[h])?u+=2:o>a?h+=2:o==a&&(t+=r[u+1]*i[h+1],u+=2,h+=2);return t},e.Vector.prototype.similarity=function(e){return this.dot(e)/(this.magnitude()*e.magnitude())},e.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),t=1,r=0;t<this.elements.length;t+=2,r++)e[r]=this.elements[t];return e},e.Vector.prototype.toJSON=function(){return this.elements},e.stemmer=function(){var e={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},t={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},r="[aeiouy]",i="[^aeiou][^aeiouy]*",n=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),s=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),o=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),a=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),u=/^(.+?)(ss|i)es$/,h=/^(.+?)([^s])s$/,c=/^(.+?)eed$/,d=/^(.+?)(ed|ing)$/,l=/.$/,p=/(at|bl|iz)$/,f=new RegExp("([^aeiouylsz])\\1$"),m=new RegExp("^"+i+r+"[^aeiouwxy]$"),y=/^(.+?[^aeiou])y$/,g=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,x=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,v=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,k=/^(.+?)(s|t)(ion)$/,w=/^(.+?)e$/,Q=/ll$/,L=new RegExp("^"+i+r+"[^aeiouwxy]$"),T=function(r){var i,T,S,b,P,E,I;if(r.length<3)return r;if("y"==(S=r.substr(0,1))&&(r=S.toUpperCase()+r.substr(1)),b=u,P=h,b.test(r)?r=r.replace(b,"$1$2"):P.test(r)&&(r=r.replace(P,"$1$2")),b=c,P=d,b.test(r)){var O=b.exec(r);(b=n).test(O[1])&&(b=l,r=r.replace(b,""))}else P.test(r)&&(i=(O=P.exec(r))[1],(P=a).test(i)&&(r=i,E=f,I=m,(P=p).test(r)?r+="e":E.test(r)?(b=l,r=r.replace(b,"")):I.test(r)&&(r+="e")));return(b=y).test(r)&&(r=(i=(O=b.exec(r))[1])+"i"),(b=g).test(r)&&(i=(O=b.exec(r))[1],T=O[2],(b=n).test(i)&&(r=i+e[T])),(b=x).test(r)&&(i=(O=b.exec(r))[1],T=O[2],(b=n).test(i)&&(r=i+t[T])),b=v,P=k,b.test(r)?(i=(O=b.exec(r))[1],(b=s).test(i)&&(r=i)):P.test(r)&&(i=(O=P.exec(r))[1]+O[2],(P=s).test(i)&&(r=i)),(b=w).test(r)&&(i=(O=b.exec(r))[1],P=o,E=L,((b=s).test(i)||P.test(i)&&!E.test(i))&&(r=i)),b=Q,P=s,b.test(r)&&P.test(r)&&(b=l,r=r.replace(b,"")),"y"==S&&(r=S.toLowerCase()+r.substr(1)),r};return function(e){return e.update(T)}}(),e.Pipeline.registerFunction(e.stemmer,"stemmer"),e.generateStopWordFilter=function(e){var t=e.reduce(function(e,t){return e[t]=t,e},{});return function(e){if(e&&t[e.toString()]!==e.toString())return e}},e.stopWordFilter=e.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),e.Pipeline.registerFunction(e.stopWordFilter,"stopWordFilter"),e.trimmer=function(e){return e.update(function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")})},e.Pipeline.registerFunction(e.trimmer,"trimmer"),e.TokenSet=function(){this.final=!1,this.edges={},this.id=e.TokenSet._nextId,e.TokenSet._nextId+=1},e.TokenSet._nextId=1,e.TokenSet.fromArray=function(t){for(var r=new e.TokenSet.Builder,i=0,n=t.length;i<n;i++)r.insert(t[i]);return r.finish(),r.root},e.TokenSet.fromClause=function(t){return"editDistance"in t?e.TokenSet.fromFuzzyString(t.term,t.editDistance):e.TokenSet.fromString(t.term)},e.TokenSet.fromFuzzyString=function(t,r){for(var i=new e.TokenSet,n=[{node:i,editsRemaining:r,str:t}];n.length;){var s=n.pop();if(s.str.length>0){var o;(u=s.str.charAt(0))in s.node.edges?o=s.node.edges[u]:(o=new e.TokenSet,s.node.edges[u]=o),1==s.str.length?o.final=!0:n.push({node:o,editsRemaining:s.editsRemaining,str:s.str.slice(1)})}if(s.editsRemaining>0&&s.str.length>1){var a,u=s.str.charAt(1);u in s.node.edges?a=s.node.edges[u]:(a=new e.TokenSet,s.node.edges[u]=a),s.str.length<=2?a.final=!0:n.push({node:a,editsRemaining:s.editsRemaining-1,str:s.str.slice(2)})}if(s.editsRemaining>0&&1==s.str.length&&(s.node.final=!0),s.editsRemaining>0&&s.str.length>=1){if("*"in s.node.edges)h=s.node.edges["*"];else{var h=new e.TokenSet;s.node.edges["*"]=h}1==s.str.length?h.final=!0:n.push({node:h,editsRemaining:s.editsRemaining-1,str:s.str.slice(1)})}if(s.editsRemaining>0){if("*"in s.node.edges)c=s.node.edges["*"];else{var c=new e.TokenSet;s.node.edges["*"]=c}0==s.str.length?c.final=!0:n.push({node:c,editsRemaining:s.editsRemaining-1,str:s.str})}if(s.editsRemaining>0&&s.str.length>1){var d,l=s.str.charAt(0),p=s.str.charAt(1);p in s.node.edges?d=s.node.edges[p]:(d=new e.TokenSet,s.node.edges[p]=d),1==s.str.length?d.final=!0:n.push({node:d,editsRemaining:s.editsRemaining-1,str:l+s.str.slice(2)})}}return i},e.TokenSet.fromString=function(t){for(var r=new e.TokenSet,i=r,n=!1,s=0,o=t.length;s<o;s++){var a=t[s],u=s==o-1;if("*"==a)n=!0,r.edges[a]=r,r.final=u;else{var h=new e.TokenSet;h.final=u,r.edges[a]=h,r=h,n&&(r.edges["*"]=i)}}return i},e.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var r=t.pop(),i=Object.keys(r.node.edges),n=i.length;r.node.final&&e.push(r.prefix);for(var s=0;s<n;s++){var o=i[s];t.push({prefix:r.prefix.concat(o),node:r.node.edges[o]})}}return e},e.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),r=t.length,i=0;i<r;i++){var n=t[i];e=e+n+this.edges[n].id}return e},e.TokenSet.prototype.intersect=function(t){for(var r=new e.TokenSet,i=void 0,n=[{qNode:t,output:r,node:this}];n.length;){i=n.pop();for(var s=Object.keys(i.qNode.edges),o=s.length,a=Object.keys(i.node.edges),u=a.length,h=0;h<o;h++)for(var c=s[h],d=0;d<u;d++){var l=a[d];if(l==c||"*"==c){var p=i.node.edges[l],f=i.qNode.edges[c],m=p.final&&f.final,y=void 0;l in i.output.edges?(y=i.output.edges[l]).final=y.final||m:((y=new e.TokenSet).final=m,i.output.edges[l]=y),n.push({qNode:f,output:y,node:p})}}}return r},e.TokenSet.Builder=function(){this.previousWord="",this.root=new e.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},e.TokenSet.Builder.prototype.insert=function(t){var r,i=0;if(t<this.previousWord)throw new Error("Out of order word insertion");for(n=0;n<t.length&&n<this.previousWord.length&&t[n]==this.previousWord[n];n++)i++;this.minimize(i),r=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child;for(var n=i;n<t.length;n++){var s=new e.TokenSet,o=t[n];r.edges[o]=s,this.uncheckedNodes.push({parent:r,char:o,child:s}),r=s}r.final=!0,this.previousWord=t},e.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},e.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var r=this.uncheckedNodes[t],i=r.child.toString();i in this.minimizedNodes?r.parent.edges[r.char]=this.minimizedNodes[i]:(r.child._str=i,this.minimizedNodes[i]=r.child),this.uncheckedNodes.pop()}},e.Index=function(e){this.invertedIndex=e.invertedIndex,this.documentVectors=e.documentVectors,this.tokenSet=e.tokenSet,this.documentCount=e.documentCount,this.averageDocumentLength=e.averageDocumentLength,this.b=e.b,this.k1=e.k1,this.fields=e.fields,this.pipeline=e.pipeline},e.Index.prototype.search=function(t){return this.query(function(r){new e.QueryParser(t,r).parse()})},e.Index.prototype.query=function(t){var r=new e.Query(this.fields),i=Object.create(null),n=new e.Vector;t.call(r,r);for(S=0;S<r.clauses.length;S++){var s=r.clauses[S],o=null;o=s.usePipeline?this.pipeline.runString(s.term):[s.term];for(var a=0;a<o.length;a++){var u=o[a];s.term=u;for(var h=e.TokenSet.fromClause(s),c=this.tokenSet.intersect(h).toArray(),d=0;d<c.length;d++){var l=c[d],p=this.invertedIndex[l],f=p._index,m=e.idf(p,this.documentCount)*(1*(this.k1+1))/(this.k1*(1-this.b+this.b*(r.clauses.length/this.averageDocumentLength))+1);n.upsert(f,m*s.boost,function(e,t){return e+t});for(var y=0;y<s.fields.length;y++)for(var g=s.fields[y],x=p[g],v=Object.keys(x),k=0;k<v.length;k++){var w,Q,L=v[k];w=x[L],Q=new e.MatchData(l,g,w),L in i?i[L].combine(Q):i[L]=Q}}}}for(var v=Object.keys(i),T=[],S=0;S<v.length;S++){var b=v[S],P=this.documentVectors[b],m=n.similarity(P);T.push({ref:b,score:m,matchData:i[b]})}return T.sort(function(e,t){return t.score-e.score})},e.Index.prototype.toJSON=function(){var t=Object.keys(this.invertedIndex).sort().map(function(e){return[e,this.invertedIndex[e]]},this),r=Object.keys(this.documentVectors).map(function(e){return[e,this.documentVectors[e].toJSON()]},this);return{version:e.version,averageDocumentLength:this.averageDocumentLength,b:this.b,k1:this.k1,fields:this.fields,documentVectors:r,invertedIndex:t,pipeline:this.pipeline.toJSON()}},e.Index.load=function(t){var r={},i={},n=t.documentVectors,s=0,o={},a=t.invertedIndex,u=new e.TokenSet.Builder,h=e.Pipeline.load(t.pipeline);t.version!=e.version&&e.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+e.version+"' does not match serialized index '"+t.version+"'");for(l=0;l<n.length;l++,s++){var c=(p=n[l])[0],d=p[1];i[c]=new e.Vector(d)}for(var l=0;l<a.length;l++){var p=a[l],f=p[0],m=p[1];u.insert(f),o[f]=m}return u.finish(),r.b=t.b,r.k1=t.k1,r.fields=t.fields,r.averageDocumentLength=t.averageDocumentLength,r.documentCount=s,r.documentVectors=i,r.invertedIndex=o,r.tokenSet=u.root,r.pipeline=h,new e.Index(r)},e.Builder=function(){this._ref="id",this._fields=[],this.invertedIndex=Object.create(null),this.documentTermFrequencies={},this.documentLengths={},this.tokenizer=e.tokenizer,this.pipeline=new e.Pipeline,this.searchPipeline=new e.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},e.Builder.prototype.ref=function(e){this._ref=e},e.Builder.prototype.field=function(e){this._fields.push(e)},e.Builder.prototype.b=function(e){this._b=e<0?0:e>1?1:e},e.Builder.prototype.k1=function(e){this._k1=e},e.Builder.prototype.add=function(e){var t=e[this._ref],r={};this.documentCount+=1,this.documentTermFrequencies[t]=r,this.documentLengths[t]=0;for(var i=0;i<this._fields.length;i++){var n=this._fields[i],s=e[n],o=this.tokenizer(s),a=this.pipeline.run(o);this.documentLengths[t]+=a.length;for(var u=0;u<a.length;u++){var h=a[u];if(void 0==r[h]&&(r[h]=0),r[h]+=1,void 0==this.invertedIndex[h]){var c=Object.create(null);c._index=this.termIndex,this.termIndex+=1;for(var d=0;d<this._fields.length;d++)c[this._fields[d]]=Object.create(null);this.invertedIndex[h]=c}void 0==this.invertedIndex[h][n][t]&&(this.invertedIndex[h][n][t]=Object.create(null));for(var l=0;l<this.metadataWhitelist.length;l++){var p=this.metadataWhitelist[l],f=h.metadata[p];void 0==this.invertedIndex[h][n][t][p]&&(this.invertedIndex[h][n][t][p]=[]),this.invertedIndex[h][n][t][p].push(f)}}}},e.Builder.prototype.calculateAverageDocumentLengths=function(){for(var e=Object.keys(this.documentLengths),t=e.length,r=0,i=0;i<t;i++){var n=e[i];r+=this.documentLengths[n]}this.averageDocumentLength=r/t},e.Builder.prototype.createDocumentVectors=function(){for(var t={},r=Object.keys(this.documentTermFrequencies),i=r.length,n=0;n<i;n++){for(var s=r[n],o=this.documentLengths[s],a=new e.Vector,u=this.documentTermFrequencies[s],h=Object.keys(u),c=h.length,d=0;d<c;d++){var l=h[d],p=u[l],f=this.invertedIndex[l]._index,m=e.idf(this.invertedIndex[l],this.documentCount)*((this._k1+1)*p)/(this._k1*(1-this._b+this._b*(o/this.averageDocumentLength))+p),y=Math.round(1e3*m)/1e3;a.insert(f,y)}t[s]=a}this.documentVectors=t},e.Builder.prototype.createTokenSet=function(){this.tokenSet=e.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},e.Builder.prototype.build=function(){return this.calculateAverageDocumentLengths(),this.createDocumentVectors(),this.createTokenSet(),new e.Index({invertedIndex:this.invertedIndex,documentVectors:this.documentVectors,tokenSet:this.tokenSet,averageDocumentLength:this.averageDocumentLength,documentCount:this.documentCount,fields:this._fields,pipeline:this.searchPipeline,b:this._b,k1:this._k1})},e.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},e.MatchData=function(e,t,r){this.metadata={},this.metadata[e]={},this.metadata[e][t]=r},e.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),r=0;r<t.length;r++){var i=t[r],n=Object.keys(e.metadata[i]);void 0==this.metadata[i]&&(this.metadata[i]={});for(var s=0;s<n.length;s++){var o=n[s],a=Object.keys(e.metadata[i][o]);void 0==this.metadata[i][o]&&(this.metadata[i][o]={});for(var u=0;u<a.length;u++){var h=a[u];void 0==this.metadata[i][o][h]?this.metadata[i][o][h]=e.metadata[i][o][h]:this.metadata[i][o][h]=this.metadata[i][o][h].concat(e.metadata[i][o][h])}}}},e.Query=function(e){this.clauses=[],this.allFields=e},e.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),this.clauses.push(e),this},e.Query.prototype.term=function(e,t){var r=t||{};return r.term=e,this.clause(r),this},e.QueryParseError=function(e,t,r){this.name="QueryParseError",this.message=e,this.start=t,this.end=r},e.QueryParseError.prototype=new Error,e.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0},e.QueryLexer.prototype.run=function(){for(var t=e.QueryLexer.lexText;t;)t=t(this)},e.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.str.slice(this.start,this.pos),start:this.start,end:this.pos}),this.start=this.pos},e.QueryLexer.prototype.next=function(){if(this.pos==this.length)return e.QueryLexer.EOS;var t=this.str.charAt(this.pos);return this.pos+=1,t},e.QueryLexer.prototype.width=function(){return this.pos-this.start},e.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},e.QueryLexer.prototype.backup=function(){this.pos-=1},e.QueryLexer.prototype.acceptDigitRun=function(){var t,r;do{r=(t=this.next()).charCodeAt(0)}while(r>47&&r<58);t!=e.QueryLexer.EOS&&this.backup()},e.QueryLexer.prototype.more=function(){return this.pos<this.length},e.QueryLexer.EOS="EOS",e.QueryLexer.FIELD="FIELD",e.QueryLexer.TERM="TERM",e.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",e.QueryLexer.BOOST="BOOST",e.QueryLexer.lexField=function(t){return t.backup(),t.emit(e.QueryLexer.FIELD),t.ignore(),e.QueryLexer.lexText},e.QueryLexer.lexTerm=function(t){if(t.width()>1&&(t.backup(),t.emit(e.QueryLexer.TERM)),t.ignore(),t.more())return e.QueryLexer.lexText},e.QueryLexer.lexEditDistance=function(t){return t.ignore(),t.acceptDigitRun(),t.emit(e.QueryLexer.EDIT_DISTANCE),e.QueryLexer.lexText},e.QueryLexer.lexBoost=function(t){return t.ignore(),t.acceptDigitRun(),t.emit(e.QueryLexer.BOOST),e.QueryLexer.lexText},e.QueryLexer.lexEOS=function(t){t.width()>0&&t.emit(e.QueryLexer.TERM)},e.QueryLexer.termSeparator=e.tokenizer.separator,e.QueryLexer.lexText=function(t){for(;;){var r=t.next();if(r==e.QueryLexer.EOS)return e.QueryLexer.lexEOS;if(":"==r)return e.QueryLexer.lexField;if("~"==r)return t.backup(),t.width()>0&&t.emit(e.QueryLexer.TERM),e.QueryLexer.lexEditDistance;if("^"==r)return t.backup(),t.width()>0&&t.emit(e.QueryLexer.TERM),e.QueryLexer.lexBoost;if(r.match(e.QueryLexer.termSeparator))return e.QueryLexer.lexTerm}},e.QueryParser=function(t,r){this.lexer=new e.QueryLexer(t),this.query=r,this.currentClause={},this.lexemeIdx=0},e.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var t=e.QueryParser.parseFieldOrTerm;t;)t=t(this);return this.query},e.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},e.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},e.QueryParser.prototype.nextClause=function(){var e=this.currentClause;this.query.clause(e),this.currentClause={}},e.QueryParser.parseFieldOrTerm=function(t){var r=t.peekLexeme();if(void 0!=r)switch(r.type){case e.QueryLexer.FIELD:return e.QueryParser.parseField;case e.QueryLexer.TERM:return e.QueryParser.parseTerm;default:var i="expected either a field or a term, found "+r.type+" with value '"+r.str+"'";throw new e.QueryParseError(i,r.start,r.end)}},e.QueryParser.parseField=function(t){var r=t.consumeLexeme();if(void 0!=r){if(-1==t.query.allFields.indexOf(r.str)){var i=t.query.allFields.map(function(e){return"'"+e+"'"}).join(),n="unrecognised field '"+r.str+"', possible fields: "+i;throw new e.QueryParseError(n,r.start,r.end)}t.currentClause.fields=[r.str];var s=t.peekLexeme();if(void 0==s){n="expecting term, found nothing";throw new e.QueryParseError(n,r.start,r.end)}switch(s.type){case e.QueryLexer.TERM:return e.QueryParser.parseTerm;default:n="expecting a field, found '"+s.type+"'";throw new e.QueryParseError(n,s.start,s.end)}}},e.QueryParser.parseTerm=function(t){var r=t.consumeLexeme();if(void 0!=r){t.currentClause.term=r.str.toLowerCase(),-1!=r.str.indexOf("*")&&(t.currentClause.usePipeline=!1);var i=t.peekLexeme();if(void 0!=i)switch(i.type){case e.QueryLexer.TERM:return t.nextClause(),e.QueryParser.parseTerm;case e.QueryLexer.FIELD:return t.nextClause(),e.QueryParser.parseField;case e.QueryLexer.EDIT_DISTANCE:return e.QueryParser.parseEditDistance;case e.QueryLexer.BOOST:return e.QueryParser.parseBoost;default:var n="Unexpected lexeme type '"+i.type+"'";throw new e.QueryParseError(n,i.start,i.end)}else t.nextClause()}},e.QueryParser.parseEditDistance=function(t){var r=t.consumeLexeme();if(void 0!=r){var i=parseInt(r.str,10);if(isNaN(i)){s="edit distance must be numeric";throw new e.QueryParseError(s,r.start,r.end)}t.currentClause.editDistance=i;var n=t.peekLexeme();if(void 0!=n)switch(n.type){case e.QueryLexer.TERM:return t.nextClause(),e.QueryParser.parseTerm;case e.QueryLexer.FIELD:return t.nextClause(),e.QueryParser.parseField;case e.QueryLexer.EDIT_DISTANCE:return e.QueryParser.parseEditDistance;case e.QueryLexer.BOOST:return e.QueryParser.parseBoost;default:var s="Unexpected lexeme type '"+n.type+"'";throw new e.QueryParseError(s,n.start,n.end)}else t.nextClause()}},e.QueryParser.parseBoost=function(t){var r=t.consumeLexeme();if(void 0!=r){var i=parseInt(r.str,10);if(isNaN(i)){s="boost must be numeric";throw new e.QueryParseError(s,r.start,r.end)}t.currentClause.boost=i;var n=t.peekLexeme();if(void 0!=n)switch(n.type){case e.QueryLexer.TERM:return t.nextClause(),e.QueryParser.parseTerm;case e.QueryLexer.FIELD:return t.nextClause(),e.QueryParser.parseField;case e.QueryLexer.EDIT_DISTANCE:return e.QueryParser.parseEditDistance;case e.QueryLexer.BOOST:return e.QueryParser.parseBoost;default:var s="Unexpected lexeme type '"+n.type+"'";throw new e.QueryParseError(s,n.start,n.end)}else t.nextClause()}},function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.lunr=t()}(this,function(){return e})}();
$(document).ready(function(){var e,r;$("#searchClose").click(function(e){e.preventDefault(),$("#searchUi").removeClass("show")}),fetch("/lunr.idx.json").then(function(e){return e.json()}).then(function(s){e=lunr.Index.load(s.index),r=s.store,$("input#search").on("keyup",function(){var s=$(this).val(),a=e.search(s).slice(0,6),n=$("#searchResults");if(n.find(".search-item").remove(),0===a.length)return $('<a class="dropdown-item disabled search-item" href="#">No results</a>').appendTo(n),void $("#searchUi").addClass("show");for(var t in a){var i=a[t].ref,o=$('<a class="dropdown-item search-item" />');o.attr("href",r[i].href),o.text(r[i].title),n.append(o)}$("#searchUi").addClass("show")})})});