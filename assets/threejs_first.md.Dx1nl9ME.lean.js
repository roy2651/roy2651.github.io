import{g as Ov,c as Zf}from"./chunks/commonjsHelpers.C4iS2aBk.js";import{_ as Nv,p as Bv,v as zv,c as Gv,o as Vv,af as Jf,j as Hv}from"./chunks/framework.0BqVfsWd.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qu="146",Wv=0,Qf=1,Xv=2,zp=1,qv=2,Qs=3,Wa=0,Qn=1,er=2,rr=0,Na=1,Kf=2,ed=3,td=4,Yv=5,Fa=100,jv=101,$v=102,nd=103,id=104,Zv=200,Jv=201,Qv=202,Kv=203,Gp=204,Vp=205,e_=206,t_=207,n_=208,i_=209,r_=210,a_=0,s_=1,o_=2,$h=3,l_=4,c_=5,h_=6,u_=7,Hp=0,f_=1,d_=2,Ni=0,p_=1,m_=2,g_=3,v_=4,__=5,Wp=300,Xa=301,qa=302,Zh=303,Jh=304,Uc=306,Qh=1e3,li=1001,Kh=1002,_n=1003,rd=1004,ad=1005,jn=1006,x_=1007,kc=1008,Gr=1009,y_=1010,b_=1011,Xp=1012,M_=1013,Tr=1014,Ar=1015,oo=1016,w_=1017,E_=1018,Ba=1020,S_=1021,T_=1022,ci=1023,A_=1024,C_=1025,Pr=1026,Ya=1027,L_=1028,R_=1029,P_=1030,D_=1031,F_=1033,ih=33776,rh=33777,ah=33778,sh=33779,sd=35840,od=35841,ld=35842,cd=35843,I_=36196,hd=37492,ud=37496,fd=37808,dd=37809,pd=37810,md=37811,gd=37812,vd=37813,_d=37814,xd=37815,yd=37816,bd=37817,Md=37818,wd=37819,Ed=37820,Sd=37821,Td=36492,Vr=3e3,Pt=3001,U_=3200,k_=3201,O_=0,N_=1,Fi="srgb",Cr="srgb-linear",oh=7680,B_=519,Ad=35044,Cd="300 es",eu=1035;let Gs=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}};const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lh=Math.PI/180,Ld=180/Math.PI;function ol(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Dn(t,e,n){return Math.max(e,Math.min(n,t))}function z_(t,e){return(t%e+e)%e}function ch(t,e,n){return(1-n)*t+n*e}function Rd(t){return(t&t-1)===0&&t!==0}function tu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function xl(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}let St=class qp{constructor(e=0,n=0){qp.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vi=class Yp{constructor(){Yp.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,a,s,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=a,h[5]=c,h[6]=i,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],d=r[0],m=r[3],v=r[6],_=r[1],x=r[4],y=r[7],b=r[2],E=r[5],S=r[8];return a[0]=s*d+o*_+c*b,a[3]=s*m+o*x+c*E,a[6]=s*v+o*y+c*S,a[1]=l*d+h*_+u*b,a[4]=l*m+h*x+u*E,a[7]=l*v+h*y+u*S,a[2]=f*d+p*_+g*b,a[5]=f*m+p*x+g*E,a[8]=f*v+p*y+g*S,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return n*s*h-n*o*l-i*a*h+i*o*c+r*a*l-r*s*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*s-o*l,f=o*c-h*a,p=l*a-s*c,g=n*u+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=u*d,e[1]=(r*l-h*i)*d,e[2]=(o*i-r*s)*d,e[3]=f*d,e[4]=(h*n-r*c)*d,e[5]=(r*a-o*n)*d,e[6]=p*d,e[7]=(i*c-l*n)*d,e[8]=(s*n-i*a)*d,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*s+l*o)+s+e,-r*l,r*c,-r*(-l*s+c*o)+o+n,0,0,1),this}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,a=r[0],s=r[3],o=r[6],c=r[1],l=r[4],h=r[7];return r[0]=n*a+i*c,r[3]=n*s+i*l,r[6]=n*o+i*h,r[1]=-i*a+n*c,r[4]=-i*s+n*l,r[7]=-i*o+n*h,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};function jp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Jl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Dr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Hl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const hh={[Fi]:{[Cr]:Dr},[Cr]:{[Fi]:Hl}},ii={legacyMode:!0,get workingColorSpace(){return Cr},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(hh[e]&&hh[e][n]!==void 0){const i=hh[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},$p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ht={r:0,g:0,b:0},ri={h:0,s:0,l:0},yl={h:0,s:0,l:0};function uh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function bl(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}let bt=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ii.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Cr){return this.r=e,this.g=n,this.b=i,ii.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Cr){if(e=z_(e,1),n=Dn(n,0,1),i=Dn(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,s=2*i-a;this.r=uh(s,a,e+1/3),this.g=uh(s,a,e),this.b=uh(s,a,e-1/3)}return ii.toWorkingColorSpace(this,r),this}setStyle(e,n=Fi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,ii.toWorkingColorSpace(this,n),i(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,ii.toWorkingColorSpace(this,n),i(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const c=parseFloat(a[1])/360,l=parseFloat(a[2])/100,h=parseFloat(a[3])/100;return i(a[4]),this.setHSL(c,l,h,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,ii.toWorkingColorSpace(this,n),this;if(s===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,ii.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=Fi){const i=$p[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}copyLinearToSRGB(e){return this.r=Hl(e.r),this.g=Hl(e.g),this.b=Hl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fi){return ii.fromWorkingColorSpace(bl(this,Ht),e),Dn(Ht.r*255,0,255)<<16^Dn(Ht.g*255,0,255)<<8^Dn(Ht.b*255,0,255)<<0}getHexString(e=Fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Cr){ii.fromWorkingColorSpace(bl(this,Ht),n);const i=Ht.r,r=Ht.g,a=Ht.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let c,l;const h=(o+s)/2;if(o===s)c=0,l=0;else{const u=s-o;switch(l=h<=.5?u/(s+o):u/(2-s-o),s){case i:c=(r-a)/u+(r<a?6:0);break;case r:c=(a-i)/u+2;break;case a:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,n=Cr){return ii.fromWorkingColorSpace(bl(this,Ht),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Fi){return ii.fromWorkingColorSpace(bl(this,Ht),e),e!==Fi?`color(${e} ${Ht.r} ${Ht.g} ${Ht.b})`:`rgb(${Ht.r*255|0},${Ht.g*255|0},${Ht.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(ri),ri.h+=e,ri.s+=n,ri.l+=i,this.setHSL(ri.h,ri.s,ri.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ri),e.getHSL(yl);const i=ch(ri.h,yl.h,n),r=ch(ri.s,yl.s,n),a=ch(ri.l,yl.l,n);return this.setHSL(i,r,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};bt.NAMES=$p;let _a,Zp=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_a===void 0&&(_a=Jl("canvas")),_a.width=e.width,_a.height=e.height;const i=_a.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=_a}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Jl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Dr(a[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Dr(n[i]/255)*255):n[i]=Dr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};class Jp{constructor(e=null){this.isSource=!0,this.uuid=ol(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(fh(r[s].image)):a.push(fh(r[s]))}else a=fh(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function fh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Zp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let G_=0,mr=class nu extends Gs{constructor(e=nu.DEFAULT_IMAGE,n=nu.DEFAULT_MAPPING,i=li,r=li,a=jn,s=kc,o=ci,c=Gr,l=1,h=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=ol(),this.name="",this.source=new Jp(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vi,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qh:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qh:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};mr.DEFAULT_IMAGE=null;mr.DEFAULT_MAPPING=Wp;let dn=class Qp{constructor(e=0,n=0,i=0,r=1){Qp.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],d=c[2],m=c[6],v=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+d)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(l+1)/2,y=(p+1)/2,b=(v+1)/2,E=(h+f)/4,S=(u+d)/4,M=(g+m)/4;return x>y&&x>b?x<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(x),r=E/i,a=S/i):y>b?y<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(y),i=E/r,a=M/r):b<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(b),i=S/a,r=M/a),this.set(i,r,a,n),this}let _=Math.sqrt((m-g)*(m-g)+(u-d)*(u-d)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-d)/_,this.z=(f-h)/_,this.w=Math.acos((l+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hr=class extends Gs{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new dn(0,0,e,n),this.scissorTest=!1,this.viewport=new dn(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new mr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:jn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Jp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};class Kp extends mr{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class V_ extends mr{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let ll=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,s,o){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3];const f=a[s+0],p=a[s+1],g=a[s+2],d=a[s+3];if(o===0){e[n+0]=c,e[n+1]=l,e[n+2]=h,e[n+3]=u;return}if(o===1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=d;return}if(u!==d||c!==f||l!==p||h!==g){let m=1-o;const v=c*f+l*p+h*g+u*d,_=v>=0?1:-1,x=1-v*v;if(x>Number.EPSILON){const b=Math.sqrt(x),E=Math.atan2(b,v*_);m=Math.sin(m*E)/b,o=Math.sin(o*E)/b}const y=o*_;if(c=c*m+f*y,l=l*m+p*y,h=h*m+g*y,u=u*m+d*y,m===1-o){const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}e[n]=c,e[n+1]=l,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,r,a,s){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=a[s],f=a[s+1],p=a[s+2],g=a[s+3];return e[n]=o*g+h*u+c*p-l*f,e[n+1]=c*g+h*f+l*u-o*p,e[n+2]=l*g+h*p+o*f-c*u,e[n+3]=h*g-o*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),u=o(a/2),f=c(i/2),p=c(r/2),g=c(a/2);switch(s){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],s=n[1],o=n[5],c=n[9],l=n[2],h=n[6],u=n[10],f=i+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(a-l)*p,this._z=(s-r)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(a-l)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(s-r)/p,this._x=(a+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,s=e._w,o=n._x,c=n._y,l=n._z,h=n._w;return this._x=i*h+s*o+r*l-a*c,this._y=r*h+s*c+a*o-i*l,this._z=a*h+s*l+i*c-r*o,this._w=s*h-i*o-r*c-a*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*a+n*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-n)*h)/l,f=Math.sin(n*h)/l;return this._w=s*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=a*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(a),i*Math.cos(a),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},te=class em{constructor(e=0,n=0,i=0){em.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Pd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Pd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=c*n+s*r-o*i,h=c*i+o*n-a*r,u=c*r+a*i-s*n,f=-a*n-s*i-o*r;return this.x=l*c+f*-a+h*-o-u*-s,this.y=h*c+f*-s+u*-a-l*-o,this.z=u*c+f*-o+l*-s-h*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,s=n.x,o=n.y,c=n.z;return this.x=r*c-a*o,this.y=a*s-i*c,this.z=i*o-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dh.copy(this).projectOnVector(e),this.sub(dh)}reflect(e){return this.sub(dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const dh=new te,Pd=new ll;let cl=class{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,a=-1/0,s=-1/0,o=-1/0;for(let c=0,l=e.length;c<l;c+=3){const h=e[c],u=e[c+1],f=e[c+2];h<n&&(n=h),u<i&&(i=u),f<r&&(r=f),h>a&&(a=h),u>s&&(s=u),f>o&&(o=f)}return this.min.set(n,i,r),this.max.set(a,s,o),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,a=-1/0,s=-1/0,o=-1/0;for(let c=0,l=e.count;c<l;c++){const h=e.getX(c),u=e.getY(c),f=e.getZ(c);h<n&&(n=h),u<i&&(i=u),f<r&&(r=f),h>a&&(a=h),u>s&&(s=u),f>o&&(o=f)}return this.min.set(n,i,r),this.max.set(a,s,o),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=vr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const a=i.attributes.position;for(let s=0,o=a.count;s<o;s++)vr.fromBufferAttribute(a,s).applyMatrix4(e.matrixWorld),this.expandByPoint(vr)}else i.boundingBox===null&&i.computeBoundingBox(),ph.copy(i.boundingBox),ph.applyMatrix4(e.matrixWorld),this.union(ph);const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vr),vr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Ml.subVectors(this.max,Ys),xa.subVectors(e.a,Ys),ya.subVectors(e.b,Ys),ba.subVectors(e.c,Ys),Yi.subVectors(ya,xa),ji.subVectors(ba,ya),_r.subVectors(xa,ba);let n=[0,-Yi.z,Yi.y,0,-ji.z,ji.y,0,-_r.z,_r.y,Yi.z,0,-Yi.x,ji.z,0,-ji.x,_r.z,0,-_r.x,-Yi.y,Yi.x,0,-ji.y,ji.x,0,-_r.y,_r.x,0];return!mh(n,xa,ya,ba,Ml)||(n=[1,0,0,0,1,0,0,0,1],!mh(n,xa,ya,ba,Ml))?!1:(wl.crossVectors(Yi,ji),n=[wl.x,wl.y,wl.z],mh(n,xa,ya,ba,Ml))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return vr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(vr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};const Ci=[new te,new te,new te,new te,new te,new te,new te,new te],vr=new te,ph=new cl,xa=new te,ya=new te,ba=new te,Yi=new te,ji=new te,_r=new te,Ys=new te,Ml=new te,wl=new te,xr=new te;function mh(t,e,n,i,r){for(let a=0,s=t.length-3;a<=s;a+=3){xr.fromArray(t,a);const o=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),c=e.dot(xr),l=n.dot(xr),h=i.dot(xr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const H_=new cl,js=new te,gh=new te;let Oc=class{constructor(e=new te,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):H_.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const n=js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(gh)),this.expandByPoint(js.copy(e.center).sub(gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Li=new te,vh=new te,El=new te,$i=new te,_h=new te,Sl=new te,xh=new te;let tm=class{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.direction).multiplyScalar(n).add(this.origin),Li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){vh.copy(e).add(n).multiplyScalar(.5),El.copy(n).sub(e).normalize(),$i.copy(this.origin).sub(vh);const a=e.distanceTo(n)*.5,s=-this.direction.dot(El),o=$i.dot(this.direction),c=-$i.dot(El),l=$i.lengthSq(),h=Math.abs(1-s*s);let u,f,p,g;if(h>0)if(u=s*c-o,f=s*o-c,g=a*h,u>=0)if(f>=-g)if(f<=g){const d=1/h;u*=d,f*=d,p=u*(u+s*f+2*o)+f*(s*u+f+2*c)+l}else f=a,u=Math.max(0,-(s*f+o)),p=-u*u+f*(f+2*c)+l;else f=-a,u=Math.max(0,-(s*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-s*a+o)),f=u>0?-a:Math.min(Math.max(-a,-c),a),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-a,-c),a),p=f*(f+2*c)+l):(u=Math.max(0,-(s*a+o)),f=u>0?a:Math.min(Math.max(-a,-c),a),p=-u*u+f*(f+2*c)+l);else f=s>0?-a:a,u=Math.max(0,-(s*f+o)),p=-u*u+f*(f+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),r&&r.copy(El).multiplyScalar(f).add(vh),p}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,c=i+s;return o<0&&c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,s,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(a=(e.min.y-f.y)*h,s=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,s=(e.min.y-f.y)*h),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,i,r,a){_h.subVectors(n,e),Sl.subVectors(i,e),xh.crossVectors(_h,Sl);let s=this.direction.dot(xh),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;$i.subVectors(this.origin,e);const c=o*this.direction.dot(Sl.crossVectors($i,Sl));if(c<0)return null;const l=o*this.direction.dot(_h.cross($i));if(l<0||c+l>s)return null;const h=-o*$i.dot(xh);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pn=class iu{constructor(){iu.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,a,s,o,c,l,h,u,f,p,g,d,m){const v=this.elements;return v[0]=e,v[4]=n,v[8]=i,v[12]=r,v[1]=a,v[5]=s,v[9]=o,v[13]=c,v[2]=l,v[6]=h,v[10]=u,v[14]=f,v[3]=p,v[7]=g,v[11]=d,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new iu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ma.setFromMatrixColumn(e,0).length(),a=1/Ma.setFromMatrixColumn(e,1).length(),s=1/Ma.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const f=s*h,p=s*u,g=o*h,d=o*u;n[0]=c*h,n[4]=-c*u,n[8]=l,n[1]=p+g*l,n[5]=f-d*l,n[9]=-o*c,n[2]=d-f*l,n[6]=g+p*l,n[10]=s*c}else if(e.order==="YXZ"){const f=c*h,p=c*u,g=l*h,d=l*u;n[0]=f+d*o,n[4]=g*o-p,n[8]=s*l,n[1]=s*u,n[5]=s*h,n[9]=-o,n[2]=p*o-g,n[6]=d+f*o,n[10]=s*c}else if(e.order==="ZXY"){const f=c*h,p=c*u,g=l*h,d=l*u;n[0]=f-d*o,n[4]=-s*u,n[8]=g+p*o,n[1]=p+g*o,n[5]=s*h,n[9]=d-f*o,n[2]=-s*l,n[6]=o,n[10]=s*c}else if(e.order==="ZYX"){const f=s*h,p=s*u,g=o*h,d=o*u;n[0]=c*h,n[4]=g*l-p,n[8]=f*l+d,n[1]=c*u,n[5]=d*l+f,n[9]=p*l-g,n[2]=-l,n[6]=o*c,n[10]=s*c}else if(e.order==="YZX"){const f=s*c,p=s*l,g=o*c,d=o*l;n[0]=c*h,n[4]=d-f*u,n[8]=g*u+p,n[1]=u,n[5]=s*h,n[9]=-o*h,n[2]=-l*h,n[6]=p*u+g,n[10]=f-d*u}else if(e.order==="XZY"){const f=s*c,p=s*l,g=o*c,d=o*l;n[0]=c*h,n[4]=-u,n[8]=l*h,n[1]=f*u+d,n[5]=s*h,n[9]=p*u-g,n[2]=g*u-p,n[6]=o*h,n[10]=d*u+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W_,e,X_)}lookAt(e,n,i){const r=this.elements;return Ln.subVectors(e,n),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Zi.crossVectors(i,Ln),Zi.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Zi.crossVectors(i,Ln)),Zi.normalize(),Tl.crossVectors(Ln,Zi),r[0]=Zi.x,r[4]=Tl.x,r[8]=Ln.x,r[1]=Zi.y,r[5]=Tl.y,r[9]=Ln.y,r[2]=Zi.z,r[6]=Tl.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],d=i[6],m=i[10],v=i[14],_=i[3],x=i[7],y=i[11],b=i[15],E=r[0],S=r[4],M=r[8],w=r[12],L=r[1],z=r[5],V=r[9],A=r[13],T=r[2],P=r[6],O=r[10],H=r[14],N=r[3],I=r[7],B=r[11],Z=r[15];return a[0]=s*E+o*L+c*T+l*N,a[4]=s*S+o*z+c*P+l*I,a[8]=s*M+o*V+c*O+l*B,a[12]=s*w+o*A+c*H+l*Z,a[1]=h*E+u*L+f*T+p*N,a[5]=h*S+u*z+f*P+p*I,a[9]=h*M+u*V+f*O+p*B,a[13]=h*w+u*A+f*H+p*Z,a[2]=g*E+d*L+m*T+v*N,a[6]=g*S+d*z+m*P+v*I,a[10]=g*M+d*V+m*O+v*B,a[14]=g*w+d*A+m*H+v*Z,a[3]=_*E+x*L+y*T+b*N,a[7]=_*S+x*z+y*P+b*I,a[11]=_*M+x*V+y*O+b*B,a[15]=_*w+x*A+y*H+b*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],d=e[7],m=e[11],v=e[15];return g*(+a*c*u-r*l*u-a*o*f+i*l*f+r*o*p-i*c*p)+d*(+n*c*p-n*l*f+a*s*f-r*s*p+r*l*h-a*c*h)+m*(+n*l*u-n*o*p-a*s*u+i*s*p+a*o*h-i*l*h)+v*(-r*o*h-n*c*u+n*o*f+r*s*u-i*s*f+i*c*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],d=e[13],m=e[14],v=e[15],_=u*m*l-d*f*l+d*c*p-o*m*p-u*c*v+o*f*v,x=g*f*l-h*m*l-g*c*p+s*m*p+h*c*v-s*f*v,y=h*d*l-g*u*l+g*o*p-s*d*p-h*o*v+s*u*v,b=g*u*c-h*d*c-g*o*f+s*d*f+h*o*m-s*u*m,E=n*_+i*x+r*y+a*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/E;return e[0]=_*S,e[1]=(d*f*a-u*m*a-d*r*p+i*m*p+u*r*v-i*f*v)*S,e[2]=(o*m*a-d*c*a+d*r*l-i*m*l-o*r*v+i*c*v)*S,e[3]=(u*c*a-o*f*a-u*r*l+i*f*l+o*r*p-i*c*p)*S,e[4]=x*S,e[5]=(h*m*a-g*f*a+g*r*p-n*m*p-h*r*v+n*f*v)*S,e[6]=(g*c*a-s*m*a-g*r*l+n*m*l+s*r*v-n*c*v)*S,e[7]=(s*f*a-h*c*a+h*r*l-n*f*l-s*r*p+n*c*p)*S,e[8]=y*S,e[9]=(g*u*a-h*d*a-g*i*p+n*d*p+h*i*v-n*u*v)*S,e[10]=(s*d*a-g*o*a+g*i*l-n*d*l-s*i*v+n*o*v)*S,e[11]=(h*o*a-s*u*a-h*i*l+n*u*l+s*i*p-n*o*p)*S,e[12]=b*S,e[13]=(h*d*r-g*u*r+g*i*f-n*d*f-h*i*m+n*u*m)*S,e[14]=(g*o*r-s*d*r-g*i*c+n*d*c+s*i*m-n*o*m)*S,e[15]=(s*u*r-h*o*r+h*i*c-n*u*c-s*i*f+n*o*f)*S,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,s=e.x,o=e.y,c=e.z,l=a*s,h=a*o;return this.set(l*s+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*s,0,l*c-r*o,h*c+r*s,a*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,s=n._y,o=n._z,c=n._w,l=a+a,h=s+s,u=o+o,f=a*l,p=a*h,g=a*u,d=s*h,m=s*u,v=o*u,_=c*l,x=c*h,y=c*u,b=i.x,E=i.y,S=i.z;return r[0]=(1-(d+v))*b,r[1]=(p+y)*b,r[2]=(g-x)*b,r[3]=0,r[4]=(p-y)*E,r[5]=(1-(f+v))*E,r[6]=(m+_)*E,r[7]=0,r[8]=(g+x)*S,r[9]=(m-_)*S,r[10]=(1-(f+d))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=Ma.set(r[0],r[1],r[2]).length();const s=Ma.set(r[4],r[5],r[6]).length(),o=Ma.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],ai.copy(this);const l=1/a,h=1/s,u=1/o;return ai.elements[0]*=l,ai.elements[1]*=l,ai.elements[2]*=l,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=u,ai.elements[9]*=u,ai.elements[10]*=u,n.setFromRotationMatrix(ai),i.x=a,i.y=s,i.z=o,this}makePerspective(e,n,i,r,a,s){const o=this.elements,c=2*a/(n-e),l=2*a/(i-r),h=(n+e)/(n-e),u=(i+r)/(i-r),f=-(s+a)/(s-a),p=-2*s*a/(s-a);return o[0]=c,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=l,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,n,i,r,a,s){const o=this.elements,c=1/(n-e),l=1/(i-r),h=1/(s-a),u=(n+e)*c,f=(i+r)*l,p=(s+a)*h;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};const Ma=new te,ai=new pn,W_=new te(0,0,0),X_=new te(1,1,1),Zi=new te,Tl=new te,Ln=new te,Dd=new pn,Fd=new ll;let Yu=class nm{constructor(e=0,n=0,i=0,r=nm.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Dn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Dn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fd.setFromEuler(this),this.setFromQuaternion(Fd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}};Yu.DefaultOrder="XYZ";Yu.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];let im=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},q_=0;const Id=new te,wa=new ll,Ri=new pn,Al=new te,$s=new te,Y_=new te,j_=new ll,Ud=new te(1,0,0),kd=new te(0,1,0),Od=new te(0,0,1),$_={type:"added"},Nd={type:"removed"};let Ai=class Wl extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wl.DefaultUp.clone();const e=new te,n=new Yu,i=new ll,r=new te(1,1,1);function a(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pn},normalMatrix:{value:new vi}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=Wl.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Wl.DefaultMatrixWorldAutoUpdate,this.layers=new im,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return wa.setFromAxisAngle(e,n),this.quaternion.multiply(wa),this}rotateOnWorldAxis(e,n){return wa.setFromAxisAngle(e,n),this.quaternion.premultiply(wa),this}rotateX(e){return this.rotateOnAxis(Ud,e)}rotateY(e){return this.rotateOnAxis(kd,e)}rotateZ(e){return this.rotateOnAxis(Od,e)}translateOnAxis(e,n){return Id.copy(e).applyQuaternion(this.quaternion),this.position.add(Id.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ud,e)}translateY(e){return this.translateOnAxis(kd,e)}translateZ(e){return this.translateOnAxis(Od,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Al.copy(e):Al.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt($s,Al,this.up):Ri.lookAt(Al,$s,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),wa.setFromRotationMatrix(Ri),this.quaternion.premultiply(wa.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Nd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Nd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,Y_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,j_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const a=n[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];a(e.shapes,u)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(n){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),h=s(e.images),u=s(e.shapes),f=s(e.skeletons),p=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}};Ai.DefaultUp=new te(0,1,0);Ai.DefaultMatrixAutoUpdate=!0;Ai.DefaultMatrixWorldAutoUpdate=!0;const si=new te,Pi=new te,yh=new te,Di=new te,Ea=new te,Sa=new te,Bd=new te,bh=new te,Mh=new te,wh=new te;let Eh=class Ia{constructor(e=new te,n=new te,i=new te){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),si.subVectors(e,n),r.cross(si);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){si.subVectors(r,n),Pi.subVectors(i,n),yh.subVectors(e,n);const s=si.dot(si),o=si.dot(Pi),c=si.dot(yh),l=Pi.dot(Pi),h=Pi.dot(yh),u=s*l-o*o;if(u===0)return a.set(-2,-1,-1);const f=1/u,p=(l*c-o*h)*f,g=(s*h-o*c)*f;return a.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Di),Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getUV(e,n,i,r,a,s,o,c){return this.getBarycoord(e,n,i,r,Di),c.set(0,0),c.addScaledVector(a,Di.x),c.addScaledVector(s,Di.y),c.addScaledVector(o,Di.z),c}static isFrontFacing(e,n,i,r){return si.subVectors(i,n),Pi.subVectors(e,n),si.cross(Pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),si.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ia.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ia.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,a){return Ia.getUV(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return Ia.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ia.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let s,o;Ea.subVectors(r,i),Sa.subVectors(a,i),bh.subVectors(e,i);const c=Ea.dot(bh),l=Sa.dot(bh);if(c<=0&&l<=0)return n.copy(i);Mh.subVectors(e,r);const h=Ea.dot(Mh),u=Sa.dot(Mh);if(h>=0&&u<=h)return n.copy(r);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return s=c/(c-h),n.copy(i).addScaledVector(Ea,s);wh.subVectors(e,a);const p=Ea.dot(wh),g=Sa.dot(wh);if(g>=0&&p<=g)return n.copy(a);const d=p*l-c*g;if(d<=0&&l>=0&&g<=0)return o=l/(l-g),n.copy(i).addScaledVector(Sa,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Bd.subVectors(a,r),o=(u-h)/(u-h+(p-g)),n.copy(r).addScaledVector(Bd,o);const v=1/(m+d+f);return s=d*v,o=f*v,n.copy(i).addScaledVector(Ea,s).addScaledVector(Sa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Z_=0,hl=class extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=Na,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Gp,this.blendDst=Vp,this.blendEquation=Fa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$h,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oh,this.stencilZFail=oh,this.stencilZPass=oh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Na&&(i.blending=this.blending),this.side!==Wa&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(n){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ju=class extends hl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};const Nt=new te,Cl=new St;let xi=class{constructor(e,n,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i===!0,this.usage=Ad,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Cl.fromBufferAttribute(this,n),Cl.applyMatrix3(e),this.setXY(n,Cl.x,Cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=xl(n,this.array)),n}setX(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=xl(n,this.array)),n}setY(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=xl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=xl(n,this.array)),n}setW(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),i=Cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),i=Cn(i,this.array),r=Cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),i=Cn(i,this.array),r=Cn(r,this.array),a=Cn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ad&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}},rm=class extends xi{constructor(e,n,i){super(new Uint16Array(e),n,i)}},am=class extends xi{constructor(e,n,i){super(new Uint32Array(e),n,i)}},hi=class extends xi{constructor(e,n,i){super(new Float32Array(e),n,i)}},J_=0;const qn=new pn,Sh=new Ai,Ta=new te,Rn=new cl,Zs=new cl,Yt=new te;let da=class sm extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jp(e)?am:rm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new vi().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,i){return qn.makeTranslation(e,n,i),this.applyMatrix4(qn),this}scale(e,n,i){return qn.makeScale(e,n,i),this.applyMatrix4(qn),this}lookAt(e){return Sh.lookAt(e),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ta).negate(),this.translate(Ta.x,Ta.y,Ta.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new hi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];Rn.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new te,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let a=0,s=n.length;a<s;a++){const o=n[a];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(Rn.min,Zs.min),Rn.expandByPoint(Yt),Yt.addVectors(Rn.max,Zs.max),Rn.expandByPoint(Yt)):(Rn.expandByPoint(Zs.min),Rn.expandByPoint(Zs.max))}Rn.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Yt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Yt));if(n)for(let a=0,s=n.length;a<s;a++){const o=n[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Yt.fromBufferAttribute(o,l),c&&(Ta.fromBufferAttribute(e,l),Yt.add(Ta)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,a=n.normal.array,s=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let L=0;L<o;L++)l[L]=new te,h[L]=new te;const u=new te,f=new te,p=new te,g=new St,d=new St,m=new St,v=new te,_=new te;function x(L,z,V){u.fromArray(r,L*3),f.fromArray(r,z*3),p.fromArray(r,V*3),g.fromArray(s,L*2),d.fromArray(s,z*2),m.fromArray(s,V*2),f.sub(u),p.sub(u),d.sub(g),m.sub(g);const A=1/(d.x*m.y-m.x*d.y);isFinite(A)&&(v.copy(f).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(A),_.copy(p).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(A),l[L].add(v),l[z].add(v),l[V].add(v),h[L].add(_),h[z].add(_),h[V].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let L=0,z=y.length;L<z;++L){const V=y[L],A=V.start,T=V.count;for(let P=A,O=A+T;P<O;P+=3)x(i[P+0],i[P+1],i[P+2])}const b=new te,E=new te,S=new te,M=new te;function w(L){S.fromArray(a,L*3),M.copy(S);const z=l[L];b.copy(z),b.sub(S.multiplyScalar(S.dot(z))).normalize(),E.crossVectors(M,z);const A=E.dot(h[L])<0?-1:1;c[L*4]=b.x,c[L*4+1]=b.y,c[L*4+2]=b.z,c[L*4+3]=A}for(let L=0,z=y.length;L<z;++L){const V=y[L],A=V.start,T=V.count;for(let P=A,O=A+T;P<O;P+=3)w(i[P+0]),w(i[P+1]),w(i[P+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new te,a=new te,s=new te,o=new te,c=new te,l=new te,h=new te,u=new te;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),d=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),a.fromBufferAttribute(n,d),s.fromBufferAttribute(n,m),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,d),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(d,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Yt.fromBufferAttribute(e,n),Yt.normalize(),e.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let d=0,m=c.length;d<m;d++){o.isInterleavedBufferAttribute?p=c[d]*o.data.stride+o.offset:p=c[d]*h;for(let v=0;v<h;v++)f[g++]=l[p++]}return new xi(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new sm,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);n.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=e(f,i);c.push(p)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(n))}const a=e.morphAttributes;for(const l in a){const h=[],u=a[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(n));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,h=s.length;l<h;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}};const zd=new pn,Aa=new tm,Th=new Oc,Ji=new te,Qi=new te,Ki=new te,Ah=new te,Ch=new te,Lh=new te,Ll=new te,Rl=new te,Pl=new te,Dl=new St,Fl=new St,Il=new St,Rh=new te,Ul=new te;let ki=class extends Ai{constructor(e=new da,n=new ju){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Th.copy(i.boundingSphere),Th.applyMatrix4(a),e.ray.intersectsSphere(Th)===!1)||(zd.copy(a).invert(),Aa.copy(e.ray).applyMatrix4(zd),i.boundingBox!==null&&Aa.intersectsBox(i.boundingBox)===!1))return;let s;const o=i.index,c=i.attributes.position,l=i.morphAttributes.position,h=i.morphTargetsRelative,u=i.attributes.uv,f=i.attributes.uv2,p=i.groups,g=i.drawRange;if(o!==null)if(Array.isArray(r))for(let d=0,m=p.length;d<m;d++){const v=p[d],_=r[v.materialIndex],x=Math.max(v.start,g.start),y=Math.min(o.count,Math.min(v.start+v.count,g.start+g.count));for(let b=x,E=y;b<E;b+=3){const S=o.getX(b),M=o.getX(b+1),w=o.getX(b+2);s=kl(this,_,e,Aa,c,l,h,u,f,S,M,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=v.materialIndex,n.push(s))}}else{const d=Math.max(0,g.start),m=Math.min(o.count,g.start+g.count);for(let v=d,_=m;v<_;v+=3){const x=o.getX(v),y=o.getX(v+1),b=o.getX(v+2);s=kl(this,r,e,Aa,c,l,h,u,f,x,y,b),s&&(s.faceIndex=Math.floor(v/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let d=0,m=p.length;d<m;d++){const v=p[d],_=r[v.materialIndex],x=Math.max(v.start,g.start),y=Math.min(c.count,Math.min(v.start+v.count,g.start+g.count));for(let b=x,E=y;b<E;b+=3){const S=b,M=b+1,w=b+2;s=kl(this,_,e,Aa,c,l,h,u,f,S,M,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=v.materialIndex,n.push(s))}}else{const d=Math.max(0,g.start),m=Math.min(c.count,g.start+g.count);for(let v=d,_=m;v<_;v+=3){const x=v,y=v+1,b=v+2;s=kl(this,r,e,Aa,c,l,h,u,f,x,y,b),s&&(s.faceIndex=Math.floor(v/3),n.push(s))}}}};function Q_(t,e,n,i,r,a,s,o){let c;if(e.side===Qn?c=i.intersectTriangle(s,a,r,!0,o):c=i.intersectTriangle(r,a,s,e.side!==er,o),c===null)return null;Ul.copy(o),Ul.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(Ul);return l<n.near||l>n.far?null:{distance:l,point:Ul.clone(),object:t}}function kl(t,e,n,i,r,a,s,o,c,l,h,u){Ji.fromBufferAttribute(r,l),Qi.fromBufferAttribute(r,h),Ki.fromBufferAttribute(r,u);const f=t.morphTargetInfluences;if(a&&f){Ll.set(0,0,0),Rl.set(0,0,0),Pl.set(0,0,0);for(let g=0,d=a.length;g<d;g++){const m=f[g],v=a[g];m!==0&&(Ah.fromBufferAttribute(v,l),Ch.fromBufferAttribute(v,h),Lh.fromBufferAttribute(v,u),s?(Ll.addScaledVector(Ah,m),Rl.addScaledVector(Ch,m),Pl.addScaledVector(Lh,m)):(Ll.addScaledVector(Ah.sub(Ji),m),Rl.addScaledVector(Ch.sub(Qi),m),Pl.addScaledVector(Lh.sub(Ki),m)))}Ji.add(Ll),Qi.add(Rl),Ki.add(Pl)}t.isSkinnedMesh&&(t.boneTransform(l,Ji),t.boneTransform(h,Qi),t.boneTransform(u,Ki));const p=Q_(t,e,n,i,Ji,Qi,Ki,Rh);if(p){o&&(Dl.fromBufferAttribute(o,l),Fl.fromBufferAttribute(o,h),Il.fromBufferAttribute(o,u),p.uv=Eh.getUV(Rh,Ji,Qi,Ki,Dl,Fl,Il,new St)),c&&(Dl.fromBufferAttribute(c,l),Fl.fromBufferAttribute(c,h),Il.fromBufferAttribute(c,u),p.uv2=Eh.getUV(Rh,Ji,Qi,Ki,Dl,Fl,Il,new St));const g={a:l,b:h,c:u,normal:new te,materialIndex:0};Eh.getNormal(Ji,Qi,Ki,g.normal),p.face=g}return p}let Nc=class om extends da{constructor(e=1,n=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,s,a,0),g("z","y","x",1,-1,i,n,-e,s,a,1),g("x","z","y",1,1,e,i,n,r,s,2),g("x","z","y",1,-1,e,i,-n,r,s,3),g("x","y","z",1,-1,e,n,i,r,a,4),g("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(c),this.setAttribute("position",new hi(l,3)),this.setAttribute("normal",new hi(h,3)),this.setAttribute("uv",new hi(u,2));function g(d,m,v,_,x,y,b,E,S,M,w){const L=y/S,z=b/M,V=y/2,A=b/2,T=E/2,P=S+1,O=M+1;let H=0,N=0;const I=new te;for(let B=0;B<O;B++){const Z=B*z-A;for(let X=0;X<P;X++){const G=X*L-V;I[d]=G*_,I[m]=Z*x,I[v]=T,l.push(I.x,I.y,I.z),I[d]=0,I[m]=0,I[v]=E>0?1:-1,h.push(I.x,I.y,I.z),u.push(X/S),u.push(1-B/M),H+=1}}for(let B=0;B<M;B++)for(let Z=0;Z<S;Z++){const X=f+Z+P*B,G=f+Z+P*(B+1),J=f+(Z+1)+P*(B+1),ie=f+(Z+1)+P*B;c.push(X,G,ie),c.push(G,J,ie),N+=6}o.addGroup(p,N,w),p+=N,f+=H}}static fromJSON(e){return new om(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ja(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=ja(t[n]);for(const r in i)e[r]=i[r]}return e}function K_(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}const e0={clone:ja,merge:un};var t0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;let Wr=class extends hl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t0,this.fragmentShader=n0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ja(e.uniforms),this.uniformsGroups=K_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},lm=class extends Ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$n=class extends lm{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ld*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ld*2*Math.atan(Math.tan(lh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,a,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(lh*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/c,n-=s.offsetY*i/l,r*=s.width/c,i*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};const Ca=90,La=1;let i0=class extends Ai{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new $n(Ca,La,e,n);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new te(1,0,0)),this.add(r);const a=new $n(Ca,La,e,n);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new te(-1,0,0)),this.add(a);const s=new $n(Ca,La,e,n);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new te(0,1,0)),this.add(s);const o=new $n(Ca,La,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new te(0,-1,0)),this.add(o);const c=new $n(Ca,La,e,n);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new te(0,0,1)),this.add(c);const l=new $n(Ca,La,e,n);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new te(0,0,-1)),this.add(l)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,a,s,o,c,l]=this.children,h=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=Ni,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,a),e.setRenderTarget(i,2),e.render(n,s),e.setRenderTarget(i,3),e.render(n,o),e.setRenderTarget(i,4),e.render(n,c),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,l),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},cm=class extends mr{constructor(e,n,i,r,a,s,o,c,l,h){e=e!==void 0?e:[],n=n!==void 0?n:Xa,super(e,n,i,r,a,s,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};class r0 extends Hr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new cm(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Nc(5,5,5),a=new Wr({name:"CubemapFromEquirect",uniforms:ja(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qn,blending:rr});a.uniforms.tEquirect.value=n;const s=new ki(r,a),o=n.minFilter;return n.minFilter===kc&&(n.minFilter=jn),new i0(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(a)}}const Ph=new te,a0=new te,s0=new vi;let Mr=class{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ph.subVectors(i,n).cross(a0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(Ph),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(i).multiplyScalar(a).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||s0.getNormalMatrix(e),r=this.coplanarPoint(Ph).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ra=new Oc,Ol=new te;let hm=class{constructor(e=new Mr,n=new Mr,i=new Mr,r=new Mr,a=new Mr,s=new Mr){this.planes=[e,n,i,r,a,s]}set(e,n,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],a=i[1],s=i[2],o=i[3],c=i[4],l=i[5],h=i[6],u=i[7],f=i[8],p=i[9],g=i[10],d=i[11],m=i[12],v=i[13],_=i[14],x=i[15];return n[0].setComponents(o-r,u-c,d-f,x-m).normalize(),n[1].setComponents(o+r,u+c,d+f,x+m).normalize(),n[2].setComponents(o+a,u+l,d+p,x+v).normalize(),n[3].setComponents(o-a,u-l,d-p,x-v).normalize(),n[4].setComponents(o-s,u-h,d-g,x-_).normalize(),n[5].setComponents(o+s,u+h,d+g,x+_).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ra)}intersectsSprite(e){return Ra.center.set(0,0,0),Ra.radius=.7071067811865476,Ra.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ra)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ol.x=r.normal.x>0?e.max.x:e.min.x,Ol.y=r.normal.y>0?e.max.y:e.min.y,Ol.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function um(){let t=null,e=!1,n=null,i=null;function r(a,s){n(a,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function o0(t,e){const n=e.isWebGL2,i=new WeakMap;function r(l,h){const u=l.array,f=l.usage,p=t.createBuffer();t.bindBuffer(h,p),t.bufferData(h,u,f),l.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(n)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function a(l,h,u){const f=h.array,p=h.updateRange;t.bindBuffer(u,l),p.count===-1?t.bufferSubData(u,0,f):(n?t.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):t.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1)}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h&&(t.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u===void 0?i.set(l,r(l,h)):u.version<l.version&&(a(u.buffer,l,h),u.version=l.version)}return{get:s,remove:o,update:c}}let l0=class fm extends da{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,s=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,u=e/o,f=n/c,p=[],g=[],d=[],m=[];for(let v=0;v<h;v++){const _=v*f-s;for(let x=0;x<l;x++){const y=x*u-a;g.push(y,-_,0),d.push(0,0,1),m.push(x/o),m.push(1-v/c)}}for(let v=0;v<c;v++)for(let _=0;_<o;_++){const x=_+l*v,y=_+l*(v+1),b=_+1+l*(v+1),E=_+1+l*v;p.push(x,y,E),p.push(y,b,E)}this.setIndex(p),this.setAttribute("position",new hi(g,3)),this.setAttribute("normal",new hi(d,3)),this.setAttribute("uv",new hi(m,2))}static fromJSON(e){return new fm(e.width,e.height,e.widthSegments,e.heightSegments)}};var c0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,h0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,f0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m0="vec3 transformed = vec3( position );",g0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,_0=`#ifdef USE_IRIDESCENCE
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
#endif`,x0=`#ifdef USE_BUMPMAP
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,C0=`#define PI 3.141592653589793
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
}`,L0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,R0=`vec3 transformedNormal = objectNormal;
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
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U0="gl_FragColor = linearToOutputTexel( gl_FragColor );",k0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,O0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q0=`#ifdef USE_GRADIENTMAP
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
}`,Y0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,j0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,J0=`uniform bool receiveShadow;
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
#endif`,Q0=`#if defined( USE_ENVMAP )
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
#endif`,K0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ex=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,tx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,ix=`PhysicalMaterial material;
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
#endif`,rx=`struct PhysicalMaterial {
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
}`,ax=`
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
#endif`,sx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ox=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,lx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ux=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_x=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xx=`#ifdef USE_MORPHNORMALS
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
#endif`,yx=`#ifdef USE_MORPHTARGETS
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
#endif`,bx=`#ifdef USE_MORPHTARGETS
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
#endif`,Mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,wx=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ax=`#ifdef USE_NORMALMAP
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
#endif`,Cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ox=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vx=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hx=`float getShadowMask() {
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
}`,Wx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xx=`#ifdef USE_SKINNING
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
#endif`,qx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yx=`#ifdef USE_SKINNING
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
#endif`,jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$x=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qx=`#ifdef USE_TRANSMISSION
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
#endif`,Kx=`#ifdef USE_TRANSMISSION
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
#endif`,ey=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ty=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ny=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,iy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ry=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ay=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,sy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ly=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dy=`#include <common>
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
}`,py=`#if DEPTH_PACKING == 3200
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
}`,my=`#define DISTANCE
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
}`,gy=`#define DISTANCE
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
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_y=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xy=`uniform float scale;
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
}`,yy=`uniform vec3 diffuse;
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
}`,by=`#include <common>
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
}`,My=`uniform vec3 diffuse;
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
}`,wy=`#define LAMBERT
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
}`,Ey=`#define LAMBERT
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
}`,Sy=`#define MATCAP
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
}`,Ty=`#define MATCAP
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
}`,Ay=`#define NORMAL
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
}`,Cy=`#define NORMAL
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
}`,Ly=`#define PHONG
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
}`,Ry=`#define PHONG
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
}`,Py=`#define STANDARD
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
}`,Dy=`#define STANDARD
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
}`,Fy=`#define TOON
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
}`,Iy=`#define TOON
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
}`,Uy=`uniform float size;
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
}`,ky=`uniform vec3 diffuse;
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
}`,Oy=`#include <common>
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
}`,Ny=`uniform vec3 color;
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
}`,By=`uniform float rotation;
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
}`,zy=`uniform vec3 diffuse;
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
}`,st={alphamap_fragment:c0,alphamap_pars_fragment:h0,alphatest_fragment:u0,alphatest_pars_fragment:f0,aomap_fragment:d0,aomap_pars_fragment:p0,begin_vertex:m0,beginnormal_vertex:g0,bsdfs:v0,iridescence_fragment:_0,bumpmap_pars_fragment:x0,clipping_planes_fragment:y0,clipping_planes_pars_fragment:b0,clipping_planes_pars_vertex:M0,clipping_planes_vertex:w0,color_fragment:E0,color_pars_fragment:S0,color_pars_vertex:T0,color_vertex:A0,common:C0,cube_uv_reflection_fragment:L0,defaultnormal_vertex:R0,displacementmap_pars_vertex:P0,displacementmap_vertex:D0,emissivemap_fragment:F0,emissivemap_pars_fragment:I0,encodings_fragment:U0,encodings_pars_fragment:k0,envmap_fragment:O0,envmap_common_pars_fragment:N0,envmap_pars_fragment:B0,envmap_pars_vertex:z0,envmap_physical_pars_fragment:Q0,envmap_vertex:G0,fog_vertex:V0,fog_pars_vertex:H0,fog_fragment:W0,fog_pars_fragment:X0,gradientmap_pars_fragment:q0,lightmap_fragment:Y0,lightmap_pars_fragment:j0,lights_lambert_fragment:$0,lights_lambert_pars_fragment:Z0,lights_pars_begin:J0,lights_toon_fragment:K0,lights_toon_pars_fragment:ex,lights_phong_fragment:tx,lights_phong_pars_fragment:nx,lights_physical_fragment:ix,lights_physical_pars_fragment:rx,lights_fragment_begin:ax,lights_fragment_maps:sx,lights_fragment_end:ox,logdepthbuf_fragment:lx,logdepthbuf_pars_fragment:cx,logdepthbuf_pars_vertex:hx,logdepthbuf_vertex:ux,map_fragment:fx,map_pars_fragment:dx,map_particle_fragment:px,map_particle_pars_fragment:mx,metalnessmap_fragment:gx,metalnessmap_pars_fragment:vx,morphcolor_vertex:_x,morphnormal_vertex:xx,morphtarget_pars_vertex:yx,morphtarget_vertex:bx,normal_fragment_begin:Mx,normal_fragment_maps:wx,normal_pars_fragment:Ex,normal_pars_vertex:Sx,normal_vertex:Tx,normalmap_pars_fragment:Ax,clearcoat_normal_fragment_begin:Cx,clearcoat_normal_fragment_maps:Lx,clearcoat_pars_fragment:Rx,iridescence_pars_fragment:Px,output_fragment:Dx,packing:Fx,premultiplied_alpha_fragment:Ix,project_vertex:Ux,dithering_fragment:kx,dithering_pars_fragment:Ox,roughnessmap_fragment:Nx,roughnessmap_pars_fragment:Bx,shadowmap_pars_fragment:zx,shadowmap_pars_vertex:Gx,shadowmap_vertex:Vx,shadowmask_pars_fragment:Hx,skinbase_vertex:Wx,skinning_pars_vertex:Xx,skinning_vertex:qx,skinnormal_vertex:Yx,specularmap_fragment:jx,specularmap_pars_fragment:$x,tonemapping_fragment:Zx,tonemapping_pars_fragment:Jx,transmission_fragment:Qx,transmission_pars_fragment:Kx,uv_pars_fragment:ey,uv_pars_vertex:ty,uv_vertex:ny,uv2_pars_fragment:iy,uv2_pars_vertex:ry,uv2_vertex:ay,worldpos_vertex:sy,background_vert:oy,background_frag:ly,backgroundCube_vert:cy,backgroundCube_frag:hy,cube_vert:uy,cube_frag:fy,depth_vert:dy,depth_frag:py,distanceRGBA_vert:my,distanceRGBA_frag:gy,equirect_vert:vy,equirect_frag:_y,linedashed_vert:xy,linedashed_frag:yy,meshbasic_vert:by,meshbasic_frag:My,meshlambert_vert:wy,meshlambert_frag:Ey,meshmatcap_vert:Sy,meshmatcap_frag:Ty,meshnormal_vert:Ay,meshnormal_frag:Cy,meshphong_vert:Ly,meshphong_frag:Ry,meshphysical_vert:Py,meshphysical_frag:Dy,meshtoon_vert:Fy,meshtoon_frag:Iy,points_vert:Uy,points_frag:ky,shadow_vert:Oy,shadow_frag:Ny,sprite_vert:By,sprite_frag:zy},Ae={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new vi},uv2Transform:{value:new vi},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vi}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vi}}},mi={basic:{uniforms:un([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:un([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new bt(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:un([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:un([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:un([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new bt(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:un([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:un([Ae.points,Ae.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:un([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:un([Ae.common,Ae.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:un([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:un([Ae.sprite,Ae.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new vi},t2D:{value:null}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:un([Ae.common,Ae.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:un([Ae.lights,Ae.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};mi.physical={uniforms:un([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new St(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};function Gy(t,e,n,i,r,a,s){const o=new bt(0);let c=a===!0?0:1,l,h,u=null,f=0,p=null;function g(m,v){let _=!1,x=v.isScene===!0?v.background:null;x&&x.isTexture&&(x=(v.backgroundBlurriness>0?n:e).get(x));const y=t.xr,b=y.getSession&&y.getSession();b&&b.environmentBlendMode==="additive"&&(x=null),x===null?d(o,c):x&&x.isColor&&(d(x,1),_=!0),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Uc)?(h===void 0&&(h=new ki(new Nc(1,1,1),new Wr({name:"BackgroundCubeMaterial",uniforms:ja(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,S,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,(u!==x||f!==x.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=t.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ki(new l0(2,2),new Wr({name:"BackgroundMaterial",uniforms:ja(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==t.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,p=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function d(m,v){i.buffers.color.setClear(m.r,m.g,m.b,v,s)}return{getClearColor:function(){return o},setClearColor:function(m,v=1){o.set(m),c=v,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,d(o,c)},render:g}}function Vy(t,e,n,i){const r=t.getParameter(34921),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||a!==null,o={},c=m(null);let l=c,h=!1;function u(T,P,O,H,N){let I=!1;if(s){const B=d(H,O,P);l!==B&&(l=B,p(l.object)),I=v(T,H,O,N),I&&_(T,H,O,N)}else{const B=P.wireframe===!0;(l.geometry!==H.id||l.program!==O.id||l.wireframe!==B)&&(l.geometry=H.id,l.program=O.id,l.wireframe=B,I=!0)}N!==null&&n.update(N,34963),(I||h)&&(h=!1,M(T,P,O,H),N!==null&&t.bindBuffer(34963,n.get(N).buffer))}function f(){return i.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function p(T){return i.isWebGL2?t.bindVertexArray(T):a.bindVertexArrayOES(T)}function g(T){return i.isWebGL2?t.deleteVertexArray(T):a.deleteVertexArrayOES(T)}function d(T,P,O){const H=O.wireframe===!0;let N=o[T.id];N===void 0&&(N={},o[T.id]=N);let I=N[P.id];I===void 0&&(I={},N[P.id]=I);let B=I[H];return B===void 0&&(B=m(f()),I[H]=B),B}function m(T){const P=[],O=[],H=[];for(let N=0;N<r;N++)P[N]=0,O[N]=0,H[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:H,object:T,attributes:{},index:null}}function v(T,P,O,H){const N=l.attributes,I=P.attributes;let B=0;const Z=O.getAttributes();for(const X in Z)if(Z[X].location>=0){const J=N[X];let ie=I[X];if(ie===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(ie=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(ie=T.instanceColor)),J===void 0||J.attribute!==ie||ie&&J.data!==ie.data)return!0;B++}return l.attributesNum!==B||l.index!==H}function _(T,P,O,H){const N={},I=P.attributes;let B=0;const Z=O.getAttributes();for(const X in Z)if(Z[X].location>=0){let J=I[X];J===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(J=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(J=T.instanceColor));const ie={};ie.attribute=J,J&&J.data&&(ie.data=J.data),N[X]=ie,B++}l.attributes=N,l.attributesNum=B,l.index=H}function x(){const T=l.newAttributes;for(let P=0,O=T.length;P<O;P++)T[P]=0}function y(T){b(T,0)}function b(T,P){const O=l.newAttributes,H=l.enabledAttributes,N=l.attributeDivisors;O[T]=1,H[T]===0&&(t.enableVertexAttribArray(T),H[T]=1),N[T]!==P&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,P),N[T]=P)}function E(){const T=l.newAttributes,P=l.enabledAttributes;for(let O=0,H=P.length;O<H;O++)P[O]!==T[O]&&(t.disableVertexAttribArray(O),P[O]=0)}function S(T,P,O,H,N,I){i.isWebGL2===!0&&(O===5124||O===5125)?t.vertexAttribIPointer(T,P,O,N,I):t.vertexAttribPointer(T,P,O,H,N,I)}function M(T,P,O,H){if(i.isWebGL2===!1&&(T.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const N=H.attributes,I=O.getAttributes(),B=P.defaultAttributeValues;for(const Z in I){const X=I[Z];if(X.location>=0){let G=N[Z];if(G===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(G=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(G=T.instanceColor)),G!==void 0){const J=G.normalized,ie=G.itemSize,Y=n.get(G);if(Y===void 0)continue;const ve=Y.buffer,fe=Y.type,se=Y.bytesPerElement;if(G.isInterleavedBufferAttribute){const pe=G.data,W=pe.stride,Fe=G.offset;if(pe.isInstancedInterleavedBuffer){for(let ge=0;ge<X.locationSize;ge++)b(X.location+ge,pe.meshPerAttribute);T.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ge=0;ge<X.locationSize;ge++)y(X.location+ge);t.bindBuffer(34962,ve);for(let ge=0;ge<X.locationSize;ge++)S(X.location+ge,ie/X.locationSize,fe,J,W*se,(Fe+ie/X.locationSize*ge)*se)}else{if(G.isInstancedBufferAttribute){for(let pe=0;pe<X.locationSize;pe++)b(X.location+pe,G.meshPerAttribute);T.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let pe=0;pe<X.locationSize;pe++)y(X.location+pe);t.bindBuffer(34962,ve);for(let pe=0;pe<X.locationSize;pe++)S(X.location+pe,ie/X.locationSize,fe,J,ie*se,ie/X.locationSize*pe*se)}}else if(B!==void 0){const J=B[Z];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(X.location,J);break;case 3:t.vertexAttrib3fv(X.location,J);break;case 4:t.vertexAttrib4fv(X.location,J);break;default:t.vertexAttrib1fv(X.location,J)}}}}E()}function w(){V();for(const T in o){const P=o[T];for(const O in P){const H=P[O];for(const N in H)g(H[N].object),delete H[N];delete P[O]}delete o[T]}}function L(T){if(o[T.id]===void 0)return;const P=o[T.id];for(const O in P){const H=P[O];for(const N in H)g(H[N].object),delete H[N];delete P[O]}delete o[T.id]}function z(T){for(const P in o){const O=o[P];if(O[T.id]===void 0)continue;const H=O[T.id];for(const N in H)g(H[N].object),delete H[N];delete O[T.id]}}function V(){A(),h=!0,l!==c&&(l=c,p(l.object))}function A(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:V,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:y,disableUnusedAttributes:E}}function Hy(t,e,n,i){const r=i.isWebGL2;let a;function s(l){a=l}function o(l,h){t.drawArrays(a,l,h),n.update(h,a,1)}function c(l,h,u){if(u===0)return;let f,p;if(r)f=t,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](a,l,h,u),n.update(h,a,u)}this.setMode=s,this.render=o,this.renderInstances=c}function Wy(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(S){if(S==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";S="mediump"}return S==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext;let o=n.precision!==void 0?n.precision:"highp";const c=a(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=s||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,u=t.getParameter(34930),f=t.getParameter(35660),p=t.getParameter(3379),g=t.getParameter(34076),d=t.getParameter(34921),m=t.getParameter(36347),v=t.getParameter(36348),_=t.getParameter(36349),x=f>0,y=s||e.has("OES_texture_float"),b=x&&y,E=s?t.getParameter(36183):0;return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:E}}function Xy(t){const e=this;let n=null,i=0,r=!1,a=!1;const s=new Mr,o=new vi,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,p){const g=u.length!==0||f||i!==0||r;return r=f,n=h(u,p,0),i=u.length,g},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1,l()},this.setState=function(u,f,p){const g=u.clippingPlanes,d=u.clipIntersection,m=u.clipShadows,v=t.get(u);if(!r||g===null||g.length===0||a&&!m)a?h(null):l();else{const _=a?0:i,x=_*4;let y=v.clippingState||null;c.value=y,y=h(g,f,x,p);for(let b=0;b!==x;++b)y[b]=n[b];v.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,g){const d=u!==null?u.length:0;let m=null;if(d!==0){if(m=c.value,g!==!0||m===null){const v=p+d*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<v)&&(m=new Float32Array(v));for(let x=0,y=p;x!==d;++x,y+=4)s.copy(u[x]).applyMatrix4(_,o),s.normal.toArray(m,y),m[y+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function qy(t){let e=new WeakMap;function n(s,o){return o===Zh?s.mapping=Xa:o===Jh&&(s.mapping=qa),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===Zh||o===Jh)if(e.has(s)){const c=e.get(s).texture;return n(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new r0(c.height/2);return l.fromEquirectangularTexture(t,s),e.set(s,l),s.addEventListener("dispose",r),n(l.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}let Yy=class extends lm{constructor(e=-1,n=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};const Ua=4,Gd=[.125,.215,.35,.446,.526,.582],Sr=20,Dh=new Yy,Vd=new bt;let Fh=null;const wr=(1+Math.sqrt(5))/2,Pa=1/wr,Hd=[new te(1,1,1),new te(-1,1,1),new te(1,1,-1),new te(-1,1,-1),new te(0,wr,Pa),new te(0,wr,-Pa),new te(Pa,0,wr),new te(-Pa,0,wr),new te(wr,Pa,0),new te(-wr,Pa,0)];class Wd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Fh=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fh),e.scissorTest=!1,Nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xa||e.mapping===qa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fh=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:oo,format:ci,encoding:Vr,depthBuffer:!1},r=Xd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xd(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jy(a)),this._blurMaterial=$y(a,e,n)}return r}_compileMaterial(e){const n=new ki(this._lodPlanes[0],e);this._renderer.compile(n,Dh)}_sceneToCubeUV(e,n,i,r){const o=new $n(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Vd),h.toneMapping=Ni,h.autoClear=!1;const p=new ju({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),g=new ki(new Nc,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(Vd),d=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(o.up.set(0,c[v],0),o.lookAt(l[v],0,0)):_===1?(o.up.set(0,0,c[v]),o.lookAt(0,l[v],0)):(o.up.set(0,c[v],0),o.lookAt(0,0,l[v]));const x=this._cubeSize;Nl(r,_*x,v>2?x:0,x,x),h.setRenderTarget(r),d&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xa||e.mapping===qa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qd());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new ki(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;Nl(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(s,Dh)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Hd[(r-1)%Hd.length];this._blur(e,r-1,r,a,s)}n.autoClear=i}_blur(e,n,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ki(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Sr-1),d=a/g,m=isFinite(a)?1+Math.floor(h*d):Sr;m>Sr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Sr}`);const v=[];let _=0;for(let S=0;S<Sr;++S){const M=S/d,w=Math.exp(-M*M/2);v.push(w),S===0?_+=w:S<m&&(_+=2*w)}for(let S=0;S<v.length;S++)v[S]=v[S]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=v,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const y=this._sizeLods[r],b=3*y*(r>x-Ua?r-x+Ua:0),E=4*(this._cubeSize-y);Nl(n,b,E,3*y,2*y),c.setRenderTarget(n),c.render(u,Dh)}}function jy(t){const e=[],n=[],i=[];let r=t;const a=t-Ua+1+Gd.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);n.push(o);let c=1/o;s>t-Ua?c=Gd[s-t+Ua-1]:s===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,d=3,m=2,v=1,_=new Float32Array(d*g*p),x=new Float32Array(m*g*p),y=new Float32Array(v*g*p);for(let E=0;E<p;E++){const S=E%3*2/3-1,M=E>2?0:-1,w=[S,M,0,S+2/3,M,0,S+2/3,M+1,0,S,M,0,S+2/3,M+1,0,S,M+1,0];_.set(w,d*g*E),x.set(f,m*g*E);const L=[E,E,E,E,E,E];y.set(L,v*g*E)}const b=new da;b.setAttribute("position",new xi(_,d)),b.setAttribute("uv",new xi(x,m)),b.setAttribute("faceIndex",new xi(y,v)),e.push(b),r>Ua&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Xd(t,e,n){const i=new Hr(t,e,n);return i.texture.mapping=Uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function $y(t,e,n){const i=new Float32Array(Sr),r=new te(0,1,0);return new Wr({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$u(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function qd(){return new Wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Yd(){return new Wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function $u(){return`

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
	`}function Zy(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Zh||c===Jh,h=c===Xa||c===qa;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return n===null&&(n=new Wd(t)),u=l?n.fromEquirectangular(o,u):n.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||h&&u&&r(u)){n===null&&(n=new Wd(t));const f=l?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",a),f.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function Jy(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Qy(t,e,n,i){const r={},a=new WeakMap;function s(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete r[f.id];const p=a.get(f);p&&(e.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,n.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)e.update(f[g],34962);const p=u.morphAttributes;for(const g in p){const d=p[g];for(let m=0,v=d.length;m<v;m++)e.update(d[m],34962)}}function l(u){const f=[],p=u.index,g=u.attributes.position;let d=0;if(p!==null){const _=p.array;d=p.version;for(let x=0,y=_.length;x<y;x+=3){const b=_[x+0],E=_[x+1],S=_[x+2];f.push(b,E,E,S,S,b)}}else{const _=g.array;d=g.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const b=x+0,E=x+1,S=x+2;f.push(b,E,E,S,S,b)}}const m=new(jp(f)?am:rm)(f,1);m.version=d;const v=a.get(u);v&&e.remove(v),a.set(u,m)}function h(u){const f=a.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return a.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Ky(t,e,n,i){const r=i.isWebGL2;let a;function s(f){a=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,p){t.drawElements(a,p,o,f*c),n.update(p,a,1)}function u(f,p,g){if(g===0)return;let d,m;if(r)d=t,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](a,p,o,f*c,g),n.update(p,a,g)}this.setMode=s,this.setIndex=l,this.render=h,this.renderInstances=u}function eb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(n.calls++,s){case 4:n.triangles+=o*(a/3);break;case 1:n.lines+=o*(a/2);break;case 3:n.lines+=o*(a-1);break;case 2:n.lines+=o*a;break;case 0:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function tb(t,e){return t[0]-e[0]}function nb(t,e){return Math.abs(e[1])-Math.abs(t[1])}function ib(t,e,n){const i={},r=new Float32Array(8),a=new WeakMap,s=new dn,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u,f){const p=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,d=g!==void 0?g.length:0;let m=a.get(h);if(m===void 0||m.count!==d){let P=function(){A.dispose(),a.delete(h),h.removeEventListener("dispose",P)};m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],M=h.morphAttributes.color||[];let w=0;x===!0&&(w=1),y===!0&&(w=2),b===!0&&(w=3);let L=h.attributes.position.count*w,z=1;L>e.maxTextureSize&&(z=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const V=new Float32Array(L*z*4*d),A=new Kp(V,L,z,d);A.type=Ar,A.needsUpdate=!0;const T=w*4;for(let O=0;O<d;O++){const H=E[O],N=S[O],I=M[O],B=L*z*4*O;for(let Z=0;Z<H.count;Z++){const X=Z*T;x===!0&&(s.fromBufferAttribute(H,Z),V[B+X+0]=s.x,V[B+X+1]=s.y,V[B+X+2]=s.z,V[B+X+3]=0),y===!0&&(s.fromBufferAttribute(N,Z),V[B+X+4]=s.x,V[B+X+5]=s.y,V[B+X+6]=s.z,V[B+X+7]=0),b===!0&&(s.fromBufferAttribute(I,Z),V[B+X+8]=s.x,V[B+X+9]=s.y,V[B+X+10]=s.z,V[B+X+11]=I.itemSize===4?s.w:1)}}m={count:d,texture:A,size:new St(L,z)},a.set(h,m),h.addEventListener("dispose",P)}let v=0;for(let x=0;x<p.length;x++)v+=p[x];const _=h.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",p),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const g=p===void 0?0:p.length;let d=i[h.id];if(d===void 0||d.length!==g){d=[];for(let y=0;y<g;y++)d[y]=[y,0];i[h.id]=d}for(let y=0;y<g;y++){const b=d[y];b[0]=y,b[1]=p[y]}d.sort(nb);for(let y=0;y<8;y++)y<g&&d[y][1]?(o[y][0]=d[y][0],o[y][1]=d[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(tb);const m=h.morphAttributes.position,v=h.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const b=o[y],E=b[0],S=b[1];E!==Number.MAX_SAFE_INTEGER&&S?(m&&h.getAttribute("morphTarget"+y)!==m[E]&&h.setAttribute("morphTarget"+y,m[E]),v&&h.getAttribute("morphNormal"+y)!==v[E]&&h.setAttribute("morphNormal"+y,v[E]),r[y]=S,_+=S):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),v&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),r[y]=0)}const x=h.morphTargetsRelative?1:1-_;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:c}}function rb(t,e,n,i){let r=new WeakMap;function a(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);return r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.update(c.instanceMatrix,34962),c.instanceColor!==null&&n.update(c.instanceColor,34962)),u}function s(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:a,dispose:s}}const dm=new mr,pm=new Kp,mm=new V_,gm=new cm,jd=[],$d=[],Zd=new Float32Array(16),Jd=new Float32Array(9),Qd=new Float32Array(4);function Vs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=jd[r];if(a===void 0&&(a=new Float32Array(r),jd[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(a,o)}return a}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function qt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Bc(t,e){let n=$d[e];n===void 0&&(n=new Int32Array(e),$d[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ab(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),qt(n,e)}}function ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),qt(n,e)}}function lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),qt(n,e)}}function cb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),qt(n,e)}else{if(Xt(n,i))return;Qd.set(i),t.uniformMatrix2fv(this.addr,!1,Qd),qt(n,i)}}function hb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),qt(n,e)}else{if(Xt(n,i))return;Jd.set(i),t.uniformMatrix3fv(this.addr,!1,Jd),qt(n,i)}}function ub(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),qt(n,e)}else{if(Xt(n,i))return;Zd.set(i),t.uniformMatrix4fv(this.addr,!1,Zd),qt(n,i)}}function fb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function db(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),qt(n,e)}}function pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),qt(n,e)}}function mb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),qt(n,e)}}function gb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function vb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),qt(n,e)}}function _b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),qt(n,e)}}function xb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),qt(n,e)}}function yb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||dm,r)}function bb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||mm,r)}function Mb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||gm,r)}function wb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||pm,r)}function Eb(t){switch(t){case 5126:return ab;case 35664:return sb;case 35665:return ob;case 35666:return lb;case 35674:return cb;case 35675:return hb;case 35676:return ub;case 5124:case 35670:return fb;case 35667:case 35671:return db;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return vb;case 36295:return _b;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return wb}}function Sb(t,e){t.uniform1fv(this.addr,e)}function Tb(t,e){const n=Vs(e,this.size,2);t.uniform2fv(this.addr,n)}function Ab(t,e){const n=Vs(e,this.size,3);t.uniform3fv(this.addr,n)}function Cb(t,e){const n=Vs(e,this.size,4);t.uniform4fv(this.addr,n)}function Lb(t,e){const n=Vs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Rb(t,e){const n=Vs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Pb(t,e){const n=Vs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Db(t,e){t.uniform1iv(this.addr,e)}function Fb(t,e){t.uniform2iv(this.addr,e)}function Ib(t,e){t.uniform3iv(this.addr,e)}function Ub(t,e){t.uniform4iv(this.addr,e)}function kb(t,e){t.uniform1uiv(this.addr,e)}function Ob(t,e){t.uniform2uiv(this.addr,e)}function Nb(t,e){t.uniform3uiv(this.addr,e)}function Bb(t,e){t.uniform4uiv(this.addr,e)}function zb(t,e,n){const i=this.cache,r=e.length,a=Bc(n,r);Xt(i,a)||(t.uniform1iv(this.addr,a),qt(i,a));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||dm,a[s])}function Gb(t,e,n){const i=this.cache,r=e.length,a=Bc(n,r);Xt(i,a)||(t.uniform1iv(this.addr,a),qt(i,a));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||mm,a[s])}function Vb(t,e,n){const i=this.cache,r=e.length,a=Bc(n,r);Xt(i,a)||(t.uniform1iv(this.addr,a),qt(i,a));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||gm,a[s])}function Hb(t,e,n){const i=this.cache,r=e.length,a=Bc(n,r);Xt(i,a)||(t.uniform1iv(this.addr,a),qt(i,a));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||pm,a[s])}function Wb(t){switch(t){case 5126:return Sb;case 35664:return Tb;case 35665:return Ab;case 35666:return Cb;case 35674:return Lb;case 35675:return Rb;case 35676:return Pb;case 5124:case 35670:return Db;case 35667:case 35671:return Fb;case 35668:case 35672:return Ib;case 35669:case 35673:return Ub;case 5125:return kb;case 36294:return Ob;case 36295:return Nb;case 36296:return Bb;case 35678:case 36198:case 36298:case 36306:case 35682:return zb;case 35679:case 36299:case 36307:return Gb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Hb}}let Xb=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Eb(n.type)}},qb=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=Wb(n.type)}},Yb=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,n[o.id],i)}}};const Ih=/(\w+)(\])?(\[|\.)?/g;function Kd(t,e){t.seq.push(e),t.map[e.id]=e}function jb(t,e,n){const i=t.name,r=i.length;for(Ih.lastIndex=0;;){const a=Ih.exec(i),s=Ih.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===r){Kd(n,l===void 0?new Xb(o,t,e):new qb(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new Yb(o),Kd(n,u)),n=u}}}let Xl=class{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),s=e.getUniformLocation(n,a.name);jb(a,s,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,s=n.length;a!==s;++a){const o=n[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in n&&i.push(s)}return i}};function ep(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let $b=0;function Zb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}function Jb(t){switch(t){case Vr:return["Linear","( value )"];case Pt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function tp(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+Zb(t.getShaderSource(e),s)}else return r}function Qb(t,e){const n=Jb(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Kb(t,e){let n;switch(e){case p_:n="Linear";break;case m_:n="Reinhard";break;case g_:n="OptimizedCineon";break;case v_:n="ACESFilmic";break;case __:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function eM(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ks).join(`
`)}function tM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function nM(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),s=a.name;let o=1;a.type===35674&&(o=2),a.type===35675&&(o=3),a.type===35676&&(o=4),n[s]={type:a.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function Ks(t){return t!==""}function np(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ip(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ru(t){return t.replace(iM,rM)}function rM(t,e){const n=st[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return ru(n)}const aM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rp(t){return t.replace(aM,sM)}function sM(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function ap(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===zp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===qv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qs&&(e="SHADOWMAP_TYPE_VSM"),e}function lM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xa:case qa:e="ENVMAP_TYPE_CUBE";break;case Uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cM(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case qa:e="ENVMAP_MODE_REFRACTION";break}return e}function hM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Hp:e="ENVMAP_BLENDING_MULTIPLY";break;case f_:e="ENVMAP_BLENDING_MIX";break;case d_:e="ENVMAP_BLENDING_ADD";break}return e}function uM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function fM(t,e,n,i){const r=t.getContext(),a=n.defines;let s=n.vertexShader,o=n.fragmentShader;const c=oM(n),l=lM(n),h=cM(n),u=hM(n),f=uM(n),p=n.isWebGL2?"":eM(n),g=tM(a),d=r.createProgram();let m,v,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=[g].filter(Ks).join(`
`),m.length>0&&(m+=`
`),v=[p,g].filter(Ks).join(`
`),v.length>0&&(v+=`
`)):(m=[ap(n),"#define SHADER_NAME "+n.shaderName,g,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),v=[p,ap(n),"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ni?"#define TONE_MAPPING":"",n.toneMapping!==Ni?st.tonemapping_pars_fragment:"",n.toneMapping!==Ni?Kb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",st.encodings_pars_fragment,Qb("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ks).join(`
`)),s=ru(s),s=np(s,n),s=ip(s,n),o=ru(o),o=np(o,n),o=ip(o,n),s=rp(s),o=rp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["#define varying in",n.glslVersion===Cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const x=_+m+s,y=_+v+o,b=ep(r,35633,x),E=ep(r,35632,y);if(r.attachShader(d,b),r.attachShader(d,E),n.index0AttributeName!==void 0?r.bindAttribLocation(d,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),t.debug.checkShaderErrors){const w=r.getProgramInfoLog(d).trim(),L=r.getShaderInfoLog(b).trim(),z=r.getShaderInfoLog(E).trim();let V=!0,A=!0;if(r.getProgramParameter(d,35714)===!1){V=!1;const T=tp(r,b,"vertex"),P=tp(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+T+`
`+P)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(L===""||z==="")&&(A=!1);A&&(this.diagnostics={runnable:V,programLog:w,vertexShader:{log:L,prefix:m},fragmentShader:{log:z,prefix:v}})}r.deleteShader(b),r.deleteShader(E);let S;this.getUniforms=function(){return S===void 0&&(S=new Xl(r,d)),S};let M;return this.getAttributes=function(){return M===void 0&&(M=nM(r,d)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=n.shaderName,this.id=$b++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=b,this.fragmentShader=E,this}let dM=0;class pM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new mM(e),n.set(e,i)),i}}class mM{constructor(e){this.id=dM++,this.code=e,this.usedTimes=0}}function gM(t,e,n,i,r,a,s){const o=new im,c=new pM,l=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(M,w,L,z,V){const A=z.fog,T=V.geometry,P=M.isMeshStandardMaterial?z.environment:null,O=(M.isMeshStandardMaterial?n:e).get(M.envMap||P),H=O&&O.mapping===Uc?O.image.height:null,N=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const I=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,B=I!==void 0?I.length:0;let Z=0;T.morphAttributes.position!==void 0&&(Z=1),T.morphAttributes.normal!==void 0&&(Z=2),T.morphAttributes.color!==void 0&&(Z=3);let X,G,J,ie;if(N){const W=mi[N];X=W.vertexShader,G=W.fragmentShader}else X=M.vertexShader,G=M.fragmentShader,c.update(M),J=c.getVertexShaderID(M),ie=c.getFragmentShaderID(M);const Y=t.getRenderTarget(),ve=M.alphaTest>0,fe=M.clearcoat>0,se=M.iridescence>0;return{isWebGL2:h,shaderID:N,shaderName:M.type,vertexShader:X,fragmentShader:G,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:ie,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:V.isInstancedMesh===!0,instancingColor:V.isInstancedMesh===!0&&V.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Y===null?t.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:Vr,map:!!M.map,matcap:!!M.matcap,envMap:!!O,envMapMode:O&&O.mapping,envMapCubeUVHeight:H,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===N_,tangentSpaceNormalMap:M.normalMapType===O_,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===Pt,clearcoat:fe,clearcoatMap:fe&&!!M.clearcoatMap,clearcoatRoughnessMap:fe&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!M.clearcoatNormalMap,iridescence:se,iridescenceMap:se&&!!M.iridescenceMap,iridescenceThicknessMap:se&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Na,alphaMap:!!M.alphaMap,alphaTest:ve,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!T.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!A,useFog:M.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:u,skinning:V.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:Z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:M.toneMapped?t.toneMapping:Ni,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===er,flipSided:M.side===Qn,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)w.push(L),w.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(v(w,M),_(w,M),w.push(t.outputEncoding)),w.push(M.customProgramCacheKey),w.join()}function v(M,w){M.push(w.precision),M.push(w.outputEncoding),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.combine),M.push(w.vertexUvs),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.map&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.lightMap&&o.enable(7),w.aoMap&&o.enable(8),w.emissiveMap&&o.enable(9),w.bumpMap&&o.enable(10),w.normalMap&&o.enable(11),w.objectSpaceNormalMap&&o.enable(12),w.tangentSpaceNormalMap&&o.enable(13),w.clearcoat&&o.enable(14),w.clearcoatMap&&o.enable(15),w.clearcoatRoughnessMap&&o.enable(16),w.clearcoatNormalMap&&o.enable(17),w.iridescence&&o.enable(18),w.iridescenceMap&&o.enable(19),w.iridescenceThicknessMap&&o.enable(20),w.displacementMap&&o.enable(21),w.specularMap&&o.enable(22),w.roughnessMap&&o.enable(23),w.metalnessMap&&o.enable(24),w.gradientMap&&o.enable(25),w.alphaMap&&o.enable(26),w.alphaTest&&o.enable(27),w.vertexColors&&o.enable(28),w.vertexAlphas&&o.enable(29),w.vertexUvs&&o.enable(30),w.vertexTangents&&o.enable(31),w.uvsVertexOnly&&o.enable(32),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.physicallyCorrectLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.specularIntensityMap&&o.enable(15),w.specularColorMap&&o.enable(16),w.transmission&&o.enable(17),w.transmissionMap&&o.enable(18),w.thicknessMap&&o.enable(19),w.sheen&&o.enable(20),w.sheenColorMap&&o.enable(21),w.sheenRoughnessMap&&o.enable(22),w.decodeVideoTexture&&o.enable(23),w.opaque&&o.enable(24),M.push(o.mask)}function x(M){const w=g[M.type];let L;if(w){const z=mi[w];L=e0.clone(z.uniforms)}else L=M.uniforms;return L}function y(M,w){let L;for(let z=0,V=l.length;z<V;z++){const A=l[z];if(A.cacheKey===w){L=A,++L.usedTimes;break}}return L===void 0&&(L=new fM(t,w,M,a),l.push(L)),L}function b(M){if(--M.usedTimes===0){const w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function E(M){c.remove(M)}function S(){c.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:x,acquireProgram:y,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:S}}function vM(){let t=new WeakMap;function e(a){let s=t.get(a);return s===void 0&&(s={},t.set(a,s)),s}function n(a){t.delete(a)}function i(a,s,o){t.get(a)[s]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function _M(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function sp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function op(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function s(u,f,p,g,d,m){let v=t[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:d,group:m},t[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.groupOrder=g,v.renderOrder=u.renderOrder,v.z=d,v.group=m),e++,v}function o(u,f,p,g,d,m){const v=s(u,f,p,g,d,m);p.transmission>0?i.push(v):p.transparent===!0?r.push(v):n.push(v)}function c(u,f,p,g,d,m){const v=s(u,f,p,g,d,m);p.transmission>0?i.unshift(v):p.transparent===!0?r.unshift(v):n.unshift(v)}function l(u,f){n.length>1&&n.sort(u||_M),i.length>1&&i.sort(f||sp),r.length>1&&r.sort(f||sp)}function h(){for(let u=e,f=t.length;u<f;u++){const p=t[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:o,unshift:c,finish:h,sort:l}}function xM(){let t=new WeakMap;function e(i,r){const a=t.get(i);let s;return a===void 0?(s=new op,t.set(i,[s])):r>=a.length?(s=new op,a.push(s)):s=a[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function yM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new te,color:new bt};break;case"SpotLight":n={position:new te,direction:new te,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new bt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":n={color:new bt,position:new te,halfWidth:new te,halfHeight:new te};break}return t[e.id]=n,n}}}function bM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let MM=0;function wM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function EM(t,e){const n=new yM,i=bM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new te);const a=new te,s=new pn,o=new pn;function c(h,u){let f=0,p=0,g=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let d=0,m=0,v=0,_=0,x=0,y=0,b=0,E=0,S=0,M=0;h.sort(wM);const w=u!==!0?Math.PI:1;for(let z=0,V=h.length;z<V;z++){const A=h[z],T=A.color,P=A.intensity,O=A.distance,H=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)f+=T.r*P*w,p+=T.g*P*w,g+=T.b*P*w;else if(A.isLightProbe)for(let N=0;N<9;N++)r.probe[N].addScaledVector(A.sh.coefficients[N],P);else if(A.isDirectionalLight){const N=n.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity*w),A.castShadow){const I=A.shadow,B=i.get(A);B.shadowBias=I.bias,B.shadowNormalBias=I.normalBias,B.shadowRadius=I.radius,B.shadowMapSize=I.mapSize,r.directionalShadow[d]=B,r.directionalShadowMap[d]=H,r.directionalShadowMatrix[d]=A.shadow.matrix,y++}r.directional[d]=N,d++}else if(A.isSpotLight){const N=n.get(A);N.position.setFromMatrixPosition(A.matrixWorld),N.color.copy(T).multiplyScalar(P*w),N.distance=O,N.coneCos=Math.cos(A.angle),N.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),N.decay=A.decay,r.spot[v]=N;const I=A.shadow;if(A.map&&(r.spotLightMap[S]=A.map,S++,I.updateMatrices(A),A.castShadow&&M++),r.spotLightMatrix[v]=I.matrix,A.castShadow){const B=i.get(A);B.shadowBias=I.bias,B.shadowNormalBias=I.normalBias,B.shadowRadius=I.radius,B.shadowMapSize=I.mapSize,r.spotShadow[v]=B,r.spotShadowMap[v]=H,E++}v++}else if(A.isRectAreaLight){const N=n.get(A);N.color.copy(T).multiplyScalar(P),N.halfWidth.set(A.width*.5,0,0),N.halfHeight.set(0,A.height*.5,0),r.rectArea[_]=N,_++}else if(A.isPointLight){const N=n.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity*w),N.distance=A.distance,N.decay=A.decay,A.castShadow){const I=A.shadow,B=i.get(A);B.shadowBias=I.bias,B.shadowNormalBias=I.normalBias,B.shadowRadius=I.radius,B.shadowMapSize=I.mapSize,B.shadowCameraNear=I.camera.near,B.shadowCameraFar=I.camera.far,r.pointShadow[m]=B,r.pointShadowMap[m]=H,r.pointShadowMatrix[m]=A.shadow.matrix,b++}r.point[m]=N,m++}else if(A.isHemisphereLight){const N=n.get(A);N.skyColor.copy(A.color).multiplyScalar(P*w),N.groundColor.copy(A.groundColor).multiplyScalar(P*w),r.hemi[x]=N,x++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const L=r.hash;(L.directionalLength!==d||L.pointLength!==m||L.spotLength!==v||L.rectAreaLength!==_||L.hemiLength!==x||L.numDirectionalShadows!==y||L.numPointShadows!==b||L.numSpotShadows!==E||L.numSpotMaps!==S)&&(r.directional.length=d,r.spot.length=v,r.rectArea.length=_,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=E+S-M,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=M,L.directionalLength=d,L.pointLength=m,L.spotLength=v,L.rectAreaLength=_,L.hemiLength=x,L.numDirectionalShadows=y,L.numPointShadows=b,L.numSpotShadows=E,L.numSpotMaps=S,r.version=MM++)}function l(h,u){let f=0,p=0,g=0,d=0,m=0;const v=u.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){const y=h[_];if(y.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(v),f++}else if(y.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(v),g++}else if(y.isRectAreaLight){const b=r.rectArea[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(v),o.identity(),s.copy(y.matrixWorld),s.premultiply(v),o.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),d++}else if(y.isPointLight){const b=r.point[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(v),p++}else if(y.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(v),m++}}}return{setup:c,setupView:l,state:r}}function lp(t,e){const n=new EM(t,e),i=[],r=[];function a(){i.length=0,r.length=0}function s(u){i.push(u)}function o(u){r.push(u)}function c(u){n.setup(i,u)}function l(u){n.setupView(i,u)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:l,pushLight:s,pushShadow:o}}function SM(t,e){let n=new WeakMap;function i(a,s=0){const o=n.get(a);let c;return o===void 0?(c=new lp(t,e),n.set(a,[c])):s>=o.length?(c=new lp(t,e),o.push(c)):c=o[s],c}function r(){n=new WeakMap}return{get:i,dispose:r}}let TM=class extends hl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};class AM extends hl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new te,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const CM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LM=`uniform sampler2D shadow_pass;
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
}`;function RM(t,e,n){let i=new hm;const r=new St,a=new St,s=new dn,o=new TM({depthPacking:k_}),c=new AM,l={},h=n.maxTextureSize,u={0:Qn,1:Wa,2:er},f=new Wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:CM,fragmentShader:LM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new da;g.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new ki(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zp,this.render=function(y,b,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const S=t.getRenderTarget(),M=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),L=t.state;L.setBlending(rr),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let z=0,V=y.length;z<V;z++){const A=y[z],T=A.shadow;if(T===void 0){console.warn("THREE.WebGLShadowMap:",A,"has no shadow.");continue}if(T.autoUpdate===!1&&T.needsUpdate===!1)continue;r.copy(T.mapSize);const P=T.getFrameExtents();if(r.multiply(P),a.copy(T.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/P.x),r.x=a.x*P.x,T.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/P.y),r.y=a.y*P.y,T.mapSize.y=a.y)),T.map===null){const H=this.type!==Qs?{minFilter:_n,magFilter:_n}:{};T.map=new Hr(r.x,r.y,H),T.map.texture.name=A.name+".shadowMap",T.camera.updateProjectionMatrix()}t.setRenderTarget(T.map),t.clear();const O=T.getViewportCount();for(let H=0;H<O;H++){const N=T.getViewport(H);s.set(a.x*N.x,a.y*N.y,a.x*N.z,a.y*N.w),L.viewport(s),T.updateMatrices(A,H),i=T.getFrustum(),x(b,E,T.camera,A,this.type)}T.isPointLightShadow!==!0&&this.type===Qs&&v(T,E),T.needsUpdate=!1}m.needsUpdate=!1,t.setRenderTarget(S,M,w)};function v(y,b){const E=e.update(d);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Hr(r.x,r.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,t.setRenderTarget(y.mapPass),t.clear(),t.renderBufferDirect(b,null,E,f,d,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,t.setRenderTarget(y.map),t.clear(),t.renderBufferDirect(b,null,E,p,d,null)}function _(y,b,E,S,M,w){let L=null;const z=E.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(z!==void 0?L=z:L=E.isPointLight===!0?c:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const V=L.uuid,A=b.uuid;let T=l[V];T===void 0&&(T={},l[V]=T);let P=T[A];P===void 0&&(P=L.clone(),T[A]=P),L=P}return L.visible=b.visible,L.wireframe=b.wireframe,w===Qs?L.side=b.shadowSide!==null?b.shadowSide:b.side:L.side=b.shadowSide!==null?b.shadowSide:u[b.side],L.alphaMap=b.alphaMap,L.alphaTest=b.alphaTest,L.clipShadows=b.clipShadows,L.clippingPlanes=b.clippingPlanes,L.clipIntersection=b.clipIntersection,L.displacementMap=b.displacementMap,L.displacementScale=b.displacementScale,L.displacementBias=b.displacementBias,L.wireframeLinewidth=b.wireframeLinewidth,L.linewidth=b.linewidth,E.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(E.matrixWorld),L.nearDistance=S,L.farDistance=M),L}function x(y,b,E,S,M){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&M===Qs)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const z=e.update(y),V=y.material;if(Array.isArray(V)){const A=z.groups;for(let T=0,P=A.length;T<P;T++){const O=A[T],H=V[O.materialIndex];if(H&&H.visible){const N=_(y,H,S,E.near,E.far,M);t.renderBufferDirect(E,null,z,N,y,O)}}}else if(V.visible){const A=_(y,V,S,E.near,E.far,M);t.renderBufferDirect(E,null,z,A,y,null)}}const L=y.children;for(let z=0,V=L.length;z<V;z++)x(L[z],b,E,S,M)}}function PM(t,e,n){const i=n.isWebGL2;function r(){let q=!1;const re=new dn;let ce=null;const Se=new dn(0,0,0,0);return{setMask:function(Ie){ce!==Ie&&!q&&(t.colorMask(Ie,Ie,Ie,Ie),ce=Ie)},setLocked:function(Ie){q=Ie},setClear:function(Ie,dt,It,Gt,Wn){Wn===!0&&(Ie*=Gt,dt*=Gt,It*=Gt),re.set(Ie,dt,It,Gt),Se.equals(re)===!1&&(t.clearColor(Ie,dt,It,Gt),Se.copy(re))},reset:function(){q=!1,ce=null,Se.set(-1,0,0,0)}}}function a(){let q=!1,re=null,ce=null,Se=null;return{setTest:function(Ie){Ie?ve(2929):fe(2929)},setMask:function(Ie){re!==Ie&&!q&&(t.depthMask(Ie),re=Ie)},setFunc:function(Ie){if(ce!==Ie){switch(Ie){case a_:t.depthFunc(512);break;case s_:t.depthFunc(519);break;case o_:t.depthFunc(513);break;case $h:t.depthFunc(515);break;case l_:t.depthFunc(514);break;case c_:t.depthFunc(518);break;case h_:t.depthFunc(516);break;case u_:t.depthFunc(517);break;default:t.depthFunc(515)}ce=Ie}},setLocked:function(Ie){q=Ie},setClear:function(Ie){Se!==Ie&&(t.clearDepth(Ie),Se=Ie)},reset:function(){q=!1,re=null,ce=null,Se=null}}}function s(){let q=!1,re=null,ce=null,Se=null,Ie=null,dt=null,It=null,Gt=null,Wn=null;return{setTest:function(yt){q||(yt?ve(2960):fe(2960))},setMask:function(yt){re!==yt&&!q&&(t.stencilMask(yt),re=yt)},setFunc:function(yt,Xn,cn){(ce!==yt||Se!==Xn||Ie!==cn)&&(t.stencilFunc(yt,Xn,cn),ce=yt,Se=Xn,Ie=cn)},setOp:function(yt,Xn,cn){(dt!==yt||It!==Xn||Gt!==cn)&&(t.stencilOp(yt,Xn,cn),dt=yt,It=Xn,Gt=cn)},setLocked:function(yt){q=yt},setClear:function(yt){Wn!==yt&&(t.clearStencil(yt),Wn=yt)},reset:function(){q=!1,re=null,ce=null,Se=null,Ie=null,dt=null,It=null,Gt=null,Wn=null}}}const o=new r,c=new a,l=new s,h=new WeakMap,u=new WeakMap;let f={},p={},g=new WeakMap,d=[],m=null,v=!1,_=null,x=null,y=null,b=null,E=null,S=null,M=null,w=!1,L=null,z=null,V=null,A=null,T=null;const P=t.getParameter(35661);let O=!1,H=0;const N=t.getParameter(7938);N.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(N)[1]),O=H>=1):N.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),O=H>=2);let I=null,B={};const Z=t.getParameter(3088),X=t.getParameter(2978),G=new dn().fromArray(Z),J=new dn().fromArray(X);function ie(q,re,ce){const Se=new Uint8Array(4),Ie=t.createTexture();t.bindTexture(q,Ie),t.texParameteri(q,10241,9728),t.texParameteri(q,10240,9728);for(let dt=0;dt<ce;dt++)t.texImage2D(re+dt,0,6408,1,1,0,6408,5121,Se);return Ie}const Y={};Y[3553]=ie(3553,3553,1),Y[34067]=ie(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ve(2929),c.setFunc($h),Je(!1),Be(Qf),ve(2884),Xe(rr);function ve(q){f[q]!==!0&&(t.enable(q),f[q]=!0)}function fe(q){f[q]!==!1&&(t.disable(q),f[q]=!1)}function se(q,re){return p[q]!==re?(t.bindFramebuffer(q,re),p[q]=re,i&&(q===36009&&(p[36160]=re),q===36160&&(p[36009]=re)),!0):!1}function pe(q,re){let ce=d,Se=!1;if(q)if(ce=g.get(re),ce===void 0&&(ce=[],g.set(re,ce)),q.isWebGLMultipleRenderTargets){const Ie=q.texture;if(ce.length!==Ie.length||ce[0]!==36064){for(let dt=0,It=Ie.length;dt<It;dt++)ce[dt]=36064+dt;ce.length=Ie.length,Se=!0}}else ce[0]!==36064&&(ce[0]=36064,Se=!0);else ce[0]!==1029&&(ce[0]=1029,Se=!0);Se&&(n.isWebGL2?t.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function W(q){return m!==q?(t.useProgram(q),m=q,!0):!1}const Fe={[Fa]:32774,[jv]:32778,[$v]:32779};if(i)Fe[nd]=32775,Fe[id]=32776;else{const q=e.get("EXT_blend_minmax");q!==null&&(Fe[nd]=q.MIN_EXT,Fe[id]=q.MAX_EXT)}const ge={[Zv]:0,[Jv]:1,[Qv]:768,[Gp]:770,[r_]:776,[n_]:774,[e_]:772,[Kv]:769,[Vp]:771,[i_]:775,[t_]:773};function Xe(q,re,ce,Se,Ie,dt,It,Gt){if(q===rr){v===!0&&(fe(3042),v=!1);return}if(v===!1&&(ve(3042),v=!0),q!==Yv){if(q!==_||Gt!==w){if((x!==Fa||E!==Fa)&&(t.blendEquation(32774),x=Fa,E=Fa),Gt)switch(q){case Na:t.blendFuncSeparate(1,771,1,771);break;case Kf:t.blendFunc(1,1);break;case ed:t.blendFuncSeparate(0,769,0,1);break;case td:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Na:t.blendFuncSeparate(770,771,1,771);break;case Kf:t.blendFunc(770,1);break;case ed:t.blendFuncSeparate(0,769,0,1);break;case td:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}y=null,b=null,S=null,M=null,_=q,w=Gt}return}Ie=Ie||re,dt=dt||ce,It=It||Se,(re!==x||Ie!==E)&&(t.blendEquationSeparate(Fe[re],Fe[Ie]),x=re,E=Ie),(ce!==y||Se!==b||dt!==S||It!==M)&&(t.blendFuncSeparate(ge[ce],ge[Se],ge[dt],ge[It]),y=ce,b=Se,S=dt,M=It),_=q,w=null}function Me(q,re){q.side===er?fe(2884):ve(2884);let ce=q.side===Qn;re&&(ce=!ce),Je(ce),q.blending===Na&&q.transparent===!1?Xe(rr):Xe(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),o.setMask(q.colorWrite);const Se=q.stencilWrite;l.setTest(Se),Se&&(l.setMask(q.stencilWriteMask),l.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),l.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Oe(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ve(32926):fe(32926)}function Je(q){L!==q&&(q?t.frontFace(2304):t.frontFace(2305),L=q)}function Be(q){q!==Wv?(ve(2884),q!==z&&(q===Qf?t.cullFace(1029):q===Xv?t.cullFace(1028):t.cullFace(1032))):fe(2884),z=q}function Ue(q){q!==V&&(O&&t.lineWidth(q),V=q)}function Oe(q,re,ce){q?(ve(32823),(A!==re||T!==ce)&&(t.polygonOffset(re,ce),A=re,T=ce)):fe(32823)}function tt(q){q?ve(3089):fe(3089)}function ft(q){q===void 0&&(q=33984+P-1),I!==q&&(t.activeTexture(q),I=q)}function k(q,re,ce){ce===void 0&&(I===null?ce=33984+P-1:ce=I);let Se=B[ce];Se===void 0&&(Se={type:void 0,texture:void 0},B[ce]=Se),(Se.type!==q||Se.texture!==re)&&(I!==ce&&(t.activeTexture(ce),I=ce),t.bindTexture(q,re||Y[q]),Se.type=q,Se.texture=re)}function R(){const q=B[I];q!==void 0&&q.type!==void 0&&(t.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ne(){try{t.compressedTexImage2D.apply(t,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function he(){try{t.compressedTexImage3D.apply(t,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function me(){try{t.texSubImage2D.apply(t,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ye(){try{t.texSubImage3D.apply(t,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function We(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Le(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function oe(){try{t.texStorage2D.apply(t,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ge(){try{t.texStorage3D.apply(t,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function $(){try{t.texImage2D.apply(t,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function de(){try{t.texImage3D.apply(t,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _e(q){G.equals(q)===!1&&(t.scissor(q.x,q.y,q.z,q.w),G.copy(q))}function Te(q){J.equals(q)===!1&&(t.viewport(q.x,q.y,q.z,q.w),J.copy(q))}function we(q,re){let ce=u.get(re);ce===void 0&&(ce=new WeakMap,u.set(re,ce));let Se=ce.get(q);Se===void 0&&(Se=t.getUniformBlockIndex(re,q.name),ce.set(q,Se))}function qe(q,re){const Se=u.get(re).get(q);h.get(q)!==Se&&(t.uniformBlockBinding(re,Se,q.__bindingPointIndex),h.set(q,Se))}function ut(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},I=null,B={},p={},g=new WeakMap,d=[],m=null,v=!1,_=null,x=null,y=null,b=null,E=null,S=null,M=null,w=!1,L=null,z=null,V=null,A=null,T=null,G.set(0,0,t.canvas.width,t.canvas.height),J.set(0,0,t.canvas.width,t.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ve,disable:fe,bindFramebuffer:se,drawBuffers:pe,useProgram:W,setBlending:Xe,setMaterial:Me,setFlipSided:Je,setCullFace:Be,setLineWidth:Ue,setPolygonOffset:Oe,setScissorTest:tt,activeTexture:ft,bindTexture:k,unbindTexture:R,compressedTexImage2D:ne,compressedTexImage3D:he,texImage2D:$,texImage3D:de,updateUBOMapping:we,uniformBlockBinding:qe,texStorage2D:oe,texStorage3D:Ge,texSubImage2D:me,texSubImage3D:ye,compressedTexSubImage2D:We,compressedTexSubImage3D:Le,scissor:_e,viewport:Te,reset:ut}}function DM(t,e,n,i,r,a,s){const o=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(k,R){return v?new OffscreenCanvas(k,R):Jl("canvas")}function x(k,R,ne,he){let me=1;if((k.width>he||k.height>he)&&(me=he/Math.max(k.width,k.height)),me<1||R===!0)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap){const ye=R?tu:Math.floor,We=ye(me*k.width),Le=ye(me*k.height);d===void 0&&(d=_(We,Le));const oe=ne?_(We,Le):d;return oe.width=We,oe.height=Le,oe.getContext("2d").drawImage(k,0,0,We,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+We+"x"+Le+")."),oe}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),k;return k}function y(k){return Rd(k.width)&&Rd(k.height)}function b(k){return o?!1:k.wrapS!==li||k.wrapT!==li||k.minFilter!==_n&&k.minFilter!==jn}function E(k,R){return k.generateMipmaps&&R&&k.minFilter!==_n&&k.minFilter!==jn}function S(k){t.generateMipmap(k)}function M(k,R,ne,he,me=!1){if(o===!1)return R;if(k!==null){if(t[k]!==void 0)return t[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let ye=R;return R===6403&&(ne===5126&&(ye=33326),ne===5131&&(ye=33325),ne===5121&&(ye=33321)),R===33319&&(ne===5126&&(ye=33328),ne===5131&&(ye=33327),ne===5121&&(ye=33323)),R===6408&&(ne===5126&&(ye=34836),ne===5131&&(ye=34842),ne===5121&&(ye=he===Pt&&me===!1?35907:32856),ne===32819&&(ye=32854),ne===32820&&(ye=32855)),(ye===33325||ye===33326||ye===33327||ye===33328||ye===34842||ye===34836)&&e.get("EXT_color_buffer_float"),ye}function w(k,R,ne){return E(k,ne)===!0||k.isFramebufferTexture&&k.minFilter!==_n&&k.minFilter!==jn?Math.log2(Math.max(R.width,R.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?R.mipmaps.length:1}function L(k){return k===_n||k===rd||k===ad?9728:9729}function z(k){const R=k.target;R.removeEventListener("dispose",z),A(R),R.isVideoTexture&&g.delete(R)}function V(k){const R=k.target;R.removeEventListener("dispose",V),P(R)}function A(k){const R=i.get(k);if(R.__webglInit===void 0)return;const ne=k.source,he=m.get(ne);if(he){const me=he[R.__cacheKey];me.usedTimes--,me.usedTimes===0&&T(k),Object.keys(he).length===0&&m.delete(ne)}i.remove(k)}function T(k){const R=i.get(k);t.deleteTexture(R.__webglTexture);const ne=k.source,he=m.get(ne);delete he[R.__cacheKey],s.memory.textures--}function P(k){const R=k.texture,ne=i.get(k),he=i.get(R);if(he.__webglTexture!==void 0&&(t.deleteTexture(he.__webglTexture),s.memory.textures--),k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let me=0;me<6;me++)t.deleteFramebuffer(ne.__webglFramebuffer[me]),ne.__webglDepthbuffer&&t.deleteRenderbuffer(ne.__webglDepthbuffer[me]);else{if(t.deleteFramebuffer(ne.__webglFramebuffer),ne.__webglDepthbuffer&&t.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&t.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let me=0;me<ne.__webglColorRenderbuffer.length;me++)ne.__webglColorRenderbuffer[me]&&t.deleteRenderbuffer(ne.__webglColorRenderbuffer[me]);ne.__webglDepthRenderbuffer&&t.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(k.isWebGLMultipleRenderTargets)for(let me=0,ye=R.length;me<ye;me++){const We=i.get(R[me]);We.__webglTexture&&(t.deleteTexture(We.__webglTexture),s.memory.textures--),i.remove(R[me])}i.remove(R),i.remove(k)}let O=0;function H(){O=0}function N(){const k=O;return k>=c&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+c),O+=1,k}function I(k){const R=[];return R.push(k.wrapS),R.push(k.wrapT),R.push(k.wrapR||0),R.push(k.magFilter),R.push(k.minFilter),R.push(k.anisotropy),R.push(k.internalFormat),R.push(k.format),R.push(k.type),R.push(k.generateMipmaps),R.push(k.premultiplyAlpha),R.push(k.flipY),R.push(k.unpackAlignment),R.push(k.encoding),R.join()}function B(k,R){const ne=i.get(k);if(k.isVideoTexture&&tt(k),k.isRenderTargetTexture===!1&&k.version>0&&ne.__version!==k.version){const he=k.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(ne,k,R);return}}n.bindTexture(3553,ne.__webglTexture,33984+R)}function Z(k,R){const ne=i.get(k);if(k.version>0&&ne.__version!==k.version){fe(ne,k,R);return}n.bindTexture(35866,ne.__webglTexture,33984+R)}function X(k,R){const ne=i.get(k);if(k.version>0&&ne.__version!==k.version){fe(ne,k,R);return}n.bindTexture(32879,ne.__webglTexture,33984+R)}function G(k,R){const ne=i.get(k);if(k.version>0&&ne.__version!==k.version){se(ne,k,R);return}n.bindTexture(34067,ne.__webglTexture,33984+R)}const J={[Qh]:10497,[li]:33071,[Kh]:33648},ie={[_n]:9728,[rd]:9984,[ad]:9986,[jn]:9729,[x_]:9985,[kc]:9987};function Y(k,R,ne){if(ne?(t.texParameteri(k,10242,J[R.wrapS]),t.texParameteri(k,10243,J[R.wrapT]),(k===32879||k===35866)&&t.texParameteri(k,32882,J[R.wrapR]),t.texParameteri(k,10240,ie[R.magFilter]),t.texParameteri(k,10241,ie[R.minFilter])):(t.texParameteri(k,10242,33071),t.texParameteri(k,10243,33071),(k===32879||k===35866)&&t.texParameteri(k,32882,33071),(R.wrapS!==li||R.wrapT!==li)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(k,10240,L(R.magFilter)),t.texParameteri(k,10241,L(R.minFilter)),R.minFilter!==_n&&R.minFilter!==jn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const he=e.get("EXT_texture_filter_anisotropic");if(R.type===Ar&&e.has("OES_texture_float_linear")===!1||o===!1&&R.type===oo&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||i.get(R).__currentAnisotropy)&&(t.texParameterf(k,he.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy)}}function ve(k,R){let ne=!1;k.__webglInit===void 0&&(k.__webglInit=!0,R.addEventListener("dispose",z));const he=R.source;let me=m.get(he);me===void 0&&(me={},m.set(he,me));const ye=I(R);if(ye!==k.__cacheKey){me[ye]===void 0&&(me[ye]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,ne=!0),me[ye].usedTimes++;const We=me[k.__cacheKey];We!==void 0&&(me[k.__cacheKey].usedTimes--,We.usedTimes===0&&T(R)),k.__cacheKey=ye,k.__webglTexture=me[ye].texture}return ne}function fe(k,R,ne){let he=3553;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(he=35866),R.isData3DTexture&&(he=32879);const me=ve(k,R),ye=R.source;n.bindTexture(he,k.__webglTexture,33984+ne);const We=i.get(ye);if(ye.version!==We.__version||me===!0){n.activeTexture(33984+ne),t.pixelStorei(37440,R.flipY),t.pixelStorei(37441,R.premultiplyAlpha),t.pixelStorei(3317,R.unpackAlignment),t.pixelStorei(37443,0);const Le=b(R)&&y(R.image)===!1;let oe=x(R.image,Le,!1,h);oe=ft(R,oe);const Ge=y(oe)||o,$=a.convert(R.format,R.encoding);let de=a.convert(R.type),_e=M(R.internalFormat,$,de,R.encoding,R.isVideoTexture);Y(he,R,Ge);let Te;const we=R.mipmaps,qe=o&&R.isVideoTexture!==!0,ut=We.__version===void 0||me===!0,q=w(R,oe,Ge);if(R.isDepthTexture)_e=6402,o?R.type===Ar?_e=36012:R.type===Tr?_e=33190:R.type===Ba?_e=35056:_e=33189:R.type===Ar&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===Pr&&_e===6402&&R.type!==Xp&&R.type!==Tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=Tr,de=a.convert(R.type)),R.format===Ya&&_e===6402&&(_e=34041,R.type!==Ba&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=Ba,de=a.convert(R.type))),ut&&(qe?n.texStorage2D(3553,1,_e,oe.width,oe.height):n.texImage2D(3553,0,_e,oe.width,oe.height,0,$,de,null));else if(R.isDataTexture)if(we.length>0&&Ge){qe&&ut&&n.texStorage2D(3553,q,_e,we[0].width,we[0].height);for(let re=0,ce=we.length;re<ce;re++)Te=we[re],qe?n.texSubImage2D(3553,re,0,0,Te.width,Te.height,$,de,Te.data):n.texImage2D(3553,re,_e,Te.width,Te.height,0,$,de,Te.data);R.generateMipmaps=!1}else qe?(ut&&n.texStorage2D(3553,q,_e,oe.width,oe.height),n.texSubImage2D(3553,0,0,0,oe.width,oe.height,$,de,oe.data)):n.texImage2D(3553,0,_e,oe.width,oe.height,0,$,de,oe.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){qe&&ut&&n.texStorage3D(35866,q,_e,we[0].width,we[0].height,oe.depth);for(let re=0,ce=we.length;re<ce;re++)Te=we[re],R.format!==ci?$!==null?qe?n.compressedTexSubImage3D(35866,re,0,0,0,Te.width,Te.height,oe.depth,$,Te.data,0,0):n.compressedTexImage3D(35866,re,_e,Te.width,Te.height,oe.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?n.texSubImage3D(35866,re,0,0,0,Te.width,Te.height,oe.depth,$,de,Te.data):n.texImage3D(35866,re,_e,Te.width,Te.height,oe.depth,0,$,de,Te.data)}else{qe&&ut&&n.texStorage2D(3553,q,_e,we[0].width,we[0].height);for(let re=0,ce=we.length;re<ce;re++)Te=we[re],R.format!==ci?$!==null?qe?n.compressedTexSubImage2D(3553,re,0,0,Te.width,Te.height,$,Te.data):n.compressedTexImage2D(3553,re,_e,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?n.texSubImage2D(3553,re,0,0,Te.width,Te.height,$,de,Te.data):n.texImage2D(3553,re,_e,Te.width,Te.height,0,$,de,Te.data)}else if(R.isDataArrayTexture)qe?(ut&&n.texStorage3D(35866,q,_e,oe.width,oe.height,oe.depth),n.texSubImage3D(35866,0,0,0,0,oe.width,oe.height,oe.depth,$,de,oe.data)):n.texImage3D(35866,0,_e,oe.width,oe.height,oe.depth,0,$,de,oe.data);else if(R.isData3DTexture)qe?(ut&&n.texStorage3D(32879,q,_e,oe.width,oe.height,oe.depth),n.texSubImage3D(32879,0,0,0,0,oe.width,oe.height,oe.depth,$,de,oe.data)):n.texImage3D(32879,0,_e,oe.width,oe.height,oe.depth,0,$,de,oe.data);else if(R.isFramebufferTexture){if(ut)if(qe)n.texStorage2D(3553,q,_e,oe.width,oe.height);else{let re=oe.width,ce=oe.height;for(let Se=0;Se<q;Se++)n.texImage2D(3553,Se,_e,re,ce,0,$,de,null),re>>=1,ce>>=1}}else if(we.length>0&&Ge){qe&&ut&&n.texStorage2D(3553,q,_e,we[0].width,we[0].height);for(let re=0,ce=we.length;re<ce;re++)Te=we[re],qe?n.texSubImage2D(3553,re,0,0,$,de,Te):n.texImage2D(3553,re,_e,$,de,Te);R.generateMipmaps=!1}else qe?(ut&&n.texStorage2D(3553,q,_e,oe.width,oe.height),n.texSubImage2D(3553,0,0,0,$,de,oe)):n.texImage2D(3553,0,_e,$,de,oe);E(R,Ge)&&S(he),We.__version=ye.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function se(k,R,ne){if(R.image.length!==6)return;const he=ve(k,R),me=R.source;n.bindTexture(34067,k.__webglTexture,33984+ne);const ye=i.get(me);if(me.version!==ye.__version||he===!0){n.activeTexture(33984+ne),t.pixelStorei(37440,R.flipY),t.pixelStorei(37441,R.premultiplyAlpha),t.pixelStorei(3317,R.unpackAlignment),t.pixelStorei(37443,0);const We=R.isCompressedTexture||R.image[0].isCompressedTexture,Le=R.image[0]&&R.image[0].isDataTexture,oe=[];for(let re=0;re<6;re++)!We&&!Le?oe[re]=x(R.image[re],!1,!0,l):oe[re]=Le?R.image[re].image:R.image[re],oe[re]=ft(R,oe[re]);const Ge=oe[0],$=y(Ge)||o,de=a.convert(R.format,R.encoding),_e=a.convert(R.type),Te=M(R.internalFormat,de,_e,R.encoding),we=o&&R.isVideoTexture!==!0,qe=ye.__version===void 0||he===!0;let ut=w(R,Ge,$);Y(34067,R,$);let q;if(We){we&&qe&&n.texStorage2D(34067,ut,Te,Ge.width,Ge.height);for(let re=0;re<6;re++){q=oe[re].mipmaps;for(let ce=0;ce<q.length;ce++){const Se=q[ce];R.format!==ci?de!==null?we?n.compressedTexSubImage2D(34069+re,ce,0,0,Se.width,Se.height,de,Se.data):n.compressedTexImage2D(34069+re,ce,Te,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?n.texSubImage2D(34069+re,ce,0,0,Se.width,Se.height,de,_e,Se.data):n.texImage2D(34069+re,ce,Te,Se.width,Se.height,0,de,_e,Se.data)}}}else{q=R.mipmaps,we&&qe&&(q.length>0&&ut++,n.texStorage2D(34067,ut,Te,oe[0].width,oe[0].height));for(let re=0;re<6;re++)if(Le){we?n.texSubImage2D(34069+re,0,0,0,oe[re].width,oe[re].height,de,_e,oe[re].data):n.texImage2D(34069+re,0,Te,oe[re].width,oe[re].height,0,de,_e,oe[re].data);for(let ce=0;ce<q.length;ce++){const Ie=q[ce].image[re].image;we?n.texSubImage2D(34069+re,ce+1,0,0,Ie.width,Ie.height,de,_e,Ie.data):n.texImage2D(34069+re,ce+1,Te,Ie.width,Ie.height,0,de,_e,Ie.data)}}else{we?n.texSubImage2D(34069+re,0,0,0,de,_e,oe[re]):n.texImage2D(34069+re,0,Te,de,_e,oe[re]);for(let ce=0;ce<q.length;ce++){const Se=q[ce];we?n.texSubImage2D(34069+re,ce+1,0,0,de,_e,Se.image[re]):n.texImage2D(34069+re,ce+1,Te,de,_e,Se.image[re])}}}E(R,$)&&S(34067),ye.__version=me.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function pe(k,R,ne,he,me){const ye=a.convert(ne.format,ne.encoding),We=a.convert(ne.type),Le=M(ne.internalFormat,ye,We,ne.encoding);i.get(R).__hasExternalTextures||(me===32879||me===35866?n.texImage3D(me,0,Le,R.width,R.height,R.depth,0,ye,We,null):n.texImage2D(me,0,Le,R.width,R.height,0,ye,We,null)),n.bindFramebuffer(36160,k),Oe(R)?f.framebufferTexture2DMultisampleEXT(36160,he,me,i.get(ne).__webglTexture,0,Ue(R)):(me===3553||me>=34069&&me<=34074)&&t.framebufferTexture2D(36160,he,me,i.get(ne).__webglTexture,0),n.bindFramebuffer(36160,null)}function W(k,R,ne){if(t.bindRenderbuffer(36161,k),R.depthBuffer&&!R.stencilBuffer){let he=33189;if(ne||Oe(R)){const me=R.depthTexture;me&&me.isDepthTexture&&(me.type===Ar?he=36012:me.type===Tr&&(he=33190));const ye=Ue(R);Oe(R)?f.renderbufferStorageMultisampleEXT(36161,ye,he,R.width,R.height):t.renderbufferStorageMultisample(36161,ye,he,R.width,R.height)}else t.renderbufferStorage(36161,he,R.width,R.height);t.framebufferRenderbuffer(36160,36096,36161,k)}else if(R.depthBuffer&&R.stencilBuffer){const he=Ue(R);ne&&Oe(R)===!1?t.renderbufferStorageMultisample(36161,he,35056,R.width,R.height):Oe(R)?f.renderbufferStorageMultisampleEXT(36161,he,35056,R.width,R.height):t.renderbufferStorage(36161,34041,R.width,R.height),t.framebufferRenderbuffer(36160,33306,36161,k)}else{const he=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let me=0;me<he.length;me++){const ye=he[me],We=a.convert(ye.format,ye.encoding),Le=a.convert(ye.type),oe=M(ye.internalFormat,We,Le,ye.encoding),Ge=Ue(R);ne&&Oe(R)===!1?t.renderbufferStorageMultisample(36161,Ge,oe,R.width,R.height):Oe(R)?f.renderbufferStorageMultisampleEXT(36161,Ge,oe,R.width,R.height):t.renderbufferStorage(36161,oe,R.width,R.height)}}t.bindRenderbuffer(36161,null)}function Fe(k,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,k),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),B(R.depthTexture,0);const he=i.get(R.depthTexture).__webglTexture,me=Ue(R);if(R.depthTexture.format===Pr)Oe(R)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,he,0,me):t.framebufferTexture2D(36160,36096,3553,he,0);else if(R.depthTexture.format===Ya)Oe(R)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,he,0,me):t.framebufferTexture2D(36160,33306,3553,he,0);else throw new Error("Unknown depthTexture format")}function ge(k){const R=i.get(k),ne=k.isWebGLCubeRenderTarget===!0;if(k.depthTexture&&!R.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Fe(R.__webglFramebuffer,k)}else if(ne){R.__webglDepthbuffer=[];for(let he=0;he<6;he++)n.bindFramebuffer(36160,R.__webglFramebuffer[he]),R.__webglDepthbuffer[he]=t.createRenderbuffer(),W(R.__webglDepthbuffer[he],k,!1)}else n.bindFramebuffer(36160,R.__webglFramebuffer),R.__webglDepthbuffer=t.createRenderbuffer(),W(R.__webglDepthbuffer,k,!1);n.bindFramebuffer(36160,null)}function Xe(k,R,ne){const he=i.get(k);R!==void 0&&pe(he.__webglFramebuffer,k,k.texture,36064,3553),ne!==void 0&&ge(k)}function Me(k){const R=k.texture,ne=i.get(k),he=i.get(R);k.addEventListener("dispose",V),k.isWebGLMultipleRenderTargets!==!0&&(he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture()),he.__version=R.version,s.memory.textures++);const me=k.isWebGLCubeRenderTarget===!0,ye=k.isWebGLMultipleRenderTargets===!0,We=y(k)||o;if(me){ne.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)ne.__webglFramebuffer[Le]=t.createFramebuffer()}else{if(ne.__webglFramebuffer=t.createFramebuffer(),ye)if(r.drawBuffers){const Le=k.texture;for(let oe=0,Ge=Le.length;oe<Ge;oe++){const $=i.get(Le[oe]);$.__webglTexture===void 0&&($.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&k.samples>0&&Oe(k)===!1){const Le=ye?R:[R];ne.__webglMultisampledFramebuffer=t.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,ne.__webglMultisampledFramebuffer);for(let oe=0;oe<Le.length;oe++){const Ge=Le[oe];ne.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(36161,ne.__webglColorRenderbuffer[oe]);const $=a.convert(Ge.format,Ge.encoding),de=a.convert(Ge.type),_e=M(Ge.internalFormat,$,de,Ge.encoding,k.isXRRenderTarget===!0),Te=Ue(k);t.renderbufferStorageMultisample(36161,Te,_e,k.width,k.height),t.framebufferRenderbuffer(36160,36064+oe,36161,ne.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(36161,null),k.depthBuffer&&(ne.__webglDepthRenderbuffer=t.createRenderbuffer(),W(ne.__webglDepthRenderbuffer,k,!0)),n.bindFramebuffer(36160,null)}}if(me){n.bindTexture(34067,he.__webglTexture),Y(34067,R,We);for(let Le=0;Le<6;Le++)pe(ne.__webglFramebuffer[Le],k,R,36064,34069+Le);E(R,We)&&S(34067),n.unbindTexture()}else if(ye){const Le=k.texture;for(let oe=0,Ge=Le.length;oe<Ge;oe++){const $=Le[oe],de=i.get($);n.bindTexture(3553,de.__webglTexture),Y(3553,$,We),pe(ne.__webglFramebuffer,k,$,36064+oe,3553),E($,We)&&S(3553)}n.unbindTexture()}else{let Le=3553;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(o?Le=k.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Le,he.__webglTexture),Y(Le,R,We),pe(ne.__webglFramebuffer,k,R,36064,Le),E(R,We)&&S(Le),n.unbindTexture()}k.depthBuffer&&ge(k)}function Je(k){const R=y(k)||o,ne=k.isWebGLMultipleRenderTargets===!0?k.texture:[k.texture];for(let he=0,me=ne.length;he<me;he++){const ye=ne[he];if(E(ye,R)){const We=k.isWebGLCubeRenderTarget?34067:3553,Le=i.get(ye).__webglTexture;n.bindTexture(We,Le),S(We),n.unbindTexture()}}}function Be(k){if(o&&k.samples>0&&Oe(k)===!1){const R=k.isWebGLMultipleRenderTargets?k.texture:[k.texture],ne=k.width,he=k.height;let me=16384;const ye=[],We=k.stencilBuffer?33306:36096,Le=i.get(k),oe=k.isWebGLMultipleRenderTargets===!0;if(oe)for(let Ge=0;Ge<R.length;Ge++)n.bindFramebuffer(36160,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+Ge,36161,null),n.bindFramebuffer(36160,Le.__webglFramebuffer),t.framebufferTexture2D(36009,36064+Ge,3553,null,0);n.bindFramebuffer(36008,Le.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,Le.__webglFramebuffer);for(let Ge=0;Ge<R.length;Ge++){ye.push(36064+Ge),k.depthBuffer&&ye.push(We);const $=Le.__ignoreDepthValues!==void 0?Le.__ignoreDepthValues:!1;if($===!1&&(k.depthBuffer&&(me|=256),k.stencilBuffer&&(me|=1024)),oe&&t.framebufferRenderbuffer(36008,36064,36161,Le.__webglColorRenderbuffer[Ge]),$===!0&&(t.invalidateFramebuffer(36008,[We]),t.invalidateFramebuffer(36009,[We])),oe){const de=i.get(R[Ge]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,de,0)}t.blitFramebuffer(0,0,ne,he,0,0,ne,he,me,9728),p&&t.invalidateFramebuffer(36008,ye)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),oe)for(let Ge=0;Ge<R.length;Ge++){n.bindFramebuffer(36160,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+Ge,36161,Le.__webglColorRenderbuffer[Ge]);const $=i.get(R[Ge]).__webglTexture;n.bindFramebuffer(36160,Le.__webglFramebuffer),t.framebufferTexture2D(36009,36064+Ge,3553,$,0)}n.bindFramebuffer(36009,Le.__webglMultisampledFramebuffer)}}function Ue(k){return Math.min(u,k.samples)}function Oe(k){const R=i.get(k);return o&&k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function tt(k){const R=s.render.frame;g.get(k)!==R&&(g.set(k,R),k.update())}function ft(k,R){const ne=k.encoding,he=k.format,me=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||k.format===eu||ne!==Vr&&(ne===Pt?o===!1?e.has("EXT_sRGB")===!0&&he===ci?(k.format=eu,k.minFilter=jn,k.generateMipmaps=!1):R=Zp.sRGBToLinear(R):(he!==ci||me!==Gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ne)),R}this.allocateTextureUnit=N,this.resetTextureUnits=H,this.setTexture2D=B,this.setTexture2DArray=Z,this.setTexture3D=X,this.setTextureCube=G,this.rebindTextures=Xe,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Oe}function FM(t,e,n){const i=n.isWebGL2;function r(a,s=null){let o;if(a===Gr)return 5121;if(a===w_)return 32819;if(a===E_)return 32820;if(a===y_)return 5120;if(a===b_)return 5122;if(a===Xp)return 5123;if(a===M_)return 5124;if(a===Tr)return 5125;if(a===Ar)return 5126;if(a===oo)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===S_)return 6406;if(a===ci)return 6408;if(a===A_)return 6409;if(a===C_)return 6410;if(a===Pr)return 6402;if(a===Ya)return 34041;if(a===L_)return 6403;if(a===T_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===eu)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===R_)return 36244;if(a===P_)return 33319;if(a===D_)return 33320;if(a===F_)return 36249;if(a===ih||a===rh||a===ah||a===sh)if(s===Pt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===ih)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===rh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ah)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===sh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===ih)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===rh)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ah)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===sh)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===sd||a===od||a===ld||a===cd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===sd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===od)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ld)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===cd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===I_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===hd||a===ud)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===hd)return s===Pt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===ud)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===fd||a===dd||a===pd||a===md||a===gd||a===vd||a===_d||a===xd||a===yd||a===bd||a===Md||a===wd||a===Ed||a===Sd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===fd)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===dd)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===pd)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===md)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===gd)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===vd)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===_d)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===xd)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===yd)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===bd)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Md)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===wd)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Ed)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Sd)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Td)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===Td)return s===Pt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===Ba?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:r}}class IM extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Bl=class extends Ai{constructor(){super(),this.isGroup=!0,this.type="Group"}};const UM={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const d of e.hand.values()){const m=n.getJointPose(d,i);if(l.joints[d.jointName]===void 0){const _=new Bl;_.matrixAutoUpdate=!1,_.visible=!1,l.joints[d.jointName]=_,l.add(_)}const v=l.joints[d.jointName];m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=m.radius),v.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(UM)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}}let kM=class extends mr{constructor(e,n,i,r,a,s,o,c,l,h){if(h=h!==void 0?h:Pr,h!==Pr&&h!==Ya)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Pr&&(i=Tr),i===void 0&&h===Ya&&(i=Ba),super(null,r,a,s,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:_n,this.minFilter=c!==void 0?c:_n,this.flipY=!1,this.generateMipmaps=!1}};class OM extends Gs{constructor(e,n){super();const i=this;let r=null,a=1,s=null,o="local-floor",c=null,l=null,h=null,u=null,f=null,p=null;const g=n.getContextAttributes();let d=null,m=null;const v=[],_=[],x=new $n;x.layers.enable(1),x.viewport=new dn;const y=new $n;y.layers.enable(2),y.viewport=new dn;const b=[x,y],E=new IM;E.layers.enable(1),E.layers.enable(2);let S=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let B=v[I];return B===void 0&&(B=new Uh,v[I]=B),B.getTargetRaySpace()},this.getControllerGrip=function(I){let B=v[I];return B===void 0&&(B=new Uh,v[I]=B),B.getGripSpace()},this.getHand=function(I){let B=v[I];return B===void 0&&(B=new Uh,v[I]=B),B.getHandSpace()};function w(I){const B=_.indexOf(I.inputSource);if(B===-1)return;const Z=v[B];Z!==void 0&&Z.dispatchEvent({type:I.type,data:I.inputSource})}function L(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",z);for(let I=0;I<v.length;I++){const B=_[I];B!==null&&(_[I]=null,v[I].disconnect(B))}S=null,M=null,e.setRenderTarget(d),f=null,u=null,h=null,r=null,m=null,N.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",L),r.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(r,n,B),r.updateRenderState({baseLayer:f}),m=new Hr(f.framebufferWidth,f.framebufferHeight,{format:ci,type:Gr,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let B=null,Z=null,X=null;g.depth&&(X=g.stencil?35056:33190,B=g.stencil?Ya:Pr,Z=g.stencil?Ba:Tr);const G={colorFormat:32856,depthFormat:X,scaleFactor:a};h=new XRWebGLBinding(r,n),u=h.createProjectionLayer(G),r.updateRenderState({layers:[u]}),m=new Hr(u.textureWidth,u.textureHeight,{format:ci,type:Gr,depthTexture:new kM(u.textureWidth,u.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const J=e.properties.get(m);J.__ignoreDepthValues=u.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),c=null,s=await r.requestReferenceSpace(o),N.setContext(r),N.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function z(I){for(let B=0;B<I.removed.length;B++){const Z=I.removed[B],X=_.indexOf(Z);X>=0&&(_[X]=null,v[X].dispatchEvent({type:"disconnected",data:Z}))}for(let B=0;B<I.added.length;B++){const Z=I.added[B];let X=_.indexOf(Z);if(X===-1){for(let J=0;J<v.length;J++)if(J>=_.length){_.push(Z),X=J;break}else if(_[J]===null){_[J]=Z,X=J;break}if(X===-1)break}const G=v[X];G&&G.dispatchEvent({type:"connected",data:Z})}}const V=new te,A=new te;function T(I,B,Z){V.setFromMatrixPosition(B.matrixWorld),A.setFromMatrixPosition(Z.matrixWorld);const X=V.distanceTo(A),G=B.projectionMatrix.elements,J=Z.projectionMatrix.elements,ie=G[14]/(G[10]-1),Y=G[14]/(G[10]+1),ve=(G[9]+1)/G[5],fe=(G[9]-1)/G[5],se=(G[8]-1)/G[0],pe=(J[8]+1)/J[0],W=ie*se,Fe=ie*pe,ge=X/(-se+pe),Xe=ge*-se;B.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Xe),I.translateZ(ge),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const Me=ie+ge,Je=Y+ge,Be=W-Xe,Ue=Fe+(X-Xe),Oe=ve*Y/Je*Me,tt=fe*Y/Je*Me;I.projectionMatrix.makePerspective(Be,Ue,Oe,tt,Me,Je)}function P(I,B){B===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(B.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;E.near=y.near=x.near=I.near,E.far=y.far=x.far=I.far,(S!==E.near||M!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),S=E.near,M=E.far);const B=I.parent,Z=E.cameras;P(E,B);for(let G=0;G<Z.length;G++)P(Z[G],B);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),I.matrix.copy(E.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);const X=I.children;for(let G=0,J=X.length;G<J;G++)X[G].updateMatrixWorld(!0);Z.length===2?T(E,x,y):E.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(I){u!==null&&(u.fixedFoveation=I),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=I)};let O=null;function H(I,B){if(l=B.getViewerPose(c||s),p=B,l!==null){const Z=l.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let X=!1;Z.length!==E.cameras.length&&(E.cameras.length=0,X=!0);for(let G=0;G<Z.length;G++){const J=Z[G];let ie=null;if(f!==null)ie=f.getViewport(J);else{const ve=h.getViewSubImage(u,J);ie=ve.viewport,G===0&&(e.setRenderTargetTextures(m,ve.colorTexture,u.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(m))}let Y=b[G];Y===void 0&&(Y=new $n,Y.layers.enable(G),Y.viewport=new dn,b[G]=Y),Y.matrix.fromArray(J.transform.matrix),Y.projectionMatrix.fromArray(J.projectionMatrix),Y.viewport.set(ie.x,ie.y,ie.width,ie.height),G===0&&E.matrix.copy(Y.matrix),X===!0&&E.cameras.push(Y)}}for(let Z=0;Z<v.length;Z++){const X=_[Z],G=v[Z];X!==null&&G!==void 0&&G.update(X,B,c||s)}O&&O(I,B),p=null}const N=new um;N.setAnimationLoop(H),this.setAnimationLoop=function(I){O=I},this.dispose=function(){}}}function NM(t,e){function n(d,m){d.fogColor.value.copy(m.color),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function i(d,m,v,_,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(d,m):m.isMeshToonMaterial?(r(d,m),h(d,m)):m.isMeshPhongMaterial?(r(d,m),l(d,m)):m.isMeshStandardMaterial?(r(d,m),u(d,m),m.isMeshPhysicalMaterial&&f(d,m,x)):m.isMeshMatcapMaterial?(r(d,m),p(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),g(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(a(d,m),m.isLineDashedMaterial&&s(d,m)):m.isPointsMaterial?o(d,m,v,_):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===Qn&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===Qn&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const v=e.get(m).envMap;if(v&&(d.envMap.value=v,d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const y=t.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*y}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let _;m.map?_=m.map:m.specularMap?_=m.specularMap:m.displacementMap?_=m.displacementMap:m.normalMap?_=m.normalMap:m.bumpMap?_=m.bumpMap:m.roughnessMap?_=m.roughnessMap:m.metalnessMap?_=m.metalnessMap:m.alphaMap?_=m.alphaMap:m.emissiveMap?_=m.emissiveMap:m.clearcoatMap?_=m.clearcoatMap:m.clearcoatNormalMap?_=m.clearcoatNormalMap:m.clearcoatRoughnessMap?_=m.clearcoatRoughnessMap:m.iridescenceMap?_=m.iridescenceMap:m.iridescenceThicknessMap?_=m.iridescenceThicknessMap:m.specularIntensityMap?_=m.specularIntensityMap:m.specularColorMap?_=m.specularColorMap:m.transmissionMap?_=m.transmissionMap:m.thicknessMap?_=m.thicknessMap:m.sheenColorMap?_=m.sheenColorMap:m.sheenRoughnessMap&&(_=m.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uv2Transform.value.copy(x.matrix))}function a(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function s(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function o(d,m,v,_){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*v,d.scale.value=_*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function l(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function h(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function u(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function f(d,m,v){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Qn&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function BM(t,e,n,i){let r={},a={},s=[];const o=n.isWebGL2?t.getParameter(35375):0;function c(_,x){const y=x.program;i.uniformBlockBinding(_,y)}function l(_,x){let y=r[_.id];y===void 0&&(g(_),y=h(_),r[_.id]=y,_.addEventListener("dispose",m));const b=x.program;i.updateUBOMapping(_,b);const E=e.render.frame;a[_.id]!==E&&(f(_),a[_.id]=E)}function h(_){const x=u();_.__bindingPointIndex=x;const y=t.createBuffer(),b=_.__size,E=_.usage;return t.bindBuffer(35345,y),t.bufferData(35345,b,E),t.bindBuffer(35345,null),t.bindBufferBase(35345,x,y),y}function u(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const x=r[_.id],y=_.uniforms,b=_.__cache;t.bindBuffer(35345,x);for(let E=0,S=y.length;E<S;E++){const M=y[E];if(p(M,E,b)===!0){const w=M.value,L=M.__offset;typeof w=="number"?(M.__data[0]=w,t.bufferSubData(35345,L,M.__data)):(M.value.isMatrix3?(M.__data[0]=M.value.elements[0],M.__data[1]=M.value.elements[1],M.__data[2]=M.value.elements[2],M.__data[3]=M.value.elements[0],M.__data[4]=M.value.elements[3],M.__data[5]=M.value.elements[4],M.__data[6]=M.value.elements[5],M.__data[7]=M.value.elements[0],M.__data[8]=M.value.elements[6],M.__data[9]=M.value.elements[7],M.__data[10]=M.value.elements[8],M.__data[11]=M.value.elements[0]):w.toArray(M.__data),t.bufferSubData(35345,L,M.__data))}}t.bindBuffer(35345,null)}function p(_,x,y){const b=_.value;if(y[x]===void 0)return typeof b=="number"?y[x]=b:y[x]=b.clone(),!0;if(typeof b=="number"){if(y[x]!==b)return y[x]=b,!0}else{const E=y[x];if(E.equals(b)===!1)return E.copy(b),!0}return!1}function g(_){const x=_.uniforms;let y=0;const b=16;let E=0;for(let S=0,M=x.length;S<M;S++){const w=x[S],L=d(w);if(w.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,S>0){E=y%b;const z=b-E;E!==0&&z-L.boundary<0&&(y+=b-E,w.__offset=y)}y+=L.storage}return E=y%b,E>0&&(y+=b-E),_.__size=y,_.__cache={},this}function d(_){const x=_.value,y={boundary:0,storage:0};return typeof x=="number"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=s.indexOf(x.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete a[x.id]}function v(){for(const _ in r)t.deleteBuffer(r[_]);s=[],r={},a={}}return{bind:c,update:l,dispose:v}}function zM(){const t=Jl("canvas");return t.style.display="block",t}function vm(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:zM(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,a=t.antialias!==void 0?t.antialias:!1,s=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,o=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,c=t.powerPreference!==void 0?t.powerPreference:"default",l=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let h;n!==null?h=n.getContextAttributes().alpha:h=t.alpha!==void 0?t.alpha:!1;let u=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Vr,this.physicallyCorrectLights=!1,this.toneMapping=Ni,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let m=!1,v=0,_=0,x=null,y=-1,b=null;const E=new dn,S=new dn;let M=null,w=e.width,L=e.height,z=1,V=null,A=null;const T=new dn(0,0,w,L),P=new dn(0,0,w,L);let O=!1;const H=new hm;let N=!1,I=!1,B=null;const Z=new pn,X=new St,G=new te,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return x===null?z:1}let Y=n;function ve(D,K){for(let ae=0;ae<D.length;ae++){const Q=D[ae],le=e.getContext(Q,K);if(le!==null)return le}return null}try{const D={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:s,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qu}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",we,!1),Y===null){const K=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&K.shift(),Y=ve(K,D),Y===null)throw ve(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let fe,se,pe,W,Fe,ge,Xe,Me,Je,Be,Ue,Oe,tt,ft,k,R,ne,he,me,ye,We,Le,oe,Ge;function $(){fe=new Jy(Y),se=new Wy(Y,fe,t),fe.init(se),Le=new FM(Y,fe,se),pe=new PM(Y,fe,se),W=new eb,Fe=new vM,ge=new DM(Y,fe,pe,Fe,se,Le,W),Xe=new qy(d),Me=new Zy(d),Je=new o0(Y,se),oe=new Vy(Y,fe,Je,se),Be=new Qy(Y,Je,W,oe),Ue=new rb(Y,Be,Je,W),me=new ib(Y,se,ge),R=new Xy(Fe),Oe=new gM(d,Xe,Me,fe,se,oe,R),tt=new NM(d,Fe),ft=new xM,k=new SM(fe,se),he=new Gy(d,Xe,Me,pe,Ue,h,s),ne=new RM(d,Ue,se),Ge=new BM(Y,W,se,pe),ye=new Hy(Y,fe,W,se),We=new Ky(Y,fe,W,se),W.programs=Oe.programs,d.capabilities=se,d.extensions=fe,d.properties=Fe,d.renderLists=ft,d.shadowMap=ne,d.state=pe,d.info=W}$();const de=new OM(d,Y);this.xr=de,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const D=fe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=fe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(D){D!==void 0&&(z=D,this.setSize(w,L,!1))},this.getSize=function(D){return D.set(w,L)},this.setSize=function(D,K,ae){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=D,L=K,e.width=Math.floor(D*z),e.height=Math.floor(K*z),ae!==!1&&(e.style.width=D+"px",e.style.height=K+"px"),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(w*z,L*z).floor()},this.setDrawingBufferSize=function(D,K,ae){w=D,L=K,z=ae,e.width=Math.floor(D*ae),e.height=Math.floor(K*ae),this.setViewport(0,0,D,K)},this.getCurrentViewport=function(D){return D.copy(E)},this.getViewport=function(D){return D.copy(T)},this.setViewport=function(D,K,ae,Q){D.isVector4?T.set(D.x,D.y,D.z,D.w):T.set(D,K,ae,Q),pe.viewport(E.copy(T).multiplyScalar(z).floor())},this.getScissor=function(D){return D.copy(P)},this.setScissor=function(D,K,ae,Q){D.isVector4?P.set(D.x,D.y,D.z,D.w):P.set(D,K,ae,Q),pe.scissor(S.copy(P).multiplyScalar(z).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(D){pe.setScissorTest(O=D)},this.setOpaqueSort=function(D){V=D},this.setTransparentSort=function(D){A=D},this.getClearColor=function(D){return D.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(D=!0,K=!0,ae=!0){let Q=0;D&&(Q|=16384),K&&(Q|=256),ae&&(Q|=1024),Y.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",we,!1),ft.dispose(),k.dispose(),Fe.dispose(),Xe.dispose(),Me.dispose(),Ue.dispose(),oe.dispose(),Ge.dispose(),Oe.dispose(),de.dispose(),de.removeEventListener("sessionstart",Se),de.removeEventListener("sessionend",Ie),B&&(B.dispose(),B=null),dt.stop()};function _e(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const D=W.autoReset,K=ne.enabled,ae=ne.autoUpdate,Q=ne.needsUpdate,le=ne.type;$(),W.autoReset=D,ne.enabled=K,ne.autoUpdate=ae,ne.needsUpdate=Q,ne.type=le}function we(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function qe(D){const K=D.target;K.removeEventListener("dispose",qe),ut(K)}function ut(D){q(D),Fe.remove(D)}function q(D){const K=Fe.get(D).programs;K!==void 0&&(K.forEach(function(ae){Oe.releaseProgram(ae)}),D.isShaderMaterial&&Oe.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,ae,Q,le,He){K===null&&(K=J);const $e=le.isMesh&&le.matrixWorld.determinant()<0,it=_l(D,K,ae,Q,le);pe.setMaterial(Q,$e);let nt=ae.index;const pt=ae.attributes.position;if(nt===null){if(pt===void 0||pt.count===0)return}else if(nt.count===0)return;let lt=1;Q.wireframe===!0&&(nt=Be.getWireframeAttribute(ae),lt=2),oe.setup(le,Q,it,ae,nt);let rt,C=ye;nt!==null&&(rt=Je.get(nt),C=We,C.setIndex(rt));const F=nt!==null?nt.count:pt.count,j=ae.drawRange.start*lt,ue=ae.drawRange.count*lt,ee=He!==null?He.start*lt:0,be=He!==null?He.count*lt:1/0,Ke=Math.max(j,ee),xe=Math.min(F,j+ue,ee+be)-1,je=Math.max(0,xe-Ke+1);if(je!==0){if(le.isMesh)Q.wireframe===!0?(pe.setLineWidth(Q.wireframeLinewidth*ie()),C.setMode(1)):C.setMode(4);else if(le.isLine){let Ne=Q.linewidth;Ne===void 0&&(Ne=1),pe.setLineWidth(Ne*ie()),le.isLineSegments?C.setMode(1):le.isLineLoop?C.setMode(2):C.setMode(3)}else le.isPoints?C.setMode(0):le.isSprite&&C.setMode(4);if(le.isInstancedMesh)C.renderInstances(Ke,je,le.count);else if(ae.isInstancedBufferGeometry){const Ne=Math.min(ae.instanceCount,ae._maxInstanceCount);C.renderInstances(Ke,je,Ne)}else C.render(Ke,je)}},this.compile=function(D,K){function ae(Q,le,He){Q.transparent===!0&&Q.side===er?(Q.side=Qn,Q.needsUpdate=!0,cn(Q,le,He),Q.side=Wa,Q.needsUpdate=!0,cn(Q,le,He),Q.side=er):cn(Q,le,He)}f=k.get(D),f.init(),g.push(f),D.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(f.pushLight(Q),Q.castShadow&&f.pushShadow(Q))}),f.setupLights(d.physicallyCorrectLights),D.traverse(function(Q){const le=Q.material;if(le)if(Array.isArray(le))for(let He=0;He<le.length;He++){const $e=le[He];ae($e,D,Q)}else ae(le,D,Q)}),g.pop(),f=null};let re=null;function ce(D){re&&re(D)}function Se(){dt.stop()}function Ie(){dt.start()}const dt=new um;dt.setAnimationLoop(ce),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(D){re=D,de.setAnimationLoop(D),D===null?dt.stop():dt.start()},de.addEventListener("sessionstart",Se),de.addEventListener("sessionend",Ie),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(K),K=de.getCamera()),D.isScene===!0&&D.onBeforeRender(d,D,K,x),f=k.get(D,g.length),f.init(),g.push(f),Z.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H.setFromProjectionMatrix(Z),I=this.localClippingEnabled,N=R.init(this.clippingPlanes,I,K),u=ft.get(D,p.length),u.init(),p.push(u),It(D,K,0,d.sortObjects),u.finish(),d.sortObjects===!0&&u.sort(V,A),N===!0&&R.beginShadows();const ae=f.state.shadowsArray;if(ne.render(ae,D,K),N===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset(),he.render(u,D),f.setupLights(d.physicallyCorrectLights),K.isArrayCamera){const Q=K.cameras;for(let le=0,He=Q.length;le<He;le++){const $e=Q[le];Gt(u,D,$e,$e.viewport)}}else Gt(u,D,K);x!==null&&(ge.updateMultisampleRenderTarget(x),ge.updateRenderTargetMipmap(x)),D.isScene===!0&&D.onAfterRender(d,D,K),oe.resetDefaultState(),y=-1,b=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?u=p[p.length-1]:u=null};function It(D,K,ae,Q){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)ae=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)f.pushLight(D),D.castShadow&&f.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||H.intersectsSprite(D)){Q&&G.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Z);const $e=Ue.update(D),it=D.material;it.visible&&u.push(D,$e,it,ae,G.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(D.isSkinnedMesh&&D.skeleton.frame!==W.render.frame&&(D.skeleton.update(),D.skeleton.frame=W.render.frame),!D.frustumCulled||H.intersectsObject(D))){Q&&G.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Z);const $e=Ue.update(D),it=D.material;if(Array.isArray(it)){const nt=$e.groups;for(let pt=0,lt=nt.length;pt<lt;pt++){const rt=nt[pt],C=it[rt.materialIndex];C&&C.visible&&u.push(D,$e,C,ae,G.z,rt)}}else it.visible&&u.push(D,$e,it,ae,G.z,null)}}const He=D.children;for(let $e=0,it=He.length;$e<it;$e++)It(He[$e],K,ae,Q)}function Gt(D,K,ae,Q){const le=D.opaque,He=D.transmissive,$e=D.transparent;f.setupLightsView(ae),He.length>0&&Wn(le,K,ae),Q&&pe.viewport(E.copy(Q)),le.length>0&&yt(le,K,ae),He.length>0&&yt(He,K,ae),$e.length>0&&yt($e,K,ae),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Wn(D,K,ae){const Q=se.isWebGL2;B===null&&(B=new Hr(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?oo:Gr,minFilter:kc,samples:Q&&a===!0?4:0})),d.getDrawingBufferSize(X),Q?B.setSize(X.x,X.y):B.setSize(tu(X.x),tu(X.y));const le=d.getRenderTarget();d.setRenderTarget(B),d.clear();const He=d.toneMapping;d.toneMapping=Ni,yt(D,K,ae),d.toneMapping=He,ge.updateMultisampleRenderTarget(B),ge.updateRenderTargetMipmap(B),d.setRenderTarget(le)}function yt(D,K,ae){const Q=K.isScene===!0?K.overrideMaterial:null;for(let le=0,He=D.length;le<He;le++){const $e=D[le],it=$e.object,nt=$e.geometry,pt=Q===null?$e.material:Q,lt=$e.group;it.layers.test(ae.layers)&&Xn(it,K,ae,nt,pt,lt)}}function Xn(D,K,ae,Q,le,He){D.onBeforeRender(d,K,ae,Q,le,He),D.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),le.onBeforeRender(d,K,ae,Q,D,He),le.transparent===!0&&le.side===er?(le.side=Qn,le.needsUpdate=!0,d.renderBufferDirect(ae,K,Q,le,D,He),le.side=Wa,le.needsUpdate=!0,d.renderBufferDirect(ae,K,Q,le,D,He),le.side=er):d.renderBufferDirect(ae,K,Q,le,D,He),D.onAfterRender(d,K,ae,Q,le,He)}function cn(D,K,ae){K.isScene!==!0&&(K=J);const Q=Fe.get(D),le=f.state.lights,He=f.state.shadowsArray,$e=le.state.version,it=Oe.getParameters(D,le.state,He,K,ae),nt=Oe.getProgramCacheKey(it);let pt=Q.programs;Q.environment=D.isMeshStandardMaterial?K.environment:null,Q.fog=K.fog,Q.envMap=(D.isMeshStandardMaterial?Me:Xe).get(D.envMap||Q.environment),pt===void 0&&(D.addEventListener("dispose",qe),pt=new Map,Q.programs=pt);let lt=pt.get(nt);if(lt!==void 0){if(Q.currentProgram===lt&&Q.lightsStateVersion===$e)return vl(D,it),lt}else it.uniforms=Oe.getUniforms(D),D.onBuild(ae,it,d),D.onBeforeCompile(it,d),lt=Oe.acquireProgram(it,nt),pt.set(nt,lt),Q.uniforms=it.uniforms;const rt=Q.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(rt.clippingPlanes=R.uniform),vl(D,it),Q.needsLights=Kc(D),Q.lightsStateVersion=$e,Q.needsLights&&(rt.ambientLightColor.value=le.state.ambient,rt.lightProbe.value=le.state.probe,rt.directionalLights.value=le.state.directional,rt.directionalLightShadows.value=le.state.directionalShadow,rt.spotLights.value=le.state.spot,rt.spotLightShadows.value=le.state.spotShadow,rt.rectAreaLights.value=le.state.rectArea,rt.ltc_1.value=le.state.rectAreaLTC1,rt.ltc_2.value=le.state.rectAreaLTC2,rt.pointLights.value=le.state.point,rt.pointLightShadows.value=le.state.pointShadow,rt.hemisphereLights.value=le.state.hemi,rt.directionalShadowMap.value=le.state.directionalShadowMap,rt.directionalShadowMatrix.value=le.state.directionalShadowMatrix,rt.spotShadowMap.value=le.state.spotShadowMap,rt.spotLightMatrix.value=le.state.spotLightMatrix,rt.spotLightMap.value=le.state.spotLightMap,rt.pointShadowMap.value=le.state.pointShadowMap,rt.pointShadowMatrix.value=le.state.pointShadowMatrix);const C=lt.getUniforms(),F=Xl.seqWithValue(C.seq,rt);return Q.currentProgram=lt,Q.uniformsList=F,lt}function vl(D,K){const ae=Fe.get(D);ae.outputEncoding=K.outputEncoding,ae.instancing=K.instancing,ae.skinning=K.skinning,ae.morphTargets=K.morphTargets,ae.morphNormals=K.morphNormals,ae.morphColors=K.morphColors,ae.morphTargetsCount=K.morphTargetsCount,ae.numClippingPlanes=K.numClippingPlanes,ae.numIntersection=K.numClipIntersection,ae.vertexAlphas=K.vertexAlphas,ae.vertexTangents=K.vertexTangents,ae.toneMapping=K.toneMapping}function _l(D,K,ae,Q,le){K.isScene!==!0&&(K=J),ge.resetTextureUnits();const He=K.fog,$e=Q.isMeshStandardMaterial?K.environment:null,it=x===null?d.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Vr,nt=(Q.isMeshStandardMaterial?Me:Xe).get(Q.envMap||$e),pt=Q.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,lt=!!Q.normalMap&&!!ae.attributes.tangent,rt=!!ae.morphAttributes.position,C=!!ae.morphAttributes.normal,F=!!ae.morphAttributes.color,j=Q.toneMapped?d.toneMapping:Ni,ue=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,ee=ue!==void 0?ue.length:0,be=Fe.get(Q),Ke=f.state.lights;if(N===!0&&(I===!0||D!==b)){const wt=D===b&&Q.id===y;R.setState(Q,D,wt)}let xe=!1;Q.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Ke.state.version||be.outputEncoding!==it||le.isInstancedMesh&&be.instancing===!1||!le.isInstancedMesh&&be.instancing===!0||le.isSkinnedMesh&&be.skinning===!1||!le.isSkinnedMesh&&be.skinning===!0||be.envMap!==nt||Q.fog===!0&&be.fog!==He||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==R.numPlanes||be.numIntersection!==R.numIntersection)||be.vertexAlphas!==pt||be.vertexTangents!==lt||be.morphTargets!==rt||be.morphNormals!==C||be.morphColors!==F||be.toneMapping!==j||se.isWebGL2===!0&&be.morphTargetsCount!==ee)&&(xe=!0):(xe=!0,be.__version=Q.version);let je=be.currentProgram;xe===!0&&(je=cn(Q,K,le));let Ne=!1,Pe=!1,Re=!1;const ct=je.getUniforms(),mt=be.uniforms;if(pe.useProgram(je.program)&&(Ne=!0,Pe=!0,Re=!0),Q.id!==y&&(y=Q.id,Pe=!0),Ne||b!==D){if(ct.setValue(Y,"projectionMatrix",D.projectionMatrix),se.logarithmicDepthBuffer&&ct.setValue(Y,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),b!==D&&(b=D,Pe=!0,Re=!0),Q.isShaderMaterial||Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshStandardMaterial||Q.envMap){const wt=ct.map.cameraPosition;wt!==void 0&&wt.setValue(Y,G.setFromMatrixPosition(D.matrixWorld))}(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ct.setValue(Y,"isOrthographic",D.isOrthographicCamera===!0),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial||Q.isShadowMaterial||le.isSkinnedMesh)&&ct.setValue(Y,"viewMatrix",D.matrixWorldInverse)}if(le.isSkinnedMesh){ct.setOptional(Y,le,"bindMatrix"),ct.setOptional(Y,le,"bindMatrixInverse");const wt=le.skeleton;wt&&(se.floatVertexTextures?(wt.boneTexture===null&&wt.computeBoneTexture(),ct.setValue(Y,"boneTexture",wt.boneTexture,ge),ct.setValue(Y,"boneTextureSize",wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Vt=ae.morphAttributes;if((Vt.position!==void 0||Vt.normal!==void 0||Vt.color!==void 0&&se.isWebGL2===!0)&&me.update(le,ae,Q,je),(Pe||be.receiveShadow!==le.receiveShadow)&&(be.receiveShadow=le.receiveShadow,ct.setValue(Y,"receiveShadow",le.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(mt.envMap.value=nt,mt.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1),Pe&&(ct.setValue(Y,"toneMappingExposure",d.toneMappingExposure),be.needsLights&&Qc(mt,Re),He&&Q.fog===!0&&tt.refreshFogUniforms(mt,He),tt.refreshMaterialUniforms(mt,Q,z,L,B),Xl.upload(Y,be.uniformsList,mt,ge)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Xl.upload(Y,be.uniformsList,mt,ge),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ct.setValue(Y,"center",le.center),ct.setValue(Y,"modelViewMatrix",le.modelViewMatrix),ct.setValue(Y,"normalMatrix",le.normalMatrix),ct.setValue(Y,"modelMatrix",le.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const wt=Q.uniformsGroups;for(let Rt=0,hn=wt.length;Rt<hn;Rt++)if(se.isWebGL2){const ke=wt[Rt];Ge.update(ke,je),Ge.bind(ke,je)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return je}function Qc(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function Kc(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(D,K,ae){Fe.get(D.texture).__webglTexture=K,Fe.get(D.depthTexture).__webglTexture=ae;const Q=Fe.get(D);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=ae===void 0,Q.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,K){const ae=Fe.get(D);ae.__webglFramebuffer=K,ae.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(D,K=0,ae=0){x=D,v=K,_=ae;let Q=!0,le=null,He=!1,$e=!1;if(D){const nt=Fe.get(D);nt.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),Q=!1):nt.__webglFramebuffer===void 0?ge.setupRenderTarget(D):nt.__hasExternalTextures&&ge.rebindTextures(D,Fe.get(D.texture).__webglTexture,Fe.get(D.depthTexture).__webglTexture);const pt=D.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&($e=!0);const lt=Fe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(le=lt[K],He=!0):se.isWebGL2&&D.samples>0&&ge.useMultisampledRTT(D)===!1?le=Fe.get(D).__webglMultisampledFramebuffer:le=lt,E.copy(D.viewport),S.copy(D.scissor),M=D.scissorTest}else E.copy(T).multiplyScalar(z).floor(),S.copy(P).multiplyScalar(z).floor(),M=O;if(pe.bindFramebuffer(36160,le)&&se.drawBuffers&&Q&&pe.drawBuffers(D,le),pe.viewport(E),pe.scissor(S),pe.setScissorTest(M),He){const nt=Fe.get(D.texture);Y.framebufferTexture2D(36160,36064,34069+K,nt.__webglTexture,ae)}else if($e){const nt=Fe.get(D.texture),pt=K||0;Y.framebufferTextureLayer(36160,36064,nt.__webglTexture,ae||0,pt)}y=-1},this.readRenderTargetPixels=function(D,K,ae,Q,le,He,$e){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=Fe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&$e!==void 0&&(it=it[$e]),it){pe.bindFramebuffer(36160,it);try{const nt=D.texture,pt=nt.format,lt=nt.type;if(pt!==ci&&Le.convert(pt)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=lt===oo&&(fe.has("EXT_color_buffer_half_float")||se.isWebGL2&&fe.has("EXT_color_buffer_float"));if(lt!==Gr&&Le.convert(lt)!==Y.getParameter(35738)&&!(lt===Ar&&(se.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-Q&&ae>=0&&ae<=D.height-le&&Y.readPixels(K,ae,Q,le,Le.convert(pt),Le.convert(lt),He)}finally{const nt=x!==null?Fe.get(x).__webglFramebuffer:null;pe.bindFramebuffer(36160,nt)}}},this.copyFramebufferToTexture=function(D,K,ae=0){const Q=Math.pow(2,-ae),le=Math.floor(K.image.width*Q),He=Math.floor(K.image.height*Q);ge.setTexture2D(K,0),Y.copyTexSubImage2D(3553,ae,0,0,D.x,D.y,le,He),pe.unbindTexture()},this.copyTextureToTexture=function(D,K,ae,Q=0){const le=K.image.width,He=K.image.height,$e=Le.convert(ae.format),it=Le.convert(ae.type);ge.setTexture2D(ae,0),Y.pixelStorei(37440,ae.flipY),Y.pixelStorei(37441,ae.premultiplyAlpha),Y.pixelStorei(3317,ae.unpackAlignment),K.isDataTexture?Y.texSubImage2D(3553,Q,D.x,D.y,le,He,$e,it,K.image.data):K.isCompressedTexture?Y.compressedTexSubImage2D(3553,Q,D.x,D.y,K.mipmaps[0].width,K.mipmaps[0].height,$e,K.mipmaps[0].data):Y.texSubImage2D(3553,Q,D.x,D.y,$e,it,K.image),Q===0&&ae.generateMipmaps&&Y.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(D,K,ae,Q,le=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const He=D.max.x-D.min.x+1,$e=D.max.y-D.min.y+1,it=D.max.z-D.min.z+1,nt=Le.convert(Q.format),pt=Le.convert(Q.type);let lt;if(Q.isData3DTexture)ge.setTexture3D(Q,0),lt=32879;else if(Q.isDataArrayTexture)ge.setTexture2DArray(Q,0),lt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,Q.flipY),Y.pixelStorei(37441,Q.premultiplyAlpha),Y.pixelStorei(3317,Q.unpackAlignment);const rt=Y.getParameter(3314),C=Y.getParameter(32878),F=Y.getParameter(3316),j=Y.getParameter(3315),ue=Y.getParameter(32877),ee=ae.isCompressedTexture?ae.mipmaps[0]:ae.image;Y.pixelStorei(3314,ee.width),Y.pixelStorei(32878,ee.height),Y.pixelStorei(3316,D.min.x),Y.pixelStorei(3315,D.min.y),Y.pixelStorei(32877,D.min.z),ae.isDataTexture||ae.isData3DTexture?Y.texSubImage3D(lt,le,K.x,K.y,K.z,He,$e,it,nt,pt,ee.data):ae.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(lt,le,K.x,K.y,K.z,He,$e,it,nt,ee.data)):Y.texSubImage3D(lt,le,K.x,K.y,K.z,He,$e,it,nt,pt,ee),Y.pixelStorei(3314,rt),Y.pixelStorei(32878,C),Y.pixelStorei(3316,F),Y.pixelStorei(3315,j),Y.pixelStorei(32877,ue),le===0&&Q.generateMipmaps&&Y.generateMipmap(lt),pe.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?ge.setTextureCube(D,0):D.isData3DTexture?ge.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ge.setTexture2DArray(D,0):ge.setTexture2D(D,0),pe.unbindTexture()},this.resetState=function(){v=0,_=0,x=null,pe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class GM extends vm{}GM.prototype.isWebGL1Renderer=!0;let VM=class extends Ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.backgroundBlurriness=this.backgroundBlurriness),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}},_m=class extends hl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};const cp=new te,hp=new te,up=new pn,kh=new tm,zl=new Oc;let HM=class extends Ai{constructor(e=new da,n=new _m){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,a=n.count;r<a;r++)cp.fromBufferAttribute(n,r-1),hp.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=cp.distanceTo(hp);e.setAttribute("lineDistance",new hi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(r),zl.radius+=a,e.ray.intersectsSphere(zl)===!1)return;up.copy(r).invert(),kh.copy(e.ray).applyMatrix4(up);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new te,h=new te,u=new te,f=new te,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const v=Math.max(0,s.start),_=Math.min(g.count,s.start+s.count);for(let x=v,y=_-1;x<y;x+=p){const b=g.getX(x),E=g.getX(x+1);if(l.fromBufferAttribute(m,b),h.fromBufferAttribute(m,E),kh.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||n.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,s.start),_=Math.min(m.count,s.start+s.count);for(let x=v,y=_-1;x<y;x+=p){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),kh.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||n.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};const fp=new te,dp=new te;let WM=class extends HM{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,a=n.count;r<a;r+=2)fp.fromBufferAttribute(n,r),dp.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+fp.distanceTo(dp);e.setAttribute("lineDistance",new hi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};class XM extends WM{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new da;r.setAttribute("position",new hi(n,3)),r.setAttribute("color",new hi(i,3));const a=new _m({vertexColors:!0,toneMapped:!1});super(r,a),this.type="AxesHelper"}setColors(e,n,i){const r=new bt,a=this.geometry.attributes.color.array;return r.set(e),r.toArray(a,0),r.toArray(a,3),r.set(n),r.toArray(a,6),r.toArray(a,9),r.set(i),r.toArray(a,12),r.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qu);function Ii(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function xm(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$a={duration:.5,overwrite:!1,delay:0},Zu,Zt,Et,yi=1e8,rn=1/yi,au=Math.PI*2,qM=au/4,YM=0,ym=Math.sqrt,jM=Math.cos,$M=Math.sin,jt=function(e){return typeof e=="string"},Dt=function(e){return typeof e=="function"},Bi=function(e){return typeof e=="number"},Ju=function(e){return typeof e>"u"},Mi=function(e){return typeof e=="object"},xn=function(e){return e!==!1},Qu=function(){return typeof window<"u"},Gl=function(e){return Dt(e)||jt(e)},bm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},an=Array.isArray,su=/(?:-?\.?\d|\.)+/gi,Mm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ka=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Oh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wm=/[+-]=-?[.\d]+/,Em=/[^,'"\[\]\s]+/gi,ZM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ct,pi,ou,Ku,Gn={},Ql={},Sm,Tm=function(e){return(Ql=Za(e,Gn))&&Sn},ef=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},lo=function(e,n){return!n&&console.warn(e)},Am=function(e,n){return e&&(Gn[e]=n)&&Ql&&(Ql[e]=n)||Gn},co=function(){return 0},JM={suppressEvents:!0,isStart:!0,kill:!1},ql={suppressEvents:!0,kill:!1},QM={suppressEvents:!0},tf={},ar=[],lu={},Cm,Pn={},Nh={},pp=30,Yl=[],nf="",rf=function(e){var n=e[0],i,r;if(Mi(n)||Dt(n)||(e=[e]),!(i=(n._gsap||{}).harness)){for(r=Yl.length;r--&&!Yl[r].targetTest(n););i=Yl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Qm(e[r],i)))||e.splice(r,1);return e},Fr=function(e){return e._gsap||rf(Jn(e))[0]._gsap},Lm=function(e,n,i){return(i=e[n])&&Dt(i)?e[n]():Ju(i)&&e.getAttribute&&e.getAttribute(n)||i},yn=function(e,n){return(e=e.split(",")).forEach(n)||e},Ut=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},za=function(e,n){var i=n.charAt(0),r=parseFloat(n.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},KM=function(e,n){for(var i=n.length,r=0;e.indexOf(n[r])<0&&++r<i;);return r<i},Kl=function(){var e=ar.length,n=ar.slice(0),i,r;for(lu={},ar.length=0,i=0;i<e;i++)r=n[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Rm=function(e,n,i,r){ar.length&&!Zt&&Kl(),e.render(n,i,Zt&&n<0&&(e._initted||e._startAt)),ar.length&&!Zt&&Kl()},Pm=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(Em).length<2?n:jt(e)?e.trim():e},Dm=function(e){return e},Vn=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},ew=function(e){return function(n,i){for(var r in i)r in n||r==="duration"&&e||r==="ease"||(n[r]=i[r])}},Za=function(e,n){for(var i in n)e[i]=n[i];return e},mp=function t(e,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Mi(n[i])?t(e[i]||(e[i]={}),n[i]):n[i]);return e},ec=function(e,n){var i={},r;for(r in e)r in n||(i[r]=e[r]);return i},io=function(e){var n=e.parent||Ct,i=e.keyframes?ew(an(e.keyframes)):Vn;if(xn(e.inherit))for(;n;)i(e,n.vars.defaults),n=n.parent||n._dp;return e},tw=function(e,n){for(var i=e.length,r=i===n.length;r&&i--&&e[i]===n[i];);return i<0},Fm=function(e,n,i,r,a){var s=e[r],o;if(a)for(o=n[a];s&&s[a]>o;)s=s._prev;return s?(n._next=s._next,s._next=n):(n._next=e[i],e[i]=n),n._next?n._next._prev=n:e[r]=n,n._prev=s,n.parent=n._dp=e,n},zc=function(e,n,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var a=n._prev,s=n._next;a?a._next=s:e[i]===n&&(e[i]=s),s?s._prev=a:e[r]===n&&(e[r]=a),n._next=n._prev=n.parent=null},or=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ir=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},nw=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},cu=function(e,n,i,r){return e._startAt&&(Zt?e._startAt.revert(ql):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,r))},iw=function t(e){return!e||e._ts&&t(e.parent)},gp=function(e){return e._repeat?Ja(e._tTime,e=e.duration()+e._rDelay)*e:0},Ja=function(e,n){var i=Math.floor(e=zt(e/n));return e&&i===e?i-1:i},tc=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Gc=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||rn)||0))},Vc=function(e,n){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=zt(i._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),Gc(e),i._dirty||Ir(i,e)),e},Im=function(e,n){var i;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(i=tc(e.rawTime(),n),(!n._dur||ul(0,n.totalDuration(),i)-n._tTime>rn)&&n.render(i,!0)),Ir(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-1e-8}},gi=function(e,n,i,r){return n.parent&&or(n),n._start=zt((Bi(i)?i:i||e!==Ct?Yn(e,i,n):e._time)+n._delay),n._end=zt(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),Fm(e,n,"_first","_last",e._sort?"_start":0),hu(n)||(e._recent=n),r||Im(e,n),e._ts<0&&Vc(e,e._tTime),e},Um=function(e,n){return(Gn.ScrollTrigger||ef("scrollTrigger",n))&&Gn.ScrollTrigger.create(n,e)},km=function(e,n,i,r,a){if(sf(e,n,a),!e._initted)return 1;if(!i&&e._pt&&!Zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Cm!==In.frame)return ar.push(e),e._lazy=[a,r],1},rw=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},hu=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},aw=function(e,n,i,r){var a=e.ratio,s=n<0||!n&&(!e._start&&rw(e)&&!(!e._initted&&hu(e))||(e._ts<0||e._dp._ts<0)&&!hu(e))?0:1,o=e._rDelay,c=0,l,h,u;if(o&&e._repeat&&(c=ul(0,e._tDur,n),h=Ja(c,o),e._yoyo&&h&1&&(s=1-s),h!==Ja(e._tTime,o)&&(a=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==a||Zt||r||e._zTime===rn||!n&&e._zTime){if(!e._initted&&km(e,n,r,i,c))return;for(u=e._zTime,e._zTime=n||(i?rn:0),i||(i=n&&!u),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=c,l=e._pt;l;)l.r(s,l.d),l=l._next;n<0&&cu(e,n,i,!0),e._onUpdate&&!i&&kn(e,"onUpdate"),c&&e._repeat&&!i&&e.parent&&kn(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===s&&(s&&or(e,1),!i&&!Zt&&(kn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},sw=function(e,n,i){var r;if(i>n)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},Qa=function(e,n,i,r){var a=e._repeat,s=zt(n)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=s/e._dur),e._dur=s,e._tDur=a?a<0?1e10:zt(s*(a+1)+e._rDelay*a):s,o>0&&!r&&Vc(e,e._tTime=e._tDur*o),e.parent&&Gc(e),i||Ir(e.parent,e),e},vp=function(e){return e instanceof fn?Ir(e):Qa(e,e._dur)},ow={_start:0,endTime:co,totalDuration:co},Yn=function t(e,n,i){var r=e.labels,a=e._recent||ow,s=e.duration()>=yi?a.endTime(!1):e._dur,o,c,l;return jt(n)&&(isNaN(n)||n in r)?(c=n.charAt(0),l=n.substr(-1)==="%",o=n.indexOf("="),c==="<"||c===">"?(o>=0&&(n=n.replace(/=/,"")),(c==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(o<0?a:i).totalDuration()/100:1)):o<0?(n in r||(r[n]=s),r[n]):(c=parseFloat(n.charAt(o-1)+n.substr(o+1)),l&&i&&(c=c/100*(an(i)?i[0]:i).totalDuration()),o>1?t(e,n.substr(0,o-1),i)+c:s+c)):n==null?s:+n},ro=function(e,n,i){var r=Bi(n[1]),a=(r?2:1)+(e<2?0:1),s=n[a],o,c;if(r&&(s.duration=n[1]),s.parent=i,e){for(o=s,c=i;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=xn(c.vars.inherit)&&c.parent;s.immediateRender=xn(o.immediateRender),e<2?s.runBackwards=1:s.startAt=n[a-1]}return new Bt(n[0],s,n[a+1])},gr=function(e,n){return e||e===0?n(e):n},ul=function(e,n,i){return i<e?e:i>n?n:i},tn=function(e,n){return!jt(e)||!(n=ZM.exec(e))?"":n[1]},lw=function(e,n,i){return gr(i,function(r){return ul(e,n,r)})},uu=[].slice,Om=function(e,n){return e&&Mi(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&Mi(e[0]))&&!e.nodeType&&e!==pi},cw=function(e,n,i){return i===void 0&&(i=[]),e.forEach(function(r){var a;return jt(r)&&!n||Om(r,1)?(a=i).push.apply(a,Jn(r)):i.push(r)})||i},Jn=function(e,n,i){return Et&&!n&&Et.selector?Et.selector(e):jt(e)&&!i&&(ou||!Ka())?uu.call((n||Ku).querySelectorAll(e),0):an(e)?cw(e,i):Om(e)?uu.call(e,0):e?[e]:[]},fu=function(e){return e=Jn(e)[0]||lo("Invalid scope")||{},function(n){var i=e.current||e.nativeElement||e;return Jn(n,i.querySelectorAll?i:i===e?lo("Invalid scope")||Ku.createElement("div"):e)}},Nm=function(e){return e.sort(function(){return .5-Math.random()})},Bm=function(e){if(Dt(e))return e;var n=Mi(e)?e:{each:e},i=Ur(n.ease),r=n.from||0,a=parseFloat(n.base)||0,s={},o=r>0&&r<1,c=isNaN(r)||o,l=n.axis,h=r,u=r;return jt(r)?h=u={center:.5,edges:.5,end:1}[r]||0:!o&&c&&(h=r[0],u=r[1]),function(f,p,g){var d=(g||n).length,m=s[d],v,_,x,y,b,E,S,M,w;if(!m){if(w=n.grid==="auto"?0:(n.grid||[1,yi])[1],!w){for(S=-1e8;S<(S=g[w++].getBoundingClientRect().left)&&w<d;);w<d&&w--}for(m=s[d]=[],v=c?Math.min(w,d)*h-.5:r%w,_=w===yi?0:c?d*u/w-.5:r/w|0,S=0,M=yi,E=0;E<d;E++)x=E%w-v,y=_-(E/w|0),m[E]=b=l?Math.abs(l==="y"?y:x):ym(x*x+y*y),b>S&&(S=b),b<M&&(M=b);r==="random"&&Nm(m),m.max=S-M,m.min=M,m.v=d=(parseFloat(n.amount)||parseFloat(n.each)*(w>d?d-1:l?l==="y"?d/w:w:Math.max(w,d/w))||0)*(r==="edges"?-1:1),m.b=d<0?a-d:a,m.u=tn(n.amount||n.each)||0,i=i&&d<0?$m(i):i}return d=(m[f]-m.min)/m.max||0,zt(m.b+(i?i(d):d)*m.v)+m.u}},du=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=zt(Math.round(parseFloat(i)/e)*e*n);return(r-r%1)/n+(Bi(i)?0:tn(i))}},zm=function(e,n){var i=an(e),r,a;return!i&&Mi(e)&&(r=i=e.radius||yi,e.values?(e=Jn(e.values),(a=!Bi(e[0]))&&(r*=r)):e=du(e.increment)),gr(n,i?Dt(e)?function(s){return a=e(s),Math.abs(a-s)<=r?a:s}:function(s){for(var o=parseFloat(a?s.x:s),c=parseFloat(a?s.y:0),l=yi,h=0,u=e.length,f,p;u--;)a?(f=e[u].x-o,p=e[u].y-c,f=f*f+p*p):f=Math.abs(e[u]-o),f<l&&(l=f,h=u);return h=!r||l<=r?e[h]:s,a||h===s||Bi(s)?h:h+tn(s)}:du(e))},Gm=function(e,n,i,r){return gr(an(e)?!n:i===!0?!!(i=0):!r,function(){return an(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(n-e+i*.99))/i)*i*r)/r})},hw=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(r){return n.reduce(function(a,s){return s(a)},r)}},uw=function(e,n){return function(i){return e(parseFloat(i))+(n||tn(i))}},fw=function(e,n,i){return Hm(e,n,0,1,i)},Vm=function(e,n,i){return gr(i,function(r){return e[~~n(r)]})},dw=function t(e,n,i){var r=n-e;return an(e)?Vm(e,t(0,e.length),n):gr(i,function(a){return(r+(a-e)%r)%r+e})},pw=function t(e,n,i){var r=n-e,a=r*2;return an(e)?Vm(e,t(0,e.length-1),n):gr(i,function(s){return s=(a+(s-e)%a)%a||0,e+(s>r?a-s:s)})},ho=function(e){for(var n=0,i="",r,a,s,o;~(r=e.indexOf("random(",n));)s=e.indexOf(")",r),o=e.charAt(r+7)==="[",a=e.substr(r+7,s-r-7).match(o?Em:su),i+=e.substr(n,r-n)+Gm(o?a:+a[0],o?0:+a[1],+a[2]||1e-5),n=s+1;return i+e.substr(n,e.length-n)},Hm=function(e,n,i,r,a){var s=n-e,o=r-i;return gr(a,function(c){return i+((c-e)/s*o||0)})},mw=function t(e,n,i,r){var a=isNaN(e+n)?0:function(p){return(1-p)*e+p*n};if(!a){var s=jt(e),o={},c,l,h,u,f;if(i===!0&&(r=1)&&(i=null),s)e={p:e},n={p:n};else if(an(e)&&!an(n)){for(h=[],u=e.length,f=u-2,l=1;l<u;l++)h.push(t(e[l-1],e[l]));u--,a=function(g){g*=u;var d=Math.min(f,~~g);return h[d](g-d)},i=n}else r||(e=Za(an(e)?[]:{},e));if(!h){for(c in n)af.call(o,e,c,"get",n[c]);a=function(g){return cf(g,o)||(s?e.p:e)}}}return gr(i,a)},_p=function(e,n,i){var r=e.labels,a=yi,s,o,c;for(s in r)o=r[s]-n,o<0==!!i&&o&&a>(o=Math.abs(o))&&(c=s,a=o);return c},kn=function(e,n,i){var r=e.vars,a=r[n],s=Et,o=e._ctx,c,l,h;if(a)return c=r[n+"Params"],l=r.callbackScope||e,i&&ar.length&&Kl(),o&&(Et=o),h=c?a.apply(l,c):a.call(l),Et=s,h},eo=function(e){return or(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Zt),e.progress()<1&&kn(e,"onInterrupt"),e},Oa,Wm=[],Xm=function(e){if(e)if(e=!e.name&&e.default||e,Qu()||e.headless){var n=e.name,i=Dt(e),r=n&&!i&&e.init?function(){this._props=[]}:e,a={init:co,render:cf,add:af,kill:Pw,modifier:Rw,rawVars:0},s={targetTest:0,get:0,getSetter:lf,aliases:{},register:0};if(Ka(),e!==r){if(Pn[n])return;Vn(r,Vn(ec(e,a),s)),Za(r.prototype,Za(a,ec(e,s))),Pn[r.prop=n]=r,e.targetTest&&(Yl.push(r),tf[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Am(n,r),e.register&&e.register(Sn,r,bn)}else Wm.push(e)},_t=255,to={aqua:[0,_t,_t],lime:[0,_t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_t],navy:[0,0,128],white:[_t,_t,_t],olive:[128,128,0],yellow:[_t,_t,0],orange:[_t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_t,0,0],pink:[_t,192,203],cyan:[0,_t,_t],transparent:[_t,_t,_t,0]},Bh=function(e,n,i){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(i-n)*e*6:e<.5?i:e*3<2?n+(i-n)*(2/3-e)*6:n)*_t+.5|0},qm=function(e,n,i){var r=e?Bi(e)?[e>>16,e>>8&_t,e&_t]:0:to.black,a,s,o,c,l,h,u,f,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),to[e])r=to[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+a+a+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&_t,r&_t,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&_t,e&_t]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(su),!n)c=+r[0]%360/360,l=+r[1]/100,h=+r[2]/100,s=h<=.5?h*(l+1):h+l-h*l,a=h*2-s,r.length>3&&(r[3]*=1),r[0]=Bh(c+1/3,a,s),r[1]=Bh(c,a,s),r[2]=Bh(c-1/3,a,s);else if(~e.indexOf("="))return r=e.match(Mm),i&&r.length<4&&(r[3]=1),r}else r=e.match(su)||to.transparent;r=r.map(Number)}return n&&!g&&(a=r[0]/_t,s=r[1]/_t,o=r[2]/_t,u=Math.max(a,s,o),f=Math.min(a,s,o),h=(u+f)/2,u===f?c=l=0:(p=u-f,l=h>.5?p/(2-u-f):p/(u+f),c=u===a?(s-o)/p+(s<o?6:0):u===s?(o-a)/p+2:(a-s)/p+4,c*=60),r[0]=~~(c+.5),r[1]=~~(l*100+.5),r[2]=~~(h*100+.5)),i&&r.length<4&&(r[3]=1),r},Ym=function(e){var n=[],i=[],r=-1;return e.split(sr).forEach(function(a){var s=a.match(ka)||[];n.push.apply(n,s),i.push(r+=s.length+1)}),n.c=i,n},xp=function(e,n,i){var r="",a=(e+r).match(sr),s=n?"hsla(":"rgba(",o=0,c,l,h,u;if(!a)return e;if(a=a.map(function(f){return(f=qm(f,n,1))&&s+(n?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(h=Ym(e),c=i.c,c.join(r)!==h.c.join(r)))for(l=e.replace(sr,"1").split(ka),u=l.length-1;o<u;o++)r+=l[o]+(~c.indexOf(o)?a.shift()||s+"0,0,0,0)":(h.length?h:a.length?a:i).shift());if(!l)for(l=e.split(sr),u=l.length-1;o<u;o++)r+=l[o]+a[o];return r+l[u]},sr=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in to)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),gw=/hsl[a]?\(/,jm=function(e){var n=e.join(" "),i;if(sr.lastIndex=0,sr.test(n))return i=gw.test(n),e[1]=xp(e[1],i),e[0]=xp(e[0],i,Ym(e[1])),!0},uo,In=function(){var t=Date.now,e=500,n=33,i=t(),r=i,a=1e3/240,s=a,o=[],c,l,h,u,f,p,g=function d(m){var v=t()-r,_=m===!0,x,y,b,E;if((v>e||v<0)&&(i+=v-n),r+=v,b=r-i,x=b-s,(x>0||_)&&(E=++u.frame,f=b-u.time*1e3,u.time=b=b/1e3,s+=x+(x>=a?4:a-x),y=1),_||(c=l(d)),y)for(p=0;p<o.length;p++)o[p](b,f,E,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Sm&&(!ou&&Qu()&&(pi=ou=window,Ku=pi.document||{},Gn.gsap=Sn,(pi.gsapVersions||(pi.gsapVersions=[])).push(Sn.version),Tm(Ql||pi.GreenSockGlobals||!pi.gsap&&pi||{}),Wm.forEach(Xm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(m){return setTimeout(m,s-u.time*1e3+1|0)},uo=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),uo=0,l=co},lagSmoothing:function(m,v){e=m||1/0,n=Math.min(v||33,e)},fps:function(m){a=1e3/(m||240),s=u.time*1e3+a},add:function(m,v,_){var x=v?function(y,b,E,S){m(y,b,E,S),u.remove(x)}:m;return u.remove(m),o[_?"unshift":"push"](x),Ka(),x},remove:function(m,v){~(v=o.indexOf(m))&&o.splice(v,1)&&p>=v&&p--},_listeners:o},u}(),Ka=function(){return!uo&&In.wake()},ht={},vw=/^[\d.\-M][\d.\-,\s]/,_w=/["']/g,xw=function(e){for(var n={},i=e.substr(1,e.length-3).split(":"),r=i[0],a=1,s=i.length,o,c,l;a<s;a++)c=i[a],o=a!==s-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),n[r]=isNaN(l)?l.replace(_w,"").trim():+l,r=c.substr(o+1).trim();return n},yw=function(e){var n=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",n);return e.substring(n,~r&&r<i?e.indexOf(")",i+1):i)},bw=function(e){var n=(e+"").split("("),i=ht[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[xw(n[1])]:yw(e).split(",").map(Pm)):ht._CE&&vw.test(e)?ht._CE("",e):i},$m=function(e){return function(n){return 1-e(1-n)}},Zm=function t(e,n){for(var i=e._first,r;i;)i instanceof fn?t(i,n):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==n&&(i.timeline?t(i.timeline,n):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=n)),i=i._next},Ur=function(e,n){return e&&(Dt(e)?e:ht[e]||bw(e))||n},pa=function(e,n,i,r){i===void 0&&(i=function(c){return 1-n(1-c)}),r===void 0&&(r=function(c){return c<.5?n(c*2)/2:1-n((1-c)*2)/2});var a={easeIn:n,easeOut:i,easeInOut:r},s;return yn(e,function(o){ht[o]=Gn[o]=a,ht[s=o.toLowerCase()]=i;for(var c in a)ht[s+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ht[o+"."+c]=a[c]}),a},Jm=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},zh=function t(e,n,i){var r=n>=1?n:1,a=(i||(e?.3:.45))/(n<1?n:1),s=a/au*(Math.asin(1/r)||0),o=function(h){return h===1?1:r*Math.pow(2,-10*h)*$M((h-s)*a)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:Jm(o);return a=au/a,c.config=function(l,h){return t(e,l,h)},c},Gh=function t(e,n){n===void 0&&(n=1.70158);var i=function(s){return s?--s*s*((n+1)*s+n)+1:0},r=e==="out"?i:e==="in"?function(a){return 1-i(1-a)}:Jm(i);return r.config=function(a){return t(e,a)},r};yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;pa(t+",Power"+(n-1),e?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;pa("Elastic",zh("in"),zh("out"),zh());(function(t,e){var n=1/e,i=2*n,r=2.5*n,a=function(o){return o<n?t*o*o:o<i?t*Math.pow(o-1.5/e,2)+.75:o<r?t*(o-=2.25/e)*o+.9375:t*Math.pow(o-2.625/e,2)+.984375};pa("Bounce",function(s){return 1-a(1-s)},a)})(7.5625,2.75);pa("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});pa("Circ",function(t){return-(ym(1-t*t)-1)});pa("Sine",function(t){return t===1?1:-jM(t*qM)+1});pa("Back",Gh("in"),Gh("out"),Gh());ht.SteppedEase=ht.steps=Gn.SteppedEase={config:function(e,n){e===void 0&&(e=1);var i=1/e,r=e+(n?0:1),a=n?1:0,s=1-rn;return function(o){return((r*ul(0,s,o)|0)+a)*i}}};$a.ease=ht["quad.out"];yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return nf+=t+","+t+"Params,"});var Qm=function(e,n){this.id=YM++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:Lm,this.set=n?n.getSetter:lf},fo=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Qa(this,+n.duration,1,1),this.data=n.data,Et&&(this._ctx=Et,Et.data.push(this)),uo||In.wake()}var e=t.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Qa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ka(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Vc(this,i),!a._dp||a.parent||Im(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&gi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===rn||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Rm(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+gp(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+gp(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,r):this._repeat?Ja(this._tTime,a)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===i)return this;var a=this.parent&&this._ts?tc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-1e-8?0:this._rts,this.totalTime(ul(-Math.abs(this._delay),this._tDur,a),r!==!1),Gc(this),nw(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ka(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==rn&&(this._tTime-=rn)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&gi(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(xn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?tc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=QM);var r=Zt;return Zt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Zt=r,this},e.globalTime=function(i){for(var r=this,a=arguments.length?i:r.rawTime();r;)a=r._start+a/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):a},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,vp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,vp(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Yn(this,i),xn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,xn(r)),this._dur||(this._zTime=-1e-8),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=r&&a<this.endTime(!0)-rn)},e.eventCallback=function(i,r,a){var s=this.vars;return arguments.length>1?(r?(s[i]=r,a&&(s[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=r)):delete s[i],this):s[i]},e.then=function(i){var r=this;return new Promise(function(a){var s=Dt(i)?i:Dm,o=function(){var l=r.then;r.then=null,Dt(s)&&(s=s(r))&&(s.then||s===r)&&(r.then=l),a(s),r.then=l};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){eo(this)},t}();Vn(fo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var fn=function(t){xm(e,t);function e(i,r){var a;return i===void 0&&(i={}),a=t.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=xn(i.sortChildren),Ct&&gi(i.parent||Ct,Ii(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&Um(Ii(a),i.scrollTrigger),a}var n=e.prototype;return n.to=function(r,a,s){return ro(0,arguments,this),this},n.from=function(r,a,s){return ro(1,arguments,this),this},n.fromTo=function(r,a,s,o){return ro(2,arguments,this),this},n.set=function(r,a,s){return a.duration=0,a.parent=this,io(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Bt(r,a,Yn(this,s),1),this},n.call=function(r,a,s){return gi(this,Bt.delayedCall(0,r,a),s)},n.staggerTo=function(r,a,s,o,c,l,h){return s.duration=a,s.stagger=s.stagger||o,s.onComplete=l,s.onCompleteParams=h,s.parent=this,new Bt(r,s,Yn(this,c)),this},n.staggerFrom=function(r,a,s,o,c,l,h){return s.runBackwards=1,io(s).immediateRender=xn(s.immediateRender),this.staggerTo(r,a,s,o,c,l,h)},n.staggerFromTo=function(r,a,s,o,c,l,h,u){return o.startAt=s,io(o).immediateRender=xn(o.immediateRender),this.staggerTo(r,a,o,c,l,h,u)},n.render=function(r,a,s){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=r<=0?0:zt(r),u=this._zTime<0!=r<0&&(this._initted||!l),f,p,g,d,m,v,_,x,y,b,E,S;if(this!==Ct&&h>c&&r>=0&&(h=c),h!==this._tTime||s||u){if(o!==this._time&&l&&(h+=this._time-o,r+=this._time-o),f=h,y=this._start,x=this._ts,v=!x,u&&(l||(o=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,m=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,a,s);if(f=zt(h%m),h===c?(d=this._repeat,f=l):(b=zt(h/m),d=~~b,d&&d===b&&(f=l,d--),f>l&&(f=l)),b=Ja(this._tTime,m),!o&&this._tTime&&b!==d&&this._tTime-b*m-this._dur<=0&&(b=d),E&&d&1&&(f=l-f,S=1),d!==b&&!this._lock){var M=E&&b&1,w=M===(E&&d&1);if(d<b&&(M=!M),o=M?0:h%l?l:h,this._lock=1,this.render(o||(S?0:zt(d*m)),a,!l)._lock=0,this._tTime=h,!a&&this.parent&&kn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),o&&o!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,w&&(this._lock=2,o=M?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;Zm(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=sw(this,zt(o),zt(f)),_&&(h-=f-(f=_._start))),this._tTime=h,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&f&&!a&&!d&&(kn(this,"onStart"),this._tTime!==h))return this;if(f>=o&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&_!==p){if(p.parent!==this)return this.render(r,a,s);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,a,s),f!==this._time||!this._ts&&!v){_=0,g&&(h+=this._zTime=-1e-8);break}}p=g}else{p=this._last;for(var L=r<0?r:f;p;){if(g=p._prev,(p._act||L<=p._end)&&p._ts&&_!==p){if(p.parent!==this)return this.render(r,a,s);if(p.render(p._ts>0?(L-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(L-p._start)*p._ts,a,s||Zt&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!v){_=0,g&&(h+=this._zTime=L?-1e-8:rn);break}}p=g}}if(_&&!a&&(this.pause(),_.render(f>=o?0:-1e-8)._zTime=f>=o?1:-1,this._ts))return this._start=y,Gc(this),this.render(r,a,s);this._onUpdate&&!a&&kn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&or(this,1),!a&&!(r<0&&!o)&&(h||o||!c)&&(kn(this,h===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,a){var s=this;if(Bi(a)||(a=Yn(this,a,r)),!(r instanceof fo)){if(an(r))return r.forEach(function(o){return s.add(o,a)}),this;if(jt(r))return this.addLabel(r,a);if(Dt(r))r=Bt.delayedCall(0,r);else return this}return this!==r?gi(this,r,a):this},n.getChildren=function(r,a,s,o){r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=!0),o===void 0&&(o=-1e8);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Bt?a&&c.push(l):(s&&c.push(l),r&&c.push.apply(c,l.getChildren(!0,a,s)))),l=l._next;return c},n.getById=function(r){for(var a=this.getChildren(1,1,1),s=a.length;s--;)if(a[s].vars.id===r)return a[s]},n.remove=function(r){return jt(r)?this.removeLabel(r):Dt(r)?this.killTweensOf(r):(r.parent===this&&zc(this,r),r===this._recent&&(this._recent=this._last),Ir(this))},n.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(In.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},n.addLabel=function(r,a){return this.labels[r]=Yn(this,a),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,a,s){var o=Bt.delayedCall(0,a||co,s);return o.data="isPause",this._hasPause=1,gi(this,o,Yn(this,r))},n.removePause=function(r){var a=this._first;for(r=Yn(this,r);a;)a._start===r&&a.data==="isPause"&&or(a),a=a._next},n.killTweensOf=function(r,a,s){for(var o=this.getTweensOf(r,s),c=o.length;c--;)tr!==o[c]&&o[c].kill(r,a);return this},n.getTweensOf=function(r,a){for(var s=[],o=Jn(r),c=this._first,l=Bi(a),h;c;)c instanceof Bt?KM(c._targets,o)&&(l?(!tr||c._initted&&c._ts)&&c.globalTime(0)<=a&&c.globalTime(c.totalDuration())>a:!a||c.isActive())&&s.push(c):(h=c.getTweensOf(o,a)).length&&s.push.apply(s,h),c=c._next;return s},n.tweenTo=function(r,a){a=a||{};var s=this,o=Yn(s,r),c=a,l=c.startAt,h=c.onStart,u=c.onStartParams,f=c.immediateRender,p,g=Bt.to(s,Vn({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:a.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale())||rn,onStart:function(){if(s.pause(),!p){var m=a.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale());g._dur!==m&&Qa(g,m,0,1).render(g._time,!0,!0),p=1}h&&h.apply(g,u||[])}},a));return f?g.render(0):g},n.tweenFromTo=function(r,a,s){return this.tweenTo(a,Vn({startAt:{time:Yn(this,r)}},s))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),_p(this,Yn(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),_p(this,Yn(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+rn)},n.shiftChildren=function(r,a,s){s===void 0&&(s=0);for(var o=this._first,c=this.labels,l;o;)o._start>=s&&(o._start+=r,o._end+=r),o=o._next;if(a)for(l in c)c[l]>=s&&(c[l]+=r);return Ir(this)},n.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return t.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,s;a;)s=a._next,this.remove(a),a=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ir(this)},n.totalDuration=function(r){var a=0,s=this,o=s._last,c=yi,l,h,u;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(u=s.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&s._sort&&o._ts&&!s._lock?(s._lock=1,gi(s,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(a-=h,(!u&&!s._dp||u&&u.smoothChildTiming)&&(s._start+=h/s._ts,s._time-=h,s._tTime-=h),s.shiftChildren(-h,!1,-1/0),c=0),o._end>a&&o._ts&&(a=o._end),o=l;Qa(s,s===Ct&&s._time>a?s._time:a,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(r){if(Ct._ts&&(Rm(Ct,tc(r,Ct)),Cm=In.frame),In.frame>=pp){pp+=Bn.autoSleep||120;var a=Ct._first;if((!a||!a._ts)&&Bn.autoSleep&&In._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||In.sleep()}}},e}(fo);Vn(fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Mw=function(e,n,i,r,a,s,o){var c=new bn(this._pt,e,n,0,1,rg,null,a),l=0,h=0,u,f,p,g,d,m,v,_;for(c.b=i,c.e=r,i+="",r+="",(v=~r.indexOf("random("))&&(r=ho(r)),s&&(_=[i,r],s(_,e,n),i=_[0],r=_[1]),f=i.match(Oh)||[];u=Oh.exec(r);)g=u[0],d=r.substring(l,u.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,c._pt={_next:c._pt,p:d||h===1?d:",",s:m,c:g.charAt(1)==="="?za(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},l=Oh.lastIndex);return c.c=l<r.length?r.substring(l,r.length):"",c.fp=o,(wm.test(r)||v)&&(c.e=0),this._pt=c,c},af=function(e,n,i,r,a,s,o,c,l,h){Dt(r)&&(r=r(a||0,e,s));var u=e[n],f=i!=="get"?i:Dt(u)?l?e[n.indexOf("set")||!Dt(e["get"+n.substr(3)])?n:"get"+n.substr(3)](l):e[n]():u,p=Dt(u)?l?Aw:ng:of,g;if(jt(r)&&(~r.indexOf("random(")&&(r=ho(r)),r.charAt(1)==="="&&(g=za(f,r)+(tn(f)||0),(g||g===0)&&(r=g))),!h||f!==r||pu)return!isNaN(f*r)&&r!==""?(g=new bn(this._pt,e,n,+f||0,r-(f||0),typeof u=="boolean"?Lw:ig,0,p),l&&(g.fp=l),o&&g.modifier(o,this,e),this._pt=g):(!u&&!(n in e)&&ef(n,r),Mw.call(this,e,n,f,r,p,c||Bn.stringFilter,l))},ww=function(e,n,i,r,a){if(Dt(e)&&(e=ao(e,a,n,i,r)),!Mi(e)||e.style&&e.nodeType||an(e)||bm(e))return jt(e)?ao(e,a,n,i,r):e;var s={},o;for(o in e)s[o]=ao(e[o],a,n,i,r);return s},Km=function(e,n,i,r,a,s){var o,c,l,h;if(Pn[e]&&(o=new Pn[e]).init(a,o.rawVars?n[e]:ww(n[e],r,a,s,i),i,r,s)!==!1&&(i._pt=c=new bn(i._pt,a,e,0,1,o.render,o,0,o.priority),i!==Oa))for(l=i._ptLookup[i._targets.indexOf(a)],h=o._props.length;h--;)l[o._props[h]]=c;return o},tr,pu,sf=function t(e,n,i){var r=e.vars,a=r.ease,s=r.startAt,o=r.immediateRender,c=r.lazy,l=r.onUpdate,h=r.runBackwards,u=r.yoyoEase,f=r.keyframes,p=r.autoRevert,g=e._dur,d=e._startAt,m=e._targets,v=e.parent,_=v&&v.data==="nested"?v.vars.targets:m,x=e._overwrite==="auto"&&!Zu,y=e.timeline,b,E,S,M,w,L,z,V,A,T,P,O,H;if(y&&(!f||!a)&&(a="none"),e._ease=Ur(a,$a.ease),e._yEase=u?$m(Ur(u===!0?a:u,$a.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!y&&!!r.runBackwards,!y||f&&!r.stagger){if(V=m[0]?Fr(m[0]).harness:0,O=V&&r[V.prop],b=ec(r,tf),d&&(d._zTime<0&&d.progress(1),n<0&&h&&o&&!p?d.render(-1,!0):d.revert(h&&g?ql:JM),d._lazy=0),s){if(or(e._startAt=Bt.set(m,Vn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!d&&xn(c),startAt:null,delay:0,onUpdate:l&&function(){return kn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Zt||!o&&!p)&&e._startAt.revert(ql),o&&g&&n<=0&&i<=0){n&&(e._zTime=n);return}}else if(h&&g&&!d){if(n&&(o=!1),S=Vn({overwrite:!1,data:"isFromStart",lazy:o&&!d&&xn(c),immediateRender:o,stagger:0,parent:v},b),O&&(S[V.prop]=O),or(e._startAt=Bt.set(m,S)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Zt?e._startAt.revert(ql):e._startAt.render(-1,!0)),e._zTime=n,!o)t(e._startAt,rn,rn);else if(!n)return}for(e._pt=e._ptCache=0,c=g&&xn(c)||c&&!g,E=0;E<m.length;E++){if(w=m[E],z=w._gsap||rf(m)[E]._gsap,e._ptLookup[E]=T={},lu[z.id]&&ar.length&&Kl(),P=_===m?E:_.indexOf(w),V&&(A=new V).init(w,O||b,e,P,_)!==!1&&(e._pt=M=new bn(e._pt,w,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(N){T[N]=M}),A.priority&&(L=1)),!V||O)for(S in b)Pn[S]&&(A=Km(S,b,e,P,w,_))?A.priority&&(L=1):T[S]=M=af.call(e,w,S,"get",b[S],P,_,0,r.stringFilter);e._op&&e._op[E]&&e.kill(w,e._op[E]),x&&e._pt&&(tr=e,Ct.killTweensOf(w,T,e.globalTime(n)),H=!e.parent,tr=0),e._pt&&c&&(lu[z.id]=1)}L&&ag(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!H,f&&n<=0&&y.render(yi,!0,!0)},Ew=function(e,n,i,r,a,s,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[n],h,u,f,p;if(!l)for(l=e._ptCache[n]=[],f=e._ptLookup,p=e._targets.length;p--;){if(h=f[p][n],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==n&&h.fp!==n;)h=h._next;if(!h)return pu=1,e.vars[n]="+=0",sf(e,o),pu=0,c?lo(n+" not eligible for reset"):1;l.push(h)}for(p=l.length;p--;)u=l[p],h=u._pt||u,h.s=(r||r===0)&&!a?r:h.s+(r||0)+s*h.c,h.c=i-h.s,u.e&&(u.e=Ut(i)+tn(u.e)),u.b&&(u.b=h.s+tn(u.b))},Sw=function(e,n){var i=e[0]?Fr(e[0]).harness:0,r=i&&i.aliases,a,s,o,c;if(!r)return n;a=Za({},n);for(s in r)if(s in a)for(c=r[s].split(","),o=c.length;o--;)a[c[o]]=a[s];return a},Tw=function(e,n,i,r){var a=n.ease||r||"power1.inOut",s,o;if(an(n))o=i[e]||(i[e]=[]),n.forEach(function(c,l){return o.push({t:l/(n.length-1)*100,v:c,e:a})});else for(s in n)o=i[s]||(i[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:n[s],e:a})},ao=function(e,n,i,r,a){return Dt(e)?e.call(n,i,r,a):jt(e)&&~e.indexOf("random(")?ho(e):e},eg=nf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",tg={};yn(eg+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return tg[t]=1});var Bt=function(t){xm(e,t);function e(i,r,a,s){var o;typeof r=="number"&&(a.duration=r,r=a,a=null),o=t.call(this,s?r:io(r))||this;var c=o.vars,l=c.duration,h=c.delay,u=c.immediateRender,f=c.stagger,p=c.overwrite,g=c.keyframes,d=c.defaults,m=c.scrollTrigger,v=c.yoyoEase,_=r.parent||Ct,x=(an(i)||bm(i)?Bi(i[0]):"length"in r)?[i]:Jn(i),y,b,E,S,M,w,L,z;if(o._targets=x.length?rf(x):lo("GSAP target "+i+" not found. https://gsap.com",!Bn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||f||Gl(l)||Gl(h)){if(r=o.vars,y=o.timeline=new fn({data:"nested",defaults:d||{},targets:_&&_.data==="nested"?_.vars.targets:x}),y.kill(),y.parent=y._dp=Ii(o),y._start=0,f||Gl(l)||Gl(h)){if(S=x.length,L=f&&Bm(f),Mi(f))for(M in f)~eg.indexOf(M)&&(z||(z={}),z[M]=f[M]);for(b=0;b<S;b++)E=ec(r,tg),E.stagger=0,v&&(E.yoyoEase=v),z&&Za(E,z),w=x[b],E.duration=+ao(l,Ii(o),b,w,x),E.delay=(+ao(h,Ii(o),b,w,x)||0)-o._delay,!f&&S===1&&E.delay&&(o._delay=h=E.delay,o._start+=h,E.delay=0),y.to(w,E,L?L(b,w,x):0),y._ease=ht.none;y.duration()?l=h=0:o.timeline=0}else if(g){io(Vn(y.vars.defaults,{ease:"none"})),y._ease=Ur(g.ease||r.ease||"none");var V=0,A,T,P;if(an(g))g.forEach(function(O){return y.to(x,O,">")}),y.duration();else{E={};for(M in g)M==="ease"||M==="easeEach"||Tw(M,g[M],E,g.easeEach);for(M in E)for(A=E[M].sort(function(O,H){return O.t-H.t}),V=0,b=0;b<A.length;b++)T=A[b],P={ease:T.e,duration:(T.t-(b?A[b-1].t:0))/100*l},P[M]=T.v,y.to(x,P,V),V+=P.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||o.duration(l=y.duration())}else o.timeline=0;return p===!0&&!Zu&&(tr=Ii(o),Ct.killTweensOf(x),tr=0),gi(_,Ii(o),a),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(u||!l&&!g&&o._start===zt(_._time)&&xn(u)&&iw(Ii(o))&&_.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-h)||0)),m&&Um(Ii(o),m),o}var n=e.prototype;return n.render=function(r,a,s){var o=this._time,c=this._tDur,l=this._dur,h=r<0,u=r>c-rn&&!h?c:r<rn?0:r,f,p,g,d,m,v,_,x,y;if(!l)aw(this,r,a,s);else if(u!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,x=this.timeline,this._repeat){if(d=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(d*100+r,a,s);if(f=zt(u%d),u===c?(g=this._repeat,f=l):(m=zt(u/d),g=~~m,g&&g===m?(f=l,g--):f>l&&(f=l)),v=this._yoyo&&g&1,v&&(y=this._yEase,f=l-f),m=Ja(this._tTime,d),f===o&&!s&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(x&&this._yEase&&Zm(x,v),this.vars.repeatRefresh&&!v&&!this._lock&&f!==d&&this._initted&&(this._lock=s=1,this.render(zt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(km(this,h?r:f,s,a,u))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(r,a,s)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(y||this._ease)(f/l),this._from&&(this.ratio=_=1-_),f&&!o&&!a&&!g&&(kn(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(_,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),a,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(h&&cu(this,r,a,s),kn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!a&&this.parent&&kn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&cu(this,r,!0,!0),(r||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&or(this,1),!a&&!(h&&!o)&&(u||o||v)&&(kn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},n.resetTo=function(r,a,s,o,c){uo||In.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||sf(this,l),h=this._ease(l/this._dur),Ew(this,r,a,s,o,h,l,c)?this.resetTo(r,a,s,o,1):(Vc(this,0),this.parent||Fm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?eo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Zt),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,tr&&tr.vars.overwrite!==!0)._first||eo(this),this.parent&&s!==this.timeline.totalDuration()&&Qa(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,c=r?Jn(r):o,l=this._ptLookup,h=this._pt,u,f,p,g,d,m,v;if((!a||a==="all")&&tw(o,c))return a==="all"&&(this._pt=0),eo(this);for(u=this._op=this._op||[],a!=="all"&&(jt(a)&&(d={},yn(a,function(_){return d[_]=1}),a=d),a=Sw(o,a)),v=o.length;v--;)if(~c.indexOf(o[v])){f=l[v],a==="all"?(u[v]=a,g=f,p={}):(p=u[v]=u[v]||{},g=a);for(d in g)m=f&&f[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&zc(this,m,"_pt"),delete f[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&h&&eo(this),this},e.to=function(r,a){return new e(r,a,arguments[2])},e.from=function(r,a){return ro(1,arguments)},e.delayedCall=function(r,a,s,o){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(r,a,s){return ro(2,arguments)},e.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(r,a)},e.killTweensOf=function(r,a,s){return Ct.killTweensOf(r,a,s)},e}(fo);Vn(Bt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});yn("staggerTo,staggerFrom,staggerFromTo",function(t){Bt[t]=function(){var e=new fn,n=uu.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var of=function(e,n,i){return e[n]=i},ng=function(e,n,i){return e[n](i)},Aw=function(e,n,i,r){return e[n](r.fp,i)},Cw=function(e,n,i){return e.setAttribute(n,i)},lf=function(e,n){return Dt(e[n])?ng:Ju(e[n])&&e.setAttribute?Cw:of},ig=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},Lw=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},rg=function(e,n){var i=n._pt,r="";if(!e&&n.b)r=n.b;else if(e===1&&n.e)r=n.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=n.c}n.set(n.t,n.p,r,n)},cf=function(e,n){for(var i=n._pt;i;)i.r(e,i.d),i=i._next},Rw=function(e,n,i,r){for(var a=this._pt,s;a;)s=a._next,a.p===r&&a.modifier(e,n,i),a=s},Pw=function(e){for(var n=this._pt,i,r;n;)r=n._next,n.p===e&&!n.op||n.op===e?zc(this,n,"_pt"):n.dep||(i=1),n=r;return!i},Dw=function(e,n,i,r){r.mSet(e,n,r.m.call(r.tween,i,r.mt),r)},ag=function(e){for(var n=e._pt,i,r,a,s;n;){for(i=n._next,r=a;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:s)?n._prev._next=n:a=n,(n._next=r)?r._prev=n:s=n,n=i}e._pt=a},bn=function(){function t(n,i,r,a,s,o,c,l,h){this.t=i,this.s=a,this.c=s,this.p=r,this.r=o||ig,this.d=c||this,this.set=l||of,this.pr=h||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(i,r,a){this.mSet=this.mSet||this.set,this.set=Dw,this.m=i,this.mt=a,this.tween=r},t}();yn(nf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return tf[t]=1});Gn.TweenMax=Gn.TweenLite=Bt;Gn.TimelineLite=Gn.TimelineMax=fn;Ct=new fn({sortChildren:!1,defaults:$a,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Bn.stringFilter=jm;var kr=[],jl={},Fw=[],yp=0,Iw=0,Vh=function(e){return(jl[e]||Fw).map(function(n){return n()})},mu=function(){var e=Date.now(),n=[];e-yp>2&&(Vh("matchMediaInit"),kr.forEach(function(i){var r=i.queries,a=i.conditions,s,o,c,l;for(o in r)s=pi.matchMedia(r[o]).matches,s&&(c=1),s!==a[o]&&(a[o]=s,l=1);l&&(i.revert(),c&&n.push(i))}),Vh("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),yp=e,Vh("matchMedia"))},sg=function(){function t(n,i){this.selector=i&&fu(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Iw++,n&&this.add(n)}var e=t.prototype;return e.add=function(i,r,a){Dt(i)&&(a=r,r=i,i=Dt);var s=this,o=function(){var l=Et,h=s.selector,u;return l&&l!==s&&l.data.push(s),a&&(s.selector=fu(a)),Et=s,u=r.apply(s,arguments),Dt(u)&&s._r.push(u),Et=l,s.selector=h,s.isReverted=!1,u};return s.last=o,i===Dt?o(s,function(c){return s.add(null,c)}):i?s[i]=o:o},e.ignore=function(i){var r=Et;Et=null,i(this),Et=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof t?i.push.apply(i,r.getTweens()):r instanceof Bt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var a=this;if(i?function(){for(var o=a.getTweens(),c=a.data.length,l;c--;)l=a.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),c=a.data.length;c--;)l=a.data[c],l instanceof fn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Bt)&&l.revert&&l.revert(i);a._r.forEach(function(h){return h(i,a)}),a.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var s=kr.length;s--;)kr[s].id===this.id&&kr.splice(s,1)},e.revert=function(i){this.kill(i||{})},t}(),Uw=function(){function t(n){this.contexts=[],this.scope=n,Et&&Et.data.push(this)}var e=t.prototype;return e.add=function(i,r,a){Mi(i)||(i={matches:i});var s=new sg(0,a||this.scope),o=s.conditions={},c,l,h;Et&&!s.selector&&(s.selector=Et.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=i;for(l in i)l==="all"?h=1:(c=pi.matchMedia(i[l]),c&&(kr.indexOf(s)<0&&kr.push(s),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(mu):c.addEventListener("change",mu)));return h&&r(s,function(u){return s.add(null,u)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},t}(),nc={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];n.forEach(function(r){return Xm(r)})},timeline:function(e){return new fn(e)},getTweensOf:function(e,n){return Ct.getTweensOf(e,n)},getProperty:function(e,n,i,r){jt(e)&&(e=Jn(e)[0]);var a=Fr(e||{}).get,s=i?Dm:Pm;return i==="native"&&(i=""),e&&(n?s((Pn[n]&&Pn[n].get||a)(e,n,i,r)):function(o,c,l){return s((Pn[o]&&Pn[o].get||a)(e,o,c,l))})},quickSetter:function(e,n,i){if(e=Jn(e),e.length>1){var r=e.map(function(h){return Sn.quickSetter(h,n,i)}),a=r.length;return function(h){for(var u=a;u--;)r[u](h)}}e=e[0]||{};var s=Pn[n],o=Fr(e),c=o.harness&&(o.harness.aliases||{})[n]||n,l=s?function(h){var u=new s;Oa._pt=0,u.init(e,i?h+i:h,Oa,0,[e]),u.render(1,u),Oa._pt&&cf(1,Oa)}:o.set(e,c);return s?l:function(h){return l(e,c,i?h+i:h,o,1)}},quickTo:function(e,n,i){var r,a=Sn.to(e,Vn((r={},r[n]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),s=function(c,l,h){return a.resetTo(n,c,l,h)};return s.tween=a,s},isTweening:function(e){return Ct.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ur(e.ease,$a.ease)),mp($a,e||{})},config:function(e){return mp(Bn,e||{})},registerEffect:function(e){var n=e.name,i=e.effect,r=e.plugins,a=e.defaults,s=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Pn[o]&&!Gn[o]&&lo(n+" effect requires "+o+" plugin.")}),Nh[n]=function(o,c,l){return i(Jn(o),Vn(c||{},a),l)},s&&(fn.prototype[n]=function(o,c,l){return this.add(Nh[n](o,Mi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,n){ht[e]=Ur(n)},parseEase:function(e,n){return arguments.length?Ur(e,n):ht},getById:function(e){return Ct.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var i=new fn(e),r,a;for(i.smoothChildTiming=xn(e.smoothChildTiming),Ct.remove(i),i._dp=0,i._time=i._tTime=Ct._time,r=Ct._first;r;)a=r._next,(n||!(!r._dur&&r instanceof Bt&&r.vars.onComplete===r._targets[0]))&&gi(i,r,r._start-r._delay),r=a;return gi(Ct,i,0),i},context:function(e,n){return e?new sg(e,n):Et},matchMedia:function(e){return new Uw(e)},matchMediaRefresh:function(){return kr.forEach(function(e){var n=e.conditions,i,r;for(r in n)n[r]&&(n[r]=!1,i=1);i&&e.revert()})||mu()},addEventListener:function(e,n){var i=jl[e]||(jl[e]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(e,n){var i=jl[e],r=i&&i.indexOf(n);r>=0&&i.splice(r,1)},utils:{wrap:dw,wrapYoyo:pw,distribute:Bm,random:Gm,snap:zm,normalize:fw,getUnit:tn,clamp:lw,splitColor:qm,toArray:Jn,selector:fu,mapRange:Hm,pipe:hw,unitize:uw,interpolate:mw,shuffle:Nm},install:Tm,effects:Nh,ticker:In,updateRoot:fn.updateRoot,plugins:Pn,globalTimeline:Ct,core:{PropTween:bn,globals:Am,Tween:Bt,Timeline:fn,Animation:fo,getCache:Fr,_removeLinkedListItem:zc,reverting:function(){return Zt},context:function(e){return e&&Et&&(Et.data.push(e),e._ctx=Et),Et},suppressOverwrites:function(e){return Zu=e}}};yn("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return nc[t]=Bt[t]});In.add(fn.updateRoot);Oa=nc.to({},{duration:0});var kw=function(e,n){for(var i=e._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},Ow=function(e,n){var i=e._targets,r,a,s;for(r in n)for(a=i.length;a--;)s=e._ptLookup[a][r],s&&(s=s.d)&&(s._pt&&(s=kw(s,r)),s&&s.modifier&&s.modifier(n[r],e,i[a],r))},Hh=function(e,n){return{name:e,rawVars:1,init:function(r,a,s){s._onInit=function(o){var c,l;if(jt(a)&&(c={},yn(a,function(h){return c[h]=1}),a=c),n){c={};for(l in a)c[l]=n(a[l]);a=c}Ow(o,a)}}}},Sn=nc.registerPlugin({name:"attr",init:function(e,n,i,r,a){var s,o,c;this.tween=i;for(s in n)c=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(c||0)+"",n[s],r,a,0,0,s),o.op=s,o.b=c,this._props.push(s)},render:function(e,n){for(var i=n._pt;i;)Zt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,n){for(var i=n.length;i--;)this.add(e,i,e[i]||0,n[i],0,0,0,0,0,1)}},Hh("roundProps",du),Hh("modifiers"),Hh("snap",zm))||nc;Bt.version=fn.version=Sn.version="3.12.7";Sm=1;Qu()&&Ka();ht.Power0;ht.Power1;ht.Power2;ht.Power3;ht.Power4;ht.Linear;ht.Quad;ht.Cubic;ht.Quart;ht.Quint;ht.Strong;ht.Elastic;ht.Back;ht.SteppedEase;ht.Bounce;ht.Sine;ht.Expo;ht.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var bp,nr,Ga,hf,Lr,Mp,uf,Nw=function(){return typeof window<"u"},zi={},Er=180/Math.PI,Va=Math.PI/180,Da=Math.atan2,wp=1e8,ff=/([A-Z])/g,Bw=/(left|right|width|margin|padding|x)/i,zw=/[\s,\(]\S/,_i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},gu=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},Gw=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},Vw=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},Hw=function(e,n){var i=n.s+n.c*e;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},og=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},lg=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},Ww=function(e,n,i){return e.style[n]=i},Xw=function(e,n,i){return e.style.setProperty(n,i)},qw=function(e,n,i){return e._gsap[n]=i},Yw=function(e,n,i){return e._gsap.scaleX=e._gsap.scaleY=i},jw=function(e,n,i,r,a){var s=e._gsap;s.scaleX=s.scaleY=i,s.renderTransform(a,s)},$w=function(e,n,i,r,a){var s=e._gsap;s[n]=i,s.renderTransform(a,s)},Lt="transform",Mn=Lt+"Origin",Zw=function t(e,n){var i=this,r=this.target,a=r.style,s=r._gsap;if(e in zi&&a){if(this.tfm=this.tfm||{},e!=="transform")e=_i[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Ui(r,o)}):this.tfm[e]=s.x?s[e]:Ui(r,e),e===Mn&&(this.tfm.zOrigin=s.zOrigin);else return _i.transform.split(",").forEach(function(o){return t.call(i,o,n)});if(this.props.indexOf(Lt)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Mn,n,"")),e=Lt}(a||n)&&this.props.push(e,n,a[e])},cg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Jw=function(){var e=this.props,n=this.target,i=n.style,r=n._gsap,a,s;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?n[e[a]](e[a+2]):n[e[a]]=e[a+2]:e[a+2]?i[e[a]]=e[a+2]:i.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(ff,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),a=uf(),(!a||!a.isStart)&&!i[Lt]&&(cg(i),r.zOrigin&&i[Mn]&&(i[Mn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},hg=function(e,n){var i={target:e,props:[],revert:Jw,save:Zw};return e._gsap||Sn.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(r){return i.save(r)}),i},ug,vu=function(e,n){var i=nr.createElementNS?nr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):nr.createElement(e);return i&&i.style?i:nr.createElement(e)},bi=function t(e,n,i){var r=getComputedStyle(e);return r[n]||r.getPropertyValue(n.replace(ff,"-$1").toLowerCase())||r.getPropertyValue(n)||!i&&t(e,es(n)||n,1)||""},Ep="O,Moz,ms,Ms,Webkit".split(","),es=function(e,n,i){var r=n||Lr,a=r.style,s=5;if(e in a&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Ep[s]+e in a););return s<0?null:(s===3?"ms":s>=0?Ep[s]:"")+e},_u=function(){Nw()&&window.document&&(bp=window,nr=bp.document,Ga=nr.documentElement,Lr=vu("div")||{style:{}},vu("div"),Lt=es(Lt),Mn=Lt+"Origin",Lr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ug=!!es("perspective"),uf=Sn.core.reverting,hf=1)},Sp=function(e){var n=e.ownerSVGElement,i=vu("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),a;r.style.display="block",i.appendChild(r),Ga.appendChild(i);try{a=r.getBBox()}catch{}return i.removeChild(r),Ga.removeChild(i),a},Tp=function(e,n){for(var i=n.length;i--;)if(e.hasAttribute(n[i]))return e.getAttribute(n[i])},fg=function(e){var n,i;try{n=e.getBBox()}catch{n=Sp(e),i=1}return n&&(n.width||n.height)||i||(n=Sp(e)),n&&!n.width&&!n.x&&!n.y?{x:+Tp(e,["x","cx","x1"])||0,y:+Tp(e,["y","cy","y1"])||0,width:0,height:0}:n},dg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&fg(e))},Xr=function(e,n){if(n){var i=e.style,r;n in zi&&n!==Mn&&(n=Lt),i.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(r==="--"?n:n.replace(ff,"-$1").toLowerCase())):i.removeAttribute(n)}},ir=function(e,n,i,r,a,s){var o=new bn(e._pt,n,i,0,1,s?lg:og);return e._pt=o,o.b=r,o.e=a,e._props.push(i),o},Ap={deg:1,rad:1,turn:1},Qw={grid:1,flex:1},lr=function t(e,n,i,r){var a=parseFloat(i)||0,s=(i+"").trim().substr((a+"").length)||"px",o=Lr.style,c=Bw.test(n),l=e.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,f=r==="px",p=r==="%",g,d,m,v;if(r===s||!a||Ap[r]||Ap[s])return a;if(s!=="px"&&!f&&(a=t(e,n,i,"px")),v=e.getCTM&&dg(e),(p||s==="%")&&(zi[n]||~n.indexOf("adius")))return g=v?e.getBBox()[c?"width":"height"]:e[h],Ut(p?a/g*u:a/100*g);if(o[c?"width":"height"]=u+(f?s:r),d=r!=="rem"&&~n.indexOf("adius")||r==="em"&&e.appendChild&&!l?e:e.parentNode,v&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===nr||!d.appendChild)&&(d=nr.body),m=d._gsap,m&&p&&m.width&&c&&m.time===In.time&&!m.uncache)return Ut(a/m.width*u);if(p&&(n==="height"||n==="width")){var _=e.style[n];e.style[n]=u+r,g=e[h],_?e.style[n]=_:Xr(e,n)}else(p||s==="%")&&!Qw[bi(d,"display")]&&(o.position=bi(e,"position")),d===e&&(o.position="static"),d.appendChild(Lr),g=Lr[h],d.removeChild(Lr),o.position="absolute";return c&&p&&(m=Fr(d),m.time=In.time,m.width=d[h]),Ut(f?g*a/u:g&&a?u/g*a:0)},Ui=function(e,n,i,r){var a;return hf||_u(),n in _i&&n!=="transform"&&(n=_i[n],~n.indexOf(",")&&(n=n.split(",")[0])),zi[n]&&n!=="transform"?(a=mo(e,r),a=n!=="transformOrigin"?a[n]:a.svg?a.origin:rc(bi(e,Mn))+" "+a.zOrigin+"px"):(a=e.style[n],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=ic[n]&&ic[n](e,n,i)||bi(e,n)||Lm(e,n)||(n==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?lr(e,n,a,i)+i:a},Kw=function(e,n,i,r){if(!i||i==="none"){var a=es(n,e,1),s=a&&bi(e,a,1);s&&s!==i?(n=a,i=s):n==="borderColor"&&(i=bi(e,"borderTopColor"))}var o=new bn(this._pt,e.style,n,0,1,rg),c=0,l=0,h,u,f,p,g,d,m,v,_,x,y,b;if(o.b=i,o.e=r,i+="",r+="",r==="auto"&&(d=e.style[n],e.style[n]=r,r=bi(e,n)||r,d?e.style[n]=d:Xr(e,n)),h=[i,r],jm(h),i=h[0],r=h[1],f=i.match(ka)||[],b=r.match(ka)||[],b.length){for(;u=ka.exec(r);)m=u[0],_=r.substring(c,u.index),g?g=(g+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(g=1),m!==(d=f[l++]||"")&&(p=parseFloat(d)||0,y=d.substr((p+"").length),m.charAt(1)==="="&&(m=za(p,m)+y),v=parseFloat(m),x=m.substr((v+"").length),c=ka.lastIndex-x.length,x||(x=x||Bn.units[n]||y,c===r.length&&(r+=x,o.e+=x)),y!==x&&(p=lr(e,n,d,x)||0),o._pt={_next:o._pt,p:_||l===1?_:",",s:p,c:v-p,m:g&&g<4||n==="zIndex"?Math.round:0});o.c=c<r.length?r.substring(c,r.length):""}else o.r=n==="display"&&r==="none"?lg:og;return wm.test(r)&&(o.e=0),this._pt=o,o},Cp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},e1=function(e){var n=e.split(" "),i=n[0],r=n[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),n[0]=Cp[i]||i,n[1]=Cp[r]||r,n.join(" ")},t1=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,r=i.style,a=n.u,s=i._gsap,o,c,l;if(a==="all"||a===!0)r.cssText="",c=1;else for(a=a.split(","),l=a.length;--l>-1;)o=a[l],zi[o]&&(c=1,o=o==="transformOrigin"?Mn:Lt),Xr(i,o);c&&(Xr(i,Lt),s&&(s.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",mo(i,1),s.uncache=1,cg(r)))}},ic={clearProps:function(e,n,i,r,a){if(a.data!=="isFromStart"){var s=e._pt=new bn(e._pt,n,i,0,0,t1);return s.u=r,s.pr=-10,s.tween=a,e._props.push(i),1}}},po=[1,0,0,1,0,0],pg={},mg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Lp=function(e){var n=bi(e,Lt);return mg(n)?po:n.substr(7).match(Mm).map(Ut)},df=function(e,n){var i=e._gsap||Fr(e),r=e.style,a=Lp(e),s,o,c,l;return i.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,a=[c.a,c.b,c.c,c.d,c.e,c.f],a.join(",")==="1,0,0,1,0,0"?po:a):(a===po&&!e.offsetParent&&e!==Ga&&!i.svg&&(c=r.display,r.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,Ga.appendChild(e)),a=Lp(e),c?r.display=c:Xr(e,"display"),l&&(o?s.insertBefore(e,o):s?s.appendChild(e):Ga.removeChild(e))),n&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},xu=function(e,n,i,r,a,s){var o=e._gsap,c=a||df(e,!0),l=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,p=c[0],g=c[1],d=c[2],m=c[3],v=c[4],_=c[5],x=n.split(" "),y=parseFloat(x[0])||0,b=parseFloat(x[1])||0,E,S,M,w;i?c!==po&&(S=p*m-g*d)&&(M=y*(m/S)+b*(-d/S)+(d*_-m*v)/S,w=y*(-g/S)+b*(p/S)-(p*_-g*v)/S,y=M,b=w):(E=fg(e),y=E.x+(~x[0].indexOf("%")?y/100*E.width:y),b=E.y+(~(x[1]||x[0]).indexOf("%")?b/100*E.height:b)),r||r!==!1&&o.smooth?(v=y-l,_=b-h,o.xOffset=u+(v*p+_*d)-v,o.yOffset=f+(v*g+_*m)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=n,o.originIsAbsolute=!!i,e.style[Mn]="0px 0px",s&&(ir(s,o,"xOrigin",l,y),ir(s,o,"yOrigin",h,b),ir(s,o,"xOffset",u,o.xOffset),ir(s,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},mo=function(e,n){var i=e._gsap||new Qm(e);if("x"in i&&!n&&!i.uncache)return i;var r=e.style,a=i.scaleX<0,s="px",o="deg",c=getComputedStyle(e),l=bi(e,Mn)||"0",h,u,f,p,g,d,m,v,_,x,y,b,E,S,M,w,L,z,V,A,T,P,O,H,N,I,B,Z,X,G,J,ie;return h=u=f=d=m=v=_=x=y=0,p=g=1,i.svg=!!(e.getCTM&&dg(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[Lt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Lt]!=="none"?c[Lt]:"")),r.scale=r.rotate=r.translate="none"),S=df(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),l=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",H=""):H=!n&&e.getAttribute("data-svg-origin"),xu(e,H||l,!!H||i.originIsAbsolute,i.smooth!==!1,S)),b=i.xOrigin||0,E=i.yOrigin||0,S!==po&&(z=S[0],V=S[1],A=S[2],T=S[3],h=P=S[4],u=O=S[5],S.length===6?(p=Math.sqrt(z*z+V*V),g=Math.sqrt(T*T+A*A),d=z||V?Da(V,z)*Er:0,_=A||T?Da(A,T)*Er+d:0,_&&(g*=Math.abs(Math.cos(_*Va))),i.svg&&(h-=b-(b*z+E*A),u-=E-(b*V+E*T))):(ie=S[6],G=S[7],B=S[8],Z=S[9],X=S[10],J=S[11],h=S[12],u=S[13],f=S[14],M=Da(ie,X),m=M*Er,M&&(w=Math.cos(-M),L=Math.sin(-M),H=P*w+B*L,N=O*w+Z*L,I=ie*w+X*L,B=P*-L+B*w,Z=O*-L+Z*w,X=ie*-L+X*w,J=G*-L+J*w,P=H,O=N,ie=I),M=Da(-A,X),v=M*Er,M&&(w=Math.cos(-M),L=Math.sin(-M),H=z*w-B*L,N=V*w-Z*L,I=A*w-X*L,J=T*L+J*w,z=H,V=N,A=I),M=Da(V,z),d=M*Er,M&&(w=Math.cos(M),L=Math.sin(M),H=z*w+V*L,N=P*w+O*L,V=V*w-z*L,O=O*w-P*L,z=H,P=N),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,v=180-v),p=Ut(Math.sqrt(z*z+V*V+A*A)),g=Ut(Math.sqrt(O*O+ie*ie)),M=Da(P,O),_=Math.abs(M)>2e-4?M*Er:0,y=J?1/(J<0?-J:J):0),i.svg&&(H=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!mg(bi(e,Lt)),H&&e.setAttribute("transform",H))),Math.abs(_)>90&&Math.abs(_)<270&&(a?(p*=-1,_+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,_+=_<=0?180:-180)),n=n||i.uncache,i.x=h-((i.xPercent=h&&(!n&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+s,i.y=u-((i.yPercent=u&&(!n&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+s,i.z=f+s,i.scaleX=Ut(p),i.scaleY=Ut(g),i.rotation=Ut(d)+o,i.rotationX=Ut(m)+o,i.rotationY=Ut(v)+o,i.skewX=_+o,i.skewY=x+o,i.transformPerspective=y+s,(i.zOrigin=parseFloat(l.split(" ")[2])||!n&&i.zOrigin||0)&&(r[Mn]=rc(l)),i.xOffset=i.yOffset=0,i.force3D=Bn.force3D,i.renderTransform=i.svg?i1:ug?gg:n1,i.uncache=0,i},rc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Wh=function(e,n,i){var r=tn(n);return Ut(parseFloat(n)+parseFloat(lr(e,"x",i+"px",r)))+r},n1=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,gg(e,n)},yr="0deg",Js="0px",br=") ",gg=function(e,n){var i=n||this,r=i.xPercent,a=i.yPercent,s=i.x,o=i.y,c=i.z,l=i.rotation,h=i.rotationY,u=i.rotationX,f=i.skewX,p=i.skewY,g=i.scaleX,d=i.scaleY,m=i.transformPerspective,v=i.force3D,_=i.target,x=i.zOrigin,y="",b=v==="auto"&&e&&e!==1||v===!0;if(x&&(u!==yr||h!==yr)){var E=parseFloat(h)*Va,S=Math.sin(E),M=Math.cos(E),w;E=parseFloat(u)*Va,w=Math.cos(E),s=Wh(_,s,S*w*-x),o=Wh(_,o,-Math.sin(E)*-x),c=Wh(_,c,M*w*-x+x)}m!==Js&&(y+="perspective("+m+br),(r||a)&&(y+="translate("+r+"%, "+a+"%) "),(b||s!==Js||o!==Js||c!==Js)&&(y+=c!==Js||b?"translate3d("+s+", "+o+", "+c+") ":"translate("+s+", "+o+br),l!==yr&&(y+="rotate("+l+br),h!==yr&&(y+="rotateY("+h+br),u!==yr&&(y+="rotateX("+u+br),(f!==yr||p!==yr)&&(y+="skew("+f+", "+p+br),(g!==1||d!==1)&&(y+="scale("+g+", "+d+br),_.style[Lt]=y||"translate(0, 0)"},i1=function(e,n){var i=n||this,r=i.xPercent,a=i.yPercent,s=i.x,o=i.y,c=i.rotation,l=i.skewX,h=i.skewY,u=i.scaleX,f=i.scaleY,p=i.target,g=i.xOrigin,d=i.yOrigin,m=i.xOffset,v=i.yOffset,_=i.forceCSS,x=parseFloat(s),y=parseFloat(o),b,E,S,M,w;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Va,l*=Va,b=Math.cos(c)*u,E=Math.sin(c)*u,S=Math.sin(c-l)*-f,M=Math.cos(c-l)*f,l&&(h*=Va,w=Math.tan(l-h),w=Math.sqrt(1+w*w),S*=w,M*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),b*=w,E*=w)),b=Ut(b),E=Ut(E),S=Ut(S),M=Ut(M)):(b=u,M=f,E=S=0),(x&&!~(s+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(x=lr(p,"x",s,"px"),y=lr(p,"y",o,"px")),(g||d||m||v)&&(x=Ut(x+g-(g*b+d*S)+m),y=Ut(y+d-(g*E+d*M)+v)),(r||a)&&(w=p.getBBox(),x=Ut(x+r/100*w.width),y=Ut(y+a/100*w.height)),w="matrix("+b+","+E+","+S+","+M+","+x+","+y+")",p.setAttribute("transform",w),_&&(p.style[Lt]=w)},r1=function(e,n,i,r,a){var s=360,o=jt(a),c=parseFloat(a)*(o&&~a.indexOf("rad")?Er:1),l=c-r,h=r+l+"deg",u,f;return o&&(u=a.split("_")[1],u==="short"&&(l%=s,l!==l%(s/2)&&(l+=l<0?s:-360)),u==="cw"&&l<0?l=(l+s*wp)%s-~~(l/s)*s:u==="ccw"&&l>0&&(l=(l-s*wp)%s-~~(l/s)*s)),e._pt=f=new bn(e._pt,n,i,r,l,Gw),f.e=h,f.u="deg",e._props.push(i),f},Rp=function(e,n){for(var i in n)e[i]=n[i];return e},a1=function(e,n,i){var r=Rp({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",s=i.style,o,c,l,h,u,f,p,g;r.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),s[Lt]=n,o=mo(i,1),Xr(i,Lt),i.setAttribute("transform",l)):(l=getComputedStyle(i)[Lt],s[Lt]=n,o=mo(i,1),s[Lt]=l);for(c in zi)l=r[c],h=o[c],l!==h&&a.indexOf(c)<0&&(p=tn(l),g=tn(h),u=p!==g?lr(i,c,l,g):parseFloat(l),f=parseFloat(h),e._pt=new bn(e._pt,o,c,u,f-u,gu),e._pt.u=g||0,e._props.push(c));Rp(o,r)};yn("padding,margin,Width,Radius",function(t,e){var n="Top",i="Right",r="Bottom",a="Left",s=(e<3?[n,i,r,a]:[n+a,n+i,r+i,r+a]).map(function(o){return e<2?t+o:"border"+o+t});ic[e>1?"border"+t:t]=function(o,c,l,h,u){var f,p;if(arguments.length<4)return f=s.map(function(g){return Ui(o,g,l)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(h+"").split(" "),p={},s.forEach(function(g,d){return p[g]=f[d]=f[d]||f[(d-1)/2|0]}),o.init(c,p,u)}});var vg={name:"css",register:_u,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,i,r,a){var s=this._props,o=e.style,c=i.vars.startAt,l,h,u,f,p,g,d,m,v,_,x,y,b,E,S,M;hf||_u(),this.styles=this.styles||hg(e),M=this.styles.props,this.tween=i;for(d in n)if(d!=="autoRound"&&(h=n[d],!(Pn[d]&&Km(d,n,i,r,e,a)))){if(p=typeof h,g=ic[d],p==="function"&&(h=h.call(i,r,e,a),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=ho(h)),g)g(this,e,d,h,i)&&(S=1);else if(d.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(d)+"").trim(),h+="",sr.lastIndex=0,sr.test(l)||(m=tn(l),v=tn(h)),v?m!==v&&(l=lr(e,d,l,v)+v):m&&(h+=m),this.add(o,"setProperty",l,h,r,a,0,0,d),s.push(d),M.push(d,0,o[d]);else if(p!=="undefined"){if(c&&d in c?(l=typeof c[d]=="function"?c[d].call(i,r,e,a):c[d],jt(l)&&~l.indexOf("random(")&&(l=ho(l)),tn(l+"")||l==="auto"||(l+=Bn.units[d]||tn(Ui(e,d))||""),(l+"").charAt(1)==="="&&(l=Ui(e,d))):l=Ui(e,d),f=parseFloat(l),_=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),_&&(h=h.substr(2)),u=parseFloat(h),d in _i&&(d==="autoAlpha"&&(f===1&&Ui(e,"visibility")==="hidden"&&u&&(f=0),M.push("visibility",0,o.visibility),ir(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),d!=="scale"&&d!=="transform"&&(d=_i[d],~d.indexOf(",")&&(d=d.split(",")[0]))),x=d in zi,x){if(this.styles.save(d),y||(b=e._gsap,b.renderTransform&&!n.parseTransform||mo(e,n.parseTransform),E=n.smoothOrigin!==!1&&b.smooth,y=this._pt=new bn(this._pt,o,Lt,0,1,b.renderTransform,b,0,-1),y.dep=1),d==="scale")this._pt=new bn(this._pt,b,"scaleY",b.scaleY,(_?za(b.scaleY,_+u):u)-b.scaleY||0,gu),this._pt.u=0,s.push("scaleY",d),d+="X";else if(d==="transformOrigin"){M.push(Mn,0,o[Mn]),h=e1(h),b.svg?xu(e,h,0,E,0,this):(v=parseFloat(h.split(" ")[2])||0,v!==b.zOrigin&&ir(this,b,"zOrigin",b.zOrigin,v),ir(this,o,d,rc(l),rc(h)));continue}else if(d==="svgOrigin"){xu(e,h,1,E,0,this);continue}else if(d in pg){r1(this,b,d,f,_?za(f,_+h):h);continue}else if(d==="smoothOrigin"){ir(this,b,"smooth",b.smooth,h);continue}else if(d==="force3D"){b[d]=h;continue}else if(d==="transform"){a1(this,h,e);continue}}else d in o||(d=es(d)||d);if(x||(u||u===0)&&(f||f===0)&&!zw.test(h)&&d in o)m=(l+"").substr((f+"").length),u||(u=0),v=tn(h)||(d in Bn.units?Bn.units[d]:m),m!==v&&(f=lr(e,d,l,v)),this._pt=new bn(this._pt,x?b:o,d,f,(_?za(f,_+u):u)-f,!x&&(v==="px"||d==="zIndex")&&n.autoRound!==!1?Hw:gu),this._pt.u=v||0,m!==v&&v!=="%"&&(this._pt.b=l,this._pt.r=Vw);else if(d in o)Kw.call(this,e,d,l,_?_+h:h);else if(d in e)this.add(e,d,l||e[d],_?_+h:h,r,a);else if(d!=="parseTransform"){ef(d,h);continue}x||(d in o?M.push(d,0,o[d]):typeof e[d]=="function"?M.push(d,2,e[d]()):M.push(d,1,l||e[d])),s.push(d)}}S&&ag(this)},render:function(e,n){if(n.tween._time||!uf())for(var i=n._pt;i;)i.r(e,i.d),i=i._next;else n.styles.revert()},get:Ui,aliases:_i,getSetter:function(e,n,i){var r=_i[n];return r&&r.indexOf(",")<0&&(n=r),n in zi&&n!==Mn&&(e._gsap.x||Ui(e,"x"))?i&&Mp===i?n==="scale"?Yw:qw:(Mp=i||{})&&(n==="scale"?jw:$w):e.style&&!Ju(e.style[n])?Ww:~n.indexOf("-")?Xw:lf(e,n)},core:{_removeProperty:Xr,_getMatrix:df}};Sn.utils.checkPrefix=es;Sn.core.getStyleSaver=hg;(function(t,e,n,i){var r=yn(t+","+e+","+n,function(a){zi[a]=1});yn(e,function(a){Bn.units[a]="deg",pg[a]=1}),_i[r[13]]=t+","+e,yn(i,function(a){var s=a.split(":");_i[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Bn.units[t]="px"});Sn.registerPlugin(vg);var _g=Sn.registerPlugin(vg)||Sn;_g.core.Tween;Number.EPSILON===void 0&&(Number.EPSILON=Math.pow(2,-52));Math.sign===void 0&&(Math.sign=function(t){return t<0?-1:t>0?1:+t});Function.prototype.name===void 0&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});Object.assign===void 0&&function(){Object.assign=function(t){if(t==null)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!=null)for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}}();function Kn(){}Object.assign(Kn.prototype,{addEventListener:function(t,e){this._listeners===void 0&&(this._listeners={});var n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)},hasEventListener:function(t,e){if(this._listeners===void 0)return!1;var n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1},removeEventListener:function(t,e){if(this._listeners!==void 0){var n=this._listeners,i=n[t];if(i!==void 0){var r=i.indexOf(e);r!==-1&&i.splice(r,1)}}},dispatchEvent:function(t){if(this._listeners!==void 0){var e=this._listeners,n=e[t.type];if(n!==void 0){t.target=this;var i=[],r=0,a=n.length;for(r=0;r<a;r++)i[r]=n[r];for(r=0;r<a;r++)i[r].call(this,t)}}}});var xg="83",s1={LEFT:0,MIDDLE:1,RIGHT:2},yg=0,go=1,pf=2,o1=3,bg=0,l1=1,c1=0,mf=1,Mg=2,Ha=0,cr=1,Hs=2,gf=1,vf=2,Hc=0,_f=1,ma=2,vo=0,Ws=1,xf=2,yf=3,bf=4,Mf=5,wg={NoBlending:vo,NormalBlending:Ws,AdditiveBlending:xf,SubtractiveBlending:yf,MultiplyBlending:bf,CustomBlending:Mf},wf=100,Eg=101,Sg=102,yu=103,bu=104,Tg=200,Ag=201,Cg=202,Lg=203,Ef=204,Sf=205,Rg=206,Pg=207,Dg=208,Fg=209,Ig=210,Ug=0,kg=1,Og=2,ac=3,Ng=4,Bg=5,zg=6,Gg=7,fl=0,Vg=1,Hg=2,$l=0,Tf=1,Wg=2,Xg=3,qg=4,Wc=300,Xc=301,sc=302,Af=303,oc=304,Cf=305,qc=306,Yc=307,Yg={UVMapping:Wc,CubeReflectionMapping:Xc,CubeRefractionMapping:sc,EquirectangularReflectionMapping:Af,EquirectangularRefractionMapping:oc,SphericalReflectionMapping:Cf,CubeUVReflectionMapping:qc,CubeUVRefractionMapping:Yc},Oi=1e3,On=1001,qr=1002,Mu={RepeatWrapping:Oi,ClampToEdgeWrapping:On,MirroredRepeatWrapping:qr},Nn=1003,jc=1004,$c=1005,wn=1006,Lf=1007,dl=1008,wu={NearestFilter:Nn,NearestMipMapNearestFilter:jc,NearestMipMapLinearFilter:$c,LinearFilter:wn,LinearMipMapNearestFilter:Lf,LinearMipMapLinearFilter:dl},lc=1009,jg=1010,$g=1011,_o=1012,Zg=1013,Rf=1014,ts=1015,cc=1016,Jg=1017,Qg=1018,Kg=1019,xo=1020,ev=1021,ns=1022,wi=1023,tv=1024,nv=1025,h1=wi,Or=1026,is=1027,Eu=2001,Su=2002,Tu=2003,Au=2004,Cu=2100,Lu=2101,Ru=2102,Pu=2103,iv=2151,rv=2200,av=2201,sv=2202,yo=2300,so=2301,Zl=2302,Yr=2400,Rr=2401,bo=2402,Pf=0,ov=1,lv=2,Mo=3e3,cv=3001,Df=3007,hv=3002,u1=3003,uv=3004,fv=3005,dv=3006,pv=3200,mv=3201,Qe={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),e=new Array(36),n=0,i;return function(){for(var a=0;a<36;a++)a===8||a===13||a===18||a===23?e[a]="-":a===14?e[a]="4":(n<=2&&(n=33554432+Math.random()*16777216|0),i=n&15,n=n>>4,e[a]=t[a===19?i&3|8:i]);return e.join("")}}(),clamp:function(t,e,n){return Math.max(e,Math.min(n,t))},euclideanModulo:function(t,e){return(t%e+e)%e},mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},lerp:function(t,e,n){return(1-n)*t+n*e},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},degToRad:function(t){return t*Qe.DEG2RAD},radToDeg:function(t){return t*Qe.RAD2DEG},isPowerOfTwo:function(t){return(t&t-1)===0&&t!==0},nearestPowerOfTwo:function(t){return Math.pow(2,Math.round(Math.log(t)/Math.LN2))},nextPowerOfTwo:function(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,t++,t}};function Ce(t,e){this.x=t||0,this.y=e||0}Ce.prototype={constructor:Ce,isVector2:!0,get width(){return this.x},set width(t){this.x=t},get height(){return this.y},set height(t){this.y=t},set:function(t,e){return this.x=t,this.y=e,this},setScalar:function(t){return this.x=t,this.y=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setComponent:function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(t){return this.x=t.x,this.y=t.y,this},add:function(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)},addScalar:function(t){return this.x+=t,this.y+=t,this},addVectors:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this},addScaledVector:function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this},sub:function(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)},subScalar:function(t){return this.x-=t,this.y-=t,this},subVectors:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},multiplyScalar:function(t){return isFinite(t)?(this.x*=t,this.y*=t):(this.x=0,this.y=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},divideScalar:function(t){return this.multiplyScalar(1/t)},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this},clamp:function(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this},clampScalar:function(){var t,e;return function(i,r){return t===void 0&&(t=new Ce,e=new Ce),t.set(i,i),e.set(r,r),this.clamp(t,e)}}(),clampLength:function(t,e){var n=this.length();return this.multiplyScalar(Math.max(t,Math.min(e,n))/n)},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(t){return this.x*t.x+this.y*t.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length())},angle:function(){var t=Math.atan2(this.y,this.x);return t<0&&(t+=2*Math.PI),t},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},distanceToSquared:function(t){var e=this.x-t.x,n=this.y-t.y;return e*e+n*n},distanceToManhattan:function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)},setLength:function(t){return this.multiplyScalar(t/this.length())},lerp:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this},lerpVectors:function(t,e,n){return this.subVectors(e,t).multiplyScalar(n).add(t)},equals:function(t){return t.x===this.x&&t.y===this.y},fromArray:function(t,e){return e===void 0&&(e=0),this.x=t[e],this.y=t[e+1],this},toArray:function(t,e){return t===void 0&&(t=[]),e===void 0&&(e=0),t[e]=this.x,t[e+1]=this.y,t},fromAttribute:function(t,e,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this},rotateAround:function(t,e){var n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}};var f1=0;function Mt(t,e,n,i,r,a,s,o,c,l){Object.defineProperty(this,"id",{value:f1++}),this.uuid=Qe.generateUUID(),this.name="",this.image=t!==void 0?t:Mt.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=e!==void 0?e:Mt.DEFAULT_MAPPING,this.wrapS=n!==void 0?n:On,this.wrapT=i!==void 0?i:On,this.magFilter=r!==void 0?r:wn,this.minFilter=a!==void 0?a:dl,this.anisotropy=c!==void 0?c:1,this.format=s!==void 0?s:wi,this.type=o!==void 0?o:lc,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l!==void 0?l:Mo,this.version=0,this.onUpdate=null}Mt.DEFAULT_IMAGE=void 0;Mt.DEFAULT_MAPPING=Wc;Mt.prototype={constructor:Mt,isTexture:!0,set needsUpdate(t){t===!0&&this.version++},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this},toJSON:function(t){if(t.textures[this.uuid]!==void 0)return t.textures[this.uuid];function e(r){var a;return r.toDataURL!==void 0?a=r:(a=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),a.width=r.width,a.height=r.height,a.getContext("2d").drawImage(r,0,0,r.width,r.height)),a.width>2048||a.height>2048?a.toDataURL("image/jpeg",.6):a.toDataURL("image/png")}var n={metadata:{version:4.4,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY};if(this.image!==void 0){var i=this.image;i.uuid===void 0&&(i.uuid=Qe.generateUUID()),t.images[i.uuid]===void 0&&(t.images[i.uuid]={uuid:i.uuid,url:e(i)}),n.image=i.uuid}return t.textures[this.uuid]=n,n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(t){if(this.mapping===Wc){if(t.multiply(this.repeat),t.add(this.offset),t.x<0||t.x>1)switch(this.wrapS){case Oi:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case qr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oi:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case qr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}this.flipY&&(t.y=1-t.y)}}};Object.assign(Mt.prototype,Kn.prototype);function xt(t,e,n,i){this.x=t||0,this.y=e||0,this.z=n||0,this.w=i!==void 0?i:1}xt.prototype={constructor:xt,isVector4:!0,set:function(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this},setScalar:function(t){return this.x=t,this.y=t,this.z=t,this.w=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setZ:function(t){return this.z=t,this},setW:function(t){return this.w=t,this},setComponent:function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this},add:function(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this},addVectors:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this},addScaledVector:function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this},sub:function(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)},subScalar:function(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this},subVectors:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this},multiplyScalar:function(t){return isFinite(t)?(this.x*=t,this.y*=t,this.z*=t,this.w*=t):(this.x=0,this.y=0,this.z=0,this.w=0),this},applyMatrix4:function(t){var e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this},divideScalar:function(t){return this.multiplyScalar(1/t)},setAxisAngleFromQuaternion:function(t){this.w=2*Math.acos(t.w);var e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this},setAxisAngleFromRotationMatrix:function(t){var e,n,i,r,a=.01,s=.1,o=t.elements,c=o[0],l=o[4],h=o[8],u=o[1],f=o[5],p=o[9],g=o[2],d=o[6],m=o[10];if(Math.abs(l-u)<a&&Math.abs(h-g)<a&&Math.abs(p-d)<a){if(Math.abs(l+u)<s&&Math.abs(h+g)<s&&Math.abs(p+d)<s&&Math.abs(c+f+m-3)<s)return this.set(1,0,0,0),this;e=Math.PI;var v=(c+1)/2,_=(f+1)/2,x=(m+1)/2,y=(l+u)/4,b=(h+g)/4,E=(p+d)/4;return v>_&&v>x?v<a?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=y/n,r=b/n):_>x?_<a?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=y/i,r=E/i):x<a?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=b/r,i=E/r),this.set(n,i,r,e),this}var S=Math.sqrt((d-p)*(d-p)+(h-g)*(h-g)+(u-l)*(u-l));return Math.abs(S)<.001&&(S=1),this.x=(d-p)/S,this.y=(h-g)/S,this.z=(u-l)/S,this.w=Math.acos((c+f+m-1)/2),this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this},clamp:function(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this},clampScalar:function(){var t,e;return function(i,r){return t===void 0&&(t=new xt,e=new xt),t.set(i,i,i,i),e.set(r,r,r,r),this.clamp(t,e)}}(),floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(t){return this.multiplyScalar(t/this.length())},lerp:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this},lerpVectors:function(t,e,n){return this.subVectors(e,t).multiplyScalar(n).add(t)},equals:function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w},fromArray:function(t,e){return e===void 0&&(e=0),this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this},toArray:function(t,e){return t===void 0&&(t=[]),e===void 0&&(e=0),t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t},fromAttribute:function(t,e,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}};function Xs(t,e,n){this.uuid=Qe.generateUUID(),this.width=t,this.height=e,this.scissor=new xt(0,0,t,e),this.scissorTest=!1,this.viewport=new xt(0,0,t,e),n=n||{},n.minFilter===void 0&&(n.minFilter=wn),this.texture=new Mt(void 0,void 0,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!0,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}Object.assign(Xs.prototype,Kn.prototype,{isWebGLRenderTarget:!0,setSize:function(t,e){(this.width!==t||this.height!==e)&&(this.width=t,this.height=e,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.width=t.width,this.height=t.height,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function rs(t,e,n){Xs.call(this,t,e,n),this.activeCubeFace=0,this.activeMipMapLevel=0}rs.prototype=Object.create(Xs.prototype);rs.prototype.constructor=rs;rs.prototype.isWebGLRenderTargetCube=!0;function Wt(t,e,n,i){this._x=t||0,this._y=e||0,this._z=n||0,this._w=i!==void 0?i:1}Wt.prototype={constructor:Wt,get x(){return this._x},set x(t){this._x=t,this.onChangeCallback()},get y(){return this._y},set y(t){this._y=t,this.onChangeCallback()},get z(){return this._z},set z(t){this._z=t,this.onChangeCallback()},get w(){return this._w},set w(t){this._w=t,this.onChangeCallback()},set:function(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this.onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this.onChangeCallback(),this},setFromEuler:function(t,e){if((t&&t.isEuler)===!1)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var n=Math.cos(t._x/2),i=Math.cos(t._y/2),r=Math.cos(t._z/2),a=Math.sin(t._x/2),s=Math.sin(t._y/2),o=Math.sin(t._z/2),c=t.order;return c==="XYZ"?(this._x=a*i*r+n*s*o,this._y=n*s*r-a*i*o,this._z=n*i*o+a*s*r,this._w=n*i*r-a*s*o):c==="YXZ"?(this._x=a*i*r+n*s*o,this._y=n*s*r-a*i*o,this._z=n*i*o-a*s*r,this._w=n*i*r+a*s*o):c==="ZXY"?(this._x=a*i*r-n*s*o,this._y=n*s*r+a*i*o,this._z=n*i*o+a*s*r,this._w=n*i*r-a*s*o):c==="ZYX"?(this._x=a*i*r-n*s*o,this._y=n*s*r+a*i*o,this._z=n*i*o-a*s*r,this._w=n*i*r+a*s*o):c==="YZX"?(this._x=a*i*r+n*s*o,this._y=n*s*r+a*i*o,this._z=n*i*o-a*s*r,this._w=n*i*r-a*s*o):c==="XZY"&&(this._x=a*i*r-n*s*o,this._y=n*s*r-a*i*o,this._z=n*i*o+a*s*r,this._w=n*i*r+a*s*o),e!==!1&&this.onChangeCallback(),this},setFromAxisAngle:function(t,e){var n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this.onChangeCallback(),this},setFromRotationMatrix:function(t){var e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],s=e[5],o=e[9],c=e[2],l=e[6],h=e[10],u=n+s+h,f;return u>0?(f=.5/Math.sqrt(u+1),this._w=.25/f,this._x=(l-o)*f,this._y=(r-c)*f,this._z=(a-i)*f):n>s&&n>h?(f=2*Math.sqrt(1+n-s-h),this._w=(l-o)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f):s>h?(f=2*Math.sqrt(1+s-n-h),this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(o+l)/f):(f=2*Math.sqrt(1+h-n-s),this._w=(a-i)/f,this._x=(r+c)/f,this._y=(o+l)/f,this._z=.25*f),this.onChangeCallback(),this},setFromUnitVectors:function(){var t,e,n=1e-6;return function(r,a){return t===void 0&&(t=new U),e=r.dot(a)+1,e<n?(e=0,Math.abs(r.x)>Math.abs(r.z)?t.set(-r.y,r.x,0):t.set(0,-r.z,r.y)):t.crossVectors(r,a),this._x=t.x,this._y=t.y,this._z=t.z,this._w=e,this.normalize()}}(),inverse:function(){return this.conjugate().normalize()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this.onChangeCallback(),this},dot:function(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this.onChangeCallback(),this},multiply:function(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)},premultiply:function(t){return this.multiplyQuaternions(t,this)},multiplyQuaternions:function(t,e){var n=t._x,i=t._y,r=t._z,a=t._w,s=e._x,o=e._y,c=e._z,l=e._w;return this._x=n*l+a*s+i*c-r*o,this._y=i*l+a*o+r*s-n*c,this._z=r*l+a*c+n*o-i*s,this._w=a*l-n*s-i*o-r*c,this.onChangeCallback(),this},slerp:function(t,e){if(e===0)return this;if(e===1)return this.copy(t);var n=this._x,i=this._y,r=this._z,a=this._w,s=a*t._w+n*t._x+i*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;var o=Math.sqrt(1-s*s);if(Math.abs(o)<.001)return this._w=.5*(a+this._w),this._x=.5*(n+this._x),this._y=.5*(i+this._y),this._z=.5*(r+this._z),this;var c=Math.atan2(o,s),l=Math.sin((1-e)*c)/o,h=Math.sin(e*c)/o;return this._w=a*l+this._w*h,this._x=n*l+this._x*h,this._y=i*l+this._y*h,this._z=r*l+this._z*h,this.onChangeCallback(),this},equals:function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w},fromArray:function(t,e){return e===void 0&&(e=0),this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this.onChangeCallback(),this},toArray:function(t,e){return t===void 0&&(t=[]),e===void 0&&(e=0),t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t},onChange:function(t){return this.onChangeCallback=t,this},onChangeCallback:function(){}};Object.assign(Wt,{slerp:function(t,e,n,i){return n.copy(t).slerp(e,i)},slerpFlat:function(t,e,n,i,r,a,s){var o=n[i+0],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a+0],f=r[a+1],p=r[a+2],g=r[a+3];if(h!==g||o!==u||c!==f||l!==p){var d=1-s,m=o*u+c*f+l*p+h*g,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){var x=Math.sqrt(_),y=Math.atan2(x,m*v);d=Math.sin(d*y)/x,s=Math.sin(s*y)/x}var b=s*v;if(o=o*d+u*b,c=c*d+f*b,l=l*d+p*b,h=h*d+g*b,d===1-s){var E=1/Math.sqrt(o*o+c*c+l*l+h*h);o*=E,c*=E,l*=E,h*=E}}t[e]=o,t[e+1]=c,t[e+2]=l,t[e+3]=h}});function U(t,e,n){this.x=t||0,this.y=e||0,this.z=n||0}U.prototype={constructor:U,isVector3:!0,set:function(t,e,n){return this.x=t,this.y=e,this.z=n,this},setScalar:function(t){return this.x=t,this.y=t,this.z=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setZ:function(t){return this.z=t,this},setComponent:function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this},add:function(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this},addVectors:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this},addScaledVector:function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this},sub:function(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)},subScalar:function(t){return this.x-=t,this.y-=t,this.z-=t,this},subVectors:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this},multiply:function(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)},multiplyScalar:function(t){return isFinite(t)?(this.x*=t,this.y*=t,this.z*=t):(this.x=0,this.y=0,this.z=0),this},multiplyVectors:function(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this},applyEuler:function(){var t;return function(n){return(n&&n.isEuler)===!1&&console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),t===void 0&&(t=new Wt),this.applyQuaternion(t.setFromEuler(n))}}(),applyAxisAngle:function(){var t;return function(n,i){return t===void 0&&(t=new Wt),this.applyQuaternion(t.setFromAxisAngle(n,i))}}(),applyMatrix3:function(t){var e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this},applyMatrix4:function(t){var e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12],this.y=r[1]*e+r[5]*n+r[9]*i+r[13],this.z=r[2]*e+r[6]*n+r[10]*i+r[14],this},applyProjection:function(t){var e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this},applyQuaternion:function(t){var e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,s=t.z,o=t.w,c=o*e+a*i-s*n,l=o*n+s*e-r*i,h=o*i+r*n-a*e,u=-r*e-a*n-s*i;return this.x=c*o+u*-r+l*-s-h*-a,this.y=l*o+u*-a+h*-r-c*-s,this.z=h*o+u*-s+c*-a-l*-r,this},project:function(){var t;return function(n){return t===void 0&&(t=new Ye),t.multiplyMatrices(n.projectionMatrix,t.getInverse(n.matrixWorld)),this.applyProjection(t)}}(),unproject:function(){var t;return function(n){return t===void 0&&(t=new Ye),t.multiplyMatrices(n.matrixWorld,t.getInverse(n.projectionMatrix)),this.applyProjection(t)}}(),transformDirection:function(t){var e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this},divideScalar:function(t){return this.multiplyScalar(1/t)},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},clamp:function(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this},clampScalar:function(){var t,e;return function(i,r){return t===void 0&&(t=new U,e=new U),t.set(i,i,i),e.set(r,r,r),this.clamp(t,e)}}(),clampLength:function(t,e){var n=this.length();return this.multiplyScalar(Math.max(t,Math.min(e,n))/n)},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(t){return this.multiplyScalar(t/this.length())},lerp:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this},lerpVectors:function(t,e,n){return this.subVectors(e,t).multiplyScalar(n).add(t)},cross:function(t,e){if(e!==void 0)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e);var n=this.x,i=this.y,r=this.z;return this.x=i*t.z-r*t.y,this.y=r*t.x-n*t.z,this.z=n*t.y-i*t.x,this},crossVectors:function(t,e){var n=t.x,i=t.y,r=t.z,a=e.x,s=e.y,o=e.z;return this.x=i*o-r*s,this.y=r*a-n*o,this.z=n*s-i*a,this},projectOnVector:function(t){var e=t.dot(this)/t.lengthSq();return this.copy(t).multiplyScalar(e)},projectOnPlane:function(){var t;return function(n){return t===void 0&&(t=new U),t.copy(this).projectOnVector(n),this.sub(t)}}(),reflect:function(){var t;return function(n){return t===void 0&&(t=new U),this.sub(t.copy(n).multiplyScalar(2*this.dot(n)))}}(),angleTo:function(t){var e=this.dot(t)/Math.sqrt(this.lengthSq()*t.lengthSq());return Math.acos(Qe.clamp(e,-1,1))},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},distanceToSquared:function(t){var e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i},distanceToManhattan:function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)},setFromSpherical:function(t){var e=Math.sin(t.phi)*t.radius;return this.x=e*Math.sin(t.theta),this.y=Math.cos(t.phi)*t.radius,this.z=e*Math.cos(t.theta),this},setFromCylindrical:function(t){return this.x=t.radius*Math.sin(t.theta),this.y=t.y,this.z=t.radius*Math.cos(t.theta),this},setFromMatrixPosition:function(t){return this.setFromMatrixColumn(t,3)},setFromMatrixScale:function(t){var e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this},setFromMatrixColumn:function(t,e){if(typeof t=="number"){console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");var n=t;t=e,e=n}return this.fromArray(t.elements,e*4)},equals:function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z},fromArray:function(t,e){return e===void 0&&(e=0),this.x=t[e],this.y=t[e+1],this.z=t[e+2],this},toArray:function(t,e){return t===void 0&&(t=[]),e===void 0&&(e=0),t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t},fromAttribute:function(t,e,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}};function Ye(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}Ye.prototype={constructor:Ye,isMatrix4:!0,set:function(t,e,n,i,r,a,s,o,c,l,h,u,f,p,g,d){var m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=s,m[13]=o,m[2]=c,m[6]=l,m[10]=h,m[14]=u,m[3]=f,m[7]=p,m[11]=g,m[15]=d,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return new Ye().fromArray(this.elements)},copy:function(t){return this.elements.set(t.elements),this},copyPosition:function(t){var e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this},extractBasis:function(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this},makeBasis:function(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this},extractRotation:function(){var t;return function(n){t===void 0&&(t=new U);var i=this.elements,r=n.elements,a=1/t.setFromMatrixColumn(n,0).length(),s=1/t.setFromMatrixColumn(n,1).length(),o=1/t.setFromMatrixColumn(n,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[4]=r[4]*s,i[5]=r[5]*s,i[6]=r[6]*s,i[8]=r[8]*o,i[9]=r[9]*o,i[10]=r[10]*o,this}}(),makeRotationFromEuler:function(t){(t&&t.isEuler)===!1&&console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),s=Math.sin(n),o=Math.cos(i),c=Math.sin(i),l=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){var u=a*l,f=a*h,p=s*l,g=s*h;e[0]=o*l,e[4]=-o*h,e[8]=c,e[1]=f+p*c,e[5]=u-g*c,e[9]=-s*o,e[2]=g-u*c,e[6]=p+f*c,e[10]=a*o}else if(t.order==="YXZ"){var d=o*l,m=o*h,v=c*l,_=c*h;e[0]=d+_*s,e[4]=v*s-m,e[8]=a*c,e[1]=a*h,e[5]=a*l,e[9]=-s,e[2]=m*s-v,e[6]=_+d*s,e[10]=a*o}else if(t.order==="ZXY"){var d=o*l,m=o*h,v=c*l,_=c*h;e[0]=d-_*s,e[4]=-a*h,e[8]=v+m*s,e[1]=m+v*s,e[5]=a*l,e[9]=_-d*s,e[2]=-a*c,e[6]=s,e[10]=a*o}else if(t.order==="ZYX"){var u=a*l,f=a*h,p=s*l,g=s*h;e[0]=o*l,e[4]=p*c-f,e[8]=u*c+g,e[1]=o*h,e[5]=g*c+u,e[9]=f*c-p,e[2]=-c,e[6]=s*o,e[10]=a*o}else if(t.order==="YZX"){var x=a*o,y=a*c,b=s*o,E=s*c;e[0]=o*l,e[4]=E-x*h,e[8]=b*h+y,e[1]=h,e[5]=a*l,e[9]=-s*l,e[2]=-c*l,e[6]=y*h+b,e[10]=x-E*h}else if(t.order==="XZY"){var x=a*o,y=a*c,b=s*o,E=s*c;e[0]=o*l,e[4]=-h,e[8]=c*l,e[1]=x*h+E,e[5]=a*l,e[9]=y*h-b,e[2]=b*h-y,e[6]=s*l,e[10]=E*h+x}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this},makeRotationFromQuaternion:function(t){var e=this.elements,n=t.x,i=t.y,r=t.z,a=t.w,s=n+n,o=i+i,c=r+r,l=n*s,h=n*o,u=n*c,f=i*o,p=i*c,g=r*c,d=a*s,m=a*o,v=a*c;return e[0]=1-(f+g),e[4]=h-v,e[8]=u+m,e[1]=h+v,e[5]=1-(l+g),e[9]=p-d,e[2]=u-m,e[6]=p+d,e[10]=1-(l+f),e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this},lookAt:function(){var t,e,n;return function(r,a,s){t===void 0&&(t=new U,e=new U,n=new U);var o=this.elements;return n.subVectors(r,a).normalize(),n.lengthSq()===0&&(n.z=1),t.crossVectors(s,n).normalize(),t.lengthSq()===0&&(n.z+=1e-4,t.crossVectors(s,n).normalize()),e.crossVectors(n,t),o[0]=t.x,o[4]=e.x,o[8]=n.x,o[1]=t.y,o[5]=e.y,o[9]=n.y,o[2]=t.z,o[6]=e.z,o[10]=n.z,this}}(),multiply:function(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,e){var n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[4],o=n[8],c=n[12],l=n[1],h=n[5],u=n[9],f=n[13],p=n[2],g=n[6],d=n[10],m=n[14],v=n[3],_=n[7],x=n[11],y=n[15],b=i[0],E=i[4],S=i[8],M=i[12],w=i[1],L=i[5],z=i[9],V=i[13],A=i[2],T=i[6],P=i[10],O=i[14],H=i[3],N=i[7],I=i[11],B=i[15];return r[0]=a*b+s*w+o*A+c*H,r[4]=a*E+s*L+o*T+c*N,r[8]=a*S+s*z+o*P+c*I,r[12]=a*M+s*V+o*O+c*B,r[1]=l*b+h*w+u*A+f*H,r[5]=l*E+h*L+u*T+f*N,r[9]=l*S+h*z+u*P+f*I,r[13]=l*M+h*V+u*O+f*B,r[2]=p*b+g*w+d*A+m*H,r[6]=p*E+g*L+d*T+m*N,r[10]=p*S+g*z+d*P+m*I,r[14]=p*M+g*V+d*O+m*B,r[3]=v*b+_*w+x*A+y*H,r[7]=v*E+_*L+x*T+y*N,r[11]=v*S+_*z+x*P+y*I,r[15]=v*M+_*V+x*O+y*B,this},multiplyToArray:function(t,e,n){var i=this.elements;return this.multiplyMatrices(t,e),n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this},multiplyScalar:function(t){var e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this},applyToVector3Array:function(){var t;return function(n,i,r){t===void 0&&(t=new U),i===void 0&&(i=0),r===void 0&&(r=n.length);for(var a=0,s=i;a<r;a+=3,s+=3)t.fromArray(n,s),t.applyMatrix4(this),t.toArray(n,s);return n}}(),applyToBufferAttribute:function(){var t;return function(n){t===void 0&&(t=new U);for(var i=0,r=n.count;i<r;i++)t.x=n.getX(i),t.y=n.getY(i),t.z=n.getZ(i),t.applyMatrix4(this),n.setXYZ(i,t.x,t.y,t.z);return n}}(),determinant:function(){var t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],s=t[5],o=t[9],c=t[13],l=t[2],h=t[6],u=t[10],f=t[14],p=t[3],g=t[7],d=t[11],m=t[15];return p*(+r*o*h-i*c*h-r*s*u+n*c*u+i*s*f-n*o*f)+g*(+e*o*f-e*c*u+r*a*u-i*a*f+i*c*l-r*o*l)+d*(+e*c*h-e*s*f-r*a*h+n*a*f+r*s*l-n*c*l)+m*(-i*s*l-e*o*h+e*s*u+i*a*h-n*a*u+n*o*l)},transpose:function(){var t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this},setPosition:function(t){var e=this.elements;return e[12]=t.x,e[13]=t.y,e[14]=t.z,this},getInverse:function(t,e){var n=this.elements,i=t.elements,r=i[0],a=i[1],s=i[2],o=i[3],c=i[4],l=i[5],h=i[6],u=i[7],f=i[8],p=i[9],g=i[10],d=i[11],m=i[12],v=i[13],_=i[14],x=i[15],y=p*_*u-v*g*u+v*h*d-l*_*d-p*h*x+l*g*x,b=m*g*u-f*_*u-m*h*d+c*_*d+f*h*x-c*g*x,E=f*v*u-m*p*u+m*l*d-c*v*d-f*l*x+c*p*x,S=m*p*h-f*v*h-m*l*g+c*v*g+f*l*_-c*p*_,M=r*y+a*b+s*E+o*S;if(M===0){var w="THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";if(e===!0)throw new Error(w);return console.warn(w),this.identity()}var L=1/M;return n[0]=y*L,n[1]=(v*g*o-p*_*o-v*s*d+a*_*d+p*s*x-a*g*x)*L,n[2]=(l*_*o-v*h*o+v*s*u-a*_*u-l*s*x+a*h*x)*L,n[3]=(p*h*o-l*g*o-p*s*u+a*g*u+l*s*d-a*h*d)*L,n[4]=b*L,n[5]=(f*_*o-m*g*o+m*s*d-r*_*d-f*s*x+r*g*x)*L,n[6]=(m*h*o-c*_*o-m*s*u+r*_*u+c*s*x-r*h*x)*L,n[7]=(c*g*o-f*h*o+f*s*u-r*g*u-c*s*d+r*h*d)*L,n[8]=E*L,n[9]=(m*p*o-f*v*o-m*a*d+r*v*d+f*a*x-r*p*x)*L,n[10]=(c*v*o-m*l*o+m*a*u-r*v*u-c*a*x+r*l*x)*L,n[11]=(f*l*o-c*p*o-f*a*u+r*p*u+c*a*d-r*l*d)*L,n[12]=S*L,n[13]=(f*v*s-m*p*s+m*a*g-r*v*g-f*a*_+r*p*_)*L,n[14]=(m*l*s-c*v*s-m*a*h+r*v*h+c*a*_-r*l*_)*L,n[15]=(c*p*s-f*l*s+f*a*h-r*p*h-c*a*g+r*l*g)*L,this},scale:function(t){var e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this},getMaxScaleOnAxis:function(){var t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))},makeTranslation:function(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this},makeRotationX:function(t){var e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this},makeRotationY:function(t){var e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this},makeRotationZ:function(t){var e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(t,e){var n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,s=t.y,o=t.z,c=r*a,l=r*s;return this.set(c*a+n,c*s-i*o,c*o+i*s,0,c*s+i*o,l*s+n,l*o-i*a,0,c*o-i*s,l*o+i*a,r*o*o+n,0,0,0,0,1),this},makeScale:function(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this},makeShear:function(t,e,n){return this.set(1,e,n,0,t,1,n,0,t,e,1,0,0,0,0,1),this},compose:function(t,e,n){return this.makeRotationFromQuaternion(e),this.scale(n),this.setPosition(t),this},decompose:function(){var t,e;return function(i,r,a){t===void 0&&(t=new U,e=new Ye);var s=this.elements,o=t.set(s[0],s[1],s[2]).length(),c=t.set(s[4],s[5],s[6]).length(),l=t.set(s[8],s[9],s[10]).length(),h=this.determinant();h<0&&(o=-o),i.x=s[12],i.y=s[13],i.z=s[14],e.elements.set(this.elements);var u=1/o,f=1/c,p=1/l;return e.elements[0]*=u,e.elements[1]*=u,e.elements[2]*=u,e.elements[4]*=f,e.elements[5]*=f,e.elements[6]*=f,e.elements[8]*=p,e.elements[9]*=p,e.elements[10]*=p,r.setFromRotationMatrix(e),a.x=o,a.y=c,a.z=l,this}}(),makeFrustum:function(t,e,n,i,r,a){var s=this.elements,o=2*r/(e-t),c=2*r/(i-n),l=(e+t)/(e-t),h=(i+n)/(i-n),u=-(a+r)/(a-r),f=-2*a*r/(a-r);return s[0]=o,s[4]=0,s[8]=l,s[12]=0,s[1]=0,s[5]=c,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=u,s[14]=f,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this},makePerspective:function(t,e,n,i){var r=n*Math.tan(Qe.DEG2RAD*t*.5),a=-r,s=a*e,o=r*e;return this.makeFrustum(s,o,a,r,n,i)},makeOrthographic:function(t,e,n,i,r,a){var s=this.elements,o=1/(e-t),c=1/(n-i),l=1/(a-r),h=(e+t)*o,u=(n+i)*c,f=(a+r)*l;return s[0]=2*o,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-u,s[2]=0,s[6]=0,s[10]=-2*l,s[14]=-f,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this},equals:function(t){for(var e=this.elements,n=t.elements,i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0},fromArray:function(t,e){e===void 0&&(e=0);for(var n=0;n<16;n++)this.elements[n]=t[n+e];return this},toArray:function(t,e){t===void 0&&(t=[]),e===void 0&&(e=0);var n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};function hr(t,e,n,i,r,a,s,o,c,l){t=t!==void 0?t:[],e=e!==void 0?e:Xc,Mt.call(this,t,e,n,i,r,a,s,o,c,l),this.flipY=!1}hr.prototype=Object.create(Mt.prototype);hr.prototype.constructor=hr;hr.prototype.isCubeTexture=!0;Object.defineProperty(hr.prototype,"images",{get:function(){return this.image},set:function(t){this.image=t}});var gv=new Mt,vv=new hr;function _v(){this.seq=[],this.map={}}var Pp=[],Dp=[];function qs(t,e,n){var i=t[0];if(i<=0||i>0)return t;var r=e*n,a=Pp[r];if(a===void 0&&(a=new Float32Array(r),Pp[r]=a),e!==0){i.toArray(a,0);for(var s=1,o=0;s!==e;++s)o+=n,t[s].toArray(a,o)}return a}function xv(t,e){var n=Dp[e];n===void 0&&(n=new Int32Array(e),Dp[e]=n);for(var i=0;i!==e;++i)n[i]=t.allocTextureUnit();return n}function d1(t,e){t.uniform1f(this.addr,e)}function p1(t,e){t.uniform1i(this.addr,e)}function m1(t,e){e.x===void 0?t.uniform2fv(this.addr,e):t.uniform2f(this.addr,e.x,e.y)}function g1(t,e){e.x!==void 0?t.uniform3f(this.addr,e.x,e.y,e.z):e.r!==void 0?t.uniform3f(this.addr,e.r,e.g,e.b):t.uniform3fv(this.addr,e)}function v1(t,e){e.x===void 0?t.uniform4fv(this.addr,e):t.uniform4f(this.addr,e.x,e.y,e.z,e.w)}function _1(t,e){t.uniformMatrix2fv(this.addr,!1,e.elements||e)}function x1(t,e){t.uniformMatrix3fv(this.addr,!1,e.elements||e)}function y1(t,e){t.uniformMatrix4fv(this.addr,!1,e.elements||e)}function b1(t,e,n){var i=n.allocTextureUnit();t.uniform1i(this.addr,i),n.setTexture2D(e||gv,i)}function M1(t,e,n){var i=n.allocTextureUnit();t.uniform1i(this.addr,i),n.setTextureCube(e||vv,i)}function yv(t,e){t.uniform2iv(this.addr,e)}function bv(t,e){t.uniform3iv(this.addr,e)}function Mv(t,e){t.uniform4iv(this.addr,e)}function w1(t){switch(t){case 5126:return d1;case 35664:return m1;case 35665:return g1;case 35666:return v1;case 35674:return _1;case 35675:return x1;case 35676:return y1;case 35678:return b1;case 35680:return M1;case 5124:case 35670:return p1;case 35667:case 35671:return yv;case 35668:case 35672:return bv;case 35669:case 35673:return Mv}}function E1(t,e){t.uniform1fv(this.addr,e)}function S1(t,e){t.uniform1iv(this.addr,e)}function T1(t,e){t.uniform2fv(this.addr,qs(e,this.size,2))}function A1(t,e){t.uniform3fv(this.addr,qs(e,this.size,3))}function C1(t,e){t.uniform4fv(this.addr,qs(e,this.size,4))}function L1(t,e){t.uniformMatrix2fv(this.addr,!1,qs(e,this.size,4))}function R1(t,e){t.uniformMatrix3fv(this.addr,!1,qs(e,this.size,9))}function P1(t,e){t.uniformMatrix4fv(this.addr,!1,qs(e,this.size,16))}function D1(t,e,n){var i=e.length,r=xv(n,i);t.uniform1iv(this.addr,r);for(var a=0;a!==i;++a)n.setTexture2D(e[a]||gv,r[a])}function F1(t,e,n){var i=e.length,r=xv(n,i);t.uniform1iv(this.addr,r);for(var a=0;a!==i;++a)n.setTextureCube(e[a]||vv,r[a])}function I1(t){switch(t){case 5126:return E1;case 35664:return T1;case 35665:return A1;case 35666:return C1;case 35674:return L1;case 35675:return R1;case 35676:return P1;case 35678:return D1;case 35680:return F1;case 5124:case 35670:return S1;case 35667:case 35671:return yv;case 35668:case 35672:return bv;case 35669:case 35673:return Mv}}function U1(t,e,n){this.id=t,this.addr=n,this.setValue=w1(e.type)}function k1(t,e,n){this.id=t,this.addr=n,this.size=e.size,this.setValue=I1(e.type)}function wv(t){this.id=t,_v.call(this)}wv.prototype.setValue=function(t,e){for(var n=this.seq,i=0,r=n.length;i!==r;++i){var a=n[i];a.setValue(t,e[a.id])}};var Xh=/([\w\d_]+)(\])?(\[|\.)?/g;function Fp(t,e){t.seq.push(e),t.map[e.id]=e}function O1(t,e,n){var i=t.name,r=i.length;for(Xh.lastIndex=0;;){var a=Xh.exec(i),s=Xh.lastIndex,o=a[1],c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===r){Fp(n,l===void 0?new U1(o,t,e):new k1(o,t,e));break}else{var h=n.map,u=h[o];u===void 0&&(u=new wv(o),Fp(n,u)),n=u}}}function ur(t,e,n){_v.call(this),this.renderer=n;for(var i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS),r=0;r!==i;++r){var a=t.getActiveUniform(e,r),s=a.name,o=t.getUniformLocation(e,s);O1(a,o,this)}}ur.prototype.setValue=function(t,e,n){var i=this.map[e];i!==void 0&&i.setValue(t,n,this.renderer)};ur.prototype.set=function(t,e,n){var i=this.map[n];i!==void 0&&i.setValue(t,e[n],this.renderer)};ur.prototype.setOptional=function(t,e,n){var i=e[n];i!==void 0&&this.setValue(t,n,i)};ur.upload=function(t,e,n,i){for(var r=0,a=e.length;r!==a;++r){var s=e[r],o=n[s.id];o.needsUpdate!==!1&&s.setValue(t,o.value,i)}};ur.seqWithValue=function(t,e){for(var n=[],i=0,r=t.length;i!==r;++i){var a=t[i];a.id in e&&n.push(a)}return n};var vn={merge:function(t){for(var e={},n=0;n<t.length;n++){var i=this.clone(t[n]);for(var r in i)e[r]=i[r]}return e},clone:function(t){var e={};for(var n in t){e[n]={};for(var i in t[n]){var r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}},N1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif
`,B1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif
`,z1=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif
`,G1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( PHYSICAL )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif
`,V1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H1=`
vec3 transformed = vec3( position );
`,W1=`
vec3 objectNormal = vec3( normal );
`,X1=`float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
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
`,q1=`#ifdef USE_BUMPMAP
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
`,Y1=`#if NUM_CLIPPING_PLANES > 0
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
`,j1=`#if NUM_CLIPPING_PLANES > 0
	#if ! defined( PHYSICAL ) && ! defined( PHONG )
		varying vec3 vViewPosition;
	#endif
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif
`,$1=`#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )
	varying vec3 vViewPosition;
#endif
`,Z1=`#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )
	vViewPosition = - mvPosition.xyz;
#endif
`,J1=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,Q1=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif
`,K1=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,eE=`#ifdef USE_COLOR
	vColor.xyz = color.xyz;
#endif`,tE=`#define PI 3.14159265359
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
`,nE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
`,iE=`#ifdef FLIP_SIDED
	objectNormal = -objectNormal;
#endif
vec3 transformedNormal = normalMatrix * objectNormal;
`,rE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif
`,aE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );
#endif
`,sE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif
`,oE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif
`,lE=`  gl_FragColor = linearToOutputTexel( gl_FragColor );
`,cE=`
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
`,hE=`#ifdef USE_ENVMAP
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
`,uE=`#if defined( USE_ENVMAP ) || defined( PHYSICAL )
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
`,fE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif
`,dE=`#ifdef USE_ENVMAP
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
`,pE=`#ifdef USE_FOG
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
`,mE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gE=`#ifdef TOON
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
`,vE=`#ifdef USE_LIGHTMAP
	reflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;
#endif
`,_E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xE=`vec3 diffuse = vec3( 1.0 );
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
`,yE=`uniform vec3 ambientLightColor;
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
`,bE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,ME=`varying vec3 vViewPosition;
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
`,wE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );
#ifdef STANDARD
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
	material.clearCoat = saturate( clearCoat );	material.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );
#endif
`,EE=`struct PhysicalMaterial {
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
`,SE=`
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
`,TE=`#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)
	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;
#endif`,AE=`#ifdef USE_LOGDEPTHBUF
	uniform float logDepthBufFC;
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
	#endif
#endif
`,CE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
	#endif
	uniform float logDepthBufFC;
#endif`,LE=`#ifdef USE_LOGDEPTHBUF
	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
	#else
		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;
	#endif
#endif
`,RE=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif
`,PE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif
`,DE=`#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
`,FE=`#ifdef USE_MAP
	uniform vec4 offsetRepeat;
	uniform sampler2D map;
#endif
`,IE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.r;
#endif
`,UE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kE=`#ifdef USE_MORPHNORMALS
	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];
	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];
	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];
	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];
#endif
`,OE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_MORPHNORMALS
	uniform float morphTargetInfluences[ 8 ];
	#else
	uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,NE=`#ifdef USE_MORPHTARGETS
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
`,BE=`#ifdef DOUBLE_SIDED
	float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );
#else
	float flipNormal = 1.0;
#endif
`,zE=`#ifdef FLAT_SHADED
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
`,GE=`#ifdef USE_NORMALMAP
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
`,VE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
`,HE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif
`,WE=`#ifdef USE_SKINNING
	vec4 mvPosition = modelViewMatrix * skinned;
#else
	vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
#endif
gl_Position = projectionMatrix * mvPosition;
`,XE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.r;
#endif
`,qE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YE=`#ifdef USE_SHADOWMAP
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
`,jE=`#ifdef USE_SHADOWMAP
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
`,$E=`#ifdef USE_SHADOWMAP
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
`,ZE=`float getShadowMask() {
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
`,JE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QE=`#ifdef USE_SKINNING
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
`,KE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	skinned  = bindMatrixInverse * skinned;
#endif
`,eS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
#endif
`,tS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iS=`#if defined( TONE_MAPPING )
  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif
`,rS=`#define saturate(a) clamp( a, 0.0, 1.0 )
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
`,aS=`#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )
	varying vec2 vUv;
#endif`,sS=`#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )
	varying vec2 vUv;
	uniform vec4 offsetRepeat;
#endif
`,oS=`#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )
	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;
#endif`,lS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,cS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
#endif`,hS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = uv2;
#endif`,uS=`#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )
	#ifdef USE_SKINNING
		vec4 worldPosition = modelMatrix * skinned;
	#else
		vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );
	#endif
#endif
`,fS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldPosition;
#include <common>
void main() {
	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );
	gl_FragColor.a *= opacity;
}
`,dS=`varying vec3 vWorldPosition;
#include <common>
void main() {
	vWorldPosition = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}
`,pS=`#if DEPTH_PACKING == 3200
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
`,mS=`#include <common>
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
`,gS=`uniform vec3 lightPos;
varying vec4 vWorldPosition;
#include <common>
#include <packing>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	gl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );
}
`,vS=`varying vec4 vWorldPosition;
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
`,_S=`uniform sampler2D tEquirect;
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
`,xS=`varying vec3 vWorldPosition;
#include <common>
void main() {
	vWorldPosition = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}
`,yS=`uniform vec3 diffuse;
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
`,bS=`uniform float scale;
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
`,MS=`uniform vec3 diffuse;
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
`,wS=`#include <common>
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
`,ES=`uniform vec3 diffuse;
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
`,SS=`#define LAMBERT
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
`,TS=`#define PHONG
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
`,AS=`#define PHONG
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
`,CS=`#define PHYSICAL
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
`,LS=`#define PHYSICAL
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
`,RS=`#define NORMAL
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
`,PS=`#define NORMAL
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
`,DS=`uniform vec3 diffuse;
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
`,FS=`uniform float size;
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
`,IS=`uniform float opacity;
#include <common>
#include <packing>
#include <bsdfs>
#include <lights_pars>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0  - getShadowMask() ) );
}
`,US=`#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
}
`,vt={alphamap_fragment:N1,alphamap_pars_fragment:B1,alphatest_fragment:z1,aomap_fragment:G1,aomap_pars_fragment:V1,begin_vertex:H1,beginnormal_vertex:W1,bsdfs:X1,bumpmap_pars_fragment:q1,clipping_planes_fragment:Y1,clipping_planes_pars_fragment:j1,clipping_planes_pars_vertex:$1,clipping_planes_vertex:Z1,color_fragment:J1,color_pars_fragment:Q1,color_pars_vertex:K1,color_vertex:eE,common:tE,cube_uv_reflection_fragment:nE,defaultnormal_vertex:iE,displacementmap_pars_vertex:rE,displacementmap_vertex:aE,emissivemap_fragment:sE,emissivemap_pars_fragment:oE,encodings_fragment:lE,encodings_pars_fragment:cE,envmap_fragment:hE,envmap_pars_fragment:uE,envmap_pars_vertex:fE,envmap_vertex:dE,fog_fragment:pE,fog_pars_fragment:mE,gradientmap_pars_fragment:gE,lightmap_fragment:vE,lightmap_pars_fragment:_E,lights_lambert_vertex:xE,lights_pars:yE,lights_phong_fragment:bE,lights_phong_pars_fragment:ME,lights_physical_fragment:wE,lights_physical_pars_fragment:EE,lights_template:SE,logdepthbuf_fragment:TE,logdepthbuf_pars_fragment:AE,logdepthbuf_pars_vertex:CE,logdepthbuf_vertex:LE,map_fragment:RE,map_pars_fragment:PE,map_particle_fragment:DE,map_particle_pars_fragment:FE,metalnessmap_fragment:IE,metalnessmap_pars_fragment:UE,morphnormal_vertex:kE,morphtarget_pars_vertex:OE,morphtarget_vertex:NE,normal_flip:BE,normal_fragment:zE,normalmap_pars_fragment:GE,packing:VE,premultiplied_alpha_fragment:HE,project_vertex:WE,roughnessmap_fragment:XE,roughnessmap_pars_fragment:qE,shadowmap_pars_fragment:YE,shadowmap_pars_vertex:jE,shadowmap_vertex:$E,shadowmask_pars_fragment:ZE,skinbase_vertex:JE,skinning_pars_vertex:QE,skinning_vertex:KE,skinnormal_vertex:eS,specularmap_fragment:tS,specularmap_pars_fragment:nS,tonemapping_fragment:iS,tonemapping_pars_fragment:rS,uv_pars_fragment:aS,uv_pars_vertex:sS,uv_vertex:oS,uv2_pars_fragment:lS,uv2_pars_vertex:cS,uv2_vertex:hS,worldpos_vertex:uS,cube_frag:fS,cube_vert:dS,depth_frag:pS,depth_vert:mS,distanceRGBA_frag:gS,distanceRGBA_vert:vS,equirect_frag:_S,equirect_vert:xS,linedashed_frag:yS,linedashed_vert:bS,meshbasic_frag:MS,meshbasic_vert:wS,meshlambert_frag:ES,meshlambert_vert:SS,meshphong_frag:TS,meshphong_vert:AS,meshphysical_frag:CS,meshphysical_vert:LS,normal_frag:RS,normal_vert:PS,points_frag:DS,points_vert:FS,shadow_frag:IS,shadow_vert:US};function Ve(t,e,n){return e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}Ve.prototype={constructor:Ve,isColor:!0,r:1,g:1,b:1,set:function(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this},setScalar:function(t){return this.r=t,this.g=t,this.b=t,this},setHex:function(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,this},setRGB:function(t,e,n){return this.r=t,this.g=e,this.b=n,this},setHSL:function(){function t(e,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(n-e)*6*i:i<1/2?n:i<2/3?e+(n-e)*6*(2/3-i):e}return function(n,i,r){if(n=Qe.euclideanModulo(n,1),i=Qe.clamp(i,0,1),r=Qe.clamp(r,0,1),i===0)this.r=this.g=this.b=r;else{var a=r<=.5?r*(1+i):r+i-r*i,s=2*r-a;this.r=t(s,a,n+1/3),this.g=t(s,a,n),this.b=t(s,a,n-1/3)}return this}}(),setStyle:function(t){function e(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}var n;if(n=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)){var i,r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(i=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,e(i[5]),this;if(i=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,e(i[5]),this;break;case"hsl":case"hsla":if(i=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)){var s=parseFloat(i[1])/360,o=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return e(i[5]),this.setHSL(s,o,c)}break}}else if(n=/^\#([A-Fa-f0-9]+)$/.exec(t)){var l=n[1],h=l.length;if(h===3)return this.r=parseInt(l.charAt(0)+l.charAt(0),16)/255,this.g=parseInt(l.charAt(1)+l.charAt(1),16)/255,this.b=parseInt(l.charAt(2)+l.charAt(2),16)/255,this;if(h===6)return this.r=parseInt(l.charAt(0)+l.charAt(1),16)/255,this.g=parseInt(l.charAt(2)+l.charAt(3),16)/255,this.b=parseInt(l.charAt(4)+l.charAt(5),16)/255,this}if(t&&t.length>0){var l=kS[t];l!==void 0?this.setHex(l):console.warn("THREE.Color: Unknown color "+t)}return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(t){return this.r=t.r,this.g=t.g,this.b=t.b,this},copyGammaToLinear:function(t,e){return e===void 0&&(e=2),this.r=Math.pow(t.r,e),this.g=Math.pow(t.g,e),this.b=Math.pow(t.b,e),this},copyLinearToGamma:function(t,e){e===void 0&&(e=2);var n=e>0?1/e:1;return this.r=Math.pow(t.r,n),this.g=Math.pow(t.g,n),this.b=Math.pow(t.b,n),this},convertGammaToLinear:function(){var t=this.r,e=this.g,n=this.b;return this.r=t*t,this.g=e*e,this.b=n*n,this},convertLinearToGamma:function(){return this.r=Math.sqrt(this.r),this.g=Math.sqrt(this.g),this.b=Math.sqrt(this.b),this},getHex:function(){return this.r*255<<16^this.g*255<<8^this.b*255<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(t){var e=t||{h:0,s:0,l:0},n=this.r,i=this.g,r=this.b,a=Math.max(n,i,r),s=Math.min(n,i,r),o,c,l=(s+a)/2;if(s===a)o=0,c=0;else{var h=a-s;switch(c=l<=.5?h/(a+s):h/(2-a-s),a){case n:o=(i-r)/h+(i<r?6:0);break;case i:o=(r-n)/h+2;break;case r:o=(n-i)/h+4;break}o/=6}return e.h=o,e.s=c,e.l=l,e},getStyle:function(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"},offsetHSL:function(t,e,n){var i=this.getHSL();return i.h+=t,i.s+=e,i.l+=n,this.setHSL(i.h,i.s,i.l),this},add:function(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this},addColors:function(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this},addScalar:function(t){return this.r+=t,this.g+=t,this.b+=t,this},sub:function(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this},multiply:function(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this},multiplyScalar:function(t){return this.r*=t,this.g*=t,this.b*=t,this},lerp:function(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this},equals:function(t){return t.r===this.r&&t.g===this.g&&t.b===this.b},fromArray:function(t,e){return e===void 0&&(e=0),this.r=t[e],this.g=t[e+1],this.b=t[e+2],this},toArray:function(t,e){return t===void 0&&(t=[]),e===void 0&&(e=0),t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t},toJSON:function(){return this.getHex()}};var kS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function jr(t,e,n,i,r,a,s,o,c,l,h,u){Mt.call(this,null,a,s,o,c,l,i,r,h,u),this.image={data:t,width:e,height:n},this.magFilter=c!==void 0?c:Nn,this.minFilter=l!==void 0?l:Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}jr.prototype=Object.create(Mt.prototype);jr.prototype.constructor=jr;jr.prototype.isDataTexture=!0;var et={common:{diffuse:{value:new Ve(15658734)},opacity:{value:1},map:{value:null},offsetRepeat:{value:new xt(0,0,1,1)},specularMap:{value:null},alphaMap:{value:null},envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new Ve(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},offsetRepeat:{value:new xt(0,0,1,1)}}},as={basic:{uniforms:vn.merge([et.common,et.aomap,et.lightmap,et.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:vn.merge([et.common,et.aomap,et.lightmap,et.emissivemap,et.fog,et.lights,{emissive:{value:new Ve(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:vn.merge([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:vn.merge([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Ve(0)},roughness:{value:.5},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},points:{uniforms:vn.merge([et.points,et.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:vn.merge([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:vn.merge([et.common,et.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:vn.merge([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:vt.normal_vert,fragmentShader:vt.normal_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null},tFlip:{value:-1}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:{lightPos:{value:new U}},vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag}};as.physical={uniforms:vn.merge([as.standard.uniforms,{clearCoat:{value:0},clearCoatRoughness:{value:0}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};function wo(t,e){this.min=t!==void 0?t:new Ce(1/0,1/0),this.max=e!==void 0?e:new Ce(-1/0,-1/0)}wo.prototype={constructor:wo,set:function(t,e){return this.min.copy(t),this.max.copy(e),this},setFromPoints:function(t){this.makeEmpty();for(var e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this},setFromCenterAndSize:function(){var t=new Ce;return function(n,i){var r=t.copy(i).multiplyScalar(.5);return this.min.copy(n).sub(r),this.max.copy(n).add(r),this}}(),clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.min.copy(t.min),this.max.copy(t.max),this},makeEmpty:function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(t){var e=t||new Ce;return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(t){var e=t||new Ce;return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)},expandByPoint:function(t){return this.min.min(t),this.max.max(t),this},expandByVector:function(t){return this.min.sub(t),this.max.add(t),this},expandByScalar:function(t){return this.min.addScalar(-t),this.max.addScalar(t),this},containsPoint:function(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)},containsBox:function(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y},getParameter:function(t,e){var n=e||new Ce;return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)},clampPoint:function(t,e){var n=e||new Ce;return n.copy(t).clamp(this.min,this.max)},distanceToPoint:function(){var t=new Ce;return function(n){var i=t.copy(n).clamp(this.min,this.max);return i.sub(n).length()}}(),intersect:function(t){return this.min.max(t.min),this.max.min(t.max),this},union:function(t){return this.min.min(t.min),this.max.max(t.max),this},translate:function(t){return this.min.add(t),this.max.add(t),this},equals:function(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};function OS(t,e){var n=t.context,i=t.state,r,a,s,o,c,l,h,u;function f(){var g=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),d=new Uint16Array([0,1,2,0,2,3]);r=n.createBuffer(),a=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,r),n.bufferData(n.ARRAY_BUFFER,g,n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,a),n.bufferData(n.ELEMENT_ARRAY_BUFFER,d,n.STATIC_DRAW),h=n.createTexture(),u=n.createTexture(),i.bindTexture(n.TEXTURE_2D,h),n.texImage2D(n.TEXTURE_2D,0,n.RGB,16,16,0,n.RGB,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),i.bindTexture(n.TEXTURE_2D,u),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,16,16,0,n.RGBA,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),s={vertexShader:["uniform lowp int renderType;","uniform vec3 screenPosition;","uniform vec2 scale;","uniform float rotation;","uniform sampler2D occlusionMap;","attribute vec2 position;","attribute vec2 uv;","varying vec2 vUV;","varying float vVisibility;","void main() {","vUV = uv;","vec2 pos = position;","if ( renderType == 2 ) {","vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );","visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );","visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );","visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );","visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );","visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );","visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );","visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );","visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );","vVisibility =        visibility.r / 9.0;","vVisibility *= 1.0 - visibility.g / 9.0;","vVisibility *=       visibility.b / 9.0;","vVisibility *= 1.0 - visibility.a / 9.0;","pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;","pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;","}","gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );","}"].join(`
`),fragmentShader:["uniform lowp int renderType;","uniform sampler2D map;","uniform float opacity;","uniform vec3 color;","varying vec2 vUV;","varying float vVisibility;","void main() {","if ( renderType == 0 ) {","gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );","} else if ( renderType == 1 ) {","gl_FragColor = texture2D( map, vUV );","} else {","vec4 texture = texture2D( map, vUV );","texture.a *= opacity * vVisibility;","gl_FragColor = texture;","gl_FragColor.rgb *= color;","}","}"].join(`
`)},o=p(s),c={vertex:n.getAttribLocation(o,"position"),uv:n.getAttribLocation(o,"uv")},l={renderType:n.getUniformLocation(o,"renderType"),map:n.getUniformLocation(o,"map"),occlusionMap:n.getUniformLocation(o,"occlusionMap"),opacity:n.getUniformLocation(o,"opacity"),color:n.getUniformLocation(o,"color"),scale:n.getUniformLocation(o,"scale"),rotation:n.getUniformLocation(o,"rotation"),screenPosition:n.getUniformLocation(o,"screenPosition")}}this.render=function(g,d,m){if(e.length!==0){var v=new U,_=m.w/m.z,x=m.z*.5,y=m.w*.5,b=16/m.w,E=new Ce(b*_,b),S=new U(1,1,0),M=new Ce(1,1),w=new wo;w.min.set(m.x,m.y),w.max.set(m.x+(m.z-16),m.y+(m.w-16)),o===void 0&&f(),n.useProgram(o),i.initAttributes(),i.enableAttribute(c.vertex),i.enableAttribute(c.uv),i.disableUnusedAttributes(),n.uniform1i(l.occlusionMap,0),n.uniform1i(l.map,1),n.bindBuffer(n.ARRAY_BUFFER,r),n.vertexAttribPointer(c.vertex,2,n.FLOAT,!1,2*8,0),n.vertexAttribPointer(c.uv,2,n.FLOAT,!1,2*8,8),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,a),i.disable(n.CULL_FACE),i.setDepthWrite(!1);for(var L=0,z=e.length;L<z;L++){b=16/m.w,E.set(b*_,b);var V=e[L];if(v.set(V.matrixWorld.elements[12],V.matrixWorld.elements[13],V.matrixWorld.elements[14]),v.applyMatrix4(d.matrixWorldInverse),v.applyProjection(d.projectionMatrix),S.copy(v),M.x=m.x+S.x*x+x-8,M.y=m.y+S.y*y+y-8,w.containsPoint(M)===!0){i.activeTexture(n.TEXTURE0),i.bindTexture(n.TEXTURE_2D,null),i.activeTexture(n.TEXTURE1),i.bindTexture(n.TEXTURE_2D,h),n.copyTexImage2D(n.TEXTURE_2D,0,n.RGB,M.x,M.y,16,16,0),n.uniform1i(l.renderType,0),n.uniform2f(l.scale,E.x,E.y),n.uniform3f(l.screenPosition,S.x,S.y,S.z),i.disable(n.BLEND),i.enable(n.DEPTH_TEST),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0),i.activeTexture(n.TEXTURE0),i.bindTexture(n.TEXTURE_2D,u),n.copyTexImage2D(n.TEXTURE_2D,0,n.RGBA,M.x,M.y,16,16,0),n.uniform1i(l.renderType,1),i.disable(n.DEPTH_TEST),i.activeTexture(n.TEXTURE1),i.bindTexture(n.TEXTURE_2D,h),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0),V.positionScreen.copy(S),V.customUpdateCallback?V.customUpdateCallback(V):V.updateLensFlares(),n.uniform1i(l.renderType,2),i.enable(n.BLEND);for(var A=0,T=V.lensFlares.length;A<T;A++){var P=V.lensFlares[A];P.opacity>.001&&P.scale>.001&&(S.x=P.x,S.y=P.y,S.z=P.z,b=P.size*P.scale/m.w,E.x=b*_,E.y=b,n.uniform3f(l.screenPosition,S.x,S.y,S.z),n.uniform2f(l.scale,E.x,E.y),n.uniform1f(l.rotation,P.rotation),n.uniform1f(l.opacity,P.opacity),n.uniform3f(l.color,P.color.r,P.color.g,P.color.b),i.setBlending(P.blending,P.blendEquation,P.blendSrc,P.blendDst),t.setTexture2D(P.texture,1),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0))}}}i.enable(n.CULL_FACE),i.enable(n.DEPTH_TEST),i.setDepthWrite(!0),t.resetGLState()}};function p(g){var d=n.createProgram(),m=n.createShader(n.FRAGMENT_SHADER),v=n.createShader(n.VERTEX_SHADER),_="precision "+t.getPrecision()+` float;
`;return n.shaderSource(m,_+g.fragmentShader),n.shaderSource(v,_+g.vertexShader),n.compileShader(m),n.compileShader(v),n.attachShader(d,m),n.attachShader(d,v),n.linkProgram(d),d}}function NS(t,e){var n=t.context,i=t.state,r,a,s,o,c,l,h=new U,u=new Wt,f=new U;function p(){var m=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),v=new Uint16Array([0,1,2,0,2,3]);r=n.createBuffer(),a=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,r),n.bufferData(n.ARRAY_BUFFER,m,n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,a),n.bufferData(n.ELEMENT_ARRAY_BUFFER,v,n.STATIC_DRAW),s=g(),o={position:n.getAttribLocation(s,"position"),uv:n.getAttribLocation(s,"uv")},c={uvOffset:n.getUniformLocation(s,"uvOffset"),uvScale:n.getUniformLocation(s,"uvScale"),rotation:n.getUniformLocation(s,"rotation"),scale:n.getUniformLocation(s,"scale"),color:n.getUniformLocation(s,"color"),map:n.getUniformLocation(s,"map"),opacity:n.getUniformLocation(s,"opacity"),modelViewMatrix:n.getUniformLocation(s,"modelViewMatrix"),projectionMatrix:n.getUniformLocation(s,"projectionMatrix"),fogType:n.getUniformLocation(s,"fogType"),fogDensity:n.getUniformLocation(s,"fogDensity"),fogNear:n.getUniformLocation(s,"fogNear"),fogFar:n.getUniformLocation(s,"fogFar"),fogColor:n.getUniformLocation(s,"fogColor"),alphaTest:n.getUniformLocation(s,"alphaTest")};var _=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");_.width=8,_.height=8;var x=_.getContext("2d");x.fillStyle="white",x.fillRect(0,0,8,8),l=new Mt(_),l.needsUpdate=!0}this.render=function(m,v){if(e.length!==0){s===void 0&&p(),n.useProgram(s),i.initAttributes(),i.enableAttribute(o.position),i.enableAttribute(o.uv),i.disableUnusedAttributes(),i.disable(n.CULL_FACE),i.enable(n.BLEND),n.bindBuffer(n.ARRAY_BUFFER,r),n.vertexAttribPointer(o.position,2,n.FLOAT,!1,2*8,0),n.vertexAttribPointer(o.uv,2,n.FLOAT,!1,2*8,8),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,a),n.uniformMatrix4fv(c.projectionMatrix,!1,v.projectionMatrix.elements),i.activeTexture(n.TEXTURE0),n.uniform1i(c.map,0);var _=0,x=0,y=m.fog;y?(n.uniform3f(c.fogColor,y.color.r,y.color.g,y.color.b),y.isFog?(n.uniform1f(c.fogNear,y.near),n.uniform1f(c.fogFar,y.far),n.uniform1i(c.fogType,1),_=1,x=1):y.isFogExp2&&(n.uniform1f(c.fogDensity,y.density),n.uniform1i(c.fogType,2),_=2,x=2)):(n.uniform1i(c.fogType,0),_=0,x=0);for(var b=0,E=e.length;b<E;b++){var S=e[b];S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld),S.z=-S.modelViewMatrix.elements[14]}e.sort(d);for(var M=[],b=0,E=e.length;b<E;b++){var S=e[b],w=S.material;if(w.visible!==!1){n.uniform1f(c.alphaTest,w.alphaTest),n.uniformMatrix4fv(c.modelViewMatrix,!1,S.modelViewMatrix.elements),S.matrixWorld.decompose(h,u,f),M[0]=f.x,M[1]=f.y;var L=0;m.fog&&w.fog&&(L=x),_!==L&&(n.uniform1i(c.fogType,L),_=L),w.map!==null?(n.uniform2f(c.uvOffset,w.map.offset.x,w.map.offset.y),n.uniform2f(c.uvScale,w.map.repeat.x,w.map.repeat.y)):(n.uniform2f(c.uvOffset,0,0),n.uniform2f(c.uvScale,1,1)),n.uniform1f(c.opacity,w.opacity),n.uniform3f(c.color,w.color.r,w.color.g,w.color.b),n.uniform1f(c.rotation,w.rotation),n.uniform2fv(c.scale,M),i.setBlending(w.blending,w.blendEquation,w.blendSrc,w.blendDst),i.setDepthTest(w.depthTest),i.setDepthWrite(w.depthWrite),w.map?t.setTexture2D(w.map,0):t.setTexture2D(l,0),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)}}i.enable(n.CULL_FACE),t.resetGLState()}};function g(){var m=n.createProgram(),v=n.createShader(n.VERTEX_SHADER),_=n.createShader(n.FRAGMENT_SHADER);return n.shaderSource(v,["precision "+t.getPrecision()+" float;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform float rotation;","uniform vec2 scale;","uniform vec2 uvOffset;","uniform vec2 uvScale;","attribute vec2 position;","attribute vec2 uv;","varying vec2 vUV;","void main() {","vUV = uvOffset + uv * uvScale;","vec2 alignedPosition = position * scale;","vec2 rotatedPosition;","rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;","rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;","vec4 finalPosition;","finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );","finalPosition.xy += rotatedPosition;","finalPosition = projectionMatrix * finalPosition;","gl_Position = finalPosition;","}"].join(`
`)),n.shaderSource(_,["precision "+t.getPrecision()+" float;","uniform vec3 color;","uniform sampler2D map;","uniform float opacity;","uniform int fogType;","uniform vec3 fogColor;","uniform float fogDensity;","uniform float fogNear;","uniform float fogFar;","uniform float alphaTest;","varying vec2 vUV;","void main() {","vec4 texture = texture2D( map, vUV );","if ( texture.a < alphaTest ) discard;","gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );","if ( fogType > 0 ) {","float depth = gl_FragCoord.z / gl_FragCoord.w;","float fogFactor = 0.0;","if ( fogType == 1 ) {","fogFactor = smoothstep( fogNear, fogFar, depth );","} else {","const float LOG2 = 1.442695;","fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );","fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );","}","gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );","}","}"].join(`
`)),n.compileShader(v),n.compileShader(_),n.attachShader(m,v),n.attachShader(m,_),n.linkProgram(m),m}function d(m,v){return m.renderOrder!==v.renderOrder?m.renderOrder-v.renderOrder:m.z!==v.z?v.z-m.z:v.id-m.id}}var BS=0;function at(){Object.defineProperty(this,"id",{value:BS++}),this.uuid=Qe.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.lights=!0,this.blending=Ws,this.side=Ha,this.shading=vf,this.vertexColors=Hc,this.opacity=1,this.transparent=!1,this.blendSrc=Ef,this.blendDst=Sf,this.blendEquation=wf,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ac,this.depthTest=!0,this.depthWrite=!0,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.alphaTest=0,this.premultipliedAlpha=!1,this.overdraw=0,this.visible=!0,this._needsUpdate=!0}at.prototype={constructor:at,isMaterial:!0,get needsUpdate(){return this._needsUpdate},set needsUpdate(t){t===!0&&this.update(),this._needsUpdate=t},setValues:function(t){if(t!==void 0)for(var e in t){var n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}var i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):e==="overdraw"?this[e]=Number(n):this[e]=n}},toJSON:function(t){var e=t===void 0;e&&(t={textures:{},images:{}});var n={metadata:{version:4.4,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearCoat!==void 0&&(n.clearCoat=this.clearCoat),this.clearCoatRoughness!==void 0&&(n.clearCoatRoughness=this.clearCoatRoughness),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,n.reflectivity=this.reflectivity),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.shading!==vf&&(n.shading=this.shading),this.side!==Ha&&(n.side=this.side),this.vertexColors!==Hc&&(n.vertexColors=this.vertexColors),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),n.skinning=this.skinning,n.morphTargets=this.morphTargets;function i(s){var o=[];for(var c in s){var l=s[c];delete l.metadata,o.push(l)}return o}if(e){var r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.lights=t.lights,this.blending=t.blending,this.side=t.side,this.shading=t.shading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.overdraw=t.overdraw,this.visible=t.visible,this.clipShadows=t.clipShadows,this.clipIntersection=t.clipIntersection;var e=t.clippingPlanes,n=null;if(e!==null){var i=e.length;n=new Array(i);for(var r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};Object.assign(at.prototype,Kn.prototype);function mn(t){at.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}mn.prototype=Object.create(at.prototype);mn.prototype.constructor=mn;mn.prototype.isShaderMaterial=!0;mn.prototype.copy=function(t){return at.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vn.clone(t.uniforms),this.defines=t.defines,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=t.extensions,this};mn.prototype.toJSON=function(t){var e=at.prototype.toJSON.call(this,t);return e.uniforms=this.uniforms,e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e};function fr(t){at.call(this),this.type="MeshDepthMaterial",this.depthPacking=pv,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.setValues(t)}fr.prototype=Object.create(at.prototype);fr.prototype.constructor=fr;fr.prototype.isMeshDepthMaterial=!0;fr.prototype.copy=function(t){return at.prototype.copy.call(this,t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this};function Ei(t,e){this.min=t!==void 0?t:new U(1/0,1/0,1/0),this.max=e!==void 0?e:new U(-1/0,-1/0,-1/0)}Ei.prototype={constructor:Ei,isBox3:!0,set:function(t,e){return this.min.copy(t),this.max.copy(e),this},setFromArray:function(t){for(var e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0,o=0,c=t.length;o<c;o+=3){var l=t[o],h=t[o+1],u=t[o+2];l<e&&(e=l),h<n&&(n=h),u<i&&(i=u),l>r&&(r=l),h>a&&(a=h),u>s&&(s=u)}this.min.set(e,n,i),this.max.set(r,a,s)},setFromBufferAttribute:function(t){for(var e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0,o=0,c=t.count;o<c;o++){var l=t.getX(o),h=t.getY(o),u=t.getZ(o);l<e&&(e=l),h<n&&(n=h),u<i&&(i=u),l>r&&(r=l),h>a&&(a=h),u>s&&(s=u)}this.min.set(e,n,i),this.max.set(r,a,s)},setFromPoints:function(t){this.makeEmpty();for(var e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this},setFromCenterAndSize:function(){var t=new U;return function(n,i){var r=t.copy(i).multiplyScalar(.5);return this.min.copy(n).sub(r),this.max.copy(n).add(r),this}}(),setFromObject:function(){var t=new U;return function(n){var i=this;return n.updateMatrixWorld(!0),this.makeEmpty(),n.traverse(function(r){var a,s,o=r.geometry;if(o!==void 0){if(o.isGeometry){var c=o.vertices;for(a=0,s=c.length;a<s;a++)t.copy(c[a]),t.applyMatrix4(r.matrixWorld),i.expandByPoint(t)}else if(o.isBufferGeometry){var l=o.attributes.position;if(l!==void 0)for(a=0,s=l.count;a<s;a++)t.fromAttribute(l,a).applyMatrix4(r.matrixWorld),i.expandByPoint(t)}}}),this}}(),clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.min.copy(t.min),this.max.copy(t.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(t){var e=t||new U;return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(t){var e=t||new U;return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)},expandByPoint:function(t){return this.min.min(t),this.max.max(t),this},expandByVector:function(t){return this.min.sub(t),this.max.add(t),this},expandByScalar:function(t){return this.min.addScalar(-t),this.max.addScalar(t),this},containsPoint:function(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)},containsBox:function(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z},getParameter:function(t,e){var n=e||new U;return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)},intersectsSphere:function(){var t;return function(n){return t===void 0&&(t=new U),this.clampPoint(n.center,t),t.distanceToSquared(n.center)<=n.radius*n.radius}}(),intersectsPlane:function(t){var e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=t.constant&&n>=t.constant},clampPoint:function(t,e){var n=e||new U;return n.copy(t).clamp(this.min,this.max)},distanceToPoint:function(){var t=new U;return function(n){var i=t.copy(n).clamp(this.min,this.max);return i.sub(n).length()}}(),getBoundingSphere:function(){var t=new U;return function(n){var i=n||new sn;return this.getCenter(i.center),i.radius=this.getSize(t).length()*.5,i}}(),intersect:function(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this},union:function(t){return this.min.min(t.min),this.max.max(t.max),this},applyMatrix4:function(){var t=[new U,new U,new U,new U,new U,new U,new U,new U];return function(n){return this.isEmpty()?this:(t[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n),t[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n),t[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n),t[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n),t[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n),t[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n),t[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n),t[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n),this.setFromPoints(t),this)}}(),translate:function(t){return this.min.add(t),this.max.add(t),this},equals:function(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};function sn(t,e){this.center=t!==void 0?t:new U,this.radius=e!==void 0?e:0}sn.prototype={constructor:sn,set:function(t,e){return this.center.copy(t),this.radius=e,this},setFromPoints:function(){var t=new Ei;return function(n,i){var r=this.center;i!==void 0?r.copy(i):t.setFromPoints(n).getCenter(r);for(var a=0,s=0,o=n.length;s<o;s++)a=Math.max(a,r.distanceToSquared(n[s]));return this.radius=Math.sqrt(a),this}}(),clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.center.copy(t.center),this.radius=t.radius,this},empty:function(){return this.radius<=0},containsPoint:function(t){return t.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(t){return t.distanceTo(this.center)-this.radius},intersectsSphere:function(t){var e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e},intersectsBox:function(t){return t.intersectsSphere(this)},intersectsPlane:function(t){return Math.abs(this.center.dot(t.normal)-t.constant)<=this.radius},clampPoint:function(t,e){var n=this.center.distanceToSquared(t),i=e||new U;return i.copy(t),n>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i},getBoundingBox:function(t){var e=t||new Ei;return e.set(this.center,this.center),e.expandByScalar(this.radius),e},applyMatrix4:function(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this},translate:function(t){return this.center.add(t),this},equals:function(t){return t.center.equals(this.center)&&t.radius===this.radius}};function ei(){this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]),arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}ei.prototype={constructor:ei,isMatrix3:!0,set:function(t,e,n,i,r,a,s,o,c){var l=this.elements;return l[0]=t,l[1]=i,l[2]=s,l[3]=e,l[4]=r,l[5]=o,l[6]=n,l[7]=a,l[8]=c,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return new this.constructor().fromArray(this.elements)},copy:function(t){var e=t.elements;return this.set(e[0],e[3],e[6],e[1],e[4],e[7],e[2],e[5],e[8]),this},setFromMatrix4:function(t){var e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this},applyToVector3Array:function(){var t;return function(n,i,r){t===void 0&&(t=new U),i===void 0&&(i=0),r===void 0&&(r=n.length);for(var a=0,s=i;a<r;a+=3,s+=3)t.fromArray(n,s),t.applyMatrix3(this),t.toArray(n,s);return n}}(),applyToBufferAttribute:function(){var t;return function(n){t===void 0&&(t=new U);for(var i=0,r=n.count;i<r;i++)t.x=n.getX(i),t.y=n.getY(i),t.z=n.getZ(i),t.applyMatrix3(this),n.setXYZ(i,t.x,t.y,t.z);return n}}(),multiplyScalar:function(t){var e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this},determinant:function(){var t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],o=t[6],c=t[7],l=t[8];return e*a*l-e*s*c-n*r*l+n*s*o+i*r*c-i*a*o},getInverse:function(t,e){t&&t.isMatrix4&&console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");var n=t.elements,i=this.elements,r=n[0],a=n[1],s=n[2],o=n[3],c=n[4],l=n[5],h=n[6],u=n[7],f=n[8],p=f*c-l*u,g=l*h-f*o,d=u*o-c*h,m=r*p+a*g+s*d;if(m===0){var v="THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0";if(e===!0)throw new Error(v);return console.warn(v),this.identity()}var _=1/m;return i[0]=p*_,i[1]=(s*u-f*a)*_,i[2]=(l*a-s*c)*_,i[3]=g*_,i[4]=(f*r-s*h)*_,i[5]=(s*o-l*r)*_,i[6]=d*_,i[7]=(a*h-u*r)*_,i[8]=(c*r-a*o)*_,this},transpose:function(){var t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this},getNormalMatrix:function(t){return this.setFromMatrix4(t).getInverse(this).transpose()},transposeIntoArray:function(t){var e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this},fromArray:function(t,e){e===void 0&&(e=0);for(var n=0;n<9;n++)this.elements[n]=t[n+e];return this},toArray:function(t,e){t===void 0&&(t=[]),e===void 0&&(e=0);var n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}};function Fn(t,e){this.normal=t!==void 0?t:new U(1,0,0),this.constant=e!==void 0?e:0}Fn.prototype={constructor:Fn,set:function(t,e){return this.normal.copy(t),this.constant=e,this},setComponents:function(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this},setFromNormalAndCoplanarPoint:function(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this},setFromCoplanarPoints:function(){var t=new U,e=new U;return function(i,r,a){var s=t.subVectors(a,r).cross(e.subVectors(i,r)).normalize();return this.setFromNormalAndCoplanarPoint(s,i),this}}(),clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.normal.copy(t.normal),this.constant=t.constant,this},normalize:function(){var t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(t){return this.normal.dot(t)+this.constant},distanceToSphere:function(t){return this.distanceToPoint(t.center)-t.radius},projectPoint:function(t,e){return this.orthoPoint(t,e).sub(t).negate()},orthoPoint:function(t,e){var n=this.distanceToPoint(t),i=e||new U;return i.copy(this.normal).multiplyScalar(n)},intersectLine:function(){var t=new U;return function(n,i){var r=i||new U,a=n.delta(t),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(n.start)===0?r.copy(n.start):void 0;var o=-(n.start.dot(this.normal)+this.constant)/s;if(!(o<0||o>1))return r.copy(a).multiplyScalar(o).add(n.start)}}(),intersectsLine:function(t){var e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0},intersectsBox:function(t){return t.intersectsPlane(this)},intersectsSphere:function(t){return t.intersectsPlane(this)},coplanarPoint:function(t){var e=t||new U;return e.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var t=new U,e=new ei;return function(i,r){var a=this.coplanarPoint(t).applyMatrix4(i),s=r||e.getNormalMatrix(i),o=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(o),this}}(),translate:function(t){return this.constant=this.constant-t.dot(this.normal),this},equals:function(t){return t.normal.equals(this.normal)&&t.constant===this.constant}};function Eo(t,e,n,i,r,a){this.planes=[t!==void 0?t:new Fn,e!==void 0?e:new Fn,n!==void 0?n:new Fn,i!==void 0?i:new Fn,r!==void 0?r:new Fn,a!==void 0?a:new Fn]}Eo.prototype={constructor:Eo,set:function(t,e,n,i,r,a){var s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this},clone:function(){return new this.constructor().copy(this)},copy:function(t){for(var e=this.planes,n=0;n<6;n++)e[n].copy(t.planes[n]);return this},setFromMatrix:function(t){var e=this.planes,n=t.elements,i=n[0],r=n[1],a=n[2],s=n[3],o=n[4],c=n[5],l=n[6],h=n[7],u=n[8],f=n[9],p=n[10],g=n[11],d=n[12],m=n[13],v=n[14],_=n[15];return e[0].setComponents(s-i,h-o,g-u,_-d).normalize(),e[1].setComponents(s+i,h+o,g+u,_+d).normalize(),e[2].setComponents(s+r,h+c,g+f,_+m).normalize(),e[3].setComponents(s-r,h-c,g-f,_-m).normalize(),e[4].setComponents(s-a,h-l,g-p,_-v).normalize(),e[5].setComponents(s+a,h+l,g+p,_+v).normalize(),this},intersectsObject:function(){var t=new sn;return function(n){var i=n.geometry;return i.boundingSphere===null&&i.computeBoundingSphere(),t.copy(i.boundingSphere).applyMatrix4(n.matrixWorld),this.intersectsSphere(t)}}(),intersectsSprite:function(){var t=new sn;return function(n){return t.center.set(0,0,0),t.radius=.7071067811865476,t.applyMatrix4(n.matrixWorld),this.intersectsSphere(t)}}(),intersectsSphere:function(t){for(var e=this.planes,n=t.center,i=-t.radius,r=0;r<6;r++){var a=e[r].distanceToPoint(n);if(a<i)return!1}return!0},intersectsBox:function(){var t=new U,e=new U;return function(i){for(var r=this.planes,a=0;a<6;a++){var s=r[a];t.x=s.normal.x>0?i.min.x:i.max.x,e.x=s.normal.x>0?i.max.x:i.min.x,t.y=s.normal.y>0?i.min.y:i.max.y,e.y=s.normal.y>0?i.max.y:i.min.y,t.z=s.normal.z>0?i.min.z:i.max.z,e.z=s.normal.z>0?i.max.z:i.min.z;var o=s.distanceToPoint(t),c=s.distanceToPoint(e);if(o<0&&c<0)return!1}return!0}}(),containsPoint:function(t){for(var e=this.planes,n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}};function Ev(t,e,n,i){var r=t.context,a=t.state,s=new Eo,o=new Ye,c=e.shadows,l=new Ce,h=new Ce(i.maxTextureSize,i.maxTextureSize),u=new U,f=new U,p=[],g=1,d=2,m=(g|d)+1,v=new Array(m),_=new Array(m),x={},y=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],b=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)],E=[new xt,new xt,new xt,new xt,new xt,new xt],S=new fr;S.depthPacking=mv,S.clipping=!0;for(var M=as.distanceRGBA,w=vn.clone(M.uniforms),L=0;L!==m;++L){var z=(L&g)!==0,V=(L&d)!==0,A=S.clone();A.morphTargets=z,A.skinning=V,v[L]=A;var T=new mn({defines:{USE_SHADOWMAP:""},uniforms:w,vertexShader:M.vertexShader,fragmentShader:M.fragmentShader,morphTargets:z,skinning:V,clipping:!0});_[L]=T}var P=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mf,this.renderReverseSided=!0,this.renderSingleSided=!0,this.render=function(N,I){if(P.enabled!==!1&&!(P.autoUpdate===!1&&P.needsUpdate===!1)&&c.length!==0){a.buffers.color.setClear(1,1,1,1),a.disable(r.BLEND),a.setDepthTest(!0),a.setScissorTest(!1);for(var B,Z,X=0,G=c.length;X<G;X++){var J=c[X],ie=J.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}var Y=ie.camera;if(l.copy(ie.mapSize),l.min(h),J&&J.isPointLight){B=6,Z=!0;var ve=l.x,fe=l.y;E[0].set(ve*2,fe,ve,fe),E[1].set(0,fe,ve,fe),E[2].set(ve*3,fe,ve,fe),E[3].set(ve,fe,ve,fe),E[4].set(ve*3,0,ve,fe),E[5].set(ve,0,ve,fe),l.x*=4,l.y*=2}else B=1,Z=!1;if(ie.map===null){var se={minFilter:Nn,magFilter:Nn,format:wi};ie.map=new Xs(l.x,l.y,se),Y.updateProjectionMatrix()}ie.isSpotLightShadow&&ie.update(J),ie&&ie.isRectAreaLightShadow&&ie.update(J);var pe=ie.map,W=ie.matrix;f.setFromMatrixPosition(J.matrixWorld),Y.position.copy(f),t.setRenderTarget(pe),t.clear();for(var Fe=0;Fe<B;Fe++){if(Z){u.copy(Y.position),u.add(y[Fe]),Y.up.copy(b[Fe]),Y.lookAt(u);var ge=E[Fe];a.viewport(ge)}else u.setFromMatrixPosition(J.target.matrixWorld),Y.lookAt(u);Y.updateMatrixWorld(),Y.matrixWorldInverse.getInverse(Y.matrixWorld),W.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),W.multiply(Y.projectionMatrix),W.multiply(Y.matrixWorldInverse),o.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),s.setFromMatrix(o),p.length=0,H(N,I,Y);for(var Xe=0,Me=p.length;Xe<Me;Xe++){var Je=p[Xe],Be=n.update(Je),Ue=Je.material;if(Ue&&Ue.isMultiMaterial)for(var Oe=Be.groups,tt=Ue.materials,ft=0,k=Oe.length;ft<k;ft++){var R=Oe[ft],ne=tt[R.materialIndex];if(ne.visible===!0){var he=O(Je,ne,Z,f);t.renderBufferDirect(Y,null,Be,he,Je,R)}}else{var he=O(Je,Ue,Z,f);t.renderBufferDirect(Y,null,Be,he,Je,null)}}}}var me=t.getClearColor(),ye=t.getClearAlpha();t.setClearColor(me,ye),P.needsUpdate=!1}};function O(N,I,B,Z){var X=N.geometry,G=null,J=v,ie=N.customDepthMaterial;if(B&&(J=_,ie=N.customDistanceMaterial),ie)G=ie;else{var Y=!1;I.morphTargets&&(X&&X.isBufferGeometry?Y=X.morphAttributes&&X.morphAttributes.position&&X.morphAttributes.position.length>0:X&&X.isGeometry&&(Y=X.morphTargets&&X.morphTargets.length>0));var ve=N.isSkinnedMesh&&I.skinning,fe=0;Y&&(fe|=g),ve&&(fe|=d),G=J[fe]}if(t.localClippingEnabled&&I.clipShadows===!0&&I.clippingPlanes.length!==0){var se=G.uuid,pe=I.uuid,W=x[se];W===void 0&&(W={},x[se]=W);var Fe=W[pe];Fe===void 0&&(Fe=G.clone(),W[pe]=Fe),G=Fe}G.visible=I.visible,G.wireframe=I.wireframe;var ge=I.side;return P.renderSingleSided&&ge==Hs&&(ge=Ha),P.renderReverseSided&&(ge===Ha?ge=cr:ge===cr&&(ge=Ha)),G.side=ge,G.clipShadows=I.clipShadows,G.clippingPlanes=I.clippingPlanes,G.wireframeLinewidth=I.wireframeLinewidth,G.linewidth=I.linewidth,B&&G.uniforms.lightPos!==void 0&&G.uniforms.lightPos.value.copy(Z),G}function H(N,I,B){if(N.visible!==!1){var Z=(N.layers.mask&I.layers.mask)!==0;if(Z&&(N.isMesh||N.isLine||N.isPoints)&&N.castShadow&&(N.frustumCulled===!1||s.intersectsObject(N)===!0)){var X=N.material;X.visible===!0&&(N.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,N.matrixWorld),p.push(N))}for(var G=N.children,J=0,ie=G.length;J<ie;J++)H(G[J],I,B)}}}function dr(t,e){this.origin=t!==void 0?t:new U,this.direction=e!==void 0?e:new U}dr.prototype={constructor:dr,set:function(t,e){return this.origin.copy(t),this.direction.copy(e),this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this},at:function(t,e){var n=e||new U;return n.copy(this.direction).multiplyScalar(t).add(this.origin)},lookAt:function(t){return this.direction.copy(t).sub(this.origin).normalize(),this},recast:function(){var t=new U;return function(n){return this.origin.copy(this.at(n,t)),this}}(),closestPointToPoint:function(t,e){var n=e||new U;n.subVectors(t,this.origin);var i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)},distanceToPoint:function(t){return Math.sqrt(this.distanceSqToPoint(t))},distanceSqToPoint:function(){var t=new U;return function(n){var i=t.subVectors(n,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(n):(t.copy(this.direction).multiplyScalar(i).add(this.origin),t.distanceToSquared(n))}}(),distanceSqToSegment:function(){var t=new U,e=new U,n=new U;return function(r,a,s,o){t.copy(r).add(a).multiplyScalar(.5),e.copy(a).sub(r).normalize(),n.copy(this.origin).sub(t);var c=r.distanceTo(a)*.5,l=-this.direction.dot(e),h=n.dot(this.direction),u=-n.dot(e),f=n.lengthSq(),p=Math.abs(1-l*l),g,d,m,v;if(p>0)if(g=l*u-h,d=l*h-u,v=c*p,g>=0)if(d>=-v)if(d<=v){var _=1/p;g*=_,d*=_,m=g*(g+l*d+2*h)+d*(l*g+d+2*u)+f}else d=c,g=Math.max(0,-(l*d+h)),m=-g*g+d*(d+2*u)+f;else d=-c,g=Math.max(0,-(l*d+h)),m=-g*g+d*(d+2*u)+f;else d<=-v?(g=Math.max(0,-(-l*c+h)),d=g>0?-c:Math.min(Math.max(-c,-u),c),m=-g*g+d*(d+2*u)+f):d<=v?(g=0,d=Math.min(Math.max(-c,-u),c),m=d*(d+2*u)+f):(g=Math.max(0,-(l*c+h)),d=g>0?c:Math.min(Math.max(-c,-u),c),m=-g*g+d*(d+2*u)+f);else d=l>0?-c:c,g=Math.max(0,-(l*d+h)),m=-g*g+d*(d+2*u)+f;return s&&s.copy(this.direction).multiplyScalar(g).add(this.origin),o&&o.copy(e).multiplyScalar(d).add(t),m}}(),intersectSphere:function(){var t=new U;return function(n,i){t.subVectors(n.center,this.origin);var r=t.dot(this.direction),a=t.dot(t)-r*r,s=n.radius*n.radius;if(a>s)return null;var o=Math.sqrt(s-a),c=r-o,l=r+o;return c<0&&l<0?null:c<0?this.at(l,i):this.at(c,i)}}(),intersectsSphere:function(t){return this.distanceToPoint(t.center)<=t.radius},distanceToPlane:function(t){var e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;var n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null},intersectPlane:function(t,e){var n=this.distanceToPlane(t);return n===null?null:this.at(n,e)},intersectsPlane:function(t){var e=t.distanceToPoint(this.origin);if(e===0)return!0;var n=t.normal.dot(this.direction);return n*e<0},intersectBox:function(t,e){var n,i,r,a,s,o,c=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),l>=0?(r=(t.min.y-u.y)*l,a=(t.max.y-u.y)*l):(r=(t.max.y-u.y)*l,a=(t.min.y-u.y)*l),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),h>=0?(s=(t.min.z-u.z)*h,o=(t.max.z-u.z)*h):(s=(t.max.z-u.z)*h,o=(t.min.z-u.z)*h),n>o||s>i)||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),i<0)?null:this.at(n>=0?n:i,e)},intersectsBox:function(){var t=new U;return function(n){return this.intersectBox(n,t)!==null}}(),intersectTriangle:function(){var t=new U,e=new U,n=new U,i=new U;return function(a,s,o,c,l){e.subVectors(s,a),n.subVectors(o,a),i.crossVectors(e,n);var h=this.direction.dot(i),u;if(h>0){if(c)return null;u=1}else if(h<0)u=-1,h=-h;else return null;t.subVectors(this.origin,a);var f=u*this.direction.dot(n.crossVectors(t,n));if(f<0)return null;var p=u*this.direction.dot(e.cross(t));if(p<0||f+p>h)return null;var g=-u*t.dot(i);return g<0?null:this.at(g/h,l)}}(),applyMatrix4:function(t){return this.direction.add(this.origin).applyMatrix4(t),this.origin.applyMatrix4(t),this.direction.sub(this.origin),this.direction.normalize(),this},equals:function(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}};function pr(t,e,n,i){this._x=t||0,this._y=e||0,this._z=n||0,this._order=i||pr.DefaultOrder}pr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];pr.DefaultOrder="XYZ";pr.prototype={constructor:pr,isEuler:!0,get x(){return this._x},set x(t){this._x=t,this.onChangeCallback()},get y(){return this._y},set y(t){this._y=t,this.onChangeCallback()},get z(){return this._z},set z(t){this._z=t,this.onChangeCallback()},get order(){return this._order},set order(t){this._order=t,this.onChangeCallback()},set:function(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._order=i||this._order,this.onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this.onChangeCallback(),this},setFromRotationMatrix:function(t,e,n){var i=Qe.clamp,r=t.elements,a=r[0],s=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],p=r[10];return e=e||this._order,e==="XYZ"?(this._y=Math.asin(i(o,-1,1)),Math.abs(o)<.99999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,l),this._z=0)):e==="YXZ"?(this._x=Math.asin(-i(h,-1,1)),Math.abs(h)<.99999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0)):e==="ZXY"?(this._x=Math.asin(i(f,-1,1)),Math.abs(f)<.99999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a))):e==="ZYX"?(this._y=Math.asin(-i(u,-1,1)),Math.abs(u)<.99999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l))):e==="YZX"?(this._z=Math.asin(i(c,-1,1)),Math.abs(c)<.99999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p))):e==="XZY"?(this._z=Math.asin(-i(s,-1,1)),Math.abs(s)<.99999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+e),this._order=e,n!==!1&&this.onChangeCallback(),this},setFromQuaternion:function(){var t;return function(n,i,r){return t===void 0&&(t=new Ye),t.makeRotationFromQuaternion(n),this.setFromRotationMatrix(t,i,r)}}(),setFromVector3:function(t,e){return this.set(t.x,t.y,t.z,e||this._order)},reorder:function(){var t=new Wt;return function(n){return t.setFromEuler(this),this.setFromQuaternion(t,n)}}(),equals:function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order},fromArray:function(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this.onChangeCallback(),this},toArray:function(t,e){return t===void 0&&(t=[]),e===void 0&&(e=0),t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t},toVector3:function(t){return t?t.set(this._x,this._y,this._z):new U(this._x,this._y,this._z)},onChange:function(t){return this.onChangeCallback=t,this},onChangeCallback:function(){}};function hc(){this.mask=1}hc.prototype={constructor:hc,set:function(t){this.mask=1<<t},enable:function(t){this.mask|=1<<t},toggle:function(t){this.mask^=1<<t},disable:function(t){this.mask&=~(1<<t)},test:function(t){return(this.mask&t.mask)!==0}};var zS=0;function De(){Object.defineProperty(this,"id",{value:zS++}),this.uuid=Qe.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DefaultUp.clone();var t=new U,e=new pr,n=new Wt,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e.onChange(r),n.onChange(a),Object.defineProperties(this,{position:{enumerable:!0,value:t},rotation:{enumerable:!0,value:e},quaternion:{enumerable:!0,value:n},scale:{enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new ei}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=De.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={},this.onBeforeRender=function(){},this.onAfterRender=function(){}}De.DefaultUp=new U(0,1,0);De.DefaultMatrixAutoUpdate=!0;Object.assign(De.prototype,Kn.prototype,{isObject3D:!0,applyMatrix:function(t){this.matrix.multiplyMatrices(t,this.matrix),this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(t,e){this.quaternion.setFromAxisAngle(t,e)},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0)},setRotationFromMatrix:function(t){this.quaternion.setFromRotationMatrix(t)},setRotationFromQuaternion:function(t){this.quaternion.copy(t)},rotateOnAxis:function(){var t=new Wt;return function(n,i){return t.setFromAxisAngle(n,i),this.quaternion.multiply(t),this}}(),rotateX:function(){var t=new U(1,0,0);return function(n){return this.rotateOnAxis(t,n)}}(),rotateY:function(){var t=new U(0,1,0);return function(n){return this.rotateOnAxis(t,n)}}(),rotateZ:function(){var t=new U(0,0,1);return function(n){return this.rotateOnAxis(t,n)}}(),translateOnAxis:function(){var t=new U;return function(n,i){return t.copy(n).applyQuaternion(this.quaternion),this.position.add(t.multiplyScalar(i)),this}}(),translateX:function(){var t=new U(1,0,0);return function(n){return this.translateOnAxis(t,n)}}(),translateY:function(){var t=new U(0,1,0);return function(n){return this.translateOnAxis(t,n)}}(),translateZ:function(){var t=new U(0,0,1);return function(n){return this.translateOnAxis(t,n)}}(),localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var t=new Ye;return function(n){return n.applyMatrix4(t.getInverse(this.matrixWorld))}}(),lookAt:function(){var t=new Ye;return function(n){t.lookAt(n,this.position,this.up),this.quaternion.setFromRotationMatrix(t)}}(),add:function(t){if(arguments.length>1){for(var e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,t.dispatchEvent({type:"added"}),this.children.push(t)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)},remove:function(t){if(arguments.length>1)for(var e=0;e<arguments.length;e++)this.remove(arguments[e]);var n=this.children.indexOf(t);n!==-1&&(t.parent=null,t.dispatchEvent({type:"removed"}),this.children.splice(n,1))},getObjectById:function(t){return this.getObjectByProperty("id",t)},getObjectByName:function(t){return this.getObjectByProperty("name",t)},getObjectByProperty:function(t,e){if(this[t]===e)return this;for(var n=0,i=this.children.length;n<i;n++){var r=this.children[n],a=r.getObjectByProperty(t,e);if(a!==void 0)return a}},getWorldPosition:function(t){var e=t||new U;return this.updateMatrixWorld(!0),e.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var t=new U,e=new U;return function(i){var r=i||new Wt;return this.updateMatrixWorld(!0),this.matrixWorld.decompose(t,r,e),r}}(),getWorldRotation:function(){var t=new Wt;return function(n){var i=n||new pr;return this.getWorldQuaternion(t),i.setFromQuaternion(t,this.rotation.order,!1)}}(),getWorldScale:function(){var t=new U,e=new Wt;return function(i){var r=i||new U;return this.updateMatrixWorld(!0),this.matrixWorld.decompose(t,e,r),r}}(),getWorldDirection:function(){var t=new Wt;return function(n){var i=n||new U;return this.getWorldQuaternion(t),i.set(0,0,1).applyQuaternion(t)}}(),raycast:function(){},traverse:function(t){t(this);for(var e=this.children,n=0,i=e.length;n<i;n++)e[n].traverse(t)},traverseVisible:function(t){if(this.visible!==!1){t(this);for(var e=this.children,n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}},traverseAncestors:function(t){var e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(t){this.matrixAutoUpdate===!0&&this.updateMatrix(),(this.matrixWorldNeedsUpdate===!0||t===!0)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);for(var e=this.children,n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)},toJSON:function(t){var e=t===void 0||t==="",n={};e&&(t={geometries:{},materials:{},textures:{},images:{}},n.metadata={version:4.4,type:"Object",generator:"Object3D.toJSON"});var i={};if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),i.matrix=this.matrix.toArray(),this.geometry!==void 0&&(t.geometries[this.geometry.uuid]===void 0&&(t.geometries[this.geometry.uuid]=this.geometry.toJSON(t)),i.geometry=this.geometry.uuid),this.material!==void 0&&(t.materials[this.material.uuid]===void 0&&(t.materials[this.material.uuid]=this.material.toJSON(t)),i.material=this.material.uuid),this.children.length>0){i.children=[];for(var r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(e){var a=l(t.geometries),s=l(t.materials),o=l(t.textures),c=l(t.images);a.length>0&&(n.geometries=a),s.length>0&&(n.materials=s),o.length>0&&(n.textures=o),c.length>0&&(n.images=c)}return n.object=i,n;function l(h){var u=[];for(var f in h){var p=h[f];delete p.metadata,u.push(p)}return u}},clone:function(t){return new this.constructor().copy(this,t)},copy:function(t,e){if(e===void 0&&(e=!0),this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(var n=0;n<t.children.length;n++){var i=t.children[n];this.add(i.clone())}return this}});function Nr(t,e){this.start=t!==void 0?t:new U,this.end=e!==void 0?e:new U}Nr.prototype={constructor:Nr,set:function(t,e){return this.start.copy(t),this.end.copy(e),this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.start.copy(t.start),this.end.copy(t.end),this},getCenter:function(t){var e=t||new U;return e.addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(t){var e=t||new U;return e.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(t,e){var n=e||new U;return this.delta(n).multiplyScalar(t).add(this.start)},closestPointToPointParameter:function(){var t=new U,e=new U;return function(i,r){t.subVectors(i,this.start),e.subVectors(this.end,this.start);var a=e.dot(e),s=e.dot(t),o=s/a;return r&&(o=Qe.clamp(o,0,1)),o}}(),closestPointToPoint:function(t,e,n){var i=this.closestPointToPointParameter(t,e),r=n||new U;return this.delta(r).multiplyScalar(i).add(this.start)},applyMatrix4:function(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this},equals:function(t){return t.start.equals(this.start)&&t.end.equals(this.end)}};function Zn(t,e,n){this.a=t!==void 0?t:new U,this.b=e!==void 0?e:new U,this.c=n!==void 0?n:new U}Zn.normal=function(){var t=new U;return function(n,i,r,a){var s=a||new U;s.subVectors(r,i),t.subVectors(n,i),s.cross(t);var o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}}();Zn.barycoordFromPoint=function(){var t=new U,e=new U,n=new U;return function(r,a,s,o,c){t.subVectors(o,a),e.subVectors(s,a),n.subVectors(r,a);var l=t.dot(t),h=t.dot(e),u=t.dot(n),f=e.dot(e),p=e.dot(n),g=l*f-h*h,d=c||new U;if(g===0)return d.set(-2,-1,-1);var m=1/g,v=(f*u-h*p)*m,_=(l*p-h*u)*m;return d.set(1-v-_,_,v)}}();Zn.containsPoint=function(){var t=new U;return function(n,i,r,a){var s=Zn.barycoordFromPoint(n,i,r,a,t);return s.x>=0&&s.y>=0&&s.x+s.y<=1}}();Zn.prototype={constructor:Zn,set:function(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this},setFromPointsAndIndices:function(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this},area:function(){var t=new U,e=new U;return function(){return t.subVectors(this.c,this.b),e.subVectors(this.a,this.b),t.cross(e).length()*.5}}(),midpoint:function(t){var e=t||new U;return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(t){return Zn.normal(this.a,this.b,this.c,t)},plane:function(t){var e=t||new Fn;return e.setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(t,e){return Zn.barycoordFromPoint(t,this.a,this.b,this.c,e)},containsPoint:function(t){return Zn.containsPoint(t,this.a,this.b,this.c)},closestPointToPoint:function(){var t,e,n,i;return function(a,s){t===void 0&&(t=new Fn,e=[new Nr,new Nr,new Nr],n=new U,i=new U);var o=s||new U,c=1/0;if(t.setFromCoplanarPoints(this.a,this.b,this.c),t.projectPoint(a,n),this.containsPoint(n)===!0)o.copy(n);else{e[0].set(this.a,this.b),e[1].set(this.b,this.c),e[2].set(this.c,this.a);for(var l=0;l<e.length;l++){e[l].closestPointToPoint(n,!0,i);var h=n.distanceToSquared(i);h<c&&(c=h,o.copy(i))}}return o}}(),equals:function(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}};function zn(t,e,n,i,r,a){this.a=t,this.b=e,this.c=n,this.normal=i&&i.isVector3?i:new U,this.vertexNormals=Array.isArray(i)?i:[],this.color=r&&r.isColor?r:new Ve,this.vertexColors=Array.isArray(r)?r:[],this.materialIndex=a!==void 0?a:0}zn.prototype={constructor:zn,clone:function(){return new this.constructor().copy(this)},copy:function(t){this.a=t.a,this.b=t.b,this.c=t.c,this.normal.copy(t.normal),this.color.copy(t.color),this.materialIndex=t.materialIndex;for(var e=0,n=t.vertexNormals.length;e<n;e++)this.vertexNormals[e]=t.vertexNormals[e].clone();for(var e=0,n=t.vertexColors.length;e<n;e++)this.vertexColors[e]=t.vertexColors[e].clone();return this}};function Tn(t){at.call(this),this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.lights=!1,this.setValues(t)}Tn.prototype=Object.create(at.prototype);Tn.prototype.constructor=Tn;Tn.prototype.isMeshBasicMaterial=!0;Tn.prototype.copy=function(t){return at.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this};function Ee(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.uuid=Qe.generateUUID(),this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.dynamic=!1,this.updateRange={offset:0,count:-1},this.onUploadCallback=function(){},this.version=0}Ee.prototype={constructor:Ee,isBufferAttribute:!0,set needsUpdate(t){t===!0&&this.version++},setArray:function(t){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=t!==void 0?t.length/this.itemSize:0,this.array=t},setDynamic:function(t){return this.dynamic=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.dynamic=t.dynamic,this},copyAt:function(t,e,n){t*=this.itemSize,n*=e.itemSize;for(var i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){for(var e=this.array,n=0,i=0,r=t.length;i<r;i++){var a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new Ve),e[n++]=a.r,e[n++]=a.g,e[n++]=a.b}return this},copyIndicesArray:function(t){for(var e=this.array,n=0,i=0,r=t.length;i<r;i++){var a=t[i];e[n++]=a.a,e[n++]=a.b,e[n++]=a.c}return this},copyVector2sArray:function(t){for(var e=this.array,n=0,i=0,r=t.length;i<r;i++){var a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new Ce),e[n++]=a.x,e[n++]=a.y}return this},copyVector3sArray:function(t){for(var e=this.array,n=0,i=0,r=t.length;i<r;i++){var a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new U),e[n++]=a.x,e[n++]=a.y,e[n++]=a.z}return this},copyVector4sArray:function(t){for(var e=this.array,n=0,i=0,r=t.length;i<r;i++){var a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new xt),e[n++]=a.x,e[n++]=a.y,e[n++]=a.z,e[n++]=a.w}return this},set:function(t,e){return e===void 0&&(e=0),this.array.set(t,e),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,e){return this.array[t*this.itemSize]=e,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,e){return this.array[t*this.itemSize+1]=e,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,e){return this.array[t*this.itemSize+2]=e,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,e){return this.array[t*this.itemSize+3]=e,this},setXY:function(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor().copy(this)}};function So(t,e){Ee.call(this,new Int8Array(t),e)}So.prototype=Object.create(Ee.prototype);So.prototype.constructor=So;function To(t,e){Ee.call(this,new Uint8Array(t),e)}To.prototype=Object.create(Ee.prototype);To.prototype.constructor=To;function Ao(t,e){Ee.call(this,new Uint8ClampedArray(t),e)}Ao.prototype=Object.create(Ee.prototype);Ao.prototype.constructor=Ao;function Co(t,e){Ee.call(this,new Int16Array(t),e)}Co.prototype=Object.create(Ee.prototype);Co.prototype.constructor=Co;function Gi(t,e){Ee.call(this,new Uint16Array(t),e)}Gi.prototype=Object.create(Ee.prototype);Gi.prototype.constructor=Gi;function Lo(t,e){Ee.call(this,new Int32Array(t),e)}Lo.prototype=Object.create(Ee.prototype);Lo.prototype.constructor=Lo;function Vi(t,e){Ee.call(this,new Uint32Array(t),e)}Vi.prototype=Object.create(Ee.prototype);Vi.prototype.constructor=Vi;function ot(t,e){Ee.call(this,new Float32Array(t),e)}ot.prototype=Object.create(Ee.prototype);ot.prototype.constructor=ot;function Ro(t,e){Ee.call(this,new Float64Array(t),e)}Ro.prototype=Object.create(Ee.prototype);Ro.prototype.constructor=Ro;function Sv(){this.indices=[],this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}Object.assign(Sv.prototype,{computeGroups:function(t){for(var e,n=[],i=void 0,r=t.faces,a=0;a<r.length;a++){var s=r[a];s.materialIndex!==i&&(i=s.materialIndex,e!==void 0&&(e.count=a*3-e.start,n.push(e)),e={start:a*3,materialIndex:i})}e!==void 0&&(e.count=a*3-e.start,n.push(e)),this.groups=n},fromGeometry:function(t){var e=t.faces,n=t.vertices,i=t.faceVertexUvs,r=i[0]&&i[0].length>0,a=i[1]&&i[1].length>0,s=t.morphTargets,o=s.length,c;if(o>0){c=[];for(var l=0;l<o;l++)c[l]=[];this.morphTargets.position=c}var h=t.morphNormals,u=h.length,f;if(u>0){f=[];for(var l=0;l<u;l++)f[l]=[];this.morphTargets.normal=f}for(var p=t.skinIndices,g=t.skinWeights,d=p.length===n.length,m=g.length===n.length,l=0;l<e.length;l++){var v=e[l];this.vertices.push(n[v.a],n[v.b],n[v.c]);var _=v.vertexNormals;if(_.length===3)this.normals.push(_[0],_[1],_[2]);else{var x=v.normal;this.normals.push(x,x,x)}var y=v.vertexColors;if(y.length===3)this.colors.push(y[0],y[1],y[2]);else{var b=v.color;this.colors.push(b,b,b)}if(r===!0){var E=i[0][l];E!==void 0?this.uvs.push(E[0],E[1],E[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",l),this.uvs.push(new Ce,new Ce,new Ce))}if(a===!0){var E=i[1][l];E!==void 0?this.uvs2.push(E[0],E[1],E[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",l),this.uvs2.push(new Ce,new Ce,new Ce))}for(var S=0;S<o;S++){var M=s[S].vertices;c[S].push(M[v.a],M[v.b],M[v.c])}for(var S=0;S<u;S++){var w=h[S].vertexNormals[l];f[S].push(w.a,w.b,w.c)}d&&this.skinIndices.push(p[v.a],p[v.b],p[v.c]),m&&this.skinWeights.push(g[v.a],g[v.b],g[v.c])}return this.computeGroups(t),this.verticesNeedUpdate=t.verticesNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,this}});function Ze(){Object.defineProperty(this,"id",{value:Ff()}),this.uuid=Qe.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}Object.assign(Ze.prototype,Kn.prototype,{isGeometry:!0,applyMatrix:function(t){for(var e=new ei().getNormalMatrix(t),n=0,i=this.vertices.length;n<i;n++){var r=this.vertices[n];r.applyMatrix4(t)}for(var n=0,i=this.faces.length;n<i;n++){var a=this.faces[n];a.normal.applyMatrix3(e).normalize();for(var s=0,o=a.vertexNormals.length;s<o;s++)a.vertexNormals[s].applyMatrix3(e).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(){var t;return function(n){return t===void 0&&(t=new Ye),t.makeRotationX(n),this.applyMatrix(t),this}}(),rotateY:function(){var t;return function(n){return t===void 0&&(t=new Ye),t.makeRotationY(n),this.applyMatrix(t),this}}(),rotateZ:function(){var t;return function(n){return t===void 0&&(t=new Ye),t.makeRotationZ(n),this.applyMatrix(t),this}}(),translate:function(){var t;return function(n,i,r){return t===void 0&&(t=new Ye),t.makeTranslation(n,i,r),this.applyMatrix(t),this}}(),scale:function(){var t;return function(n,i,r){return t===void 0&&(t=new Ye),t.makeScale(n,i,r),this.applyMatrix(t),this}}(),lookAt:function(){var t;return function(n){t===void 0&&(t=new De),t.lookAt(n),t.updateMatrix(),this.applyMatrix(t.matrix)}}(),fromBufferGeometry:function(t){var e=this,n=t.index!==null?t.index.array:void 0,i=t.attributes,r=i.position.array,a=i.normal!==void 0?i.normal.array:void 0,s=i.color!==void 0?i.color.array:void 0,o=i.uv!==void 0?i.uv.array:void 0,c=i.uv2!==void 0?i.uv2.array:void 0;c!==void 0&&(this.faceVertexUvs[1]=[]);for(var l=[],h=[],u=[],f=0,p=0;f<r.length;f+=3,p+=2)e.vertices.push(new U(r[f],r[f+1],r[f+2])),a!==void 0&&l.push(new U(a[f],a[f+1],a[f+2])),s!==void 0&&e.colors.push(new Ve(s[f],s[f+1],s[f+2])),o!==void 0&&h.push(new Ce(o[p],o[p+1])),c!==void 0&&u.push(new Ce(c[p],c[p+1]));function g(y,b,E,S){var M=a!==void 0?[l[y].clone(),l[b].clone(),l[E].clone()]:[],w=s!==void 0?[e.colors[y].clone(),e.colors[b].clone(),e.colors[E].clone()]:[],L=new zn(y,b,E,M,w,S);e.faces.push(L),o!==void 0&&e.faceVertexUvs[0].push([h[y].clone(),h[b].clone(),h[E].clone()]),c!==void 0&&e.faceVertexUvs[1].push([u[y].clone(),u[b].clone(),u[E].clone()])}if(n!==void 0){var d=t.groups;if(d.length>0)for(var f=0;f<d.length;f++)for(var m=d[f],v=m.start,_=m.count,p=v,x=v+_;p<x;p+=3)g(n[p],n[p+1],n[p+2],m.materialIndex);else for(var f=0;f<n.length;f+=3)g(n[f],n[f+1],n[f+2])}else for(var f=0;f<r.length/3;f+=3)g(f,f+1,f+2);return this.computeFaceNormals(),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this},center:function(){this.computeBoundingBox();var t=this.boundingBox.getCenter().negate();return this.translate(t.x,t.y,t.z),t},normalize:function(){this.computeBoundingSphere();var t=this.boundingSphere.center,e=this.boundingSphere.radius,n=e===0?1:1/e,i=new Ye;return i.set(n,0,0,-n*t.x,0,n,0,-n*t.y,0,0,n,-n*t.z,0,0,0,1),this.applyMatrix(i),this},computeFaceNormals:function(){for(var t=new U,e=new U,n=0,i=this.faces.length;n<i;n++){var r=this.faces[n],a=this.vertices[r.a],s=this.vertices[r.b],o=this.vertices[r.c];t.subVectors(o,s),e.subVectors(a,s),t.cross(e),t.normalize(),r.normal.copy(t)}},computeVertexNormals:function(t){t===void 0&&(t=!0);var e,n,i,r,a,s;for(s=new Array(this.vertices.length),e=0,n=this.vertices.length;e<n;e++)s[e]=new U;if(t){var o,c,l,h=new U,u=new U;for(i=0,r=this.faces.length;i<r;i++)a=this.faces[i],o=this.vertices[a.a],c=this.vertices[a.b],l=this.vertices[a.c],h.subVectors(l,c),u.subVectors(o,c),h.cross(u),s[a.a].add(h),s[a.b].add(h),s[a.c].add(h)}else for(this.computeFaceNormals(),i=0,r=this.faces.length;i<r;i++)a=this.faces[i],s[a.a].add(a.normal),s[a.b].add(a.normal),s[a.c].add(a.normal);for(e=0,n=this.vertices.length;e<n;e++)s[e].normalize();for(i=0,r=this.faces.length;i<r;i++){a=this.faces[i];var f=a.vertexNormals;f.length===3?(f[0].copy(s[a.a]),f[1].copy(s[a.b]),f[2].copy(s[a.c])):(f[0]=s[a.a].clone(),f[1]=s[a.b].clone(),f[2]=s[a.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var t,e,n;for(this.computeFaceNormals(),t=0,e=this.faces.length;t<e;t++){n=this.faces[t];var i=n.vertexNormals;i.length===3?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var t,e,n,i,r;for(n=0,i=this.faces.length;n<i;n++)for(r=this.faces[n],r.__originalFaceNormal?r.__originalFaceNormal.copy(r.normal):r.__originalFaceNormal=r.normal.clone(),r.__originalVertexNormals||(r.__originalVertexNormals=[]),t=0,e=r.vertexNormals.length;t<e;t++)r.__originalVertexNormals[t]?r.__originalVertexNormals[t].copy(r.vertexNormals[t]):r.__originalVertexNormals[t]=r.vertexNormals[t].clone();var a=new Ze;for(a.faces=this.faces,t=0,e=this.morphTargets.length;t<e;t++){if(!this.morphNormals[t]){this.morphNormals[t]={},this.morphNormals[t].faceNormals=[],this.morphNormals[t].vertexNormals=[];var s=this.morphNormals[t].faceNormals,o=this.morphNormals[t].vertexNormals,l,h;for(n=0,i=this.faces.length;n<i;n++)l=new U,h={a:new U,b:new U,c:new U},s.push(l),o.push(h)}var c=this.morphNormals[t];a.vertices=this.morphTargets[t].vertices,a.computeFaceNormals(),a.computeVertexNormals();var l,h;for(n=0,i=this.faces.length;n<i;n++)r=this.faces[n],l=c.faceNormals[n],h=c.vertexNormals[n],l.copy(r.normal),h.a.copy(r.vertexNormals[0]),h.b.copy(r.vertexNormals[1]),h.c.copy(r.vertexNormals[2])}for(n=0,i=this.faces.length;n<i;n++)r=this.faces[n],r.normal=r.__originalFaceNormal,r.vertexNormals=r.__originalVertexNormals},computeLineDistances:function(){for(var t=0,e=this.vertices,n=0,i=e.length;n<i;n++)n>0&&(t+=e[n].distanceTo(e[n-1])),this.lineDistances[n]=t},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Ei),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new sn),this.boundingSphere.setFromPoints(this.vertices)},merge:function(t,e,n){if((t&&t.isGeometry)===!1){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",t);return}var i,r=this.vertices.length,a=this.vertices,s=t.vertices,o=this.faces,c=t.faces,l=this.faceVertexUvs[0],h=t.faceVertexUvs[0],u=this.colors,f=t.colors;n===void 0&&(n=0),e!==void 0&&(i=new ei().getNormalMatrix(e));for(var p=0,g=s.length;p<g;p++){var d=s[p],m=d.clone();e!==void 0&&m.applyMatrix4(e),a.push(m)}for(var p=0,g=f.length;p<g;p++)u.push(f[p].clone());for(p=0,g=c.length;p<g;p++){var v=c[p],_,x,y,b=v.vertexNormals,E=v.vertexColors;_=new zn(v.a+r,v.b+r,v.c+r),_.normal.copy(v.normal),i!==void 0&&_.normal.applyMatrix3(i).normalize();for(var S=0,M=b.length;S<M;S++)x=b[S].clone(),i!==void 0&&x.applyMatrix3(i).normalize(),_.vertexNormals.push(x);_.color.copy(v.color);for(var S=0,M=E.length;S<M;S++)y=E[S],_.vertexColors.push(y.clone());_.materialIndex=v.materialIndex+n,o.push(_)}for(p=0,g=h.length;p<g;p++){var w=h[p],L=[];if(w!==void 0){for(var S=0,M=w.length;S<M;S++)L.push(w[S].clone());l.push(L)}}},mergeMesh:function(t){if((t&&t.isMesh)===!1){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",t);return}t.matrixAutoUpdate&&t.updateMatrix(),this.merge(t.geometry,t.matrix)},mergeVertices:function(){var t={},e=[],n=[],i,r,a=4,s=Math.pow(10,a),o,c,l,h,u,f;for(o=0,c=this.vertices.length;o<c;o++)i=this.vertices[o],r=Math.round(i.x*s)+"_"+Math.round(i.y*s)+"_"+Math.round(i.z*s),t[r]===void 0?(t[r]=o,e.push(this.vertices[o]),n[o]=e.length-1):n[o]=n[t[r]];var p=[];for(o=0,c=this.faces.length;o<c;o++){l=this.faces[o],l.a=n[l.a],l.b=n[l.b],l.c=n[l.c],h=[l.a,l.b,l.c];for(var g=0;g<3;g++)if(h[g]===h[(g+1)%3]){p.push(o);break}}for(o=p.length-1;o>=0;o--){var d=p[o];for(this.faces.splice(d,1),u=0,f=this.faceVertexUvs.length;u<f;u++)this.faceVertexUvs[u].splice(d,1)}var m=this.vertices.length-e.length;return this.vertices=e,m},sortFacesByMaterialIndex:function(){for(var t=this.faces,e=t.length,n=0;n<e;n++)t[n]._id=n;function i(l,h){return l.materialIndex-h.materialIndex}t.sort(i);var r=this.faceVertexUvs[0],a=this.faceVertexUvs[1],s,o;r&&r.length===e&&(s=[]),a&&a.length===e&&(o=[]);for(var n=0;n<e;n++){var c=t[n]._id;s&&s.push(r[c]),o&&o.push(a[c])}s&&(this.faceVertexUvs[0]=s),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){var t={metadata:{version:4.4,type:"Geometry",generator:"Geometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.parameters!==void 0){var e=this.parameters;for(var n in e)e[n]!==void 0&&(t[n]=e[n]);return t}for(var i=[],r=0;r<this.vertices.length;r++){var a=this.vertices[r];i.push(a.x,a.y,a.z)}for(var s=[],o=[],c={},l=[],h={},u=[],f={},r=0;r<this.faces.length;r++){var p=this.faces[r],g=!0,d=!1,m=this.faceVertexUvs[0][r]!==void 0,v=p.normal.length()>0,_=p.vertexNormals.length>0,x=p.color.r!==1||p.color.g!==1||p.color.b!==1,y=p.vertexColors.length>0,b=0;if(b=w(b,0,0),b=w(b,1,g),b=w(b,2,d),b=w(b,3,m),b=w(b,4,v),b=w(b,5,_),b=w(b,6,x),b=w(b,7,y),s.push(b),s.push(p.a,p.b,p.c),s.push(p.materialIndex),m){var E=this.faceVertexUvs[0][r];s.push(V(E[0]),V(E[1]),V(E[2]))}if(v&&s.push(L(p.normal)),_){var S=p.vertexNormals;s.push(L(S[0]),L(S[1]),L(S[2]))}if(x&&s.push(z(p.color)),y){var M=p.vertexColors;s.push(z(M[0]),z(M[1]),z(M[2]))}}function w(A,T,P){return P?A|1<<T:A&~(1<<T)}function L(A){var T=A.x.toString()+A.y.toString()+A.z.toString();return c[T]!==void 0||(c[T]=o.length/3,o.push(A.x,A.y,A.z)),c[T]}function z(A){var T=A.r.toString()+A.g.toString()+A.b.toString();return h[T]!==void 0||(h[T]=l.length,l.push(A.getHex())),h[T]}function V(A){var T=A.x.toString()+A.y.toString();return f[T]!==void 0||(f[T]=u.length/2,u.push(A.x,A.y)),f[T]}return t.data={},t.data.vertices=i,t.data.normals=o,l.length>0&&(t.data.colors=l),u.length>0&&(t.data.uvs=[u]),t.data.faces=s,t},clone:function(){return new Ze().copy(this)},copy:function(t){this.vertices=[],this.faces=[],this.faceVertexUvs=[[]],this.colors=[];for(var e=t.vertices,n=0,i=e.length;n<i;n++)this.vertices.push(e[n].clone());for(var r=t.colors,n=0,i=r.length;n<i;n++)this.colors.push(r[n].clone());for(var a=t.faces,n=0,i=a.length;n<i;n++)this.faces.push(a[n].clone());for(var n=0,i=t.faceVertexUvs.length;n<i;n++){var s=t.faceVertexUvs[n];this.faceVertexUvs[n]===void 0&&(this.faceVertexUvs[n]=[]);for(var o=0,c=s.length;o<c;o++){for(var l=s[o],h=[],u=0,f=l.length;u<f;u++){var p=l[u];h.push(p.clone())}this.faceVertexUvs[n].push(h)}}return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var GS=0;function Ff(){return GS++}function ze(){Object.defineProperty(this,"id",{value:Ff()}),this.uuid=Qe.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0}}Object.assign(ze.prototype,Kn.prototype,{isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){this.index=t},addAttribute:function(t,e){if((e&&e.isBufferAttribute)===!1&&(e&&e.isInterleavedBufferAttribute)===!1){console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.addAttribute(t,new Ee(arguments[1],arguments[2]));return}if(t==="index"){console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e);return}return this.attributes[t]=e,this},getAttribute:function(t){return this.attributes[t]},removeAttribute:function(t){return delete this.attributes[t],this},addGroup:function(t,e,n){this.groups.push({start:t,count:e,materialIndex:n!==void 0?n:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(t,e){this.drawRange.start=t,this.drawRange.count=e},applyMatrix:function(t){var e=this.attributes.position;e!==void 0&&(t.applyToVector3Array(e.array),e.needsUpdate=!0);var n=this.attributes.normal;if(n!==void 0){var i=new ei().getNormalMatrix(t);i.applyToVector3Array(n.array),n.needsUpdate=!0}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(){var t;return function(n){return t===void 0&&(t=new Ye),t.makeRotationX(n),this.applyMatrix(t),this}}(),rotateY:function(){var t;return function(n){return t===void 0&&(t=new Ye),t.makeRotationY(n),this.applyMatrix(t),this}}(),rotateZ:function(){var t;return function(n){return t===void 0&&(t=new Ye),t.makeRotationZ(n),this.applyMatrix(t),this}}(),translate:function(){var t;return function(n,i,r){return t===void 0&&(t=new Ye),t.makeTranslation(n,i,r),this.applyMatrix(t),this}}(),scale:function(){var t;return function(n,i,r){return t===void 0&&(t=new Ye),t.makeScale(n,i,r),this.applyMatrix(t),this}}(),lookAt:function(){var t;return function(n){t===void 0&&(t=new De),t.lookAt(n),t.updateMatrix(),this.applyMatrix(t.matrix)}}(),center:function(){this.computeBoundingBox();var t=this.boundingBox.getCenter().negate();return this.translate(t.x,t.y,t.z),t},setFromObject:function(t){var e=t.geometry;if(t.isPoints||t.isLine){var n=new ot(e.vertices.length*3,3),i=new ot(e.colors.length*3,3);if(this.addAttribute("position",n.copyVector3sArray(e.vertices)),this.addAttribute("color",i.copyColorsArray(e.colors)),e.lineDistances&&e.lineDistances.length===e.vertices.length){var r=new ot(e.lineDistances.length,1);this.addAttribute("lineDistance",r.copyArray(e.lineDistances))}e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone())}else t.isMesh&&e&&e.isGeometry&&this.fromGeometry(e);return this},updateFromObject:function(t){var e=t.geometry;if(t.isMesh){var n=e.__directGeometry;if(e.elementsNeedUpdate===!0&&(n=void 0,e.elementsNeedUpdate=!1),n===void 0)return this.fromGeometry(e);n.verticesNeedUpdate=e.verticesNeedUpdate,n.normalsNeedUpdate=e.normalsNeedUpdate,n.colorsNeedUpdate=e.colorsNeedUpdate,n.uvsNeedUpdate=e.uvsNeedUpdate,n.groupsNeedUpdate=e.groupsNeedUpdate,e.verticesNeedUpdate=!1,e.normalsNeedUpdate=!1,e.colorsNeedUpdate=!1,e.uvsNeedUpdate=!1,e.groupsNeedUpdate=!1,e=n}var i;return e.verticesNeedUpdate===!0&&(i=this.attributes.position,i!==void 0&&(i.copyVector3sArray(e.vertices),i.needsUpdate=!0),e.verticesNeedUpdate=!1),e.normalsNeedUpdate===!0&&(i=this.attributes.normal,i!==void 0&&(i.copyVector3sArray(e.normals),i.needsUpdate=!0),e.normalsNeedUpdate=!1),e.colorsNeedUpdate===!0&&(i=this.attributes.color,i!==void 0&&(i.copyColorsArray(e.colors),i.needsUpdate=!0),e.colorsNeedUpdate=!1),e.uvsNeedUpdate&&(i=this.attributes.uv,i!==void 0&&(i.copyVector2sArray(e.uvs),i.needsUpdate=!0),e.uvsNeedUpdate=!1),e.lineDistancesNeedUpdate&&(i=this.attributes.lineDistance,i!==void 0&&(i.copyArray(e.lineDistances),i.needsUpdate=!0),e.lineDistancesNeedUpdate=!1),e.groupsNeedUpdate&&(e.computeGroups(t.geometry),this.groups=e.groups,e.groupsNeedUpdate=!1),this},fromGeometry:function(t){return t.__directGeometry=new Sv().fromGeometry(t),this.fromDirectGeometry(t.__directGeometry)},fromDirectGeometry:function(t){var e=new Float32Array(t.vertices.length*3);if(this.addAttribute("position",new Ee(e,3).copyVector3sArray(t.vertices)),t.normals.length>0){var n=new Float32Array(t.normals.length*3);this.addAttribute("normal",new Ee(n,3).copyVector3sArray(t.normals))}if(t.colors.length>0){var i=new Float32Array(t.colors.length*3);this.addAttribute("color",new Ee(i,3).copyColorsArray(t.colors))}if(t.uvs.length>0){var r=new Float32Array(t.uvs.length*2);this.addAttribute("uv",new Ee(r,2).copyVector2sArray(t.uvs))}if(t.uvs2.length>0){var a=new Float32Array(t.uvs2.length*2);this.addAttribute("uv2",new Ee(a,2).copyVector2sArray(t.uvs2))}if(t.indices.length>0){var s=t.vertices.length>65535?Uint32Array:Uint16Array,o=new s(t.indices.length*3);this.setIndex(new Ee(o,1).copyIndicesArray(t.indices))}this.groups=t.groups;for(var c in t.morphTargets){for(var l=[],h=t.morphTargets[c],u=0,f=h.length;u<f;u++){var p=h[u],g=new ot(p.length*3,3);l.push(g.copyVector3sArray(p))}this.morphAttributes[c]=l}if(t.skinIndices.length>0){var d=new ot(t.skinIndices.length*4,4);this.addAttribute("skinIndex",d.copyVector4sArray(t.skinIndices))}if(t.skinWeights.length>0){var m=new ot(t.skinWeights.length*4,4);this.addAttribute("skinWeight",m.copyVector4sArray(t.skinWeights))}return t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Ei);var t=this.attributes.position;t!==void 0?this.boundingBox.setFromBufferAttribute(t):this.boundingBox.makeEmpty(),(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){var t=new Ei,e=new U;return function(){this.boundingSphere===null&&(this.boundingSphere=new sn);var i=this.attributes.position;if(i){var r=this.boundingSphere.center;t.setFromBufferAttribute(i),t.getCenter(r);for(var a=0,s=0,o=i.count;s<o;s++)e.x=i.getX(s),e.y=i.getY(s),e.z=i.getZ(s),a=Math.max(a,r.distanceToSquared(e));this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var t=this.index,e=this.attributes,n=this.groups;if(e.position){var i=e.position.array;if(e.normal===void 0)this.addAttribute("normal",new Ee(new Float32Array(i.length),3));else for(var r=e.normal.array,a=0,s=r.length;a<s;a++)r[a]=0;var o=e.normal.array,c,l,h,u=new U,f=new U,p=new U,g=new U,d=new U;if(t){var m=t.array;n.length===0&&this.addGroup(0,m.length);for(var v=0,_=n.length;v<_;++v)for(var x=n[v],y=x.start,b=x.count,a=y,s=y+b;a<s;a+=3)c=m[a+0]*3,l=m[a+1]*3,h=m[a+2]*3,u.fromArray(i,c),f.fromArray(i,l),p.fromArray(i,h),g.subVectors(p,f),d.subVectors(u,f),g.cross(d),o[c]+=g.x,o[c+1]+=g.y,o[c+2]+=g.z,o[l]+=g.x,o[l+1]+=g.y,o[l+2]+=g.z,o[h]+=g.x,o[h+1]+=g.y,o[h+2]+=g.z}else for(var a=0,s=i.length;a<s;a+=9)u.fromArray(i,a),f.fromArray(i,a+3),p.fromArray(i,a+6),g.subVectors(p,f),d.subVectors(u,f),g.cross(d),o[a]=g.x,o[a+1]=g.y,o[a+2]=g.z,o[a+3]=g.x,o[a+4]=g.y,o[a+5]=g.z,o[a+6]=g.x,o[a+7]=g.y,o[a+8]=g.z;this.normalizeNormals(),e.normal.needsUpdate=!0}},merge:function(t,e){if((t&&t.isBufferGeometry)===!1){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0);var n=this.attributes;for(var i in n)if(t.attributes[i]!==void 0)for(var r=n[i],a=r.array,s=t.attributes[i],o=s.array,c=s.itemSize,l=0,h=c*e;l<o.length;l++,h++)a[h]=o[l];return this},normalizeNormals:function(){for(var t=this.attributes.normal.array,e,n,i,r,a=0,s=t.length;a<s;a+=3)e=t[a],n=t[a+1],i=t[a+2],r=1/Math.sqrt(e*e+n*n+i*i),t[a]*=r,t[a+1]*=r,t[a+2]*=r},toNonIndexed:function(){if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var t=new ze,e=this.index.array,n=this.attributes;for(var i in n){for(var r=n[i],a=r.array,s=r.itemSize,o=new a.constructor(e.length*s),c=0,l=0,h=0,u=e.length;h<u;h++){c=e[h]*s;for(var f=0;f<s;f++)o[l++]=a[c++]}t.addAttribute(i,new Ee(o,s))}return t},toJSON:function(){var t={metadata:{version:4.4,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.parameters!==void 0){var e=this.parameters;for(var n in e)e[n]!==void 0&&(t[n]=e[n]);return t}t.data={attributes:{}};var i=this.index;if(i!==null){var r=Array.prototype.slice.call(i.array);t.data.index={type:i.array.constructor.name,array:r}}var a=this.attributes;for(var n in a){var s=a[n],r=Array.prototype.slice.call(s.array);t.data.attributes[n]={itemSize:s.itemSize,type:s.array.constructor.name,array:r,normalized:s.normalized}}var o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));var c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t},clone:function(){return new ze().copy(this)},copy:function(t){var e=t.index;e!==null&&this.setIndex(e.clone());var n=t.attributes;for(var i in n){var r=n[i];this.addAttribute(i,r.clone())}for(var a=t.groups,s=0,o=a.length;s<o;s++){var c=a[s];this.addGroup(c.start,c.count,c.materialIndex)}return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});ze.MaxIndex=65535;function $t(t,e){De.call(this),this.type="Mesh",this.geometry=t!==void 0?t:new ze,this.material=e!==void 0?e:new Tn({color:Math.random()*16777215}),this.drawMode=Pf,this.updateMorphTargets()}$t.prototype=Object.assign(Object.create(De.prototype),{constructor:$t,isMesh:!0,setDrawMode:function(t){this.drawMode=t},copy:function(t){return De.prototype.copy.call(this,t),this.drawMode=t.drawMode,this},updateMorphTargets:function(){var t=this.geometry.morphTargets;if(t!==void 0&&t.length>0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(var e=0,n=t.length;e<n;e++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[t[e].name]=e}},raycast:function(){var t=new Ye,e=new dr,n=new sn,i=new U,r=new U,a=new U,s=new U,o=new U,c=new U,l=new Ce,h=new Ce,u=new Ce,f=new U,p=new U,g=new U;function d(_,x,y,b,E,S,M){return Zn.barycoordFromPoint(_,x,y,b,f),E.multiplyScalar(f.x),S.multiplyScalar(f.y),M.multiplyScalar(f.z),E.add(S).add(M),E.clone()}function m(_,x,y,b,E,S,M){var w,L=_.material;if(L.side===cr?w=y.intersectTriangle(S,E,b,!0,M):w=y.intersectTriangle(b,E,S,L.side!==Hs,M),w===null)return null;g.copy(M),g.applyMatrix4(_.matrixWorld);var z=x.ray.origin.distanceTo(g);return z<x.near||z>x.far?null:{distance:z,point:g.clone(),object:_}}function v(_,x,y,b,E,S,M,w){i.fromArray(b,S*3),r.fromArray(b,M*3),a.fromArray(b,w*3);var L=m(_,x,y,i,r,a,p);return L&&(E&&(l.fromArray(E,S*2),h.fromArray(E,M*2),u.fromArray(E,w*2),L.uv=d(p,i,r,a,l,h,u)),L.face=new zn(S,M,w,Zn.normal(i,r,a)),L.faceIndex=S),L}return function(x,y){var b=this.geometry,E=this.material,S=this.matrixWorld;if(E!==void 0&&(b.boundingSphere===null&&b.computeBoundingSphere(),n.copy(b.boundingSphere),n.applyMatrix4(S),x.ray.intersectsSphere(n)!==!1&&(t.getInverse(S),e.copy(x.ray).applyMatrix4(t),!(b.boundingBox!==null&&e.intersectsBox(b.boundingBox)===!1)))){var M,w;if(b.isBufferGeometry){var L,z,V,A=b.index,T=b.attributes,P=T.position.array;if(T.uv!==void 0&&(M=T.uv.array),A!==null)for(var O=A.array,H=0,N=O.length;H<N;H+=3)L=O[H],z=O[H+1],V=O[H+2],w=v(this,x,e,P,M,L,z,V),w&&(w.faceIndex=Math.floor(H/3),y.push(w));else for(var H=0,N=P.length;H<N;H+=9)L=H/3,z=L+1,V=L+2,w=v(this,x,e,P,M,L,z,V),w&&(w.index=L,y.push(w))}else if(b.isGeometry){var I,B,Z,X=E&&E.isMultiMaterial,G=X===!0?E.materials:null,J=b.vertices,ie=b.faces,Y=b.faceVertexUvs[0];Y.length>0&&(M=Y);for(var ve=0,fe=ie.length;ve<fe;ve++){var se=ie[ve],pe=X===!0?G[se.materialIndex]:E;if(pe!==void 0){if(I=J[se.a],B=J[se.b],Z=J[se.c],pe.morphTargets===!0){var W=b.morphTargets,Fe=this.morphTargetInfluences;i.set(0,0,0),r.set(0,0,0),a.set(0,0,0);for(var ge=0,Xe=W.length;ge<Xe;ge++){var Me=Fe[ge];if(Me!==0){var Je=W[ge].vertices;i.addScaledVector(s.subVectors(Je[se.a],I),Me),r.addScaledVector(o.subVectors(Je[se.b],B),Me),a.addScaledVector(c.subVectors(Je[se.c],Z),Me)}}i.add(I),r.add(B),a.add(Z),I=i,B=r,Z=a}if(w=m(this,x,e,I,B,Z,p),w){if(M){var Be=M[ve];l.copy(Be[0]),h.copy(Be[1]),u.copy(Be[2]),w.uv=d(p,I,B,Z,l,h,u)}w.face=se,w.faceIndex=ve,y.push(w)}}}}}}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}});function $r(t,e,n,i,r,a){ze.call(this),this.type="BoxBufferGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};var s=this;i=Math.floor(i)||1,r=Math.floor(r)||1,a=Math.floor(a)||1;var o=_(i,r,a),c=x(i,r,a),l=new(c>65535?Uint32Array:Uint16Array)(c),h=new Float32Array(o*3),u=new Float32Array(o*3),f=new Float32Array(o*2),p=0,g=0,d=0,m=0,v=0;y("z","y","x",-1,-1,n,e,t,a,r,0),y("z","y","x",1,-1,n,e,-t,a,r,1),y("x","z","y",1,1,t,n,e,i,a,2),y("x","z","y",1,-1,t,n,-e,i,a,3),y("x","y","z",1,-1,t,e,n,i,r,4),y("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(new Ee(l,1)),this.addAttribute("position",new Ee(h,3)),this.addAttribute("normal",new Ee(u,3)),this.addAttribute("uv",new Ee(f,2));function _(b,E,S){var M=0;return M+=(b+1)*(E+1)*2,M+=(b+1)*(S+1)*2,M+=(S+1)*(E+1)*2,M}function x(b,E,S){var M=0;return M+=b*E*2,M+=b*S*2,M+=S*E*2,M*6}function y(b,E,S,M,w,L,z,V,A,T,P){for(var O=L/A,H=z/T,N=L/2,I=z/2,B=V/2,Z=A+1,X=T+1,G=0,J=0,ie=new U,Y=0;Y<X;Y++)for(var ve=Y*H-I,fe=0;fe<Z;fe++){var se=fe*O-N;ie[b]=se*M,ie[E]=ve*w,ie[S]=B,h[p]=ie.x,h[p+1]=ie.y,h[p+2]=ie.z,ie[b]=0,ie[E]=0,ie[S]=V>0?1:-1,u[p]=ie.x,u[p+1]=ie.y,u[p+2]=ie.z,f[g]=fe/A,f[g+1]=1-Y/T,p+=3,g+=2,G+=1}for(Y=0;Y<T;Y++)for(fe=0;fe<A;fe++){var pe=m+fe+Z*Y,W=m+fe+Z*(Y+1),Fe=m+(fe+1)+Z*(Y+1),ge=m+(fe+1)+Z*Y;l[d]=pe,l[d+1]=W,l[d+2]=ge,l[d+3]=W,l[d+4]=Fe,l[d+5]=ge,d+=6,J+=6}s.addGroup(v,J,P),v+=J,m+=G}}$r.prototype=Object.create(ze.prototype);$r.prototype.constructor=$r;function Zr(t,e,n,i){ze.call(this),this.type="PlaneBufferGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};for(var r=t/2,a=e/2,s=Math.floor(n)||1,o=Math.floor(i)||1,c=s+1,l=o+1,h=t/s,u=e/o,f=new Float32Array(c*l*3),p=new Float32Array(c*l*3),g=new Float32Array(c*l*2),d=0,m=0,v=0;v<l;v++)for(var _=v*u-a,x=0;x<c;x++){var y=x*h-r;f[d]=y,f[d+1]=-_,p[d+2]=1,g[m]=x/s,g[m+1]=1-v/o,d+=3,m+=2}d=0;for(var b=new(f.length/3>65535?Uint32Array:Uint16Array)(s*o*6),v=0;v<o;v++)for(var x=0;x<s;x++){var E=x+c*v,S=x+c*(v+1),M=x+1+c*(v+1),w=x+1+c*v;b[d]=E,b[d+1]=S,b[d+2]=w,b[d+3]=S,b[d+4]=M,b[d+5]=w,d+=6}this.setIndex(new Ee(b,1)),this.addAttribute("position",new Ee(f,3)),this.addAttribute("normal",new Ee(p,3)),this.addAttribute("uv",new Ee(g,2))}Zr.prototype=Object.create(ze.prototype);Zr.prototype.constructor=Zr;function on(){De.call(this),this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye}on.prototype=Object.create(De.prototype);on.prototype.constructor=on;on.prototype.isCamera=!0;on.prototype.getWorldDirection=function(){var t=new Wt;return function(n){var i=n||new U;return this.getWorldQuaternion(t),i.set(0,0,-1).applyQuaternion(t)}}();on.prototype.lookAt=function(){var t=new Ye;return function(n){t.lookAt(this.position,n,this.up),this.quaternion.setFromRotationMatrix(t)}}();on.prototype.clone=function(){return new this.constructor().copy(this)};on.prototype.copy=function(t){return De.prototype.copy.call(this,t),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this};function en(t,e,n,i){on.call(this),this.type="PerspectiveCamera",this.fov=t!==void 0?t:50,this.zoom=1,this.near=n!==void 0?n:.1,this.far=i!==void 0?i:2e3,this.focus=10,this.aspect=e!==void 0?e:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}en.prototype=Object.assign(Object.create(on.prototype),{constructor:en,isPerspectiveCamera:!0,copy:function(t){return on.prototype.copy.call(this,t),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},setFocalLength:function(t){var e=.5*this.getFilmHeight()/t;this.fov=Qe.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){var t=Math.tan(Qe.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/t},getEffectiveFOV:function(){return Qe.RAD2DEG*2*Math.atan(Math.tan(Qe.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(t,e,n,i,r,a){this.aspect=t/e,this.view={fullWidth:t,fullHeight:e,offsetX:n,offsetY:i,width:r,height:a},this.updateProjectionMatrix()},clearViewOffset:function(){this.view=null,this.updateProjectionMatrix()},updateProjectionMatrix:function(){var t=this.near,e=t*Math.tan(Qe.DEG2RAD*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(a!==null){var s=a.fullWidth,o=a.fullHeight;r+=a.offsetX*i/s,e-=a.offsetY*n/o,i*=a.width/s,n*=a.height/o}var c=this.filmOffset;c!==0&&(r+=t*c/this.getFilmWidth()),this.projectionMatrix.makeFrustum(r,r+i,e-n,e,t,this.far)},toJSON:function(t){var e=De.prototype.toJSON.call(this,t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});function ss(t,e,n,i,r,a){on.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r!==void 0?r:.1,this.far=a!==void 0?a:2e3,this.updateProjectionMatrix()}ss.prototype=Object.assign(Object.create(on.prototype),{constructor:ss,isOrthographicCamera:!0,copy:function(t){return on.prototype.copy.call(this,t),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this},setViewOffset:function(t,e,n,i,r,a){this.view={fullWidth:t,fullHeight:e,offsetX:n,offsetY:i,width:r,height:a},this.updateProjectionMatrix()},clearViewOffset:function(){this.view=null,this.updateProjectionMatrix()},updateProjectionMatrix:function(){var t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,s=i+e,o=i-e;if(this.view!==null){var c=this.zoom/(this.view.width/this.view.fullWidth),l=this.zoom/(this.view.height/this.view.fullHeight),h=(this.right-this.left)/this.view.width,u=(this.top-this.bottom)/this.view.height;r+=h*(this.view.offsetX/c),a=r+h*(this.view.width/c),s-=u*(this.view.offsetY/l),o=s-u*(this.view.height/l)}this.projectionMatrix.makeOrthographic(r,a,s,o,this.near,this.far)},toJSON:function(t){var e=De.prototype.toJSON.call(this,t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}});function VS(t,e,n){var i;function r(h){i=h}var a,s;function o(h){h.array instanceof Uint32Array&&e.get("OES_element_index_uint")?(a=t.UNSIGNED_INT,s=4):h.array instanceof Uint16Array?(a=t.UNSIGNED_SHORT,s=2):(a=t.UNSIGNED_BYTE,s=1)}function c(h,u){t.drawElements(i,u,a,h*s),n.calls++,n.vertices+=u,i===t.TRIANGLES&&(n.faces+=u/3)}function l(h,u,f){var p=e.get("ANGLE_instanced_arrays");if(p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p.drawElementsInstancedANGLE(i,f,a,u*s,h.maxInstancedCount),n.calls++,n.vertices+=f*h.maxInstancedCount,i===t.TRIANGLES&&(n.faces+=h.maxInstancedCount*f/3)}return{setMode:r,setIndex:o,render:c,renderInstances:l}}function HS(t,e,n){var i;function r(o){i=o}function a(o,c){t.drawArrays(i,o,c),n.calls++,n.vertices+=c,i===t.TRIANGLES&&(n.faces+=c/3)}function s(o){var c=e.get("ANGLE_instanced_arrays");if(c===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}var l=o.attributes.position,h=0;l.isInterleavedBufferAttribute?(h=l.data.count,c.drawArraysInstancedANGLE(i,0,h,o.maxInstancedCount)):(h=l.count,c.drawArraysInstancedANGLE(i,0,h,o.maxInstancedCount)),n.calls++,n.vertices+=h*o.maxInstancedCount,i===t.TRIANGLES&&(n.faces+=o.maxInstancedCount*h/3)}return{setMode:r,render:a,renderInstances:s}}function WS(){var t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];var n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Ve,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":n={position:new U,direction:new U,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":n={position:new U,color:new Ve,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"HemisphereLight":n={direction:new U,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function XS(t){for(var e=t.split(`
`),n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function Ip(t,e,n){var i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS)===!1&&console.error("THREE.WebGLShader: Shader couldn't compile."),t.getShaderInfoLog(i)!==""&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",e===t.VERTEX_SHADER?"vertex":"fragment",t.getShaderInfoLog(i),XS(n)),i}var qS=0;function Tv(t){switch(t){case Mo:return["Linear","( value )"];case cv:return["sRGB","( value )"];case hv:return["RGBE","( value )"];case uv:return["RGBM","( value, 7.0 )"];case fv:return["RGBM","( value, 16.0 )"];case dv:return["RGBD","( value, 256.0 )"];case Df:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw new Error("unsupported encoding: "+t)}}function qh(t,e){var n=Tv(e);return"vec4 "+t+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function YS(t,e){var n=Tv(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function jS(t,e){var n;switch(e){case Tf:n="Linear";break;case Wg:n="Reinhard";break;case Xg:n="Uncharted2";break;case qg:n="OptimizedCineon";break;default:throw new Error("unsupported toneMapping: "+e)}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function $S(t,e,n){t=t||{};var i=[t.derivatives||e.envMapCubeUV||e.bumpMap||e.normalMap||e.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(t.fragDepth||e.logarithmicDepthBuffer)&&n.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",t.drawBuffers&&n.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(t.shaderTextureLOD||e.envMap)&&n.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""];return i.filter(no).join(`
`)}function ZS(t){var e=[];for(var n in t){var i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function JS(t,e,n){for(var i={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES),a=0;a<r;a++){var s=t.getActiveAttrib(e,a),o=s.name;i[o]=t.getAttribLocation(e,o)}return i}function no(t){return t!==""}function Up(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights)}function Du(t){var e=/#include +<([\w\d.]+)>/g;function n(i,r){var a=vt[r];if(a===void 0)throw new Error("Can not resolve #include <"+r+">");return Du(a)}return t.replace(e,n)}function kp(t){var e=/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;function n(i,r,a,s){for(var o="",c=parseInt(r);c<parseInt(a);c++)o+=s.replace(/\[ i \]/g,"[ "+c+" ]");return o}return t.replace(e,n)}function QS(t,e,n,i){var r=t.context,a=n.extensions,s=n.defines,o=n.__webglShader.vertexShader,c=n.__webglShader.fragmentShader,l="SHADOWMAP_TYPE_BASIC";i.shadowMapType===mf?l="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mg&&(l="SHADOWMAP_TYPE_PCF_SOFT");var h="ENVMAP_TYPE_CUBE",u="ENVMAP_MODE_REFLECTION",f="ENVMAP_BLENDING_MULTIPLY";if(i.envMap){switch(n.envMap.mapping){case Xc:case sc:h="ENVMAP_TYPE_CUBE";break;case qc:case Yc:h="ENVMAP_TYPE_CUBE_UV";break;case Af:case oc:h="ENVMAP_TYPE_EQUIREC";break;case Cf:h="ENVMAP_TYPE_SPHERE";break}switch(n.envMap.mapping){case sc:case oc:u="ENVMAP_MODE_REFRACTION";break}switch(n.combine){case fl:f="ENVMAP_BLENDING_MULTIPLY";break;case Vg:f="ENVMAP_BLENDING_MIX";break;case Hg:f="ENVMAP_BLENDING_ADD";break}}var p=t.gammaFactor>0?t.gammaFactor:1,g=$S(a,i,t.extensions),d=ZS(s),m=r.createProgram(),v,_;n.isRawShaderMaterial?(v=[d,`
`].filter(no).join(`
`),_=[g,d,`
`].filter(no).join(`
`)):(v=["precision "+i.precision+" float;","precision "+i.precision+" int;","#define SHADER_NAME "+n.__webglShader.name,d,i.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+p,"#define MAX_BONES "+i.maxBones,i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.displacementMap&&i.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.vertexColors?"#define USE_COLOR":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.useVertexTexture?"#define BONE_TEXTURE":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+i.numClippingPlanes,i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&t.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),_=[g,"precision "+i.precision+" float;","precision "+i.precision+" int;","#define SHADER_NAME "+n.__webglShader.name,d,i.alphaTest?"#define ALPHATEST "+i.alphaTest:"","#define GAMMA_FACTOR "+p,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",i.envMap?"#define "+f:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.vertexColors?"#define USE_COLOR":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+i.numClippingPlanes,"#define UNION_CLIPPING_PLANES "+(i.numClippingPlanes-i.numClipIntersection),i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&t.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"",i.envMap&&t.extensions.get("EXT_shader_texture_lod")?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",i.toneMapping!==$l?"#define TONE_MAPPING":"",i.toneMapping!==$l?vt.tonemapping_pars_fragment:"",i.toneMapping!==$l?jS("toneMapping",i.toneMapping):"",i.outputEncoding||i.mapEncoding||i.envMapEncoding||i.emissiveMapEncoding?vt.encodings_pars_fragment:"",i.mapEncoding?qh("mapTexelToLinear",i.mapEncoding):"",i.envMapEncoding?qh("envMapTexelToLinear",i.envMapEncoding):"",i.emissiveMapEncoding?qh("emissiveMapTexelToLinear",i.emissiveMapEncoding):"",i.outputEncoding?YS("linearToOutputTexel",i.outputEncoding):"",i.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(no).join(`
`)),o=Du(o),o=Up(o,i),c=Du(c),c=Up(c,i),n.isShaderMaterial||(o=kp(o),c=kp(c));var x=v+o,y=_+c,b=Ip(r,r.VERTEX_SHADER,x),E=Ip(r,r.FRAGMENT_SHADER,y);r.attachShader(m,b),r.attachShader(m,E),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):i.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);var S=r.getProgramInfoLog(m),M=r.getShaderInfoLog(b),w=r.getShaderInfoLog(E),L=!0,z=!0;r.getProgramParameter(m,r.LINK_STATUS)===!1?(L=!1,console.error("THREE.WebGLProgram: shader error: ",r.getError(),"gl.VALIDATE_STATUS",r.getProgramParameter(m,r.VALIDATE_STATUS),"gl.getProgramInfoLog",S,M,w)):S!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",S):(M===""||w==="")&&(z=!1),z&&(this.diagnostics={runnable:L,material:n,programLog:S,vertexShader:{log:M,prefix:v},fragmentShader:{log:w,prefix:_}}),r.deleteShader(b),r.deleteShader(E);var V;this.getUniforms=function(){return V===void 0&&(V=new ur(r,m,t)),V};var A;return this.getAttributes=function(){return A===void 0&&(A=JS(r,m)),A},this.destroy=function(){r.deleteProgram(m),this.program=void 0},Object.defineProperties(this,{uniforms:{get:function(){return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."),this.getUniforms()}},attributes:{get:function(){return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."),this.getAttributes()}}}),this.id=qS++,this.code=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=E,this}function KS(t,e){var n=[],i={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points"},r=["precision","supportsVertexTextures","map","mapEncoding","envMap","envMapMode","envMapEncoding","lightMap","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","fog","useFog","fogExp","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking"];function a(o){if(e.floatVertexTextures&&o&&o.skeleton&&o.skeleton.useVertexTexture)return 1024;var c=e.maxVertexUniforms,l=Math.floor((c-20)/4),h=l;return o!==void 0&&o&&o.isSkinnedMesh&&(h=Math.min(o.skeleton.bones.length,h),h<o.skeleton.bones.length&&console.warn("WebGLRenderer: too many bones - "+o.skeleton.bones.length+", this GPU supports just "+h+" (try OpenGL instead of ANGLE)")),h}function s(o,c){var l;return o?o.isTexture?l=o.encoding:o.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),l=o.texture.encoding):l=Mo,l===Mo&&c&&(l=Df),l}this.getParameters=function(o,c,l,h,u,f){var p=i[o.type],g=a(f),d=t.getPrecision();o.precision!==null&&(d=e.getMaxPrecision(o.precision),d!==o.precision&&console.warn("THREE.WebGLProgram.getParameters:",o.precision,"not supported, using",d,"instead."));var m=t.getCurrentRenderTarget(),v={shaderID:p,precision:d,supportsVertexTextures:e.vertexTextures,outputEncoding:s(m?m.texture:null,t.gammaOutput),map:!!o.map,mapEncoding:s(o.map,t.gammaInput),envMap:!!o.envMap,envMapMode:o.envMap&&o.envMap.mapping,envMapEncoding:s(o.envMap,t.gammaInput),envMapCubeUV:!!o.envMap&&(o.envMap.mapping===qc||o.envMap.mapping===Yc),lightMap:!!o.lightMap,aoMap:!!o.aoMap,emissiveMap:!!o.emissiveMap,emissiveMapEncoding:s(o.emissiveMap,t.gammaInput),bumpMap:!!o.bumpMap,normalMap:!!o.normalMap,displacementMap:!!o.displacementMap,roughnessMap:!!o.roughnessMap,metalnessMap:!!o.metalnessMap,specularMap:!!o.specularMap,alphaMap:!!o.alphaMap,gradientMap:!!o.gradientMap,combine:o.combine,vertexColors:o.vertexColors,fog:!!l,useFog:o.fog,fogExp:l&&l.isFogExp2,flatShading:o.shading===gf,sizeAttenuation:o.sizeAttenuation,logarithmicDepthBuffer:e.logarithmicDepthBuffer,skinning:o.skinning,maxBones:g,useVertexTexture:e.floatVertexTextures&&f&&f.skeleton&&f.skeleton.useVertexTexture,morphTargets:o.morphTargets,morphNormals:o.morphNormals,maxMorphTargets:t.maxMorphTargets,maxMorphNormals:t.maxMorphNormals,numDirLights:c.directional.length,numPointLights:c.point.length,numSpotLights:c.spot.length,numRectAreaLights:c.rectArea.length,numHemiLights:c.hemi.length,numClippingPlanes:h,numClipIntersection:u,shadowMapEnabled:t.shadowMap.enabled&&f.receiveShadow&&c.shadows.length>0,shadowMapType:t.shadowMap.type,toneMapping:t.toneMapping,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:o.premultipliedAlpha,alphaTest:o.alphaTest,doubleSided:o.side===Hs,flipSided:o.side===cr,depthPacking:o.depthPacking!==void 0?o.depthPacking:!1};return v},this.getProgramCode=function(o,c){var l=[];if(c.shaderID?l.push(c.shaderID):(l.push(o.fragmentShader),l.push(o.vertexShader)),o.defines!==void 0)for(var h in o.defines)l.push(h),l.push(o.defines[h]);for(var u=0;u<r.length;u++)l.push(c[r[u]]);return l.join()},this.acquireProgram=function(o,c,l){for(var h,u=0,f=n.length;u<f;u++){var p=n[u];if(p.code===l){h=p,++h.usedTimes;break}}return h===void 0&&(h=new QS(t,l,o,c),n.push(h)),h},this.releaseProgram=function(o){if(--o.usedTimes===0){var c=n.indexOf(o);n[c]=n[n.length-1],n.pop(),o.destroy()}},this.programs=n}function eT(t,e,n){var i={};function r(l){var h=l.target,u=i[h.id];u.index!==null&&s(u.index),o(u.attributes),h.removeEventListener("dispose",r),delete i[h.id];var f=e.get(h);f.wireframe&&s(f.wireframe),e.delete(h);var p=e.get(u);p.wireframe&&s(p.wireframe),e.delete(u),n.memory.geometries--}function a(l){return l.isInterleavedBufferAttribute?e.get(l.data).__webglBuffer:e.get(l).__webglBuffer}function s(l){var h=a(l);h!==void 0&&(t.deleteBuffer(h),c(l))}function o(l){for(var h in l)s(l[h])}function c(l){l.isInterleavedBufferAttribute?e.delete(l.data):e.delete(l)}return{get:function(l){var h=l.geometry;if(i[h.id]!==void 0)return i[h.id];h.addEventListener("dispose",r);var u;return h.isBufferGeometry?u=h:h.isGeometry&&(h._bufferGeometry===void 0&&(h._bufferGeometry=new ze().setFromObject(l)),u=h._bufferGeometry),i[h.id]=u,n.memory.geometries++,u}}}function tT(t,e,n){var i=new eT(t,e,n);function r(u){var f=i.get(u);u.geometry.isGeometry&&f.updateFromObject(u);var p=f.index,g=f.attributes;p!==null&&a(p,t.ELEMENT_ARRAY_BUFFER);for(var d in g)a(g[d],t.ARRAY_BUFFER);var m=f.morphAttributes;for(var d in m)for(var v=m[d],_=0,x=v.length;_<x;_++)a(v[_],t.ARRAY_BUFFER);return f}function a(u,f){var p=u.isInterleavedBufferAttribute?u.data:u,g=e.get(p);g.__webglBuffer===void 0?s(g,p,f):g.version!==p.version&&o(g,p,f)}function s(u,f,p){u.__webglBuffer=t.createBuffer(),t.bindBuffer(p,u.__webglBuffer);var g=f.dynamic?t.DYNAMIC_DRAW:t.STATIC_DRAW;t.bufferData(p,f.array,g);var d=t.FLOAT,m=f.array;m instanceof Float32Array?d=t.FLOAT:m instanceof Float64Array?console.warn("Unsupported data buffer format: Float64Array"):m instanceof Uint16Array?d=t.UNSIGNED_SHORT:m instanceof Int16Array?d=t.SHORT:m instanceof Uint32Array?d=t.UNSIGNED_INT:m instanceof Int32Array?d=t.INT:m instanceof Int8Array?d=t.BYTE:m instanceof Uint8Array&&(d=t.UNSIGNED_BYTE),u.bytesPerElement=m.BYTES_PER_ELEMENT,u.type=d,u.version=f.version,f.onUploadCallback()}function o(u,f,p){t.bindBuffer(p,u.__webglBuffer),f.dynamic===!1?t.bufferData(p,f.array,t.STATIC_DRAW):f.updateRange.count===-1?t.bufferSubData(p,0,f.array):f.updateRange.count===0?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):(t.bufferSubData(p,f.updateRange.offset*f.array.BYTES_PER_ELEMENT,f.array.subarray(f.updateRange.offset,f.updateRange.offset+f.updateRange.count)),f.updateRange.count=0),u.version=f.version}function c(u){return u.isInterleavedBufferAttribute?e.get(u.data).__webglBuffer:e.get(u).__webglBuffer}function l(u){return u.isInterleavedBufferAttribute?e.get(u.data):e.get(u)}function h(u){var f=e.get(u);if(f.wireframe!==void 0)return f.wireframe;var p=[],g=u.index,d=u.attributes,m=d.position;if(g!==null)for(var v=g.array,_=0,x=v.length;_<x;_+=3){var y=v[_+0],b=v[_+1],E=v[_+2];p.push(y,b,b,E,E,y)}else for(var v=d.position.array,_=0,x=v.length/3-1;_<x;_+=3){var y=_+0,b=_+1,E=_+2;p.push(y,b,b,E,E,y)}var S=m.count>65535?Uint32Array:Uint16Array,M=new Ee(new S(p),1);return a(M,t.ELEMENT_ARRAY_BUFFER),f.wireframe=M,M}return{getAttributeBuffer:c,getAttributeProperties:l,getWireframeAttribute:h,update:r}}function nT(t,e,n,i,r,a,s){var o=s.memory,c=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext;function l(A,T){if(A.width>T||A.height>T){var P=T/Math.max(A.width,A.height),O=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");O.width=Math.floor(A.width*P),O.height=Math.floor(A.height*P);var H=O.getContext("2d");return H.drawImage(A,0,0,A.width,A.height,0,0,O.width,O.height),console.warn("THREE.WebGLRenderer: image is too big ("+A.width+"x"+A.height+"). Resized to "+O.width+"x"+O.height,A),O}return A}function h(A){return Qe.isPowerOfTwo(A.width)&&Qe.isPowerOfTwo(A.height)}function u(A){if(A instanceof HTMLImageElement||A instanceof HTMLCanvasElement){var T=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");T.width=Qe.nearestPowerOfTwo(A.width),T.height=Qe.nearestPowerOfTwo(A.height);var P=T.getContext("2d");return P.drawImage(A,0,0,T.width,T.height),console.warn("THREE.WebGLRenderer: image is not power of two ("+A.width+"x"+A.height+"). Resized to "+T.width+"x"+T.height,A),T}return A}function f(A){return A.wrapS!==On||A.wrapT!==On||A.minFilter!==Nn&&A.minFilter!==wn}function p(A){return A===Nn||A===jc||A===$c?t.NEAREST:t.LINEAR}function g(A){var T=A.target;T.removeEventListener("dispose",g),m(T),o.textures--}function d(A){var T=A.target;T.removeEventListener("dispose",d),v(T),o.textures--}function m(A){var T=i.get(A);if(A.image&&T.__image__webglTextureCube)t.deleteTexture(T.__image__webglTextureCube);else{if(T.__webglInit===void 0)return;t.deleteTexture(T.__webglTexture)}i.delete(A)}function v(A){var T=i.get(A),P=i.get(A.texture);if(A){if(P.__webglTexture!==void 0&&t.deleteTexture(P.__webglTexture),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLRenderTargetCube)for(var O=0;O<6;O++)t.deleteFramebuffer(T.__webglFramebuffer[O]),T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[O]);else t.deleteFramebuffer(T.__webglFramebuffer),T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer);i.delete(A.texture),i.delete(A)}}function _(A,T){var P=i.get(A);if(A.version>0&&P.__version!==A.version){var O=A.image;if(O===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined",A);else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete",A);else{E(P,A,T);return}}n.activeTexture(t.TEXTURE0+T),n.bindTexture(t.TEXTURE_2D,P.__webglTexture)}function x(A,T){var P=i.get(A);if(A.image.length===6)if(A.version>0&&P.__version!==A.version){P.__image__webglTextureCube||(A.addEventListener("dispose",g),P.__image__webglTextureCube=t.createTexture(),o.textures++),n.activeTexture(t.TEXTURE0+T),n.bindTexture(t.TEXTURE_CUBE_MAP,P.__image__webglTextureCube),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY);for(var O=A&&A.isCompressedTexture,H=A.image[0]&&A.image[0].isDataTexture,N=[],I=0;I<6;I++)!O&&!H?N[I]=l(A.image[I],r.maxCubemapSize):N[I]=H?A.image[I].image:A.image[I];var B=N[0],Z=h(B),X=a(A.format),G=a(A.type);b(t.TEXTURE_CUBE_MAP,A,Z);for(var I=0;I<6;I++)if(!O)H?n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,X,N[I].width,N[I].height,0,X,G,N[I].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,X,X,G,N[I]);else for(var J,ie=N[I].mipmaps,Y=0,ve=ie.length;Y<ve;Y++)J=ie[Y],A.format!==wi&&A.format!==ns?n.getCompressedTextureFormats().indexOf(X)>-1?n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+I,Y,X,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+I,Y,X,J.width,J.height,0,X,G,J.data);A.generateMipmaps&&Z&&t.generateMipmap(t.TEXTURE_CUBE_MAP),P.__version=A.version,A.onUpdate&&A.onUpdate(A)}else n.activeTexture(t.TEXTURE0+T),n.bindTexture(t.TEXTURE_CUBE_MAP,P.__image__webglTextureCube)}function y(A,T){n.activeTexture(t.TEXTURE0+T),n.bindTexture(t.TEXTURE_CUBE_MAP,i.get(A).__webglTexture)}function b(A,T,P){var O;if(P?(t.texParameteri(A,t.TEXTURE_WRAP_S,a(T.wrapS)),t.texParameteri(A,t.TEXTURE_WRAP_T,a(T.wrapT)),t.texParameteri(A,t.TEXTURE_MAG_FILTER,a(T.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,a(T.minFilter))):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(T.wrapS!==On||T.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.",T),t.texParameteri(A,t.TEXTURE_MAG_FILTER,p(T.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,p(T.minFilter)),T.minFilter!==Nn&&T.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.",T)),O=e.get("EXT_texture_filter_anisotropic"),O){if(T.type===ts&&e.get("OES_texture_float_linear")===null||T.type===cc&&e.get("OES_texture_half_float_linear")===null)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(t.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function E(A,T,P){A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",g),A.__webglTexture=t.createTexture(),o.textures++),n.activeTexture(t.TEXTURE0+P),n.bindTexture(t.TEXTURE_2D,A.__webglTexture),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment);var O=l(T.image,r.maxTextureSize);f(T)&&h(O)===!1&&(O=u(O));var H=h(O),N=a(T.format),I=a(T.type);b(t.TEXTURE_2D,T,H);var B,Z=T.mipmaps;if(T.isDepthTexture){var X=t.DEPTH_COMPONENT;if(T.type===ts){if(!c)throw new Error("Float Depth Texture only supported in WebGL2.0");X=t.DEPTH_COMPONENT32F}else c&&(X=t.DEPTH_COMPONENT16);T.format===Or&&X===t.DEPTH_COMPONENT&&T.type!==_o&&T.type!==Rf&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=_o,I=a(T.type)),T.format===is&&(X=t.DEPTH_STENCIL,T.type!==xo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=xo,I=a(T.type))),n.texImage2D(t.TEXTURE_2D,0,X,O.width,O.height,0,N,I,null)}else if(T.isDataTexture)if(Z.length>0&&H){for(var G=0,J=Z.length;G<J;G++)B=Z[G],n.texImage2D(t.TEXTURE_2D,G,N,B.width,B.height,0,N,I,B.data);T.generateMipmaps=!1}else n.texImage2D(t.TEXTURE_2D,0,N,O.width,O.height,0,N,I,O.data);else if(T.isCompressedTexture)for(var G=0,J=Z.length;G<J;G++)B=Z[G],T.format!==wi&&T.format!==ns?n.getCompressedTextureFormats().indexOf(N)>-1?n.compressedTexImage2D(t.TEXTURE_2D,G,N,B.width,B.height,0,B.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(t.TEXTURE_2D,G,N,B.width,B.height,0,N,I,B.data);else if(Z.length>0&&H){for(var G=0,J=Z.length;G<J;G++)B=Z[G],n.texImage2D(t.TEXTURE_2D,G,N,N,I,B);T.generateMipmaps=!1}else n.texImage2D(t.TEXTURE_2D,0,N,N,I,O);T.generateMipmaps&&H&&t.generateMipmap(t.TEXTURE_2D),A.__version=T.version,T.onUpdate&&T.onUpdate(T)}function S(A,T,P,O){var H=a(T.texture.format),N=a(T.texture.type);n.texImage2D(O,0,H,T.width,T.height,0,H,N,null),t.bindFramebuffer(t.FRAMEBUFFER,A),t.framebufferTexture2D(t.FRAMEBUFFER,P,O,i.get(T.texture).__webglTexture,0),t.bindFramebuffer(t.FRAMEBUFFER,null)}function M(A,T){t.bindRenderbuffer(t.RENDERBUFFER,A),T.depthBuffer&&!T.stencilBuffer?(t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)):T.depthBuffer&&T.stencilBuffer?(t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)):t.renderbufferStorage(t.RENDERBUFFER,t.RGBA4,T.width,T.height),t.bindRenderbuffer(t.RENDERBUFFER,null)}function w(A,T){var P=T&&T.isWebGLRenderTargetCube;if(P)throw new Error("Depth Texture with cube render targets is not supported!");if(t.bindFramebuffer(t.FRAMEBUFFER,A),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),_(T.depthTexture,0);var O=i.get(T.depthTexture).__webglTexture;if(T.depthTexture.format===Or)t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,O,0);else if(T.depthTexture.format===is)t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function L(A){var T=i.get(A),P=A.isWebGLRenderTargetCube===!0;if(A.depthTexture){if(P)throw new Error("target.depthTexture not supported in Cube render targets");w(T.__webglFramebuffer,A)}else if(P){T.__webglDepthbuffer=[];for(var O=0;O<6;O++)t.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[O]),T.__webglDepthbuffer[O]=t.createRenderbuffer(),M(T.__webglDepthbuffer[O],A)}else t.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),M(T.__webglDepthbuffer,A);t.bindFramebuffer(t.FRAMEBUFFER,null)}function z(A){var T=i.get(A),P=i.get(A.texture);A.addEventListener("dispose",d),P.__webglTexture=t.createTexture(),o.textures++;var O=A.isWebGLRenderTargetCube===!0,H=h(A);if(O){T.__webglFramebuffer=[];for(var N=0;N<6;N++)T.__webglFramebuffer[N]=t.createFramebuffer()}else T.__webglFramebuffer=t.createFramebuffer();if(O){n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture),b(t.TEXTURE_CUBE_MAP,A.texture,H);for(var N=0;N<6;N++)S(T.__webglFramebuffer[N],A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+N);A.texture.generateMipmaps&&H&&t.generateMipmap(t.TEXTURE_CUBE_MAP),n.bindTexture(t.TEXTURE_CUBE_MAP,null)}else n.bindTexture(t.TEXTURE_2D,P.__webglTexture),b(t.TEXTURE_2D,A.texture,H),S(T.__webglFramebuffer,A,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),A.texture.generateMipmaps&&H&&t.generateMipmap(t.TEXTURE_2D),n.bindTexture(t.TEXTURE_2D,null);A.depthBuffer&&L(A)}function V(A){var T=A.texture;if(T.generateMipmaps&&h(A)&&T.minFilter!==Nn&&T.minFilter!==wn){var P=A&&A.isWebGLRenderTargetCube?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,O=i.get(T).__webglTexture;n.bindTexture(P,O),t.generateMipmap(P),n.bindTexture(P,null)}}this.setTexture2D=_,this.setTextureCube=x,this.setTextureCubeDynamic=y,this.setupRenderTarget=z,this.updateRenderTargetMipmap=V}function iT(){var t={};return{get:function(e){var n=e.uuid,i=t[n];return i===void 0&&(i={},t[n]=i),i},delete:function(e){delete t[e.uuid]},clear:function(){t={}}}}function rT(t,e,n){function i(){var $=!1,de=new xt,_e=null,Te=new xt;return{setMask:function(we){_e!==we&&!$&&(t.colorMask(we,we,we,we),_e=we)},setLocked:function(we){$=we},setClear:function(we,qe,ut,q,re){re===!0&&(we*=q,qe*=q,ut*=q),de.set(we,qe,ut,q),Te.equals(de)===!1&&(t.clearColor(we,qe,ut,q),Te.copy(de))},reset:function(){$=!1,_e=null,Te.set(0,0,0,1)}}}function r(){var $=!1,de=null,_e=null,Te=null;return{setTest:function(we){we?ve(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(we){de!==we&&!$&&(t.depthMask(we),de=we)},setFunc:function(we){if(_e!==we){if(we)switch(we){case Ug:t.depthFunc(t.NEVER);break;case kg:t.depthFunc(t.ALWAYS);break;case Og:t.depthFunc(t.LESS);break;case ac:t.depthFunc(t.LEQUAL);break;case Ng:t.depthFunc(t.EQUAL);break;case Bg:t.depthFunc(t.GEQUAL);break;case zg:t.depthFunc(t.GREATER);break;case Gg:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}else t.depthFunc(t.LEQUAL);_e=we}},setLocked:function(we){$=we},setClear:function(we){Te!==we&&(t.clearDepth(we),Te=we)},reset:function(){$=!1,de=null,_e=null,Te=null}}}function a(){var $=!1,de=null,_e=null,Te=null,we=null,qe=null,ut=null,q=null,re=null;return{setTest:function(ce){ce?ve(t.STENCIL_TEST):fe(t.STENCIL_TEST)},setMask:function(ce){de!==ce&&!$&&(t.stencilMask(ce),de=ce)},setFunc:function(ce,Se,Ie){(_e!==ce||Te!==Se||we!==Ie)&&(t.stencilFunc(ce,Se,Ie),_e=ce,Te=Se,we=Ie)},setOp:function(ce,Se,Ie){(qe!==ce||ut!==Se||q!==Ie)&&(t.stencilOp(ce,Se,Ie),qe=ce,ut=Se,q=Ie)},setLocked:function(ce){$=ce},setClear:function(ce){re!==ce&&(t.clearStencil(ce),re=ce)},reset:function(){$=!1,de=null,_e=null,Te=null,we=null,qe=null,ut=null,q=null,re=null}}}var s=new i,o=new r,c=new a,l=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=new Uint8Array(l),u=new Uint8Array(l),f=new Uint8Array(l),p={},g=null,d=null,m=null,v=null,_=null,x=null,y=null,b=null,E=!1,S=null,M=null,w=null,L=null,z=null,V=null,A=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),T=parseFloat(/^WebGL\ ([0-9])/.exec(t.getParameter(t.VERSION))[1]),P=parseFloat(T)>=1,O=null,H={},N=new xt,I=new xt;function B($,de,_e){var Te=new Uint8Array(4),we=t.createTexture();t.bindTexture($,we),t.texParameteri($,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri($,t.TEXTURE_MAG_FILTER,t.NEAREST);for(var qe=0;qe<_e;qe++)t.texImage2D(de+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return we}var Z={};Z[t.TEXTURE_2D]=B(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=B(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6);function X(){s.setClear(0,0,0,1),o.setClear(1),c.setClear(0),ve(t.DEPTH_TEST),Xe(ac),Oe(!1),tt(go),ve(t.CULL_FACE),ve(t.BLEND),pe(Ws)}function G(){for(var $=0,de=h.length;$<de;$++)h[$]=0}function J($){if(h[$]=1,u[$]===0&&(t.enableVertexAttribArray($),u[$]=1),f[$]!==0){var de=e.get("ANGLE_instanced_arrays");de.vertexAttribDivisorANGLE($,0),f[$]=0}}function ie($,de,_e){h[$]=1,u[$]===0&&(t.enableVertexAttribArray($),u[$]=1),f[$]!==de&&(_e.vertexAttribDivisorANGLE($,de),f[$]=de)}function Y(){for(var $=0,de=u.length;$!==de;++$)u[$]!==h[$]&&(t.disableVertexAttribArray($),u[$]=0)}function ve($){p[$]!==!0&&(t.enable($),p[$]=!0)}function fe($){p[$]!==!1&&(t.disable($),p[$]=!1)}function se(){if(g===null&&(g=[],e.get("WEBGL_compressed_texture_pvrtc")||e.get("WEBGL_compressed_texture_s3tc")||e.get("WEBGL_compressed_texture_etc1")))for(var $=t.getParameter(t.COMPRESSED_TEXTURE_FORMATS),de=0;de<$.length;de++)g.push($[de]);return g}function pe($,de,_e,Te,we,qe,ut,q){$!==vo?ve(t.BLEND):fe(t.BLEND),($!==d||q!==E)&&($===xf?q?(t.blendEquationSeparate(t.FUNC_ADD,t.FUNC_ADD),t.blendFuncSeparate(t.ONE,t.ONE,t.ONE,t.ONE)):(t.blendEquation(t.FUNC_ADD),t.blendFunc(t.SRC_ALPHA,t.ONE)):$===yf?q?(t.blendEquationSeparate(t.FUNC_ADD,t.FUNC_ADD),t.blendFuncSeparate(t.ZERO,t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ONE_MINUS_SRC_ALPHA)):(t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ZERO,t.ONE_MINUS_SRC_COLOR)):$===bf?q?(t.blendEquationSeparate(t.FUNC_ADD,t.FUNC_ADD),t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA)):(t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ZERO,t.SRC_COLOR)):q?(t.blendEquationSeparate(t.FUNC_ADD,t.FUNC_ADD),t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA)):(t.blendEquationSeparate(t.FUNC_ADD,t.FUNC_ADD),t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA)),d=$,E=q),$===Mf?(we=we||de,qe=qe||_e,ut=ut||Te,(de!==m||we!==x)&&(t.blendEquationSeparate(n(de),n(we)),m=de,x=we),(_e!==v||Te!==_||qe!==y||ut!==b)&&(t.blendFuncSeparate(n(_e),n(Te),n(qe),n(ut)),v=_e,_=Te,y=qe,b=ut)):(m=null,v=null,_=null,x=null,y=null,b=null)}function W($){s.setMask($)}function Fe($){o.setTest($)}function ge($){o.setMask($)}function Xe($){o.setFunc($)}function Me($){c.setTest($)}function Je($){c.setMask($)}function Be($,de,_e){c.setFunc($,de,_e)}function Ue($,de,_e){c.setOp($,de,_e)}function Oe($){S!==$&&($?t.frontFace(t.CW):t.frontFace(t.CCW),S=$)}function tt($){$!==yg?(ve(t.CULL_FACE),$!==M&&($===go?t.cullFace(t.BACK):$===pf?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),M=$}function ft($){$!==w&&(P&&t.lineWidth($),w=$)}function k($,de,_e){$?(ve(t.POLYGON_OFFSET_FILL),(L!==de||z!==_e)&&(t.polygonOffset(de,_e),L=de,z=_e)):fe(t.POLYGON_OFFSET_FILL)}function R(){return V}function ne($){V=$,$?ve(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function he($){$===void 0&&($=t.TEXTURE0+A-1),O!==$&&(t.activeTexture($),O=$)}function me($,de){O===null&&he();var _e=H[O];_e===void 0&&(_e={type:void 0,texture:void 0},H[O]=_e),(_e.type!==$||_e.texture!==de)&&(t.bindTexture($,de||Z[$]),_e.type=$,_e.texture=de)}function ye(){try{t.compressedTexImage2D.apply(t,arguments)}catch($){console.error($)}}function We(){try{t.texImage2D.apply(t,arguments)}catch($){console.error($)}}function Le($){N.equals($)===!1&&(t.scissor($.x,$.y,$.z,$.w),N.copy($))}function oe($){I.equals($)===!1&&(t.viewport($.x,$.y,$.z,$.w),I.copy($))}function Ge(){for(var $=0;$<u.length;$++)u[$]===1&&(t.disableVertexAttribArray($),u[$]=0);p={},g=null,O=null,H={},d=null,S=null,M=null,s.reset(),o.reset(),c.reset()}return{buffers:{color:s,depth:o,stencil:c},init:X,initAttributes:G,enableAttribute:J,enableAttributeAndDivisor:ie,disableUnusedAttributes:Y,enable:ve,disable:fe,getCompressedTextureFormats:se,setBlending:pe,setColorWrite:W,setDepthTest:Fe,setDepthWrite:ge,setDepthFunc:Xe,setStencilTest:Me,setStencilWrite:Je,setStencilFunc:Be,setStencilOp:Ue,setFlipSided:Oe,setCullFace:tt,setLineWidth:ft,setPolygonOffset:k,getScissorTest:R,setScissorTest:ne,activeTexture:he,bindTexture:me,compressedTexImage2D:ye,texImage2D:We,scissor:Le,viewport:oe,reset:Ge}}function aT(t,e,n){var i;function r(){if(i!==void 0)return i;var y=e.get("EXT_texture_filter_anisotropic");return y!==null?i=t.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function a(y){if(y==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}var s=n.precision!==void 0?n.precision:"highp",o=a(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);var c=n.logarithmicDepthBuffer===!0&&!!e.get("EXT_frag_depth"),l=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=t.getParameter(t.MAX_TEXTURE_SIZE),f=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,_=!!e.get("OES_texture_float"),x=v&&_;return{getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:c,maxTextures:l,maxVertexTextures:h,maxTextureSize:u,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:m,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:x}}function sT(t){var e={};return{get:function(n){if(e[n]!==void 0)return e[n];var i;switch(n){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;case"WEBGL_compressed_texture_etc1":i=t.getExtension("WEBGL_compressed_texture_etc1");break;default:i=t.getExtension(n)}return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),e[n]=i,i}}}function oT(){var t=this,e=null,n=0,i=!1,r=!1,a=new Fn,s=new ei,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u,f){var p=h.length!==0||u||n!==0||i;return i=u,e=l(h,f,0),n=h.length,p},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,u,f,p,g,d){if(!i||h===null||h.length===0||r&&!f)r?l(null):c();else{var m=r?0:n,v=m*4,_=g.clippingState||null;o.value=_,_=l(h,p,v,d);for(var x=0;x!==v;++x)_[x]=e[x];g.clippingState=_,this.numIntersection=u?this.numPlanes:0,this.numPlanes+=m}};function c(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(h,u,f,p){var g=h!==null?h.length:0,d=null;if(g!==0){if(d=o.value,p!==!0||d===null){var m=f+g*4,v=u.matrixWorldInverse;s.getNormalMatrix(v),(d===null||d.length<m)&&(d=new Float32Array(m));for(var _=0,x=f;_!==g;++_,x+=4)a.copy(h[_]).applyMatrix4(v,s),a.normal.toArray(d,x),d[x+3]=a.constant}o.value=d,o.needsUpdate=!0}return t.numPlanes=g,d}}function If(t){console.log("THREE.WebGLRenderer",xg),t=t||{};var e=t.canvas!==void 0?t.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),n=t.context!==void 0?t.context:null,i=t.alpha!==void 0?t.alpha:!1,r=t.depth!==void 0?t.depth:!0,a=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,c=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=[],h=[],u=-1,f=[],p=-1,g=new Float32Array(8),d=[],m=[];this.domElement=e,this.context=null,this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.gammaInput=!1,this.gammaOutput=!1,this.physicallyCorrectLights=!1,this.toneMapping=Tf,this.toneMappingExposure=1,this.toneMappingWhitePoint=1,this.maxMorphTargets=8,this.maxMorphNormals=4;var v=this,_=null,x=null,y=null,b=-1,E="",S=null,M=new xt,w=null,L=new xt,z=0,V=new Ve(0),A=0,T=e.width,P=e.height,O=1,H=new xt(0,0,T,P),N=!1,I=new xt(0,0,T,P),B=new Eo,Z=new oT,X=!1,G=!1,J=new sn,ie=new Ye,Y=new U,ve=new Ye,fe=new Ye,se={hash:"",ambient:[0,0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],shadows:[]},pe={calls:0,vertices:0,faces:0,points:0};this.info={render:pe,memory:{geometries:0,textures:0},programs:null};var W;try{var Fe={alpha:i,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:c};if(W=n||e.getContext("webgl",Fe)||e.getContext("experimental-webgl",Fe),W===null)throw e.getContext("webgl")!==null?"Error creating WebGL context with your selected attributes.":"Error creating WebGL context.";W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}}),e.addEventListener("webglcontextlost",_e,!1)}catch(C){console.error("THREE.WebGLRenderer: "+C)}var ge=new sT(W);ge.get("WEBGL_depth_texture"),ge.get("OES_texture_float"),ge.get("OES_texture_float_linear"),ge.get("OES_texture_half_float"),ge.get("OES_texture_half_float_linear"),ge.get("OES_standard_derivatives"),ge.get("ANGLE_instanced_arrays"),ge.get("OES_element_index_uint")&&(ze.MaxIndex=4294967296);var Xe=new aT(W,ge,t),Me=new rT(W,ge,rt),Je=new iT,Be=new nT(W,ge,Me,Je,Xe,rt,this.info),Ue=new tT(W,Je,this.info),Oe=new KS(this,Xe),tt=new WS;this.info.programs=Oe.programs;var ft=new HS(W,ge,pe),k=new VS(W,ge,pe),R=new ss(-1,1,1,-1,0,1),ne=new en,he=new $t(new Zr(2,2),new Tn({depthTest:!1,depthWrite:!1,fog:!1})),me=as.cube,ye=new $t(new $r(5,5,5),new mn({uniforms:me.uniforms,vertexShader:me.vertexShader,fragmentShader:me.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1}));function We(){return x===null?O:1}function Le(){Me.init(),Me.scissor(M.copy(H).multiplyScalar(O)),Me.viewport(L.copy(I).multiplyScalar(O)),Me.buffers.color.setClear(V.r,V.g,V.b,A,o)}function oe(){_=null,S=null,E="",b=-1,Me.reset()}Le(),this.context=W,this.capabilities=Xe,this.extensions=ge,this.properties=Je,this.state=Me;var Ge=new Ev(this,se,Ue,Xe);this.shadowMap=Ge;var $=new NS(this,d),de=new OS(this,m);this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){ge.get("WEBGL_lose_context").loseContext()},this.getMaxAnisotropy=function(){return Xe.getMaxAnisotropy()},this.getPrecision=function(){return Xe.precision},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(I.z,I.w,!1))},this.getSize=function(){return{width:T,height:P}},this.setSize=function(C,F,j){T=C,P=F,e.width=C*O,e.height=F*O,j!==!1&&(e.style.width=C+"px",e.style.height=F+"px"),this.setViewport(0,0,C,F)},this.setViewport=function(C,F,j,ue){Me.viewport(I.set(C,F,j,ue))},this.setScissor=function(C,F,j,ue){Me.scissor(H.set(C,F,j,ue))},this.setScissorTest=function(C){Me.setScissorTest(N=C)},this.getClearColor=function(){return V},this.setClearColor=function(C,F){V.set(C),A=F!==void 0?F:1,Me.buffers.color.setClear(V.r,V.g,V.b,A,o)},this.getClearAlpha=function(){return A},this.setClearAlpha=function(C){A=C,Me.buffers.color.setClear(V.r,V.g,V.b,A,o)},this.clear=function(C,F,j){var ue=0;(C===void 0||C)&&(ue|=W.COLOR_BUFFER_BIT),(F===void 0||F)&&(ue|=W.DEPTH_BUFFER_BIT),(j===void 0||j)&&(ue|=W.STENCIL_BUFFER_BIT),W.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.clearTarget=function(C,F,j,ue){this.setRenderTarget(C),this.clear(F,j,ue)},this.resetGLState=oe,this.dispose=function(){f=[],p=-1,h=[],u=-1,e.removeEventListener("webglcontextlost",_e,!1)};function _e(C){C.preventDefault(),oe(),Le(),Je.clear()}function Te(C){var F=C.target;F.removeEventListener("dispose",Te),we(F)}function we(C){qe(C),Je.delete(C)}function qe(C){var F=Je.get(C).program;C.program=void 0,F!==void 0&&Oe.releaseProgram(F)}this.renderBufferImmediate=function(C,F,j){Me.initAttributes();var ue=Je.get(C);C.hasPositions&&!ue.position&&(ue.position=W.createBuffer()),C.hasNormals&&!ue.normal&&(ue.normal=W.createBuffer()),C.hasUvs&&!ue.uv&&(ue.uv=W.createBuffer()),C.hasColors&&!ue.color&&(ue.color=W.createBuffer());var ee=F.getAttributes();if(C.hasPositions&&(W.bindBuffer(W.ARRAY_BUFFER,ue.position),W.bufferData(W.ARRAY_BUFFER,C.positionArray,W.DYNAMIC_DRAW),Me.enableAttribute(ee.position),W.vertexAttribPointer(ee.position,3,W.FLOAT,!1,0,0)),C.hasNormals){if(W.bindBuffer(W.ARRAY_BUFFER,ue.normal),!j.isMeshPhongMaterial&&!j.isMeshStandardMaterial&&!j.isMeshNormalMaterial&&j.shading===gf)for(var be=0,Ke=C.count*3;be<Ke;be+=9){var xe=C.normalArray,je=(xe[be+0]+xe[be+3]+xe[be+6])/3,Ne=(xe[be+1]+xe[be+4]+xe[be+7])/3,Pe=(xe[be+2]+xe[be+5]+xe[be+8])/3;xe[be+0]=je,xe[be+1]=Ne,xe[be+2]=Pe,xe[be+3]=je,xe[be+4]=Ne,xe[be+5]=Pe,xe[be+6]=je,xe[be+7]=Ne,xe[be+8]=Pe}W.bufferData(W.ARRAY_BUFFER,C.normalArray,W.DYNAMIC_DRAW),Me.enableAttribute(ee.normal),W.vertexAttribPointer(ee.normal,3,W.FLOAT,!1,0,0)}C.hasUvs&&j.map&&(W.bindBuffer(W.ARRAY_BUFFER,ue.uv),W.bufferData(W.ARRAY_BUFFER,C.uvArray,W.DYNAMIC_DRAW),Me.enableAttribute(ee.uv),W.vertexAttribPointer(ee.uv,2,W.FLOAT,!1,0,0)),C.hasColors&&j.vertexColors!==Hc&&(W.bindBuffer(W.ARRAY_BUFFER,ue.color),W.bufferData(W.ARRAY_BUFFER,C.colorArray,W.DYNAMIC_DRAW),Me.enableAttribute(ee.color),W.vertexAttribPointer(ee.color,3,W.FLOAT,!1,0,0)),Me.disableUnusedAttributes(),W.drawArrays(W.TRIANGLES,0,C.count),C.count=0},this.renderBufferDirect=function(C,F,j,ue,ee,be){Xn(ue);var Ke=cn(C,F,ue,ee),xe=!1,je=j.id+"_"+Ke.id+"_"+ue.wireframe;je!==E&&(E=je,xe=!0);var Ne=ee.morphTargetInfluences;if(Ne!==void 0){for(var Pe=[],Re=0,ct=Ne.length;Re<ct;Re++){var mt=Ne[Re];Pe.push([mt,Re])}Pe.sort(q),Pe.length>8&&(Pe.length=8);for(var Vt=j.morphAttributes,Re=0,ct=Pe.length;Re<ct;Re++){var mt=Pe[Re];if(g[Re]=mt[0],mt[0]!==0){var Rt=mt[1];ue.morphTargets===!0&&Vt.position&&j.addAttribute("morphTarget"+Re,Vt.position[Rt]),ue.morphNormals===!0&&Vt.normal&&j.addAttribute("morphNormal"+Re,Vt.normal[Rt])}else ue.morphTargets===!0&&j.removeAttribute("morphTarget"+Re),ue.morphNormals===!0&&j.removeAttribute("morphNormal"+Re)}for(var Re=Pe.length,wt=g.length;Re<wt;Re++)g[Re]=0;Ke.getUniforms().setValue(W,"morphTargetInfluences",g),xe=!0}var Rt=j.index,hn=j.attributes.position,ke=1;ue.wireframe===!0&&(Rt=Ue.getWireframeAttribute(j),ke=2);var gn;Rt!==null?(gn=k,gn.setIndex(Rt)):gn=ft,xe&&(ut(ue,Ke,j),Rt!==null&&W.bindBuffer(W.ELEMENT_ARRAY_BUFFER,Ue.getAttributeBuffer(Rt)));var di=0;Rt!==null?di=Rt.count:hn!==void 0&&(di=hn.count);var jf=j.drawRange.start*ke,Iv=j.drawRange.count*ke,$f=be!==null?be.start*ke:0,Uv=be!==null?be.count*ke:1/0,eh=Math.max(jf,$f),kv=Math.min(di,jf+Iv,$f+Uv)-1,th=Math.max(0,kv-eh+1);if(th!==0){if(ee.isMesh)if(ue.wireframe===!0)Me.setLineWidth(ue.wireframeLinewidth*We()),gn.setMode(W.LINES);else switch(ee.drawMode){case Pf:gn.setMode(W.TRIANGLES);break;case ov:gn.setMode(W.TRIANGLE_STRIP);break;case lv:gn.setMode(W.TRIANGLE_FAN);break}else if(ee.isLine){var nh=ue.linewidth;nh===void 0&&(nh=1),Me.setLineWidth(nh*We()),ee.isLineSegments?gn.setMode(W.LINES):gn.setMode(W.LINE_STRIP)}else ee.isPoints&&gn.setMode(W.POINTS);j&&j.isInstancedBufferGeometry?j.maxInstancedCount>0&&gn.renderInstances(j,eh,th):gn.render(eh,th)}};function ut(C,F,j,ue){var ee;if(j&&j.isInstancedBufferGeometry&&(ee=ge.get("ANGLE_instanced_arrays"),ee===null)){console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}ue===void 0&&(ue=0),Me.initAttributes();var be=j.attributes,Ke=F.getAttributes(),xe=C.defaultAttributeValues;for(var je in Ke){var Ne=Ke[je];if(Ne>=0){var Pe=be[je];if(Pe!==void 0){var Re=Pe.normalized,ct=Pe.itemSize,mt=Ue.getAttributeProperties(Pe),Vt=mt.__webglBuffer,wt=mt.type,Rt=mt.bytesPerElement;if(Pe.isInterleavedBufferAttribute){var hn=Pe.data,ke=hn.stride,gn=Pe.offset;hn&&hn.isInstancedInterleavedBuffer?(Me.enableAttributeAndDivisor(Ne,hn.meshPerAttribute,ee),j.maxInstancedCount===void 0&&(j.maxInstancedCount=hn.meshPerAttribute*hn.count)):Me.enableAttribute(Ne),W.bindBuffer(W.ARRAY_BUFFER,Vt),W.vertexAttribPointer(Ne,ct,wt,Re,ke*Rt,(ue*ke+gn)*Rt)}else Pe.isInstancedBufferAttribute?(Me.enableAttributeAndDivisor(Ne,Pe.meshPerAttribute,ee),j.maxInstancedCount===void 0&&(j.maxInstancedCount=Pe.meshPerAttribute*Pe.count)):Me.enableAttribute(Ne),W.bindBuffer(W.ARRAY_BUFFER,Vt),W.vertexAttribPointer(Ne,ct,wt,Re,0,ue*ct*Rt)}else if(xe!==void 0){var di=xe[je];if(di!==void 0)switch(di.length){case 2:W.vertexAttrib2fv(Ne,di);break;case 3:W.vertexAttrib3fv(Ne,di);break;case 4:W.vertexAttrib4fv(Ne,di);break;default:W.vertexAttrib1fv(Ne,di)}}}}Me.disableUnusedAttributes()}function q(C,F){return Math.abs(F[0])-Math.abs(C[0])}function re(C,F){return C.object.renderOrder!==F.object.renderOrder?C.object.renderOrder-F.object.renderOrder:C.material.program&&F.material.program&&C.material.program!==F.material.program?C.material.program.id-F.material.program.id:C.material.id!==F.material.id?C.material.id-F.material.id:C.z!==F.z?C.z-F.z:C.id-F.id}function ce(C,F){return C.object.renderOrder!==F.object.renderOrder?C.object.renderOrder-F.object.renderOrder:C.z!==F.z?F.z-C.z:C.id-F.id}this.render=function(C,F,j,ue){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}E="",b=-1,S=null,C.autoUpdate===!0&&C.updateMatrixWorld(),F.parent===null&&F.updateMatrixWorld(),F.matrixWorldInverse.getInverse(F.matrixWorld),ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),B.setFromMatrix(ie),l.length=0,u=-1,p=-1,d.length=0,m.length=0,G=this.localClippingEnabled,X=Z.init(this.clippingPlanes,G,F),Gt(C,F),h.length=u+1,f.length=p+1,v.sortObjects===!0&&(h.sort(re),f.sort(ce)),X&&Z.beginShadows(),nt(l),Ge.render(C,F),pt(l,F),X&&Z.endShadows(),pe.calls=0,pe.vertices=0,pe.faces=0,pe.points=0,j===void 0&&(j=null),this.setRenderTarget(j);var ee=C.background;if(ee===null?Me.buffers.color.setClear(V.r,V.g,V.b,A,o):ee&&ee.isColor&&(Me.buffers.color.setClear(ee.r,ee.g,ee.b,1,o),ue=!0),(this.autoClear||ue)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil),ee&&ee.isCubeTexture?(ne.projectionMatrix.copy(F.projectionMatrix),ne.matrixWorld.extractRotation(F.matrixWorld),ne.matrixWorldInverse.getInverse(ne.matrixWorld),ye.material.uniforms.tCube.value=ee,ye.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,ye.matrixWorld),Ue.update(ye),v.renderBufferDirect(ne,null,ye.geometry,ye.material,ye,null)):ee&&ee.isTexture&&(he.material.map=ee,Ue.update(he),v.renderBufferDirect(R,null,he.geometry,he.material,he,null)),C.overrideMaterial){var be=C.overrideMaterial;Wn(h,C,F,be),Wn(f,C,F,be)}else Me.setBlending(vo),Wn(h,C,F),Wn(f,C,F);$.render(C,F),de.render(C,F,L),j&&Be.updateRenderTargetMipmap(j),Me.setDepthTest(!0),Me.setDepthWrite(!0),Me.setColorWrite(!0)};function Se(C,F,j,ue,ee){var be,Ke;j.transparent?(be=f,Ke=++p):(be=h,Ke=++u);var xe=be[Ke];xe!==void 0?(xe.id=C.id,xe.object=C,xe.geometry=F,xe.material=j,xe.z=Y.z,xe.group=ee):(xe={id:C.id,object:C,geometry:F,material:j,z:Y.z,group:ee},be.push(xe))}function Ie(C){var F=C.geometry;return F.boundingSphere===null&&F.computeBoundingSphere(),J.copy(F.boundingSphere).applyMatrix4(C.matrixWorld),It(J)}function dt(C){return J.center.set(0,0,0),J.radius=.7071067811865476,J.applyMatrix4(C.matrixWorld),It(J)}function It(C){if(!B.intersectsSphere(C))return!1;var F=Z.numPlanes;if(F===0)return!0;var j=v.clippingPlanes,ue=C.center,ee=-C.radius,be=0;do if(j[be].distanceToPoint(ue)<ee)return!1;while(++be!==F);return!0}function Gt(C,F){if(C.visible!==!1){var j=(C.layers.mask&F.layers.mask)!==0;if(j){if(C.isLight)l.push(C);else if(C.isSprite)(C.frustumCulled===!1||dt(C)===!0)&&d.push(C);else if(C.isLensFlare)m.push(C);else if(C.isImmediateRenderObject)v.sortObjects===!0&&(Y.setFromMatrixPosition(C.matrixWorld),Y.applyProjection(ie)),Se(C,null,C.material,Y.z,null);else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.update(),C.frustumCulled===!1||Ie(C)===!0)){var ue=C.material;if(ue.visible===!0){v.sortObjects===!0&&(Y.setFromMatrixPosition(C.matrixWorld),Y.applyProjection(ie));var ee=Ue.update(C);if(ue.isMultiMaterial)for(var be=ee.groups,Ke=ue.materials,xe=0,je=be.length;xe<je;xe++){var Ne=be[xe],Pe=Ke[Ne.materialIndex];Pe.visible===!0&&Se(C,ee,Pe,Y.z,Ne)}else Se(C,ee,ue,Y.z,null)}}}for(var Re=C.children,xe=0,je=Re.length;xe<je;xe++)Gt(Re[xe],F)}}function Wn(C,F,j,ue){for(var ee=0,be=C.length;ee<be;ee++){var Ke=C[ee],xe=Ke.object,je=Ke.geometry,Ne=ue===void 0?Ke.material:ue,Pe=Ke.group;if(xe.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,xe.matrixWorld),xe.normalMatrix.getNormalMatrix(xe.modelViewMatrix),xe.onBeforeRender(v,F,j,je,Ne,Pe),xe.isImmediateRenderObject){Xn(Ne);var Re=cn(j,F.fog,Ne,xe);E="",xe.render(function(ct){v.renderBufferImmediate(ct,Re,Ne)})}else v.renderBufferDirect(j,F.fog,je,Ne,xe,Pe);xe.onAfterRender(v,F,j,je,Ne,Pe)}}function yt(C,F,j){var ue=Je.get(C),ee=Oe.getParameters(C,se,F,Z.numPlanes,Z.numIntersection,j),be=Oe.getProgramCode(C,ee),Ke=ue.program,xe=!0;if(Ke===void 0)C.addEventListener("dispose",Te);else if(Ke.code!==be)qe(C);else{if(ee.shaderID!==void 0)return;xe=!1}if(xe){if(ee.shaderID){var je=as[ee.shaderID];ue.__webglShader={name:C.type,uniforms:vn.clone(je.uniforms),vertexShader:je.vertexShader,fragmentShader:je.fragmentShader}}else ue.__webglShader={name:C.type,uniforms:C.uniforms,vertexShader:C.vertexShader,fragmentShader:C.fragmentShader};C.__webglShader=ue.__webglShader,Ke=Oe.acquireProgram(C,ee,be),ue.program=Ke,C.program=Ke}var Ne=Ke.getAttributes();if(C.morphTargets){C.numSupportedMorphTargets=0;for(var Pe=0;Pe<v.maxMorphTargets;Pe++)Ne["morphTarget"+Pe]>=0&&C.numSupportedMorphTargets++}if(C.morphNormals){C.numSupportedMorphNormals=0;for(var Pe=0;Pe<v.maxMorphNormals;Pe++)Ne["morphNormal"+Pe]>=0&&C.numSupportedMorphNormals++}var Re=ue.__webglShader.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ue.numClippingPlanes=Z.numPlanes,ue.numIntersection=Z.numIntersection,Re.clippingPlanes=Z.uniform),ue.fog=F,ue.lightsHash=se.hash,C.lights&&(Re.ambientLightColor.value=se.ambient,Re.directionalLights.value=se.directional,Re.spotLights.value=se.spot,Re.rectAreaLights.value=se.rectArea,Re.pointLights.value=se.point,Re.hemisphereLights.value=se.hemi,Re.directionalShadowMap.value=se.directionalShadowMap,Re.directionalShadowMatrix.value=se.directionalShadowMatrix,Re.spotShadowMap.value=se.spotShadowMap,Re.spotShadowMatrix.value=se.spotShadowMatrix,Re.pointShadowMap.value=se.pointShadowMap,Re.pointShadowMatrix.value=se.pointShadowMatrix);var ct=ue.program.getUniforms(),mt=ur.seqWithValue(ct.seq,Re);ue.uniformsList=mt}function Xn(C){C.side===Hs?Me.disable(W.CULL_FACE):Me.enable(W.CULL_FACE),Me.setFlipSided(C.side===cr),C.transparent===!0?Me.setBlending(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha):Me.setBlending(vo),Me.setDepthFunc(C.depthFunc),Me.setDepthTest(C.depthTest),Me.setDepthWrite(C.depthWrite),Me.setColorWrite(C.colorWrite),Me.setPolygonOffset(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits)}function cn(C,F,j,ue){z=0;var ee=Je.get(j);if(X&&(G||C!==S)){var be=C===S&&j.id===b;Z.setState(j.clippingPlanes,j.clipIntersection,j.clipShadows,C,ee,be)}j.needsUpdate===!1&&(ee.program===void 0||j.fog&&ee.fog!==F||j.lights&&ee.lightsHash!==se.hash||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Z.numPlanes||ee.numIntersection!==Z.numIntersection))&&(j.needsUpdate=!0),j.needsUpdate&&(yt(j,F,ue),j.needsUpdate=!1);var Ke=!1,xe=!1,je=!1,Ne=ee.program,Pe=Ne.getUniforms(),Re=ee.__webglShader.uniforms;if(Ne.id!==_&&(W.useProgram(Ne.program),_=Ne.id,Ke=!0,xe=!0,je=!0),j.id!==b&&(b=j.id,xe=!0),Ke||C!==S){if(Pe.set(W,C,"projectionMatrix"),Xe.logarithmicDepthBuffer&&Pe.setValue(W,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),C!==S&&(S=C,xe=!0,je=!0),j.isShaderMaterial||j.isMeshPhongMaterial||j.isMeshStandardMaterial||j.envMap){var ct=Pe.map.cameraPosition;ct!==void 0&&ct.setValue(W,Y.setFromMatrixPosition(C.matrixWorld))}(j.isMeshPhongMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial||j.skinning)&&Pe.setValue(W,"viewMatrix",C.matrixWorldInverse),Pe.set(W,v,"toneMappingExposure"),Pe.set(W,v,"toneMappingWhitePoint")}if(j.skinning){Pe.setOptional(W,ue,"bindMatrix"),Pe.setOptional(W,ue,"bindMatrixInverse");var mt=ue.skeleton;mt&&(Xe.floatVertexTextures&&mt.useVertexTexture?(Pe.set(W,mt,"boneTexture"),Pe.set(W,mt,"boneTextureWidth"),Pe.set(W,mt,"boneTextureHeight")):Pe.setOptional(W,mt,"boneMatrices"))}return xe&&(j.lights&&it(Re,je),F&&j.fog&&D(Re,F),(j.isMeshBasicMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial||j.isMeshStandardMaterial||j.isMeshNormalMaterial||j.isMeshDepthMaterial)&&vl(Re,j),j.isLineBasicMaterial?_l(Re,j):j.isLineDashedMaterial?(_l(Re,j),Qc(Re,j)):j.isPointsMaterial?Kc(Re,j):j.isMeshLambertMaterial?K(Re,j):j.isMeshToonMaterial?Q(Re,j):j.isMeshPhongMaterial?ae(Re,j):j.isMeshPhysicalMaterial?He(Re,j):j.isMeshStandardMaterial?le(Re,j):j.isMeshDepthMaterial?j.displacementMap&&(Re.displacementMap.value=j.displacementMap,Re.displacementScale.value=j.displacementScale,Re.displacementBias.value=j.displacementBias):j.isMeshNormalMaterial&&$e(Re,j),Re.ltcMat!==void 0&&(Re.ltcMat.value=THREE.UniformsLib.LTC_MAT_TEXTURE),Re.ltcMag!==void 0&&(Re.ltcMag.value=THREE.UniformsLib.LTC_MAG_TEXTURE),ur.upload(W,ee.uniformsList,Re,v)),Pe.set(W,ue,"modelViewMatrix"),Pe.set(W,ue,"normalMatrix"),Pe.setValue(W,"modelMatrix",ue.matrixWorld),Ne}function vl(C,F){C.opacity.value=F.opacity,C.diffuse.value=F.color,F.emissive&&C.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity),C.map.value=F.map,C.specularMap.value=F.specularMap,C.alphaMap.value=F.alphaMap,F.lightMap&&(C.lightMap.value=F.lightMap,C.lightMapIntensity.value=F.lightMapIntensity),F.aoMap&&(C.aoMap.value=F.aoMap,C.aoMapIntensity.value=F.aoMapIntensity);var j;if(F.map?j=F.map:F.specularMap?j=F.specularMap:F.displacementMap?j=F.displacementMap:F.normalMap?j=F.normalMap:F.bumpMap?j=F.bumpMap:F.roughnessMap?j=F.roughnessMap:F.metalnessMap?j=F.metalnessMap:F.alphaMap?j=F.alphaMap:F.emissiveMap&&(j=F.emissiveMap),j!==void 0){j.isWebGLRenderTarget&&(j=j.texture);var ue=j.offset,ee=j.repeat;C.offsetRepeat.value.set(ue.x,ue.y,ee.x,ee.y)}C.envMap.value=F.envMap,C.flipEnvMap.value=F.envMap&&F.envMap.isCubeTexture?-1:1,C.reflectivity.value=F.reflectivity,C.refractionRatio.value=F.refractionRatio}function _l(C,F){C.diffuse.value=F.color,C.opacity.value=F.opacity}function Qc(C,F){C.dashSize.value=F.dashSize,C.totalSize.value=F.dashSize+F.gapSize,C.scale.value=F.scale}function Kc(C,F){if(C.diffuse.value=F.color,C.opacity.value=F.opacity,C.size.value=F.size*O,C.scale.value=P*.5,C.map.value=F.map,F.map!==null){var j=F.map.offset,ue=F.map.repeat;C.offsetRepeat.value.set(j.x,j.y,ue.x,ue.y)}}function D(C,F){C.fogColor.value=F.color,F.isFog?(C.fogNear.value=F.near,C.fogFar.value=F.far):F.isFogExp2&&(C.fogDensity.value=F.density)}function K(C,F){F.emissiveMap&&(C.emissiveMap.value=F.emissiveMap)}function ae(C,F){C.specular.value=F.specular,C.shininess.value=Math.max(F.shininess,1e-4),F.emissiveMap&&(C.emissiveMap.value=F.emissiveMap),F.bumpMap&&(C.bumpMap.value=F.bumpMap,C.bumpScale.value=F.bumpScale),F.normalMap&&(C.normalMap.value=F.normalMap,C.normalScale.value.copy(F.normalScale)),F.displacementMap&&(C.displacementMap.value=F.displacementMap,C.displacementScale.value=F.displacementScale,C.displacementBias.value=F.displacementBias)}function Q(C,F){ae(C,F),F.gradientMap&&(C.gradientMap.value=F.gradientMap)}function le(C,F){C.roughness.value=F.roughness,C.metalness.value=F.metalness,F.roughnessMap&&(C.roughnessMap.value=F.roughnessMap),F.metalnessMap&&(C.metalnessMap.value=F.metalnessMap),F.emissiveMap&&(C.emissiveMap.value=F.emissiveMap),F.bumpMap&&(C.bumpMap.value=F.bumpMap,C.bumpScale.value=F.bumpScale),F.normalMap&&(C.normalMap.value=F.normalMap,C.normalScale.value.copy(F.normalScale)),F.displacementMap&&(C.displacementMap.value=F.displacementMap,C.displacementScale.value=F.displacementScale,C.displacementBias.value=F.displacementBias),F.envMap&&(C.envMapIntensity.value=F.envMapIntensity)}function He(C,F){C.clearCoat.value=F.clearCoat,C.clearCoatRoughness.value=F.clearCoatRoughness,le(C,F)}function $e(C,F){F.bumpMap&&(C.bumpMap.value=F.bumpMap,C.bumpScale.value=F.bumpScale),F.normalMap&&(C.normalMap.value=F.normalMap,C.normalScale.value.copy(F.normalScale)),F.displacementMap&&(C.displacementMap.value=F.displacementMap,C.displacementScale.value=F.displacementScale,C.displacementBias.value=F.displacementBias)}function it(C,F){C.ambientLightColor.needsUpdate=F,C.directionalLights.needsUpdate=F,C.pointLights.needsUpdate=F,C.spotLights.needsUpdate=F,C.rectAreaLights.needsUpdate=F,C.hemisphereLights.needsUpdate=F}function nt(C){for(var F=0,j=0,ue=C.length;j<ue;j++){var ee=C[j];ee.castShadow&&(se.shadows[F++]=ee)}se.shadows.length=F}function pt(C,F){var j,ue,ee,be=0,Ke=0,xe=0,je,Ne,Pe,Re,ct=F.matrixWorldInverse,mt=0,Vt=0,wt=0,Rt=0,hn=0;for(j=0,ue=C.length;j<ue;j++)if(ee=C[j],je=ee.color,Ne=ee.intensity,Pe=ee.distance,Re=ee.shadow&&ee.shadow.map?ee.shadow.map.texture:null,ee.isAmbientLight)be+=je.r*Ne,Ke+=je.g*Ne,xe+=je.b*Ne;else if(ee.isDirectionalLight){var ke=tt.get(ee);ke.color.copy(ee.color).multiplyScalar(ee.intensity),ke.direction.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(ee.target.matrixWorld),ke.direction.sub(Y),ke.direction.transformDirection(ct),ke.shadow=ee.castShadow,ee.castShadow&&(ke.shadowBias=ee.shadow.bias,ke.shadowRadius=ee.shadow.radius,ke.shadowMapSize=ee.shadow.mapSize),se.directionalShadowMap[mt]=Re,se.directionalShadowMatrix[mt]=ee.shadow.matrix,se.directional[mt++]=ke}else if(ee.isSpotLight){var ke=tt.get(ee);ke.position.setFromMatrixPosition(ee.matrixWorld),ke.position.applyMatrix4(ct),ke.color.copy(je).multiplyScalar(Ne),ke.distance=Pe,ke.direction.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(ee.target.matrixWorld),ke.direction.sub(Y),ke.direction.transformDirection(ct),ke.coneCos=Math.cos(ee.angle),ke.penumbraCos=Math.cos(ee.angle*(1-ee.penumbra)),ke.decay=ee.distance===0?0:ee.decay,ke.shadow=ee.castShadow,ee.castShadow&&(ke.shadowBias=ee.shadow.bias,ke.shadowRadius=ee.shadow.radius,ke.shadowMapSize=ee.shadow.mapSize),se.spotShadowMap[wt]=Re,se.spotShadowMatrix[wt]=ee.shadow.matrix,se.spot[wt++]=ke}else if(ee.isRectAreaLight){var ke=tt.get(ee);ke.color.copy(je).multiplyScalar(Ne/(ee.width*ee.height)),ke.position.setFromMatrixPosition(ee.matrixWorld),ke.position.applyMatrix4(ct),fe.identity(),ve.copy(ee.matrixWorld),ve.premultiply(ct),fe.extractRotation(ve),ke.halfWidth.set(ee.width*.5,0,0),ke.halfHeight.set(0,ee.height*.5,0),ke.halfWidth.applyMatrix4(fe),ke.halfHeight.applyMatrix4(fe),se.rectArea[Rt++]=ke}else if(ee.isPointLight){var ke=tt.get(ee);ke.position.setFromMatrixPosition(ee.matrixWorld),ke.position.applyMatrix4(ct),ke.color.copy(ee.color).multiplyScalar(ee.intensity),ke.distance=ee.distance,ke.decay=ee.distance===0?0:ee.decay,ke.shadow=ee.castShadow,ee.castShadow&&(ke.shadowBias=ee.shadow.bias,ke.shadowRadius=ee.shadow.radius,ke.shadowMapSize=ee.shadow.mapSize),se.pointShadowMap[Vt]=Re,se.pointShadowMatrix[Vt]===void 0&&(se.pointShadowMatrix[Vt]=new Ye),Y.setFromMatrixPosition(ee.matrixWorld).negate(),se.pointShadowMatrix[Vt].identity().setPosition(Y),se.point[Vt++]=ke}else if(ee.isHemisphereLight){var ke=tt.get(ee);ke.direction.setFromMatrixPosition(ee.matrixWorld),ke.direction.transformDirection(ct),ke.direction.normalize(),ke.skyColor.copy(ee.color).multiplyScalar(Ne),ke.groundColor.copy(ee.groundColor).multiplyScalar(Ne),se.hemi[hn++]=ke}se.ambient[0]=be,se.ambient[1]=Ke,se.ambient[2]=xe,se.directional.length=mt,se.spot.length=wt,se.rectArea.length=Rt,se.point.length=Vt,se.hemi.length=hn,se.hash=mt+","+Vt+","+wt+","+Rt+","+hn+","+se.shadows.length}this.setFaceCulling=function(C,F){Me.setCullFace(C),Me.setFlipSided(F===bg)};function lt(){var C=z;return C>=Xe.maxTextures&&console.warn("WebGLRenderer: trying to use "+C+" texture units while this GPU supports only "+Xe.maxTextures),z+=1,C}this.allocTextureUnit=lt,this.setTexture2D=function(){var C=!1;return function(j,ue){j&&j.isWebGLRenderTarget&&(C||(console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),C=!0),j=j.texture),Be.setTexture2D(j,ue)}}(),this.setTexture=function(){var C=!1;return function(j,ue){C||(console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),C=!0),Be.setTexture2D(j,ue)}}(),this.setTextureCube=function(){var C=!1;return function(j,ue){j&&j.isWebGLRenderTargetCube&&(C||(console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),C=!0),j=j.texture),j&&j.isCubeTexture||Array.isArray(j.image)&&j.image.length===6?Be.setTextureCube(j,ue):Be.setTextureCubeDynamic(j,ue)}}(),this.getCurrentRenderTarget=function(){return x},this.setRenderTarget=function(C){x=C,C&&Je.get(C).__webglFramebuffer===void 0&&Be.setupRenderTarget(C);var F=C&&C.isWebGLRenderTargetCube,j;if(C){var ue=Je.get(C);F?j=ue.__webglFramebuffer[C.activeCubeFace]:j=ue.__webglFramebuffer,M.copy(C.scissor),w=C.scissorTest,L.copy(C.viewport)}else j=null,M.copy(H).multiplyScalar(O),w=N,L.copy(I).multiplyScalar(O);if(y!==j&&(W.bindFramebuffer(W.FRAMEBUFFER,j),y=j),Me.scissor(M),Me.setScissorTest(w),Me.viewport(L),F){var ee=Je.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+C.activeCubeFace,ee.__webglTexture,C.activeMipMapLevel)}},this.readRenderTargetPixels=function(C,F,j,ue,ee,be){if((C&&C.isWebGLRenderTarget)===!1){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}var Ke=Je.get(C).__webglFramebuffer;if(Ke){var xe=!1;Ke!==y&&(W.bindFramebuffer(W.FRAMEBUFFER,Ke),xe=!0);try{var je=C.texture,Ne=je.format,Pe=je.type;if(Ne!==wi&&rt(Ne)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe!==lc&&rt(Pe)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===ts&&(ge.get("OES_texture_float")||ge.get("WEBGL_color_buffer_float")))&&!(Pe===cc&&ge.get("EXT_color_buffer_half_float"))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W.checkFramebufferStatus(W.FRAMEBUFFER)===W.FRAMEBUFFER_COMPLETE?F>=0&&F<=C.width-ue&&j>=0&&j<=C.height-ee&&W.readPixels(F,j,ue,ee,rt(Ne),rt(Pe),be):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{xe&&W.bindFramebuffer(W.FRAMEBUFFER,y)}}};function rt(C){var F;if(C===Oi)return W.REPEAT;if(C===On)return W.CLAMP_TO_EDGE;if(C===qr)return W.MIRRORED_REPEAT;if(C===Nn)return W.NEAREST;if(C===jc)return W.NEAREST_MIPMAP_NEAREST;if(C===$c)return W.NEAREST_MIPMAP_LINEAR;if(C===wn)return W.LINEAR;if(C===Lf)return W.LINEAR_MIPMAP_NEAREST;if(C===dl)return W.LINEAR_MIPMAP_LINEAR;if(C===lc)return W.UNSIGNED_BYTE;if(C===Jg)return W.UNSIGNED_SHORT_4_4_4_4;if(C===Qg)return W.UNSIGNED_SHORT_5_5_5_1;if(C===Kg)return W.UNSIGNED_SHORT_5_6_5;if(C===jg)return W.BYTE;if(C===$g)return W.SHORT;if(C===_o)return W.UNSIGNED_SHORT;if(C===Zg)return W.INT;if(C===Rf)return W.UNSIGNED_INT;if(C===ts)return W.FLOAT;if(C===cc&&(F=ge.get("OES_texture_half_float"),F!==null))return F.HALF_FLOAT_OES;if(C===ev)return W.ALPHA;if(C===ns)return W.RGB;if(C===wi)return W.RGBA;if(C===tv)return W.LUMINANCE;if(C===nv)return W.LUMINANCE_ALPHA;if(C===Or)return W.DEPTH_COMPONENT;if(C===is)return W.DEPTH_STENCIL;if(C===wf)return W.FUNC_ADD;if(C===Eg)return W.FUNC_SUBTRACT;if(C===Sg)return W.FUNC_REVERSE_SUBTRACT;if(C===Tg)return W.ZERO;if(C===Ag)return W.ONE;if(C===Cg)return W.SRC_COLOR;if(C===Lg)return W.ONE_MINUS_SRC_COLOR;if(C===Ef)return W.SRC_ALPHA;if(C===Sf)return W.ONE_MINUS_SRC_ALPHA;if(C===Rg)return W.DST_ALPHA;if(C===Pg)return W.ONE_MINUS_DST_ALPHA;if(C===Dg)return W.DST_COLOR;if(C===Fg)return W.ONE_MINUS_DST_COLOR;if(C===Ig)return W.SRC_ALPHA_SATURATE;if((C===Eu||C===Su||C===Tu||C===Au)&&(F=ge.get("WEBGL_compressed_texture_s3tc"),F!==null)){if(C===Eu)return F.COMPRESSED_RGB_S3TC_DXT1_EXT;if(C===Su)return F.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(C===Tu)return F.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(C===Au)return F.COMPRESSED_RGBA_S3TC_DXT5_EXT}if((C===Cu||C===Lu||C===Ru||C===Pu)&&(F=ge.get("WEBGL_compressed_texture_pvrtc"),F!==null)){if(C===Cu)return F.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(C===Lu)return F.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(C===Ru)return F.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(C===Pu)return F.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(C===iv&&(F=ge.get("WEBGL_compressed_texture_etc1"),F!==null))return F.COMPRESSED_RGB_ETC1_WEBGL;if((C===yu||C===bu)&&(F=ge.get("EXT_blend_minmax"),F!==null)){if(C===yu)return F.MIN_EXT;if(C===bu)return F.MAX_EXT}return C===xo&&(F=ge.get("WEBGL_depth_texture"),F!==null)?F.UNSIGNED_INT_24_8_WEBGL:0}}function os(t,e){this.name="",this.color=new Ve(t),this.density=e!==void 0?e:25e-5}os.prototype.isFogExp2=!0;os.prototype.clone=function(){return new os(this.color.getHex(),this.density)};os.prototype.toJSON=function(t){return{type:"FogExp2",color:this.color.getHex(),density:this.density}};function ls(t,e,n){this.name="",this.color=new Ve(t),this.near=e!==void 0?e:1,this.far=n!==void 0?n:1e3}ls.prototype.isFog=!0;ls.prototype.clone=function(){return new ls(this.color.getHex(),this.near,this.far)};ls.prototype.toJSON=function(t){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}};function Jr(){De.call(this),this.type="Scene",this.background=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0}Jr.prototype=Object.create(De.prototype);Jr.prototype.constructor=Jr;Jr.prototype.copy=function(t,e){return De.prototype.copy.call(this,t,e),t.background!==null&&(this.background=t.background.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this};Jr.prototype.toJSON=function(t){var e=De.prototype.toJSON.call(this,t);return this.background!==null&&(e.object.background=this.background.toJSON(t)),this.fog!==null&&(e.object.fog=this.fog.toJSON()),e};function Fu(t,e,n,i,r){De.call(this),this.lensFlares=[],this.positionScreen=new U,this.customUpdateCallback=void 0,t!==void 0&&this.add(t,e,n,i,r)}Fu.prototype=Object.assign(Object.create(De.prototype),{constructor:Fu,isLensFlare:!0,copy:function(t){De.prototype.copy.call(this,t),this.positionScreen.copy(t.positionScreen),this.customUpdateCallback=t.customUpdateCallback;for(var e=0,n=t.lensFlares.length;e<n;e++)this.lensFlares.push(t.lensFlares[e]);return this},add:function(t,e,n,i,r,a){e===void 0&&(e=-1),n===void 0&&(n=0),a===void 0&&(a=1),r===void 0&&(r=new Ve(16777215)),i===void 0&&(i=Ws),n=Math.min(n,Math.max(0,n)),this.lensFlares.push({texture:t,size:e,distance:n,x:0,y:0,z:0,scale:1,rotation:0,opacity:a,color:r,blending:i})},updateLensFlares:function(){var t,e=this.lensFlares.length,n,i=-this.positionScreen.x*2,r=-this.positionScreen.y*2;for(t=0;t<e;t++)n=this.lensFlares[t],n.x=this.positionScreen.x+i*n.distance,n.y=this.positionScreen.y+r*n.distance,n.wantedRotation=n.x*Math.PI*.25,n.rotation+=(n.wantedRotation-n.rotation)*.25}});function Qr(t){at.call(this),this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.rotation=0,this.fog=!1,this.lights=!1,this.setValues(t)}Qr.prototype=Object.create(at.prototype);Qr.prototype.constructor=Qr;Qr.prototype.copy=function(t){return at.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.rotation=t.rotation,this};function Po(t){De.call(this),this.type="Sprite",this.material=t!==void 0?t:new Qr}Po.prototype=Object.assign(Object.create(De.prototype),{constructor:Po,isSprite:!0,raycast:function(){var t=new U;return function(n,i){t.setFromMatrixPosition(this.matrixWorld);var r=n.ray.distanceSqToPoint(t),a=this.scale.x*this.scale.y/4;r>a||i.push({distance:Math.sqrt(r),point:this.position,face:null,object:this})}}(),clone:function(){return new this.constructor(this.material).copy(this)}});function Do(){De.call(this),this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}})}Do.prototype=Object.assign(Object.create(De.prototype),{constructor:Do,copy:function(t){De.prototype.copy.call(this,t,!1);for(var e=t.levels,n=0,i=e.length;n<i;n++){var r=e[n];this.addLevel(r.object.clone(),r.distance)}return this},addLevel:function(t,e){e===void 0&&(e=0),e=Math.abs(e);for(var n=this.levels,i=0;i<n.length&&!(e<n[i].distance);i++);n.splice(i,0,{distance:e,object:t}),this.add(t)},getObjectForDistance:function(t){for(var e=this.levels,n=1,i=e.length;n<i&&!(t<e[n].distance);n++);return e[n-1].object},raycast:function(){var t=new U;return function(n,i){t.setFromMatrixPosition(this.matrixWorld);var r=n.ray.origin.distanceTo(t);this.getObjectForDistance(r).raycast(n,i)}}(),update:function(){var t=new U,e=new U;return function(i){var r=this.levels;if(r.length>1){t.setFromMatrixPosition(i.matrixWorld),e.setFromMatrixPosition(this.matrixWorld);var a=t.distanceTo(e);r[0].object.visible=!0;for(var s=1,o=r.length;s<o&&a>=r[s].distance;s++)r[s-1].object.visible=!1,r[s].object.visible=!0;for(;s<o;s++)r[s].object.visible=!1}}}(),toJSON:function(t){var e=De.prototype.toJSON.call(this,t);e.object.levels=[];for(var n=this.levels,i=0,r=n.length;i<r;i++){var a=n[i];e.object.levels.push({object:a.object.uuid,distance:a.distance})}return e}});function uc(t,e,n){if(this.useVertexTexture=n!==void 0?n:!0,this.identityMatrix=new Ye,t=t||[],this.bones=t.slice(0),this.useVertexTexture){var i=Math.sqrt(this.bones.length*4);i=Qe.nextPowerOfTwo(Math.ceil(i)),i=Math.max(i,4),this.boneTextureWidth=i,this.boneTextureHeight=i,this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),this.boneTexture=new jr(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,wi,ts)}else this.boneMatrices=new Float32Array(16*this.bones.length);if(e===void 0)this.calculateInverses();else if(this.bones.length===e.length)this.boneInverses=e.slice(0);else{console.warn("THREE.Skeleton bonInverses is the wrong length."),this.boneInverses=[];for(var r=0,a=this.bones.length;r<a;r++)this.boneInverses.push(new Ye)}}Object.assign(uc.prototype,{calculateInverses:function(){this.boneInverses=[];for(var t=0,e=this.bones.length;t<e;t++){var n=new Ye;this.bones[t]&&n.getInverse(this.bones[t].matrixWorld),this.boneInverses.push(n)}},pose:function(){for(var t,e=0,n=this.bones.length;e<n;e++)t=this.bones[e],t&&t.matrixWorld.getInverse(this.boneInverses[e]);for(var e=0,n=this.bones.length;e<n;e++)t=this.bones[e],t&&(t.parent&&t.parent.isBone?(t.matrix.getInverse(t.parent.matrixWorld),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))},update:function(){var t=new Ye;return function(){for(var n=0,i=this.bones.length;n<i;n++){var r=this.bones[n]?this.bones[n].matrixWorld:this.identityMatrix;t.multiplyMatrices(r,this.boneInverses[n]),t.toArray(this.boneMatrices,n*16)}this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}(),clone:function(){return new uc(this.bones,this.boneInverses,this.useVertexTexture)}});function fc(){De.call(this),this.type="Bone"}fc.prototype=Object.assign(Object.create(De.prototype),{constructor:fc,isBone:!0});function dc(t,e,n){$t.call(this,t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye;var i=[];if(this.geometry&&this.geometry.bones!==void 0){for(var r,a,s=0,o=this.geometry.bones.length;s<o;++s)a=this.geometry.bones[s],r=new fc,i.push(r),r.name=a.name,r.position.fromArray(a.pos),r.quaternion.fromArray(a.rotq),a.scl!==void 0&&r.scale.fromArray(a.scl);for(var s=0,o=this.geometry.bones.length;s<o;++s)a=this.geometry.bones[s],a.parent!==-1&&a.parent!==null&&i[a.parent]!==void 0?i[a.parent].add(i[s]):this.add(i[s])}this.normalizeSkinWeights(),this.updateMatrixWorld(!0),this.bind(new uc(i,void 0,n),this.matrixWorld)}dc.prototype=Object.assign(Object.create($t.prototype),{constructor:dc,isSkinnedMesh:!0,bind:function(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.getInverse(e)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){if(this.geometry&&this.geometry.isGeometry)for(var t=0;t<this.geometry.skinWeights.length;t++){var e=this.geometry.skinWeights[t],n=1/e.lengthManhattan();n!==1/0?e.multiplyScalar(n):e.set(1,0,0,0)}else if(this.geometry&&this.geometry.isBufferGeometry)for(var i=new xt,r=this.geometry.attributes.skinWeight,t=0;t<r.count;t++){i.x=r.getX(t),i.y=r.getY(t),i.z=r.getZ(t),i.w=r.getW(t);var n=1/i.lengthManhattan();n!==1/0?i.multiplyScalar(n):i.set(1,0,0,0),r.setXYZW(t,i.x,i.y,i.z,i.w)}},updateMatrixWorld:function(t){$t.prototype.updateMatrixWorld.call(this,!0),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.matrixWorld):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh unrecognized bindMode: "+this.bindMode)},clone:function(){return new this.constructor(this.geometry,this.material,this.skeleton.useVertexTexture).copy(this)}});function kt(t){at.call(this),this.type="LineBasicMaterial",this.color=new Ve(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.lights=!1,this.setValues(t)}kt.prototype=Object.create(at.prototype);kt.prototype.constructor=kt;kt.prototype.isLineBasicMaterial=!0;kt.prototype.copy=function(t){return at.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this};function Hi(t,e,n){if(n===1)return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),new Tt(t,e);De.call(this),this.type="Line",this.geometry=t!==void 0?t:new ze,this.material=e!==void 0?e:new kt({color:Math.random()*16777215})}Hi.prototype=Object.assign(Object.create(De.prototype),{constructor:Hi,isLine:!0,raycast:function(){var t=new Ye,e=new dr,n=new sn;return function(r,a){var s=r.linePrecision,o=s*s,c=this.geometry,l=this.matrixWorld;if(c.boundingSphere===null&&c.computeBoundingSphere(),n.copy(c.boundingSphere),n.applyMatrix4(l),r.ray.intersectsSphere(n)!==!1){t.getInverse(l),e.copy(r.ray).applyMatrix4(t);var h=new U,u=new U,f=new U,p=new U,g=this&&this.isLineSegments?2:1;if(c.isBufferGeometry){var d=c.index,m=c.attributes,v=m.position.array;if(d!==null)for(var _=d.array,x=0,y=_.length-1;x<y;x+=g){var b=_[x],E=_[x+1];h.fromArray(v,b*3),u.fromArray(v,E*3);var S=e.distanceSqToSegment(h,u,p,f);if(!(S>o)){p.applyMatrix4(this.matrixWorld);var M=r.ray.origin.distanceTo(p);M<r.near||M>r.far||a.push({distance:M,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else for(var x=0,y=v.length/3-1;x<y;x+=g){h.fromArray(v,3*x),u.fromArray(v,3*x+3);var S=e.distanceSqToSegment(h,u,p,f);if(!(S>o)){p.applyMatrix4(this.matrixWorld);var M=r.ray.origin.distanceTo(p);M<r.near||M>r.far||a.push({distance:M,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}else if(c.isGeometry)for(var w=c.vertices,L=w.length,x=0;x<L-1;x+=g){var S=e.distanceSqToSegment(w[x],w[x+1],p,f);if(!(S>o)){p.applyMatrix4(this.matrixWorld);var M=r.ray.origin.distanceTo(p);M<r.near||M>r.far||a.push({distance:M,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}});function Tt(t,e){Hi.call(this,t,e),this.type="LineSegments"}Tt.prototype=Object.assign(Object.create(Hi.prototype),{constructor:Tt,isLineSegments:!0});function ui(t){at.call(this),this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.size=1,this.sizeAttenuation=!0,this.lights=!1,this.setValues(t)}ui.prototype=Object.create(at.prototype);ui.prototype.constructor=ui;ui.prototype.isPointsMaterial=!0;ui.prototype.copy=function(t){return at.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this};function cs(t,e){De.call(this),this.type="Points",this.geometry=t!==void 0?t:new ze,this.material=e!==void 0?e:new ui({color:Math.random()*16777215})}cs.prototype=Object.assign(Object.create(De.prototype),{constructor:cs,isPoints:!0,raycast:function(){var t=new Ye,e=new dr,n=new sn;return function(r,a){var s=this,o=this.geometry,c=this.matrixWorld,l=r.params.Points.threshold;if(o.boundingSphere===null&&o.computeBoundingSphere(),n.copy(o.boundingSphere),n.applyMatrix4(c),r.ray.intersectsSphere(n)===!1)return;t.getInverse(c),e.copy(r.ray).applyMatrix4(t);var h=l/((this.scale.x+this.scale.y+this.scale.z)/3),u=h*h,f=new U;function p(S,M){var w=e.distanceSqToPoint(S);if(w<u){var L=e.closestPointToPoint(S);L.applyMatrix4(c);var z=r.ray.origin.distanceTo(L);if(z<r.near||z>r.far)return;a.push({distance:z,distanceToRay:Math.sqrt(w),point:L.clone(),index:M,face:null,object:s})}}if(o.isBufferGeometry){var g=o.index,d=o.attributes,m=d.position.array;if(g!==null)for(var v=g.array,_=0,x=v.length;_<x;_++){var y=v[_];f.fromArray(m,y*3),p(f,y)}else for(var _=0,b=m.length/3;_<b;_++)f.fromArray(m,_*3),p(f,_)}else for(var E=o.vertices,_=0,b=E.length;_<b;_++)p(E[_],_)}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}});function Fo(){De.call(this),this.type="Group"}Fo.prototype=Object.assign(Object.create(De.prototype),{constructor:Fo});function pc(t,e,n,i,r,a,s,o,c){Mt.call(this,t,e,n,i,r,a,s,o,c),this.generateMipmaps=!1;var l=this;function h(){requestAnimationFrame(h),t.readyState>=t.HAVE_CURRENT_DATA&&(l.needsUpdate=!0)}h()}pc.prototype=Object.create(Mt.prototype);pc.prototype.constructor=pc;function hs(t,e,n,i,r,a,s,o,c,l,h,u){Mt.call(this,null,a,s,o,c,l,i,r,h,u),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}hs.prototype=Object.create(Mt.prototype);hs.prototype.constructor=hs;hs.prototype.isCompressedTexture=!0;function mc(t,e,n,i,r,a,s,o,c){Mt.call(this,t,e,n,i,r,a,s,o,c),this.needsUpdate=!0}mc.prototype=Object.create(Mt.prototype);mc.prototype.constructor=mc;function Io(t,e,n,i,r,a,s,o,c,l){if(l=l!==void 0?l:Or,l!==Or&&l!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Or&&(n=_o),n===void 0&&l===is&&(n=xo),Mt.call(this,null,i,r,a,s,o,l,n,c),this.image={width:t,height:e},this.magFilter=s!==void 0?s:Nn,this.minFilter=o!==void 0?o:Nn,this.flipY=!1,this.generateMipmaps=!1}Io.prototype=Object.create(Mt.prototype);Io.prototype.constructor=Io;Io.prototype.isDepthTexture=!0;function us(t){ze.call(this);var e=[0,0],n={};function i(V,A){return V-A}var r=["a","b","c"];if(t&&t.isGeometry){for(var a=t.vertices,s=t.faces,o=0,c=new Uint32Array(6*s.length),l=0,h=s.length;l<h;l++)for(var u=s[l],f=0;f<3;f++){e[0]=u[r[f]],e[1]=u[r[(f+1)%3]],e.sort(i);var p=e.toString();n[p]===void 0&&(c[2*o]=e[0],c[2*o+1]=e[1],n[p]=!0,o++)}for(var g=new Float32Array(o*2*3),l=0,h=o;l<h;l++)for(var f=0;f<2;f++){var d=a[c[2*l+f]],m=6*l+3*f;g[m+0]=d.x,g[m+1]=d.y,g[m+2]=d.z}this.addAttribute("position",new Ee(g,3))}else if(t&&t.isBufferGeometry)if(t.index!==null){var v=t.index.array,a=t.attributes.position,_=t.groups,o=0;_.length===0&&t.addGroup(0,v.length);for(var c=new Uint32Array(2*v.length),x=0,y=_.length;x<y;++x)for(var b=_[x],E=b.start,S=b.count,l=E,M=E+S;l<M;l+=3)for(var f=0;f<3;f++){e[0]=v[l+f],e[1]=v[l+(f+1)%3],e.sort(i);var p=e.toString();n[p]===void 0&&(c[2*o]=e[0],c[2*o+1]=e[1],n[p]=!0,o++)}for(var g=new Float32Array(o*2*3),l=0,h=o;l<h;l++)for(var f=0;f<2;f++){var m=6*l+3*f,w=c[2*l+f];g[m+0]=a.getX(w),g[m+1]=a.getY(w),g[m+2]=a.getZ(w)}this.addAttribute("position",new Ee(g,3))}else{for(var a=t.attributes.position.array,o=a.length/3,L=o/3,g=new Float32Array(o*2*3),l=0,h=L;l<h;l++)for(var f=0;f<3;f++){var m=18*l+6*f,z=9*l+3*f;g[m+0]=a[z],g[m+1]=a[z+1],g[m+2]=a[z+2];var w=9*l+3*((f+1)%3);g[m+3]=a[w],g[m+4]=a[w+1],g[m+5]=a[w+2]}this.addAttribute("position",new Ee(g,3))}}us.prototype=Object.create(ze.prototype);us.prototype.constructor=us;function fs(t,e,n){ze.call(this),this.type="ParametricBufferGeometry",this.parameters={func:t,slices:e,stacks:n};var i=[],r=[],a,s,o,c,l,h=e+1;for(a=0;a<=n;a++)for(l=a/n,s=0;s<=e;s++)c=s/e,o=t(c,l),i.push(o.x,o.y,o.z),r.push(c,l);var u=[],f,p,g,d;for(a=0;a<n;a++)for(s=0;s<e;s++)f=a*h+s,p=a*h+s+1,g=(a+1)*h+s+1,d=(a+1)*h+s,u.push(f,p,d),u.push(p,g,d);this.setIndex(new(u.length>65535?Vi:Gi)(u,1)),this.addAttribute("position",new ot(i,3)),this.addAttribute("uv",new ot(r,2)),this.computeVertexNormals()}fs.prototype=Object.create(ze.prototype);fs.prototype.constructor=fs;function Uo(t,e,n){Ze.call(this),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n},this.fromBufferGeometry(new fs(t,e,n)),this.mergeVertices()}Uo.prototype=Object.create(Ze.prototype);Uo.prototype.constructor=Uo;function An(t,e,n,i){ze.call(this),this.type="PolyhedronBufferGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i},n=n||1,i=i||0;var r=[],a=[];s(i),c(n),l(),this.addAttribute("position",new ot(r,3)),this.addAttribute("normal",new ot(r.slice(),3)),this.addAttribute("uv",new ot(a,2)),this.normalizeNormals(),this.boundingSphere=new sn(new U,n);function s(v){for(var _=new U,x=new U,y=new U,b=0;b<e.length;b+=3)f(e[b+0],_),f(e[b+1],x),f(e[b+2],y),o(_,x,y,v)}function o(v,_,x,y){var b=Math.pow(2,y),E=[],S,M;for(S=0;S<=b;S++){E[S]=[];var w=v.clone().lerp(x,S/b),L=_.clone().lerp(x,S/b),z=b-S;for(M=0;M<=z;M++)M===0&&S===b?E[S][M]=w:E[S][M]=w.clone().lerp(L,M/z)}for(S=0;S<b;S++)for(M=0;M<2*(b-S)-1;M++){var V=Math.floor(M/2);M%2===0?(u(E[S][V+1]),u(E[S+1][V]),u(E[S][V])):(u(E[S][V+1]),u(E[S+1][V+1]),u(E[S+1][V]))}}function c(v){for(var _=new U,x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(v),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function l(){for(var v=new U,_=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];var x=d(v)/2/Math.PI+.5,y=m(v)/Math.PI+.5;a.push(x,1-y)}p(),h()}function h(){for(var v=0;v<a.length;v+=6){var _=a[v+0],x=a[v+2],y=a[v+4],b=Math.max(_,x,y),E=Math.min(_,x,y);b>.9&&E<.1&&(_<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),y<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,_){var x=v*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function p(){for(var v=new U,_=new U,x=new U,y=new U,b=new Ce,E=new Ce,S=new Ce,M=0,w=0;M<r.length;M+=9,w+=6){v.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),b.set(a[w+0],a[w+1]),E.set(a[w+2],a[w+3]),S.set(a[w+4],a[w+5]),y.copy(v).add(_).add(x).divideScalar(3);var L=d(y);g(b,w+0,v,L),g(E,w+2,_,L),g(S,w+4,x,L)}}function g(v,_,x,y){y<0&&v.x===1&&(a[_]=v.x-1),x.x===0&&x.z===0&&(a[_]=y/2/Math.PI+.5)}function d(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}An.prototype=Object.create(ze.prototype);An.prototype.constructor=An;function ds(t,e){var n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];An.call(this,n,i,t,e),this.type="TetrahedronBufferGeometry",this.parameters={radius:t,detail:e}}ds.prototype=Object.create(An.prototype);ds.prototype.constructor=ds;function ko(t,e){Ze.call(this),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new ds(t,e)),this.mergeVertices()}ko.prototype=Object.create(Ze.prototype);ko.prototype.constructor=ko;function Kr(t,e){var n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];An.call(this,n,i,t,e),this.type="OctahedronBufferGeometry",this.parameters={radius:t,detail:e}}Kr.prototype=Object.create(An.prototype);Kr.prototype.constructor=Kr;function Oo(t,e){Ze.call(this),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new Kr(t,e)),this.mergeVertices()}Oo.prototype=Object.create(Ze.prototype);Oo.prototype.constructor=Oo;function ps(t,e){var n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];An.call(this,i,r,t,e),this.type="IcosahedronBufferGeometry",this.parameters={radius:t,detail:e}}ps.prototype=Object.create(An.prototype);ps.prototype.constructor=ps;function No(t,e){Ze.call(this),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new ps(t,e)),this.mergeVertices()}No.prototype=Object.create(Ze.prototype);No.prototype.constructor=No;function ms(t,e){var n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];An.call(this,r,a,t,e),this.type="DodecahedronBufferGeometry",this.parameters={radius:t,detail:e}}ms.prototype=Object.create(An.prototype);ms.prototype.constructor=ms;function Bo(t,e){Ze.call(this),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new ms(t,e)),this.mergeVertices()}Bo.prototype=Object.create(Ze.prototype);Bo.prototype.constructor=Bo;function zo(t,e,n,i){Ze.call(this),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i},this.fromBufferGeometry(new An(t,e,n,i)),this.mergeVertices()}zo.prototype=Object.create(Ze.prototype);zo.prototype.constructor=zo;function gs(t,e,n,i,r){ze.call(this),this.type="TubeBufferGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r},e=e||64,n=n||1,i=i||8,r=r||!1;var a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;var s=new U,o=new U,c=new Ce,l,h,u=[],f=[],p=[],g=[];d(),this.setIndex(new(g.length>65535?Vi:Gi)(g,1)),this.addAttribute("position",new ot(u,3)),this.addAttribute("normal",new ot(f,3)),this.addAttribute("uv",new ot(p,2));function d(){for(l=0;l<e;l++)m(l);m(r===!1?e:0),_(),v()}function m(x){var y=t.getPointAt(x/e),b=a.normals[x],E=a.binormals[x];for(h=0;h<=i;h++){var S=h/i*Math.PI*2,M=Math.sin(S),w=-Math.cos(S);o.x=w*b.x+M*E.x,o.y=w*b.y+M*E.y,o.z=w*b.z+M*E.z,o.normalize(),f.push(o.x,o.y,o.z),s.x=y.x+n*o.x,s.y=y.y+n*o.y,s.z=y.z+n*o.z,u.push(s.x,s.y,s.z)}}function v(){for(h=1;h<=e;h++)for(l=1;l<=i;l++){var x=(i+1)*(h-1)+(l-1),y=(i+1)*h+(l-1),b=(i+1)*h+l,E=(i+1)*(h-1)+l;g.push(x,y,E),g.push(y,b,E)}}function _(){for(l=0;l<=e;l++)for(h=0;h<=i;h++)c.x=l/e,c.y=h/i,p.push(c.x,c.y)}}gs.prototype=Object.create(ze.prototype);gs.prototype.constructor=gs;function Go(t,e,n,i,r,a){Ze.call(this),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r},a!==void 0&&console.warn("THREE.TubeGeometry: taper has been removed.");var s=new gs(t,e,n,i,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals,this.fromBufferGeometry(s),this.mergeVertices()}Go.prototype=Object.create(Ze.prototype);Go.prototype.constructor=Go;function vs(t,e,n,i,r,a){ze.call(this),this.type="TorusKnotBufferGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:a},t=t||100,e=e||40,n=Math.floor(n)||64,i=Math.floor(i)||8,r=r||2,a=a||3;var s=(i+1)*(n+1),o=i*n*2*3,c=new Ee(new(o>65535?Uint32Array:Uint16Array)(o),1),l=new Ee(new Float32Array(s*3),3),h=new Ee(new Float32Array(s*3),3),u=new Ee(new Float32Array(s*2),2),f,p,g=0,d=0,m=new U,v=new U,_=new Ce,x=new U,y=new U,b=new U,E=new U,S=new U;for(f=0;f<=n;++f){var M=f/n*r*Math.PI*2;for(O(M,r,a,t,x),O(M+.01,r,a,t,y),E.subVectors(y,x),S.addVectors(y,x),b.crossVectors(E,S),S.crossVectors(b,E),b.normalize(),S.normalize(),p=0;p<=i;++p){var w=p/i*Math.PI*2,L=-e*Math.cos(w),z=e*Math.sin(w);m.x=x.x+(L*S.x+z*b.x),m.y=x.y+(L*S.y+z*b.y),m.z=x.z+(L*S.z+z*b.z),l.setXYZ(g,m.x,m.y,m.z),v.subVectors(m,x).normalize(),h.setXYZ(g,v.x,v.y,v.z),_.x=f/n,_.y=p/i,u.setXY(g,_.x,_.y),g++}}for(p=1;p<=n;p++)for(f=1;f<=i;f++){var V=(i+1)*(p-1)+(f-1),A=(i+1)*p+(f-1),T=(i+1)*p+f,P=(i+1)*(p-1)+f;c.setX(d,V),d++,c.setX(d,A),d++,c.setX(d,P),d++,c.setX(d,A),d++,c.setX(d,T),d++,c.setX(d,P),d++}this.setIndex(c),this.addAttribute("position",l),this.addAttribute("normal",h),this.addAttribute("uv",u);function O(H,N,I,B,Z){var X=Math.cos(H),G=Math.sin(H),J=I/N*H,ie=Math.cos(J);Z.x=B*(2+ie)*.5*X,Z.y=B*(2+ie)*G*.5,Z.z=B*Math.sin(J)*.5}}vs.prototype=Object.create(ze.prototype);vs.prototype.constructor=vs;function Vo(t,e,n,i,r,a,s){Ze.call(this),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:a},s!==void 0&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),this.fromBufferGeometry(new vs(t,e,n,i,r,a)),this.mergeVertices()}Vo.prototype=Object.create(Ze.prototype);Vo.prototype.constructor=Vo;function _s(t,e,n,i,r){ze.call(this),this.type="TorusBufferGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},t=t||100,e=e||40,n=Math.floor(n)||8,i=Math.floor(i)||6,r=r||Math.PI*2;var a=(n+1)*(i+1),s=n*i*2*3,o=new(s>65535?Uint32Array:Uint16Array)(s),c=new Float32Array(a*3),l=new Float32Array(a*3),h=new Float32Array(a*2),u=0,f=0,p=0,g=new U,d=new U,m=new U,v,_;for(v=0;v<=n;v++)for(_=0;_<=i;_++){var x=_/i*r,y=v/n*Math.PI*2;d.x=(t+e*Math.cos(y))*Math.cos(x),d.y=(t+e*Math.cos(y))*Math.sin(x),d.z=e*Math.sin(y),c[u]=d.x,c[u+1]=d.y,c[u+2]=d.z,g.x=t*Math.cos(x),g.y=t*Math.sin(x),m.subVectors(d,g).normalize(),l[u]=m.x,l[u+1]=m.y,l[u+2]=m.z,h[f]=_/i,h[f+1]=v/n,u+=3,f+=2}for(v=1;v<=n;v++)for(_=1;_<=i;_++){var b=(i+1)*v+_-1,E=(i+1)*(v-1)+_-1,S=(i+1)*(v-1)+_,M=(i+1)*v+_;o[p]=b,o[p+1]=E,o[p+2]=M,o[p+3]=E,o[p+4]=S,o[p+5]=M,p+=6}this.setIndex(new Ee(o,1)),this.addAttribute("position",new Ee(c,3)),this.addAttribute("normal",new Ee(l,3)),this.addAttribute("uv",new Ee(h,2))}_s.prototype=Object.create(ze.prototype);_s.prototype.constructor=_s;function Ho(t,e,n,i,r){Ze.call(this),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},this.fromBufferGeometry(new _s(t,e,n,i,r))}Ho.prototype=Object.create(Ze.prototype);Ho.prototype.constructor=Ho;var Jt={area:function(t){for(var e=t.length,n=0,i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5},triangulate:function(){function t(e,n,i,r,a,s){var o,c,l,h,u,f,p,g,d;if(c=e[s[n]].x,l=e[s[n]].y,h=e[s[i]].x,u=e[s[i]].y,f=e[s[r]].x,p=e[s[r]].y,(h-c)*(p-l)-(u-l)*(f-c)<=0)return!1;var m,v,_,x,y,b,E,S,M,w,L,z,V,A,T;for(m=f-h,v=p-u,_=c-f,x=l-p,y=h-c,b=u-l,o=0;o<a;o++)if(g=e[s[o]].x,d=e[s[o]].y,!(g===c&&d===l||g===h&&d===u||g===f&&d===p)&&(E=g-c,S=d-l,M=g-h,w=d-u,L=g-f,z=d-p,T=m*w-v*M,V=y*S-b*E,A=_*z-x*L,T>=-Number.EPSILON&&A>=-Number.EPSILON&&V>=-Number.EPSILON))return!1;return!0}return function(n,i){var r=n.length;if(r<3)return null;var a=[],s=[],o=[],c,l,h;if(Jt.area(n)>0)for(l=0;l<r;l++)s[l]=l;else for(l=0;l<r;l++)s[l]=r-1-l;var u=r,f=2*u;for(l=u-1;u>2;){if(f--<=0)return console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()"),i?o:a;if(c=l,u<=c&&(c=0),l=c+1,u<=l&&(l=0),h=l+1,u<=h&&(h=0),t(n,c,l,h,u,s)){var p,g,d,m,v;for(p=s[c],g=s[l],d=s[h],a.push([n[p],n[g],n[d]]),o.push([s[c],s[l],s[h]]),m=l,v=l+1;v<u;m++,v++)s[m]=s[v];u--,f=2*u}}return i?o:a}}(),triangulateShape:function(t,e){function n(x){var y=x.length;y>2&&x[y-1].equals(x[0])&&x.pop()}n(t),e.forEach(n);function i(x,y,b){return x.x!==y.x?x.x<y.x?x.x<=b.x&&b.x<=y.x:y.x<=b.x&&b.x<=x.x:x.y<y.y?x.y<=b.y&&b.y<=y.y:y.y<=b.y&&b.y<=x.y}function r(x,y,b,E,S){var M=y.x-x.x,w=y.y-x.y,L=E.x-b.x,z=E.y-b.y,V=x.x-b.x,A=x.y-b.y,T=w*L-M*z,P=w*V-M*A;if(Math.abs(T)>Number.EPSILON){var O;if(T>0){if(P<0||P>T)return[];if(O=z*V-L*A,O<0||O>T)return[]}else{if(P>0||P<T)return[];if(O=z*V-L*A,O>0||O<T)return[]}if(O===0)return P===0||P===T?[]:[x];if(O===T)return P===0||P===T?[]:[y];if(P===0)return[b];if(P===T)return[E];var H=O/T;return[{x:x.x+H*M,y:x.y+H*w}]}else{if(P!==0||z*V!==L*A)return[];var N=M===0&&w===0,I=L===0&&z===0;if(N&&I)return x.x!==b.x||x.y!==b.y?[]:[x];if(N)return i(b,E,x)?[x]:[];if(I)return i(x,y,b)?[b]:[];var B,Z,X,G,J,ie,Y,ve;return M!==0?(x.x<y.x?(B=x,X=x.x,Z=y,G=y.x):(B=y,X=y.x,Z=x,G=x.x),b.x<E.x?(J=b,Y=b.x,ie=E,ve=E.x):(J=E,Y=E.x,ie=b,ve=b.x)):(x.y<y.y?(B=x,X=x.y,Z=y,G=y.y):(B=y,X=y.y,Z=x,G=x.y),b.y<E.y?(J=b,Y=b.y,ie=E,ve=E.y):(J=E,Y=E.y,ie=b,ve=b.y)),X<=Y?G<Y?[]:G===Y?[]:G<=ve?[J,Z]:[J,ie]:X>ve?[]:X===ve?[]:G<=ve?[B,Z]:[B,ie]}}function a(x,y,b,E){var S=y.x-x.x,M=y.y-x.y,w=b.x-x.x,L=b.y-x.y,z=E.x-x.x,V=E.y-x.y,A=S*L-M*w,T=S*V-M*z;if(Math.abs(A)>Number.EPSILON){var P=z*L-V*w;return A>0?T>=0&&P>=0:T>=0||P>=0}else return T>0}function s(x,y){var b=x.concat(),E;function S(ve,fe){var se=b.length-1,pe=ve-1;pe<0&&(pe=se);var W=ve+1;W>se&&(W=0);var Fe=a(b[ve],b[pe],b[W],E[fe]);if(!Fe)return!1;var ge=E.length-1,Xe=fe-1;Xe<0&&(Xe=ge);var Me=fe+1;return Me>ge&&(Me=0),Fe=a(E[fe],E[Xe],E[Me],b[ve]),!!Fe}function M(ve,fe){var se,pe,W;for(se=0;se<b.length;se++)if(pe=se+1,pe%=b.length,W=r(ve,fe,b[se],b[pe]),W.length>0)return!0;return!1}var w=[];function L(ve,fe){var se,pe,W,Fe,ge;for(se=0;se<w.length;se++)for(pe=y[w[se]],W=0;W<pe.length;W++)if(Fe=W+1,Fe%=pe.length,ge=r(ve,fe,pe[W],pe[Fe]),ge.length>0)return!0;return!1}for(var z,V,A,T,P,O,H=[],N,I,B,Z,X=0,G=y.length;X<G;X++)w.push(X);for(var J=0,ie=w.length*2;w.length>0;){if(ie--,ie<0){console.log("Infinite Loop! Holes left:"+w.length+", Probably Hole outside Shape!");break}for(V=J;V<b.length;V++){A=b[V],z=-1;for(var X=0;X<w.length;X++)if(P=w[X],O=A.x+":"+A.y+":"+P,H[O]===void 0){E=y[P];for(var Y=0;Y<E.length;Y++)if(T=E[Y],!!S(V,Y)&&!M(A,T)&&!L(A,T)){z=Y,w.splice(X,1),N=b.slice(0,V+1),I=b.slice(V),B=E.slice(z),Z=E.slice(0,z+1),b=N.concat(B).concat(Z).concat(I),J=V;break}if(z>=0)break;H[O]=!0}if(z>=0)break}}return b}for(var o,c,l,h,u,f,p={},g=t.concat(),d=0,m=e.length;d<m;d++)Array.prototype.push.apply(g,e[d]);for(o=0,c=g.length;o<c;o++)u=g[o].x+":"+g[o].y,p[u]!==void 0&&console.warn("THREE.ShapeUtils: Duplicate point",u,o),p[u]=o;var v=s(t,e),_=Jt.triangulate(v,!1);for(o=0,c=_.length;o<c;o++)for(h=_[o],l=0;l<3;l++)u=h[l].x+":"+h[l].y,f=p[u],f!==void 0&&(h[l]=f);return _.concat()},isClockWise:function(t){return Jt.area(t)<0},b2:function(){function t(i,r){var a=1-i;return a*a*r}function e(i,r){return 2*(1-i)*i*r}function n(i,r){return i*i*r}return function(r,a,s,o){return t(r,a)+e(r,s)+n(r,o)}}(),b3:function(){function t(r,a){var s=1-r;return s*s*s*a}function e(r,a){var s=1-r;return 3*s*s*r*a}function n(r,a){var s=1-r;return 3*s*r*r*a}function i(r,a){return r*r*r*a}return function(a,s,o,c,l){return t(a,s)+e(a,o)+n(a,c)+i(a,l)}}()};function ti(t,e){if(typeof t>"u"){t=[];return}Ze.call(this),this.type="ExtrudeGeometry",t=Array.isArray(t)?t:[t],this.addShapeList(t,e),this.computeFaceNormals()}ti.prototype=Object.create(Ze.prototype);ti.prototype.constructor=ti;ti.prototype.addShapeList=function(t,e){for(var n=t.length,i=0;i<n;i++){var r=t[i];this.addShape(r,e)}};ti.prototype.addShape=function(t,e){var n=e.amount!==void 0?e.amount:100,i=e.bevelThickness!==void 0?e.bevelThickness:6,r=e.bevelSize!==void 0?e.bevelSize:i-2,a=e.bevelSegments!==void 0?e.bevelSegments:3,s=e.bevelEnabled!==void 0?e.bevelEnabled:!0,o=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,l=e.extrudePath,h,u=!1,f=e.UVGenerator!==void 0?e.UVGenerator:ti.WorldUVGenerator,p,g,d,m;l&&(h=l.getSpacedPoints(c),u=!0,s=!1,p=e.frames!==void 0?e.frames:l.computeFrenetFrames(c,!1),g=new U,d=new U,m=new U),s||(a=0,i=0,r=0);var v,_,x,y=this,b=this.vertices.length,E=t.extractPoints(o),S=E.shape,M=E.holes,w=!Jt.isClockWise(S);if(w){for(S=S.reverse(),_=0,x=M.length;_<x;_++)v=M[_],Jt.isClockWise(v)&&(M[_]=v.reverse());w=!1}var L=Jt.triangulateShape(S,M),z=S;for(_=0,x=M.length;_<x;_++)v=M[_],S=S.concat(v);function V(Be,Ue,Oe){return Ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),Ue.clone().multiplyScalar(Oe).add(Be)}var A,T,P,O,H,N=S.length,I,B=L.length;function Z(Be,Ue,Oe){var tt,ft,k=1,R=Be.x-Ue.x,ne=Be.y-Ue.y,he=Oe.x-Be.x,me=Oe.y-Be.y,ye=R*R+ne*ne,We=R*me-ne*he;if(Math.abs(We)>Number.EPSILON){var Le=Math.sqrt(ye),oe=Math.sqrt(he*he+me*me),Ge=Ue.x-ne/Le,$=Ue.y+R/Le,de=Oe.x-me/oe,_e=Oe.y+he/oe,Te=((de-Ge)*me-(_e-$)*he)/(R*me-ne*he);tt=Ge+R*Te-Be.x,ft=$+ne*Te-Be.y;var we=tt*tt+ft*ft;if(we<=2)return new Ce(tt,ft);k=Math.sqrt(we/2)}else{var qe=!1;R>Number.EPSILON?he>Number.EPSILON&&(qe=!0):R<-Number.EPSILON?he<-Number.EPSILON&&(qe=!0):Math.sign(ne)===Math.sign(me)&&(qe=!0),qe?(tt=-ne,ft=R,k=Math.sqrt(ye)):(tt=R,ft=ne,k=Math.sqrt(ye/2))}return new Ce(tt/k,ft/k)}for(var X=[],G=0,J=z.length,ie=J-1,Y=G+1;G<J;G++,ie++,Y++)ie===J&&(ie=0),Y===J&&(Y=0),X[G]=Z(z[G],z[ie],z[Y]);var ve=[],fe,se=X.concat();for(_=0,x=M.length;_<x;_++){for(v=M[_],fe=[],G=0,J=v.length,ie=J-1,Y=G+1;G<J;G++,ie++,Y++)ie===J&&(ie=0),Y===J&&(Y=0),fe[G]=Z(v[G],v[ie],v[Y]);ve.push(fe),se=se.concat(fe)}for(A=0;A<a;A++){for(P=A/a,O=i*Math.cos(P*Math.PI/2),T=r*Math.sin(P*Math.PI/2),G=0,J=z.length;G<J;G++)H=V(z[G],X[G],T),Xe(H.x,H.y,-O);for(_=0,x=M.length;_<x;_++)for(v=M[_],fe=ve[_],G=0,J=v.length;G<J;G++)H=V(v[G],fe[G],T),Xe(H.x,H.y,-O)}for(T=r,G=0;G<N;G++)H=s?V(S[G],se[G],T):S[G],u?(d.copy(p.normals[0]).multiplyScalar(H.x),g.copy(p.binormals[0]).multiplyScalar(H.y),m.copy(h[0]).add(d).add(g),Xe(m.x,m.y,m.z)):Xe(H.x,H.y,0);var pe;for(pe=1;pe<=c;pe++)for(G=0;G<N;G++)H=s?V(S[G],se[G],T):S[G],u?(d.copy(p.normals[pe]).multiplyScalar(H.x),g.copy(p.binormals[pe]).multiplyScalar(H.y),m.copy(h[pe]).add(d).add(g),Xe(m.x,m.y,m.z)):Xe(H.x,H.y,n/c*pe);for(A=a-1;A>=0;A--){for(P=A/a,O=i*Math.cos(P*Math.PI/2),T=r*Math.sin(P*Math.PI/2),G=0,J=z.length;G<J;G++)H=V(z[G],X[G],T),Xe(H.x,H.y,n+O);for(_=0,x=M.length;_<x;_++)for(v=M[_],fe=ve[_],G=0,J=v.length;G<J;G++)H=V(v[G],fe[G],T),u?Xe(H.x,H.y+h[c-1].y,h[c-1].x+O):Xe(H.x,H.y,n+O)}W(),Fe();function W(){if(s){var Be=0,Ue=N*Be;for(G=0;G<B;G++)I=L[G],Me(I[2]+Ue,I[1]+Ue,I[0]+Ue);for(Be=c+a*2,Ue=N*Be,G=0;G<B;G++)I=L[G],Me(I[0]+Ue,I[1]+Ue,I[2]+Ue)}else{for(G=0;G<B;G++)I=L[G],Me(I[2],I[1],I[0]);for(G=0;G<B;G++)I=L[G],Me(I[0]+N*c,I[1]+N*c,I[2]+N*c)}}function Fe(){var Be=0;for(ge(z,Be),Be+=z.length,_=0,x=M.length;_<x;_++)v=M[_],ge(v,Be),Be+=v.length}function ge(Be,Ue){var Oe,tt;for(G=Be.length;--G>=0;){Oe=G,tt=G-1,tt<0&&(tt=Be.length-1);var ft=0,k=c+a*2;for(ft=0;ft<k;ft++){var R=N*ft,ne=N*(ft+1),he=Ue+Oe+R,me=Ue+tt+R,ye=Ue+tt+ne,We=Ue+Oe+ne;Je(he,me,ye,We)}}}function Xe(Be,Ue,Oe){y.vertices.push(new U(Be,Ue,Oe))}function Me(Be,Ue,Oe){Be+=b,Ue+=b,Oe+=b,y.faces.push(new zn(Be,Ue,Oe,null,null,0));var tt=f.generateTopUV(y,Be,Ue,Oe);y.faceVertexUvs[0].push(tt)}function Je(Be,Ue,Oe,tt,ft,k,R,ne,he){Be+=b,Ue+=b,Oe+=b,tt+=b,y.faces.push(new zn(Be,Ue,tt,null,null,1)),y.faces.push(new zn(Ue,Oe,tt,null,null,1));var me=f.generateSideWallUV(y,Be,Ue,Oe,tt);y.faceVertexUvs[0].push([me[0],me[1],me[3]]),y.faceVertexUvs[0].push([me[1],me[2],me[3]])}};ti.WorldUVGenerator={generateTopUV:function(t,e,n,i){var r=t.vertices,a=r[e],s=r[n],o=r[i];return[new Ce(a.x,a.y),new Ce(s.x,s.y),new Ce(o.x,o.y)]},generateSideWallUV:function(t,e,n,i,r){var a=t.vertices,s=a[e],o=a[n],c=a[i],l=a[r];return Math.abs(s.y-o.y)<.01?[new Ce(s.x,1-s.z),new Ce(o.x,1-o.z),new Ce(c.x,1-c.z),new Ce(l.x,1-l.z)]:[new Ce(s.y,1-s.z),new Ce(o.y,1-o.z),new Ce(c.y,1-c.z),new Ce(l.y,1-l.z)]}};function Wo(t,e){e=e||{};var n=e.font;if((n&&n.isFont)===!1)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new Ze;var i=n.generateShapes(t,e.size,e.curveSegments);e.amount=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),ti.call(this,i,e),this.type="TextGeometry"}Wo.prototype=Object.create(ti.prototype);Wo.prototype.constructor=Wo;function ea(t,e,n,i,r,a,s){ze.call(this),this.type="SphereBufferGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:s},t=t||50,e=Math.max(3,Math.floor(e)||8),n=Math.max(2,Math.floor(n)||6),i=i!==void 0?i:0,r=r!==void 0?r:Math.PI*2,a=a!==void 0?a:0,s=s!==void 0?s:Math.PI;for(var o=a+s,c=(e+1)*(n+1),l=new Ee(new Float32Array(c*3),3),h=new Ee(new Float32Array(c*3),3),u=new Ee(new Float32Array(c*2),2),f=0,p=[],g=new U,d=0;d<=n;d++){for(var m=[],v=d/n,_=0;_<=e;_++){var x=_/e,y=-t*Math.cos(i+x*r)*Math.sin(a+v*s),b=t*Math.cos(a+v*s),E=t*Math.sin(i+x*r)*Math.sin(a+v*s);g.set(y,b,E).normalize(),l.setXYZ(f,y,b,E),h.setXYZ(f,g.x,g.y,g.z),u.setXY(f,x,1-v),m.push(f),f++}p.push(m)}for(var S=[],d=0;d<n;d++)for(var _=0;_<e;_++){var M=p[d][_+1],w=p[d][_],L=p[d+1][_],z=p[d+1][_+1];(d!==0||a>0)&&S.push(M,w,z),(d!==n-1||o<Math.PI)&&S.push(w,L,z)}this.setIndex(new(l.count>65535?Vi:Gi)(S,1)),this.addAttribute("position",l),this.addAttribute("normal",h),this.addAttribute("uv",u),this.boundingSphere=new sn(new U,t)}ea.prototype=Object.create(ze.prototype);ea.prototype.constructor=ea;function Xo(t,e,n,i,r,a,s){Ze.call(this),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:s},this.fromBufferGeometry(new ea(t,e,n,i,r,a,s))}Xo.prototype=Object.create(Ze.prototype);Xo.prototype.constructor=Xo;function xs(t,e,n,i,r,a){ze.call(this),this.type="RingBufferGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},t=t||20,e=e||50,r=r!==void 0?r:0,a=a!==void 0?a:Math.PI*2,n=n!==void 0?Math.max(3,n):8,i=i!==void 0?Math.max(1,i):1;var s=(n+1)*(i+1),o=n*i*2*3,c=new Ee(new(o>65535?Uint32Array:Uint16Array)(o),1),l=new Ee(new Float32Array(s*3),3),h=new Ee(new Float32Array(s*3),3),u=new Ee(new Float32Array(s*2),2),f=0,p=0,g,d=t,m=(e-t)/i,v=new U,_=new Ce,x,y;for(x=0;x<=i;x++){for(y=0;y<=n;y++)g=r+y/n*a,v.x=d*Math.cos(g),v.y=d*Math.sin(g),l.setXYZ(f,v.x,v.y,v.z),h.setXYZ(f,0,0,1),_.x=(v.x/e+1)/2,_.y=(v.y/e+1)/2,u.setXY(f,_.x,_.y),f++;d+=m}for(x=0;x<i;x++){var b=x*(n+1);for(y=0;y<n;y++){g=y+b;var E=g,S=g+n+1,M=g+n+2,w=g+1;c.setX(p,E),p++,c.setX(p,S),p++,c.setX(p,M),p++,c.setX(p,E),p++,c.setX(p,M),p++,c.setX(p,w),p++}}this.setIndex(c),this.addAttribute("position",l),this.addAttribute("normal",h),this.addAttribute("uv",u)}xs.prototype=Object.create(ze.prototype);xs.prototype.constructor=xs;function qo(t,e,n,i,r,a){Ze.call(this),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},this.fromBufferGeometry(new xs(t,e,n,i,r,a))}qo.prototype=Object.create(Ze.prototype);qo.prototype.constructor=qo;function Yo(t,e,n,i){Ze.call(this),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i},this.fromBufferGeometry(new Zr(t,e,n,i))}Yo.prototype=Object.create(Ze.prototype);Yo.prototype.constructor=Yo;function ys(t,e,n,i){ze.call(this),this.type="LatheBufferGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e)||12,n=n||0,i=i||Math.PI*2,i=Qe.clamp(i,0,Math.PI*2);var r=(e+1)*t.length,a=e*t.length*2*3,s=new Ee(new(a>65535?Uint32Array:Uint16Array)(a),1),o=new Ee(new Float32Array(r*3),3),c=new Ee(new Float32Array(r*2),2),l=0,h=0,u,f=1/e,p=new U,g=new Ce,d,m;for(d=0;d<=e;d++){var v=n+d*f*i,_=Math.sin(v),x=Math.cos(v);for(m=0;m<=t.length-1;m++)p.x=t[m].x*_,p.y=t[m].y,p.z=t[m].x*x,o.setXYZ(l,p.x,p.y,p.z),g.x=d/e,g.y=m/(t.length-1),c.setXY(l,g.x,g.y),l++}for(d=0;d<e;d++)for(m=0;m<t.length-1;m++){u=m+d*t.length;var y=u,b=u+t.length,E=u+t.length+1,S=u+1;s.setX(h,y),h++,s.setX(h,b),h++,s.setX(h,S),h++,s.setX(h,b),h++,s.setX(h,E),h++,s.setX(h,S),h++}if(this.setIndex(s),this.addAttribute("position",o),this.addAttribute("uv",c),this.computeVertexNormals(),i===Math.PI*2){var M=this.attributes.normal.array,w=new U,L=new U,z=new U;for(u=e*t.length*3,d=0,m=0;d<t.length;d++,m+=3)w.x=M[m+0],w.y=M[m+1],w.z=M[m+2],L.x=M[u+m+0],L.y=M[u+m+1],L.z=M[u+m+2],z.addVectors(w,L).normalize(),M[m+0]=M[u+m+0]=z.x,M[m+1]=M[u+m+1]=z.y,M[m+2]=M[u+m+2]=z.z}}ys.prototype=Object.create(ze.prototype);ys.prototype.constructor=ys;function jo(t,e,n,i){Ze.call(this),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},this.fromBufferGeometry(new ys(t,e,n,i)),this.mergeVertices()}jo.prototype=Object.create(Ze.prototype);jo.prototype.constructor=jo;function bs(t,e){ze.call(this),this.type="ShapeBufferGeometry",this.parameters={shapes:t,curveSegments:e},e=e||12;var n=[],i=[],r=[],a=[],s=0,o=0;if(Array.isArray(t)===!1)l(t);else for(var c=0;c<t.length;c++)l(t[c]),this.addGroup(s,o,c),s+=o,o=0;this.setIndex(new(a.length>65535?Vi:Gi)(a,1)),this.addAttribute("position",new ot(n,3)),this.addAttribute("normal",new ot(i,3)),this.addAttribute("uv",new ot(r,2));function l(h){var u,f,p,g=n.length/3,d=h.extractPoints(e),m=d.shape,v=d.holes;if(Jt.isClockWise(m)===!1)for(m=m.reverse(),u=0,f=v.length;u<f;u++)p=v[u],Jt.isClockWise(p)===!0&&(v[u]=p.reverse());var _=Jt.triangulateShape(m,v);for(u=0,f=v.length;u<f;u++)p=v[u],m=m.concat(p);for(u=0,f=m.length;u<f;u++){var x=m[u];n.push(x.x,x.y,0),i.push(0,0,1),r.push(x.x,x.y)}for(u=0,f=_.length;u<f;u++){var y=_[u],b=y[0]+g,E=y[1]+g,S=y[2]+g;a.push(b,E,S),o+=3}}}bs.prototype=Object.create(ze.prototype);bs.prototype.constructor=bs;function Ms(t,e){Ze.call(this),this.type="ShapeGeometry",typeof e=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),e=e.curveSegments),this.parameters={shapes:t,curveSegments:e},this.fromBufferGeometry(new bs(t,e)),this.mergeVertices()}Ms.prototype=Object.create(Ze.prototype);Ms.prototype.constructor=Ms;function ws(t,e){ze.call(this),e=e!==void 0?e:1;var n=Math.cos(Qe.DEG2RAD*e),i=[0,0],r={};function a(_,x){return _-x}var s=["a","b","c"],o;t.isBufferGeometry?(o=new Ze,o.fromBufferGeometry(t)):o=t.clone(),o.mergeVertices(),o.computeFaceNormals();for(var c=o.vertices,l=o.faces,h=0,u=l.length;h<u;h++)for(var f=l[h],p=0;p<3;p++){i[0]=f[s[p]],i[1]=f[s[(p+1)%3]],i.sort(a);var g=i.toString();r[g]===void 0?r[g]={vert1:i[0],vert2:i[1],face1:h,face2:void 0}:r[g].face2=h}var d=[];for(var g in r){var m=r[g];if(m.face2===void 0||l[m.face1].normal.dot(l[m.face2].normal)<=n){var v=c[m.vert1];d.push(v.x),d.push(v.y),d.push(v.z),v=c[m.vert2],d.push(v.x),d.push(v.y),d.push(v.z)}}this.addAttribute("position",new ot(d,3))}ws.prototype=Object.create(ze.prototype);ws.prototype.constructor=ws;function Wi(t,e,n,i,r,a,s,o){ze.call(this),this.type="CylinderBufferGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o};var c=this;t=t!==void 0?t:20,e=e!==void 0?e:20,n=n!==void 0?n:100,i=Math.floor(i)||8,r=Math.floor(r)||1,a=a!==void 0?a:!1,s=s!==void 0?s:0,o=o!==void 0?o:2*Math.PI;var l=0;a===!1&&(t>0&&l++,e>0&&l++);var h=b(),u=E(),f=new Ee(new(u>65535?Uint32Array:Uint16Array)(u),1),p=new Ee(new Float32Array(h*3),3),g=new Ee(new Float32Array(h*3),3),d=new Ee(new Float32Array(h*2),2),m=0,v=0,_=[],x=n/2,y=0;S(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(f),this.addAttribute("position",p),this.addAttribute("normal",g),this.addAttribute("uv",d);function b(){var w=(i+1)*(r+1);return a===!1&&(w+=(i+1)*l+i*l),w}function E(){var w=i*r*2*3;return a===!1&&(w+=i*l*3),w}function S(){var w,L,z=new U,V=new U,A=0,T=(e-t)/n;for(L=0;L<=r;L++){var P=[],O=L/r,H=O*(e-t)+t;for(w=0;w<=i;w++){var N=w/i,I=N*o+s,B=Math.sin(I),Z=Math.cos(I);V.x=H*B,V.y=-O*n+x,V.z=H*Z,p.setXYZ(m,V.x,V.y,V.z),z.set(B,T,Z).normalize(),g.setXYZ(m,z.x,z.y,z.z),d.setXY(m,N,1-O),P.push(m),m++}_.push(P)}for(w=0;w<i;w++)for(L=0;L<r;L++){var X=_[L][w],G=_[L+1][w],J=_[L+1][w+1],ie=_[L][w+1];f.setX(v,X),v++,f.setX(v,G),v++,f.setX(v,ie),v++,f.setX(v,G),v++,f.setX(v,J),v++,f.setX(v,ie),v++,A+=6}c.addGroup(y,A,0),y+=A}function M(w){var L,z,V,A=new Ce,T=new U,P=0,O=w===!0?t:e,H=w===!0?1:-1;for(z=m,L=1;L<=i;L++)p.setXYZ(m,0,x*H,0),g.setXYZ(m,0,H,0),A.x=.5,A.y=.5,d.setXY(m,A.x,A.y),m++;for(V=m,L=0;L<=i;L++){var N=L/i,I=N*o+s,B=Math.cos(I),Z=Math.sin(I);T.x=O*Z,T.y=x*H,T.z=O*B,p.setXYZ(m,T.x,T.y,T.z),g.setXYZ(m,0,H,0),A.x=B*.5+.5,A.y=Z*.5*H+.5,d.setXY(m,A.x,A.y),m++}for(L=0;L<i;L++){var X=z+L,G=V+L;w===!0?(f.setX(v,G),v++,f.setX(v,G+1),v++,f.setX(v,X),v++):(f.setX(v,G+1),v++,f.setX(v,G),v++,f.setX(v,X),v++),P+=3}c.addGroup(y,P,w===!0?1:2),y+=P}}Wi.prototype=Object.create(ze.prototype);Wi.prototype.constructor=Wi;function ta(t,e,n,i,r,a,s,o){Ze.call(this),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o},this.fromBufferGeometry(new Wi(t,e,n,i,r,a,s,o)),this.mergeVertices()}ta.prototype=Object.create(Ze.prototype);ta.prototype.constructor=ta;function $o(t,e,n,i,r,a,s){ta.call(this,0,t,e,n,i,r,a,s),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:s}}$o.prototype=Object.create(ta.prototype);$o.prototype.constructor=$o;function Zo(t,e,n,i,r,a,s){Wi.call(this,0,t,e,n,i,r,a,s),this.type="ConeBufferGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:s}}Zo.prototype=Object.create(Wi.prototype);Zo.prototype.constructor=Zo;function Es(t,e,n,i){ze.call(this),this.type="CircleBufferGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},t=t||50,e=e!==void 0?Math.max(3,e):8,n=n!==void 0?n:0,i=i!==void 0?i:Math.PI*2;var r=e+2,a=new Float32Array(r*3),s=new Float32Array(r*3),o=new Float32Array(r*2);s[2]=1,o[0]=.5,o[1]=.5;for(var c=0,l=3,h=2;c<=e;c++,l+=3,h+=2){var u=n+c/e*i;a[l]=t*Math.cos(u),a[l+1]=t*Math.sin(u),s[l+2]=1,o[h]=(a[l]/t+1)/2,o[h+1]=(a[l+1]/t+1)/2}for(var f=[],l=1;l<=e;l++)f.push(l,l+1,0);this.setIndex(new Ee(new Uint16Array(f),1)),this.addAttribute("position",new Ee(a,3)),this.addAttribute("normal",new Ee(s,3)),this.addAttribute("uv",new Ee(o,2)),this.boundingSphere=new sn(new U,t)}Es.prototype=Object.create(ze.prototype);Es.prototype.constructor=Es;function Jo(t,e,n,i){Ze.call(this),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},this.fromBufferGeometry(new Es(t,e,n,i))}Jo.prototype=Object.create(Ze.prototype);Jo.prototype.constructor=Jo;function Ss(t,e,n,i,r,a){Ze.call(this),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a},this.fromBufferGeometry(new $r(t,e,n,i,r,a)),this.mergeVertices()}Ss.prototype=Object.create(Ze.prototype);Ss.prototype.constructor=Ss;var oi=Object.freeze({WireframeGeometry:us,ParametricGeometry:Uo,ParametricBufferGeometry:fs,TetrahedronGeometry:ko,TetrahedronBufferGeometry:ds,OctahedronGeometry:Oo,OctahedronBufferGeometry:Kr,IcosahedronGeometry:No,IcosahedronBufferGeometry:ps,DodecahedronGeometry:Bo,DodecahedronBufferGeometry:ms,PolyhedronGeometry:zo,PolyhedronBufferGeometry:An,TubeGeometry:Go,TubeBufferGeometry:gs,TorusKnotGeometry:Vo,TorusKnotBufferGeometry:vs,TorusGeometry:Ho,TorusBufferGeometry:_s,TextGeometry:Wo,SphereBufferGeometry:ea,SphereGeometry:Xo,RingGeometry:qo,RingBufferGeometry:xs,PlaneBufferGeometry:Zr,PlaneGeometry:Yo,LatheGeometry:jo,LatheBufferGeometry:ys,ShapeGeometry:Ms,ShapeBufferGeometry:bs,ExtrudeGeometry:ti,EdgesGeometry:ws,ConeGeometry:$o,ConeBufferGeometry:Zo,CylinderGeometry:ta,CylinderBufferGeometry:Wi,CircleBufferGeometry:Es,CircleGeometry:Jo,BoxBufferGeometry:$r,BoxGeometry:Ss});function Ts(){mn.call(this,{uniforms:vn.merge([et.lights,{opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}),this.lights=!0,this.transparent=!0,Object.defineProperties(this,{opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}}})}Ts.prototype=Object.create(mn.prototype);Ts.prototype.constructor=Ts;Ts.prototype.isShadowMaterial=!0;function As(t){mn.call(this,t),this.type="RawShaderMaterial"}As.prototype=Object.create(mn.prototype);As.prototype.constructor=As;As.prototype.isRawShaderMaterial=!0;function Qo(t){this.uuid=Qe.generateUUID(),this.type="MultiMaterial",this.materials=Array.isArray(t)?t:[],this.visible=!0}Qo.prototype={constructor:Qo,isMultiMaterial:!0,toJSON:function(t){for(var e={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type,materials:[]},n=this.materials,i=0,r=n.length;i<r;i++){var a=n[i].toJSON(t);delete a.metadata,e.materials.push(a)}return e.visible=this.visible,e},clone:function(){for(var t=new this.constructor,e=0;e<this.materials.length;e++)t.materials.push(this.materials[e].clone());return t.visible=this.visible,t}};function Si(t){at.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=.5,this.metalness=.5,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Si.prototype=Object.create(at.prototype);Si.prototype.constructor=Si;Si.prototype.isMeshStandardMaterial=!0;Si.prototype.copy=function(t){return at.prototype.copy.call(this,t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function na(t){Si.call(this),this.defines={PHYSICAL:""},this.type="MeshPhysicalMaterial",this.reflectivity=.5,this.clearCoat=0,this.clearCoatRoughness=0,this.setValues(t)}na.prototype=Object.create(Si.prototype);na.prototype.constructor=na;na.prototype.isMeshPhysicalMaterial=!0;na.prototype.copy=function(t){return Si.prototype.copy.call(this,t),this.defines={PHYSICAL:""},this.reflectivity=t.reflectivity,this.clearCoat=t.clearCoat,this.clearCoatRoughness=t.clearCoatRoughness,this};function fi(t){at.call(this),this.type="MeshPhongMaterial",this.color=new Ve(16777215),this.specular=new Ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}fi.prototype=Object.create(at.prototype);fi.prototype.constructor=fi;fi.prototype.isMeshPhongMaterial=!0;fi.prototype.copy=function(t){return at.prototype.copy.call(this,t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function ia(t){fi.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.gradientMap=null,this.setValues(t)}ia.prototype=Object.create(fi.prototype);ia.prototype.constructor=ia;ia.prototype.isMeshToonMaterial=!0;ia.prototype.copy=function(t){return fi.prototype.copy.call(this,t),this.gradientMap=t.gradientMap,this};function ra(t){at.call(this,t),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}ra.prototype=Object.create(at.prototype);ra.prototype.constructor=ra;ra.prototype.isMeshNormalMaterial=!0;ra.prototype.copy=function(t){return at.prototype.copy.call(this,t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function aa(t){at.call(this),this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}aa.prototype=Object.create(at.prototype);aa.prototype.constructor=aa;aa.prototype.isMeshLambertMaterial=!0;aa.prototype.copy=function(t){return at.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function sa(t){at.call(this),this.type="LineDashedMaterial",this.color=new Ve(16777215),this.linewidth=1,this.scale=1,this.dashSize=3,this.gapSize=1,this.lights=!1,this.setValues(t)}sa.prototype=Object.create(at.prototype);sa.prototype.constructor=sa;sa.prototype.isLineDashedMaterial=!0;sa.prototype.copy=function(t){return at.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this};var lT=Object.freeze({ShadowMaterial:Ts,SpriteMaterial:Qr,RawShaderMaterial:As,ShaderMaterial:mn,PointsMaterial:ui,MultiMaterial:Qo,MeshPhysicalMaterial:na,MeshStandardMaterial:Si,MeshPhongMaterial:fi,MeshToonMaterial:ia,MeshNormalMaterial:ra,MeshLambertMaterial:aa,MeshDepthMaterial:fr,MeshBasicMaterial:Tn,LineDashedMaterial:sa,LineBasicMaterial:kt,Material:at}),Iu={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Uf(t,e,n){var i=this,r=!1,a=0,s=0;this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(o){s++,r===!1&&i.onStart!==void 0&&i.onStart(o,a,s),r=!0},this.itemEnd=function(o){a++,i.onProgress!==void 0&&i.onProgress(o,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(o){i.onError!==void 0&&i.onError(o)}}var Hn=new Uf;function ni(t){this.manager=t!==void 0?t:Hn}Object.assign(ni.prototype,{load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t);var r=this,a=Iu.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;var s=/^data:(.*?)(;base64)?,(.*)$/,o=t.match(s);if(o){var c=o[1],l=!!o[2],h=o[3];h=window.decodeURIComponent(h),l&&(h=window.atob(h));try{var u,f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":u=new ArrayBuffer(h.length);for(var p=new Uint8Array(u),g=0;g<h.length;g++)p[g]=h.charCodeAt(g);f==="blob"&&(u=new Blob([u],{type:c}));break;case"document":var d=new DOMParser;u=d.parseFromString(h,c);break;case"json":u=JSON.parse(h);break;default:u=h;break}window.setTimeout(function(){e&&e(u),r.manager.itemEnd(t)},0)}catch(v){window.setTimeout(function(){i&&i(v),r.manager.itemError(t)},0)}}else{var m=new XMLHttpRequest;m.open("GET",t,!0),m.addEventListener("load",function(v){var _=v.target.response;Iu.add(t,_),this.status===200?(e&&e(_),r.manager.itemEnd(t)):this.status===0?(console.warn("THREE.FileLoader: HTTP Status 0 received."),e&&e(_),r.manager.itemEnd(t)):(i&&i(v),r.manager.itemError(t))},!1),n!==void 0&&m.addEventListener("progress",function(v){n(v)},!1),m.addEventListener("error",function(v){i&&i(v),r.manager.itemError(t)},!1),this.responseType!==void 0&&(m.responseType=this.responseType),this.withCredentials!==void 0&&(m.withCredentials=this.withCredentials),m.overrideMimeType&&m.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain"),m.send(null)}return r.manager.itemStart(t),m},setPath:function(t){return this.path=t,this},setResponseType:function(t){return this.responseType=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setMimeType:function(t){return this.mimeType=t,this}});function Av(t){this.manager=t!==void 0?t:Hn,this._parser=null}Object.assign(Av.prototype,{load:function(t,e,n,i){var r=this,a=[],s=new hs;s.image=a;var o=new ni(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer");function c(f){o.load(t[f],function(p){var g=r._parser(p,!0);a[f]={width:g.width,height:g.height,format:g.format,mipmaps:g.mipmaps},l+=1,l===6&&(g.mipmapCount===1&&(s.minFilter=wn),s.format=g.format,s.needsUpdate=!0,e&&e(s))},n,i)}if(Array.isArray(t))for(var l=0,h=0,u=t.length;h<u;++h)c(h);else o.load(t,function(f){var p=r._parser(f,!0);if(p.isCubemap)for(var g=p.mipmaps.length/p.mipmapCount,d=0;d<g;d++){a[d]={mipmaps:[]};for(var m=0;m<p.mipmapCount;m++)a[d].mipmaps.push(p.mipmaps[d*p.mipmapCount+m]),a[d].format=p.format,a[d].width=p.width,a[d].height=p.height}else s.image.width=p.width,s.image.height=p.height,s.mipmaps=p.mipmaps;p.mipmapCount===1&&(s.minFilter=wn),s.format=p.format,s.needsUpdate=!0,e&&e(s)},n,i);return s},setPath:function(t){return this.path=t,this}});var cT=kf;function kf(t){this.manager=t!==void 0?t:Hn,this._parser=null}Object.assign(kf.prototype,{load:function(t,e,n,i){var r=this,a=new jr,s=new ni(this.manager);return s.setResponseType("arraybuffer"),s.load(t,function(o){var c=r._parser(o);c&&(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:On,a.wrapT=c.wrapT!==void 0?c.wrapT:On,a.magFilter=c.magFilter!==void 0?c.magFilter:wn,a.minFilter=c.minFilter!==void 0?c.minFilter:dl,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps),c.mipmapCount===1&&(a.minFilter=wn),a.needsUpdate=!0,e&&e(a,c))},n,i),a}});function pl(t){this.manager=t!==void 0?t:Hn}Object.assign(pl.prototype,{load:function(t,e,n,i){var r=this,a=document.createElementNS("http://www.w3.org/1999/xhtml","img");if(a.onload=function(){a.onload=null,URL.revokeObjectURL(a.src),e&&e(a),r.manager.itemEnd(t)},a.onerror=i,t.indexOf("data:")===0)a.src=t;else if(this.crossOrigin!==void 0)a.crossOrigin=this.crossOrigin,a.src=t;else{var s=new ni;s.setPath(this.path),s.setResponseType("blob"),s.setWithCredentials(this.withCredentials),s.load(t,function(o){a.src=URL.createObjectURL(o)},n,i)}return r.manager.itemStart(t),a},setCrossOrigin:function(t){return this.crossOrigin=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setPath:function(t){return this.path=t,this}});function Of(t){this.manager=t!==void 0?t:Hn}Object.assign(Of.prototype,{load:function(t,e,n,i){var r=new hr,a=new pl(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);var s=0;function o(l){a.load(t[l],function(h){r.images[l]=h,s++,s===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(var c=0;c<t.length;++c)o(c);return r},setCrossOrigin:function(t){return this.crossOrigin=t,this},setPath:function(t){return this.path=t,this}});function Zc(t){this.manager=t!==void 0?t:Hn}Object.assign(Zc.prototype,{load:function(t,e,n,i){var r=new Mt,a=new pl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setWithCredentials(this.withCredentials),a.setPath(this.path),a.load(t,function(s){var o=t.search(/\.(jpg|jpeg)$/)>0||t.search(/^data\:image\/jpeg/)===0;r.format=o?ns:wi,r.image=s,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r},setCrossOrigin:function(t){return this.crossOrigin=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setPath:function(t){return this.path=t,this}});function Ot(t,e){De.call(this),this.type="Light",this.color=new Ve(t),this.intensity=e!==void 0?e:1,this.receiveShadow=void 0}Ot.prototype=Object.assign(Object.create(De.prototype),{constructor:Ot,isLight:!0,copy:function(t){return De.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){var e=De.prototype.toJSON.call(this,t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}});function gc(t,e,n){Ot.call(this,t,n),this.type="HemisphereLight",this.castShadow=void 0,this.position.copy(De.DefaultUp),this.updateMatrix(),this.groundColor=new Ve(e)}gc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:gc,isHemisphereLight:!0,copy:function(t){return Ot.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}});function ga(t){this.camera=t,this.bias=0,this.radius=1,this.mapSize=new Ce(512,512),this.map=null,this.matrix=new Ye}Object.assign(ga.prototype,{copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){var t={};return this.bias!==0&&(t.bias=this.bias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}});function vc(){ga.call(this,new en(50,1,.5,500))}vc.prototype=Object.assign(Object.create(ga.prototype),{constructor:vc,isSpotLightShadow:!0,update:function(t){var e=Qe.RAD2DEG*2*t.angle,n=this.mapSize.width/this.mapSize.height,i=t.distance||500,r=this.camera;(e!==r.fov||n!==r.aspect||i!==r.far)&&(r.fov=e,r.aspect=n,r.far=i,r.updateProjectionMatrix())}});function _c(t,e,n,i,r,a){Ot.call(this,t,e),this.type="SpotLight",this.position.copy(De.DefaultUp),this.updateMatrix(),this.target=new De,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(s){this.intensity=s/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=a!==void 0?a:1,this.shadow=new vc}_c.prototype=Object.assign(Object.create(Ot.prototype),{constructor:_c,isSpotLight:!0,copy:function(t){return Ot.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function xc(t,e,n,i){Ot.call(this,t,e),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new ga(new en(90,1,.5,500))}xc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:xc,isPointLight:!0,copy:function(t){return Ot.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}});function yc(t){ga.call(this,new ss(-5,5,5,-5,.5,500))}yc.prototype=Object.assign(Object.create(ga.prototype),{constructor:yc});function bc(t,e){Ot.call(this,t,e),this.type="DirectionalLight",this.position.copy(De.DefaultUp),this.updateMatrix(),this.target=new De,this.shadow=new yc}bc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:bc,isDirectionalLight:!0,copy:function(t){return Ot.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function Mc(t,e){Ot.call(this,t,e),this.type="AmbientLight",this.castShadow=void 0}Mc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Mc,isAmbientLight:!0});var nn={arraySlice:function(t,e,n){return nn.isTypedArray(t)?new t.constructor(t.subarray(e,n)):t.slice(e,n)},convertArray:function(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},getKeyframeOrder:function(t){function e(a,s){return t[a]-t[s]}for(var n=t.length,i=new Array(n),r=0;r!==n;++r)i[r]=r;return i.sort(e),i},sortedArray:function(t,e,n){for(var i=t.length,r=new t.constructor(i),a=0,s=0;s!==i;++a)for(var o=n[a]*e,c=0;c!==e;++c)r[s++]=t[o+c];return r},flattenJSON:function(t,e,n,i){for(var r=1,a=t[0];a!==void 0&&a[i]===void 0;)a=t[r++];if(a!==void 0){var s=a[i];if(s!==void 0)if(Array.isArray(s))do s=a[i],s!==void 0&&(e.push(a.time),n.push.apply(n,s)),a=t[r++];while(a!==void 0);else if(s.toArray!==void 0)do s=a[i],s!==void 0&&(e.push(a.time),s.toArray(n,n.length)),a=t[r++];while(a!==void 0);else do s=a[i],s!==void 0&&(e.push(a.time),n.push(s)),a=t[r++];while(a!==void 0)}}};function En(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n}En.prototype={constructor:En,evaluate:function(t){var e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];e:{t:{var a;n:{i:if(!(t<i)){for(var s=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===s)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break n}if(!(t>=r)){var o=e[1];t<o&&(n=2,r=o);for(var s=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===s)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break n}break e}for(;n<a;){var c=n+a>>>1;t<e[c]?a=c:n=c+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(t){for(var e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i,a=0;a!==i;++a)e[a]=n[r+a];return e},interpolate_:function(t,e,n,i){throw new Error("call to abstract method")},intervalChanged_:function(t,e,n){}};Object.assign(En.prototype,{beforeStart_:En.prototype.copySampleValue_,afterEnd_:En.prototype.copySampleValue_});function wc(t,e,n,i){En.call(this,t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}wc.prototype=Object.assign(Object.create(En.prototype),{constructor:wc,DefaultSettings_:{endingStart:Yr,endingEnd:Yr},intervalChanged_:function(t,e,n){var i=this.parameterPositions,r=t-2,a=t+1,s=i[r],o=i[a];if(s===void 0)switch(this.getSettings_().endingStart){case Rr:r=t,s=2*e-n;break;case bo:r=i.length-2,s=e+i[r]-i[r+1];break;default:r=t,s=n}if(o===void 0)switch(this.getSettings_().endingEnd){case Rr:a=t,o=2*n-e;break;case bo:a=1,o=n+i[1]-i[0];break;default:a=t-1,o=e}var c=(n-e)*.5,l=this.valueSize;this._weightPrev=c/(e-s),this._weightNext=c/(o-n),this._offsetPrev=r*l,this._offsetNext=a*l},interpolate_:function(t,e,n,i){for(var r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=t*s,c=o-s,l=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),g=p*p,d=g*p,m=-u*d+2*u*g-u*p,v=(1+u)*d+(-1.5-2*u)*g+(-.5+u)*p+1,_=(-1-f)*d+(1.5+f)*g+.5*p,x=f*d-f*g,y=0;y!==s;++y)r[y]=m*a[l+y]+v*a[c+y]+_*a[o+y]+x*a[h+y];return r}});function Ko(t,e,n,i){En.call(this,t,e,n,i)}Ko.prototype=Object.assign(Object.create(En.prototype),{constructor:Ko,interpolate_:function(t,e,n,i){for(var r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=t*s,c=o-s,l=(n-e)/(i-e),h=1-l,u=0;u!==s;++u)r[u]=a[c+u]*h+a[o+u]*l;return r}});function Ec(t,e,n,i){En.call(this,t,e,n,i)}Ec.prototype=Object.assign(Object.create(En.prototype),{constructor:Ec,interpolate_:function(t,e,n,i){return this.copySampleValue_(t-1)}});var qi;qi={TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:so,InterpolantFactoryMethodDiscrete:function(t){return new Ec(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new Ko(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new wc(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){var e;switch(t){case yo:e=this.InterpolantFactoryMethodDiscrete;break;case so:e=this.InterpolantFactoryMethodLinear;break;case Zl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){var n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);console.warn(n);return}this.createInterpolant=e},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return so;case this.InterpolantFactoryMethodSmooth:return Zl}},getValueSize:function(){return this.values.length/this.times.length},shift:function(t){if(t!==0)for(var e=this.times,n=0,i=e.length;n!==i;++n)e[n]+=t;return this},scale:function(t){if(t!==1)for(var e=this.times,n=0,i=e.length;n!==i;++n)e[n]*=t;return this},trim:function(t,e){for(var n=this.times,i=n.length,r=0,a=i-1;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);var s=this.getValueSize();this.times=nn.arraySlice(n,r,a),this.values=nn.arraySlice(this.values,r*s,a*s)}return this},validate:function(){var t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("invalid value size in track",this),t=!1);var n=this.times,i=this.values,r=n.length;r===0&&(console.error("track is empty",this),t=!1);for(var a=null,s=0;s!==r;s++){var o=n[s];if(typeof o=="number"&&isNaN(o)){console.error("time is not a valid number",this,s,o),t=!1;break}if(a!==null&&a>o){console.error("out of order keys",this,s,o,a),t=!1;break}a=o}if(i!==void 0&&nn.isTypedArray(i))for(var s=0,c=i.length;s!==c;++s){var l=i[s];if(isNaN(l)){console.error("value is not a valid number",this,s,l),t=!1;break}}return t},optimize:function(){for(var t=this.times,e=this.values,n=this.getValueSize(),i=this.getInterpolation()===Zl,r=1,a=t.length-1,s=1;s<a;++s){var o=!1,c=t[s],l=t[s+1];if(c!==l&&(s!==1||c!==c[0]))if(i)o=!0;else for(var h=s*n,u=h-n,f=h+n,p=0;p!==n;++p){var g=e[h+p];if(g!==e[u+p]||g!==e[f+p]){o=!0;break}}if(o){if(s!==r){t[r]=t[s];for(var d=s*n,m=r*n,p=0;p!==n;++p)e[m+p]=e[d+p]}++r}}if(a>0){t[r]=t[a];for(var d=a*n,m=r*n,p=0;p!==n;++p)e[m+p]=e[d+p];++r}return r!==t.length&&(this.times=nn.arraySlice(t,0,r),this.values=nn.arraySlice(e,0,r*n)),this}};function va(t,e,n,i){if(t===void 0)throw new Error("track name is undefined");if(e===void 0||e.length===0)throw new Error("no keyframes in track named "+t);this.name=t,this.times=nn.convertArray(e,this.TimeBufferType),this.values=nn.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation),this.validate(),this.optimize()}function Cs(t,e,n,i){va.call(this,t,e,n,i)}Cs.prototype=Object.assign(Object.create(qi),{constructor:Cs,ValueTypeName:"vector"});function Sc(t,e,n,i){En.call(this,t,e,n,i)}Sc.prototype=Object.assign(Object.create(En.prototype),{constructor:Sc,interpolate_:function(t,e,n,i){for(var r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=t*s,c=(n-e)/(i-e),l=o+s;o!==l;o+=4)Wt.slerpFlat(r,0,a,o-s,a,o,c);return r}});function el(t,e,n,i){va.call(this,t,e,n,i)}el.prototype=Object.assign(Object.create(qi),{constructor:el,ValueTypeName:"quaternion",DefaultInterpolation:so,InterpolantFactoryMethodLinear:function(t){return new Sc(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0});function Ls(t,e,n,i){va.call(this,t,e,n,i)}Ls.prototype=Object.assign(Object.create(qi),{constructor:Ls,ValueTypeName:"number"});function Tc(t,e,n,i){va.call(this,t,e,n,i)}Tc.prototype=Object.assign(Object.create(qi),{constructor:Tc,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:yo,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Ac(t,e,n){va.call(this,t,e,n)}Ac.prototype=Object.assign(Object.create(qi),{constructor:Ac,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:yo,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Cc(t,e,n,i){va.call(this,t,e,n,i)}Cc.prototype=Object.assign(Object.create(qi),{constructor:Cc,ValueTypeName:"color"});function oa(t,e,n,i){va.apply(this,arguments)}oa.prototype=qi;qi.constructor=oa;Object.assign(oa,{parse:function(t){if(t.type===void 0)throw new Error("track type undefined, can not parse");var e=oa._getTrackTypeForValueTypeName(t.type);if(t.times===void 0){var n=[],i=[];nn.flattenJSON(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)},toJSON:function(t){var e=t.constructor,n;if(e.toJSON!==void 0)n=e.toJSON(t);else{n={name:t.name,times:nn.convertArray(t.times,Array),values:nn.convertArray(t.values,Array)};var i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n},_getTrackTypeForValueTypeName:function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ls;case"vector":case"vector2":case"vector3":case"vector4":return Cs;case"color":return Cc;case"quaternion":return el;case"bool":case"boolean":return Ac;case"string":return Tc}throw new Error("Unsupported typeName: "+t)}});function Un(t,e,n){this.name=t,this.tracks=n,this.duration=e!==void 0?e:-1,this.uuid=Qe.generateUUID(),this.duration<0&&this.resetDuration(),this.optimize()}Un.prototype={constructor:Un,resetDuration:function(){for(var t=this.tracks,e=0,n=0,i=t.length;n!==i;++n){var r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}this.duration=e},trim:function(){for(var t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},optimize:function(){for(var t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}};Object.assign(Un,{parse:function(t){for(var e=[],n=t.tracks,i=1/(t.fps||1),r=0,a=n.length;r!==a;++r)e.push(oa.parse(n[r]).scale(i));return new Un(t.name,t.duration,e)},toJSON:function(t){for(var e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e},r=0,a=n.length;r!==a;++r)e.push(oa.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(t,e,n,i){for(var r=e.length,a=[],s=0;s<r;s++){var o=[],c=[];o.push((s+r-1)%r,s,(s+1)%r),c.push(0,1,0);var l=nn.getKeyframeOrder(o);o=nn.sortedArray(o,1,l),c=nn.sortedArray(c,1,l),!i&&o[0]===0&&(o.push(r),c.push(c[0])),a.push(new Ls(".morphTargetInfluences["+e[s].name+"]",o,c).scale(1/n))}return new Un(t,-1,a)},findByName:function(t,e){var n=t;if(!Array.isArray(t)){var i=t;n=i.geometry&&i.geometry.animations||i.animations}for(var r=0;r<n.length;r++)if(n[r].name===e)return n[r];return null},CreateClipsFromMorphTargetSequences:function(t,e,n){for(var i={},r=/^([\w-]*?)([\d]+)$/,a=0,s=t.length;a<s;a++){var o=t[a],c=o.name.match(r);if(c&&c.length>1){var l=c[1],h=i[l];h||(i[l]=h=[]),h.push(o)}}var u=[];for(var l in i)u.push(Un.CreateFromMorphTargetSequence(l,i[l],e,n));return u},parseAnimation:function(t,e){if(!t)return console.error("  no animation in JSONLoader data"),null;for(var n=function(x,y,b,E,S){if(b.length!==0){var M=[],w=[];nn.flattenJSON(b,M,w,E),M.length!==0&&S.push(new x(y,M,w))}},i=[],r=t.name||"default",a=t.length||-1,s=t.fps||30,o=t.hierarchy||[],c=0;c<o.length;c++){var l=o[c].keys;if(!(!l||l.length===0))if(l[0].morphTargets){for(var h={},u=0;u<l.length;u++)if(l[u].morphTargets)for(var f=0;f<l[u].morphTargets.length;f++)h[l[u].morphTargets[f]]=-1;for(var p in h){for(var g=[],d=[],f=0;f!==l[u].morphTargets.length;++f){var m=l[u];g.push(m.time),d.push(m.morphTarget===p?1:0)}i.push(new Ls(".morphTargetInfluence["+p+"]",g,d))}a=h.length*s}else{var v=".bones["+e[c].name+"]";n(Cs,v+".position",l,"pos",i),n(el,v+".quaternion",l,"rot",i),n(Cs,v+".scale",l,"scl",i)}}if(i.length===0)return null;var _=new Un(r,a,i);return _}});function Jc(t){this.manager=t!==void 0?t:Hn,this.textures={}}Object.assign(Jc.prototype,{load:function(t,e,n,i){var r=this,a=new ni(r.manager);a.load(t,function(s){e(r.parse(JSON.parse(s)))},n,i)},setTextures:function(t){this.textures=t},parse:function(t){var e=this.textures;function n(o){return e[o]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",o),e[o]}var i=new lT[t.type];if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular.setHex(t.specular),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearCoat!==void 0&&(i.clearCoat=t.clearCoat),t.clearCoatRoughness!==void 0&&(i.clearCoatRoughness=t.clearCoatRoughness),t.uniforms!==void 0&&(i.uniforms=t.uniforms),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.vertexColors!==void 0&&(i.vertexColors=t.vertexColors),t.fog!==void 0&&(i.fog=t.fog),t.shading!==void 0&&(i.shading=t.shading),t.blending!==void 0&&(i.blending=t.blending),t.side!==void 0&&(i.side=t.side),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.skinning!==void 0&&(i.skinning=t.skinning),t.morphTargets!==void 0&&(i.morphTargets=t.morphTargets),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap),i.transparent=!0),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalScale!==void 0){var r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new Ce().fromArray(r)}if(t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.materials!==void 0)for(var a=0,s=t.materials.length;a<s;a++)i.materials.push(this.parse(t.materials[a]));return i}});function Nf(t){this.manager=t!==void 0?t:Hn}Object.assign(Nf.prototype,{load:function(t,e,n,i){var r=this,a=new ni(r.manager);a.load(t,function(s){e(r.parse(JSON.parse(s)))},n,i)},parse:function(t){var e=new ze,n=t.data.index,i={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};if(n!==void 0){var r=new i[n.type](n.array);e.setIndex(new Ee(r,1))}var a=t.data.attributes;for(var s in a){var o=a[s],r=new i[o.type](o.array);e.addAttribute(s,new Ee(r,o.itemSize,o.normalized))}var c=t.data.groups||t.data.drawcalls||t.data.offsets;if(c!==void 0)for(var l=0,h=c.length;l!==h;++l){var u=c[l];e.addGroup(u.start,u.count,u.materialIndex)}var f=t.data.boundingSphere;if(f!==void 0){var p=new U;f.center!==void 0&&p.fromArray(f.center),e.boundingSphere=new sn(p,f.radius)}return e}});function Br(){this.onLoadStart=function(){},this.onLoadProgress=function(){},this.onLoadComplete=function(){}}Br.prototype={constructor:Br,crossOrigin:void 0,extractUrlBase:function(t){var e=t.split("/");return e.length===1?"./":(e.pop(),e.join("/")+"/")},initMaterials:function(t,e,n){for(var i=[],r=0;r<t.length;++r)i[r]=this.createMaterial(t[r],e,n);return i},createMaterial:function(){var t,e,n;return function(r,a,s){t===void 0&&(t=new Ve),e===void 0&&(e=new Zc),n===void 0&&(n=new Jc);var o={};function c(f,p,g,d,m){var v=a+f,_=Br.Handlers.get(v),x;_!==null?x=_.load(v):(e.setCrossOrigin(s),x=e.load(v)),p!==void 0&&(x.repeat.fromArray(p),p[0]!==1&&(x.wrapS=Oi),p[1]!==1&&(x.wrapT=Oi)),g!==void 0&&x.offset.fromArray(g),d!==void 0&&(d[0]==="repeat"&&(x.wrapS=Oi),d[0]==="mirror"&&(x.wrapS=qr),d[1]==="repeat"&&(x.wrapT=Oi),d[1]==="mirror"&&(x.wrapT=qr)),m!==void 0&&(x.anisotropy=m);var y=Qe.generateUUID();return o[y]=x,y}var l={uuid:Qe.generateUUID(),type:"MeshLambertMaterial"};for(var h in r){var u=r[h];switch(h){case"DbgColor":case"DbgIndex":case"opticalDensity":case"illumination":break;case"DbgName":l.name=u;break;case"blending":l.blending=wg[u];break;case"colorAmbient":case"mapAmbient":console.warn("THREE.Loader.createMaterial:",h,"is no longer supported.");break;case"colorDiffuse":l.color=t.fromArray(u).getHex();break;case"colorSpecular":l.specular=t.fromArray(u).getHex();break;case"colorEmissive":l.emissive=t.fromArray(u).getHex();break;case"specularCoef":l.shininess=u;break;case"shading":u.toLowerCase()==="basic"&&(l.type="MeshBasicMaterial"),u.toLowerCase()==="phong"&&(l.type="MeshPhongMaterial"),u.toLowerCase()==="standard"&&(l.type="MeshStandardMaterial");break;case"mapDiffuse":l.map=c(u,r.mapDiffuseRepeat,r.mapDiffuseOffset,r.mapDiffuseWrap,r.mapDiffuseAnisotropy);break;case"mapDiffuseRepeat":case"mapDiffuseOffset":case"mapDiffuseWrap":case"mapDiffuseAnisotropy":break;case"mapEmissive":l.emissiveMap=c(u,r.mapEmissiveRepeat,r.mapEmissiveOffset,r.mapEmissiveWrap,r.mapEmissiveAnisotropy);break;case"mapEmissiveRepeat":case"mapEmissiveOffset":case"mapEmissiveWrap":case"mapEmissiveAnisotropy":break;case"mapLight":l.lightMap=c(u,r.mapLightRepeat,r.mapLightOffset,r.mapLightWrap,r.mapLightAnisotropy);break;case"mapLightRepeat":case"mapLightOffset":case"mapLightWrap":case"mapLightAnisotropy":break;case"mapAO":l.aoMap=c(u,r.mapAORepeat,r.mapAOOffset,r.mapAOWrap,r.mapAOAnisotropy);break;case"mapAORepeat":case"mapAOOffset":case"mapAOWrap":case"mapAOAnisotropy":break;case"mapBump":l.bumpMap=c(u,r.mapBumpRepeat,r.mapBumpOffset,r.mapBumpWrap,r.mapBumpAnisotropy);break;case"mapBumpScale":l.bumpScale=u;break;case"mapBumpRepeat":case"mapBumpOffset":case"mapBumpWrap":case"mapBumpAnisotropy":break;case"mapNormal":l.normalMap=c(u,r.mapNormalRepeat,r.mapNormalOffset,r.mapNormalWrap,r.mapNormalAnisotropy);break;case"mapNormalFactor":l.normalScale=[u,u];break;case"mapNormalRepeat":case"mapNormalOffset":case"mapNormalWrap":case"mapNormalAnisotropy":break;case"mapSpecular":l.specularMap=c(u,r.mapSpecularRepeat,r.mapSpecularOffset,r.mapSpecularWrap,r.mapSpecularAnisotropy);break;case"mapSpecularRepeat":case"mapSpecularOffset":case"mapSpecularWrap":case"mapSpecularAnisotropy":break;case"mapMetalness":l.metalnessMap=c(u,r.mapMetalnessRepeat,r.mapMetalnessOffset,r.mapMetalnessWrap,r.mapMetalnessAnisotropy);break;case"mapMetalnessRepeat":case"mapMetalnessOffset":case"mapMetalnessWrap":case"mapMetalnessAnisotropy":break;case"mapRoughness":l.roughnessMap=c(u,r.mapRoughnessRepeat,r.mapRoughnessOffset,r.mapRoughnessWrap,r.mapRoughnessAnisotropy);break;case"mapRoughnessRepeat":case"mapRoughnessOffset":case"mapRoughnessWrap":case"mapRoughnessAnisotropy":break;case"mapAlpha":l.alphaMap=c(u,r.mapAlphaRepeat,r.mapAlphaOffset,r.mapAlphaWrap,r.mapAlphaAnisotropy);break;case"mapAlphaRepeat":case"mapAlphaOffset":case"mapAlphaWrap":case"mapAlphaAnisotropy":break;case"flipSided":l.side=cr;break;case"doubleSided":l.side=Hs;break;case"transparency":console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"),l.opacity=u;break;case"depthTest":case"depthWrite":case"colorWrite":case"opacity":case"reflectivity":case"transparent":case"visible":case"wireframe":l[h]=u;break;case"vertexColors":u===!0&&(l.vertexColors=ma),u==="face"&&(l.vertexColors=_f);break;default:console.error("THREE.Loader.createMaterial: Unsupported",h,u);break}}return l.type==="MeshBasicMaterial"&&delete l.emissive,l.type!=="MeshPhongMaterial"&&delete l.specular,l.opacity<1&&(l.transparent=!0),n.setTextures(o),n.parse(l)}}()};Br.Handlers={handlers:[],add:function(t,e){this.handlers.push(t,e)},get:function(t){for(var e=this.handlers,n=0,i=e.length;n<i;n+=2){var r=e[n],a=e[n+1];if(r.test(t))return a}return null}};function Bf(t){typeof t=="boolean"&&(console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),t=void 0),this.manager=t!==void 0?t:Hn,this.withCredentials=!1}Object.assign(Bf.prototype,{load:function(t,e,n,i){var r=this,a=this.texturePath&&typeof this.texturePath=="string"?this.texturePath:Br.prototype.extractUrlBase(t),s=new ni(this.manager);s.setWithCredentials(this.withCredentials),s.load(t,function(o){var c=JSON.parse(o),l=c.metadata;if(l!==void 0){var h=l.type;if(h!==void 0){if(h.toLowerCase()==="object"){console.error("THREE.JSONLoader: "+t+" should be loaded with THREE.ObjectLoader instead.");return}if(h.toLowerCase()==="scene"){console.error("THREE.JSONLoader: "+t+" should be loaded with THREE.SceneLoader instead.");return}}}var u=r.parse(c,a);e(u.geometry,u.materials)},n,i)},setTexturePath:function(t){this.texturePath=t},parse:function(t,e){var n=new Ze,i=t.scale!==void 0?1/t.scale:1;r(i),a(),s(i),o(),n.computeFaceNormals(),n.computeBoundingSphere();function r(l){function h(ve,fe){return ve&1<<fe}var u,f,p,g,d,m,v,_,x,y,b,E,S,M,w,L,z,V,A,T,P,O,H,N,I,B,Z,X=t.faces,G=t.vertices,J=t.normals,ie=t.colors,Y=0;if(t.uvs!==void 0){for(u=0;u<t.uvs.length;u++)t.uvs[u].length&&Y++;for(u=0;u<Y;u++)n.faceVertexUvs[u]=[]}for(g=0,d=G.length;g<d;)V=new U,V.x=G[g++]*l,V.y=G[g++]*l,V.z=G[g++]*l,n.vertices.push(V);for(g=0,d=X.length;g<d;)if(y=X[g++],b=h(y,0),E=h(y,1),S=h(y,3),M=h(y,4),w=h(y,5),L=h(y,6),z=h(y,7),b){if(T=new zn,T.a=X[g],T.b=X[g+1],T.c=X[g+3],P=new zn,P.a=X[g+1],P.b=X[g+2],P.c=X[g+3],g+=4,E&&(x=X[g++],T.materialIndex=x,P.materialIndex=x),p=n.faces.length,S)for(u=0;u<Y;u++)for(N=t.uvs[u],n.faceVertexUvs[u][p]=[],n.faceVertexUvs[u][p+1]=[],f=0;f<4;f++)_=X[g++],B=N[_*2],Z=N[_*2+1],I=new Ce(B,Z),f!==2&&n.faceVertexUvs[u][p].push(I),f!==0&&n.faceVertexUvs[u][p+1].push(I);if(M&&(v=X[g++]*3,T.normal.set(J[v++],J[v++],J[v]),P.normal.copy(T.normal)),w)for(u=0;u<4;u++)v=X[g++]*3,H=new U(J[v++],J[v++],J[v]),u!==2&&T.vertexNormals.push(H),u!==0&&P.vertexNormals.push(H);if(L&&(m=X[g++],O=ie[m],T.color.setHex(O),P.color.setHex(O)),z)for(u=0;u<4;u++)m=X[g++],O=ie[m],u!==2&&T.vertexColors.push(new Ve(O)),u!==0&&P.vertexColors.push(new Ve(O));n.faces.push(T),n.faces.push(P)}else{if(A=new zn,A.a=X[g++],A.b=X[g++],A.c=X[g++],E&&(x=X[g++],A.materialIndex=x),p=n.faces.length,S)for(u=0;u<Y;u++)for(N=t.uvs[u],n.faceVertexUvs[u][p]=[],f=0;f<3;f++)_=X[g++],B=N[_*2],Z=N[_*2+1],I=new Ce(B,Z),n.faceVertexUvs[u][p].push(I);if(M&&(v=X[g++]*3,A.normal.set(J[v++],J[v++],J[v])),w)for(u=0;u<3;u++)v=X[g++]*3,H=new U(J[v++],J[v++],J[v]),A.vertexNormals.push(H);if(L&&(m=X[g++],A.color.setHex(ie[m])),z)for(u=0;u<3;u++)m=X[g++],A.vertexColors.push(new Ve(ie[m]));n.faces.push(A)}}function a(){var l=t.influencesPerVertex!==void 0?t.influencesPerVertex:2;if(t.skinWeights)for(var h=0,u=t.skinWeights.length;h<u;h+=l){var f=t.skinWeights[h],p=l>1?t.skinWeights[h+1]:0,g=l>2?t.skinWeights[h+2]:0,d=l>3?t.skinWeights[h+3]:0;n.skinWeights.push(new xt(f,p,g,d))}if(t.skinIndices)for(var h=0,u=t.skinIndices.length;h<u;h+=l){var m=t.skinIndices[h],v=l>1?t.skinIndices[h+1]:0,_=l>2?t.skinIndices[h+2]:0,x=l>3?t.skinIndices[h+3]:0;n.skinIndices.push(new xt(m,v,_,x))}n.bones=t.bones,n.bones&&n.bones.length>0&&(n.skinWeights.length!==n.skinIndices.length||n.skinIndices.length!==n.vertices.length)&&console.warn("When skinning, number of vertices ("+n.vertices.length+"), skinIndices ("+n.skinIndices.length+"), and skinWeights ("+n.skinWeights.length+") should match.")}function s(l){if(t.morphTargets!==void 0)for(var h=0,u=t.morphTargets.length;h<u;h++){n.morphTargets[h]={},n.morphTargets[h].name=t.morphTargets[h].name,n.morphTargets[h].vertices=[];for(var f=n.morphTargets[h].vertices,p=t.morphTargets[h].vertices,g=0,d=p.length;g<d;g+=3){var m=new U;m.x=p[g]*l,m.y=p[g+1]*l,m.z=p[g+2]*l,f.push(m)}}if(t.morphColors!==void 0&&t.morphColors.length>0){console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');for(var v=n.faces,_=t.morphColors[0].colors,h=0,u=v.length;h<u;h++)v[h].color.fromArray(_,h*3)}}function o(){var l=[],h=[];t.animation!==void 0&&h.push(t.animation),t.animations!==void 0&&(t.animations.length?h=h.concat(t.animations):h.push(t.animations));for(var u=0;u<h.length;u++){var f=Un.parseAnimation(h[u],n.bones);f&&l.push(f)}if(n.morphTargets){var p=Un.CreateClipsFromMorphTargetSequences(n.morphTargets,10);l=l.concat(p)}l.length>0&&(n.animations=l)}if(t.materials===void 0||t.materials.length===0)return{geometry:n};var c=Br.prototype.initMaterials(t.materials,e,this.crossOrigin);return{geometry:n,materials:c}}});function Cv(t){this.manager=t!==void 0?t:Hn,this.texturePath=""}Object.assign(Cv.prototype,{load:function(t,e,n,i){this.texturePath===""&&(this.texturePath=t.substring(0,t.lastIndexOf("/")+1));var r=this,a=new ni(r.manager);a.load(t,function(s){var o=null;try{o=JSON.parse(s)}catch(l){console.error("THREE:ObjectLoader: Can't parse "+t+".",l.message);return}var c=o.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+t+". Use THREE.JSONLoader instead.");return}r.parse(o,e)},n,i)},setTexturePath:function(t){this.texturePath=t},setCrossOrigin:function(t){this.crossOrigin=t},parse:function(t,e){var n=this.parseGeometries(t.geometries),i=this.parseImages(t.images,function(){e!==void 0&&e(s)}),r=this.parseTextures(t.textures,i),a=this.parseMaterials(t.materials,r),s=this.parseObject(t.object,n,a);return t.animations&&(s.animations=this.parseAnimations(t.animations)),(t.images===void 0||t.images.length===0)&&e!==void 0&&e(s),s},parseGeometries:function(t){var e={};if(t!==void 0)for(var n=new Bf,i=new Nf,r=0,a=t.length;r<a;r++){var s,o=t[r];switch(o.type){case"PlaneGeometry":case"PlaneBufferGeometry":s=new oi[o.type](o.width,o.height,o.widthSegments,o.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":s=new oi[o.type](o.width,o.height,o.depth,o.widthSegments,o.heightSegments,o.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":s=new oi[o.type](o.radius,o.segments,o.thetaStart,o.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":s=new oi[o.type](o.radiusTop,o.radiusBottom,o.height,o.radialSegments,o.heightSegments,o.openEnded,o.thetaStart,o.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":s=new oi[o.type](o.radius,o.height,o.radialSegments,o.heightSegments,o.openEnded,o.thetaStart,o.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":s=new oi[o.type](o.radius,o.widthSegments,o.heightSegments,o.phiStart,o.phiLength,o.thetaStart,o.thetaLength);break;case"DodecahedronGeometry":case"IcosahedronGeometry":case"OctahedronGeometry":case"TetrahedronGeometry":s=new oi[o.type](o.radius,o.detail);break;case"RingGeometry":case"RingBufferGeometry":s=new oi[o.type](o.innerRadius,o.outerRadius,o.thetaSegments,o.phiSegments,o.thetaStart,o.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":s=new oi[o.type](o.radius,o.tube,o.radialSegments,o.tubularSegments,o.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":s=new oi[o.type](o.radius,o.tube,o.tubularSegments,o.radialSegments,o.p,o.q);break;case"LatheGeometry":case"LatheBufferGeometry":s=new oi[o.type](o.points,o.segments,o.phiStart,o.phiLength);break;case"BufferGeometry":s=i.parse(o);break;case"Geometry":s=n.parse(o.data,this.texturePath).geometry;break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+o.type+'"');continue}s.uuid=o.uuid,o.name!==void 0&&(s.name=o.name),e[o.uuid]=s}return e},parseMaterials:function(t,e){var n={};if(t!==void 0){var i=new Jc;i.setTextures(e);for(var r=0,a=t.length;r<a;r++){var s=i.parse(t[r]);n[s.uuid]=s}}return n},parseAnimations:function(t){for(var e=[],n=0;n<t.length;n++){var i=Un.parse(t[n]);e.push(i)}return e},parseImages:function(t,e){var n=this,i={};function r(u){return n.manager.itemStart(u),s.load(u,function(){n.manager.itemEnd(u)},void 0,function(){n.manager.itemError(u)})}if(t!==void 0&&t.length>0){var a=new Uf(e),s=new pl(a);s.setCrossOrigin(this.crossOrigin);for(var o=0,c=t.length;o<c;o++){var l=t[o],h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url)?l.url:n.texturePath+l.url;i[l.uuid]=r(h)}}return i},parseTextures:function(t,e){function n(c,l){return typeof c=="number"?c:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",c),l[c])}var i={};if(t!==void 0)for(var r=0,a=t.length;r<a;r++){var s=t[r];s.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',s.uuid),e[s.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",s.image);var o=new Mt(e[s.image]);o.needsUpdate=!0,o.uuid=s.uuid,s.name!==void 0&&(o.name=s.name),s.mapping!==void 0&&(o.mapping=n(s.mapping,Yg)),s.offset!==void 0&&o.offset.fromArray(s.offset),s.repeat!==void 0&&o.repeat.fromArray(s.repeat),s.wrap!==void 0&&(o.wrapS=n(s.wrap[0],Mu),o.wrapT=n(s.wrap[1],Mu)),s.minFilter!==void 0&&(o.minFilter=n(s.minFilter,wu)),s.magFilter!==void 0&&(o.magFilter=n(s.magFilter,wu)),s.anisotropy!==void 0&&(o.anisotropy=s.anisotropy),s.flipY!==void 0&&(o.flipY=s.flipY),i[s.uuid]=o}return i},parseObject:function(){var t=new Ye;return function(n,i,r){var a;function s(g){return i[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",g),i[g]}function o(g){if(g!==void 0)return r[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),r[g]}switch(n.type){case"Scene":a=new Jr,n.background!==void 0&&Number.isInteger(n.background)&&(a.background=new Ve(n.background)),n.fog!==void 0&&(n.fog.type==="Fog"?a.fog=new ls(n.fog.color,n.fog.near,n.fog.far):n.fog.type==="FogExp2"&&(a.fog=new os(n.fog.color,n.fog.density)));break;case"PerspectiveCamera":a=new en(n.fov,n.aspect,n.near,n.far),n.focus!==void 0&&(a.focus=n.focus),n.zoom!==void 0&&(a.zoom=n.zoom),n.filmGauge!==void 0&&(a.filmGauge=n.filmGauge),n.filmOffset!==void 0&&(a.filmOffset=n.filmOffset),n.view!==void 0&&(a.view=Object.assign({},n.view));break;case"OrthographicCamera":a=new ss(n.left,n.right,n.top,n.bottom,n.near,n.far);break;case"AmbientLight":a=new Mc(n.color,n.intensity);break;case"DirectionalLight":a=new bc(n.color,n.intensity);break;case"PointLight":a=new xc(n.color,n.intensity,n.distance,n.decay);break;case"SpotLight":a=new _c(n.color,n.intensity,n.distance,n.angle,n.penumbra,n.decay);break;case"HemisphereLight":a=new gc(n.color,n.groundColor,n.intensity);break;case"Mesh":var c=s(n.geometry),l=o(n.material);c.bones&&c.bones.length>0?a=new dc(c,l):a=new $t(c,l);break;case"LOD":a=new Do;break;case"Line":a=new Hi(s(n.geometry),o(n.material),n.mode);break;case"LineSegments":a=new Tt(s(n.geometry),o(n.material));break;case"PointCloud":case"Points":a=new cs(s(n.geometry),o(n.material));break;case"Sprite":a=new Po(o(n.material));break;case"Group":a=new Fo;break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh type. Instantiates Object3D instead.");default:a=new De}if(a.uuid=n.uuid,n.name!==void 0&&(a.name=n.name),n.matrix!==void 0?(t.fromArray(n.matrix),t.decompose(a.position,a.quaternion,a.scale)):(n.position!==void 0&&a.position.fromArray(n.position),n.rotation!==void 0&&a.rotation.fromArray(n.rotation),n.quaternion!==void 0&&a.quaternion.fromArray(n.quaternion),n.scale!==void 0&&a.scale.fromArray(n.scale)),n.castShadow!==void 0&&(a.castShadow=n.castShadow),n.receiveShadow!==void 0&&(a.receiveShadow=n.receiveShadow),n.shadow&&(n.shadow.bias!==void 0&&(a.shadow.bias=n.shadow.bias),n.shadow.radius!==void 0&&(a.shadow.radius=n.shadow.radius),n.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(n.shadow.mapSize),n.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(n.shadow.camera))),n.visible!==void 0&&(a.visible=n.visible),n.userData!==void 0&&(a.userData=n.userData),n.children!==void 0)for(var h in n.children)a.add(this.parseObject(n.children[h],i,r));if(n.type==="LOD")for(var u=n.levels,f=0;f<u.length;f++){var p=u[f],h=a.getObjectByProperty("uuid",p.object);h!==void 0&&a.addLevel(h,p.distance)}return a}}()});function ln(){}ln.prototype={constructor:ln,getPoint:function(t){return console.warn("THREE.Curve: Warning, getPoint() not implemented!"),null},getPointAt:function(t){var e=this.getUtoTmapping(t);return this.getPoint(e)},getPoints:function(t){t||(t=5);for(var e=[],n=0;n<=t;n++)e.push(this.getPoint(n/t));return e},getSpacedPoints:function(t){t||(t=5);for(var e=[],n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e},getLength:function(){var t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(t||(t=this.__arcLengthDivisions?this.__arcLengthDivisions:200),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var e=[],n,i=this.getPoint(0),r,a=0;for(e.push(0),r=1;r<=t;r++)n=this.getPoint(r/t),a+=n.distanceTo(i),e.push(a),i=n;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(t,e){var n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];for(var s=0,o=r-1,c;s<=o;)if(i=Math.floor(s+(o-s)/2),c=n[i]-a,c<0)s=i+1;else if(c>0)o=i-1;else{o=i;break}if(i=o,n[i]===a){var p=i/(r-1);return p}var l=n[i],h=n[i+1],u=h-l,f=(a-l)/u,p=(i+f)/(r-1);return p},getTangent:function(t){var e=1e-4,n=t-e,i=t+e;n<0&&(n=0),i>1&&(i=1);var r=this.getPoint(n),a=this.getPoint(i),s=a.clone().sub(r);return s.normalize()},getTangentAt:function(t){var e=this.getUtoTmapping(t);return this.getTangent(e)},computeFrenetFrames:function(t,e){var n=new U,i=[],r=[],a=[],s=new U,o=new Ye,c,l,h;for(c=0;c<=t;c++)l=c/t,i[c]=this.getTangentAt(l),i[c].normalize();r[0]=new U,a[0]=new U;var u=Number.MAX_VALUE,f=Math.abs(i[0].x),p=Math.abs(i[0].y),g=Math.abs(i[0].z);for(f<=u&&(u=f,n.set(1,0,0)),p<=u&&(u=p,n.set(0,1,0)),g<=u&&n.set(0,0,1),s.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],s),a[0].crossVectors(i[0],r[0]),c=1;c<=t;c++)r[c]=r[c-1].clone(),a[c]=a[c-1].clone(),s.crossVectors(i[c-1],i[c]),s.length()>Number.EPSILON&&(s.normalize(),h=Math.acos(Qe.clamp(i[c-1].dot(i[c]),-1,1)),r[c].applyMatrix4(o.makeRotationAxis(s,h))),a[c].crossVectors(i[c],r[c]);if(e===!0)for(h=Math.acos(Qe.clamp(r[0].dot(r[t]),-1,1)),h/=t,i[0].dot(s.crossVectors(r[0],r[t]))>0&&(h=-h),c=1;c<=t;c++)r[c].applyMatrix4(o.makeRotationAxis(i[c],h*c)),a[c].crossVectors(i[c],r[c]);return{tangents:i,normals:r,binormals:a}}};ln.create=function(t,e){return t.prototype=Object.create(ln.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t};function Ti(t,e){this.v1=t,this.v2=e}Ti.prototype=Object.create(ln.prototype);Ti.prototype.constructor=Ti;Ti.prototype.isLineCurve=!0;Ti.prototype.getPoint=function(t){if(t===1)return this.v2.clone();var e=this.v2.clone().sub(this.v1);return e.multiplyScalar(t).add(this.v1),e};Ti.prototype.getPointAt=function(t){return this.getPoint(t)};Ti.prototype.getTangent=function(t){var e=this.v2.clone().sub(this.v1);return e.normalize()};function tl(){this.curves=[],this.autoClose=!1}tl.prototype=Object.assign(Object.create(ln.prototype),{constructor:tl,add:function(t){this.curves.push(t)},closePath:function(){var t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Ti(e,t))},getPoint:function(t){for(var e=t*this.getLength(),n=this.getCurveLengths(),i=0;i<n.length;){if(n[i]>=e){var r=n[i]-e,a=this.curves[i],s=a.getLength(),o=s===0?0:1-r/s;return a.getPointAt(o)}i++}return null},getLength:function(){var t=this.getCurveLengths();return t[t.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var t=[],e=0,n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t},getSpacedPoints:function(t){t||(t=40);for(var e=[],n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e},getPoints:function(t){t=t||12;for(var e=[],n,i=0,r=this.curves;i<r.length;i++)for(var a=r[i],s=a&&a.isEllipseCurve?t*2:a&&a.isLineCurve?1:a&&a.isSplineCurve?t*a.points.length:t,o=a.getPoints(s),c=0;c<o.length;c++){var l=o[c];n&&n.equals(l)||(e.push(l),n=l)}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e},createPointsGeometry:function(t){var e=this.getPoints(t);return this.createGeometry(e)},createSpacedPointsGeometry:function(t){var e=this.getSpacedPoints(t);return this.createGeometry(e)},createGeometry:function(t){for(var e=new Ze,n=0,i=t.length;n<i;n++){var r=t[n];e.vertices.push(new U(r.x,r.y,r.z||0))}return e}});function Xi(t,e,n,i,r,a,s,o){this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=s,this.aRotation=o||0}Xi.prototype=Object.create(ln.prototype);Xi.prototype.constructor=Xi;Xi.prototype.isEllipseCurve=!0;Xi.prototype.getPoint=function(t){for(var e=Math.PI*2,n=this.aEndAngle-this.aStartAngle,i=Math.abs(n)<Number.EPSILON;n<0;)n+=e;for(;n>e;)n-=e;n<Number.EPSILON&&(i?n=0:n=e),this.aClockwise===!0&&!i&&(n===e?n=-e:n=n-e);var r=this.aStartAngle+t*n,a=this.aX+this.xRadius*Math.cos(r),s=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){var o=Math.cos(this.aRotation),c=Math.sin(this.aRotation),l=a-this.aX,h=s-this.aY;a=l*o-h*c+this.aX,s=l*c+h*o+this.aY}return new Ce(a,s)};var ml={tangentQuadraticBezier:function(t,e,n,i){return 2*(1-t)*(n-e)+2*t*(i-n)},tangentCubicBezier:function(t,e,n,i,r){return-3*e*(1-t)*(1-t)+3*n*(1-t)*(1-t)-6*t*n*(1-t)+6*t*i*(1-t)-3*t*t*i+3*t*t*r},tangentSpline:function(t,e,n,i,r){var a=6*t*t-6*t,s=3*t*t-4*t+1,o=-6*t*t+6*t,c=3*t*t-2*t;return a+s+o+c},interpolate:function(t,e,n,i,r){var a=(n-t)*.5,s=(i-e)*.5,o=r*r,c=r*o;return(2*e-2*n+a+s)*c+(-3*e+3*n-2*a-s)*o+a*r+e}};function la(t){this.points=t===void 0?[]:t}la.prototype=Object.create(ln.prototype);la.prototype.constructor=la;la.prototype.isSplineCurve=!0;la.prototype.getPoint=function(t){var e=this.points,n=(e.length-1)*t,i=Math.floor(n),r=n-i,a=e[i===0?i:i-1],s=e[i],o=e[i>e.length-2?e.length-1:i+1],c=e[i>e.length-3?e.length-1:i+2],l=ml.interpolate;return new Ce(l(a.x,s.x,o.x,c.x,r),l(a.y,s.y,o.y,c.y,r))};function ca(t,e,n,i){this.v0=t,this.v1=e,this.v2=n,this.v3=i}ca.prototype=Object.create(ln.prototype);ca.prototype.constructor=ca;ca.prototype.getPoint=function(t){var e=Jt.b3;return new Ce(e(t,this.v0.x,this.v1.x,this.v2.x,this.v3.x),e(t,this.v0.y,this.v1.y,this.v2.y,this.v3.y))};ca.prototype.getTangent=function(t){var e=ml.tangentCubicBezier;return new Ce(e(t,this.v0.x,this.v1.x,this.v2.x,this.v3.x),e(t,this.v0.y,this.v1.y,this.v2.y,this.v3.y)).normalize()};function ha(t,e,n){this.v0=t,this.v1=e,this.v2=n}ha.prototype=Object.create(ln.prototype);ha.prototype.constructor=ha;ha.prototype.getPoint=function(t){var e=Jt.b2;return new Ce(e(t,this.v0.x,this.v1.x,this.v2.x),e(t,this.v0.y,this.v1.y,this.v2.y))};ha.prototype.getTangent=function(t){var e=ml.tangentQuadraticBezier;return new Ce(e(t,this.v0.x,this.v1.x,this.v2.x),e(t,this.v0.y,this.v1.y,this.v2.y)).normalize()};var zf=Object.assign(Object.create(tl.prototype),{fromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(var e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y)},moveTo:function(t,e){this.currentPoint.set(t,e)},lineTo:function(t,e){var n=new Ti(this.currentPoint.clone(),new Ce(t,e));this.curves.push(n),this.currentPoint.set(t,e)},quadraticCurveTo:function(t,e,n,i){var r=new ha(this.currentPoint.clone(),new Ce(t,e),new Ce(n,i));this.curves.push(r),this.currentPoint.set(n,i)},bezierCurveTo:function(t,e,n,i,r,a){var s=new ca(this.currentPoint.clone(),new Ce(t,e),new Ce(n,i),new Ce(r,a));this.curves.push(s),this.currentPoint.set(r,a)},splineThru:function(t){var e=[this.currentPoint.clone()].concat(t),n=new la(e);this.curves.push(n),this.currentPoint.copy(t[t.length-1])},arc:function(t,e,n,i,r,a){var s=this.currentPoint.x,o=this.currentPoint.y;this.absarc(t+s,e+o,n,i,r,a)},absarc:function(t,e,n,i,r,a){this.absellipse(t,e,n,n,i,r,a)},ellipse:function(t,e,n,i,r,a,s,o){var c=this.currentPoint.x,l=this.currentPoint.y;this.absellipse(t+c,e+l,n,i,r,a,s,o)},absellipse:function(t,e,n,i,r,a,s,o){var c=new Xi(t,e,n,i,r,a,s,o);if(this.curves.length>0){var l=c.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(c);var h=c.getPoint(1);this.currentPoint.copy(h)}});function zr(){gl.apply(this,arguments),this.holes=[]}zr.prototype=Object.assign(Object.create(zf),{constructor:zr,getPointsHoles:function(t){for(var e=[],n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e},extractAllPoints:function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},extractPoints:function(t){return this.extractAllPoints(t)}});function gl(t){tl.call(this),this.currentPoint=new Ce,t&&this.fromPoints(t)}gl.prototype=zf;zf.constructor=gl;function Gf(){this.subPaths=[],this.currentPath=null}Gf.prototype={moveTo:function(t,e){this.currentPath=new gl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e)},lineTo:function(t,e){this.currentPath.lineTo(t,e)},quadraticCurveTo:function(t,e,n,i){this.currentPath.quadraticCurveTo(t,e,n,i)},bezierCurveTo:function(t,e,n,i,r,a){this.currentPath.bezierCurveTo(t,e,n,i,r,a)},splineThru:function(t){this.currentPath.splineThru(t)},toShapes:function(t,e){function n(P){for(var O=[],H=0,N=P.length;H<N;H++){var I=P[H],B=new zr;B.curves=I.curves,O.push(B)}return O}function i(P,O){for(var H=O.length,N=!1,I=H-1,B=0;B<H;I=B++){var Z=O[I],X=O[B],G=X.x-Z.x,J=X.y-Z.y;if(Math.abs(J)>Number.EPSILON){if(J<0&&(Z=O[B],G=-G,X=O[I],J=-J),P.y<Z.y||P.y>X.y)continue;if(P.y===Z.y){if(P.x===Z.x)return!0}else{var ie=J*(P.x-Z.x)-G*(P.y-Z.y);if(ie===0)return!0;if(ie<0)continue;N=!N}}else{if(P.y!==Z.y)continue;if(X.x<=P.x&&P.x<=Z.x||Z.x<=P.x&&P.x<=X.x)return!0}}return N}var r=Jt.isClockWise,a=this.subPaths;if(a.length===0)return[];if(e===!0)return n(a);var s,o,c,l=[];if(a.length===1)return o=a[0],c=new zr,c.curves=o.curves,l.push(c),l;var h=!r(a[0].getPoints());h=t?!h:h;var u=[],f=[],p=[],g=0,d;f[g]=void 0,p[g]=[];for(var m=0,v=a.length;m<v;m++)o=a[m],d=o.getPoints(),s=r(d),s=t?!s:s,s?(!h&&f[g]&&g++,f[g]={s:new zr,p:d},f[g].s.curves=o.curves,h&&g++,p[g]=[]):p[g].push({h:o,p:d[0]});if(!f[0])return n(a);if(f.length>1){for(var _=!1,x=[],y=0,b=f.length;y<b;y++)u[y]=[];for(var y=0,b=f.length;y<b;y++)for(var E=p[y],S=0;S<E.length;S++){for(var M=E[S],w=!0,L=0;L<f.length;L++)i(M.p,f[L].p)&&(y!==L&&x.push({froms:y,tos:L,hole:S}),w?(w=!1,u[L].push(M)):_=!0);w&&u[y].push(M)}x.length>0&&(_||(p=u))}for(var z,m=0,V=f.length;m<V;m++){c=f[m].s,l.push(c),z=p[m];for(var A=0,T=z.length;A<T;A++)c.holes.push(z[A].h)}return l}};function Vf(t){this.data=t}Object.assign(Vf.prototype,{isFont:!0,generateShapes:function(t,e,n){function i(h){for(var u=String(h).split(""),f=e/a.resolution,p=0,g=[],d=0;d<u.length;d++){var m=r(u[d],f,p);p+=m.offset,g.push(m.path)}return g}function r(h,u,f){var p=a.glyphs[h]||a.glyphs["?"];if(p){var g=new Gf,d=[],m=Jt.b2,v=Jt.b3,_,x,y,b,E,S,M,w,L,z,V;if(p.o)for(var A=p._cachedOutline||(p._cachedOutline=p.o.split(" ")),T=0,P=A.length;T<P;){var O=A[T++];switch(O){case"m":_=A[T++]*u+f,x=A[T++]*u,g.moveTo(_,x);break;case"l":_=A[T++]*u+f,x=A[T++]*u,g.lineTo(_,x);break;case"q":if(y=A[T++]*u+f,b=A[T++]*u,M=A[T++]*u+f,w=A[T++]*u,g.quadraticCurveTo(M,w,y,b),V=d[d.length-1],V){E=V.x,S=V.y;for(var H=1;H<=n;H++){var N=H/n;m(N,E,M,y),m(N,S,w,b)}}break;case"b":if(y=A[T++]*u+f,b=A[T++]*u,M=A[T++]*u+f,w=A[T++]*u,L=A[T++]*u+f,z=A[T++]*u,g.bezierCurveTo(M,w,L,z,y,b),V=d[d.length-1],V){E=V.x,S=V.y;for(var H=1;H<=n;H++){var N=H/n;v(N,E,M,L,y),v(N,S,w,z,b)}}break}}return{offset:p.ha*u,path:g}}}e===void 0&&(e=100),n===void 0&&(n=4);for(var a=this.data,s=i(t),o=[],c=0,l=s.length;c<l;c++)Array.prototype.push.apply(o,s[c].toShapes());return o}});function Lv(t){this.manager=t!==void 0?t:Hn}Object.assign(Lv.prototype,{load:function(t,e,n,i){var r=this,a=new ni(this.manager);a.load(t,function(s){var o;try{o=JSON.parse(s)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),o=JSON.parse(s.substring(65,s.length-2))}var c=r.parse(o);e&&e(c)},n,i)},parse:function(t){return new Vf(t)}});var Vl,Hf={getContext:function(){return Vl===void 0&&(Vl=new(window.AudioContext||window.webkitAudioContext)),Vl},setContext:function(t){Vl=t}};function Wf(t){this.manager=t!==void 0?t:Hn}Object.assign(Wf.prototype,{load:function(t,e,n,i){var r=new ni(this.manager);r.setResponseType("arraybuffer"),r.load(t,function(a){var s=Hf.getContext();s.decodeAudioData(a,function(o){e(o)})},n,i)}});function Uu(t,e,n,i){Ot.call(this,t,e),this.type="RectAreaLight",this.position.set(0,1,0),this.updateMatrix(),this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}Uu.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Uu,isRectAreaLight:!0,copy:function(t){return Ot.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this}});function Rv(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new en,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new en,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1}Object.assign(Rv.prototype,{update:function(){var t,e,n,i,r,a,s,o=new Ye,c=new Ye;return function(h){var u=t!==this||e!==h.focus||n!==h.fov||i!==h.aspect*this.aspect||r!==h.near||a!==h.far||s!==h.zoom;if(u){t=this,e=h.focus,n=h.fov,i=h.aspect*this.aspect,r=h.near,a=h.far,s=h.zoom;var f=h.projectionMatrix.clone(),p=this.eyeSep/2,g=p*r/e,d=r*Math.tan(Qe.DEG2RAD*n*.5)/s,m,v;c.elements[12]=-p,o.elements[12]=p,m=-d*i+g,v=d*i+g,f.elements[0]=2*r/(v-m),f.elements[8]=(v+m)/(v-m),this.cameraL.projectionMatrix.copy(f),m=-d*i-g,v=d*i-g,f.elements[0]=2*r/(v-m),f.elements[8]=(v+m)/(v-m),this.cameraR.projectionMatrix.copy(f)}this.cameraL.matrixWorld.copy(h.matrixWorld).multiply(c),this.cameraR.matrixWorld.copy(h.matrixWorld).multiply(o)}}()});function Lc(t,e,n){De.call(this),this.type="CubeCamera";var i=90,r=1,a=new en(i,r,t,e);a.up.set(0,-1,0),a.lookAt(new U(1,0,0)),this.add(a);var s=new en(i,r,t,e);s.up.set(0,-1,0),s.lookAt(new U(-1,0,0)),this.add(s);var o=new en(i,r,t,e);o.up.set(0,0,1),o.lookAt(new U(0,1,0)),this.add(o);var c=new en(i,r,t,e);c.up.set(0,0,-1),c.lookAt(new U(0,-1,0)),this.add(c);var l=new en(i,r,t,e);l.up.set(0,-1,0),l.lookAt(new U(0,0,1)),this.add(l);var h=new en(i,r,t,e);h.up.set(0,-1,0),h.lookAt(new U(0,0,-1)),this.add(h);var u={format:ns,magFilter:wn,minFilter:wn};this.renderTarget=new rs(n,n,u),this.updateCubeMap=function(f,p){this.parent===null&&this.updateMatrixWorld();var g=this.renderTarget,d=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,g.activeCubeFace=0,f.render(p,a,g),g.activeCubeFace=1,f.render(p,s,g),g.activeCubeFace=2,f.render(p,o,g),g.activeCubeFace=3,f.render(p,c,g),g.activeCubeFace=4,f.render(p,l,g),g.texture.generateMipmaps=d,g.activeCubeFace=5,f.render(p,h,g),f.setRenderTarget(null)}}Lc.prototype=Object.create(De.prototype);Lc.prototype.constructor=Lc;function ku(){De.call(this),this.type="AudioListener",this.context=Hf.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null}ku.prototype=Object.assign(Object.create(De.prototype),{constructor:ku,getInput:function(){return this.gain},removeFilter:function(){this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null)},getFilter:function(){return this.filter},setFilter:function(t){this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination)},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(t){this.gain.gain.value=t},updateMatrixWorld:function(){var t=new U,e=new Wt,n=new U,i=new U;return function(a){De.prototype.updateMatrixWorld.call(this,a);var s=this.context.listener,o=this.up;this.matrixWorld.decompose(t,e,n),i.set(0,0,-1).applyQuaternion(e),s.positionX?(s.positionX.setValueAtTime(t.x,this.context.currentTime),s.positionY.setValueAtTime(t.y,this.context.currentTime),s.positionZ.setValueAtTime(t.z,this.context.currentTime),s.forwardX.setValueAtTime(i.x,this.context.currentTime),s.forwardY.setValueAtTime(i.y,this.context.currentTime),s.forwardZ.setValueAtTime(i.z,this.context.currentTime),s.upX.setValueAtTime(o.x,this.context.currentTime),s.upY.setValueAtTime(o.y,this.context.currentTime),s.upZ.setValueAtTime(o.z,this.context.currentTime)):(s.setPosition(t.x,t.y,t.z),s.setOrientation(i.x,i.y,i.z,o.x,o.y,o.z))}}()});function Rs(t){De.call(this),this.type="Audio",this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.loop=!1,this.startTime=0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.sourceType="empty",this.filters=[]}Rs.prototype=Object.assign(Object.create(De.prototype),{constructor:Rs,getOutput:function(){return this.gain},setNodeSource:function(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this},setBuffer:function(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this},play:function(){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}var t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.onended=this.onEnded.bind(this),t.playbackRate.setValueAtTime(this.playbackRate,this.startTime),t.start(0,this.startTime),this.isPlaying=!0,this.source=t,this.connect()},pause:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.source.stop(),this.startTime=this.context.currentTime,this.isPlaying=!1,this},stop:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.source.stop(),this.startTime=0,this.isPlaying=!1,this},connect:function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(var t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(var t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(t){return t||(t=[]),this.isPlaying===!0?(this.disconnect(),this.filters=t,this.connect()):this.filters=t,this},getFilter:function(){return this.getFilters()[0]},setFilter:function(t){return this.setFilters(t?[t]:[])},setPlaybackRate:function(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setValueAtTime(this.playbackRate,this.context.currentTime),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this},getVolume:function(){return this.gain.gain.value},setVolume:function(t){return this.gain.gain.value=t,this}});function Ou(t){Rs.call(this,t),this.panner=this.context.createPanner(),this.panner.connect(this.gain)}Ou.prototype=Object.assign(Object.create(Rs.prototype),{constructor:Ou,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(t){this.panner.refDistance=t},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(t){this.panner.rolloffFactor=t},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(t){this.panner.distanceModel=t},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(t){this.panner.maxDistance=t},updateMatrixWorld:function(){var t=new U;return function(n){De.prototype.updateMatrixWorld.call(this,n),t.setFromMatrixPosition(this.matrixWorld),this.panner.setPosition(t.x,t.y,t.z)}}()});function Xf(t,e){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e!==void 0?e:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}Object.assign(Xf.prototype,{getFrequencyData:function(){return this.analyser.getByteFrequencyData(this.data),this.data},getAverageFrequency:function(){for(var t=0,e=this.getFrequencyData(),n=0;n<e.length;n++)t+=e[n];return t/e.length}});function Rc(t,e,n){this.binding=t,this.valueSize=n;var i=Float64Array,r;switch(e){case"quaternion":r=this._slerp;break;case"string":case"bool":i=Array,r=this._select;break;default:r=this._lerp}this.buffer=new i(n*4),this._mixBufferRegion=r,this.cumulativeWeight=0,this.useCount=0,this.referenceCount=0}Rc.prototype={constructor:Rc,accumulate:function(t,e){var n=this.buffer,i=this.valueSize,r=t*i+i,a=this.cumulativeWeight;if(a===0){for(var s=0;s!==i;++s)n[r+s]=n[s];a=e}else{a+=e;var o=e/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a},apply:function(t){var e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.binding;if(this.cumulativeWeight=0,r<1){var s=e*3;this._mixBufferRegion(n,i,s,1-r,e)}for(var o=e,c=e+e;o!==c;++o)if(n[o]!==n[o+e]){a.setValue(n,i);break}},saveOriginalState:function(){var t=this.binding,e=this.buffer,n=this.valueSize,i=n*3;t.getValue(e,i);for(var r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this.cumulativeWeight=0},restoreOriginalState:function(){var t=this.valueSize*3;this.binding.setValue(this.buffer,t)},_select:function(t,e,n,i,r){if(i>=.5)for(var a=0;a!==r;++a)t[e+a]=t[n+a]},_slerp:function(t,e,n,i,r){Wt.slerpFlat(t,e,t,e,t,n,i)},_lerp:function(t,e,n,i,r){for(var a=1-i,s=0;s!==r;++s){var o=e+s;t[o]=t[o]*a+t[n+s]*i}}};function Ft(t,e,n){this.path=e,this.parsedPath=n||Ft.parseTrackName(e),this.node=Ft.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t}Ft.prototype={constructor:Ft,getValue:function(e,n){this.bind(),this.getValue(e,n)},setValue:function(e,n){this.bind(),this.setValue(e,n)},bind:function(){var t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=Ft.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("  trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){var a=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("  can not bind to material as node does not have a material",this);return}if(!t.material.materials){console.error("  can not bind to material.materials as node.material does not have a materials array",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("  can not bind to bones as node does not have a skeleton",this);return}t=t.skeleton.bones;for(var s=0;s<t.length;s++)if(t[s].name===a){a=s;break}break;default:if(t[n]===void 0){console.error("  can not bind to objectName of node, undefined",this);return}t=t[n]}if(a!==void 0){if(t[a]===void 0){console.error("  trying to bind to objectIndex of objectName, but is undefined:",this,t);return}t=t[a]}}var o=t[i];if(o===void 0){var c=e.nodeName;console.error("  trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}var l=this.Versioning.None;t.needsUpdate!==void 0?(l=this.Versioning.NeedsUpdate,this.targetObject=t):t.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate,this.targetObject=t);var h=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry",this);return}if(!t.geometry.morphTargets){console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets",this);return}for(var s=0;s<this.node.geometry.morphTargets.length;s++)if(t.geometry.morphTargets[s].name===r){r=s;break}}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):o.length!==void 0?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][l]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Object.assign(Ft.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},_getValue_unbound:Ft.prototype.getValue,_setValue_unbound:Ft.prototype.setValue,BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,n){e[n]=this.node[this.propertyName]},function(e,n){for(var i=this.resolvedProperty,r=0,a=i.length;r!==a;++r)e[n++]=i[r]},function(e,n){e[n]=this.resolvedProperty[this.propertyIndex]},function(e,n){this.resolvedProperty.toArray(e,n)}],SetterByBindingTypeAndVersioning:[[function(e,n){this.node[this.propertyName]=e[n]},function(e,n){this.node[this.propertyName]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.node[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){for(var i=this.resolvedProperty,r=0,a=i.length;r!==a;++r)i[r]=e[n++]},function(e,n){for(var i=this.resolvedProperty,r=0,a=i.length;r!==a;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0},function(e,n){for(var i=this.resolvedProperty,r=0,a=i.length;r!==a;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty[this.propertyIndex]=e[n]},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty.fromArray(e,n)},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}]]});Ft.Composite=function(t,e,n){var i=n||Ft.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)};Ft.Composite.prototype={constructor:Ft.Composite,getValue:function(t,e){this.bind();var n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)},setValue:function(t,e){for(var n=this._bindings,i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)},bind:function(){for(var t=this._bindings,e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()},unbind:function(){for(var t=this._bindings,e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}};Ft.create=function(t,e,n){return t&&t.isAnimationObjectGroup?new Ft.Composite(t,e,n):new Ft(t,e,n)};Ft.parseTrackName=function(t){var e=/^((?:[\w-]+[\/:])*)([\w-]+)?(?:\.([\w-]+)(?:\[(.+)\])?)?\.([\w-]+)(?:\[(.+)\])?$/,n=e.exec(t);if(!n)throw new Error("cannot parse trackName at all: "+t);var i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]};if(i.propertyName===null||i.propertyName.length===0)throw new Error("can not parse propertyName from trackName: "+t);return i};Ft.findNode=function(t,e){if(!e||e===""||e==="root"||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){var n=function(s){for(var o=0;o<s.bones.length;o++){var c=s.bones[o];if(c.name===e)return c}return null},i=n(t.skeleton);if(i)return i}if(t.children){var r=function(s){for(var o=0;o<s.length;o++){var c=s[o];if(c.name===e||c.uuid===e)return c;var l=r(c.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null};function Nu(t){this.uuid=Qe.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;var e={};this._indicesByUUID=e;for(var n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};var r=this;this.stats={objects:{get total(){return r._objects.length},get inUse(){return this.total-r.nCachedObjects_}},get bindingsPerObject(){return r._bindings.length}}}Nu.prototype={constructor:Nu,isAnimationObjectGroup:!0,add:function(t){for(var e=this._objects,n=e.length,i=this.nCachedObjects_,r=this._indicesByUUID,a=this._paths,s=this._parsedPaths,o=this._bindings,c=o.length,l=0,h=arguments.length;l!==h;++l){var u=arguments[l],f=u.uuid,p=r[f],g=void 0;if(p===void 0){p=n++,r[f]=p,e.push(u);for(var d=0,m=c;d!==m;++d)o[d].push(new Ft(u,a[d],s[d]))}else if(p<i){g=e[p];var v=--i,_=e[v];r[_.uuid]=p,e[p]=_,r[f]=v,e[v]=u;for(var d=0,m=c;d!==m;++d){var x=o[d],y=x[v],b=x[p];x[p]=y,b===void 0&&(b=new Ft(u,a[d],s[d])),x[v]=b}}else e[p]!==g&&console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")}this.nCachedObjects_=i},remove:function(t){for(var e=this._objects,n=this.nCachedObjects_,i=this._indicesByUUID,r=this._bindings,a=r.length,s=0,o=arguments.length;s!==o;++s){var c=arguments[s],l=c.uuid,h=i[l];if(h!==void 0&&h>=n){var u=n++,f=e[u];i[f.uuid]=h,e[h]=f,i[l]=u,e[u]=c;for(var p=0,g=a;p!==g;++p){var d=r[p],m=d[u],v=d[h];d[h]=m,d[u]=v}}}this.nCachedObjects_=n},uncache:function(t){for(var e=this._objects,n=e.length,i=this.nCachedObjects_,r=this._indicesByUUID,a=this._bindings,s=a.length,o=0,c=arguments.length;o!==c;++o){var l=arguments[o],h=l.uuid,u=r[h];if(u!==void 0)if(delete r[h],u<i){var f=--i,p=e[f],g=--n,d=e[g];r[p.uuid]=u,e[u]=p,r[d.uuid]=f,e[f]=d,e.pop();for(var m=0,v=s;m!==v;++m){var _=a[m],x=_[f],y=_[g];_[u]=x,_[f]=y,_.pop()}}else{var g=--n,d=e[g];r[d.uuid]=u,e[u]=d,e.pop();for(var m=0,v=s;m!==v;++m){var _=a[m];_[u]=_[g],_.pop()}}}this.nCachedObjects_=i},subscribe_:function(t,e){var n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(i!==void 0)return r[i];var a=this._paths,s=this._parsedPaths,o=this._objects,c=o.length,l=this.nCachedObjects_,h=new Array(c);i=r.length,n[t]=i,a.push(t),s.push(e),r.push(h);for(var u=l,f=o.length;u!==f;++u){var p=o[u];h[u]=new Ft(p,t,e)}return h},unsubscribe_:function(t){var e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){var i=this._paths,r=this._parsedPaths,a=this._bindings,s=a.length-1,o=a[s],c=t[s];e[c]=n,a[n]=o,a.pop(),r[n]=r[s],r.pop(),i[n]=i[s],i.pop()}}};function Bu(t,e,n){this._mixer=t,this._clip=e,this._localRoot=n||null;for(var i=e.tracks,r=i.length,a=new Array(r),s={endingStart:Yr,endingEnd:Yr},o=0;o!==r;++o){var c=i[o].createInterpolant(null);a[o]=c,c.settings=s}this._interpolantSettings=s,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=av,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}Bu.prototype={constructor:Bu,play:function(){return this._mixer._activateAction(this),this},stop:function(){return this._mixer._deactivateAction(this),this.reset()},reset:function(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(t){return this._startTime=t,this},setLoop:function(t,e){return this.loop=t,this.repetitions=e,this},setEffectiveWeight:function(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(t){return this._scheduleFading(t,0,1)},fadeOut:function(t){return this._scheduleFading(t,1,0)},crossFadeFrom:function(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){var i=this._clip.duration,r=t._clip.duration,a=r/i,s=i/r;t.warp(1,a,e),this.warp(s,1,e)}return this},crossFadeTo:function(t,e,n){return t.crossFadeFrom(this,e,n)},stopFading:function(){var t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this},setEffectiveTimeScale:function(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(t){return this.timeScale=this._clip.duration/t,this.stopWarping()},syncWith:function(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()},halt:function(t){return this.warp(this._effectiveTimeScale,0,t)},warp:function(t,e,n){var i=this._mixer,r=i.time,a=this._timeScaleInterpolant,s=this.timeScale;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);var o=a.parameterPositions,c=a.sampleValues;return o[0]=r,o[1]=r+n,c[0]=t/s,c[1]=e/s,this},stopWarping:function(){var t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},_update:function(t,e,n,i){var r=this._startTime;if(r!==null){var a=(t-r)*n;if(a<0||n===0)return;this._startTime=null,e=n*a}e*=this._updateTimeScale(t);var s=this._updateTime(e),o=this._updateWeight(t);if(o>0)for(var c=this._interpolants,l=this._propertyBindings,h=0,u=c.length;h!==u;++h)c[h].evaluate(s),l[h].accumulate(i,o)},_updateWeight:function(t){var e=0;if(this.enabled){e=this.weight;var n=this._weightInterpolant;if(n!==null){var i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e},_updateTimeScale:function(t){var e=0;if(!this.paused){e=this.timeScale;var n=this._timeScaleInterpolant;if(n!==null){var i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e},_updateTime:function(t){var e=this.time+t;if(t===0)return e;var n=this._clip.duration,i=this.loop,r=this._loopCount;if(i===rv){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(e>=n)e=n;else if(e<0)e=0;else break e;this.clampWhenFinished?this.paused=!0:this.enabled=!1,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{var a=i===sv;if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),e>=n||e<0){var s=Math.floor(e/n);e-=n*s,r+=Math.abs(s);var o=this.repetitions-r;if(o<0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,e=t>0?n:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(o===0){var c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:s})}}if(a&&(r&1)===1)return this.time=e,n-e}return this.time=e,e},_setEndings:function(t,e,n){var i=this._interpolantSettings;n?(i.endingStart=Rr,i.endingEnd=Rr):(t?i.endingStart=this.zeroSlopeAtStart?Rr:Yr:i.endingStart=bo,e?i.endingEnd=this.zeroSlopeAtEnd?Rr:Yr:i.endingEnd=bo)},_scheduleFading:function(t,e,n){var i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);var s=a.parameterPositions,o=a.sampleValues;return s[0]=r,o[0]=e,s[1]=r+t,o[1]=n,this}};function qf(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Object.assign(qf.prototype,Kn.prototype,{clipAction:function(t,e){var n=e||this._root,i=n.uuid,r=typeof t=="string"?Un.findByName(n,t):t,a=r!==null?r.uuid:t,s=this._actionsByClip[a],o=null;if(s!==void 0){var c=s.actionByRoot[i];if(c!==void 0)return c;o=s.knownActions[0],r===null&&(r=o._clip)}if(r===null)return null;var l=new Bu(this,r,e);return this._bindAction(l,o),this._addInactiveAction(l,a,i),l},existingAction:function(t,e){var n=e||this._root,i=n.uuid,r=typeof t=="string"?Un.findByName(n,t):t,a=r?r.uuid:t,s=this._actionsByClip[a];return s!==void 0&&s.actionByRoot[i]||null},stopAllAction:function(){var t=this._actions,e=this._nActiveActions,n=this._bindings,i=this._nActiveBindings;this._nActiveActions=0,this._nActiveBindings=0;for(var r=0;r!==e;++r)t[r].reset();for(var r=0;r!==i;++r)n[r].useCount=0;return this},update:function(t){t*=this.timeScale;for(var e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1,s=0;s!==n;++s){var o=e[s];o.enabled&&o._update(i,t,r,a)}for(var c=this._bindings,l=this._nActiveBindings,s=0;s!==l;++s)c[s].apply(a);return this},getRoot:function(){return this._root},uncacheClip:function(t){var e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){for(var a=r.knownActions,s=0,o=a.length;s!==o;++s){var c=a[s];this._deactivateAction(c);var l=c._cacheIndex,h=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=l,e[l]=h,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}},uncacheRoot:function(t){var e=t.uuid,n=this._actionsByClip;for(var i in n){var r=n[i].actionByRoot,a=r[e];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}var s=this._bindingsByRootAndName,o=s[e];if(o!==void 0)for(var c in o){var l=o[c];l.restoreOriginalState(),this._removeInactiveBinding(l)}},uncacheAction:function(t,e){var n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});Object.assign(qf.prototype,{_bindAction:function(t,e){var n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,s=t._interpolants,o=n.uuid,c=this._bindingsByRootAndName,l=c[o];l===void 0&&(l={},c[o]=l);for(var h=0;h!==r;++h){var u=i[h],f=u.name,p=l[f];if(p!==void 0)a[h]=p;else{if(p=a[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,o,f));continue}var g=e&&e._propertyBindings[h].binding.parsedPath;p=new Rc(Ft.create(n,f,g),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,o,f),a[h]=p}s[h].resultBuffer=p.buffer}},_activateAction:function(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){var e=(t._localRoot||this._root).uuid,n=t._clip.uuid,i=this._actionsByClip[n];this._bindAction(t,i&&i.knownActions[0]),this._addInactiveAction(t,n,e)}for(var r=t._propertyBindings,a=0,s=r.length;a!==s;++a){var o=r[a];o.useCount++===0&&(this._lendBinding(o),o.saveOriginalState())}this._lendAction(t)}},_deactivateAction:function(t){if(this._isActiveAction(t)){for(var e=t._propertyBindings,n=0,i=e.length;n!==i;++n){var r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;var t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}},_isActiveAction:function(t){var e=t._cacheIndex;return e!==null&&e<this._nActiveActions},_addInactiveAction:function(t,e,n){var i=this._actions,r=this._actionsByClip,a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{var s=a.knownActions;t._byClipCacheIndex=s.length,s.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t},_removeInactiveAction:function(t){var e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;var r=t._clip.uuid,a=this._actionsByClip,s=a[r],o=s.knownActions,c=o[o.length-1],l=t._byClipCacheIndex;c._byClipCacheIndex=l,o[l]=c,o.pop(),t._byClipCacheIndex=null;var h=s.actionByRoot,u=(e._localRoot||this._root).uuid;delete h[u],o.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)},_removeInactiveBindingsForAction:function(t){for(var e=t._propertyBindings,n=0,i=e.length;n!==i;++n){var r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}},_lendAction:function(t){var e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackAction:function(t){var e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_addInactiveBinding:function(t,e,n){var i=this._bindingsByRootAndName,r=i[e],a=this._bindings;r===void 0&&(r={},i[e]=r),r[n]=t,t._cacheIndex=a.length,a.push(t)},_removeInactiveBinding:function(t){var e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,s=a[i],o=e[e.length-1],c=t._cacheIndex;o._cacheIndex=c,e[c]=o,e.pop(),delete s[r];e:{for(var l in s)break e;delete a[i]}},_lendBinding:function(t){var e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackBinding:function(t){var e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_lendControlInterpolant:function(){var t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new Ko(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n},_takeBackControlInterpolant:function(t){var e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1)});function Pc(t){typeof t=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),t=arguments[1]),this.value=t}Pc.prototype.clone=function(){return new Pc(this.value.clone===void 0?this.value:this.value.clone())};function ua(){ze.call(this),this.type="InstancedBufferGeometry",this.maxInstancedCount=void 0}ua.prototype=Object.create(ze.prototype);ua.prototype.constructor=ua;ua.prototype.isInstancedBufferGeometry=!0;ua.prototype.addGroup=function(t,e,n){this.groups.push({start:t,count:e,materialIndex:n})};ua.prototype.copy=function(t){var e=t.index;e!==null&&this.setIndex(e.clone());var n=t.attributes;for(var i in n){var r=n[i];this.addAttribute(i,r.clone())}for(var a=t.groups,s=0,o=a.length;s<o;s++){var c=a[s];this.addGroup(c.start,c.count,c.materialIndex)}return this};function zu(t,e,n,i){this.uuid=Qe.generateUUID(),this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}zu.prototype={constructor:zu,isInterleavedBufferAttribute:!0,get count(){return this.data.count},get array(){return this.data.array},setX:function(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this},setY:function(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this},setZ:function(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this},setW:function(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}};function Ps(t,e){this.uuid=Qe.generateUUID(),this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.dynamic=!1,this.updateRange={offset:0,count:-1},this.onUploadCallback=function(){},this.version=0}Ps.prototype={constructor:Ps,isInterleavedBuffer:!0,set needsUpdate(t){t===!0&&this.version++},setArray:function(t){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=t!==void 0?t.length/this.stride:0,this.array=t},setDynamic:function(t){return this.dynamic=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.dynamic=t.dynamic,this},copyAt:function(t,e,n){t*=this.stride,n*=e.stride;for(var i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this},set:function(t,e){return e===void 0&&(e=0),this.array.set(t,e),this},clone:function(){return new this.constructor().copy(this)},onUpload:function(t){return this.onUploadCallback=t,this}};function Ds(t,e,n){Ps.call(this,t,e),this.meshPerAttribute=n||1}Ds.prototype=Object.create(Ps.prototype);Ds.prototype.constructor=Ds;Ds.prototype.isInstancedInterleavedBuffer=!0;Ds.prototype.copy=function(t){return Ps.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this};function Fs(t,e,n){Ee.call(this,t,e),this.meshPerAttribute=n||1}Fs.prototype=Object.create(Ee.prototype);Fs.prototype.constructor=Fs;Fs.prototype.isInstancedBufferAttribute=!0;Fs.prototype.copy=function(t){return Ee.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this};function Gu(t,e,n,i){this.ray=new dr(t,e),this.near=n||0,this.far=i||1/0,this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Op(t,e){return t.distance-e.distance}function Vu(t,e,n,i){if(t.visible!==!1&&(t.raycast(e,n),i===!0))for(var r=t.children,a=0,s=r.length;a<s;a++)Vu(r[a],e,n,!0)}Gu.prototype={constructor:Gu,linePrecision:1,set:function(t,e){this.ray.set(t,e)},setFromCamera:function(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize()):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(t,e){var n=[];return Vu(t,this,n,e),n.sort(Op),n},intersectObjects:function(t,e){var n=[];if(Array.isArray(t)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),n;for(var i=0,r=t.length;i<r;i++)Vu(t[i],this,n,e);return n.sort(Op),n}};function Hu(t){this.autoStart=t!==void 0?t:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}Hu.prototype={constructor:Hu,start:function(){this.startTime=(performance||Date).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},stop:function(){this.getElapsedTime(),this.running=!1},getElapsedTime:function(){return this.getDelta(),this.elapsedTime},getDelta:function(){var t=0;if(this.autoStart&&!this.running&&this.start(),this.running){var e=(performance||Date).now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function hT(t){this.points=t;var e=[],n={x:0,y:0,z:0},i,r,a,s,o,c,l,h,u;this.initFromArray=function(p){this.points=[];for(var g=0;g<p.length;g++)this.points[g]={x:p[g][0],y:p[g][1],z:p[g][2]}},this.getPoint=function(p){return i=(this.points.length-1)*p,r=Math.floor(i),a=i-r,e[0]=r===0?r:r-1,e[1]=r,e[2]=r>this.points.length-2?this.points.length-1:r+1,e[3]=r>this.points.length-3?this.points.length-1:r+2,c=this.points[e[0]],l=this.points[e[1]],h=this.points[e[2]],u=this.points[e[3]],s=a*a,o=a*s,n.x=f(c.x,l.x,h.x,u.x,a,s,o),n.y=f(c.y,l.y,h.y,u.y,a,s,o),n.z=f(c.z,l.z,h.z,u.z,a,s,o),n},this.getControlPointsArray=function(){var p,g,d=this.points.length,m=[];for(p=0;p<d;p++)g=this.points[p],m[p]=[g.x,g.y,g.z];return m},this.getLength=function(p){var g,d,m,v,_=0,x=0,y=0,b=new U,E=new U,S=[],M=0;for(S[0]=0,p||(p=100),m=this.points.length*p,b.copy(this.points[0]),g=1;g<m;g++)d=g/m,v=this.getPoint(d),E.copy(v),M+=E.distanceTo(b),b.copy(v),_=(this.points.length-1)*d,x=Math.floor(_),x!==y&&(S[x]=M,y=x);return S[S.length]=M,{chunks:S,total:M}},this.reparametrizeByArcLength=function(p){var g,d,m,v,_,x,y,b,E=[],S=new U,M=this.getLength();for(E.push(S.copy(this.points[0]).clone()),g=1;g<this.points.length;g++){for(x=M.chunks[g]-M.chunks[g-1],y=Math.ceil(p*x/M.total),v=(g-1)/(this.points.length-1),_=g/(this.points.length-1),d=1;d<y-1;d++)m=v+d*(1/y)*(_-v),b=this.getPoint(m),E.push(S.copy(b).clone());E.push(S.copy(this.points[g]).clone())}this.points=E};function f(p,g,d,m,v,_,x){var y=(d-p)*.5,b=(m-g)*.5;return(2*(g-d)+y+b)*x+(-3*(g-d)-2*y-b)*_+y*v+g}}function Wu(t,e,n){return this.radius=t!==void 0?t:1,this.phi=e!==void 0?e:0,this.theta=n!==void 0?n:0,this}Wu.prototype={constructor:Wu,set:function(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this},makeSafe:function(){var t=1e-6;return this.phi=Math.max(t,Math.min(Math.PI-t,this.phi)),this},setFromVector3:function(t){return this.radius=t.length(),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t.x,t.z),this.phi=Math.acos(Qe.clamp(t.y/this.radius,-1,1))),this}};function Xu(t,e,n){return this.radius=t!==void 0?t:1,this.theta=e!==void 0?e:0,this.y=n!==void 0?n:0,this}Xu.prototype={constructor:Xu,set:function(t,e,n){return this.radius=t,this.theta=e,this.y=n,this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this},setFromVector3:function(t){return this.radius=Math.sqrt(t.x*t.x+t.z*t.z),this.theta=Math.atan2(t.x,t.z),this.y=t.y,this}};function Qt(t,e){$t.call(this,t,e),this.animationsMap={},this.animationsList=[];var n=this.geometry.morphTargets.length,i="__default",r=0,a=n-1,s=n/1;this.createAnimation(i,r,a,s),this.setAnimationWeight(i,1)}Qt.prototype=Object.create($t.prototype);Qt.prototype.constructor=Qt;Qt.prototype.createAnimation=function(t,e,n,i){var r={start:e,end:n,length:n-e+1,fps:i,duration:(n-e)/i,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[t]=r,this.animationsList.push(r)};Qt.prototype.autoCreateAnimations=function(t){for(var e=/([a-z]+)_?(\d+)/i,n,i={},r=this.geometry,a=0,s=r.morphTargets.length;a<s;a++){var o=r.morphTargets[a],c=o.name.match(e);if(c&&c.length>1){var l=c[1];i[l]||(i[l]={start:1/0,end:-1/0});var h=i[l];a<h.start&&(h.start=a),a>h.end&&(h.end=a),n||(n=l)}}for(var l in i){var h=i[l];this.createAnimation(l,h.start,h.end,t)}this.firstAnimation=n};Qt.prototype.setAnimationDirectionForward=function(t){var e=this.animationsMap[t];e&&(e.direction=1,e.directionBackwards=!1)};Qt.prototype.setAnimationDirectionBackward=function(t){var e=this.animationsMap[t];e&&(e.direction=-1,e.directionBackwards=!0)};Qt.prototype.setAnimationFPS=function(t,e){var n=this.animationsMap[t];n&&(n.fps=e,n.duration=(n.end-n.start)/n.fps)};Qt.prototype.setAnimationDuration=function(t,e){var n=this.animationsMap[t];n&&(n.duration=e,n.fps=(n.end-n.start)/n.duration)};Qt.prototype.setAnimationWeight=function(t,e){var n=this.animationsMap[t];n&&(n.weight=e)};Qt.prototype.setAnimationTime=function(t,e){var n=this.animationsMap[t];n&&(n.time=e)};Qt.prototype.getAnimationTime=function(t){var e=0,n=this.animationsMap[t];return n&&(e=n.time),e};Qt.prototype.getAnimationDuration=function(t){var e=-1,n=this.animationsMap[t];return n&&(e=n.duration),e};Qt.prototype.playAnimation=function(t){var e=this.animationsMap[t];e?(e.time=0,e.active=!0):console.warn("THREE.MorphBlendMesh: animation["+t+"] undefined in .playAnimation()")};Qt.prototype.stopAnimation=function(t){var e=this.animationsMap[t];e&&(e.active=!1)};Qt.prototype.update=function(t){for(var e=0,n=this.animationsList.length;e<n;e++){var i=this.animationsList[e];if(i.active){var r=i.duration/i.length;i.time+=i.direction*t,i.mirroredLoop?(i.time>i.duration||i.time<0)&&(i.direction*=-1,i.time>i.duration&&(i.time=i.duration,i.directionBackwards=!0),i.time<0&&(i.time=0,i.directionBackwards=!1)):(i.time=i.time%i.duration,i.time<0&&(i.time+=i.duration));var a=i.start+Qe.clamp(Math.floor(i.time/r),0,i.length-1),s=i.weight;a!==i.currentFrame&&(this.morphTargetInfluences[i.lastFrame]=0,this.morphTargetInfluences[i.currentFrame]=1*s,this.morphTargetInfluences[a]=0,i.lastFrame=i.currentFrame,i.currentFrame=a);var o=i.time%r/r;i.directionBackwards&&(o=1-o),i.currentFrame!==i.lastFrame?(this.morphTargetInfluences[i.currentFrame]=o*s,this.morphTargetInfluences[i.lastFrame]=(1-o)*s):this.morphTargetInfluences[i.currentFrame]=s}}};function nl(t){De.call(this),this.material=t,this.render=function(e){}}nl.prototype=Object.create(De.prototype);nl.prototype.constructor=nl;nl.prototype.isImmediateRenderObject=!0;function il(t,e,n,i){this.object=t,this.size=e!==void 0?e:1;var r=n!==void 0?n:16711680,a=i!==void 0?i:1,s=0,o=this.object.geometry;o&&o.isGeometry?s=o.faces.length*3:o&&o.isBufferGeometry&&(s=o.attributes.normal.count);var c=new ze,l=new ot(s*2*3,3);c.addAttribute("position",l),Tt.call(this,c,new kt({color:r,linewidth:a})),this.matrixAutoUpdate=!1,this.update()}il.prototype=Object.create(Tt.prototype);il.prototype.constructor=il;il.prototype.update=function(){var t=new U,e=new U,n=new ei;return function(){var r=["a","b","c"];this.object.updateMatrixWorld(!0),n.getNormalMatrix(this.object.matrixWorld);var a=this.object.matrixWorld,s=this.geometry.attributes.position,o=this.object.geometry;if(o&&o.isGeometry)for(var c=o.vertices,l=o.faces,h=0,u=0,f=l.length;u<f;u++)for(var p=l[u],g=0,d=p.vertexNormals.length;g<d;g++){var m=c[p[r[g]]],v=p.vertexNormals[g];t.copy(m).applyMatrix4(a),e.copy(v).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t),s.setXYZ(h,t.x,t.y,t.z),h=h+1,s.setXYZ(h,e.x,e.y,e.z),h=h+1}else if(o&&o.isBufferGeometry)for(var _=o.attributes.position,x=o.attributes.normal,h=0,g=0,d=_.count;g<d;g++)t.set(_.getX(g),_.getY(g),_.getZ(g)).applyMatrix4(a),e.set(x.getX(g),x.getY(g),x.getZ(g)),e.applyMatrix3(n).normalize().multiplyScalar(this.size).add(t),s.setXYZ(h,t.x,t.y,t.z),h=h+1,s.setXYZ(h,e.x,e.y,e.z),h=h+1;return s.needsUpdate=!0,this}}();function Is(t){De.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;for(var e=new ze,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1],i=0,r=1,a=32;i<a;i++,r++){var s=i/a*Math.PI*2,o=r/a*Math.PI*2;n.push(Math.cos(s),Math.sin(s),1,Math.cos(o),Math.sin(o),1)}e.addAttribute("position",new ot(n,3));var c=new kt({fog:!1});this.cone=new Tt(e,c),this.add(this.cone),this.update()}Is.prototype=Object.create(De.prototype);Is.prototype.constructor=Is;Is.prototype.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()};Is.prototype.update=function(){var t=new U,e=new U;return function(){var i=this.light.distance?this.light.distance:1e3,r=i*Math.tan(this.light.angle);this.cone.scale.set(r,r,i),t.setFromMatrixPosition(this.light.matrixWorld),e.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(e.sub(t)),this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();function Us(t){this.bones=this.getBoneList(t);for(var e=new ze,n=[],i=[],r=new Ve(0,0,1),a=new Ve(0,1,0),s=0;s<this.bones.length;s++){var o=this.bones[s];o.parent&&o.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),i.push(r.r,r.g,r.b),i.push(a.r,a.g,a.b))}e.addAttribute("position",new ot(n,3)),e.addAttribute("color",new ot(i,3));var c=new kt({vertexColors:ma,depthTest:!1,depthWrite:!1,transparent:!0});Tt.call(this,e,c),this.root=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.update()}Us.prototype=Object.create(Tt.prototype);Us.prototype.constructor=Us;Us.prototype.getBoneList=function(t){var e=[];t&&t.isBone&&e.push(t);for(var n=0;n<t.children.length;n++)e.push.apply(e,this.getBoneList(t.children[n]));return e};Us.prototype.update=function(){var t=new U,e=new Ye,n=new Ye;return function(){var r=this.geometry,a=r.getAttribute("position");n.getInverse(this.root.matrixWorld);for(var s=0,o=0;s<this.bones.length;s++){var c=this.bones[s];c.parent&&c.parent.isBone&&(e.multiplyMatrices(n,c.matrixWorld),t.setFromMatrixPosition(e),a.setXYZ(o,t.x,t.y,t.z),e.multiplyMatrices(n,c.parent.matrixWorld),t.setFromMatrixPosition(e),a.setXYZ(o+1,t.x,t.y,t.z),o+=2)}r.getAttribute("position").needsUpdate=!0}}();function ks(t,e){this.light=t,this.light.updateMatrixWorld();var n=new ea(e,4,2),i=new Tn({wireframe:!0,fog:!1});i.color.copy(this.light.color).multiplyScalar(this.light.intensity),$t.call(this,n,i),this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1}ks.prototype=Object.create($t.prototype);ks.prototype.constructor=ks;ks.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()};ks.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};function Os(t){De.call(this),this.light=t,this.light.updateMatrixWorld();var e=new Tn({color:t.color,fog:!1}),n=new Tn({color:t.color,fog:!1,wireframe:!0}),i=new ze;i.addAttribute("position",new Ee(new Float32Array(6*3),3)),this.add(new $t(i,e)),this.add(new $t(i,n)),this.update()}Os.prototype=Object.create(De.prototype);Os.prototype.constructor=Os;Os.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose(),this.children[1].geometry.dispose(),this.children[1].material.dispose()};Os.prototype.update=function(){var t=new U,e=new U;return function(){var i=this.children[0],r=this.children[1];if(this.light.target){t.setFromMatrixPosition(this.light.matrixWorld),e.setFromMatrixPosition(this.light.target.matrixWorld);var a=e.clone().sub(t);i.lookAt(a),r.lookAt(a)}i.material.color.copy(this.light.color).multiplyScalar(this.light.intensity),r.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);var s=this.light.width*.5,o=this.light.height*.5,c=i.geometry.getAttribute("position"),l=c.array;l[0]=s,l[1]=-o,l[2]=0,l[3]=s,l[4]=o,l[5]=0,l[6]=-s,l[7]=o,l[8]=0,l[9]=-s,l[10]=o,l[11]=0,l[12]=-s,l[13]=-o,l[14]=0,l[15]=s,l[16]=-o,l[17]=0,c.needsUpdate=!0}}();function Ns(t,e){De.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;var n=new Kr(e);n.rotateY(Math.PI*.5);var i=new Tn({vertexColors:ma,wireframe:!0}),r=n.getAttribute("position"),a=new Float32Array(r.count*3);n.addAttribute("color",new Ee(a,3)),this.add(new $t(n,i)),this.update()}Ns.prototype=Object.create(De.prototype);Ns.prototype.constructor=Ns;Ns.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()};Ns.prototype.update=function(){var t=new U,e=new Ve,n=new Ve;return function(){var r=this.children[0],a=r.geometry.getAttribute("color");e.copy(this.light.color).multiplyScalar(this.light.intensity),n.copy(this.light.groundColor).multiplyScalar(this.light.intensity);for(var s=0,o=a.count;s<o;s++){var c=s<o/2?e:n;a.setXYZ(s,c.r,c.g,c.b)}r.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate()),a.needsUpdate=!0}}();function rl(t,e,n,i){t=t||10,e=e||10,n=new Ve(n!==void 0?n:4473924),i=new Ve(i!==void 0?i:8947848);for(var r=e/2,a=t*2/e,s=[],o=[],c=0,l=0,h=-t;c<=e;c++,h+=a){s.push(-t,0,h,t,0,h),s.push(h,0,-t,h,0,t);var u=c===r?n:i;u.toArray(o,l),l+=3,u.toArray(o,l),l+=3,u.toArray(o,l),l+=3,u.toArray(o,l),l+=3}var f=new ze;f.addAttribute("position",new ot(s,3)),f.addAttribute("color",new ot(o,3));var p=new kt({vertexColors:ma});Tt.call(this,f,p)}rl.prototype=Object.create(Tt.prototype);rl.prototype.constructor=rl;function Dc(t,e,n,i,r,a){t=t||10,e=e||16,n=n||8,i=i||64,r=new Ve(r!==void 0?r:4473924),a=new Ve(a!==void 0?a:8947848);var s=[],o=[],c,l,h,u,f,p,g;for(u=0;u<=e;u++)h=u/e*(Math.PI*2),c=Math.sin(h)*t,l=Math.cos(h)*t,s.push(0,0,0),s.push(c,0,l),g=u&1?r:a,o.push(g.r,g.g,g.b),o.push(g.r,g.g,g.b);for(u=0;u<=n;u++)for(g=u&1?r:a,p=t-t/n*u,f=0;f<i;f++)h=f/i*(Math.PI*2),c=Math.sin(h)*p,l=Math.cos(h)*p,s.push(c,0,l),o.push(g.r,g.g,g.b),h=(f+1)/i*(Math.PI*2),c=Math.sin(h)*p,l=Math.cos(h)*p,s.push(c,0,l),o.push(g.r,g.g,g.b);var d=new ze;d.addAttribute("position",new ot(s,3)),d.addAttribute("color",new ot(o,3));var m=new kt({vertexColors:ma});Tt.call(this,d,m)}Dc.prototype=Object.create(Tt.prototype);Dc.prototype.constructor=Dc;function al(t,e,n,i){this.object=t,this.size=e!==void 0?e:1;var r=n!==void 0?n:16776960,a=i!==void 0?i:1,s=0,o=this.object.geometry;o&&o.isGeometry?s=o.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");var c=new ze,l=new ot(s*2*3,3);c.addAttribute("position",l),Tt.call(this,c,new kt({color:r,linewidth:a})),this.matrixAutoUpdate=!1,this.update()}al.prototype=Object.create(Tt.prototype);al.prototype.constructor=al;al.prototype.update=function(){var t=new U,e=new U,n=new ei;return function(){this.object.updateMatrixWorld(!0),n.getNormalMatrix(this.object.matrixWorld);for(var r=this.object.matrixWorld,a=this.geometry.attributes.position,s=this.object.geometry,o=s.vertices,c=s.faces,l=0,h=0,u=c.length;h<u;h++){var f=c[h],p=f.normal;t.copy(o[f.a]).add(o[f.b]).add(o[f.c]).divideScalar(3).applyMatrix4(r),e.copy(p).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t),a.setXYZ(l,t.x,t.y,t.z),l=l+1,a.setXYZ(l,e.x,e.y,e.z),l=l+1}return a.needsUpdate=!0,this}}();function Bs(t,e){De.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,e===void 0&&(e=1);var n=new ze;n.addAttribute("position",new ot([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));var i=new kt({fog:!1});this.add(new Hi(n,i)),n=new ze,n.addAttribute("position",new ot([0,0,0,0,0,1],3)),this.add(new Hi(n,i)),this.update()}Bs.prototype=Object.create(De.prototype);Bs.prototype.constructor=Bs;Bs.prototype.dispose=function(){var t=this.children[0],e=this.children[1];t.geometry.dispose(),t.material.dispose(),e.geometry.dispose(),e.material.dispose()};Bs.prototype.update=function(){var t=new U,e=new U,n=new U;return function(){t.setFromMatrixPosition(this.light.matrixWorld),e.setFromMatrixPosition(this.light.target.matrixWorld),n.subVectors(e,t);var r=this.children[0],a=this.children[1];r.lookAt(n),r.material.color.copy(this.light.color).multiplyScalar(this.light.intensity),a.lookAt(n),a.scale.z=n.length()}}();function sl(t){var e=new ze,n=new kt({color:16777215,vertexColors:_f}),i=[],r=[],a={},s=new Ve(16755200),o=new Ve(16711680),c=new Ve(43775),l=new Ve(16777215),h=new Ve(3355443);u("n1","n2",s),u("n2","n4",s),u("n4","n3",s),u("n3","n1",s),u("f1","f2",s),u("f2","f4",s),u("f4","f3",s),u("f3","f1",s),u("n1","f1",s),u("n2","f2",s),u("n3","f3",s),u("n4","f4",s),u("p","n1",o),u("p","n2",o),u("p","n3",o),u("p","n4",o),u("u1","u2",c),u("u2","u3",c),u("u3","u1",c),u("c","t",l),u("p","c",h),u("cn1","cn2",h),u("cn3","cn4",h),u("cf1","cf2",h),u("cf3","cf4",h);function u(p,g,d){f(p,d),f(g,d)}function f(p,g){i.push(0,0,0),r.push(g.r,g.g,g.b),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}e.addAttribute("position",new ot(i,3)),e.addAttribute("color",new ot(r,3)),Tt.call(this,e,n),this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update()}sl.prototype=Object.create(Tt.prototype);sl.prototype.constructor=sl;sl.prototype.update=function(){var t,e,n=new U,i=new on;function r(a,s,o,c){n.set(s,o,c).unproject(i);var l=e[a];if(l!==void 0)for(var h=t.getAttribute("position"),u=0,f=l.length;u<f;u++)h.setXYZ(l[u],n.x,n.y,n.z)}return function(){t=this.geometry,e=this.pointMap;var s=1,o=1;i.projectionMatrix.copy(this.camera.projectionMatrix),r("c",0,0,-1),r("t",0,0,1),r("n1",-1,-1,-1),r("n2",s,-1,-1),r("n3",-1,o,-1),r("n4",s,o,-1),r("f1",-1,-1,1),r("f2",s,-1,1),r("f3",-1,o,1),r("f4",s,o,1),r("u1",s*.7,o*1.1,-1),r("u2",-1*.7,o*1.1,-1),r("u3",0,o*2,-1),r("cf1",-1,0,1),r("cf2",s,0,1),r("cf3",0,-1,1),r("cf4",0,o,1),r("cn1",-1,0,-1),r("cn2",s,0,-1),r("cn3",0,-1,-1),r("cn4",0,o,-1),t.getAttribute("position").needsUpdate=!0}}();function zs(t,e){e===void 0&&(e=16776960);var n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new ze;r.setIndex(new Ee(n,1)),r.addAttribute("position",new Ee(i,3)),Tt.call(this,r,new kt({color:e})),t!==void 0&&this.update(t)}zs.prototype=Object.create(Tt.prototype);zs.prototype.constructor=zs;zs.prototype.update=function(){var t=new Ei;return function(n){if(n&&n.isBox3?t.copy(n):t.setFromObject(n),!t.isEmpty()){var i=t.min,r=t.max,a=this.geometry.attributes.position,s=a.array;s[0]=r.x,s[1]=r.y,s[2]=r.z,s[3]=i.x,s[4]=r.y,s[5]=r.z,s[6]=i.x,s[7]=i.y,s[8]=r.z,s[9]=r.x,s[10]=i.y,s[11]=r.z,s[12]=r.x,s[13]=r.y,s[14]=i.z,s[15]=i.x,s[16]=r.y,s[17]=i.z,s[18]=i.x,s[19]=i.y,s[20]=i.z,s[21]=r.x,s[22]=i.y,s[23]=i.z,a.needsUpdate=!0,this.geometry.computeBoundingSphere()}}}();var Pv=new ze;Pv.addAttribute("position",new ot([0,0,0,0,1,0],3));var Dv=new Wi(0,.5,1,5,1);Dv.translate(0,-.5,0);function fa(t,e,n,i,r,a){De.call(this),i===void 0&&(i=16776960),n===void 0&&(n=1),r===void 0&&(r=.2*n),a===void 0&&(a=.2*r),this.position.copy(e),this.line=new Hi(Pv,new kt({color:i})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new $t(Dv,new Tn({color:i})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}fa.prototype=Object.create(De.prototype);fa.prototype.constructor=fa;fa.prototype.setDirection=function(){var t=new U,e;return function(i){i.y>.99999?this.quaternion.set(0,0,0,1):i.y<-.99999?this.quaternion.set(1,0,0,0):(t.set(i.z,0,-i.x).normalize(),e=Math.acos(i.y),this.quaternion.setFromAxisAngle(t,e))}}();fa.prototype.setLength=function(t,e,n){e===void 0&&(e=.2*t),n===void 0&&(n=.2*e),this.line.scale.set(1,Math.max(0,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()};fa.prototype.setColor=function(t){this.line.material.color.copy(t),this.cone.material.color.copy(t)};function Fc(t){t=t||1;var e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new ze;i.addAttribute("position",new ot(e,3)),i.addAttribute("color",new ot(n,3));var r=new kt({vertexColors:ma});Tt.call(this,i,r)}Fc.prototype=Object.create(Tt.prototype);Fc.prototype.constructor=Fc;var Yf=function(){var t=new U,e=new r,n=new r,i=new r;function r(){}return r.prototype.init=function(a,s,o,c){this.c0=a,this.c1=o,this.c2=-3*a+3*s-2*o-c,this.c3=2*a-2*s+o+c},r.prototype.initNonuniformCatmullRom=function(a,s,o,c,l,h,u){var f=(s-a)/l-(o-a)/(l+h)+(o-s)/h,p=(o-s)/h-(c-s)/(h+u)+(c-o)/u;f*=h,p*=h,this.init(s,o,f,p)},r.prototype.initCatmullRom=function(a,s,o,c,l){this.init(s,o,l*(o-a),l*(c-s))},r.prototype.calc=function(a){var s=a*a,o=s*a;return this.c0+this.c1*a+this.c2*s+this.c3*o},ln.create(function(a){this.points=a||[],this.closed=!1},function(a){var s=this.points,o,c,l,h;h=s.length,h<2&&console.log("duh, you need at least 2 points"),o=(h-(this.closed?0:1))*a,c=Math.floor(o),l=o-c,this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s.length)+1)*s.length:l===0&&c===h-1&&(c=h-2,l=1);var u,f,p,g;if(this.closed||c>0?u=s[(c-1)%h]:(t.subVectors(s[0],s[1]).add(s[0]),u=t),f=s[c%h],p=s[(c+1)%h],this.closed||c+2<h?g=s[(c+2)%h]:(t.subVectors(s[h-1],s[h-2]).add(s[h-1]),g=t),this.type===void 0||this.type==="centripetal"||this.type==="chordal"){var d=this.type==="chordal"?.5:.25,m=Math.pow(u.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(p),d),_=Math.pow(p.distanceToSquared(g),d);v<1e-4&&(v=1),m<1e-4&&(m=v),_<1e-4&&(_=v),e.initNonuniformCatmullRom(u.x,f.x,p.x,g.x,m,v,_),n.initNonuniformCatmullRom(u.y,f.y,p.y,g.y,m,v,_),i.initNonuniformCatmullRom(u.z,f.z,p.z,g.z,m,v,_)}else if(this.type==="catmullrom"){var x=this.tension!==void 0?this.tension:.5;e.initCatmullRom(u.x,f.x,p.x,g.x,x),n.initCatmullRom(u.y,f.y,p.y,g.y,x),i.initCatmullRom(u.z,f.z,p.z,g.z,x)}var y=new U(e.calc(l),n.calc(l),i.calc(l));return y})}(),uT=ln.create(function(t){console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"),this.points=t===void 0?[]:t},function(t){var e=this.points,n=(e.length-1)*t,i=Math.floor(n),r=n-i,a=e[i==0?i:i-1],s=e[i],o=e[i>e.length-2?e.length-1:i+1],c=e[i>e.length-3?e.length-1:i+2],l=ml.interpolate;return new U(l(a.x,s.x,o.x,c.x,r),l(a.y,s.y,o.y,c.y,r),l(a.z,s.z,o.z,c.z,r))}),fT=ln.create(function(t,e,n,i){this.v0=t,this.v1=e,this.v2=n,this.v3=i},function(t){var e=Jt.b3;return new U(e(t,this.v0.x,this.v1.x,this.v2.x,this.v3.x),e(t,this.v0.y,this.v1.y,this.v2.y,this.v3.y),e(t,this.v0.z,this.v1.z,this.v2.z,this.v3.z))}),dT=ln.create(function(t,e,n){this.v0=t,this.v1=e,this.v2=n},function(t){var e=Jt.b2;return new U(e(t,this.v0.x,this.v1.x,this.v2.x),e(t,this.v0.y,this.v1.y,this.v2.y),e(t,this.v0.z,this.v1.z,this.v2.z))}),pT=ln.create(function(t,e){this.v1=t,this.v2=e},function(t){if(t===1)return this.v2.clone();var e=new U;return e.subVectors(this.v2,this.v1),e.multiplyScalar(t),e.add(this.v1),e});function Ic(t,e,n,i,r,a){Xi.call(this,t,e,n,n,i,r,a)}Ic.prototype=Object.create(Xi.prototype);Ic.prototype.constructor=Ic;var mT={createMultiMaterialObject:function(t,e){for(var n=new Fo,i=0,r=e.length;i<r;i++)n.add(new $t(t,e[i]));return n},detach:function(t,e,n){t.applyMatrix(e.matrixWorld),e.remove(t),n.add(t)},attach:function(t,e,n){var i=new Ye;i.getInverse(n.matrixWorld),t.applyMatrix(i),e.remove(t),n.add(t)}};function gT(t,e,n,i,r,a,s){return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),new zn(t,e,n,r,a,s)}var vT=0,_T=1;function xT(t){return console.warn("THREE.MeshFaceMaterial has been renamed to THREE.MultiMaterial."),new Qo(t)}function yT(t,e){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new cs(t,e)}function bT(t){return console.warn("THREE.Particle has been renamed to THREE.Sprite."),new Po(t)}function MT(t,e){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new cs(t,e)}function wT(t){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new ui(t)}function ET(t){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new ui(t)}function ST(t){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new ui(t)}function TT(t,e,n){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new U(t,e,n)}function AT(t,e){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."),new Ee(t,e).setDynamic(!0)}function CT(t,e){return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new So(t,e)}function LT(t,e){return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new To(t,e)}function RT(t,e){return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new Ao(t,e)}function PT(t,e){return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new Co(t,e)}function DT(t,e){return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new Gi(t,e)}function FT(t,e){return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new Lo(t,e)}function IT(t,e){return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new Vi(t,e)}function UT(t,e){return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new ot(t,e)}function kT(t,e){return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new Ro(t,e)}function Fv(t){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),Yf.call(this,t),this.type="catmullrom",this.closed=!0}Fv.prototype=Object.create(Yf.prototype);function OT(t,e){return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new zs(t,e)}function NT(t,e){return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new Tt(new ws(t.geometry),new kt({color:e!==void 0?e:16777215}))}rl.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};function BT(t,e){return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new Tt(new us(t.geometry),new kt({color:e!==void 0?e:16777215}))}function zT(t){return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new ni(t)}Object.assign(wo.prototype,{center:function(t){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},size:function(t){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(t)}});Object.assign(Ei.prototype,{center:function(t){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionSphere:function(t){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)},size:function(t){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(t)}});Nr.prototype.center=function(t){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(t)};Qe.random16=function(){return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."),Math.random()};Object.assign(ei.prototype,{flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},multiplyVector3:function(t){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},multiplyVector3Array:function(t){return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),this.applyToVector3Array(t)},applyToBuffer:function(t,e,n){return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),this.applyToBufferAttribute(t)}});Object.assign(Ye.prototype,{extractPosition:function(t){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(t)},flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},getPosition:function(){var t;return function(){return t===void 0&&(t=new U),console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),t.setFromMatrixColumn(this,3)}}(),setRotationFromQuaternion:function(t){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(t)},multiplyVector3:function(t){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."),t.applyProjection(this)},multiplyVector4:function(t){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector3Array:function(t){return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),this.applyToVector3Array(t)},rotateAxis:function(t){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),t.transformDirection(this)},crossVector:function(t){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBuffer:function(t,e,n){return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),this.applyToBufferAttribute(t)}});Fn.prototype.isIntersectionLine=function(t){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(t)};Wt.prototype.multiplyVector3=function(t){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),t.applyQuaternion(this)};Object.assign(dr.prototype,{isIntersectionBox:function(t){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionPlane:function(t){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(t)},isIntersectionSphere:function(t){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)}});Object.assign(zr.prototype,{extrude:function(t){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ti(this,t)},makeGeometry:function(t){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Ms(this,t)}});Object.assign(U.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(t){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(t)},getScaleFromMatrix:function(t){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(t)},getColumnFromMatrix:function(t,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,t)}});Ze.prototype.computeTangents=function(){console.warn("THREE.Geometry: .computeTangents() has been removed.")};Object.assign(De.prototype,{getChildByName:function(t){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(t)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(t,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,t)}});Object.defineProperties(De.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(t){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=t}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.defineProperties(Do.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});en.prototype.setLens=function(t,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(t)};Object.defineProperties(Ot.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(t){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(t){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=t}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(t){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=t}}});Object.defineProperties(Ee.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}}});Object.assign(ze.prototype,{addIndex:function(t){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(t)},addDrawCall:function(t,e,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(t,e)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")}});Object.defineProperties(ze.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(Pc.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(at.prototype,{wrapAround:{get:function(){console.warn("THREE."+this.type+": .wrapAround has been removed.")},set:function(){console.warn("THREE."+this.type+": .wrapAround has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE."+this.type+": .wrapRGB has been removed."),new Ve}}});Object.defineProperties(fi.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(mn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(t){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=t}}});Kn.prototype=Object.assign(Object.create({constructor:Kn,apply:function(t){console.warn("THREE.EventDispatcher: .apply is deprecated, just inherit or Object.assign the prototype to mix-in."),Object.assign(t,this)}}),Kn.prototype);Object.assign(If.prototype,{supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(t){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(t)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")}});Object.defineProperties(If.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=t}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=t}},shadowMapCullFace:{get:function(){return this.shadowMap.cullFace},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."),this.shadowMap.cullFace=t}}});Object.defineProperties(Ev.prototype,{cullFace:{get:function(){return this.renderReverseSided?pf:go},set:function(t){var e=t!==go;console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to "+e+"."),this.renderReverseSided=e}}});Object.defineProperties(Xs.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=t}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=t}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=t}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=t}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(t){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=t}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(t){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=t}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(t){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=t}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(t){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=t}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(t){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=t}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(t){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=t}}});Rs.prototype.load=function(t){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var e=this,n=new Wf;return n.load(t,function(i){e.setBuffer(i)}),this};Xf.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};var GT={merge:function(t,e,n){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");var i;e.isMesh&&(e.matrixAutoUpdate&&e.updateMatrix(),i=e.matrix,e=e.geometry),t.merge(e,i,n)},center:function(t){return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),t.center()}},VT={crossOrigin:void 0,loadTexture:function(t,e,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var r=new Zc;r.setCrossOrigin(this.crossOrigin);var a=r.load(t,n,void 0,i);return e&&(a.mapping=e),a},loadTextureCube:function(t,e,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var r=new Of;r.setCrossOrigin(this.crossOrigin);var a=r.load(t,n,void 0,i);return e&&(a.mapping=e),a},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")}};function HT(){console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."),this.projectVector=function(t,e){console.warn("THREE.Projector: .projectVector() is now vector.project()."),t.project(e)},this.unprojectVector=function(t,e){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),t.unproject(e)},this.pickingRay=function(){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}}function WT(){console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"),this.domElement=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),this.clear=function(){},this.render=function(){},this.setClearColor=function(){},this.setSize=function(){}}const XT=Object.freeze(Object.defineProperty({__proto__:null,AddEquation:wf,AddOperation:Hg,AdditiveBlending:xf,AlphaFormat:ev,AlwaysDepth:kg,AmbientLight:Mc,AnimationClip:Un,AnimationMixer:qf,AnimationObjectGroup:Nu,AnimationUtils:nn,ArcCurve:Ic,ArrowHelper:fa,Audio:Rs,AudioAnalyser:Xf,AudioContext:Hf,AudioListener:ku,AudioLoader:Wf,AxisHelper:Fc,BackSide:cr,BasicDepthPacking:pv,BasicShadowMap:c1,BinaryTextureLoader:kf,BlendingMode:wg,Bone:fc,BooleanKeyframeTrack:Ac,BoundingBoxHelper:OT,Box2:wo,Box3:Ei,BoxBufferGeometry:$r,BoxGeometry:Ss,BoxHelper:zs,BufferAttribute:Ee,BufferGeometry:ze,BufferGeometryLoader:Nf,ByteType:jg,Cache:Iu,Camera:on,CameraHelper:sl,CanvasRenderer:WT,CanvasTexture:mc,CatmullRomCurve3:Yf,CineonToneMapping:qg,CircleBufferGeometry:Es,CircleGeometry:Jo,ClampToEdgeWrapping:On,Clock:Hu,ClosedSplineCurve3:Fv,Color:Ve,ColorKeyframeTrack:Cc,CompressedTexture:hs,CompressedTextureLoader:Av,ConeBufferGeometry:Zo,ConeGeometry:$o,CubeCamera:Lc,CubeGeometry:Ss,CubeReflectionMapping:Xc,CubeRefractionMapping:sc,CubeTexture:hr,CubeTextureLoader:Of,CubeUVReflectionMapping:qc,CubeUVRefractionMapping:Yc,CubicBezierCurve:ca,CubicBezierCurve3:fT,CubicInterpolant:wc,CullFaceBack:go,CullFaceFront:pf,CullFaceFrontBack:o1,CullFaceNone:yg,Curve:ln,CurvePath:tl,CurveUtils:ml,CustomBlending:Mf,CylinderBufferGeometry:Wi,CylinderGeometry:ta,Cylindrical:Xu,DataTexture:jr,DataTextureLoader:cT,DefaultLoadingManager:Hn,DepthFormat:Or,DepthStencilFormat:is,DepthTexture:Io,DirectionalLight:bc,DirectionalLightHelper:Bs,DirectionalLightShadow:yc,DiscreteInterpolant:Ec,DodecahedronBufferGeometry:ms,DodecahedronGeometry:Bo,DoubleSide:Hs,DstAlphaFactor:Rg,DstColorFactor:Dg,DynamicBufferAttribute:AT,EdgesGeometry:ws,EdgesHelper:NT,EllipseCurve:Xi,EqualDepth:Ng,EquirectangularReflectionMapping:Af,EquirectangularRefractionMapping:oc,Euler:pr,EventDispatcher:Kn,ExtrudeGeometry:ti,Face3:zn,Face4:gT,FaceColors:_f,FaceNormalsHelper:al,FileLoader:ni,FlatShading:gf,Float32Attribute:UT,Float32BufferAttribute:ot,Float64Attribute:kT,Float64BufferAttribute:Ro,FloatType:ts,Fog:ls,FogExp2:os,Font:Vf,FontLoader:Lv,FrontFaceDirectionCCW:l1,FrontFaceDirectionCW:bg,FrontSide:Ha,Frustum:Eo,GammaEncoding:Df,Geometry:Ze,GeometryIdCount:Ff,GeometryUtils:GT,GreaterDepth:zg,GreaterEqualDepth:Bg,GridHelper:rl,Group:Fo,HalfFloatType:cc,HemisphereLight:gc,HemisphereLightHelper:Ns,IcosahedronBufferGeometry:ps,IcosahedronGeometry:No,ImageLoader:pl,ImageUtils:VT,ImmediateRenderObject:nl,InstancedBufferAttribute:Fs,InstancedBufferGeometry:ua,InstancedInterleavedBuffer:Ds,Int16Attribute:PT,Int16BufferAttribute:Co,Int32Attribute:FT,Int32BufferAttribute:Lo,Int8Attribute:CT,Int8BufferAttribute:So,IntType:Zg,InterleavedBuffer:Ps,InterleavedBufferAttribute:zu,Interpolant:En,InterpolateDiscrete:yo,InterpolateLinear:so,InterpolateSmooth:Zl,JSONLoader:Bf,KeyframeTrack:oa,LOD:Do,LatheBufferGeometry:ys,LatheGeometry:jo,Layers:hc,LensFlare:Fu,LessDepth:Og,LessEqualDepth:ac,Light:Ot,LightShadow:ga,Line:Hi,Line3:Nr,LineBasicMaterial:kt,LineCurve:Ti,LineCurve3:pT,LineDashedMaterial:sa,LinePieces:_T,LineSegments:Tt,LineStrip:vT,LinearEncoding:Mo,LinearFilter:wn,LinearInterpolant:Ko,LinearMipMapLinearFilter:dl,LinearMipMapNearestFilter:Lf,LinearToneMapping:Tf,Loader:Br,LoadingManager:Uf,LogLuvEncoding:u1,LoopOnce:rv,LoopPingPong:sv,LoopRepeat:av,LuminanceAlphaFormat:nv,LuminanceFormat:tv,MOUSE:s1,Material:at,MaterialLoader:Jc,Math:Qe,Matrix3:ei,Matrix4:Ye,MaxEquation:bu,Mesh:$t,MeshBasicMaterial:Tn,MeshDepthMaterial:fr,MeshFaceMaterial:xT,MeshLambertMaterial:aa,MeshNormalMaterial:ra,MeshPhongMaterial:fi,MeshPhysicalMaterial:na,MeshStandardMaterial:Si,MeshToonMaterial:ia,MinEquation:yu,MirroredRepeatWrapping:qr,MixOperation:Vg,MorphBlendMesh:Qt,MultiMaterial:Qo,MultiplyBlending:bf,MultiplyOperation:fl,NearestFilter:Nn,NearestMipMapLinearFilter:$c,NearestMipMapNearestFilter:jc,NeverDepth:Ug,NoBlending:vo,NoColors:Hc,NoToneMapping:$l,NormalBlending:Ws,NotEqualDepth:Gg,NumberKeyframeTrack:Ls,Object3D:De,ObjectLoader:Cv,OctahedronBufferGeometry:Kr,OctahedronGeometry:Oo,OneFactor:Ag,OneMinusDstAlphaFactor:Pg,OneMinusDstColorFactor:Fg,OneMinusSrcAlphaFactor:Sf,OneMinusSrcColorFactor:Lg,OrthographicCamera:ss,PCFShadowMap:mf,PCFSoftShadowMap:Mg,ParametricBufferGeometry:fs,ParametricGeometry:Uo,Particle:bT,ParticleBasicMaterial:ET,ParticleSystem:MT,ParticleSystemMaterial:ST,Path:gl,PerspectiveCamera:en,Plane:Fn,PlaneBufferGeometry:Zr,PlaneGeometry:Yo,PointCloud:yT,PointCloudMaterial:wT,PointLight:xc,PointLightHelper:ks,Points:cs,PointsMaterial:ui,PolarGridHelper:Dc,PolyhedronBufferGeometry:An,PolyhedronGeometry:zo,PositionalAudio:Ou,Projector:HT,PropertyBinding:Ft,PropertyMixer:Rc,QuadraticBezierCurve:ha,QuadraticBezierCurve3:dT,Quaternion:Wt,QuaternionKeyframeTrack:el,QuaternionLinearInterpolant:Sc,REVISION:xg,RGBADepthPacking:mv,RGBAFormat:wi,RGBA_PVRTC_2BPPV1_Format:Pu,RGBA_PVRTC_4BPPV1_Format:Ru,RGBA_S3TC_DXT1_Format:Su,RGBA_S3TC_DXT3_Format:Tu,RGBA_S3TC_DXT5_Format:Au,RGBDEncoding:dv,RGBEEncoding:hv,RGBEFormat:h1,RGBFormat:ns,RGBM16Encoding:fv,RGBM7Encoding:uv,RGB_ETC1_Format:iv,RGB_PVRTC_2BPPV1_Format:Lu,RGB_PVRTC_4BPPV1_Format:Cu,RGB_S3TC_DXT1_Format:Eu,RawShaderMaterial:As,Ray:dr,Raycaster:Gu,RectAreaLight:Uu,RectAreaLightHelper:Os,ReinhardToneMapping:Wg,RepeatWrapping:Oi,ReverseSubtractEquation:Sg,RingBufferGeometry:xs,RingGeometry:qo,Scene:Jr,SceneUtils:mT,ShaderChunk:vt,ShaderLib:as,ShaderMaterial:mn,ShadowMaterial:Ts,Shape:zr,ShapeBufferGeometry:bs,ShapeGeometry:Ms,ShapePath:Gf,ShapeUtils:Jt,ShortType:$g,Skeleton:uc,SkeletonHelper:Us,SkinnedMesh:dc,SmoothShading:vf,Sphere:sn,SphereBufferGeometry:ea,SphereGeometry:Xo,Spherical:Wu,SphericalReflectionMapping:Cf,Spline:hT,SplineCurve:la,SplineCurve3:uT,SpotLight:_c,SpotLightHelper:Is,SpotLightShadow:vc,Sprite:Po,SpriteMaterial:Qr,SrcAlphaFactor:Ef,SrcAlphaSaturateFactor:Ig,SrcColorFactor:Cg,StereoCamera:Rv,StringKeyframeTrack:Tc,SubtractEquation:Eg,SubtractiveBlending:yf,TetrahedronBufferGeometry:ds,TetrahedronGeometry:ko,TextGeometry:Wo,Texture:Mt,TextureFilter:wu,TextureLoader:Zc,TextureMapping:Yg,TextureWrapping:Mu,TorusBufferGeometry:_s,TorusGeometry:Ho,TorusKnotBufferGeometry:vs,TorusKnotGeometry:Vo,Triangle:Zn,TriangleFanDrawMode:lv,TriangleStripDrawMode:ov,TrianglesDrawMode:Pf,TubeBufferGeometry:gs,TubeGeometry:Go,UVMapping:Wc,Uint16Attribute:DT,Uint16BufferAttribute:Gi,Uint32Attribute:IT,Uint32BufferAttribute:Vi,Uint8Attribute:LT,Uint8BufferAttribute:To,Uint8ClampedAttribute:RT,Uint8ClampedBufferAttribute:Ao,Uncharted2ToneMapping:Xg,Uniform:Pc,UniformsLib:et,UniformsUtils:vn,UnsignedByteType:lc,UnsignedInt248Type:xo,UnsignedIntType:Rf,UnsignedShort4444Type:Jg,UnsignedShort5551Type:Qg,UnsignedShort565Type:Kg,UnsignedShortType:_o,Vector2:Ce,Vector3:U,Vector4:xt,VectorKeyframeTrack:Cs,Vertex:TT,VertexColors:ma,VertexNormalsHelper:il,VideoTexture:pc,WebGLRenderTarget:Xs,WebGLRenderTargetCube:rs,WebGLRenderer:If,WireframeGeometry:us,WireframeHelper:BT,WrapAroundEnding:bo,XHRLoader:zT,ZeroCurvatureEnding:Yr,ZeroFactor:Tg,ZeroSlopeEnding:Rr,sRGBEncoding:cv},Symbol.toStringTag,{value:"Module"})),qT=Ov(XT);var YT=Zf&&Zf.__extends||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)},gt=qT,At={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},Np={type:"change"},Yh={type:"start"},jh={type:"end"},Bp=1e-6,jT=function(t){YT(e,t);function e(n,i,r){var a=t.call(this)||this;return a.object=n,a.domElement=i!==void 0?i:document,a.window=r!==void 0?r:window,a.enabled=!0,a.target=new gt.Vector3,a.minDistance=0,a.maxDistance=1/0,a.minZoom=0,a.maxZoom=1/0,a.minPolarAngle=0,a.maxPolarAngle=Math.PI,a.minAzimuthAngle=-1/0,a.maxAzimuthAngle=1/0,a.enableDamping=!1,a.dampingFactor=.25,a.enableZoom=!0,a.zoomSpeed=1,a.enableRotate=!0,a.rotateSpeed=1,a.enablePan=!0,a.keyPanSpeed=7,a.autoRotate=!1,a.autoRotateSpeed=2,a.enableKeys=!0,a.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},a.mouseButtons={ORBIT:gt.MOUSE.LEFT,ZOOM:gt.MOUSE.MIDDLE,PAN:gt.MOUSE.RIGHT},a.target0=a.target.clone(),a.position0=a.object.position.clone(),a.zoom0=a.object.zoom,a.updateOffset=new gt.Vector3,a.updateQuat=new gt.Quaternion().setFromUnitVectors(n.up,new gt.Vector3(0,1,0)),a.updateQuatInverse=a.updateQuat.clone().inverse(),a.updateLastPosition=new gt.Vector3,a.updateLastQuaternion=new gt.Quaternion,a.state=At.NONE,a.scale=1,a.spherical=new gt.Spherical,a.sphericalDelta=new gt.Spherical,a.panOffset=new gt.Vector3,a.zoomChanged=!1,a.rotateStart=new gt.Vector2,a.rotateEnd=new gt.Vector2,a.rotateDelta=new gt.Vector2,a.panStart=new gt.Vector2,a.panEnd=new gt.Vector2,a.panDelta=new gt.Vector2,a.dollyStart=new gt.Vector2,a.dollyEnd=new gt.Vector2,a.dollyDelta=new gt.Vector2,a.panLeftV=new gt.Vector3,a.panUpV=new gt.Vector3,a.panInternalOffset=new gt.Vector3,a.onMouseDown=function(s){if(a.enabled!==!1){if(s.preventDefault(),s.button===a.mouseButtons.ORBIT){if(a.enableRotate===!1)return;a.rotateStart.set(s.clientX,s.clientY),a.state=At.ROTATE}else if(s.button===a.mouseButtons.ZOOM){if(a.enableZoom===!1)return;a.dollyStart.set(s.clientX,s.clientY),a.state=At.DOLLY}else if(s.button===a.mouseButtons.PAN){if(a.enablePan===!1)return;a.panStart.set(s.clientX,s.clientY),a.state=At.PAN}a.state!==At.NONE&&(document.addEventListener("mousemove",a.onMouseMove,!1),document.addEventListener("mouseup",a.onMouseUp,!1),a.dispatchEvent(Yh))}},a.onMouseMove=function(s){if(a.enabled!==!1){if(s.preventDefault(),a.state===At.ROTATE){if(a.enableRotate===!1)return;a.rotateEnd.set(s.clientX,s.clientY),a.rotateDelta.subVectors(a.rotateEnd,a.rotateStart);var o=a.domElement===document?a.domElement.body:a.domElement;a.rotateLeft(2*Math.PI*a.rotateDelta.x/o.clientWidth*a.rotateSpeed),a.rotateUp(2*Math.PI*a.rotateDelta.y/o.clientHeight*a.rotateSpeed),a.rotateStart.copy(a.rotateEnd),a.update()}else if(a.state===At.DOLLY){if(a.enableZoom===!1)return;a.dollyEnd.set(s.clientX,s.clientY),a.dollyDelta.subVectors(a.dollyEnd,a.dollyStart),a.dollyDelta.y>0?a.dollyIn(a.getZoomScale()):a.dollyDelta.y<0&&a.dollyOut(a.getZoomScale()),a.dollyStart.copy(a.dollyEnd),a.update()}else if(a.state===At.PAN){if(a.enablePan===!1)return;a.panEnd.set(s.clientX,s.clientY),a.panDelta.subVectors(a.panEnd,a.panStart),a.pan(a.panDelta.x,a.panDelta.y),a.panStart.copy(a.panEnd),a.update()}}},a.onMouseUp=function(s){a.enabled!==!1&&(document.removeEventListener("mousemove",a.onMouseMove,!1),document.removeEventListener("mouseup",a.onMouseUp,!1),a.dispatchEvent(jh),a.state=At.NONE)},a.onMouseWheel=function(s){a.enabled===!1||a.enableZoom===!1||a.state!==At.NONE&&a.state!==At.ROTATE||(s.preventDefault(),s.stopPropagation(),s.deltaY<0?a.dollyOut(a.getZoomScale()):s.deltaY>0&&a.dollyIn(a.getZoomScale()),a.update(),a.dispatchEvent(Yh),a.dispatchEvent(jh))},a.onKeyDown=function(s){if(!(a.enabled===!1||a.enableKeys===!1||a.enablePan===!1))switch(s.keyCode){case a.keys.UP:a.pan(0,a.keyPanSpeed),a.update();break;case a.keys.BOTTOM:a.pan(0,-a.keyPanSpeed),a.update();break;case a.keys.LEFT:a.pan(a.keyPanSpeed,0),a.update();break;case a.keys.RIGHT:a.pan(-a.keyPanSpeed,0),a.update();break}},a.onTouchStart=function(s){if(a.enabled!==!1){switch(s.touches.length){case 1:{if(a.enableRotate===!1)return;a.rotateStart.set(s.touches[0].pageX,s.touches[0].pageY),a.state=At.TOUCH_ROTATE}break;case 2:{if(a.enableZoom===!1)return;var o=s.touches[0].pageX-s.touches[1].pageX,c=s.touches[0].pageY-s.touches[1].pageY,l=Math.sqrt(o*o+c*c);a.dollyStart.set(0,l),a.state=At.TOUCH_DOLLY}break;case 3:{if(a.enablePan===!1)return;a.panStart.set(s.touches[0].pageX,s.touches[0].pageY),a.state=At.TOUCH_PAN}break;default:a.state=At.NONE}a.state!==At.NONE&&a.dispatchEvent(Yh)}},a.onTouchMove=function(s){if(a.enabled!==!1)switch(s.preventDefault(),s.stopPropagation(),s.touches.length){case 1:{if(a.enableRotate===!1||a.state!==At.TOUCH_ROTATE)return;a.rotateEnd.set(s.touches[0].pageX,s.touches[0].pageY),a.rotateDelta.subVectors(a.rotateEnd,a.rotateStart);var o=a.domElement===document?a.domElement.body:a.domElement;a.rotateLeft(2*Math.PI*a.rotateDelta.x/o.clientWidth*a.rotateSpeed),a.rotateUp(2*Math.PI*a.rotateDelta.y/o.clientHeight*a.rotateSpeed),a.rotateStart.copy(a.rotateEnd),a.update()}break;case 2:{if(a.enableZoom===!1||a.state!==At.TOUCH_DOLLY)return;var c=s.touches[0].pageX-s.touches[1].pageX,l=s.touches[0].pageY-s.touches[1].pageY,h=Math.sqrt(c*c+l*l);a.dollyEnd.set(0,h),a.dollyDelta.subVectors(a.dollyEnd,a.dollyStart),a.dollyDelta.y>0?a.dollyOut(a.getZoomScale()):a.dollyDelta.y<0&&a.dollyIn(a.getZoomScale()),a.dollyStart.copy(a.dollyEnd),a.update()}break;case 3:{if(a.enablePan===!1||a.state!==At.TOUCH_PAN)return;a.panEnd.set(s.touches[0].pageX,s.touches[0].pageY),a.panDelta.subVectors(a.panEnd,a.panStart),a.pan(a.panDelta.x,a.panDelta.y),a.panStart.copy(a.panEnd),a.update()}break;default:a.state=At.NONE}},a.onTouchEnd=function(s){a.enabled!==!1&&(a.dispatchEvent(jh),a.state=At.NONE)},a.onContextMenu=function(s){s.preventDefault()},a.domElement.addEventListener("contextmenu",a.onContextMenu,!1),a.domElement.addEventListener("mousedown",a.onMouseDown,!1),a.domElement.addEventListener("wheel",a.onMouseWheel,!1),a.domElement.addEventListener("touchstart",a.onTouchStart,!1),a.domElement.addEventListener("touchend",a.onTouchEnd,!1),a.domElement.addEventListener("touchmove",a.onTouchMove,!1),a.window.addEventListener("keydown",a.onKeyDown,!1),a.update(),a}return e.prototype.update=function(){var n=this.object.position;return this.updateOffset.copy(n).sub(this.target),this.updateOffset.applyQuaternion(this.updateQuat),this.spherical.setFromVector3(this.updateOffset),this.autoRotate&&this.state===At.NONE&&this.rotateLeft(this.getAutoRotationAngle()),this.spherical.theta+=this.sphericalDelta.theta,this.spherical.phi+=this.sphericalDelta.phi,this.spherical.theta=Math.max(this.minAzimuthAngle,Math.min(this.maxAzimuthAngle,this.spherical.theta)),this.spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this.spherical.phi)),this.spherical.makeSafe(),this.spherical.radius*=this.scale,this.spherical.radius=Math.max(this.minDistance,Math.min(this.maxDistance,this.spherical.radius)),this.target.add(this.panOffset),this.updateOffset.setFromSpherical(this.spherical),this.updateOffset.applyQuaternion(this.updateQuatInverse),n.copy(this.target).add(this.updateOffset),this.object.lookAt(this.target),this.enableDamping===!0?(this.sphericalDelta.theta*=1-this.dampingFactor,this.sphericalDelta.phi*=1-this.dampingFactor):this.sphericalDelta.set(0,0,0),this.scale=1,this.panOffset.set(0,0,0),this.zoomChanged||this.updateLastPosition.distanceToSquared(this.object.position)>Bp||8*(1-this.updateLastQuaternion.dot(this.object.quaternion))>Bp?(this.dispatchEvent(Np),this.updateLastPosition.copy(this.object.position),this.updateLastQuaternion.copy(this.object.quaternion),this.zoomChanged=!1,!0):!1},e.prototype.panLeft=function(n,i){this.panLeftV.setFromMatrixColumn(i,0),this.panLeftV.multiplyScalar(-n),this.panOffset.add(this.panLeftV)},e.prototype.panUp=function(n,i){this.panUpV.setFromMatrixColumn(i,1),this.panUpV.multiplyScalar(n),this.panOffset.add(this.panUpV)},e.prototype.pan=function(n,i){var r=this.domElement===document?this.domElement.body:this.domElement;if(this.object instanceof gt.PerspectiveCamera){var a=this.object.position;this.panInternalOffset.copy(a).sub(this.target);var s=this.panInternalOffset.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this.panLeft(2*n*s/r.clientHeight,this.object.matrix),this.panUp(2*i*s/r.clientHeight,this.object.matrix)}else this.object instanceof gt.OrthographicCamera?(this.panLeft(n*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this.panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)},e.prototype.dollyIn=function(n){this.object instanceof gt.PerspectiveCamera?this.scale/=n:this.object instanceof gt.OrthographicCamera?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom*n)),this.object.updateProjectionMatrix(),this.zoomChanged=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)},e.prototype.dollyOut=function(n){this.object instanceof gt.PerspectiveCamera?this.scale*=n:this.object instanceof gt.OrthographicCamera?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/n)),this.object.updateProjectionMatrix(),this.zoomChanged=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)},e.prototype.getAutoRotationAngle=function(){return 2*Math.PI/60/60*this.autoRotateSpeed},e.prototype.getZoomScale=function(){return Math.pow(.95,this.zoomSpeed)},e.prototype.rotateLeft=function(n){this.sphericalDelta.theta-=n},e.prototype.rotateUp=function(n){this.sphericalDelta.phi-=n},e.prototype.getPolarAngle=function(){return this.spherical.phi},e.prototype.getAzimuthalAngle=function(){return this.spherical.theta},e.prototype.dispose=function(){this.domElement.removeEventListener("contextmenu",this.onContextMenu,!1),this.domElement.removeEventListener("mousedown",this.onMouseDown,!1),this.domElement.removeEventListener("wheel",this.onMouseWheel,!1),this.domElement.removeEventListener("touchstart",this.onTouchStart,!1),this.domElement.removeEventListener("touchend",this.onTouchEnd,!1),this.domElement.removeEventListener("touchmove",this.onTouchMove,!1),document.removeEventListener("mousemove",this.onMouseMove,!1),document.removeEventListener("mouseup",this.onMouseUp,!1),this.window.removeEventListener("keydown",this.onKeyDown,!1)},e.prototype.reset=function(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Np),this.update(),this.state=At.NONE},Object.defineProperty(e.prototype,"center",{get:function(){return console.warn("THREE.OrbitControls: .center has been renamed to .target"),this.target},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"noZoom",{get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(n){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!n},enumerable:!0,configurable:!0}),e}(gt.EventDispatcher),$T=jT;const UA=JSON.parse('{"title":"什么是 Three.js","description":"","frontmatter":{},"headers":[],"relativePath":"threejs/first.md","filePath":"threejs/first.md","lastUpdated":1667894472000}'),ZT={name:"threejs/first.md"},JT=Object.assign(ZT,{setup(t){const e=Bv(null);function n(i){var r=i.clientHeight+400,a=i.clientWidth-25;const s=new VM,o=new $n(75,a/r,.1,1e3);o.position.set(0,0,10),s.add(o);const c=new Nc(1,2,3),l=new ju({color:16776960}),h=new ki(c,l);s.add(h);const u=new vm;u.setSize(a,r),i.append(u.domElement);const f=new $T(o,u.domElement);f.enableDamping=!0;const p=new XM(5);s.add(p),_g.to(h.position,{x:5,duration:5,ease:"power1.inOut",repeat:2,yoyo:!0});function g(){f.update(),u.render(s,o),requestAnimationFrame(g)}g()}return zv(()=>{n(e.value)}),(i,r)=>(Vv(),Gv("div",null,[r[0]||(r[0]=Jf("",8)),Hv("div",{ref_key:"threeDom",ref:e},null,512),r[1]||(r[1]=Jf("",2))]))}}),kA=Nv(JT,[["__scopeId","data-v-65d4b83c"]]);export{UA as __pageData,kA as default};
