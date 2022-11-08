import{g as Sg,c as Yf}from"./chunks/commonjsHelpers.2a13f249.js";import{s as Eg,F as Tg,o as Ag,c as Cg,b as Lg,_ as Dg,a as Up}from"./app.be5c774d.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wh="146",Rg=0,jf=1,Pg=2,Op=1,Fg=2,Qs=3,Ha=0,ti=1,ir=2,or=0,Na=1,$f=2,Zf=3,Jf=4,Ig=5,Fa=100,Ug=101,Og=102,Kf=103,Qf=104,Ng=200,zg=201,Bg=202,Gg=203,Np=204,zp=205,kg=206,Vg=207,Hg=208,Wg=209,Xg=210,qg=0,Yg=1,jg=2,$u=3,$g=4,Zg=5,Jg=6,Kg=7,Bp=0,Qg=1,t0=2,Gi=0,e0=1,n0=2,i0=3,r0=4,a0=5,Gp=300,Wa=301,Xa=302,Zu=303,Ju=304,Ol=306,Ku=1e3,hi=1001,Qu=1002,vn=1003,td=1004,ed=1005,Yn=1006,s0=1007,Nl=1008,Vr=1009,o0=1010,c0=1011,kp=1012,l0=1013,Cr=1014,Lr=1015,co=1016,u0=1017,h0=1018,za=1020,f0=1021,d0=1022,fi=1023,p0=1024,m0=1025,Fr=1026,qa=1027,v0=1028,g0=1029,_0=1030,y0=1031,x0=1033,iu=33776,ru=33777,au=33778,su=33779,nd=35840,id=35841,rd=35842,ad=35843,M0=36196,sd=37492,od=37496,cd=37808,ld=37809,ud=37810,hd=37811,fd=37812,dd=37813,pd=37814,md=37815,vd=37816,gd=37817,_d=37818,yd=37819,xd=37820,Md=37821,bd=36492,Hr=3e3,Re=3001,b0=3200,w0=3201,S0=0,E0=1,Fi="srgb",Dr="srgb-linear",ou=7680,T0=519,wd=35044,Sd="300 es",th=1035;class ks{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cu=Math.PI/180,Ed=180/Math.PI;function oc(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[e&255]+en[e>>8&255]+en[e>>16&255]+en[e>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function Rn(e,t,n){return Math.max(t,Math.min(n,e))}function A0(e,t){return(e%t+t)%t}function lu(e,t,n){return(1-n)*e+n*t}function Td(e){return(e&e-1)===0&&e!==0}function eh(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function xc(e,t){switch(t.constructor){case Float32Array:return e;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function An(e,t){switch(t.constructor){case Float32Array:return e;case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class be{constructor(t=0,n=0){be.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-t.x,s=this.y-t.y;return this.x=a*i-s*r+t.x,this.y=a*r+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zn{constructor(){Zn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,n,i,r,a,s,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],v=i[8],p=r[0],m=r[3],g=r[6],y=r[1],_=r[4],x=r[7],M=r[2],S=r[5],E=r[8];return a[0]=s*p+o*y+l*M,a[3]=s*m+o*_+l*S,a[6]=s*g+o*x+l*E,a[1]=c*p+u*y+h*M,a[4]=c*m+u*_+h*S,a[7]=c*g+u*x+h*E,a[2]=f*p+d*y+v*M,a[5]=f*m+d*_+v*S,a[8]=f*g+d*x+v*E,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],a=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*s*u-n*o*c-i*a*u+i*o*l+r*a*c-r*s*l}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],a=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*s-o*c,f=o*l-u*a,d=c*a-s*l,v=n*h+i*f+r*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return t[0]=h*p,t[1]=(r*c-u*i)*p,t[2]=(o*i-r*s)*p,t[3]=f*p,t[4]=(u*n-r*l)*p,t[5]=(r*a-o*n)*p,t[6]=d*p,t[7]=(i*l-c*n)*p,t[8]=(s*n-i*a)*p,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+t,-r*c,r*l,-r*(-c*s+l*o)+o+n,0,0,1),this}scale(t,n){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(t){const n=Math.cos(t),i=Math.sin(t),r=this.elements,a=r[0],s=r[3],o=r[6],l=r[1],c=r[4],u=r[7];return r[0]=n*a+i*l,r[3]=n*s+i*c,r[6]=n*o+i*u,r[1]=-i*a+n*l,r[4]=-i*s+n*c,r[7]=-i*o+n*u,this}translate(t,n){const i=this.elements;return i[0]+=t*i[2],i[3]+=t*i[5],i[6]+=t*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function Vp(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Jc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Ir(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Wc(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}const uu={[Fi]:{[Dr]:Ir},[Dr]:{[Fi]:Wc}},si={legacyMode:!0,get workingColorSpace(){return Dr},set workingColorSpace(e){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(e,t,n){if(this.legacyMode||t===n||!t||!n)return e;if(uu[t]&&uu[t][n]!==void 0){const i=uu[t][n];return e.r=i(e.r),e.g=i(e.g),e.b=i(e.b),e}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)}},Hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ve={r:0,g:0,b:0},oi={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function hu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function bc(e,t){return t.r=e.r,t.g=e.g,t.b=e.b,t}class we{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(t):this.setRGB(t,n,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,si.toWorkingColorSpace(this,n),this}setRGB(t,n,i,r=Dr){return this.r=t,this.g=n,this.b=i,si.toWorkingColorSpace(this,r),this}setHSL(t,n,i,r=Dr){if(t=A0(t,1),n=Rn(n,0,1),i=Rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,s=2*i-a;this.r=hu(s,a,t+1/3),this.g=hu(s,a,t),this.b=hu(s,a,t-1/3)}return si.toWorkingColorSpace(this,r),this}setStyle(t,n=Fi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,si.toWorkingColorSpace(this,n),i(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,si.toWorkingColorSpace(this,n),i(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(a[1])/360,c=parseFloat(a[2])/100,u=parseFloat(a[3])/100;return i(a[4]),this.setHSL(l,c,u,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=r[1],s=a.length;if(s===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,si.toWorkingColorSpace(this,n),this;if(s===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,si.toWorkingColorSpace(this,n),this}return t&&t.length>0?this.setColorName(t,n):this}setColorName(t,n=Fi){const i=Hp[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}copyLinearToSRGB(t){return this.r=Wc(t.r),this.g=Wc(t.g),this.b=Wc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fi){return si.fromWorkingColorSpace(bc(this,Ve),t),Rn(Ve.r*255,0,255)<<16^Rn(Ve.g*255,0,255)<<8^Rn(Ve.b*255,0,255)<<0}getHexString(t=Fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Dr){si.fromWorkingColorSpace(bc(this,Ve),n);const i=Ve.r,r=Ve.g,a=Ve.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case i:l=(r-a)/h+(r<a?6:0);break;case r:l=(a-i)/h+2;break;case a:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=Dr){return si.fromWorkingColorSpace(bc(this,Ve),n),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Fi){return si.fromWorkingColorSpace(bc(this,Ve),t),t!==Fi?`color(${t} ${Ve.r} ${Ve.g} ${Ve.b})`:`rgb(${Ve.r*255|0},${Ve.g*255|0},${Ve.b*255|0})`}offsetHSL(t,n,i){return this.getHSL(oi),oi.h+=t,oi.s+=n,oi.l+=i,this.setHSL(oi.h,oi.s,oi.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(oi),t.getHSL(Mc);const i=lu(oi.h,Mc.h,n),r=lu(oi.s,Mc.s,n),a=lu(oi.l,Mc.l,n);return this.setHSL(i,r,a),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}we.NAMES=Hp;let _a;class Wp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{_a===void 0&&(_a=Jc("canvas")),_a.width=t.width,_a.height=t.height;const i=_a.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=_a}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Jc("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Ir(a[s]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ir(n[i]/255)*255):n[i]=Ir(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Xp{constructor(t=null){this.isSource=!0,this.uuid=oc(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(fu(r[s].image)):a.push(fu(r[s]))}else a=fu(r);i.url=a}return n||(t.images[this.uuid]=i),i}}function fu(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Wp.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let C0=0;class mi extends ks{constructor(t=mi.DEFAULT_IMAGE,n=mi.DEFAULT_MAPPING,i=hi,r=hi,a=Yn,s=Nl,o=fi,l=Vr,c=1,u=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=oc(),this.name="",this.source=new Xp(t),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ku:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case Qu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ku:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case Qu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}mi.DEFAULT_IMAGE=null;mi.DEFAULT_MAPPING=Gp;class Ke{constructor(t=0,n=0,i=0,r=1){Ke.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,a=this.w,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,a;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],v=l[9],p=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,x=(d+1)/2,M=(g+1)/2,S=(u+f)/4,E=(h+p)/4,b=(v+m)/4;return _>x&&_>M?_<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(_),r=S/i,a=E/i):x>M?x<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(x),i=S/r,a=b/r):M<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(M),i=E/a,r=b/a),this.set(i,r,a,n),this}let y=Math.sqrt((m-v)*(m-v)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(h-p)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wr extends ks{constructor(t=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Ke(0,0,t,n),this.scissorTest=!1,this.viewport=new Ke(0,0,t,n);const r={width:t,height:n,depth:1};this.texture=new mi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Yn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,n,i=1){(this.width!==t||this.height!==n||this.depth!==i)&&(this.width=t,this.height=n,this.depth=i,this.texture.image.width=t,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Xp(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qp extends mi{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class L0 extends mi{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cc{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,a,s,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=a[s+0],d=a[s+1],v=a[s+2],p=a[s+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=u,t[n+3]=h;return}if(o===1){t[n+0]=f,t[n+1]=d,t[n+2]=v,t[n+3]=p;return}if(h!==p||l!==f||c!==d||u!==v){let m=1-o;const g=l*f+c*d+u*v+h*p,y=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const M=Math.sqrt(_),S=Math.atan2(M,g*y);m=Math.sin(m*S)/M,o=Math.sin(o*S)/M}const x=o*y;if(l=l*m+f*x,c=c*m+d*x,u=u*m+v*x,h=h*m+p*x,m===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=a[s],f=a[s+1],d=a[s+2],v=a[s+3];return t[n]=o*v+u*h+l*d-c*f,t[n+1]=l*v+u*f+c*h-o*d,t[n+2]=c*v+u*d+o*f-l*h,t[n+3]=u*v-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n){const i=t._x,r=t._y,a=t._z,s=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(a/2),f=l(i/2),d=l(r/2),v=l(a/2);switch(s){case"XYZ":this._x=f*u*h+c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h-f*d*v;break;case"YXZ":this._x=f*u*h+c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h+f*d*v;break;case"ZXY":this._x=f*u*h-c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h-f*d*v;break;case"ZYX":this._x=f*u*h-c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h+f*d*v;break;case"YZX":this._x=f*u*h+c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h-f*d*v;break;case"XZY":this._x=f*u*h-c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],a=n[8],s=n[1],o=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(a-c)*d,this._z=(s-r)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(a+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(a-c)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(s-r)/d,this._x=(a+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Rn(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,a=t._z,s=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+s*o+r*c-a*l,this._y=r*u+s*l+a*o-i*c,this._z=a*u+s*c+i*l-r*o,this._w=s*u-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*t._w+i*t._x+r*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-n;return this._w=d*s+n*this._w,this._x=d*i+n*this._x,this._y=d*r+n*this._y,this._z=d*a+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=s*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=Math.random(),n=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(a),i*Math.cos(a),n*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,n=0,i=0){Q.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Ad.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Ad.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,a=t.elements,s=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,a=t.x,s=t.y,o=t.z,l=t.w,c=l*n+s*r-o*i,u=l*i+o*n-a*r,h=l*r+a*i-s*n,f=-a*n-s*i-o*r;return this.x=c*l+f*-a+u*-o-h*-s,this.y=u*l+f*-s+h*-a-c*-o,this.z=h*l+f*-o+c*-s-u*-a,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,a=t.z,s=n.x,o=n.y,l=n.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return du.copy(this).projectOnVector(t),this.sub(du)}reflect(t){return this.sub(du.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Rn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const du=new Q,Ad=new cc;class lc{constructor(t=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){let n=1/0,i=1/0,r=1/0,a=-1/0,s=-1/0,o=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],h=t[l+1],f=t[l+2];u<n&&(n=u),h<i&&(i=h),f<r&&(r=f),u>a&&(a=u),h>s&&(s=h),f>o&&(o=f)}return this.min.set(n,i,r),this.max.set(a,s,o),this}setFromBufferAttribute(t){let n=1/0,i=1/0,r=1/0,a=-1/0,s=-1/0,o=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),h=t.getY(l),f=t.getZ(l);u<n&&(n=u),h<i&&(i=h),f<r&&(r=f),u>a&&(a=u),h>s&&(s=h),f>o&&(o=f)}return this.min.set(n,i,r),this.max.set(a,s,o),this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=yr.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const a=i.attributes.position;for(let s=0,o=a.count;s<o;s++)yr.fromBufferAttribute(a,s).applyMatrix4(t.matrixWorld),this.expandByPoint(yr)}else i.boundingBox===null&&i.computeBoundingBox(),pu.copy(i.boundingBox),pu.applyMatrix4(t.matrixWorld),this.union(pu);const r=t.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,yr),yr.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),wc.subVectors(this.max,js),ya.subVectors(t.a,js),xa.subVectors(t.b,js),Ma.subVectors(t.c,js),Zi.subVectors(xa,ya),Ji.subVectors(Ma,xa),xr.subVectors(ya,Ma);let n=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-xr.z,xr.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,xr.z,0,-xr.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-xr.y,xr.x,0];return!mu(n,ya,xa,Ma,wc)||(n=[1,0,0,0,1,0,0,0,1],!mu(n,ya,xa,Ma,wc))?!1:(Sc.crossVectors(Zi,Ji),n=[Sc.x,Sc.y,Sc.z],mu(n,ya,xa,Ma,wc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return yr.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(yr).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ci=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],yr=new Q,pu=new lc,ya=new Q,xa=new Q,Ma=new Q,Zi=new Q,Ji=new Q,xr=new Q,js=new Q,wc=new Q,Sc=new Q,Mr=new Q;function mu(e,t,n,i,r){for(let a=0,s=e.length-3;a<=s;a+=3){Mr.fromArray(e,a);const o=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),l=t.dot(Mr),c=n.dot(Mr),u=i.dot(Mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const D0=new lc,$s=new Q,vu=new Q;class zl{constructor(t=new Q,n=-1){this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):D0.setFromPoints(t).getCenter(i);let r=0;for(let a=0,s=t.length;a<s;a++)r=Math.max(r,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);const n=$s.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector($s,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(vu)),this.expandByPoint($s.copy(t.center).sub(vu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new Q,gu=new Q,Ec=new Q,Ki=new Q,_u=new Q,Tc=new Q,yu=new Q;class Yp{constructor(t=new Q,n=new Q(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Li.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Li.copy(this.direction).multiplyScalar(n).add(this.origin),Li.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){gu.copy(t).add(n).multiplyScalar(.5),Ec.copy(n).sub(t).normalize(),Ki.copy(this.origin).sub(gu);const a=t.distanceTo(n)*.5,s=-this.direction.dot(Ec),o=Ki.dot(this.direction),l=-Ki.dot(Ec),c=Ki.lengthSq(),u=Math.abs(1-s*s);let h,f,d,v;if(u>0)if(h=s*l-o,f=s*o-l,v=a*u,h>=0)if(f>=-v)if(f<=v){const p=1/u;h*=p,f*=p,d=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=a,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;else f=-a,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-s*a+o)),f=h>0?-a:Math.min(Math.max(-a,-l),a),d=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-a,-l),a),d=f*(f+2*l)+c):(h=Math.max(0,-(s*a+o)),f=h>0?a:Math.min(Math.max(-a,-l),a),d=-h*h+f*(f+2*l)+c);else f=s>0?-a:a,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Ec).multiplyScalar(f).add(gu),d}intersectSphere(t,n){Li.subVectors(t.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,a=t.radius*t.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return o<0&&l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(a=(t.min.y-f.y)*u,s=(t.max.y-f.y)*u):(a=(t.max.y-f.y)*u,s=(t.min.y-f.y)*u),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,n,i,r,a){_u.subVectors(n,t),Tc.subVectors(i,t),yu.crossVectors(_u,Tc);let s=this.direction.dot(yu),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Ki.subVectors(this.origin,t);const l=o*this.direction.dot(Tc.crossVectors(Ki,Tc));if(l<0)return null;const c=o*this.direction.dot(_u.cross(Ki));if(c<0||l+c>s)return null;const u=-o*Ki.dot(yu);return u<0?null:this.at(u/s,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,n,i,r,a,s,o,l,c,u,h,f,d,v,p,m){const g=this.elements;return g[0]=t,g[4]=n,g[8]=i,g[12]=r,g[1]=a,g[5]=s,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=v,g[11]=p,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/ba.setFromMatrixColumn(t,0).length(),a=1/ba.setFromMatrixColumn(t,1).length(),s=1/ba.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,a=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),h=Math.sin(a);if(t.order==="XYZ"){const f=s*u,d=s*h,v=o*u,p=o*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=d+v*c,n[5]=f-p*c,n[9]=-o*l,n[2]=p-f*c,n[6]=v+d*c,n[10]=s*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,v=c*u,p=c*h;n[0]=f+p*o,n[4]=v*o-d,n[8]=s*c,n[1]=s*h,n[5]=s*u,n[9]=-o,n[2]=d*o-v,n[6]=p+f*o,n[10]=s*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,v=c*u,p=c*h;n[0]=f-p*o,n[4]=-s*h,n[8]=v+d*o,n[1]=d+v*o,n[5]=s*u,n[9]=p-f*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(t.order==="ZYX"){const f=s*u,d=s*h,v=o*u,p=o*h;n[0]=l*u,n[4]=v*c-d,n[8]=f*c+p,n[1]=l*h,n[5]=p*c+f,n[9]=d*c-v,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(t.order==="YZX"){const f=s*l,d=s*c,v=o*l,p=o*c;n[0]=l*u,n[4]=p-f*h,n[8]=v*h+d,n[1]=h,n[5]=s*u,n[9]=-o*u,n[2]=-c*u,n[6]=d*h+v,n[10]=f-p*h}else if(t.order==="XZY"){const f=s*l,d=s*c,v=o*l,p=o*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+p,n[5]=s*u,n[9]=d*h-v,n[2]=v*h-d,n[6]=o*u,n[10]=p*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(R0,t,P0)}lookAt(t,n,i){const r=this.elements;return Cn.subVectors(t,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Qi.crossVectors(i,Cn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Qi.crossVectors(i,Cn)),Qi.normalize(),Ac.crossVectors(Cn,Qi),r[0]=Qi.x,r[4]=Ac.x,r[8]=Cn.x,r[1]=Qi.y,r[5]=Ac.y,r[9]=Cn.y,r[2]=Qi.z,r[6]=Ac.z,r[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],v=i[2],p=i[6],m=i[10],g=i[14],y=i[3],_=i[7],x=i[11],M=i[15],S=r[0],E=r[4],b=r[8],w=r[12],L=r[1],G=r[5],H=r[9],C=r[13],T=r[2],R=r[6],N=r[10],V=r[14],z=r[3],I=r[7],B=r[11],Z=r[15];return a[0]=s*S+o*L+l*T+c*z,a[4]=s*E+o*G+l*R+c*I,a[8]=s*b+o*H+l*N+c*B,a[12]=s*w+o*C+l*V+c*Z,a[1]=u*S+h*L+f*T+d*z,a[5]=u*E+h*G+f*R+d*I,a[9]=u*b+h*H+f*N+d*B,a[13]=u*w+h*C+f*V+d*Z,a[2]=v*S+p*L+m*T+g*z,a[6]=v*E+p*G+m*R+g*I,a[10]=v*b+p*H+m*N+g*B,a[14]=v*w+p*C+m*V+g*Z,a[3]=y*S+_*L+x*T+M*z,a[7]=y*E+_*G+x*R+M*I,a[11]=y*b+_*H+x*N+M*B,a[15]=y*w+_*C+x*V+M*Z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],a=t[12],s=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],v=t[3],p=t[7],m=t[11],g=t[15];return v*(+a*l*h-r*c*h-a*o*f+i*c*f+r*o*d-i*l*d)+p*(+n*l*d-n*c*f+a*s*f-r*s*d+r*c*u-a*l*u)+m*(+n*c*h-n*o*d-a*s*h+i*s*d+a*o*u-i*c*u)+g*(-r*o*u-n*l*h+n*o*f+r*s*h-i*s*f+i*l*u)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],a=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],v=t[12],p=t[13],m=t[14],g=t[15],y=h*m*c-p*f*c+p*l*d-o*m*d-h*l*g+o*f*g,_=v*f*c-u*m*c-v*l*d+s*m*d+u*l*g-s*f*g,x=u*p*c-v*h*c+v*o*d-s*p*d-u*o*g+s*h*g,M=v*h*l-u*p*l-v*o*f+s*p*f+u*o*m-s*h*m,S=n*y+i*_+r*x+a*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/S;return t[0]=y*E,t[1]=(p*f*a-h*m*a-p*r*d+i*m*d+h*r*g-i*f*g)*E,t[2]=(o*m*a-p*l*a+p*r*c-i*m*c-o*r*g+i*l*g)*E,t[3]=(h*l*a-o*f*a-h*r*c+i*f*c+o*r*d-i*l*d)*E,t[4]=_*E,t[5]=(u*m*a-v*f*a+v*r*d-n*m*d-u*r*g+n*f*g)*E,t[6]=(v*l*a-s*m*a-v*r*c+n*m*c+s*r*g-n*l*g)*E,t[7]=(s*f*a-u*l*a+u*r*c-n*f*c-s*r*d+n*l*d)*E,t[8]=x*E,t[9]=(v*h*a-u*p*a-v*i*d+n*p*d+u*i*g-n*h*g)*E,t[10]=(s*p*a-v*o*a+v*i*c-n*p*c-s*i*g+n*o*g)*E,t[11]=(u*o*a-s*h*a-u*i*c+n*h*c+s*i*d-n*o*d)*E,t[12]=M*E,t[13]=(u*p*r-v*h*r+v*i*f-n*p*f-u*i*m+n*h*m)*E,t[14]=(v*o*r-s*p*r-v*i*l+n*p*l+s*i*m-n*o*m)*E,t[15]=(s*h*r-u*o*r+u*i*l-n*h*l-s*i*f+n*o*f)*E,this}scale(t){const n=this.elements,i=t.x,r=t.y,a=t.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,s=t.x,o=t.y,l=t.z,c=a*s,u=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*s,0,c*l-r*o,u*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,a,s){return this.set(1,i,a,0,t,1,s,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,a=n._x,s=n._y,o=n._z,l=n._w,c=a+a,u=s+s,h=o+o,f=a*c,d=a*u,v=a*h,p=s*u,m=s*h,g=o*h,y=l*c,_=l*u,x=l*h,M=i.x,S=i.y,E=i.z;return r[0]=(1-(p+g))*M,r[1]=(d+x)*M,r[2]=(v-_)*M,r[3]=0,r[4]=(d-x)*S,r[5]=(1-(f+g))*S,r[6]=(m+y)*S,r[7]=0,r[8]=(v+_)*E,r[9]=(m-y)*E,r[10]=(1-(f+p))*E,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let a=ba.set(r[0],r[1],r[2]).length();const s=ba.set(r[4],r[5],r[6]).length(),o=ba.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),t.x=r[12],t.y=r[13],t.z=r[14],ci.copy(this);const c=1/a,u=1/s,h=1/o;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=h,ci.elements[9]*=h,ci.elements[10]*=h,n.setFromRotationMatrix(ci),i.x=a,i.y=s,i.z=o,this}makePerspective(t,n,i,r,a,s){const o=this.elements,l=2*a/(n-t),c=2*a/(i-r),u=(n+t)/(n-t),h=(i+r)/(i-r),f=-(s+a)/(s-a),d=-2*s*a/(s-a);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,n,i,r,a,s){const o=this.elements,l=1/(n-t),c=1/(i-r),u=1/(s-a),h=(n+t)*l,f=(i+r)*c,d=(s+a)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const ba=new Q,ci=new je,R0=new Q(0,0,0),P0=new Q(1,1,1),Qi=new Q,Ac=new Q,Cn=new Q,Cd=new je,Ld=new cc;class uc{constructor(t=0,n=0,i=0,r=uc.DefaultOrder){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(n){case"XYZ":this._y=Math.asin(Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Rn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Cd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cd,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Ld.setFromEuler(this),this.setFromQuaternion(Ld,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}uc.DefaultOrder="XYZ";uc.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class jp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let F0=0;const Dd=new Q,wa=new cc,Di=new je,Cc=new Q,Zs=new Q,I0=new Q,U0=new cc,Rd=new Q(1,0,0),Pd=new Q(0,1,0),Fd=new Q(0,0,1),O0={type:"added"},Id={type:"removed"};class _n extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=oc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DefaultUp.clone();const t=new Q,n=new uc,i=new cc,r=new Q(1,1,1);function a(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new je},normalMatrix:{value:new Zn}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=_n.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_n.DefaultMatrixWorldAutoUpdate,this.layers=new jp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return wa.setFromAxisAngle(t,n),this.quaternion.multiply(wa),this}rotateOnWorldAxis(t,n){return wa.setFromAxisAngle(t,n),this.quaternion.premultiply(wa),this}rotateX(t){return this.rotateOnAxis(Rd,t)}rotateY(t){return this.rotateOnAxis(Pd,t)}rotateZ(t){return this.rotateOnAxis(Fd,t)}translateOnAxis(t,n){return Dd.copy(t).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Rd,t)}translateY(t){return this.translateOnAxis(Pd,t)}translateZ(t){return this.translateOnAxis(Fd,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Cc.copy(t):Cc.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Zs,Cc,this.up):Di.lookAt(Cc,Zs,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),wa.setFromRotationMatrix(Di),this.quaternion.premultiply(wa.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(O0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Id)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const n=this.children[t];n.parent=null,n.dispatchEvent(Id)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,I0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,U0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const a=n[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];a(t.shapes,h)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));r.material=o}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(t.animations,l))}}if(n){const o=s(t.geometries),l=s(t.materials),c=s(t.textures),u=s(t.images),h=s(t.shapes),f=s(t.skeletons),d=s(t.animations),v=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=r,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}_n.DefaultUp=new Q(0,1,0);_n.DefaultMatrixAutoUpdate=!0;_n.DefaultMatrixWorldAutoUpdate=!0;const li=new Q,Ri=new Q,xu=new Q,Pi=new Q,Sa=new Q,Ea=new Q,Ud=new Q,Mu=new Q,bu=new Q,wu=new Q;class Oi{constructor(t=new Q,n=new Q,i=new Q){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),li.subVectors(t,n),r.cross(li);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,n,i,r,a){li.subVectors(r,n),Ri.subVectors(i,n),xu.subVectors(t,n);const s=li.dot(li),o=li.dot(Ri),l=li.dot(xu),c=Ri.dot(Ri),u=Ri.dot(xu),h=s*c-o*o;if(h===0)return a.set(-2,-1,-1);const f=1/h,d=(c*l-o*u)*f,v=(s*u-o*l)*f;return a.set(1-d-v,v,d)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,Pi),Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getUV(t,n,i,r,a,s,o,l){return this.getBarycoord(t,n,i,r,Pi),l.set(0,0),l.addScaledVector(a,Pi.x),l.addScaledVector(s,Pi.y),l.addScaledVector(o,Pi.z),l}static isFrontFacing(t,n,i,r){return li.subVectors(i,n),Ri.subVectors(t,n),li.cross(Ri).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),li.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Oi.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,i,r,a){return Oi.getUV(t,this.a,this.b,this.c,n,i,r,a)}containsPoint(t){return Oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,a=this.c;let s,o;Sa.subVectors(r,i),Ea.subVectors(a,i),Mu.subVectors(t,i);const l=Sa.dot(Mu),c=Ea.dot(Mu);if(l<=0&&c<=0)return n.copy(i);bu.subVectors(t,r);const u=Sa.dot(bu),h=Ea.dot(bu);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(i).addScaledVector(Sa,s);wu.subVectors(t,a);const d=Sa.dot(wu),v=Ea.dot(wu);if(v>=0&&d<=v)return n.copy(a);const p=d*c-l*v;if(p<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Ea,o);const m=u*v-d*h;if(m<=0&&h-u>=0&&d-v>=0)return Ud.subVectors(a,r),o=(h-u)/(h-u+(d-v)),n.copy(r).addScaledVector(Ud,o);const g=1/(m+p+f);return s=p*g,o=f*g,n.copy(i).addScaledVector(Sa,s).addScaledVector(Ea,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let N0=0;class hc extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=oc(),this.name="",this.type="Material",this.blending=Na,this.side=Ha,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Np,this.blendDst=zp,this.blendEquation=Fa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$u,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ou,this.stencilZFail=ou,this.stencilZPass=ou,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Na&&(i.blending=this.blending),this.side!==Ha&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(n){const a=r(t.textures),s=r(t.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Xh extends hc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new Q,Lc=new be;class Mi{constructor(t,n,i){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i===!0,this.usage=wd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Lc.fromBufferAttribute(this,n),Lc.applyMatrix3(t),this.setXY(n,Lc.x,Lc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ze.fromBufferAttribute(this,n),ze.applyMatrix3(t),this.setXYZ(n,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)ze.fromBufferAttribute(this,n),ze.applyMatrix4(t),this.setXYZ(n,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)ze.fromBufferAttribute(this,n),ze.applyNormalMatrix(t),this.setXYZ(n,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)ze.fromBufferAttribute(this,n),ze.transformDirection(t),this.setXYZ(n,ze.x,ze.y,ze.z);return this}set(t,n=0){return this.array.set(t,n),this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=xc(n,this.array)),n}setX(t,n){return this.normalized&&(n=An(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=xc(n,this.array)),n}setY(t,n){return this.normalized&&(n=An(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=xc(n,this.array)),n}setZ(t,n){return this.normalized&&(n=An(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=xc(n,this.array)),n}setW(t,n){return this.normalized&&(n=An(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array),r=An(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,a){return t*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array),r=An(r,this.array),a=An(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wd&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class $p extends Mi{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Zp extends Mi{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class di extends Mi{constructor(t,n,i){super(new Float32Array(t),n,i)}}let z0=0;const Wn=new je,Su=new _n,Ta=new Q,Ln=new lc,Js=new lc,Ye=new Q;class ji extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=oc(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vp(t)?Zp:$p)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Zn().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,n,i){return Wn.makeTranslation(t,n,i),this.applyMatrix4(Wn),this}scale(t,n,i){return Wn.makeScale(t,n,i),this.applyMatrix4(Wn),this}lookAt(t){return Su.lookAt(t),Su.updateMatrix(),this.applyMatrix4(Su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ta).negate(),this.translate(Ta.x,Ta.y,Ta.z),this}setFromPoints(t){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new di(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lc);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];Ln.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q,1/0);return}if(t){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),n)for(let a=0,s=n.length;a<s;a++){const o=n[a];Js.setFromBufferAttribute(o),this.morphTargetsRelative?(Ye.addVectors(Ln.min,Js.min),Ln.expandByPoint(Ye),Ye.addVectors(Ln.max,Js.max),Ln.expandByPoint(Ye)):(Ln.expandByPoint(Js.min),Ln.expandByPoint(Js.max))}Ln.getCenter(i);let r=0;for(let a=0,s=t.count;a<s;a++)Ye.fromBufferAttribute(t,a),r=Math.max(r,i.distanceToSquared(Ye));if(n)for(let a=0,s=n.length;a<s;a++){const o=n[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ye.fromBufferAttribute(o,c),l&&(Ta.fromBufferAttribute(t,c),Ye.add(Ta)),r=Math.max(r,i.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=n.position.array,a=n.normal.array,s=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<o;L++)c[L]=new Q,u[L]=new Q;const h=new Q,f=new Q,d=new Q,v=new be,p=new be,m=new be,g=new Q,y=new Q;function _(L,G,H){h.fromArray(r,L*3),f.fromArray(r,G*3),d.fromArray(r,H*3),v.fromArray(s,L*2),p.fromArray(s,G*2),m.fromArray(s,H*2),f.sub(h),d.sub(h),p.sub(v),m.sub(v);const C=1/(p.x*m.y-m.x*p.y);!isFinite(C)||(g.copy(f).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(C),y.copy(d).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(C),c[L].add(g),c[G].add(g),c[H].add(g),u[L].add(y),u[G].add(y),u[H].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let L=0,G=x.length;L<G;++L){const H=x[L],C=H.start,T=H.count;for(let R=C,N=C+T;R<N;R+=3)_(i[R+0],i[R+1],i[R+2])}const M=new Q,S=new Q,E=new Q,b=new Q;function w(L){E.fromArray(a,L*3),b.copy(E);const G=c[L];M.copy(G),M.sub(E.multiplyScalar(E.dot(G))).normalize(),S.crossVectors(b,G);const C=S.dot(u[L])<0?-1:1;l[L*4]=M.x,l[L*4+1]=M.y,l[L*4+2]=M.z,l[L*4+3]=C}for(let L=0,G=x.length;L<G;++L){const H=x[L],C=H.start,T=H.count;for(let R=C,N=C+T;R<N;R+=3)w(i[R+0]),w(i[R+1]),w(i[R+2])}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new Q,a=new Q,s=new Q,o=new Q,l=new Q,c=new Q,u=new Q,h=new Q;if(t)for(let f=0,d=t.count;f<d;f+=3){const v=t.getX(f+0),p=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(n,v),a.fromBufferAttribute(n,p),s.fromBufferAttribute(n,m),u.subVectors(s,a),h.subVectors(r,a),u.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=n.count;f<d;f+=3)r.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),u.subVectors(s,a),h.subVectors(r,a),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ye.fromBufferAttribute(t,n),Ye.normalize(),t.setXYZ(n,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,v=0;for(let p=0,m=l.length;p<m;p++){o.isInterleavedBufferAttribute?d=l[p]*o.data.stride+o.offset:d=l[p]*u;for(let g=0;g<u;g++)f[v++]=c[d++]}return new Mi(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ji,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);n.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const a=t.morphAttributes;for(const c in a){const u=[],h=a[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Od=new je,Aa=new Yp,Eu=new zl,tr=new Q,er=new Q,nr=new Q,Tu=new Q,Au=new Q,Cu=new Q,Dc=new Q,Rc=new Q,Pc=new Q,Fc=new be,Ic=new be,Uc=new be,Lu=new Q,Oc=new Q;class Ni extends _n{constructor(t=new ji,n=new Xh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}raycast(t,n){const i=this.geometry,r=this.material,a=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Eu.copy(i.boundingSphere),Eu.applyMatrix4(a),t.ray.intersectsSphere(Eu)===!1)||(Od.copy(a).invert(),Aa.copy(t.ray).applyMatrix4(Od),i.boundingBox!==null&&Aa.intersectsBox(i.boundingBox)===!1))return;let s;const o=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,h=i.attributes.uv,f=i.attributes.uv2,d=i.groups,v=i.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,m=d.length;p<m;p++){const g=d[p],y=r[g.materialIndex],_=Math.max(g.start,v.start),x=Math.min(o.count,Math.min(g.start+g.count,v.start+v.count));for(let M=_,S=x;M<S;M+=3){const E=o.getX(M),b=o.getX(M+1),w=o.getX(M+2);s=Nc(this,y,t,Aa,l,c,u,h,f,E,b,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{const p=Math.max(0,v.start),m=Math.min(o.count,v.start+v.count);for(let g=p,y=m;g<y;g+=3){const _=o.getX(g),x=o.getX(g+1),M=o.getX(g+2);s=Nc(this,r,t,Aa,l,c,u,h,f,_,x,M),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,m=d.length;p<m;p++){const g=d[p],y=r[g.materialIndex],_=Math.max(g.start,v.start),x=Math.min(l.count,Math.min(g.start+g.count,v.start+v.count));for(let M=_,S=x;M<S;M+=3){const E=M,b=M+1,w=M+2;s=Nc(this,y,t,Aa,l,c,u,h,f,E,b,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{const p=Math.max(0,v.start),m=Math.min(l.count,v.start+v.count);for(let g=p,y=m;g<y;g+=3){const _=g,x=g+1,M=g+2;s=Nc(this,r,t,Aa,l,c,u,h,f,_,x,M),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}}function B0(e,t,n,i,r,a,s,o){let l;if(t.side===ti?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,t.side!==ir,o),l===null)return null;Oc.copy(o),Oc.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Oc);return c<n.near||c>n.far?null:{distance:c,point:Oc.clone(),object:e}}function Nc(e,t,n,i,r,a,s,o,l,c,u,h){tr.fromBufferAttribute(r,c),er.fromBufferAttribute(r,u),nr.fromBufferAttribute(r,h);const f=e.morphTargetInfluences;if(a&&f){Dc.set(0,0,0),Rc.set(0,0,0),Pc.set(0,0,0);for(let v=0,p=a.length;v<p;v++){const m=f[v],g=a[v];m!==0&&(Tu.fromBufferAttribute(g,c),Au.fromBufferAttribute(g,u),Cu.fromBufferAttribute(g,h),s?(Dc.addScaledVector(Tu,m),Rc.addScaledVector(Au,m),Pc.addScaledVector(Cu,m)):(Dc.addScaledVector(Tu.sub(tr),m),Rc.addScaledVector(Au.sub(er),m),Pc.addScaledVector(Cu.sub(nr),m)))}tr.add(Dc),er.add(Rc),nr.add(Pc)}e.isSkinnedMesh&&(e.boneTransform(c,tr),e.boneTransform(u,er),e.boneTransform(h,nr));const d=B0(e,t,n,i,tr,er,nr,Lu);if(d){o&&(Fc.fromBufferAttribute(o,c),Ic.fromBufferAttribute(o,u),Uc.fromBufferAttribute(o,h),d.uv=Oi.getUV(Lu,tr,er,nr,Fc,Ic,Uc,new be)),l&&(Fc.fromBufferAttribute(l,c),Ic.fromBufferAttribute(l,u),Uc.fromBufferAttribute(l,h),d.uv2=Oi.getUV(Lu,tr,er,nr,Fc,Ic,Uc,new be));const v={a:c,b:u,c:h,normal:new Q,materialIndex:0};Oi.getNormal(tr,er,nr,v.normal),d.face=v}return d}class Vs extends ji{constructor(t=1,n=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,d=0;v("z","y","x",-1,-1,i,n,t,s,a,0),v("z","y","x",1,-1,i,n,-t,s,a,1),v("x","z","y",1,1,t,i,n,r,s,2),v("x","z","y",1,-1,t,i,-n,r,s,3),v("x","y","z",1,-1,t,n,i,r,a,4),v("x","y","z",-1,-1,t,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new di(c,3)),this.setAttribute("normal",new di(u,3)),this.setAttribute("uv",new di(h,2));function v(p,m,g,y,_,x,M,S,E,b,w){const L=x/E,G=M/b,H=x/2,C=M/2,T=S/2,R=E+1,N=b+1;let V=0,z=0;const I=new Q;for(let B=0;B<N;B++){const Z=B*G-C;for(let X=0;X<R;X++){const k=X*L-H;I[p]=k*y,I[m]=Z*_,I[g]=T,c.push(I.x,I.y,I.z),I[p]=0,I[m]=0,I[g]=S>0?1:-1,u.push(I.x,I.y,I.z),h.push(X/E),h.push(1-B/b),V+=1}}for(let B=0;B<b;B++)for(let Z=0;Z<E;Z++){const X=f+Z+R*B,k=f+Z+R*(B+1),J=f+(Z+1)+R*(B+1),it=f+(Z+1)+R*B;l.push(X,k,it),l.push(k,J,it),z+=6}o.addGroup(d,z,w),d+=z,f+=V}}static fromJSON(t){return new Vs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ya(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function fn(e){const t={};for(let n=0;n<e.length;n++){const i=Ya(e[n]);for(const r in i)t[r]=i[r]}return t}function G0(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}const k0={clone:Ya,merge:fn};var V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xr extends hc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ya(t.uniforms),this.uniformsGroups=G0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Jp extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jn extends Jp{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Ed*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ed*2*Math.atan(Math.tan(cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,n,i,r,a,s){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(cu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ca=90,La=1;class W0 extends _n{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new jn(Ca,La,t,n);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new Q(1,0,0)),this.add(r);const a=new jn(Ca,La,t,n);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new Q(-1,0,0)),this.add(a);const s=new jn(Ca,La,t,n);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new Q(0,1,0)),this.add(s);const o=new jn(Ca,La,t,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new Q(0,-1,0)),this.add(o);const l=new jn(Ca,La,t,n);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new Q(0,0,1)),this.add(l);const c=new jn(Ca,La,t,n);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new Q(0,0,-1)),this.add(c)}update(t,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,a,s,o,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=Gi,t.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(n,r),t.setRenderTarget(i,1),t.render(n,a),t.setRenderTarget(i,2),t.render(n,s),t.setRenderTarget(i,3),t.render(n,o),t.setRenderTarget(i,4),t.render(n,l),i.texture.generateMipmaps=d,t.setRenderTarget(i,5),t.render(n,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Kp extends mi{constructor(t,n,i,r,a,s,o,l,c,u){t=t!==void 0?t:[],n=n!==void 0?n:Wa,super(t,n,i,r,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class X0 extends Wr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Kp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Yn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vs(5,5,5),a=new Xr({name:"CubemapFromEquirect",uniforms:Ya(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:or});a.uniforms.tEquirect.value=n;const s=new Ni(r,a),o=n.minFilter;return n.minFilter===Nl&&(n.minFilter=Yn),new W0(1,10,this).update(t,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,n,i,r){const a=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(n,i,r);t.setRenderTarget(a)}}const Du=new Q,q0=new Q,Y0=new Zn;class Sr{constructor(t=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=Du.subVectors(i,n).cross(q0.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,n){const i=t.delta(Du),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(i).multiplyScalar(a).add(t.start)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||Y0.getNormalMatrix(t),r=this.coplanarPoint(Du).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Da=new zl,zc=new Q;class Qp{constructor(t=new Sr,n=new Sr,i=new Sr,r=new Sr,a=new Sr,s=new Sr){this.planes=[t,n,i,r,a,s]}set(t,n,i,r,a,s){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const n=this.planes,i=t.elements,r=i[0],a=i[1],s=i[2],o=i[3],l=i[4],c=i[5],u=i[6],h=i[7],f=i[8],d=i[9],v=i[10],p=i[11],m=i[12],g=i[13],y=i[14],_=i[15];return n[0].setComponents(o-r,h-l,p-f,_-m).normalize(),n[1].setComponents(o+r,h+l,p+f,_+m).normalize(),n[2].setComponents(o+a,h+c,p+d,_+g).normalize(),n[3].setComponents(o-a,h-c,p-d,_-g).normalize(),n[4].setComponents(o-s,h-u,p-v,_-y).normalize(),n[5].setComponents(o+s,h+u,p+v,_+y).normalize(),this}intersectsObject(t){const n=t.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Da)}intersectsSprite(t){return Da.center.set(0,0,0),Da.radius=.7071067811865476,Da.applyMatrix4(t.matrixWorld),this.intersectsSphere(Da)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(zc.x=r.normal.x>0?t.max.x:t.min.x,zc.y=r.normal.y>0?t.max.y:t.min.y,zc.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(zc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tm(){let e=null,t=!1,n=null,i=null;function r(a,s){n(a,s),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function j0(e,t){const n=t.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,d=e.createBuffer();e.bindBuffer(u,d),e.bufferData(u,h,f),c.onUploadCallback();let v;if(h instanceof Float32Array)v=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(h instanceof Int16Array)v=5122;else if(h instanceof Uint32Array)v=5125;else if(h instanceof Int32Array)v=5124;else if(h instanceof Int8Array)v=5120;else if(h instanceof Uint8Array)v=5121;else if(h instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,h){const f=u.array,d=u.updateRange;e.bindBuffer(h,c),d.count===-1?e.bufferSubData(h,0,f):(n?e.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):e.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(e.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,u)):h.version<c.version&&(a(h.buffer,c,u),h.version=c.version)}return{get:s,remove:o,update:l}}class qh extends ji{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const a=t/2,s=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=t/o,f=n/l,d=[],v=[],p=[],m=[];for(let g=0;g<u;g++){const y=g*f-s;for(let _=0;_<c;_++){const x=_*h-a;v.push(x,-y,0),p.push(0,0,1),m.push(_/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){const _=y+c*g,x=y+c*(g+1),M=y+1+c*(g+1),S=y+1+c*g;d.push(_,x,S),d.push(x,M,S)}this.setIndex(d),this.setAttribute("position",new di(v,3)),this.setAttribute("normal",new di(p,3)),this.setAttribute("uv",new di(m,2))}static fromJSON(t){return new qh(t.width,t.height,t.widthSegments,t.heightSegments)}}var $0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Z0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,K0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e_="vec3 transformed = vec3( position );",n_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,r_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,a_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,p_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,m_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,v_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M_="gl_FragColor = linearToOutputTexel( gl_FragColor );",b_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,E_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,C_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,F_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,I_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,N_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,z_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,B_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,k_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,H_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,W_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,X_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,q_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Y_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,j_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,J_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,K_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ty=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ey=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ny=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ry=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ay=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,oy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,cy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ly=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,py=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,my=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,gy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_y=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,xy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,My=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,by=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ty=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ay=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cy=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Ly=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ry=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Py=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Iy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ny=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,By=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Gy=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ky=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Vy=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Hy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Wy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Xy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jy=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ky=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qy=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ex=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ax=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ox=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ux=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,px=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_x=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ex=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,se={alphamap_fragment:$0,alphamap_pars_fragment:Z0,alphatest_fragment:J0,alphatest_pars_fragment:K0,aomap_fragment:Q0,aomap_pars_fragment:t_,begin_vertex:e_,beginnormal_vertex:n_,bsdfs:i_,iridescence_fragment:r_,bumpmap_pars_fragment:a_,clipping_planes_fragment:s_,clipping_planes_pars_fragment:o_,clipping_planes_pars_vertex:c_,clipping_planes_vertex:l_,color_fragment:u_,color_pars_fragment:h_,color_pars_vertex:f_,color_vertex:d_,common:p_,cube_uv_reflection_fragment:m_,defaultnormal_vertex:v_,displacementmap_pars_vertex:g_,displacementmap_vertex:__,emissivemap_fragment:y_,emissivemap_pars_fragment:x_,encodings_fragment:M_,encodings_pars_fragment:b_,envmap_fragment:w_,envmap_common_pars_fragment:S_,envmap_pars_fragment:E_,envmap_pars_vertex:T_,envmap_physical_pars_fragment:z_,envmap_vertex:A_,fog_vertex:C_,fog_pars_vertex:L_,fog_fragment:D_,fog_pars_fragment:R_,gradientmap_pars_fragment:P_,lightmap_fragment:F_,lightmap_pars_fragment:I_,lights_lambert_fragment:U_,lights_lambert_pars_fragment:O_,lights_pars_begin:N_,lights_toon_fragment:B_,lights_toon_pars_fragment:G_,lights_phong_fragment:k_,lights_phong_pars_fragment:V_,lights_physical_fragment:H_,lights_physical_pars_fragment:W_,lights_fragment_begin:X_,lights_fragment_maps:q_,lights_fragment_end:Y_,logdepthbuf_fragment:j_,logdepthbuf_pars_fragment:$_,logdepthbuf_pars_vertex:Z_,logdepthbuf_vertex:J_,map_fragment:K_,map_pars_fragment:Q_,map_particle_fragment:ty,map_particle_pars_fragment:ey,metalnessmap_fragment:ny,metalnessmap_pars_fragment:iy,morphcolor_vertex:ry,morphnormal_vertex:ay,morphtarget_pars_vertex:sy,morphtarget_vertex:oy,normal_fragment_begin:cy,normal_fragment_maps:ly,normal_pars_fragment:uy,normal_pars_vertex:hy,normal_vertex:fy,normalmap_pars_fragment:dy,clearcoat_normal_fragment_begin:py,clearcoat_normal_fragment_maps:my,clearcoat_pars_fragment:vy,iridescence_pars_fragment:gy,output_fragment:_y,packing:yy,premultiplied_alpha_fragment:xy,project_vertex:My,dithering_fragment:by,dithering_pars_fragment:wy,roughnessmap_fragment:Sy,roughnessmap_pars_fragment:Ey,shadowmap_pars_fragment:Ty,shadowmap_pars_vertex:Ay,shadowmap_vertex:Cy,shadowmask_pars_fragment:Ly,skinbase_vertex:Dy,skinning_pars_vertex:Ry,skinning_vertex:Py,skinnormal_vertex:Fy,specularmap_fragment:Iy,specularmap_pars_fragment:Uy,tonemapping_fragment:Oy,tonemapping_pars_fragment:Ny,transmission_fragment:zy,transmission_pars_fragment:By,uv_pars_fragment:Gy,uv_pars_vertex:ky,uv_vertex:Vy,uv2_pars_fragment:Hy,uv2_pars_vertex:Wy,uv2_vertex:Xy,worldpos_vertex:qy,background_vert:Yy,background_frag:jy,backgroundCube_vert:$y,backgroundCube_frag:Zy,cube_vert:Jy,cube_frag:Ky,depth_vert:Qy,depth_frag:tx,distanceRGBA_vert:ex,distanceRGBA_frag:nx,equirect_vert:ix,equirect_frag:rx,linedashed_vert:ax,linedashed_frag:sx,meshbasic_vert:ox,meshbasic_frag:cx,meshlambert_vert:lx,meshlambert_frag:ux,meshmatcap_vert:hx,meshmatcap_frag:fx,meshnormal_vert:dx,meshnormal_frag:px,meshphong_vert:mx,meshphong_frag:vx,meshphysical_vert:gx,meshphysical_frag:_x,meshtoon_vert:yx,meshtoon_frag:xx,points_vert:Mx,points_frag:bx,shadow_vert:wx,shadow_frag:Sx,sprite_vert:Ex,sprite_frag:Tx},At={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Zn},uv2Transform:{value:new Zn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Zn}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Zn}}},yi={basic:{uniforms:fn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:fn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new we(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:fn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:fn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:fn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new we(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:fn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:fn([At.points,At.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:fn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:fn([At.common,At.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:fn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:fn([At.sprite,At.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new Zn},t2D:{value:null}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:fn([At.common,At.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:fn([At.lights,At.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};yi.physical={uniforms:fn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};function Ax(e,t,n,i,r,a,s){const o=new we(0);let l=a===!0?0:1,c,u,h=null,f=0,d=null;function v(m,g){let y=!1,_=g.isScene===!0?g.background:null;_&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:t).get(_));const x=e.xr,M=x.getSession&&x.getSession();M&&M.environmentBlendMode==="additive"&&(_=null),_===null?p(o,l):_&&_.isColor&&(p(_,1),y=!0),(e.autoClear||y)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ol)?(u===void 0&&(u=new Ni(new Vs(1,1,1),new Xr({name:"BackgroundCubeMaterial",uniforms:Ya(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,(h!==_||f!==_.version||d!==e.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=e.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ni(new qh(2,2),new Xr({name:"BackgroundMaterial",uniforms:Ya(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Ha,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==e.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,d=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,g){i.buffers.color.setClear(m.r,m.g,m.b,g,s)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),l=g,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(o,l)},render:v}}function Cx(e,t,n,i){const r=e.getParameter(34921),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),s=i.isWebGL2||a!==null,o={},l=m(null);let c=l,u=!1;function h(T,R,N,V,z){let I=!1;if(s){const B=p(V,N,R);c!==B&&(c=B,d(c.object)),I=g(T,V,N,z),I&&y(T,V,N,z)}else{const B=R.wireframe===!0;(c.geometry!==V.id||c.program!==N.id||c.wireframe!==B)&&(c.geometry=V.id,c.program=N.id,c.wireframe=B,I=!0)}z!==null&&n.update(z,34963),(I||u)&&(u=!1,b(T,R,N,V),z!==null&&e.bindBuffer(34963,n.get(z).buffer))}function f(){return i.isWebGL2?e.createVertexArray():a.createVertexArrayOES()}function d(T){return i.isWebGL2?e.bindVertexArray(T):a.bindVertexArrayOES(T)}function v(T){return i.isWebGL2?e.deleteVertexArray(T):a.deleteVertexArrayOES(T)}function p(T,R,N){const V=N.wireframe===!0;let z=o[T.id];z===void 0&&(z={},o[T.id]=z);let I=z[R.id];I===void 0&&(I={},z[R.id]=I);let B=I[V];return B===void 0&&(B=m(f()),I[V]=B),B}function m(T){const R=[],N=[],V=[];for(let z=0;z<r;z++)R[z]=0,N[z]=0,V[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:V,object:T,attributes:{},index:null}}function g(T,R,N,V){const z=c.attributes,I=R.attributes;let B=0;const Z=N.getAttributes();for(const X in Z)if(Z[X].location>=0){const J=z[X];let it=I[X];if(it===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(it=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(it=T.instanceColor)),J===void 0||J.attribute!==it||it&&J.data!==it.data)return!0;B++}return c.attributesNum!==B||c.index!==V}function y(T,R,N,V){const z={},I=R.attributes;let B=0;const Z=N.getAttributes();for(const X in Z)if(Z[X].location>=0){let J=I[X];J===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(J=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(J=T.instanceColor));const it={};it.attribute=J,J&&J.data&&(it.data=J.data),z[X]=it,B++}c.attributes=z,c.attributesNum=B,c.index=V}function _(){const T=c.newAttributes;for(let R=0,N=T.length;R<N;R++)T[R]=0}function x(T){M(T,0)}function M(T,R){const N=c.newAttributes,V=c.enabledAttributes,z=c.attributeDivisors;N[T]=1,V[T]===0&&(e.enableVertexAttribArray(T),V[T]=1),z[T]!==R&&((i.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,R),z[T]=R)}function S(){const T=c.newAttributes,R=c.enabledAttributes;for(let N=0,V=R.length;N<V;N++)R[N]!==T[N]&&(e.disableVertexAttribArray(N),R[N]=0)}function E(T,R,N,V,z,I){i.isWebGL2===!0&&(N===5124||N===5125)?e.vertexAttribIPointer(T,R,N,z,I):e.vertexAttribPointer(T,R,N,V,z,I)}function b(T,R,N,V){if(i.isWebGL2===!1&&(T.isInstancedMesh||V.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const z=V.attributes,I=N.getAttributes(),B=R.defaultAttributeValues;for(const Z in I){const X=I[Z];if(X.location>=0){let k=z[Z];if(k===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(k=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(k=T.instanceColor)),k!==void 0){const J=k.normalized,it=k.itemSize,Y=n.get(k);if(Y===void 0)continue;const gt=Y.buffer,ft=Y.type,st=Y.bytesPerElement;if(k.isInterleavedBufferAttribute){const pt=k.data,W=pt.stride,Ft=k.offset;if(pt.isInstancedInterleavedBuffer){for(let vt=0;vt<X.locationSize;vt++)M(X.location+vt,pt.meshPerAttribute);T.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let vt=0;vt<X.locationSize;vt++)x(X.location+vt);e.bindBuffer(34962,gt);for(let vt=0;vt<X.locationSize;vt++)E(X.location+vt,it/X.locationSize,ft,J,W*st,(Ft+it/X.locationSize*vt)*st)}else{if(k.isInstancedBufferAttribute){for(let pt=0;pt<X.locationSize;pt++)M(X.location+pt,k.meshPerAttribute);T.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let pt=0;pt<X.locationSize;pt++)x(X.location+pt);e.bindBuffer(34962,gt);for(let pt=0;pt<X.locationSize;pt++)E(X.location+pt,it/X.locationSize,ft,J,it*st,it/X.locationSize*pt*st)}}else if(B!==void 0){const J=B[Z];if(J!==void 0)switch(J.length){case 2:e.vertexAttrib2fv(X.location,J);break;case 3:e.vertexAttrib3fv(X.location,J);break;case 4:e.vertexAttrib4fv(X.location,J);break;default:e.vertexAttrib1fv(X.location,J)}}}}S()}function w(){H();for(const T in o){const R=o[T];for(const N in R){const V=R[N];for(const z in V)v(V[z].object),delete V[z];delete R[N]}delete o[T]}}function L(T){if(o[T.id]===void 0)return;const R=o[T.id];for(const N in R){const V=R[N];for(const z in V)v(V[z].object),delete V[z];delete R[N]}delete o[T.id]}function G(T){for(const R in o){const N=o[R];if(N[T.id]===void 0)continue;const V=N[T.id];for(const z in V)v(V[z].object),delete V[z];delete N[T.id]}}function H(){C(),u=!0,c!==l&&(c=l,d(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfProgram:G,initAttributes:_,enableAttribute:x,disableUnusedAttributes:S}}function Lx(e,t,n,i){const r=i.isWebGL2;let a;function s(c){a=c}function o(c,u){e.drawArrays(a,c,u),n.update(u,a,1)}function l(c,u,h){if(h===0)return;let f,d;if(r)f=e,d="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](a,c,u,h),n.update(u,a,h)}this.setMode=s,this.render=o,this.renderInstances=l}function Dx(e,t,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){if(E==="highp"){if(e.getShaderPrecisionFormat(35633,36338).precision>0&&e.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&e.getShaderPrecisionFormat(35633,36337).precision>0&&e.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&e instanceof WebGL2ComputeRenderingContext;let o=n.precision!==void 0?n.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||t.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,h=e.getParameter(34930),f=e.getParameter(35660),d=e.getParameter(3379),v=e.getParameter(34076),p=e.getParameter(34921),m=e.getParameter(36347),g=e.getParameter(36348),y=e.getParameter(36349),_=f>0,x=s||t.has("OES_texture_float"),M=_&&x,S=s?e.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:S}}function Rx(e){const t=this;let n=null,i=0,r=!1,a=!1;const s=new Sr,o=new Zn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const v=h.length!==0||f||i!==0||r;return r=f,n=u(h,d,0),i=h.length,v},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1,c()},this.setState=function(h,f,d){const v=h.clippingPlanes,p=h.clipIntersection,m=h.clipShadows,g=e.get(h);if(!r||v===null||v.length===0||a&&!m)a?u(null):c();else{const y=a?0:i,_=y*4;let x=g.clippingState||null;l.value=x,x=u(v,f,_,d);for(let M=0;M!==_;++M)x[M]=n[M];g.clippingState=x,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,v){const p=h!==null?h.length:0;let m=null;if(p!==0){if(m=l.value,v!==!0||m===null){const g=d+p*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let _=0,x=d;_!==p;++_,x+=4)s.copy(h[_]).applyMatrix4(y,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,m}}function Px(e){let t=new WeakMap;function n(s,o){return o===Zu?s.mapping=Wa:o===Ju&&(s.mapping=Xa),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===Zu||o===Ju)if(t.has(s)){const l=t.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new X0(l.height/2);return c.fromEquirectangularTexture(e,s),t.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class Fx extends Jp{constructor(t=-1,n=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-t,s=i+t,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ia=4,Nd=[.125,.215,.35,.446,.526,.582],Ar=20,Ru=new Fx,zd=new we;let Pu=null;const Er=(1+Math.sqrt(5))/2,Ra=1/Er,Bd=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,Er,Ra),new Q(0,Er,-Ra),new Q(Ra,0,Er),new Q(-Ra,0,Er),new Q(Er,Ra,0),new Q(-Er,Ra,0)];class Gd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100){Pu=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pu),t.scissorTest=!1,Bc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Wa||t.mapping===Xa?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pu=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:co,format:fi,encoding:Hr,depthBuffer:!1},r=kd(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kd(t,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ix(a)),this._blurMaterial=Ux(a,t,n)}return r}_compileMaterial(t){const n=new Ni(this._lodPlanes[0],t);this._renderer.compile(n,Ru)}_sceneToCubeUV(t,n,i,r){const o=new jn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(zd),u.toneMapping=Gi,u.autoClear=!1;const d=new Xh({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),v=new Ni(new Vs,d);let p=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,p=!0):(d.color.copy(zd),p=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):y===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const _=this._cubeSize;Bc(r,y*_,g>2?_:0,_,_),u.setRenderTarget(r),p&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===Wa||t.mapping===Xa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vd());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Ni(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;Bc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Ru)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Bd[(r-1)%Bd.length];this._blur(t,r-1,r,a,s)}n.autoClear=i}_blur(t,n,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(t,s,n,i,r,"latitudinal",a),this._halfBlur(s,t,i,i,r,"longitudinal",a)}_halfBlur(t,n,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ni(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Ar-1),p=a/v,m=isFinite(a)?1+Math.floor(u*p):Ar;m>Ar&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ar}`);const g=[];let y=0;for(let E=0;E<Ar;++E){const b=E/p,w=Math.exp(-b*b/2);g.push(w),E===0?y+=w:E<m&&(y+=2*w)}for(let E=0;E<g.length;E++)g[E]=g[E]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-i;const x=this._sizeLods[r],M=3*x*(r>_-Ia?r-_+Ia:0),S=4*(this._cubeSize-x);Bc(n,M,S,3*x,2*x),l.setRenderTarget(n),l.render(h,Ru)}}function Ix(e){const t=[],n=[],i=[];let r=e;const a=e-Ia+1+Nd.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);n.push(o);let l=1/o;s>e-Ia?l=Nd[s-e+Ia-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,v=6,p=3,m=2,g=1,y=new Float32Array(p*v*d),_=new Float32Array(m*v*d),x=new Float32Array(g*v*d);for(let S=0;S<d;S++){const E=S%3*2/3-1,b=S>2?0:-1,w=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];y.set(w,p*v*S),_.set(f,m*v*S);const L=[S,S,S,S,S,S];x.set(L,g*v*S)}const M=new ji;M.setAttribute("position",new Mi(y,p)),M.setAttribute("uv",new Mi(_,m)),M.setAttribute("faceIndex",new Mi(x,g)),t.push(M),r>Ia&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function kd(e,t,n){const i=new Wr(e,t,n);return i.texture.mapping=Ol,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bc(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function Ux(e,t,n){const i=new Float32Array(Ar),r=new Q(0,1,0);return new Xr({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Vd(){return new Xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Hd(){return new Xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Yh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ox(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Zu||l===Ju,u=l===Wa||l===Xa;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return n===null&&(n=new Gd(e)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){n===null&&(n=new Gd(e));const f=c?n.fromEquirectangular(o):n.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",a),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function Nx(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function zx(e,t,n,i){const r={},a=new WeakMap;function s(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);f.removeEventListener("dispose",s),delete r[f.id];const d=a.get(f);d&&(t.remove(d),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)t.update(f[v],34962);const d=h.morphAttributes;for(const v in d){const p=d[v];for(let m=0,g=p.length;m<g;m++)t.update(p[m],34962)}}function c(h){const f=[],d=h.index,v=h.attributes.position;let p=0;if(d!==null){const y=d.array;p=d.version;for(let _=0,x=y.length;_<x;_+=3){const M=y[_+0],S=y[_+1],E=y[_+2];f.push(M,S,S,E,E,M)}}else{const y=v.array;p=v.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const M=_+0,S=_+1,E=_+2;f.push(M,S,S,E,E,M)}}const m=new(Vp(f)?Zp:$p)(f,1);m.version=p;const g=a.get(h);g&&t.remove(g),a.set(h,m)}function u(h){const f=a.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Bx(e,t,n,i){const r=i.isWebGL2;let a;function s(f){a=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,d){e.drawElements(a,d,o,f*l),n.update(d,a,1)}function h(f,d,v){if(v===0)return;let p,m;if(r)p=e,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](a,d,o,f*l,v),n.update(d,a,v)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function Gx(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(n.calls++,s){case 4:n.triangles+=o*(a/3);break;case 1:n.lines+=o*(a/2);break;case 3:n.lines+=o*(a-1);break;case 2:n.lines+=o*a;break;case 0:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function kx(e,t){return e[0]-t[0]}function Vx(e,t){return Math.abs(t[1])-Math.abs(e[1])}function Hx(e,t,n){const i={},r=new Float32Array(8),a=new WeakMap,s=new Ke,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=v!==void 0?v.length:0;let m=a.get(u);if(m===void 0||m.count!==p){let R=function(){C.dispose(),a.delete(u),u.removeEventListener("dispose",R)};m!==void 0&&m.texture.dispose();const _=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let w=0;_===!0&&(w=1),x===!0&&(w=2),M===!0&&(w=3);let L=u.attributes.position.count*w,G=1;L>t.maxTextureSize&&(G=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const H=new Float32Array(L*G*4*p),C=new qp(H,L,G,p);C.type=Lr,C.needsUpdate=!0;const T=w*4;for(let N=0;N<p;N++){const V=S[N],z=E[N],I=b[N],B=L*G*4*N;for(let Z=0;Z<V.count;Z++){const X=Z*T;_===!0&&(s.fromBufferAttribute(V,Z),H[B+X+0]=s.x,H[B+X+1]=s.y,H[B+X+2]=s.z,H[B+X+3]=0),x===!0&&(s.fromBufferAttribute(z,Z),H[B+X+4]=s.x,H[B+X+5]=s.y,H[B+X+6]=s.z,H[B+X+7]=0),M===!0&&(s.fromBufferAttribute(I,Z),H[B+X+8]=s.x,H[B+X+9]=s.y,H[B+X+10]=s.z,H[B+X+11]=I.itemSize===4?s.w:1)}}m={count:p,texture:C,size:new be(L,G)},a.set(u,m),u.addEventListener("dispose",R)}let g=0;for(let _=0;_<d.length;_++)g+=d[_];const y=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(e,"morphTargetBaseInfluence",y),f.getUniforms().setValue(e,"morphTargetInfluences",d),f.getUniforms().setValue(e,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(e,"morphTargetsTextureSize",m.size)}else{const v=d===void 0?0:d.length;let p=i[u.id];if(p===void 0||p.length!==v){p=[];for(let x=0;x<v;x++)p[x]=[x,0];i[u.id]=p}for(let x=0;x<v;x++){const M=p[x];M[0]=x,M[1]=d[x]}p.sort(Vx);for(let x=0;x<8;x++)x<v&&p[x][1]?(o[x][0]=p[x][0],o[x][1]=p[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(kx);const m=u.morphAttributes.position,g=u.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const M=o[x],S=M[0],E=M[1];S!==Number.MAX_SAFE_INTEGER&&E?(m&&u.getAttribute("morphTarget"+x)!==m[S]&&u.setAttribute("morphTarget"+x,m[S]),g&&u.getAttribute("morphNormal"+x)!==g[S]&&u.setAttribute("morphNormal"+x,g[S]),r[x]=E,y+=E):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),g&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const _=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(e,"morphTargetBaseInfluence",_),f.getUniforms().setValue(e,"morphTargetInfluences",r)}}return{update:l}}function Wx(e,t,n,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);return r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),h}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:s}}const em=new mi,nm=new qp,im=new L0,rm=new Kp,Wd=[],Xd=[],qd=new Float32Array(16),Yd=new Float32Array(9),jd=new Float32Array(4);function Hs(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let a=Wd[r];if(a===void 0&&(a=new Float32Array(r),Wd[r]=a),t!==0){i.toArray(a,0);for(let s=1,o=0;s!==t;++s)o+=n,e[s].toArray(a,o)}return a}function Xe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function qe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Bl(e,t){let n=Xd[t];n===void 0&&(n=new Int32Array(t),Xd[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Xx(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function qx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;e.uniform2fv(this.addr,t),qe(n,t)}}function Yx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Xe(n,t))return;e.uniform3fv(this.addr,t),qe(n,t)}}function jx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;e.uniform4fv(this.addr,t),qe(n,t)}}function $x(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Xe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),qe(n,t)}else{if(Xe(n,i))return;jd.set(i),e.uniformMatrix2fv(this.addr,!1,jd),qe(n,i)}}function Zx(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Xe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),qe(n,t)}else{if(Xe(n,i))return;Yd.set(i),e.uniformMatrix3fv(this.addr,!1,Yd),qe(n,i)}}function Jx(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Xe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),qe(n,t)}else{if(Xe(n,i))return;qd.set(i),e.uniformMatrix4fv(this.addr,!1,qd),qe(n,i)}}function Kx(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Qx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;e.uniform2iv(this.addr,t),qe(n,t)}}function tM(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xe(n,t))return;e.uniform3iv(this.addr,t),qe(n,t)}}function eM(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;e.uniform4iv(this.addr,t),qe(n,t)}}function nM(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function iM(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;e.uniform2uiv(this.addr,t),qe(n,t)}}function rM(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xe(n,t))return;e.uniform3uiv(this.addr,t),qe(n,t)}}function aM(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;e.uniform4uiv(this.addr,t),qe(n,t)}}function sM(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(t||em,r)}function oM(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||im,r)}function cM(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||rm,r)}function lM(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||nm,r)}function uM(e){switch(e){case 5126:return Xx;case 35664:return qx;case 35665:return Yx;case 35666:return jx;case 35674:return $x;case 35675:return Zx;case 35676:return Jx;case 5124:case 35670:return Kx;case 35667:case 35671:return Qx;case 35668:case 35672:return tM;case 35669:case 35673:return eM;case 5125:return nM;case 36294:return iM;case 36295:return rM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return cM;case 36289:case 36303:case 36311:case 36292:return lM}}function hM(e,t){e.uniform1fv(this.addr,t)}function fM(e,t){const n=Hs(t,this.size,2);e.uniform2fv(this.addr,n)}function dM(e,t){const n=Hs(t,this.size,3);e.uniform3fv(this.addr,n)}function pM(e,t){const n=Hs(t,this.size,4);e.uniform4fv(this.addr,n)}function mM(e,t){const n=Hs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function vM(e,t){const n=Hs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function gM(e,t){const n=Hs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function _M(e,t){e.uniform1iv(this.addr,t)}function yM(e,t){e.uniform2iv(this.addr,t)}function xM(e,t){e.uniform3iv(this.addr,t)}function MM(e,t){e.uniform4iv(this.addr,t)}function bM(e,t){e.uniform1uiv(this.addr,t)}function wM(e,t){e.uniform2uiv(this.addr,t)}function SM(e,t){e.uniform3uiv(this.addr,t)}function EM(e,t){e.uniform4uiv(this.addr,t)}function TM(e,t,n){const i=this.cache,r=t.length,a=Bl(n,r);Xe(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));for(let s=0;s!==r;++s)n.setTexture2D(t[s]||em,a[s])}function AM(e,t,n){const i=this.cache,r=t.length,a=Bl(n,r);Xe(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));for(let s=0;s!==r;++s)n.setTexture3D(t[s]||im,a[s])}function CM(e,t,n){const i=this.cache,r=t.length,a=Bl(n,r);Xe(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));for(let s=0;s!==r;++s)n.setTextureCube(t[s]||rm,a[s])}function LM(e,t,n){const i=this.cache,r=t.length,a=Bl(n,r);Xe(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));for(let s=0;s!==r;++s)n.setTexture2DArray(t[s]||nm,a[s])}function DM(e){switch(e){case 5126:return hM;case 35664:return fM;case 35665:return dM;case 35666:return pM;case 35674:return mM;case 35675:return vM;case 35676:return gM;case 5124:case 35670:return _M;case 35667:case 35671:return yM;case 35668:case 35672:return xM;case 35669:case 35673:return MM;case 5125:return bM;case 36294:return wM;case 36295:return SM;case 36296:return EM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return LM}}class RM{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.setValue=uM(n.type)}}class PM{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.size=n.size,this.setValue=DM(n.type)}}class FM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(t,n[o.id],i)}}}const Fu=/(\w+)(\])?(\[|\.)?/g;function $d(e,t){e.seq.push(t),e.map[t.id]=t}function IM(e,t,n){const i=e.name,r=i.length;for(Fu.lastIndex=0;;){const a=Fu.exec(i),s=Fu.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){$d(n,c===void 0?new RM(o,e,t):new PM(o,e,t));break}else{let h=n.map[o];h===void 0&&(h=new FM(o),$d(n,h)),n=h}}}class Xc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,35718);for(let r=0;r<i;++r){const a=t.getActiveUniform(n,r),s=t.getUniformLocation(n,a.name);IM(a,s,this)}}setValue(t,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let a=0,s=n.length;a!==s;++a){const o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,a=t.length;r!==a;++r){const s=t[r];s.id in n&&i.push(s)}return i}}function Zd(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}let UM=0;function OM(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}function NM(e){switch(e){case Hr:return["Linear","( value )"];case Re:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}function Jd(e,t,n){const i=e.getShaderParameter(t,35713),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+OM(e.getShaderSource(t),s)}else return r}function zM(e,t){const n=NM(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function BM(e,t){let n;switch(t){case e0:n="Linear";break;case n0:n="Reinhard";break;case i0:n="OptimizedCineon";break;case r0:n="ACESFilmic";break;case a0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function GM(e){return[e.extensionDerivatives||!!e.envMapCubeUVHeight||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(to).join(`
`)}function kM(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function VM(e,t){const n={},i=e.getProgramParameter(t,35721);for(let r=0;r<i;r++){const a=e.getActiveAttrib(t,r),s=a.name;let o=1;a.type===35674&&(o=2),a.type===35675&&(o=3),a.type===35676&&(o=4),n[s]={type:a.type,location:e.getAttribLocation(t,s),locationSize:o}}return n}function to(e){return e!==""}function Kd(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const HM=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(e){return e.replace(HM,WM)}function WM(e,t){const n=se[t];if(n===void 0)throw new Error("Can not resolve #include <"+t+">");return nh(n)}const XM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tp(e){return e.replace(XM,qM)}function qM(e,t,n,i){let r="";for(let a=parseInt(t);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function ep(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function YM(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Op?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Fg?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Qs&&(t="SHADOWMAP_TYPE_VSM"),t}function jM(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Wa:case Xa:t="ENVMAP_TYPE_CUBE";break;case Ol:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $M(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Xa:t="ENVMAP_MODE_REFRACTION";break}return t}function ZM(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Bp:t="ENVMAP_BLENDING_MULTIPLY";break;case Qg:t="ENVMAP_BLENDING_MIX";break;case t0:t="ENVMAP_BLENDING_ADD";break}return t}function JM(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function KM(e,t,n,i){const r=e.getContext(),a=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=YM(n),c=jM(n),u=$M(n),h=ZM(n),f=JM(n),d=n.isWebGL2?"":GM(n),v=kM(a),p=r.createProgram();let m,g,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=[v].filter(to).join(`
`),m.length>0&&(m+=`
`),g=[d,v].filter(to).join(`
`),g.length>0&&(g+=`
`)):(m=[ep(n),"#define SHADER_NAME "+n.shaderName,v,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),g=[d,ep(n),"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?se.tonemapping_pars_fragment:"",n.toneMapping!==Gi?BM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",se.encodings_pars_fragment,zM("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(to).join(`
`)),s=nh(s),s=Kd(s,n),s=Qd(s,n),o=nh(o),o=Kd(o,n),o=Qd(o,n),s=tp(s),o=tp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",n.glslVersion===Sd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=y+m+s,x=y+g+o,M=Zd(r,35633,_),S=Zd(r,35632,x);if(r.attachShader(p,M),r.attachShader(p,S),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),e.debug.checkShaderErrors){const w=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(M).trim(),G=r.getShaderInfoLog(S).trim();let H=!0,C=!0;if(r.getProgramParameter(p,35714)===!1){H=!1;const T=Jd(r,M,"vertex"),R=Jd(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+w+`
`+T+`
`+R)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(L===""||G==="")&&(C=!1);C&&(this.diagnostics={runnable:H,programLog:w,vertexShader:{log:L,prefix:m},fragmentShader:{log:G,prefix:g}})}r.deleteShader(M),r.deleteShader(S);let E;this.getUniforms=function(){return E===void 0&&(E=new Xc(r,p)),E};let b;return this.getAttributes=function(){return b===void 0&&(b=VM(r,p)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=n.shaderName,this.id=UM++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=S,this}let QM=0;class t1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new e1(t),n.set(t,i)),i}}class e1{constructor(t){this.id=QM++,this.code=t,this.usedTimes=0}}function n1(e,t,n,i,r,a,s){const o=new jp,l=new t1,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b,w,L,G,H){const C=G.fog,T=H.geometry,R=b.isMeshStandardMaterial?G.environment:null,N=(b.isMeshStandardMaterial?n:t).get(b.envMap||R),V=!!N&&N.mapping===Ol?N.image.height:null,z=v[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const I=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,B=I!==void 0?I.length:0;let Z=0;T.morphAttributes.position!==void 0&&(Z=1),T.morphAttributes.normal!==void 0&&(Z=2),T.morphAttributes.color!==void 0&&(Z=3);let X,k,J,it;if(z){const W=yi[z];X=W.vertexShader,k=W.fragmentShader}else X=b.vertexShader,k=b.fragmentShader,l.update(b),J=l.getVertexShaderID(b),it=l.getFragmentShaderID(b);const Y=e.getRenderTarget(),gt=b.alphaTest>0,ft=b.clearcoat>0,st=b.iridescence>0;return{isWebGL2:u,shaderID:z,shaderName:b.type,vertexShader:X,fragmentShader:k,defines:b.defines,customVertexShaderID:J,customFragmentShaderID:it,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,instancing:H.isInstancedMesh===!0,instancingColor:H.isInstancedMesh===!0&&H.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Y===null?e.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:Hr,map:!!b.map,matcap:!!b.matcap,envMap:!!N,envMapMode:N&&N.mapping,envMapCubeUVHeight:V,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===E0,tangentSpaceNormalMap:b.normalMapType===S0,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===Re,clearcoat:ft,clearcoatMap:ft&&!!b.clearcoatMap,clearcoatRoughnessMap:ft&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:ft&&!!b.clearcoatNormalMap,iridescence:st,iridescenceMap:st&&!!b.iridescenceMap,iridescenceThicknessMap:st&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Na,alphaMap:!!b.alphaMap,alphaTest:gt,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!T.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!C,useFog:b.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:Z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:b.toneMapped?e.toneMapping:Gi,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ir,flipSided:b.side===ti,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)w.push(L),w.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(g(w,b),y(w,b),w.push(e.outputEncoding)),w.push(b.customProgramCacheKey),w.join()}function g(b,w){b.push(w.precision),b.push(w.outputEncoding),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.combine),b.push(w.vertexUvs),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function y(b,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.map&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.lightMap&&o.enable(7),w.aoMap&&o.enable(8),w.emissiveMap&&o.enable(9),w.bumpMap&&o.enable(10),w.normalMap&&o.enable(11),w.objectSpaceNormalMap&&o.enable(12),w.tangentSpaceNormalMap&&o.enable(13),w.clearcoat&&o.enable(14),w.clearcoatMap&&o.enable(15),w.clearcoatRoughnessMap&&o.enable(16),w.clearcoatNormalMap&&o.enable(17),w.iridescence&&o.enable(18),w.iridescenceMap&&o.enable(19),w.iridescenceThicknessMap&&o.enable(20),w.displacementMap&&o.enable(21),w.specularMap&&o.enable(22),w.roughnessMap&&o.enable(23),w.metalnessMap&&o.enable(24),w.gradientMap&&o.enable(25),w.alphaMap&&o.enable(26),w.alphaTest&&o.enable(27),w.vertexColors&&o.enable(28),w.vertexAlphas&&o.enable(29),w.vertexUvs&&o.enable(30),w.vertexTangents&&o.enable(31),w.uvsVertexOnly&&o.enable(32),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.physicallyCorrectLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.specularIntensityMap&&o.enable(15),w.specularColorMap&&o.enable(16),w.transmission&&o.enable(17),w.transmissionMap&&o.enable(18),w.thicknessMap&&o.enable(19),w.sheen&&o.enable(20),w.sheenColorMap&&o.enable(21),w.sheenRoughnessMap&&o.enable(22),w.decodeVideoTexture&&o.enable(23),w.opaque&&o.enable(24),b.push(o.mask)}function _(b){const w=v[b.type];let L;if(w){const G=yi[w];L=k0.clone(G.uniforms)}else L=b.uniforms;return L}function x(b,w){let L;for(let G=0,H=c.length;G<H;G++){const C=c[G];if(C.cacheKey===w){L=C,++L.usedTimes;break}}return L===void 0&&(L=new KM(e,w,b,a),c.push(L)),L}function M(b){if(--b.usedTimes===0){const w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),b.destroy()}}function S(b){l.remove(b)}function E(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:_,acquireProgram:x,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:E}}function i1(){let e=new WeakMap;function t(a){let s=e.get(a);return s===void 0&&(s={},e.set(a,s)),s}function n(a){e.delete(a)}function i(a,s,o){e.get(a)[s]=o}function r(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:r}}function r1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function np(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function ip(){const e=[];let t=0;const n=[],i=[],r=[];function a(){t=0,n.length=0,i.length=0,r.length=0}function s(h,f,d,v,p,m){let g=e[t];return g===void 0?(g={id:h.id,object:h,geometry:f,material:d,groupOrder:v,renderOrder:h.renderOrder,z:p,group:m},e[t]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=d,g.groupOrder=v,g.renderOrder=h.renderOrder,g.z=p,g.group=m),t++,g}function o(h,f,d,v,p,m){const g=s(h,f,d,v,p,m);d.transmission>0?i.push(g):d.transparent===!0?r.push(g):n.push(g)}function l(h,f,d,v,p,m){const g=s(h,f,d,v,p,m);d.transmission>0?i.unshift(g):d.transparent===!0?r.unshift(g):n.unshift(g)}function c(h,f){n.length>1&&n.sort(h||r1),i.length>1&&i.sort(f||np),r.length>1&&r.sort(f||np)}function u(){for(let h=t,f=e.length;h<f;h++){const d=e[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:u,sort:c}}function a1(){let e=new WeakMap;function t(i,r){const a=e.get(i);let s;return a===void 0?(s=new ip,e.set(i,[s])):r>=a.length?(s=new ip,a.push(s)):s=a[r],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function s1(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Q,color:new we};break;case"SpotLight":n={position:new Q,direction:new Q,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new we,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new we,groundColor:new we};break;case"RectAreaLight":n={color:new we,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return e[t.id]=n,n}}}function o1(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let c1=0;function l1(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function u1(e,t){const n=new s1,i=o1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new Q);const a=new Q,s=new je,o=new je;function l(u,h){let f=0,d=0,v=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let p=0,m=0,g=0,y=0,_=0,x=0,M=0,S=0,E=0,b=0;u.sort(l1);const w=h!==!0?Math.PI:1;for(let G=0,H=u.length;G<H;G++){const C=u[G],T=C.color,R=C.intensity,N=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=T.r*R*w,d+=T.g*R*w,v+=T.b*R*w;else if(C.isLightProbe)for(let z=0;z<9;z++)r.probe[z].addScaledVector(C.sh.coefficients[z],R);else if(C.isDirectionalLight){const z=n.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity*w),C.castShadow){const I=C.shadow,B=i.get(C);B.shadowBias=I.bias,B.shadowNormalBias=I.normalBias,B.shadowRadius=I.radius,B.shadowMapSize=I.mapSize,r.directionalShadow[p]=B,r.directionalShadowMap[p]=V,r.directionalShadowMatrix[p]=C.shadow.matrix,x++}r.directional[p]=z,p++}else if(C.isSpotLight){const z=n.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(T).multiplyScalar(R*w),z.distance=N,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,r.spot[g]=z;const I=C.shadow;if(C.map&&(r.spotLightMap[E]=C.map,E++,I.updateMatrices(C),C.castShadow&&b++),r.spotLightMatrix[g]=I.matrix,C.castShadow){const B=i.get(C);B.shadowBias=I.bias,B.shadowNormalBias=I.normalBias,B.shadowRadius=I.radius,B.shadowMapSize=I.mapSize,r.spotShadow[g]=B,r.spotShadowMap[g]=V,S++}g++}else if(C.isRectAreaLight){const z=n.get(C);z.color.copy(T).multiplyScalar(R),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),r.rectArea[y]=z,y++}else if(C.isPointLight){const z=n.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity*w),z.distance=C.distance,z.decay=C.decay,C.castShadow){const I=C.shadow,B=i.get(C);B.shadowBias=I.bias,B.shadowNormalBias=I.normalBias,B.shadowRadius=I.radius,B.shadowMapSize=I.mapSize,B.shadowCameraNear=I.camera.near,B.shadowCameraFar=I.camera.far,r.pointShadow[m]=B,r.pointShadowMap[m]=V,r.pointShadowMatrix[m]=C.shadow.matrix,M++}r.point[m]=z,m++}else if(C.isHemisphereLight){const z=n.get(C);z.skyColor.copy(C.color).multiplyScalar(R*w),z.groundColor.copy(C.groundColor).multiplyScalar(R*w),r.hemi[_]=z,_++}}y>0&&(t.isWebGL2||e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=At.LTC_FLOAT_1,r.rectAreaLTC2=At.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=At.LTC_HALF_1,r.rectAreaLTC2=At.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=v;const L=r.hash;(L.directionalLength!==p||L.pointLength!==m||L.spotLength!==g||L.rectAreaLength!==y||L.hemiLength!==_||L.numDirectionalShadows!==x||L.numPointShadows!==M||L.numSpotShadows!==S||L.numSpotMaps!==E)&&(r.directional.length=p,r.spot.length=g,r.rectArea.length=y,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=S+E-b,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=b,L.directionalLength=p,L.pointLength=m,L.spotLength=g,L.rectAreaLength=y,L.hemiLength=_,L.numDirectionalShadows=x,L.numPointShadows=M,L.numSpotShadows=S,L.numSpotMaps=E,r.version=c1++)}function c(u,h){let f=0,d=0,v=0,p=0,m=0;const g=h.matrixWorldInverse;for(let y=0,_=u.length;y<_;y++){const x=u[y];if(x.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(g),f++}else if(x.isSpotLight){const M=r.spot[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(g),v++}else if(x.isRectAreaLight){const M=r.rectArea[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const M=r.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const M=r.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:l,setupView:c,state:r}}function rp(e,t){const n=new u1(e,t),i=[],r=[];function a(){i.length=0,r.length=0}function s(h){i.push(h)}function o(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function h1(e,t){let n=new WeakMap;function i(a,s=0){const o=n.get(a);let l;return o===void 0?(l=new rp(e,t),n.set(a,[l])):s>=o.length?(l=new rp(e,t),o.push(l)):l=o[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class f1 extends hc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class d1 extends hc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Q,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const p1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function v1(e,t,n){let i=new Qp;const r=new be,a=new be,s=new Ke,o=new f1({depthPacking:w0}),l=new d1,c={},u=n.maxTextureSize,h={0:ti,1:Ha,2:ir},f=new Xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:p1,fragmentShader:m1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const v=new ji;v.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ni(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Op,this.render=function(x,M,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const E=e.getRenderTarget(),b=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),L=e.state;L.setBlending(or),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let G=0,H=x.length;G<H;G++){const C=x[G],T=C.shadow;if(T===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(T.autoUpdate===!1&&T.needsUpdate===!1)continue;r.copy(T.mapSize);const R=T.getFrameExtents();if(r.multiply(R),a.copy(T.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/R.x),r.x=a.x*R.x,T.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/R.y),r.y=a.y*R.y,T.mapSize.y=a.y)),T.map===null){const V=this.type!==Qs?{minFilter:vn,magFilter:vn}:{};T.map=new Wr(r.x,r.y,V),T.map.texture.name=C.name+".shadowMap",T.camera.updateProjectionMatrix()}e.setRenderTarget(T.map),e.clear();const N=T.getViewportCount();for(let V=0;V<N;V++){const z=T.getViewport(V);s.set(a.x*z.x,a.y*z.y,a.x*z.z,a.y*z.w),L.viewport(s),T.updateMatrices(C,V),i=T.getFrustum(),_(M,S,T.camera,C,this.type)}T.isPointLightShadow!==!0&&this.type===Qs&&g(T,S),T.needsUpdate=!1}m.needsUpdate=!1,e.setRenderTarget(E,b,w)};function g(x,M){const S=t.update(p);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Wr(r.x,r.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,e.setRenderTarget(x.mapPass),e.clear(),e.renderBufferDirect(M,null,S,f,p,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,e.setRenderTarget(x.map),e.clear(),e.renderBufferDirect(M,null,S,d,p,null)}function y(x,M,S,E,b,w){let L=null;const G=S.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(G!==void 0?L=G:L=S.isPointLight===!0?l:o,e.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const H=L.uuid,C=M.uuid;let T=c[H];T===void 0&&(T={},c[H]=T);let R=T[C];R===void 0&&(R=L.clone(),T[C]=R),L=R}return L.visible=M.visible,L.wireframe=M.wireframe,w===Qs?L.side=M.shadowSide!==null?M.shadowSide:M.side:L.side=M.shadowSide!==null?M.shadowSide:h[M.side],L.alphaMap=M.alphaMap,L.alphaTest=M.alphaTest,L.clipShadows=M.clipShadows,L.clippingPlanes=M.clippingPlanes,L.clipIntersection=M.clipIntersection,L.displacementMap=M.displacementMap,L.displacementScale=M.displacementScale,L.displacementBias=M.displacementBias,L.wireframeLinewidth=M.wireframeLinewidth,L.linewidth=M.linewidth,S.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(S.matrixWorld),L.nearDistance=E,L.farDistance=b),L}function _(x,M,S,E,b){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&b===Qs)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,x.matrixWorld);const G=t.update(x),H=x.material;if(Array.isArray(H)){const C=G.groups;for(let T=0,R=C.length;T<R;T++){const N=C[T],V=H[N.materialIndex];if(V&&V.visible){const z=y(x,V,E,S.near,S.far,b);e.renderBufferDirect(S,null,G,z,x,N)}}}else if(H.visible){const C=y(x,H,E,S.near,S.far,b);e.renderBufferDirect(S,null,G,C,x,null)}}const L=x.children;for(let G=0,H=L.length;G<H;G++)_(L[G],M,S,E,b)}}function g1(e,t,n){const i=n.isWebGL2;function r(){let q=!1;const rt=new Ke;let lt=null;const Et=new Ke(0,0,0,0);return{setMask:function(It){lt!==It&&!q&&(e.colorMask(It,It,It,It),lt=It)},setLocked:function(It){q=It},setClear:function(It,de,Ie,Ge,Vn){Vn===!0&&(It*=Ge,de*=Ge,Ie*=Ge),rt.set(It,de,Ie,Ge),Et.equals(rt)===!1&&(e.clearColor(It,de,Ie,Ge),Et.copy(rt))},reset:function(){q=!1,lt=null,Et.set(-1,0,0,0)}}}function a(){let q=!1,rt=null,lt=null,Et=null;return{setTest:function(It){It?gt(2929):ft(2929)},setMask:function(It){rt!==It&&!q&&(e.depthMask(It),rt=It)},setFunc:function(It){if(lt!==It){switch(It){case qg:e.depthFunc(512);break;case Yg:e.depthFunc(519);break;case jg:e.depthFunc(513);break;case $u:e.depthFunc(515);break;case $g:e.depthFunc(514);break;case Zg:e.depthFunc(518);break;case Jg:e.depthFunc(516);break;case Kg:e.depthFunc(517);break;default:e.depthFunc(515)}lt=It}},setLocked:function(It){q=It},setClear:function(It){Et!==It&&(e.clearDepth(It),Et=It)},reset:function(){q=!1,rt=null,lt=null,Et=null}}}function s(){let q=!1,rt=null,lt=null,Et=null,It=null,de=null,Ie=null,Ge=null,Vn=null;return{setTest:function(Me){q||(Me?gt(2960):ft(2960))},setMask:function(Me){rt!==Me&&!q&&(e.stencilMask(Me),rt=Me)},setFunc:function(Me,Hn,un){(lt!==Me||Et!==Hn||It!==un)&&(e.stencilFunc(Me,Hn,un),lt=Me,Et=Hn,It=un)},setOp:function(Me,Hn,un){(de!==Me||Ie!==Hn||Ge!==un)&&(e.stencilOp(Me,Hn,un),de=Me,Ie=Hn,Ge=un)},setLocked:function(Me){q=Me},setClear:function(Me){Vn!==Me&&(e.clearStencil(Me),Vn=Me)},reset:function(){q=!1,rt=null,lt=null,Et=null,It=null,de=null,Ie=null,Ge=null,Vn=null}}}const o=new r,l=new a,c=new s,u=new WeakMap,h=new WeakMap;let f={},d={},v=new WeakMap,p=[],m=null,g=!1,y=null,_=null,x=null,M=null,S=null,E=null,b=null,w=!1,L=null,G=null,H=null,C=null,T=null;const R=e.getParameter(35661);let N=!1,V=0;const z=e.getParameter(7938);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=V>=2);let I=null,B={};const Z=e.getParameter(3088),X=e.getParameter(2978),k=new Ke().fromArray(Z),J=new Ke().fromArray(X);function it(q,rt,lt){const Et=new Uint8Array(4),It=e.createTexture();e.bindTexture(q,It),e.texParameteri(q,10241,9728),e.texParameteri(q,10240,9728);for(let de=0;de<lt;de++)e.texImage2D(rt+de,0,6408,1,1,0,6408,5121,Et);return It}const Y={};Y[3553]=it(3553,3553,1),Y[34067]=it(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),gt(2929),l.setFunc($u),Jt(!1),Bt(jf),gt(2884),Xt(or);function gt(q){f[q]!==!0&&(e.enable(q),f[q]=!0)}function ft(q){f[q]!==!1&&(e.disable(q),f[q]=!1)}function st(q,rt){return d[q]!==rt?(e.bindFramebuffer(q,rt),d[q]=rt,i&&(q===36009&&(d[36160]=rt),q===36160&&(d[36009]=rt)),!0):!1}function pt(q,rt){let lt=p,Et=!1;if(q)if(lt=v.get(rt),lt===void 0&&(lt=[],v.set(rt,lt)),q.isWebGLMultipleRenderTargets){const It=q.texture;if(lt.length!==It.length||lt[0]!==36064){for(let de=0,Ie=It.length;de<Ie;de++)lt[de]=36064+de;lt.length=It.length,Et=!0}}else lt[0]!==36064&&(lt[0]=36064,Et=!0);else lt[0]!==1029&&(lt[0]=1029,Et=!0);Et&&(n.isWebGL2?e.drawBuffers(lt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(lt))}function W(q){return m!==q?(e.useProgram(q),m=q,!0):!1}const Ft={[Fa]:32774,[Ug]:32778,[Og]:32779};if(i)Ft[Kf]=32775,Ft[Qf]=32776;else{const q=t.get("EXT_blend_minmax");q!==null&&(Ft[Kf]=q.MIN_EXT,Ft[Qf]=q.MAX_EXT)}const vt={[Ng]:0,[zg]:1,[Bg]:768,[Np]:770,[Xg]:776,[Hg]:774,[kg]:772,[Gg]:769,[zp]:771,[Wg]:775,[Vg]:773};function Xt(q,rt,lt,Et,It,de,Ie,Ge){if(q===or){g===!0&&(ft(3042),g=!1);return}if(g===!1&&(gt(3042),g=!0),q!==Ig){if(q!==y||Ge!==w){if((_!==Fa||S!==Fa)&&(e.blendEquation(32774),_=Fa,S=Fa),Ge)switch(q){case Na:e.blendFuncSeparate(1,771,1,771);break;case $f:e.blendFunc(1,1);break;case Zf:e.blendFuncSeparate(0,769,0,1);break;case Jf:e.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Na:e.blendFuncSeparate(770,771,1,771);break;case $f:e.blendFunc(770,1);break;case Zf:e.blendFuncSeparate(0,769,0,1);break;case Jf:e.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}x=null,M=null,E=null,b=null,y=q,w=Ge}return}It=It||rt,de=de||lt,Ie=Ie||Et,(rt!==_||It!==S)&&(e.blendEquationSeparate(Ft[rt],Ft[It]),_=rt,S=It),(lt!==x||Et!==M||de!==E||Ie!==b)&&(e.blendFuncSeparate(vt[lt],vt[Et],vt[de],vt[Ie]),x=lt,M=Et,E=de,b=Ie),y=q,w=null}function bt(q,rt){q.side===ir?ft(2884):gt(2884);let lt=q.side===ti;rt&&(lt=!lt),Jt(lt),q.blending===Na&&q.transparent===!1?Xt(or):Xt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.premultipliedAlpha),l.setFunc(q.depthFunc),l.setTest(q.depthTest),l.setMask(q.depthWrite),o.setMask(q.colorWrite);const Et=q.stencilWrite;c.setTest(Et),Et&&(c.setMask(q.stencilWriteMask),c.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),c.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Nt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?gt(32926):ft(32926)}function Jt(q){L!==q&&(q?e.frontFace(2304):e.frontFace(2305),L=q)}function Bt(q){q!==Rg?(gt(2884),q!==G&&(q===jf?e.cullFace(1029):q===Pg?e.cullFace(1028):e.cullFace(1032))):ft(2884),G=q}function Ut(q){q!==H&&(N&&e.lineWidth(q),H=q)}function Nt(q,rt,lt){q?(gt(32823),(C!==rt||T!==lt)&&(e.polygonOffset(rt,lt),C=rt,T=lt)):ft(32823)}function ee(q){q?gt(3089):ft(3089)}function fe(q){q===void 0&&(q=33984+R-1),I!==q&&(e.activeTexture(q),I=q)}function O(q,rt,lt){lt===void 0&&(I===null?lt=33984+R-1:lt=I);let Et=B[lt];Et===void 0&&(Et={type:void 0,texture:void 0},B[lt]=Et),(Et.type!==q||Et.texture!==rt)&&(I!==lt&&(e.activeTexture(lt),I=lt),e.bindTexture(q,rt||Y[q]),Et.type=q,Et.texture=rt)}function D(){const q=B[I];q!==void 0&&q.type!==void 0&&(e.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function nt(){try{e.compressedTexImage2D.apply(e,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ut(){try{e.compressedTexImage3D.apply(e,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function mt(){try{e.texSubImage2D.apply(e,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xt(){try{e.texSubImage3D.apply(e,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Wt(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Lt(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ot(){try{e.texStorage2D.apply(e,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function kt(){try{e.texStorage3D.apply(e,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function $(){try{e.texImage2D.apply(e,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function dt(){try{e.texImage3D.apply(e,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _t(q){k.equals(q)===!1&&(e.scissor(q.x,q.y,q.z,q.w),k.copy(q))}function Tt(q){J.equals(q)===!1&&(e.viewport(q.x,q.y,q.z,q.w),J.copy(q))}function wt(q,rt){let lt=h.get(rt);lt===void 0&&(lt=new WeakMap,h.set(rt,lt));let Et=lt.get(q);Et===void 0&&(Et=e.getUniformBlockIndex(rt,q.name),lt.set(q,Et))}function qt(q,rt){const Et=h.get(rt).get(q);u.get(q)!==Et&&(e.uniformBlockBinding(rt,Et,q.__bindingPointIndex),u.set(q,Et))}function he(){e.disable(3042),e.disable(2884),e.disable(2929),e.disable(32823),e.disable(3089),e.disable(2960),e.disable(32926),e.blendEquation(32774),e.blendFunc(1,0),e.blendFuncSeparate(1,0,1,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(513),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(519,0,4294967295),e.stencilOp(7680,7680,7680),e.clearStencil(0),e.cullFace(1029),e.frontFace(2305),e.polygonOffset(0,0),e.activeTexture(33984),e.bindFramebuffer(36160,null),i===!0&&(e.bindFramebuffer(36009,null),e.bindFramebuffer(36008,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},I=null,B={},d={},v=new WeakMap,p=[],m=null,g=!1,y=null,_=null,x=null,M=null,S=null,E=null,b=null,w=!1,L=null,G=null,H=null,C=null,T=null,k.set(0,0,e.canvas.width,e.canvas.height),J.set(0,0,e.canvas.width,e.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:gt,disable:ft,bindFramebuffer:st,drawBuffers:pt,useProgram:W,setBlending:Xt,setMaterial:bt,setFlipSided:Jt,setCullFace:Bt,setLineWidth:Ut,setPolygonOffset:Nt,setScissorTest:ee,activeTexture:fe,bindTexture:O,unbindTexture:D,compressedTexImage2D:nt,compressedTexImage3D:ut,texImage2D:$,texImage3D:dt,updateUBOMapping:wt,uniformBlockBinding:qt,texStorage2D:ot,texStorage3D:kt,texSubImage2D:mt,texSubImage3D:xt,compressedTexSubImage2D:Wt,compressedTexSubImage3D:Lt,scissor:_t,viewport:Tt,reset:he}}function _1(e,t,n,i,r,a,s){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),v=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(O,D){return g?new OffscreenCanvas(O,D):Jc("canvas")}function _(O,D,nt,ut){let mt=1;if((O.width>ut||O.height>ut)&&(mt=ut/Math.max(O.width,O.height)),mt<1||D===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){const xt=D?eh:Math.floor,Wt=xt(mt*O.width),Lt=xt(mt*O.height);p===void 0&&(p=y(Wt,Lt));const ot=nt?y(Wt,Lt):p;return ot.width=Wt,ot.height=Lt,ot.getContext("2d").drawImage(O,0,0,Wt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+Wt+"x"+Lt+")."),ot}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function x(O){return Td(O.width)&&Td(O.height)}function M(O){return o?!1:O.wrapS!==hi||O.wrapT!==hi||O.minFilter!==vn&&O.minFilter!==Yn}function S(O,D){return O.generateMipmaps&&D&&O.minFilter!==vn&&O.minFilter!==Yn}function E(O){e.generateMipmap(O)}function b(O,D,nt,ut,mt=!1){if(o===!1)return D;if(O!==null){if(e[O]!==void 0)return e[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let xt=D;return D===6403&&(nt===5126&&(xt=33326),nt===5131&&(xt=33325),nt===5121&&(xt=33321)),D===33319&&(nt===5126&&(xt=33328),nt===5131&&(xt=33327),nt===5121&&(xt=33323)),D===6408&&(nt===5126&&(xt=34836),nt===5131&&(xt=34842),nt===5121&&(xt=ut===Re&&mt===!1?35907:32856),nt===32819&&(xt=32854),nt===32820&&(xt=32855)),(xt===33325||xt===33326||xt===33327||xt===33328||xt===34842||xt===34836)&&t.get("EXT_color_buffer_float"),xt}function w(O,D,nt){return S(O,nt)===!0||O.isFramebufferTexture&&O.minFilter!==vn&&O.minFilter!==Yn?Math.log2(Math.max(D.width,D.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?D.mipmaps.length:1}function L(O){return O===vn||O===td||O===ed?9728:9729}function G(O){const D=O.target;D.removeEventListener("dispose",G),C(D),D.isVideoTexture&&v.delete(D)}function H(O){const D=O.target;D.removeEventListener("dispose",H),R(D)}function C(O){const D=i.get(O);if(D.__webglInit===void 0)return;const nt=O.source,ut=m.get(nt);if(ut){const mt=ut[D.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&T(O),Object.keys(ut).length===0&&m.delete(nt)}i.remove(O)}function T(O){const D=i.get(O);e.deleteTexture(D.__webglTexture);const nt=O.source,ut=m.get(nt);delete ut[D.__cacheKey],s.memory.textures--}function R(O){const D=O.texture,nt=i.get(O),ut=i.get(D);if(ut.__webglTexture!==void 0&&(e.deleteTexture(ut.__webglTexture),s.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++)e.deleteFramebuffer(nt.__webglFramebuffer[mt]),nt.__webglDepthbuffer&&e.deleteRenderbuffer(nt.__webglDepthbuffer[mt]);else{if(e.deleteFramebuffer(nt.__webglFramebuffer),nt.__webglDepthbuffer&&e.deleteRenderbuffer(nt.__webglDepthbuffer),nt.__webglMultisampledFramebuffer&&e.deleteFramebuffer(nt.__webglMultisampledFramebuffer),nt.__webglColorRenderbuffer)for(let mt=0;mt<nt.__webglColorRenderbuffer.length;mt++)nt.__webglColorRenderbuffer[mt]&&e.deleteRenderbuffer(nt.__webglColorRenderbuffer[mt]);nt.__webglDepthRenderbuffer&&e.deleteRenderbuffer(nt.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let mt=0,xt=D.length;mt<xt;mt++){const Wt=i.get(D[mt]);Wt.__webglTexture&&(e.deleteTexture(Wt.__webglTexture),s.memory.textures--),i.remove(D[mt])}i.remove(D),i.remove(O)}let N=0;function V(){N=0}function z(){const O=N;return O>=l&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l),N+=1,O}function I(O){const D=[];return D.push(O.wrapS),D.push(O.wrapT),D.push(O.wrapR||0),D.push(O.magFilter),D.push(O.minFilter),D.push(O.anisotropy),D.push(O.internalFormat),D.push(O.format),D.push(O.type),D.push(O.generateMipmaps),D.push(O.premultiplyAlpha),D.push(O.flipY),D.push(O.unpackAlignment),D.push(O.encoding),D.join()}function B(O,D){const nt=i.get(O);if(O.isVideoTexture&&ee(O),O.isRenderTargetTexture===!1&&O.version>0&&nt.__version!==O.version){const ut=O.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(nt,O,D);return}}n.bindTexture(3553,nt.__webglTexture,33984+D)}function Z(O,D){const nt=i.get(O);if(O.version>0&&nt.__version!==O.version){ft(nt,O,D);return}n.bindTexture(35866,nt.__webglTexture,33984+D)}function X(O,D){const nt=i.get(O);if(O.version>0&&nt.__version!==O.version){ft(nt,O,D);return}n.bindTexture(32879,nt.__webglTexture,33984+D)}function k(O,D){const nt=i.get(O);if(O.version>0&&nt.__version!==O.version){st(nt,O,D);return}n.bindTexture(34067,nt.__webglTexture,33984+D)}const J={[Ku]:10497,[hi]:33071,[Qu]:33648},it={[vn]:9728,[td]:9984,[ed]:9986,[Yn]:9729,[s0]:9985,[Nl]:9987};function Y(O,D,nt){if(nt?(e.texParameteri(O,10242,J[D.wrapS]),e.texParameteri(O,10243,J[D.wrapT]),(O===32879||O===35866)&&e.texParameteri(O,32882,J[D.wrapR]),e.texParameteri(O,10240,it[D.magFilter]),e.texParameteri(O,10241,it[D.minFilter])):(e.texParameteri(O,10242,33071),e.texParameteri(O,10243,33071),(O===32879||O===35866)&&e.texParameteri(O,32882,33071),(D.wrapS!==hi||D.wrapT!==hi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(O,10240,L(D.magFilter)),e.texParameteri(O,10241,L(D.minFilter)),D.minFilter!==vn&&D.minFilter!==Yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const ut=t.get("EXT_texture_filter_anisotropic");if(D.type===Lr&&t.has("OES_texture_float_linear")===!1||o===!1&&D.type===co&&t.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||i.get(D).__currentAnisotropy)&&(e.texParameterf(O,ut.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,r.getMaxAnisotropy())),i.get(D).__currentAnisotropy=D.anisotropy)}}function gt(O,D){let nt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,D.addEventListener("dispose",G));const ut=D.source;let mt=m.get(ut);mt===void 0&&(mt={},m.set(ut,mt));const xt=I(D);if(xt!==O.__cacheKey){mt[xt]===void 0&&(mt[xt]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,nt=!0),mt[xt].usedTimes++;const Wt=mt[O.__cacheKey];Wt!==void 0&&(mt[O.__cacheKey].usedTimes--,Wt.usedTimes===0&&T(D)),O.__cacheKey=xt,O.__webglTexture=mt[xt].texture}return nt}function ft(O,D,nt){let ut=3553;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(ut=35866),D.isData3DTexture&&(ut=32879);const mt=gt(O,D),xt=D.source;n.bindTexture(ut,O.__webglTexture,33984+nt);const Wt=i.get(xt);if(xt.version!==Wt.__version||mt===!0){n.activeTexture(33984+nt),e.pixelStorei(37440,D.flipY),e.pixelStorei(37441,D.premultiplyAlpha),e.pixelStorei(3317,D.unpackAlignment),e.pixelStorei(37443,0);const Lt=M(D)&&x(D.image)===!1;let ot=_(D.image,Lt,!1,u);ot=fe(D,ot);const kt=x(ot)||o,$=a.convert(D.format,D.encoding);let dt=a.convert(D.type),_t=b(D.internalFormat,$,dt,D.encoding,D.isVideoTexture);Y(ut,D,kt);let Tt;const wt=D.mipmaps,qt=o&&D.isVideoTexture!==!0,he=Wt.__version===void 0||mt===!0,q=w(D,ot,kt);if(D.isDepthTexture)_t=6402,o?D.type===Lr?_t=36012:D.type===Cr?_t=33190:D.type===za?_t=35056:_t=33189:D.type===Lr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===Fr&&_t===6402&&D.type!==kp&&D.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=Cr,dt=a.convert(D.type)),D.format===qa&&_t===6402&&(_t=34041,D.type!==za&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=za,dt=a.convert(D.type))),he&&(qt?n.texStorage2D(3553,1,_t,ot.width,ot.height):n.texImage2D(3553,0,_t,ot.width,ot.height,0,$,dt,null));else if(D.isDataTexture)if(wt.length>0&&kt){qt&&he&&n.texStorage2D(3553,q,_t,wt[0].width,wt[0].height);for(let rt=0,lt=wt.length;rt<lt;rt++)Tt=wt[rt],qt?n.texSubImage2D(3553,rt,0,0,Tt.width,Tt.height,$,dt,Tt.data):n.texImage2D(3553,rt,_t,Tt.width,Tt.height,0,$,dt,Tt.data);D.generateMipmaps=!1}else qt?(he&&n.texStorage2D(3553,q,_t,ot.width,ot.height),n.texSubImage2D(3553,0,0,0,ot.width,ot.height,$,dt,ot.data)):n.texImage2D(3553,0,_t,ot.width,ot.height,0,$,dt,ot.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){qt&&he&&n.texStorage3D(35866,q,_t,wt[0].width,wt[0].height,ot.depth);for(let rt=0,lt=wt.length;rt<lt;rt++)Tt=wt[rt],D.format!==fi?$!==null?qt?n.compressedTexSubImage3D(35866,rt,0,0,0,Tt.width,Tt.height,ot.depth,$,Tt.data,0,0):n.compressedTexImage3D(35866,rt,_t,Tt.width,Tt.height,ot.depth,0,Tt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?n.texSubImage3D(35866,rt,0,0,0,Tt.width,Tt.height,ot.depth,$,dt,Tt.data):n.texImage3D(35866,rt,_t,Tt.width,Tt.height,ot.depth,0,$,dt,Tt.data)}else{qt&&he&&n.texStorage2D(3553,q,_t,wt[0].width,wt[0].height);for(let rt=0,lt=wt.length;rt<lt;rt++)Tt=wt[rt],D.format!==fi?$!==null?qt?n.compressedTexSubImage2D(3553,rt,0,0,Tt.width,Tt.height,$,Tt.data):n.compressedTexImage2D(3553,rt,_t,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?n.texSubImage2D(3553,rt,0,0,Tt.width,Tt.height,$,dt,Tt.data):n.texImage2D(3553,rt,_t,Tt.width,Tt.height,0,$,dt,Tt.data)}else if(D.isDataArrayTexture)qt?(he&&n.texStorage3D(35866,q,_t,ot.width,ot.height,ot.depth),n.texSubImage3D(35866,0,0,0,0,ot.width,ot.height,ot.depth,$,dt,ot.data)):n.texImage3D(35866,0,_t,ot.width,ot.height,ot.depth,0,$,dt,ot.data);else if(D.isData3DTexture)qt?(he&&n.texStorage3D(32879,q,_t,ot.width,ot.height,ot.depth),n.texSubImage3D(32879,0,0,0,0,ot.width,ot.height,ot.depth,$,dt,ot.data)):n.texImage3D(32879,0,_t,ot.width,ot.height,ot.depth,0,$,dt,ot.data);else if(D.isFramebufferTexture){if(he)if(qt)n.texStorage2D(3553,q,_t,ot.width,ot.height);else{let rt=ot.width,lt=ot.height;for(let Et=0;Et<q;Et++)n.texImage2D(3553,Et,_t,rt,lt,0,$,dt,null),rt>>=1,lt>>=1}}else if(wt.length>0&&kt){qt&&he&&n.texStorage2D(3553,q,_t,wt[0].width,wt[0].height);for(let rt=0,lt=wt.length;rt<lt;rt++)Tt=wt[rt],qt?n.texSubImage2D(3553,rt,0,0,$,dt,Tt):n.texImage2D(3553,rt,_t,$,dt,Tt);D.generateMipmaps=!1}else qt?(he&&n.texStorage2D(3553,q,_t,ot.width,ot.height),n.texSubImage2D(3553,0,0,0,$,dt,ot)):n.texImage2D(3553,0,_t,$,dt,ot);S(D,kt)&&E(ut),Wt.__version=xt.version,D.onUpdate&&D.onUpdate(D)}O.__version=D.version}function st(O,D,nt){if(D.image.length!==6)return;const ut=gt(O,D),mt=D.source;n.bindTexture(34067,O.__webglTexture,33984+nt);const xt=i.get(mt);if(mt.version!==xt.__version||ut===!0){n.activeTexture(33984+nt),e.pixelStorei(37440,D.flipY),e.pixelStorei(37441,D.premultiplyAlpha),e.pixelStorei(3317,D.unpackAlignment),e.pixelStorei(37443,0);const Wt=D.isCompressedTexture||D.image[0].isCompressedTexture,Lt=D.image[0]&&D.image[0].isDataTexture,ot=[];for(let rt=0;rt<6;rt++)!Wt&&!Lt?ot[rt]=_(D.image[rt],!1,!0,c):ot[rt]=Lt?D.image[rt].image:D.image[rt],ot[rt]=fe(D,ot[rt]);const kt=ot[0],$=x(kt)||o,dt=a.convert(D.format,D.encoding),_t=a.convert(D.type),Tt=b(D.internalFormat,dt,_t,D.encoding),wt=o&&D.isVideoTexture!==!0,qt=xt.__version===void 0||ut===!0;let he=w(D,kt,$);Y(34067,D,$);let q;if(Wt){wt&&qt&&n.texStorage2D(34067,he,Tt,kt.width,kt.height);for(let rt=0;rt<6;rt++){q=ot[rt].mipmaps;for(let lt=0;lt<q.length;lt++){const Et=q[lt];D.format!==fi?dt!==null?wt?n.compressedTexSubImage2D(34069+rt,lt,0,0,Et.width,Et.height,dt,Et.data):n.compressedTexImage2D(34069+rt,lt,Tt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?n.texSubImage2D(34069+rt,lt,0,0,Et.width,Et.height,dt,_t,Et.data):n.texImage2D(34069+rt,lt,Tt,Et.width,Et.height,0,dt,_t,Et.data)}}}else{q=D.mipmaps,wt&&qt&&(q.length>0&&he++,n.texStorage2D(34067,he,Tt,ot[0].width,ot[0].height));for(let rt=0;rt<6;rt++)if(Lt){wt?n.texSubImage2D(34069+rt,0,0,0,ot[rt].width,ot[rt].height,dt,_t,ot[rt].data):n.texImage2D(34069+rt,0,Tt,ot[rt].width,ot[rt].height,0,dt,_t,ot[rt].data);for(let lt=0;lt<q.length;lt++){const It=q[lt].image[rt].image;wt?n.texSubImage2D(34069+rt,lt+1,0,0,It.width,It.height,dt,_t,It.data):n.texImage2D(34069+rt,lt+1,Tt,It.width,It.height,0,dt,_t,It.data)}}else{wt?n.texSubImage2D(34069+rt,0,0,0,dt,_t,ot[rt]):n.texImage2D(34069+rt,0,Tt,dt,_t,ot[rt]);for(let lt=0;lt<q.length;lt++){const Et=q[lt];wt?n.texSubImage2D(34069+rt,lt+1,0,0,dt,_t,Et.image[rt]):n.texImage2D(34069+rt,lt+1,Tt,dt,_t,Et.image[rt])}}}S(D,$)&&E(34067),xt.__version=mt.version,D.onUpdate&&D.onUpdate(D)}O.__version=D.version}function pt(O,D,nt,ut,mt){const xt=a.convert(nt.format,nt.encoding),Wt=a.convert(nt.type),Lt=b(nt.internalFormat,xt,Wt,nt.encoding);i.get(D).__hasExternalTextures||(mt===32879||mt===35866?n.texImage3D(mt,0,Lt,D.width,D.height,D.depth,0,xt,Wt,null):n.texImage2D(mt,0,Lt,D.width,D.height,0,xt,Wt,null)),n.bindFramebuffer(36160,O),Nt(D)?f.framebufferTexture2DMultisampleEXT(36160,ut,mt,i.get(nt).__webglTexture,0,Ut(D)):(mt===3553||mt>=34069&&mt<=34074)&&e.framebufferTexture2D(36160,ut,mt,i.get(nt).__webglTexture,0),n.bindFramebuffer(36160,null)}function W(O,D,nt){if(e.bindRenderbuffer(36161,O),D.depthBuffer&&!D.stencilBuffer){let ut=33189;if(nt||Nt(D)){const mt=D.depthTexture;mt&&mt.isDepthTexture&&(mt.type===Lr?ut=36012:mt.type===Cr&&(ut=33190));const xt=Ut(D);Nt(D)?f.renderbufferStorageMultisampleEXT(36161,xt,ut,D.width,D.height):e.renderbufferStorageMultisample(36161,xt,ut,D.width,D.height)}else e.renderbufferStorage(36161,ut,D.width,D.height);e.framebufferRenderbuffer(36160,36096,36161,O)}else if(D.depthBuffer&&D.stencilBuffer){const ut=Ut(D);nt&&Nt(D)===!1?e.renderbufferStorageMultisample(36161,ut,35056,D.width,D.height):Nt(D)?f.renderbufferStorageMultisampleEXT(36161,ut,35056,D.width,D.height):e.renderbufferStorage(36161,34041,D.width,D.height),e.framebufferRenderbuffer(36160,33306,36161,O)}else{const ut=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let mt=0;mt<ut.length;mt++){const xt=ut[mt],Wt=a.convert(xt.format,xt.encoding),Lt=a.convert(xt.type),ot=b(xt.internalFormat,Wt,Lt,xt.encoding),kt=Ut(D);nt&&Nt(D)===!1?e.renderbufferStorageMultisample(36161,kt,ot,D.width,D.height):Nt(D)?f.renderbufferStorageMultisampleEXT(36161,kt,ot,D.width,D.height):e.renderbufferStorage(36161,ot,D.width,D.height)}}e.bindRenderbuffer(36161,null)}function Ft(O,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,O),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),B(D.depthTexture,0);const ut=i.get(D.depthTexture).__webglTexture,mt=Ut(D);if(D.depthTexture.format===Fr)Nt(D)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ut,0,mt):e.framebufferTexture2D(36160,36096,3553,ut,0);else if(D.depthTexture.format===qa)Nt(D)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ut,0,mt):e.framebufferTexture2D(36160,33306,3553,ut,0);else throw new Error("Unknown depthTexture format")}function vt(O){const D=i.get(O),nt=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!D.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");Ft(D.__webglFramebuffer,O)}else if(nt){D.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)n.bindFramebuffer(36160,D.__webglFramebuffer[ut]),D.__webglDepthbuffer[ut]=e.createRenderbuffer(),W(D.__webglDepthbuffer[ut],O,!1)}else n.bindFramebuffer(36160,D.__webglFramebuffer),D.__webglDepthbuffer=e.createRenderbuffer(),W(D.__webglDepthbuffer,O,!1);n.bindFramebuffer(36160,null)}function Xt(O,D,nt){const ut=i.get(O);D!==void 0&&pt(ut.__webglFramebuffer,O,O.texture,36064,3553),nt!==void 0&&vt(O)}function bt(O){const D=O.texture,nt=i.get(O),ut=i.get(D);O.addEventListener("dispose",H),O.isWebGLMultipleRenderTargets!==!0&&(ut.__webglTexture===void 0&&(ut.__webglTexture=e.createTexture()),ut.__version=D.version,s.memory.textures++);const mt=O.isWebGLCubeRenderTarget===!0,xt=O.isWebGLMultipleRenderTargets===!0,Wt=x(O)||o;if(mt){nt.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)nt.__webglFramebuffer[Lt]=e.createFramebuffer()}else{if(nt.__webglFramebuffer=e.createFramebuffer(),xt)if(r.drawBuffers){const Lt=O.texture;for(let ot=0,kt=Lt.length;ot<kt;ot++){const $=i.get(Lt[ot]);$.__webglTexture===void 0&&($.__webglTexture=e.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&O.samples>0&&Nt(O)===!1){const Lt=xt?D:[D];nt.__webglMultisampledFramebuffer=e.createFramebuffer(),nt.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,nt.__webglMultisampledFramebuffer);for(let ot=0;ot<Lt.length;ot++){const kt=Lt[ot];nt.__webglColorRenderbuffer[ot]=e.createRenderbuffer(),e.bindRenderbuffer(36161,nt.__webglColorRenderbuffer[ot]);const $=a.convert(kt.format,kt.encoding),dt=a.convert(kt.type),_t=b(kt.internalFormat,$,dt,kt.encoding,O.isXRRenderTarget===!0),Tt=Ut(O);e.renderbufferStorageMultisample(36161,Tt,_t,O.width,O.height),e.framebufferRenderbuffer(36160,36064+ot,36161,nt.__webglColorRenderbuffer[ot])}e.bindRenderbuffer(36161,null),O.depthBuffer&&(nt.__webglDepthRenderbuffer=e.createRenderbuffer(),W(nt.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(36160,null)}}if(mt){n.bindTexture(34067,ut.__webglTexture),Y(34067,D,Wt);for(let Lt=0;Lt<6;Lt++)pt(nt.__webglFramebuffer[Lt],O,D,36064,34069+Lt);S(D,Wt)&&E(34067),n.unbindTexture()}else if(xt){const Lt=O.texture;for(let ot=0,kt=Lt.length;ot<kt;ot++){const $=Lt[ot],dt=i.get($);n.bindTexture(3553,dt.__webglTexture),Y(3553,$,Wt),pt(nt.__webglFramebuffer,O,$,36064+ot,3553),S($,Wt)&&E(3553)}n.unbindTexture()}else{let Lt=3553;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(o?Lt=O.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Lt,ut.__webglTexture),Y(Lt,D,Wt),pt(nt.__webglFramebuffer,O,D,36064,Lt),S(D,Wt)&&E(Lt),n.unbindTexture()}O.depthBuffer&&vt(O)}function Jt(O){const D=x(O)||o,nt=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let ut=0,mt=nt.length;ut<mt;ut++){const xt=nt[ut];if(S(xt,D)){const Wt=O.isWebGLCubeRenderTarget?34067:3553,Lt=i.get(xt).__webglTexture;n.bindTexture(Wt,Lt),E(Wt),n.unbindTexture()}}}function Bt(O){if(o&&O.samples>0&&Nt(O)===!1){const D=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],nt=O.width,ut=O.height;let mt=16384;const xt=[],Wt=O.stencilBuffer?33306:36096,Lt=i.get(O),ot=O.isWebGLMultipleRenderTargets===!0;if(ot)for(let kt=0;kt<D.length;kt++)n.bindFramebuffer(36160,Lt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064+kt,36161,null),n.bindFramebuffer(36160,Lt.__webglFramebuffer),e.framebufferTexture2D(36009,36064+kt,3553,null,0);n.bindFramebuffer(36008,Lt.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,Lt.__webglFramebuffer);for(let kt=0;kt<D.length;kt++){xt.push(36064+kt),O.depthBuffer&&xt.push(Wt);const $=Lt.__ignoreDepthValues!==void 0?Lt.__ignoreDepthValues:!1;if($===!1&&(O.depthBuffer&&(mt|=256),O.stencilBuffer&&(mt|=1024)),ot&&e.framebufferRenderbuffer(36008,36064,36161,Lt.__webglColorRenderbuffer[kt]),$===!0&&(e.invalidateFramebuffer(36008,[Wt]),e.invalidateFramebuffer(36009,[Wt])),ot){const dt=i.get(D[kt]).__webglTexture;e.framebufferTexture2D(36009,36064,3553,dt,0)}e.blitFramebuffer(0,0,nt,ut,0,0,nt,ut,mt,9728),d&&e.invalidateFramebuffer(36008,xt)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),ot)for(let kt=0;kt<D.length;kt++){n.bindFramebuffer(36160,Lt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064+kt,36161,Lt.__webglColorRenderbuffer[kt]);const $=i.get(D[kt]).__webglTexture;n.bindFramebuffer(36160,Lt.__webglFramebuffer),e.framebufferTexture2D(36009,36064+kt,3553,$,0)}n.bindFramebuffer(36009,Lt.__webglMultisampledFramebuffer)}}function Ut(O){return Math.min(h,O.samples)}function Nt(O){const D=i.get(O);return o&&O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function ee(O){const D=s.render.frame;v.get(O)!==D&&(v.set(O,D),O.update())}function fe(O,D){const nt=O.encoding,ut=O.format,mt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===th||nt!==Hr&&(nt===Re?o===!1?t.has("EXT_sRGB")===!0&&ut===fi?(O.format=th,O.minFilter=Yn,O.generateMipmaps=!1):D=Wp.sRGBToLinear(D):(ut!==fi||mt!==Vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",nt)),D}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=B,this.setTexture2DArray=Z,this.setTexture3D=X,this.setTextureCube=k,this.rebindTextures=Xt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Nt}function y1(e,t,n){const i=n.isWebGL2;function r(a,s=null){let o;if(a===Vr)return 5121;if(a===u0)return 32819;if(a===h0)return 32820;if(a===o0)return 5120;if(a===c0)return 5122;if(a===kp)return 5123;if(a===l0)return 5124;if(a===Cr)return 5125;if(a===Lr)return 5126;if(a===co)return i?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===f0)return 6406;if(a===fi)return 6408;if(a===p0)return 6409;if(a===m0)return 6410;if(a===Fr)return 6402;if(a===qa)return 34041;if(a===v0)return 6403;if(a===d0)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===th)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===g0)return 36244;if(a===_0)return 33319;if(a===y0)return 33320;if(a===x0)return 36249;if(a===iu||a===ru||a===au||a===su)if(s===Re)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===iu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ru)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===au)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===su)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===iu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ru)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===au)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===su)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===nd||a===id||a===rd||a===ad)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===nd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===id)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===rd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ad)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===M0)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===sd||a===od)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(a===sd)return s===Re?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===od)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===cd||a===ld||a===ud||a===hd||a===fd||a===dd||a===pd||a===md||a===vd||a===gd||a===_d||a===yd||a===xd||a===Md)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(a===cd)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===ld)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===ud)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===hd)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===fd)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===dd)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===pd)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===md)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===vd)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===gd)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===_d)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===yd)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===xd)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Md)return s===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===bd)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(a===bd)return s===Re?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===za?i?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):e[a]!==void 0?e[a]:null}return{convert:r}}class x1 extends jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Gc extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M1={type:"move"};class Iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const p of t.hand.values()){const m=n.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const y=new Gc;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[p.jointName]=y,c.add(y)}const g=c.joints[p.jointName];m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,v=.005;c.inputState.pinching&&f>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(M1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}}class b1 extends mi{constructor(t,n,i,r,a,s,o,l,c,u){if(u=u!==void 0?u:Fr,u!==Fr&&u!==qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Fr&&(i=Cr),i===void 0&&u===qa&&(i=za),super(null,r,a,s,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1}}class w1 extends ks{constructor(t,n){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=null,c=null,u=null,h=null,f=null,d=null;const v=n.getContextAttributes();let p=null,m=null;const g=[],y=[],_=new jn;_.layers.enable(1),_.viewport=new Ke;const x=new jn;x.layers.enable(2),x.viewport=new Ke;const M=[_,x],S=new x1;S.layers.enable(1),S.layers.enable(2);let E=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let B=g[I];return B===void 0&&(B=new Iu,g[I]=B),B.getTargetRaySpace()},this.getControllerGrip=function(I){let B=g[I];return B===void 0&&(B=new Iu,g[I]=B),B.getGripSpace()},this.getHand=function(I){let B=g[I];return B===void 0&&(B=new Iu,g[I]=B),B.getHandSpace()};function w(I){const B=y.indexOf(I.inputSource);if(B===-1)return;const Z=g[B];Z!==void 0&&Z.dispatchEvent({type:I.type,data:I.inputSource})}function L(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",G);for(let I=0;I<g.length;I++){const B=y[I];B!==null&&(y[I]=null,g[I].disconnect(B))}E=null,b=null,t.setRenderTarget(p),f=null,h=null,u=null,r=null,m=null,z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",L),r.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const B={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(r,n,B),r.updateRenderState({baseLayer:f}),m=new Wr(f.framebufferWidth,f.framebufferHeight,{format:fi,type:Vr,encoding:t.outputEncoding,stencilBuffer:v.stencil})}else{let B=null,Z=null,X=null;v.depth&&(X=v.stencil?35056:33190,B=v.stencil?qa:Fr,Z=v.stencil?za:Cr);const k={colorFormat:32856,depthFormat:X,scaleFactor:a};u=new XRWebGLBinding(r,n),h=u.createProjectionLayer(k),r.updateRenderState({layers:[h]}),m=new Wr(h.textureWidth,h.textureHeight,{format:fi,type:Vr,depthTexture:new b1(h.textureWidth,h.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:v.stencil,encoding:t.outputEncoding,samples:v.antialias?4:0});const J=t.properties.get(m);J.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,s=await r.requestReferenceSpace(o),z.setContext(r),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function G(I){for(let B=0;B<I.removed.length;B++){const Z=I.removed[B],X=y.indexOf(Z);X>=0&&(y[X]=null,g[X].dispatchEvent({type:"disconnected",data:Z}))}for(let B=0;B<I.added.length;B++){const Z=I.added[B];let X=y.indexOf(Z);if(X===-1){for(let J=0;J<g.length;J++)if(J>=y.length){y.push(Z),X=J;break}else if(y[J]===null){y[J]=Z,X=J;break}if(X===-1)break}const k=g[X];k&&k.dispatchEvent({type:"connected",data:Z})}}const H=new Q,C=new Q;function T(I,B,Z){H.setFromMatrixPosition(B.matrixWorld),C.setFromMatrixPosition(Z.matrixWorld);const X=H.distanceTo(C),k=B.projectionMatrix.elements,J=Z.projectionMatrix.elements,it=k[14]/(k[10]-1),Y=k[14]/(k[10]+1),gt=(k[9]+1)/k[5],ft=(k[9]-1)/k[5],st=(k[8]-1)/k[0],pt=(J[8]+1)/J[0],W=it*st,Ft=it*pt,vt=X/(-st+pt),Xt=vt*-st;B.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Xt),I.translateZ(vt),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const bt=it+vt,Jt=Y+vt,Bt=W-Xt,Ut=Ft+(X-Xt),Nt=gt*Y/Jt*bt,ee=ft*Y/Jt*bt;I.projectionMatrix.makePerspective(Bt,Ut,Nt,ee,bt,Jt)}function R(I,B){B===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(B.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;S.near=x.near=_.near=I.near,S.far=x.far=_.far=I.far,(E!==S.near||b!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,b=S.far);const B=I.parent,Z=S.cameras;R(S,B);for(let k=0;k<Z.length;k++)R(Z[k],B);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),I.matrix.copy(S.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);const X=I.children;for(let k=0,J=X.length;k<J;k++)X[k].updateMatrixWorld(!0);Z.length===2?T(S,_,x):S.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(I){h!==null&&(h.fixedFoveation=I),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=I)};let N=null;function V(I,B){if(c=B.getViewerPose(l||s),d=B,c!==null){const Z=c.views;f!==null&&(t.setRenderTargetFramebuffer(m,f.framebuffer),t.setRenderTarget(m));let X=!1;Z.length!==S.cameras.length&&(S.cameras.length=0,X=!0);for(let k=0;k<Z.length;k++){const J=Z[k];let it=null;if(f!==null)it=f.getViewport(J);else{const gt=u.getViewSubImage(h,J);it=gt.viewport,k===0&&(t.setRenderTargetTextures(m,gt.colorTexture,h.ignoreDepthValues?void 0:gt.depthStencilTexture),t.setRenderTarget(m))}let Y=M[k];Y===void 0&&(Y=new jn,Y.layers.enable(k),Y.viewport=new Ke,M[k]=Y),Y.matrix.fromArray(J.transform.matrix),Y.projectionMatrix.fromArray(J.projectionMatrix),Y.viewport.set(it.x,it.y,it.width,it.height),k===0&&S.matrix.copy(Y.matrix),X===!0&&S.cameras.push(Y)}}for(let Z=0;Z<g.length;Z++){const X=y[Z],k=g[Z];X!==null&&k!==void 0&&k.update(X,B,l||s)}N&&N(I,B),d=null}const z=new tm;z.setAnimationLoop(V),this.setAnimationLoop=function(I){N=I},this.dispose=function(){}}}function S1(e,t){function n(p,m){p.fogColor.value.copy(m.color),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,g,y,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),c(p,m)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),d(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&s(p,m)):m.isPointsMaterial?o(p,m,g,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===ti&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===ti&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const g=t.get(m).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const x=e.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*x}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let y;m.map?y=m.map:m.specularMap?y=m.specularMap:m.displacementMap?y=m.displacementMap:m.normalMap?y=m.normalMap:m.bumpMap?y=m.bumpMap:m.roughnessMap?y=m.roughnessMap:m.metalnessMap?y=m.metalnessMap:m.alphaMap?y=m.alphaMap:m.emissiveMap?y=m.emissiveMap:m.clearcoatMap?y=m.clearcoatMap:m.clearcoatNormalMap?y=m.clearcoatNormalMap:m.clearcoatRoughnessMap?y=m.clearcoatRoughnessMap:m.iridescenceMap?y=m.iridescenceMap:m.iridescenceThicknessMap?y=m.iridescenceThicknessMap:m.specularIntensityMap?y=m.specularIntensityMap:m.specularColorMap?y=m.specularColorMap:m.transmissionMap?y=m.transmissionMap:m.thicknessMap?y=m.thicknessMap:m.sheenColorMap?y=m.sheenColorMap:m.sheenRoughnessMap&&(y=m.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let _;m.aoMap?_=m.aoMap:m.lightMap&&(_=m.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function s(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function o(p,m,g,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*g,p.scale.value=y*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let g;m.map?g=m.map:m.alphaMap&&(g=m.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,g){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===ti&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function E1(e,t,n,i){let r={},a={},s=[];const o=n.isWebGL2?e.getParameter(35375):0;function l(y,_){const x=_.program;i.uniformBlockBinding(y,x)}function c(y,_){let x=r[y.id];x===void 0&&(v(y),x=u(y),r[y.id]=x,y.addEventListener("dispose",m));const M=_.program;i.updateUBOMapping(y,M);const S=t.render.frame;a[y.id]!==S&&(f(y),a[y.id]=S)}function u(y){const _=h();y.__bindingPointIndex=_;const x=e.createBuffer(),M=y.__size,S=y.usage;return e.bindBuffer(35345,x),e.bufferData(35345,M,S),e.bindBuffer(35345,null),e.bindBufferBase(35345,_,x),x}function h(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const _=r[y.id],x=y.uniforms,M=y.__cache;e.bindBuffer(35345,_);for(let S=0,E=x.length;S<E;S++){const b=x[S];if(d(b,S,M)===!0){const w=b.value,L=b.__offset;typeof w=="number"?(b.__data[0]=w,e.bufferSubData(35345,L,b.__data)):(b.value.isMatrix3?(b.__data[0]=b.value.elements[0],b.__data[1]=b.value.elements[1],b.__data[2]=b.value.elements[2],b.__data[3]=b.value.elements[0],b.__data[4]=b.value.elements[3],b.__data[5]=b.value.elements[4],b.__data[6]=b.value.elements[5],b.__data[7]=b.value.elements[0],b.__data[8]=b.value.elements[6],b.__data[9]=b.value.elements[7],b.__data[10]=b.value.elements[8],b.__data[11]=b.value.elements[0]):w.toArray(b.__data),e.bufferSubData(35345,L,b.__data))}}e.bindBuffer(35345,null)}function d(y,_,x){const M=y.value;if(x[_]===void 0)return typeof M=="number"?x[_]=M:x[_]=M.clone(),!0;if(typeof M=="number"){if(x[_]!==M)return x[_]=M,!0}else{const S=x[_];if(S.equals(M)===!1)return S.copy(M),!0}return!1}function v(y){const _=y.uniforms;let x=0;const M=16;let S=0;for(let E=0,b=_.length;E<b;E++){const w=_[E],L=p(w);if(w.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=x,E>0){S=x%M;const G=M-S;S!==0&&G-L.boundary<0&&(x+=M-S,w.__offset=x)}x+=L.storage}return S=x%M,S>0&&(x+=M-S),y.__size=x,y.__cache={},this}function p(y){const _=y.value,x={boundary:0,storage:0};return typeof _=="number"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(y){const _=y.target;_.removeEventListener("dispose",m);const x=s.indexOf(_.__bindingPointIndex);s.splice(x,1),e.deleteBuffer(r[_.id]),delete r[_.id],delete a[_.id]}function g(){for(const y in r)e.deleteBuffer(r[y]);s=[],r={},a={}}return{bind:l,update:c,dispose:g}}function T1(){const e=Jc("canvas");return e.style.display="block",e}function am(e={}){this.isWebGLRenderer=!0;const t=e.canvas!==void 0?e.canvas:T1(),n=e.context!==void 0?e.context:null,i=e.depth!==void 0?e.depth:!0,r=e.stencil!==void 0?e.stencil:!0,a=e.antialias!==void 0?e.antialias:!1,s=e.premultipliedAlpha!==void 0?e.premultipliedAlpha:!0,o=e.preserveDrawingBuffer!==void 0?e.preserveDrawingBuffer:!1,l=e.powerPreference!==void 0?e.powerPreference:"default",c=e.failIfMajorPerformanceCaveat!==void 0?e.failIfMajorPerformanceCaveat:!1;let u;n!==null?u=n.getContextAttributes().alpha:u=e.alpha!==void 0?e.alpha:!1;let h=null,f=null;const d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Hr,this.physicallyCorrectLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let m=!1,g=0,y=0,_=null,x=-1,M=null;const S=new Ke,E=new Ke;let b=null,w=t.width,L=t.height,G=1,H=null,C=null;const T=new Ke(0,0,w,L),R=new Ke(0,0,w,L);let N=!1;const V=new Qp;let z=!1,I=!1,B=null;const Z=new je,X=new be,k=new Q,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function it(){return _===null?G:1}let Y=n;function gt(P,tt){for(let at=0;at<P.length;at++){const K=P[at],ct=t.getContext(K,tt);if(ct!==null)return ct}return null}try{const P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:s,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wh}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",Tt,!1),t.addEventListener("webglcontextcreationerror",wt,!1),Y===null){const tt=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&tt.shift(),Y=gt(tt,P),Y===null)throw gt(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ft,st,pt,W,Ft,vt,Xt,bt,Jt,Bt,Ut,Nt,ee,fe,O,D,nt,ut,mt,xt,Wt,Lt,ot,kt;function $(){ft=new Nx(Y),st=new Dx(Y,ft,e),ft.init(st),Lt=new y1(Y,ft,st),pt=new g1(Y,ft,st),W=new Gx,Ft=new i1,vt=new _1(Y,ft,pt,Ft,st,Lt,W),Xt=new Px(p),bt=new Ox(p),Jt=new j0(Y,st),ot=new Cx(Y,ft,Jt,st),Bt=new zx(Y,Jt,W,ot),Ut=new Wx(Y,Bt,Jt,W),mt=new Hx(Y,st,vt),D=new Rx(Ft),Nt=new n1(p,Xt,bt,ft,st,ot,D),ee=new S1(p,Ft),fe=new a1,O=new h1(ft,st),ut=new Ax(p,Xt,bt,pt,Ut,u,s),nt=new v1(p,Ut,st),kt=new E1(Y,W,st,pt),xt=new Lx(Y,ft,W,st),Wt=new Bx(Y,ft,W,st),W.programs=Nt.programs,p.capabilities=st,p.extensions=ft,p.properties=Ft,p.renderLists=fe,p.shadowMap=nt,p.state=pt,p.info=W}$();const dt=new w1(p,Y);this.xr=dt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const P=ft.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ft.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(P){P!==void 0&&(G=P,this.setSize(w,L,!1))},this.getSize=function(P){return P.set(w,L)},this.setSize=function(P,tt,at){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=P,L=tt,t.width=Math.floor(P*G),t.height=Math.floor(tt*G),at!==!1&&(t.style.width=P+"px",t.style.height=tt+"px"),this.setViewport(0,0,P,tt)},this.getDrawingBufferSize=function(P){return P.set(w*G,L*G).floor()},this.setDrawingBufferSize=function(P,tt,at){w=P,L=tt,G=at,t.width=Math.floor(P*at),t.height=Math.floor(tt*at),this.setViewport(0,0,P,tt)},this.getCurrentViewport=function(P){return P.copy(S)},this.getViewport=function(P){return P.copy(T)},this.setViewport=function(P,tt,at,K){P.isVector4?T.set(P.x,P.y,P.z,P.w):T.set(P,tt,at,K),pt.viewport(S.copy(T).multiplyScalar(G).floor())},this.getScissor=function(P){return P.copy(R)},this.setScissor=function(P,tt,at,K){P.isVector4?R.set(P.x,P.y,P.z,P.w):R.set(P,tt,at,K),pt.scissor(E.copy(R).multiplyScalar(G).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(P){pt.setScissorTest(N=P)},this.setOpaqueSort=function(P){H=P},this.setTransparentSort=function(P){C=P},this.getClearColor=function(P){return P.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(P=!0,tt=!0,at=!0){let K=0;P&&(K|=16384),tt&&(K|=256),at&&(K|=1024),Y.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",wt,!1),fe.dispose(),O.dispose(),Ft.dispose(),Xt.dispose(),bt.dispose(),Ut.dispose(),ot.dispose(),kt.dispose(),Nt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Et),dt.removeEventListener("sessionend",It),B&&(B.dispose(),B=null),de.stop()};function _t(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const P=W.autoReset,tt=nt.enabled,at=nt.autoUpdate,K=nt.needsUpdate,ct=nt.type;$(),W.autoReset=P,nt.enabled=tt,nt.autoUpdate=at,nt.needsUpdate=K,nt.type=ct}function wt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function qt(P){const tt=P.target;tt.removeEventListener("dispose",qt),he(tt)}function he(P){q(P),Ft.remove(P)}function q(P){const tt=Ft.get(P).programs;tt!==void 0&&(tt.forEach(function(at){Nt.releaseProgram(at)}),P.isShaderMaterial&&Nt.releaseShaderCache(P))}this.renderBufferDirect=function(P,tt,at,K,ct,Ht){tt===null&&(tt=J);const $t=ct.isMesh&&ct.matrixWorld.determinant()<0,ie=yc(P,tt,at,K,ct);pt.setMaterial(K,$t);let ne=at.index;const pe=at.attributes.position;if(ne===null){if(pe===void 0||pe.count===0)return}else if(ne.count===0)return;let ce=1;K.wireframe===!0&&(ne=Bt.getWireframeAttribute(at),ce=2),ot.setup(ct,K,ie,at,ne);let re,A=xt;ne!==null&&(re=Jt.get(ne),A=Wt,A.setIndex(re));const F=ne!==null?ne.count:pe.count,j=at.drawRange.start*ce,ht=at.drawRange.count*ce,et=Ht!==null?Ht.start*ce:0,Mt=Ht!==null?Ht.count*ce:1/0,Qt=Math.max(j,et),yt=Math.min(F,j+ht,et+Mt)-1,jt=Math.max(0,yt-Qt+1);if(jt!==0){if(ct.isMesh)K.wireframe===!0?(pt.setLineWidth(K.wireframeLinewidth*it()),A.setMode(1)):A.setMode(4);else if(ct.isLine){let zt=K.linewidth;zt===void 0&&(zt=1),pt.setLineWidth(zt*it()),ct.isLineSegments?A.setMode(1):ct.isLineLoop?A.setMode(2):A.setMode(3)}else ct.isPoints?A.setMode(0):ct.isSprite&&A.setMode(4);if(ct.isInstancedMesh)A.renderInstances(Qt,jt,ct.count);else if(at.isInstancedBufferGeometry){const zt=Math.min(at.instanceCount,at._maxInstanceCount);A.renderInstances(Qt,jt,zt)}else A.render(Qt,jt)}},this.compile=function(P,tt){function at(K,ct,Ht){K.transparent===!0&&K.side===ir?(K.side=ti,K.needsUpdate=!0,un(K,ct,Ht),K.side=Ha,K.needsUpdate=!0,un(K,ct,Ht),K.side=ir):un(K,ct,Ht)}f=O.get(P),f.init(),v.push(f),P.traverseVisible(function(K){K.isLight&&K.layers.test(tt.layers)&&(f.pushLight(K),K.castShadow&&f.pushShadow(K))}),f.setupLights(p.physicallyCorrectLights),P.traverse(function(K){const ct=K.material;if(ct)if(Array.isArray(ct))for(let Ht=0;Ht<ct.length;Ht++){const $t=ct[Ht];at($t,P,K)}else at(ct,P,K)}),v.pop(),f=null};let rt=null;function lt(P){rt&&rt(P)}function Et(){de.stop()}function It(){de.start()}const de=new tm;de.setAnimationLoop(lt),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(P){rt=P,dt.setAnimationLoop(P),P===null?de.stop():de.start()},dt.addEventListener("sessionstart",Et),dt.addEventListener("sessionend",It),this.render=function(P,tt){if(tt!==void 0&&tt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(tt),tt=dt.getCamera()),P.isScene===!0&&P.onBeforeRender(p,P,tt,_),f=O.get(P,v.length),f.init(),v.push(f),Z.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),V.setFromProjectionMatrix(Z),I=this.localClippingEnabled,z=D.init(this.clippingPlanes,I,tt),h=fe.get(P,d.length),h.init(),d.push(h),Ie(P,tt,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(H,C),z===!0&&D.beginShadows();const at=f.state.shadowsArray;if(nt.render(at,P,tt),z===!0&&D.endShadows(),this.info.autoReset===!0&&this.info.reset(),ut.render(h,P),f.setupLights(p.physicallyCorrectLights),tt.isArrayCamera){const K=tt.cameras;for(let ct=0,Ht=K.length;ct<Ht;ct++){const $t=K[ct];Ge(h,P,$t,$t.viewport)}}else Ge(h,P,tt);_!==null&&(vt.updateMultisampleRenderTarget(_),vt.updateRenderTargetMipmap(_)),P.isScene===!0&&P.onAfterRender(p,P,tt),ot.resetDefaultState(),x=-1,M=null,v.pop(),v.length>0?f=v[v.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function Ie(P,tt,at,K){if(P.visible===!1)return;if(P.layers.test(tt.layers)){if(P.isGroup)at=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(tt);else if(P.isLight)f.pushLight(P),P.castShadow&&f.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||V.intersectsSprite(P)){K&&k.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Z);const $t=Ut.update(P),ie=P.material;ie.visible&&h.push(P,$t,ie,at,k.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==W.render.frame&&(P.skeleton.update(),P.skeleton.frame=W.render.frame),!P.frustumCulled||V.intersectsObject(P))){K&&k.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Z);const $t=Ut.update(P),ie=P.material;if(Array.isArray(ie)){const ne=$t.groups;for(let pe=0,ce=ne.length;pe<ce;pe++){const re=ne[pe],A=ie[re.materialIndex];A&&A.visible&&h.push(P,$t,A,at,k.z,re)}}else ie.visible&&h.push(P,$t,ie,at,k.z,null)}}const Ht=P.children;for(let $t=0,ie=Ht.length;$t<ie;$t++)Ie(Ht[$t],tt,at,K)}function Ge(P,tt,at,K){const ct=P.opaque,Ht=P.transmissive,$t=P.transparent;f.setupLightsView(at),Ht.length>0&&Vn(ct,tt,at),K&&pt.viewport(S.copy(K)),ct.length>0&&Me(ct,tt,at),Ht.length>0&&Me(Ht,tt,at),$t.length>0&&Me($t,tt,at),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Vn(P,tt,at){const K=st.isWebGL2;B===null&&(B=new Wr(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")?co:Vr,minFilter:Nl,samples:K&&a===!0?4:0})),p.getDrawingBufferSize(X),K?B.setSize(X.x,X.y):B.setSize(eh(X.x),eh(X.y));const ct=p.getRenderTarget();p.setRenderTarget(B),p.clear();const Ht=p.toneMapping;p.toneMapping=Gi,Me(P,tt,at),p.toneMapping=Ht,vt.updateMultisampleRenderTarget(B),vt.updateRenderTargetMipmap(B),p.setRenderTarget(ct)}function Me(P,tt,at){const K=tt.isScene===!0?tt.overrideMaterial:null;for(let ct=0,Ht=P.length;ct<Ht;ct++){const $t=P[ct],ie=$t.object,ne=$t.geometry,pe=K===null?$t.material:K,ce=$t.group;ie.layers.test(at.layers)&&Hn(ie,tt,at,ne,pe,ce)}}function Hn(P,tt,at,K,ct,Ht){P.onBeforeRender(p,tt,at,K,ct,Ht),P.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ct.onBeforeRender(p,tt,at,K,P,Ht),ct.transparent===!0&&ct.side===ir?(ct.side=ti,ct.needsUpdate=!0,p.renderBufferDirect(at,tt,K,ct,P,Ht),ct.side=Ha,ct.needsUpdate=!0,p.renderBufferDirect(at,tt,K,ct,P,Ht),ct.side=ir):p.renderBufferDirect(at,tt,K,ct,P,Ht),P.onAfterRender(p,tt,at,K,ct,Ht)}function un(P,tt,at){tt.isScene!==!0&&(tt=J);const K=Ft.get(P),ct=f.state.lights,Ht=f.state.shadowsArray,$t=ct.state.version,ie=Nt.getParameters(P,ct.state,Ht,tt,at),ne=Nt.getProgramCacheKey(ie);let pe=K.programs;K.environment=P.isMeshStandardMaterial?tt.environment:null,K.fog=tt.fog,K.envMap=(P.isMeshStandardMaterial?bt:Xt).get(P.envMap||K.environment),pe===void 0&&(P.addEventListener("dispose",qt),pe=new Map,K.programs=pe);let ce=pe.get(ne);if(ce!==void 0){if(K.currentProgram===ce&&K.lightsStateVersion===$t)return _c(P,ie),ce}else ie.uniforms=Nt.getUniforms(P),P.onBuild(at,ie,p),P.onBeforeCompile(ie,p),ce=Nt.acquireProgram(ie,ne),pe.set(ne,ce),K.uniforms=ie.uniforms;const re=K.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(re.clippingPlanes=D.uniform),_c(P,ie),K.needsLights=Ql(P),K.lightsStateVersion=$t,K.needsLights&&(re.ambientLightColor.value=ct.state.ambient,re.lightProbe.value=ct.state.probe,re.directionalLights.value=ct.state.directional,re.directionalLightShadows.value=ct.state.directionalShadow,re.spotLights.value=ct.state.spot,re.spotLightShadows.value=ct.state.spotShadow,re.rectAreaLights.value=ct.state.rectArea,re.ltc_1.value=ct.state.rectAreaLTC1,re.ltc_2.value=ct.state.rectAreaLTC2,re.pointLights.value=ct.state.point,re.pointLightShadows.value=ct.state.pointShadow,re.hemisphereLights.value=ct.state.hemi,re.directionalShadowMap.value=ct.state.directionalShadowMap,re.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,re.spotShadowMap.value=ct.state.spotShadowMap,re.spotLightMatrix.value=ct.state.spotLightMatrix,re.spotLightMap.value=ct.state.spotLightMap,re.pointShadowMap.value=ct.state.pointShadowMap,re.pointShadowMatrix.value=ct.state.pointShadowMatrix);const A=ce.getUniforms(),F=Xc.seqWithValue(A.seq,re);return K.currentProgram=ce,K.uniformsList=F,ce}function _c(P,tt){const at=Ft.get(P);at.outputEncoding=tt.outputEncoding,at.instancing=tt.instancing,at.skinning=tt.skinning,at.morphTargets=tt.morphTargets,at.morphNormals=tt.morphNormals,at.morphColors=tt.morphColors,at.morphTargetsCount=tt.morphTargetsCount,at.numClippingPlanes=tt.numClippingPlanes,at.numIntersection=tt.numClipIntersection,at.vertexAlphas=tt.vertexAlphas,at.vertexTangents=tt.vertexTangents,at.toneMapping=tt.toneMapping}function yc(P,tt,at,K,ct){tt.isScene!==!0&&(tt=J),vt.resetTextureUnits();const Ht=tt.fog,$t=K.isMeshStandardMaterial?tt.environment:null,ie=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Hr,ne=(K.isMeshStandardMaterial?bt:Xt).get(K.envMap||$t),pe=K.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ce=!!K.normalMap&&!!at.attributes.tangent,re=!!at.morphAttributes.position,A=!!at.morphAttributes.normal,F=!!at.morphAttributes.color,j=K.toneMapped?p.toneMapping:Gi,ht=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,et=ht!==void 0?ht.length:0,Mt=Ft.get(K),Qt=f.state.lights;if(z===!0&&(I===!0||P!==M)){const Ee=P===M&&K.id===x;D.setState(K,P,Ee)}let yt=!1;K.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Qt.state.version||Mt.outputEncoding!==ie||ct.isInstancedMesh&&Mt.instancing===!1||!ct.isInstancedMesh&&Mt.instancing===!0||ct.isSkinnedMesh&&Mt.skinning===!1||!ct.isSkinnedMesh&&Mt.skinning===!0||Mt.envMap!==ne||K.fog===!0&&Mt.fog!==Ht||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==D.numPlanes||Mt.numIntersection!==D.numIntersection)||Mt.vertexAlphas!==pe||Mt.vertexTangents!==ce||Mt.morphTargets!==re||Mt.morphNormals!==A||Mt.morphColors!==F||Mt.toneMapping!==j||st.isWebGL2===!0&&Mt.morphTargetsCount!==et)&&(yt=!0):(yt=!0,Mt.__version=K.version);let jt=Mt.currentProgram;yt===!0&&(jt=un(K,tt,ct));let zt=!1,Rt=!1,Dt=!1;const le=jt.getUniforms(),me=Mt.uniforms;if(pt.useProgram(jt.program)&&(zt=!0,Rt=!0,Dt=!0),K.id!==x&&(x=K.id,Rt=!0),zt||M!==P){if(le.setValue(Y,"projectionMatrix",P.projectionMatrix),st.logarithmicDepthBuffer&&le.setValue(Y,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),M!==P&&(M=P,Rt=!0,Dt=!0),K.isShaderMaterial||K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshStandardMaterial||K.envMap){const Ee=le.map.cameraPosition;Ee!==void 0&&Ee.setValue(Y,k.setFromMatrixPosition(P.matrixWorld))}(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&le.setValue(Y,"isOrthographic",P.isOrthographicCamera===!0),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial||K.isShadowMaterial||ct.isSkinnedMesh)&&le.setValue(Y,"viewMatrix",P.matrixWorldInverse)}if(ct.isSkinnedMesh){le.setOptional(Y,ct,"bindMatrix"),le.setOptional(Y,ct,"bindMatrixInverse");const Ee=ct.skeleton;Ee&&(st.floatVertexTextures?(Ee.boneTexture===null&&Ee.computeBoneTexture(),le.setValue(Y,"boneTexture",Ee.boneTexture,vt),le.setValue(Y,"boneTextureSize",Ee.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ke=at.morphAttributes;if((ke.position!==void 0||ke.normal!==void 0||ke.color!==void 0&&st.isWebGL2===!0)&&mt.update(ct,at,K,jt),(Rt||Mt.receiveShadow!==ct.receiveShadow)&&(Mt.receiveShadow=ct.receiveShadow,le.setValue(Y,"receiveShadow",ct.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(me.envMap.value=ne,me.flipEnvMap.value=ne.isCubeTexture&&ne.isRenderTargetTexture===!1?-1:1),Rt&&(le.setValue(Y,"toneMappingExposure",p.toneMappingExposure),Mt.needsLights&&Kl(me,Dt),Ht&&K.fog===!0&&ee.refreshFogUniforms(me,Ht),ee.refreshMaterialUniforms(me,K,G,L,B),Xc.upload(Y,Mt.uniformsList,me,vt)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Xc.upload(Y,Mt.uniformsList,me,vt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&le.setValue(Y,"center",ct.center),le.setValue(Y,"modelViewMatrix",ct.modelViewMatrix),le.setValue(Y,"normalMatrix",ct.normalMatrix),le.setValue(Y,"modelMatrix",ct.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ee=K.uniformsGroups;for(let De=0,hn=Ee.length;De<hn;De++)if(st.isWebGL2){const Ot=Ee[De];kt.update(Ot,jt),kt.bind(Ot,jt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jt}function Kl(P,tt){P.ambientLightColor.needsUpdate=tt,P.lightProbe.needsUpdate=tt,P.directionalLights.needsUpdate=tt,P.directionalLightShadows.needsUpdate=tt,P.pointLights.needsUpdate=tt,P.pointLightShadows.needsUpdate=tt,P.spotLights.needsUpdate=tt,P.spotLightShadows.needsUpdate=tt,P.rectAreaLights.needsUpdate=tt,P.hemisphereLights.needsUpdate=tt}function Ql(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(P,tt,at){Ft.get(P.texture).__webglTexture=tt,Ft.get(P.depthTexture).__webglTexture=at;const K=Ft.get(P);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=at===void 0,K.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,tt){const at=Ft.get(P);at.__webglFramebuffer=tt,at.__useDefaultFramebuffer=tt===void 0},this.setRenderTarget=function(P,tt=0,at=0){_=P,g=tt,y=at;let K=!0,ct=null,Ht=!1,$t=!1;if(P){const ne=Ft.get(P);ne.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(36160,null),K=!1):ne.__webglFramebuffer===void 0?vt.setupRenderTarget(P):ne.__hasExternalTextures&&vt.rebindTextures(P,Ft.get(P.texture).__webglTexture,Ft.get(P.depthTexture).__webglTexture);const pe=P.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&($t=!0);const ce=Ft.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(ct=ce[tt],Ht=!0):st.isWebGL2&&P.samples>0&&vt.useMultisampledRTT(P)===!1?ct=Ft.get(P).__webglMultisampledFramebuffer:ct=ce,S.copy(P.viewport),E.copy(P.scissor),b=P.scissorTest}else S.copy(T).multiplyScalar(G).floor(),E.copy(R).multiplyScalar(G).floor(),b=N;if(pt.bindFramebuffer(36160,ct)&&st.drawBuffers&&K&&pt.drawBuffers(P,ct),pt.viewport(S),pt.scissor(E),pt.setScissorTest(b),Ht){const ne=Ft.get(P.texture);Y.framebufferTexture2D(36160,36064,34069+tt,ne.__webglTexture,at)}else if($t){const ne=Ft.get(P.texture),pe=tt||0;Y.framebufferTextureLayer(36160,36064,ne.__webglTexture,at||0,pe)}x=-1},this.readRenderTargetPixels=function(P,tt,at,K,ct,Ht,$t){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ie=Ft.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&$t!==void 0&&(ie=ie[$t]),ie){pt.bindFramebuffer(36160,ie);try{const ne=P.texture,pe=ne.format,ce=ne.type;if(pe!==fi&&Lt.convert(pe)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const re=ce===co&&(ft.has("EXT_color_buffer_half_float")||st.isWebGL2&&ft.has("EXT_color_buffer_float"));if(ce!==Vr&&Lt.convert(ce)!==Y.getParameter(35738)&&!(ce===Lr&&(st.isWebGL2||ft.has("OES_texture_float")||ft.has("WEBGL_color_buffer_float")))&&!re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=P.width-K&&at>=0&&at<=P.height-ct&&Y.readPixels(tt,at,K,ct,Lt.convert(pe),Lt.convert(ce),Ht)}finally{const ne=_!==null?Ft.get(_).__webglFramebuffer:null;pt.bindFramebuffer(36160,ne)}}},this.copyFramebufferToTexture=function(P,tt,at=0){const K=Math.pow(2,-at),ct=Math.floor(tt.image.width*K),Ht=Math.floor(tt.image.height*K);vt.setTexture2D(tt,0),Y.copyTexSubImage2D(3553,at,0,0,P.x,P.y,ct,Ht),pt.unbindTexture()},this.copyTextureToTexture=function(P,tt,at,K=0){const ct=tt.image.width,Ht=tt.image.height,$t=Lt.convert(at.format),ie=Lt.convert(at.type);vt.setTexture2D(at,0),Y.pixelStorei(37440,at.flipY),Y.pixelStorei(37441,at.premultiplyAlpha),Y.pixelStorei(3317,at.unpackAlignment),tt.isDataTexture?Y.texSubImage2D(3553,K,P.x,P.y,ct,Ht,$t,ie,tt.image.data):tt.isCompressedTexture?Y.compressedTexSubImage2D(3553,K,P.x,P.y,tt.mipmaps[0].width,tt.mipmaps[0].height,$t,tt.mipmaps[0].data):Y.texSubImage2D(3553,K,P.x,P.y,$t,ie,tt.image),K===0&&at.generateMipmaps&&Y.generateMipmap(3553),pt.unbindTexture()},this.copyTextureToTexture3D=function(P,tt,at,K,ct=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ht=P.max.x-P.min.x+1,$t=P.max.y-P.min.y+1,ie=P.max.z-P.min.z+1,ne=Lt.convert(K.format),pe=Lt.convert(K.type);let ce;if(K.isData3DTexture)vt.setTexture3D(K,0),ce=32879;else if(K.isDataArrayTexture)vt.setTexture2DArray(K,0),ce=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,K.flipY),Y.pixelStorei(37441,K.premultiplyAlpha),Y.pixelStorei(3317,K.unpackAlignment);const re=Y.getParameter(3314),A=Y.getParameter(32878),F=Y.getParameter(3316),j=Y.getParameter(3315),ht=Y.getParameter(32877),et=at.isCompressedTexture?at.mipmaps[0]:at.image;Y.pixelStorei(3314,et.width),Y.pixelStorei(32878,et.height),Y.pixelStorei(3316,P.min.x),Y.pixelStorei(3315,P.min.y),Y.pixelStorei(32877,P.min.z),at.isDataTexture||at.isData3DTexture?Y.texSubImage3D(ce,ct,tt.x,tt.y,tt.z,Ht,$t,ie,ne,pe,et.data):at.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(ce,ct,tt.x,tt.y,tt.z,Ht,$t,ie,ne,et.data)):Y.texSubImage3D(ce,ct,tt.x,tt.y,tt.z,Ht,$t,ie,ne,pe,et),Y.pixelStorei(3314,re),Y.pixelStorei(32878,A),Y.pixelStorei(3316,F),Y.pixelStorei(3315,j),Y.pixelStorei(32877,ht),ct===0&&K.generateMipmaps&&Y.generateMipmap(ce),pt.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?vt.setTextureCube(P,0):P.isData3DTexture?vt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?vt.setTexture2DArray(P,0):vt.setTexture2D(P,0),pt.unbindTexture()},this.resetState=function(){g=0,y=0,_=null,pt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class A1 extends am{}A1.prototype.isWebGL1Renderer=!0;class C1 extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.backgroundBlurriness=this.backgroundBlurriness),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class sm extends hc{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ap=new Q,sp=new Q,op=new je,Uu=new Yp,kc=new zl;class L1 extends _n{constructor(t=new ji,n=new sm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let r=1,a=n.count;r<a;r++)ap.fromBufferAttribute(n,r-1),sp.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ap.distanceTo(sp);t.setAttribute("lineDistance",new di(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,a=t.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kc.copy(i.boundingSphere),kc.applyMatrix4(r),kc.radius+=a,t.ray.intersectsSphere(kc)===!1)return;op.copy(r).invert(),Uu.copy(t.ray).applyMatrix4(op);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new Q,u=new Q,h=new Q,f=new Q,d=this.isLineSegments?2:1,v=i.index,m=i.attributes.position;if(v!==null){const g=Math.max(0,s.start),y=Math.min(v.count,s.start+s.count);for(let _=g,x=y-1;_<x;_+=d){const M=v.getX(_),S=v.getX(_+1);if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,S),Uu.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(f);b<t.near||b>t.far||n.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,s.start),y=Math.min(m.count,s.start+s.count);for(let _=g,x=y-1;_<x;_+=d){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),Uu.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const S=t.ray.origin.distanceTo(f);S<t.near||S>t.far||n.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}const cp=new Q,lp=new Q;class D1 extends L1{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let r=0,a=n.count;r<a;r+=2)cp.fromBufferAttribute(n,r),lp.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+cp.distanceTo(lp);t.setAttribute("lineDistance",new di(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class R1 extends D1{constructor(t=1){const n=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new ji;r.setAttribute("position",new di(n,3)),r.setAttribute("color",new di(i,3));const a=new sm({vertexColors:!0,toneMapped:!1});super(r,a),this.type="AxesHelper"}setColors(t,n,i){const r=new we,a=this.geometry.attributes.color.array;return r.set(t),r.toArray(a,0),r.toArray(a,3),r.set(n),r.toArray(a,6),r.toArray(a,9),r.set(i),r.toArray(a,12),r.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wh);function Ii(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function om(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ja={duration:.5,overwrite:!1,delay:0},jh,yn,Be,Jn=1e8,_e=1/Jn,ih=Math.PI*2,P1=ih/4,F1=0,cm=Math.sqrt,I1=Math.cos,U1=Math.sin,$e=function(t){return typeof t=="string"},Pe=function(t){return typeof t=="function"},ki=function(t){return typeof t=="number"},$h=function(t){return typeof t>"u"},wi=function(t){return typeof t=="object"},xn=function(t){return t!==!1},lm=function(){return typeof window<"u"},Vc=function(t){return Pe(t)||$e(t)},um=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},sn=Array.isArray,rh=/(?:-?\.?\d|\.)+/gi,hm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ua=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ou=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,fm=/[+-]=-?[.\d]+/,dm=/[^,'"\[\]\s]+/gi,O1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ce,qn,ah,Zh,Bn={},Kc={},pm,mm=function(t){return(Kc=qr(t,Bn))&&Gn},Jh=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},Qc=function(t,n){return!n&&console.warn(t)},vm=function(t,n){return t&&(Bn[t]=n)&&Kc&&(Kc[t]=n)||Bn},lo=function(){return 0},N1={suppressEvents:!0,isStart:!0,kill:!1},qc={suppressEvents:!0,kill:!1},z1={suppressEvents:!0},Kh={},cr=[],sh={},gm,Dn={},Nu={},up=30,Yc=[],Qh="",tf=function(t){var n=t[0],i,r;if(wi(n)||Pe(n)||(t=[t]),!(i=(n._gsap||{}).harness)){for(r=Yc.length;r--&&!Yc[r].targetTest(n););i=Yc[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Bm(t[r],i)))||t.splice(r,1);return t},Ur=function(t){return t._gsap||tf(Kn(t))[0]._gsap},_m=function(t,n,i){return(i=t[n])&&Pe(i)?t[n]():$h(i)&&t.getAttribute&&t.getAttribute(n)||i},Mn=function(t,n){return(t=t.split(",")).forEach(n)||t},Ue=function(t){return Math.round(t*1e5)/1e5||0},Je=function(t){return Math.round(t*1e7)/1e7||0},Ba=function(t,n){var i=n.charAt(0),r=parseFloat(n.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},B1=function(t,n){for(var i=n.length,r=0;t.indexOf(n[r])<0&&++r<i;);return r<i},tl=function(){var t=cr.length,n=cr.slice(0),i,r;for(sh={},cr.length=0,i=0;i<t;i++)r=n[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},ym=function(t,n,i,r){cr.length&&tl(),t.render(n,i,r||yn&&n<0&&(t._initted||t._startAt)),cr.length&&tl()},xm=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(dm).length<2?n:$e(t)?t.trim():t},Mm=function(t){return t},ni=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},G1=function(t){return function(n,i){for(var r in i)r in n||r==="duration"&&t||r==="ease"||(n[r]=i[r])}},qr=function(t,n){for(var i in n)t[i]=n[i];return t},hp=function e(t,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=wi(n[i])?e(t[i]||(t[i]={}),n[i]):n[i]);return t},el=function(t,n){var i={},r;for(r in t)r in n||(i[r]=t[r]);return i},ro=function(t){var n=t.parent||Ce,i=t.keyframes?G1(sn(t.keyframes)):ni;if(xn(t.inherit))for(;n;)i(t,n.vars.defaults),n=n.parent||n._dp;return t},k1=function(t,n){for(var i=t.length,r=i===n.length;r&&i--&&t[i]===n[i];);return i<0},bm=function(t,n,i,r,a){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t[r],o;if(a)for(o=n[a];s&&s[a]>o;)s=s._prev;return s?(n._next=s._next,s._next=n):(n._next=t[i],t[i]=n),n._next?n._next._prev=n:t[r]=n,n._prev=s,n.parent=n._dp=t,n},Gl=function(t,n,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var a=n._prev,s=n._next;a?a._next=s:t[i]===n&&(t[i]=s),s?s._prev=a:t[r]===n&&(t[r]=a),n._next=n._prev=n.parent=null},ur=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},Or=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},V1=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},oh=function(t,n,i,r){return t._startAt&&(yn?t._startAt.revert(qc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,r))},H1=function e(t){return!t||t._ts&&e(t.parent)},fp=function(t){return t._repeat?$a(t._tTime,t=t.duration()+t._rDelay)*t:0},$a=function(t,n){var i=Math.floor(t/=n);return t&&i===t?i-1:i},nl=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},kl=function(t){return t._end=Je(t._start+(t._tDur/Math.abs(t._ts||t._rts||_e)||0))},Vl=function(t,n){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Je(i._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),kl(t),i._dirty||Or(i,t)),t},wm=function(t,n){var i;if((n._time||n._initted&&!n._dur)&&(i=nl(t.rawTime(),n),(!n._dur||fc(0,n.totalDuration(),i)-n._tTime>_e)&&n.render(i,!0)),Or(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-_e}},xi=function(t,n,i,r){return n.parent&&ur(n),n._start=Je((ki(i)?i:i||t!==Ce?Xn(t,i,n):t._time)+n._delay),n._end=Je(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),bm(t,n,"_first","_last",t._sort?"_start":0),ch(n)||(t._recent=n),r||wm(t,n),t._ts<0&&Vl(t,t._tTime),t},Sm=function(t,n){return(Bn.ScrollTrigger||Jh("scrollTrigger",n))&&Bn.ScrollTrigger.create(n,t)},Em=function(t,n,i,r,a){if(nf(t,n,a),!t._initted)return 1;if(!i&&t._pt&&!yn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&gm!==Fn.frame)return cr.push(t),t._lazy=[a,r],1},W1=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},ch=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},X1=function(t,n,i,r){var a=t.ratio,s=n<0||!n&&(!t._start&&W1(t)&&!(!t._initted&&ch(t))||(t._ts<0||t._dp._ts<0)&&!ch(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=fc(0,t._tDur,n),u=$a(l,o),t._yoyo&&u&1&&(s=1-s),u!==$a(t._tTime,o)&&(a=1-s,t.vars.repeatRefresh&&t._initted&&t.invalidate())),s!==a||yn||r||t._zTime===_e||!n&&t._zTime){if(!t._initted&&Em(t,n,r,i,l))return;for(h=t._zTime,t._zTime=n||(i?_e:0),i||(i=n&&!h),t.ratio=s,t._from&&(s=1-s),t._time=0,t._tTime=l,c=t._pt;c;)c.r(s,c.d),c=c._next;n<0&&oh(t,n,i,!0),t._onUpdate&&!i&&Qn(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Qn(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===s&&(s&&ur(t,1),!i&&!yn&&(Qn(t,s?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},q1=function(t,n,i){var r;if(i>n)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},Za=function(t,n,i,r){var a=t._repeat,s=Je(n)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=s/t._dur),t._dur=s,t._tDur=a?a<0?1e10:Je(s*(a+1)+t._rDelay*a):s,o>0&&!r&&Vl(t,t._tTime=t._tDur*o),t.parent&&kl(t),i||Or(t.parent,t),t},dp=function(t){return t instanceof gn?Or(t):Za(t,t._dur)},Y1={_start:0,endTime:lo,totalDuration:lo},Xn=function e(t,n,i){var r=t.labels,a=t._recent||Y1,s=t.duration()>=Jn?a.endTime(!1):t._dur,o,l,c;return $e(n)&&(isNaN(n)||n in r)?(l=n.charAt(0),c=n.substr(-1)==="%",o=n.indexOf("="),l==="<"||l===">"?(o>=0&&(n=n.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(c?(o<0?a:i).totalDuration()/100:1)):o<0?(n in r||(r[n]=s),r[n]):(l=parseFloat(n.charAt(o-1)+n.substr(o+1)),c&&i&&(l=l/100*(sn(i)?i[0]:i).totalDuration()),o>1?e(t,n.substr(0,o-1),i)+l:s+l)):n==null?s:+n},ao=function(t,n,i){var r=ki(n[1]),a=(r?2:1)+(t<2?0:1),s=n[a],o,l;if(r&&(s.duration=n[1]),s.parent=i,t){for(o=s,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=xn(l.vars.inherit)&&l.parent;s.immediateRender=xn(o.immediateRender),t<2?s.runBackwards=1:s.startAt=n[a-1]}return new He(n[0],s,n[a+1])},_r=function(t,n){return t||t===0?n(t):n},fc=function(t,n,i){return i<t?t:i>n?n:i},rn=function(t,n){return!$e(t)||!(n=O1.exec(t))?"":n[1]},j1=function(t,n,i){return _r(i,function(r){return fc(t,n,r)})},lh=[].slice,Tm=function(t,n){return t&&wi(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&wi(t[0]))&&!t.nodeType&&t!==qn},$1=function(t,n,i){return i===void 0&&(i=[]),t.forEach(function(r){var a;return $e(r)&&!n||Tm(r,1)?(a=i).push.apply(a,Kn(r)):i.push(r)})||i},Kn=function(t,n,i){return Be&&!n&&Be.selector?Be.selector(t):$e(t)&&!i&&(ah||!Ja())?lh.call((n||Zh).querySelectorAll(t),0):sn(t)?$1(t,i):Tm(t)?lh.call(t,0):t?[t]:[]},uh=function(t){return t=Kn(t)[0]||Qc("Invalid scope")||{},function(n){var i=t.current||t.nativeElement||t;return Kn(n,i.querySelectorAll?i:i===t?Qc("Invalid scope")||Zh.createElement("div"):t)}},Am=function(t){return t.sort(function(){return .5-Math.random()})},Cm=function(t){if(Pe(t))return t;var n=wi(t)?t:{each:t},i=Nr(n.ease),r=n.from||0,a=parseFloat(n.base)||0,s={},o=r>0&&r<1,l=isNaN(r)||o,c=n.axis,u=r,h=r;return $e(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],h=r[1]),function(f,d,v){var p=(v||n).length,m=s[p],g,y,_,x,M,S,E,b,w;if(!m){if(w=n.grid==="auto"?0:(n.grid||[1,Jn])[1],!w){for(E=-Jn;E<(E=v[w++].getBoundingClientRect().left)&&w<p;);w--}for(m=s[p]=[],g=l?Math.min(w,p)*u-.5:r%w,y=w===Jn?0:l?p*h/w-.5:r/w|0,E=0,b=Jn,S=0;S<p;S++)_=S%w-g,x=y-(S/w|0),m[S]=M=c?Math.abs(c==="y"?x:_):cm(_*_+x*x),M>E&&(E=M),M<b&&(b=M);r==="random"&&Am(m),m.max=E-b,m.min=b,m.v=p=(parseFloat(n.amount)||parseFloat(n.each)*(w>p?p-1:c?c==="y"?p/w:w:Math.max(w,p/w))||0)*(r==="edges"?-1:1),m.b=p<0?a-p:a,m.u=rn(n.amount||n.each)||0,i=i&&p<0?Om(i):i}return p=(m[f]-m.min)/m.max||0,Je(m.b+(i?i(p):p)*m.v)+m.u}},hh=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=Je(Math.round(parseFloat(i)/t)*t*n);return(r-r%1)/n+(ki(i)?0:rn(i))}},Lm=function(t,n){var i=sn(t),r,a;return!i&&wi(t)&&(r=i=t.radius||Jn,t.values?(t=Kn(t.values),(a=!ki(t[0]))&&(r*=r)):t=hh(t.increment)),_r(n,i?Pe(t)?function(s){return a=t(s),Math.abs(a-s)<=r?a:s}:function(s){for(var o=parseFloat(a?s.x:s),l=parseFloat(a?s.y:0),c=Jn,u=0,h=t.length,f,d;h--;)a?(f=t[h].x-o,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-o),f<c&&(c=f,u=h);return u=!r||c<=r?t[u]:s,a||u===s||ki(s)?u:u+rn(s)}:hh(t))},Dm=function(t,n,i,r){return _r(sn(t)?!n:i===!0?!!(i=0):!r,function(){return sn(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(n-t+i*.99))/i)*i*r)/r})},Z1=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(r){return n.reduce(function(a,s){return s(a)},r)}},J1=function(t,n){return function(i){return t(parseFloat(i))+(n||rn(i))}},K1=function(t,n,i){return Pm(t,n,0,1,i)},Rm=function(t,n,i){return _r(i,function(r){return t[~~n(r)]})},Q1=function e(t,n,i){var r=n-t;return sn(t)?Rm(t,e(0,t.length),n):_r(i,function(a){return(r+(a-t)%r)%r+t})},tb=function e(t,n,i){var r=n-t,a=r*2;return sn(t)?Rm(t,e(0,t.length-1),n):_r(i,function(s){return s=(a+(s-t)%a)%a||0,t+(s>r?a-s:s)})},uo=function(t){for(var n=0,i="",r,a,s,o;~(r=t.indexOf("random(",n));)s=t.indexOf(")",r),o=t.charAt(r+7)==="[",a=t.substr(r+7,s-r-7).match(o?dm:rh),i+=t.substr(n,r-n)+Dm(o?a:+a[0],o?0:+a[1],+a[2]||1e-5),n=s+1;return i+t.substr(n,t.length-n)},Pm=function(t,n,i,r,a){var s=n-t,o=r-i;return _r(a,function(l){return i+((l-t)/s*o||0)})},eb=function e(t,n,i,r){var a=isNaN(t+n)?0:function(d){return(1-d)*t+d*n};if(!a){var s=$e(t),o={},l,c,u,h,f;if(i===!0&&(r=1)&&(i=null),s)t={p:t},n={p:n};else if(sn(t)&&!sn(n)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(e(t[c-1],t[c]));h--,a=function(v){v*=h;var p=Math.min(f,~~v);return u[p](v-p)},i=n}else r||(t=qr(sn(t)?[]:{},t));if(!u){for(l in n)ef.call(o,t,l,"get",n[l]);a=function(v){return sf(v,o)||(s?t.p:t)}}}return _r(i,a)},pp=function(t,n,i){var r=t.labels,a=Jn,s,o,l;for(s in r)o=r[s]-n,o<0==!!i&&o&&a>(o=Math.abs(o))&&(l=s,a=o);return l},Qn=function(t,n,i){var r=t.vars,a=r[n],s=Be,o=t._ctx,l,c,u;if(!!a)return l=r[n+"Params"],c=r.callbackScope||t,i&&cr.length&&tl(),o&&(Be=o),u=l?a.apply(c,l):a.call(c),Be=s,u},eo=function(t){return ur(t),t.scrollTrigger&&t.scrollTrigger.kill(!!yn),t.progress()<1&&Qn(t,"onInterrupt"),t},Oa,nb=function(t){t=!t.name&&t.default||t;var n=t.name,i=Pe(t),r=n&&!i&&t.init?function(){this._props=[]}:t,a={init:lo,render:sf,add:ef,kill:_b,modifier:gb,rawVars:0},s={targetTest:0,get:0,getSetter:af,aliases:{},register:0};if(Ja(),t!==r){if(Dn[n])return;ni(r,ni(el(t,a),s)),qr(r.prototype,qr(a,el(t,s))),Dn[r.prop=n]=r,t.targetTest&&(Yc.push(r),Kh[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}vm(n,r),t.register&&t.register(Gn,r,bn)},ye=255,no={aqua:[0,ye,ye],lime:[0,ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ye],navy:[0,0,128],white:[ye,ye,ye],olive:[128,128,0],yellow:[ye,ye,0],orange:[ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ye,0,0],pink:[ye,192,203],cyan:[0,ye,ye],transparent:[ye,ye,ye,0]},zu=function(t,n,i){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(i-n)*t*6:t<.5?i:t*3<2?n+(i-n)*(2/3-t)*6:n)*ye+.5|0},Fm=function(t,n,i){var r=t?ki(t)?[t>>16,t>>8&ye,t&ye]:0:no.black,a,s,o,l,c,u,h,f,d,v;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),no[t])r=no[t];else if(t.charAt(0)==="#"){if(t.length<6&&(a=t.charAt(1),s=t.charAt(2),o=t.charAt(3),t="#"+a+a+s+s+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&ye,r&ye,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&ye,t&ye]}else if(t.substr(0,3)==="hsl"){if(r=v=t.match(rh),!n)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,s=u<=.5?u*(c+1):u+c-u*c,a=u*2-s,r.length>3&&(r[3]*=1),r[0]=zu(l+1/3,a,s),r[1]=zu(l,a,s),r[2]=zu(l-1/3,a,s);else if(~t.indexOf("="))return r=t.match(hm),i&&r.length<4&&(r[3]=1),r}else r=t.match(rh)||no.transparent;r=r.map(Number)}return n&&!v&&(a=r[0]/ye,s=r[1]/ye,o=r[2]/ye,h=Math.max(a,s,o),f=Math.min(a,s,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===a?(s-o)/d+(s<o?6:0):h===s?(o-a)/d+2:(a-s)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Im=function(t){var n=[],i=[],r=-1;return t.split(lr).forEach(function(a){var s=a.match(Ua)||[];n.push.apply(n,s),i.push(r+=s.length+1)}),n.c=i,n},mp=function(t,n,i){var r="",a=(t+r).match(lr),s=n?"hsla(":"rgba(",o=0,l,c,u,h;if(!a)return t;if(a=a.map(function(f){return(f=Fm(f,n,1))&&s+(n?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=Im(t),l=i.c,l.join(r)!==u.c.join(r)))for(c=t.replace(lr,"1").split(Ua),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?a.shift()||s+"0,0,0,0)":(u.length?u:a.length?a:i).shift());if(!c)for(c=t.split(lr),h=c.length-1;o<h;o++)r+=c[o]+a[o];return r+c[h]},lr=function(){var e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in no)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),ib=/hsl[a]?\(/,Um=function(t){var n=t.join(" "),i;if(lr.lastIndex=0,lr.test(n))return i=ib.test(n),t[1]=mp(t[1],i),t[0]=mp(t[0],i,Im(t[1])),!0},ho,Fn=function(){var e=Date.now,t=500,n=33,i=e(),r=i,a=1e3/240,s=a,o=[],l,c,u,h,f,d,v=function p(m){var g=e()-r,y=m===!0,_,x,M,S;if(g>t&&(i+=g-n),r+=g,M=r-i,_=M-s,(_>0||y)&&(S=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,s+=_+(_>=a?4:a-_),x=1),y||(l=c(p)),x)for(d=0;d<o.length;d++)o[d](M,f,S,m)};return h={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){pm&&(!ah&&lm()&&(qn=ah=window,Zh=qn.document||{},Bn.gsap=Gn,(qn.gsapVersions||(qn.gsapVersions=[])).push(Gn.version),mm(Kc||qn.GreenSockGlobals||!qn.gsap&&qn||{}),u=qn.requestAnimationFrame),l&&h.sleep(),c=u||function(m){return setTimeout(m,s-h.time*1e3+1|0)},ho=1,v(2))},sleep:function(){(u?qn.cancelAnimationFrame:clearTimeout)(l),ho=0,c=lo},lagSmoothing:function(m,g){t=m||1/_e,n=Math.min(g,t,0)},fps:function(m){a=1e3/(m||240),s=h.time*1e3+a},add:function(m,g,y){var _=g?function(x,M,S,E){m(x,M,S,E),h.remove(_)}:m;return h.remove(m),o[y?"unshift":"push"](_),Ja(),_},remove:function(m,g){~(g=o.indexOf(m))&&o.splice(g,1)&&d>=g&&d--},_listeners:o},h}(),Ja=function(){return!ho&&Fn.wake()},ue={},rb=/^[\d.\-M][\d.\-,\s]/,ab=/["']/g,sb=function(t){for(var n={},i=t.substr(1,t.length-3).split(":"),r=i[0],a=1,s=i.length,o,l,c;a<s;a++)l=i[a],o=a!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),n[r]=isNaN(c)?c.replace(ab,"").trim():+c,r=l.substr(o+1).trim();return n},ob=function(t){var n=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",n);return t.substring(n,~r&&r<i?t.indexOf(")",i+1):i)},cb=function(t){var n=(t+"").split("("),i=ue[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[sb(n[1])]:ob(t).split(",").map(xm)):ue._CE&&rb.test(t)?ue._CE("",t):i},Om=function(t){return function(n){return 1-t(1-n)}},Nm=function e(t,n){for(var i=t._first,r;i;)i instanceof gn?e(i,n):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==n&&(i.timeline?e(i.timeline,n):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=n)),i=i._next},Nr=function(t,n){return t&&(Pe(t)?t:ue[t]||cb(t))||n},pa=function(t,n,i,r){i===void 0&&(i=function(l){return 1-n(1-l)}),r===void 0&&(r=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var a={easeIn:n,easeOut:i,easeInOut:r},s;return Mn(t,function(o){ue[o]=Bn[o]=a,ue[s=o.toLowerCase()]=i;for(var l in a)ue[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ue[o+"."+l]=a[l]}),a},zm=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},Bu=function e(t,n,i){var r=n>=1?n:1,a=(i||(t?.3:.45))/(n<1?n:1),s=a/ih*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*U1((u-s)*a)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:zm(o);return a=ih/a,l.config=function(c,u){return e(t,c,u)},l},Gu=function e(t,n){n===void 0&&(n=1.70158);var i=function(s){return s?--s*s*((n+1)*s+n)+1:0},r=t==="out"?i:t==="in"?function(a){return 1-i(1-a)}:zm(i);return r.config=function(a){return e(t,a)},r};Mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var n=t<5?t+1:t;pa(e+",Power"+(n-1),t?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});ue.Linear.easeNone=ue.none=ue.Linear.easeIn;pa("Elastic",Bu("in"),Bu("out"),Bu());(function(e,t){var n=1/t,i=2*n,r=2.5*n,a=function(o){return o<n?e*o*o:o<i?e*Math.pow(o-1.5/t,2)+.75:o<r?e*(o-=2.25/t)*o+.9375:e*Math.pow(o-2.625/t,2)+.984375};pa("Bounce",function(s){return 1-a(1-s)},a)})(7.5625,2.75);pa("Expo",function(e){return e?Math.pow(2,10*(e-1)):0});pa("Circ",function(e){return-(cm(1-e*e)-1)});pa("Sine",function(e){return e===1?1:-I1(e*P1)+1});pa("Back",Gu("in"),Gu("out"),Gu());ue.SteppedEase=ue.steps=Bn.SteppedEase={config:function(t,n){t===void 0&&(t=1);var i=1/t,r=t+(n?0:1),a=n?1:0,s=1-_e;return function(o){return((r*fc(0,s,o)|0)+a)*i}}};ja.ease=ue["quad.out"];Mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return Qh+=e+","+e+"Params,"});var Bm=function(t,n){this.id=F1++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:_m,this.set=n?n.getSetter:af},Ka=function(){function e(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Za(this,+n.duration,1,1),this.data=n.data,Be&&(this._ctx=Be,Be.data.push(this)),ho||Fn.wake()}var t=e.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Za(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(Ja(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Vl(this,i),!a._dp||a.parent||wm(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&xi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===_e||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),ym(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+fp(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+fp(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(i,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,r):this._repeat?$a(this._tTime,a)+1:1},t.timeScale=function(i){if(!arguments.length)return this._rts===-_e?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?nl(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-_e?0:this._rts,this.totalTime(fc(-this._delay,this._tDur,r),!0),kl(this),V1(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ja(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_e&&(this._tTime-=_e)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&xi(r,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(xn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?nl(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=z1);var r=yn;return yn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),yn=r,this},t.globalTime=function(i){for(var r=this,a=arguments.length?i:r.rawTime();r;)a=r._start+a/(r._ts||1),r=r._dp;return!this.parent&&this.vars.immediateRender?-1:a},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,dp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,dp(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(Xn(this,i),xn(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,xn(r))},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-_e:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-_e,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=r&&a<this.endTime(!0)-_e)},t.eventCallback=function(i,r,a){var s=this.vars;return arguments.length>1?(r?(s[i]=r,a&&(s[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=r)):delete s[i],this):s[i]},t.then=function(i){var r=this;return new Promise(function(a){var s=Pe(i)?i:Mm,o=function(){var c=r.then;r.then=null,Pe(s)&&(s=s(r))&&(s.then||s===r)&&(r.then=c),a(s),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},t.kill=function(){eo(this)},e}();ni(Ka.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_e,_prom:0,_ps:!1,_rts:1});var gn=function(e){om(t,e);function t(i,r){var a;return i===void 0&&(i={}),a=e.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=xn(i.sortChildren),Ce&&xi(i.parent||Ce,Ii(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&Sm(Ii(a),i.scrollTrigger),a}var n=t.prototype;return n.to=function(r,a,s){return ao(0,arguments,this),this},n.from=function(r,a,s){return ao(1,arguments,this),this},n.fromTo=function(r,a,s,o){return ao(2,arguments,this),this},n.set=function(r,a,s){return a.duration=0,a.parent=this,ro(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new He(r,a,Xn(this,s),1),this},n.call=function(r,a,s){return xi(this,He.delayedCall(0,r,a),s)},n.staggerTo=function(r,a,s,o,l,c,u){return s.duration=a,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new He(r,s,Xn(this,l)),this},n.staggerFrom=function(r,a,s,o,l,c,u){return s.runBackwards=1,ro(s).immediateRender=xn(s.immediateRender),this.staggerTo(r,a,s,o,l,c,u)},n.staggerFromTo=function(r,a,s,o,l,c,u,h){return o.startAt=s,ro(o).immediateRender=xn(o.immediateRender),this.staggerTo(r,a,o,l,c,u,h)},n.render=function(r,a,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Je(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,v,p,m,g,y,_,x,M,S,E;if(this!==Ce&&u>l&&r>=0&&(u=l),u!==this._tTime||s||h){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),f=u,x=this._start,_=this._ts,g=!_,h&&(c||(o=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(S=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,a,s);if(f=Je(u%m),u===l?(p=this._repeat,f=c):(p=~~(u/m),p&&p===u/m&&(f=c,p--),f>c&&(f=c)),M=$a(this._tTime,m),!o&&this._tTime&&M!==p&&(M=p),S&&p&1&&(f=c-f,E=1),p!==M&&!this._lock){var b=S&&M&1,w=b===(S&&p&1);if(p<M&&(b=!b),o=b?0:c,this._lock=1,this.render(o||(E?0:Je(p*m)),a,!c)._lock=0,this._tTime=u,!a&&this.parent&&Qn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=b?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;Nm(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=q1(this,Je(o),Je(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&f&&!a&&(Qn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&r>=0)for(d=this._first;d;){if(v=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,a,s);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,a,s),f!==this._time||!this._ts&&!g){y=0,v&&(u+=this._zTime=-_e);break}}d=v}else{d=this._last;for(var L=r<0?r:f;d;){if(v=d._prev,(d._act||L<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,a,s);if(d.render(d._ts>0?(L-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(L-d._start)*d._ts,a,s||yn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!g){y=0,v&&(u+=this._zTime=L?-_e:_e);break}}d=v}}if(y&&!a&&(this.pause(),y.render(f>=o?0:-_e)._zTime=f>=o?1:-1,this._ts))return this._start=x,kl(this),this.render(r,a,s);this._onUpdate&&!a&&Qn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ur(this,1),!a&&!(r<0&&!o)&&(u||o||!l)&&(Qn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,a){var s=this;if(ki(a)||(a=Xn(this,a,r)),!(r instanceof Ka)){if(sn(r))return r.forEach(function(o){return s.add(o,a)}),this;if($e(r))return this.addLabel(r,a);if(Pe(r))r=He.delayedCall(0,r);else return this}return this!==r?xi(this,r,a):this},n.getChildren=function(r,a,s,o){r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=!0),o===void 0&&(o=-Jn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof He?a&&l.push(c):(s&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,a,s)))),c=c._next;return l},n.getById=function(r){for(var a=this.getChildren(1,1,1),s=a.length;s--;)if(a[s].vars.id===r)return a[s]},n.remove=function(r){return $e(r)?this.removeLabel(r):Pe(r)?this.killTweensOf(r):(Gl(this,r),r===this._recent&&(this._recent=this._last),Or(this))},n.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Je(Fn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),e.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},n.addLabel=function(r,a){return this.labels[r]=Xn(this,a),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,a,s){var o=He.delayedCall(0,a||lo,s);return o.data="isPause",this._hasPause=1,xi(this,o,Xn(this,r))},n.removePause=function(r){var a=this._first;for(r=Xn(this,r);a;)a._start===r&&a.data==="isPause"&&ur(a),a=a._next},n.killTweensOf=function(r,a,s){for(var o=this.getTweensOf(r,s),l=o.length;l--;)rr!==o[l]&&o[l].kill(r,a);return this},n.getTweensOf=function(r,a){for(var s=[],o=Kn(r),l=this._first,c=ki(a),u;l;)l instanceof He?B1(l._targets,o)&&(c?(!rr||l._initted&&l._ts)&&l.globalTime(0)<=a&&l.globalTime(l.totalDuration())>a:!a||l.isActive())&&s.push(l):(u=l.getTweensOf(o,a)).length&&s.push.apply(s,u),l=l._next;return s},n.tweenTo=function(r,a){a=a||{};var s=this,o=Xn(s,r),l=a,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,v=He.to(s,ni({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:a.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||_e,onStart:function(){if(s.pause(),!d){var m=a.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());v._dur!==m&&Za(v,m,0,1).render(v._time,!0,!0),d=1}u&&u.apply(v,h||[])}},a));return f?v.render(0):v},n.tweenFromTo=function(r,a,s){return this.tweenTo(a,ni({startAt:{time:Xn(this,r)}},s))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),pp(this,Xn(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),pp(this,Xn(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+_e)},n.shiftChildren=function(r,a,s){s===void 0&&(s=0);for(var o=this._first,l=this.labels,c;o;)o._start>=s&&(o._start+=r,o._end+=r),o=o._next;if(a)for(c in l)l[c]>=s&&(l[c]+=r);return Or(this)},n.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return e.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,s;a;)s=a._next,this.remove(a),a=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Or(this)},n.totalDuration=function(r){var a=0,s=this,o=s._last,l=Jn,c,u,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(h=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,xi(s,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(a-=u,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),o._end>a&&o._ts&&(a=o._end),o=c;Za(s,s===Ce&&s._time>a?s._time:a,1,1),s._dirty=0}return s._tDur},t.updateRoot=function(r){if(Ce._ts&&(ym(Ce,nl(r,Ce)),gm=Fn.frame),Fn.frame>=up){up+=Nn.autoSleep||120;var a=Ce._first;if((!a||!a._ts)&&Nn.autoSleep&&Fn._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||Fn.sleep()}}},t}(Ka);ni(gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var lb=function(t,n,i,r,a,s,o){var l=new bn(this._pt,t,n,0,1,Xm,null,a),c=0,u=0,h,f,d,v,p,m,g,y;for(l.b=i,l.e=r,i+="",r+="",(g=~r.indexOf("random("))&&(r=uo(r)),s&&(y=[i,r],s(y,t,n),i=y[0],r=y[1]),f=i.match(Ou)||[];h=Ou.exec(r);)v=h[0],p=r.substring(c,h.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),v!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:m,c:v.charAt(1)==="="?Ba(m,v)-m:parseFloat(v)-m,m:d&&d<4?Math.round:0},c=Ou.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(fm.test(r)||g)&&(l.e=0),this._pt=l,l},ef=function(t,n,i,r,a,s,o,l,c,u){Pe(r)&&(r=r(a||0,t,s));var h=t[n],f=i!=="get"?i:Pe(h)?c?t[n.indexOf("set")||!Pe(t["get"+n.substr(3)])?n:"get"+n.substr(3)](c):t[n]():h,d=Pe(h)?c?pb:Hm:rf,v;if($e(r)&&(~r.indexOf("random(")&&(r=uo(r)),r.charAt(1)==="="&&(v=Ba(f,r)+(rn(f)||0),(v||v===0)&&(r=v))),!u||f!==r||fh)return!isNaN(f*r)&&r!==""?(v=new bn(this._pt,t,n,+f||0,r-(f||0),typeof h=="boolean"?vb:Wm,0,d),c&&(v.fp=c),o&&v.modifier(o,this,t),this._pt=v):(!h&&!(n in t)&&Jh(n,r),lb.call(this,t,n,f,r,d,l||Nn.stringFilter,c))},ub=function(t,n,i,r,a){if(Pe(t)&&(t=so(t,a,n,i,r)),!wi(t)||t.style&&t.nodeType||sn(t)||um(t))return $e(t)?so(t,a,n,i,r):t;var s={},o;for(o in t)s[o]=so(t[o],a,n,i,r);return s},Gm=function(t,n,i,r,a,s){var o,l,c,u;if(Dn[t]&&(o=new Dn[t]).init(a,o.rawVars?n[t]:ub(n[t],r,a,s,i),i,r,s)!==!1&&(i._pt=l=new bn(i._pt,a,t,0,1,o.render,o,0,o.priority),i!==Oa))for(c=i._ptLookup[i._targets.indexOf(a)],u=o._props.length;u--;)c[o._props[u]]=l;return o},rr,fh,nf=function e(t,n,i){var r=t.vars,a=r.ease,s=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.onUpdateParams,h=r.callbackScope,f=r.runBackwards,d=r.yoyoEase,v=r.keyframes,p=r.autoRevert,m=t._dur,g=t._startAt,y=t._targets,_=t.parent,x=_&&_.data==="nested"?_.vars.targets:y,M=t._overwrite==="auto"&&!jh,S=t.timeline,E,b,w,L,G,H,C,T,R,N,V,z,I;if(S&&(!v||!a)&&(a="none"),t._ease=Nr(a,ja.ease),t._yEase=d?Om(Nr(d===!0?a:d,ja.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!S&&!!r.runBackwards,!S||v&&!r.stagger){if(T=y[0]?Ur(y[0]).harness:0,z=T&&r[T.prop],E=el(r,Kh),g&&(g._zTime<0&&g.progress(1),n<0&&f&&o&&!p?g.render(-1,!0):g.revert(f&&m?qc:N1),g._lazy=0),s){if(ur(t._startAt=He.set(y,ni({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:xn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},s))),t._startAt._dp=0,n<0&&(yn||!o&&!p)&&t._startAt.revert(qc),o&&m&&n<=0&&i<=0){n&&(t._zTime=n);return}}else if(f&&m&&!g){if(n&&(o=!1),w=ni({overwrite:!1,data:"isFromStart",lazy:o&&xn(l),immediateRender:o,stagger:0,parent:_},E),z&&(w[T.prop]=z),ur(t._startAt=He.set(y,w)),t._startAt._dp=0,n<0&&(yn?t._startAt.revert(qc):t._startAt.render(-1,!0)),t._zTime=n,!o)e(t._startAt,_e,_e);else if(!n)return}for(t._pt=t._ptCache=0,l=m&&xn(l)||l&&!m,b=0;b<y.length;b++){if(G=y[b],C=G._gsap||tf(y)[b]._gsap,t._ptLookup[b]=N={},sh[C.id]&&cr.length&&tl(),V=x===y?b:x.indexOf(G),T&&(R=new T).init(G,z||E,t,V,x)!==!1&&(t._pt=L=new bn(t._pt,G,R.name,0,1,R.render,R,0,R.priority),R._props.forEach(function(B){N[B]=L}),R.priority&&(H=1)),!T||z)for(w in E)Dn[w]&&(R=Gm(w,E,t,V,G,x))?R.priority&&(H=1):N[w]=L=ef.call(t,G,w,"get",E[w],V,x,0,r.stringFilter);t._op&&t._op[b]&&t.kill(G,t._op[b]),M&&t._pt&&(rr=t,Ce.killTweensOf(G,N,t.globalTime(n)),I=!t.parent,rr=0),t._pt&&l&&(sh[C.id]=1)}H&&qm(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!I,v&&n<=0&&S.render(Jn,!0,!0)},hb=function(t,n,i,r,a,s,o){var l=(t._pt&&t._ptCache||(t._ptCache={}))[n],c,u,h,f;if(!l)for(l=t._ptCache[n]=[],h=t._ptLookup,f=t._targets.length;f--;){if(c=h[f][n],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==n&&c.fp!==n;)c=c._next;if(!c)return fh=1,t.vars[n]="+=0",nf(t,o),fh=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(r||r===0)&&!a?r:c.s+(r||0)+s*c.c,c.c=i-c.s,u.e&&(u.e=Ue(i)+rn(u.e)),u.b&&(u.b=c.s+rn(u.b))},fb=function(t,n){var i=t[0]?Ur(t[0]).harness:0,r=i&&i.aliases,a,s,o,l;if(!r)return n;a=qr({},n);for(s in r)if(s in a)for(l=r[s].split(","),o=l.length;o--;)a[l[o]]=a[s];return a},db=function(t,n,i,r){var a=n.ease||r||"power1.inOut",s,o;if(sn(n))o=i[t]||(i[t]=[]),n.forEach(function(l,c){return o.push({t:c/(n.length-1)*100,v:l,e:a})});else for(s in n)o=i[s]||(i[s]=[]),s==="ease"||o.push({t:parseFloat(t),v:n[s],e:a})},so=function(t,n,i,r,a){return Pe(t)?t.call(n,i,r,a):$e(t)&&~t.indexOf("random(")?uo(t):t},km=Qh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Vm={};Mn(km+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return Vm[e]=1});var He=function(e){om(t,e);function t(i,r,a,s){var o;typeof r=="number"&&(a.duration=r,r=a,a=null),o=e.call(this,s?r:ro(r))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,v=l.keyframes,p=l.defaults,m=l.scrollTrigger,g=l.yoyoEase,y=r.parent||Ce,_=(sn(i)||um(i)?ki(i[0]):"length"in r)?[i]:Kn(i),x,M,S,E,b,w,L,G;if(o._targets=_.length?tf(_):Qc("GSAP target "+i+" not found. https://greensock.com",!Nn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,v||f||Vc(c)||Vc(u)){if(r=o.vars,x=o.timeline=new gn({data:"nested",defaults:p||{},targets:y&&y.data==="nested"?y.vars.targets:_}),x.kill(),x.parent=x._dp=Ii(o),x._start=0,f||Vc(c)||Vc(u)){if(E=_.length,L=f&&Cm(f),wi(f))for(b in f)~km.indexOf(b)&&(G||(G={}),G[b]=f[b]);for(M=0;M<E;M++)S=el(r,Vm),S.stagger=0,g&&(S.yoyoEase=g),G&&qr(S,G),w=_[M],S.duration=+so(c,Ii(o),M,w,_),S.delay=(+so(u,Ii(o),M,w,_)||0)-o._delay,!f&&E===1&&S.delay&&(o._delay=u=S.delay,o._start+=u,S.delay=0),x.to(w,S,L?L(M,w,_):0),x._ease=ue.none;x.duration()?c=u=0:o.timeline=0}else if(v){ro(ni(x.vars.defaults,{ease:"none"})),x._ease=Nr(v.ease||r.ease||"none");var H=0,C,T,R;if(sn(v))v.forEach(function(N){return x.to(_,N,">")}),x.duration();else{S={};for(b in v)b==="ease"||b==="easeEach"||db(b,v[b],S,v.easeEach);for(b in S)for(C=S[b].sort(function(N,V){return N.t-V.t}),H=0,M=0;M<C.length;M++)T=C[M],R={ease:T.e,duration:(T.t-(M?C[M-1].t:0))/100*c},R[b]=T.v,x.to(_,R,H),H+=R.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return d===!0&&!jh&&(rr=Ii(o),Ce.killTweensOf(_),rr=0),xi(y,Ii(o),a),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!v&&o._start===Je(y._time)&&xn(h)&&H1(Ii(o))&&y.data!=="nested")&&(o._tTime=-_e,o.render(Math.max(0,-u)||0)),m&&Sm(Ii(o),m),o}var n=t.prototype;return n.render=function(r,a,s){var o=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-_e&&!u?l:r<_e?0:r,f,d,v,p,m,g,y,_,x;if(!c)X1(this,r,a,s);else if(h!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,_=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+r,a,s);if(f=Je(h%p),h===l?(v=this._repeat,f=c):(v=~~(h/p),v&&v===h/p&&(f=c,v--),f>c&&(f=c)),g=this._yoyo&&v&1,g&&(x=this._yEase,f=c-f),m=$a(this._tTime,p),f===o&&!s&&this._initted)return this._tTime=h,this;v!==m&&(_&&this._yEase&&Nm(_,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=s=1,this.render(Je(p*v),!0).invalidate()._lock=0))}if(!this._initted){if(Em(this,u?r:f,s,a,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(r,a,s)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!o&&!a&&(Qn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;_&&_.render(r<0?r:!f&&g?-_e:_._dur*_._ease(f/this._dur),a,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(u&&oh(this,r,a,s),Qn(this,"onUpdate")),this._repeat&&v!==m&&this.vars.onRepeat&&!a&&this.parent&&Qn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&oh(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ur(this,1),!a&&!(u&&!o)&&(h||o||g)&&(Qn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),e.prototype.invalidate.call(this,r)},n.resetTo=function(r,a,s,o){ho||Fn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||nf(this,l),c=this._ease(l/this._dur),hb(this,r,a,s,o,c,l)?this.resetTo(r,a,s,o):(Vl(this,0),this.parent||bm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?eo(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,rr&&rr.vars.overwrite!==!0)._first||eo(this),this.parent&&s!==this.timeline.totalDuration()&&Za(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=r?Kn(r):o,c=this._ptLookup,u=this._pt,h,f,d,v,p,m,g;if((!a||a==="all")&&k1(o,l))return a==="all"&&(this._pt=0),eo(this);for(h=this._op=this._op||[],a!=="all"&&($e(a)&&(p={},Mn(a,function(y){return p[y]=1}),a=p),a=fb(o,a)),g=o.length;g--;)if(~l.indexOf(o[g])){f=c[g],a==="all"?(h[g]=a,v=f,d={}):(d=h[g]=h[g]||{},v=a);for(p in v)m=f&&f[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&Gl(this,m,"_pt"),delete f[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&u&&eo(this),this},t.to=function(r,a){return new t(r,a,arguments[2])},t.from=function(r,a){return ao(1,arguments)},t.delayedCall=function(r,a,s,o){return new t(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},t.fromTo=function(r,a,s){return ao(2,arguments)},t.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new t(r,a)},t.killTweensOf=function(r,a,s){return Ce.killTweensOf(r,a,s)},t}(Ka);ni(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Mn("staggerTo,staggerFrom,staggerFromTo",function(e){He[e]=function(){var t=new gn,n=lh.call(arguments,0);return n.splice(e==="staggerFromTo"?5:4,0,0),t[e].apply(t,n)}});var rf=function(t,n,i){return t[n]=i},Hm=function(t,n,i){return t[n](i)},pb=function(t,n,i,r){return t[n](r.fp,i)},mb=function(t,n,i){return t.setAttribute(n,i)},af=function(t,n){return Pe(t[n])?Hm:$h(t[n])&&t.setAttribute?mb:rf},Wm=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},vb=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},Xm=function(t,n){var i=n._pt,r="";if(!t&&n.b)r=n.b;else if(t===1&&n.e)r=n.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=n.c}n.set(n.t,n.p,r,n)},sf=function(t,n){for(var i=n._pt;i;)i.r(t,i.d),i=i._next},gb=function(t,n,i,r){for(var a=this._pt,s;a;)s=a._next,a.p===r&&a.modifier(t,n,i),a=s},_b=function(t){for(var n=this._pt,i,r;n;)r=n._next,n.p===t&&!n.op||n.op===t?Gl(this,n,"_pt"):n.dep||(i=1),n=r;return!i},yb=function(t,n,i,r){r.mSet(t,n,r.m.call(r.tween,i,r.mt),r)},qm=function(t){for(var n=t._pt,i,r,a,s;n;){for(i=n._next,r=a;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:s)?n._prev._next=n:a=n,(n._next=r)?r._prev=n:s=n,n=i}t._pt=a},bn=function(){function e(n,i,r,a,s,o,l,c,u){this.t=i,this.s=a,this.c=s,this.p=r,this.r=o||Wm,this.d=l||this,this.set=c||rf,this.pr=u||0,this._next=n,n&&(n._prev=this)}var t=e.prototype;return t.modifier=function(i,r,a){this.mSet=this.mSet||this.set,this.set=yb,this.m=i,this.mt=a,this.tween=r},e}();Mn(Qh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(e){return Kh[e]=1});Bn.TweenMax=Bn.TweenLite=He;Bn.TimelineLite=Bn.TimelineMax=gn;Ce=new gn({sortChildren:!1,defaults:ja,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Nn.stringFilter=Um;var Qa=[],jc={},xb=[],vp=0,ku=function(t){return(jc[t]||xb).map(function(n){return n()})},dh=function(){var t=Date.now(),n=[];t-vp>2&&(ku("matchMediaInit"),Qa.forEach(function(i){var r=i.queries,a=i.conditions,s,o,l,c;for(o in r)s=qn.matchMedia(r[o]).matches,s&&(l=1),s!==a[o]&&(a[o]=s,c=1);c&&(i.revert(),l&&n.push(i))}),ku("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i)}),vp=t,ku("matchMedia"))},Ym=function(){function e(n,i){this.selector=i&&uh(i),this.data=[],this._r=[],this.isReverted=!1,n&&this.add(n)}var t=e.prototype;return t.add=function(i,r,a){Pe(i)&&(a=r,r=i,i=Pe);var s=this,o=function(){var c=Be,u=s.selector,h;return c&&c!==s&&c.data.push(s),a&&(s.selector=uh(a)),Be=s,h=r.apply(s,arguments),Pe(h)&&s._r.push(h),Be=c,s.selector=u,s.isReverted=!1,h};return s.last=o,i===Pe?o(s):i?s[i]=o:o},t.ignore=function(i){var r=Be;Be=null,i(this),Be=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof e?i.push.apply(i,r.getTweens()):r instanceof He&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var a=this;if(i){var s=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}))}),s.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return!(l instanceof Ka)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,a)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r){var o=Qa.indexOf(this);~o&&Qa.splice(o,1)}},t.revert=function(i){this.kill(i||{})},e}(),Mb=function(){function e(n){this.contexts=[],this.scope=n}var t=e.prototype;return t.add=function(i,r,a){wi(i)||(i={matches:i});var s=new Ym(0,a||this.scope),o=s.conditions={},l,c,u;this.contexts.push(s),r=s.add("onMatch",r),s.queries=i;for(c in i)c==="all"?u=1:(l=qn.matchMedia(i[c]),l&&(Qa.indexOf(s)<0&&Qa.push(s),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(dh):l.addEventListener("change",dh)));return u&&r(s),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},e}(),il={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];n.forEach(function(r){return nb(r)})},timeline:function(t){return new gn(t)},getTweensOf:function(t,n){return Ce.getTweensOf(t,n)},getProperty:function(t,n,i,r){$e(t)&&(t=Kn(t)[0]);var a=Ur(t||{}).get,s=i?Mm:xm;return i==="native"&&(i=""),t&&(n?s((Dn[n]&&Dn[n].get||a)(t,n,i,r)):function(o,l,c){return s((Dn[o]&&Dn[o].get||a)(t,o,l,c))})},quickSetter:function(t,n,i){if(t=Kn(t),t.length>1){var r=t.map(function(u){return Gn.quickSetter(u,n,i)}),a=r.length;return function(u){for(var h=a;h--;)r[h](u)}}t=t[0]||{};var s=Dn[n],o=Ur(t),l=o.harness&&(o.harness.aliases||{})[n]||n,c=s?function(u){var h=new s;Oa._pt=0,h.init(t,i?u+i:u,Oa,0,[t]),h.render(1,h),Oa._pt&&sf(1,Oa)}:o.set(t,l);return s?c:function(u){return c(t,l,i?u+i:u,o,1)}},quickTo:function(t,n,i){var r,a=Gn.to(t,qr((r={},r[n]="+=0.1",r.paused=!0,r),i||{})),s=function(l,c,u){return a.resetTo(n,l,c,u)};return s.tween=a,s},isTweening:function(t){return Ce.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Nr(t.ease,ja.ease)),hp(ja,t||{})},config:function(t){return hp(Nn,t||{})},registerEffect:function(t){var n=t.name,i=t.effect,r=t.plugins,a=t.defaults,s=t.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Dn[o]&&!Bn[o]&&Qc(n+" effect requires "+o+" plugin.")}),Nu[n]=function(o,l,c){return i(Kn(o),ni(l||{},a),c)},s&&(gn.prototype[n]=function(o,l,c){return this.add(Nu[n](o,wi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,n){ue[t]=Nr(n)},parseEase:function(t,n){return arguments.length?Nr(t,n):ue},getById:function(t){return Ce.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var i=new gn(t),r,a;for(i.smoothChildTiming=xn(t.smoothChildTiming),Ce.remove(i),i._dp=0,i._time=i._tTime=Ce._time,r=Ce._first;r;)a=r._next,(n||!(!r._dur&&r instanceof He&&r.vars.onComplete===r._targets[0]))&&xi(i,r,r._start-r._delay),r=a;return xi(Ce,i,0),i},context:function(t,n){return t?new Ym(t,n):Be},matchMedia:function(t){return new Mb(t)},matchMediaRefresh:function(){return Qa.forEach(function(t){var n=t.conditions,i,r;for(r in n)n[r]&&(n[r]=!1,i=1);i&&t.revert()})||dh()},addEventListener:function(t,n){var i=jc[t]||(jc[t]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(t,n){var i=jc[t],r=i&&i.indexOf(n);r>=0&&i.splice(r,1)},utils:{wrap:Q1,wrapYoyo:tb,distribute:Cm,random:Dm,snap:Lm,normalize:K1,getUnit:rn,clamp:j1,splitColor:Fm,toArray:Kn,selector:uh,mapRange:Pm,pipe:Z1,unitize:J1,interpolate:eb,shuffle:Am},install:mm,effects:Nu,ticker:Fn,updateRoot:gn.updateRoot,plugins:Dn,globalTimeline:Ce,core:{PropTween:bn,globals:vm,Tween:He,Timeline:gn,Animation:Ka,getCache:Ur,_removeLinkedListItem:Gl,reverting:function(){return yn},context:function(t){return t&&Be&&(Be.data.push(t),t._ctx=Be),Be},suppressOverwrites:function(t){return jh=t}}};Mn("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return il[e]=He[e]});Fn.add(gn.updateRoot);Oa=il.to({},{duration:0});var bb=function(t,n){for(var i=t._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},wb=function(t,n){var i=t._targets,r,a,s;for(r in n)for(a=i.length;a--;)s=t._ptLookup[a][r],s&&(s=s.d)&&(s._pt&&(s=bb(s,r)),s&&s.modifier&&s.modifier(n[r],t,i[a],r))},Vu=function(t,n){return{name:t,rawVars:1,init:function(r,a,s){s._onInit=function(o){var l,c;if($e(a)&&(l={},Mn(a,function(u){return l[u]=1}),a=l),n){l={};for(c in a)l[c]=n(a[c]);a=l}wb(o,a)}}}},Gn=il.registerPlugin({name:"attr",init:function(t,n,i,r,a){var s,o,l;this.tween=i;for(s in n)l=t.getAttribute(s)||"",o=this.add(t,"setAttribute",(l||0)+"",n[s],r,a,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(t,n){for(var i=n._pt;i;)yn?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,n){for(var i=n.length;i--;)this.add(t,i,t[i]||0,n[i],0,0,0,0,0,1)}},Vu("roundProps",hh),Vu("modifiers"),Vu("snap",Lm))||il;He.version=gn.version=Gn.version="3.11.3";pm=1;lm()&&Ja();ue.Power0;ue.Power1;ue.Power2;ue.Power3;ue.Power4;ue.Linear;ue.Quad;ue.Cubic;ue.Quart;ue.Quint;ue.Strong;ue.Elastic;ue.Back;ue.SteppedEase;ue.Bounce;ue.Sine;ue.Expo;ue.Circ;/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var gp,ar,Ga,of,Rr,_p,cf,Sb=function(){return typeof window<"u"},Vi={},Tr=180/Math.PI,ka=Math.PI/180,Pa=Math.atan2,yp=1e8,lf=/([A-Z])/g,Eb=/(left|right|width|margin|padding|x)/i,Tb=/[\s,\(]\S/,zi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ph=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},Ab=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},Cb=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},Lb=function(t,n){var i=n.s+n.c*t;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},jm=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},$m=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},Db=function(t,n,i){return t.style[n]=i},Rb=function(t,n,i){return t.style.setProperty(n,i)},Pb=function(t,n,i){return t._gsap[n]=i},Fb=function(t,n,i){return t._gsap.scaleX=t._gsap.scaleY=i},Ib=function(t,n,i,r,a){var s=t._gsap;s.scaleX=s.scaleY=i,s.renderTransform(a,s)},Ub=function(t,n,i,r,a){var s=t._gsap;s[n]=i,s.renderTransform(a,s)},Le="transform",pi=Le+"Origin",Ob=function(t,n){var i=this,r=this.target,a=r.style;if(t in Vi){if(this.tfm=this.tfm||{},t!=="transform"&&(t=zi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(s){return i.tfm[s]=Ui(r,s)}):this.tfm[t]=r._gsap.x?r._gsap[t]:Ui(r,t)),this.props.indexOf(Le)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(pi,n,"")),t=Le}(a||n)&&this.props.push(t,n,a[t])},Zm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Nb=function(){var t=this.props,n=this.target,i=n.style,r=n._gsap,a,s;for(a=0;a<t.length;a+=3)t[a+1]?n[t[a]]=t[a+2]:t[a+2]?i[t[a]]=t[a+2]:i.removeProperty(t[a].replace(lf,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),a=cf(),a&&!a.isStart&&!i[Le]&&(Zm(i),r.uncache=1)}},Jm=function(t,n){var i={target:t,props:[],revert:Nb,save:Ob};return n&&n.split(",").forEach(function(r){return i.save(r)}),i},Km,mh=function(t,n){var i=ar.createElementNS?ar.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ar.createElement(t);return i.style?i:ar.createElement(t)},bi=function e(t,n,i){var r=getComputedStyle(t);return r[n]||r.getPropertyValue(n.replace(lf,"-$1").toLowerCase())||r.getPropertyValue(n)||!i&&e(t,ts(n)||n,1)||""},xp="O,Moz,ms,Ms,Webkit".split(","),ts=function(t,n,i){var r=n||Rr,a=r.style,s=5;if(t in a&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);s--&&!(xp[s]+t in a););return s<0?null:(s===3?"ms":s>=0?xp[s]:"")+t},vh=function(){Sb()&&window.document&&(gp=window,ar=gp.document,Ga=ar.documentElement,Rr=mh("div")||{style:{}},mh("div"),Le=ts(Le),pi=Le+"Origin",Rr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Km=!!ts("perspective"),cf=Gn.core.reverting,of=1)},Hu=function e(t){var n=mh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,a=this.style.cssText,s;if(Ga.appendChild(n),n.appendChild(this),this.style.display="block",t)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=e}catch{}else this._gsapBBox&&(s=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Ga.removeChild(n),this.style.cssText=a,s},Mp=function(t,n){for(var i=n.length;i--;)if(t.hasAttribute(n[i]))return t.getAttribute(n[i])},Qm=function(t){var n;try{n=t.getBBox()}catch{n=Hu.call(t,!0)}return n&&(n.width||n.height)||t.getBBox===Hu||(n=Hu.call(t,!0)),n&&!n.width&&!n.x&&!n.y?{x:+Mp(t,["x","cx","x1"])||0,y:+Mp(t,["y","cy","y1"])||0,width:0,height:0}:n},tv=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Qm(t))},fo=function(t,n){if(n){var i=t.style;n in Vi&&n!==pi&&(n=Le),i.removeProperty?((n.substr(0,2)==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(n.replace(lf,"-$1").toLowerCase())):i.removeAttribute(n)}},sr=function(t,n,i,r,a,s){var o=new bn(t._pt,n,i,0,1,s?$m:jm);return t._pt=o,o.b=r,o.e=a,t._props.push(i),o},bp={deg:1,rad:1,turn:1},zb={grid:1,flex:1},hr=function e(t,n,i,r){var a=parseFloat(i)||0,s=(i+"").trim().substr((a+"").length)||"px",o=Rr.style,l=Eb.test(n),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",v,p,m,g;return r===s||!a||bp[r]||bp[s]?a:(s!=="px"&&!f&&(a=e(t,n,i,"px")),g=t.getCTM&&tv(t),(d||s==="%")&&(Vi[n]||~n.indexOf("adius"))?(v=g?t.getBBox()[l?"width":"height"]:t[u],Ue(d?a/v*h:a/100*v)):(o[l?"width":"height"]=h+(f?s:r),p=~n.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(p=(t.ownerSVGElement||{}).parentNode),(!p||p===ar||!p.appendChild)&&(p=ar.body),m=p._gsap,m&&d&&m.width&&l&&m.time===Fn.time&&!m.uncache?Ue(a/m.width*h):((d||s==="%")&&!zb[bi(p,"display")]&&(o.position=bi(t,"position")),p===t&&(o.position="static"),p.appendChild(Rr),v=Rr[u],p.removeChild(Rr),o.position="absolute",l&&d&&(m=Ur(p),m.time=Fn.time,m.width=p[u]),Ue(f?v*a/h:v&&a?h/v*a:0))))},Ui=function(t,n,i,r){var a;return of||vh(),n in zi&&n!=="transform"&&(n=zi[n],~n.indexOf(",")&&(n=n.split(",")[0])),Vi[n]&&n!=="transform"?(a=mo(t,r),a=n!=="transformOrigin"?a[n]:a.svg?a.origin:al(bi(t,pi))+" "+a.zOrigin+"px"):(a=t.style[n],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=rl[n]&&rl[n](t,n,i)||bi(t,n)||_m(t,n)||(n==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?hr(t,n,a,i)+i:a},Bb=function(t,n,i,r){if(!i||i==="none"){var a=ts(n,t,1),s=a&&bi(t,a,1);s&&s!==i?(n=a,i=s):n==="borderColor"&&(i=bi(t,"borderTopColor"))}var o=new bn(this._pt,t.style,n,0,1,Xm),l=0,c=0,u,h,f,d,v,p,m,g,y,_,x,M;if(o.b=i,o.e=r,i+="",r+="",r==="auto"&&(t.style[n]=r,r=bi(t,n)||r,t.style[n]=i),u=[i,r],Um(u),i=u[0],r=u[1],f=i.match(Ua)||[],M=r.match(Ua)||[],M.length){for(;h=Ua.exec(r);)m=h[0],y=r.substring(l,h.index),v?v=(v+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(v=1),m!==(p=f[c++]||"")&&(d=parseFloat(p)||0,x=p.substr((d+"").length),m.charAt(1)==="="&&(m=Ba(d,m)+x),g=parseFloat(m),_=m.substr((g+"").length),l=Ua.lastIndex-_.length,_||(_=_||Nn.units[n]||x,l===r.length&&(r+=_,o.e+=_)),x!==_&&(d=hr(t,n,p,_)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:g-d,m:v&&v<4||n==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=n==="display"&&r==="none"?$m:jm;return fm.test(r)&&(o.e=0),this._pt=o,o},wp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Gb=function(t){var n=t.split(" "),i=n[0],r=n[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),n[0]=wp[i]||i,n[1]=wp[r]||r,n.join(" ")},kb=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,r=i.style,a=n.u,s=i._gsap,o,l,c;if(a==="all"||a===!0)r.cssText="",l=1;else for(a=a.split(","),c=a.length;--c>-1;)o=a[c],Vi[o]&&(l=1,o=o==="transformOrigin"?pi:Le),fo(i,o);l&&(fo(i,Le),s&&(s.svg&&i.removeAttribute("transform"),mo(i,1),s.uncache=1,Zm(r)))}},rl={clearProps:function(t,n,i,r,a){if(a.data!=="isFromStart"){var s=t._pt=new bn(t._pt,n,i,0,0,kb);return s.u=r,s.pr=-10,s.tween=a,t._props.push(i),1}}},po=[1,0,0,1,0,0],ev={},nv=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Sp=function(t){var n=bi(t,Le);return nv(n)?po:n.substr(7).match(hm).map(Ue)},uf=function(t,n){var i=t._gsap||Ur(t),r=t.style,a=Sp(t),s,o,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,a=[l.a,l.b,l.c,l.d,l.e,l.f],a.join(",")==="1,0,0,1,0,0"?po:a):(a===po&&!t.offsetParent&&t!==Ga&&!i.svg&&(l=r.display,r.display="block",s=t.parentNode,(!s||!t.offsetParent)&&(c=1,o=t.nextElementSibling,Ga.appendChild(t)),a=Sp(t),l?r.display=l:fo(t,"display"),c&&(o?s.insertBefore(t,o):s?s.appendChild(t):Ga.removeChild(t))),n&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},gh=function(t,n,i,r,a,s){var o=t._gsap,l=a||uf(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],v=l[1],p=l[2],m=l[3],g=l[4],y=l[5],_=n.split(" "),x=parseFloat(_[0])||0,M=parseFloat(_[1])||0,S,E,b,w;i?l!==po&&(E=d*m-v*p)&&(b=x*(m/E)+M*(-p/E)+(p*y-m*g)/E,w=x*(-v/E)+M*(d/E)-(d*y-v*g)/E,x=b,M=w):(S=Qm(t),x=S.x+(~_[0].indexOf("%")?x/100*S.width:x),M=S.y+(~(_[1]||_[0]).indexOf("%")?M/100*S.height:M)),r||r!==!1&&o.smooth?(g=x-c,y=M-u,o.xOffset=h+(g*d+y*p)-g,o.yOffset=f+(g*v+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=M,o.smooth=!!r,o.origin=n,o.originIsAbsolute=!!i,t.style[pi]="0px 0px",s&&(sr(s,o,"xOrigin",c,x),sr(s,o,"yOrigin",u,M),sr(s,o,"xOffset",h,o.xOffset),sr(s,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+M)},mo=function(t,n){var i=t._gsap||new Bm(t);if("x"in i&&!n&&!i.uncache)return i;var r=t.style,a=i.scaleX<0,s="px",o="deg",l=getComputedStyle(t),c=bi(t,pi)||"0",u,h,f,d,v,p,m,g,y,_,x,M,S,E,b,w,L,G,H,C,T,R,N,V,z,I,B,Z,X,k,J,it;return u=h=f=p=m=g=y=_=x=0,d=v=1,i.svg=!!(t.getCTM&&tv(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Le]!=="none"?l[Le]:"")),r.scale=r.rotate=r.translate="none"),E=uf(t,i.svg),i.svg&&(i.uncache?(z=t.getBBox(),c=i.xOrigin-z.x+"px "+(i.yOrigin-z.y)+"px",V=""):V=!n&&t.getAttribute("data-svg-origin"),gh(t,V||c,!!V||i.originIsAbsolute,i.smooth!==!1,E)),M=i.xOrigin||0,S=i.yOrigin||0,E!==po&&(G=E[0],H=E[1],C=E[2],T=E[3],u=R=E[4],h=N=E[5],E.length===6?(d=Math.sqrt(G*G+H*H),v=Math.sqrt(T*T+C*C),p=G||H?Pa(H,G)*Tr:0,y=C||T?Pa(C,T)*Tr+p:0,y&&(v*=Math.abs(Math.cos(y*ka))),i.svg&&(u-=M-(M*G+S*C),h-=S-(M*H+S*T))):(it=E[6],k=E[7],B=E[8],Z=E[9],X=E[10],J=E[11],u=E[12],h=E[13],f=E[14],b=Pa(it,X),m=b*Tr,b&&(w=Math.cos(-b),L=Math.sin(-b),V=R*w+B*L,z=N*w+Z*L,I=it*w+X*L,B=R*-L+B*w,Z=N*-L+Z*w,X=it*-L+X*w,J=k*-L+J*w,R=V,N=z,it=I),b=Pa(-C,X),g=b*Tr,b&&(w=Math.cos(-b),L=Math.sin(-b),V=G*w-B*L,z=H*w-Z*L,I=C*w-X*L,J=T*L+J*w,G=V,H=z,C=I),b=Pa(H,G),p=b*Tr,b&&(w=Math.cos(b),L=Math.sin(b),V=G*w+H*L,z=R*w+N*L,H=H*w-G*L,N=N*w-R*L,G=V,R=z),m&&Math.abs(m)+Math.abs(p)>359.9&&(m=p=0,g=180-g),d=Ue(Math.sqrt(G*G+H*H+C*C)),v=Ue(Math.sqrt(N*N+it*it)),b=Pa(R,N),y=Math.abs(b)>2e-4?b*Tr:0,x=J?1/(J<0?-J:J):0),i.svg&&(V=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!nv(bi(t,Le)),V&&t.setAttribute("transform",V))),Math.abs(y)>90&&Math.abs(y)<270&&(a?(d*=-1,y+=p<=0?180:-180,p+=p<=0?180:-180):(v*=-1,y+=y<=0?180:-180)),n=n||i.uncache,i.x=u-((i.xPercent=u&&(!n&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+s,i.y=h-((i.yPercent=h&&(!n&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+s,i.z=f+s,i.scaleX=Ue(d),i.scaleY=Ue(v),i.rotation=Ue(p)+o,i.rotationX=Ue(m)+o,i.rotationY=Ue(g)+o,i.skewX=y+o,i.skewY=_+o,i.transformPerspective=x+s,(i.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[pi]=al(c)),i.xOffset=i.yOffset=0,i.force3D=Nn.force3D,i.renderTransform=i.svg?Hb:Km?iv:Vb,i.uncache=0,i},al=function(t){return(t=t.split(" "))[0]+" "+t[1]},Wu=function(t,n,i){var r=rn(n);return Ue(parseFloat(n)+parseFloat(hr(t,"x",i+"px",r)))+r},Vb=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,iv(t,n)},br="0deg",Ks="0px",wr=") ",iv=function(t,n){var i=n||this,r=i.xPercent,a=i.yPercent,s=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,d=i.skewY,v=i.scaleX,p=i.scaleY,m=i.transformPerspective,g=i.force3D,y=i.target,_=i.zOrigin,x="",M=g==="auto"&&t&&t!==1||g===!0;if(_&&(h!==br||u!==br)){var S=parseFloat(u)*ka,E=Math.sin(S),b=Math.cos(S),w;S=parseFloat(h)*ka,w=Math.cos(S),s=Wu(y,s,E*w*-_),o=Wu(y,o,-Math.sin(S)*-_),l=Wu(y,l,b*w*-_+_)}m!==Ks&&(x+="perspective("+m+wr),(r||a)&&(x+="translate("+r+"%, "+a+"%) "),(M||s!==Ks||o!==Ks||l!==Ks)&&(x+=l!==Ks||M?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+wr),c!==br&&(x+="rotate("+c+wr),u!==br&&(x+="rotateY("+u+wr),h!==br&&(x+="rotateX("+h+wr),(f!==br||d!==br)&&(x+="skew("+f+", "+d+wr),(v!==1||p!==1)&&(x+="scale("+v+", "+p+wr),y.style[Le]=x||"translate(0, 0)"},Hb=function(t,n){var i=n||this,r=i.xPercent,a=i.yPercent,s=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,d=i.target,v=i.xOrigin,p=i.yOrigin,m=i.xOffset,g=i.yOffset,y=i.forceCSS,_=parseFloat(s),x=parseFloat(o),M,S,E,b,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ka,c*=ka,M=Math.cos(l)*h,S=Math.sin(l)*h,E=Math.sin(l-c)*-f,b=Math.cos(l-c)*f,c&&(u*=ka,w=Math.tan(c-u),w=Math.sqrt(1+w*w),E*=w,b*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),M*=w,S*=w)),M=Ue(M),S=Ue(S),E=Ue(E),b=Ue(b)):(M=h,b=f,S=E=0),(_&&!~(s+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(_=hr(d,"x",s,"px"),x=hr(d,"y",o,"px")),(v||p||m||g)&&(_=Ue(_+v-(v*M+p*E)+m),x=Ue(x+p-(v*S+p*b)+g)),(r||a)&&(w=d.getBBox(),_=Ue(_+r/100*w.width),x=Ue(x+a/100*w.height)),w="matrix("+M+","+S+","+E+","+b+","+_+","+x+")",d.setAttribute("transform",w),y&&(d.style[Le]=w)},Wb=function(t,n,i,r,a){var s=360,o=$e(a),l=parseFloat(a)*(o&&~a.indexOf("rad")?Tr:1),c=l-r,u=r+c+"deg",h,f;return o&&(h=a.split("_")[1],h==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),h==="cw"&&c<0?c=(c+s*yp)%s-~~(c/s)*s:h==="ccw"&&c>0&&(c=(c-s*yp)%s-~~(c/s)*s)),t._pt=f=new bn(t._pt,n,i,r,c,Ab),f.e=u,f.u="deg",t._props.push(i),f},Ep=function(t,n){for(var i in n)t[i]=n[i];return t},Xb=function(t,n,i){var r=Ep({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",s=i.style,o,l,c,u,h,f,d,v;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),s[Le]=n,o=mo(i,1),fo(i,Le),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Le],s[Le]=n,o=mo(i,1),s[Le]=c);for(l in Vi)c=r[l],u=o[l],c!==u&&a.indexOf(l)<0&&(d=rn(c),v=rn(u),h=d!==v?hr(i,l,c,v):parseFloat(c),f=parseFloat(u),t._pt=new bn(t._pt,o,l,h,f-h,ph),t._pt.u=v||0,t._props.push(l));Ep(o,r)};Mn("padding,margin,Width,Radius",function(e,t){var n="Top",i="Right",r="Bottom",a="Left",s=(t<3?[n,i,r,a]:[n+a,n+i,r+i,r+a]).map(function(o){return t<2?e+o:"border"+o+e});rl[t>1?"border"+e:e]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=s.map(function(v){return Ui(o,v,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},s.forEach(function(v,p){return d[v]=f[p]=f[p]||f[(p-1)/2|0]}),o.init(l,d,h)}});var rv={name:"css",register:vh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,i,r,a){var s=this._props,o=t.style,l=i.vars.startAt,c,u,h,f,d,v,p,m,g,y,_,x,M,S,E,b;of||vh(),this.styles=this.styles||Jm(t),b=this.styles.props,this.tween=i;for(p in n)if(p!=="autoRound"&&(u=n[p],!(Dn[p]&&Gm(p,n,i,r,t,a)))){if(d=typeof u,v=rl[p],d==="function"&&(u=u.call(i,r,t,a),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=uo(u)),v)v(this,t,p,u,i)&&(E=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(p)+"").trim(),u+="",lr.lastIndex=0,lr.test(c)||(m=rn(c),g=rn(u)),g?m!==g&&(c=hr(t,p,c,g)+g):m&&(u+=m),this.add(o,"setProperty",c,u,r,a,0,0,p),s.push(p),b.push(p,0,o[p]);else if(d!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(i,r,t,a):l[p],$e(c)&&~c.indexOf("random(")&&(c=uo(c)),rn(c+"")||(c+=Nn.units[p]||rn(Ui(t,p))||""),(c+"").charAt(1)==="="&&(c=Ui(t,p))):c=Ui(t,p),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),p in zi&&(p==="autoAlpha"&&(f===1&&Ui(t,"visibility")==="hidden"&&h&&(f=0),b.push("visibility",0,o.visibility),sr(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=zi[p],~p.indexOf(",")&&(p=p.split(",")[0]))),_=p in Vi,_){if(this.styles.save(p),x||(M=t._gsap,M.renderTransform&&!n.parseTransform||mo(t,n.parseTransform),S=n.smoothOrigin!==!1&&M.smooth,x=this._pt=new bn(this._pt,o,Le,0,1,M.renderTransform,M,0,-1),x.dep=1),p==="scale")this._pt=new bn(this._pt,M,"scaleY",f,(y?Ba(f,y+h):h)-f||0,ph),this._pt.u=0,s.push("scaleY",p),p+="X";else if(p==="transformOrigin"){b.push(pi,0,o[pi]),u=Gb(u),M.svg?gh(t,u,0,S,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==M.zOrigin&&sr(this,M,"zOrigin",M.zOrigin,g),sr(this,o,p,al(c),al(u)));continue}else if(p==="svgOrigin"){gh(t,u,1,S,0,this);continue}else if(p in ev){Wb(this,M,p,f,y?Ba(f,y+u):u);continue}else if(p==="smoothOrigin"){sr(this,M,"smooth",M.smooth,u);continue}else if(p==="force3D"){M[p]=u;continue}else if(p==="transform"){Xb(this,u,t);continue}}else p in o||(p=ts(p)||p);if(_||(h||h===0)&&(f||f===0)&&!Tb.test(u)&&p in o)m=(c+"").substr((f+"").length),h||(h=0),g=rn(u)||(p in Nn.units?Nn.units[p]:m),m!==g&&(f=hr(t,p,c,g)),this._pt=new bn(this._pt,_?M:o,p,f,(y?Ba(f,y+h):h)-f,!_&&(g==="px"||p==="zIndex")&&n.autoRound!==!1?Lb:ph),this._pt.u=g||0,m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Cb);else if(p in o)Bb.call(this,t,p,c,y?y+u:u);else if(p in t)this.add(t,p,c||t[p],y?y+u:u,r,a);else{Jh(p,u);continue}_||(p in o?b.push(p,0,o[p]):b.push(p,1,c||t[p])),s.push(p)}}E&&qm(this)},render:function(t,n){if(n.tween._time||!cf())for(var i=n._pt;i;)i.r(t,i.d),i=i._next;else n.styles.revert()},get:Ui,aliases:zi,getSetter:function(t,n,i){var r=zi[n];return r&&r.indexOf(",")<0&&(n=r),n in Vi&&n!==pi&&(t._gsap.x||Ui(t,"x"))?i&&_p===i?n==="scale"?Fb:Pb:(_p=i||{})&&(n==="scale"?Ib:Ub):t.style&&!$h(t.style[n])?Db:~n.indexOf("-")?Rb:af(t,n)},core:{_removeProperty:fo,_getMatrix:uf}};Gn.utils.checkPrefix=ts;Gn.core.getStyleSaver=Jm;(function(e,t,n,i){var r=Mn(e+","+t+","+n,function(a){Vi[a]=1});Mn(t,function(a){Nn.units[a]="deg",ev[a]=1}),zi[r[13]]=e+","+t,Mn(i,function(a){var s=a.split(":");zi[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){Nn.units[e]="px"});Gn.registerPlugin(rv);var av=Gn.registerPlugin(rv)||Gn;av.core.Tween;Number.EPSILON===void 0&&(Number.EPSILON=Math.pow(2,-52));Math.sign===void 0&&(Math.sign=function(e){return e<0?-1:e>0?1:+e});Function.prototype.name===void 0&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});Object.assign===void 0&&function(){Object.assign=function(e){if(e==null)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var i=arguments[n];if(i!=null)for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t}}();function ei(){}Object.assign(ei.prototype,{addEventListener:function(e,t){this._listeners===void 0&&(this._listeners={});var n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)},hasEventListener:function(e,t){if(this._listeners===void 0)return!1;var n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1},removeEventListener:function(e,t){if(this._listeners!==void 0){var n=this._listeners,i=n[e];if(i!==void 0){var r=i.indexOf(t);r!==-1&&i.splice(r,1)}}},dispatchEvent:function(e){if(this._listeners!==void 0){var t=this._listeners,n=t[e.type];if(n!==void 0){e.target=this;var i=[],r=0,a=n.length;for(r=0;r<a;r++)i[r]=n[r];for(r=0;r<a;r++)i[r].call(this,e)}}}});var sv="83",qb={LEFT:0,MIDDLE:1,RIGHT:2},ov=0,vo=1,hf=2,Yb=3,cv=0,jb=1,$b=0,ff=1,lv=2,Va=0,fr=1,Ws=2,df=1,pf=2,Hl=0,mf=1,ma=2,go=0,Xs=1,vf=2,gf=3,_f=4,yf=5,uv={NoBlending:go,NormalBlending:Xs,AdditiveBlending:vf,SubtractiveBlending:gf,MultiplyBlending:_f,CustomBlending:yf},xf=100,hv=101,fv=102,_h=103,yh=104,dv=200,pv=201,mv=202,vv=203,Mf=204,bf=205,gv=206,_v=207,yv=208,xv=209,Mv=210,bv=0,wv=1,Sv=2,sl=3,Ev=4,Tv=5,Av=6,Cv=7,dc=0,Lv=1,Dv=2,$c=0,wf=1,Rv=2,Pv=3,Fv=4,Wl=300,Xl=301,ol=302,Sf=303,cl=304,Ef=305,ql=306,Yl=307,Iv={UVMapping:Wl,CubeReflectionMapping:Xl,CubeRefractionMapping:ol,EquirectangularReflectionMapping:Sf,EquirectangularRefractionMapping:cl,SphericalReflectionMapping:Ef,CubeUVReflectionMapping:ql,CubeUVRefractionMapping:Yl},Bi=1e3,Un=1001,Yr=1002,xh={RepeatWrapping:Bi,ClampToEdgeWrapping:Un,MirroredRepeatWrapping:Yr},On=1003,jl=1004,$l=1005,wn=1006,Tf=1007,pc=1008,Mh={NearestFilter:On,NearestMipMapNearestFilter:jl,NearestMipMapLinearFilter:$l,LinearFilter:wn,LinearMipMapNearestFilter:Tf,LinearMipMapLinearFilter:pc},ll=1009,Uv=1010,Ov=1011,_o=1012,Nv=1013,Af=1014,es=1015,ul=1016,zv=1017,Bv=1018,Gv=1019,yo=1020,kv=1021,ns=1022,Si=1023,Vv=1024,Hv=1025,Zb=Si,zr=1026,is=1027,bh=2001,wh=2002,Sh=2003,Eh=2004,Th=2100,Ah=2101,Ch=2102,Lh=2103,Wv=2151,Xv=2200,qv=2201,Yv=2202,xo=2300,oo=2301,Zc=2302,jr=2400,Pr=2401,Mo=2402,Cf=0,jv=1,$v=2,bo=3e3,Zv=3001,Lf=3007,Jv=3002,Jb=3003,Kv=3004,Qv=3005,tg=3006,eg=3200,ng=3201,Kt={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),t=new Array(36),n=0,i;return function(){for(var a=0;a<36;a++)a===8||a===13||a===18||a===23?t[a]="-":a===14?t[a]="4":(n<=2&&(n=33554432+Math.random()*16777216|0),i=n&15,n=n>>4,t[a]=e[a===19?i&3|8:i]);return t.join("")}}(),clamp:function(e,t,n){return Math.max(t,Math.min(n,e))},euclideanModulo:function(e,t){return(e%t+t)%t},mapLinear:function(e,t,n,i,r){return i+(e-t)*(r-i)/(n-t)},lerp:function(e,t,n){return(1-n)*e+n*t},smoothstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))},smootherstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))},randInt:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randFloat:function(e,t){return e+Math.random()*(t-e)},randFloatSpread:function(e){return e*(.5-Math.random())},degToRad:function(e){return e*Kt.DEG2RAD},radToDeg:function(e){return e*Kt.RAD2DEG},isPowerOfTwo:function(e){return(e&e-1)===0&&e!==0},nearestPowerOfTwo:function(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))},nextPowerOfTwo:function(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,e}};function Ct(e,t){this.x=e||0,this.y=t||0}Ct.prototype={constructor:Ct,isVector2:!0,get width(){return this.x},set width(e){this.x=e},get height(){return this.y},set height(e){this.y=e},set:function(e,t){return this.x=e,this.y=t,this},setScalar:function(e){return this.x=e,this.y=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(e){return this.x=e.x,this.y=e.y,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)},addScalar:function(e){return this.x+=e,this.y+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)},subScalar:function(e){return this.x-=e,this.y-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this},multiply:function(e){return this.x*=e.x,this.y*=e.y,this},multiplyScalar:function(e){return isFinite(e)?(this.x*=e,this.y*=e):(this.x=0,this.y=0),this},divide:function(e){return this.x/=e.x,this.y/=e.y,this},divideScalar:function(e){return this.multiplyScalar(1/e)},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this},clampScalar:function(){var e,t;return function(i,r){return e===void 0&&(e=new Ct,t=new Ct),e.set(i,i),t.set(r,r),this.clamp(e,t)}}(),clampLength:function(e,t){var n=this.length();return this.multiplyScalar(Math.max(e,Math.min(t,n))/n)},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(e){return this.x*e.x+this.y*e.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length())},angle:function(){var e=Math.atan2(this.y,this.x);return e<0&&(e+=2*Math.PI),e},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){var t=this.x-e.x,n=this.y-e.y;return t*t+n*n},distanceToManhattan:function(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)},setLength:function(e){return this.multiplyScalar(e/this.length())},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this},lerpVectors:function(e,t,n){return this.subVectors(t,e).multiplyScalar(n).add(e)},equals:function(e){return e.x===this.x&&e.y===this.y},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e},fromAttribute:function(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this},rotateAround:function(e,t){var n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}};var Kb=0;function Se(e,t,n,i,r,a,s,o,l,c){Object.defineProperty(this,"id",{value:Kb++}),this.uuid=Kt.generateUUID(),this.name="",this.image=e!==void 0?e:Se.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=t!==void 0?t:Se.DEFAULT_MAPPING,this.wrapS=n!==void 0?n:Un,this.wrapT=i!==void 0?i:Un,this.magFilter=r!==void 0?r:wn,this.minFilter=a!==void 0?a:pc,this.anisotropy=l!==void 0?l:1,this.format=s!==void 0?s:Si,this.type=o!==void 0?o:ll,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c!==void 0?c:bo,this.version=0,this.onUpdate=null}Se.DEFAULT_IMAGE=void 0;Se.DEFAULT_MAPPING=Wl;Se.prototype={constructor:Se,isTexture:!0,set needsUpdate(e){e===!0&&this.version++},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this},toJSON:function(e){if(e.textures[this.uuid]!==void 0)return e.textures[this.uuid];function t(r){var a;return r.toDataURL!==void 0?a=r:(a=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),a.width=r.width,a.height=r.height,a.getContext("2d").drawImage(r,0,0,r.width,r.height)),a.width>2048||a.height>2048?a.toDataURL("image/jpeg",.6):a.toDataURL("image/png")}var n={metadata:{version:4.4,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY};if(this.image!==void 0){var i=this.image;i.uuid===void 0&&(i.uuid=Kt.generateUUID()),e.images[i.uuid]===void 0&&(e.images[i.uuid]={uuid:i.uuid,url:t(i)}),n.image=i.uuid}return e.textures[this.uuid]=n,n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(e){if(this.mapping===Wl){if(e.multiply(this.repeat),e.add(this.offset),e.x<0||e.x>1)switch(this.wrapS){case Bi:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bi:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}this.flipY&&(e.y=1-e.y)}}};Object.assign(Se.prototype,ei.prototype);function xe(e,t,n,i){this.x=e||0,this.y=t||0,this.z=n||0,this.w=i!==void 0?i:1}xe.prototype={constructor:xe,isVector4:!0,set:function(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this.w=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setW:function(e){return this.w=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this},multiplyScalar:function(e){return isFinite(e)?(this.x*=e,this.y*=e,this.z*=e,this.w*=e):(this.x=0,this.y=0,this.z=0,this.w=0),this},applyMatrix4:function(e){var t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this},divideScalar:function(e){return this.multiplyScalar(1/e)},setAxisAngleFromQuaternion:function(e){this.w=2*Math.acos(e.w);var t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this},setAxisAngleFromRotationMatrix:function(e){var t,n,i,r,a=.01,s=.1,o=e.elements,l=o[0],c=o[4],u=o[8],h=o[1],f=o[5],d=o[9],v=o[2],p=o[6],m=o[10];if(Math.abs(c-h)<a&&Math.abs(u-v)<a&&Math.abs(d-p)<a){if(Math.abs(c+h)<s&&Math.abs(u+v)<s&&Math.abs(d+p)<s&&Math.abs(l+f+m-3)<s)return this.set(1,0,0,0),this;t=Math.PI;var g=(l+1)/2,y=(f+1)/2,_=(m+1)/2,x=(c+h)/4,M=(u+v)/4,S=(d+p)/4;return g>y&&g>_?g<a?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(g),i=x/n,r=M/n):y>_?y<a?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=x/i,r=S/i):_<a?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(_),n=M/r,i=S/r),this.set(n,i,r,t),this}var E=Math.sqrt((p-d)*(p-d)+(u-v)*(u-v)+(h-c)*(h-c));return Math.abs(E)<.001&&(E=1),this.x=(p-d)/E,this.y=(u-v)/E,this.z=(h-c)/E,this.w=Math.acos((l+f+m-1)/2),this},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this},clampScalar:function(){var e,t;return function(i,r){return e===void 0&&(e=new xe,t=new xe),e.set(i,i,i,i),t.set(r,r,r,r),this.clamp(e,t)}}(),floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(e){return this.multiplyScalar(e/this.length())},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this},lerpVectors:function(e,t,n){return this.subVectors(t,e).multiplyScalar(n).add(e)},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e},fromAttribute:function(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}};function qs(e,t,n){this.uuid=Kt.generateUUID(),this.width=e,this.height=t,this.scissor=new xe(0,0,e,t),this.scissorTest=!1,this.viewport=new xe(0,0,e,t),n=n||{},n.minFilter===void 0&&(n.minFilter=wn),this.texture=new Se(void 0,void 0,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!0,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}Object.assign(qs.prototype,ei.prototype,{isWebGLRenderTarget:!0,setSize:function(e,t){(this.width!==e||this.height!==t)&&(this.width=e,this.height=t,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.width=e.width,this.height=e.height,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function rs(e,t,n){qs.call(this,e,t,n),this.activeCubeFace=0,this.activeMipMapLevel=0}rs.prototype=Object.create(qs.prototype);rs.prototype.constructor=rs;rs.prototype.isWebGLRenderTargetCube=!0;function We(e,t,n,i){this._x=e||0,this._y=t||0,this._z=n||0,this._w=i!==void 0?i:1}We.prototype={constructor:We,get x(){return this._x},set x(e){this._x=e,this.onChangeCallback()},get y(){return this._y},set y(e){this._y=e,this.onChangeCallback()},get z(){return this._z},set z(e){this._z=e,this.onChangeCallback()},get w(){return this._w},set w(e){this._w=e,this.onChangeCallback()},set:function(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this.onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this.onChangeCallback(),this},setFromEuler:function(e,t){if((e&&e.isEuler)===!1)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var n=Math.cos(e._x/2),i=Math.cos(e._y/2),r=Math.cos(e._z/2),a=Math.sin(e._x/2),s=Math.sin(e._y/2),o=Math.sin(e._z/2),l=e.order;return l==="XYZ"?(this._x=a*i*r+n*s*o,this._y=n*s*r-a*i*o,this._z=n*i*o+a*s*r,this._w=n*i*r-a*s*o):l==="YXZ"?(this._x=a*i*r+n*s*o,this._y=n*s*r-a*i*o,this._z=n*i*o-a*s*r,this._w=n*i*r+a*s*o):l==="ZXY"?(this._x=a*i*r-n*s*o,this._y=n*s*r+a*i*o,this._z=n*i*o+a*s*r,this._w=n*i*r-a*s*o):l==="ZYX"?(this._x=a*i*r-n*s*o,this._y=n*s*r+a*i*o,this._z=n*i*o-a*s*r,this._w=n*i*r+a*s*o):l==="YZX"?(this._x=a*i*r+n*s*o,this._y=n*s*r+a*i*o,this._z=n*i*o-a*s*r,this._w=n*i*r-a*s*o):l==="XZY"&&(this._x=a*i*r-n*s*o,this._y=n*s*r-a*i*o,this._z=n*i*o+a*s*r,this._w=n*i*r+a*s*o),t!==!1&&this.onChangeCallback(),this},setFromAxisAngle:function(e,t){var n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this.onChangeCallback(),this},setFromRotationMatrix:function(e){var t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],s=t[5],o=t[9],l=t[2],c=t[6],u=t[10],h=n+s+u,f;return h>0?(f=.5/Math.sqrt(h+1),this._w=.25/f,this._x=(c-o)*f,this._y=(r-l)*f,this._z=(a-i)*f):n>s&&n>u?(f=2*Math.sqrt(1+n-s-u),this._w=(c-o)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f):s>u?(f=2*Math.sqrt(1+s-n-u),this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(o+c)/f):(f=2*Math.sqrt(1+u-n-s),this._w=(a-i)/f,this._x=(r+l)/f,this._y=(o+c)/f,this._z=.25*f),this.onChangeCallback(),this},setFromUnitVectors:function(){var e,t,n=1e-6;return function(r,a){return e===void 0&&(e=new U),t=r.dot(a)+1,t<n?(t=0,Math.abs(r.x)>Math.abs(r.z)?e.set(-r.y,r.x,0):e.set(0,-r.z,r.y)):e.crossVectors(r,a),this._x=e.x,this._y=e.y,this._z=e.z,this._w=t,this.normalize()}}(),inverse:function(){return this.conjugate().normalize()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this.onChangeCallback(),this},dot:function(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this.onChangeCallback(),this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)},premultiply:function(e){return this.multiplyQuaternions(e,this)},multiplyQuaternions:function(e,t){var n=e._x,i=e._y,r=e._z,a=e._w,s=t._x,o=t._y,l=t._z,c=t._w;return this._x=n*c+a*s+i*l-r*o,this._y=i*c+a*o+r*s-n*l,this._z=r*c+a*l+n*o-i*s,this._w=a*c-n*s-i*o-r*l,this.onChangeCallback(),this},slerp:function(e,t){if(t===0)return this;if(t===1)return this.copy(e);var n=this._x,i=this._y,r=this._z,a=this._w,s=a*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;var o=Math.sqrt(1-s*s);if(Math.abs(o)<.001)return this._w=.5*(a+this._w),this._x=.5*(n+this._x),this._y=.5*(i+this._y),this._z=.5*(r+this._z),this;var l=Math.atan2(o,s),c=Math.sin((1-t)*l)/o,u=Math.sin(t*l)/o;return this._w=a*c+this._w*u,this._x=n*c+this._x*u,this._y=i*c+this._y*u,this._z=r*c+this._z*u,this.onChangeCallback(),this},equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w},fromArray:function(e,t){return t===void 0&&(t=0),this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this.onChangeCallback(),this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e},onChange:function(e){return this.onChangeCallback=e,this},onChangeCallback:function(){}};Object.assign(We,{slerp:function(e,t,n,i){return n.copy(e).slerp(t,i)},slerpFlat:function(e,t,n,i,r,a,s){var o=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a+0],f=r[a+1],d=r[a+2],v=r[a+3];if(u!==v||o!==h||l!==f||c!==d){var p=1-s,m=o*h+l*f+c*d+u*v,g=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){var _=Math.sqrt(y),x=Math.atan2(_,m*g);p=Math.sin(p*x)/_,s=Math.sin(s*x)/_}var M=s*g;if(o=o*p+h*M,l=l*p+f*M,c=c*p+d*M,u=u*p+v*M,p===1-s){var S=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=S,l*=S,c*=S,u*=S}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=u}});function U(e,t,n){this.x=e||0,this.y=t||0,this.z=n||0}U.prototype={constructor:U,isVector3:!0,set:function(e,t,n){return this.x=e,this.y=t,this.z=n,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)},multiplyScalar:function(e){return isFinite(e)?(this.x*=e,this.y*=e,this.z*=e):(this.x=0,this.y=0,this.z=0),this},multiplyVectors:function(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this},applyEuler:function(){var e;return function(n){return(n&&n.isEuler)===!1&&console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),e===void 0&&(e=new We),this.applyQuaternion(e.setFromEuler(n))}}(),applyAxisAngle:function(){var e;return function(n,i){return e===void 0&&(e=new We),this.applyQuaternion(e.setFromAxisAngle(n,i))}}(),applyMatrix3:function(e){var t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this},applyMatrix4:function(e){var t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12],this.y=r[1]*t+r[5]*n+r[9]*i+r[13],this.z=r[2]*t+r[6]*n+r[10]*i+r[14],this},applyProjection:function(e){var t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this},applyQuaternion:function(e){var t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,s=e.z,o=e.w,l=o*t+a*i-s*n,c=o*n+s*t-r*i,u=o*i+r*n-a*t,h=-r*t-a*n-s*i;return this.x=l*o+h*-r+c*-s-u*-a,this.y=c*o+h*-a+u*-r-l*-s,this.z=u*o+h*-s+l*-a-c*-r,this},project:function(){var e;return function(n){return e===void 0&&(e=new Yt),e.multiplyMatrices(n.projectionMatrix,e.getInverse(n.matrixWorld)),this.applyProjection(e)}}(),unproject:function(){var e;return function(n){return e===void 0&&(e=new Yt),e.multiplyMatrices(n.matrixWorld,e.getInverse(n.projectionMatrix)),this.applyProjection(e)}}(),transformDirection:function(e){var t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()},divide:function(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this},divideScalar:function(e){return this.multiplyScalar(1/e)},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this},clampScalar:function(){var e,t;return function(i,r){return e===void 0&&(e=new U,t=new U),e.set(i,i,i),t.set(r,r,r),this.clamp(e,t)}}(),clampLength:function(e,t){var n=this.length();return this.multiplyScalar(Math.max(e,Math.min(t,n))/n)},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(e){return this.multiplyScalar(e/this.length())},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this},lerpVectors:function(e,t,n){return this.subVectors(t,e).multiplyScalar(n).add(e)},cross:function(e,t){if(t!==void 0)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t);var n=this.x,i=this.y,r=this.z;return this.x=i*e.z-r*e.y,this.y=r*e.x-n*e.z,this.z=n*e.y-i*e.x,this},crossVectors:function(e,t){var n=e.x,i=e.y,r=e.z,a=t.x,s=t.y,o=t.z;return this.x=i*o-r*s,this.y=r*a-n*o,this.z=n*s-i*a,this},projectOnVector:function(e){var t=e.dot(this)/e.lengthSq();return this.copy(e).multiplyScalar(t)},projectOnPlane:function(){var e;return function(n){return e===void 0&&(e=new U),e.copy(this).projectOnVector(n),this.sub(e)}}(),reflect:function(){var e;return function(n){return e===void 0&&(e=new U),this.sub(e.copy(n).multiplyScalar(2*this.dot(n)))}}(),angleTo:function(e){var t=this.dot(e)/Math.sqrt(this.lengthSq()*e.lengthSq());return Math.acos(Kt.clamp(t,-1,1))},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){var t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i},distanceToManhattan:function(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)},setFromSpherical:function(e){var t=Math.sin(e.phi)*e.radius;return this.x=t*Math.sin(e.theta),this.y=Math.cos(e.phi)*e.radius,this.z=t*Math.cos(e.theta),this},setFromCylindrical:function(e){return this.x=e.radius*Math.sin(e.theta),this.y=e.y,this.z=e.radius*Math.cos(e.theta),this},setFromMatrixPosition:function(e){return this.setFromMatrixColumn(e,3)},setFromMatrixScale:function(e){var t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this},setFromMatrixColumn:function(e,t){if(typeof e=="number"){console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");var n=e;e=t,t=n}return this.fromArray(e.elements,t*4)},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e},fromAttribute:function(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}};function Yt(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}Yt.prototype={constructor:Yt,isMatrix4:!0,set:function(e,t,n,i,r,a,s,o,l,c,u,h,f,d,v,p){var m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=s,m[13]=o,m[2]=l,m[6]=c,m[10]=u,m[14]=h,m[3]=f,m[7]=d,m[11]=v,m[15]=p,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return new Yt().fromArray(this.elements)},copy:function(e){return this.elements.set(e.elements),this},copyPosition:function(e){var t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this},extractBasis:function(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this},makeBasis:function(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this},extractRotation:function(){var e;return function(n){e===void 0&&(e=new U);var i=this.elements,r=n.elements,a=1/e.setFromMatrixColumn(n,0).length(),s=1/e.setFromMatrixColumn(n,1).length(),o=1/e.setFromMatrixColumn(n,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[4]=r[4]*s,i[5]=r[5]*s,i[6]=r[6]*s,i[8]=r[8]*o,i[9]=r[9]*o,i[10]=r[10]*o,this}}(),makeRotationFromEuler:function(e){(e&&e.isEuler)===!1&&console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),s=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){var h=a*c,f=a*u,d=s*c,v=s*u;t[0]=o*c,t[4]=-o*u,t[8]=l,t[1]=f+d*l,t[5]=h-v*l,t[9]=-s*o,t[2]=v-h*l,t[6]=d+f*l,t[10]=a*o}else if(e.order==="YXZ"){var p=o*c,m=o*u,g=l*c,y=l*u;t[0]=p+y*s,t[4]=g*s-m,t[8]=a*l,t[1]=a*u,t[5]=a*c,t[9]=-s,t[2]=m*s-g,t[6]=y+p*s,t[10]=a*o}else if(e.order==="ZXY"){var p=o*c,m=o*u,g=l*c,y=l*u;t[0]=p-y*s,t[4]=-a*u,t[8]=g+m*s,t[1]=m+g*s,t[5]=a*c,t[9]=y-p*s,t[2]=-a*l,t[6]=s,t[10]=a*o}else if(e.order==="ZYX"){var h=a*c,f=a*u,d=s*c,v=s*u;t[0]=o*c,t[4]=d*l-f,t[8]=h*l+v,t[1]=o*u,t[5]=v*l+h,t[9]=f*l-d,t[2]=-l,t[6]=s*o,t[10]=a*o}else if(e.order==="YZX"){var _=a*o,x=a*l,M=s*o,S=s*l;t[0]=o*c,t[4]=S-_*u,t[8]=M*u+x,t[1]=u,t[5]=a*c,t[9]=-s*c,t[2]=-l*c,t[6]=x*u+M,t[10]=_-S*u}else if(e.order==="XZY"){var _=a*o,x=a*l,M=s*o,S=s*l;t[0]=o*c,t[4]=-u,t[8]=l*c,t[1]=_*u+S,t[5]=a*c,t[9]=x*u-M,t[2]=M*u-x,t[6]=s*c,t[10]=S*u+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},makeRotationFromQuaternion:function(e){var t=this.elements,n=e.x,i=e.y,r=e.z,a=e.w,s=n+n,o=i+i,l=r+r,c=n*s,u=n*o,h=n*l,f=i*o,d=i*l,v=r*l,p=a*s,m=a*o,g=a*l;return t[0]=1-(f+v),t[4]=u-g,t[8]=h+m,t[1]=u+g,t[5]=1-(c+v),t[9]=d-p,t[2]=h-m,t[6]=d+p,t[10]=1-(c+f),t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},lookAt:function(){var e,t,n;return function(r,a,s){e===void 0&&(e=new U,t=new U,n=new U);var o=this.elements;return n.subVectors(r,a).normalize(),n.lengthSq()===0&&(n.z=1),e.crossVectors(s,n).normalize(),e.lengthSq()===0&&(n.z+=1e-4,e.crossVectors(s,n).normalize()),t.crossVectors(n,e),o[0]=e.x,o[4]=t.x,o[8]=n.x,o[1]=e.y,o[5]=t.y,o[9]=n.y,o[2]=e.z,o[6]=t.z,o[10]=n.z,this}}(),multiply:function(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){var n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[4],o=n[8],l=n[12],c=n[1],u=n[5],h=n[9],f=n[13],d=n[2],v=n[6],p=n[10],m=n[14],g=n[3],y=n[7],_=n[11],x=n[15],M=i[0],S=i[4],E=i[8],b=i[12],w=i[1],L=i[5],G=i[9],H=i[13],C=i[2],T=i[6],R=i[10],N=i[14],V=i[3],z=i[7],I=i[11],B=i[15];return r[0]=a*M+s*w+o*C+l*V,r[4]=a*S+s*L+o*T+l*z,r[8]=a*E+s*G+o*R+l*I,r[12]=a*b+s*H+o*N+l*B,r[1]=c*M+u*w+h*C+f*V,r[5]=c*S+u*L+h*T+f*z,r[9]=c*E+u*G+h*R+f*I,r[13]=c*b+u*H+h*N+f*B,r[2]=d*M+v*w+p*C+m*V,r[6]=d*S+v*L+p*T+m*z,r[10]=d*E+v*G+p*R+m*I,r[14]=d*b+v*H+p*N+m*B,r[3]=g*M+y*w+_*C+x*V,r[7]=g*S+y*L+_*T+x*z,r[11]=g*E+y*G+_*R+x*I,r[15]=g*b+y*H+_*N+x*B,this},multiplyToArray:function(e,t,n){var i=this.elements;return this.multiplyMatrices(e,t),n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this},multiplyScalar:function(e){var t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this},applyToVector3Array:function(){var e;return function(n,i,r){e===void 0&&(e=new U),i===void 0&&(i=0),r===void 0&&(r=n.length);for(var a=0,s=i;a<r;a+=3,s+=3)e.fromArray(n,s),e.applyMatrix4(this),e.toArray(n,s);return n}}(),applyToBufferAttribute:function(){var e;return function(n){e===void 0&&(e=new U);for(var i=0,r=n.count;i<r;i++)e.x=n.getX(i),e.y=n.getY(i),e.z=n.getZ(i),e.applyMatrix4(this),n.setXYZ(i,e.x,e.y,e.z);return n}}(),determinant:function(){var e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],s=e[5],o=e[9],l=e[13],c=e[2],u=e[6],h=e[10],f=e[14],d=e[3],v=e[7],p=e[11],m=e[15];return d*(+r*o*u-i*l*u-r*s*h+n*l*h+i*s*f-n*o*f)+v*(+t*o*f-t*l*h+r*a*h-i*a*f+i*l*c-r*o*c)+p*(+t*l*u-t*s*f-r*a*u+n*a*f+r*s*c-n*l*c)+m*(-i*s*c-t*o*u+t*s*h+i*a*u-n*a*h+n*o*c)},transpose:function(){var e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this},setPosition:function(e){var t=this.elements;return t[12]=e.x,t[13]=e.y,t[14]=e.z,this},getInverse:function(e,t){var n=this.elements,i=e.elements,r=i[0],a=i[1],s=i[2],o=i[3],l=i[4],c=i[5],u=i[6],h=i[7],f=i[8],d=i[9],v=i[10],p=i[11],m=i[12],g=i[13],y=i[14],_=i[15],x=d*y*h-g*v*h+g*u*p-c*y*p-d*u*_+c*v*_,M=m*v*h-f*y*h-m*u*p+l*y*p+f*u*_-l*v*_,S=f*g*h-m*d*h+m*c*p-l*g*p-f*c*_+l*d*_,E=m*d*u-f*g*u-m*c*v+l*g*v+f*c*y-l*d*y,b=r*x+a*M+s*S+o*E;if(b===0){var w="THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";if(t===!0)throw new Error(w);return console.warn(w),this.identity()}var L=1/b;return n[0]=x*L,n[1]=(g*v*o-d*y*o-g*s*p+a*y*p+d*s*_-a*v*_)*L,n[2]=(c*y*o-g*u*o+g*s*h-a*y*h-c*s*_+a*u*_)*L,n[3]=(d*u*o-c*v*o-d*s*h+a*v*h+c*s*p-a*u*p)*L,n[4]=M*L,n[5]=(f*y*o-m*v*o+m*s*p-r*y*p-f*s*_+r*v*_)*L,n[6]=(m*u*o-l*y*o-m*s*h+r*y*h+l*s*_-r*u*_)*L,n[7]=(l*v*o-f*u*o+f*s*h-r*v*h-l*s*p+r*u*p)*L,n[8]=S*L,n[9]=(m*d*o-f*g*o-m*a*p+r*g*p+f*a*_-r*d*_)*L,n[10]=(l*g*o-m*c*o+m*a*h-r*g*h-l*a*_+r*c*_)*L,n[11]=(f*c*o-l*d*o-f*a*h+r*d*h+l*a*p-r*c*p)*L,n[12]=E*L,n[13]=(f*g*s-m*d*s+m*a*v-r*g*v-f*a*y+r*d*y)*L,n[14]=(m*c*s-l*g*s-m*a*u+r*g*u+l*a*y-r*c*y)*L,n[15]=(l*d*s-f*c*s+f*a*u-r*d*u-l*a*v+r*c*v)*L,this},scale:function(e){var t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this},getMaxScaleOnAxis:function(){var e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))},makeTranslation:function(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this},makeRotationX:function(e){var t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this},makeRotationY:function(e){var t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this},makeRotationZ:function(e){var t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(e,t){var n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,s=e.y,o=e.z,l=r*a,c=r*s;return this.set(l*a+n,l*s-i*o,l*o+i*s,0,l*s+i*o,c*s+n,c*o-i*a,0,l*o-i*s,c*o+i*a,r*o*o+n,0,0,0,0,1),this},makeScale:function(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this},makeShear:function(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this},compose:function(e,t,n){return this.makeRotationFromQuaternion(t),this.scale(n),this.setPosition(e),this},decompose:function(){var e,t;return function(i,r,a){e===void 0&&(e=new U,t=new Yt);var s=this.elements,o=e.set(s[0],s[1],s[2]).length(),l=e.set(s[4],s[5],s[6]).length(),c=e.set(s[8],s[9],s[10]).length(),u=this.determinant();u<0&&(o=-o),i.x=s[12],i.y=s[13],i.z=s[14],t.elements.set(this.elements);var h=1/o,f=1/l,d=1/c;return t.elements[0]*=h,t.elements[1]*=h,t.elements[2]*=h,t.elements[4]*=f,t.elements[5]*=f,t.elements[6]*=f,t.elements[8]*=d,t.elements[9]*=d,t.elements[10]*=d,r.setFromRotationMatrix(t),a.x=o,a.y=l,a.z=c,this}}(),makeFrustum:function(e,t,n,i,r,a){var s=this.elements,o=2*r/(t-e),l=2*r/(i-n),c=(t+e)/(t-e),u=(i+n)/(i-n),h=-(a+r)/(a-r),f=-2*a*r/(a-r);return s[0]=o,s[4]=0,s[8]=c,s[12]=0,s[1]=0,s[5]=l,s[9]=u,s[13]=0,s[2]=0,s[6]=0,s[10]=h,s[14]=f,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this},makePerspective:function(e,t,n,i){var r=n*Math.tan(Kt.DEG2RAD*e*.5),a=-r,s=a*t,o=r*t;return this.makeFrustum(s,o,a,r,n,i)},makeOrthographic:function(e,t,n,i,r,a){var s=this.elements,o=1/(t-e),l=1/(n-i),c=1/(a-r),u=(t+e)*o,h=(n+i)*l,f=(a+r)*c;return s[0]=2*o,s[4]=0,s[8]=0,s[12]=-u,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-h,s[2]=0,s[6]=0,s[10]=-2*c,s[14]=-f,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this},equals:function(e){for(var t=this.elements,n=e.elements,i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0},fromArray:function(e,t){t===void 0&&(t=0);for(var n=0;n<16;n++)this.elements[n]=e[n+t];return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);var n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};function dr(e,t,n,i,r,a,s,o,l,c){e=e!==void 0?e:[],t=t!==void 0?t:Xl,Se.call(this,e,t,n,i,r,a,s,o,l,c),this.flipY=!1}dr.prototype=Object.create(Se.prototype);dr.prototype.constructor=dr;dr.prototype.isCubeTexture=!0;Object.defineProperty(dr.prototype,"images",{get:function(){return this.image},set:function(e){this.image=e}});var ig=new Se,rg=new dr;function ag(){this.seq=[],this.map={}}var Tp=[],Ap=[];function Ys(e,t,n){var i=e[0];if(i<=0||i>0)return e;var r=t*n,a=Tp[r];if(a===void 0&&(a=new Float32Array(r),Tp[r]=a),t!==0){i.toArray(a,0);for(var s=1,o=0;s!==t;++s)o+=n,e[s].toArray(a,o)}return a}function sg(e,t){var n=Ap[t];n===void 0&&(n=new Int32Array(t),Ap[t]=n);for(var i=0;i!==t;++i)n[i]=e.allocTextureUnit();return n}function Qb(e,t){e.uniform1f(this.addr,t)}function tw(e,t){e.uniform1i(this.addr,t)}function ew(e,t){t.x===void 0?e.uniform2fv(this.addr,t):e.uniform2f(this.addr,t.x,t.y)}function nw(e,t){t.x!==void 0?e.uniform3f(this.addr,t.x,t.y,t.z):t.r!==void 0?e.uniform3f(this.addr,t.r,t.g,t.b):e.uniform3fv(this.addr,t)}function iw(e,t){t.x===void 0?e.uniform4fv(this.addr,t):e.uniform4f(this.addr,t.x,t.y,t.z,t.w)}function rw(e,t){e.uniformMatrix2fv(this.addr,!1,t.elements||t)}function aw(e,t){e.uniformMatrix3fv(this.addr,!1,t.elements||t)}function sw(e,t){e.uniformMatrix4fv(this.addr,!1,t.elements||t)}function ow(e,t,n){var i=n.allocTextureUnit();e.uniform1i(this.addr,i),n.setTexture2D(t||ig,i)}function cw(e,t,n){var i=n.allocTextureUnit();e.uniform1i(this.addr,i),n.setTextureCube(t||rg,i)}function og(e,t){e.uniform2iv(this.addr,t)}function cg(e,t){e.uniform3iv(this.addr,t)}function lg(e,t){e.uniform4iv(this.addr,t)}function lw(e){switch(e){case 5126:return Qb;case 35664:return ew;case 35665:return nw;case 35666:return iw;case 35674:return rw;case 35675:return aw;case 35676:return sw;case 35678:return ow;case 35680:return cw;case 5124:case 35670:return tw;case 35667:case 35671:return og;case 35668:case 35672:return cg;case 35669:case 35673:return lg}}function uw(e,t){e.uniform1fv(this.addr,t)}function hw(e,t){e.uniform1iv(this.addr,t)}function fw(e,t){e.uniform2fv(this.addr,Ys(t,this.size,2))}function dw(e,t){e.uniform3fv(this.addr,Ys(t,this.size,3))}function pw(e,t){e.uniform4fv(this.addr,Ys(t,this.size,4))}function mw(e,t){e.uniformMatrix2fv(this.addr,!1,Ys(t,this.size,4))}function vw(e,t){e.uniformMatrix3fv(this.addr,!1,Ys(t,this.size,9))}function gw(e,t){e.uniformMatrix4fv(this.addr,!1,Ys(t,this.size,16))}function _w(e,t,n){var i=t.length,r=sg(n,i);e.uniform1iv(this.addr,r);for(var a=0;a!==i;++a)n.setTexture2D(t[a]||ig,r[a])}function yw(e,t,n){var i=t.length,r=sg(n,i);e.uniform1iv(this.addr,r);for(var a=0;a!==i;++a)n.setTextureCube(t[a]||rg,r[a])}function xw(e){switch(e){case 5126:return uw;case 35664:return fw;case 35665:return dw;case 35666:return pw;case 35674:return mw;case 35675:return vw;case 35676:return gw;case 35678:return _w;case 35680:return yw;case 5124:case 35670:return hw;case 35667:case 35671:return og;case 35668:case 35672:return cg;case 35669:case 35673:return lg}}function Mw(e,t,n){this.id=e,this.addr=n,this.setValue=lw(t.type)}function bw(e,t,n){this.id=e,this.addr=n,this.size=t.size,this.setValue=xw(t.type)}function ug(e){this.id=e,ag.call(this)}ug.prototype.setValue=function(e,t){for(var n=this.seq,i=0,r=n.length;i!==r;++i){var a=n[i];a.setValue(e,t[a.id])}};var Xu=/([\w\d_]+)(\])?(\[|\.)?/g;function Cp(e,t){e.seq.push(t),e.map[t.id]=t}function ww(e,t,n){var i=e.name,r=i.length;for(Xu.lastIndex=0;;){var a=Xu.exec(i),s=Xu.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){Cp(n,c===void 0?new Mw(o,e,t):new bw(o,e,t));break}else{var u=n.map,h=u[o];h===void 0&&(h=new ug(o),Cp(n,h)),n=h}}}function pr(e,t,n){ag.call(this),this.renderer=n;for(var i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),r=0;r!==i;++r){var a=e.getActiveUniform(t,r),s=a.name,o=e.getUniformLocation(t,s);ww(a,o,this)}}pr.prototype.setValue=function(e,t,n){var i=this.map[t];i!==void 0&&i.setValue(e,n,this.renderer)};pr.prototype.set=function(e,t,n){var i=this.map[n];i!==void 0&&i.setValue(e,t[n],this.renderer)};pr.prototype.setOptional=function(e,t,n){var i=t[n];i!==void 0&&this.setValue(e,n,i)};pr.upload=function(e,t,n,i){for(var r=0,a=t.length;r!==a;++r){var s=t[r],o=n[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,i)}};pr.seqWithValue=function(e,t){for(var n=[],i=0,r=e.length;i!==r;++i){var a=e[i];a.id in t&&n.push(a)}return n};var mn={merge:function(e){for(var t={},n=0;n<e.length;n++){var i=this.clone(e[n]);for(var r in i)t[r]=i[r]}return t},clone:function(e){var t={};for(var n in e){t[n]={};for(var i in e[n]){var r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}},Sw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif
`,Ew=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif
`,Tw=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif
`,Aw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( PHYSICAL )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif
`,Cw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lw=`
vec3 transformed = vec3( position );
`,Dw=`
vec3 objectNormal = vec3( normal );
`,Rw=`float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
		if( decayExponent > 0.0 ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
			float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
			float maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
			return distanceFalloff * maxDistanceCutoffFactor;
#else
			return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
#endif
		}
		return 1.0;
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 ltcTextureCoords( const in GeometricContext geometry, const in float roughness ) {
	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = (LUT_SIZE - 1.0)/LUT_SIZE;
	const float LUT_BIAS  = 0.5/LUT_SIZE;
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 P = geometry.position;
	float theta = acos( dot( N, V ) );
	vec2 uv = vec2(
		sqrt( saturate( roughness ) ),
		saturate( theta / ( 0.5 * PI ) ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
void clipQuadToHorizon( inout vec3 L[5], out int n ) {
	int config = 0;
	if ( L[0].z > 0.0 ) config += 1;
	if ( L[1].z > 0.0 ) config += 2;
	if ( L[2].z > 0.0 ) config += 4;
	if ( L[3].z > 0.0 ) config += 8;
	n = 0;
	if ( config == 0 ) {
	} else if ( config == 1 ) {
		n = 3;
		L[1] = -L[1].z * L[0] + L[0].z * L[1];
		L[2] = -L[3].z * L[0] + L[0].z * L[3];
	} else if ( config == 2 ) {
		n = 3;
		L[0] = -L[0].z * L[1] + L[1].z * L[0];
		L[2] = -L[2].z * L[1] + L[1].z * L[2];
	} else if ( config == 3 ) {
		n = 4;
		L[2] = -L[2].z * L[1] + L[1].z * L[2];
		L[3] = -L[3].z * L[0] + L[0].z * L[3];
	} else if ( config == 4 ) {
		n = 3;
		L[0] = -L[3].z * L[2] + L[2].z * L[3];
		L[1] = -L[1].z * L[2] + L[2].z * L[1];
	} else if ( config == 5 ) {
		n = 0;
	} else if ( config == 6 ) {
		n = 4;
		L[0] = -L[0].z * L[1] + L[1].z * L[0];
		L[3] = -L[3].z * L[2] + L[2].z * L[3];
	} else if ( config == 7 ) {
		n = 5;
		L[4] = -L[3].z * L[0] + L[0].z * L[3];
		L[3] = -L[3].z * L[2] + L[2].z * L[3];
	} else if ( config == 8 ) {
		n = 3;
		L[0] = -L[0].z * L[3] + L[3].z * L[0];
		L[1] = -L[2].z * L[3] + L[3].z * L[2];
		L[2] =  L[3];
	} else if ( config == 9 ) {
		n = 4;
		L[1] = -L[1].z * L[0] + L[0].z * L[1];
		L[2] = -L[2].z * L[3] + L[3].z * L[2];
	} else if ( config == 10 ) {
		n = 0;
	} else if ( config == 11 ) {
		n = 5;
		L[4] = L[3];
		L[3] = -L[2].z * L[3] + L[3].z * L[2];
		L[2] = -L[2].z * L[1] + L[1].z * L[2];
	} else if ( config == 12 ) {
		n = 4;
		L[1] = -L[1].z * L[2] + L[2].z * L[1];
		L[0] = -L[0].z * L[3] + L[3].z * L[0];
	} else if ( config == 13 ) {
		n = 5;
		L[4] = L[3];
		L[3] = L[2];
		L[2] = -L[1].z * L[2] + L[2].z * L[1];
		L[1] = -L[1].z * L[0] + L[0].z * L[1];
	} else if ( config == 14 ) {
		n = 5;
		L[4] = -L[0].z * L[3] + L[3].z * L[0];
		L[0] = -L[0].z * L[1] + L[1].z * L[0];
	} else if ( config == 15 ) {
		n = 4;
	}
	if ( n == 3 )
		L[3] = L[0];
	if ( n == 4 )
		L[4] = L[0];
}
float integrateLtcBrdfOverRectEdge( vec3 v1, vec3 v2 ) {
	float cosTheta = dot( v1, v2 );
	float theta = acos( cosTheta );
	float res = cross( v1, v2 ).z * ( ( theta > 0.001 ) ? theta / sin( theta ) : 1.0 );
	return res;
}
void initRectPoints( const in vec3 pos, const in vec3 halfWidth, const in vec3 halfHeight, out vec3 rectPoints[4] ) {
	rectPoints[0] = pos - halfWidth - halfHeight;
	rectPoints[1] = pos + halfWidth - halfHeight;
	rectPoints[2] = pos + halfWidth + halfHeight;
	rectPoints[3] = pos - halfWidth + halfHeight;
}
vec3 integrateLtcBrdfOverRect( const in GeometricContext geometry, const in mat3 brdfMat, const in vec3 rectPoints[4] ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 P = geometry.position;
	vec3 T1, T2;
	T1 = normalize(V - N * dot( V, N ));
	T2 = - cross( N, T1 );
	mat3 brdfWrtSurface = brdfMat * transpose( mat3( T1, T2, N ) );
	vec3 clippedRect[5];
	clippedRect[0] = brdfWrtSurface * ( rectPoints[0] - P );
	clippedRect[1] = brdfWrtSurface * ( rectPoints[1] - P );
	clippedRect[2] = brdfWrtSurface * ( rectPoints[2] - P );
	clippedRect[3] = brdfWrtSurface * ( rectPoints[3] - P );
	int n;
	clipQuadToHorizon(clippedRect, n);
	if ( n == 0 )
		return vec3( 0, 0, 0 );
	clippedRect[0] = normalize( clippedRect[0] );
	clippedRect[1] = normalize( clippedRect[1] );
	clippedRect[2] = normalize( clippedRect[2] );
	clippedRect[3] = normalize( clippedRect[3] );
	clippedRect[4] = normalize( clippedRect[4] );
	float sum = 0.0;
	sum += integrateLtcBrdfOverRectEdge( clippedRect[0], clippedRect[1] );
	sum += integrateLtcBrdfOverRectEdge( clippedRect[1], clippedRect[2] );
	sum += integrateLtcBrdfOverRectEdge( clippedRect[2], clippedRect[3] );
	if (n >= 4)
		sum += integrateLtcBrdfOverRectEdge( clippedRect[3], clippedRect[4] );
	if (n == 5)
		sum += integrateLtcBrdfOverRectEdge( clippedRect[4], clippedRect[0] );
	sum = max( 0.0, sum );
	vec3 Lo_i = vec3( sum, sum, sum );
	return Lo_i;
}
vec3 Rect_Area_Light_Specular_Reflectance(
		const in GeometricContext geometry,
		const in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight,
		const in float roughness,
		const in sampler2D ltcMat, const in sampler2D ltcMag ) {
	vec3 rectPoints[4];
	initRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );
	vec2 uv = ltcTextureCoords( geometry, roughness );
	vec4 brdfLtcApproxParams, t;
	brdfLtcApproxParams = texture2D( ltcMat, uv );
	t = texture2D( ltcMat, uv );
	float brdfLtcScalar = texture2D( ltcMag, uv ).a;
	mat3 brdfLtcApproxMat = mat3(
		vec3(   1,   0, t.y ),
		vec3(   0, t.z,   0 ),
		vec3( t.w,   0, t.x )
	);
	vec3 specularReflectance = integrateLtcBrdfOverRect( geometry, brdfLtcApproxMat, rectPoints );
	specularReflectance *= brdfLtcScalar;
	return specularReflectance;
}
vec3 Rect_Area_Light_Diffuse_Reflectance(
		const in GeometricContext geometry,
		const in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight ) {
	vec3 rectPoints[4];
	initRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );
	mat3 diffuseBrdfMat = mat3(1);
	vec3 diffuseReflectance = integrateLtcBrdfOverRect( geometry, diffuseBrdfMat, rectPoints );
	return diffuseReflectance;
}
vec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;
	return specularColor * AB.x + AB.y;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
`,Pw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = dFdx( surf_pos );
		vec3 vSigmaY = dFdy( surf_pos );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif
`,Fw=`#if NUM_CLIPPING_PLANES > 0
	for ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {
		vec4 plane = clippingPlanes[ i ];
		if ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;
	}
		
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {
			vec4 plane = clippingPlanes[ i ];
			clipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;
		}
		if ( clipped ) discard;
	
	#endif
#endif
`,Iw=`#if NUM_CLIPPING_PLANES > 0
	#if ! defined( PHYSICAL ) && ! defined( PHONG )
		varying vec3 vViewPosition;
	#endif
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif
`,Uw=`#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )
	varying vec3 vViewPosition;
#endif
`,Ow=`#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )
	vViewPosition = - mvPosition.xyz;
#endif
`,Nw=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,zw=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif
`,Bw=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,Gw=`#ifdef USE_COLOR
	vColor.xyz = color.xyz;
#endif`,kw=`#define PI 3.14159265359
#define PI2 6.28318530718
#define PI_HALF 1.5707963267949
#define RECIPROCAL_PI 0.31830988618
#define RECIPROCAL_PI2 0.15915494
#define LOG2 1.442695
#define EPSILON 1e-6
#define saturate(a) clamp( a, 0.0, 1.0 )
#define whiteCompliment(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transpose( const in mat3 v ) {
	mat3 tmp;
	tmp[0] = vec3(v[0].x, v[1].x, v[2].x);
	tmp[1] = vec3(v[0].y, v[1].y, v[2].y);
	tmp[2] = vec3(v[0].z, v[1].z, v[2].z);
	return tmp;
}
`,Vw=`#ifdef ENVMAP_TYPE_CUBE_UV
#define cubeUV_textureSize (1024.0)
int getFaceFromDirection(vec3 direction) {
	vec3 absDirection = abs(direction);
	int face = -1;
	if( absDirection.x > absDirection.z ) {
		if(absDirection.x > absDirection.y )
			face = direction.x > 0.0 ? 0 : 3;
		else
			face = direction.y > 0.0 ? 1 : 4;
	}
	else {
		if(absDirection.z > absDirection.y )
			face = direction.z > 0.0 ? 2 : 5;
		else
			face = direction.y > 0.0 ? 1 : 4;
	}
	return face;
}
#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)
#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))
vec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {
	float scale = exp2(cubeUV_maxLods1 - roughnessLevel);
	float dxRoughness = dFdx(roughness);
	float dyRoughness = dFdy(roughness);
	vec3 dx = dFdx( vec * scale * dxRoughness );
	vec3 dy = dFdy( vec * scale * dyRoughness );
	float d = max( dot( dx, dx ), dot( dy, dy ) );
	d = clamp(d, 1.0, cubeUV_rangeClamp);
	float mipLevel = 0.5 * log2(d);
	return vec2(floor(mipLevel), fract(mipLevel));
}
#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)
#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)
vec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {
	mipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;
	float a = 16.0 * cubeUV_rcpTextureSize;
	vec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );
	vec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;
	float powScale = exp2_packed.x * exp2_packed.y;
	float scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;
	float mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;
	bool bRes = mipLevel == 0.0;
	scale =  bRes && (scale < a) ? a : scale;
	vec3 r;
	vec2 offset;
	int face = getFaceFromDirection(direction);
	float rcpPowScale = 1.0 / powScale;
	if( face == 0) {
		r = vec3(direction.x, -direction.z, direction.y);
		offset = vec2(0.0+mipOffset,0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;
	}
	else if( face == 1) {
		r = vec3(direction.y, direction.x, direction.z);
		offset = vec2(scale+mipOffset, 0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;
	}
	else if( face == 2) {
		r = vec3(direction.z, direction.x, direction.y);
		offset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;
	}
	else if( face == 3) {
		r = vec3(direction.x, direction.z, direction.y);
		offset = vec2(0.0+mipOffset,0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;
	}
	else if( face == 4) {
		r = vec3(direction.y, direction.x, -direction.z);
		offset = vec2(scale+mipOffset, 0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;
	}
	else {
		r = vec3(direction.z, -direction.x, direction.y);
		offset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;
	}
	r = normalize(r);
	float texelOffset = 0.5 * cubeUV_rcpTextureSize;
	vec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;
	vec2 base = offset + vec2( texelOffset );
	return base + s * ( scale - 2.0 * texelOffset );
}
#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)
vec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {
	float roughnessVal = roughness* cubeUV_maxLods3;
	float r1 = floor(roughnessVal);
	float r2 = r1 + 1.0;
	float t = fract(roughnessVal);
	vec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);
	float s = mipInfo.y;
	float level0 = mipInfo.x;
	float level1 = level0 + 1.0;
	level1 = level1 > 5.0 ? 5.0 : level1;
	level0 += min( floor( s + 0.5 ), 5.0 );
	vec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);
	vec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));
	vec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);
	vec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));
	vec4 result = mix(color10, color20, t);
	return vec4(result.rgb, 1.0);
}
#endif
`,Hw=`#ifdef FLIP_SIDED
	objectNormal = -objectNormal;
#endif
vec3 transformedNormal = normalMatrix * objectNormal;
`,Ww=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif
`,Xw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );
#endif
`,qw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif
`,Yw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif
`,jw=`  gl_FragColor = linearToOutputTexel( gl_FragColor );
`,$w=`
vec4 LinearToLinear( in vec4 value ) {
  return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );
}
vec4 sRGBToLinear( in vec4 value ) {
  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );
}
vec4 LinearTosRGB( in vec4 value ) {
  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );
}
vec4 RGBEToLinear( in vec4 value ) {
  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
  float maxComponent = max( max( value.r, value.g ), value.b );
  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
  return vec4( value.xyz * value.w * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
  float maxRGB = max( value.x, max( value.g, value.b ) );
  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );
  M            = ceil( M * 255.0 ) / 255.0;
  return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
    float maxRGB = max( value.x, max( value.g, value.b ) );
    float D      = max( maxRange / maxRGB, 1.0 );
    D            = min( floor( D ) / 255.0, 1.0 );
    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value )  {
  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;
  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));
  vec4 vResult;
  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
  vResult.w = fract(Le);
  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;
  return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
  float Le = value.z * 255.0 + value.w;
  vec3 Xp_Y_XYZp;
  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);
  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;
  return vec4( max(vRGB, 0.0), 1.0 );
}
`,Zw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToVertex, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_EQUIREC )
		vec2 sampleUV;
		sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );
		sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;
		vec4 envColor = texture2D( envMap, sampleUV );
	#elif defined( ENVMAP_TYPE_SPHERE )
		vec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );
		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	envColor = envMapTexelToLinear( envColor );
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif
`,Jw=`#if defined( USE_ENVMAP ) || defined( PHYSICAL )
	uniform float reflectivity;
	uniform float envMapIntensity;
#endif
#ifdef USE_ENVMAP
	#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )
		varying vec3 vWorldPosition;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	uniform float flipEnvMap;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif
`,Kw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif
`,Qw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif
`,tS=`#ifdef USE_FOG
	#ifdef USE_LOGDEPTHBUF_EXT
		float depth = gl_FragDepthEXT / gl_FragCoord.w;
	#else
		float depth = gl_FragCoord.z / gl_FragCoord.w;
	#endif
	#ifdef FOG_EXP2
		float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, depth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif
`,eS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nS=`#ifdef TOON
	uniform sampler2D gradientMap;
	vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
		float dotNL = dot( normal, lightDirection );
		vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
		#ifdef USE_GRADIENTMAP
			return texture2D( gradientMap, coord ).rgb;
		#else
			return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
		#endif
	}
#endif
`,iS=`#ifdef USE_LIGHTMAP
	reflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;
#endif
`,rS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aS=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
#if NUM_POINT_LIGHTS > 0
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
	}
#endif
#if NUM_DIR_LIGHTS > 0
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
#endif
#if NUM_HEMI_LIGHTS > 0
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
#endif
`,sS=`uniform vec3 ambientLightColor;
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltcMat;	uniform sampler2D ltcMag;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif
#if defined( USE_ENVMAP ) && defined( PHYSICAL )
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			vec4 envMapColor = textureCubeUV( queryVec, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );
		#else
			vec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			vec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));
		#elif defined( ENVMAP_TYPE_EQUIREC )
			vec2 sampleUV;
			sampleUV.y = saturate( reflectVec.y * 0.5 + 0.5 );
			sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );
			#else
				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_SPHERE )
			vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );
			#else
				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif
`,oS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,cS=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3	diffuseColor;
	vec3	specularColor;
	float	specularShininess;
	float	specularStrength;
};
#if NUM_RECT_AREA_LIGHTS > 0
    void RE_Direct_RectArea_BlinnPhong( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
        vec3 matDiffColor = material.diffuseColor;
        vec3 matSpecColor = material.specularColor;
        vec3 lightColor   = rectAreaLight.color;
        float roughness = BlinnExponentToGGXRoughness( material.specularShininess );
        vec3 spec = Rect_Area_Light_Specular_Reflectance(
                geometry,
                rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,
                roughness,
                ltcMat, ltcMag );
        vec3 diff = Rect_Area_Light_Diffuse_Reflectance(
                geometry,
                rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );
        reflectedLight.directSpecular += lightColor * matSpecColor * spec / PI2;
        reflectedLight.directDiffuse  += lightColor * matDiffColor * diff / PI2;
    }
#endif
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	#ifdef TOON
		vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#else
		float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
		vec3 irradiance = dotNL * directLight.color;
	#endif
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_Direct_RectArea		RE_Direct_RectArea_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)
`,lS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );
#ifdef STANDARD
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
	material.clearCoat = saturate( clearCoat );	material.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );
#endif
`,uS=`struct PhysicalMaterial {
	vec3	diffuseColor;
	float	specularRoughness;
	vec3	specularColor;
	#ifndef STANDARD
		float clearCoat;
		float clearCoatRoughness;
	#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearCoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
    void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
        vec3 matDiffColor = material.diffuseColor;
        vec3 matSpecColor = material.specularColor;
        vec3 lightColor   = rectAreaLight.color;
        float roughness = material.specularRoughness;
        vec3 spec = Rect_Area_Light_Specular_Reflectance(
                geometry,
                rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,
                roughness,
                ltcMat, ltcMag );
        vec3 diff = Rect_Area_Light_Diffuse_Reflectance(
                geometry,
                rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );
        reflectedLight.directSpecular += lightColor * matSpecColor * spec;
        reflectedLight.directDiffuse  += lightColor * matDiffColor * diff;
    }
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifndef STANDARD
		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );
	#else
		float clearCoatDHR = 0.0;
	#endif
	reflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );
	reflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	#ifndef STANDARD
		reflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );
	#endif
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	#ifndef STANDARD
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		float dotNL = dotNV;
		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );
	#else
		float clearCoatDHR = 0.0;
	#endif
	reflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );
	#ifndef STANDARD
		reflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );
	#endif
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )
#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}
`,hS=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = normalize( vViewPosition );
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#ifdef USE_SHADOWMAP
		directLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#ifdef USE_SHADOWMAP
		directLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#ifdef USE_SHADOWMAP
		directLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
#endif
#if defined( RE_IndirectDiffuse )
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#ifdef USE_LIGHTMAP
		vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
	#endif
	#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )
	 	irradiance += getLightProbeIndirectIrradiance( geometry, 8 );
	#endif
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	vec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );
	#ifndef STANDARD
		vec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );
	#else
		vec3 clearCoatRadiance = vec3( 0.0 );
	#endif
		
	RE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );
#endif
`,fS=`#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)
	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;
#endif`,dS=`#ifdef USE_LOGDEPTHBUF
	uniform float logDepthBufFC;
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
	#endif
#endif
`,pS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
	#endif
	uniform float logDepthBufFC;
#endif`,mS=`#ifdef USE_LOGDEPTHBUF
	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
	#else
		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;
	#endif
#endif
`,vS=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif
`,gS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif
`,_S=`#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
`,yS=`#ifdef USE_MAP
	uniform vec4 offsetRepeat;
	uniform sampler2D map;
#endif
`,xS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.r;
#endif
`,MS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bS=`#ifdef USE_MORPHNORMALS
	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];
	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];
	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];
	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];
#endif
`,wS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_MORPHNORMALS
	uniform float morphTargetInfluences[ 8 ];
	#else
	uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,SS=`#ifdef USE_MORPHTARGETS
	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];
	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];
	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];
	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];
	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];
	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];
	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];
	#endif
#endif
`,ES=`#ifdef DOUBLE_SIDED
	float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );
#else
	float flipNormal = 1.0;
#endif
`,TS=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal ) * flipNormal;
#endif
#ifdef USE_NORMALMAP
	normal = perturbNormal2Arb( -vViewPosition, normal );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif
`,AS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 S = normalize( q0 * st1.t - q1 * st0.t );
		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );
		vec3 N = normalize( surf_norm );
		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
		mapN.xy = normalScale * mapN.xy;
		mat3 tsn = mat3( S, T, N );
		return normalize( tsn * mapN );
	}
#endif
`,CS=`vec3 packNormalToRGB( const in vec3 normal ) {
  return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
  return 1.0 - 2.0 * rgb.xyz;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
  return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
  return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
  return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`,LS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif
`,DS=`#ifdef USE_SKINNING
	vec4 mvPosition = modelViewMatrix * skinned;
#else
	vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
#endif
gl_Position = projectionMatrix * mvPosition;
`,RS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.r;
#endif
`,PS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FS=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHTS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];
	#endif
	#if NUM_SPOT_LIGHTS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];
	#endif
	#if NUM_POINT_LIGHTS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];
	#endif
    #if NUM_RECT_AREA_LIGHTS > 0
    #endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {
		const vec2 offset = vec2( 0.0, 1.0 );
		vec2 texelSize = vec2( 1.0 ) / size;
		vec2 centroidUV = floor( uv * size + 0.5 ) / size;
		float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );
		float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );
		float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );
		float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );
		vec2 f = fract( uv * size + 0.5 );
		float a = mix( lb, lt, f.y );
		float b = mix( rb, rt, f.y );
		float c = mix( a, b, f.x );
		return c;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			return (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			return (
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return 1.0;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		float dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif
`,IS=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHTS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];
	#endif
	#if NUM_SPOT_LIGHTS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];
	#endif
	#if NUM_POINT_LIGHTS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];
	#endif
    #if NUM_RECT_AREA_LIGHTS > 0
    #endif
#endif
`,US=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHTS > 0
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;
	}
	#endif
	#if NUM_SPOT_LIGHTS > 0
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;
	}
	#endif
	#if NUM_POINT_LIGHTS > 0
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;
	}
	#endif
    #if NUM_RECT_AREA_LIGHTS > 0
    #endif
#endif
`,OS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHTS > 0
	DirectionalLight directionalLight;
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		shadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#endif
	#if NUM_SPOT_LIGHTS > 0
	SpotLight spotLight;
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		shadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#endif
	#if NUM_POINT_LIGHTS > 0
	PointLight pointLight;
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		shadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;
	}
	#endif
	#if NUM_RECT_AREA_LIGHTS > 0
	#endif
	#endif
	return shadow;
}
`,NS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform sampler2D boneTexture;
		uniform int boneTextureWidth;
		uniform int boneTextureHeight;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureWidth ) );
			float y = floor( j / float( boneTextureWidth ) );
			float dx = 1.0 / float( boneTextureWidth );
			float dy = 1.0 / float( boneTextureHeight );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif
`,BS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	skinned  = bindMatrixInverse * skinned;
#endif
`,GS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
#endif
`,kS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HS=`#if defined( TONE_MAPPING )
  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif
`,WS=`#define saturate(a) clamp( a, 0.0, 1.0 )
uniform float toneMappingExposure;
uniform float toneMappingWhitePoint;
vec3 LinearToneMapping( vec3 color ) {
  return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
  color *= toneMappingExposure;
  return saturate( color / ( vec3( 1.0 ) + color ) );
}
#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )
vec3 Uncharted2ToneMapping( vec3 color ) {
  color *= toneMappingExposure;
  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
  color *= toneMappingExposure;
  color = max( vec3( 0.0 ), color - 0.004 );
  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
`,XS=`#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )
	varying vec2 vUv;
#endif`,qS=`#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )
	varying vec2 vUv;
	uniform vec4 offsetRepeat;
#endif
`,YS=`#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )
	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;
#endif`,jS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,$S=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
#endif`,ZS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = uv2;
#endif`,JS=`#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )
	#ifdef USE_SKINNING
		vec4 worldPosition = modelMatrix * skinned;
	#else
		vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );
	#endif
#endif
`,KS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldPosition;
#include <common>
void main() {
	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );
	gl_FragColor.a *= opacity;
}
`,QS=`varying vec3 vWorldPosition;
#include <common>
void main() {
	vWorldPosition = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}
`,tE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( gl_FragCoord.z );
	#endif
}
`,eE=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#include <begin_vertex>
	#include <displacementmap_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
}
`,nE=`uniform vec3 lightPos;
varying vec4 vWorldPosition;
#include <common>
#include <packing>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	gl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );
}
`,iE=`varying vec4 vWorldPosition;
#include <common>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <skinbase_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition;
}
`,rE=`uniform sampler2D tEquirect;
uniform float tFlip;
varying vec3 vWorldPosition;
#include <common>
void main() {
	vec3 direction = normalize( vWorldPosition );
	vec2 sampleUV;
	sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );
	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;
	gl_FragColor = texture2D( tEquirect, sampleUV );
}
`,aE=`varying vec3 vWorldPosition;
#include <common>
void main() {
	vWorldPosition = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}
`,sE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}
`,oE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	vLineDistance = scale * lineDistance;
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
}
`,cE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		reflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <normal_flip>
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}
`,lE=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
}
`,uE=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
#endif
#include <common>
#include <packing>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_pars_fragment>
#include <bsdfs>
#include <lights_pars>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <normal_flip>
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}
`,hE=`#define LAMBERT
varying vec3 vLightFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars>
#include <color_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
}
`,fE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_flip>
	#include <normal_fragment>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_template>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}
`,dE=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <displacementmap_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
}
`,pE=`#define PHYSICAL
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifndef STANDARD
	uniform float clearCoat;
	uniform float clearCoatRoughness;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <packing>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <lights_pars>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_flip>
	#include <normal_fragment>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_template>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}
`,mE=`#define PHYSICAL
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <displacementmap_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
}
`,vE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED  ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	#include <normal_flip>
	#include <normal_fragment>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#include <premultiplied_alpha_fragment>
	#include <encodings_fragment>
}
`,gE=`#define NORMAL
#if defined( FLAT_SHADED  ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <displacementmap_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
#if defined( FLAT_SHADED  ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}
`,_E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <packing>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}
`,yE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <project_vertex>
	#ifdef USE_SIZEATTENUATION
		gl_PointSize = size * ( scale / - mvPosition.z );
	#else
		gl_PointSize = size;
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
}
`,xE=`uniform float opacity;
#include <common>
#include <packing>
#include <bsdfs>
#include <lights_pars>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0  - getShadowMask() ) );
}
`,ME=`#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
}
`,ge={alphamap_fragment:Sw,alphamap_pars_fragment:Ew,alphatest_fragment:Tw,aomap_fragment:Aw,aomap_pars_fragment:Cw,begin_vertex:Lw,beginnormal_vertex:Dw,bsdfs:Rw,bumpmap_pars_fragment:Pw,clipping_planes_fragment:Fw,clipping_planes_pars_fragment:Iw,clipping_planes_pars_vertex:Uw,clipping_planes_vertex:Ow,color_fragment:Nw,color_pars_fragment:zw,color_pars_vertex:Bw,color_vertex:Gw,common:kw,cube_uv_reflection_fragment:Vw,defaultnormal_vertex:Hw,displacementmap_pars_vertex:Ww,displacementmap_vertex:Xw,emissivemap_fragment:qw,emissivemap_pars_fragment:Yw,encodings_fragment:jw,encodings_pars_fragment:$w,envmap_fragment:Zw,envmap_pars_fragment:Jw,envmap_pars_vertex:Kw,envmap_vertex:Qw,fog_fragment:tS,fog_pars_fragment:eS,gradientmap_pars_fragment:nS,lightmap_fragment:iS,lightmap_pars_fragment:rS,lights_lambert_vertex:aS,lights_pars:sS,lights_phong_fragment:oS,lights_phong_pars_fragment:cS,lights_physical_fragment:lS,lights_physical_pars_fragment:uS,lights_template:hS,logdepthbuf_fragment:fS,logdepthbuf_pars_fragment:dS,logdepthbuf_pars_vertex:pS,logdepthbuf_vertex:mS,map_fragment:vS,map_pars_fragment:gS,map_particle_fragment:_S,map_particle_pars_fragment:yS,metalnessmap_fragment:xS,metalnessmap_pars_fragment:MS,morphnormal_vertex:bS,morphtarget_pars_vertex:wS,morphtarget_vertex:SS,normal_flip:ES,normal_fragment:TS,normalmap_pars_fragment:AS,packing:CS,premultiplied_alpha_fragment:LS,project_vertex:DS,roughnessmap_fragment:RS,roughnessmap_pars_fragment:PS,shadowmap_pars_fragment:FS,shadowmap_pars_vertex:IS,shadowmap_vertex:US,shadowmask_pars_fragment:OS,skinbase_vertex:NS,skinning_pars_vertex:zS,skinning_vertex:BS,skinnormal_vertex:GS,specularmap_fragment:kS,specularmap_pars_fragment:VS,tonemapping_fragment:HS,tonemapping_pars_fragment:WS,uv_pars_fragment:XS,uv_pars_vertex:qS,uv_vertex:YS,uv2_pars_fragment:jS,uv2_pars_vertex:$S,uv2_vertex:ZS,worldpos_vertex:JS,cube_frag:KS,cube_vert:QS,depth_frag:tE,depth_vert:eE,distanceRGBA_frag:nE,distanceRGBA_vert:iE,equirect_frag:rE,equirect_vert:aE,linedashed_frag:sE,linedashed_vert:oE,meshbasic_frag:cE,meshbasic_vert:lE,meshlambert_frag:uE,meshlambert_vert:hE,meshphong_frag:fE,meshphong_vert:dE,meshphysical_frag:pE,meshphysical_vert:mE,normal_frag:vE,normal_vert:gE,points_frag:_E,points_vert:yE,shadow_frag:xE,shadow_vert:ME};function Vt(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}Vt.prototype={constructor:Vt,isColor:!0,r:1,g:1,b:1,set:function(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this},setScalar:function(e){return this.r=e,this.g=e,this.b=e,this},setHex:function(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this},setRGB:function(e,t,n){return this.r=e,this.g=t,this.b=n,this},setHSL:function(){function e(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*6*(2/3-i):t}return function(n,i,r){if(n=Kt.euclideanModulo(n,1),i=Kt.clamp(i,0,1),r=Kt.clamp(r,0,1),i===0)this.r=this.g=this.b=r;else{var a=r<=.5?r*(1+i):r+i-r*i,s=2*r-a;this.r=e(s,a,n+1/3),this.g=e(s,a,n),this.b=e(s,a,n-1/3)}return this}}(),setStyle:function(e){function t(h){h!==void 0&&parseFloat(h)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}var n;if(n=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){var i,r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(i=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[5]),this;if(i=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[5]),this;break;case"hsl":case"hsla":if(i=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)){var s=parseFloat(i[1])/360,o=parseInt(i[2],10)/100,l=parseInt(i[3],10)/100;return t(i[5]),this.setHSL(s,o,l)}break}}else if(n=/^\#([A-Fa-f0-9]+)$/.exec(e)){var c=n[1],u=c.length;if(u===3)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,this;if(u===6)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,this}if(e&&e.length>0){var c=bE[e];c!==void 0?this.setHex(c):console.warn("THREE.Color: Unknown color "+e)}return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(e){return this.r=e.r,this.g=e.g,this.b=e.b,this},copyGammaToLinear:function(e,t){return t===void 0&&(t=2),this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this},copyLinearToGamma:function(e,t){t===void 0&&(t=2);var n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this},convertGammaToLinear:function(){var e=this.r,t=this.g,n=this.b;return this.r=e*e,this.g=t*t,this.b=n*n,this},convertLinearToGamma:function(){return this.r=Math.sqrt(this.r),this.g=Math.sqrt(this.g),this.b=Math.sqrt(this.b),this},getHex:function(){return this.r*255<<16^this.g*255<<8^this.b*255<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(e){var t=e||{h:0,s:0,l:0},n=this.r,i=this.g,r=this.b,a=Math.max(n,i,r),s=Math.min(n,i,r),o,l,c=(s+a)/2;if(s===a)o=0,l=0;else{var u=a-s;switch(l=c<=.5?u/(a+s):u/(2-a-s),a){case n:o=(i-r)/u+(i<r?6:0);break;case i:o=(r-n)/u+2;break;case r:o=(n-i)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t},getStyle:function(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"},offsetHSL:function(e,t,n){var i=this.getHSL();return i.h+=e,i.s+=t,i.l+=n,this.setHSL(i.h,i.s,i.l),this},add:function(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this},addColors:function(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this},addScalar:function(e){return this.r+=e,this.g+=e,this.b+=e,this},sub:function(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this},multiply:function(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this},multiplyScalar:function(e){return this.r*=e,this.g*=e,this.b*=e,this},lerp:function(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this},equals:function(e){return e.r===this.r&&e.g===this.g&&e.b===this.b},fromArray:function(e,t){return t===void 0&&(t=0),this.r=e[t],this.g=e[t+1],this.b=e[t+2],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e},toJSON:function(){return this.getHex()}};var bE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function $r(e,t,n,i,r,a,s,o,l,c,u,h){Se.call(this,null,a,s,o,l,c,i,r,u,h),this.image={data:e,width:t,height:n},this.magFilter=l!==void 0?l:On,this.minFilter=c!==void 0?c:On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}$r.prototype=Object.create(Se.prototype);$r.prototype.constructor=$r;$r.prototype.isDataTexture=!0;var te={common:{diffuse:{value:new Vt(15658734)},opacity:{value:1},map:{value:null},offsetRepeat:{value:new xe(0,0,1,1)},specularMap:{value:null},alphaMap:{value:null},envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new Vt(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},offsetRepeat:{value:new xe(0,0,1,1)}}},as={basic:{uniforms:mn.merge([te.common,te.aomap,te.lightmap,te.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:mn.merge([te.common,te.aomap,te.lightmap,te.emissivemap,te.fog,te.lights,{emissive:{value:new Vt(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:mn.merge([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:mn.merge([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Vt(0)},roughness:{value:.5},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},points:{uniforms:mn.merge([te.points,te.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:mn.merge([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:mn.merge([te.common,te.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:mn.merge([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:ge.normal_vert,fragmentShader:ge.normal_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null},tFlip:{value:-1}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:{lightPos:{value:new U}},vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag}};as.physical={uniforms:mn.merge([as.standard.uniforms,{clearCoat:{value:0},clearCoatRoughness:{value:0}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};function wo(e,t){this.min=e!==void 0?e:new Ct(1/0,1/0),this.max=t!==void 0?t:new Ct(-1/0,-1/0)}wo.prototype={constructor:wo,set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromPoints:function(e){this.makeEmpty();for(var t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(){var e=new Ct;return function(n,i){var r=e.copy(i).multiplyScalar(.5);return this.min.copy(n).sub(r),this.max.copy(n).add(r),this}}(),clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(e){var t=e||new Ct;return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){var t=e||new Ct;return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y},getParameter:function(e,t){var n=t||new Ct;return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)},clampPoint:function(e,t){var n=t||new Ct;return n.copy(e).clamp(this.min,this.max)},distanceToPoint:function(){var e=new Ct;return function(n){var i=e.copy(n).clamp(this.min,this.max);return i.sub(n).length()}}(),intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};function wE(e,t){var n=e.context,i=e.state,r,a,s,o,l,c,u,h;function f(){var v=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),p=new Uint16Array([0,1,2,0,2,3]);r=n.createBuffer(),a=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,r),n.bufferData(n.ARRAY_BUFFER,v,n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,a),n.bufferData(n.ELEMENT_ARRAY_BUFFER,p,n.STATIC_DRAW),u=n.createTexture(),h=n.createTexture(),i.bindTexture(n.TEXTURE_2D,u),n.texImage2D(n.TEXTURE_2D,0,n.RGB,16,16,0,n.RGB,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),i.bindTexture(n.TEXTURE_2D,h),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,16,16,0,n.RGBA,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),s={vertexShader:["uniform lowp int renderType;","uniform vec3 screenPosition;","uniform vec2 scale;","uniform float rotation;","uniform sampler2D occlusionMap;","attribute vec2 position;","attribute vec2 uv;","varying vec2 vUV;","varying float vVisibility;","void main() {","vUV = uv;","vec2 pos = position;","if ( renderType == 2 ) {","vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );","visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );","visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );","visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );","visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );","visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );","visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );","visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );","visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );","vVisibility =        visibility.r / 9.0;","vVisibility *= 1.0 - visibility.g / 9.0;","vVisibility *=       visibility.b / 9.0;","vVisibility *= 1.0 - visibility.a / 9.0;","pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;","pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;","}","gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );","}"].join(`
`),fragmentShader:["uniform lowp int renderType;","uniform sampler2D map;","uniform float opacity;","uniform vec3 color;","varying vec2 vUV;","varying float vVisibility;","void main() {","if ( renderType == 0 ) {","gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );","} else if ( renderType == 1 ) {","gl_FragColor = texture2D( map, vUV );","} else {","vec4 texture = texture2D( map, vUV );","texture.a *= opacity * vVisibility;","gl_FragColor = texture;","gl_FragColor.rgb *= color;","}","}"].join(`
`)},o=d(s),l={vertex:n.getAttribLocation(o,"position"),uv:n.getAttribLocation(o,"uv")},c={renderType:n.getUniformLocation(o,"renderType"),map:n.getUniformLocation(o,"map"),occlusionMap:n.getUniformLocation(o,"occlusionMap"),opacity:n.getUniformLocation(o,"opacity"),color:n.getUniformLocation(o,"color"),scale:n.getUniformLocation(o,"scale"),rotation:n.getUniformLocation(o,"rotation"),screenPosition:n.getUniformLocation(o,"screenPosition")}}this.render=function(v,p,m){if(t.length!==0){var g=new U,y=m.w/m.z,_=m.z*.5,x=m.w*.5,M=16/m.w,S=new Ct(M*y,M),E=new U(1,1,0),b=new Ct(1,1),w=new wo;w.min.set(m.x,m.y),w.max.set(m.x+(m.z-16),m.y+(m.w-16)),o===void 0&&f(),n.useProgram(o),i.initAttributes(),i.enableAttribute(l.vertex),i.enableAttribute(l.uv),i.disableUnusedAttributes(),n.uniform1i(c.occlusionMap,0),n.uniform1i(c.map,1),n.bindBuffer(n.ARRAY_BUFFER,r),n.vertexAttribPointer(l.vertex,2,n.FLOAT,!1,2*8,0),n.vertexAttribPointer(l.uv,2,n.FLOAT,!1,2*8,8),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,a),i.disable(n.CULL_FACE),i.setDepthWrite(!1);for(var L=0,G=t.length;L<G;L++){M=16/m.w,S.set(M*y,M);var H=t[L];if(g.set(H.matrixWorld.elements[12],H.matrixWorld.elements[13],H.matrixWorld.elements[14]),g.applyMatrix4(p.matrixWorldInverse),g.applyProjection(p.projectionMatrix),E.copy(g),b.x=m.x+E.x*_+_-8,b.y=m.y+E.y*x+x-8,w.containsPoint(b)===!0){i.activeTexture(n.TEXTURE0),i.bindTexture(n.TEXTURE_2D,null),i.activeTexture(n.TEXTURE1),i.bindTexture(n.TEXTURE_2D,u),n.copyTexImage2D(n.TEXTURE_2D,0,n.RGB,b.x,b.y,16,16,0),n.uniform1i(c.renderType,0),n.uniform2f(c.scale,S.x,S.y),n.uniform3f(c.screenPosition,E.x,E.y,E.z),i.disable(n.BLEND),i.enable(n.DEPTH_TEST),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0),i.activeTexture(n.TEXTURE0),i.bindTexture(n.TEXTURE_2D,h),n.copyTexImage2D(n.TEXTURE_2D,0,n.RGBA,b.x,b.y,16,16,0),n.uniform1i(c.renderType,1),i.disable(n.DEPTH_TEST),i.activeTexture(n.TEXTURE1),i.bindTexture(n.TEXTURE_2D,u),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0),H.positionScreen.copy(E),H.customUpdateCallback?H.customUpdateCallback(H):H.updateLensFlares(),n.uniform1i(c.renderType,2),i.enable(n.BLEND);for(var C=0,T=H.lensFlares.length;C<T;C++){var R=H.lensFlares[C];R.opacity>.001&&R.scale>.001&&(E.x=R.x,E.y=R.y,E.z=R.z,M=R.size*R.scale/m.w,S.x=M*y,S.y=M,n.uniform3f(c.screenPosition,E.x,E.y,E.z),n.uniform2f(c.scale,S.x,S.y),n.uniform1f(c.rotation,R.rotation),n.uniform1f(c.opacity,R.opacity),n.uniform3f(c.color,R.color.r,R.color.g,R.color.b),i.setBlending(R.blending,R.blendEquation,R.blendSrc,R.blendDst),e.setTexture2D(R.texture,1),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0))}}}i.enable(n.CULL_FACE),i.enable(n.DEPTH_TEST),i.setDepthWrite(!0),e.resetGLState()}};function d(v){var p=n.createProgram(),m=n.createShader(n.FRAGMENT_SHADER),g=n.createShader(n.VERTEX_SHADER),y="precision "+e.getPrecision()+` float;
`;return n.shaderSource(m,y+v.fragmentShader),n.shaderSource(g,y+v.vertexShader),n.compileShader(m),n.compileShader(g),n.attachShader(p,m),n.attachShader(p,g),n.linkProgram(p),p}}function SE(e,t){var n=e.context,i=e.state,r,a,s,o,l,c,u=new U,h=new We,f=new U;function d(){var m=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),g=new Uint16Array([0,1,2,0,2,3]);r=n.createBuffer(),a=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,r),n.bufferData(n.ARRAY_BUFFER,m,n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,a),n.bufferData(n.ELEMENT_ARRAY_BUFFER,g,n.STATIC_DRAW),s=v(),o={position:n.getAttribLocation(s,"position"),uv:n.getAttribLocation(s,"uv")},l={uvOffset:n.getUniformLocation(s,"uvOffset"),uvScale:n.getUniformLocation(s,"uvScale"),rotation:n.getUniformLocation(s,"rotation"),scale:n.getUniformLocation(s,"scale"),color:n.getUniformLocation(s,"color"),map:n.getUniformLocation(s,"map"),opacity:n.getUniformLocation(s,"opacity"),modelViewMatrix:n.getUniformLocation(s,"modelViewMatrix"),projectionMatrix:n.getUniformLocation(s,"projectionMatrix"),fogType:n.getUniformLocation(s,"fogType"),fogDensity:n.getUniformLocation(s,"fogDensity"),fogNear:n.getUniformLocation(s,"fogNear"),fogFar:n.getUniformLocation(s,"fogFar"),fogColor:n.getUniformLocation(s,"fogColor"),alphaTest:n.getUniformLocation(s,"alphaTest")};var y=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");y.width=8,y.height=8;var _=y.getContext("2d");_.fillStyle="white",_.fillRect(0,0,8,8),c=new Se(y),c.needsUpdate=!0}this.render=function(m,g){if(t.length!==0){s===void 0&&d(),n.useProgram(s),i.initAttributes(),i.enableAttribute(o.position),i.enableAttribute(o.uv),i.disableUnusedAttributes(),i.disable(n.CULL_FACE),i.enable(n.BLEND),n.bindBuffer(n.ARRAY_BUFFER,r),n.vertexAttribPointer(o.position,2,n.FLOAT,!1,2*8,0),n.vertexAttribPointer(o.uv,2,n.FLOAT,!1,2*8,8),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,a),n.uniformMatrix4fv(l.projectionMatrix,!1,g.projectionMatrix.elements),i.activeTexture(n.TEXTURE0),n.uniform1i(l.map,0);var y=0,_=0,x=m.fog;x?(n.uniform3f(l.fogColor,x.color.r,x.color.g,x.color.b),x.isFog?(n.uniform1f(l.fogNear,x.near),n.uniform1f(l.fogFar,x.far),n.uniform1i(l.fogType,1),y=1,_=1):x.isFogExp2&&(n.uniform1f(l.fogDensity,x.density),n.uniform1i(l.fogType,2),y=2,_=2)):(n.uniform1i(l.fogType,0),y=0,_=0);for(var M=0,S=t.length;M<S;M++){var E=t[M];E.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,E.matrixWorld),E.z=-E.modelViewMatrix.elements[14]}t.sort(p);for(var b=[],M=0,S=t.length;M<S;M++){var E=t[M],w=E.material;if(w.visible!==!1){n.uniform1f(l.alphaTest,w.alphaTest),n.uniformMatrix4fv(l.modelViewMatrix,!1,E.modelViewMatrix.elements),E.matrixWorld.decompose(u,h,f),b[0]=f.x,b[1]=f.y;var L=0;m.fog&&w.fog&&(L=_),y!==L&&(n.uniform1i(l.fogType,L),y=L),w.map!==null?(n.uniform2f(l.uvOffset,w.map.offset.x,w.map.offset.y),n.uniform2f(l.uvScale,w.map.repeat.x,w.map.repeat.y)):(n.uniform2f(l.uvOffset,0,0),n.uniform2f(l.uvScale,1,1)),n.uniform1f(l.opacity,w.opacity),n.uniform3f(l.color,w.color.r,w.color.g,w.color.b),n.uniform1f(l.rotation,w.rotation),n.uniform2fv(l.scale,b),i.setBlending(w.blending,w.blendEquation,w.blendSrc,w.blendDst),i.setDepthTest(w.depthTest),i.setDepthWrite(w.depthWrite),w.map?e.setTexture2D(w.map,0):e.setTexture2D(c,0),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)}}i.enable(n.CULL_FACE),e.resetGLState()}};function v(){var m=n.createProgram(),g=n.createShader(n.VERTEX_SHADER),y=n.createShader(n.FRAGMENT_SHADER);return n.shaderSource(g,["precision "+e.getPrecision()+" float;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform float rotation;","uniform vec2 scale;","uniform vec2 uvOffset;","uniform vec2 uvScale;","attribute vec2 position;","attribute vec2 uv;","varying vec2 vUV;","void main() {","vUV = uvOffset + uv * uvScale;","vec2 alignedPosition = position * scale;","vec2 rotatedPosition;","rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;","rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;","vec4 finalPosition;","finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );","finalPosition.xy += rotatedPosition;","finalPosition = projectionMatrix * finalPosition;","gl_Position = finalPosition;","}"].join(`
`)),n.shaderSource(y,["precision "+e.getPrecision()+" float;","uniform vec3 color;","uniform sampler2D map;","uniform float opacity;","uniform int fogType;","uniform vec3 fogColor;","uniform float fogDensity;","uniform float fogNear;","uniform float fogFar;","uniform float alphaTest;","varying vec2 vUV;","void main() {","vec4 texture = texture2D( map, vUV );","if ( texture.a < alphaTest ) discard;","gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );","if ( fogType > 0 ) {","float depth = gl_FragCoord.z / gl_FragCoord.w;","float fogFactor = 0.0;","if ( fogType == 1 ) {","fogFactor = smoothstep( fogNear, fogFar, depth );","} else {","const float LOG2 = 1.442695;","fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );","fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );","}","gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );","}","}"].join(`
`)),n.compileShader(g),n.compileShader(y),n.attachShader(m,g),n.attachShader(m,y),n.linkProgram(m),m}function p(m,g){return m.renderOrder!==g.renderOrder?m.renderOrder-g.renderOrder:m.z!==g.z?g.z-m.z:g.id-m.id}}var EE=0;function ae(){Object.defineProperty(this,"id",{value:EE++}),this.uuid=Kt.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.lights=!0,this.blending=Xs,this.side=Va,this.shading=pf,this.vertexColors=Hl,this.opacity=1,this.transparent=!1,this.blendSrc=Mf,this.blendDst=bf,this.blendEquation=xf,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=sl,this.depthTest=!0,this.depthWrite=!0,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.alphaTest=0,this.premultipliedAlpha=!1,this.overdraw=0,this.visible=!0,this._needsUpdate=!0}ae.prototype={constructor:ae,isMaterial:!0,get needsUpdate(){return this._needsUpdate},set needsUpdate(e){e===!0&&this.update(),this._needsUpdate=e},setValues:function(e){if(e!==void 0)for(var t in e){var n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}var i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):t==="overdraw"?this[t]=Number(n):this[t]=n}},toJSON:function(e){var t=e===void 0;t&&(e={textures:{},images:{}});var n={metadata:{version:4.4,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearCoat!==void 0&&(n.clearCoat=this.clearCoat),this.clearCoatRoughness!==void 0&&(n.clearCoatRoughness=this.clearCoatRoughness),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,n.reflectivity=this.reflectivity),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(n.blending=this.blending),this.shading!==pf&&(n.shading=this.shading),this.side!==Va&&(n.side=this.side),this.vertexColors!==Hl&&(n.vertexColors=this.vertexColors),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),n.skinning=this.skinning,n.morphTargets=this.morphTargets;function i(s){var o=[];for(var l in s){var c=s[l];delete c.metadata,o.push(c)}return o}if(t){var r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(e){this.name=e.name,this.fog=e.fog,this.lights=e.lights,this.blending=e.blending,this.side=e.side,this.shading=e.shading,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.alphaTest=e.alphaTest,this.premultipliedAlpha=e.premultipliedAlpha,this.overdraw=e.overdraw,this.visible=e.visible,this.clipShadows=e.clipShadows,this.clipIntersection=e.clipIntersection;var t=e.clippingPlanes,n=null;if(t!==null){var i=t.length;n=new Array(i);for(var r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};Object.assign(ae.prototype,ei.prototype);function dn(e){ae.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}dn.prototype=Object.create(ae.prototype);dn.prototype.constructor=dn;dn.prototype.isShaderMaterial=!0;dn.prototype.copy=function(e){return ae.prototype.copy.call(this,e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mn.clone(e.uniforms),this.defines=e.defines,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=e.extensions,this};dn.prototype.toJSON=function(e){var t=ae.prototype.toJSON.call(this,e);return t.uniforms=this.uniforms,t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t};function mr(e){ae.call(this),this.type="MeshDepthMaterial",this.depthPacking=eg,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.setValues(e)}mr.prototype=Object.create(ae.prototype);mr.prototype.constructor=mr;mr.prototype.isMeshDepthMaterial=!0;mr.prototype.copy=function(e){return ae.prototype.copy.call(this,e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this};function Ei(e,t){this.min=e!==void 0?e:new U(1/0,1/0,1/0),this.max=t!==void 0?t:new U(-1/0,-1/0,-1/0)}Ei.prototype={constructor:Ei,isBox3:!0,set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromArray:function(e){for(var t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0,o=0,l=e.length;o<l;o+=3){var c=e[o],u=e[o+1],h=e[o+2];c<t&&(t=c),u<n&&(n=u),h<i&&(i=h),c>r&&(r=c),u>a&&(a=u),h>s&&(s=h)}this.min.set(t,n,i),this.max.set(r,a,s)},setFromBufferAttribute:function(e){for(var t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0,o=0,l=e.count;o<l;o++){var c=e.getX(o),u=e.getY(o),h=e.getZ(o);c<t&&(t=c),u<n&&(n=u),h<i&&(i=h),c>r&&(r=c),u>a&&(a=u),h>s&&(s=h)}this.min.set(t,n,i),this.max.set(r,a,s)},setFromPoints:function(e){this.makeEmpty();for(var t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(){var e=new U;return function(n,i){var r=e.copy(i).multiplyScalar(.5);return this.min.copy(n).sub(r),this.max.copy(n).add(r),this}}(),setFromObject:function(){var e=new U;return function(n){var i=this;return n.updateMatrixWorld(!0),this.makeEmpty(),n.traverse(function(r){var a,s,o=r.geometry;if(o!==void 0){if(o.isGeometry){var l=o.vertices;for(a=0,s=l.length;a<s;a++)e.copy(l[a]),e.applyMatrix4(r.matrixWorld),i.expandByPoint(e)}else if(o.isBufferGeometry){var c=o.attributes.position;if(c!==void 0)for(a=0,s=c.count;a<s;a++)e.fromAttribute(c,a).applyMatrix4(r.matrixWorld),i.expandByPoint(e)}}}),this}}(),clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(e){var t=e||new U;return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){var t=e||new U;return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z},getParameter:function(e,t){var n=t||new U;return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)},intersectsSphere:function(){var e;return function(n){return e===void 0&&(e=new U),this.clampPoint(n.center,e),e.distanceToSquared(n.center)<=n.radius*n.radius}}(),intersectsPlane:function(e){var t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=e.constant&&n>=e.constant},clampPoint:function(e,t){var n=t||new U;return n.copy(e).clamp(this.min,this.max)},distanceToPoint:function(){var e=new U;return function(n){var i=e.copy(n).clamp(this.min,this.max);return i.sub(n).length()}}(),getBoundingSphere:function(){var e=new U;return function(n){var i=n||new on;return this.getCenter(i.center),i.radius=this.getSize(e).length()*.5,i}}(),intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},applyMatrix4:function(){var e=[new U,new U,new U,new U,new U,new U,new U,new U];return function(n){return this.isEmpty()?this:(e[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n),e[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n),e[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n),e[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n),e[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n),e[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n),e[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n),e[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n),this.setFromPoints(e),this)}}(),translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};function on(e,t){this.center=e!==void 0?e:new U,this.radius=t!==void 0?t:0}on.prototype={constructor:on,set:function(e,t){return this.center.copy(e),this.radius=t,this},setFromPoints:function(){var e=new Ei;return function(n,i){var r=this.center;i!==void 0?r.copy(i):e.setFromPoints(n).getCenter(r);for(var a=0,s=0,o=n.length;s<o;s++)a=Math.max(a,r.distanceToSquared(n[s]));return this.radius=Math.sqrt(a),this}}(),clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.center.copy(e.center),this.radius=e.radius,this},empty:function(){return this.radius<=0},containsPoint:function(e){return e.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(e){return e.distanceTo(this.center)-this.radius},intersectsSphere:function(e){var t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t},intersectsBox:function(e){return e.intersectsSphere(this)},intersectsPlane:function(e){return Math.abs(this.center.dot(e.normal)-e.constant)<=this.radius},clampPoint:function(e,t){var n=this.center.distanceToSquared(e),i=t||new U;return i.copy(e),n>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i},getBoundingBox:function(e){var t=e||new Ei;return t.set(this.center,this.center),t.expandByScalar(this.radius),t},applyMatrix4:function(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this},translate:function(e){return this.center.add(e),this},equals:function(e){return e.center.equals(this.center)&&e.radius===this.radius}};function ii(){this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]),arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}ii.prototype={constructor:ii,isMatrix3:!0,set:function(e,t,n,i,r,a,s,o,l){var c=this.elements;return c[0]=e,c[1]=i,c[2]=s,c[3]=t,c[4]=r,c[5]=o,c[6]=n,c[7]=a,c[8]=l,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return new this.constructor().fromArray(this.elements)},copy:function(e){var t=e.elements;return this.set(t[0],t[3],t[6],t[1],t[4],t[7],t[2],t[5],t[8]),this},setFromMatrix4:function(e){var t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this},applyToVector3Array:function(){var e;return function(n,i,r){e===void 0&&(e=new U),i===void 0&&(i=0),r===void 0&&(r=n.length);for(var a=0,s=i;a<r;a+=3,s+=3)e.fromArray(n,s),e.applyMatrix3(this),e.toArray(n,s);return n}}(),applyToBufferAttribute:function(){var e;return function(n){e===void 0&&(e=new U);for(var i=0,r=n.count;i<r;i++)e.x=n.getX(i),e.y=n.getY(i),e.z=n.getZ(i),e.applyMatrix3(this),n.setXYZ(i,e.x,e.y,e.z);return n}}(),multiplyScalar:function(e){var t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this},determinant:function(){var e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],o=e[6],l=e[7],c=e[8];return t*a*c-t*s*l-n*r*c+n*s*o+i*r*l-i*a*o},getInverse:function(e,t){e&&e.isMatrix4&&console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");var n=e.elements,i=this.elements,r=n[0],a=n[1],s=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=f*l-c*h,v=c*u-f*o,p=h*o-l*u,m=r*d+a*v+s*p;if(m===0){var g="THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0";if(t===!0)throw new Error(g);return console.warn(g),this.identity()}var y=1/m;return i[0]=d*y,i[1]=(s*h-f*a)*y,i[2]=(c*a-s*l)*y,i[3]=v*y,i[4]=(f*r-s*u)*y,i[5]=(s*o-c*r)*y,i[6]=p*y,i[7]=(a*u-h*r)*y,i[8]=(l*r-a*o)*y,this},transpose:function(){var e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this},getNormalMatrix:function(e){return this.setFromMatrix4(e).getInverse(this).transpose()},transposeIntoArray:function(e){var t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this},fromArray:function(e,t){t===void 0&&(t=0);for(var n=0;n<9;n++)this.elements[n]=e[n+t];return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);var n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}};function Pn(e,t){this.normal=e!==void 0?e:new U(1,0,0),this.constant=t!==void 0?t:0}Pn.prototype={constructor:Pn,set:function(e,t){return this.normal.copy(e),this.constant=t,this},setComponents:function(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this},setFromNormalAndCoplanarPoint:function(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this},setFromCoplanarPoints:function(){var e=new U,t=new U;return function(i,r,a){var s=e.subVectors(a,r).cross(t.subVectors(i,r)).normalize();return this.setFromNormalAndCoplanarPoint(s,i),this}}(),clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.normal.copy(e.normal),this.constant=e.constant,this},normalize:function(){var e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(e){return this.normal.dot(e)+this.constant},distanceToSphere:function(e){return this.distanceToPoint(e.center)-e.radius},projectPoint:function(e,t){return this.orthoPoint(e,t).sub(e).negate()},orthoPoint:function(e,t){var n=this.distanceToPoint(e),i=t||new U;return i.copy(this.normal).multiplyScalar(n)},intersectLine:function(){var e=new U;return function(n,i){var r=i||new U,a=n.delta(e),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(n.start)===0?r.copy(n.start):void 0;var o=-(n.start.dot(this.normal)+this.constant)/s;if(!(o<0||o>1))return r.copy(a).multiplyScalar(o).add(n.start)}}(),intersectsLine:function(e){var t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0},intersectsBox:function(e){return e.intersectsPlane(this)},intersectsSphere:function(e){return e.intersectsPlane(this)},coplanarPoint:function(e){var t=e||new U;return t.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var e=new U,t=new ii;return function(i,r){var a=this.coplanarPoint(e).applyMatrix4(i),s=r||t.getNormalMatrix(i),o=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(o),this}}(),translate:function(e){return this.constant=this.constant-e.dot(this.normal),this},equals:function(e){return e.normal.equals(this.normal)&&e.constant===this.constant}};function So(e,t,n,i,r,a){this.planes=[e!==void 0?e:new Pn,t!==void 0?t:new Pn,n!==void 0?n:new Pn,i!==void 0?i:new Pn,r!==void 0?r:new Pn,a!==void 0?a:new Pn]}So.prototype={constructor:So,set:function(e,t,n,i,r,a){var s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){for(var t=this.planes,n=0;n<6;n++)t[n].copy(e.planes[n]);return this},setFromMatrix:function(e){var t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],s=n[3],o=n[4],l=n[5],c=n[6],u=n[7],h=n[8],f=n[9],d=n[10],v=n[11],p=n[12],m=n[13],g=n[14],y=n[15];return t[0].setComponents(s-i,u-o,v-h,y-p).normalize(),t[1].setComponents(s+i,u+o,v+h,y+p).normalize(),t[2].setComponents(s+r,u+l,v+f,y+m).normalize(),t[3].setComponents(s-r,u-l,v-f,y-m).normalize(),t[4].setComponents(s-a,u-c,v-d,y-g).normalize(),t[5].setComponents(s+a,u+c,v+d,y+g).normalize(),this},intersectsObject:function(){var e=new on;return function(n){var i=n.geometry;return i.boundingSphere===null&&i.computeBoundingSphere(),e.copy(i.boundingSphere).applyMatrix4(n.matrixWorld),this.intersectsSphere(e)}}(),intersectsSprite:function(){var e=new on;return function(n){return e.center.set(0,0,0),e.radius=.7071067811865476,e.applyMatrix4(n.matrixWorld),this.intersectsSphere(e)}}(),intersectsSphere:function(e){for(var t=this.planes,n=e.center,i=-e.radius,r=0;r<6;r++){var a=t[r].distanceToPoint(n);if(a<i)return!1}return!0},intersectsBox:function(){var e=new U,t=new U;return function(i){for(var r=this.planes,a=0;a<6;a++){var s=r[a];e.x=s.normal.x>0?i.min.x:i.max.x,t.x=s.normal.x>0?i.max.x:i.min.x,e.y=s.normal.y>0?i.min.y:i.max.y,t.y=s.normal.y>0?i.max.y:i.min.y,e.z=s.normal.z>0?i.min.z:i.max.z,t.z=s.normal.z>0?i.max.z:i.min.z;var o=s.distanceToPoint(e),l=s.distanceToPoint(t);if(o<0&&l<0)return!1}return!0}}(),containsPoint:function(e){for(var t=this.planes,n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}};function hg(e,t,n,i){var r=e.context,a=e.state,s=new So,o=new Yt,l=t.shadows,c=new Ct,u=new Ct(i.maxTextureSize,i.maxTextureSize),h=new U,f=new U,d=[],v=1,p=2,m=(v|p)+1,g=new Array(m),y=new Array(m),_={},x=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],M=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)],S=[new xe,new xe,new xe,new xe,new xe,new xe],E=new mr;E.depthPacking=ng,E.clipping=!0;for(var b=as.distanceRGBA,w=mn.clone(b.uniforms),L=0;L!==m;++L){var G=(L&v)!==0,H=(L&p)!==0,C=E.clone();C.morphTargets=G,C.skinning=H,g[L]=C;var T=new dn({defines:{USE_SHADOWMAP:""},uniforms:w,vertexShader:b.vertexShader,fragmentShader:b.fragmentShader,morphTargets:G,skinning:H,clipping:!0});y[L]=T}var R=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ff,this.renderReverseSided=!0,this.renderSingleSided=!0,this.render=function(z,I){if(R.enabled!==!1&&!(R.autoUpdate===!1&&R.needsUpdate===!1)&&l.length!==0){a.buffers.color.setClear(1,1,1,1),a.disable(r.BLEND),a.setDepthTest(!0),a.setScissorTest(!1);for(var B,Z,X=0,k=l.length;X<k;X++){var J=l[X],it=J.shadow;if(it===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}var Y=it.camera;if(c.copy(it.mapSize),c.min(u),J&&J.isPointLight){B=6,Z=!0;var gt=c.x,ft=c.y;S[0].set(gt*2,ft,gt,ft),S[1].set(0,ft,gt,ft),S[2].set(gt*3,ft,gt,ft),S[3].set(gt,ft,gt,ft),S[4].set(gt*3,0,gt,ft),S[5].set(gt,0,gt,ft),c.x*=4,c.y*=2}else B=1,Z=!1;if(it.map===null){var st={minFilter:On,magFilter:On,format:Si};it.map=new qs(c.x,c.y,st),Y.updateProjectionMatrix()}it.isSpotLightShadow&&it.update(J),it&&it.isRectAreaLightShadow&&it.update(J);var pt=it.map,W=it.matrix;f.setFromMatrixPosition(J.matrixWorld),Y.position.copy(f),e.setRenderTarget(pt),e.clear();for(var Ft=0;Ft<B;Ft++){if(Z){h.copy(Y.position),h.add(x[Ft]),Y.up.copy(M[Ft]),Y.lookAt(h);var vt=S[Ft];a.viewport(vt)}else h.setFromMatrixPosition(J.target.matrixWorld),Y.lookAt(h);Y.updateMatrixWorld(),Y.matrixWorldInverse.getInverse(Y.matrixWorld),W.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),W.multiply(Y.projectionMatrix),W.multiply(Y.matrixWorldInverse),o.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),s.setFromMatrix(o),d.length=0,V(z,I,Y);for(var Xt=0,bt=d.length;Xt<bt;Xt++){var Jt=d[Xt],Bt=n.update(Jt),Ut=Jt.material;if(Ut&&Ut.isMultiMaterial)for(var Nt=Bt.groups,ee=Ut.materials,fe=0,O=Nt.length;fe<O;fe++){var D=Nt[fe],nt=ee[D.materialIndex];if(nt.visible===!0){var ut=N(Jt,nt,Z,f);e.renderBufferDirect(Y,null,Bt,ut,Jt,D)}}else{var ut=N(Jt,Ut,Z,f);e.renderBufferDirect(Y,null,Bt,ut,Jt,null)}}}}var mt=e.getClearColor(),xt=e.getClearAlpha();e.setClearColor(mt,xt),R.needsUpdate=!1}};function N(z,I,B,Z){var X=z.geometry,k=null,J=g,it=z.customDepthMaterial;if(B&&(J=y,it=z.customDistanceMaterial),it)k=it;else{var Y=!1;I.morphTargets&&(X&&X.isBufferGeometry?Y=X.morphAttributes&&X.morphAttributes.position&&X.morphAttributes.position.length>0:X&&X.isGeometry&&(Y=X.morphTargets&&X.morphTargets.length>0));var gt=z.isSkinnedMesh&&I.skinning,ft=0;Y&&(ft|=v),gt&&(ft|=p),k=J[ft]}if(e.localClippingEnabled&&I.clipShadows===!0&&I.clippingPlanes.length!==0){var st=k.uuid,pt=I.uuid,W=_[st];W===void 0&&(W={},_[st]=W);var Ft=W[pt];Ft===void 0&&(Ft=k.clone(),W[pt]=Ft),k=Ft}k.visible=I.visible,k.wireframe=I.wireframe;var vt=I.side;return R.renderSingleSided&&vt==Ws&&(vt=Va),R.renderReverseSided&&(vt===Va?vt=fr:vt===fr&&(vt=Va)),k.side=vt,k.clipShadows=I.clipShadows,k.clippingPlanes=I.clippingPlanes,k.wireframeLinewidth=I.wireframeLinewidth,k.linewidth=I.linewidth,B&&k.uniforms.lightPos!==void 0&&k.uniforms.lightPos.value.copy(Z),k}function V(z,I,B){if(z.visible!==!1){var Z=(z.layers.mask&I.layers.mask)!==0;if(Z&&(z.isMesh||z.isLine||z.isPoints)&&z.castShadow&&(z.frustumCulled===!1||s.intersectsObject(z)===!0)){var X=z.material;X.visible===!0&&(z.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,z.matrixWorld),d.push(z))}for(var k=z.children,J=0,it=k.length;J<it;J++)V(k[J],I,B)}}}function vr(e,t){this.origin=e!==void 0?e:new U,this.direction=t!==void 0?t:new U}vr.prototype={constructor:vr,set:function(e,t){return this.origin.copy(e),this.direction.copy(t),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this},at:function(e,t){var n=t||new U;return n.copy(this.direction).multiplyScalar(e).add(this.origin)},lookAt:function(e){return this.direction.copy(e).sub(this.origin).normalize(),this},recast:function(){var e=new U;return function(n){return this.origin.copy(this.at(n,e)),this}}(),closestPointToPoint:function(e,t){var n=t||new U;n.subVectors(e,this.origin);var i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)},distanceToPoint:function(e){return Math.sqrt(this.distanceSqToPoint(e))},distanceSqToPoint:function(){var e=new U;return function(n){var i=e.subVectors(n,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(n):(e.copy(this.direction).multiplyScalar(i).add(this.origin),e.distanceToSquared(n))}}(),distanceSqToSegment:function(){var e=new U,t=new U,n=new U;return function(r,a,s,o){e.copy(r).add(a).multiplyScalar(.5),t.copy(a).sub(r).normalize(),n.copy(this.origin).sub(e);var l=r.distanceTo(a)*.5,c=-this.direction.dot(t),u=n.dot(this.direction),h=-n.dot(t),f=n.lengthSq(),d=Math.abs(1-c*c),v,p,m,g;if(d>0)if(v=c*h-u,p=c*u-h,g=l*d,v>=0)if(p>=-g)if(p<=g){var y=1/d;v*=y,p*=y,m=v*(v+c*p+2*u)+p*(c*v+p+2*h)+f}else p=l,v=Math.max(0,-(c*p+u)),m=-v*v+p*(p+2*h)+f;else p=-l,v=Math.max(0,-(c*p+u)),m=-v*v+p*(p+2*h)+f;else p<=-g?(v=Math.max(0,-(-c*l+u)),p=v>0?-l:Math.min(Math.max(-l,-h),l),m=-v*v+p*(p+2*h)+f):p<=g?(v=0,p=Math.min(Math.max(-l,-h),l),m=p*(p+2*h)+f):(v=Math.max(0,-(c*l+u)),p=v>0?l:Math.min(Math.max(-l,-h),l),m=-v*v+p*(p+2*h)+f);else p=c>0?-l:l,v=Math.max(0,-(c*p+u)),m=-v*v+p*(p+2*h)+f;return s&&s.copy(this.direction).multiplyScalar(v).add(this.origin),o&&o.copy(t).multiplyScalar(p).add(e),m}}(),intersectSphere:function(){var e=new U;return function(n,i){e.subVectors(n.center,this.origin);var r=e.dot(this.direction),a=e.dot(e)-r*r,s=n.radius*n.radius;if(a>s)return null;var o=Math.sqrt(s-a),l=r-o,c=r+o;return l<0&&c<0?null:l<0?this.at(c,i):this.at(l,i)}}(),intersectsSphere:function(e){return this.distanceToPoint(e.center)<=e.radius},distanceToPlane:function(e){var t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;var n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null},intersectPlane:function(e,t){var n=this.distanceToPlane(e);return n===null?null:this.at(n,t)},intersectsPlane:function(e){var t=e.distanceToPoint(this.origin);if(t===0)return!0;var n=e.normal.dot(this.direction);return n*t<0},intersectBox:function(e,t){var n,i,r,a,s,o,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),c>=0?(r=(e.min.y-h.y)*c,a=(e.max.y-h.y)*c):(r=(e.max.y-h.y)*c,a=(e.min.y-h.y)*c),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),u>=0?(s=(e.min.z-h.z)*u,o=(e.max.z-h.z)*u):(s=(e.max.z-h.z)*u,o=(e.min.z-h.z)*u),n>o||s>i)||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),i<0)?null:this.at(n>=0?n:i,t)},intersectsBox:function(){var e=new U;return function(n){return this.intersectBox(n,e)!==null}}(),intersectTriangle:function(){var e=new U,t=new U,n=new U,i=new U;return function(a,s,o,l,c){t.subVectors(s,a),n.subVectors(o,a),i.crossVectors(t,n);var u=this.direction.dot(i),h;if(u>0){if(l)return null;h=1}else if(u<0)h=-1,u=-u;else return null;e.subVectors(this.origin,a);var f=h*this.direction.dot(n.crossVectors(e,n));if(f<0)return null;var d=h*this.direction.dot(t.cross(e));if(d<0||f+d>u)return null;var v=-h*e.dot(i);return v<0?null:this.at(v/u,c)}}(),applyMatrix4:function(e){return this.direction.add(this.origin).applyMatrix4(e),this.origin.applyMatrix4(e),this.direction.sub(this.origin),this.direction.normalize(),this},equals:function(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}};function gr(e,t,n,i){this._x=e||0,this._y=t||0,this._z=n||0,this._order=i||gr.DefaultOrder}gr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];gr.DefaultOrder="XYZ";gr.prototype={constructor:gr,isEuler:!0,get x(){return this._x},set x(e){this._x=e,this.onChangeCallback()},get y(){return this._y},set y(e){this._y=e,this.onChangeCallback()},get z(){return this._z},set z(e){this._z=e,this.onChangeCallback()},get order(){return this._order},set order(e){this._order=e,this.onChangeCallback()},set:function(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this.onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this.onChangeCallback(),this},setFromRotationMatrix:function(e,t,n){var i=Kt.clamp,r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];return t=t||this._order,t==="XYZ"?(this._y=Math.asin(i(o,-1,1)),Math.abs(o)<.99999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0)):t==="YXZ"?(this._x=Math.asin(-i(u,-1,1)),Math.abs(u)<.99999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0)):t==="ZXY"?(this._x=Math.asin(i(f,-1,1)),Math.abs(f)<.99999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a))):t==="ZYX"?(this._y=Math.asin(-i(h,-1,1)),Math.abs(h)<.99999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c))):t==="YZX"?(this._z=Math.asin(i(l,-1,1)),Math.abs(l)<.99999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,d))):t==="XZY"?(this._z=Math.asin(-i(s,-1,1)),Math.abs(s)<.99999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,d),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+t),this._order=t,n!==!1&&this.onChangeCallback(),this},setFromQuaternion:function(){var e;return function(n,i,r){return e===void 0&&(e=new Yt),e.makeRotationFromQuaternion(n),this.setFromRotationMatrix(e,i,r)}}(),setFromVector3:function(e,t){return this.set(e.x,e.y,e.z,t||this._order)},reorder:function(){var e=new We;return function(n){return e.setFromEuler(this),this.setFromQuaternion(e,n)}}(),equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order},fromArray:function(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this.onChangeCallback(),this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e},toVector3:function(e){return e?e.set(this._x,this._y,this._z):new U(this._x,this._y,this._z)},onChange:function(e){return this.onChangeCallback=e,this},onChangeCallback:function(){}};function hl(){this.mask=1}hl.prototype={constructor:hl,set:function(e){this.mask=1<<e},enable:function(e){this.mask|=1<<e},toggle:function(e){this.mask^=1<<e},disable:function(e){this.mask&=~(1<<e)},test:function(e){return(this.mask&e.mask)!==0}};var TE=0;function Pt(){Object.defineProperty(this,"id",{value:TE++}),this.uuid=Kt.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DefaultUp.clone();var e=new U,t=new gr,n=new We,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t.onChange(r),n.onChange(a),Object.defineProperties(this,{position:{enumerable:!0,value:e},rotation:{enumerable:!0,value:t},quaternion:{enumerable:!0,value:n},scale:{enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new ii}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Pt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={},this.onBeforeRender=function(){},this.onAfterRender=function(){}}Pt.DefaultUp=new U(0,1,0);Pt.DefaultMatrixAutoUpdate=!0;Object.assign(Pt.prototype,ei.prototype,{isObject3D:!0,applyMatrix:function(e){this.matrix.multiplyMatrices(e,this.matrix),this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(e,t){this.quaternion.setFromAxisAngle(e,t)},setRotationFromEuler:function(e){this.quaternion.setFromEuler(e,!0)},setRotationFromMatrix:function(e){this.quaternion.setFromRotationMatrix(e)},setRotationFromQuaternion:function(e){this.quaternion.copy(e)},rotateOnAxis:function(){var e=new We;return function(n,i){return e.setFromAxisAngle(n,i),this.quaternion.multiply(e),this}}(),rotateX:function(){var e=new U(1,0,0);return function(n){return this.rotateOnAxis(e,n)}}(),rotateY:function(){var e=new U(0,1,0);return function(n){return this.rotateOnAxis(e,n)}}(),rotateZ:function(){var e=new U(0,0,1);return function(n){return this.rotateOnAxis(e,n)}}(),translateOnAxis:function(){var e=new U;return function(n,i){return e.copy(n).applyQuaternion(this.quaternion),this.position.add(e.multiplyScalar(i)),this}}(),translateX:function(){var e=new U(1,0,0);return function(n){return this.translateOnAxis(e,n)}}(),translateY:function(){var e=new U(0,1,0);return function(n){return this.translateOnAxis(e,n)}}(),translateZ:function(){var e=new U(0,0,1);return function(n){return this.translateOnAxis(e,n)}}(),localToWorld:function(e){return e.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var e=new Yt;return function(n){return n.applyMatrix4(e.getInverse(this.matrixWorld))}}(),lookAt:function(){var e=new Yt;return function(n){e.lookAt(n,this.position,this.up),this.quaternion.setFromRotationMatrix(e)}}(),add:function(e){if(arguments.length>1){for(var t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,e.dispatchEvent({type:"added"}),this.children.push(e)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)},remove:function(e){if(arguments.length>1)for(var t=0;t<arguments.length;t++)this.remove(arguments[t]);var n=this.children.indexOf(e);n!==-1&&(e.parent=null,e.dispatchEvent({type:"removed"}),this.children.splice(n,1))},getObjectById:function(e){return this.getObjectByProperty("id",e)},getObjectByName:function(e){return this.getObjectByProperty("name",e)},getObjectByProperty:function(e,t){if(this[e]===t)return this;for(var n=0,i=this.children.length;n<i;n++){var r=this.children[n],a=r.getObjectByProperty(e,t);if(a!==void 0)return a}},getWorldPosition:function(e){var t=e||new U;return this.updateMatrixWorld(!0),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var e=new U,t=new U;return function(i){var r=i||new We;return this.updateMatrixWorld(!0),this.matrixWorld.decompose(e,r,t),r}}(),getWorldRotation:function(){var e=new We;return function(n){var i=n||new gr;return this.getWorldQuaternion(e),i.setFromQuaternion(e,this.rotation.order,!1)}}(),getWorldScale:function(){var e=new U,t=new We;return function(i){var r=i||new U;return this.updateMatrixWorld(!0),this.matrixWorld.decompose(e,t,r),r}}(),getWorldDirection:function(){var e=new We;return function(n){var i=n||new U;return this.getWorldQuaternion(e),i.set(0,0,1).applyQuaternion(e)}}(),raycast:function(){},traverse:function(e){e(this);for(var t=this.children,n=0,i=t.length;n<i;n++)t[n].traverse(e)},traverseVisible:function(e){if(this.visible!==!1){e(this);for(var t=this.children,n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}},traverseAncestors:function(e){var t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(e){this.matrixAutoUpdate===!0&&this.updateMatrix(),(this.matrixWorldNeedsUpdate===!0||e===!0)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);for(var t=this.children,n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)},toJSON:function(e){var t=e===void 0||e==="",n={};t&&(e={geometries:{},materials:{},textures:{},images:{}},n.metadata={version:4.4,type:"Object",generator:"Object3D.toJSON"});var i={};if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),i.matrix=this.matrix.toArray(),this.geometry!==void 0&&(e.geometries[this.geometry.uuid]===void 0&&(e.geometries[this.geometry.uuid]=this.geometry.toJSON(e)),i.geometry=this.geometry.uuid),this.material!==void 0&&(e.materials[this.material.uuid]===void 0&&(e.materials[this.material.uuid]=this.material.toJSON(e)),i.material=this.material.uuid),this.children.length>0){i.children=[];for(var r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(e).object)}if(t){var a=c(e.geometries),s=c(e.materials),o=c(e.textures),l=c(e.images);a.length>0&&(n.geometries=a),s.length>0&&(n.materials=s),o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n.object=i,n;function c(u){var h=[];for(var f in u){var d=u[f];delete d.metadata,h.push(d)}return h}},clone:function(e){return new this.constructor().copy(this,e)},copy:function(e,t){if(t===void 0&&(t=!0),this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(var n=0;n<e.children.length;n++){var i=e.children[n];this.add(i.clone())}return this}});function Br(e,t){this.start=e!==void 0?e:new U,this.end=t!==void 0?t:new U}Br.prototype={constructor:Br,set:function(e,t){return this.start.copy(e),this.end.copy(t),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.start.copy(e.start),this.end.copy(e.end),this},getCenter:function(e){var t=e||new U;return t.addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(e){var t=e||new U;return t.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(e,t){var n=t||new U;return this.delta(n).multiplyScalar(e).add(this.start)},closestPointToPointParameter:function(){var e=new U,t=new U;return function(i,r){e.subVectors(i,this.start),t.subVectors(this.end,this.start);var a=t.dot(t),s=t.dot(e),o=s/a;return r&&(o=Kt.clamp(o,0,1)),o}}(),closestPointToPoint:function(e,t,n){var i=this.closestPointToPointParameter(e,t),r=n||new U;return this.delta(r).multiplyScalar(i).add(this.start)},applyMatrix4:function(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this},equals:function(e){return e.start.equals(this.start)&&e.end.equals(this.end)}};function $n(e,t,n){this.a=e!==void 0?e:new U,this.b=t!==void 0?t:new U,this.c=n!==void 0?n:new U}$n.normal=function(){var e=new U;return function(n,i,r,a){var s=a||new U;s.subVectors(r,i),e.subVectors(n,i),s.cross(e);var o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}}();$n.barycoordFromPoint=function(){var e=new U,t=new U,n=new U;return function(r,a,s,o,l){e.subVectors(o,a),t.subVectors(s,a),n.subVectors(r,a);var c=e.dot(e),u=e.dot(t),h=e.dot(n),f=t.dot(t),d=t.dot(n),v=c*f-u*u,p=l||new U;if(v===0)return p.set(-2,-1,-1);var m=1/v,g=(f*h-u*d)*m,y=(c*d-u*h)*m;return p.set(1-g-y,y,g)}}();$n.containsPoint=function(){var e=new U;return function(n,i,r,a){var s=$n.barycoordFromPoint(n,i,r,a,e);return s.x>=0&&s.y>=0&&s.x+s.y<=1}}();$n.prototype={constructor:$n,set:function(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this},setFromPointsAndIndices:function(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this},area:function(){var e=new U,t=new U;return function(){return e.subVectors(this.c,this.b),t.subVectors(this.a,this.b),e.cross(t).length()*.5}}(),midpoint:function(e){var t=e||new U;return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(e){return $n.normal(this.a,this.b,this.c,e)},plane:function(e){var t=e||new Pn;return t.setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(e,t){return $n.barycoordFromPoint(e,this.a,this.b,this.c,t)},containsPoint:function(e){return $n.containsPoint(e,this.a,this.b,this.c)},closestPointToPoint:function(){var e,t,n,i;return function(a,s){e===void 0&&(e=new Pn,t=[new Br,new Br,new Br],n=new U,i=new U);var o=s||new U,l=1/0;if(e.setFromCoplanarPoints(this.a,this.b,this.c),e.projectPoint(a,n),this.containsPoint(n)===!0)o.copy(n);else{t[0].set(this.a,this.b),t[1].set(this.b,this.c),t[2].set(this.c,this.a);for(var c=0;c<t.length;c++){t[c].closestPointToPoint(n,!0,i);var u=n.distanceToSquared(i);u<l&&(l=u,o.copy(i))}}return o}}(),equals:function(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};function zn(e,t,n,i,r,a){this.a=e,this.b=t,this.c=n,this.normal=i&&i.isVector3?i:new U,this.vertexNormals=Array.isArray(i)?i:[],this.color=r&&r.isColor?r:new Vt,this.vertexColors=Array.isArray(r)?r:[],this.materialIndex=a!==void 0?a:0}zn.prototype={constructor:zn,clone:function(){return new this.constructor().copy(this)},copy:function(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(var t=0,n=e.vertexNormals.length;t<n;t++)this.vertexNormals[t]=e.vertexNormals[t].clone();for(var t=0,n=e.vertexColors.length;t<n;t++)this.vertexColors[t]=e.vertexColors[t].clone();return this}};function En(e){ae.call(this),this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.lights=!1,this.setValues(e)}En.prototype=Object.create(ae.prototype);En.prototype.constructor=En;En.prototype.isMeshBasicMaterial=!0;En.prototype.copy=function(e){return ae.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this};function St(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.uuid=Kt.generateUUID(),this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.dynamic=!1,this.updateRange={offset:0,count:-1},this.onUploadCallback=function(){},this.version=0}St.prototype={constructor:St,isBufferAttribute:!0,set needsUpdate(e){e===!0&&this.version++},setArray:function(e){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=e!==void 0?e.length/this.itemSize:0,this.array=e},setDynamic:function(e){return this.dynamic=e,this},copy:function(e){return this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.dynamic=e.dynamic,this},copyAt:function(e,t,n){e*=this.itemSize,n*=t.itemSize;for(var i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this},copyArray:function(e){return this.array.set(e),this},copyColorsArray:function(e){for(var t=this.array,n=0,i=0,r=e.length;i<r;i++){var a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new Vt),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this},copyIndicesArray:function(e){for(var t=this.array,n=0,i=0,r=e.length;i<r;i++){var a=e[i];t[n++]=a.a,t[n++]=a.b,t[n++]=a.c}return this},copyVector2sArray:function(e){for(var t=this.array,n=0,i=0,r=e.length;i<r;i++){var a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new Ct),t[n++]=a.x,t[n++]=a.y}return this},copyVector3sArray:function(e){for(var t=this.array,n=0,i=0,r=e.length;i<r;i++){var a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new U),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this},copyVector4sArray:function(e){for(var t=this.array,n=0,i=0,r=e.length;i<r;i++){var a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new xe),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},getX:function(e){return this.array[e*this.itemSize]},setX:function(e,t){return this.array[e*this.itemSize]=t,this},getY:function(e){return this.array[e*this.itemSize+1]},setY:function(e,t){return this.array[e*this.itemSize+1]=t,this},getZ:function(e){return this.array[e*this.itemSize+2]},setZ:function(e,t){return this.array[e*this.itemSize+2]=t,this},getW:function(e){return this.array[e*this.itemSize+3]},setW:function(e,t){return this.array[e*this.itemSize+3]=t,this},setXY:function(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this},onUpload:function(e){return this.onUploadCallback=e,this},clone:function(){return new this.constructor().copy(this)}};function Eo(e,t){St.call(this,new Int8Array(e),t)}Eo.prototype=Object.create(St.prototype);Eo.prototype.constructor=Eo;function To(e,t){St.call(this,new Uint8Array(e),t)}To.prototype=Object.create(St.prototype);To.prototype.constructor=To;function Ao(e,t){St.call(this,new Uint8ClampedArray(e),t)}Ao.prototype=Object.create(St.prototype);Ao.prototype.constructor=Ao;function Co(e,t){St.call(this,new Int16Array(e),t)}Co.prototype=Object.create(St.prototype);Co.prototype.constructor=Co;function Hi(e,t){St.call(this,new Uint16Array(e),t)}Hi.prototype=Object.create(St.prototype);Hi.prototype.constructor=Hi;function Lo(e,t){St.call(this,new Int32Array(e),t)}Lo.prototype=Object.create(St.prototype);Lo.prototype.constructor=Lo;function Wi(e,t){St.call(this,new Uint32Array(e),t)}Wi.prototype=Object.create(St.prototype);Wi.prototype.constructor=Wi;function oe(e,t){St.call(this,new Float32Array(e),t)}oe.prototype=Object.create(St.prototype);oe.prototype.constructor=oe;function Do(e,t){St.call(this,new Float64Array(e),t)}Do.prototype=Object.create(St.prototype);Do.prototype.constructor=Do;function fg(){this.indices=[],this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}Object.assign(fg.prototype,{computeGroups:function(e){for(var t,n=[],i=void 0,r=e.faces,a=0;a<r.length;a++){var s=r[a];s.materialIndex!==i&&(i=s.materialIndex,t!==void 0&&(t.count=a*3-t.start,n.push(t)),t={start:a*3,materialIndex:i})}t!==void 0&&(t.count=a*3-t.start,n.push(t)),this.groups=n},fromGeometry:function(e){var t=e.faces,n=e.vertices,i=e.faceVertexUvs,r=i[0]&&i[0].length>0,a=i[1]&&i[1].length>0,s=e.morphTargets,o=s.length,l;if(o>0){l=[];for(var c=0;c<o;c++)l[c]=[];this.morphTargets.position=l}var u=e.morphNormals,h=u.length,f;if(h>0){f=[];for(var c=0;c<h;c++)f[c]=[];this.morphTargets.normal=f}for(var d=e.skinIndices,v=e.skinWeights,p=d.length===n.length,m=v.length===n.length,c=0;c<t.length;c++){var g=t[c];this.vertices.push(n[g.a],n[g.b],n[g.c]);var y=g.vertexNormals;if(y.length===3)this.normals.push(y[0],y[1],y[2]);else{var _=g.normal;this.normals.push(_,_,_)}var x=g.vertexColors;if(x.length===3)this.colors.push(x[0],x[1],x[2]);else{var M=g.color;this.colors.push(M,M,M)}if(r===!0){var S=i[0][c];S!==void 0?this.uvs.push(S[0],S[1],S[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",c),this.uvs.push(new Ct,new Ct,new Ct))}if(a===!0){var S=i[1][c];S!==void 0?this.uvs2.push(S[0],S[1],S[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",c),this.uvs2.push(new Ct,new Ct,new Ct))}for(var E=0;E<o;E++){var b=s[E].vertices;l[E].push(b[g.a],b[g.b],b[g.c])}for(var E=0;E<h;E++){var w=u[E].vertexNormals[c];f[E].push(w.a,w.b,w.c)}p&&this.skinIndices.push(d[g.a],d[g.b],d[g.c]),m&&this.skinWeights.push(v[g.a],v[g.b],v[g.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,this}});function Zt(){Object.defineProperty(this,"id",{value:Df()}),this.uuid=Kt.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}Object.assign(Zt.prototype,ei.prototype,{isGeometry:!0,applyMatrix:function(e){for(var t=new ii().getNormalMatrix(e),n=0,i=this.vertices.length;n<i;n++){var r=this.vertices[n];r.applyMatrix4(e)}for(var n=0,i=this.faces.length;n<i;n++){var a=this.faces[n];a.normal.applyMatrix3(t).normalize();for(var s=0,o=a.vertexNormals.length;s<o;s++)a.vertexNormals[s].applyMatrix3(t).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(){var e;return function(n){return e===void 0&&(e=new Yt),e.makeRotationX(n),this.applyMatrix(e),this}}(),rotateY:function(){var e;return function(n){return e===void 0&&(e=new Yt),e.makeRotationY(n),this.applyMatrix(e),this}}(),rotateZ:function(){var e;return function(n){return e===void 0&&(e=new Yt),e.makeRotationZ(n),this.applyMatrix(e),this}}(),translate:function(){var e;return function(n,i,r){return e===void 0&&(e=new Yt),e.makeTranslation(n,i,r),this.applyMatrix(e),this}}(),scale:function(){var e;return function(n,i,r){return e===void 0&&(e=new Yt),e.makeScale(n,i,r),this.applyMatrix(e),this}}(),lookAt:function(){var e;return function(n){e===void 0&&(e=new Pt),e.lookAt(n),e.updateMatrix(),this.applyMatrix(e.matrix)}}(),fromBufferGeometry:function(e){var t=this,n=e.index!==null?e.index.array:void 0,i=e.attributes,r=i.position.array,a=i.normal!==void 0?i.normal.array:void 0,s=i.color!==void 0?i.color.array:void 0,o=i.uv!==void 0?i.uv.array:void 0,l=i.uv2!==void 0?i.uv2.array:void 0;l!==void 0&&(this.faceVertexUvs[1]=[]);for(var c=[],u=[],h=[],f=0,d=0;f<r.length;f+=3,d+=2)t.vertices.push(new U(r[f],r[f+1],r[f+2])),a!==void 0&&c.push(new U(a[f],a[f+1],a[f+2])),s!==void 0&&t.colors.push(new Vt(s[f],s[f+1],s[f+2])),o!==void 0&&u.push(new Ct(o[d],o[d+1])),l!==void 0&&h.push(new Ct(l[d],l[d+1]));function v(x,M,S,E){var b=a!==void 0?[c[x].clone(),c[M].clone(),c[S].clone()]:[],w=s!==void 0?[t.colors[x].clone(),t.colors[M].clone(),t.colors[S].clone()]:[],L=new zn(x,M,S,b,w,E);t.faces.push(L),o!==void 0&&t.faceVertexUvs[0].push([u[x].clone(),u[M].clone(),u[S].clone()]),l!==void 0&&t.faceVertexUvs[1].push([h[x].clone(),h[M].clone(),h[S].clone()])}if(n!==void 0){var p=e.groups;if(p.length>0)for(var f=0;f<p.length;f++)for(var m=p[f],g=m.start,y=m.count,d=g,_=g+y;d<_;d+=3)v(n[d],n[d+1],n[d+2],m.materialIndex);else for(var f=0;f<n.length;f+=3)v(n[f],n[f+1],n[f+2])}else for(var f=0;f<r.length/3;f+=3)v(f,f+1,f+2);return this.computeFaceNormals(),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this},center:function(){this.computeBoundingBox();var e=this.boundingBox.getCenter().negate();return this.translate(e.x,e.y,e.z),e},normalize:function(){this.computeBoundingSphere();var e=this.boundingSphere.center,t=this.boundingSphere.radius,n=t===0?1:1/t,i=new Yt;return i.set(n,0,0,-n*e.x,0,n,0,-n*e.y,0,0,n,-n*e.z,0,0,0,1),this.applyMatrix(i),this},computeFaceNormals:function(){for(var e=new U,t=new U,n=0,i=this.faces.length;n<i;n++){var r=this.faces[n],a=this.vertices[r.a],s=this.vertices[r.b],o=this.vertices[r.c];e.subVectors(o,s),t.subVectors(a,s),e.cross(t),e.normalize(),r.normal.copy(e)}},computeVertexNormals:function(e){e===void 0&&(e=!0);var t,n,i,r,a,s;for(s=new Array(this.vertices.length),t=0,n=this.vertices.length;t<n;t++)s[t]=new U;if(e){var o,l,c,u=new U,h=new U;for(i=0,r=this.faces.length;i<r;i++)a=this.faces[i],o=this.vertices[a.a],l=this.vertices[a.b],c=this.vertices[a.c],u.subVectors(c,l),h.subVectors(o,l),u.cross(h),s[a.a].add(u),s[a.b].add(u),s[a.c].add(u)}else for(this.computeFaceNormals(),i=0,r=this.faces.length;i<r;i++)a=this.faces[i],s[a.a].add(a.normal),s[a.b].add(a.normal),s[a.c].add(a.normal);for(t=0,n=this.vertices.length;t<n;t++)s[t].normalize();for(i=0,r=this.faces.length;i<r;i++){a=this.faces[i];var f=a.vertexNormals;f.length===3?(f[0].copy(s[a.a]),f[1].copy(s[a.b]),f[2].copy(s[a.c])):(f[0]=s[a.a].clone(),f[1]=s[a.b].clone(),f[2]=s[a.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var e,t,n;for(this.computeFaceNormals(),e=0,t=this.faces.length;e<t;e++){n=this.faces[e];var i=n.vertexNormals;i.length===3?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var e,t,n,i,r;for(n=0,i=this.faces.length;n<i;n++)for(r=this.faces[n],r.__originalFaceNormal?r.__originalFaceNormal.copy(r.normal):r.__originalFaceNormal=r.normal.clone(),r.__originalVertexNormals||(r.__originalVertexNormals=[]),e=0,t=r.vertexNormals.length;e<t;e++)r.__originalVertexNormals[e]?r.__originalVertexNormals[e].copy(r.vertexNormals[e]):r.__originalVertexNormals[e]=r.vertexNormals[e].clone();var a=new Zt;for(a.faces=this.faces,e=0,t=this.morphTargets.length;e<t;e++){if(!this.morphNormals[e]){this.morphNormals[e]={},this.morphNormals[e].faceNormals=[],this.morphNormals[e].vertexNormals=[];var s=this.morphNormals[e].faceNormals,o=this.morphNormals[e].vertexNormals,c,u;for(n=0,i=this.faces.length;n<i;n++)c=new U,u={a:new U,b:new U,c:new U},s.push(c),o.push(u)}var l=this.morphNormals[e];a.vertices=this.morphTargets[e].vertices,a.computeFaceNormals(),a.computeVertexNormals();var c,u;for(n=0,i=this.faces.length;n<i;n++)r=this.faces[n],c=l.faceNormals[n],u=l.vertexNormals[n],c.copy(r.normal),u.a.copy(r.vertexNormals[0]),u.b.copy(r.vertexNormals[1]),u.c.copy(r.vertexNormals[2])}for(n=0,i=this.faces.length;n<i;n++)r=this.faces[n],r.normal=r.__originalFaceNormal,r.vertexNormals=r.__originalVertexNormals},computeLineDistances:function(){for(var e=0,t=this.vertices,n=0,i=t.length;n<i;n++)n>0&&(e+=t[n].distanceTo(t[n-1])),this.lineDistances[n]=e},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Ei),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new on),this.boundingSphere.setFromPoints(this.vertices)},merge:function(e,t,n){if((e&&e.isGeometry)===!1){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",e);return}var i,r=this.vertices.length,a=this.vertices,s=e.vertices,o=this.faces,l=e.faces,c=this.faceVertexUvs[0],u=e.faceVertexUvs[0],h=this.colors,f=e.colors;n===void 0&&(n=0),t!==void 0&&(i=new ii().getNormalMatrix(t));for(var d=0,v=s.length;d<v;d++){var p=s[d],m=p.clone();t!==void 0&&m.applyMatrix4(t),a.push(m)}for(var d=0,v=f.length;d<v;d++)h.push(f[d].clone());for(d=0,v=l.length;d<v;d++){var g=l[d],y,_,x,M=g.vertexNormals,S=g.vertexColors;y=new zn(g.a+r,g.b+r,g.c+r),y.normal.copy(g.normal),i!==void 0&&y.normal.applyMatrix3(i).normalize();for(var E=0,b=M.length;E<b;E++)_=M[E].clone(),i!==void 0&&_.applyMatrix3(i).normalize(),y.vertexNormals.push(_);y.color.copy(g.color);for(var E=0,b=S.length;E<b;E++)x=S[E],y.vertexColors.push(x.clone());y.materialIndex=g.materialIndex+n,o.push(y)}for(d=0,v=u.length;d<v;d++){var w=u[d],L=[];if(w!==void 0){for(var E=0,b=w.length;E<b;E++)L.push(w[E].clone());c.push(L)}}},mergeMesh:function(e){if((e&&e.isMesh)===!1){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",e);return}e.matrixAutoUpdate&&e.updateMatrix(),this.merge(e.geometry,e.matrix)},mergeVertices:function(){var e={},t=[],n=[],i,r,a=4,s=Math.pow(10,a),o,l,c,u,h,f;for(o=0,l=this.vertices.length;o<l;o++)i=this.vertices[o],r=Math.round(i.x*s)+"_"+Math.round(i.y*s)+"_"+Math.round(i.z*s),e[r]===void 0?(e[r]=o,t.push(this.vertices[o]),n[o]=t.length-1):n[o]=n[e[r]];var d=[];for(o=0,l=this.faces.length;o<l;o++){c=this.faces[o],c.a=n[c.a],c.b=n[c.b],c.c=n[c.c],u=[c.a,c.b,c.c];for(var v=0;v<3;v++)if(u[v]===u[(v+1)%3]){d.push(o);break}}for(o=d.length-1;o>=0;o--){var p=d[o];for(this.faces.splice(p,1),h=0,f=this.faceVertexUvs.length;h<f;h++)this.faceVertexUvs[h].splice(p,1)}var m=this.vertices.length-t.length;return this.vertices=t,m},sortFacesByMaterialIndex:function(){for(var e=this.faces,t=e.length,n=0;n<t;n++)e[n]._id=n;function i(c,u){return c.materialIndex-u.materialIndex}e.sort(i);var r=this.faceVertexUvs[0],a=this.faceVertexUvs[1],s,o;r&&r.length===t&&(s=[]),a&&a.length===t&&(o=[]);for(var n=0;n<t;n++){var l=e[n]._id;s&&s.push(r[l]),o&&o.push(a[l])}s&&(this.faceVertexUvs[0]=s),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){var e={metadata:{version:4.4,type:"Geometry",generator:"Geometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.parameters!==void 0){var t=this.parameters;for(var n in t)t[n]!==void 0&&(e[n]=t[n]);return e}for(var i=[],r=0;r<this.vertices.length;r++){var a=this.vertices[r];i.push(a.x,a.y,a.z)}for(var s=[],o=[],l={},c=[],u={},h=[],f={},r=0;r<this.faces.length;r++){var d=this.faces[r],v=!0,p=!1,m=this.faceVertexUvs[0][r]!==void 0,g=d.normal.length()>0,y=d.vertexNormals.length>0,_=d.color.r!==1||d.color.g!==1||d.color.b!==1,x=d.vertexColors.length>0,M=0;if(M=w(M,0,0),M=w(M,1,v),M=w(M,2,p),M=w(M,3,m),M=w(M,4,g),M=w(M,5,y),M=w(M,6,_),M=w(M,7,x),s.push(M),s.push(d.a,d.b,d.c),s.push(d.materialIndex),m){var S=this.faceVertexUvs[0][r];s.push(H(S[0]),H(S[1]),H(S[2]))}if(g&&s.push(L(d.normal)),y){var E=d.vertexNormals;s.push(L(E[0]),L(E[1]),L(E[2]))}if(_&&s.push(G(d.color)),x){var b=d.vertexColors;s.push(G(b[0]),G(b[1]),G(b[2]))}}function w(C,T,R){return R?C|1<<T:C&~(1<<T)}function L(C){var T=C.x.toString()+C.y.toString()+C.z.toString();return l[T]!==void 0||(l[T]=o.length/3,o.push(C.x,C.y,C.z)),l[T]}function G(C){var T=C.r.toString()+C.g.toString()+C.b.toString();return u[T]!==void 0||(u[T]=c.length,c.push(C.getHex())),u[T]}function H(C){var T=C.x.toString()+C.y.toString();return f[T]!==void 0||(f[T]=h.length/2,h.push(C.x,C.y)),f[T]}return e.data={},e.data.vertices=i,e.data.normals=o,c.length>0&&(e.data.colors=c),h.length>0&&(e.data.uvs=[h]),e.data.faces=s,e},clone:function(){return new Zt().copy(this)},copy:function(e){this.vertices=[],this.faces=[],this.faceVertexUvs=[[]],this.colors=[];for(var t=e.vertices,n=0,i=t.length;n<i;n++)this.vertices.push(t[n].clone());for(var r=e.colors,n=0,i=r.length;n<i;n++)this.colors.push(r[n].clone());for(var a=e.faces,n=0,i=a.length;n<i;n++)this.faces.push(a[n].clone());for(var n=0,i=e.faceVertexUvs.length;n<i;n++){var s=e.faceVertexUvs[n];this.faceVertexUvs[n]===void 0&&(this.faceVertexUvs[n]=[]);for(var o=0,l=s.length;o<l;o++){for(var c=s[o],u=[],h=0,f=c.length;h<f;h++){var d=c[h];u.push(d.clone())}this.faceVertexUvs[n].push(u)}}return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var AE=0;function Df(){return AE++}function Gt(){Object.defineProperty(this,"id",{value:Df()}),this.uuid=Kt.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0}}Object.assign(Gt.prototype,ei.prototype,{isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(e){this.index=e},addAttribute:function(e,t){if((t&&t.isBufferAttribute)===!1&&(t&&t.isInterleavedBufferAttribute)===!1){console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.addAttribute(e,new St(arguments[1],arguments[2]));return}if(e==="index"){console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t);return}return this.attributes[e]=t,this},getAttribute:function(e){return this.attributes[e]},removeAttribute:function(e){return delete this.attributes[e],this},addGroup:function(e,t,n){this.groups.push({start:e,count:t,materialIndex:n!==void 0?n:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(e,t){this.drawRange.start=e,this.drawRange.count=t},applyMatrix:function(e){var t=this.attributes.position;t!==void 0&&(e.applyToVector3Array(t.array),t.needsUpdate=!0);var n=this.attributes.normal;if(n!==void 0){var i=new ii().getNormalMatrix(e);i.applyToVector3Array(n.array),n.needsUpdate=!0}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(){var e;return function(n){return e===void 0&&(e=new Yt),e.makeRotationX(n),this.applyMatrix(e),this}}(),rotateY:function(){var e;return function(n){return e===void 0&&(e=new Yt),e.makeRotationY(n),this.applyMatrix(e),this}}(),rotateZ:function(){var e;return function(n){return e===void 0&&(e=new Yt),e.makeRotationZ(n),this.applyMatrix(e),this}}(),translate:function(){var e;return function(n,i,r){return e===void 0&&(e=new Yt),e.makeTranslation(n,i,r),this.applyMatrix(e),this}}(),scale:function(){var e;return function(n,i,r){return e===void 0&&(e=new Yt),e.makeScale(n,i,r),this.applyMatrix(e),this}}(),lookAt:function(){var e;return function(n){e===void 0&&(e=new Pt),e.lookAt(n),e.updateMatrix(),this.applyMatrix(e.matrix)}}(),center:function(){this.computeBoundingBox();var e=this.boundingBox.getCenter().negate();return this.translate(e.x,e.y,e.z),e},setFromObject:function(e){var t=e.geometry;if(e.isPoints||e.isLine){var n=new oe(t.vertices.length*3,3),i=new oe(t.colors.length*3,3);if(this.addAttribute("position",n.copyVector3sArray(t.vertices)),this.addAttribute("color",i.copyColorsArray(t.colors)),t.lineDistances&&t.lineDistances.length===t.vertices.length){var r=new oe(t.lineDistances.length,1);this.addAttribute("lineDistance",r.copyArray(t.lineDistances))}t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone())}else e.isMesh&&t&&t.isGeometry&&this.fromGeometry(t);return this},updateFromObject:function(e){var t=e.geometry;if(e.isMesh){var n=t.__directGeometry;if(t.elementsNeedUpdate===!0&&(n=void 0,t.elementsNeedUpdate=!1),n===void 0)return this.fromGeometry(t);n.verticesNeedUpdate=t.verticesNeedUpdate,n.normalsNeedUpdate=t.normalsNeedUpdate,n.colorsNeedUpdate=t.colorsNeedUpdate,n.uvsNeedUpdate=t.uvsNeedUpdate,n.groupsNeedUpdate=t.groupsNeedUpdate,t.verticesNeedUpdate=!1,t.normalsNeedUpdate=!1,t.colorsNeedUpdate=!1,t.uvsNeedUpdate=!1,t.groupsNeedUpdate=!1,t=n}var i;return t.verticesNeedUpdate===!0&&(i=this.attributes.position,i!==void 0&&(i.copyVector3sArray(t.vertices),i.needsUpdate=!0),t.verticesNeedUpdate=!1),t.normalsNeedUpdate===!0&&(i=this.attributes.normal,i!==void 0&&(i.copyVector3sArray(t.normals),i.needsUpdate=!0),t.normalsNeedUpdate=!1),t.colorsNeedUpdate===!0&&(i=this.attributes.color,i!==void 0&&(i.copyColorsArray(t.colors),i.needsUpdate=!0),t.colorsNeedUpdate=!1),t.uvsNeedUpdate&&(i=this.attributes.uv,i!==void 0&&(i.copyVector2sArray(t.uvs),i.needsUpdate=!0),t.uvsNeedUpdate=!1),t.lineDistancesNeedUpdate&&(i=this.attributes.lineDistance,i!==void 0&&(i.copyArray(t.lineDistances),i.needsUpdate=!0),t.lineDistancesNeedUpdate=!1),t.groupsNeedUpdate&&(t.computeGroups(e.geometry),this.groups=t.groups,t.groupsNeedUpdate=!1),this},fromGeometry:function(e){return e.__directGeometry=new fg().fromGeometry(e),this.fromDirectGeometry(e.__directGeometry)},fromDirectGeometry:function(e){var t=new Float32Array(e.vertices.length*3);if(this.addAttribute("position",new St(t,3).copyVector3sArray(e.vertices)),e.normals.length>0){var n=new Float32Array(e.normals.length*3);this.addAttribute("normal",new St(n,3).copyVector3sArray(e.normals))}if(e.colors.length>0){var i=new Float32Array(e.colors.length*3);this.addAttribute("color",new St(i,3).copyColorsArray(e.colors))}if(e.uvs.length>0){var r=new Float32Array(e.uvs.length*2);this.addAttribute("uv",new St(r,2).copyVector2sArray(e.uvs))}if(e.uvs2.length>0){var a=new Float32Array(e.uvs2.length*2);this.addAttribute("uv2",new St(a,2).copyVector2sArray(e.uvs2))}if(e.indices.length>0){var s=e.vertices.length>65535?Uint32Array:Uint16Array,o=new s(e.indices.length*3);this.setIndex(new St(o,1).copyIndicesArray(e.indices))}this.groups=e.groups;for(var l in e.morphTargets){for(var c=[],u=e.morphTargets[l],h=0,f=u.length;h<f;h++){var d=u[h],v=new oe(d.length*3,3);c.push(v.copyVector3sArray(d))}this.morphAttributes[l]=c}if(e.skinIndices.length>0){var p=new oe(e.skinIndices.length*4,4);this.addAttribute("skinIndex",p.copyVector4sArray(e.skinIndices))}if(e.skinWeights.length>0){var m=new oe(e.skinWeights.length*4,4);this.addAttribute("skinWeight",m.copyVector4sArray(e.skinWeights))}return e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Ei);var e=this.attributes.position;e!==void 0?this.boundingBox.setFromBufferAttribute(e):this.boundingBox.makeEmpty(),(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){var e=new Ei,t=new U;return function(){this.boundingSphere===null&&(this.boundingSphere=new on);var i=this.attributes.position;if(i){var r=this.boundingSphere.center;e.setFromBufferAttribute(i),e.getCenter(r);for(var a=0,s=0,o=i.count;s<o;s++)t.x=i.getX(s),t.y=i.getY(s),t.z=i.getZ(s),a=Math.max(a,r.distanceToSquared(t));this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var e=this.index,t=this.attributes,n=this.groups;if(t.position){var i=t.position.array;if(t.normal===void 0)this.addAttribute("normal",new St(new Float32Array(i.length),3));else for(var r=t.normal.array,a=0,s=r.length;a<s;a++)r[a]=0;var o=t.normal.array,l,c,u,h=new U,f=new U,d=new U,v=new U,p=new U;if(e){var m=e.array;n.length===0&&this.addGroup(0,m.length);for(var g=0,y=n.length;g<y;++g)for(var _=n[g],x=_.start,M=_.count,a=x,s=x+M;a<s;a+=3)l=m[a+0]*3,c=m[a+1]*3,u=m[a+2]*3,h.fromArray(i,l),f.fromArray(i,c),d.fromArray(i,u),v.subVectors(d,f),p.subVectors(h,f),v.cross(p),o[l]+=v.x,o[l+1]+=v.y,o[l+2]+=v.z,o[c]+=v.x,o[c+1]+=v.y,o[c+2]+=v.z,o[u]+=v.x,o[u+1]+=v.y,o[u+2]+=v.z}else for(var a=0,s=i.length;a<s;a+=9)h.fromArray(i,a),f.fromArray(i,a+3),d.fromArray(i,a+6),v.subVectors(d,f),p.subVectors(h,f),v.cross(p),o[a]=v.x,o[a+1]=v.y,o[a+2]=v.z,o[a+3]=v.x,o[a+4]=v.y,o[a+5]=v.z,o[a+6]=v.x,o[a+7]=v.y,o[a+8]=v.z;this.normalizeNormals(),t.normal.needsUpdate=!0}},merge:function(e,t){if((e&&e.isBufferGeometry)===!1){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0);var n=this.attributes;for(var i in n)if(e.attributes[i]!==void 0)for(var r=n[i],a=r.array,s=e.attributes[i],o=s.array,l=s.itemSize,c=0,u=l*t;c<o.length;c++,u++)a[u]=o[c];return this},normalizeNormals:function(){for(var e=this.attributes.normal.array,t,n,i,r,a=0,s=e.length;a<s;a+=3)t=e[a],n=e[a+1],i=e[a+2],r=1/Math.sqrt(t*t+n*n+i*i),e[a]*=r,e[a+1]*=r,e[a+2]*=r},toNonIndexed:function(){if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var e=new Gt,t=this.index.array,n=this.attributes;for(var i in n){for(var r=n[i],a=r.array,s=r.itemSize,o=new a.constructor(t.length*s),l=0,c=0,u=0,h=t.length;u<h;u++){l=t[u]*s;for(var f=0;f<s;f++)o[c++]=a[l++]}e.addAttribute(i,new St(o,s))}return e},toJSON:function(){var e={metadata:{version:4.4,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.parameters!==void 0){var t=this.parameters;for(var n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};var i=this.index;if(i!==null){var r=Array.prototype.slice.call(i.array);e.data.index={type:i.array.constructor.name,array:r}}var a=this.attributes;for(var n in a){var s=a[n],r=Array.prototype.slice.call(s.array);e.data.attributes[n]={itemSize:s.itemSize,type:s.array.constructor.name,array:r,normalized:s.normalized}}var o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));var l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e},clone:function(){return new Gt().copy(this)},copy:function(e){var t=e.index;t!==null&&this.setIndex(t.clone());var n=e.attributes;for(var i in n){var r=n[i];this.addAttribute(i,r.clone())}for(var a=e.groups,s=0,o=a.length;s<o;s++){var l=a[s];this.addGroup(l.start,l.count,l.materialIndex)}return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Gt.MaxIndex=65535;function Ze(e,t){Pt.call(this),this.type="Mesh",this.geometry=e!==void 0?e:new Gt,this.material=t!==void 0?t:new En({color:Math.random()*16777215}),this.drawMode=Cf,this.updateMorphTargets()}Ze.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Ze,isMesh:!0,setDrawMode:function(e){this.drawMode=e},copy:function(e){return Pt.prototype.copy.call(this,e),this.drawMode=e.drawMode,this},updateMorphTargets:function(){var e=this.geometry.morphTargets;if(e!==void 0&&e.length>0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(var t=0,n=e.length;t<n;t++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[e[t].name]=t}},raycast:function(){var e=new Yt,t=new vr,n=new on,i=new U,r=new U,a=new U,s=new U,o=new U,l=new U,c=new Ct,u=new Ct,h=new Ct,f=new U,d=new U,v=new U;function p(y,_,x,M,S,E,b){return $n.barycoordFromPoint(y,_,x,M,f),S.multiplyScalar(f.x),E.multiplyScalar(f.y),b.multiplyScalar(f.z),S.add(E).add(b),S.clone()}function m(y,_,x,M,S,E,b){var w,L=y.material;if(L.side===fr?w=x.intersectTriangle(E,S,M,!0,b):w=x.intersectTriangle(M,S,E,L.side!==Ws,b),w===null)return null;v.copy(b),v.applyMatrix4(y.matrixWorld);var G=_.ray.origin.distanceTo(v);return G<_.near||G>_.far?null:{distance:G,point:v.clone(),object:y}}function g(y,_,x,M,S,E,b,w){i.fromArray(M,E*3),r.fromArray(M,b*3),a.fromArray(M,w*3);var L=m(y,_,x,i,r,a,d);return L&&(S&&(c.fromArray(S,E*2),u.fromArray(S,b*2),h.fromArray(S,w*2),L.uv=p(d,i,r,a,c,u,h)),L.face=new zn(E,b,w,$n.normal(i,r,a)),L.faceIndex=E),L}return function(_,x){var M=this.geometry,S=this.material,E=this.matrixWorld;if(S!==void 0&&(M.boundingSphere===null&&M.computeBoundingSphere(),n.copy(M.boundingSphere),n.applyMatrix4(E),_.ray.intersectsSphere(n)!==!1&&(e.getInverse(E),t.copy(_.ray).applyMatrix4(e),!(M.boundingBox!==null&&t.intersectsBox(M.boundingBox)===!1)))){var b,w;if(M.isBufferGeometry){var L,G,H,C=M.index,T=M.attributes,R=T.position.array;if(T.uv!==void 0&&(b=T.uv.array),C!==null)for(var N=C.array,V=0,z=N.length;V<z;V+=3)L=N[V],G=N[V+1],H=N[V+2],w=g(this,_,t,R,b,L,G,H),w&&(w.faceIndex=Math.floor(V/3),x.push(w));else for(var V=0,z=R.length;V<z;V+=9)L=V/3,G=L+1,H=L+2,w=g(this,_,t,R,b,L,G,H),w&&(w.index=L,x.push(w))}else if(M.isGeometry){var I,B,Z,X=S&&S.isMultiMaterial,k=X===!0?S.materials:null,J=M.vertices,it=M.faces,Y=M.faceVertexUvs[0];Y.length>0&&(b=Y);for(var gt=0,ft=it.length;gt<ft;gt++){var st=it[gt],pt=X===!0?k[st.materialIndex]:S;if(pt!==void 0){if(I=J[st.a],B=J[st.b],Z=J[st.c],pt.morphTargets===!0){var W=M.morphTargets,Ft=this.morphTargetInfluences;i.set(0,0,0),r.set(0,0,0),a.set(0,0,0);for(var vt=0,Xt=W.length;vt<Xt;vt++){var bt=Ft[vt];if(bt!==0){var Jt=W[vt].vertices;i.addScaledVector(s.subVectors(Jt[st.a],I),bt),r.addScaledVector(o.subVectors(Jt[st.b],B),bt),a.addScaledVector(l.subVectors(Jt[st.c],Z),bt)}}i.add(I),r.add(B),a.add(Z),I=i,B=r,Z=a}if(w=m(this,_,t,I,B,Z,d),w){if(b){var Bt=b[gt];c.copy(Bt[0]),u.copy(Bt[1]),h.copy(Bt[2]),w.uv=p(d,I,B,Z,c,u,h)}w.face=st,w.faceIndex=gt,x.push(w)}}}}}}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}});function Zr(e,t,n,i,r,a){Gt.call(this),this.type="BoxBufferGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};var s=this;i=Math.floor(i)||1,r=Math.floor(r)||1,a=Math.floor(a)||1;var o=y(i,r,a),l=_(i,r,a),c=new(l>65535?Uint32Array:Uint16Array)(l),u=new Float32Array(o*3),h=new Float32Array(o*3),f=new Float32Array(o*2),d=0,v=0,p=0,m=0,g=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,i,a,2),x("x","z","y",1,-1,e,n,-t,i,a,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(new St(c,1)),this.addAttribute("position",new St(u,3)),this.addAttribute("normal",new St(h,3)),this.addAttribute("uv",new St(f,2));function y(M,S,E){var b=0;return b+=(M+1)*(S+1)*2,b+=(M+1)*(E+1)*2,b+=(E+1)*(S+1)*2,b}function _(M,S,E){var b=0;return b+=M*S*2,b+=M*E*2,b+=E*S*2,b*6}function x(M,S,E,b,w,L,G,H,C,T,R){for(var N=L/C,V=G/T,z=L/2,I=G/2,B=H/2,Z=C+1,X=T+1,k=0,J=0,it=new U,Y=0;Y<X;Y++)for(var gt=Y*V-I,ft=0;ft<Z;ft++){var st=ft*N-z;it[M]=st*b,it[S]=gt*w,it[E]=B,u[d]=it.x,u[d+1]=it.y,u[d+2]=it.z,it[M]=0,it[S]=0,it[E]=H>0?1:-1,h[d]=it.x,h[d+1]=it.y,h[d+2]=it.z,f[v]=ft/C,f[v+1]=1-Y/T,d+=3,v+=2,k+=1}for(Y=0;Y<T;Y++)for(ft=0;ft<C;ft++){var pt=m+ft+Z*Y,W=m+ft+Z*(Y+1),Ft=m+(ft+1)+Z*(Y+1),vt=m+(ft+1)+Z*Y;c[p]=pt,c[p+1]=W,c[p+2]=vt,c[p+3]=W,c[p+4]=Ft,c[p+5]=vt,p+=6,J+=6}s.addGroup(g,J,R),g+=J,m+=k}}Zr.prototype=Object.create(Gt.prototype);Zr.prototype.constructor=Zr;function Jr(e,t,n,i){Gt.call(this),this.type="PlaneBufferGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};for(var r=e/2,a=t/2,s=Math.floor(n)||1,o=Math.floor(i)||1,l=s+1,c=o+1,u=e/s,h=t/o,f=new Float32Array(l*c*3),d=new Float32Array(l*c*3),v=new Float32Array(l*c*2),p=0,m=0,g=0;g<c;g++)for(var y=g*h-a,_=0;_<l;_++){var x=_*u-r;f[p]=x,f[p+1]=-y,d[p+2]=1,v[m]=_/s,v[m+1]=1-g/o,p+=3,m+=2}p=0;for(var M=new(f.length/3>65535?Uint32Array:Uint16Array)(s*o*6),g=0;g<o;g++)for(var _=0;_<s;_++){var S=_+l*g,E=_+l*(g+1),b=_+1+l*(g+1),w=_+1+l*g;M[p]=S,M[p+1]=E,M[p+2]=w,M[p+3]=E,M[p+4]=b,M[p+5]=w,p+=6}this.setIndex(new St(M,1)),this.addAttribute("position",new St(f,3)),this.addAttribute("normal",new St(d,3)),this.addAttribute("uv",new St(v,2))}Jr.prototype=Object.create(Gt.prototype);Jr.prototype.constructor=Jr;function cn(){Pt.call(this),this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt}cn.prototype=Object.create(Pt.prototype);cn.prototype.constructor=cn;cn.prototype.isCamera=!0;cn.prototype.getWorldDirection=function(){var e=new We;return function(n){var i=n||new U;return this.getWorldQuaternion(e),i.set(0,0,-1).applyQuaternion(e)}}();cn.prototype.lookAt=function(){var e=new Yt;return function(n){e.lookAt(this.position,n,this.up),this.quaternion.setFromRotationMatrix(e)}}();cn.prototype.clone=function(){return new this.constructor().copy(this)};cn.prototype.copy=function(e){return Pt.prototype.copy.call(this,e),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this};function nn(e,t,n,i){cn.call(this),this.type="PerspectiveCamera",this.fov=e!==void 0?e:50,this.zoom=1,this.near=n!==void 0?n:.1,this.far=i!==void 0?i:2e3,this.focus=10,this.aspect=t!==void 0?t:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}nn.prototype=Object.assign(Object.create(cn.prototype),{constructor:nn,isPerspectiveCamera:!0,copy:function(e){return cn.prototype.copy.call(this,e),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this},setFocalLength:function(e){var t=.5*this.getFilmHeight()/e;this.fov=Kt.RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()},getFocalLength:function(){var e=Math.tan(Kt.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e},getEffectiveFOV:function(){return Kt.RAD2DEG*2*Math.atan(Math.tan(Kt.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(e,t,n,i,r,a){this.aspect=e/t,this.view={fullWidth:e,fullHeight:t,offsetX:n,offsetY:i,width:r,height:a},this.updateProjectionMatrix()},clearViewOffset:function(){this.view=null,this.updateProjectionMatrix()},updateProjectionMatrix:function(){var e=this.near,t=e*Math.tan(Kt.DEG2RAD*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(a!==null){var s=a.fullWidth,o=a.fullHeight;r+=a.offsetX*i/s,t-=a.offsetY*n/o,i*=a.width/s,n*=a.height/o}var l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makeFrustum(r,r+i,t-n,t,e,this.far)},toJSON:function(e){var t=Pt.prototype.toJSON.call(this,e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}});function ss(e,t,n,i,r,a){cn.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r!==void 0?r:.1,this.far=a!==void 0?a:2e3,this.updateProjectionMatrix()}ss.prototype=Object.assign(Object.create(cn.prototype),{constructor:ss,isOrthographicCamera:!0,copy:function(e){return cn.prototype.copy.call(this,e),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this},setViewOffset:function(e,t,n,i,r,a){this.view={fullWidth:e,fullHeight:t,offsetX:n,offsetY:i,width:r,height:a},this.updateProjectionMatrix()},clearViewOffset:function(){this.view=null,this.updateProjectionMatrix()},updateProjectionMatrix:function(){var e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,s=i+t,o=i-t;if(this.view!==null){var l=this.zoom/(this.view.width/this.view.fullWidth),c=this.zoom/(this.view.height/this.view.fullHeight),u=(this.right-this.left)/this.view.width,h=(this.top-this.bottom)/this.view.height;r+=u*(this.view.offsetX/l),a=r+u*(this.view.width/l),s-=h*(this.view.offsetY/c),o=s-h*(this.view.height/c)}this.projectionMatrix.makeOrthographic(r,a,s,o,this.near,this.far)},toJSON:function(e){var t=Pt.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}});function CE(e,t,n){var i;function r(u){i=u}var a,s;function o(u){u.array instanceof Uint32Array&&t.get("OES_element_index_uint")?(a=e.UNSIGNED_INT,s=4):u.array instanceof Uint16Array?(a=e.UNSIGNED_SHORT,s=2):(a=e.UNSIGNED_BYTE,s=1)}function l(u,h){e.drawElements(i,h,a,u*s),n.calls++,n.vertices+=h,i===e.TRIANGLES&&(n.faces+=h/3)}function c(u,h,f){var d=t.get("ANGLE_instanced_arrays");if(d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d.drawElementsInstancedANGLE(i,f,a,h*s,u.maxInstancedCount),n.calls++,n.vertices+=f*u.maxInstancedCount,i===e.TRIANGLES&&(n.faces+=u.maxInstancedCount*f/3)}return{setMode:r,setIndex:o,render:l,renderInstances:c}}function LE(e,t,n){var i;function r(o){i=o}function a(o,l){e.drawArrays(i,o,l),n.calls++,n.vertices+=l,i===e.TRIANGLES&&(n.faces+=l/3)}function s(o){var l=t.get("ANGLE_instanced_arrays");if(l===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}var c=o.attributes.position,u=0;c.isInterleavedBufferAttribute?(u=c.data.count,l.drawArraysInstancedANGLE(i,0,u,o.maxInstancedCount)):(u=c.count,l.drawArraysInstancedANGLE(i,0,u,o.maxInstancedCount)),n.calls++,n.vertices+=u*o.maxInstancedCount,i===e.TRIANGLES&&(n.faces+=o.maxInstancedCount*u/3)}return{setMode:r,render:a,renderInstances:s}}function DE(){var e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];var n;switch(t.type){case"DirectionalLight":n={direction:new U,color:new Vt,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":n={position:new U,direction:new U,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":n={position:new U,color:new Vt,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"HemisphereLight":n={direction:new U,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":n={color:new Vt,position:new U,halfWidth:new U,halfHeight:new U};break}return e[t.id]=n,n}}}function RE(e){for(var t=e.split(`
`),n=0;n<t.length;n++)t[n]=n+1+": "+t[n];return t.join(`
`)}function Lp(e,t,n){var i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS)===!1&&console.error("THREE.WebGLShader: Shader couldn't compile."),e.getShaderInfoLog(i)!==""&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",t===e.VERTEX_SHADER?"vertex":"fragment",e.getShaderInfoLog(i),RE(n)),i}var PE=0;function dg(e){switch(e){case bo:return["Linear","( value )"];case Zv:return["sRGB","( value )"];case Jv:return["RGBE","( value )"];case Kv:return["RGBM","( value, 7.0 )"];case Qv:return["RGBM","( value, 16.0 )"];case tg:return["RGBD","( value, 256.0 )"];case Lf:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw new Error("unsupported encoding: "+e)}}function qu(e,t){var n=dg(t);return"vec4 "+e+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function FE(e,t){var n=dg(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function IE(e,t){var n;switch(t){case wf:n="Linear";break;case Rv:n="Reinhard";break;case Pv:n="Uncharted2";break;case Fv:n="OptimizedCineon";break;default:throw new Error("unsupported toneMapping: "+t)}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function UE(e,t,n){e=e||{};var i=[e.derivatives||t.envMapCubeUV||t.bumpMap||t.normalMap||t.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(e.fragDepth||t.logarithmicDepthBuffer)&&n.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",e.drawBuffers&&n.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(e.shaderTextureLOD||t.envMap)&&n.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""];return i.filter(io).join(`
`)}function OE(e){var t=[];for(var n in e){var i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function NE(e,t,n){for(var i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES),a=0;a<r;a++){var s=e.getActiveAttrib(t,a),o=s.name;i[o]=e.getAttribLocation(t,o)}return i}function io(e){return e!==""}function Dp(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights)}function Dh(e){var t=/#include +<([\w\d.]+)>/g;function n(i,r){var a=ge[r];if(a===void 0)throw new Error("Can not resolve #include <"+r+">");return Dh(a)}return e.replace(t,n)}function Rp(e){var t=/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;function n(i,r,a,s){for(var o="",l=parseInt(r);l<parseInt(a);l++)o+=s.replace(/\[ i \]/g,"[ "+l+" ]");return o}return e.replace(t,n)}function zE(e,t,n,i){var r=e.context,a=n.extensions,s=n.defines,o=n.__webglShader.vertexShader,l=n.__webglShader.fragmentShader,c="SHADOWMAP_TYPE_BASIC";i.shadowMapType===ff?c="SHADOWMAP_TYPE_PCF":i.shadowMapType===lv&&(c="SHADOWMAP_TYPE_PCF_SOFT");var u="ENVMAP_TYPE_CUBE",h="ENVMAP_MODE_REFLECTION",f="ENVMAP_BLENDING_MULTIPLY";if(i.envMap){switch(n.envMap.mapping){case Xl:case ol:u="ENVMAP_TYPE_CUBE";break;case ql:case Yl:u="ENVMAP_TYPE_CUBE_UV";break;case Sf:case cl:u="ENVMAP_TYPE_EQUIREC";break;case Ef:u="ENVMAP_TYPE_SPHERE";break}switch(n.envMap.mapping){case ol:case cl:h="ENVMAP_MODE_REFRACTION";break}switch(n.combine){case dc:f="ENVMAP_BLENDING_MULTIPLY";break;case Lv:f="ENVMAP_BLENDING_MIX";break;case Dv:f="ENVMAP_BLENDING_ADD";break}}var d=e.gammaFactor>0?e.gammaFactor:1,v=UE(a,i,e.extensions),p=OE(s),m=r.createProgram(),g,y;n.isRawShaderMaterial?(g=[p,`
`].filter(io).join(`
`),y=[v,p,`
`].filter(io).join(`
`)):(g=["precision "+i.precision+" float;","precision "+i.precision+" int;","#define SHADER_NAME "+n.__webglShader.name,p,i.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+i.maxBones,i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.displacementMap&&i.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.vertexColors?"#define USE_COLOR":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.useVertexTexture?"#define BONE_TEXTURE":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+i.numClippingPlanes,i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+c:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&e.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),y=[v,"precision "+i.precision+" float;","precision "+i.precision+" int;","#define SHADER_NAME "+n.__webglShader.name,p,i.alphaTest?"#define ALPHATEST "+i.alphaTest:"","#define GAMMA_FACTOR "+d,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.envMap?"#define "+h:"",i.envMap?"#define "+f:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.vertexColors?"#define USE_COLOR":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+i.numClippingPlanes,"#define UNION_CLIPPING_PLANES "+(i.numClippingPlanes-i.numClipIntersection),i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+c:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&e.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"",i.envMap&&e.extensions.get("EXT_shader_texture_lod")?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",i.toneMapping!==$c?"#define TONE_MAPPING":"",i.toneMapping!==$c?ge.tonemapping_pars_fragment:"",i.toneMapping!==$c?IE("toneMapping",i.toneMapping):"",i.outputEncoding||i.mapEncoding||i.envMapEncoding||i.emissiveMapEncoding?ge.encodings_pars_fragment:"",i.mapEncoding?qu("mapTexelToLinear",i.mapEncoding):"",i.envMapEncoding?qu("envMapTexelToLinear",i.envMapEncoding):"",i.emissiveMapEncoding?qu("emissiveMapTexelToLinear",i.emissiveMapEncoding):"",i.outputEncoding?FE("linearToOutputTexel",i.outputEncoding):"",i.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(io).join(`
`)),o=Dh(o),o=Dp(o,i),l=Dh(l),l=Dp(l,i),n.isShaderMaterial||(o=Rp(o),l=Rp(l));var _=g+o,x=y+l,M=Lp(r,r.VERTEX_SHADER,_),S=Lp(r,r.FRAGMENT_SHADER,x);r.attachShader(m,M),r.attachShader(m,S),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):i.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);var E=r.getProgramInfoLog(m),b=r.getShaderInfoLog(M),w=r.getShaderInfoLog(S),L=!0,G=!0;r.getProgramParameter(m,r.LINK_STATUS)===!1?(L=!1,console.error("THREE.WebGLProgram: shader error: ",r.getError(),"gl.VALIDATE_STATUS",r.getProgramParameter(m,r.VALIDATE_STATUS),"gl.getProgramInfoLog",E,b,w)):E!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",E):(b===""||w==="")&&(G=!1),G&&(this.diagnostics={runnable:L,material:n,programLog:E,vertexShader:{log:b,prefix:g},fragmentShader:{log:w,prefix:y}}),r.deleteShader(M),r.deleteShader(S);var H;this.getUniforms=function(){return H===void 0&&(H=new pr(r,m,e)),H};var C;return this.getAttributes=function(){return C===void 0&&(C=NE(r,m)),C},this.destroy=function(){r.deleteProgram(m),this.program=void 0},Object.defineProperties(this,{uniforms:{get:function(){return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."),this.getUniforms()}},attributes:{get:function(){return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."),this.getAttributes()}}}),this.id=PE++,this.code=t,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=S,this}function BE(e,t){var n=[],i={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points"},r=["precision","supportsVertexTextures","map","mapEncoding","envMap","envMapMode","envMapEncoding","lightMap","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","fog","useFog","fogExp","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking"];function a(o){if(t.floatVertexTextures&&o&&o.skeleton&&o.skeleton.useVertexTexture)return 1024;var l=t.maxVertexUniforms,c=Math.floor((l-20)/4),u=c;return o!==void 0&&o&&o.isSkinnedMesh&&(u=Math.min(o.skeleton.bones.length,u),u<o.skeleton.bones.length&&console.warn("WebGLRenderer: too many bones - "+o.skeleton.bones.length+", this GPU supports just "+u+" (try OpenGL instead of ANGLE)")),u}function s(o,l){var c;return o?o.isTexture?c=o.encoding:o.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),c=o.texture.encoding):c=bo,c===bo&&l&&(c=Lf),c}this.getParameters=function(o,l,c,u,h,f){var d=i[o.type],v=a(f),p=e.getPrecision();o.precision!==null&&(p=t.getMaxPrecision(o.precision),p!==o.precision&&console.warn("THREE.WebGLProgram.getParameters:",o.precision,"not supported, using",p,"instead."));var m=e.getCurrentRenderTarget(),g={shaderID:d,precision:p,supportsVertexTextures:t.vertexTextures,outputEncoding:s(m?m.texture:null,e.gammaOutput),map:!!o.map,mapEncoding:s(o.map,e.gammaInput),envMap:!!o.envMap,envMapMode:o.envMap&&o.envMap.mapping,envMapEncoding:s(o.envMap,e.gammaInput),envMapCubeUV:!!o.envMap&&(o.envMap.mapping===ql||o.envMap.mapping===Yl),lightMap:!!o.lightMap,aoMap:!!o.aoMap,emissiveMap:!!o.emissiveMap,emissiveMapEncoding:s(o.emissiveMap,e.gammaInput),bumpMap:!!o.bumpMap,normalMap:!!o.normalMap,displacementMap:!!o.displacementMap,roughnessMap:!!o.roughnessMap,metalnessMap:!!o.metalnessMap,specularMap:!!o.specularMap,alphaMap:!!o.alphaMap,gradientMap:!!o.gradientMap,combine:o.combine,vertexColors:o.vertexColors,fog:!!c,useFog:o.fog,fogExp:c&&c.isFogExp2,flatShading:o.shading===df,sizeAttenuation:o.sizeAttenuation,logarithmicDepthBuffer:t.logarithmicDepthBuffer,skinning:o.skinning,maxBones:v,useVertexTexture:t.floatVertexTextures&&f&&f.skeleton&&f.skeleton.useVertexTexture,morphTargets:o.morphTargets,morphNormals:o.morphNormals,maxMorphTargets:e.maxMorphTargets,maxMorphNormals:e.maxMorphNormals,numDirLights:l.directional.length,numPointLights:l.point.length,numSpotLights:l.spot.length,numRectAreaLights:l.rectArea.length,numHemiLights:l.hemi.length,numClippingPlanes:u,numClipIntersection:h,shadowMapEnabled:e.shadowMap.enabled&&f.receiveShadow&&l.shadows.length>0,shadowMapType:e.shadowMap.type,toneMapping:e.toneMapping,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:o.premultipliedAlpha,alphaTest:o.alphaTest,doubleSided:o.side===Ws,flipSided:o.side===fr,depthPacking:o.depthPacking!==void 0?o.depthPacking:!1};return g},this.getProgramCode=function(o,l){var c=[];if(l.shaderID?c.push(l.shaderID):(c.push(o.fragmentShader),c.push(o.vertexShader)),o.defines!==void 0)for(var u in o.defines)c.push(u),c.push(o.defines[u]);for(var h=0;h<r.length;h++)c.push(l[r[h]]);return c.join()},this.acquireProgram=function(o,l,c){for(var u,h=0,f=n.length;h<f;h++){var d=n[h];if(d.code===c){u=d,++u.usedTimes;break}}return u===void 0&&(u=new zE(e,c,o,l),n.push(u)),u},this.releaseProgram=function(o){if(--o.usedTimes===0){var l=n.indexOf(o);n[l]=n[n.length-1],n.pop(),o.destroy()}},this.programs=n}function GE(e,t,n){var i={};function r(c){var u=c.target,h=i[u.id];h.index!==null&&s(h.index),o(h.attributes),u.removeEventListener("dispose",r),delete i[u.id];var f=t.get(u);f.wireframe&&s(f.wireframe),t.delete(u);var d=t.get(h);d.wireframe&&s(d.wireframe),t.delete(h),n.memory.geometries--}function a(c){return c.isInterleavedBufferAttribute?t.get(c.data).__webglBuffer:t.get(c).__webglBuffer}function s(c){var u=a(c);u!==void 0&&(e.deleteBuffer(u),l(c))}function o(c){for(var u in c)s(c[u])}function l(c){c.isInterleavedBufferAttribute?t.delete(c.data):t.delete(c)}return{get:function(c){var u=c.geometry;if(i[u.id]!==void 0)return i[u.id];u.addEventListener("dispose",r);var h;return u.isBufferGeometry?h=u:u.isGeometry&&(u._bufferGeometry===void 0&&(u._bufferGeometry=new Gt().setFromObject(c)),h=u._bufferGeometry),i[u.id]=h,n.memory.geometries++,h}}}function kE(e,t,n){var i=new GE(e,t,n);function r(h){var f=i.get(h);h.geometry.isGeometry&&f.updateFromObject(h);var d=f.index,v=f.attributes;d!==null&&a(d,e.ELEMENT_ARRAY_BUFFER);for(var p in v)a(v[p],e.ARRAY_BUFFER);var m=f.morphAttributes;for(var p in m)for(var g=m[p],y=0,_=g.length;y<_;y++)a(g[y],e.ARRAY_BUFFER);return f}function a(h,f){var d=h.isInterleavedBufferAttribute?h.data:h,v=t.get(d);v.__webglBuffer===void 0?s(v,d,f):v.version!==d.version&&o(v,d,f)}function s(h,f,d){h.__webglBuffer=e.createBuffer(),e.bindBuffer(d,h.__webglBuffer);var v=f.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW;e.bufferData(d,f.array,v);var p=e.FLOAT,m=f.array;m instanceof Float32Array?p=e.FLOAT:m instanceof Float64Array?console.warn("Unsupported data buffer format: Float64Array"):m instanceof Uint16Array?p=e.UNSIGNED_SHORT:m instanceof Int16Array?p=e.SHORT:m instanceof Uint32Array?p=e.UNSIGNED_INT:m instanceof Int32Array?p=e.INT:m instanceof Int8Array?p=e.BYTE:m instanceof Uint8Array&&(p=e.UNSIGNED_BYTE),h.bytesPerElement=m.BYTES_PER_ELEMENT,h.type=p,h.version=f.version,f.onUploadCallback()}function o(h,f,d){e.bindBuffer(d,h.__webglBuffer),f.dynamic===!1?e.bufferData(d,f.array,e.STATIC_DRAW):f.updateRange.count===-1?e.bufferSubData(d,0,f.array):f.updateRange.count===0?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):(e.bufferSubData(d,f.updateRange.offset*f.array.BYTES_PER_ELEMENT,f.array.subarray(f.updateRange.offset,f.updateRange.offset+f.updateRange.count)),f.updateRange.count=0),h.version=f.version}function l(h){return h.isInterleavedBufferAttribute?t.get(h.data).__webglBuffer:t.get(h).__webglBuffer}function c(h){return h.isInterleavedBufferAttribute?t.get(h.data):t.get(h)}function u(h){var f=t.get(h);if(f.wireframe!==void 0)return f.wireframe;var d=[],v=h.index,p=h.attributes,m=p.position;if(v!==null)for(var g=v.array,y=0,_=g.length;y<_;y+=3){var x=g[y+0],M=g[y+1],S=g[y+2];d.push(x,M,M,S,S,x)}else for(var g=p.position.array,y=0,_=g.length/3-1;y<_;y+=3){var x=y+0,M=y+1,S=y+2;d.push(x,M,M,S,S,x)}var E=m.count>65535?Uint32Array:Uint16Array,b=new St(new E(d),1);return a(b,e.ELEMENT_ARRAY_BUFFER),f.wireframe=b,b}return{getAttributeBuffer:l,getAttributeProperties:c,getWireframeAttribute:u,update:r}}function VE(e,t,n,i,r,a,s){var o=s.memory,l=typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext;function c(C,T){if(C.width>T||C.height>T){var R=T/Math.max(C.width,C.height),N=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");N.width=Math.floor(C.width*R),N.height=Math.floor(C.height*R);var V=N.getContext("2d");return V.drawImage(C,0,0,C.width,C.height,0,0,N.width,N.height),console.warn("THREE.WebGLRenderer: image is too big ("+C.width+"x"+C.height+"). Resized to "+N.width+"x"+N.height,C),N}return C}function u(C){return Kt.isPowerOfTwo(C.width)&&Kt.isPowerOfTwo(C.height)}function h(C){if(C instanceof HTMLImageElement||C instanceof HTMLCanvasElement){var T=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");T.width=Kt.nearestPowerOfTwo(C.width),T.height=Kt.nearestPowerOfTwo(C.height);var R=T.getContext("2d");return R.drawImage(C,0,0,T.width,T.height),console.warn("THREE.WebGLRenderer: image is not power of two ("+C.width+"x"+C.height+"). Resized to "+T.width+"x"+T.height,C),T}return C}function f(C){return C.wrapS!==Un||C.wrapT!==Un||C.minFilter!==On&&C.minFilter!==wn}function d(C){return C===On||C===jl||C===$l?e.NEAREST:e.LINEAR}function v(C){var T=C.target;T.removeEventListener("dispose",v),m(T),o.textures--}function p(C){var T=C.target;T.removeEventListener("dispose",p),g(T),o.textures--}function m(C){var T=i.get(C);if(C.image&&T.__image__webglTextureCube)e.deleteTexture(T.__image__webglTextureCube);else{if(T.__webglInit===void 0)return;e.deleteTexture(T.__webglTexture)}i.delete(C)}function g(C){var T=i.get(C),R=i.get(C.texture);if(!!C){if(R.__webglTexture!==void 0&&e.deleteTexture(R.__webglTexture),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLRenderTargetCube)for(var N=0;N<6;N++)e.deleteFramebuffer(T.__webglFramebuffer[N]),T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer[N]);else e.deleteFramebuffer(T.__webglFramebuffer),T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer);i.delete(C.texture),i.delete(C)}}function y(C,T){var R=i.get(C);if(C.version>0&&R.__version!==C.version){var N=C.image;if(N===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined",C);else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete",C);else{S(R,C,T);return}}n.activeTexture(e.TEXTURE0+T),n.bindTexture(e.TEXTURE_2D,R.__webglTexture)}function _(C,T){var R=i.get(C);if(C.image.length===6)if(C.version>0&&R.__version!==C.version){R.__image__webglTextureCube||(C.addEventListener("dispose",v),R.__image__webglTextureCube=e.createTexture(),o.textures++),n.activeTexture(e.TEXTURE0+T),n.bindTexture(e.TEXTURE_CUBE_MAP,R.__image__webglTextureCube),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,C.flipY);for(var N=C&&C.isCompressedTexture,V=C.image[0]&&C.image[0].isDataTexture,z=[],I=0;I<6;I++)!N&&!V?z[I]=c(C.image[I],r.maxCubemapSize):z[I]=V?C.image[I].image:C.image[I];var B=z[0],Z=u(B),X=a(C.format),k=a(C.type);M(e.TEXTURE_CUBE_MAP,C,Z);for(var I=0;I<6;I++)if(!N)V?n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,X,z[I].width,z[I].height,0,X,k,z[I].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,X,X,k,z[I]);else for(var J,it=z[I].mipmaps,Y=0,gt=it.length;Y<gt;Y++)J=it[Y],C.format!==Si&&C.format!==ns?n.getCompressedTextureFormats().indexOf(X)>-1?n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+I,Y,X,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+I,Y,X,J.width,J.height,0,X,k,J.data);C.generateMipmaps&&Z&&e.generateMipmap(e.TEXTURE_CUBE_MAP),R.__version=C.version,C.onUpdate&&C.onUpdate(C)}else n.activeTexture(e.TEXTURE0+T),n.bindTexture(e.TEXTURE_CUBE_MAP,R.__image__webglTextureCube)}function x(C,T){n.activeTexture(e.TEXTURE0+T),n.bindTexture(e.TEXTURE_CUBE_MAP,i.get(C).__webglTexture)}function M(C,T,R){var N;if(R?(e.texParameteri(C,e.TEXTURE_WRAP_S,a(T.wrapS)),e.texParameteri(C,e.TEXTURE_WRAP_T,a(T.wrapT)),e.texParameteri(C,e.TEXTURE_MAG_FILTER,a(T.magFilter)),e.texParameteri(C,e.TEXTURE_MIN_FILTER,a(T.minFilter))):(e.texParameteri(C,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(C,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(T.wrapS!==Un||T.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.",T),e.texParameteri(C,e.TEXTURE_MAG_FILTER,d(T.magFilter)),e.texParameteri(C,e.TEXTURE_MIN_FILTER,d(T.minFilter)),T.minFilter!==On&&T.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.",T)),N=t.get("EXT_texture_filter_anisotropic"),N){if(T.type===es&&t.get("OES_texture_float_linear")===null||T.type===ul&&t.get("OES_texture_half_float_linear")===null)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(e.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function S(C,T,R){C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",v),C.__webglTexture=e.createTexture(),o.textures++),n.activeTexture(e.TEXTURE0+R),n.bindTexture(e.TEXTURE_2D,C.__webglTexture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment);var N=c(T.image,r.maxTextureSize);f(T)&&u(N)===!1&&(N=h(N));var V=u(N),z=a(T.format),I=a(T.type);M(e.TEXTURE_2D,T,V);var B,Z=T.mipmaps;if(T.isDepthTexture){var X=e.DEPTH_COMPONENT;if(T.type===es){if(!l)throw new Error("Float Depth Texture only supported in WebGL2.0");X=e.DEPTH_COMPONENT32F}else l&&(X=e.DEPTH_COMPONENT16);T.format===zr&&X===e.DEPTH_COMPONENT&&T.type!==_o&&T.type!==Af&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=_o,I=a(T.type)),T.format===is&&(X=e.DEPTH_STENCIL,T.type!==yo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=yo,I=a(T.type))),n.texImage2D(e.TEXTURE_2D,0,X,N.width,N.height,0,z,I,null)}else if(T.isDataTexture)if(Z.length>0&&V){for(var k=0,J=Z.length;k<J;k++)B=Z[k],n.texImage2D(e.TEXTURE_2D,k,z,B.width,B.height,0,z,I,B.data);T.generateMipmaps=!1}else n.texImage2D(e.TEXTURE_2D,0,z,N.width,N.height,0,z,I,N.data);else if(T.isCompressedTexture)for(var k=0,J=Z.length;k<J;k++)B=Z[k],T.format!==Si&&T.format!==ns?n.getCompressedTextureFormats().indexOf(z)>-1?n.compressedTexImage2D(e.TEXTURE_2D,k,z,B.width,B.height,0,B.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(e.TEXTURE_2D,k,z,B.width,B.height,0,z,I,B.data);else if(Z.length>0&&V){for(var k=0,J=Z.length;k<J;k++)B=Z[k],n.texImage2D(e.TEXTURE_2D,k,z,z,I,B);T.generateMipmaps=!1}else n.texImage2D(e.TEXTURE_2D,0,z,z,I,N);T.generateMipmaps&&V&&e.generateMipmap(e.TEXTURE_2D),C.__version=T.version,T.onUpdate&&T.onUpdate(T)}function E(C,T,R,N){var V=a(T.texture.format),z=a(T.texture.type);n.texImage2D(N,0,V,T.width,T.height,0,V,z,null),e.bindFramebuffer(e.FRAMEBUFFER,C),e.framebufferTexture2D(e.FRAMEBUFFER,R,N,i.get(T.texture).__webglTexture,0),e.bindFramebuffer(e.FRAMEBUFFER,null)}function b(C,T){e.bindRenderbuffer(e.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer?(e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,C)):T.depthBuffer&&T.stencilBuffer?(e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,C)):e.renderbufferStorage(e.RENDERBUFFER,e.RGBA4,T.width,T.height),e.bindRenderbuffer(e.RENDERBUFFER,null)}function w(C,T){var R=T&&T.isWebGLRenderTargetCube;if(R)throw new Error("Depth Texture with cube render targets is not supported!");if(e.bindFramebuffer(e.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),y(T.depthTexture,0);var N=i.get(T.depthTexture).__webglTexture;if(T.depthTexture.format===zr)e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,N,0);else if(T.depthTexture.format===is)e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function L(C){var T=i.get(C),R=C.isWebGLRenderTargetCube===!0;if(C.depthTexture){if(R)throw new Error("target.depthTexture not supported in Cube render targets");w(T.__webglFramebuffer,C)}else if(R){T.__webglDepthbuffer=[];for(var N=0;N<6;N++)e.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer[N]),T.__webglDepthbuffer[N]=e.createRenderbuffer(),b(T.__webglDepthbuffer[N],C)}else e.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=e.createRenderbuffer(),b(T.__webglDepthbuffer,C);e.bindFramebuffer(e.FRAMEBUFFER,null)}function G(C){var T=i.get(C),R=i.get(C.texture);C.addEventListener("dispose",p),R.__webglTexture=e.createTexture(),o.textures++;var N=C.isWebGLRenderTargetCube===!0,V=u(C);if(N){T.__webglFramebuffer=[];for(var z=0;z<6;z++)T.__webglFramebuffer[z]=e.createFramebuffer()}else T.__webglFramebuffer=e.createFramebuffer();if(N){n.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture),M(e.TEXTURE_CUBE_MAP,C.texture,V);for(var z=0;z<6;z++)E(T.__webglFramebuffer[z],C,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+z);C.texture.generateMipmaps&&V&&e.generateMipmap(e.TEXTURE_CUBE_MAP),n.bindTexture(e.TEXTURE_CUBE_MAP,null)}else n.bindTexture(e.TEXTURE_2D,R.__webglTexture),M(e.TEXTURE_2D,C.texture,V),E(T.__webglFramebuffer,C,e.COLOR_ATTACHMENT0,e.TEXTURE_2D),C.texture.generateMipmaps&&V&&e.generateMipmap(e.TEXTURE_2D),n.bindTexture(e.TEXTURE_2D,null);C.depthBuffer&&L(C)}function H(C){var T=C.texture;if(T.generateMipmaps&&u(C)&&T.minFilter!==On&&T.minFilter!==wn){var R=C&&C.isWebGLRenderTargetCube?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,N=i.get(T).__webglTexture;n.bindTexture(R,N),e.generateMipmap(R),n.bindTexture(R,null)}}this.setTexture2D=y,this.setTextureCube=_,this.setTextureCubeDynamic=x,this.setupRenderTarget=G,this.updateRenderTargetMipmap=H}function HE(){var e={};return{get:function(t){var n=t.uuid,i=e[n];return i===void 0&&(i={},e[n]=i),i},delete:function(t){delete e[t.uuid]},clear:function(){e={}}}}function WE(e,t,n){function i(){var $=!1,dt=new xe,_t=null,Tt=new xe;return{setMask:function(wt){_t!==wt&&!$&&(e.colorMask(wt,wt,wt,wt),_t=wt)},setLocked:function(wt){$=wt},setClear:function(wt,qt,he,q,rt){rt===!0&&(wt*=q,qt*=q,he*=q),dt.set(wt,qt,he,q),Tt.equals(dt)===!1&&(e.clearColor(wt,qt,he,q),Tt.copy(dt))},reset:function(){$=!1,_t=null,Tt.set(0,0,0,1)}}}function r(){var $=!1,dt=null,_t=null,Tt=null;return{setTest:function(wt){wt?gt(e.DEPTH_TEST):ft(e.DEPTH_TEST)},setMask:function(wt){dt!==wt&&!$&&(e.depthMask(wt),dt=wt)},setFunc:function(wt){if(_t!==wt){if(wt)switch(wt){case bv:e.depthFunc(e.NEVER);break;case wv:e.depthFunc(e.ALWAYS);break;case Sv:e.depthFunc(e.LESS);break;case sl:e.depthFunc(e.LEQUAL);break;case Ev:e.depthFunc(e.EQUAL);break;case Tv:e.depthFunc(e.GEQUAL);break;case Av:e.depthFunc(e.GREATER);break;case Cv:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}else e.depthFunc(e.LEQUAL);_t=wt}},setLocked:function(wt){$=wt},setClear:function(wt){Tt!==wt&&(e.clearDepth(wt),Tt=wt)},reset:function(){$=!1,dt=null,_t=null,Tt=null}}}function a(){var $=!1,dt=null,_t=null,Tt=null,wt=null,qt=null,he=null,q=null,rt=null;return{setTest:function(lt){lt?gt(e.STENCIL_TEST):ft(e.STENCIL_TEST)},setMask:function(lt){dt!==lt&&!$&&(e.stencilMask(lt),dt=lt)},setFunc:function(lt,Et,It){(_t!==lt||Tt!==Et||wt!==It)&&(e.stencilFunc(lt,Et,It),_t=lt,Tt=Et,wt=It)},setOp:function(lt,Et,It){(qt!==lt||he!==Et||q!==It)&&(e.stencilOp(lt,Et,It),qt=lt,he=Et,q=It)},setLocked:function(lt){$=lt},setClear:function(lt){rt!==lt&&(e.clearStencil(lt),rt=lt)},reset:function(){$=!1,dt=null,_t=null,Tt=null,wt=null,qt=null,he=null,q=null,rt=null}}}var s=new i,o=new r,l=new a,c=e.getParameter(e.MAX_VERTEX_ATTRIBS),u=new Uint8Array(c),h=new Uint8Array(c),f=new Uint8Array(c),d={},v=null,p=null,m=null,g=null,y=null,_=null,x=null,M=null,S=!1,E=null,b=null,w=null,L=null,G=null,H=null,C=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),T=parseFloat(/^WebGL\ ([0-9])/.exec(e.getParameter(e.VERSION))[1]),R=parseFloat(T)>=1,N=null,V={},z=new xe,I=new xe;function B($,dt,_t){var Tt=new Uint8Array(4),wt=e.createTexture();e.bindTexture($,wt),e.texParameteri($,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri($,e.TEXTURE_MAG_FILTER,e.NEAREST);for(var qt=0;qt<_t;qt++)e.texImage2D(dt+qt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Tt);return wt}var Z={};Z[e.TEXTURE_2D]=B(e.TEXTURE_2D,e.TEXTURE_2D,1),Z[e.TEXTURE_CUBE_MAP]=B(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6);function X(){s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),gt(e.DEPTH_TEST),Xt(sl),Nt(!1),ee(vo),gt(e.CULL_FACE),gt(e.BLEND),pt(Xs)}function k(){for(var $=0,dt=u.length;$<dt;$++)u[$]=0}function J($){if(u[$]=1,h[$]===0&&(e.enableVertexAttribArray($),h[$]=1),f[$]!==0){var dt=t.get("ANGLE_instanced_arrays");dt.vertexAttribDivisorANGLE($,0),f[$]=0}}function it($,dt,_t){u[$]=1,h[$]===0&&(e.enableVertexAttribArray($),h[$]=1),f[$]!==dt&&(_t.vertexAttribDivisorANGLE($,dt),f[$]=dt)}function Y(){for(var $=0,dt=h.length;$!==dt;++$)h[$]!==u[$]&&(e.disableVertexAttribArray($),h[$]=0)}function gt($){d[$]!==!0&&(e.enable($),d[$]=!0)}function ft($){d[$]!==!1&&(e.disable($),d[$]=!1)}function st(){if(v===null&&(v=[],t.get("WEBGL_compressed_texture_pvrtc")||t.get("WEBGL_compressed_texture_s3tc")||t.get("WEBGL_compressed_texture_etc1")))for(var $=e.getParameter(e.COMPRESSED_TEXTURE_FORMATS),dt=0;dt<$.length;dt++)v.push($[dt]);return v}function pt($,dt,_t,Tt,wt,qt,he,q){$!==go?gt(e.BLEND):ft(e.BLEND),($!==p||q!==S)&&($===vf?q?(e.blendEquationSeparate(e.FUNC_ADD,e.FUNC_ADD),e.blendFuncSeparate(e.ONE,e.ONE,e.ONE,e.ONE)):(e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)):$===gf?q?(e.blendEquationSeparate(e.FUNC_ADD,e.FUNC_ADD),e.blendFuncSeparate(e.ZERO,e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ONE_MINUS_SRC_ALPHA)):(e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ZERO,e.ONE_MINUS_SRC_COLOR)):$===_f?q?(e.blendEquationSeparate(e.FUNC_ADD,e.FUNC_ADD),e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA)):(e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ZERO,e.SRC_COLOR)):q?(e.blendEquationSeparate(e.FUNC_ADD,e.FUNC_ADD),e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA)):(e.blendEquationSeparate(e.FUNC_ADD,e.FUNC_ADD),e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA)),p=$,S=q),$===yf?(wt=wt||dt,qt=qt||_t,he=he||Tt,(dt!==m||wt!==_)&&(e.blendEquationSeparate(n(dt),n(wt)),m=dt,_=wt),(_t!==g||Tt!==y||qt!==x||he!==M)&&(e.blendFuncSeparate(n(_t),n(Tt),n(qt),n(he)),g=_t,y=Tt,x=qt,M=he)):(m=null,g=null,y=null,_=null,x=null,M=null)}function W($){s.setMask($)}function Ft($){o.setTest($)}function vt($){o.setMask($)}function Xt($){o.setFunc($)}function bt($){l.setTest($)}function Jt($){l.setMask($)}function Bt($,dt,_t){l.setFunc($,dt,_t)}function Ut($,dt,_t){l.setOp($,dt,_t)}function Nt($){E!==$&&($?e.frontFace(e.CW):e.frontFace(e.CCW),E=$)}function ee($){$!==ov?(gt(e.CULL_FACE),$!==b&&($===vo?e.cullFace(e.BACK):$===hf?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ft(e.CULL_FACE),b=$}function fe($){$!==w&&(R&&e.lineWidth($),w=$)}function O($,dt,_t){$?(gt(e.POLYGON_OFFSET_FILL),(L!==dt||G!==_t)&&(e.polygonOffset(dt,_t),L=dt,G=_t)):ft(e.POLYGON_OFFSET_FILL)}function D(){return H}function nt($){H=$,$?gt(e.SCISSOR_TEST):ft(e.SCISSOR_TEST)}function ut($){$===void 0&&($=e.TEXTURE0+C-1),N!==$&&(e.activeTexture($),N=$)}function mt($,dt){N===null&&ut();var _t=V[N];_t===void 0&&(_t={type:void 0,texture:void 0},V[N]=_t),(_t.type!==$||_t.texture!==dt)&&(e.bindTexture($,dt||Z[$]),_t.type=$,_t.texture=dt)}function xt(){try{e.compressedTexImage2D.apply(e,arguments)}catch($){console.error($)}}function Wt(){try{e.texImage2D.apply(e,arguments)}catch($){console.error($)}}function Lt($){z.equals($)===!1&&(e.scissor($.x,$.y,$.z,$.w),z.copy($))}function ot($){I.equals($)===!1&&(e.viewport($.x,$.y,$.z,$.w),I.copy($))}function kt(){for(var $=0;$<h.length;$++)h[$]===1&&(e.disableVertexAttribArray($),h[$]=0);d={},v=null,N=null,V={},p=null,E=null,b=null,s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},init:X,initAttributes:k,enableAttribute:J,enableAttributeAndDivisor:it,disableUnusedAttributes:Y,enable:gt,disable:ft,getCompressedTextureFormats:st,setBlending:pt,setColorWrite:W,setDepthTest:Ft,setDepthWrite:vt,setDepthFunc:Xt,setStencilTest:bt,setStencilWrite:Jt,setStencilFunc:Bt,setStencilOp:Ut,setFlipSided:Nt,setCullFace:ee,setLineWidth:fe,setPolygonOffset:O,getScissorTest:D,setScissorTest:nt,activeTexture:ut,bindTexture:mt,compressedTexImage2D:xt,texImage2D:Wt,scissor:Lt,viewport:ot,reset:kt}}function XE(e,t,n){var i;function r(){if(i!==void 0)return i;var x=t.get("EXT_texture_filter_anisotropic");return x!==null?i=e.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function a(x){if(x==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}var s=n.precision!==void 0?n.precision:"highp",o=a(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);var l=n.logarithmicDepthBuffer===!0&&!!t.get("EXT_frag_depth"),c=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),u=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),p=e.getParameter(e.MAX_VARYING_VECTORS),m=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),g=u>0,y=!!t.get("OES_texture_float"),_=g&&y;return{getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:v,maxVaryings:p,maxFragmentUniforms:m,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:_}}function qE(e){var t={};return{get:function(n){if(t[n]!==void 0)return t[n];var i;switch(n){case"WEBGL_depth_texture":i=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;case"WEBGL_compressed_texture_etc1":i=e.getExtension("WEBGL_compressed_texture_etc1");break;default:i=e.getExtension(n)}return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),t[n]=i,i}}}function YE(){var e=this,t=null,n=0,i=!1,r=!1,a=new Pn,s=new ii,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h,f){var d=u.length!==0||h||n!==0||i;return i=h,t=c(u,f,0),n=u.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1,l()},this.setState=function(u,h,f,d,v,p){if(!i||u===null||u.length===0||r&&!f)r?c(null):l();else{var m=r?0:n,g=m*4,y=v.clippingState||null;o.value=y,y=c(u,d,g,p);for(var _=0;_!==g;++_)y[_]=t[_];v.clippingState=y,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=m}};function l(){o.value!==t&&(o.value=t,o.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(u,h,f,d){var v=u!==null?u.length:0,p=null;if(v!==0){if(p=o.value,d!==!0||p===null){var m=f+v*4,g=h.matrixWorldInverse;s.getNormalMatrix(g),(p===null||p.length<m)&&(p=new Float32Array(m));for(var y=0,_=f;y!==v;++y,_+=4)a.copy(u[y]).applyMatrix4(g,s),a.normal.toArray(p,_),p[_+3]=a.constant}o.value=p,o.needsUpdate=!0}return e.numPlanes=v,p}}function Rf(e){console.log("THREE.WebGLRenderer",sv),e=e||{};var t=e.canvas!==void 0?e.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),n=e.context!==void 0?e.context:null,i=e.alpha!==void 0?e.alpha:!1,r=e.depth!==void 0?e.depth:!0,a=e.stencil!==void 0?e.stencil:!0,s=e.antialias!==void 0?e.antialias:!1,o=e.premultipliedAlpha!==void 0?e.premultipliedAlpha:!0,l=e.preserveDrawingBuffer!==void 0?e.preserveDrawingBuffer:!1,c=[],u=[],h=-1,f=[],d=-1,v=new Float32Array(8),p=[],m=[];this.domElement=t,this.context=null,this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.gammaInput=!1,this.gammaOutput=!1,this.physicallyCorrectLights=!1,this.toneMapping=wf,this.toneMappingExposure=1,this.toneMappingWhitePoint=1,this.maxMorphTargets=8,this.maxMorphNormals=4;var g=this,y=null,_=null,x=null,M=-1,S="",E=null,b=new xe,w=null,L=new xe,G=0,H=new Vt(0),C=0,T=t.width,R=t.height,N=1,V=new xe(0,0,T,R),z=!1,I=new xe(0,0,T,R),B=new So,Z=new YE,X=!1,k=!1,J=new on,it=new Yt,Y=new U,gt=new Yt,ft=new Yt,st={hash:"",ambient:[0,0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],shadows:[]},pt={calls:0,vertices:0,faces:0,points:0};this.info={render:pt,memory:{geometries:0,textures:0},programs:null};var W;try{var Ft={alpha:i,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l};if(W=n||t.getContext("webgl",Ft)||t.getContext("experimental-webgl",Ft),W===null)throw t.getContext("webgl")!==null?"Error creating WebGL context with your selected attributes.":"Error creating WebGL context.";W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}}),t.addEventListener("webglcontextlost",_t,!1)}catch(A){console.error("THREE.WebGLRenderer: "+A)}var vt=new qE(W);vt.get("WEBGL_depth_texture"),vt.get("OES_texture_float"),vt.get("OES_texture_float_linear"),vt.get("OES_texture_half_float"),vt.get("OES_texture_half_float_linear"),vt.get("OES_standard_derivatives"),vt.get("ANGLE_instanced_arrays"),vt.get("OES_element_index_uint")&&(Gt.MaxIndex=4294967296);var Xt=new XE(W,vt,e),bt=new WE(W,vt,re),Jt=new HE,Bt=new VE(W,vt,bt,Jt,Xt,re,this.info),Ut=new kE(W,Jt,this.info),Nt=new BE(this,Xt),ee=new DE;this.info.programs=Nt.programs;var fe=new LE(W,vt,pt),O=new CE(W,vt,pt),D=new ss(-1,1,1,-1,0,1),nt=new nn,ut=new Ze(new Jr(2,2),new En({depthTest:!1,depthWrite:!1,fog:!1})),mt=as.cube,xt=new Ze(new Zr(5,5,5),new dn({uniforms:mt.uniforms,vertexShader:mt.vertexShader,fragmentShader:mt.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1}));function Wt(){return _===null?N:1}function Lt(){bt.init(),bt.scissor(b.copy(V).multiplyScalar(N)),bt.viewport(L.copy(I).multiplyScalar(N)),bt.buffers.color.setClear(H.r,H.g,H.b,C,o)}function ot(){y=null,E=null,S="",M=-1,bt.reset()}Lt(),this.context=W,this.capabilities=Xt,this.extensions=vt,this.properties=Jt,this.state=bt;var kt=new hg(this,st,Ut,Xt);this.shadowMap=kt;var $=new SE(this,p),dt=new wE(this,m);this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){vt.get("WEBGL_lose_context").loseContext()},this.getMaxAnisotropy=function(){return Xt.getMaxAnisotropy()},this.getPrecision=function(){return Xt.precision},this.getPixelRatio=function(){return N},this.setPixelRatio=function(A){A!==void 0&&(N=A,this.setSize(I.z,I.w,!1))},this.getSize=function(){return{width:T,height:R}},this.setSize=function(A,F,j){T=A,R=F,t.width=A*N,t.height=F*N,j!==!1&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.setViewport=function(A,F,j,ht){bt.viewport(I.set(A,F,j,ht))},this.setScissor=function(A,F,j,ht){bt.scissor(V.set(A,F,j,ht))},this.setScissorTest=function(A){bt.setScissorTest(z=A)},this.getClearColor=function(){return H},this.setClearColor=function(A,F){H.set(A),C=F!==void 0?F:1,bt.buffers.color.setClear(H.r,H.g,H.b,C,o)},this.getClearAlpha=function(){return C},this.setClearAlpha=function(A){C=A,bt.buffers.color.setClear(H.r,H.g,H.b,C,o)},this.clear=function(A,F,j){var ht=0;(A===void 0||A)&&(ht|=W.COLOR_BUFFER_BIT),(F===void 0||F)&&(ht|=W.DEPTH_BUFFER_BIT),(j===void 0||j)&&(ht|=W.STENCIL_BUFFER_BIT),W.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.clearTarget=function(A,F,j,ht){this.setRenderTarget(A),this.clear(F,j,ht)},this.resetGLState=ot,this.dispose=function(){f=[],d=-1,u=[],h=-1,t.removeEventListener("webglcontextlost",_t,!1)};function _t(A){A.preventDefault(),ot(),Lt(),Jt.clear()}function Tt(A){var F=A.target;F.removeEventListener("dispose",Tt),wt(F)}function wt(A){qt(A),Jt.delete(A)}function qt(A){var F=Jt.get(A).program;A.program=void 0,F!==void 0&&Nt.releaseProgram(F)}this.renderBufferImmediate=function(A,F,j){bt.initAttributes();var ht=Jt.get(A);A.hasPositions&&!ht.position&&(ht.position=W.createBuffer()),A.hasNormals&&!ht.normal&&(ht.normal=W.createBuffer()),A.hasUvs&&!ht.uv&&(ht.uv=W.createBuffer()),A.hasColors&&!ht.color&&(ht.color=W.createBuffer());var et=F.getAttributes();if(A.hasPositions&&(W.bindBuffer(W.ARRAY_BUFFER,ht.position),W.bufferData(W.ARRAY_BUFFER,A.positionArray,W.DYNAMIC_DRAW),bt.enableAttribute(et.position),W.vertexAttribPointer(et.position,3,W.FLOAT,!1,0,0)),A.hasNormals){if(W.bindBuffer(W.ARRAY_BUFFER,ht.normal),!j.isMeshPhongMaterial&&!j.isMeshStandardMaterial&&!j.isMeshNormalMaterial&&j.shading===df)for(var Mt=0,Qt=A.count*3;Mt<Qt;Mt+=9){var yt=A.normalArray,jt=(yt[Mt+0]+yt[Mt+3]+yt[Mt+6])/3,zt=(yt[Mt+1]+yt[Mt+4]+yt[Mt+7])/3,Rt=(yt[Mt+2]+yt[Mt+5]+yt[Mt+8])/3;yt[Mt+0]=jt,yt[Mt+1]=zt,yt[Mt+2]=Rt,yt[Mt+3]=jt,yt[Mt+4]=zt,yt[Mt+5]=Rt,yt[Mt+6]=jt,yt[Mt+7]=zt,yt[Mt+8]=Rt}W.bufferData(W.ARRAY_BUFFER,A.normalArray,W.DYNAMIC_DRAW),bt.enableAttribute(et.normal),W.vertexAttribPointer(et.normal,3,W.FLOAT,!1,0,0)}A.hasUvs&&j.map&&(W.bindBuffer(W.ARRAY_BUFFER,ht.uv),W.bufferData(W.ARRAY_BUFFER,A.uvArray,W.DYNAMIC_DRAW),bt.enableAttribute(et.uv),W.vertexAttribPointer(et.uv,2,W.FLOAT,!1,0,0)),A.hasColors&&j.vertexColors!==Hl&&(W.bindBuffer(W.ARRAY_BUFFER,ht.color),W.bufferData(W.ARRAY_BUFFER,A.colorArray,W.DYNAMIC_DRAW),bt.enableAttribute(et.color),W.vertexAttribPointer(et.color,3,W.FLOAT,!1,0,0)),bt.disableUnusedAttributes(),W.drawArrays(W.TRIANGLES,0,A.count),A.count=0},this.renderBufferDirect=function(A,F,j,ht,et,Mt){Hn(ht);var Qt=un(A,F,ht,et),yt=!1,jt=j.id+"_"+Qt.id+"_"+ht.wireframe;jt!==S&&(S=jt,yt=!0);var zt=et.morphTargetInfluences;if(zt!==void 0){for(var Rt=[],Dt=0,le=zt.length;Dt<le;Dt++){var me=zt[Dt];Rt.push([me,Dt])}Rt.sort(q),Rt.length>8&&(Rt.length=8);for(var ke=j.morphAttributes,Dt=0,le=Rt.length;Dt<le;Dt++){var me=Rt[Dt];if(v[Dt]=me[0],me[0]!==0){var De=me[1];ht.morphTargets===!0&&ke.position&&j.addAttribute("morphTarget"+Dt,ke.position[De]),ht.morphNormals===!0&&ke.normal&&j.addAttribute("morphNormal"+Dt,ke.normal[De])}else ht.morphTargets===!0&&j.removeAttribute("morphTarget"+Dt),ht.morphNormals===!0&&j.removeAttribute("morphNormal"+Dt)}for(var Dt=Rt.length,Ee=v.length;Dt<Ee;Dt++)v[Dt]=0;Qt.getUniforms().setValue(W,"morphTargetInfluences",v),yt=!0}var De=j.index,hn=j.attributes.position,Ot=1;ht.wireframe===!0&&(De=Ut.getWireframeAttribute(j),Ot=2);var pn;De!==null?(pn=O,pn.setIndex(De)):pn=fe,yt&&(he(ht,Qt,j),De!==null&&W.bindBuffer(W.ELEMENT_ARRAY_BUFFER,Ut.getAttributeBuffer(De)));var _i=0;De!==null?_i=De.count:hn!==void 0&&(_i=hn.count);var Xf=j.drawRange.start*Ot,Mg=j.drawRange.count*Ot,qf=Mt!==null?Mt.start*Ot:0,bg=Mt!==null?Mt.count*Ot:1/0,tu=Math.max(Xf,qf),wg=Math.min(_i,Xf+Mg,qf+bg)-1,eu=Math.max(0,wg-tu+1);if(eu!==0){if(et.isMesh)if(ht.wireframe===!0)bt.setLineWidth(ht.wireframeLinewidth*Wt()),pn.setMode(W.LINES);else switch(et.drawMode){case Cf:pn.setMode(W.TRIANGLES);break;case jv:pn.setMode(W.TRIANGLE_STRIP);break;case $v:pn.setMode(W.TRIANGLE_FAN);break}else if(et.isLine){var nu=ht.linewidth;nu===void 0&&(nu=1),bt.setLineWidth(nu*Wt()),et.isLineSegments?pn.setMode(W.LINES):pn.setMode(W.LINE_STRIP)}else et.isPoints&&pn.setMode(W.POINTS);j&&j.isInstancedBufferGeometry?j.maxInstancedCount>0&&pn.renderInstances(j,tu,eu):pn.render(tu,eu)}};function he(A,F,j,ht){var et;if(j&&j.isInstancedBufferGeometry&&(et=vt.get("ANGLE_instanced_arrays"),et===null)){console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}ht===void 0&&(ht=0),bt.initAttributes();var Mt=j.attributes,Qt=F.getAttributes(),yt=A.defaultAttributeValues;for(var jt in Qt){var zt=Qt[jt];if(zt>=0){var Rt=Mt[jt];if(Rt!==void 0){var Dt=Rt.normalized,le=Rt.itemSize,me=Ut.getAttributeProperties(Rt),ke=me.__webglBuffer,Ee=me.type,De=me.bytesPerElement;if(Rt.isInterleavedBufferAttribute){var hn=Rt.data,Ot=hn.stride,pn=Rt.offset;hn&&hn.isInstancedInterleavedBuffer?(bt.enableAttributeAndDivisor(zt,hn.meshPerAttribute,et),j.maxInstancedCount===void 0&&(j.maxInstancedCount=hn.meshPerAttribute*hn.count)):bt.enableAttribute(zt),W.bindBuffer(W.ARRAY_BUFFER,ke),W.vertexAttribPointer(zt,le,Ee,Dt,Ot*De,(ht*Ot+pn)*De)}else Rt.isInstancedBufferAttribute?(bt.enableAttributeAndDivisor(zt,Rt.meshPerAttribute,et),j.maxInstancedCount===void 0&&(j.maxInstancedCount=Rt.meshPerAttribute*Rt.count)):bt.enableAttribute(zt),W.bindBuffer(W.ARRAY_BUFFER,ke),W.vertexAttribPointer(zt,le,Ee,Dt,0,ht*le*De)}else if(yt!==void 0){var _i=yt[jt];if(_i!==void 0)switch(_i.length){case 2:W.vertexAttrib2fv(zt,_i);break;case 3:W.vertexAttrib3fv(zt,_i);break;case 4:W.vertexAttrib4fv(zt,_i);break;default:W.vertexAttrib1fv(zt,_i)}}}}bt.disableUnusedAttributes()}function q(A,F){return Math.abs(F[0])-Math.abs(A[0])}function rt(A,F){return A.object.renderOrder!==F.object.renderOrder?A.object.renderOrder-F.object.renderOrder:A.material.program&&F.material.program&&A.material.program!==F.material.program?A.material.program.id-F.material.program.id:A.material.id!==F.material.id?A.material.id-F.material.id:A.z!==F.z?A.z-F.z:A.id-F.id}function lt(A,F){return A.object.renderOrder!==F.object.renderOrder?A.object.renderOrder-F.object.renderOrder:A.z!==F.z?F.z-A.z:A.id-F.id}this.render=function(A,F,j,ht){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}S="",M=-1,E=null,A.autoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.updateMatrixWorld(),F.matrixWorldInverse.getInverse(F.matrixWorld),it.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),B.setFromMatrix(it),c.length=0,h=-1,d=-1,p.length=0,m.length=0,k=this.localClippingEnabled,X=Z.init(this.clippingPlanes,k,F),Ge(A,F),u.length=h+1,f.length=d+1,g.sortObjects===!0&&(u.sort(rt),f.sort(lt)),X&&Z.beginShadows(),ne(c),kt.render(A,F),pe(c,F),X&&Z.endShadows(),pt.calls=0,pt.vertices=0,pt.faces=0,pt.points=0,j===void 0&&(j=null),this.setRenderTarget(j);var et=A.background;if(et===null?bt.buffers.color.setClear(H.r,H.g,H.b,C,o):et&&et.isColor&&(bt.buffers.color.setClear(et.r,et.g,et.b,1,o),ht=!0),(this.autoClear||ht)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil),et&&et.isCubeTexture?(nt.projectionMatrix.copy(F.projectionMatrix),nt.matrixWorld.extractRotation(F.matrixWorld),nt.matrixWorldInverse.getInverse(nt.matrixWorld),xt.material.uniforms.tCube.value=et,xt.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,xt.matrixWorld),Ut.update(xt),g.renderBufferDirect(nt,null,xt.geometry,xt.material,xt,null)):et&&et.isTexture&&(ut.material.map=et,Ut.update(ut),g.renderBufferDirect(D,null,ut.geometry,ut.material,ut,null)),A.overrideMaterial){var Mt=A.overrideMaterial;Vn(u,A,F,Mt),Vn(f,A,F,Mt)}else bt.setBlending(go),Vn(u,A,F),Vn(f,A,F);$.render(A,F),dt.render(A,F,L),j&&Bt.updateRenderTargetMipmap(j),bt.setDepthTest(!0),bt.setDepthWrite(!0),bt.setColorWrite(!0)};function Et(A,F,j,ht,et){var Mt,Qt;j.transparent?(Mt=f,Qt=++d):(Mt=u,Qt=++h);var yt=Mt[Qt];yt!==void 0?(yt.id=A.id,yt.object=A,yt.geometry=F,yt.material=j,yt.z=Y.z,yt.group=et):(yt={id:A.id,object:A,geometry:F,material:j,z:Y.z,group:et},Mt.push(yt))}function It(A){var F=A.geometry;return F.boundingSphere===null&&F.computeBoundingSphere(),J.copy(F.boundingSphere).applyMatrix4(A.matrixWorld),Ie(J)}function de(A){return J.center.set(0,0,0),J.radius=.7071067811865476,J.applyMatrix4(A.matrixWorld),Ie(J)}function Ie(A){if(!B.intersectsSphere(A))return!1;var F=Z.numPlanes;if(F===0)return!0;var j=g.clippingPlanes,ht=A.center,et=-A.radius,Mt=0;do if(j[Mt].distanceToPoint(ht)<et)return!1;while(++Mt!==F);return!0}function Ge(A,F){if(A.visible!==!1){var j=(A.layers.mask&F.layers.mask)!==0;if(j){if(A.isLight)c.push(A);else if(A.isSprite)(A.frustumCulled===!1||de(A)===!0)&&p.push(A);else if(A.isLensFlare)m.push(A);else if(A.isImmediateRenderObject)g.sortObjects===!0&&(Y.setFromMatrixPosition(A.matrixWorld),Y.applyProjection(it)),Et(A,null,A.material,Y.z,null);else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.update(),A.frustumCulled===!1||It(A)===!0)){var ht=A.material;if(ht.visible===!0){g.sortObjects===!0&&(Y.setFromMatrixPosition(A.matrixWorld),Y.applyProjection(it));var et=Ut.update(A);if(ht.isMultiMaterial)for(var Mt=et.groups,Qt=ht.materials,yt=0,jt=Mt.length;yt<jt;yt++){var zt=Mt[yt],Rt=Qt[zt.materialIndex];Rt.visible===!0&&Et(A,et,Rt,Y.z,zt)}else Et(A,et,ht,Y.z,null)}}}for(var Dt=A.children,yt=0,jt=Dt.length;yt<jt;yt++)Ge(Dt[yt],F)}}function Vn(A,F,j,ht){for(var et=0,Mt=A.length;et<Mt;et++){var Qt=A[et],yt=Qt.object,jt=Qt.geometry,zt=ht===void 0?Qt.material:ht,Rt=Qt.group;if(yt.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,yt.matrixWorld),yt.normalMatrix.getNormalMatrix(yt.modelViewMatrix),yt.onBeforeRender(g,F,j,jt,zt,Rt),yt.isImmediateRenderObject){Hn(zt);var Dt=un(j,F.fog,zt,yt);S="",yt.render(function(le){g.renderBufferImmediate(le,Dt,zt)})}else g.renderBufferDirect(j,F.fog,jt,zt,yt,Rt);yt.onAfterRender(g,F,j,jt,zt,Rt)}}function Me(A,F,j){var ht=Jt.get(A),et=Nt.getParameters(A,st,F,Z.numPlanes,Z.numIntersection,j),Mt=Nt.getProgramCode(A,et),Qt=ht.program,yt=!0;if(Qt===void 0)A.addEventListener("dispose",Tt);else if(Qt.code!==Mt)qt(A);else{if(et.shaderID!==void 0)return;yt=!1}if(yt){if(et.shaderID){var jt=as[et.shaderID];ht.__webglShader={name:A.type,uniforms:mn.clone(jt.uniforms),vertexShader:jt.vertexShader,fragmentShader:jt.fragmentShader}}else ht.__webglShader={name:A.type,uniforms:A.uniforms,vertexShader:A.vertexShader,fragmentShader:A.fragmentShader};A.__webglShader=ht.__webglShader,Qt=Nt.acquireProgram(A,et,Mt),ht.program=Qt,A.program=Qt}var zt=Qt.getAttributes();if(A.morphTargets){A.numSupportedMorphTargets=0;for(var Rt=0;Rt<g.maxMorphTargets;Rt++)zt["morphTarget"+Rt]>=0&&A.numSupportedMorphTargets++}if(A.morphNormals){A.numSupportedMorphNormals=0;for(var Rt=0;Rt<g.maxMorphNormals;Rt++)zt["morphNormal"+Rt]>=0&&A.numSupportedMorphNormals++}var Dt=ht.__webglShader.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ht.numClippingPlanes=Z.numPlanes,ht.numIntersection=Z.numIntersection,Dt.clippingPlanes=Z.uniform),ht.fog=F,ht.lightsHash=st.hash,A.lights&&(Dt.ambientLightColor.value=st.ambient,Dt.directionalLights.value=st.directional,Dt.spotLights.value=st.spot,Dt.rectAreaLights.value=st.rectArea,Dt.pointLights.value=st.point,Dt.hemisphereLights.value=st.hemi,Dt.directionalShadowMap.value=st.directionalShadowMap,Dt.directionalShadowMatrix.value=st.directionalShadowMatrix,Dt.spotShadowMap.value=st.spotShadowMap,Dt.spotShadowMatrix.value=st.spotShadowMatrix,Dt.pointShadowMap.value=st.pointShadowMap,Dt.pointShadowMatrix.value=st.pointShadowMatrix);var le=ht.program.getUniforms(),me=pr.seqWithValue(le.seq,Dt);ht.uniformsList=me}function Hn(A){A.side===Ws?bt.disable(W.CULL_FACE):bt.enable(W.CULL_FACE),bt.setFlipSided(A.side===fr),A.transparent===!0?bt.setBlending(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha):bt.setBlending(go),bt.setDepthFunc(A.depthFunc),bt.setDepthTest(A.depthTest),bt.setDepthWrite(A.depthWrite),bt.setColorWrite(A.colorWrite),bt.setPolygonOffset(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits)}function un(A,F,j,ht){G=0;var et=Jt.get(j);if(X&&(k||A!==E)){var Mt=A===E&&j.id===M;Z.setState(j.clippingPlanes,j.clipIntersection,j.clipShadows,A,et,Mt)}j.needsUpdate===!1&&(et.program===void 0||j.fog&&et.fog!==F||j.lights&&et.lightsHash!==st.hash||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Z.numPlanes||et.numIntersection!==Z.numIntersection))&&(j.needsUpdate=!0),j.needsUpdate&&(Me(j,F,ht),j.needsUpdate=!1);var Qt=!1,yt=!1,jt=!1,zt=et.program,Rt=zt.getUniforms(),Dt=et.__webglShader.uniforms;if(zt.id!==y&&(W.useProgram(zt.program),y=zt.id,Qt=!0,yt=!0,jt=!0),j.id!==M&&(M=j.id,yt=!0),Qt||A!==E){if(Rt.set(W,A,"projectionMatrix"),Xt.logarithmicDepthBuffer&&Rt.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),A!==E&&(E=A,yt=!0,jt=!0),j.isShaderMaterial||j.isMeshPhongMaterial||j.isMeshStandardMaterial||j.envMap){var le=Rt.map.cameraPosition;le!==void 0&&le.setValue(W,Y.setFromMatrixPosition(A.matrixWorld))}(j.isMeshPhongMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial||j.skinning)&&Rt.setValue(W,"viewMatrix",A.matrixWorldInverse),Rt.set(W,g,"toneMappingExposure"),Rt.set(W,g,"toneMappingWhitePoint")}if(j.skinning){Rt.setOptional(W,ht,"bindMatrix"),Rt.setOptional(W,ht,"bindMatrixInverse");var me=ht.skeleton;me&&(Xt.floatVertexTextures&&me.useVertexTexture?(Rt.set(W,me,"boneTexture"),Rt.set(W,me,"boneTextureWidth"),Rt.set(W,me,"boneTextureHeight")):Rt.setOptional(W,me,"boneMatrices"))}return yt&&(j.lights&&ie(Dt,jt),F&&j.fog&&P(Dt,F),(j.isMeshBasicMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial||j.isMeshStandardMaterial||j.isMeshNormalMaterial||j.isMeshDepthMaterial)&&_c(Dt,j),j.isLineBasicMaterial?yc(Dt,j):j.isLineDashedMaterial?(yc(Dt,j),Kl(Dt,j)):j.isPointsMaterial?Ql(Dt,j):j.isMeshLambertMaterial?tt(Dt,j):j.isMeshToonMaterial?K(Dt,j):j.isMeshPhongMaterial?at(Dt,j):j.isMeshPhysicalMaterial?Ht(Dt,j):j.isMeshStandardMaterial?ct(Dt,j):j.isMeshDepthMaterial?j.displacementMap&&(Dt.displacementMap.value=j.displacementMap,Dt.displacementScale.value=j.displacementScale,Dt.displacementBias.value=j.displacementBias):j.isMeshNormalMaterial&&$t(Dt,j),Dt.ltcMat!==void 0&&(Dt.ltcMat.value=THREE.UniformsLib.LTC_MAT_TEXTURE),Dt.ltcMag!==void 0&&(Dt.ltcMag.value=THREE.UniformsLib.LTC_MAG_TEXTURE),pr.upload(W,et.uniformsList,Dt,g)),Rt.set(W,ht,"modelViewMatrix"),Rt.set(W,ht,"normalMatrix"),Rt.setValue(W,"modelMatrix",ht.matrixWorld),zt}function _c(A,F){A.opacity.value=F.opacity,A.diffuse.value=F.color,F.emissive&&A.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity),A.map.value=F.map,A.specularMap.value=F.specularMap,A.alphaMap.value=F.alphaMap,F.lightMap&&(A.lightMap.value=F.lightMap,A.lightMapIntensity.value=F.lightMapIntensity),F.aoMap&&(A.aoMap.value=F.aoMap,A.aoMapIntensity.value=F.aoMapIntensity);var j;if(F.map?j=F.map:F.specularMap?j=F.specularMap:F.displacementMap?j=F.displacementMap:F.normalMap?j=F.normalMap:F.bumpMap?j=F.bumpMap:F.roughnessMap?j=F.roughnessMap:F.metalnessMap?j=F.metalnessMap:F.alphaMap?j=F.alphaMap:F.emissiveMap&&(j=F.emissiveMap),j!==void 0){j.isWebGLRenderTarget&&(j=j.texture);var ht=j.offset,et=j.repeat;A.offsetRepeat.value.set(ht.x,ht.y,et.x,et.y)}A.envMap.value=F.envMap,A.flipEnvMap.value=F.envMap&&F.envMap.isCubeTexture?-1:1,A.reflectivity.value=F.reflectivity,A.refractionRatio.value=F.refractionRatio}function yc(A,F){A.diffuse.value=F.color,A.opacity.value=F.opacity}function Kl(A,F){A.dashSize.value=F.dashSize,A.totalSize.value=F.dashSize+F.gapSize,A.scale.value=F.scale}function Ql(A,F){if(A.diffuse.value=F.color,A.opacity.value=F.opacity,A.size.value=F.size*N,A.scale.value=R*.5,A.map.value=F.map,F.map!==null){var j=F.map.offset,ht=F.map.repeat;A.offsetRepeat.value.set(j.x,j.y,ht.x,ht.y)}}function P(A,F){A.fogColor.value=F.color,F.isFog?(A.fogNear.value=F.near,A.fogFar.value=F.far):F.isFogExp2&&(A.fogDensity.value=F.density)}function tt(A,F){F.emissiveMap&&(A.emissiveMap.value=F.emissiveMap)}function at(A,F){A.specular.value=F.specular,A.shininess.value=Math.max(F.shininess,1e-4),F.emissiveMap&&(A.emissiveMap.value=F.emissiveMap),F.bumpMap&&(A.bumpMap.value=F.bumpMap,A.bumpScale.value=F.bumpScale),F.normalMap&&(A.normalMap.value=F.normalMap,A.normalScale.value.copy(F.normalScale)),F.displacementMap&&(A.displacementMap.value=F.displacementMap,A.displacementScale.value=F.displacementScale,A.displacementBias.value=F.displacementBias)}function K(A,F){at(A,F),F.gradientMap&&(A.gradientMap.value=F.gradientMap)}function ct(A,F){A.roughness.value=F.roughness,A.metalness.value=F.metalness,F.roughnessMap&&(A.roughnessMap.value=F.roughnessMap),F.metalnessMap&&(A.metalnessMap.value=F.metalnessMap),F.emissiveMap&&(A.emissiveMap.value=F.emissiveMap),F.bumpMap&&(A.bumpMap.value=F.bumpMap,A.bumpScale.value=F.bumpScale),F.normalMap&&(A.normalMap.value=F.normalMap,A.normalScale.value.copy(F.normalScale)),F.displacementMap&&(A.displacementMap.value=F.displacementMap,A.displacementScale.value=F.displacementScale,A.displacementBias.value=F.displacementBias),F.envMap&&(A.envMapIntensity.value=F.envMapIntensity)}function Ht(A,F){A.clearCoat.value=F.clearCoat,A.clearCoatRoughness.value=F.clearCoatRoughness,ct(A,F)}function $t(A,F){F.bumpMap&&(A.bumpMap.value=F.bumpMap,A.bumpScale.value=F.bumpScale),F.normalMap&&(A.normalMap.value=F.normalMap,A.normalScale.value.copy(F.normalScale)),F.displacementMap&&(A.displacementMap.value=F.displacementMap,A.displacementScale.value=F.displacementScale,A.displacementBias.value=F.displacementBias)}function ie(A,F){A.ambientLightColor.needsUpdate=F,A.directionalLights.needsUpdate=F,A.pointLights.needsUpdate=F,A.spotLights.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function ne(A){for(var F=0,j=0,ht=A.length;j<ht;j++){var et=A[j];et.castShadow&&(st.shadows[F++]=et)}st.shadows.length=F}function pe(A,F){var j,ht,et,Mt=0,Qt=0,yt=0,jt,zt,Rt,Dt,le=F.matrixWorldInverse,me=0,ke=0,Ee=0,De=0,hn=0;for(j=0,ht=A.length;j<ht;j++)if(et=A[j],jt=et.color,zt=et.intensity,Rt=et.distance,Dt=et.shadow&&et.shadow.map?et.shadow.map.texture:null,et.isAmbientLight)Mt+=jt.r*zt,Qt+=jt.g*zt,yt+=jt.b*zt;else if(et.isDirectionalLight){var Ot=ee.get(et);Ot.color.copy(et.color).multiplyScalar(et.intensity),Ot.direction.setFromMatrixPosition(et.matrixWorld),Y.setFromMatrixPosition(et.target.matrixWorld),Ot.direction.sub(Y),Ot.direction.transformDirection(le),Ot.shadow=et.castShadow,et.castShadow&&(Ot.shadowBias=et.shadow.bias,Ot.shadowRadius=et.shadow.radius,Ot.shadowMapSize=et.shadow.mapSize),st.directionalShadowMap[me]=Dt,st.directionalShadowMatrix[me]=et.shadow.matrix,st.directional[me++]=Ot}else if(et.isSpotLight){var Ot=ee.get(et);Ot.position.setFromMatrixPosition(et.matrixWorld),Ot.position.applyMatrix4(le),Ot.color.copy(jt).multiplyScalar(zt),Ot.distance=Rt,Ot.direction.setFromMatrixPosition(et.matrixWorld),Y.setFromMatrixPosition(et.target.matrixWorld),Ot.direction.sub(Y),Ot.direction.transformDirection(le),Ot.coneCos=Math.cos(et.angle),Ot.penumbraCos=Math.cos(et.angle*(1-et.penumbra)),Ot.decay=et.distance===0?0:et.decay,Ot.shadow=et.castShadow,et.castShadow&&(Ot.shadowBias=et.shadow.bias,Ot.shadowRadius=et.shadow.radius,Ot.shadowMapSize=et.shadow.mapSize),st.spotShadowMap[Ee]=Dt,st.spotShadowMatrix[Ee]=et.shadow.matrix,st.spot[Ee++]=Ot}else if(et.isRectAreaLight){var Ot=ee.get(et);Ot.color.copy(jt).multiplyScalar(zt/(et.width*et.height)),Ot.position.setFromMatrixPosition(et.matrixWorld),Ot.position.applyMatrix4(le),ft.identity(),gt.copy(et.matrixWorld),gt.premultiply(le),ft.extractRotation(gt),Ot.halfWidth.set(et.width*.5,0,0),Ot.halfHeight.set(0,et.height*.5,0),Ot.halfWidth.applyMatrix4(ft),Ot.halfHeight.applyMatrix4(ft),st.rectArea[De++]=Ot}else if(et.isPointLight){var Ot=ee.get(et);Ot.position.setFromMatrixPosition(et.matrixWorld),Ot.position.applyMatrix4(le),Ot.color.copy(et.color).multiplyScalar(et.intensity),Ot.distance=et.distance,Ot.decay=et.distance===0?0:et.decay,Ot.shadow=et.castShadow,et.castShadow&&(Ot.shadowBias=et.shadow.bias,Ot.shadowRadius=et.shadow.radius,Ot.shadowMapSize=et.shadow.mapSize),st.pointShadowMap[ke]=Dt,st.pointShadowMatrix[ke]===void 0&&(st.pointShadowMatrix[ke]=new Yt),Y.setFromMatrixPosition(et.matrixWorld).negate(),st.pointShadowMatrix[ke].identity().setPosition(Y),st.point[ke++]=Ot}else if(et.isHemisphereLight){var Ot=ee.get(et);Ot.direction.setFromMatrixPosition(et.matrixWorld),Ot.direction.transformDirection(le),Ot.direction.normalize(),Ot.skyColor.copy(et.color).multiplyScalar(zt),Ot.groundColor.copy(et.groundColor).multiplyScalar(zt),st.hemi[hn++]=Ot}st.ambient[0]=Mt,st.ambient[1]=Qt,st.ambient[2]=yt,st.directional.length=me,st.spot.length=Ee,st.rectArea.length=De,st.point.length=ke,st.hemi.length=hn,st.hash=me+","+ke+","+Ee+","+De+","+hn+","+st.shadows.length}this.setFaceCulling=function(A,F){bt.setCullFace(A),bt.setFlipSided(F===cv)};function ce(){var A=G;return A>=Xt.maxTextures&&console.warn("WebGLRenderer: trying to use "+A+" texture units while this GPU supports only "+Xt.maxTextures),G+=1,A}this.allocTextureUnit=ce,this.setTexture2D=function(){var A=!1;return function(j,ht){j&&j.isWebGLRenderTarget&&(A||(console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),A=!0),j=j.texture),Bt.setTexture2D(j,ht)}}(),this.setTexture=function(){var A=!1;return function(j,ht){A||(console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),A=!0),Bt.setTexture2D(j,ht)}}(),this.setTextureCube=function(){var A=!1;return function(j,ht){j&&j.isWebGLRenderTargetCube&&(A||(console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),A=!0),j=j.texture),j&&j.isCubeTexture||Array.isArray(j.image)&&j.image.length===6?Bt.setTextureCube(j,ht):Bt.setTextureCubeDynamic(j,ht)}}(),this.getCurrentRenderTarget=function(){return _},this.setRenderTarget=function(A){_=A,A&&Jt.get(A).__webglFramebuffer===void 0&&Bt.setupRenderTarget(A);var F=A&&A.isWebGLRenderTargetCube,j;if(A){var ht=Jt.get(A);F?j=ht.__webglFramebuffer[A.activeCubeFace]:j=ht.__webglFramebuffer,b.copy(A.scissor),w=A.scissorTest,L.copy(A.viewport)}else j=null,b.copy(V).multiplyScalar(N),w=z,L.copy(I).multiplyScalar(N);if(x!==j&&(W.bindFramebuffer(W.FRAMEBUFFER,j),x=j),bt.scissor(b),bt.setScissorTest(w),bt.viewport(L),F){var et=Jt.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+A.activeCubeFace,et.__webglTexture,A.activeMipMapLevel)}},this.readRenderTargetPixels=function(A,F,j,ht,et,Mt){if((A&&A.isWebGLRenderTarget)===!1){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}var Qt=Jt.get(A).__webglFramebuffer;if(Qt){var yt=!1;Qt!==x&&(W.bindFramebuffer(W.FRAMEBUFFER,Qt),yt=!0);try{var jt=A.texture,zt=jt.format,Rt=jt.type;if(zt!==Si&&re(zt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt!==ll&&re(Rt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Rt===es&&(vt.get("OES_texture_float")||vt.get("WEBGL_color_buffer_float")))&&!(Rt===ul&&vt.get("EXT_color_buffer_half_float"))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W.checkFramebufferStatus(W.FRAMEBUFFER)===W.FRAMEBUFFER_COMPLETE?F>=0&&F<=A.width-ht&&j>=0&&j<=A.height-et&&W.readPixels(F,j,ht,et,re(zt),re(Rt),Mt):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{yt&&W.bindFramebuffer(W.FRAMEBUFFER,x)}}};function re(A){var F;if(A===Bi)return W.REPEAT;if(A===Un)return W.CLAMP_TO_EDGE;if(A===Yr)return W.MIRRORED_REPEAT;if(A===On)return W.NEAREST;if(A===jl)return W.NEAREST_MIPMAP_NEAREST;if(A===$l)return W.NEAREST_MIPMAP_LINEAR;if(A===wn)return W.LINEAR;if(A===Tf)return W.LINEAR_MIPMAP_NEAREST;if(A===pc)return W.LINEAR_MIPMAP_LINEAR;if(A===ll)return W.UNSIGNED_BYTE;if(A===zv)return W.UNSIGNED_SHORT_4_4_4_4;if(A===Bv)return W.UNSIGNED_SHORT_5_5_5_1;if(A===Gv)return W.UNSIGNED_SHORT_5_6_5;if(A===Uv)return W.BYTE;if(A===Ov)return W.SHORT;if(A===_o)return W.UNSIGNED_SHORT;if(A===Nv)return W.INT;if(A===Af)return W.UNSIGNED_INT;if(A===es)return W.FLOAT;if(A===ul&&(F=vt.get("OES_texture_half_float"),F!==null))return F.HALF_FLOAT_OES;if(A===kv)return W.ALPHA;if(A===ns)return W.RGB;if(A===Si)return W.RGBA;if(A===Vv)return W.LUMINANCE;if(A===Hv)return W.LUMINANCE_ALPHA;if(A===zr)return W.DEPTH_COMPONENT;if(A===is)return W.DEPTH_STENCIL;if(A===xf)return W.FUNC_ADD;if(A===hv)return W.FUNC_SUBTRACT;if(A===fv)return W.FUNC_REVERSE_SUBTRACT;if(A===dv)return W.ZERO;if(A===pv)return W.ONE;if(A===mv)return W.SRC_COLOR;if(A===vv)return W.ONE_MINUS_SRC_COLOR;if(A===Mf)return W.SRC_ALPHA;if(A===bf)return W.ONE_MINUS_SRC_ALPHA;if(A===gv)return W.DST_ALPHA;if(A===_v)return W.ONE_MINUS_DST_ALPHA;if(A===yv)return W.DST_COLOR;if(A===xv)return W.ONE_MINUS_DST_COLOR;if(A===Mv)return W.SRC_ALPHA_SATURATE;if((A===bh||A===wh||A===Sh||A===Eh)&&(F=vt.get("WEBGL_compressed_texture_s3tc"),F!==null)){if(A===bh)return F.COMPRESSED_RGB_S3TC_DXT1_EXT;if(A===wh)return F.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(A===Sh)return F.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(A===Eh)return F.COMPRESSED_RGBA_S3TC_DXT5_EXT}if((A===Th||A===Ah||A===Ch||A===Lh)&&(F=vt.get("WEBGL_compressed_texture_pvrtc"),F!==null)){if(A===Th)return F.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(A===Ah)return F.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(A===Ch)return F.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(A===Lh)return F.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(A===Wv&&(F=vt.get("WEBGL_compressed_texture_etc1"),F!==null))return F.COMPRESSED_RGB_ETC1_WEBGL;if((A===_h||A===yh)&&(F=vt.get("EXT_blend_minmax"),F!==null)){if(A===_h)return F.MIN_EXT;if(A===yh)return F.MAX_EXT}return A===yo&&(F=vt.get("WEBGL_depth_texture"),F!==null)?F.UNSIGNED_INT_24_8_WEBGL:0}}function os(e,t){this.name="",this.color=new Vt(e),this.density=t!==void 0?t:25e-5}os.prototype.isFogExp2=!0;os.prototype.clone=function(){return new os(this.color.getHex(),this.density)};os.prototype.toJSON=function(e){return{type:"FogExp2",color:this.color.getHex(),density:this.density}};function cs(e,t,n){this.name="",this.color=new Vt(e),this.near=t!==void 0?t:1,this.far=n!==void 0?n:1e3}cs.prototype.isFog=!0;cs.prototype.clone=function(){return new cs(this.color.getHex(),this.near,this.far)};cs.prototype.toJSON=function(e){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}};function Kr(){Pt.call(this),this.type="Scene",this.background=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0}Kr.prototype=Object.create(Pt.prototype);Kr.prototype.constructor=Kr;Kr.prototype.copy=function(e,t){return Pt.prototype.copy.call(this,e,t),e.background!==null&&(this.background=e.background.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this};Kr.prototype.toJSON=function(e){var t=Pt.prototype.toJSON.call(this,e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t};function Rh(e,t,n,i,r){Pt.call(this),this.lensFlares=[],this.positionScreen=new U,this.customUpdateCallback=void 0,e!==void 0&&this.add(e,t,n,i,r)}Rh.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Rh,isLensFlare:!0,copy:function(e){Pt.prototype.copy.call(this,e),this.positionScreen.copy(e.positionScreen),this.customUpdateCallback=e.customUpdateCallback;for(var t=0,n=e.lensFlares.length;t<n;t++)this.lensFlares.push(e.lensFlares[t]);return this},add:function(e,t,n,i,r,a){t===void 0&&(t=-1),n===void 0&&(n=0),a===void 0&&(a=1),r===void 0&&(r=new Vt(16777215)),i===void 0&&(i=Xs),n=Math.min(n,Math.max(0,n)),this.lensFlares.push({texture:e,size:t,distance:n,x:0,y:0,z:0,scale:1,rotation:0,opacity:a,color:r,blending:i})},updateLensFlares:function(){var e,t=this.lensFlares.length,n,i=-this.positionScreen.x*2,r=-this.positionScreen.y*2;for(e=0;e<t;e++)n=this.lensFlares[e],n.x=this.positionScreen.x+i*n.distance,n.y=this.positionScreen.y+r*n.distance,n.wantedRotation=n.x*Math.PI*.25,n.rotation+=(n.wantedRotation-n.rotation)*.25}});function Qr(e){ae.call(this),this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.rotation=0,this.fog=!1,this.lights=!1,this.setValues(e)}Qr.prototype=Object.create(ae.prototype);Qr.prototype.constructor=Qr;Qr.prototype.copy=function(e){return ae.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.rotation=e.rotation,this};function Ro(e){Pt.call(this),this.type="Sprite",this.material=e!==void 0?e:new Qr}Ro.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Ro,isSprite:!0,raycast:function(){var e=new U;return function(n,i){e.setFromMatrixPosition(this.matrixWorld);var r=n.ray.distanceSqToPoint(e),a=this.scale.x*this.scale.y/4;r>a||i.push({distance:Math.sqrt(r),point:this.position,face:null,object:this})}}(),clone:function(){return new this.constructor(this.material).copy(this)}});function Po(){Pt.call(this),this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}})}Po.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Po,copy:function(e){Pt.prototype.copy.call(this,e,!1);for(var t=e.levels,n=0,i=t.length;n<i;n++){var r=t[n];this.addLevel(r.object.clone(),r.distance)}return this},addLevel:function(e,t){t===void 0&&(t=0),t=Math.abs(t);for(var n=this.levels,i=0;i<n.length&&!(t<n[i].distance);i++);n.splice(i,0,{distance:t,object:e}),this.add(e)},getObjectForDistance:function(e){for(var t=this.levels,n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object},raycast:function(){var e=new U;return function(n,i){e.setFromMatrixPosition(this.matrixWorld);var r=n.ray.origin.distanceTo(e);this.getObjectForDistance(r).raycast(n,i)}}(),update:function(){var e=new U,t=new U;return function(i){var r=this.levels;if(r.length>1){e.setFromMatrixPosition(i.matrixWorld),t.setFromMatrixPosition(this.matrixWorld);var a=e.distanceTo(t);r[0].object.visible=!0;for(var s=1,o=r.length;s<o&&a>=r[s].distance;s++)r[s-1].object.visible=!1,r[s].object.visible=!0;for(;s<o;s++)r[s].object.visible=!1}}}(),toJSON:function(e){var t=Pt.prototype.toJSON.call(this,e);t.object.levels=[];for(var n=this.levels,i=0,r=n.length;i<r;i++){var a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance})}return t}});function fl(e,t,n){if(this.useVertexTexture=n!==void 0?n:!0,this.identityMatrix=new Yt,e=e||[],this.bones=e.slice(0),this.useVertexTexture){var i=Math.sqrt(this.bones.length*4);i=Kt.nextPowerOfTwo(Math.ceil(i)),i=Math.max(i,4),this.boneTextureWidth=i,this.boneTextureHeight=i,this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),this.boneTexture=new $r(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,Si,es)}else this.boneMatrices=new Float32Array(16*this.bones.length);if(t===void 0)this.calculateInverses();else if(this.bones.length===t.length)this.boneInverses=t.slice(0);else{console.warn("THREE.Skeleton bonInverses is the wrong length."),this.boneInverses=[];for(var r=0,a=this.bones.length;r<a;r++)this.boneInverses.push(new Yt)}}Object.assign(fl.prototype,{calculateInverses:function(){this.boneInverses=[];for(var e=0,t=this.bones.length;e<t;e++){var n=new Yt;this.bones[e]&&n.getInverse(this.bones[e].matrixWorld),this.boneInverses.push(n)}},pose:function(){for(var e,t=0,n=this.bones.length;t<n;t++)e=this.bones[t],e&&e.matrixWorld.getInverse(this.boneInverses[t]);for(var t=0,n=this.bones.length;t<n;t++)e=this.bones[t],e&&(e.parent&&e.parent.isBone?(e.matrix.getInverse(e.parent.matrixWorld),e.matrix.multiply(e.matrixWorld)):e.matrix.copy(e.matrixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale))},update:function(){var e=new Yt;return function(){for(var n=0,i=this.bones.length;n<i;n++){var r=this.bones[n]?this.bones[n].matrixWorld:this.identityMatrix;e.multiplyMatrices(r,this.boneInverses[n]),e.toArray(this.boneMatrices,n*16)}this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}(),clone:function(){return new fl(this.bones,this.boneInverses,this.useVertexTexture)}});function dl(){Pt.call(this),this.type="Bone"}dl.prototype=Object.assign(Object.create(Pt.prototype),{constructor:dl,isBone:!0});function pl(e,t,n){Ze.call(this,e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Yt,this.bindMatrixInverse=new Yt;var i=[];if(this.geometry&&this.geometry.bones!==void 0){for(var r,a,s=0,o=this.geometry.bones.length;s<o;++s)a=this.geometry.bones[s],r=new dl,i.push(r),r.name=a.name,r.position.fromArray(a.pos),r.quaternion.fromArray(a.rotq),a.scl!==void 0&&r.scale.fromArray(a.scl);for(var s=0,o=this.geometry.bones.length;s<o;++s)a=this.geometry.bones[s],a.parent!==-1&&a.parent!==null&&i[a.parent]!==void 0?i[a.parent].add(i[s]):this.add(i[s])}this.normalizeSkinWeights(),this.updateMatrixWorld(!0),this.bind(new fl(i,void 0,n),this.matrixWorld)}pl.prototype=Object.assign(Object.create(Ze.prototype),{constructor:pl,isSkinnedMesh:!0,bind:function(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.getInverse(t)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){if(this.geometry&&this.geometry.isGeometry)for(var e=0;e<this.geometry.skinWeights.length;e++){var t=this.geometry.skinWeights[e],n=1/t.lengthManhattan();n!==1/0?t.multiplyScalar(n):t.set(1,0,0,0)}else if(this.geometry&&this.geometry.isBufferGeometry)for(var i=new xe,r=this.geometry.attributes.skinWeight,e=0;e<r.count;e++){i.x=r.getX(e),i.y=r.getY(e),i.z=r.getZ(e),i.w=r.getW(e);var n=1/i.lengthManhattan();n!==1/0?i.multiplyScalar(n):i.set(1,0,0,0),r.setXYZW(e,i.x,i.y,i.z,i.w)}},updateMatrixWorld:function(e){Ze.prototype.updateMatrixWorld.call(this,!0),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.matrixWorld):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh unrecognized bindMode: "+this.bindMode)},clone:function(){return new this.constructor(this.geometry,this.material,this.skeleton.useVertexTexture).copy(this)}});function Oe(e){ae.call(this),this.type="LineBasicMaterial",this.color=new Vt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.lights=!1,this.setValues(e)}Oe.prototype=Object.create(ae.prototype);Oe.prototype.constructor=Oe;Oe.prototype.isLineBasicMaterial=!0;Oe.prototype.copy=function(e){return ae.prototype.copy.call(this,e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this};function Xi(e,t,n){if(n===1)return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),new Te(e,t);Pt.call(this),this.type="Line",this.geometry=e!==void 0?e:new Gt,this.material=t!==void 0?t:new Oe({color:Math.random()*16777215})}Xi.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Xi,isLine:!0,raycast:function(){var e=new Yt,t=new vr,n=new on;return function(r,a){var s=r.linePrecision,o=s*s,l=this.geometry,c=this.matrixWorld;if(l.boundingSphere===null&&l.computeBoundingSphere(),n.copy(l.boundingSphere),n.applyMatrix4(c),r.ray.intersectsSphere(n)!==!1){e.getInverse(c),t.copy(r.ray).applyMatrix4(e);var u=new U,h=new U,f=new U,d=new U,v=this&&this.isLineSegments?2:1;if(l.isBufferGeometry){var p=l.index,m=l.attributes,g=m.position.array;if(p!==null)for(var y=p.array,_=0,x=y.length-1;_<x;_+=v){var M=y[_],S=y[_+1];u.fromArray(g,M*3),h.fromArray(g,S*3);var E=t.distanceSqToSegment(u,h,d,f);if(!(E>o)){d.applyMatrix4(this.matrixWorld);var b=r.ray.origin.distanceTo(d);b<r.near||b>r.far||a.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else for(var _=0,x=g.length/3-1;_<x;_+=v){u.fromArray(g,3*_),h.fromArray(g,3*_+3);var E=t.distanceSqToSegment(u,h,d,f);if(!(E>o)){d.applyMatrix4(this.matrixWorld);var b=r.ray.origin.distanceTo(d);b<r.near||b>r.far||a.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}else if(l.isGeometry)for(var w=l.vertices,L=w.length,_=0;_<L-1;_+=v){var E=t.distanceSqToSegment(w[_],w[_+1],d,f);if(!(E>o)){d.applyMatrix4(this.matrixWorld);var b=r.ray.origin.distanceTo(d);b<r.near||b>r.far||a.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}});function Te(e,t){Xi.call(this,e,t),this.type="LineSegments"}Te.prototype=Object.assign(Object.create(Xi.prototype),{constructor:Te,isLineSegments:!0});function vi(e){ae.call(this),this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.size=1,this.sizeAttenuation=!0,this.lights=!1,this.setValues(e)}vi.prototype=Object.create(ae.prototype);vi.prototype.constructor=vi;vi.prototype.isPointsMaterial=!0;vi.prototype.copy=function(e){return ae.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this};function ls(e,t){Pt.call(this),this.type="Points",this.geometry=e!==void 0?e:new Gt,this.material=t!==void 0?t:new vi({color:Math.random()*16777215})}ls.prototype=Object.assign(Object.create(Pt.prototype),{constructor:ls,isPoints:!0,raycast:function(){var e=new Yt,t=new vr,n=new on;return function(r,a){var s=this,o=this.geometry,l=this.matrixWorld,c=r.params.Points.threshold;if(o.boundingSphere===null&&o.computeBoundingSphere(),n.copy(o.boundingSphere),n.applyMatrix4(l),r.ray.intersectsSphere(n)===!1)return;e.getInverse(l),t.copy(r.ray).applyMatrix4(e);var u=c/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=new U;function d(E,b){var w=t.distanceSqToPoint(E);if(w<h){var L=t.closestPointToPoint(E);L.applyMatrix4(l);var G=r.ray.origin.distanceTo(L);if(G<r.near||G>r.far)return;a.push({distance:G,distanceToRay:Math.sqrt(w),point:L.clone(),index:b,face:null,object:s})}}if(o.isBufferGeometry){var v=o.index,p=o.attributes,m=p.position.array;if(v!==null)for(var g=v.array,y=0,_=g.length;y<_;y++){var x=g[y];f.fromArray(m,x*3),d(f,x)}else for(var y=0,M=m.length/3;y<M;y++)f.fromArray(m,y*3),d(f,y)}else for(var S=o.vertices,y=0,M=S.length;y<M;y++)d(S[y],y)}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}});function Fo(){Pt.call(this),this.type="Group"}Fo.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Fo});function ml(e,t,n,i,r,a,s,o,l){Se.call(this,e,t,n,i,r,a,s,o,l),this.generateMipmaps=!1;var c=this;function u(){requestAnimationFrame(u),e.readyState>=e.HAVE_CURRENT_DATA&&(c.needsUpdate=!0)}u()}ml.prototype=Object.create(Se.prototype);ml.prototype.constructor=ml;function us(e,t,n,i,r,a,s,o,l,c,u,h){Se.call(this,null,a,s,o,l,c,i,r,u,h),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}us.prototype=Object.create(Se.prototype);us.prototype.constructor=us;us.prototype.isCompressedTexture=!0;function vl(e,t,n,i,r,a,s,o,l){Se.call(this,e,t,n,i,r,a,s,o,l),this.needsUpdate=!0}vl.prototype=Object.create(Se.prototype);vl.prototype.constructor=vl;function Io(e,t,n,i,r,a,s,o,l,c){if(c=c!==void 0?c:zr,c!==zr&&c!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===zr&&(n=_o),n===void 0&&c===is&&(n=yo),Se.call(this,null,i,r,a,s,o,c,n,l),this.image={width:e,height:t},this.magFilter=s!==void 0?s:On,this.minFilter=o!==void 0?o:On,this.flipY=!1,this.generateMipmaps=!1}Io.prototype=Object.create(Se.prototype);Io.prototype.constructor=Io;Io.prototype.isDepthTexture=!0;function hs(e){Gt.call(this);var t=[0,0],n={};function i(H,C){return H-C}var r=["a","b","c"];if(e&&e.isGeometry){for(var a=e.vertices,s=e.faces,o=0,l=new Uint32Array(6*s.length),c=0,u=s.length;c<u;c++)for(var h=s[c],f=0;f<3;f++){t[0]=h[r[f]],t[1]=h[r[(f+1)%3]],t.sort(i);var d=t.toString();n[d]===void 0&&(l[2*o]=t[0],l[2*o+1]=t[1],n[d]=!0,o++)}for(var v=new Float32Array(o*2*3),c=0,u=o;c<u;c++)for(var f=0;f<2;f++){var p=a[l[2*c+f]],m=6*c+3*f;v[m+0]=p.x,v[m+1]=p.y,v[m+2]=p.z}this.addAttribute("position",new St(v,3))}else if(e&&e.isBufferGeometry)if(e.index!==null){var g=e.index.array,a=e.attributes.position,y=e.groups,o=0;y.length===0&&e.addGroup(0,g.length);for(var l=new Uint32Array(2*g.length),_=0,x=y.length;_<x;++_)for(var M=y[_],S=M.start,E=M.count,c=S,b=S+E;c<b;c+=3)for(var f=0;f<3;f++){t[0]=g[c+f],t[1]=g[c+(f+1)%3],t.sort(i);var d=t.toString();n[d]===void 0&&(l[2*o]=t[0],l[2*o+1]=t[1],n[d]=!0,o++)}for(var v=new Float32Array(o*2*3),c=0,u=o;c<u;c++)for(var f=0;f<2;f++){var m=6*c+3*f,w=l[2*c+f];v[m+0]=a.getX(w),v[m+1]=a.getY(w),v[m+2]=a.getZ(w)}this.addAttribute("position",new St(v,3))}else{for(var a=e.attributes.position.array,o=a.length/3,L=o/3,v=new Float32Array(o*2*3),c=0,u=L;c<u;c++)for(var f=0;f<3;f++){var m=18*c+6*f,G=9*c+3*f;v[m+0]=a[G],v[m+1]=a[G+1],v[m+2]=a[G+2];var w=9*c+3*((f+1)%3);v[m+3]=a[w],v[m+4]=a[w+1],v[m+5]=a[w+2]}this.addAttribute("position",new St(v,3))}}hs.prototype=Object.create(Gt.prototype);hs.prototype.constructor=hs;function fs(e,t,n){Gt.call(this),this.type="ParametricBufferGeometry",this.parameters={func:e,slices:t,stacks:n};var i=[],r=[],a,s,o,l,c,u=t+1;for(a=0;a<=n;a++)for(c=a/n,s=0;s<=t;s++)l=s/t,o=e(l,c),i.push(o.x,o.y,o.z),r.push(l,c);var h=[],f,d,v,p;for(a=0;a<n;a++)for(s=0;s<t;s++)f=a*u+s,d=a*u+s+1,v=(a+1)*u+s+1,p=(a+1)*u+s,h.push(f,d,p),h.push(d,v,p);this.setIndex(new(h.length>65535?Wi:Hi)(h,1)),this.addAttribute("position",new oe(i,3)),this.addAttribute("uv",new oe(r,2)),this.computeVertexNormals()}fs.prototype=Object.create(Gt.prototype);fs.prototype.constructor=fs;function Uo(e,t,n){Zt.call(this),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n},this.fromBufferGeometry(new fs(e,t,n)),this.mergeVertices()}Uo.prototype=Object.create(Zt.prototype);Uo.prototype.constructor=Uo;function Tn(e,t,n,i){Gt.call(this),this.type="PolyhedronBufferGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i},n=n||1,i=i||0;var r=[],a=[];s(i),l(n),c(),this.addAttribute("position",new oe(r,3)),this.addAttribute("normal",new oe(r.slice(),3)),this.addAttribute("uv",new oe(a,2)),this.normalizeNormals(),this.boundingSphere=new on(new U,n);function s(g){for(var y=new U,_=new U,x=new U,M=0;M<t.length;M+=3)f(t[M+0],y),f(t[M+1],_),f(t[M+2],x),o(y,_,x,g)}function o(g,y,_,x){var M=Math.pow(2,x),S=[],E,b;for(E=0;E<=M;E++){S[E]=[];var w=g.clone().lerp(_,E/M),L=y.clone().lerp(_,E/M),G=M-E;for(b=0;b<=G;b++)b===0&&E===M?S[E][b]=w:S[E][b]=w.clone().lerp(L,b/G)}for(E=0;E<M;E++)for(b=0;b<2*(M-E)-1;b++){var H=Math.floor(b/2);b%2===0?(h(S[E][H+1]),h(S[E+1][H]),h(S[E][H])):(h(S[E][H+1]),h(S[E+1][H+1]),h(S[E+1][H]))}}function l(g){for(var y=new U,_=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(g),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function c(){for(var g=new U,y=0;y<r.length;y+=3){g.x=r[y+0],g.y=r[y+1],g.z=r[y+2];var _=p(g)/2/Math.PI+.5,x=m(g)/Math.PI+.5;a.push(_,1-x)}d(),u()}function u(){for(var g=0;g<a.length;g+=6){var y=a[g+0],_=a[g+2],x=a[g+4],M=Math.max(y,_,x),S=Math.min(y,_,x);M>.9&&S<.1&&(y<.2&&(a[g+0]+=1),_<.2&&(a[g+2]+=1),x<.2&&(a[g+4]+=1))}}function h(g){r.push(g.x,g.y,g.z)}function f(g,y){var _=g*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function d(){for(var g=new U,y=new U,_=new U,x=new U,M=new Ct,S=new Ct,E=new Ct,b=0,w=0;b<r.length;b+=9,w+=6){g.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),M.set(a[w+0],a[w+1]),S.set(a[w+2],a[w+3]),E.set(a[w+4],a[w+5]),x.copy(g).add(y).add(_).divideScalar(3);var L=p(x);v(M,w+0,g,L),v(S,w+2,y,L),v(E,w+4,_,L)}}function v(g,y,_,x){x<0&&g.x===1&&(a[y]=g.x-1),_.x===0&&_.z===0&&(a[y]=x/2/Math.PI+.5)}function p(g){return Math.atan2(g.z,-g.x)}function m(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}Tn.prototype=Object.create(Gt.prototype);Tn.prototype.constructor=Tn;function ds(e,t){var n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];Tn.call(this,n,i,e,t),this.type="TetrahedronBufferGeometry",this.parameters={radius:e,detail:t}}ds.prototype=Object.create(Tn.prototype);ds.prototype.constructor=ds;function Oo(e,t){Zt.call(this),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new ds(e,t)),this.mergeVertices()}Oo.prototype=Object.create(Zt.prototype);Oo.prototype.constructor=Oo;function ta(e,t){var n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];Tn.call(this,n,i,e,t),this.type="OctahedronBufferGeometry",this.parameters={radius:e,detail:t}}ta.prototype=Object.create(Tn.prototype);ta.prototype.constructor=ta;function No(e,t){Zt.call(this),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new ta(e,t)),this.mergeVertices()}No.prototype=Object.create(Zt.prototype);No.prototype.constructor=No;function ps(e,t){var n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];Tn.call(this,i,r,e,t),this.type="IcosahedronBufferGeometry",this.parameters={radius:e,detail:t}}ps.prototype=Object.create(Tn.prototype);ps.prototype.constructor=ps;function zo(e,t){Zt.call(this),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new ps(e,t)),this.mergeVertices()}zo.prototype=Object.create(Zt.prototype);zo.prototype.constructor=zo;function ms(e,t){var n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];Tn.call(this,r,a,e,t),this.type="DodecahedronBufferGeometry",this.parameters={radius:e,detail:t}}ms.prototype=Object.create(Tn.prototype);ms.prototype.constructor=ms;function Bo(e,t){Zt.call(this),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new ms(e,t)),this.mergeVertices()}Bo.prototype=Object.create(Zt.prototype);Bo.prototype.constructor=Bo;function Go(e,t,n,i){Zt.call(this),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i},this.fromBufferGeometry(new Tn(e,t,n,i)),this.mergeVertices()}Go.prototype=Object.create(Zt.prototype);Go.prototype.constructor=Go;function vs(e,t,n,i,r){Gt.call(this),this.type="TubeBufferGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r},t=t||64,n=n||1,i=i||8,r=r||!1;var a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;var s=new U,o=new U,l=new Ct,c,u,h=[],f=[],d=[],v=[];p(),this.setIndex(new(v.length>65535?Wi:Hi)(v,1)),this.addAttribute("position",new oe(h,3)),this.addAttribute("normal",new oe(f,3)),this.addAttribute("uv",new oe(d,2));function p(){for(c=0;c<t;c++)m(c);m(r===!1?t:0),y(),g()}function m(_){var x=e.getPointAt(_/t),M=a.normals[_],S=a.binormals[_];for(u=0;u<=i;u++){var E=u/i*Math.PI*2,b=Math.sin(E),w=-Math.cos(E);o.x=w*M.x+b*S.x,o.y=w*M.y+b*S.y,o.z=w*M.z+b*S.z,o.normalize(),f.push(o.x,o.y,o.z),s.x=x.x+n*o.x,s.y=x.y+n*o.y,s.z=x.z+n*o.z,h.push(s.x,s.y,s.z)}}function g(){for(u=1;u<=t;u++)for(c=1;c<=i;c++){var _=(i+1)*(u-1)+(c-1),x=(i+1)*u+(c-1),M=(i+1)*u+c,S=(i+1)*(u-1)+c;v.push(_,x,S),v.push(x,M,S)}}function y(){for(c=0;c<=t;c++)for(u=0;u<=i;u++)l.x=c/t,l.y=u/i,d.push(l.x,l.y)}}vs.prototype=Object.create(Gt.prototype);vs.prototype.constructor=vs;function ko(e,t,n,i,r,a){Zt.call(this),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r},a!==void 0&&console.warn("THREE.TubeGeometry: taper has been removed.");var s=new vs(e,t,n,i,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals,this.fromBufferGeometry(s),this.mergeVertices()}ko.prototype=Object.create(Zt.prototype);ko.prototype.constructor=ko;function gs(e,t,n,i,r,a){Gt.call(this),this.type="TorusKnotBufferGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},e=e||100,t=t||40,n=Math.floor(n)||64,i=Math.floor(i)||8,r=r||2,a=a||3;var s=(i+1)*(n+1),o=i*n*2*3,l=new St(new(o>65535?Uint32Array:Uint16Array)(o),1),c=new St(new Float32Array(s*3),3),u=new St(new Float32Array(s*3),3),h=new St(new Float32Array(s*2),2),f,d,v=0,p=0,m=new U,g=new U,y=new Ct,_=new U,x=new U,M=new U,S=new U,E=new U;for(f=0;f<=n;++f){var b=f/n*r*Math.PI*2;for(N(b,r,a,e,_),N(b+.01,r,a,e,x),S.subVectors(x,_),E.addVectors(x,_),M.crossVectors(S,E),E.crossVectors(M,S),M.normalize(),E.normalize(),d=0;d<=i;++d){var w=d/i*Math.PI*2,L=-t*Math.cos(w),G=t*Math.sin(w);m.x=_.x+(L*E.x+G*M.x),m.y=_.y+(L*E.y+G*M.y),m.z=_.z+(L*E.z+G*M.z),c.setXYZ(v,m.x,m.y,m.z),g.subVectors(m,_).normalize(),u.setXYZ(v,g.x,g.y,g.z),y.x=f/n,y.y=d/i,h.setXY(v,y.x,y.y),v++}}for(d=1;d<=n;d++)for(f=1;f<=i;f++){var H=(i+1)*(d-1)+(f-1),C=(i+1)*d+(f-1),T=(i+1)*d+f,R=(i+1)*(d-1)+f;l.setX(p,H),p++,l.setX(p,C),p++,l.setX(p,R),p++,l.setX(p,C),p++,l.setX(p,T),p++,l.setX(p,R),p++}this.setIndex(l),this.addAttribute("position",c),this.addAttribute("normal",u),this.addAttribute("uv",h);function N(V,z,I,B,Z){var X=Math.cos(V),k=Math.sin(V),J=I/z*V,it=Math.cos(J);Z.x=B*(2+it)*.5*X,Z.y=B*(2+it)*k*.5,Z.z=B*Math.sin(J)*.5}}gs.prototype=Object.create(Gt.prototype);gs.prototype.constructor=gs;function Vo(e,t,n,i,r,a,s){Zt.call(this),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},s!==void 0&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),this.fromBufferGeometry(new gs(e,t,n,i,r,a)),this.mergeVertices()}Vo.prototype=Object.create(Zt.prototype);Vo.prototype.constructor=Vo;function _s(e,t,n,i,r){Gt.call(this),this.type="TorusBufferGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},e=e||100,t=t||40,n=Math.floor(n)||8,i=Math.floor(i)||6,r=r||Math.PI*2;var a=(n+1)*(i+1),s=n*i*2*3,o=new(s>65535?Uint32Array:Uint16Array)(s),l=new Float32Array(a*3),c=new Float32Array(a*3),u=new Float32Array(a*2),h=0,f=0,d=0,v=new U,p=new U,m=new U,g,y;for(g=0;g<=n;g++)for(y=0;y<=i;y++){var _=y/i*r,x=g/n*Math.PI*2;p.x=(e+t*Math.cos(x))*Math.cos(_),p.y=(e+t*Math.cos(x))*Math.sin(_),p.z=t*Math.sin(x),l[h]=p.x,l[h+1]=p.y,l[h+2]=p.z,v.x=e*Math.cos(_),v.y=e*Math.sin(_),m.subVectors(p,v).normalize(),c[h]=m.x,c[h+1]=m.y,c[h+2]=m.z,u[f]=y/i,u[f+1]=g/n,h+=3,f+=2}for(g=1;g<=n;g++)for(y=1;y<=i;y++){var M=(i+1)*g+y-1,S=(i+1)*(g-1)+y-1,E=(i+1)*(g-1)+y,b=(i+1)*g+y;o[d]=M,o[d+1]=S,o[d+2]=b,o[d+3]=S,o[d+4]=E,o[d+5]=b,d+=6}this.setIndex(new St(o,1)),this.addAttribute("position",new St(l,3)),this.addAttribute("normal",new St(c,3)),this.addAttribute("uv",new St(u,2))}_s.prototype=Object.create(Gt.prototype);_s.prototype.constructor=_s;function Ho(e,t,n,i,r){Zt.call(this),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},this.fromBufferGeometry(new _s(e,t,n,i,r))}Ho.prototype=Object.create(Zt.prototype);Ho.prototype.constructor=Ho;var Qe={area:function(e){for(var t=e.length,n=0,i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5},triangulate:function(){function e(t,n,i,r,a,s){var o,l,c,u,h,f,d,v,p;if(l=t[s[n]].x,c=t[s[n]].y,u=t[s[i]].x,h=t[s[i]].y,f=t[s[r]].x,d=t[s[r]].y,(u-l)*(d-c)-(h-c)*(f-l)<=0)return!1;var m,g,y,_,x,M,S,E,b,w,L,G,H,C,T;for(m=f-u,g=d-h,y=l-f,_=c-d,x=u-l,M=h-c,o=0;o<a;o++)if(v=t[s[o]].x,p=t[s[o]].y,!(v===l&&p===c||v===u&&p===h||v===f&&p===d)&&(S=v-l,E=p-c,b=v-u,w=p-h,L=v-f,G=p-d,T=m*w-g*b,H=x*E-M*S,C=y*G-_*L,T>=-Number.EPSILON&&C>=-Number.EPSILON&&H>=-Number.EPSILON))return!1;return!0}return function(n,i){var r=n.length;if(r<3)return null;var a=[],s=[],o=[],l,c,u;if(Qe.area(n)>0)for(c=0;c<r;c++)s[c]=c;else for(c=0;c<r;c++)s[c]=r-1-c;var h=r,f=2*h;for(c=h-1;h>2;){if(f--<=0)return console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()"),i?o:a;if(l=c,h<=l&&(l=0),c=l+1,h<=c&&(c=0),u=c+1,h<=u&&(u=0),e(n,l,c,u,h,s)){var d,v,p,m,g;for(d=s[l],v=s[c],p=s[u],a.push([n[d],n[v],n[p]]),o.push([s[l],s[c],s[u]]),m=c,g=c+1;g<h;m++,g++)s[m]=s[g];h--,f=2*h}}return i?o:a}}(),triangulateShape:function(e,t){function n(_){var x=_.length;x>2&&_[x-1].equals(_[0])&&_.pop()}n(e),t.forEach(n);function i(_,x,M){return _.x!==x.x?_.x<x.x?_.x<=M.x&&M.x<=x.x:x.x<=M.x&&M.x<=_.x:_.y<x.y?_.y<=M.y&&M.y<=x.y:x.y<=M.y&&M.y<=_.y}function r(_,x,M,S,E){var b=x.x-_.x,w=x.y-_.y,L=S.x-M.x,G=S.y-M.y,H=_.x-M.x,C=_.y-M.y,T=w*L-b*G,R=w*H-b*C;if(Math.abs(T)>Number.EPSILON){var N;if(T>0){if(R<0||R>T)return[];if(N=G*H-L*C,N<0||N>T)return[]}else{if(R>0||R<T)return[];if(N=G*H-L*C,N>0||N<T)return[]}if(N===0)return E&&(R===0||R===T)?[]:[_];if(N===T)return E&&(R===0||R===T)?[]:[x];if(R===0)return[M];if(R===T)return[S];var V=N/T;return[{x:_.x+V*b,y:_.y+V*w}]}else{if(R!==0||G*H!==L*C)return[];var z=b===0&&w===0,I=L===0&&G===0;if(z&&I)return _.x!==M.x||_.y!==M.y?[]:[_];if(z)return i(M,S,_)?[_]:[];if(I)return i(_,x,M)?[M]:[];var B,Z,X,k,J,it,Y,gt;return b!==0?(_.x<x.x?(B=_,X=_.x,Z=x,k=x.x):(B=x,X=x.x,Z=_,k=_.x),M.x<S.x?(J=M,Y=M.x,it=S,gt=S.x):(J=S,Y=S.x,it=M,gt=M.x)):(_.y<x.y?(B=_,X=_.y,Z=x,k=x.y):(B=x,X=x.y,Z=_,k=_.y),M.y<S.y?(J=M,Y=M.y,it=S,gt=S.y):(J=S,Y=S.y,it=M,gt=M.y)),X<=Y?k<Y?[]:k===Y?E?[]:[J]:k<=gt?[J,Z]:[J,it]:X>gt?[]:X===gt?E?[]:[B]:k<=gt?[B,Z]:[B,it]}}function a(_,x,M,S){var E=x.x-_.x,b=x.y-_.y,w=M.x-_.x,L=M.y-_.y,G=S.x-_.x,H=S.y-_.y,C=E*L-b*w,T=E*H-b*G;if(Math.abs(C)>Number.EPSILON){var R=G*L-H*w;return C>0?T>=0&&R>=0:T>=0||R>=0}else return T>0}function s(_,x){var M=_.concat(),S;function E(gt,ft){var st=M.length-1,pt=gt-1;pt<0&&(pt=st);var W=gt+1;W>st&&(W=0);var Ft=a(M[gt],M[pt],M[W],S[ft]);if(!Ft)return!1;var vt=S.length-1,Xt=ft-1;Xt<0&&(Xt=vt);var bt=ft+1;return bt>vt&&(bt=0),Ft=a(S[ft],S[Xt],S[bt],M[gt]),!!Ft}function b(gt,ft){var st,pt,W;for(st=0;st<M.length;st++)if(pt=st+1,pt%=M.length,W=r(gt,ft,M[st],M[pt],!0),W.length>0)return!0;return!1}var w=[];function L(gt,ft){var st,pt,W,Ft,vt;for(st=0;st<w.length;st++)for(pt=x[w[st]],W=0;W<pt.length;W++)if(Ft=W+1,Ft%=pt.length,vt=r(gt,ft,pt[W],pt[Ft],!0),vt.length>0)return!0;return!1}for(var G,H,C,T,R,N,V=[],z,I,B,Z,X=0,k=x.length;X<k;X++)w.push(X);for(var J=0,it=w.length*2;w.length>0;){if(it--,it<0){console.log("Infinite Loop! Holes left:"+w.length+", Probably Hole outside Shape!");break}for(H=J;H<M.length;H++){C=M[H],G=-1;for(var X=0;X<w.length;X++)if(R=w[X],N=C.x+":"+C.y+":"+R,V[N]===void 0){S=x[R];for(var Y=0;Y<S.length;Y++)if(T=S[Y],!!E(H,Y)&&!b(C,T)&&!L(C,T)){G=Y,w.splice(X,1),z=M.slice(0,H+1),I=M.slice(H),B=S.slice(G),Z=S.slice(0,G+1),M=z.concat(B).concat(Z).concat(I),J=H;break}if(G>=0)break;V[N]=!0}if(G>=0)break}}return M}for(var o,l,c,u,h,f,d={},v=e.concat(),p=0,m=t.length;p<m;p++)Array.prototype.push.apply(v,t[p]);for(o=0,l=v.length;o<l;o++)h=v[o].x+":"+v[o].y,d[h]!==void 0&&console.warn("THREE.ShapeUtils: Duplicate point",h,o),d[h]=o;var g=s(e,t),y=Qe.triangulate(g,!1);for(o=0,l=y.length;o<l;o++)for(u=y[o],c=0;c<3;c++)h=u[c].x+":"+u[c].y,f=d[h],f!==void 0&&(u[c]=f);return y.concat()},isClockWise:function(e){return Qe.area(e)<0},b2:function(){function e(i,r){var a=1-i;return a*a*r}function t(i,r){return 2*(1-i)*i*r}function n(i,r){return i*i*r}return function(r,a,s,o){return e(r,a)+t(r,s)+n(r,o)}}(),b3:function(){function e(r,a){var s=1-r;return s*s*s*a}function t(r,a){var s=1-r;return 3*s*s*r*a}function n(r,a){var s=1-r;return 3*s*r*r*a}function i(r,a){return r*r*r*a}return function(a,s,o,l,c){return e(a,s)+t(a,o)+n(a,l)+i(a,c)}}()};function ri(e,t){if(typeof e>"u"){e=[];return}Zt.call(this),this.type="ExtrudeGeometry",e=Array.isArray(e)?e:[e],this.addShapeList(e,t),this.computeFaceNormals()}ri.prototype=Object.create(Zt.prototype);ri.prototype.constructor=ri;ri.prototype.addShapeList=function(e,t){for(var n=e.length,i=0;i<n;i++){var r=e[i];this.addShape(r,t)}};ri.prototype.addShape=function(e,t){var n=t.amount!==void 0?t.amount:100,i=t.bevelThickness!==void 0?t.bevelThickness:6,r=t.bevelSize!==void 0?t.bevelSize:i-2,a=t.bevelSegments!==void 0?t.bevelSegments:3,s=t.bevelEnabled!==void 0?t.bevelEnabled:!0,o=t.curveSegments!==void 0?t.curveSegments:12,l=t.steps!==void 0?t.steps:1,c=t.extrudePath,u,h=!1,f=t.UVGenerator!==void 0?t.UVGenerator:ri.WorldUVGenerator,d,v,p,m;c&&(u=c.getSpacedPoints(l),h=!0,s=!1,d=t.frames!==void 0?t.frames:c.computeFrenetFrames(l,!1),v=new U,p=new U,m=new U),s||(a=0,i=0,r=0);var g,y,_,x=this,M=this.vertices.length,S=e.extractPoints(o),E=S.shape,b=S.holes,w=!Qe.isClockWise(E);if(w){for(E=E.reverse(),y=0,_=b.length;y<_;y++)g=b[y],Qe.isClockWise(g)&&(b[y]=g.reverse());w=!1}var L=Qe.triangulateShape(E,b),G=E;for(y=0,_=b.length;y<_;y++)g=b[y],E=E.concat(g);function H(Bt,Ut,Nt){return Ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),Ut.clone().multiplyScalar(Nt).add(Bt)}var C,T,R,N,V,z=E.length,I,B=L.length;function Z(Bt,Ut,Nt){var ee,fe,O=1,D=Bt.x-Ut.x,nt=Bt.y-Ut.y,ut=Nt.x-Bt.x,mt=Nt.y-Bt.y,xt=D*D+nt*nt,Wt=D*mt-nt*ut;if(Math.abs(Wt)>Number.EPSILON){var Lt=Math.sqrt(xt),ot=Math.sqrt(ut*ut+mt*mt),kt=Ut.x-nt/Lt,$=Ut.y+D/Lt,dt=Nt.x-mt/ot,_t=Nt.y+ut/ot,Tt=((dt-kt)*mt-(_t-$)*ut)/(D*mt-nt*ut);ee=kt+D*Tt-Bt.x,fe=$+nt*Tt-Bt.y;var wt=ee*ee+fe*fe;if(wt<=2)return new Ct(ee,fe);O=Math.sqrt(wt/2)}else{var qt=!1;D>Number.EPSILON?ut>Number.EPSILON&&(qt=!0):D<-Number.EPSILON?ut<-Number.EPSILON&&(qt=!0):Math.sign(nt)===Math.sign(mt)&&(qt=!0),qt?(ee=-nt,fe=D,O=Math.sqrt(xt)):(ee=D,fe=nt,O=Math.sqrt(xt/2))}return new Ct(ee/O,fe/O)}for(var X=[],k=0,J=G.length,it=J-1,Y=k+1;k<J;k++,it++,Y++)it===J&&(it=0),Y===J&&(Y=0),X[k]=Z(G[k],G[it],G[Y]);var gt=[],ft,st=X.concat();for(y=0,_=b.length;y<_;y++){for(g=b[y],ft=[],k=0,J=g.length,it=J-1,Y=k+1;k<J;k++,it++,Y++)it===J&&(it=0),Y===J&&(Y=0),ft[k]=Z(g[k],g[it],g[Y]);gt.push(ft),st=st.concat(ft)}for(C=0;C<a;C++){for(R=C/a,N=i*Math.cos(R*Math.PI/2),T=r*Math.sin(R*Math.PI/2),k=0,J=G.length;k<J;k++)V=H(G[k],X[k],T),Xt(V.x,V.y,-N);for(y=0,_=b.length;y<_;y++)for(g=b[y],ft=gt[y],k=0,J=g.length;k<J;k++)V=H(g[k],ft[k],T),Xt(V.x,V.y,-N)}for(T=r,k=0;k<z;k++)V=s?H(E[k],st[k],T):E[k],h?(p.copy(d.normals[0]).multiplyScalar(V.x),v.copy(d.binormals[0]).multiplyScalar(V.y),m.copy(u[0]).add(p).add(v),Xt(m.x,m.y,m.z)):Xt(V.x,V.y,0);var pt;for(pt=1;pt<=l;pt++)for(k=0;k<z;k++)V=s?H(E[k],st[k],T):E[k],h?(p.copy(d.normals[pt]).multiplyScalar(V.x),v.copy(d.binormals[pt]).multiplyScalar(V.y),m.copy(u[pt]).add(p).add(v),Xt(m.x,m.y,m.z)):Xt(V.x,V.y,n/l*pt);for(C=a-1;C>=0;C--){for(R=C/a,N=i*Math.cos(R*Math.PI/2),T=r*Math.sin(R*Math.PI/2),k=0,J=G.length;k<J;k++)V=H(G[k],X[k],T),Xt(V.x,V.y,n+N);for(y=0,_=b.length;y<_;y++)for(g=b[y],ft=gt[y],k=0,J=g.length;k<J;k++)V=H(g[k],ft[k],T),h?Xt(V.x,V.y+u[l-1].y,u[l-1].x+N):Xt(V.x,V.y,n+N)}W(),Ft();function W(){if(s){var Bt=0,Ut=z*Bt;for(k=0;k<B;k++)I=L[k],bt(I[2]+Ut,I[1]+Ut,I[0]+Ut);for(Bt=l+a*2,Ut=z*Bt,k=0;k<B;k++)I=L[k],bt(I[0]+Ut,I[1]+Ut,I[2]+Ut)}else{for(k=0;k<B;k++)I=L[k],bt(I[2],I[1],I[0]);for(k=0;k<B;k++)I=L[k],bt(I[0]+z*l,I[1]+z*l,I[2]+z*l)}}function Ft(){var Bt=0;for(vt(G,Bt),Bt+=G.length,y=0,_=b.length;y<_;y++)g=b[y],vt(g,Bt),Bt+=g.length}function vt(Bt,Ut){var Nt,ee;for(k=Bt.length;--k>=0;){Nt=k,ee=k-1,ee<0&&(ee=Bt.length-1);var fe=0,O=l+a*2;for(fe=0;fe<O;fe++){var D=z*fe,nt=z*(fe+1),ut=Ut+Nt+D,mt=Ut+ee+D,xt=Ut+ee+nt,Wt=Ut+Nt+nt;Jt(ut,mt,xt,Wt)}}}function Xt(Bt,Ut,Nt){x.vertices.push(new U(Bt,Ut,Nt))}function bt(Bt,Ut,Nt){Bt+=M,Ut+=M,Nt+=M,x.faces.push(new zn(Bt,Ut,Nt,null,null,0));var ee=f.generateTopUV(x,Bt,Ut,Nt);x.faceVertexUvs[0].push(ee)}function Jt(Bt,Ut,Nt,ee,fe,O,D,nt,ut){Bt+=M,Ut+=M,Nt+=M,ee+=M,x.faces.push(new zn(Bt,Ut,ee,null,null,1)),x.faces.push(new zn(Ut,Nt,ee,null,null,1));var mt=f.generateSideWallUV(x,Bt,Ut,Nt,ee);x.faceVertexUvs[0].push([mt[0],mt[1],mt[3]]),x.faceVertexUvs[0].push([mt[1],mt[2],mt[3]])}};ri.WorldUVGenerator={generateTopUV:function(e,t,n,i){var r=e.vertices,a=r[t],s=r[n],o=r[i];return[new Ct(a.x,a.y),new Ct(s.x,s.y),new Ct(o.x,o.y)]},generateSideWallUV:function(e,t,n,i,r){var a=e.vertices,s=a[t],o=a[n],l=a[i],c=a[r];return Math.abs(s.y-o.y)<.01?[new Ct(s.x,1-s.z),new Ct(o.x,1-o.z),new Ct(l.x,1-l.z),new Ct(c.x,1-c.z)]:[new Ct(s.y,1-s.z),new Ct(o.y,1-o.z),new Ct(l.y,1-l.z),new Ct(c.y,1-c.z)]}};function Wo(e,t){t=t||{};var n=t.font;if((n&&n.isFont)===!1)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new Zt;var i=n.generateShapes(e,t.size,t.curveSegments);t.amount=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),ri.call(this,i,t),this.type="TextGeometry"}Wo.prototype=Object.create(ri.prototype);Wo.prototype.constructor=Wo;function ea(e,t,n,i,r,a,s){Gt.call(this),this.type="SphereBufferGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:s},e=e||50,t=Math.max(3,Math.floor(t)||8),n=Math.max(2,Math.floor(n)||6),i=i!==void 0?i:0,r=r!==void 0?r:Math.PI*2,a=a!==void 0?a:0,s=s!==void 0?s:Math.PI;for(var o=a+s,l=(t+1)*(n+1),c=new St(new Float32Array(l*3),3),u=new St(new Float32Array(l*3),3),h=new St(new Float32Array(l*2),2),f=0,d=[],v=new U,p=0;p<=n;p++){for(var m=[],g=p/n,y=0;y<=t;y++){var _=y/t,x=-e*Math.cos(i+_*r)*Math.sin(a+g*s),M=e*Math.cos(a+g*s),S=e*Math.sin(i+_*r)*Math.sin(a+g*s);v.set(x,M,S).normalize(),c.setXYZ(f,x,M,S),u.setXYZ(f,v.x,v.y,v.z),h.setXY(f,_,1-g),m.push(f),f++}d.push(m)}for(var E=[],p=0;p<n;p++)for(var y=0;y<t;y++){var b=d[p][y+1],w=d[p][y],L=d[p+1][y],G=d[p+1][y+1];(p!==0||a>0)&&E.push(b,w,G),(p!==n-1||o<Math.PI)&&E.push(w,L,G)}this.setIndex(new(c.count>65535?Wi:Hi)(E,1)),this.addAttribute("position",c),this.addAttribute("normal",u),this.addAttribute("uv",h),this.boundingSphere=new on(new U,e)}ea.prototype=Object.create(Gt.prototype);ea.prototype.constructor=ea;function Xo(e,t,n,i,r,a,s){Zt.call(this),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:s},this.fromBufferGeometry(new ea(e,t,n,i,r,a,s))}Xo.prototype=Object.create(Zt.prototype);Xo.prototype.constructor=Xo;function ys(e,t,n,i,r,a){Gt.call(this),this.type="RingBufferGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},e=e||20,t=t||50,r=r!==void 0?r:0,a=a!==void 0?a:Math.PI*2,n=n!==void 0?Math.max(3,n):8,i=i!==void 0?Math.max(1,i):1;var s=(n+1)*(i+1),o=n*i*2*3,l=new St(new(o>65535?Uint32Array:Uint16Array)(o),1),c=new St(new Float32Array(s*3),3),u=new St(new Float32Array(s*3),3),h=new St(new Float32Array(s*2),2),f=0,d=0,v,p=e,m=(t-e)/i,g=new U,y=new Ct,_,x;for(_=0;_<=i;_++){for(x=0;x<=n;x++)v=r+x/n*a,g.x=p*Math.cos(v),g.y=p*Math.sin(v),c.setXYZ(f,g.x,g.y,g.z),u.setXYZ(f,0,0,1),y.x=(g.x/t+1)/2,y.y=(g.y/t+1)/2,h.setXY(f,y.x,y.y),f++;p+=m}for(_=0;_<i;_++){var M=_*(n+1);for(x=0;x<n;x++){v=x+M;var S=v,E=v+n+1,b=v+n+2,w=v+1;l.setX(d,S),d++,l.setX(d,E),d++,l.setX(d,b),d++,l.setX(d,S),d++,l.setX(d,b),d++,l.setX(d,w),d++}}this.setIndex(l),this.addAttribute("position",c),this.addAttribute("normal",u),this.addAttribute("uv",h)}ys.prototype=Object.create(Gt.prototype);ys.prototype.constructor=ys;function qo(e,t,n,i,r,a){Zt.call(this),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},this.fromBufferGeometry(new ys(e,t,n,i,r,a))}qo.prototype=Object.create(Zt.prototype);qo.prototype.constructor=qo;function Yo(e,t,n,i){Zt.call(this),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i},this.fromBufferGeometry(new Jr(e,t,n,i))}Yo.prototype=Object.create(Zt.prototype);Yo.prototype.constructor=Yo;function xs(e,t,n,i){Gt.call(this),this.type="LatheBufferGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t)||12,n=n||0,i=i||Math.PI*2,i=Kt.clamp(i,0,Math.PI*2);var r=(t+1)*e.length,a=t*e.length*2*3,s=new St(new(a>65535?Uint32Array:Uint16Array)(a),1),o=new St(new Float32Array(r*3),3),l=new St(new Float32Array(r*2),2),c=0,u=0,h,f=1/t,d=new U,v=new Ct,p,m;for(p=0;p<=t;p++){var g=n+p*f*i,y=Math.sin(g),_=Math.cos(g);for(m=0;m<=e.length-1;m++)d.x=e[m].x*y,d.y=e[m].y,d.z=e[m].x*_,o.setXYZ(c,d.x,d.y,d.z),v.x=p/t,v.y=m/(e.length-1),l.setXY(c,v.x,v.y),c++}for(p=0;p<t;p++)for(m=0;m<e.length-1;m++){h=m+p*e.length;var x=h,M=h+e.length,S=h+e.length+1,E=h+1;s.setX(u,x),u++,s.setX(u,M),u++,s.setX(u,E),u++,s.setX(u,M),u++,s.setX(u,S),u++,s.setX(u,E),u++}if(this.setIndex(s),this.addAttribute("position",o),this.addAttribute("uv",l),this.computeVertexNormals(),i===Math.PI*2){var b=this.attributes.normal.array,w=new U,L=new U,G=new U;for(h=t*e.length*3,p=0,m=0;p<e.length;p++,m+=3)w.x=b[m+0],w.y=b[m+1],w.z=b[m+2],L.x=b[h+m+0],L.y=b[h+m+1],L.z=b[h+m+2],G.addVectors(w,L).normalize(),b[m+0]=b[h+m+0]=G.x,b[m+1]=b[h+m+1]=G.y,b[m+2]=b[h+m+2]=G.z}}xs.prototype=Object.create(Gt.prototype);xs.prototype.constructor=xs;function jo(e,t,n,i){Zt.call(this),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},this.fromBufferGeometry(new xs(e,t,n,i)),this.mergeVertices()}jo.prototype=Object.create(Zt.prototype);jo.prototype.constructor=jo;function Ms(e,t){Gt.call(this),this.type="ShapeBufferGeometry",this.parameters={shapes:e,curveSegments:t},t=t||12;var n=[],i=[],r=[],a=[],s=0,o=0;if(Array.isArray(e)===!1)c(e);else for(var l=0;l<e.length;l++)c(e[l]),this.addGroup(s,o,l),s+=o,o=0;this.setIndex(new(a.length>65535?Wi:Hi)(a,1)),this.addAttribute("position",new oe(n,3)),this.addAttribute("normal",new oe(i,3)),this.addAttribute("uv",new oe(r,2));function c(u){var h,f,d,v=n.length/3,p=u.extractPoints(t),m=p.shape,g=p.holes;if(Qe.isClockWise(m)===!1)for(m=m.reverse(),h=0,f=g.length;h<f;h++)d=g[h],Qe.isClockWise(d)===!0&&(g[h]=d.reverse());var y=Qe.triangulateShape(m,g);for(h=0,f=g.length;h<f;h++)d=g[h],m=m.concat(d);for(h=0,f=m.length;h<f;h++){var _=m[h];n.push(_.x,_.y,0),i.push(0,0,1),r.push(_.x,_.y)}for(h=0,f=y.length;h<f;h++){var x=y[h],M=x[0]+v,S=x[1]+v,E=x[2]+v;a.push(M,S,E),o+=3}}}Ms.prototype=Object.create(Gt.prototype);Ms.prototype.constructor=Ms;function bs(e,t){Zt.call(this),this.type="ShapeGeometry",typeof t=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),t=t.curveSegments),this.parameters={shapes:e,curveSegments:t},this.fromBufferGeometry(new Ms(e,t)),this.mergeVertices()}bs.prototype=Object.create(Zt.prototype);bs.prototype.constructor=bs;function ws(e,t){Gt.call(this),t=t!==void 0?t:1;var n=Math.cos(Kt.DEG2RAD*t),i=[0,0],r={};function a(y,_){return y-_}var s=["a","b","c"],o;e.isBufferGeometry?(o=new Zt,o.fromBufferGeometry(e)):o=e.clone(),o.mergeVertices(),o.computeFaceNormals();for(var l=o.vertices,c=o.faces,u=0,h=c.length;u<h;u++)for(var f=c[u],d=0;d<3;d++){i[0]=f[s[d]],i[1]=f[s[(d+1)%3]],i.sort(a);var v=i.toString();r[v]===void 0?r[v]={vert1:i[0],vert2:i[1],face1:u,face2:void 0}:r[v].face2=u}var p=[];for(var v in r){var m=r[v];if(m.face2===void 0||c[m.face1].normal.dot(c[m.face2].normal)<=n){var g=l[m.vert1];p.push(g.x),p.push(g.y),p.push(g.z),g=l[m.vert2],p.push(g.x),p.push(g.y),p.push(g.z)}}this.addAttribute("position",new oe(p,3))}ws.prototype=Object.create(Gt.prototype);ws.prototype.constructor=ws;function qi(e,t,n,i,r,a,s,o){Gt.call(this),this.type="CylinderBufferGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o};var l=this;e=e!==void 0?e:20,t=t!==void 0?t:20,n=n!==void 0?n:100,i=Math.floor(i)||8,r=Math.floor(r)||1,a=a!==void 0?a:!1,s=s!==void 0?s:0,o=o!==void 0?o:2*Math.PI;var c=0;a===!1&&(e>0&&c++,t>0&&c++);var u=M(),h=S(),f=new St(new(h>65535?Uint32Array:Uint16Array)(h),1),d=new St(new Float32Array(u*3),3),v=new St(new Float32Array(u*3),3),p=new St(new Float32Array(u*2),2),m=0,g=0,y=[],_=n/2,x=0;E(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(f),this.addAttribute("position",d),this.addAttribute("normal",v),this.addAttribute("uv",p);function M(){var w=(i+1)*(r+1);return a===!1&&(w+=(i+1)*c+i*c),w}function S(){var w=i*r*2*3;return a===!1&&(w+=i*c*3),w}function E(){var w,L,G=new U,H=new U,C=0,T=(t-e)/n;for(L=0;L<=r;L++){var R=[],N=L/r,V=N*(t-e)+e;for(w=0;w<=i;w++){var z=w/i,I=z*o+s,B=Math.sin(I),Z=Math.cos(I);H.x=V*B,H.y=-N*n+_,H.z=V*Z,d.setXYZ(m,H.x,H.y,H.z),G.set(B,T,Z).normalize(),v.setXYZ(m,G.x,G.y,G.z),p.setXY(m,z,1-N),R.push(m),m++}y.push(R)}for(w=0;w<i;w++)for(L=0;L<r;L++){var X=y[L][w],k=y[L+1][w],J=y[L+1][w+1],it=y[L][w+1];f.setX(g,X),g++,f.setX(g,k),g++,f.setX(g,it),g++,f.setX(g,k),g++,f.setX(g,J),g++,f.setX(g,it),g++,C+=6}l.addGroup(x,C,0),x+=C}function b(w){var L,G,H,C=new Ct,T=new U,R=0,N=w===!0?e:t,V=w===!0?1:-1;for(G=m,L=1;L<=i;L++)d.setXYZ(m,0,_*V,0),v.setXYZ(m,0,V,0),C.x=.5,C.y=.5,p.setXY(m,C.x,C.y),m++;for(H=m,L=0;L<=i;L++){var z=L/i,I=z*o+s,B=Math.cos(I),Z=Math.sin(I);T.x=N*Z,T.y=_*V,T.z=N*B,d.setXYZ(m,T.x,T.y,T.z),v.setXYZ(m,0,V,0),C.x=B*.5+.5,C.y=Z*.5*V+.5,p.setXY(m,C.x,C.y),m++}for(L=0;L<i;L++){var X=G+L,k=H+L;w===!0?(f.setX(g,k),g++,f.setX(g,k+1),g++,f.setX(g,X),g++):(f.setX(g,k+1),g++,f.setX(g,k),g++,f.setX(g,X),g++),R+=3}l.addGroup(x,R,w===!0?1:2),x+=R}}qi.prototype=Object.create(Gt.prototype);qi.prototype.constructor=qi;function na(e,t,n,i,r,a,s,o){Zt.call(this),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o},this.fromBufferGeometry(new qi(e,t,n,i,r,a,s,o)),this.mergeVertices()}na.prototype=Object.create(Zt.prototype);na.prototype.constructor=na;function $o(e,t,n,i,r,a,s){na.call(this,0,e,t,n,i,r,a,s),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:s}}$o.prototype=Object.create(na.prototype);$o.prototype.constructor=$o;function Zo(e,t,n,i,r,a,s){qi.call(this,0,e,t,n,i,r,a,s),this.type="ConeBufferGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:s}}Zo.prototype=Object.create(qi.prototype);Zo.prototype.constructor=Zo;function Ss(e,t,n,i){Gt.call(this),this.type="CircleBufferGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},e=e||50,t=t!==void 0?Math.max(3,t):8,n=n!==void 0?n:0,i=i!==void 0?i:Math.PI*2;var r=t+2,a=new Float32Array(r*3),s=new Float32Array(r*3),o=new Float32Array(r*2);s[2]=1,o[0]=.5,o[1]=.5;for(var l=0,c=3,u=2;l<=t;l++,c+=3,u+=2){var h=n+l/t*i;a[c]=e*Math.cos(h),a[c+1]=e*Math.sin(h),s[c+2]=1,o[u]=(a[c]/e+1)/2,o[u+1]=(a[c+1]/e+1)/2}for(var f=[],c=1;c<=t;c++)f.push(c,c+1,0);this.setIndex(new St(new Uint16Array(f),1)),this.addAttribute("position",new St(a,3)),this.addAttribute("normal",new St(s,3)),this.addAttribute("uv",new St(o,2)),this.boundingSphere=new on(new U,e)}Ss.prototype=Object.create(Gt.prototype);Ss.prototype.constructor=Ss;function Jo(e,t,n,i){Zt.call(this),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},this.fromBufferGeometry(new Ss(e,t,n,i))}Jo.prototype=Object.create(Zt.prototype);Jo.prototype.constructor=Jo;function Es(e,t,n,i,r,a){Zt.call(this),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a},this.fromBufferGeometry(new Zr(e,t,n,i,r,a)),this.mergeVertices()}Es.prototype=Object.create(Zt.prototype);Es.prototype.constructor=Es;var ui=Object.freeze({WireframeGeometry:hs,ParametricGeometry:Uo,ParametricBufferGeometry:fs,TetrahedronGeometry:Oo,TetrahedronBufferGeometry:ds,OctahedronGeometry:No,OctahedronBufferGeometry:ta,IcosahedronGeometry:zo,IcosahedronBufferGeometry:ps,DodecahedronGeometry:Bo,DodecahedronBufferGeometry:ms,PolyhedronGeometry:Go,PolyhedronBufferGeometry:Tn,TubeGeometry:ko,TubeBufferGeometry:vs,TorusKnotGeometry:Vo,TorusKnotBufferGeometry:gs,TorusGeometry:Ho,TorusBufferGeometry:_s,TextGeometry:Wo,SphereBufferGeometry:ea,SphereGeometry:Xo,RingGeometry:qo,RingBufferGeometry:ys,PlaneBufferGeometry:Jr,PlaneGeometry:Yo,LatheGeometry:jo,LatheBufferGeometry:xs,ShapeGeometry:bs,ShapeBufferGeometry:Ms,ExtrudeGeometry:ri,EdgesGeometry:ws,ConeGeometry:$o,ConeBufferGeometry:Zo,CylinderGeometry:na,CylinderBufferGeometry:qi,CircleBufferGeometry:Ss,CircleGeometry:Jo,BoxBufferGeometry:Zr,BoxGeometry:Es});function Ts(){dn.call(this,{uniforms:mn.merge([te.lights,{opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}),this.lights=!0,this.transparent=!0,Object.defineProperties(this,{opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}}})}Ts.prototype=Object.create(dn.prototype);Ts.prototype.constructor=Ts;Ts.prototype.isShadowMaterial=!0;function As(e){dn.call(this,e),this.type="RawShaderMaterial"}As.prototype=Object.create(dn.prototype);As.prototype.constructor=As;As.prototype.isRawShaderMaterial=!0;function Ko(e){this.uuid=Kt.generateUUID(),this.type="MultiMaterial",this.materials=Array.isArray(e)?e:[],this.visible=!0}Ko.prototype={constructor:Ko,isMultiMaterial:!0,toJSON:function(e){for(var t={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type,materials:[]},n=this.materials,i=0,r=n.length;i<r;i++){var a=n[i].toJSON(e);delete a.metadata,t.materials.push(a)}return t.visible=this.visible,t},clone:function(){for(var e=new this.constructor,t=0;t<this.materials.length;t++)e.materials.push(this.materials[t].clone());return e.visible=this.visible,e}};function Ti(e){ae.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Vt(16777215),this.roughness=.5,this.metalness=.5,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Ti.prototype=Object.create(ae.prototype);Ti.prototype.constructor=Ti;Ti.prototype.isMeshStandardMaterial=!0;Ti.prototype.copy=function(e){return ae.prototype.copy.call(this,e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function ia(e){Ti.call(this),this.defines={PHYSICAL:""},this.type="MeshPhysicalMaterial",this.reflectivity=.5,this.clearCoat=0,this.clearCoatRoughness=0,this.setValues(e)}ia.prototype=Object.create(Ti.prototype);ia.prototype.constructor=ia;ia.prototype.isMeshPhysicalMaterial=!0;ia.prototype.copy=function(e){return Ti.prototype.copy.call(this,e),this.defines={PHYSICAL:""},this.reflectivity=e.reflectivity,this.clearCoat=e.clearCoat,this.clearCoatRoughness=e.clearCoatRoughness,this};function gi(e){ae.call(this),this.type="MeshPhongMaterial",this.color=new Vt(16777215),this.specular=new Vt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}gi.prototype=Object.create(ae.prototype);gi.prototype.constructor=gi;gi.prototype.isMeshPhongMaterial=!0;gi.prototype.copy=function(e){return ae.prototype.copy.call(this,e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function ra(e){gi.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.gradientMap=null,this.setValues(e)}ra.prototype=Object.create(gi.prototype);ra.prototype.constructor=ra;ra.prototype.isMeshToonMaterial=!0;ra.prototype.copy=function(e){return gi.prototype.copy.call(this,e),this.gradientMap=e.gradientMap,this};function aa(e){ae.call(this,e),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}aa.prototype=Object.create(ae.prototype);aa.prototype.constructor=aa;aa.prototype.isMeshNormalMaterial=!0;aa.prototype.copy=function(e){return ae.prototype.copy.call(this,e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function sa(e){ae.call(this),this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}sa.prototype=Object.create(ae.prototype);sa.prototype.constructor=sa;sa.prototype.isMeshLambertMaterial=!0;sa.prototype.copy=function(e){return ae.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function oa(e){ae.call(this),this.type="LineDashedMaterial",this.color=new Vt(16777215),this.linewidth=1,this.scale=1,this.dashSize=3,this.gapSize=1,this.lights=!1,this.setValues(e)}oa.prototype=Object.create(ae.prototype);oa.prototype.constructor=oa;oa.prototype.isLineDashedMaterial=!0;oa.prototype.copy=function(e){return ae.prototype.copy.call(this,e),this.color.copy(e.color),this.linewidth=e.linewidth,this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this};var jE=Object.freeze({ShadowMaterial:Ts,SpriteMaterial:Qr,RawShaderMaterial:As,ShaderMaterial:dn,PointsMaterial:vi,MultiMaterial:Ko,MeshPhysicalMaterial:ia,MeshStandardMaterial:Ti,MeshPhongMaterial:gi,MeshToonMaterial:ra,MeshNormalMaterial:aa,MeshLambertMaterial:sa,MeshDepthMaterial:mr,MeshBasicMaterial:En,LineDashedMaterial:oa,LineBasicMaterial:Oe,Material:ae}),Ph={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Pf(e,t,n){var i=this,r=!1,a=0,s=0;this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(o){s++,r===!1&&i.onStart!==void 0&&i.onStart(o,a,s),r=!0},this.itemEnd=function(o){a++,i.onProgress!==void 0&&i.onProgress(o,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(o){i.onError!==void 0&&i.onError(o)}}var kn=new Pf;function ai(e){this.manager=e!==void 0?e:kn}Object.assign(ai.prototype,{load:function(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e);var r=this,a=Ph.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;var s=/^data:(.*?)(;base64)?,(.*)$/,o=e.match(s);if(o){var l=o[1],c=!!o[2],u=o[3];u=window.decodeURIComponent(u),c&&(u=window.atob(u));try{var h,f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":h=new ArrayBuffer(u.length);for(var d=new Uint8Array(h),v=0;v<u.length;v++)d[v]=u.charCodeAt(v);f==="blob"&&(h=new Blob([h],{type:l}));break;case"document":var p=new DOMParser;h=p.parseFromString(u,l);break;case"json":h=JSON.parse(u);break;default:h=u;break}window.setTimeout(function(){t&&t(h),r.manager.itemEnd(e)},0)}catch(g){window.setTimeout(function(){i&&i(g),r.manager.itemError(e)},0)}}else{var m=new XMLHttpRequest;m.open("GET",e,!0),m.addEventListener("load",function(g){var y=g.target.response;Ph.add(e,y),this.status===200?(t&&t(y),r.manager.itemEnd(e)):this.status===0?(console.warn("THREE.FileLoader: HTTP Status 0 received."),t&&t(y),r.manager.itemEnd(e)):(i&&i(g),r.manager.itemError(e))},!1),n!==void 0&&m.addEventListener("progress",function(g){n(g)},!1),m.addEventListener("error",function(g){i&&i(g),r.manager.itemError(e)},!1),this.responseType!==void 0&&(m.responseType=this.responseType),this.withCredentials!==void 0&&(m.withCredentials=this.withCredentials),m.overrideMimeType&&m.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain"),m.send(null)}return r.manager.itemStart(e),m},setPath:function(e){return this.path=e,this},setResponseType:function(e){return this.responseType=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setMimeType:function(e){return this.mimeType=e,this}});function pg(e){this.manager=e!==void 0?e:kn,this._parser=null}Object.assign(pg.prototype,{load:function(e,t,n,i){var r=this,a=[],s=new us;s.image=a;var o=new ai(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer");function l(f){o.load(e[f],function(d){var v=r._parser(d,!0);a[f]={width:v.width,height:v.height,format:v.format,mipmaps:v.mipmaps},c+=1,c===6&&(v.mipmapCount===1&&(s.minFilter=wn),s.format=v.format,s.needsUpdate=!0,t&&t(s))},n,i)}if(Array.isArray(e))for(var c=0,u=0,h=e.length;u<h;++u)l(u);else o.load(e,function(f){var d=r._parser(f,!0);if(d.isCubemap)for(var v=d.mipmaps.length/d.mipmapCount,p=0;p<v;p++){a[p]={mipmaps:[]};for(var m=0;m<d.mipmapCount;m++)a[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+m]),a[p].format=d.format,a[p].width=d.width,a[p].height=d.height}else s.image.width=d.width,s.image.height=d.height,s.mipmaps=d.mipmaps;d.mipmapCount===1&&(s.minFilter=wn),s.format=d.format,s.needsUpdate=!0,t&&t(s)},n,i);return s},setPath:function(e){return this.path=e,this}});var $E=Ff;function Ff(e){this.manager=e!==void 0?e:kn,this._parser=null}Object.assign(Ff.prototype,{load:function(e,t,n,i){var r=this,a=new $r,s=new ai(this.manager);return s.setResponseType("arraybuffer"),s.load(e,function(o){var l=r._parser(o);!l||(l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:Un,a.wrapT=l.wrapT!==void 0?l.wrapT:Un,a.magFilter=l.magFilter!==void 0?l.magFilter:wn,a.minFilter=l.minFilter!==void 0?l.minFilter:pc,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps),l.mipmapCount===1&&(a.minFilter=wn),a.needsUpdate=!0,t&&t(a,l))},n,i),a}});function mc(e){this.manager=e!==void 0?e:kn}Object.assign(mc.prototype,{load:function(e,t,n,i){var r=this,a=document.createElementNS("http://www.w3.org/1999/xhtml","img");if(a.onload=function(){a.onload=null,URL.revokeObjectURL(a.src),t&&t(a),r.manager.itemEnd(e)},a.onerror=i,e.indexOf("data:")===0)a.src=e;else if(this.crossOrigin!==void 0)a.crossOrigin=this.crossOrigin,a.src=e;else{var s=new ai;s.setPath(this.path),s.setResponseType("blob"),s.setWithCredentials(this.withCredentials),s.load(e,function(o){a.src=URL.createObjectURL(o)},n,i)}return r.manager.itemStart(e),a},setCrossOrigin:function(e){return this.crossOrigin=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setPath:function(e){return this.path=e,this}});function If(e){this.manager=e!==void 0?e:kn}Object.assign(If.prototype,{load:function(e,t,n,i){var r=new dr,a=new mc(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);var s=0;function o(c){a.load(e[c],function(u){r.images[c]=u,s++,s===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(var l=0;l<e.length;++l)o(l);return r},setCrossOrigin:function(e){return this.crossOrigin=e,this},setPath:function(e){return this.path=e,this}});function Zl(e){this.manager=e!==void 0?e:kn}Object.assign(Zl.prototype,{load:function(e,t,n,i){var r=new Se,a=new mc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setWithCredentials(this.withCredentials),a.setPath(this.path),a.load(e,function(s){var o=e.search(/\.(jpg|jpeg)$/)>0||e.search(/^data\:image\/jpeg/)===0;r.format=o?ns:Si,r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r},setCrossOrigin:function(e){return this.crossOrigin=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setPath:function(e){return this.path=e,this}});function Ne(e,t){Pt.call(this),this.type="Light",this.color=new Vt(e),this.intensity=t!==void 0?t:1,this.receiveShadow=void 0}Ne.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Ne,isLight:!0,copy:function(e){return Pt.prototype.copy.call(this,e),this.color.copy(e.color),this.intensity=e.intensity,this},toJSON:function(e){var t=Pt.prototype.toJSON.call(this,e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}});function gl(e,t,n){Ne.call(this,e,n),this.type="HemisphereLight",this.castShadow=void 0,this.position.copy(Pt.DefaultUp),this.updateMatrix(),this.groundColor=new Vt(t)}gl.prototype=Object.assign(Object.create(Ne.prototype),{constructor:gl,isHemisphereLight:!0,copy:function(e){return Ne.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}});function va(e){this.camera=e,this.bias=0,this.radius=1,this.mapSize=new Ct(512,512),this.map=null,this.matrix=new Yt}Object.assign(va.prototype,{copy:function(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){var e={};return this.bias!==0&&(e.bias=this.bias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}});function _l(){va.call(this,new nn(50,1,.5,500))}_l.prototype=Object.assign(Object.create(va.prototype),{constructor:_l,isSpotLightShadow:!0,update:function(e){var t=Kt.RAD2DEG*2*e.angle,n=this.mapSize.width/this.mapSize.height,i=e.distance||500,r=this.camera;(t!==r.fov||n!==r.aspect||i!==r.far)&&(r.fov=t,r.aspect=n,r.far=i,r.updateProjectionMatrix())}});function yl(e,t,n,i,r,a){Ne.call(this,e,t),this.type="SpotLight",this.position.copy(Pt.DefaultUp),this.updateMatrix(),this.target=new Pt,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(s){this.intensity=s/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=a!==void 0?a:1,this.shadow=new _l}yl.prototype=Object.assign(Object.create(Ne.prototype),{constructor:yl,isSpotLight:!0,copy:function(e){return Ne.prototype.copy.call(this,e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function xl(e,t,n,i){Ne.call(this,e,t),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new va(new nn(90,1,.5,500))}xl.prototype=Object.assign(Object.create(Ne.prototype),{constructor:xl,isPointLight:!0,copy:function(e){return Ne.prototype.copy.call(this,e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}});function Ml(e){va.call(this,new ss(-5,5,5,-5,.5,500))}Ml.prototype=Object.assign(Object.create(va.prototype),{constructor:Ml});function bl(e,t){Ne.call(this,e,t),this.type="DirectionalLight",this.position.copy(Pt.DefaultUp),this.updateMatrix(),this.target=new Pt,this.shadow=new Ml}bl.prototype=Object.assign(Object.create(Ne.prototype),{constructor:bl,isDirectionalLight:!0,copy:function(e){return Ne.prototype.copy.call(this,e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function wl(e,t){Ne.call(this,e,t),this.type="AmbientLight",this.castShadow=void 0}wl.prototype=Object.assign(Object.create(Ne.prototype),{constructor:wl,isAmbientLight:!0});var an={arraySlice:function(e,t,n){return an.isTypedArray(e)?new e.constructor(e.subarray(t,n)):e.slice(t,n)},convertArray:function(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)},isTypedArray:function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)},getKeyframeOrder:function(e){function t(a,s){return e[a]-e[s]}for(var n=e.length,i=new Array(n),r=0;r!==n;++r)i[r]=r;return i.sort(t),i},sortedArray:function(e,t,n){for(var i=e.length,r=new e.constructor(i),a=0,s=0;s!==i;++a)for(var o=n[a]*t,l=0;l!==t;++l)r[s++]=e[o+l];return r},flattenJSON:function(e,t,n,i){for(var r=1,a=e[0];a!==void 0&&a[i]===void 0;)a=e[r++];if(a!==void 0){var s=a[i];if(s!==void 0)if(Array.isArray(s))do s=a[i],s!==void 0&&(t.push(a.time),n.push.apply(n,s)),a=e[r++];while(a!==void 0);else if(s.toArray!==void 0)do s=a[i],s!==void 0&&(t.push(a.time),s.toArray(n,n.length)),a=e[r++];while(a!==void 0);else do s=a[i],s!==void 0&&(t.push(a.time),n.push(s)),a=e[r++];while(a!==void 0)}}};function Sn(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n}Sn.prototype={constructor:Sn,evaluate:function(e){var t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];t:{e:{var a;n:{i:if(!(e<i)){for(var s=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===s)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break n}if(!(e>=r)){var o=t[1];e<o&&(n=2,r=o);for(var s=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===s)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break n}break t}for(;n<a;){var l=n+a>>>1;e<t[l]?a=l:n=l+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(e){for(var t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i,a=0;a!==i;++a)t[a]=n[r+a];return t},interpolate_:function(e,t,n,i){throw new Error("call to abstract method")},intervalChanged_:function(e,t,n){}};Object.assign(Sn.prototype,{beforeStart_:Sn.prototype.copySampleValue_,afterEnd_:Sn.prototype.copySampleValue_});function Sl(e,t,n,i){Sn.call(this,e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}Sl.prototype=Object.assign(Object.create(Sn.prototype),{constructor:Sl,DefaultSettings_:{endingStart:jr,endingEnd:jr},intervalChanged_:function(e,t,n){var i=this.parameterPositions,r=e-2,a=e+1,s=i[r],o=i[a];if(s===void 0)switch(this.getSettings_().endingStart){case Pr:r=e,s=2*t-n;break;case Mo:r=i.length-2,s=t+i[r]-i[r+1];break;default:r=e,s=n}if(o===void 0)switch(this.getSettings_().endingEnd){case Pr:a=e,o=2*n-t;break;case Mo:a=1,o=n+i[1]-i[0];break;default:a=e-1,o=t}var l=(n-t)*.5,c=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-n),this._offsetPrev=r*c,this._offsetNext=a*c},interpolate_:function(e,t,n,i){for(var r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,d=(n-t)/(i-t),v=d*d,p=v*d,m=-h*p+2*h*v-h*d,g=(1+h)*p+(-1.5-2*h)*v+(-.5+h)*d+1,y=(-1-f)*p+(1.5+f)*v+.5*d,_=f*p-f*v,x=0;x!==s;++x)r[x]=m*a[c+x]+g*a[l+x]+y*a[o+x]+_*a[u+x];return r}});function Qo(e,t,n,i){Sn.call(this,e,t,n,i)}Qo.prototype=Object.assign(Object.create(Sn.prototype),{constructor:Qo,interpolate_:function(e,t,n,i){for(var r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=(n-t)/(i-t),u=1-c,h=0;h!==s;++h)r[h]=a[l+h]*u+a[o+h]*c;return r}});function El(e,t,n,i){Sn.call(this,e,t,n,i)}El.prototype=Object.assign(Object.create(Sn.prototype),{constructor:El,interpolate_:function(e,t,n,i){return this.copySampleValue_(e-1)}});var $i;$i={TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:oo,InterpolantFactoryMethodDiscrete:function(e){return new El(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodLinear:function(e){return new Qo(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:function(e){return new Sl(this.times,this.values,this.getValueSize(),e)},setInterpolation:function(e){var t;switch(e){case xo:t=this.InterpolantFactoryMethodDiscrete;break;case oo:t=this.InterpolantFactoryMethodLinear;break;case Zc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){var n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);console.warn(n);return}this.createInterpolant=t},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xo;case this.InterpolantFactoryMethodLinear:return oo;case this.InterpolantFactoryMethodSmooth:return Zc}},getValueSize:function(){return this.values.length/this.times.length},shift:function(e){if(e!==0)for(var t=this.times,n=0,i=t.length;n!==i;++n)t[n]+=e;return this},scale:function(e){if(e!==1)for(var t=this.times,n=0,i=t.length;n!==i;++n)t[n]*=e;return this},trim:function(e,t){for(var n=this.times,i=n.length,r=0,a=i-1;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);var s=this.getValueSize();this.times=an.arraySlice(n,r,a),this.values=an.arraySlice(this.values,r*s,a*s)}return this},validate:function(){var e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("invalid value size in track",this),e=!1);var n=this.times,i=this.values,r=n.length;r===0&&(console.error("track is empty",this),e=!1);for(var a=null,s=0;s!==r;s++){var o=n[s];if(typeof o=="number"&&isNaN(o)){console.error("time is not a valid number",this,s,o),e=!1;break}if(a!==null&&a>o){console.error("out of order keys",this,s,o,a),e=!1;break}a=o}if(i!==void 0&&an.isTypedArray(i))for(var s=0,l=i.length;s!==l;++s){var c=i[s];if(isNaN(c)){console.error("value is not a valid number",this,s,c),e=!1;break}}return e},optimize:function(){for(var e=this.times,t=this.values,n=this.getValueSize(),i=this.getInterpolation()===Zc,r=1,a=e.length-1,s=1;s<a;++s){var o=!1,l=e[s],c=e[s+1];if(l!==c&&(s!==1||l!==l[0]))if(i)o=!0;else for(var u=s*n,h=u-n,f=u+n,d=0;d!==n;++d){var v=t[u+d];if(v!==t[h+d]||v!==t[f+d]){o=!0;break}}if(o){if(s!==r){e[r]=e[s];for(var p=s*n,m=r*n,d=0;d!==n;++d)t[m+d]=t[p+d]}++r}}if(a>0){e[r]=e[a];for(var p=a*n,m=r*n,d=0;d!==n;++d)t[m+d]=t[p+d];++r}return r!==e.length&&(this.times=an.arraySlice(e,0,r),this.values=an.arraySlice(t,0,r*n)),this}};function ga(e,t,n,i){if(e===void 0)throw new Error("track name is undefined");if(t===void 0||t.length===0)throw new Error("no keyframes in track named "+e);this.name=e,this.times=an.convertArray(t,this.TimeBufferType),this.values=an.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation),this.validate(),this.optimize()}function Cs(e,t,n,i){ga.call(this,e,t,n,i)}Cs.prototype=Object.assign(Object.create($i),{constructor:Cs,ValueTypeName:"vector"});function Tl(e,t,n,i){Sn.call(this,e,t,n,i)}Tl.prototype=Object.assign(Object.create(Sn.prototype),{constructor:Tl,interpolate_:function(e,t,n,i){for(var r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=(n-t)/(i-t),c=o+s;o!==c;o+=4)We.slerpFlat(r,0,a,o-s,a,o,l);return r}});function tc(e,t,n,i){ga.call(this,e,t,n,i)}tc.prototype=Object.assign(Object.create($i),{constructor:tc,ValueTypeName:"quaternion",DefaultInterpolation:oo,InterpolantFactoryMethodLinear:function(e){return new Tl(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:void 0});function Ls(e,t,n,i){ga.call(this,e,t,n,i)}Ls.prototype=Object.assign(Object.create($i),{constructor:Ls,ValueTypeName:"number"});function Al(e,t,n,i){ga.call(this,e,t,n,i)}Al.prototype=Object.assign(Object.create($i),{constructor:Al,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:xo,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Cl(e,t,n){ga.call(this,e,t,n)}Cl.prototype=Object.assign(Object.create($i),{constructor:Cl,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:xo,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Ll(e,t,n,i){ga.call(this,e,t,n,i)}Ll.prototype=Object.assign(Object.create($i),{constructor:Ll,ValueTypeName:"color"});function ca(e,t,n,i){ga.apply(this,arguments)}ca.prototype=$i;$i.constructor=ca;Object.assign(ca,{parse:function(e){if(e.type===void 0)throw new Error("track type undefined, can not parse");var t=ca._getTrackTypeForValueTypeName(e.type);if(e.times===void 0){var n=[],i=[];an.flattenJSON(e.keys,n,i,"value"),e.times=n,e.values=i}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)},toJSON:function(e){var t=e.constructor,n;if(t.toJSON!==void 0)n=t.toJSON(e);else{n={name:e.name,times:an.convertArray(e.times,Array),values:an.convertArray(e.values,Array)};var i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n},_getTrackTypeForValueTypeName:function(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ls;case"vector":case"vector2":case"vector3":case"vector4":return Cs;case"color":return Ll;case"quaternion":return tc;case"bool":case"boolean":return Cl;case"string":return Al}throw new Error("Unsupported typeName: "+e)}});function In(e,t,n){this.name=e,this.tracks=n,this.duration=t!==void 0?t:-1,this.uuid=Kt.generateUUID(),this.duration<0&&this.resetDuration(),this.optimize()}In.prototype={constructor:In,resetDuration:function(){for(var e=this.tracks,t=0,n=0,i=e.length;n!==i;++n){var r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}this.duration=t},trim:function(){for(var e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this},optimize:function(){for(var e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}};Object.assign(In,{parse:function(e){for(var t=[],n=e.tracks,i=1/(e.fps||1),r=0,a=n.length;r!==a;++r)t.push(ca.parse(n[r]).scale(i));return new In(e.name,e.duration,t)},toJSON:function(e){for(var t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t},r=0,a=n.length;r!==a;++r)t.push(ca.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(e,t,n,i){for(var r=t.length,a=[],s=0;s<r;s++){var o=[],l=[];o.push((s+r-1)%r,s,(s+1)%r),l.push(0,1,0);var c=an.getKeyframeOrder(o);o=an.sortedArray(o,1,c),l=an.sortedArray(l,1,c),!i&&o[0]===0&&(o.push(r),l.push(l[0])),a.push(new Ls(".morphTargetInfluences["+t[s].name+"]",o,l).scale(1/n))}return new In(e,-1,a)},findByName:function(e,t){var n=e;if(!Array.isArray(e)){var i=e;n=i.geometry&&i.geometry.animations||i.animations}for(var r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null},CreateClipsFromMorphTargetSequences:function(e,t,n){for(var i={},r=/^([\w-]*?)([\d]+)$/,a=0,s=e.length;a<s;a++){var o=e[a],l=o.name.match(r);if(l&&l.length>1){var c=l[1],u=i[c];u||(i[c]=u=[]),u.push(o)}}var h=[];for(var c in i)h.push(In.CreateFromMorphTargetSequence(c,i[c],t,n));return h},parseAnimation:function(e,t){if(!e)return console.error("  no animation in JSONLoader data"),null;for(var n=function(_,x,M,S,E){if(M.length!==0){var b=[],w=[];an.flattenJSON(M,b,w,S),b.length!==0&&E.push(new _(x,b,w))}},i=[],r=e.name||"default",a=e.length||-1,s=e.fps||30,o=e.hierarchy||[],l=0;l<o.length;l++){var c=o[l].keys;if(!(!c||c.length===0))if(c[0].morphTargets){for(var u={},h=0;h<c.length;h++)if(c[h].morphTargets)for(var f=0;f<c[h].morphTargets.length;f++)u[c[h].morphTargets[f]]=-1;for(var d in u){for(var v=[],p=[],f=0;f!==c[h].morphTargets.length;++f){var m=c[h];v.push(m.time),p.push(m.morphTarget===d?1:0)}i.push(new Ls(".morphTargetInfluence["+d+"]",v,p))}a=u.length*(s||1)}else{var g=".bones["+t[l].name+"]";n(Cs,g+".position",c,"pos",i),n(tc,g+".quaternion",c,"rot",i),n(Cs,g+".scale",c,"scl",i)}}if(i.length===0)return null;var y=new In(r,a,i);return y}});function Jl(e){this.manager=e!==void 0?e:kn,this.textures={}}Object.assign(Jl.prototype,{load:function(e,t,n,i){var r=this,a=new ai(r.manager);a.load(e,function(s){t(r.parse(JSON.parse(s)))},n,i)},setTextures:function(e){this.textures=e},parse:function(e){var t=this.textures;function n(o){return t[o]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",o),t[o]}var i=new jE[e.type];if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular.setHex(e.specular),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearCoat!==void 0&&(i.clearCoat=e.clearCoat),e.clearCoatRoughness!==void 0&&(i.clearCoatRoughness=e.clearCoatRoughness),e.uniforms!==void 0&&(i.uniforms=e.uniforms),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.vertexColors!==void 0&&(i.vertexColors=e.vertexColors),e.fog!==void 0&&(i.fog=e.fog),e.shading!==void 0&&(i.shading=e.shading),e.blending!==void 0&&(i.blending=e.blending),e.side!==void 0&&(i.side=e.side),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.skinning!==void 0&&(i.skinning=e.skinning),e.morphTargets!==void 0&&(i.morphTargets=e.morphTargets),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap),i.transparent=!0),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalScale!==void 0){var r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new Ct().fromArray(r)}if(e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.materials!==void 0)for(var a=0,s=e.materials.length;a<s;a++)i.materials.push(this.parse(e.materials[a]));return i}});function Uf(e){this.manager=e!==void 0?e:kn}Object.assign(Uf.prototype,{load:function(e,t,n,i){var r=this,a=new ai(r.manager);a.load(e,function(s){t(r.parse(JSON.parse(s)))},n,i)},parse:function(e){var t=new Gt,n=e.data.index,i={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};if(n!==void 0){var r=new i[n.type](n.array);t.setIndex(new St(r,1))}var a=e.data.attributes;for(var s in a){var o=a[s],r=new i[o.type](o.array);t.addAttribute(s,new St(r,o.itemSize,o.normalized))}var l=e.data.groups||e.data.drawcalls||e.data.offsets;if(l!==void 0)for(var c=0,u=l.length;c!==u;++c){var h=l[c];t.addGroup(h.start,h.count,h.materialIndex)}var f=e.data.boundingSphere;if(f!==void 0){var d=new U;f.center!==void 0&&d.fromArray(f.center),t.boundingSphere=new on(d,f.radius)}return t}});function Gr(){this.onLoadStart=function(){},this.onLoadProgress=function(){},this.onLoadComplete=function(){}}Gr.prototype={constructor:Gr,crossOrigin:void 0,extractUrlBase:function(e){var t=e.split("/");return t.length===1?"./":(t.pop(),t.join("/")+"/")},initMaterials:function(e,t,n){for(var i=[],r=0;r<e.length;++r)i[r]=this.createMaterial(e[r],t,n);return i},createMaterial:function(){var e,t,n;return function(r,a,s){e===void 0&&(e=new Vt),t===void 0&&(t=new Zl),n===void 0&&(n=new Jl);var o={};function l(f,d,v,p,m){var g=a+f,y=Gr.Handlers.get(g),_;y!==null?_=y.load(g):(t.setCrossOrigin(s),_=t.load(g)),d!==void 0&&(_.repeat.fromArray(d),d[0]!==1&&(_.wrapS=Bi),d[1]!==1&&(_.wrapT=Bi)),v!==void 0&&_.offset.fromArray(v),p!==void 0&&(p[0]==="repeat"&&(_.wrapS=Bi),p[0]==="mirror"&&(_.wrapS=Yr),p[1]==="repeat"&&(_.wrapT=Bi),p[1]==="mirror"&&(_.wrapT=Yr)),m!==void 0&&(_.anisotropy=m);var x=Kt.generateUUID();return o[x]=_,x}var c={uuid:Kt.generateUUID(),type:"MeshLambertMaterial"};for(var u in r){var h=r[u];switch(u){case"DbgColor":case"DbgIndex":case"opticalDensity":case"illumination":break;case"DbgName":c.name=h;break;case"blending":c.blending=uv[h];break;case"colorAmbient":case"mapAmbient":console.warn("THREE.Loader.createMaterial:",u,"is no longer supported.");break;case"colorDiffuse":c.color=e.fromArray(h).getHex();break;case"colorSpecular":c.specular=e.fromArray(h).getHex();break;case"colorEmissive":c.emissive=e.fromArray(h).getHex();break;case"specularCoef":c.shininess=h;break;case"shading":h.toLowerCase()==="basic"&&(c.type="MeshBasicMaterial"),h.toLowerCase()==="phong"&&(c.type="MeshPhongMaterial"),h.toLowerCase()==="standard"&&(c.type="MeshStandardMaterial");break;case"mapDiffuse":c.map=l(h,r.mapDiffuseRepeat,r.mapDiffuseOffset,r.mapDiffuseWrap,r.mapDiffuseAnisotropy);break;case"mapDiffuseRepeat":case"mapDiffuseOffset":case"mapDiffuseWrap":case"mapDiffuseAnisotropy":break;case"mapEmissive":c.emissiveMap=l(h,r.mapEmissiveRepeat,r.mapEmissiveOffset,r.mapEmissiveWrap,r.mapEmissiveAnisotropy);break;case"mapEmissiveRepeat":case"mapEmissiveOffset":case"mapEmissiveWrap":case"mapEmissiveAnisotropy":break;case"mapLight":c.lightMap=l(h,r.mapLightRepeat,r.mapLightOffset,r.mapLightWrap,r.mapLightAnisotropy);break;case"mapLightRepeat":case"mapLightOffset":case"mapLightWrap":case"mapLightAnisotropy":break;case"mapAO":c.aoMap=l(h,r.mapAORepeat,r.mapAOOffset,r.mapAOWrap,r.mapAOAnisotropy);break;case"mapAORepeat":case"mapAOOffset":case"mapAOWrap":case"mapAOAnisotropy":break;case"mapBump":c.bumpMap=l(h,r.mapBumpRepeat,r.mapBumpOffset,r.mapBumpWrap,r.mapBumpAnisotropy);break;case"mapBumpScale":c.bumpScale=h;break;case"mapBumpRepeat":case"mapBumpOffset":case"mapBumpWrap":case"mapBumpAnisotropy":break;case"mapNormal":c.normalMap=l(h,r.mapNormalRepeat,r.mapNormalOffset,r.mapNormalWrap,r.mapNormalAnisotropy);break;case"mapNormalFactor":c.normalScale=[h,h];break;case"mapNormalRepeat":case"mapNormalOffset":case"mapNormalWrap":case"mapNormalAnisotropy":break;case"mapSpecular":c.specularMap=l(h,r.mapSpecularRepeat,r.mapSpecularOffset,r.mapSpecularWrap,r.mapSpecularAnisotropy);break;case"mapSpecularRepeat":case"mapSpecularOffset":case"mapSpecularWrap":case"mapSpecularAnisotropy":break;case"mapMetalness":c.metalnessMap=l(h,r.mapMetalnessRepeat,r.mapMetalnessOffset,r.mapMetalnessWrap,r.mapMetalnessAnisotropy);break;case"mapMetalnessRepeat":case"mapMetalnessOffset":case"mapMetalnessWrap":case"mapMetalnessAnisotropy":break;case"mapRoughness":c.roughnessMap=l(h,r.mapRoughnessRepeat,r.mapRoughnessOffset,r.mapRoughnessWrap,r.mapRoughnessAnisotropy);break;case"mapRoughnessRepeat":case"mapRoughnessOffset":case"mapRoughnessWrap":case"mapRoughnessAnisotropy":break;case"mapAlpha":c.alphaMap=l(h,r.mapAlphaRepeat,r.mapAlphaOffset,r.mapAlphaWrap,r.mapAlphaAnisotropy);break;case"mapAlphaRepeat":case"mapAlphaOffset":case"mapAlphaWrap":case"mapAlphaAnisotropy":break;case"flipSided":c.side=fr;break;case"doubleSided":c.side=Ws;break;case"transparency":console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"),c.opacity=h;break;case"depthTest":case"depthWrite":case"colorWrite":case"opacity":case"reflectivity":case"transparent":case"visible":case"wireframe":c[u]=h;break;case"vertexColors":h===!0&&(c.vertexColors=ma),h==="face"&&(c.vertexColors=mf);break;default:console.error("THREE.Loader.createMaterial: Unsupported",u,h);break}}return c.type==="MeshBasicMaterial"&&delete c.emissive,c.type!=="MeshPhongMaterial"&&delete c.specular,c.opacity<1&&(c.transparent=!0),n.setTextures(o),n.parse(c)}}()};Gr.Handlers={handlers:[],add:function(e,t){this.handlers.push(e,t)},get:function(e){for(var t=this.handlers,n=0,i=t.length;n<i;n+=2){var r=t[n],a=t[n+1];if(r.test(e))return a}return null}};function Of(e){typeof e=="boolean"&&(console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),e=void 0),this.manager=e!==void 0?e:kn,this.withCredentials=!1}Object.assign(Of.prototype,{load:function(e,t,n,i){var r=this,a=this.texturePath&&typeof this.texturePath=="string"?this.texturePath:Gr.prototype.extractUrlBase(e),s=new ai(this.manager);s.setWithCredentials(this.withCredentials),s.load(e,function(o){var l=JSON.parse(o),c=l.metadata;if(c!==void 0){var u=c.type;if(u!==void 0){if(u.toLowerCase()==="object"){console.error("THREE.JSONLoader: "+e+" should be loaded with THREE.ObjectLoader instead.");return}if(u.toLowerCase()==="scene"){console.error("THREE.JSONLoader: "+e+" should be loaded with THREE.SceneLoader instead.");return}}}var h=r.parse(l,a);t(h.geometry,h.materials)},n,i)},setTexturePath:function(e){this.texturePath=e},parse:function(e,t){var n=new Zt,i=e.scale!==void 0?1/e.scale:1;r(i),a(),s(i),o(),n.computeFaceNormals(),n.computeBoundingSphere();function r(c){function u(gt,ft){return gt&1<<ft}var h,f,d,v,p,m,g,y,_,x,M,S,E,b,w,L,G,H,C,T,R,N,V,z,I,B,Z,X=e.faces,k=e.vertices,J=e.normals,it=e.colors,Y=0;if(e.uvs!==void 0){for(h=0;h<e.uvs.length;h++)e.uvs[h].length&&Y++;for(h=0;h<Y;h++)n.faceVertexUvs[h]=[]}for(v=0,p=k.length;v<p;)H=new U,H.x=k[v++]*c,H.y=k[v++]*c,H.z=k[v++]*c,n.vertices.push(H);for(v=0,p=X.length;v<p;)if(x=X[v++],M=u(x,0),S=u(x,1),E=u(x,3),b=u(x,4),w=u(x,5),L=u(x,6),G=u(x,7),M){if(T=new zn,T.a=X[v],T.b=X[v+1],T.c=X[v+3],R=new zn,R.a=X[v+1],R.b=X[v+2],R.c=X[v+3],v+=4,S&&(_=X[v++],T.materialIndex=_,R.materialIndex=_),d=n.faces.length,E)for(h=0;h<Y;h++)for(z=e.uvs[h],n.faceVertexUvs[h][d]=[],n.faceVertexUvs[h][d+1]=[],f=0;f<4;f++)y=X[v++],B=z[y*2],Z=z[y*2+1],I=new Ct(B,Z),f!==2&&n.faceVertexUvs[h][d].push(I),f!==0&&n.faceVertexUvs[h][d+1].push(I);if(b&&(g=X[v++]*3,T.normal.set(J[g++],J[g++],J[g]),R.normal.copy(T.normal)),w)for(h=0;h<4;h++)g=X[v++]*3,V=new U(J[g++],J[g++],J[g]),h!==2&&T.vertexNormals.push(V),h!==0&&R.vertexNormals.push(V);if(L&&(m=X[v++],N=it[m],T.color.setHex(N),R.color.setHex(N)),G)for(h=0;h<4;h++)m=X[v++],N=it[m],h!==2&&T.vertexColors.push(new Vt(N)),h!==0&&R.vertexColors.push(new Vt(N));n.faces.push(T),n.faces.push(R)}else{if(C=new zn,C.a=X[v++],C.b=X[v++],C.c=X[v++],S&&(_=X[v++],C.materialIndex=_),d=n.faces.length,E)for(h=0;h<Y;h++)for(z=e.uvs[h],n.faceVertexUvs[h][d]=[],f=0;f<3;f++)y=X[v++],B=z[y*2],Z=z[y*2+1],I=new Ct(B,Z),n.faceVertexUvs[h][d].push(I);if(b&&(g=X[v++]*3,C.normal.set(J[g++],J[g++],J[g])),w)for(h=0;h<3;h++)g=X[v++]*3,V=new U(J[g++],J[g++],J[g]),C.vertexNormals.push(V);if(L&&(m=X[v++],C.color.setHex(it[m])),G)for(h=0;h<3;h++)m=X[v++],C.vertexColors.push(new Vt(it[m]));n.faces.push(C)}}function a(){var c=e.influencesPerVertex!==void 0?e.influencesPerVertex:2;if(e.skinWeights)for(var u=0,h=e.skinWeights.length;u<h;u+=c){var f=e.skinWeights[u],d=c>1?e.skinWeights[u+1]:0,v=c>2?e.skinWeights[u+2]:0,p=c>3?e.skinWeights[u+3]:0;n.skinWeights.push(new xe(f,d,v,p))}if(e.skinIndices)for(var u=0,h=e.skinIndices.length;u<h;u+=c){var m=e.skinIndices[u],g=c>1?e.skinIndices[u+1]:0,y=c>2?e.skinIndices[u+2]:0,_=c>3?e.skinIndices[u+3]:0;n.skinIndices.push(new xe(m,g,y,_))}n.bones=e.bones,n.bones&&n.bones.length>0&&(n.skinWeights.length!==n.skinIndices.length||n.skinIndices.length!==n.vertices.length)&&console.warn("When skinning, number of vertices ("+n.vertices.length+"), skinIndices ("+n.skinIndices.length+"), and skinWeights ("+n.skinWeights.length+") should match.")}function s(c){if(e.morphTargets!==void 0)for(var u=0,h=e.morphTargets.length;u<h;u++){n.morphTargets[u]={},n.morphTargets[u].name=e.morphTargets[u].name,n.morphTargets[u].vertices=[];for(var f=n.morphTargets[u].vertices,d=e.morphTargets[u].vertices,v=0,p=d.length;v<p;v+=3){var m=new U;m.x=d[v]*c,m.y=d[v+1]*c,m.z=d[v+2]*c,f.push(m)}}if(e.morphColors!==void 0&&e.morphColors.length>0){console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');for(var g=n.faces,y=e.morphColors[0].colors,u=0,h=g.length;u<h;u++)g[u].color.fromArray(y,u*3)}}function o(){var c=[],u=[];e.animation!==void 0&&u.push(e.animation),e.animations!==void 0&&(e.animations.length?u=u.concat(e.animations):u.push(e.animations));for(var h=0;h<u.length;h++){var f=In.parseAnimation(u[h],n.bones);f&&c.push(f)}if(n.morphTargets){var d=In.CreateClipsFromMorphTargetSequences(n.morphTargets,10);c=c.concat(d)}c.length>0&&(n.animations=c)}if(e.materials===void 0||e.materials.length===0)return{geometry:n};var l=Gr.prototype.initMaterials(e.materials,t,this.crossOrigin);return{geometry:n,materials:l}}});function mg(e){this.manager=e!==void 0?e:kn,this.texturePath=""}Object.assign(mg.prototype,{load:function(e,t,n,i){this.texturePath===""&&(this.texturePath=e.substring(0,e.lastIndexOf("/")+1));var r=this,a=new ai(r.manager);a.load(e,function(s){var o=null;try{o=JSON.parse(s)}catch(c){console.error("THREE:ObjectLoader: Can't parse "+e+".",c.message);return}var l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e+". Use THREE.JSONLoader instead.");return}r.parse(o,t)},n,i)},setTexturePath:function(e){this.texturePath=e},setCrossOrigin:function(e){this.crossOrigin=e},parse:function(e,t){var n=this.parseGeometries(e.geometries),i=this.parseImages(e.images,function(){t!==void 0&&t(s)}),r=this.parseTextures(e.textures,i),a=this.parseMaterials(e.materials,r),s=this.parseObject(e.object,n,a);return e.animations&&(s.animations=this.parseAnimations(e.animations)),(e.images===void 0||e.images.length===0)&&t!==void 0&&t(s),s},parseGeometries:function(e){var t={};if(e!==void 0)for(var n=new Of,i=new Uf,r=0,a=e.length;r<a;r++){var s,o=e[r];switch(o.type){case"PlaneGeometry":case"PlaneBufferGeometry":s=new ui[o.type](o.width,o.height,o.widthSegments,o.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":s=new ui[o.type](o.width,o.height,o.depth,o.widthSegments,o.heightSegments,o.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":s=new ui[o.type](o.radius,o.segments,o.thetaStart,o.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":s=new ui[o.type](o.radiusTop,o.radiusBottom,o.height,o.radialSegments,o.heightSegments,o.openEnded,o.thetaStart,o.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":s=new ui[o.type](o.radius,o.height,o.radialSegments,o.heightSegments,o.openEnded,o.thetaStart,o.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":s=new ui[o.type](o.radius,o.widthSegments,o.heightSegments,o.phiStart,o.phiLength,o.thetaStart,o.thetaLength);break;case"DodecahedronGeometry":case"IcosahedronGeometry":case"OctahedronGeometry":case"TetrahedronGeometry":s=new ui[o.type](o.radius,o.detail);break;case"RingGeometry":case"RingBufferGeometry":s=new ui[o.type](o.innerRadius,o.outerRadius,o.thetaSegments,o.phiSegments,o.thetaStart,o.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":s=new ui[o.type](o.radius,o.tube,o.radialSegments,o.tubularSegments,o.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":s=new ui[o.type](o.radius,o.tube,o.tubularSegments,o.radialSegments,o.p,o.q);break;case"LatheGeometry":case"LatheBufferGeometry":s=new ui[o.type](o.points,o.segments,o.phiStart,o.phiLength);break;case"BufferGeometry":s=i.parse(o);break;case"Geometry":s=n.parse(o.data,this.texturePath).geometry;break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+o.type+'"');continue}s.uuid=o.uuid,o.name!==void 0&&(s.name=o.name),t[o.uuid]=s}return t},parseMaterials:function(e,t){var n={};if(e!==void 0){var i=new Jl;i.setTextures(t);for(var r=0,a=e.length;r<a;r++){var s=i.parse(e[r]);n[s.uuid]=s}}return n},parseAnimations:function(e){for(var t=[],n=0;n<e.length;n++){var i=In.parse(e[n]);t.push(i)}return t},parseImages:function(e,t){var n=this,i={};function r(h){return n.manager.itemStart(h),s.load(h,function(){n.manager.itemEnd(h)},void 0,function(){n.manager.itemError(h)})}if(e!==void 0&&e.length>0){var a=new Pf(t),s=new mc(a);s.setCrossOrigin(this.crossOrigin);for(var o=0,l=e.length;o<l;o++){var c=e[o],u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url)?c.url:n.texturePath+c.url;i[c.uuid]=r(u)}}return i},parseTextures:function(e,t){function n(l,c){return typeof l=="number"?l:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",l),c[l])}var i={};if(e!==void 0)for(var r=0,a=e.length;r<a;r++){var s=e[r];s.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',s.uuid),t[s.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",s.image);var o=new Se(t[s.image]);o.needsUpdate=!0,o.uuid=s.uuid,s.name!==void 0&&(o.name=s.name),s.mapping!==void 0&&(o.mapping=n(s.mapping,Iv)),s.offset!==void 0&&o.offset.fromArray(s.offset),s.repeat!==void 0&&o.repeat.fromArray(s.repeat),s.wrap!==void 0&&(o.wrapS=n(s.wrap[0],xh),o.wrapT=n(s.wrap[1],xh)),s.minFilter!==void 0&&(o.minFilter=n(s.minFilter,Mh)),s.magFilter!==void 0&&(o.magFilter=n(s.magFilter,Mh)),s.anisotropy!==void 0&&(o.anisotropy=s.anisotropy),s.flipY!==void 0&&(o.flipY=s.flipY),i[s.uuid]=o}return i},parseObject:function(){var e=new Yt;return function(n,i,r){var a;function s(v){return i[v]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",v),i[v]}function o(v){if(v!==void 0)return r[v]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",v),r[v]}switch(n.type){case"Scene":a=new Kr,n.background!==void 0&&Number.isInteger(n.background)&&(a.background=new Vt(n.background)),n.fog!==void 0&&(n.fog.type==="Fog"?a.fog=new cs(n.fog.color,n.fog.near,n.fog.far):n.fog.type==="FogExp2"&&(a.fog=new os(n.fog.color,n.fog.density)));break;case"PerspectiveCamera":a=new nn(n.fov,n.aspect,n.near,n.far),n.focus!==void 0&&(a.focus=n.focus),n.zoom!==void 0&&(a.zoom=n.zoom),n.filmGauge!==void 0&&(a.filmGauge=n.filmGauge),n.filmOffset!==void 0&&(a.filmOffset=n.filmOffset),n.view!==void 0&&(a.view=Object.assign({},n.view));break;case"OrthographicCamera":a=new ss(n.left,n.right,n.top,n.bottom,n.near,n.far);break;case"AmbientLight":a=new wl(n.color,n.intensity);break;case"DirectionalLight":a=new bl(n.color,n.intensity);break;case"PointLight":a=new xl(n.color,n.intensity,n.distance,n.decay);break;case"SpotLight":a=new yl(n.color,n.intensity,n.distance,n.angle,n.penumbra,n.decay);break;case"HemisphereLight":a=new gl(n.color,n.groundColor,n.intensity);break;case"Mesh":var l=s(n.geometry),c=o(n.material);l.bones&&l.bones.length>0?a=new pl(l,c):a=new Ze(l,c);break;case"LOD":a=new Po;break;case"Line":a=new Xi(s(n.geometry),o(n.material),n.mode);break;case"LineSegments":a=new Te(s(n.geometry),o(n.material));break;case"PointCloud":case"Points":a=new ls(s(n.geometry),o(n.material));break;case"Sprite":a=new Ro(o(n.material));break;case"Group":a=new Fo;break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh type. Instantiates Object3D instead.");default:a=new Pt}if(a.uuid=n.uuid,n.name!==void 0&&(a.name=n.name),n.matrix!==void 0?(e.fromArray(n.matrix),e.decompose(a.position,a.quaternion,a.scale)):(n.position!==void 0&&a.position.fromArray(n.position),n.rotation!==void 0&&a.rotation.fromArray(n.rotation),n.quaternion!==void 0&&a.quaternion.fromArray(n.quaternion),n.scale!==void 0&&a.scale.fromArray(n.scale)),n.castShadow!==void 0&&(a.castShadow=n.castShadow),n.receiveShadow!==void 0&&(a.receiveShadow=n.receiveShadow),n.shadow&&(n.shadow.bias!==void 0&&(a.shadow.bias=n.shadow.bias),n.shadow.radius!==void 0&&(a.shadow.radius=n.shadow.radius),n.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(n.shadow.mapSize),n.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(n.shadow.camera))),n.visible!==void 0&&(a.visible=n.visible),n.userData!==void 0&&(a.userData=n.userData),n.children!==void 0)for(var u in n.children)a.add(this.parseObject(n.children[u],i,r));if(n.type==="LOD")for(var h=n.levels,f=0;f<h.length;f++){var d=h[f],u=a.getObjectByProperty("uuid",d.object);u!==void 0&&a.addLevel(u,d.distance)}return a}}()});function ln(){}ln.prototype={constructor:ln,getPoint:function(e){return console.warn("THREE.Curve: Warning, getPoint() not implemented!"),null},getPointAt:function(e){var t=this.getUtoTmapping(e);return this.getPoint(t)},getPoints:function(e){e||(e=5);for(var t=[],n=0;n<=e;n++)t.push(this.getPoint(n/e));return t},getSpacedPoints:function(e){e||(e=5);for(var t=[],n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t},getLength:function(){var e=this.getLengths();return e[e.length-1]},getLengths:function(e){if(e||(e=this.__arcLengthDivisions?this.__arcLengthDivisions:200),this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var t=[],n,i=this.getPoint(0),r,a=0;for(t.push(0),r=1;r<=e;r++)n=this.getPoint(r/e),a+=n.distanceTo(i),t.push(a),i=n;return this.cacheArcLengths=t,t},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(e,t){var n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];for(var s=0,o=r-1,l;s<=o;)if(i=Math.floor(s+(o-s)/2),l=n[i]-a,l<0)s=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,n[i]===a){var d=i/(r-1);return d}var c=n[i],u=n[i+1],h=u-c,f=(a-c)/h,d=(i+f)/(r-1);return d},getTangent:function(e){var t=1e-4,n=e-t,i=e+t;n<0&&(n=0),i>1&&(i=1);var r=this.getPoint(n),a=this.getPoint(i),s=a.clone().sub(r);return s.normalize()},getTangentAt:function(e){var t=this.getUtoTmapping(e);return this.getTangent(t)},computeFrenetFrames:function(e,t){var n=new U,i=[],r=[],a=[],s=new U,o=new Yt,l,c,u;for(l=0;l<=e;l++)c=l/e,i[l]=this.getTangentAt(c),i[l].normalize();r[0]=new U,a[0]=new U;var h=Number.MAX_VALUE,f=Math.abs(i[0].x),d=Math.abs(i[0].y),v=Math.abs(i[0].z);for(f<=h&&(h=f,n.set(1,0,0)),d<=h&&(h=d,n.set(0,1,0)),v<=h&&n.set(0,0,1),s.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],s),a[0].crossVectors(i[0],r[0]),l=1;l<=e;l++)r[l]=r[l-1].clone(),a[l]=a[l-1].clone(),s.crossVectors(i[l-1],i[l]),s.length()>Number.EPSILON&&(s.normalize(),u=Math.acos(Kt.clamp(i[l-1].dot(i[l]),-1,1)),r[l].applyMatrix4(o.makeRotationAxis(s,u))),a[l].crossVectors(i[l],r[l]);if(t===!0)for(u=Math.acos(Kt.clamp(r[0].dot(r[e]),-1,1)),u/=e,i[0].dot(s.crossVectors(r[0],r[e]))>0&&(u=-u),l=1;l<=e;l++)r[l].applyMatrix4(o.makeRotationAxis(i[l],u*l)),a[l].crossVectors(i[l],r[l]);return{tangents:i,normals:r,binormals:a}}};ln.create=function(e,t){return e.prototype=Object.create(ln.prototype),e.prototype.constructor=e,e.prototype.getPoint=t,e};function Ai(e,t){this.v1=e,this.v2=t}Ai.prototype=Object.create(ln.prototype);Ai.prototype.constructor=Ai;Ai.prototype.isLineCurve=!0;Ai.prototype.getPoint=function(e){if(e===1)return this.v2.clone();var t=this.v2.clone().sub(this.v1);return t.multiplyScalar(e).add(this.v1),t};Ai.prototype.getPointAt=function(e){return this.getPoint(e)};Ai.prototype.getTangent=function(e){var t=this.v2.clone().sub(this.v1);return t.normalize()};function ec(){this.curves=[],this.autoClose=!1}ec.prototype=Object.assign(Object.create(ln.prototype),{constructor:ec,add:function(e){this.curves.push(e)},closePath:function(){var e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ai(t,e))},getPoint:function(e){for(var t=e*this.getLength(),n=this.getCurveLengths(),i=0;i<n.length;){if(n[i]>=t){var r=n[i]-t,a=this.curves[i],s=a.getLength(),o=s===0?0:1-r/s;return a.getPointAt(o)}i++}return null},getLength:function(){var e=this.getCurveLengths();return e[e.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var e=[],t=0,n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e},getSpacedPoints:function(e){e||(e=40);for(var t=[],n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t},getPoints:function(e){e=e||12;for(var t=[],n,i=0,r=this.curves;i<r.length;i++)for(var a=r[i],s=a&&a.isEllipseCurve?e*2:a&&a.isLineCurve?1:a&&a.isSplineCurve?e*a.points.length:e,o=a.getPoints(s),l=0;l<o.length;l++){var c=o[l];n&&n.equals(c)||(t.push(c),n=c)}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t},createPointsGeometry:function(e){var t=this.getPoints(e);return this.createGeometry(t)},createSpacedPointsGeometry:function(e){var t=this.getSpacedPoints(e);return this.createGeometry(t)},createGeometry:function(e){for(var t=new Zt,n=0,i=e.length;n<i;n++){var r=e[n];t.vertices.push(new U(r.x,r.y,r.z||0))}return t}});function Yi(e,t,n,i,r,a,s,o){this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=s,this.aRotation=o||0}Yi.prototype=Object.create(ln.prototype);Yi.prototype.constructor=Yi;Yi.prototype.isEllipseCurve=!0;Yi.prototype.getPoint=function(e){for(var t=Math.PI*2,n=this.aEndAngle-this.aStartAngle,i=Math.abs(n)<Number.EPSILON;n<0;)n+=t;for(;n>t;)n-=t;n<Number.EPSILON&&(i?n=0:n=t),this.aClockwise===!0&&!i&&(n===t?n=-t:n=n-t);var r=this.aStartAngle+e*n,a=this.aX+this.xRadius*Math.cos(r),s=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){var o=Math.cos(this.aRotation),l=Math.sin(this.aRotation),c=a-this.aX,u=s-this.aY;a=c*o-u*l+this.aX,s=c*l+u*o+this.aY}return new Ct(a,s)};var vc={tangentQuadraticBezier:function(e,t,n,i){return 2*(1-e)*(n-t)+2*e*(i-n)},tangentCubicBezier:function(e,t,n,i,r){return-3*t*(1-e)*(1-e)+3*n*(1-e)*(1-e)-6*e*n*(1-e)+6*e*i*(1-e)-3*e*e*i+3*e*e*r},tangentSpline:function(e,t,n,i,r){var a=6*e*e-6*e,s=3*e*e-4*e+1,o=-6*e*e+6*e,l=3*e*e-2*e;return a+s+o+l},interpolate:function(e,t,n,i,r){var a=(n-e)*.5,s=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+a+s)*l+(-3*t+3*n-2*a-s)*o+a*r+t}};function la(e){this.points=e===void 0?[]:e}la.prototype=Object.create(ln.prototype);la.prototype.constructor=la;la.prototype.isSplineCurve=!0;la.prototype.getPoint=function(e){var t=this.points,n=(t.length-1)*e,i=Math.floor(n),r=n-i,a=t[i===0?i:i-1],s=t[i],o=t[i>t.length-2?t.length-1:i+1],l=t[i>t.length-3?t.length-1:i+2],c=vc.interpolate;return new Ct(c(a.x,s.x,o.x,l.x,r),c(a.y,s.y,o.y,l.y,r))};function ua(e,t,n,i){this.v0=e,this.v1=t,this.v2=n,this.v3=i}ua.prototype=Object.create(ln.prototype);ua.prototype.constructor=ua;ua.prototype.getPoint=function(e){var t=Qe.b3;return new Ct(t(e,this.v0.x,this.v1.x,this.v2.x,this.v3.x),t(e,this.v0.y,this.v1.y,this.v2.y,this.v3.y))};ua.prototype.getTangent=function(e){var t=vc.tangentCubicBezier;return new Ct(t(e,this.v0.x,this.v1.x,this.v2.x,this.v3.x),t(e,this.v0.y,this.v1.y,this.v2.y,this.v3.y)).normalize()};function ha(e,t,n){this.v0=e,this.v1=t,this.v2=n}ha.prototype=Object.create(ln.prototype);ha.prototype.constructor=ha;ha.prototype.getPoint=function(e){var t=Qe.b2;return new Ct(t(e,this.v0.x,this.v1.x,this.v2.x),t(e,this.v0.y,this.v1.y,this.v2.y))};ha.prototype.getTangent=function(e){var t=vc.tangentQuadraticBezier;return new Ct(t(e,this.v0.x,this.v1.x,this.v2.x),t(e,this.v0.y,this.v1.y,this.v2.y)).normalize()};var Nf=Object.assign(Object.create(ec.prototype),{fromPoints:function(e){this.moveTo(e[0].x,e[0].y);for(var t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y)},moveTo:function(e,t){this.currentPoint.set(e,t)},lineTo:function(e,t){var n=new Ai(this.currentPoint.clone(),new Ct(e,t));this.curves.push(n),this.currentPoint.set(e,t)},quadraticCurveTo:function(e,t,n,i){var r=new ha(this.currentPoint.clone(),new Ct(e,t),new Ct(n,i));this.curves.push(r),this.currentPoint.set(n,i)},bezierCurveTo:function(e,t,n,i,r,a){var s=new ua(this.currentPoint.clone(),new Ct(e,t),new Ct(n,i),new Ct(r,a));this.curves.push(s),this.currentPoint.set(r,a)},splineThru:function(e){var t=[this.currentPoint.clone()].concat(e),n=new la(t);this.curves.push(n),this.currentPoint.copy(e[e.length-1])},arc:function(e,t,n,i,r,a){var s=this.currentPoint.x,o=this.currentPoint.y;this.absarc(e+s,t+o,n,i,r,a)},absarc:function(e,t,n,i,r,a){this.absellipse(e,t,n,n,i,r,a)},ellipse:function(e,t,n,i,r,a,s,o){var l=this.currentPoint.x,c=this.currentPoint.y;this.absellipse(e+l,t+c,n,i,r,a,s,o)},absellipse:function(e,t,n,i,r,a,s,o){var l=new Yi(e,t,n,i,r,a,s,o);if(this.curves.length>0){var c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);var u=l.getPoint(1);this.currentPoint.copy(u)}});function kr(){gc.apply(this,arguments),this.holes=[]}kr.prototype=Object.assign(Object.create(Nf),{constructor:kr,getPointsHoles:function(e){for(var t=[],n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t},extractAllPoints:function(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}},extractPoints:function(e){return this.extractAllPoints(e)}});function gc(e){ec.call(this),this.currentPoint=new Ct,e&&this.fromPoints(e)}gc.prototype=Nf;Nf.constructor=gc;function zf(){this.subPaths=[],this.currentPath=null}zf.prototype={moveTo:function(e,t){this.currentPath=new gc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t)},lineTo:function(e,t){this.currentPath.lineTo(e,t)},quadraticCurveTo:function(e,t,n,i){this.currentPath.quadraticCurveTo(e,t,n,i)},bezierCurveTo:function(e,t,n,i,r,a){this.currentPath.bezierCurveTo(e,t,n,i,r,a)},splineThru:function(e){this.currentPath.splineThru(e)},toShapes:function(e,t){function n(R){for(var N=[],V=0,z=R.length;V<z;V++){var I=R[V],B=new kr;B.curves=I.curves,N.push(B)}return N}function i(R,N){for(var V=N.length,z=!1,I=V-1,B=0;B<V;I=B++){var Z=N[I],X=N[B],k=X.x-Z.x,J=X.y-Z.y;if(Math.abs(J)>Number.EPSILON){if(J<0&&(Z=N[B],k=-k,X=N[I],J=-J),R.y<Z.y||R.y>X.y)continue;if(R.y===Z.y){if(R.x===Z.x)return!0}else{var it=J*(R.x-Z.x)-k*(R.y-Z.y);if(it===0)return!0;if(it<0)continue;z=!z}}else{if(R.y!==Z.y)continue;if(X.x<=R.x&&R.x<=Z.x||Z.x<=R.x&&R.x<=X.x)return!0}}return z}var r=Qe.isClockWise,a=this.subPaths;if(a.length===0)return[];if(t===!0)return n(a);var s,o,l,c=[];if(a.length===1)return o=a[0],l=new kr,l.curves=o.curves,c.push(l),c;var u=!r(a[0].getPoints());u=e?!u:u;var h=[],f=[],d=[],v=0,p;f[v]=void 0,d[v]=[];for(var m=0,g=a.length;m<g;m++)o=a[m],p=o.getPoints(),s=r(p),s=e?!s:s,s?(!u&&f[v]&&v++,f[v]={s:new kr,p},f[v].s.curves=o.curves,u&&v++,d[v]=[]):d[v].push({h:o,p:p[0]});if(!f[0])return n(a);if(f.length>1){for(var y=!1,_=[],x=0,M=f.length;x<M;x++)h[x]=[];for(var x=0,M=f.length;x<M;x++)for(var S=d[x],E=0;E<S.length;E++){for(var b=S[E],w=!0,L=0;L<f.length;L++)i(b.p,f[L].p)&&(x!==L&&_.push({froms:x,tos:L,hole:E}),w?(w=!1,h[L].push(b)):y=!0);w&&h[x].push(b)}_.length>0&&(y||(d=h))}for(var G,m=0,H=f.length;m<H;m++){l=f[m].s,c.push(l),G=d[m];for(var C=0,T=G.length;C<T;C++)l.holes.push(G[C].h)}return c}};function Bf(e){this.data=e}Object.assign(Bf.prototype,{isFont:!0,generateShapes:function(e,t,n){function i(u){for(var h=String(u).split(""),f=t/a.resolution,d=0,v=[],p=0;p<h.length;p++){var m=r(h[p],f,d);d+=m.offset,v.push(m.path)}return v}function r(u,h,f){var d=a.glyphs[u]||a.glyphs["?"];if(!!d){var v=new zf,p=[],m=Qe.b2,g=Qe.b3,y,_,x,M,S,E,b,w,L,G,H;if(d.o)for(var C=d._cachedOutline||(d._cachedOutline=d.o.split(" ")),T=0,R=C.length;T<R;){var N=C[T++];switch(N){case"m":y=C[T++]*h+f,_=C[T++]*h,v.moveTo(y,_);break;case"l":y=C[T++]*h+f,_=C[T++]*h,v.lineTo(y,_);break;case"q":if(x=C[T++]*h+f,M=C[T++]*h,b=C[T++]*h+f,w=C[T++]*h,v.quadraticCurveTo(b,w,x,M),H=p[p.length-1],H){S=H.x,E=H.y;for(var V=1;V<=n;V++){var z=V/n;m(z,S,b,x),m(z,E,w,M)}}break;case"b":if(x=C[T++]*h+f,M=C[T++]*h,b=C[T++]*h+f,w=C[T++]*h,L=C[T++]*h+f,G=C[T++]*h,v.bezierCurveTo(b,w,L,G,x,M),H=p[p.length-1],H){S=H.x,E=H.y;for(var V=1;V<=n;V++){var z=V/n;g(z,S,b,L,x),g(z,E,w,G,M)}}break}}return{offset:d.ha*h,path:v}}}t===void 0&&(t=100),n===void 0&&(n=4);for(var a=this.data,s=i(e),o=[],l=0,c=s.length;l<c;l++)Array.prototype.push.apply(o,s[l].toShapes());return o}});function vg(e){this.manager=e!==void 0?e:kn}Object.assign(vg.prototype,{load:function(e,t,n,i){var r=this,a=new ai(this.manager);a.load(e,function(s){var o;try{o=JSON.parse(s)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),o=JSON.parse(s.substring(65,s.length-2))}var l=r.parse(o);t&&t(l)},n,i)},parse:function(e){return new Bf(e)}});var Hc,Gf={getContext:function(){return Hc===void 0&&(Hc=new(window.AudioContext||window.webkitAudioContext)),Hc},setContext:function(e){Hc=e}};function kf(e){this.manager=e!==void 0?e:kn}Object.assign(kf.prototype,{load:function(e,t,n,i){var r=new ai(this.manager);r.setResponseType("arraybuffer"),r.load(e,function(a){var s=Gf.getContext();s.decodeAudioData(a,function(o){t(o)})},n,i)}});function Fh(e,t,n,i){Ne.call(this,e,t),this.type="RectAreaLight",this.position.set(0,1,0),this.updateMatrix(),this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}Fh.prototype=Object.assign(Object.create(Ne.prototype),{constructor:Fh,isRectAreaLight:!0,copy:function(e){return Ne.prototype.copy.call(this,e),this.width=e.width,this.height=e.height,this}});function gg(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new nn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new nn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1}Object.assign(gg.prototype,{update:function(){var e,t,n,i,r,a,s,o=new Yt,l=new Yt;return function(u){var h=e!==this||t!==u.focus||n!==u.fov||i!==u.aspect*this.aspect||r!==u.near||a!==u.far||s!==u.zoom;if(h){e=this,t=u.focus,n=u.fov,i=u.aspect*this.aspect,r=u.near,a=u.far,s=u.zoom;var f=u.projectionMatrix.clone(),d=this.eyeSep/2,v=d*r/t,p=r*Math.tan(Kt.DEG2RAD*n*.5)/s,m,g;l.elements[12]=-d,o.elements[12]=d,m=-p*i+v,g=p*i+v,f.elements[0]=2*r/(g-m),f.elements[8]=(g+m)/(g-m),this.cameraL.projectionMatrix.copy(f),m=-p*i-v,g=p*i-v,f.elements[0]=2*r/(g-m),f.elements[8]=(g+m)/(g-m),this.cameraR.projectionMatrix.copy(f)}this.cameraL.matrixWorld.copy(u.matrixWorld).multiply(l),this.cameraR.matrixWorld.copy(u.matrixWorld).multiply(o)}}()});function Dl(e,t,n){Pt.call(this),this.type="CubeCamera";var i=90,r=1,a=new nn(i,r,e,t);a.up.set(0,-1,0),a.lookAt(new U(1,0,0)),this.add(a);var s=new nn(i,r,e,t);s.up.set(0,-1,0),s.lookAt(new U(-1,0,0)),this.add(s);var o=new nn(i,r,e,t);o.up.set(0,0,1),o.lookAt(new U(0,1,0)),this.add(o);var l=new nn(i,r,e,t);l.up.set(0,0,-1),l.lookAt(new U(0,-1,0)),this.add(l);var c=new nn(i,r,e,t);c.up.set(0,-1,0),c.lookAt(new U(0,0,1)),this.add(c);var u=new nn(i,r,e,t);u.up.set(0,-1,0),u.lookAt(new U(0,0,-1)),this.add(u);var h={format:ns,magFilter:wn,minFilter:wn};this.renderTarget=new rs(n,n,h),this.updateCubeMap=function(f,d){this.parent===null&&this.updateMatrixWorld();var v=this.renderTarget,p=v.texture.generateMipmaps;v.texture.generateMipmaps=!1,v.activeCubeFace=0,f.render(d,a,v),v.activeCubeFace=1,f.render(d,s,v),v.activeCubeFace=2,f.render(d,o,v),v.activeCubeFace=3,f.render(d,l,v),v.activeCubeFace=4,f.render(d,c,v),v.texture.generateMipmaps=p,v.activeCubeFace=5,f.render(d,u,v),f.setRenderTarget(null)}}Dl.prototype=Object.create(Pt.prototype);Dl.prototype.constructor=Dl;function Ih(){Pt.call(this),this.type="AudioListener",this.context=Gf.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null}Ih.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Ih,getInput:function(){return this.gain},removeFilter:function(){this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null)},getFilter:function(){return this.filter},setFilter:function(e){this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination)},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(e){this.gain.gain.value=e},updateMatrixWorld:function(){var e=new U,t=new We,n=new U,i=new U;return function(a){Pt.prototype.updateMatrixWorld.call(this,a);var s=this.context.listener,o=this.up;this.matrixWorld.decompose(e,t,n),i.set(0,0,-1).applyQuaternion(t),s.positionX?(s.positionX.setValueAtTime(e.x,this.context.currentTime),s.positionY.setValueAtTime(e.y,this.context.currentTime),s.positionZ.setValueAtTime(e.z,this.context.currentTime),s.forwardX.setValueAtTime(i.x,this.context.currentTime),s.forwardY.setValueAtTime(i.y,this.context.currentTime),s.forwardZ.setValueAtTime(i.z,this.context.currentTime),s.upX.setValueAtTime(o.x,this.context.currentTime),s.upY.setValueAtTime(o.y,this.context.currentTime),s.upZ.setValueAtTime(o.z,this.context.currentTime)):(s.setPosition(e.x,e.y,e.z),s.setOrientation(i.x,i.y,i.z,o.x,o.y,o.z))}}()});function Ds(e){Pt.call(this),this.type="Audio",this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.loop=!1,this.startTime=0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.sourceType="empty",this.filters=[]}Ds.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Ds,getOutput:function(){return this.gain},setNodeSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this},setBuffer:function(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this},play:function(){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}var e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.onended=this.onEnded.bind(this),e.playbackRate.setValueAtTime(this.playbackRate,this.startTime),e.start(0,this.startTime),this.isPlaying=!0,this.source=e,this.connect()},pause:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.source.stop(),this.startTime=this.context.currentTime,this.isPlaying=!1,this},stop:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.source.stop(),this.startTime=0,this.isPlaying=!1,this},connect:function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(var e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(var e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(e){return e||(e=[]),this.isPlaying===!0?(this.disconnect(),this.filters=e,this.connect()):this.filters=e,this},getFilter:function(){return this.getFilters()[0]},setFilter:function(e){return this.setFilters(e?[e]:[])},setPlaybackRate:function(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setValueAtTime(this.playbackRate,this.context.currentTime),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this},getVolume:function(){return this.gain.gain.value},setVolume:function(e){return this.gain.gain.value=e,this}});function Uh(e){Ds.call(this,e),this.panner=this.context.createPanner(),this.panner.connect(this.gain)}Uh.prototype=Object.assign(Object.create(Ds.prototype),{constructor:Uh,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(e){this.panner.refDistance=e},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(e){this.panner.rolloffFactor=e},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(e){this.panner.distanceModel=e},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(e){this.panner.maxDistance=e},updateMatrixWorld:function(){var e=new U;return function(n){Pt.prototype.updateMatrixWorld.call(this,n),e.setFromMatrixPosition(this.matrixWorld),this.panner.setPosition(e.x,e.y,e.z)}}()});function Vf(e,t){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t!==void 0?t:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}Object.assign(Vf.prototype,{getFrequencyData:function(){return this.analyser.getByteFrequencyData(this.data),this.data},getAverageFrequency:function(){for(var e=0,t=this.getFrequencyData(),n=0;n<t.length;n++)e+=t[n];return e/t.length}});function Rl(e,t,n){this.binding=e,this.valueSize=n;var i=Float64Array,r;switch(t){case"quaternion":r=this._slerp;break;case"string":case"bool":i=Array,r=this._select;break;default:r=this._lerp}this.buffer=new i(n*4),this._mixBufferRegion=r,this.cumulativeWeight=0,this.useCount=0,this.referenceCount=0}Rl.prototype={constructor:Rl,accumulate:function(e,t){var n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(var s=0;s!==i;++s)n[r+s]=n[s];a=t}else{a+=t;var o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a},apply:function(e){var t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.binding;if(this.cumulativeWeight=0,r<1){var s=t*3;this._mixBufferRegion(n,i,s,1-r,t)}for(var o=t,l=t+t;o!==l;++o)if(n[o]!==n[o+t]){a.setValue(n,i);break}},saveOriginalState:function(){var e=this.binding,t=this.buffer,n=this.valueSize,i=n*3;e.getValue(t,i);for(var r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this.cumulativeWeight=0},restoreOriginalState:function(){var e=this.valueSize*3;this.binding.setValue(this.buffer,e)},_select:function(e,t,n,i,r){if(i>=.5)for(var a=0;a!==r;++a)e[t+a]=e[n+a]},_slerp:function(e,t,n,i,r){We.slerpFlat(e,t,e,t,e,n,i)},_lerp:function(e,t,n,i,r){for(var a=1-i,s=0;s!==r;++s){var o=t+s;e[o]=e[o]*a+e[n+s]*i}}};function Fe(e,t,n){this.path=t,this.parsedPath=n||Fe.parseTrackName(t),this.node=Fe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e}Fe.prototype={constructor:Fe,getValue:function(t,n){this.bind(),this.getValue(t,n)},setValue:function(t,n){this.bind(),this.setValue(t,n)},bind:function(){var e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=Fe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("  trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){var a=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("  can not bind to material as node does not have a material",this);return}if(!e.material.materials){console.error("  can not bind to material.materials as node.material does not have a materials array",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("  can not bind to bones as node does not have a skeleton",this);return}e=e.skeleton.bones;for(var s=0;s<e.length;s++)if(e[s].name===a){a=s;break}break;default:if(e[n]===void 0){console.error("  can not bind to objectName of node, undefined",this);return}e=e[n]}if(a!==void 0){if(e[a]===void 0){console.error("  trying to bind to objectIndex of objectName, but is undefined:",this,e);return}e=e[a]}}var o=e[i];if(o===void 0){var l=t.nodeName;console.error("  trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}var c=this.Versioning.None;e.needsUpdate!==void 0?(c=this.Versioning.NeedsUpdate,this.targetObject=e):e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate,this.targetObject=e);var u=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry",this);return}if(!e.geometry.morphTargets){console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets",this);return}for(var s=0;s<this.node.geometry.morphTargets.length;s++)if(e.geometry.morphTargets[s].name===r){r=s;break}}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):o.length!==void 0?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Object.assign(Fe.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},_getValue_unbound:Fe.prototype.getValue,_setValue_unbound:Fe.prototype.setValue,BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,n){t[n]=this.node[this.propertyName]},function(t,n){for(var i=this.resolvedProperty,r=0,a=i.length;r!==a;++r)t[n++]=i[r]},function(t,n){t[n]=this.resolvedProperty[this.propertyIndex]},function(t,n){this.resolvedProperty.toArray(t,n)}],SetterByBindingTypeAndVersioning:[[function(t,n){this.node[this.propertyName]=t[n]},function(t,n){this.node[this.propertyName]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.node[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){for(var i=this.resolvedProperty,r=0,a=i.length;r!==a;++r)i[r]=t[n++]},function(t,n){for(var i=this.resolvedProperty,r=0,a=i.length;r!==a;++r)i[r]=t[n++];this.targetObject.needsUpdate=!0},function(t,n){for(var i=this.resolvedProperty,r=0,a=i.length;r!==a;++r)i[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty[this.propertyIndex]=t[n]},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty.fromArray(t,n)},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}]]});Fe.Composite=function(e,t,n){var i=n||Fe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)};Fe.Composite.prototype={constructor:Fe.Composite,getValue:function(e,t){this.bind();var n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)},setValue:function(e,t){for(var n=this._bindings,i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)},bind:function(){for(var e=this._bindings,t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()},unbind:function(){for(var e=this._bindings,t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};Fe.create=function(e,t,n){return e&&e.isAnimationObjectGroup?new Fe.Composite(e,t,n):new Fe(e,t,n)};Fe.parseTrackName=function(e){var t=/^((?:[\w-]+[\/:])*)([\w-]+)?(?:\.([\w-]+)(?:\[(.+)\])?)?\.([\w-]+)(?:\[(.+)\])?$/,n=t.exec(e);if(!n)throw new Error("cannot parse trackName at all: "+e);var i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]};if(i.propertyName===null||i.propertyName.length===0)throw new Error("can not parse propertyName from trackName: "+e);return i};Fe.findNode=function(e,t){if(!t||t===""||t==="root"||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){var n=function(s){for(var o=0;o<s.bones.length;o++){var l=s.bones[o];if(l.name===t)return l}return null},i=n(e.skeleton);if(i)return i}if(e.children){var r=function(s){for(var o=0;o<s.length;o++){var l=s[o];if(l.name===t||l.uuid===t)return l;var c=r(l.children);if(c)return c}return null},a=r(e.children);if(a)return a}return null};function Oh(e){this.uuid=Kt.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;var t={};this._indicesByUUID=t;for(var n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};var r=this;this.stats={objects:{get total(){return r._objects.length},get inUse(){return this.total-r.nCachedObjects_}},get bindingsPerObject(){return r._bindings.length}}}Oh.prototype={constructor:Oh,isAnimationObjectGroup:!0,add:function(e){for(var t=this._objects,n=t.length,i=this.nCachedObjects_,r=this._indicesByUUID,a=this._paths,s=this._parsedPaths,o=this._bindings,l=o.length,c=0,u=arguments.length;c!==u;++c){var h=arguments[c],f=h.uuid,d=r[f],v=void 0;if(d===void 0){d=n++,r[f]=d,t.push(h);for(var p=0,m=l;p!==m;++p)o[p].push(new Fe(h,a[p],s[p]))}else if(d<i){v=t[d];var g=--i,y=t[g];r[y.uuid]=d,t[d]=y,r[f]=g,t[g]=h;for(var p=0,m=l;p!==m;++p){var _=o[p],x=_[g],M=_[d];_[d]=x,M===void 0&&(M=new Fe(h,a[p],s[p])),_[g]=M}}else t[d]!==v&&console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")}this.nCachedObjects_=i},remove:function(e){for(var t=this._objects,n=this.nCachedObjects_,i=this._indicesByUUID,r=this._bindings,a=r.length,s=0,o=arguments.length;s!==o;++s){var l=arguments[s],c=l.uuid,u=i[c];if(u!==void 0&&u>=n){var h=n++,f=t[h];i[f.uuid]=u,t[u]=f,i[c]=h,t[h]=l;for(var d=0,v=a;d!==v;++d){var p=r[d],m=p[h],g=p[u];p[u]=m,p[h]=g}}}this.nCachedObjects_=n},uncache:function(e){for(var t=this._objects,n=t.length,i=this.nCachedObjects_,r=this._indicesByUUID,a=this._bindings,s=a.length,o=0,l=arguments.length;o!==l;++o){var c=arguments[o],u=c.uuid,h=r[u];if(h!==void 0)if(delete r[u],h<i){var f=--i,d=t[f],v=--n,p=t[v];r[d.uuid]=h,t[h]=d,r[p.uuid]=f,t[f]=p,t.pop();for(var m=0,g=s;m!==g;++m){var y=a[m],_=y[f],x=y[v];y[h]=_,y[f]=x,y.pop()}}else{var v=--n,p=t[v];r[p.uuid]=h,t[h]=p,t.pop();for(var m=0,g=s;m!==g;++m){var y=a[m];y[h]=y[v],y.pop()}}}this.nCachedObjects_=i},subscribe_:function(e,t){var n=this._bindingsIndicesByPath,i=n[e],r=this._bindings;if(i!==void 0)return r[i];var a=this._paths,s=this._parsedPaths,o=this._objects,l=o.length,c=this.nCachedObjects_,u=new Array(l);i=r.length,n[e]=i,a.push(e),s.push(t),r.push(u);for(var h=c,f=o.length;h!==f;++h){var d=o[h];u[h]=new Fe(d,e,t)}return u},unsubscribe_:function(e){var t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){var i=this._paths,r=this._parsedPaths,a=this._bindings,s=a.length-1,o=a[s],l=e[s];t[l]=n,a[n]=o,a.pop(),r[n]=r[s],r.pop(),i[n]=i[s],i.pop()}}};function Nh(e,t,n){this._mixer=e,this._clip=t,this._localRoot=n||null;for(var i=t.tracks,r=i.length,a=new Array(r),s={endingStart:jr,endingEnd:jr},o=0;o!==r;++o){var l=i[o].createInterpolant(null);a[o]=l,l.settings=s}this._interpolantSettings=s,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=qv,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}Nh.prototype={constructor:Nh,play:function(){return this._mixer._activateAction(this),this},stop:function(){return this._mixer._deactivateAction(this),this.reset()},reset:function(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(e){return this._startTime=e,this},setLoop:function(e,t){return this.loop=e,this.repetitions=t,this},setEffectiveWeight:function(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(e){return this._scheduleFading(e,0,1)},fadeOut:function(e){return this._scheduleFading(e,1,0)},crossFadeFrom:function(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){var i=this._clip.duration,r=e._clip.duration,a=r/i,s=i/r;e.warp(1,a,t),this.warp(s,1,t)}return this},crossFadeTo:function(e,t,n){return e.crossFadeFrom(this,t,n)},stopFading:function(){var e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this},setEffectiveTimeScale:function(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(e){return this.timeScale=this._clip.duration/e,this.stopWarping()},syncWith:function(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()},halt:function(e){return this.warp(this._effectiveTimeScale,0,e)},warp:function(e,t,n){var i=this._mixer,r=i.time,a=this._timeScaleInterpolant,s=this.timeScale;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);var o=a.parameterPositions,l=a.sampleValues;return o[0]=r,o[1]=r+n,l[0]=e/s,l[1]=t/s,this},stopWarping:function(){var e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},_update:function(e,t,n,i){var r=this._startTime;if(r!==null){var a=(e-r)*n;if(a<0||n===0)return;this._startTime=null,t=n*a}t*=this._updateTimeScale(e);var s=this._updateTime(t),o=this._updateWeight(e);if(o>0)for(var l=this._interpolants,c=this._propertyBindings,u=0,h=l.length;u!==h;++u)l[u].evaluate(s),c[u].accumulate(i,o)},_updateWeight:function(e){var t=0;if(this.enabled){t=this.weight;var n=this._weightInterpolant;if(n!==null){var i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t},_updateTimeScale:function(e){var t=0;if(!this.paused){t=this.timeScale;var n=this._timeScaleInterpolant;if(n!==null){var i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t},_updateTime:function(e){var t=this.time+e;if(e===0)return t;var n=this._clip.duration,i=this.loop,r=this._loopCount;if(i===Xv){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(t>=n)t=n;else if(t<0)t=0;else break t;this.clampWhenFinished?this.paused=!0:this.enabled=!1,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{var a=i===Yv;if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),t>=n||t<0){var s=Math.floor(t/n);t-=n*s,r+=Math.abs(s);var o=this.repetitions-r;if(o<0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,t=e>0?n:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(o===0){var l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:s})}}if(a&&(r&1)===1)return this.time=t,n-t}return this.time=t,t},_setEndings:function(e,t,n){var i=this._interpolantSettings;n?(i.endingStart=Pr,i.endingEnd=Pr):(e?i.endingStart=this.zeroSlopeAtStart?Pr:jr:i.endingStart=Mo,t?i.endingEnd=this.zeroSlopeAtEnd?Pr:jr:i.endingEnd=Mo)},_scheduleFading:function(e,t,n){var i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);var s=a.parameterPositions,o=a.sampleValues;return s[0]=r,o[0]=t,s[1]=r+e,o[1]=n,this}};function Hf(e){this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Object.assign(Hf.prototype,ei.prototype,{clipAction:function(e,t){var n=t||this._root,i=n.uuid,r=typeof e=="string"?In.findByName(n,e):e,a=r!==null?r.uuid:e,s=this._actionsByClip[a],o=null;if(s!==void 0){var l=s.actionByRoot[i];if(l!==void 0)return l;o=s.knownActions[0],r===null&&(r=o._clip)}if(r===null)return null;var c=new Nh(this,r,t);return this._bindAction(c,o),this._addInactiveAction(c,a,i),c},existingAction:function(e,t){var n=t||this._root,i=n.uuid,r=typeof e=="string"?In.findByName(n,e):e,a=r?r.uuid:e,s=this._actionsByClip[a];return s!==void 0&&s.actionByRoot[i]||null},stopAllAction:function(){var e=this._actions,t=this._nActiveActions,n=this._bindings,i=this._nActiveBindings;this._nActiveActions=0,this._nActiveBindings=0;for(var r=0;r!==t;++r)e[r].reset();for(var r=0;r!==i;++r)n[r].useCount=0;return this},update:function(e){e*=this.timeScale;for(var t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1,s=0;s!==n;++s){var o=t[s];o.enabled&&o._update(i,e,r,a)}for(var l=this._bindings,c=this._nActiveBindings,s=0;s!==c;++s)l[s].apply(a);return this},getRoot:function(){return this._root},uncacheClip:function(e){var t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){for(var a=r.knownActions,s=0,o=a.length;s!==o;++s){var l=a[s];this._deactivateAction(l);var c=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=c,t[c]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}},uncacheRoot:function(e){var t=e.uuid,n=this._actionsByClip;for(var i in n){var r=n[i].actionByRoot,a=r[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}var s=this._bindingsByRootAndName,o=s[t];if(o!==void 0)for(var l in o){var c=o[l];c.restoreOriginalState(),this._removeInactiveBinding(c)}},uncacheAction:function(e,t){var n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});Object.assign(Hf.prototype,{_bindAction:function(e,t){var n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,s=e._interpolants,o=n.uuid,l=this._bindingsByRootAndName,c=l[o];c===void 0&&(c={},l[o]=c);for(var u=0;u!==r;++u){var h=i[u],f=h.name,d=c[f];if(d!==void 0)a[u]=d;else{if(d=a[u],d!==void 0){d._cacheIndex===null&&(++d.referenceCount,this._addInactiveBinding(d,o,f));continue}var v=t&&t._propertyBindings[u].binding.parsedPath;d=new Rl(Fe.create(n,f,v),h.ValueTypeName,h.getValueSize()),++d.referenceCount,this._addInactiveBinding(d,o,f),a[u]=d}s[u].resultBuffer=d.buffer}},_activateAction:function(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){var t=(e._localRoot||this._root).uuid,n=e._clip.uuid,i=this._actionsByClip[n];this._bindAction(e,i&&i.knownActions[0]),this._addInactiveAction(e,n,t)}for(var r=e._propertyBindings,a=0,s=r.length;a!==s;++a){var o=r[a];o.useCount++===0&&(this._lendBinding(o),o.saveOriginalState())}this._lendAction(e)}},_deactivateAction:function(e){if(this._isActiveAction(e)){for(var t=e._propertyBindings,n=0,i=t.length;n!==i;++n){var r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;var e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}},_isActiveAction:function(e){var t=e._cacheIndex;return t!==null&&t<this._nActiveActions},_addInactiveAction:function(e,t,n){var i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{var s=a.knownActions;e._byClipCacheIndex=s.length,s.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e},_removeInactiveAction:function(e){var t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;var r=e._clip.uuid,a=this._actionsByClip,s=a[r],o=s.knownActions,l=o[o.length-1],c=e._byClipCacheIndex;l._byClipCacheIndex=c,o[c]=l,o.pop(),e._byClipCacheIndex=null;var u=s.actionByRoot,h=(t._localRoot||this._root).uuid;delete u[h],o.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)},_removeInactiveBindingsForAction:function(e){for(var t=e._propertyBindings,n=0,i=t.length;n!==i;++n){var r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}},_lendAction:function(e){var t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackAction:function(e){var t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_addInactiveBinding:function(e,t,n){var i=this._bindingsByRootAndName,r=i[t],a=this._bindings;r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=a.length,a.push(e)},_removeInactiveBinding:function(e){var t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,s=a[i],o=t[t.length-1],l=e._cacheIndex;o._cacheIndex=l,t[l]=o,t.pop(),delete s[r];t:{for(var c in s)break t;delete a[i]}},_lendBinding:function(e){var t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackBinding:function(e){var t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_lendControlInterpolant:function(){var e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Qo(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n},_takeBackControlInterpolant:function(e){var t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1)});function Pl(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}Pl.prototype.clone=function(){return new Pl(this.value.clone===void 0?this.value:this.value.clone())};function fa(){Gt.call(this),this.type="InstancedBufferGeometry",this.maxInstancedCount=void 0}fa.prototype=Object.create(Gt.prototype);fa.prototype.constructor=fa;fa.prototype.isInstancedBufferGeometry=!0;fa.prototype.addGroup=function(e,t,n){this.groups.push({start:e,count:t,materialIndex:n})};fa.prototype.copy=function(e){var t=e.index;t!==null&&this.setIndex(t.clone());var n=e.attributes;for(var i in n){var r=n[i];this.addAttribute(i,r.clone())}for(var a=e.groups,s=0,o=a.length;s<o;s++){var l=a[s];this.addGroup(l.start,l.count,l.materialIndex)}return this};function zh(e,t,n,i){this.uuid=Kt.generateUUID(),this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}zh.prototype={constructor:zh,isInterleavedBufferAttribute:!0,get count(){return this.data.count},get array(){return this.data.array},setX:function(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this},setY:function(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this},setZ:function(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this},setW:function(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this},getX:function(e){return this.data.array[e*this.data.stride+this.offset]},getY:function(e){return this.data.array[e*this.data.stride+this.offset+1]},getZ:function(e){return this.data.array[e*this.data.stride+this.offset+2]},getW:function(e){return this.data.array[e*this.data.stride+this.offset+3]},setXY:function(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}};function Rs(e,t){this.uuid=Kt.generateUUID(),this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.dynamic=!1,this.updateRange={offset:0,count:-1},this.onUploadCallback=function(){},this.version=0}Rs.prototype={constructor:Rs,isInterleavedBuffer:!0,set needsUpdate(e){e===!0&&this.version++},setArray:function(e){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=e!==void 0?e.length/this.stride:0,this.array=e},setDynamic:function(e){return this.dynamic=e,this},copy:function(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.dynamic=e.dynamic,this},copyAt:function(e,t,n){e*=this.stride,n*=t.stride;for(var i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},clone:function(){return new this.constructor().copy(this)},onUpload:function(e){return this.onUploadCallback=e,this}};function Ps(e,t,n){Rs.call(this,e,t),this.meshPerAttribute=n||1}Ps.prototype=Object.create(Rs.prototype);Ps.prototype.constructor=Ps;Ps.prototype.isInstancedInterleavedBuffer=!0;Ps.prototype.copy=function(e){return Rs.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this};function Fs(e,t,n){St.call(this,e,t),this.meshPerAttribute=n||1}Fs.prototype=Object.create(St.prototype);Fs.prototype.constructor=Fs;Fs.prototype.isInstancedBufferAttribute=!0;Fs.prototype.copy=function(e){return St.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this};function Bh(e,t,n,i){this.ray=new vr(e,t),this.near=n||0,this.far=i||1/0,this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Pp(e,t){return e.distance-t.distance}function Gh(e,t,n,i){if(e.visible!==!1&&(e.raycast(t,n),i===!0))for(var r=e.children,a=0,s=r.length;a<s;a++)Gh(r[a],t,n,!0)}Bh.prototype={constructor:Bh,linePrecision:1,set:function(e,t){this.ray.set(e,t)},setFromCamera:function(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize()):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(e,t){var n=[];return Gh(e,this,n,t),n.sort(Pp),n},intersectObjects:function(e,t){var n=[];if(Array.isArray(e)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),n;for(var i=0,r=e.length;i<r;i++)Gh(e[i],this,n,t);return n.sort(Pp),n}};function kh(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}kh.prototype={constructor:kh,start:function(){this.startTime=(performance||Date).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},stop:function(){this.getElapsedTime(),this.running=!1},getElapsedTime:function(){return this.getDelta(),this.elapsedTime},getDelta:function(){var e=0;if(this.autoStart&&!this.running&&this.start(),this.running){var t=(performance||Date).now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ZE(e){this.points=e;var t=[],n={x:0,y:0,z:0},i,r,a,s,o,l,c,u,h;this.initFromArray=function(d){this.points=[];for(var v=0;v<d.length;v++)this.points[v]={x:d[v][0],y:d[v][1],z:d[v][2]}},this.getPoint=function(d){return i=(this.points.length-1)*d,r=Math.floor(i),a=i-r,t[0]=r===0?r:r-1,t[1]=r,t[2]=r>this.points.length-2?this.points.length-1:r+1,t[3]=r>this.points.length-3?this.points.length-1:r+2,l=this.points[t[0]],c=this.points[t[1]],u=this.points[t[2]],h=this.points[t[3]],s=a*a,o=a*s,n.x=f(l.x,c.x,u.x,h.x,a,s,o),n.y=f(l.y,c.y,u.y,h.y,a,s,o),n.z=f(l.z,c.z,u.z,h.z,a,s,o),n},this.getControlPointsArray=function(){var d,v,p=this.points.length,m=[];for(d=0;d<p;d++)v=this.points[d],m[d]=[v.x,v.y,v.z];return m},this.getLength=function(d){var v,p,m,g,y=0,_=0,x=0,M=new U,S=new U,E=[],b=0;for(E[0]=0,d||(d=100),m=this.points.length*d,M.copy(this.points[0]),v=1;v<m;v++)p=v/m,g=this.getPoint(p),S.copy(g),b+=S.distanceTo(M),M.copy(g),y=(this.points.length-1)*p,_=Math.floor(y),_!==x&&(E[_]=b,x=_);return E[E.length]=b,{chunks:E,total:b}},this.reparametrizeByArcLength=function(d){var v,p,m,g,y,_,x,M,S=[],E=new U,b=this.getLength();for(S.push(E.copy(this.points[0]).clone()),v=1;v<this.points.length;v++){for(_=b.chunks[v]-b.chunks[v-1],x=Math.ceil(d*_/b.total),g=(v-1)/(this.points.length-1),y=v/(this.points.length-1),p=1;p<x-1;p++)m=g+p*(1/x)*(y-g),M=this.getPoint(m),S.push(E.copy(M).clone());S.push(E.copy(this.points[v]).clone())}this.points=S};function f(d,v,p,m,g,y,_){var x=(p-d)*.5,M=(m-v)*.5;return(2*(v-p)+x+M)*_+(-3*(v-p)-2*x-M)*y+x*g+v}}function Vh(e,t,n){return this.radius=e!==void 0?e:1,this.phi=t!==void 0?t:0,this.theta=n!==void 0?n:0,this}Vh.prototype={constructor:Vh,set:function(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this},makeSafe:function(){var e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this},setFromVector3:function(e){return this.radius=e.length(),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e.x,e.z),this.phi=Math.acos(Kt.clamp(e.y/this.radius,-1,1))),this}};function Hh(e,t,n){return this.radius=e!==void 0?e:1,this.theta=t!==void 0?t:0,this.y=n!==void 0?n:0,this}Hh.prototype={constructor:Hh,set:function(e,t,n){return this.radius=e,this.theta=t,this.y=n,this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this},setFromVector3:function(e){return this.radius=Math.sqrt(e.x*e.x+e.z*e.z),this.theta=Math.atan2(e.x,e.z),this.y=e.y,this}};function tn(e,t){Ze.call(this,e,t),this.animationsMap={},this.animationsList=[];var n=this.geometry.morphTargets.length,i="__default",r=0,a=n-1,s=n/1;this.createAnimation(i,r,a,s),this.setAnimationWeight(i,1)}tn.prototype=Object.create(Ze.prototype);tn.prototype.constructor=tn;tn.prototype.createAnimation=function(e,t,n,i){var r={start:t,end:n,length:n-t+1,fps:i,duration:(n-t)/i,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[e]=r,this.animationsList.push(r)};tn.prototype.autoCreateAnimations=function(e){for(var t=/([a-z]+)_?(\d+)/i,n,i={},r=this.geometry,a=0,s=r.morphTargets.length;a<s;a++){var o=r.morphTargets[a],l=o.name.match(t);if(l&&l.length>1){var c=l[1];i[c]||(i[c]={start:1/0,end:-1/0});var u=i[c];a<u.start&&(u.start=a),a>u.end&&(u.end=a),n||(n=c)}}for(var c in i){var u=i[c];this.createAnimation(c,u.start,u.end,e)}this.firstAnimation=n};tn.prototype.setAnimationDirectionForward=function(e){var t=this.animationsMap[e];t&&(t.direction=1,t.directionBackwards=!1)};tn.prototype.setAnimationDirectionBackward=function(e){var t=this.animationsMap[e];t&&(t.direction=-1,t.directionBackwards=!0)};tn.prototype.setAnimationFPS=function(e,t){var n=this.animationsMap[e];n&&(n.fps=t,n.duration=(n.end-n.start)/n.fps)};tn.prototype.setAnimationDuration=function(e,t){var n=this.animationsMap[e];n&&(n.duration=t,n.fps=(n.end-n.start)/n.duration)};tn.prototype.setAnimationWeight=function(e,t){var n=this.animationsMap[e];n&&(n.weight=t)};tn.prototype.setAnimationTime=function(e,t){var n=this.animationsMap[e];n&&(n.time=t)};tn.prototype.getAnimationTime=function(e){var t=0,n=this.animationsMap[e];return n&&(t=n.time),t};tn.prototype.getAnimationDuration=function(e){var t=-1,n=this.animationsMap[e];return n&&(t=n.duration),t};tn.prototype.playAnimation=function(e){var t=this.animationsMap[e];t?(t.time=0,t.active=!0):console.warn("THREE.MorphBlendMesh: animation["+e+"] undefined in .playAnimation()")};tn.prototype.stopAnimation=function(e){var t=this.animationsMap[e];t&&(t.active=!1)};tn.prototype.update=function(e){for(var t=0,n=this.animationsList.length;t<n;t++){var i=this.animationsList[t];if(!!i.active){var r=i.duration/i.length;i.time+=i.direction*e,i.mirroredLoop?(i.time>i.duration||i.time<0)&&(i.direction*=-1,i.time>i.duration&&(i.time=i.duration,i.directionBackwards=!0),i.time<0&&(i.time=0,i.directionBackwards=!1)):(i.time=i.time%i.duration,i.time<0&&(i.time+=i.duration));var a=i.start+Kt.clamp(Math.floor(i.time/r),0,i.length-1),s=i.weight;a!==i.currentFrame&&(this.morphTargetInfluences[i.lastFrame]=0,this.morphTargetInfluences[i.currentFrame]=1*s,this.morphTargetInfluences[a]=0,i.lastFrame=i.currentFrame,i.currentFrame=a);var o=i.time%r/r;i.directionBackwards&&(o=1-o),i.currentFrame!==i.lastFrame?(this.morphTargetInfluences[i.currentFrame]=o*s,this.morphTargetInfluences[i.lastFrame]=(1-o)*s):this.morphTargetInfluences[i.currentFrame]=s}}};function nc(e){Pt.call(this),this.material=e,this.render=function(t){}}nc.prototype=Object.create(Pt.prototype);nc.prototype.constructor=nc;nc.prototype.isImmediateRenderObject=!0;function ic(e,t,n,i){this.object=e,this.size=t!==void 0?t:1;var r=n!==void 0?n:16711680,a=i!==void 0?i:1,s=0,o=this.object.geometry;o&&o.isGeometry?s=o.faces.length*3:o&&o.isBufferGeometry&&(s=o.attributes.normal.count);var l=new Gt,c=new oe(s*2*3,3);l.addAttribute("position",c),Te.call(this,l,new Oe({color:r,linewidth:a})),this.matrixAutoUpdate=!1,this.update()}ic.prototype=Object.create(Te.prototype);ic.prototype.constructor=ic;ic.prototype.update=function(){var e=new U,t=new U,n=new ii;return function(){var r=["a","b","c"];this.object.updateMatrixWorld(!0),n.getNormalMatrix(this.object.matrixWorld);var a=this.object.matrixWorld,s=this.geometry.attributes.position,o=this.object.geometry;if(o&&o.isGeometry)for(var l=o.vertices,c=o.faces,u=0,h=0,f=c.length;h<f;h++)for(var d=c[h],v=0,p=d.vertexNormals.length;v<p;v++){var m=l[d[r[v]]],g=d.vertexNormals[v];e.copy(m).applyMatrix4(a),t.copy(g).applyMatrix3(n).normalize().multiplyScalar(this.size).add(e),s.setXYZ(u,e.x,e.y,e.z),u=u+1,s.setXYZ(u,t.x,t.y,t.z),u=u+1}else if(o&&o.isBufferGeometry)for(var y=o.attributes.position,_=o.attributes.normal,u=0,v=0,p=y.count;v<p;v++)e.set(y.getX(v),y.getY(v),y.getZ(v)).applyMatrix4(a),t.set(_.getX(v),_.getY(v),_.getZ(v)),t.applyMatrix3(n).normalize().multiplyScalar(this.size).add(e),s.setXYZ(u,e.x,e.y,e.z),u=u+1,s.setXYZ(u,t.x,t.y,t.z),u=u+1;return s.needsUpdate=!0,this}}();function Is(e){Pt.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;for(var t=new Gt,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1],i=0,r=1,a=32;i<a;i++,r++){var s=i/a*Math.PI*2,o=r/a*Math.PI*2;n.push(Math.cos(s),Math.sin(s),1,Math.cos(o),Math.sin(o),1)}t.addAttribute("position",new oe(n,3));var l=new Oe({fog:!1});this.cone=new Te(t,l),this.add(this.cone),this.update()}Is.prototype=Object.create(Pt.prototype);Is.prototype.constructor=Is;Is.prototype.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()};Is.prototype.update=function(){var e=new U,t=new U;return function(){var i=this.light.distance?this.light.distance:1e3,r=i*Math.tan(this.light.angle);this.cone.scale.set(r,r,i),e.setFromMatrixPosition(this.light.matrixWorld),t.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(t.sub(e)),this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();function Us(e){this.bones=this.getBoneList(e);for(var t=new Gt,n=[],i=[],r=new Vt(0,0,1),a=new Vt(0,1,0),s=0;s<this.bones.length;s++){var o=this.bones[s];o.parent&&o.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),i.push(r.r,r.g,r.b),i.push(a.r,a.g,a.b))}t.addAttribute("position",new oe(n,3)),t.addAttribute("color",new oe(i,3));var l=new Oe({vertexColors:ma,depthTest:!1,depthWrite:!1,transparent:!0});Te.call(this,t,l),this.root=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.update()}Us.prototype=Object.create(Te.prototype);Us.prototype.constructor=Us;Us.prototype.getBoneList=function(e){var t=[];e&&e.isBone&&t.push(e);for(var n=0;n<e.children.length;n++)t.push.apply(t,this.getBoneList(e.children[n]));return t};Us.prototype.update=function(){var e=new U,t=new Yt,n=new Yt;return function(){var r=this.geometry,a=r.getAttribute("position");n.getInverse(this.root.matrixWorld);for(var s=0,o=0;s<this.bones.length;s++){var l=this.bones[s];l.parent&&l.parent.isBone&&(t.multiplyMatrices(n,l.matrixWorld),e.setFromMatrixPosition(t),a.setXYZ(o,e.x,e.y,e.z),t.multiplyMatrices(n,l.parent.matrixWorld),e.setFromMatrixPosition(t),a.setXYZ(o+1,e.x,e.y,e.z),o+=2)}r.getAttribute("position").needsUpdate=!0}}();function Os(e,t){this.light=e,this.light.updateMatrixWorld();var n=new ea(t,4,2),i=new En({wireframe:!0,fog:!1});i.color.copy(this.light.color).multiplyScalar(this.light.intensity),Ze.call(this,n,i),this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1}Os.prototype=Object.create(Ze.prototype);Os.prototype.constructor=Os;Os.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()};Os.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};function Ns(e){Pt.call(this),this.light=e,this.light.updateMatrixWorld();var t=new En({color:e.color,fog:!1}),n=new En({color:e.color,fog:!1,wireframe:!0}),i=new Gt;i.addAttribute("position",new St(new Float32Array(6*3),3)),this.add(new Ze(i,t)),this.add(new Ze(i,n)),this.update()}Ns.prototype=Object.create(Pt.prototype);Ns.prototype.constructor=Ns;Ns.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose(),this.children[1].geometry.dispose(),this.children[1].material.dispose()};Ns.prototype.update=function(){var e=new U,t=new U;return function(){var i=this.children[0],r=this.children[1];if(this.light.target){e.setFromMatrixPosition(this.light.matrixWorld),t.setFromMatrixPosition(this.light.target.matrixWorld);var a=t.clone().sub(e);i.lookAt(a),r.lookAt(a)}i.material.color.copy(this.light.color).multiplyScalar(this.light.intensity),r.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);var s=this.light.width*.5,o=this.light.height*.5,l=i.geometry.getAttribute("position"),c=l.array;c[0]=s,c[1]=-o,c[2]=0,c[3]=s,c[4]=o,c[5]=0,c[6]=-s,c[7]=o,c[8]=0,c[9]=-s,c[10]=o,c[11]=0,c[12]=-s,c[13]=-o,c[14]=0,c[15]=s,c[16]=-o,c[17]=0,l.needsUpdate=!0}}();function zs(e,t){Pt.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;var n=new ta(t);n.rotateY(Math.PI*.5);var i=new En({vertexColors:ma,wireframe:!0}),r=n.getAttribute("position"),a=new Float32Array(r.count*3);n.addAttribute("color",new St(a,3)),this.add(new Ze(n,i)),this.update()}zs.prototype=Object.create(Pt.prototype);zs.prototype.constructor=zs;zs.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()};zs.prototype.update=function(){var e=new U,t=new Vt,n=new Vt;return function(){var r=this.children[0],a=r.geometry.getAttribute("color");t.copy(this.light.color).multiplyScalar(this.light.intensity),n.copy(this.light.groundColor).multiplyScalar(this.light.intensity);for(var s=0,o=a.count;s<o;s++){var l=s<o/2?t:n;a.setXYZ(s,l.r,l.g,l.b)}r.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate()),a.needsUpdate=!0}}();function rc(e,t,n,i){e=e||10,t=t||10,n=new Vt(n!==void 0?n:4473924),i=new Vt(i!==void 0?i:8947848);for(var r=t/2,a=e*2/t,s=[],o=[],l=0,c=0,u=-e;l<=t;l++,u+=a){s.push(-e,0,u,e,0,u),s.push(u,0,-e,u,0,e);var h=l===r?n:i;h.toArray(o,c),c+=3,h.toArray(o,c),c+=3,h.toArray(o,c),c+=3,h.toArray(o,c),c+=3}var f=new Gt;f.addAttribute("position",new oe(s,3)),f.addAttribute("color",new oe(o,3));var d=new Oe({vertexColors:ma});Te.call(this,f,d)}rc.prototype=Object.create(Te.prototype);rc.prototype.constructor=rc;function Fl(e,t,n,i,r,a){e=e||10,t=t||16,n=n||8,i=i||64,r=new Vt(r!==void 0?r:4473924),a=new Vt(a!==void 0?a:8947848);var s=[],o=[],l,c,u,h,f,d,v;for(h=0;h<=t;h++)u=h/t*(Math.PI*2),l=Math.sin(u)*e,c=Math.cos(u)*e,s.push(0,0,0),s.push(l,0,c),v=h&1?r:a,o.push(v.r,v.g,v.b),o.push(v.r,v.g,v.b);for(h=0;h<=n;h++)for(v=h&1?r:a,d=e-e/n*h,f=0;f<i;f++)u=f/i*(Math.PI*2),l=Math.sin(u)*d,c=Math.cos(u)*d,s.push(l,0,c),o.push(v.r,v.g,v.b),u=(f+1)/i*(Math.PI*2),l=Math.sin(u)*d,c=Math.cos(u)*d,s.push(l,0,c),o.push(v.r,v.g,v.b);var p=new Gt;p.addAttribute("position",new oe(s,3)),p.addAttribute("color",new oe(o,3));var m=new Oe({vertexColors:ma});Te.call(this,p,m)}Fl.prototype=Object.create(Te.prototype);Fl.prototype.constructor=Fl;function ac(e,t,n,i){this.object=e,this.size=t!==void 0?t:1;var r=n!==void 0?n:16776960,a=i!==void 0?i:1,s=0,o=this.object.geometry;o&&o.isGeometry?s=o.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");var l=new Gt,c=new oe(s*2*3,3);l.addAttribute("position",c),Te.call(this,l,new Oe({color:r,linewidth:a})),this.matrixAutoUpdate=!1,this.update()}ac.prototype=Object.create(Te.prototype);ac.prototype.constructor=ac;ac.prototype.update=function(){var e=new U,t=new U,n=new ii;return function(){this.object.updateMatrixWorld(!0),n.getNormalMatrix(this.object.matrixWorld);for(var r=this.object.matrixWorld,a=this.geometry.attributes.position,s=this.object.geometry,o=s.vertices,l=s.faces,c=0,u=0,h=l.length;u<h;u++){var f=l[u],d=f.normal;e.copy(o[f.a]).add(o[f.b]).add(o[f.c]).divideScalar(3).applyMatrix4(r),t.copy(d).applyMatrix3(n).normalize().multiplyScalar(this.size).add(e),a.setXYZ(c,e.x,e.y,e.z),c=c+1,a.setXYZ(c,t.x,t.y,t.z),c=c+1}return a.needsUpdate=!0,this}}();function Bs(e,t){Pt.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,t===void 0&&(t=1);var n=new Gt;n.addAttribute("position",new oe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));var i=new Oe({fog:!1});this.add(new Xi(n,i)),n=new Gt,n.addAttribute("position",new oe([0,0,0,0,0,1],3)),this.add(new Xi(n,i)),this.update()}Bs.prototype=Object.create(Pt.prototype);Bs.prototype.constructor=Bs;Bs.prototype.dispose=function(){var e=this.children[0],t=this.children[1];e.geometry.dispose(),e.material.dispose(),t.geometry.dispose(),t.material.dispose()};Bs.prototype.update=function(){var e=new U,t=new U,n=new U;return function(){e.setFromMatrixPosition(this.light.matrixWorld),t.setFromMatrixPosition(this.light.target.matrixWorld),n.subVectors(t,e);var r=this.children[0],a=this.children[1];r.lookAt(n),r.material.color.copy(this.light.color).multiplyScalar(this.light.intensity),a.lookAt(n),a.scale.z=n.length()}}();function sc(e){var t=new Gt,n=new Oe({color:16777215,vertexColors:mf}),i=[],r=[],a={},s=new Vt(16755200),o=new Vt(16711680),l=new Vt(43775),c=new Vt(16777215),u=new Vt(3355443);h("n1","n2",s),h("n2","n4",s),h("n4","n3",s),h("n3","n1",s),h("f1","f2",s),h("f2","f4",s),h("f4","f3",s),h("f3","f1",s),h("n1","f1",s),h("n2","f2",s),h("n3","f3",s),h("n4","f4",s),h("p","n1",o),h("p","n2",o),h("p","n3",o),h("p","n4",o),h("u1","u2",l),h("u2","u3",l),h("u3","u1",l),h("c","t",c),h("p","c",u),h("cn1","cn2",u),h("cn3","cn4",u),h("cf1","cf2",u),h("cf3","cf4",u);function h(d,v,p){f(d,p),f(v,p)}function f(d,v){i.push(0,0,0),r.push(v.r,v.g,v.b),a[d]===void 0&&(a[d]=[]),a[d].push(i.length/3-1)}t.addAttribute("position",new oe(i,3)),t.addAttribute("color",new oe(r,3)),Te.call(this,t,n),this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update()}sc.prototype=Object.create(Te.prototype);sc.prototype.constructor=sc;sc.prototype.update=function(){var e,t,n=new U,i=new cn;function r(a,s,o,l){n.set(s,o,l).unproject(i);var c=t[a];if(c!==void 0)for(var u=e.getAttribute("position"),h=0,f=c.length;h<f;h++)u.setXYZ(c[h],n.x,n.y,n.z)}return function(){e=this.geometry,t=this.pointMap;var s=1,o=1;i.projectionMatrix.copy(this.camera.projectionMatrix),r("c",0,0,-1),r("t",0,0,1),r("n1",-s,-o,-1),r("n2",s,-o,-1),r("n3",-s,o,-1),r("n4",s,o,-1),r("f1",-s,-o,1),r("f2",s,-o,1),r("f3",-s,o,1),r("f4",s,o,1),r("u1",s*.7,o*1.1,-1),r("u2",-s*.7,o*1.1,-1),r("u3",0,o*2,-1),r("cf1",-s,0,1),r("cf2",s,0,1),r("cf3",0,-o,1),r("cf4",0,o,1),r("cn1",-s,0,-1),r("cn2",s,0,-1),r("cn3",0,-o,-1),r("cn4",0,o,-1),e.getAttribute("position").needsUpdate=!0}}();function Gs(e,t){t===void 0&&(t=16776960);var n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new Gt;r.setIndex(new St(n,1)),r.addAttribute("position",new St(i,3)),Te.call(this,r,new Oe({color:t})),e!==void 0&&this.update(e)}Gs.prototype=Object.create(Te.prototype);Gs.prototype.constructor=Gs;Gs.prototype.update=function(){var e=new Ei;return function(n){if(n&&n.isBox3?e.copy(n):e.setFromObject(n),!e.isEmpty()){var i=e.min,r=e.max,a=this.geometry.attributes.position,s=a.array;s[0]=r.x,s[1]=r.y,s[2]=r.z,s[3]=i.x,s[4]=r.y,s[5]=r.z,s[6]=i.x,s[7]=i.y,s[8]=r.z,s[9]=r.x,s[10]=i.y,s[11]=r.z,s[12]=r.x,s[13]=r.y,s[14]=i.z,s[15]=i.x,s[16]=r.y,s[17]=i.z,s[18]=i.x,s[19]=i.y,s[20]=i.z,s[21]=r.x,s[22]=i.y,s[23]=i.z,a.needsUpdate=!0,this.geometry.computeBoundingSphere()}}}();var _g=new Gt;_g.addAttribute("position",new oe([0,0,0,0,1,0],3));var yg=new qi(0,.5,1,5,1);yg.translate(0,-.5,0);function da(e,t,n,i,r,a){Pt.call(this),i===void 0&&(i=16776960),n===void 0&&(n=1),r===void 0&&(r=.2*n),a===void 0&&(a=.2*r),this.position.copy(t),this.line=new Xi(_g,new Oe({color:i})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ze(yg,new En({color:i})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}da.prototype=Object.create(Pt.prototype);da.prototype.constructor=da;da.prototype.setDirection=function(){var e=new U,t;return function(i){i.y>.99999?this.quaternion.set(0,0,0,1):i.y<-.99999?this.quaternion.set(1,0,0,0):(e.set(i.z,0,-i.x).normalize(),t=Math.acos(i.y),this.quaternion.setFromAxisAngle(e,t))}}();da.prototype.setLength=function(e,t,n){t===void 0&&(t=.2*e),n===void 0&&(n=.2*t),this.line.scale.set(1,Math.max(0,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()};da.prototype.setColor=function(e){this.line.material.color.copy(e),this.cone.material.color.copy(e)};function Il(e){e=e||1;var t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Gt;i.addAttribute("position",new oe(t,3)),i.addAttribute("color",new oe(n,3));var r=new Oe({vertexColors:ma});Te.call(this,i,r)}Il.prototype=Object.create(Te.prototype);Il.prototype.constructor=Il;var Wf=function(){var e=new U,t=new r,n=new r,i=new r;function r(){}return r.prototype.init=function(a,s,o,l){this.c0=a,this.c1=o,this.c2=-3*a+3*s-2*o-l,this.c3=2*a-2*s+o+l},r.prototype.initNonuniformCatmullRom=function(a,s,o,l,c,u,h){var f=(s-a)/c-(o-a)/(c+u)+(o-s)/u,d=(o-s)/u-(l-s)/(u+h)+(l-o)/h;f*=u,d*=u,this.init(s,o,f,d)},r.prototype.initCatmullRom=function(a,s,o,l,c){this.init(s,o,c*(o-a),c*(l-s))},r.prototype.calc=function(a){var s=a*a,o=s*a;return this.c0+this.c1*a+this.c2*s+this.c3*o},ln.create(function(a){this.points=a||[],this.closed=!1},function(a){var s=this.points,o,l,c,u;u=s.length,u<2&&console.log("duh, you need at least 2 points"),o=(u-(this.closed?0:1))*a,l=Math.floor(o),c=o-l,this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s.length)+1)*s.length:c===0&&l===u-1&&(l=u-2,c=1);var h,f,d,v;if(this.closed||l>0?h=s[(l-1)%u]:(e.subVectors(s[0],s[1]).add(s[0]),h=e),f=s[l%u],d=s[(l+1)%u],this.closed||l+2<u?v=s[(l+2)%u]:(e.subVectors(s[u-1],s[u-2]).add(s[u-1]),v=e),this.type===void 0||this.type==="centripetal"||this.type==="chordal"){var p=this.type==="chordal"?.5:.25,m=Math.pow(h.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(v),p);g<1e-4&&(g=1),m<1e-4&&(m=g),y<1e-4&&(y=g),t.initNonuniformCatmullRom(h.x,f.x,d.x,v.x,m,g,y),n.initNonuniformCatmullRom(h.y,f.y,d.y,v.y,m,g,y),i.initNonuniformCatmullRom(h.z,f.z,d.z,v.z,m,g,y)}else if(this.type==="catmullrom"){var _=this.tension!==void 0?this.tension:.5;t.initCatmullRom(h.x,f.x,d.x,v.x,_),n.initCatmullRom(h.y,f.y,d.y,v.y,_),i.initCatmullRom(h.z,f.z,d.z,v.z,_)}var x=new U(t.calc(c),n.calc(c),i.calc(c));return x})}(),JE=ln.create(function(e){console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"),this.points=e===void 0?[]:e},function(e){var t=this.points,n=(t.length-1)*e,i=Math.floor(n),r=n-i,a=t[i==0?i:i-1],s=t[i],o=t[i>t.length-2?t.length-1:i+1],l=t[i>t.length-3?t.length-1:i+2],c=vc.interpolate;return new U(c(a.x,s.x,o.x,l.x,r),c(a.y,s.y,o.y,l.y,r),c(a.z,s.z,o.z,l.z,r))}),KE=ln.create(function(e,t,n,i){this.v0=e,this.v1=t,this.v2=n,this.v3=i},function(e){var t=Qe.b3;return new U(t(e,this.v0.x,this.v1.x,this.v2.x,this.v3.x),t(e,this.v0.y,this.v1.y,this.v2.y,this.v3.y),t(e,this.v0.z,this.v1.z,this.v2.z,this.v3.z))}),QE=ln.create(function(e,t,n){this.v0=e,this.v1=t,this.v2=n},function(e){var t=Qe.b2;return new U(t(e,this.v0.x,this.v1.x,this.v2.x),t(e,this.v0.y,this.v1.y,this.v2.y),t(e,this.v0.z,this.v1.z,this.v2.z))}),tT=ln.create(function(e,t){this.v1=e,this.v2=t},function(e){if(e===1)return this.v2.clone();var t=new U;return t.subVectors(this.v2,this.v1),t.multiplyScalar(e),t.add(this.v1),t});function Ul(e,t,n,i,r,a){Yi.call(this,e,t,n,n,i,r,a)}Ul.prototype=Object.create(Yi.prototype);Ul.prototype.constructor=Ul;var eT={createMultiMaterialObject:function(e,t){for(var n=new Fo,i=0,r=t.length;i<r;i++)n.add(new Ze(e,t[i]));return n},detach:function(e,t,n){e.applyMatrix(t.matrixWorld),t.remove(e),n.add(e)},attach:function(e,t,n){var i=new Yt;i.getInverse(n.matrixWorld),e.applyMatrix(i),t.remove(e),n.add(e)}};function nT(e,t,n,i,r,a,s){return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),new zn(e,t,n,r,a,s)}var iT=0,rT=1;function aT(e){return console.warn("THREE.MeshFaceMaterial has been renamed to THREE.MultiMaterial."),new Ko(e)}function sT(e,t){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new ls(e,t)}function oT(e){return console.warn("THREE.Particle has been renamed to THREE.Sprite."),new Ro(e)}function cT(e,t){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new ls(e,t)}function lT(e){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new vi(e)}function uT(e){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new vi(e)}function hT(e){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new vi(e)}function fT(e,t,n){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new U(e,t,n)}function dT(e,t){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."),new St(e,t).setDynamic(!0)}function pT(e,t){return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new Eo(e,t)}function mT(e,t){return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new To(e,t)}function vT(e,t){return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new Ao(e,t)}function gT(e,t){return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new Co(e,t)}function _T(e,t){return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new Hi(e,t)}function yT(e,t){return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new Lo(e,t)}function xT(e,t){return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new Wi(e,t)}function MT(e,t){return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new oe(e,t)}function bT(e,t){return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new Do(e,t)}function xg(e){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),Wf.call(this,e),this.type="catmullrom",this.closed=!0}xg.prototype=Object.create(Wf.prototype);function wT(e,t){return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new Gs(e,t)}function ST(e,t){return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new Te(new ws(e.geometry),new Oe({color:t!==void 0?t:16777215}))}rc.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};function ET(e,t){return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new Te(new hs(e.geometry),new Oe({color:t!==void 0?t:16777215}))}function TT(e){return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new ai(e)}Object.assign(wo.prototype,{center:function(e){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},size:function(e){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(e)}});Object.assign(Ei.prototype,{center:function(e){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionSphere:function(e){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)},size:function(e){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(e)}});Br.prototype.center=function(e){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(e)};Kt.random16=function(){return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."),Math.random()};Object.assign(ii.prototype,{flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},multiplyVector3:function(e){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},multiplyVector3Array:function(e){return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),this.applyToVector3Array(e)},applyToBuffer:function(e,t,n){return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),this.applyToBufferAttribute(e)}});Object.assign(Yt.prototype,{extractPosition:function(e){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)},flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},getPosition:function(){var e;return function(){return e===void 0&&(e=new U),console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),e.setFromMatrixColumn(this,3)}}(),setRotationFromQuaternion:function(e){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(e)},multiplyVector3:function(e){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."),e.applyProjection(this)},multiplyVector4:function(e){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector3Array:function(e){return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),this.applyToVector3Array(e)},rotateAxis:function(e){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),e.transformDirection(this)},crossVector:function(e){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBuffer:function(e,t,n){return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),this.applyToBufferAttribute(e)}});Pn.prototype.isIntersectionLine=function(e){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(e)};We.prototype.multiplyVector3=function(e){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),e.applyQuaternion(this)};Object.assign(vr.prototype,{isIntersectionBox:function(e){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionPlane:function(e){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(e)},isIntersectionSphere:function(e){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)}});Object.assign(kr.prototype,{extrude:function(e){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ri(this,e)},makeGeometry:function(e){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new bs(this,e)}});Object.assign(U.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(e){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(e)},getScaleFromMatrix:function(e){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(e)},getColumnFromMatrix:function(e,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,e)}});Zt.prototype.computeTangents=function(){console.warn("THREE.Geometry: .computeTangents() has been removed.")};Object.assign(Pt.prototype,{getChildByName:function(e){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(e)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(e,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,e)}});Object.defineProperties(Pt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(e){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=e}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.defineProperties(Po.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});nn.prototype.setLens=function(e,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(e)};Object.defineProperties(Ne.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(e){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=e}},shadowCameraLeft:{set:function(e){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=e}},shadowCameraRight:{set:function(e){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=e}},shadowCameraTop:{set:function(e){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=e}},shadowCameraBottom:{set:function(e){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=e}},shadowCameraNear:{set:function(e){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=e}},shadowCameraFar:{set:function(e){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=e}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(e){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=e}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(e){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=e}},shadowMapHeight:{set:function(e){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=e}}});Object.defineProperties(St.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}}});Object.assign(Gt.prototype,{addIndex:function(e){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(e)},addDrawCall:function(e,t,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(e,t)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")}});Object.defineProperties(Gt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(Pl.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(ae.prototype,{wrapAround:{get:function(){console.warn("THREE."+this.type+": .wrapAround has been removed.")},set:function(){console.warn("THREE."+this.type+": .wrapAround has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE."+this.type+": .wrapRGB has been removed."),new Vt}}});Object.defineProperties(gi.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(dn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(e){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=e}}});ei.prototype=Object.assign(Object.create({constructor:ei,apply:function(e){console.warn("THREE.EventDispatcher: .apply is deprecated, just inherit or Object.assign the prototype to mix-in."),Object.assign(e,this)}}),ei.prototype);Object.assign(Rf.prototype,{supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(e){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(e)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")}});Object.defineProperties(Rf.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=e}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=e}},shadowMapCullFace:{get:function(){return this.shadowMap.cullFace},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."),this.shadowMap.cullFace=e}}});Object.defineProperties(hg.prototype,{cullFace:{get:function(){return this.renderReverseSided?hf:vo},set:function(e){var t=e!==vo;console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to "+t+"."),this.renderReverseSided=t}}});Object.defineProperties(qs.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=e}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=e}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=e}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=e}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(e){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=e}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(e){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=e}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(e){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=e}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(e){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=e}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(e){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=e}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(e){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=e}}});Ds.prototype.load=function(e){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var t=this,n=new kf;return n.load(e,function(i){t.setBuffer(i)}),this};Vf.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};var AT={merge:function(e,t,n){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");var i;t.isMesh&&(t.matrixAutoUpdate&&t.updateMatrix(),i=t.matrix,t=t.geometry),e.merge(t,i,n)},center:function(e){return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),e.center()}},CT={crossOrigin:void 0,loadTexture:function(e,t,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var r=new Zl;r.setCrossOrigin(this.crossOrigin);var a=r.load(e,n,void 0,i);return t&&(a.mapping=t),a},loadTextureCube:function(e,t,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var r=new If;r.setCrossOrigin(this.crossOrigin);var a=r.load(e,n,void 0,i);return t&&(a.mapping=t),a},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")}};function LT(){console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."),this.projectVector=function(e,t){console.warn("THREE.Projector: .projectVector() is now vector.project()."),e.project(t)},this.unprojectVector=function(e,t){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),e.unproject(t)},this.pickingRay=function(){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}}function DT(){console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"),this.domElement=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),this.clear=function(){},this.render=function(){},this.setClearColor=function(){},this.setSize=function(){}}const RT=Object.freeze(Object.defineProperty({__proto__:null,WebGLRenderTargetCube:rs,WebGLRenderTarget:qs,WebGLRenderer:Rf,ShaderLib:as,UniformsLib:te,UniformsUtils:mn,ShaderChunk:ge,FogExp2:os,Fog:cs,Scene:Kr,LensFlare:Rh,Sprite:Ro,LOD:Po,SkinnedMesh:pl,Skeleton:fl,Bone:dl,Mesh:Ze,LineSegments:Te,Line:Xi,Points:ls,Group:Fo,VideoTexture:ml,DataTexture:$r,CompressedTexture:us,CubeTexture:dr,CanvasTexture:vl,DepthTexture:Io,Texture:Se,CompressedTextureLoader:pg,BinaryTextureLoader:Ff,DataTextureLoader:$E,CubeTextureLoader:If,TextureLoader:Zl,ObjectLoader:mg,MaterialLoader:Jl,BufferGeometryLoader:Uf,DefaultLoadingManager:kn,LoadingManager:Pf,JSONLoader:Of,ImageLoader:mc,FontLoader:vg,FileLoader:ai,Loader:Gr,Cache:Ph,AudioLoader:kf,SpotLightShadow:_l,SpotLight:yl,PointLight:xl,RectAreaLight:Fh,HemisphereLight:gl,DirectionalLightShadow:Ml,DirectionalLight:bl,AmbientLight:wl,LightShadow:va,Light:Ne,StereoCamera:gg,PerspectiveCamera:nn,OrthographicCamera:ss,CubeCamera:Dl,Camera:cn,AudioListener:Ih,PositionalAudio:Uh,AudioContext:Gf,AudioAnalyser:Vf,Audio:Ds,VectorKeyframeTrack:Cs,StringKeyframeTrack:Al,QuaternionKeyframeTrack:tc,NumberKeyframeTrack:Ls,ColorKeyframeTrack:Ll,BooleanKeyframeTrack:Cl,PropertyMixer:Rl,PropertyBinding:Fe,KeyframeTrack:ca,AnimationUtils:an,AnimationObjectGroup:Oh,AnimationMixer:Hf,AnimationClip:In,Uniform:Pl,InstancedBufferGeometry:fa,BufferGeometry:Gt,GeometryIdCount:Df,Geometry:Zt,InterleavedBufferAttribute:zh,InstancedInterleavedBuffer:Ps,InterleavedBuffer:Rs,InstancedBufferAttribute:Fs,Face3:zn,Object3D:Pt,Raycaster:Bh,Layers:hl,EventDispatcher:ei,Clock:kh,QuaternionLinearInterpolant:Tl,LinearInterpolant:Qo,DiscreteInterpolant:El,CubicInterpolant:Sl,Interpolant:Sn,Triangle:$n,Spline:ZE,Math:Kt,Spherical:Vh,Cylindrical:Hh,Plane:Pn,Frustum:So,Sphere:on,Ray:vr,Matrix4:Yt,Matrix3:ii,Box3:Ei,Box2:wo,Line3:Br,Euler:gr,Vector4:xe,Vector3:U,Vector2:Ct,Quaternion:We,Color:Vt,MorphBlendMesh:tn,ImmediateRenderObject:nc,VertexNormalsHelper:ic,SpotLightHelper:Is,SkeletonHelper:Us,PointLightHelper:Os,RectAreaLightHelper:Ns,HemisphereLightHelper:zs,GridHelper:rc,PolarGridHelper:Fl,FaceNormalsHelper:ac,DirectionalLightHelper:Bs,CameraHelper:sc,BoxHelper:Gs,ArrowHelper:da,AxisHelper:Il,CatmullRomCurve3:Wf,SplineCurve3:JE,CubicBezierCurve3:KE,QuadraticBezierCurve3:QE,LineCurve3:tT,ArcCurve:Ul,EllipseCurve:Yi,SplineCurve:la,CubicBezierCurve:ua,QuadraticBezierCurve:ha,LineCurve:Ai,Shape:kr,ShapePath:zf,Path:gc,Font:Bf,CurvePath:ec,Curve:ln,ShapeUtils:Qe,SceneUtils:eT,CurveUtils:vc,WireframeGeometry:hs,ParametricGeometry:Uo,ParametricBufferGeometry:fs,TetrahedronGeometry:Oo,TetrahedronBufferGeometry:ds,OctahedronGeometry:No,OctahedronBufferGeometry:ta,IcosahedronGeometry:zo,IcosahedronBufferGeometry:ps,DodecahedronGeometry:Bo,DodecahedronBufferGeometry:ms,PolyhedronGeometry:Go,PolyhedronBufferGeometry:Tn,TubeGeometry:ko,TubeBufferGeometry:vs,TorusKnotGeometry:Vo,TorusKnotBufferGeometry:gs,TorusGeometry:Ho,TorusBufferGeometry:_s,TextGeometry:Wo,SphereBufferGeometry:ea,SphereGeometry:Xo,RingGeometry:qo,RingBufferGeometry:ys,PlaneBufferGeometry:Jr,PlaneGeometry:Yo,LatheGeometry:jo,LatheBufferGeometry:xs,ShapeGeometry:bs,ShapeBufferGeometry:Ms,ExtrudeGeometry:ri,EdgesGeometry:ws,ConeGeometry:$o,ConeBufferGeometry:Zo,CylinderGeometry:na,CylinderBufferGeometry:qi,CircleBufferGeometry:Ss,CircleGeometry:Jo,BoxBufferGeometry:Zr,BoxGeometry:Es,ShadowMaterial:Ts,SpriteMaterial:Qr,RawShaderMaterial:As,ShaderMaterial:dn,PointsMaterial:vi,MultiMaterial:Ko,MeshPhysicalMaterial:ia,MeshStandardMaterial:Ti,MeshPhongMaterial:gi,MeshToonMaterial:ra,MeshNormalMaterial:aa,MeshLambertMaterial:sa,MeshDepthMaterial:mr,MeshBasicMaterial:En,LineDashedMaterial:oa,LineBasicMaterial:Oe,Material:ae,Float64BufferAttribute:Do,Float32BufferAttribute:oe,Uint32BufferAttribute:Wi,Int32BufferAttribute:Lo,Uint16BufferAttribute:Hi,Int16BufferAttribute:Co,Uint8ClampedBufferAttribute:Ao,Uint8BufferAttribute:To,Int8BufferAttribute:Eo,BufferAttribute:St,REVISION:sv,MOUSE:qb,CullFaceNone:ov,CullFaceBack:vo,CullFaceFront:hf,CullFaceFrontBack:Yb,FrontFaceDirectionCW:cv,FrontFaceDirectionCCW:jb,BasicShadowMap:$b,PCFShadowMap:ff,PCFSoftShadowMap:lv,FrontSide:Va,BackSide:fr,DoubleSide:Ws,FlatShading:df,SmoothShading:pf,NoColors:Hl,FaceColors:mf,VertexColors:ma,NoBlending:go,NormalBlending:Xs,AdditiveBlending:vf,SubtractiveBlending:gf,MultiplyBlending:_f,CustomBlending:yf,BlendingMode:uv,AddEquation:xf,SubtractEquation:hv,ReverseSubtractEquation:fv,MinEquation:_h,MaxEquation:yh,ZeroFactor:dv,OneFactor:pv,SrcColorFactor:mv,OneMinusSrcColorFactor:vv,SrcAlphaFactor:Mf,OneMinusSrcAlphaFactor:bf,DstAlphaFactor:gv,OneMinusDstAlphaFactor:_v,DstColorFactor:yv,OneMinusDstColorFactor:xv,SrcAlphaSaturateFactor:Mv,NeverDepth:bv,AlwaysDepth:wv,LessDepth:Sv,LessEqualDepth:sl,EqualDepth:Ev,GreaterEqualDepth:Tv,GreaterDepth:Av,NotEqualDepth:Cv,MultiplyOperation:dc,MixOperation:Lv,AddOperation:Dv,NoToneMapping:$c,LinearToneMapping:wf,ReinhardToneMapping:Rv,Uncharted2ToneMapping:Pv,CineonToneMapping:Fv,UVMapping:Wl,CubeReflectionMapping:Xl,CubeRefractionMapping:ol,EquirectangularReflectionMapping:Sf,EquirectangularRefractionMapping:cl,SphericalReflectionMapping:Ef,CubeUVReflectionMapping:ql,CubeUVRefractionMapping:Yl,TextureMapping:Iv,RepeatWrapping:Bi,ClampToEdgeWrapping:Un,MirroredRepeatWrapping:Yr,TextureWrapping:xh,NearestFilter:On,NearestMipMapNearestFilter:jl,NearestMipMapLinearFilter:$l,LinearFilter:wn,LinearMipMapNearestFilter:Tf,LinearMipMapLinearFilter:pc,TextureFilter:Mh,UnsignedByteType:ll,ByteType:Uv,ShortType:Ov,UnsignedShortType:_o,IntType:Nv,UnsignedIntType:Af,FloatType:es,HalfFloatType:ul,UnsignedShort4444Type:zv,UnsignedShort5551Type:Bv,UnsignedShort565Type:Gv,UnsignedInt248Type:yo,AlphaFormat:kv,RGBFormat:ns,RGBAFormat:Si,LuminanceFormat:Vv,LuminanceAlphaFormat:Hv,RGBEFormat:Zb,DepthFormat:zr,DepthStencilFormat:is,RGB_S3TC_DXT1_Format:bh,RGBA_S3TC_DXT1_Format:wh,RGBA_S3TC_DXT3_Format:Sh,RGBA_S3TC_DXT5_Format:Eh,RGB_PVRTC_4BPPV1_Format:Th,RGB_PVRTC_2BPPV1_Format:Ah,RGBA_PVRTC_4BPPV1_Format:Ch,RGBA_PVRTC_2BPPV1_Format:Lh,RGB_ETC1_Format:Wv,LoopOnce:Xv,LoopRepeat:qv,LoopPingPong:Yv,InterpolateDiscrete:xo,InterpolateLinear:oo,InterpolateSmooth:Zc,ZeroCurvatureEnding:jr,ZeroSlopeEnding:Pr,WrapAroundEnding:Mo,TrianglesDrawMode:Cf,TriangleStripDrawMode:jv,TriangleFanDrawMode:$v,LinearEncoding:bo,sRGBEncoding:Zv,GammaEncoding:Lf,RGBEEncoding:Jv,LogLuvEncoding:Jb,RGBM7Encoding:Kv,RGBM16Encoding:Qv,RGBDEncoding:tg,BasicDepthPacking:eg,RGBADepthPacking:ng,CubeGeometry:Es,Face4:nT,LineStrip:iT,LinePieces:rT,MeshFaceMaterial:aT,PointCloud:sT,Particle:oT,ParticleSystem:cT,PointCloudMaterial:lT,ParticleBasicMaterial:uT,ParticleSystemMaterial:hT,Vertex:fT,DynamicBufferAttribute:dT,Int8Attribute:pT,Uint8Attribute:mT,Uint8ClampedAttribute:vT,Int16Attribute:gT,Uint16Attribute:_T,Int32Attribute:yT,Uint32Attribute:xT,Float32Attribute:MT,Float64Attribute:bT,ClosedSplineCurve3:xg,BoundingBoxHelper:wT,EdgesHelper:ST,WireframeHelper:ET,XHRLoader:TT,GeometryUtils:AT,ImageUtils:CT,Projector:LT,CanvasRenderer:DT},Symbol.toStringTag,{value:"Module"})),PT=Sg(RT);var FT=Yf&&Yf.__extends||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)},ve=PT,Ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},Fp={type:"change"},Yu={type:"start"},ju={type:"end"},Ip=1e-6,IT=function(e){FT(t,e);function t(n,i,r){var a=e.call(this)||this;return a.object=n,a.domElement=i!==void 0?i:document,a.window=r!==void 0?r:window,a.enabled=!0,a.target=new ve.Vector3,a.minDistance=0,a.maxDistance=1/0,a.minZoom=0,a.maxZoom=1/0,a.minPolarAngle=0,a.maxPolarAngle=Math.PI,a.minAzimuthAngle=-1/0,a.maxAzimuthAngle=1/0,a.enableDamping=!1,a.dampingFactor=.25,a.enableZoom=!0,a.zoomSpeed=1,a.enableRotate=!0,a.rotateSpeed=1,a.enablePan=!0,a.keyPanSpeed=7,a.autoRotate=!1,a.autoRotateSpeed=2,a.enableKeys=!0,a.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},a.mouseButtons={ORBIT:ve.MOUSE.LEFT,ZOOM:ve.MOUSE.MIDDLE,PAN:ve.MOUSE.RIGHT},a.target0=a.target.clone(),a.position0=a.object.position.clone(),a.zoom0=a.object.zoom,a.updateOffset=new ve.Vector3,a.updateQuat=new ve.Quaternion().setFromUnitVectors(n.up,new ve.Vector3(0,1,0)),a.updateQuatInverse=a.updateQuat.clone().inverse(),a.updateLastPosition=new ve.Vector3,a.updateLastQuaternion=new ve.Quaternion,a.state=Ae.NONE,a.scale=1,a.spherical=new ve.Spherical,a.sphericalDelta=new ve.Spherical,a.panOffset=new ve.Vector3,a.zoomChanged=!1,a.rotateStart=new ve.Vector2,a.rotateEnd=new ve.Vector2,a.rotateDelta=new ve.Vector2,a.panStart=new ve.Vector2,a.panEnd=new ve.Vector2,a.panDelta=new ve.Vector2,a.dollyStart=new ve.Vector2,a.dollyEnd=new ve.Vector2,a.dollyDelta=new ve.Vector2,a.panLeftV=new ve.Vector3,a.panUpV=new ve.Vector3,a.panInternalOffset=new ve.Vector3,a.onMouseDown=function(s){if(a.enabled!==!1){if(s.preventDefault(),s.button===a.mouseButtons.ORBIT){if(a.enableRotate===!1)return;a.rotateStart.set(s.clientX,s.clientY),a.state=Ae.ROTATE}else if(s.button===a.mouseButtons.ZOOM){if(a.enableZoom===!1)return;a.dollyStart.set(s.clientX,s.clientY),a.state=Ae.DOLLY}else if(s.button===a.mouseButtons.PAN){if(a.enablePan===!1)return;a.panStart.set(s.clientX,s.clientY),a.state=Ae.PAN}a.state!==Ae.NONE&&(document.addEventListener("mousemove",a.onMouseMove,!1),document.addEventListener("mouseup",a.onMouseUp,!1),a.dispatchEvent(Yu))}},a.onMouseMove=function(s){if(a.enabled!==!1){if(s.preventDefault(),a.state===Ae.ROTATE){if(a.enableRotate===!1)return;a.rotateEnd.set(s.clientX,s.clientY),a.rotateDelta.subVectors(a.rotateEnd,a.rotateStart);var o=a.domElement===document?a.domElement.body:a.domElement;a.rotateLeft(2*Math.PI*a.rotateDelta.x/o.clientWidth*a.rotateSpeed),a.rotateUp(2*Math.PI*a.rotateDelta.y/o.clientHeight*a.rotateSpeed),a.rotateStart.copy(a.rotateEnd),a.update()}else if(a.state===Ae.DOLLY){if(a.enableZoom===!1)return;a.dollyEnd.set(s.clientX,s.clientY),a.dollyDelta.subVectors(a.dollyEnd,a.dollyStart),a.dollyDelta.y>0?a.dollyIn(a.getZoomScale()):a.dollyDelta.y<0&&a.dollyOut(a.getZoomScale()),a.dollyStart.copy(a.dollyEnd),a.update()}else if(a.state===Ae.PAN){if(a.enablePan===!1)return;a.panEnd.set(s.clientX,s.clientY),a.panDelta.subVectors(a.panEnd,a.panStart),a.pan(a.panDelta.x,a.panDelta.y),a.panStart.copy(a.panEnd),a.update()}}},a.onMouseUp=function(s){a.enabled!==!1&&(document.removeEventListener("mousemove",a.onMouseMove,!1),document.removeEventListener("mouseup",a.onMouseUp,!1),a.dispatchEvent(ju),a.state=Ae.NONE)},a.onMouseWheel=function(s){a.enabled===!1||a.enableZoom===!1||a.state!==Ae.NONE&&a.state!==Ae.ROTATE||(s.preventDefault(),s.stopPropagation(),s.deltaY<0?a.dollyOut(a.getZoomScale()):s.deltaY>0&&a.dollyIn(a.getZoomScale()),a.update(),a.dispatchEvent(Yu),a.dispatchEvent(ju))},a.onKeyDown=function(s){if(!(a.enabled===!1||a.enableKeys===!1||a.enablePan===!1))switch(s.keyCode){case a.keys.UP:a.pan(0,a.keyPanSpeed),a.update();break;case a.keys.BOTTOM:a.pan(0,-a.keyPanSpeed),a.update();break;case a.keys.LEFT:a.pan(a.keyPanSpeed,0),a.update();break;case a.keys.RIGHT:a.pan(-a.keyPanSpeed,0),a.update();break}},a.onTouchStart=function(s){if(a.enabled!==!1){switch(s.touches.length){case 1:{if(a.enableRotate===!1)return;a.rotateStart.set(s.touches[0].pageX,s.touches[0].pageY),a.state=Ae.TOUCH_ROTATE}break;case 2:{if(a.enableZoom===!1)return;var o=s.touches[0].pageX-s.touches[1].pageX,l=s.touches[0].pageY-s.touches[1].pageY,c=Math.sqrt(o*o+l*l);a.dollyStart.set(0,c),a.state=Ae.TOUCH_DOLLY}break;case 3:{if(a.enablePan===!1)return;a.panStart.set(s.touches[0].pageX,s.touches[0].pageY),a.state=Ae.TOUCH_PAN}break;default:a.state=Ae.NONE}a.state!==Ae.NONE&&a.dispatchEvent(Yu)}},a.onTouchMove=function(s){if(a.enabled!==!1)switch(s.preventDefault(),s.stopPropagation(),s.touches.length){case 1:{if(a.enableRotate===!1||a.state!==Ae.TOUCH_ROTATE)return;a.rotateEnd.set(s.touches[0].pageX,s.touches[0].pageY),a.rotateDelta.subVectors(a.rotateEnd,a.rotateStart);var o=a.domElement===document?a.domElement.body:a.domElement;a.rotateLeft(2*Math.PI*a.rotateDelta.x/o.clientWidth*a.rotateSpeed),a.rotateUp(2*Math.PI*a.rotateDelta.y/o.clientHeight*a.rotateSpeed),a.rotateStart.copy(a.rotateEnd),a.update()}break;case 2:{if(a.enableZoom===!1||a.state!==Ae.TOUCH_DOLLY)return;var l=s.touches[0].pageX-s.touches[1].pageX,c=s.touches[0].pageY-s.touches[1].pageY,u=Math.sqrt(l*l+c*c);a.dollyEnd.set(0,u),a.dollyDelta.subVectors(a.dollyEnd,a.dollyStart),a.dollyDelta.y>0?a.dollyOut(a.getZoomScale()):a.dollyDelta.y<0&&a.dollyIn(a.getZoomScale()),a.dollyStart.copy(a.dollyEnd),a.update()}break;case 3:{if(a.enablePan===!1||a.state!==Ae.TOUCH_PAN)return;a.panEnd.set(s.touches[0].pageX,s.touches[0].pageY),a.panDelta.subVectors(a.panEnd,a.panStart),a.pan(a.panDelta.x,a.panDelta.y),a.panStart.copy(a.panEnd),a.update()}break;default:a.state=Ae.NONE}},a.onTouchEnd=function(s){a.enabled!==!1&&(a.dispatchEvent(ju),a.state=Ae.NONE)},a.onContextMenu=function(s){s.preventDefault()},a.domElement.addEventListener("contextmenu",a.onContextMenu,!1),a.domElement.addEventListener("mousedown",a.onMouseDown,!1),a.domElement.addEventListener("wheel",a.onMouseWheel,!1),a.domElement.addEventListener("touchstart",a.onTouchStart,!1),a.domElement.addEventListener("touchend",a.onTouchEnd,!1),a.domElement.addEventListener("touchmove",a.onTouchMove,!1),a.window.addEventListener("keydown",a.onKeyDown,!1),a.update(),a}return t.prototype.update=function(){var n=this.object.position;return this.updateOffset.copy(n).sub(this.target),this.updateOffset.applyQuaternion(this.updateQuat),this.spherical.setFromVector3(this.updateOffset),this.autoRotate&&this.state===Ae.NONE&&this.rotateLeft(this.getAutoRotationAngle()),this.spherical.theta+=this.sphericalDelta.theta,this.spherical.phi+=this.sphericalDelta.phi,this.spherical.theta=Math.max(this.minAzimuthAngle,Math.min(this.maxAzimuthAngle,this.spherical.theta)),this.spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this.spherical.phi)),this.spherical.makeSafe(),this.spherical.radius*=this.scale,this.spherical.radius=Math.max(this.minDistance,Math.min(this.maxDistance,this.spherical.radius)),this.target.add(this.panOffset),this.updateOffset.setFromSpherical(this.spherical),this.updateOffset.applyQuaternion(this.updateQuatInverse),n.copy(this.target).add(this.updateOffset),this.object.lookAt(this.target),this.enableDamping===!0?(this.sphericalDelta.theta*=1-this.dampingFactor,this.sphericalDelta.phi*=1-this.dampingFactor):this.sphericalDelta.set(0,0,0),this.scale=1,this.panOffset.set(0,0,0),this.zoomChanged||this.updateLastPosition.distanceToSquared(this.object.position)>Ip||8*(1-this.updateLastQuaternion.dot(this.object.quaternion))>Ip?(this.dispatchEvent(Fp),this.updateLastPosition.copy(this.object.position),this.updateLastQuaternion.copy(this.object.quaternion),this.zoomChanged=!1,!0):!1},t.prototype.panLeft=function(n,i){this.panLeftV.setFromMatrixColumn(i,0),this.panLeftV.multiplyScalar(-n),this.panOffset.add(this.panLeftV)},t.prototype.panUp=function(n,i){this.panUpV.setFromMatrixColumn(i,1),this.panUpV.multiplyScalar(n),this.panOffset.add(this.panUpV)},t.prototype.pan=function(n,i){var r=this.domElement===document?this.domElement.body:this.domElement;if(this.object instanceof ve.PerspectiveCamera){var a=this.object.position;this.panInternalOffset.copy(a).sub(this.target);var s=this.panInternalOffset.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this.panLeft(2*n*s/r.clientHeight,this.object.matrix),this.panUp(2*i*s/r.clientHeight,this.object.matrix)}else this.object instanceof ve.OrthographicCamera?(this.panLeft(n*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this.panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)},t.prototype.dollyIn=function(n){this.object instanceof ve.PerspectiveCamera?this.scale/=n:this.object instanceof ve.OrthographicCamera?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom*n)),this.object.updateProjectionMatrix(),this.zoomChanged=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)},t.prototype.dollyOut=function(n){this.object instanceof ve.PerspectiveCamera?this.scale*=n:this.object instanceof ve.OrthographicCamera?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/n)),this.object.updateProjectionMatrix(),this.zoomChanged=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)},t.prototype.getAutoRotationAngle=function(){return 2*Math.PI/60/60*this.autoRotateSpeed},t.prototype.getZoomScale=function(){return Math.pow(.95,this.zoomSpeed)},t.prototype.rotateLeft=function(n){this.sphericalDelta.theta-=n},t.prototype.rotateUp=function(n){this.sphericalDelta.phi-=n},t.prototype.getPolarAngle=function(){return this.spherical.phi},t.prototype.getAzimuthalAngle=function(){return this.spherical.theta},t.prototype.dispose=function(){this.domElement.removeEventListener("contextmenu",this.onContextMenu,!1),this.domElement.removeEventListener("mousedown",this.onMouseDown,!1),this.domElement.removeEventListener("wheel",this.onMouseWheel,!1),this.domElement.removeEventListener("touchstart",this.onTouchStart,!1),this.domElement.removeEventListener("touchend",this.onTouchEnd,!1),this.domElement.removeEventListener("touchmove",this.onTouchMove,!1),document.removeEventListener("mousemove",this.onMouseMove,!1),document.removeEventListener("mouseup",this.onMouseUp,!1),this.window.removeEventListener("keydown",this.onKeyDown,!1)},t.prototype.reset=function(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fp),this.update(),this.state=Ae.NONE},Object.defineProperty(t.prototype,"center",{get:function(){return console.warn("THREE.OrbitControls: .center has been renamed to .target"),this.target},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"noZoom",{get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(n){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!n},enumerable:!0,configurable:!0}),t}(ve.EventDispatcher),UT=IT;const OT=Up("",8),NT=Up("",2),VT=JSON.parse('{"title":"\u4EC0\u4E48\u662F Three.js","description":"","frontmatter":{},"headers":[{"level":2,"title":"Three.js \u8D44\u6E90","slug":"three-js-\u8D44\u6E90","link":"#three-js-\u8D44\u6E90","children":[]},{"level":2,"title":"Three.js \u7B80\u5355\u4E0A\u624B","slug":"three-js-\u7B80\u5355\u4E0A\u624B","link":"#three-js-\u7B80\u5355\u4E0A\u624B","children":[]},{"level":2,"title":"\u4EE3\u7801\u793A\u4F8B","slug":"\u4EE3\u7801\u793A\u4F8B","link":"#\u4EE3\u7801\u793A\u4F8B","children":[]}],"relativePath":"threejs/first.md","lastUpdated":1667894472000}'),zT={name:"threejs/first.md"},BT=Object.assign(zT,{setup(e){const t=Eg(null);function n(i){var r=i.clientHeight+400,a=i.clientWidth-25;const s=new C1,o=new jn(75,a/r,.1,1e3);o.position.set(0,0,10),s.add(o);const l=new Vs(1,2,3),c=new Xh({color:16776960}),u=new Ni(l,c);s.add(u);const h=new am;h.setSize(a,r),i.append(h.domElement);const f=new UT(o,h.domElement);f.enableDamping=!0;const d=new R1(5);s.add(d),av.to(u.position,{x:5,duration:5,ease:"power1.inOut",repeat:2,yoyo:!0});function v(){f.update(),h.render(s,o),requestAnimationFrame(v)}v()}return Tg(()=>{n(t.value)}),(i,r)=>(Ag(),Cg("div",null,[OT,Lg("div",{ref_key:"threeDom",ref:t},null,512),NT]))}}),HT=Dg(BT,[["__scopeId","data-v-c049dc13"]]);export{VT as __pageData,HT as default};
