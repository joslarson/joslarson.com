/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

(function (window) {

    'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ('classList' in document.documentElement) {
        hasClass = function (elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function (elem, c) {
            elem.classList.add(c);
        };
        removeClass = function (elem, c) {
            elem.classList.remove(c);
        };
    }
    else {
        hasClass = function (elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function (elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function (elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

// transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(classie);
    } else {
        // browser global
        window.classie = classie;
    }

})(window);

var disqus_shortname = casperionConfig.disqus_shortname;

/* Disqus Comment */
$('#discuss').on('click', function () {
    $('#discuss').hide();
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = '//' + casperionConfig.disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
});

(function ($) {
    "use strict";
    $(document).ready(function () {
        if (typeof disqus_domain != "undefined")DISQUSWIDGETS.domain = disqus_domain;
        DISQUSWIDGETS.forum = disqus_shortname;
        DISQUSWIDGETS.getCount();
    });
}(jQuery));

// count.js of disqus
var DISQUSWIDGETS, disqus_domain, disqus_shortname;
typeof DISQUSWIDGETS == "undefined" && (DISQUSWIDGETS = function () {
    var c = {}, q = document.getElementsByTagName("HEAD")[0] || document.body, h = {}, o = {identifier: 1, url: 2};
    c.domain = "disqus.com";
    c.forum = "";
    c.getCount = function (a) {
        var b;
        b = encodeURIComponent;
        var r = document.location.protocol + "//" + c.forum + "." + c.domain + "/count-data.js?", d = [], i = 0, j = 10, p = "", a = a || {};
        a.reset && (h = {}, p = "&_=" + +new Date);
        for (var a = [document.getElementsByTagName("A"), document.getElementsByClassName && document.getElementsByClassName("disqus-comment-count") ||
        []], k, g, e, f, l = 0; l < a.length; l++) {
            k = a[l];
            for (var m = 0; m < k.length; m++) {
                g = k[m];
                e = g.getAttribute("data-disqus-identifier");
                f = g.hash === "#disqus_thread" && g.href.replace("#disqus_thread", "") || g.getAttribute("data-disqus-url");
                if (e)f = o.identifier; else if (f)e = f, f = o.url; else continue;
                var n;
                h.hasOwnProperty(e) ? n = h[e] : (n = h[e] = {elements: [], type: f}, d.push(b(f) + "=" + b(e)));
                n.elements.push(g)
            }
        }
        d.sort();
        for (b = d.slice(i, j); b.length;)a = document.createElement("script"), a.async = !0, a.src = r + b.join("&") + p, q.appendChild(a),
            i += 10, j += 10, b = d.slice(i, j)
    };
    c.displayCount = function (a) {
        for (var b, c, d, i = a.counts, a = a.text.comments; b = i.shift();)if (c = h[b.id]) {
            switch (b.comments) {
                case 0:
                    d = a.zero;
                    break;
                case 1:
                    d = a.one;
                    break;
                default:
                    d = a.multiple
            }
            b = d.replace("{num}", b.comments);
            c = c.elements;
            for (d = c.length - 1; d >= 0; d--)c[d].innerHTML = b
        }
    };
    return c
}());

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', casperionConfig.google_analytics_tracking_id, 'auto');
ga('send', 'pageview');

var hljs=new function(){function e(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,t){var r=e&&e.exec(t);return r&&0==r.index}function n(e){var t=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);return t=t.map(function(e){return e.replace(/^lang(uage)?-/,"")}),t.filter(function(e){return _(e)||/no(-?)highlight/.test(e)})[0]}function a(e,t){var r={};for(var n in e)r[n]=e[n];if(t)for(var n in t)r[n]=t[n];return r}function s(e){var r=[];return function n(e,a){for(var s=e.firstChild;s;s=s.nextSibling)3==s.nodeType?a+=s.nodeValue.length:1==s.nodeType&&(r.push({event:"start",offset:a,node:s}),a=n(s,a),t(s).match(/br|hr|img|input/)||r.push({event:"stop",offset:a,node:s}));return a}(e,0),r}function i(r,n,a){function s(){return r.length&&n.length?r[0].offset!=n[0].offset?r[0].offset<n[0].offset?r:n:"start"==n[0].event?r:n:r.length?r:n}function i(r){function n(t){return" "+t.nodeName+'="'+e(t.value)+'"'}u+="<"+t(r)+Array.prototype.map.call(r.attributes,n).join("")+">"}function c(e){u+="</"+t(e)+">"}function o(e){("start"==e.event?i:c)(e.node)}for(var l=0,u="",d=[];r.length||n.length;){var b=s();if(u+=e(a.substr(l,b[0].offset-l)),l=b[0].offset,b==r){d.reverse().forEach(c);do o(b.splice(0,1)[0]),b=s();while(b==r&&b.length&&b[0].offset==l);d.reverse().forEach(i)}else"start"==b[0].event?d.push(b[0].node):d.pop(),o(b.splice(0,1)[0])}return u+e(a.substr(l))}function c(e){function t(e){return e&&e.source||e}function r(r,n){return RegExp(t(r),"m"+(e.cI?"i":"")+(n?"g":""))}function n(s,i){if(!s.compiled){if(s.compiled=!0,s.k=s.k||s.bK,s.k){var c={},o=function(t,r){e.cI&&(r=r.toLowerCase()),r.split(" ").forEach(function(e){var r=e.split("|");c[r[0]]=[t,r[1]?Number(r[1]):1]})};"string"==typeof s.k?o("keyword",s.k):Object.keys(s.k).forEach(function(e){o(e,s.k[e])}),s.k=c}s.lR=r(s.l||/\b[A-Za-z0-9_]+\b/,!0),i&&(s.bK&&(s.b="\\b("+s.bK.split(" ").join("|")+")\\b"),s.b||(s.b=/\B|\b/),s.bR=r(s.b),s.e||s.eW||(s.e=/\B|\b/),s.e&&(s.eR=r(s.e)),s.tE=t(s.e)||"",s.eW&&i.tE&&(s.tE+=(s.e?"|":"")+i.tE)),s.i&&(s.iR=r(s.i)),void 0===s.r&&(s.r=1),s.c||(s.c=[]);var l=[];s.c.forEach(function(e){e.v?e.v.forEach(function(t){l.push(a(e,t))}):l.push("self"==e?s:e)}),s.c=l,s.c.forEach(function(e){n(e,s)}),s.starts&&n(s.starts,i);var u=s.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([s.tE,s.i]).map(t).filter(Boolean);s.t=u.length?r(u.join("|"),!0):{exec:function(){return null}}}}n(e)}function o(t,n,a,s){function i(e,t){for(var n=0;n<t.c.length;n++)if(r(t.c[n].bR,e))return t.c[n]}function u(e,t){return r(e.eR,t)?e:e.eW?u(e.parent,t):void 0}function d(e,t){return!a&&r(t.iR,e)}function b(e,t){var r=y.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(r)&&e.k[r]}function p(e,t,r,n){var a=n?"":N.classPrefix,s='<span class="'+a,i=r?"":"</span>";return s+=e+'">',s+t+i}function f(){if(!k.k)return e(S);var t="",r=0;k.lR.lastIndex=0;for(var n=k.lR.exec(S);n;){t+=e(S.substr(r,n.index-r));var a=b(k,n);a?(E+=a[1],t+=p(a[0],e(n[0]))):t+=e(n[0]),r=k.lR.lastIndex,n=k.lR.exec(S)}return t+e(S.substr(r))}function g(){if(k.sL&&!v[k.sL])return e(S);var t=k.sL?o(k.sL,S,!0,x[k.sL]):l(S);return k.r>0&&(E+=t.r),"continuous"==k.subLanguageMode&&(x[k.sL]=t.top),p(t.language,t.value,!1,!0)}function h(){return void 0!==k.sL?g():f()}function m(t,r){var n=t.cN?p(t.cN,"",!0):"";t.rB?(M+=n,S=""):t.eB?(M+=e(r)+n,S=""):(M+=n,S=r),k=Object.create(t,{parent:{value:k}})}function w(t,r){if(S+=t,void 0===r)return M+=h(),0;var n=i(r,k);if(n)return M+=h(),m(n,r),n.rB?0:r.length;var a=u(k,r);if(a){var s=k;s.rE||s.eE||(S+=r),M+=h();do k.cN&&(M+="</span>"),E+=k.r,k=k.parent;while(k!=a.parent);return s.eE&&(M+=e(r)),S="",a.starts&&m(a.starts,""),s.rE?0:r.length}if(d(r,k))throw new Error('Illegal lexeme "'+r+'" for mode "'+(k.cN||"<unnamed>")+'"');return S+=r,r.length||1}var y=_(t);if(!y)throw new Error('Unknown language: "'+t+'"');c(y);for(var k=s||y,x={},M="",C=k;C!=y;C=C.parent)C.cN&&(M=p(C.cN,"",!0)+M);var S="",E=0;try{for(var B,I,L=0;;){if(k.t.lastIndex=L,B=k.t.exec(n),!B)break;I=w(n.substr(L,B.index-L),B[0]),L=B.index+I}w(n.substr(L));for(var C=k;C.parent;C=C.parent)C.cN&&(M+="</span>");return{r:E,value:M,language:t,top:k}}catch(R){if(-1!=R.message.indexOf("Illegal"))return{r:0,value:e(n)};throw R}}function l(t,r){r=r||N.languages||Object.keys(v);var n={r:0,value:e(t)},a=n;return r.forEach(function(e){if(_(e)){var r=o(e,t,!1);r.language=e,r.r>a.r&&(a=r),r.r>n.r&&(a=n,n=r)}}),a.language&&(n.second_best=a),n}function u(e){return N.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,t){return t.replace(/\t/g,N.tabReplace)})),N.useBR&&(e=e.replace(/\n/g,"<br>")),e}function d(e,t,r){var n=t?w[t]:r,a=[e.trim()];return e.match(/(\s|^)hljs(\s|$)/)||a.push("hljs"),n&&a.push(n),a.join(" ").trim()}function b(e){var t=n(e);if(!/no(-?)highlight/.test(t)){var r;N.useBR?(r=document.createElementNS("http://www.w3.org/1999/xhtml","div"),r.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):r=e;var a=r.textContent,c=t?o(t,a,!0):l(a),b=s(r);if(b.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=c.value,c.value=i(b,s(p),a)}c.value=u(c.value),e.innerHTML=c.value,e.className=d(e.className,t,c.language),e.result={language:c.language,re:c.r},c.second_best&&(e.second_best={language:c.second_best.language,re:c.second_best.r})}}function p(e){N=a(N,e)}function f(){if(!f.called){f.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,b)}}function g(){addEventListener("DOMContentLoaded",f,!1),addEventListener("load",f,!1)}function h(e,t){var r=v[e]=t(this);r.aliases&&r.aliases.forEach(function(t){w[t]=e})}function m(){return Object.keys(v)}function _(e){return v[e]||v[w[e]]}var N={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},v={},w={};this.highlight=o,this.highlightAuto=l,this.fixMarkup=u,this.highlightBlock=b,this.configure=p,this.initHighlighting=f,this.initHighlightingOnLoad=g,this.registerLanguage=h,this.listLanguages=m,this.getLanguage=_,this.inherit=a,this.IR="[a-zA-Z][a-zA-Z0-9_]*",this.UIR="[a-zA-Z_][a-zA-Z0-9_]*",this.NR="\\b\\d+(\\.\\d+)?",this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",this.BNR="\\b(0b[01]+)",this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",this.BE={b:"\\\\[\\s\\S]",r:0},this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE]},this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE]},this.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/},this.CLCM={cN:"comment",b:"//",e:"$",c:[this.PWM]},this.CBCM={cN:"comment",b:"/\\*",e:"\\*/",c:[this.PWM]},this.HCM={cN:"comment",b:"#",e:"$",c:[this.PWM]},this.NM={cN:"number",b:this.NR,r:0},this.CNM={cN:"number",b:this.CNR,r:0},this.BNM={cN:"number",b:this.BNR,r:0},this.CSSNM={cN:"number",b:this.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},this.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[this.BE,{b:/\[/,e:/\]/,r:0,c:[this.BE]}]},this.TM={cN:"title",b:this.IR,r:0},this.UTM={cN:"title",b:this.UIR,r:0}};hljs.registerLanguage("apache",function(e){var t={cN:"number",b:"[\\$%]\\d+"};return{aliases:["apacheconf"],cI:!0,c:[e.HCM,{cN:"tag",b:"</?",e:">"},{cN:"keyword",b:/\w+/,r:0,k:{common:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{e:/$/,r:0,k:{literal:"on off all"},c:[{cN:"sqbracket",b:"\\s\\[",e:"\\]$"},{cN:"cbracket",b:"[\\$%]\\{",e:"\\}",c:["self",t]},t,e.QSM]}}],i:/\S/}}),hljs.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)\}/}]},r={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]},n={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/-?[a-z\.]+/,k:{keyword:"if then else elif fi for break continue while in do done exit return set declare case esac export exec function",literal:"true false",built_in:"printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",operator:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"shebang",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,e.NM,r,n,t]}}),hljs.registerLanguage("coffeescript",function(e){var t={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",reserved:"case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",built_in:"npm require console print module global window document"},r="[A-Za-z$_][0-9A-Za-z$_]*",n={cN:"subst",b:/#\{/,e:/}/,k:t},a=[e.BNM,e.inherit(e.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[e.BE]},{b:/'/,e:/'/,c:[e.BE]},{b:/"""/,e:/"""/,c:[e.BE,n]},{b:/"/,e:/"/,c:[e.BE,n]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[n,e.HCM]},{b:"//[gim]*",r:0},{b:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{cN:"property",b:"@"+r},{b:"`",e:"`",eB:!0,eE:!0,sL:"javascript"}];n.c=a;var s=e.inherit(e.TM,{b:r}),i="(\\(.*\\))?\\s*\\B[-=]>",c={cN:"params",b:"\\([^\\(]",rB:!0,c:[{b:/\(/,e:/\)/,k:t,c:["self"].concat(a)}]};return{aliases:["coffee","cson","iced"],k:t,i:/\/\*/,c:a.concat([{cN:"comment",b:"###",e:"###",c:[e.PWM]},e.HCM,{cN:"function",b:"^\\s*"+r+"\\s*=\\s*"+i,e:"[-=]>",rB:!0,c:[s,c]},{b:/[:\(,=]\s*/,r:0,c:[{cN:"function",b:i,e:"[-=]>",rB:!0,c:[c]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:!0,i:/[:="\[\]]/,c:[s]},s]},{cN:"attribute",b:r+":",e:":",rB:!0,rE:!0,r:0}])}}),hljs.registerLanguage("cpp",function(e){var t={keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary",built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"};return{aliases:["c","h","c++","h++"],k:t,i:"</",c:[e.CLCM,e.CBCM,e.QSM,{cN:"string",b:"'\\\\?.",e:"'",i:"."},{cN:"number",b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},e.CNM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line pragma",c:[{b:'include\\s*[<"]',e:'[>"]',k:"include",i:"\\n"},e.CLCM]},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:t,c:["self"]},{b:e.IR+"::"}]}}),hljs.registerLanguage("cs",function(e){var t="abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async await protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",r=e.IR+"(<"+e.IR+">)?";return{aliases:["csharp"],k:t,i:/::/,c:[{cN:"comment",b:"///",e:"$",rB:!0,c:[{cN:"xmlDocTag",v:[{b:"///",r:0},{b:"<!--|-->"},{b:"</?",e:">"}]}]},e.CLCM,e.CBCM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line region endregion pragma checksum"},{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},e.ASM,e.QSM,e.CNM,{bK:"class namespace interface",e:/[{;=]/,i:/[^\s:]/,c:[e.TM,e.CLCM,e.CBCM]},{bK:"new",e:/\s/,r:0},{cN:"function",b:"("+r+"\\s+)+"+e.IR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:t,c:[{b:e.IR+"\\s*\\(",rB:!0,c:[e.TM]},{cN:"params",b:/\(/,e:/\)/,k:t,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]}]}}),hljs.registerLanguage("css",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",r={cN:"function",b:t+"\\(",rB:!0,eE:!0,e:"\\("};return{cI:!0,i:"[=/|']",c:[e.CBCM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[r,e.ASM,e.QSM,e.CSSNM]}]},{cN:"tag",b:t,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[e.CBCM,{cN:"rule",b:"[^\\s]",rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:!0,i:"[^\\s]",starts:{cN:"value",eW:!0,eE:!0,c:[r,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]}]}]}}),hljs.registerLanguage("diff",function(){return{aliases:["patch"],c:[{cN:"chunk",r:10,v:[{b:/^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/},{b:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{b:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{cN:"header",v:[{b:/Index: /,e:/$/},{b:/=====/,e:/=====$/},{b:/^\-\-\-/,e:/$/},{b:/^\*{3} /,e:/$/},{b:/^\+\+\+/,e:/$/},{b:/\*{5}/,e:/\*{5}$/}]},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}}),hljs.registerLanguage("http",function(){return{i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:!0}}]}}),hljs.registerLanguage("ini",function(e){return{cI:!0,i:/\S/,c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:!0,k:"on off true false yes no",c:[e.QSM,e.NM],r:0}]}]}}),hljs.registerLanguage("java",function(e){var t=e.UIR+"(<"+e.UIR+">)?",r="false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private";return{aliases:["jsp"],k:r,i:/<\//,c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",r:0,c:[{cN:"javadoctag",b:"(^|\\s)@[A-Za-z]+"}]},e.CLCM,e.CBCM,e.ASM,e.QSM,{cN:"class",bK:"class interface",e:/[{;=]/,eE:!0,k:"class interface",i:/[:"\[\]]/,c:[{bK:"extends implements"},e.UTM]},{bK:"new throw",e:/\s/,r:0},{cN:"function",b:"("+t+"\\s+)+"+e.UIR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:r,c:[{b:e.UIR+"\\s*\\(",rB:!0,c:[e.UTM]},{cN:"params",b:/\(/,e:/\)/,k:r,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]},e.CNM,{cN:"annotation",b:"@[A-Za-z]+"}]}}),hljs.registerLanguage("javascript",function(e){return{aliases:["js"],k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"},c:[{cN:"pi",b:/^\s*('|")use strict('|")/,r:10},e.ASM,e.QSM,e.CLCM,e.CBCM,e.CNM,{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{b:/</,e:/>;/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[e.CLCM,e.CBCM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+e.IR,r:0}]}}),hljs.registerLanguage("json",function(e){var t={literal:"true false null"},r=[e.QSM,e.CNM],n={cN:"value",e:",",eW:!0,eE:!0,c:r,k:t},a={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:!0,eE:!0,c:[e.BE],i:"\\n",starts:n}],i:"\\S"},s={b:"\\[",e:"\\]",c:[e.inherit(n,{cN:null})],i:"\\S"};return r.splice(r.length,0,a,s),{c:r,k:t,i:"\\S"}}),hljs.registerLanguage("makefile",function(e){var t={cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]};return{aliases:["mk","mak"],c:[e.HCM,{b:/^\w+\s*\W*=/,rB:!0,r:0,starts:{cN:"constant",e:/\s*\W*=/,eE:!0,starts:{e:/$/,r:0,c:[t]}}},{cN:"title",b:/^[\w]+:\s*$/},{cN:"phony",b:/^\.PHONY:/,e:/$/,k:".PHONY",l:/[\.\w]+/},{b:/^\t+/,e:/$/,r:0,c:[e.QSM,t]}]}}),hljs.registerLanguage("xml",function(){var e="[A-Za-z0-9\\._:-]+",t={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"},r={eW:!0,i:/</,r:0,c:[t,{cN:"attribute",b:e,r:0},{b:"=",r:0,c:[{cN:"value",c:[t],v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[r],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[r],starts:{e:"</script>",rE:!0,sL:"javascript"}},t,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:/[^ \/><\n\t]+/,r:0},r]}]}}),hljs.registerLanguage("markdown",function(){return{aliases:["md","mkdown","mkd"],c:[{cN:"header",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"blockquote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|    )",e:"$",r:0}]},{cN:"horizontal_rule",b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"link_label",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link_url",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"link_reference",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:"^\\[.+\\]:",rB:!0,c:[{cN:"link_reference",b:"\\[",e:"\\]:",eB:!0,eE:!0,starts:{cN:"link_url",e:"$"}}]}]}}),hljs.registerLanguage("nginx",function(e){var t={cN:"variable",v:[{b:/\$\d+/},{b:/\$\{/,e:/}/},{b:"[\\$\\@]"+e.UIR}]},r={eW:!0,l:"[a-z/_]+",k:{built_in:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},r:0,i:"=>",c:[e.HCM,{cN:"string",c:[e.BE,t],v:[{b:/"/,e:/"/},{b:/'/,e:/'/}]},{cN:"url",b:"([a-z]+):/",e:"\\s",eW:!0,eE:!0,c:[t]},{cN:"regexp",c:[e.BE,t],v:[{b:"\\s\\^",e:"\\s|{|;",rE:!0},{b:"~\\*?\\s+",e:"\\s|{|;",rE:!0},{b:"\\*(\\.[a-z\\-]+)+"},{b:"([a-z\\-]+\\.)+\\*"}]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",r:0},t]};return{aliases:["nginxconf"],c:[e.HCM,{b:e.UIR+"\\s",e:";|{",rB:!0,c:[{cN:"title",b:e.UIR,starts:r}],r:0}],i:"[^\\s\\}]"}}),hljs.registerLanguage("objectivec",function(e){var t={keyword:"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",literal:"false true FALSE TRUE nil YES NO NULL",built_in:"NSString NSData NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView NSView NSViewController NSWindow NSWindowController NSSet NSUUID NSIndexSet UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection NSURLSession NSURLSessionDataTask NSURLSessionDownloadTask NSURLSessionUploadTask NSURLResponseUIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"},r=/[a-zA-Z@][a-zA-Z0-9_]*/,n="@interface @class @protocol @implementation";return{aliases:["m","mm","objc","obj-c"],k:t,l:r,i:"</",c:[e.CLCM,e.CBCM,e.CNM,e.QSM,{cN:"string",v:[{b:'@"',e:'"',i:"\\n",c:[e.BE]},{b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"}]},{cN:"preprocessor",b:"#",e:"$",c:[{cN:"title",v:[{b:'"',e:'"'},{b:"<",e:">"}]}]},{cN:"class",b:"("+n.split(" ").join("|")+")\\b",e:"({|$)",eE:!0,k:n,l:r,c:[e.UTM]},{cN:"variable",b:"\\."+e.UIR,r:0}]}}),hljs.registerLanguage("perl",function(e){var t="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",r={cN:"subst",b:"[$@]\\{",e:"\\}",k:t},n={b:"->{",e:"}"},a={cN:"variable",v:[{b:/\$\d/},{b:/[\$\%\@](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/},{b:/[\$\%\@][^\s\w{]/,r:0}]},s={cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5},i=[e.BE,r,a],c=[a,e.HCM,s,{cN:"comment",b:"^\\=\\w",e:"\\=cut",eW:!0},n,{cN:"string",c:i,v:[{b:"q[qwxr]?\\s*\\(",e:"\\)",r:5},{b:"q[qwxr]?\\s*\\[",e:"\\]",r:5},{b:"q[qwxr]?\\s*\\{",e:"\\}",r:5},{b:"q[qwxr]?\\s*\\|",e:"\\|",r:5},{b:"q[qwxr]?\\s*\\<",e:"\\>",r:5},{b:"qw\\s+q",e:"q",r:5},{b:"'",e:"'",c:[e.BE]},{b:'"',e:'"'},{b:"`",e:"`",c:[e.BE]},{b:"{\\w+}",c:[],r:0},{b:"-?\\w+\\s*\\=\\>",c:[],r:0}]},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\/\\/|"+e.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[e.HCM,s,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[e.BE],r:0}]},{cN:"sub",bK:"sub",e:"(\\s*\\(.*?\\))?[;{]",r:5},{cN:"operator",b:"-\\w\\b",r:0}];return r.c=c,n.c=c,{aliases:["pl"],k:t,c:c}}),hljs.registerLanguage("php",function(e){var t={cN:"variable",b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},r={cN:"preprocessor",b:/<\?(php)?|\?>/},n={cN:"string",c:[e.BE,r],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},a={v:[e.BNM,e.CNM]};return{aliases:["php3","php4","php5","php6"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.CLCM,e.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"},r]},{cN:"comment",b:"__halt_compiler.+?;",eW:!0,k:"__halt_compiler",l:e.UIR},{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[e.BE]},r,t,{b:/->+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",t,e.CBCM,n,a]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},n,a]}}),hljs.registerLanguage("python",function(e){var t={cN:"prompt",b:/^(>>>|\.\.\.) /},r={cN:"string",c:[e.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[t],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[t],r:10},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)"/,e:/"/},e.ASM,e.QSM]},n={cN:"number",r:0,v:[{b:e.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:e.CNR+"[lLjJ]?"}]},a={cN:"params",b:/\(/,e:/\)/,c:["self",t,n,r]},s={e:/:/,i:/[${=;\n]/,c:[e.UTM,a]};return{aliases:["py","gyp"],k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},i:/(<\/|->|\?)/,c:[t,n,r,e.HCM,e.inherit(s,{cN:"function",bK:"def",r:10}),e.inherit(s,{cN:"class",bK:"class"}),{cN:"decorator",b:/@/,e:/$/},{b:/\b(print|exec)\(/}]}}),hljs.registerLanguage("ruby",function(e){var t="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",r="and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",n={cN:"yardoctag",b:"@[A-Za-z]+"},a={cN:"value",b:"#<",e:">"},s={cN:"comment",v:[{b:"#",e:"$",c:[n]},{b:"^\\=begin",e:"^\\=end",c:[n],r:10},{b:"^__END__",e:"\\n$"}]},i={cN:"subst",b:"#\\{",e:"}",k:r},c={cN:"string",c:[e.BE,i],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/`/,e:/`/},{b:"%[qQwWx]?\\(",e:"\\)"},{b:"%[qQwWx]?\\[",e:"\\]"},{b:"%[qQwWx]?{",e:"}"},{b:"%[qQwWx]?<",e:">"},{b:"%[qQwWx]?/",e:"/"},{b:"%[qQwWx]?%",e:"%"},{b:"%[qQwWx]?-",e:"-"},{b:"%[qQwWx]?\\|",e:"\\|"},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}]},o={cN:"params",b:"\\(",e:"\\)",k:r},l=[c,a,s,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+e.IR+"::)?"+e.IR}]},s]},{cN:"function",bK:"def",e:" |$|;",r:0,c:[e.inherit(e.TM,{b:t}),o,s]},{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"symbol",b:":",c:[c,{b:t}],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+e.RSR+")\\s*",c:[a,s,{cN:"regexp",c:[e.BE,i],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}],r:0}];i.c=l,o.c=l;var u=[{b:/^\s*=>/,cN:"status",starts:{e:"$",c:l}},{cN:"prompt",b:/^\S[^=>\n]*>+/,starts:{e:"$",c:l}}];return{aliases:["rb","gemspec","podspec","thor","irb"],k:r,c:[s].concat(u).concat(l)}}),hljs.registerLanguage("sql",function(e){var t={cN:"comment",b:"--",e:"$"};return{cI:!0,i:/[<>]/,c:[{cN:"operator",bK:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup",e:/;/,eW:!0,k:{keyword:"abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",literal:"true false null",built_in:"array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"},c:[{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[e.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[e.BE]},e.CNM,e.CBCM,t]},e.CBCM,t]}
});
/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
                elem: $(this),
                speed: 500
            },

            allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery);

(function ($) {
    "use strict";

    $(document).ready(function () {
        /* Custom JavaScript for the Slide Menu */
        var html = $('html, body'),
            navContainer = $('.nav-container'),
            navToggle = $('.nav-toggle'),
            navDropdownToggle = $('.has-dropdown');

        // Nav toggle
        navToggle.on('click', function(e) {
            var $this = $(this);
            e.preventDefault();
            $this.toggleClass('is-active');
            navContainer.toggleClass('is-visible');
            html.toggleClass('nav-open');
        });

        // Nav dropdown toggle
        navDropdownToggle.on('click', function() {
            var $this = $(this);
            $this.toggleClass('is-active').children('ul').toggleClass('is-visible');
        });

        // Prevent click events from firing on children of navDropdownToggle
        navDropdownToggle.on('click', '*', function(e) {
            e.stopPropagation();
        });

        new UISearch( document.getElementById( 'search' ) );

        $('#search').on('click', '.search-clear-toggle', function (e) {
            e.preventDefault();
            $('.search-input').val('');
            $('.search-results').removeClass('search-active');
        });

        if ($("pre code")[0]) {
            $("pre code").each(function (i, e) {
                hljs.highlightBlock(e)
            });
        }

    });
}(jQuery));

/*global jQuery */
/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement('div');
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com'][src*='video.html']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not("object object"); // SwfObj conflict patch

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );

/**
 * ghostHunter - 0.2.3
 * Copyright (C) 2014 Jamal Neufeld (jamal@i11u.me)
 * MIT Licensed
 * @license
 */
(function ($) {

    /* The lunr 0.4.3 library is included here to perform the fulltext searching. lunr is copyright (C) 2013 Oliver Nightingale. MIT Licensed */
    var lunr = function (t) {
        var e = new lunr.Index;
        return e.pipeline.add(lunr.stopWordFilter, lunr.stemmer), t && t.call(e, e), e
    };
    lunr.version = "0.4.3", "undefined" != typeof module && (module.exports = lunr), lunr.utils = {}, lunr.utils.warn = function (t) {
        return function (e) {
            t.console && console.warn && console.warn(e)
        }
    }(this), lunr.utils.zeroFillArray = function () {
        var t = [0];
        return function (e) {
            for (; e > t.length;)t = t.concat(t);
            return t.slice(0, e)
        }
    }(), lunr.EventEmitter = function () {
        this.events = {}
    }, lunr.EventEmitter.prototype.addListener = function () {
        var t = Array.prototype.slice.call(arguments), e = t.pop(), n = t;
        if ("function" != typeof e)throw new TypeError("last argument must be a function");
        n.forEach(function (t) {
            this.hasHandler(t) || (this.events[t] = []), this.events[t].push(e)
        }, this)
    }, lunr.EventEmitter.prototype.removeListener = function (t, e) {
        if (this.hasHandler(t)) {
            var n = this.events[t].indexOf(e);
            this.events[t].splice(n, 1), this.events[t].length || delete this.events[t]
        }
    }, lunr.EventEmitter.prototype.emit = function (t) {
        if (this.hasHandler(t)) {
            var e = Array.prototype.slice.call(arguments, 1);
            this.events[t].forEach(function (t) {
                t.apply(void 0, e)
            })
        }
    }, lunr.EventEmitter.prototype.hasHandler = function (t) {
        return t in this.events
    }, lunr.tokenizer = function (t) {
        if (!arguments.length || null == t || void 0 == t)return [];
        if (Array.isArray(t))return t.map(function (t) {
            return t.toLowerCase()
        });
        for (var e = ("" + t).replace(/^\s+/, ""), n = e.length - 1; n >= 0; n--)if (/\S/.test(e.charAt(n))) {
            e = e.substring(0, n + 1);
            break
        }
        return e.split(/\s+/).map(function (t) {
            return t.replace(/^\W+/, "").replace(/\W+$/, "").toLowerCase()
        })
    }, lunr.Pipeline = function () {
        this._stack = []
    }, lunr.Pipeline.registeredFunctions = {}, lunr.Pipeline.registerFunction = function (t, e) {
        e in this.registeredFunctions && lunr.utils.warn("Overwriting existing registered function: " + e), t.label = e, lunr.Pipeline.registeredFunctions[t.label] = t
    }, lunr.Pipeline.warnIfFunctionNotRegistered = function (t) {
        var e = t.label && t.label in this.registeredFunctions;
        e || lunr.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", t)
    }, lunr.Pipeline.load = function (t) {
        var e = new lunr.Pipeline;
        return t.forEach(function (t) {
            var n = lunr.Pipeline.registeredFunctions[t];
            if (!n)throw Error("Cannot load un-registered function: " + t);
            e.add(n)
        }), e
    }, lunr.Pipeline.prototype.add = function () {
        var t = Array.prototype.slice.call(arguments);
        t.forEach(function (t) {
            lunr.Pipeline.warnIfFunctionNotRegistered(t), this._stack.push(t)
        }, this)
    }, lunr.Pipeline.prototype.after = function (t, e) {
        lunr.Pipeline.warnIfFunctionNotRegistered(e);
        var n = this._stack.indexOf(t) + 1;
        this._stack.splice(n, 0, e)
    }, lunr.Pipeline.prototype.before = function (t, e) {
        lunr.Pipeline.warnIfFunctionNotRegistered(e);
        var n = this._stack.indexOf(t);
        this._stack.splice(n, 0, e)
    }, lunr.Pipeline.prototype.remove = function (t) {
        var e = this._stack.indexOf(t);
        this._stack.splice(e, 1)
    }, lunr.Pipeline.prototype.run = function (t) {
        for (var e = [], n = t.length, r = this._stack.length, o = 0; n > o; o++) {
            for (var i = t[o], s = 0; r > s && (i = this._stack[s](i, o, t), void 0 !== i); s++);
            void 0 !== i && e.push(i)
        }
        return e
    }, lunr.Pipeline.prototype.toJSON = function () {
        return this._stack.map(function (t) {
            return lunr.Pipeline.warnIfFunctionNotRegistered(t), t.label
        })
    }, lunr.Vector = function (t) {
        this.elements = t
    }, lunr.Vector.prototype.magnitude = function () {
        if (this._magnitude)return this._magnitude;
        for (var t, e = 0, n = this.elements, r = n.length, o = 0; r > o; o++)t = n[o], e += t * t;
        return this._magnitude = Math.sqrt(e)
    }, lunr.Vector.prototype.dot = function (t) {
        for (var e = this.elements, n = t.elements, r = e.length, o = 0, i = 0; r > i; i++)o += e[i] * n[i];
        return o
    }, lunr.Vector.prototype.similarity = function (t) {
        return this.dot(t) / (this.magnitude() * t.magnitude())
    }, lunr.Vector.prototype.toArray = function () {
        return this.elements
    }, lunr.SortedSet = function () {
        this.length = 0, this.elements = []
    }, lunr.SortedSet.load = function (t) {
        var e = new this;
        return e.elements = t, e.length = t.length, e
    }, lunr.SortedSet.prototype.add = function () {
        Array.prototype.slice.call(arguments).forEach(function (t) {
            ~this.indexOf(t) || this.elements.splice(this.locationFor(t), 0, t)
        }, this), this.length = this.elements.length
    }, lunr.SortedSet.prototype.toArray = function () {
        return this.elements.slice()
    }, lunr.SortedSet.prototype.map = function (t, e) {
        return this.elements.map(t, e)
    }, lunr.SortedSet.prototype.forEach = function (t, e) {
        return this.elements.forEach(t, e)
    }, lunr.SortedSet.prototype.indexOf = function (t, e, n) {
        var e = e || 0, n = n || this.elements.length, r = n - e, o = e + Math.floor(r / 2), i = this.elements[o];
        return 1 >= r ? i === t ? o : -1 : t > i ? this.indexOf(t, o, n) : i > t ? this.indexOf(t, e, o) : i === t ? o : void 0
    }, lunr.SortedSet.prototype.locationFor = function (t, e, n) {
        var e = e || 0, n = n || this.elements.length, r = n - e, o = e + Math.floor(r / 2), i = this.elements[o];
        if (1 >= r) {
            if (i > t)return o;
            if (t > i)return o + 1
        }
        return t > i ? this.locationFor(t, o, n) : i > t ? this.locationFor(t, e, o) : void 0
    }, lunr.SortedSet.prototype.intersect = function (t) {
        for (var e = new lunr.SortedSet, n = 0, r = 0, o = this.length, i = t.length, s = this.elements, l = t.elements; ;) {
            if (n > o - 1 || r > i - 1)break;
            s[n] !== l[r] ? s[n] < l[r] ? n++ : s[n] > l[r] && r++ : (e.add(s[n]), n++, r++)
        }
        return e
    }, lunr.SortedSet.prototype.clone = function () {
        var t = new lunr.SortedSet;
        return t.elements = this.toArray(), t.length = t.elements.length, t
    }, lunr.SortedSet.prototype.union = function (t) {
        var e, n, r;
        return this.length >= t.length ? (e = this, n = t) : (e = t, n = this), r = e.clone(), r.add.apply(r, n.toArray()), r
    }, lunr.SortedSet.prototype.toJSON = function () {
        return this.toArray()
    }, lunr.Index = function () {
        this._fields = [], this._ref = "id", this.pipeline = new lunr.Pipeline, this.documentStore = new lunr.Store, this.tokenStore = new lunr.TokenStore, this.corpusTokens = new lunr.SortedSet, this.eventEmitter = new lunr.EventEmitter, this._idfCache = {}, this.on("add", "remove", "update", function () {
            this._idfCache = {}
        }.bind(this))
    }, lunr.Index.prototype.on = function () {
        var t = Array.prototype.slice.call(arguments);
        return this.eventEmitter.addListener.apply(this.eventEmitter, t)
    }, lunr.Index.prototype.off = function (t, e) {
        return this.eventEmitter.removeListener(t, e)
    }, lunr.Index.load = function (t) {
        t.version !== lunr.version && lunr.utils.warn("version mismatch: current " + lunr.version + " importing " + t.version);
        var e = new this;
        return e._fields = t.fields, e._ref = t.ref, e.documentStore = lunr.Store.load(t.documentStore), e.tokenStore = lunr.TokenStore.load(t.tokenStore), e.corpusTokens = lunr.SortedSet.load(t.corpusTokens), e.pipeline = lunr.Pipeline.load(t.pipeline), e
    }, lunr.Index.prototype.field = function (t, e) {
        var e = e || {}, n = {name: t, boost: e.boost || 1};
        return this._fields.push(n), this
    }, lunr.Index.prototype.ref = function (t) {
        return this._ref = t, this
    }, lunr.Index.prototype.add = function (t, e) {
        var n = {}, r = new lunr.SortedSet, o = t[this._ref], e = void 0 === e ? !0 : e;
        this._fields.forEach(function (e) {
            var o = this.pipeline.run(lunr.tokenizer(t[e.name]));
            n[e.name] = o, lunr.SortedSet.prototype.add.apply(r, o)
        }, this), this.documentStore.set(o, r), lunr.SortedSet.prototype.add.apply(this.corpusTokens, r.toArray());
        for (var i = 0; r.length > i; i++) {
            var s = r.elements[i], l = this._fields.reduce(function (t, e) {
                var r = n[e.name].length;
                if (!r)return t;
                var o = n[e.name].filter(function (t) {
                    return t === s
                }).length;
                return t + o / r * e.boost
            }, 0);
            this.tokenStore.add(s, {ref: o, tf: l})
        }
        e && this.eventEmitter.emit("add", t, this)
    }, lunr.Index.prototype.remove = function (t, e) {
        var n = t[this._ref], e = void 0 === e ? !0 : e;
        if (this.documentStore.has(n)) {
            var r = this.documentStore.get(n);
            this.documentStore.remove(n), r.forEach(function (t) {
                this.tokenStore.remove(t, n)
            }, this), e && this.eventEmitter.emit("remove", t, this)
        }
    }, lunr.Index.prototype.update = function (t, e) {
        var e = void 0 === e ? !0 : e;
        this.remove(t, !1), this.add(t, !1), e && this.eventEmitter.emit("update", t, this)
    }, lunr.Index.prototype.idf = function (t) {
        if (this._idfCache[t])return this._idfCache[t];
        var e = this.tokenStore.count(t), n = 1;
        return e > 0 && (n = 1 + Math.log(this.tokenStore.length / e)), this._idfCache[t] = n
    }, lunr.Index.prototype.search = function (t) {
        var e = this.pipeline.run(lunr.tokenizer(t)), n = lunr.utils.zeroFillArray(this.corpusTokens.length), r = [], o = this._fields.reduce(function (t, e) {
            return t + e.boost
        }, 0), i = e.some(function (t) {
            return this.tokenStore.has(t)
        }, this);
        if (!i)return [];
        e.forEach(function (t, e, i) {
            var s = 1 / i.length * this._fields.length * o, l = this, u = this.tokenStore.expand(t).reduce(function (e, r) {
                var o = l.corpusTokens.indexOf(r), i = l.idf(r), u = 1, a = new lunr.SortedSet;
                if (r !== t) {
                    var h = Math.max(3, r.length - t.length);
                    u = 1 / Math.log(h)
                }
                return o > -1 && (n[o] = s * i * u), Object.keys(l.tokenStore.get(r)).forEach(function (t) {
                    a.add(t)
                }), e.union(a)
            }, new lunr.SortedSet);
            r.push(u)
        }, this);
        var s = r.reduce(function (t, e) {
            return t.intersect(e)
        }), l = new lunr.Vector(n);
        return s.map(function (t) {
            return {ref: t, score: l.similarity(this.documentVector(t))}
        }, this).sort(function (t, e) {
            return e.score - t.score
        })
    }, lunr.Index.prototype.documentVector = function (t) {
        for (var e = this.documentStore.get(t), n = e.length, r = lunr.utils.zeroFillArray(this.corpusTokens.length), o = 0; n > o; o++) {
            var i = e.elements[o], s = this.tokenStore.get(i)[t].tf, l = this.idf(i);
            r[this.corpusTokens.indexOf(i)] = s * l
        }
        return new lunr.Vector(r)
    }, lunr.Index.prototype.toJSON = function () {
        return {
            version: lunr.version,
            fields: this._fields,
            ref: this._ref,
            documentStore: this.documentStore.toJSON(),
            tokenStore: this.tokenStore.toJSON(),
            corpusTokens: this.corpusTokens.toJSON(),
            pipeline: this.pipeline.toJSON()
        }
    }, lunr.Store = function () {
        this.store = {}, this.length = 0
    }, lunr.Store.load = function (t) {
        var e = new this;
        return e.length = t.length, e.store = Object.keys(t.store).reduce(function (e, n) {
            return e[n] = lunr.SortedSet.load(t.store[n]), e
        }, {}), e
    }, lunr.Store.prototype.set = function (t, e) {
        this.store[t] = e, this.length = Object.keys(this.store).length
    }, lunr.Store.prototype.get = function (t) {
        return this.store[t]
    }, lunr.Store.prototype.has = function (t) {
        return t in this.store
    }, lunr.Store.prototype.remove = function (t) {
        this.has(t) && (delete this.store[t], this.length--)
    }, lunr.Store.prototype.toJSON = function () {
        return {store: this.store, length: this.length}
    }, lunr.stemmer = function () {
        var t = {
            ational: "ate",
            tional: "tion",
            enci: "ence",
            anci: "ance",
            izer: "ize",
            bli: "ble",
            alli: "al",
            entli: "ent",
            eli: "e",
            ousli: "ous",
            ization: "ize",
            ation: "ate",
            ator: "ate",
            alism: "al",
            iveness: "ive",
            fulness: "ful",
            ousness: "ous",
            aliti: "al",
            iviti: "ive",
            biliti: "ble",
            logi: "log"
        }, e = {
            icate: "ic",
            ative: "",
            alize: "al",
            iciti: "ic",
            ical: "ic",
            ful: "",
            ness: ""
        }, n = "[^aeiou]", r = "[aeiouy]", o = n + "[^aeiouy]*", i = r + "[aeiou]*", s = "^(" + o + ")?" + i + o, l = "^(" + o + ")?" + i + o + "(" + i + ")?$", u = "^(" + o + ")?" + i + o + i + o, a = "^(" + o + ")?" + r;
        return function (n) {
            var i, h, c, p, f, d, v;
            if (3 > n.length)return n;
            if (c = n.substr(0, 1), "y" == c && (n = c.toUpperCase() + n.substr(1)), p = /^(.+?)(ss|i)es$/, f = /^(.+?)([^s])s$/, p.test(n) ? n = n.replace(p, "$1$2") : f.test(n) && (n = n.replace(f, "$1$2")), p = /^(.+?)eed$/, f = /^(.+?)(ed|ing)$/, p.test(n)) {
                var m = p.exec(n);
                p = RegExp(s), p.test(m[1]) && (p = /.$/, n = n.replace(p, ""))
            } else if (f.test(n)) {
                var m = f.exec(n);
                i = m[1], f = RegExp(a), f.test(i) && (n = i, f = /(at|bl|iz)$/, d = RegExp("([^aeiouylsz])\\1$"), v = RegExp("^" + o + r + "[^aeiouwxy]$"), f.test(n) ? n += "e" : d.test(n) ? (p = /.$/, n = n.replace(p, "")) : v.test(n) && (n += "e"))
            }
            if (p = /^(.+?)y$/, p.test(n)) {
                var m = p.exec(n);
                i = m[1], p = RegExp(a), p.test(i) && (n = i + "i")
            }
            if (p = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/, p.test(n)) {
                var m = p.exec(n);
                i = m[1], h = m[2], p = RegExp(s), p.test(i) && (n = i + t[h])
            }
            if (p = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/, p.test(n)) {
                var m = p.exec(n);
                i = m[1], h = m[2], p = RegExp(s), p.test(i) && (n = i + e[h])
            }
            if (p = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/, f = /^(.+?)(s|t)(ion)$/, p.test(n)) {
                var m = p.exec(n);
                i = m[1], p = RegExp(u), p.test(i) && (n = i)
            } else if (f.test(n)) {
                var m = f.exec(n);
                i = m[1] + m[2], f = RegExp(u), f.test(i) && (n = i)
            }
            if (p = /^(.+?)e$/, p.test(n)) {
                var m = p.exec(n);
                i = m[1], p = RegExp(u), f = RegExp(l), d = RegExp("^" + o + r + "[^aeiouwxy]$"), (p.test(i) || f.test(i) && !d.test(i)) && (n = i)
            }
            return p = /ll$/, f = RegExp(u), p.test(n) && f.test(n) && (p = /.$/, n = n.replace(p, "")), "y" == c && (n = c.toLowerCase() + n.substr(1)), n
        }
    }(), lunr.Pipeline.registerFunction(lunr.stemmer, "stemmer"), lunr.stopWordFilter = function (t) {
        return -1 === lunr.stopWordFilter.stopWords.indexOf(t) ? t : void 0
    }, lunr.stopWordFilter.stopWords = new lunr.SortedSet, lunr.stopWordFilter.stopWords.length = 119, lunr.stopWordFilter.stopWords.elements = ["", "a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"], lunr.Pipeline.registerFunction(lunr.stopWordFilter, "stopWordFilter"), lunr.TokenStore = function () {
        this.root = {docs: {}}, this.length = 0
    }, lunr.TokenStore.load = function (t) {
        var e = new this;
        return e.root = t.root, e.length = t.length, e
    }, lunr.TokenStore.prototype.add = function (t, e, n) {
        var n = n || this.root, r = t[0], o = t.slice(1);
        return r in n || (n[r] = {docs: {}}), 0 === o.length ? (n[r].docs[e.ref] = e, this.length += 1, void 0) : this.add(o, e, n[r])
    }, lunr.TokenStore.prototype.has = function (t) {
        if (!t)return !1;
        for (var e = this.root, n = 0; t.length > n; n++) {
            if (!e[t[n]])return !1;
            e = e[t[n]]
        }
        return !0
    }, lunr.TokenStore.prototype.getNode = function (t) {
        if (!t)return {};
        for (var e = this.root, n = 0; t.length > n; n++) {
            if (!e[t[n]])return {};
            e = e[t[n]]
        }
        return e
    }, lunr.TokenStore.prototype.get = function (t, e) {
        return this.getNode(t, e).docs || {}
    }, lunr.TokenStore.prototype.count = function (t, e) {
        return Object.keys(this.get(t, e)).length
    }, lunr.TokenStore.prototype.remove = function (t, e) {
        if (t) {
            for (var n = this.root, r = 0; t.length > r; r++) {
                if (!(t[r]in n))return;
                n = n[t[r]]
            }
            delete n.docs[e]
        }
    }, lunr.TokenStore.prototype.expand = function (t, e) {
        var n = this.getNode(t), r = n.docs || {}, e = e || [];
        return Object.keys(r).length && e.push(t), Object.keys(n).forEach(function (n) {
            "docs" !== n && e.concat(this.expand(t + n, e))
        }, this), e
    }, lunr.TokenStore.prototype.toJSON = function () {
        return {root: this.root, length: this.length}
    };

    //This is the main plugin definition
    $.fn.ghostHunter = function (options) {

        //Here we use jQuery's extend to set default values if they weren't set by the user
        var opts = $.extend({}, $.fn.ghostHunter.defaults, options);
        if (opts.results) {
            pluginMethods.init(this, opts);
            return pluginMethods;
        }

    };

    $.fn.ghostHunter.defaults = {
        results: false,
        rss: "/rss",
        onKeyUp: false,
        result_template: "<a href='{{link}}'><p><h2>{{title}}</h2><h4>{{pubDate}}</h4></p></a>",
        info_template: "<p>Number of posts found: {{amount}}</p>",
        displaySearchInfo: true,
        zeroResultsInfo: true,
        before: false,
        onComplete: false
    };

    var pluginMethods = {

        isInit: false,

        init: function (target, opts) {

            var that = this;
            this.target = target;
            this.rss = opts.rss;
            this.results = opts.results;
            this.blogData = [];
            this.result_template = opts.result_template;
            this.info_template = opts.info_template;
            this.zeroResultsInfo = opts.zeroResultsInfo;
            this.displaySearchInfo = opts.displaySearchInfo;
            this.before = opts.before;
            this.onComplete = opts.onComplete;

            //This is where we'll build the index for later searching. It's not a big deal to build it on every load as it takes almost no space without data
            this.index = lunr(function () {
                this.field('title', {boost: 10});
                this.field('description');
                this.field('link');
                this.field('category');
                this.field('pubDate');
                this.ref('id');
            });

            target.focus(function () {
                that.loadRSS();
            });

            target.closest("form").submit(function (e) {
                e.preventDefault();
                that.find(target.val());
            });

            if (opts.onKeyUp) {
                that.loadRSS();
                target.keyup(function () {
                    that.find(target.val());
                });

            }

        },

        loadRSS: function () {

            if (this.isInit) return false;

            /*	Here we load an rss feed, parse it and load it into the index.
             This function will not call on load to avoid unnecessary heavy
             operations on a page if a visitor never ends up searching anything. */

            var index = this.index,
                rssURL = this.rss,
                blogData = this.blogData;

            $.get(rssURL, function (data) {

                var posts = $(data).find('item');

                for (var i = 0; posts && i < posts.length; i++) {
                    var post = posts.eq(i);
                    var parsedData = {
                        id: i + 1,
                        title: post.find('title').text(),
                        description: post.find('description').text(),
                        category: post.find('category').text(),
                        pubDate: post.find('pubDate').text(),
                        link: post.find('link').text()
                    };

                    index.add(parsedData);
                    blogData.push(parsedData);
                }
                ;

            });

            this.isInit = true;

        },

        find: function (value) {
            var searchResult = this.index.search(value);
            var results = $(this.results);
            var resultsData = [];
            results.empty();

            if (this.before) {
                this.before();
            }
            ;

            if (this.zeroResultsInfo || searchResult.length > 0) {
                if (this.displaySearchInfo) results.append(this.format(this.info_template, {"amount": searchResult.length}));
            }

            for (var i = 0; i < searchResult.length; i++) {
                var postData = this.blogData[searchResult[i].ref - 1];
                results.append(this.format(this.result_template, postData));
                resultsData.push(postData);
            }

            if (this.onComplete) {
                this.onComplete(resultsData);
            }
            ;
        },

        clear: function () {
            $(this.results).empty();
            this.target.val("");
        },

        format: function (t, d) {
            return t.replace(/{{([^{}]*)}}/g, function (a, b) {
                var r = d[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            });
        }
    }

})(jQuery);

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-shiv-cssclasses-load
 */
;
window.Modernizr = function (a, b, c) {
    function u(a) {
        j.cssText = a
    }

    function v(a, b) {
        return u(prefixes.join(a + ";") + (b || ""))
    }

    function w(a, b) {
        return typeof a === b
    }

    function x(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function y(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)return d === !1 ? a[e] : w(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }

    var d = "2.6.2", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = {}, n = {}, o = {}, p = [], q = p.slice, r, s = {}.hasOwnProperty, t;
    !w(s, "undefined") && !w(s.call, "undefined") ? t = function (a, b) {
        return s.call(a, b)
    } : t = function (a, b) {
        return b in a && w(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function")throw new TypeError;
        var d = q.call(arguments, 1), e = function () {
            if (this instanceof e) {
                var a = function () {
                };
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(q.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(q.call(arguments)))
        };
        return e
    });
    for (var z in m)t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? "" : "no-") + r));
    return e.addTest = function (a, b) {
        if (typeof a == "object")for (var d in a)t(a, d) && e.addTest(d, a[d]); else {
            a = a.toLowerCase();
            if (e[a] !== c)return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, u(""), i = k = null, function (a, b) {
        function k(a, b) {
            var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function l() {
            var a = r.elements;
            return typeof a == "string" ? a.split(" ") : a
        }

        function m(a) {
            var b = i[a[g]];
            return b || (b = {}, h++, a[g] = h, i[h] = b), b
        }

        function n(a, c, f) {
            c || (c = b);
            if (j)return c.createElement(a);
            f || (f = m(c));
            var g;
            return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        }

        function o(a, c) {
            a || (a = b);
            if (j)return a.createDocumentFragment();
            c = c || m(a);
            var d = c.frag.cloneNode(), e = 0, f = l(), g = f.length;
            for (; e < g; e++)d.createElement(f[e]);
            return d
        }

        function p(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                return r.shivMethods ? n(c, a, b) : b.createElem(c)
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function (a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
            }) + ");return n}")(r, b.frag)
        }

        function q(a) {
            a || (a = b);
            var c = m(a);
            return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
        }

        var c = a.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f, g = "_html5shiv", h = 0, i = {}, j;
        (function () {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", f = "hidden"in a, j = a.childNodes.length == 1 || function () {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                }()
            } catch (c) {
                f = !0, j = !0
            }
        })();
        var r = {
            elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: c.shivCSS !== !1,
            supportsUnknownElements: j,
            shivMethods: c.shivMethods !== !1,
            type: "default",
            shivDocument: q,
            createElement: n,
            createDocumentFragment: o
        };
        a.html5 = r, q(b)
    }(this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + p.join(" ") : ""), e
}(this, this.document), function (a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }

    function e(a) {
        return "string" == typeof a
    }

    function f() {
    }

    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function () {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function () {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c])y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }

        var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {t: d, s: c, e: f, a: i, x: j};
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
            k.call(this, r)
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
        var a = B;
        return a.loader = {load: j, i: 0}, a
    }

    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) {
            return "[object Array]" == o.call(a)
        }, x = [], y = {}, z = {
        timeout: function (a, b) {
            return b.length && (a.timeout = b[0]), a
        }
    }, A, B;
    B = function (a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {
                url: c,
                origUrl: c,
                prefixes: a
            }, e, f, g;
            for (f = 0; f < d; f++)g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++)c = x[f](c);
            return c
        }

        function g(a, e, f, g, h) {
            var i = b(a), j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
            })))
        }

        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a))c || (j = function () {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l()
                    }), g(a, j, b, 0, h); else if (Object(a) === a)for (n in m = function () {
                        var b = 0, c;
                        for (c in a)a.hasOwnProperty(c) && b++;
                        return b
                    }(), a)a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l()
                    } : j[n] = function (a) {
                        return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l()
                        }
                    }(k[n])), g(a[n], j, b, n, h))
                } else!c && l()
            }

            var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i), i && c(i)
        }

        var i, j, l = this.yepnope.loader;
        if (e(a))g(a, 0, l, 0); else if (w(a))for (i = 0; i < a.length; i++)j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l)
    }, B.addPrefix = function (a, b) {
        z[a] = b
    }, B.addFilter = function (a) {
        x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d)k.setAttribute(o, d[o]);
        c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        }, m(function () {
            l || (l = 1, c(1))
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d)e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
};

/**
 * uisearch.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */

(function (window) {

    'use strict';

    // EventListener | @jon_neal | //github.com/jonathantneal/EventListener
    !window.addEventListener && window.Element && (function () {
        function addToPrototype(name, method) {
            Window.prototype[name] = HTMLDocument.prototype[name] = Element.prototype[name] = method;
        }

        var registry = [];

        addToPrototype("addEventListener", function (type, listener) {
            var target = this;

            registry.unshift({
                __listener: function (event) {
                    event.currentTarget = target;
                    event.pageX = event.clientX + document.documentElement.scrollLeft;
                    event.pageY = event.clientY + document.documentElement.scrollTop;
                    event.preventDefault = function () {
                        event.returnValue = false
                    };
                    event.relatedTarget = event.fromElement || null;
                    event.stopPropagation = function () {
                        event.cancelBubble = true
                    };
                    event.relatedTarget = event.fromElement || null;
                    event.target = event.srcElement || target;
                    event.timeStamp = +new Date;

                    listener.call(target, event);
                },
                listener: listener,
                target: target,
                type: type
            });

            this.attachEvent("on" + type, registry[0].__listener);
        });

        addToPrototype("removeEventListener", function (type, listener) {
            for (var index = 0, length = registry.length; index < length; ++index) {
                if (registry[index].target == this && registry[index].type == type && registry[index].listener == listener) {
                    return this.detachEvent("on" + type, registry.splice(index, 1)[0].__listener);
                }
            }
        });

        addToPrototype("dispatchEvent", function (eventObject) {
            try {
                return this.fireEvent("on" + eventObject.type, eventObject);
            } catch (error) {
                for (var index = 0, length = registry.length; index < length; ++index) {
                    if (registry[index].target == this && registry[index].type == eventObject.type) {
                        registry[index].call(this, eventObject);
                    }
                }
            }
        });
    })();

    // http://stackoverflow.com/a/11381730/989439
    function mobilecheck() {
        var check = false;
        (function (a) {
            if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    // http://www.jonathantneal.com/blog/polyfills-and-prototypes/
    !String.prototype.trim && (String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    });

    function UISearch(el, options) {
        this.search = null;
        this.el = el;
        this.inputEl = el.querySelector('input.search-input');
        this._initEvents();
    }

    UISearch.prototype = {
        _initEvents: function () {
            var self = this,
                initSearchFn = function (ev) {
                    ev.stopPropagation();
                    // trim its value
                    self.inputEl.value = self.inputEl.value.trim();

                    if (!classie.has(self.el, 'search-open')) { // open it
                        ev.preventDefault();
                        self.open();
                    }
                    else if (classie.has(self.el, 'search-open') && /^\s*$/.test(self.inputEl.value)) { // close it
                        ev.preventDefault();
                        self.close();
                    }
                }

            this.el.addEventListener('click', initSearchFn);
            this.el.addEventListener('touchstart', initSearchFn);
            this.inputEl.addEventListener('click', function (ev) {
                ev.stopPropagation();
            });
            this.inputEl.addEventListener('touchstart', function (ev) {
                ev.stopPropagation();
            });
        },
        open: function () {
            var self = this;
            classie.add(this.el, 'search-open');
            // focus the input
            if (!mobilecheck()) {
                this.inputEl.focus();
            }
            // close the search input if body is clicked
            var bodyFn = function (ev) {
                self.close();
                this.removeEventListener('click', bodyFn);
                this.removeEventListener('touchstart', bodyFn);
            };
            document.addEventListener('click', bodyFn);
            document.addEventListener('touchstart', bodyFn);
            $('.list-inline').css('display', 'none');
            setTimeout(function () {
                $('#search').addClass('search-padding');
                $('.search-input').addClass('search-padding');
            }, 100);

            if (!self.search) {
                self.search = $(".search-input").ghostHunter({
                    results: ".search-results",
                    onKeyUp: true,
                    rss: "/rss/",
                    info_template: "<span class='search-clear-toggle'>&#215;</span> <span class='search-results-amount'>Number of posts found: {{amount}}</span><span class='clearfix'></span>",
                    result_template: "<span><a href='{{link}}'><span class='search-results-title'>{{title}}</span></a></span>",
                    onComplete: function () {
                        $('.search-results').addClass('search-active');
                    }
                });
            }
        },
        close: function () {
            this.inputEl.blur();
            classie.remove(this.el, 'search-open');
            $('.search-input').removeClass('search-padding');
            $('#search').removeClass('search-padding');
            $('.search-results').removeClass('search-active');
            setTimeout(function () {
                $('.list-inline').css('display', '');
            }, 200)
            $('.search-input').val('');
        }
    }

    // add to global namespace
    window.UISearch = UISearch;

})(window);
