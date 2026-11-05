(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ra="180",Dh=0,ol=1,Uh=2,Ec=1,Ac=2,Nn=3,ei=0,qt=1,Wt=2,On=0,_i=1,at=2,al=3,ll=4,Nh=5,fi=100,Fh=101,Oh=102,kh=103,Bh=104,zh=200,Hh=201,Vh=202,Gh=203,Fo=204,Oo=205,Wh=206,Xh=207,qh=208,Yh=209,$h=210,Kh=211,Jh=212,jh=213,Zh=214,ko=0,Bo=1,zo=2,Gi=3,Ho=4,Vo=5,Go=6,Wo=7,Rc=0,Qh=1,eu=2,Qn=0,Cc=1,Pc=2,Lc=3,Ca=4,Ic=5,Dc=6,Uc=7,Nc=300,Wi=301,Xi=302,Xo=303,qo=304,Or=306,Rr=1e3,mi=1001,Yo=1002,pn=1003,tu=1004,zs=1005,Mn=1006,Xr=1007,gi=1008,bn=1009,Fc=1010,Oc=1011,Ss=1012,Pa=1013,vi=1014,Fn=1015,kn=1016,La=1017,Ia=1018,ws=1020,kc=35902,Bc=35899,zc=1021,Hc=1022,fn=1023,Ts=1026,bs=1027,Vc=1028,Da=1029,Gc=1030,Ua=1031,Na=1033,yr=33776,Mr=33777,Sr=33778,wr=33779,$o=35840,Ko=35841,Jo=35842,jo=35843,Zo=36196,Qo=37492,ea=37496,ta=37808,na=37809,ia=37810,sa=37811,ra=37812,oa=37813,aa=37814,la=37815,ca=37816,ha=37817,ua=37818,da=37819,fa=37820,pa=37821,ma=36492,ga=36494,_a=36495,va=36283,xa=36284,ya=36285,Ma=36286,nu=3200,iu=3201,Wc=0,su=1,Kn="",Gt="srgb",qi="srgb-linear",Cr="linear",ct="srgb",Mi=7680,cl=519,ru=512,ou=513,au=514,Xc=515,lu=516,cu=517,hu=518,uu=519,Sa=35044,hl="300 es",Sn=2e3,Pr=2001;class Zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ul=1234567;const _s=Math.PI/180,Yi=180/Math.PI;function Tn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function Fa(i,e){return(i%e+e)%e}function du(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function fu(i,e,t){return i!==e?(t-i)/(e-i):0}function vs(i,e,t){return(1-t)*i+t*e}function pu(i,e,t,n){return vs(i,e,1-Math.exp(-t*n))}function mu(i,e=1){return e-Math.abs(Fa(i,e*2)-e)}function gu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function _u(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function vu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function xu(i,e){return i+Math.random()*(e-i)}function yu(i){return i*(.5-Math.random())}function Mu(i){i!==void 0&&(ul=i);let e=ul+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Su(i){return i*_s}function wu(i){return i*Yi}function Tu(i){return(i&i-1)===0&&i!==0}function bu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Eu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Au(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Lr={DEG2RAD:_s,RAD2DEG:Yi,generateUUID:Tn,clamp:tt,euclideanModulo:Fa,mapLinear:du,inverseLerp:fu,lerp:vs,damp:pu,pingpong:mu,smoothstep:gu,smootherstep:_u,randInt:vu,randFloat:xu,randFloatSpread:yu,seededRandom:Mu,degToRad:Su,radToDeg:wu,isPowerOfTwo:Tu,ceilPowerOfTwo:bu,floorPowerOfTwo:Eu,setQuaternionFromProperEuler:Au,normalize:ht,denormalize:dn};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ds{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==m||h!==g){let p=1-a;const d=l*f+c*m+h*g+u*_,w=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const T=Math.sqrt(y),E=Math.atan2(T,d*w);p=Math.sin(p*E)/T,a=Math.sin(a*E)/T}const v=a*w;if(l=l*p+f*v,c=c*p+m*v,h=h*p+g*v,u=u*p+_*v,p===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*m-c*f,e[t+1]=l*g+h*f+c*u-a*m,e[t+2]=c*g+h*m+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qr.copy(this).projectOnVector(e),this.sub(qr)}reflect(e){return this.sub(qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new C,dl=new Ds;class Qe{constructor(e,t,n,s,r,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],_=s[0],p=s[3],d=s[6],w=s[1],y=s[4],v=s[7],T=s[2],E=s[5],P=s[8];return r[0]=o*_+a*w+l*T,r[3]=o*p+a*y+l*E,r[6]=o*d+a*v+l*P,r[1]=c*_+h*w+u*T,r[4]=c*p+h*y+u*E,r[7]=c*d+h*v+u*P,r[2]=f*_+m*w+g*T,r[5]=f*p+m*y+g*E,r[8]=f*d+m*v+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=t*u+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yr.makeScale(e,t)),this}rotate(e){return this.premultiply(Yr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new Qe;function qc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ru(){const i=Ir("canvas");return i.style.display="block",i}const fl={};function Es(i){i in fl||(fl[i]=!0,console.warn(i))}function Cu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const pl=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ml=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pu(){const i={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ct&&(s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?Cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Es("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Es("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qi]:{primaries:e,whitePoint:n,transfer:Cr,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}const rt=Pu();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Si;class Lu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=Ir("canvas")),Si.width=e.width,Si.height=e.height;const s=Si.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ir("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Iu=0;class Oa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Tn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($r(s[o].image)):r.push($r(s[o]))}else r=$r(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function $r(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Du=0;const Kr=new C;class Jt extends Zi{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=mi,s=mi,r=Mn,o=gi,a=fn,l=bn,c=Jt.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Tn(),this.name="",this.source=new Oa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kr).x}get height(){return this.source.getSize(Kr).y}get depth(){return this.source.getSize(Kr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rr:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rr:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Nc;Jt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(m+1)/2,T=(d+1)/2,E=(h+f)/4,P=(u+_)/4,R=(g+p)/4;return y>v&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=P/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=R/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=P/r,s=R/r),this.set(n,s,r,t),this}let w=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(u-_)/w,this.z=(f-h)/w,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uu extends Zi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Jt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Oa(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends Uu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yc extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nu extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Us{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(e.matrixWorld),this.union(Hs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(is),Vs.subVectors(this.max,is),wi.subVectors(e.a,is),Ti.subVectors(e.b,is),bi.subVectors(e.c,is),Vn.subVectors(Ti,wi),Gn.subVectors(bi,Ti),ri.subVectors(wi,bi);let t=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-ri.z,ri.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,ri.z,0,-ri.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-ri.y,ri.x,0];return!Jr(t,wi,Ti,bi,Vs)||(t=[1,0,0,0,1,0,0,0,1],!Jr(t,wi,Ti,bi,Vs))?!1:(Gs.crossVectors(Vn,Gn),t=[Gs.x,Gs.y,Gs.z],Jr(t,wi,Ti,bi,Vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cn=[new C,new C,new C,new C,new C,new C,new C,new C],cn=new C,Hs=new Us,wi=new C,Ti=new C,bi=new C,Vn=new C,Gn=new C,ri=new C,is=new C,Vs=new C,Gs=new C,oi=new C;function Jr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){oi.fromArray(i,r);const a=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Fu=new Us,ss=new C,jr=new C;class Ns{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ss.subVectors(e,this.center);const t=ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ss,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ss.copy(e.center).add(jr)),this.expandByPoint(ss.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pn=new C,Zr=new C,Ws=new C,Wn=new C,Qr=new C,Xs=new C,eo=new C;class kr{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zr.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(Zr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ws),a=Wn.dot(this.direction),l=-Wn.dot(Ws),c=Wn.lengthSq(),h=Math.abs(1-o*o);let u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zr).addScaledVector(Ws,f),m}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,s,r){Qr.subVectors(t,e),Xs.subVectors(n,e),eo.crossVectors(Qr,Xs);let o=this.direction.dot(eo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wn.subVectors(this.origin,e);const l=a*this.direction.dot(Xs.crossVectors(Wn,Xs));if(l<0)return null;const c=a*this.direction.dot(Qr.cross(Wn));if(c<0||l+c>o)return null;const h=-a*Wn.dot(eo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,n,s,r,o,a,l,c,h,u,f,m,g,_,p){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,m,g,_,p)}set(e,t,n,s,r,o,a,l,c,h,u,f,m,g,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ei.setFromMatrixColumn(e,0).length(),r=1/Ei.setFromMatrixColumn(e,1).length(),o=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,m=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*u,g=c*h,_=c*u;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*u,g=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ou,e,ku)}lookAt(e,t,n){const s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Xn.crossVectors(n,nn),Xn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Xn.crossVectors(n,nn)),Xn.normalize(),qs.crossVectors(nn,Xn),s[0]=Xn.x,s[4]=qs.x,s[8]=nn.x,s[1]=Xn.y,s[5]=qs.y,s[9]=nn.y,s[2]=Xn.z,s[6]=qs.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],w=n[3],y=n[7],v=n[11],T=n[15],E=s[0],P=s[4],R=s[8],M=s[12],x=s[1],L=s[5],F=s[9],W=s[13],K=s[2],D=s[6],G=s[10],Y=s[14],z=s[3],ce=s[7],pe=s[11],Me=s[15];return r[0]=o*E+a*x+l*K+c*z,r[4]=o*P+a*L+l*D+c*ce,r[8]=o*R+a*F+l*G+c*pe,r[12]=o*M+a*W+l*Y+c*Me,r[1]=h*E+u*x+f*K+m*z,r[5]=h*P+u*L+f*D+m*ce,r[9]=h*R+u*F+f*G+m*pe,r[13]=h*M+u*W+f*Y+m*Me,r[2]=g*E+_*x+p*K+d*z,r[6]=g*P+_*L+p*D+d*ce,r[10]=g*R+_*F+p*G+d*pe,r[14]=g*M+_*W+p*Y+d*Me,r[3]=w*E+y*x+v*K+T*z,r[7]=w*P+y*L+v*D+T*ce,r[11]=w*R+y*F+v*G+T*pe,r[15]=w*M+y*W+v*Y+T*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*m-n*l*m)+_*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+t*c*u-t*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+d*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],w=u*p*c-_*f*c+_*l*m-a*p*m-u*l*d+a*f*d,y=g*f*c-h*p*c-g*l*m+o*p*m+h*l*d-o*f*d,v=h*_*c-g*u*c+g*a*m-o*_*m-h*a*d+o*u*d,T=g*u*l-h*_*l-g*a*f+o*_*f+h*a*p-o*u*p,E=t*w+n*y+s*v+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/E;return e[0]=w*P,e[1]=(_*f*r-u*p*r-_*s*m+n*p*m+u*s*d-n*f*d)*P,e[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*d+n*l*d)*P,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*m-n*l*m)*P,e[4]=y*P,e[5]=(h*p*r-g*f*r+g*s*m-t*p*m-h*s*d+t*f*d)*P,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*d-t*l*d)*P,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*m+t*l*m)*P,e[8]=v*P,e[9]=(g*u*r-h*_*r-g*n*m+t*_*m+h*n*d-t*u*d)*P,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*d+t*a*d)*P,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*m-t*a*m)*P,e[12]=T*P,e[13]=(h*_*s-g*u*s+g*n*f-t*_*f-h*n*p+t*u*p)*P,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*p-t*a*p)*P,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,g=r*u,_=o*h,p=o*u,d=a*u,w=l*c,y=l*h,v=l*u,T=n.x,E=n.y,P=n.z;return s[0]=(1-(_+d))*T,s[1]=(m+v)*T,s[2]=(g-y)*T,s[3]=0,s[4]=(m-v)*E,s[5]=(1-(f+d))*E,s[6]=(p+w)*E,s[7]=0,s[8]=(g+y)*P,s[9]=(p-w)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ei.set(s[0],s[1],s[2]).length();const o=Ei.set(s[4],s[5],s[6]).length(),a=Ei.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hn.copy(this);const c=1/r,h=1/o,u=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Sn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),m=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Sn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Pr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Sn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),m=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Sn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Pr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ei=new C,hn=new pt,Ou=new C(0,0,0),ku=new C(1,1,1),Xn=new C,qs=new C,nn=new C,gl=new pt,_l=new Ds;class En{constructor(e=0,t=0,n=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _l.setFromEuler(this),this.setFromQuaternion(_l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class ka{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bu=0;const vl=new C,Ai=new Ds,Ln=new pt,Ys=new C,rs=new C,zu=new C,Hu=new Ds,xl=new C(1,0,0),yl=new C(0,1,0),Ml=new C(0,0,1),Sl={type:"added"},Vu={type:"removed"},Ri={type:"childadded",child:null},to={type:"childremoved",child:null};class Tt extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new C,t=new En,n=new Ds,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Qe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(xl,e)}rotateY(e){return this.rotateOnAxis(yl,e)}rotateZ(e){return this.rotateOnAxis(Ml,e)}translateOnAxis(e,t){return vl.copy(e).applyQuaternion(this.quaternion),this.position.add(vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xl,e)}translateY(e){return this.translateOnAxis(yl,e)}translateZ(e){return this.translateOnAxis(Ml,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ys.copy(e):Ys.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(rs,Ys,this.up):Ln.lookAt(Ys,rs,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sl),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vu),to.child=e,this.dispatchEvent(to),to.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sl),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,zu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,Hu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Tt.DEFAULT_UP=new C(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new C,In=new C,no=new C,Dn=new C,Ci=new C,Pi=new C,wl=new C,io=new C,so=new C,ro=new C,oo=new dt,ao=new dt,lo=new dt;class ln{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){un.subVectors(s,t),In.subVectors(n,t),no.subVectors(e,t);const o=un.dot(un),a=un.dot(In),l=un.dot(no),c=In.dot(In),h=In.dot(no),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return oo.setScalar(0),ao.setScalar(0),lo.setScalar(0),oo.fromBufferAttribute(e,t),ao.fromBufferAttribute(e,n),lo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(oo,r.x),o.addScaledVector(ao,r.y),o.addScaledVector(lo,r.z),o}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),In.subVectors(e,t),un.cross(In).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),In.subVectors(this.a,this.b),un.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ci.subVectors(s,n),Pi.subVectors(r,n),io.subVectors(e,n);const l=Ci.dot(io),c=Pi.dot(io);if(l<=0&&c<=0)return t.copy(n);so.subVectors(e,s);const h=Ci.dot(so),u=Pi.dot(so);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ci,o);ro.subVectors(e,r);const m=Ci.dot(ro),g=Pi.dot(ro);if(g>=0&&m<=g)return t.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Pi,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return wl.subVectors(r,s),a=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(wl,a);const d=1/(p+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(Ci,o).addScaledVector(Pi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},$s={h:0,s:0,l:0};function co(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=rt.workingColorSpace){if(e=Fa(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=co(o,r,e+1/3),this.g=co(o,r,e),this.b=co(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=$c[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return rt.workingToColorSpace(Vt.copy(this),e),Math.round(tt(Vt.r*255,0,255))*65536+Math.round(tt(Vt.g*255,0,255))*256+Math.round(tt(Vt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,s=Vt.g,r=Vt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Gt){rt.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,s=Vt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL($s);const n=vs(qn.h,$s.h,t),s=vs(qn.s,$s.s,t),r=vs(qn.l,$s.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new He;He.NAMES=$c;let Gu=0;class ti extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Tn(),this.name="",this.type="Material",this.blending=_i,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=Oo,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fo&&(n.blendSrc=this.blendSrc),this.blendDst!==Oo&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zt extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new C,Ks=new fe;let Wu=0;class It{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sa,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ks.fromBufferAttribute(this,t),Ks.applyMatrix3(e),this.setXY(t,Ks.x,Ks.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sa&&(e.usage=this.usage),e}}class Kc extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jc extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xu=0;const an=new pt,ho=new Tt,Li=new C,sn=new Us,os=new Us,Ot=new C;class vt extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qc(e)?Jc:Kc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return ho.lookAt(e),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new st(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];os.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(sn.min,os.min),sn.expandByPoint(Ot),Ot.addVectors(sn.max,os.max),sn.expandByPoint(Ot)):(sn.expandByPoint(os.min),sn.expandByPoint(os.max))}sn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ot.fromBufferAttribute(a,c),l&&(Li.fromBufferAttribute(e,c),Ot.add(Li)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new C,l[R]=new C;const c=new C,h=new C,u=new C,f=new fe,m=new fe,g=new fe,_=new C,p=new C;function d(R,M,x){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,R),m.fromBufferAttribute(r,M),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),m.sub(f),g.sub(f);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(L),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(L),a[R].add(_),a[M].add(_),a[x].add(_),l[R].add(p),l[M].add(p),l[x].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let R=0,M=w.length;R<M;++R){const x=w[R],L=x.start,F=x.count;for(let W=L,K=L+F;W<K;W+=3)d(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const y=new C,v=new C,T=new C,E=new C;function P(R){T.fromBufferAttribute(s,R),E.copy(T);const M=a[R];y.copy(M),y.sub(T.multiplyScalar(T.dot(M))).normalize(),v.crossVectors(E,M);const L=v.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,L)}for(let R=0,M=w.length;R<M;++R){const x=w[R],L=x.start,F=x.count;for(let W=L,K=L+F;W<K;W+=3)P(e.getX(W+0)),P(e.getX(W+1)),P(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new It(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tl=new pt,ai=new kr,Js=new Ns,bl=new C,js=new C,Zs=new C,Qs=new C,uo=new C,er=new C,El=new C,tr=new C;class X extends Tt{constructor(e=new vt,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){er.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(uo.fromBufferAttribute(u,e),o?er.addScaledVector(uo,h):er.addScaledVector(uo.sub(t),h))}t.add(er)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),ai.copy(e.ray).recast(e.near),!(Js.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Js,bl)===null||ai.origin.distanceToSquared(bl)>(e.far-e.near)**2))&&(Tl.copy(r).invert(),ai.copy(e.ray).applyMatrix4(Tl),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],w=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let v=w,T=y;v<T;v+=3){const E=a.getX(v),P=a.getX(v+1),R=a.getX(v+2);s=nr(this,d,e,n,c,h,u,E,P,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const w=a.getX(p),y=a.getX(p+1),v=a.getX(p+2);s=nr(this,o,e,n,c,h,u,w,y,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],w=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let v=w,T=y;v<T;v+=3){const E=v,P=v+1,R=v+2;s=nr(this,d,e,n,c,h,u,E,P,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const w=p,y=p+1,v=p+2;s=nr(this,o,e,n,c,h,u,w,y,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function qu(i,e,t,n,s,r,o,a){let l;if(e.side===qt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ei,a),l===null)return null;tr.copy(a),tr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(tr);return c<t.near||c>t.far?null:{distance:c,point:tr.clone(),object:i}}function nr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,js),i.getVertexPosition(l,Zs),i.getVertexPosition(c,Qs);const h=qu(i,e,t,n,js,Zs,Qs,El);if(h){const u=new C;ln.getBarycoord(El,js,Zs,Qs,u),s&&(h.uv=ln.getInterpolatedAttribute(s,a,l,c,u,new fe)),r&&(h.uv1=ln.getInterpolatedAttribute(r,a,l,c,u,new fe)),o&&(h.normal=ln.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new C,materialIndex:0};ln.getNormal(js,Zs,Qs,f.normal),h.face=f,h.barycoord=u}return h}class xt extends vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function g(_,p,d,w,y,v,T,E,P,R,M){const x=v/P,L=T/R,F=v/2,W=T/2,K=E/2,D=P+1,G=R+1;let Y=0,z=0;const ce=new C;for(let pe=0;pe<G;pe++){const Me=pe*L-W;for(let Ie=0;Ie<D;Ie++){const Ue=Ie*x-F;ce[_]=Ue*w,ce[p]=Me*y,ce[d]=K,c.push(ce.x,ce.y,ce.z),ce[_]=0,ce[p]=0,ce[d]=E>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(Ie/P),u.push(1-pe/R),Y+=1}}for(let pe=0;pe<R;pe++)for(let Me=0;Me<P;Me++){const Ie=f+Me+D*pe,Ue=f+Me+D*(pe+1),Je=f+(Me+1)+D*(pe+1),Ve=f+(Me+1)+D*pe;l.push(Ie,Ue,Ve),l.push(Ue,Je,Ve),z+=6}a.addGroup(m,z,M),m+=z,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Kt(i){const e={};for(let t=0;t<i.length;t++){const n=$i(i[t]);for(const s in n)e[s]=n[s]}return e}function Yu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const As={clone:$i,merge:Kt};var $u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dt extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$u,this.fragmentShader=Ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=Yu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zc extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new C,Al=new fe,Rl=new fe;class Zt extends Zc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,Al,Rl),t.subVectors(Rl,Al)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_s*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=-90,Di=1;class Ju extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zt(Ii,Di,e,t);s.layers=this.layers,this.add(s);const r=new Zt(Ii,Di,e,t);r.layers=this.layers,this.add(r);const o=new Zt(Ii,Di,e,t);o.layers=this.layers,this.add(o);const a=new Zt(Ii,Di,e,t);a.layers=this.layers,this.add(a);const l=new Zt(Ii,Di,e,t);l.layers=this.layers,this.add(l);const c=new Zt(Ii,Di,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Qc extends Jt{constructor(e=[],t=Wi,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ju extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Qc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xt(5,5,5),r=new Dt({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:On});r.uniforms.tEquirect.value=t;const o=new X(s,r),a=t.minFilter;return t.minFilter===gi&&(t.minFilter=Mn),new Ju(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class Ce extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zu={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ce;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ni{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new ni(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qu extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ed{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sa,this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new C;class Dr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class At extends ti{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ui;const as=new C,Ni=new C,Fi=new C,Oi=new fe,ls=new fe,eh=new pt,ir=new C,cs=new C,sr=new C,Cl=new fe,po=new fe,Pl=new fe;class Ct extends Tt{constructor(e=new At){if(super(),this.isSprite=!0,this.type="Sprite",Ui===void 0){Ui=new vt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ed(t,5);Ui.setIndex([0,1,2,0,2,3]),Ui.setAttribute("position",new Dr(n,3,0,!1)),Ui.setAttribute("uv",new Dr(n,2,3,!1))}this.geometry=Ui,this.material=e,this.center=new fe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ni.setFromMatrixScale(this.matrixWorld),eh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ni.multiplyScalar(-Fi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;rr(ir.set(-.5,-.5,0),Fi,o,Ni,s,r),rr(cs.set(.5,-.5,0),Fi,o,Ni,s,r),rr(sr.set(.5,.5,0),Fi,o,Ni,s,r),Cl.set(0,0),po.set(1,0),Pl.set(1,1);let a=e.ray.intersectTriangle(ir,cs,sr,!1,as);if(a===null&&(rr(cs.set(-.5,.5,0),Fi,o,Ni,s,r),po.set(0,1),a=e.ray.intersectTriangle(ir,sr,cs,!1,as),a===null))return;const l=e.ray.origin.distanceTo(as);l<e.near||l>e.far||t.push({distance:l,point:as.clone(),uv:ln.getInterpolation(as,ir,cs,sr,Cl,po,Pl,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function rr(i,e,t,n,s,r){Oi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ls.x=r*Oi.x-s*Oi.y,ls.y=s*Oi.x+r*Oi.y):ls.copy(Oi),i.copy(e),i.x+=ls.x,i.y+=ls.y,i.applyMatrix4(eh)}const mo=new C,td=new C,nd=new Qe;class ui{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=mo.subVectors(n,t).cross(td.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(mo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nd.getNormalMatrix(e),s=this.coplanarPoint(mo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new Ns,id=new fe(.5,.5),or=new C;class Ba{constructor(e=new ui,t=new ui,n=new ui,s=new ui,r=new ui,o=new ui){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],m=r[7],g=r[8],_=r[9],p=r[10],d=r[11],w=r[12],y=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-o,m-h,d-g,T-w).normalize(),s[1].setComponents(c+o,m+h,d+g,T+w).normalize(),s[2].setComponents(c+a,m+u,d+_,T+y).normalize(),s[3].setComponents(c-a,m-u,d-_,T-y).normalize(),n)s[4].setComponents(l,f,p,v).normalize(),s[5].setComponents(c-l,m-f,d-p,T-v).normalize();else if(s[4].setComponents(c-l,m-f,d-p,T-v).normalize(),t===Sn)s[5].setComponents(c+l,m+f,d+p,T+v).normalize();else if(t===Pr)s[5].setComponents(l,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){li.center.set(0,0,0);const t=id.distanceTo(e.center);return li.radius=.7071067811865476+t,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(or.x=s.normal.x>0?e.max.x:e.min.x,or.y=s.normal.y>0?e.max.y:e.min.y,or.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fs extends ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ur=new C,Nr=new C,Ll=new pt,hs=new kr,ar=new Ns,go=new C,Il=new C;class za extends Tt{constructor(e=new vt,t=new Fs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ur.fromBufferAttribute(t,s-1),Nr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ur.distanceTo(Nr);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,e.ray.intersectsSphere(ar)===!1)return;Ll.copy(s).invert(),hs.copy(e.ray).applyMatrix4(Ll);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){const d=h.getX(_),w=h.getX(_+1),y=lr(this,e,hs,l,d,w,_);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(m),d=lr(this,e,hs,l,_,p,g-1);d&&t.push(d)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){const d=lr(this,e,hs,l,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){const _=lr(this,e,hs,l,g-1,m,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function lr(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(Ur.fromBufferAttribute(a,s),Nr.fromBufferAttribute(a,r),t.distanceSqToSegment(Ur,Nr,go,Il)>n)return;go.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(go);if(!(c<e.near||c>e.far))return{distance:c,point:Il.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Dl=new C,Ul=new C;class Ha extends za{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Dl.fromBufferAttribute(t,s),Ul.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Dl.distanceTo(Ul);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sd extends ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nl=new pt,wa=new kr,cr=new Ns,hr=new C;class rd extends Tt{constructor(e=new vt,t=new sd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),cr.radius+=r,e.ray.intersectsSphere(cr)===!1)return;Nl.copy(s).invert(),wa.copy(e.ray).applyMatrix4(Nl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);hr.fromBufferAttribute(u,p),Fl(hr,p,l,s,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,_=m;g<_;g++)hr.fromBufferAttribute(u,g),Fl(hr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fl(i,e,t,n,s,r,o){const a=wa.distanceSqToPoint(i);if(a<t){const l=new C;wa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Va extends Jt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class th extends Jt{constructor(e,t,n=vi,s,r,o,a=pn,l=pn,c,h=Ts,u=1){if(h!==Ts&&h!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nh extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wn extends vt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,m=2*u+f,g=n*2+r,_=s+1,p=new C,d=new C;for(let w=0;w<=g;w++){let y=0,v=0,T=0,E=0;if(w<=n){const M=w/n,x=M*Math.PI/2;v=-h-e*Math.cos(x),T=e*Math.sin(x),E=-e*Math.cos(x),y=M*u}else if(w<=n+r){const M=(w-n)/r;v=-h+M*t,T=e,E=0,y=u+M*f}else{const M=(w-n-r)/n,x=M*Math.PI/2;v=h+e*Math.sin(x),T=e*Math.cos(x),E=e*Math.sin(x),y=u+f+M*u}const P=Math.max(0,Math.min(1,y/m));let R=0;w===0?R=.5/s:w===g&&(R=-.5/s);for(let M=0;M<=s;M++){const x=M/s,L=x*Math.PI*2,F=Math.sin(L),W=Math.cos(L);d.x=-T*W,d.y=v,d.z=T*F,a.push(d.x,d.y,d.z),p.set(-T*W,E,T*F),p.normalize(),l.push(p.x,p.y,p.z),c.push(x+R,P)}if(w>0){const M=(w-1)*_;for(let x=0;x<s;x++){const L=M+x,F=M+x+1,W=w*_+x,K=w*_+x+1;o.push(L,F,W),o.push(F,K,W)}}}this.setIndex(o),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Bt extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new C,h=new fe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const m=n+u/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class kt extends vt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],m=[];let g=0;const _=[],p=n/2;let d=0;w(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(m,2));function w(){const v=new C,T=new C;let E=0;const P=(t-e)/n;for(let R=0;R<=r;R++){const M=[],x=R/r,L=x*(t-e)+e;for(let F=0;F<=s;F++){const W=F/s,K=W*l+a,D=Math.sin(K),G=Math.cos(K);T.x=L*D,T.y=-x*n+p,T.z=L*G,u.push(T.x,T.y,T.z),v.set(D,P,G).normalize(),f.push(v.x,v.y,v.z),m.push(W,1-x),M.push(g++)}_.push(M)}for(let R=0;R<s;R++)for(let M=0;M<r;M++){const x=_[M][R],L=_[M+1][R],F=_[M+1][R+1],W=_[M][R+1];(e>0||M!==0)&&(h.push(x,L,W),E+=3),(t>0||M!==r-1)&&(h.push(L,F,W),E+=3)}c.addGroup(d,E,0),d+=E}function y(v){const T=g,E=new fe,P=new C;let R=0;const M=v===!0?e:t,x=v===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,p*x,0),f.push(0,x,0),m.push(.5,.5),g++;const L=g;for(let F=0;F<=s;F++){const K=F/s*l+a,D=Math.cos(K),G=Math.sin(K);P.x=M*G,P.y=p*x,P.z=M*D,u.push(P.x,P.y,P.z),f.push(0,x,0),E.x=D*.5+.5,E.y=G*.5*x+.5,m.push(E.x,E.y),g++}for(let F=0;F<s;F++){const W=T+F,K=L+F;v===!0?h.push(K,K+1,W):h.push(K+1,K,W),R+=3}c.addGroup(d,R,v===!0?1:2),d+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ki extends kt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ki(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Br extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const y=new C,v=new C,T=new C;for(let E=0;E<t.length;E+=3)m(t[E+0],y),m(t[E+1],v),m(t[E+2],T),l(y,v,T,w)}function l(w,y,v,T){const E=T+1,P=[];for(let R=0;R<=E;R++){P[R]=[];const M=w.clone().lerp(v,R/E),x=y.clone().lerp(v,R/E),L=E-R;for(let F=0;F<=L;F++)F===0&&R===E?P[R][F]=M:P[R][F]=M.clone().lerp(x,F/L)}for(let R=0;R<E;R++)for(let M=0;M<2*(E-R)-1;M++){const x=Math.floor(M/2);M%2===0?(f(P[R][x+1]),f(P[R+1][x]),f(P[R][x])):(f(P[R][x+1]),f(P[R+1][x+1]),f(P[R+1][x]))}}function c(w){const y=new C;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(w),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const w=new C;for(let y=0;y<r.length;y+=3){w.x=r[y+0],w.y=r[y+1],w.z=r[y+2];const v=p(w)/2/Math.PI+.5,T=d(w)/Math.PI+.5;o.push(v,1-T)}g(),u()}function u(){for(let w=0;w<o.length;w+=6){const y=o[w+0],v=o[w+2],T=o[w+4],E=Math.max(y,v,T),P=Math.min(y,v,T);E>.9&&P<.1&&(y<.2&&(o[w+0]+=1),v<.2&&(o[w+2]+=1),T<.2&&(o[w+4]+=1))}}function f(w){r.push(w.x,w.y,w.z)}function m(w,y){const v=w*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const w=new C,y=new C,v=new C,T=new C,E=new fe,P=new fe,R=new fe;for(let M=0,x=0;M<r.length;M+=9,x+=6){w.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),E.set(o[x+0],o[x+1]),P.set(o[x+2],o[x+3]),R.set(o[x+4],o[x+5]),T.copy(w).add(y).add(v).divideScalar(3);const L=p(T);_(E,x+0,w,L),_(P,x+2,y,L),_(R,x+4,v,L)}}function _(w,y,v,T){T<0&&w.x===1&&(o[y]=w.x-1),v.x===0&&v.z===0&&(o[y]=T/2/Math.PI+.5)}function p(w){return Math.atan2(w.z,-w.x)}function d(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.vertices,e.indices,e.radius,e.details)}}class Jn extends Br{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Jn(e.radius,e.detail)}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,m=(o-h)/f;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new fe:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new C,s=[],r=[],o=[],a=new C,l=new pt;for(let m=0;m<=e;m++){const g=m/e;s[m]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(tt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(tt(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ga extends An{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new fe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*u+this.aX,c=f*u+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class od extends Ga{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wa(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,m*=h,s(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const ur=new C,_o=new Wa,vo=new Wa,xo=new Wa;class zn extends An{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ur.subVectors(s[0],s[1]).add(s[0]),c=ur);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ur.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ur),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),_o.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,p),vo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,p),xo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(_o.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),vo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),xo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(_o.calc(l),vo.calc(l),xo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ol(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function ad(i,e){const t=1-i;return t*t*e}function ld(i,e){return 2*(1-i)*i*e}function cd(i,e){return i*i*e}function xs(i,e,t,n){return ad(i,e)+ld(i,t)+cd(i,n)}function hd(i,e){const t=1-i;return t*t*t*e}function ud(i,e){const t=1-i;return 3*t*t*i*e}function dd(i,e){return 3*(1-i)*i*i*e}function fd(i,e){return i*i*i*e}function ys(i,e,t,n,s){return hd(i,e)+ud(i,t)+dd(i,n)+fd(i,s)}class ih extends An{constructor(e=new fe,t=new fe,n=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ys(e,s.x,r.x,o.x,a.x),ys(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pd extends An{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ys(e,s.x,r.x,o.x,a.x),ys(e,s.y,r.y,o.y,a.y),ys(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sh extends An{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class md extends An{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rh extends An{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(xs(e,s.x,r.x,o.x),xs(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oh extends An{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(xs(e,s.x,r.x,o.x),xs(e,s.y,r.y,o.y),xs(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ah extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ol(a,l.x,c.x,h.x,u.x),Ol(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new fe().fromArray(s))}return this}}var Fr=Object.freeze({__proto__:null,ArcCurve:od,CatmullRomCurve3:zn,CubicBezierCurve:ih,CubicBezierCurve3:pd,EllipseCurve:Ga,LineCurve:sh,LineCurve3:md,QuadraticBezierCurve:rh,QuadraticBezierCurve3:oh,SplineCurve:ah});class gd extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fr[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Fr[s.type]().fromJSON(s))}return this}}class kl extends gd{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new sh(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new rh(this.currentPoint.clone(),new fe(e,t),new fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new ih(this.currentPoint.clone(),new fe(e,t),new fe(n,s),new fe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ah(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new Ga(e,t,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class lh extends kl{constructor(e){super(e),this.uuid=Tn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new kl().fromJSON(s))}return this}}function _d(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=ch(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Sd(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){const m=i[f],g=i[f+1];m<a&&(a=m),g<l&&(l=g),m>h&&(h=m),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Rs(r,o,t,a,l,c,0),o}function ch(i,e,t,n,s){let r;if(s===Dd(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Bl(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Bl(o/n|0,i[o],i[o+1],r);return r&&Ji(r,r.next)&&(Ps(r),r=r.next),r}function xi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ji(t,t.next)||wt(t.prev,t,t.next)===0)){if(Ps(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Rs(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Ad(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?xd(i,n,s,r):vd(i)){e.push(l.i,i.i,c.i),Ps(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=yd(xi(i),e),Rs(i,e,t,n,s,r,2)):o===2&&Md(i,e,t,n,s,r):Rs(xi(i),e,t,n,s,r,1);break}}}function vd(i){const e=i.prev,t=i,n=i.next;if(wt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),m=Math.max(a,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&ms(s,a,r,l,o,c,g.x,g.y)&&wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function xd(i,e,t,n){const s=i.prev,r=i,o=i.next;if(wt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,m=Math.min(a,l,c),g=Math.min(h,u,f),_=Math.max(a,l,c),p=Math.max(h,u,f),d=Ta(m,g,e,t,n),w=Ta(_,p,e,t,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=d&&v&&v.z<=w;){if(y.x>=m&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&ms(a,h,l,u,c,f,y.x,y.y)&&wt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&ms(a,h,l,u,c,f,v.x,v.y)&&wt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=d;){if(y.x>=m&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&ms(a,h,l,u,c,f,y.x,y.y)&&wt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=w;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&ms(a,h,l,u,c,f,v.x,v.y)&&wt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function yd(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Ji(n,s)&&uh(n,t,t.next,s)&&Cs(n,s)&&Cs(s,n)&&(e.push(n.i,t.i,s.i),Ps(t),Ps(t.next),t=i=s),t=t.next}while(t!==i);return xi(t)}function Md(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Pd(o,a)){let l=dh(o,a);o=xi(o,o.next),l=xi(l,l.next),Rs(o,e,t,n,s,r,0),Rs(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Sd(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=ch(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Cd(c))}s.sort(wd);for(let r=0;r<s.length;r++)t=Td(s[r],t);return t}function wd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Td(i,e){const t=bd(i,e);if(!t)return e;const n=dh(t,i);return xi(n,n.next),xi(t,t.next)}function bd(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Ji(i,t))return t;do{if(Ji(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&hh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);Cs(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Ed(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Ed(i,e){return wt(i.prev,i,e.prev)<0&&wt(e.next,i,i.next)<0}function Ad(i,e,t,n){let s=i;do s.z===0&&(s.z=Ta(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Rd(s)}function Rd(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Ta(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Cd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function hh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ms(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&hh(i,e,t,n,s,r,o,a)}function Pd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ld(i,e)&&(Cs(i,e)&&Cs(e,i)&&Id(i,e)&&(wt(i.prev,i,e.prev)||wt(i,e.prev,e))||Ji(i,e)&&wt(i.prev,i,i.next)>0&&wt(e.prev,e,e.next)>0)}function wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ji(i,e){return i.x===e.x&&i.y===e.y}function uh(i,e,t,n){const s=fr(wt(i,e,t)),r=fr(wt(i,e,n)),o=fr(wt(t,n,i)),a=fr(wt(t,n,e));return!!(s!==r&&o!==a||s===0&&dr(i,t,e)||r===0&&dr(i,n,e)||o===0&&dr(t,i,n)||a===0&&dr(t,e,n))}function dr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fr(i){return i>0?1:i<0?-1:0}function Ld(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&uh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Cs(i,e){return wt(i.prev,i,i.next)<0?wt(i,e,i.next)>=0&&wt(i,i.prev,e)>=0:wt(i,e,i.prev)<0||wt(i,i.next,e)<0}function Id(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function dh(i,e){const t=ba(i.i,i.x,i.y),n=ba(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Bl(i,e,t,n){const s=ba(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ps(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ba(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dd(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Ud{static triangulate(e,t,n=2){return _d(e,t,n)}}class zi{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return zi.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];zl(e),Hl(n,e);let o=e.length;t.forEach(zl);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Hl(n,t[l]);const a=Ud.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function zl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Hl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Xa extends vt{constructor(e=new lh([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:Nd;let y,v=!1,T,E,P,R;d&&(y=d.getSpacedPoints(h),v=!0,f=!1,T=d.computeFrenetFrames(h,!1),E=new C,P=new C,R=new C),f||(p=0,m=0,g=0,_=0);const M=a.extractPoints(c);let x=M.shape;const L=M.holes;if(!zi.isClockWise(x)){x=x.reverse();for(let U=0,se=L.length;U<se;U++){const re=L[U];zi.isClockWise(re)&&(L[U]=re.reverse())}}function W(U){const re=10000000000000001e-36;let O=U[0];for(let ne=1;ne<=U.length;ne++){const oe=ne%U.length,de=U[oe],he=de.x-O.x,xe=de.y-O.y,A=he*he+xe*xe,S=Math.max(Math.abs(de.x),Math.abs(de.y),Math.abs(O.x),Math.abs(O.y)),V=re*S*S;if(A<=V){U.splice(oe,1),ne--;continue}O=de}}W(x),L.forEach(W);const K=L.length,D=x;for(let U=0;U<K;U++){const se=L[U];x=x.concat(se)}function G(U,se,re){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(se,re)}const Y=x.length;function z(U,se,re){let O,ne,oe;const de=U.x-se.x,he=U.y-se.y,xe=re.x-U.x,A=re.y-U.y,S=de*de+he*he,V=de*A-he*xe;if(Math.abs(V)>Number.EPSILON){const ee=Math.sqrt(S),ue=Math.sqrt(xe*xe+A*A),ie=se.x-he/ee,ke=se.y+de/ee,ye=re.x-A/ue,Ne=re.y+xe/ue,Fe=((ye-ie)*A-(Ne-ke)*xe)/(de*A-he*xe);O=ie+de*Fe-U.x,ne=ke+he*Fe-U.y;const me=O*O+ne*ne;if(me<=2)return new fe(O,ne);oe=Math.sqrt(me/2)}else{let ee=!1;de>Number.EPSILON?xe>Number.EPSILON&&(ee=!0):de<-Number.EPSILON?xe<-Number.EPSILON&&(ee=!0):Math.sign(he)===Math.sign(A)&&(ee=!0),ee?(O=-he,ne=de,oe=Math.sqrt(S)):(O=de,ne=he,oe=Math.sqrt(S/2))}return new fe(O/oe,ne/oe)}const ce=[];for(let U=0,se=D.length,re=se-1,O=U+1;U<se;U++,re++,O++)re===se&&(re=0),O===se&&(O=0),ce[U]=z(D[U],D[re],D[O]);const pe=[];let Me,Ie=ce.concat();for(let U=0,se=K;U<se;U++){const re=L[U];Me=[];for(let O=0,ne=re.length,oe=ne-1,de=O+1;O<ne;O++,oe++,de++)oe===ne&&(oe=0),de===ne&&(de=0),Me[O]=z(re[O],re[oe],re[de]);pe.push(Me),Ie=Ie.concat(Me)}let Ue;if(p===0)Ue=zi.triangulateShape(D,L);else{const U=[],se=[];for(let re=0;re<p;re++){const O=re/p,ne=m*Math.cos(O*Math.PI/2),oe=g*Math.sin(O*Math.PI/2)+_;for(let de=0,he=D.length;de<he;de++){const xe=G(D[de],ce[de],oe);k(xe.x,xe.y,-ne),O===0&&U.push(xe)}for(let de=0,he=K;de<he;de++){const xe=L[de];Me=pe[de];const A=[];for(let S=0,V=xe.length;S<V;S++){const ee=G(xe[S],Me[S],oe);k(ee.x,ee.y,-ne),O===0&&A.push(ee)}O===0&&se.push(A)}}Ue=zi.triangulateShape(U,se)}const Je=Ue.length,Ve=g+_;for(let U=0;U<Y;U++){const se=f?G(x[U],Ie[U],Ve):x[U];v?(P.copy(T.normals[0]).multiplyScalar(se.x),E.copy(T.binormals[0]).multiplyScalar(se.y),R.copy(y[0]).add(P).add(E),k(R.x,R.y,R.z)):k(se.x,se.y,0)}for(let U=1;U<=h;U++)for(let se=0;se<Y;se++){const re=f?G(x[se],Ie[se],Ve):x[se];v?(P.copy(T.normals[U]).multiplyScalar(re.x),E.copy(T.binormals[U]).multiplyScalar(re.y),R.copy(y[U]).add(P).add(E),k(R.x,R.y,R.z)):k(re.x,re.y,u/h*U)}for(let U=p-1;U>=0;U--){const se=U/p,re=m*Math.cos(se*Math.PI/2),O=g*Math.sin(se*Math.PI/2)+_;for(let ne=0,oe=D.length;ne<oe;ne++){const de=G(D[ne],ce[ne],O);k(de.x,de.y,u+re)}for(let ne=0,oe=L.length;ne<oe;ne++){const de=L[ne];Me=pe[ne];for(let he=0,xe=de.length;he<xe;he++){const A=G(de[he],Me[he],O);v?k(A.x,A.y+y[h-1].y,y[h-1].x+re):k(A.x,A.y,u+re)}}}Q(),te();function Q(){const U=s.length/3;if(f){let se=0,re=Y*se;for(let O=0;O<Je;O++){const ne=Ue[O];q(ne[2]+re,ne[1]+re,ne[0]+re)}se=h+p*2,re=Y*se;for(let O=0;O<Je;O++){const ne=Ue[O];q(ne[0]+re,ne[1]+re,ne[2]+re)}}else{for(let se=0;se<Je;se++){const re=Ue[se];q(re[2],re[1],re[0])}for(let se=0;se<Je;se++){const re=Ue[se];q(re[0]+Y*h,re[1]+Y*h,re[2]+Y*h)}}n.addGroup(U,s.length/3-U,0)}function te(){const U=s.length/3;let se=0;Z(D,se),se+=D.length;for(let re=0,O=L.length;re<O;re++){const ne=L[re];Z(ne,se),se+=ne.length}n.addGroup(U,s.length/3-U,1)}function Z(U,se){let re=U.length;for(;--re>=0;){const O=re;let ne=re-1;ne<0&&(ne=U.length-1);for(let oe=0,de=h+p*2;oe<de;oe++){const he=Y*oe,xe=Y*(oe+1),A=se+O+he,S=se+ne+he,V=se+ne+xe,ee=se+O+xe;Se(A,S,V,ee)}}}function k(U,se,re){l.push(U),l.push(se),l.push(re)}function q(U,se,re){be(U),be(se),be(re);const O=s.length/3,ne=w.generateTopUV(n,s,O-3,O-2,O-1);I(ne[0]),I(ne[1]),I(ne[2])}function Se(U,se,re,O){be(U),be(se),be(O),be(se),be(re),be(O);const ne=s.length/3,oe=w.generateSideWallUV(n,s,ne-6,ne-3,ne-2,ne-1);I(oe[0]),I(oe[1]),I(oe[3]),I(oe[1]),I(oe[2]),I(oe[3])}function be(U){s.push(l[U*3+0]),s.push(l[U*3+1]),s.push(l[U*3+2])}function I(U){r.push(U.x),r.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Fd(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Fr[s.type]().fromJSON(s)),new Xa(n,e.options)}}const Nd={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new fe(r,o),new fe(a,l),new fe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],m=e[s*3+1],g=e[s*3+2],_=e[r*3],p=e[r*3+1],d=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new fe(o,1-l),new fe(c,1-u),new fe(f,1-g),new fe(_,1-d)]:[new fe(a,1-l),new fe(h,1-u),new fe(m,1-g),new fe(p,1-d)]}};function Fd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class qa extends Br{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new qa(e.radius,e.detail)}}class it extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,m=[],g=[],_=[],p=[];for(let d=0;d<h;d++){const w=d*f-o;for(let y=0;y<c;y++){const v=y*u-r;g.push(v,-w,0),_.push(0,0,1),p.push(y/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<a;w++){const y=w+c*d,v=w+c*(d+1),T=w+1+c*(d+1),E=w+1+c*d;m.push(y,v,E),m.push(v,T,E)}this.setIndex(m),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new it(e.width,e.height,e.widthSegments,e.heightSegments)}}class gt extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new C,f=new C,m=[],g=[],_=[],p=[];for(let d=0;d<=n;d++){const w=[],y=d/n;let v=0;d===0&&o===0?v=.5/t:d===n&&l===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const E=T/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(E+v,1-y),w.push(c++)}h.push(w)}for(let d=0;d<n;d++)for(let w=0;w<t;w++){const y=h[d][w+1],v=h[d][w],T=h[d+1][w],E=h[d+1][w+1];(d!==0||o>0)&&m.push(y,v,E),(d!==n-1||l<Math.PI)&&m.push(v,T,E)}this.setIndex(m),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qt extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new C,u=new C,f=new C;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const _=g/s*r,p=m/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(_),u.y=(e+t*Math.cos(p))*Math.sin(_),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const _=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,d=(s+1)*(m-1)+g,w=(s+1)*m+g;o.push(_,p,w),o.push(p,d,w)}this.setIndex(o),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class gn extends vt{constructor(e=new oh(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,l=new C,c=new fe;let h=new C;const u=[],f=[],m=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(m,2));function _(){for(let y=0;y<t;y++)p(y);p(r===!1?t:0),w(),d()}function p(y){h=e.getPointAt(y/t,h);const v=o.normals[y],T=o.binormals[y];for(let E=0;E<=s;E++){const P=E/s*Math.PI*2,R=Math.sin(P),M=-Math.cos(P);l.x=M*v.x+R*T.x,l.y=M*v.y+R*T.y,l.z=M*v.z+R*T.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function d(){for(let y=1;y<=t;y++)for(let v=1;v<=s;v++){const T=(s+1)*(y-1)+(v-1),E=(s+1)*y+(v-1),P=(s+1)*y+v,R=(s+1)*(y-1)+v;g.push(T,E,R),g.push(E,P,R)}}function w(){for(let y=0;y<=t;y++)for(let v=0;v<=s;v++)c.x=y/t,c.y=v/s,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new gn(new Fr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Od extends Dt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xe extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wc,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kd extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bd extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Os extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class zd extends Os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const yo=new pt,Vl=new C,Gl=new C;class Ya{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vl),Gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gl),t.updateMatrixWorld(),yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hd extends Ya{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Yi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ls extends Os{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Hd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wl=new pt,us=new C,Mo=new C;class Vd extends Ya{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),us.setFromMatrixPosition(e.matrixWorld),n.position.copy(us),Mo.copy(n.position),Mo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Mo),n.updateMatrixWorld(),s.makeTranslation(-us.x,-us.y,-us.z),Wl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl,n.coordinateSystem,n.reversedDepth)}}class St extends Os{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $a extends Zc{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gd extends Ya{constructor(){super(new $a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ka extends Os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Gd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wd extends Os{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xd extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class fh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Xl=new pt;class qd{constructor(e,t,n=0,s=1/0){this.ray=new kr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xl),this}intersectObject(e,t=!0,n=[]){return Ea(e,this,n,t),n.sort(ql),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ea(e[s],this,n,t);return n.sort(ql),n}}function ql(i,e){return i.distance-e.distance}function Ea(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ea(r[o],e,t,!0)}}function Yl(i,e,t,n){const s=Yd(n);switch(t){case zc:return i*e;case Vc:return i*e/s.components*s.byteLength;case Da:return i*e/s.components*s.byteLength;case Gc:return i*e*2/s.components*s.byteLength;case Ua:return i*e*2/s.components*s.byteLength;case Hc:return i*e*3/s.components*s.byteLength;case fn:return i*e*4/s.components*s.byteLength;case Na:return i*e*4/s.components*s.byteLength;case yr:case Mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sr:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ko:case jo:return Math.max(i,16)*Math.max(e,8)/4;case $o:case Jo:return Math.max(i,8)*Math.max(e,8)/2;case Zo:case Qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case na:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ia:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ra:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case oa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case aa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case la:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ca:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ha:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ua:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case da:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ma:case ga:case _a:return Math.ceil(i/4)*Math.ceil(e/4)*16;case va:case xa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ya:case Ma:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yd(i){switch(i){case bn:case Fc:return{byteLength:1,components:1};case Ss:case Oc:case kn:return{byteLength:2,components:1};case La:case Ia:return{byteLength:2,components:4};case vi:case Pa:case Fn:return{byteLength:4,components:1};case kc:case Bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ra);function ph(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $d(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){const g=u[f],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){const _=u[m];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cf=`#ifdef USE_IRIDESCENCE
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
#endif`,hf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xf=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Mf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Of=`#ifdef USE_GRADIENTMAP
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
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Vf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$f=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Kf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Up=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,Bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wp=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,n0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,i0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,s0=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,h0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,d0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,p0=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,g0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,v0=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,y0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,S0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,A0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,R0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:Kd,alphahash_pars_fragment:Jd,alphamap_fragment:jd,alphamap_pars_fragment:Zd,alphatest_fragment:Qd,alphatest_pars_fragment:ef,aomap_fragment:tf,aomap_pars_fragment:nf,batching_pars_vertex:sf,batching_vertex:rf,begin_vertex:of,beginnormal_vertex:af,bsdfs:lf,iridescence_fragment:cf,bumpmap_pars_fragment:hf,clipping_planes_fragment:uf,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:ff,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:gf,color_pars_vertex:_f,color_vertex:vf,common:xf,cube_uv_reflection_fragment:yf,defaultnormal_vertex:Mf,displacementmap_pars_vertex:Sf,displacementmap_vertex:wf,emissivemap_fragment:Tf,emissivemap_pars_fragment:bf,colorspace_fragment:Ef,colorspace_pars_fragment:Af,envmap_fragment:Rf,envmap_common_pars_fragment:Cf,envmap_pars_fragment:Pf,envmap_pars_vertex:Lf,envmap_physical_pars_fragment:Vf,envmap_vertex:If,fog_vertex:Df,fog_pars_vertex:Uf,fog_fragment:Nf,fog_pars_fragment:Ff,gradientmap_pars_fragment:Of,lightmap_pars_fragment:kf,lights_lambert_fragment:Bf,lights_lambert_pars_fragment:zf,lights_pars_begin:Hf,lights_toon_fragment:Gf,lights_toon_pars_fragment:Wf,lights_phong_fragment:Xf,lights_phong_pars_fragment:qf,lights_physical_fragment:Yf,lights_physical_pars_fragment:$f,lights_fragment_begin:Kf,lights_fragment_maps:Jf,lights_fragment_end:jf,logdepthbuf_fragment:Zf,logdepthbuf_pars_fragment:Qf,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:tp,map_fragment:np,map_pars_fragment:ip,map_particle_fragment:sp,map_particle_pars_fragment:rp,metalnessmap_fragment:op,metalnessmap_pars_fragment:ap,morphinstance_vertex:lp,morphcolor_vertex:cp,morphnormal_vertex:hp,morphtarget_pars_vertex:up,morphtarget_vertex:dp,normal_fragment_begin:fp,normal_fragment_maps:pp,normal_pars_fragment:mp,normal_pars_vertex:gp,normal_vertex:_p,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:yp,clearcoat_pars_fragment:Mp,iridescence_pars_fragment:Sp,opaque_fragment:wp,packing:Tp,premultiplied_alpha_fragment:bp,project_vertex:Ep,dithering_fragment:Ap,dithering_pars_fragment:Rp,roughnessmap_fragment:Cp,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Dp,shadowmask_pars_fragment:Up,skinbase_vertex:Np,skinning_pars_vertex:Fp,skinning_vertex:Op,skinnormal_vertex:kp,specularmap_fragment:Bp,specularmap_pars_fragment:zp,tonemapping_fragment:Hp,tonemapping_pars_fragment:Vp,transmission_fragment:Gp,transmission_pars_fragment:Wp,uv_pars_fragment:Xp,uv_pars_vertex:qp,uv_vertex:Yp,worldpos_vertex:$p,background_vert:Kp,background_frag:Jp,backgroundCube_vert:jp,backgroundCube_frag:Zp,cube_vert:Qp,cube_frag:e0,depth_vert:t0,depth_frag:n0,distanceRGBA_vert:i0,distanceRGBA_frag:s0,equirect_vert:r0,equirect_frag:o0,linedashed_vert:a0,linedashed_frag:l0,meshbasic_vert:c0,meshbasic_frag:h0,meshlambert_vert:u0,meshlambert_frag:d0,meshmatcap_vert:f0,meshmatcap_frag:p0,meshnormal_vert:m0,meshnormal_frag:g0,meshphong_vert:_0,meshphong_frag:v0,meshphysical_vert:x0,meshphysical_frag:y0,meshtoon_vert:M0,meshtoon_frag:S0,points_vert:w0,points_frag:T0,shadow_vert:b0,shadow_frag:E0,sprite_vert:A0,sprite_frag:R0},Te={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},xn={basic:{uniforms:Kt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Kt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new He(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Kt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Kt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Kt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new He(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Kt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Kt([Te.points,Te.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Kt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Kt([Te.common,Te.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Kt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Kt([Te.sprite,Te.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Kt([Te.common,Te.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Kt([Te.lights,Te.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};xn.physical={uniforms:Kt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const pr={r:0,b:0,g:0},ci=new En,C0=new pt;function P0(i,e,t,n,s,r,o){const a=new He(0);let l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const T=g(y);T===null?d(a,l):T&&T.isColor&&(d(T,1),v=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===Or)?(h===void 0&&(h=new X(new xt(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:$i(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ci.copy(v.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(C0.makeRotationFromEuler(ci)),h.material.toneMapped=rt.getTransfer(T.colorSpace)!==ct,(u!==T||f!==T.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,m=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new X(new it(2,2),new Dt({name:"BackgroundMaterial",uniforms:$i(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=rt.getTransfer(T.colorSpace)!==ct,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,m=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,v){y.getRGB(pr,jc(i)),n.buffers.color.setClear(pr.r,pr.g,pr.b,v,o)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:_,addToRenderList:p,dispose:w}}function L0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(x,L,F,W,K){let D=!1;const G=u(W,F,L);r!==G&&(r=G,c(r.object)),D=m(x,W,F,K),D&&g(x,W,F,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,v(x,L,F,W),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,L,F){const W=F.wireframe===!0;let K=n[x.id];K===void 0&&(K={},n[x.id]=K);let D=K[L.id];D===void 0&&(D={},K[L.id]=D);let G=D[W];return G===void 0&&(G=f(l()),D[W]=G),G}function f(x){const L=[],F=[],W=[];for(let K=0;K<t;K++)L[K]=0,F[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:W,object:x,attributes:{},index:null}}function m(x,L,F,W){const K=r.attributes,D=L.attributes;let G=0;const Y=F.getAttributes();for(const z in Y)if(Y[z].location>=0){const pe=K[z];let Me=D[z];if(Me===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(Me=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(Me=x.instanceColor)),pe===void 0||pe.attribute!==Me||Me&&pe.data!==Me.data)return!0;G++}return r.attributesNum!==G||r.index!==W}function g(x,L,F,W){const K={},D=L.attributes;let G=0;const Y=F.getAttributes();for(const z in Y)if(Y[z].location>=0){let pe=D[z];pe===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor));const Me={};Me.attribute=pe,pe&&pe.data&&(Me.data=pe.data),K[z]=Me,G++}r.attributes=K,r.attributesNum=G,r.index=W}function _(){const x=r.newAttributes;for(let L=0,F=x.length;L<F;L++)x[L]=0}function p(x){d(x,0)}function d(x,L){const F=r.newAttributes,W=r.enabledAttributes,K=r.attributeDivisors;F[x]=1,W[x]===0&&(i.enableVertexAttribArray(x),W[x]=1),K[x]!==L&&(i.vertexAttribDivisor(x,L),K[x]=L)}function w(){const x=r.newAttributes,L=r.enabledAttributes;for(let F=0,W=L.length;F<W;F++)L[F]!==x[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function y(x,L,F,W,K,D,G){G===!0?i.vertexAttribIPointer(x,L,F,K,D):i.vertexAttribPointer(x,L,F,W,K,D)}function v(x,L,F,W){_();const K=W.attributes,D=F.getAttributes(),G=L.defaultAttributeValues;for(const Y in D){const z=D[Y];if(z.location>=0){let ce=K[Y];if(ce===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),ce!==void 0){const pe=ce.normalized,Me=ce.itemSize,Ie=e.get(ce);if(Ie===void 0)continue;const Ue=Ie.buffer,Je=Ie.type,Ve=Ie.bytesPerElement,Q=Je===i.INT||Je===i.UNSIGNED_INT||ce.gpuType===Pa;if(ce.isInterleavedBufferAttribute){const te=ce.data,Z=te.stride,k=ce.offset;if(te.isInstancedInterleavedBuffer){for(let q=0;q<z.locationSize;q++)d(z.location+q,te.meshPerAttribute);x.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let q=0;q<z.locationSize;q++)p(z.location+q);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let q=0;q<z.locationSize;q++)y(z.location+q,Me/z.locationSize,Je,pe,Z*Ve,(k+Me/z.locationSize*q)*Ve,Q)}else{if(ce.isInstancedBufferAttribute){for(let te=0;te<z.locationSize;te++)d(z.location+te,ce.meshPerAttribute);x.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let te=0;te<z.locationSize;te++)p(z.location+te);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let te=0;te<z.locationSize;te++)y(z.location+te,Me/z.locationSize,Je,pe,Me*Ve,Me/z.locationSize*te*Ve,Q)}}else if(G!==void 0){const pe=G[Y];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(z.location,pe);break;case 3:i.vertexAttrib3fv(z.location,pe);break;case 4:i.vertexAttrib4fv(z.location,pe);break;default:i.vertexAttrib1fv(z.location,pe)}}}}w()}function T(){R();for(const x in n){const L=n[x];for(const F in L){const W=L[F];for(const K in W)h(W[K].object),delete W[K];delete L[F]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;const L=n[x.id];for(const F in L){const W=L[F];for(const K in W)h(W[K].object),delete W[K];delete L[F]}delete n[x.id]}function P(x){for(const L in n){const F=n[L];if(F[x.id]===void 0)continue;const W=F[x.id];for(const K in W)h(W[K].object),delete W[K];delete F[x.id]}}function R(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function I0(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,n,1)}function l(c,h,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function D0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==fn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const R=P===kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==bn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Fn&&!R)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:T,maxSamples:E}}function U0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ui,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const w=r?0:n,y=w*4;let v=d.clippingState||null;l.value=v,v=h(g,f,y,m);for(let T=0;T!==y;++T)v[T]=t[T];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,v=m;y!==_;++y,v+=4)o.copy(u[y]).applyMatrix4(w,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function N0(i){let e=new WeakMap;function t(o,a){return a===Xo?o.mapping=Wi:a===qo&&(o.mapping=Xi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xo||a===qo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ju(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Hi=4,$l=[.125,.215,.35,.446,.526,.582],pi=20,So=new $a,Kl=new He;let wo=null,To=0,bo=0,Eo=!1;const di=(1+Math.sqrt(5))/2,ki=1/di,Jl=[new C(-di,ki,0),new C(di,ki,0),new C(-ki,0,di),new C(ki,0,di),new C(0,di,-ki),new C(0,di,ki),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],F0=new C;class jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=F0}=r;wo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wo,To,bo),this._renderer.xr.enabled=Eo,e.scissorTest=!1,mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wi||e.mapping===Xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:kn,format:fn,colorSpace:qi,depthBuffer:!1},s=Zl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O0(r)),this._blurMaterial=k0(r,e,t)}return s}_compileMaterial(e){const t=new X(this._lodPlanes[0],e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,n,s,r){const l=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(Kl),u.toneMapping=Qn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new zt({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),p=new X(new xt,_);let d=!1;const w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,d=!0):(_.color.copy(Kl),d=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const T=this._cubeSize;mr(s,v*T,y>2?T:0,T,T),u.setRenderTarget(s),d&&u.render(p,l),u.render(e,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=m,u.autoClear=f,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Wi||e.mapping===Xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new X(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;mr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,So)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jl[(s-r-1)%Jl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new X(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*pi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):pi;p>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${pi}`);const d=[];let w=0;for(let P=0;P<pi;++P){const R=P/_,M=Math.exp(-R*R/2);d.push(M),P===0?w+=M:P<p&&(w+=2*M)}for(let P=0;P<d.length;P++)d[P]=d[P]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const v=this._sizeLods[s],T=3*v*(s>y-Hi?s-y+Hi:0),E=4*(this._cubeSize-v);mr(t,T,E,3*v,2*v),l.setRenderTarget(t),l.render(u,So)}}function O0(i){const e=[],t=[],n=[];let s=i;const r=i-Hi+1+$l.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Hi?l=$l[o-i+Hi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,d=1,w=new Float32Array(_*g*m),y=new Float32Array(p*g*m),v=new Float32Array(d*g*m);for(let E=0;E<m;E++){const P=E%3*2/3-1,R=E>2?0:-1,M=[P,R,0,P+2/3,R,0,P+2/3,R+1,0,P,R,0,P+2/3,R+1,0,P,R+1,0];w.set(M,_*g*E),y.set(f,p*g*E);const x=[E,E,E,E,E,E];v.set(x,d*g*E)}const T=new vt;T.setAttribute("position",new It(w,_)),T.setAttribute("uv",new It(y,p)),T.setAttribute("faceIndex",new It(v,d)),e.push(T),s>Hi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zl(i,e,t){const n=new mn(i,e,t);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function k0(i,e,t){const n=new Float32Array(pi),s=new C(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ql(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function ec(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ja(){return`

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
	`}function B0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xo||l===qo,h=l===Wi||l===Xi;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new jl(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new jl(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function z0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Es("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function H0(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function c(u){const f=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const w=m.array;_=m.version;for(let y=0,v=w.length;y<v;y+=3){const T=w[y+0],E=w[y+1],P=w[y+2];f.push(T,E,E,P,P,T)}}else if(g!==void 0){const w=g.array;_=g.version;for(let y=0,v=w.length/3-1;y<v;y+=3){const T=y+0,E=y+1,P=y+2;f.push(T,E,E,P,P,T)}}else return;const p=new(qc(f)?Jc:Kc)(f,1);p.version=_;const d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function V0(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*o),t.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*o,g),t.update(m,n,g))}function h(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,n,1)}function u(f,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,_,0,g);let d=0;for(let w=0;w<g;w++)d+=m[w]*_[w];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function G0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function W0(i,e,t){const n=new WeakMap,s=new dt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let x=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var m=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let T=a.attributes.position.count*v,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const P=new Float32Array(T*E*4*u),R=new Yc(P,T,E,u);R.type=Fn,R.needsUpdate=!0;const M=v*4;for(let L=0;L<u;L++){const F=d[L],W=w[L],K=y[L],D=T*E*4*L;for(let G=0;G<F.count;G++){const Y=G*M;g===!0&&(s.fromBufferAttribute(F,G),P[D+Y+0]=s.x,P[D+Y+1]=s.y,P[D+Y+2]=s.z,P[D+Y+3]=0),_===!0&&(s.fromBufferAttribute(W,G),P[D+Y+4]=s.x,P[D+Y+5]=s.y,P[D+Y+6]=s.z,P[D+Y+7]=0),p===!0&&(s.fromBufferAttribute(K,G),P[D+Y+8]=s.x,P[D+Y+9]=s.y,P[D+Y+10]=s.z,P[D+Y+11]=K.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new fe(T,E)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function X0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const mh=new Jt,tc=new th(1,1),gh=new Yc,_h=new Nu,vh=new Qc,nc=[],ic=[],sc=new Float32Array(16),rc=new Float32Array(9),oc=new Float32Array(4);function Qi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=nc[s];if(r===void 0&&(r=new Float32Array(s),nc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zr(i,e){let t=ic[e];t===void 0&&(t=new Int32Array(e),ic[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function q0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function $0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function K0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function J0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;oc.set(n),i.uniformMatrix2fv(this.addr,!1,oc),Nt(t,n)}}function j0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;rc.set(n),i.uniformMatrix3fv(this.addr,!1,rc),Nt(t,n)}}function Z0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;sc.set(n),i.uniformMatrix4fv(this.addr,!1,sc),Nt(t,n)}}function Q0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function im(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function am(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tc.compareFunction=Xc,r=tc):r=mh,t.setTexture2D(e||r,s)}function lm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||_h,s)}function cm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||vh,s)}function hm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gh,s)}function um(i){switch(i){case 5126:return q0;case 35664:return Y0;case 35665:return $0;case 35666:return K0;case 35674:return J0;case 35675:return j0;case 35676:return Z0;case 5124:case 35670:return Q0;case 35667:case 35671:return em;case 35668:case 35672:return tm;case 35669:case 35673:return nm;case 5125:return im;case 36294:return sm;case 36295:return rm;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return hm}}function dm(i,e){i.uniform1fv(this.addr,e)}function fm(i,e){const t=Qi(e,this.size,2);i.uniform2fv(this.addr,t)}function pm(i,e){const t=Qi(e,this.size,3);i.uniform3fv(this.addr,t)}function mm(i,e){const t=Qi(e,this.size,4);i.uniform4fv(this.addr,t)}function gm(i,e){const t=Qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _m(i,e){const t=Qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vm(i,e){const t=Qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xm(i,e){i.uniform1iv(this.addr,e)}function ym(i,e){i.uniform2iv(this.addr,e)}function Mm(i,e){i.uniform3iv(this.addr,e)}function Sm(i,e){i.uniform4iv(this.addr,e)}function wm(i,e){i.uniform1uiv(this.addr,e)}function Tm(i,e){i.uniform2uiv(this.addr,e)}function bm(i,e){i.uniform3uiv(this.addr,e)}function Em(i,e){i.uniform4uiv(this.addr,e)}function Am(i,e,t){const n=this.cache,s=e.length,r=zr(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||mh,r[o])}function Rm(i,e,t){const n=this.cache,s=e.length,r=zr(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||_h,r[o])}function Cm(i,e,t){const n=this.cache,s=e.length,r=zr(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||vh,r[o])}function Pm(i,e,t){const n=this.cache,s=e.length,r=zr(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||gh,r[o])}function Lm(i){switch(i){case 5126:return dm;case 35664:return fm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return _m;case 35676:return vm;case 5124:case 35670:return xm;case 35667:case 35671:return ym;case 35668:case 35672:return Mm;case 35669:case 35673:return Sm;case 5125:return wm;case 36294:return Tm;case 36295:return bm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Pm}}class Im{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=um(t.type)}}class Dm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lm(t.type)}}class Um{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ao=/(\w+)(\])?(\[|\.)?/g;function ac(i,e){i.seq.push(e),i.map[e.id]=e}function Nm(i,e,t){const n=i.name,s=n.length;for(Ao.lastIndex=0;;){const r=Ao.exec(n),o=Ao.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ac(t,c===void 0?new Im(a,i,e):new Dm(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Um(a),ac(t,u)),t=u}}}class Tr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Nm(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function lc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Fm=37297;let Om=0;function km(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const cc=new Qe;function Bm(i){rt._getMatrix(cc,rt.workingColorSpace,i);const e=`mat3( ${cc.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case Cr:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+km(i.getShaderSource(e),a)}else return r}function zm(i,e){const t=Bm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Hm(i,e){let t;switch(e){case Cc:t="Linear";break;case Pc:t="Reinhard";break;case Lc:t="Cineon";break;case Ca:t="ACESFilmic";break;case Dc:t="AgX";break;case Uc:t="Neutral";break;case Ic:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gr=new C;function Vm(){rt.getLuminanceCoefficients(gr);const i=gr.x.toFixed(4),e=gr.y.toFixed(4),t=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function Wm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function gs(i){return i!==""}function uc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(i){return i.replace(qm,$m)}const Ym=new Map;function $m(i,e){let t=et[e];if(t===void 0){const n=Ym.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Aa(t)}const Km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(i){return i.replace(Km,Jm)}function Jm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ec?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ac?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function Zm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wi:case Xi:e="ENVMAP_TYPE_CUBE";break;case Or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qm(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Xi&&(e="ENVMAP_MODE_REFRACTION"),e}function eg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rc:e="ENVMAP_BLENDING_MULTIPLY";break;case Qh:e="ENVMAP_BLENDING_MIX";break;case eu:e="ENVMAP_BLENDING_ADD";break}return e}function tg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ng(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=jm(t),c=Zm(t),h=Qm(t),u=eg(t),f=tg(t),m=Gm(t),g=Wm(r),_=s.createProgram();let p,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gs).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gs).join(`
`),d.length>0&&(d+=`
`)):(p=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),d=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?et.tonemapping_pars_fragment:"",t.toneMapping!==Qn?Hm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,zm("linearToOutputTexel",t.outputColorSpace),Vm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),o=Aa(o),o=uc(o,t),o=dc(o,t),a=Aa(a),a=uc(a,t),a=dc(a,t),o=fc(o),a=fc(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=w+p+o,v=w+d+a,T=lc(s,s.VERTEX_SHADER,y),E=lc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(L){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",W=s.getShaderInfoLog(T)||"",K=s.getShaderInfoLog(E)||"",D=F.trim(),G=W.trim(),Y=K.trim();let z=!0,ce=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,E);else{const pe=hc(s,T,"vertex"),Me=hc(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+pe+`
`+Me)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(G===""||Y==="")&&(ce=!1);ce&&(L.diagnostics={runnable:z,programLog:D,vertexShader:{log:G,prefix:p},fragmentShader:{log:Y,prefix:d}})}s.deleteShader(T),s.deleteShader(E),R=new Tr(s,_),M=Xm(s,_)}let R;this.getUniforms=function(){return R===void 0&&P(this),R};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Fm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Om++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}let ig=0;class sg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rg(e),t.set(e,n)),n}}class rg{constructor(e){this.id=ig++,this.code=e,this.usedTimes=0}}function og(i,e,t,n,s,r,o){const a=new ka,l=new sg,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,x,L,F,W){const K=F.fog,D=W.geometry,G=M.isMeshStandardMaterial?F.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),z=Y&&Y.mapping===Or?Y.image.height:null,ce=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const pe=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Me=pe!==void 0?pe.length:0;let Ie=0;D.morphAttributes.position!==void 0&&(Ie=1),D.morphAttributes.normal!==void 0&&(Ie=2),D.morphAttributes.color!==void 0&&(Ie=3);let Ue,Je,Ve,Q;if(ce){const lt=xn[ce];Ue=lt.vertexShader,Je=lt.fragmentShader}else Ue=M.vertexShader,Je=M.fragmentShader,l.update(M),Ve=l.getVertexShaderID(M),Q=l.getFragmentShaderID(M);const te=i.getRenderTarget(),Z=i.state.buffers.depth.getReversed(),k=W.isInstancedMesh===!0,q=W.isBatchedMesh===!0,Se=!!M.map,be=!!M.matcap,I=!!Y,U=!!M.aoMap,se=!!M.lightMap,re=!!M.bumpMap,O=!!M.normalMap,ne=!!M.displacementMap,oe=!!M.emissiveMap,de=!!M.metalnessMap,he=!!M.roughnessMap,xe=M.anisotropy>0,A=M.clearcoat>0,S=M.dispersion>0,V=M.iridescence>0,ee=M.sheen>0,ue=M.transmission>0,ie=xe&&!!M.anisotropyMap,ke=A&&!!M.clearcoatMap,ye=A&&!!M.clearcoatNormalMap,Ne=A&&!!M.clearcoatRoughnessMap,Fe=V&&!!M.iridescenceMap,me=V&&!!M.iridescenceThicknessMap,Re=ee&&!!M.sheenColorMap,Ye=ee&&!!M.sheenRoughnessMap,ze=!!M.specularMap,Ee=!!M.specularColorMap,Ze=!!M.specularIntensityMap,N=ue&&!!M.transmissionMap,ve=ue&&!!M.thicknessMap,we=!!M.gradientMap,Le=!!M.alphaMap,ge=M.alphaTest>0,le=!!M.alphaHash,Oe=!!M.extensions;let je=Qn;M.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(je=i.toneMapping);const mt={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:Ue,fragmentShader:Je,defines:M.defines,customVertexShaderID:Ve,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:q,batchingColor:q&&W._colorsTexture!==null,instancing:k,instancingColor:k&&W.instanceColor!==null,instancingMorph:k&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:qi,alphaToCoverage:!!M.alphaToCoverage,map:Se,matcap:be,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:z,aoMap:U,lightMap:se,bumpMap:re,normalMap:O,displacementMap:f&&ne,emissiveMap:oe,normalMapObjectSpace:O&&M.normalMapType===su,normalMapTangentSpace:O&&M.normalMapType===Wc,metalnessMap:de,roughnessMap:he,anisotropy:xe,anisotropyMap:ie,clearcoat:A,clearcoatMap:ke,clearcoatNormalMap:ye,clearcoatRoughnessMap:Ne,dispersion:S,iridescence:V,iridescenceMap:Fe,iridescenceThicknessMap:me,sheen:ee,sheenColorMap:Re,sheenRoughnessMap:Ye,specularMap:ze,specularColorMap:Ee,specularIntensityMap:Ze,transmission:ue,transmissionMap:N,thicknessMap:ve,gradientMap:we,opaque:M.transparent===!1&&M.blending===_i&&M.alphaToCoverage===!1,alphaMap:Le,alphaTest:ge,alphaHash:le,combine:M.combine,mapUv:Se&&_(M.map.channel),aoMapUv:U&&_(M.aoMap.channel),lightMapUv:se&&_(M.lightMap.channel),bumpMapUv:re&&_(M.bumpMap.channel),normalMapUv:O&&_(M.normalMap.channel),displacementMapUv:ne&&_(M.displacementMap.channel),emissiveMapUv:oe&&_(M.emissiveMap.channel),metalnessMapUv:de&&_(M.metalnessMap.channel),roughnessMapUv:he&&_(M.roughnessMap.channel),anisotropyMapUv:ie&&_(M.anisotropyMap.channel),clearcoatMapUv:ke&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ye&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&_(M.sheenRoughnessMap.channel),specularMapUv:ze&&_(M.specularMap.channel),specularColorMapUv:Ee&&_(M.specularColorMap.channel),specularIntensityMapUv:Ze&&_(M.specularIntensityMap.channel),transmissionMapUv:N&&_(M.transmissionMap.channel),thicknessMapUv:ve&&_(M.thicknessMap.channel),alphaMapUv:Le&&_(M.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(O||xe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!D.attributes.uv&&(Se||Le),fog:!!K,useFog:M.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Z,skinning:W.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ie,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,decodeVideoTexture:Se&&M.map.isVideoTexture===!0&&rt.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:oe&&M.emissiveMap.isVideoTexture===!0&&rt.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wt,flipSided:M.side===qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Oe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&M.extensions.multiDraw===!0||q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function d(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)x.push(L),x.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(w(x,M),y(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function w(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function y(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const x=g[M.type];let L;if(x){const F=xn[x];L=As.clone(F.uniforms)}else L=M.uniforms;return L}function T(M,x){let L;for(let F=0,W=h.length;F<W;F++){const K=h[F];if(K.cacheKey===x){L=K,++L.usedTimes;break}}return L===void 0&&(L=new ng(i,x,M,r),h.push(L)),L}function E(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function P(M){l.remove(M)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:v,acquireProgram:T,releaseProgram:E,releaseShaderCache:P,programs:h,dispose:R}}function ag(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function lg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function mc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,m,g,_,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=p),e++,d}function a(u,f,m,g,_,p){const d=o(u,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(u,f,m,g,_,p){const d=o(u,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||lg),n.length>1&&n.sort(f||mc),s.length>1&&s.sort(f||mc)}function h(){for(let u=e,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function cg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new gc,i.set(n,[o])):s>=r.length?(o=new gc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function hg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new He};break;case"SpotLight":t={position:new C,direction:new C,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function ug(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let dg=0;function fg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pg(i){const e=new hg,t=ug(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new pt,o=new pt;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,g=0,_=0,p=0,d=0,w=0,y=0,v=0,T=0,E=0,P=0;c.sort(fg);for(let M=0,x=c.length;M<x;M++){const L=c[M],F=L.color,W=L.intensity,K=L.distance,D=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*W,u+=F.g*W,f+=F.b*W;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],W);P++}else if(L.isDirectionalLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,z=t.get(L);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=D,n.directionalShadowMatrix[m]=L.shadow.matrix,w++}n.directional[m]=G,m++}else if(L.isSpotLight){const G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(F).multiplyScalar(W),G.distance=K,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[_]=G;const Y=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,Y.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[_]=Y.matrix,L.castShadow){const z=t.get(L);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=D,v++}_++}else if(L.isRectAreaLight){const G=e.get(L);G.color.copy(F).multiplyScalar(W),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=G,p++}else if(L.isPointLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const Y=L.shadow,z=t.get(L);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=G,g++}else if(L.isHemisphereLight){const G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(W),G.groundColor.copy(L.groundColor).multiplyScalar(W),n.hemi[d]=G,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==m||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==p||R.hemiLength!==d||R.numDirectionalShadows!==w||R.numPointShadows!==y||R.numSpotShadows!==v||R.numSpotMaps!==T||R.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,R.directionalLength=m,R.pointLength=g,R.spotLength=_,R.rectAreaLength=p,R.hemiLength=d,R.numDirectionalShadows=w,R.numPointShadows=y,R.numSpotShadows=v,R.numSpotMaps=T,R.numLightProbes=P,n.version=dg++)}function l(c,h){let u=0,f=0,m=0,g=0,_=0;const p=h.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const y=c[d];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),u++}else if(y.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function _c(i){const e=new pg(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function mg(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new _c(i),e.set(s,[a])):r>=o.length?(a=new _c(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_g=`uniform sampler2D shadow_pass;
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
}`;function vg(i,e,t){let n=new Ba;const s=new fe,r=new fe,o=new dt,a=new kd({depthPacking:iu}),l=new Bd,c={},h=t.maxTextureSize,u={[ei]:qt,[qt]:ei,[Wt]:Wt},f=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:gg,fragmentShader:_g}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new vt;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new X(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let d=this.type;this.render=function(E,P,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(On),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=d!==Nn&&this.type===Nn,K=d===Nn&&this.type!==Nn;for(let D=0,G=E.length;D<G;D++){const Y=E[D],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ce=z.getFrameExtents();if(s.multiply(ce),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,z.mapSize.y=r.y)),z.map===null||W===!0||K===!0){const Me=this.type!==Nn?{minFilter:pn,magFilter:pn}:{};z.map!==null&&z.map.dispose(),z.map=new mn(s.x,s.y,Me),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const pe=z.getViewportCount();for(let Me=0;Me<pe;Me++){const Ie=z.getViewport(Me);o.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),F.viewport(o),z.updateMatrices(Y,Me),n=z.getFrustum(),v(P,R,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===Nn&&w(z,R),z.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(M,x,L)};function w(E,P){const R=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new mn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(P,null,R,f,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(P,null,R,m,_,null)}function y(E,P,R,M){let x=null;const L=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)x=L;else if(x=R.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=x.uuid,W=P.uuid;let K=c[F];K===void 0&&(K={},c[F]=K);let D=K[W];D===void 0&&(D=x.clone(),K[W]=D,P.addEventListener("dispose",T)),x=D}if(x.visible=P.visible,x.wireframe=P.wireframe,M===Nn?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:u[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=i.properties.get(x);F.light=R}return x}function v(E,P,R,M,x){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Nn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const W=e.update(E),K=E.material;if(Array.isArray(K)){const D=W.groups;for(let G=0,Y=D.length;G<Y;G++){const z=D[G],ce=K[z.materialIndex];if(ce&&ce.visible){const pe=y(E,ce,M,x);E.onBeforeShadow(i,E,P,R,W,pe,z),i.renderBufferDirect(R,null,W,pe,E,z),E.onAfterShadow(i,E,P,R,W,pe,z)}}}else if(K.visible){const D=y(E,K,M,x);E.onBeforeShadow(i,E,P,R,W,D,null),i.renderBufferDirect(R,null,W,D,E,null),E.onAfterShadow(i,E,P,R,W,D,null)}}const F=E.children;for(let W=0,K=F.length;W<K;W++)v(F[W],P,R,M,x)}function T(E){E.target.removeEventListener("dispose",T);for(const R in c){const M=c[R],x=E.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const xg={[ko]:Bo,[zo]:Go,[Ho]:Wo,[Gi]:Vo,[Bo]:ko,[Go]:zo,[Wo]:Ho,[Vo]:Gi};function yg(i,e){function t(){let N=!1;const ve=new dt;let we=null;const Le=new dt(0,0,0,0);return{setMask:function(ge){we!==ge&&!N&&(i.colorMask(ge,ge,ge,ge),we=ge)},setLocked:function(ge){N=ge},setClear:function(ge,le,Oe,je,mt){mt===!0&&(ge*=je,le*=je,Oe*=je),ve.set(ge,le,Oe,je),Le.equals(ve)===!1&&(i.clearColor(ge,le,Oe,je),Le.copy(ve))},reset:function(){N=!1,we=null,Le.set(-1,0,0,0)}}}function n(){let N=!1,ve=!1,we=null,Le=null,ge=null;return{setReversed:function(le){if(ve!==le){const Oe=e.get("EXT_clip_control");le?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ve=le;const je=ge;ge=null,this.setClear(je)}},getReversed:function(){return ve},setTest:function(le){le?te(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(le){we!==le&&!N&&(i.depthMask(le),we=le)},setFunc:function(le){if(ve&&(le=xg[le]),Le!==le){switch(le){case ko:i.depthFunc(i.NEVER);break;case Bo:i.depthFunc(i.ALWAYS);break;case zo:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case Ho:i.depthFunc(i.EQUAL);break;case Vo:i.depthFunc(i.GEQUAL);break;case Go:i.depthFunc(i.GREATER);break;case Wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=le}},setLocked:function(le){N=le},setClear:function(le){ge!==le&&(ve&&(le=1-le),i.clearDepth(le),ge=le)},reset:function(){N=!1,we=null,Le=null,ge=null,ve=!1}}}function s(){let N=!1,ve=null,we=null,Le=null,ge=null,le=null,Oe=null,je=null,mt=null;return{setTest:function(lt){N||(lt?te(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(lt){ve!==lt&&!N&&(i.stencilMask(lt),ve=lt)},setFunc:function(lt,Rn,vn){(we!==lt||Le!==Rn||ge!==vn)&&(i.stencilFunc(lt,Rn,vn),we=lt,Le=Rn,ge=vn)},setOp:function(lt,Rn,vn){(le!==lt||Oe!==Rn||je!==vn)&&(i.stencilOp(lt,Rn,vn),le=lt,Oe=Rn,je=vn)},setLocked:function(lt){N=lt},setClear:function(lt){mt!==lt&&(i.clearStencil(lt),mt=lt)},reset:function(){N=!1,ve=null,we=null,Le=null,ge=null,le=null,Oe=null,je=null,mt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,m=[],g=null,_=!1,p=null,d=null,w=null,y=null,v=null,T=null,E=null,P=new He(0,0,0),R=0,M=!1,x=null,L=null,F=null,W=null,K=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=Y>=2);let ce=null,pe={};const Me=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),Ue=new dt().fromArray(Me),Je=new dt().fromArray(Ie);function Ve(N,ve,we,Le){const ge=new Uint8Array(4),le=i.createTexture();i.bindTexture(N,le),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<we;Oe++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(ve+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return le}const Q={};Q[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(i.DEPTH_TEST),o.setFunc(Gi),re(!1),O(ol),te(i.CULL_FACE),U(On);function te(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Z(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function k(N,ve){return u[N]!==ve?(i.bindFramebuffer(N,ve),u[N]=ve,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ve),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function q(N,ve){let we=m,Le=!1;if(N){we=f.get(ve),we===void 0&&(we=[],f.set(ve,we));const ge=N.textures;if(we.length!==ge.length||we[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Oe=ge.length;le<Oe;le++)we[le]=i.COLOR_ATTACHMENT0+le;we.length=ge.length,Le=!0}}else we[0]!==i.BACK&&(we[0]=i.BACK,Le=!0);Le&&i.drawBuffers(we)}function Se(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const be={[fi]:i.FUNC_ADD,[Fh]:i.FUNC_SUBTRACT,[Oh]:i.FUNC_REVERSE_SUBTRACT};be[kh]=i.MIN,be[Bh]=i.MAX;const I={[zh]:i.ZERO,[Hh]:i.ONE,[Vh]:i.SRC_COLOR,[Fo]:i.SRC_ALPHA,[$h]:i.SRC_ALPHA_SATURATE,[qh]:i.DST_COLOR,[Wh]:i.DST_ALPHA,[Gh]:i.ONE_MINUS_SRC_COLOR,[Oo]:i.ONE_MINUS_SRC_ALPHA,[Yh]:i.ONE_MINUS_DST_COLOR,[Xh]:i.ONE_MINUS_DST_ALPHA,[Kh]:i.CONSTANT_COLOR,[Jh]:i.ONE_MINUS_CONSTANT_COLOR,[jh]:i.CONSTANT_ALPHA,[Zh]:i.ONE_MINUS_CONSTANT_ALPHA};function U(N,ve,we,Le,ge,le,Oe,je,mt,lt){if(N===On){_===!0&&(Z(i.BLEND),_=!1);return}if(_===!1&&(te(i.BLEND),_=!0),N!==Nh){if(N!==p||lt!==M){if((d!==fi||v!==fi)&&(i.blendEquation(i.FUNC_ADD),d=fi,v=fi),lt)switch(N){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case at:i.blendFunc(i.ONE,i.ONE);break;case al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ll:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case at:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case al:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ll:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,y=null,T=null,E=null,P.set(0,0,0),R=0,p=N,M=lt}return}ge=ge||ve,le=le||we,Oe=Oe||Le,(ve!==d||ge!==v)&&(i.blendEquationSeparate(be[ve],be[ge]),d=ve,v=ge),(we!==w||Le!==y||le!==T||Oe!==E)&&(i.blendFuncSeparate(I[we],I[Le],I[le],I[Oe]),w=we,y=Le,T=le,E=Oe),(je.equals(P)===!1||mt!==R)&&(i.blendColor(je.r,je.g,je.b,mt),P.copy(je),R=mt),p=N,M=!1}function se(N,ve){N.side===Wt?Z(i.CULL_FACE):te(i.CULL_FACE);let we=N.side===qt;ve&&(we=!we),re(we),N.blending===_i&&N.transparent===!1?U(On):U(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const Le=N.stencilWrite;a.setTest(Le),Le&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),oe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(N){x!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),x=N)}function O(N){N!==Dh?(te(i.CULL_FACE),N!==L&&(N===ol?i.cullFace(i.BACK):N===Uh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),L=N}function ne(N){N!==F&&(G&&i.lineWidth(N),F=N)}function oe(N,ve,we){N?(te(i.POLYGON_OFFSET_FILL),(W!==ve||K!==we)&&(i.polygonOffset(ve,we),W=ve,K=we)):Z(i.POLYGON_OFFSET_FILL)}function de(N){N?te(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function he(N){N===void 0&&(N=i.TEXTURE0+D-1),ce!==N&&(i.activeTexture(N),ce=N)}function xe(N,ve,we){we===void 0&&(ce===null?we=i.TEXTURE0+D-1:we=ce);let Le=pe[we];Le===void 0&&(Le={type:void 0,texture:void 0},pe[we]=Le),(Le.type!==N||Le.texture!==ve)&&(ce!==we&&(i.activeTexture(we),ce=we),i.bindTexture(N,ve||Q[N]),Le.type=N,Le.texture=ve)}function A(){const N=pe[ce];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(N){Ue.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ue.copy(N))}function Ye(N){Je.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Je.copy(N))}function ze(N,ve){let we=c.get(ve);we===void 0&&(we=new WeakMap,c.set(ve,we));let Le=we.get(N);Le===void 0&&(Le=i.getUniformBlockIndex(ve,N.name),we.set(N,Le))}function Ee(N,ve){const Le=c.get(ve).get(N);l.get(ve)!==Le&&(i.uniformBlockBinding(ve,Le,N.__bindingPointIndex),l.set(ve,Le))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ce=null,pe={},u={},f=new WeakMap,m=[],g=null,_=!1,p=null,d=null,w=null,y=null,v=null,T=null,E=null,P=new He(0,0,0),R=0,M=!1,x=null,L=null,F=null,W=null,K=null,Ue.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:Z,bindFramebuffer:k,drawBuffers:q,useProgram:Se,setBlending:U,setMaterial:se,setFlipSided:re,setCullFace:O,setLineWidth:ne,setPolygonOffset:oe,setScissorTest:de,activeTexture:he,bindTexture:xe,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:V,texImage2D:Fe,texImage3D:me,updateUBOMapping:ze,uniformBlockBinding:Ee,texStorage2D:ye,texStorage3D:Ne,texSubImage2D:ee,texSubImage3D:ue,compressedTexSubImage2D:ie,compressedTexSubImage3D:ke,scissor:Re,viewport:Ye,reset:Ze}}function Mg(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return m?new OffscreenCanvas(A,S):Ir("canvas")}function _(A,S,V){let ee=1;const ue=xe(A);if((ue.width>V||ue.height>V)&&(ee=V/Math.max(ue.width,ue.height)),ee<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ie=Math.floor(ee*ue.width),ke=Math.floor(ee*ue.height);u===void 0&&(u=g(ie,ke));const ye=S?g(ie,ke):u;return ye.width=ie,ye.height=ke,ye.getContext("2d").drawImage(A,0,0,ie,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+ie+"x"+ke+")."),ye}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),A;return A}function p(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,S,V,ee,ue=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ie=S;if(S===i.RED&&(V===i.FLOAT&&(ie=i.R32F),V===i.HALF_FLOAT&&(ie=i.R16F),V===i.UNSIGNED_BYTE&&(ie=i.R8)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(ie=i.R8UI),V===i.UNSIGNED_SHORT&&(ie=i.R16UI),V===i.UNSIGNED_INT&&(ie=i.R32UI),V===i.BYTE&&(ie=i.R8I),V===i.SHORT&&(ie=i.R16I),V===i.INT&&(ie=i.R32I)),S===i.RG&&(V===i.FLOAT&&(ie=i.RG32F),V===i.HALF_FLOAT&&(ie=i.RG16F),V===i.UNSIGNED_BYTE&&(ie=i.RG8)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(ie=i.RG8UI),V===i.UNSIGNED_SHORT&&(ie=i.RG16UI),V===i.UNSIGNED_INT&&(ie=i.RG32UI),V===i.BYTE&&(ie=i.RG8I),V===i.SHORT&&(ie=i.RG16I),V===i.INT&&(ie=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),V===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),V===i.UNSIGNED_INT&&(ie=i.RGB32UI),V===i.BYTE&&(ie=i.RGB8I),V===i.SHORT&&(ie=i.RGB16I),V===i.INT&&(ie=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),V===i.UNSIGNED_INT&&(ie=i.RGBA32UI),V===i.BYTE&&(ie=i.RGBA8I),V===i.SHORT&&(ie=i.RGBA16I),V===i.INT&&(ie=i.RGBA32I)),S===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),S===i.RGBA){const ke=ue?Cr:rt.getTransfer(ee);V===i.FLOAT&&(ie=i.RGBA32F),V===i.HALF_FLOAT&&(ie=i.RGBA16F),V===i.UNSIGNED_BYTE&&(ie=ke===ct?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(A,S){let V;return A?S===null||S===vi||S===ws?V=i.DEPTH24_STENCIL8:S===Fn?V=i.DEPTH32F_STENCIL8:S===Ss&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vi||S===ws?V=i.DEPTH_COMPONENT24:S===Fn?V=i.DEPTH_COMPONENT32F:S===Ss&&(V=i.DEPTH_COMPONENT16),V}function T(A,S){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==pn&&A.minFilter!==Mn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function E(A){const S=A.target;S.removeEventListener("dispose",E),R(S),S.isVideoTexture&&h.delete(S)}function P(A){const S=A.target;S.removeEventListener("dispose",P),x(S)}function R(A){const S=n.get(A);if(S.__webglInit===void 0)return;const V=A.source,ee=f.get(V);if(ee){const ue=ee[S.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&M(A),Object.keys(ee).length===0&&f.delete(V)}n.remove(A)}function M(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const V=A.source,ee=f.get(V);delete ee[S.__cacheKey],o.memory.textures--}function x(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(S.__webglFramebuffer[ee]))for(let ue=0;ue<S.__webglFramebuffer[ee].length;ue++)i.deleteFramebuffer(S.__webglFramebuffer[ee][ue]);else i.deleteFramebuffer(S.__webglFramebuffer[ee]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ee])}else{if(Array.isArray(S.__webglFramebuffer))for(let ee=0;ee<S.__webglFramebuffer.length;ee++)i.deleteFramebuffer(S.__webglFramebuffer[ee]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ee=0;ee<S.__webglColorRenderbuffer.length;ee++)S.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ee]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=A.textures;for(let ee=0,ue=V.length;ee<ue;ee++){const ie=n.get(V[ee]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(V[ee])}n.remove(A)}let L=0;function F(){L=0}function W(){const A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function K(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function D(A,S){const V=n.get(A);if(A.isVideoTexture&&de(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,A,S);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function G(A,S){const V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){Q(V,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function Y(A,S){const V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){Q(V,A,S);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function z(A,S){const V=n.get(A);if(A.version>0&&V.__version!==A.version){te(V,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}const ce={[Rr]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[Yo]:i.MIRRORED_REPEAT},pe={[pn]:i.NEAREST,[tu]:i.NEAREST_MIPMAP_NEAREST,[zs]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[Xr]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},Me={[ru]:i.NEVER,[uu]:i.ALWAYS,[ou]:i.LESS,[Xc]:i.LEQUAL,[au]:i.EQUAL,[hu]:i.GEQUAL,[lu]:i.GREATER,[cu]:i.NOTEQUAL};function Ie(A,S){if(S.type===Fn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Mn||S.magFilter===Xr||S.magFilter===zs||S.magFilter===gi||S.minFilter===Mn||S.minFilter===Xr||S.minFilter===zs||S.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ce[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ce[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ce[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,pe[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,pe[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===pn||S.minFilter!==zs&&S.minFilter!==gi||S.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ue(A,S){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",E));const ee=S.source;let ue=f.get(ee);ue===void 0&&(ue={},f.set(ee,ue));const ie=K(S);if(ie!==A.__cacheKey){ue[ie]===void 0&&(ue[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ue[ie].usedTimes++;const ke=ue[A.__cacheKey];ke!==void 0&&(ue[A.__cacheKey].usedTimes--,ke.usedTimes===0&&M(S)),A.__cacheKey=ie,A.__webglTexture=ue[ie].texture}return V}function Je(A,S,V){return Math.floor(Math.floor(A/V)/S)}function Ve(A,S,V,ee){const ie=A.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,V,ee,S.data);else{ie.sort((me,Re)=>me.start-Re.start);let ke=0;for(let me=1;me<ie.length;me++){const Re=ie[ke],Ye=ie[me],ze=Re.start+Re.count,Ee=Je(Ye.start,S.width,4),Ze=Je(Re.start,S.width,4);Ye.start<=ze+1&&Ee===Ze&&Je(Ye.start+Ye.count-1,S.width,4)===Ee?Re.count=Math.max(Re.count,Ye.start+Ye.count-Re.start):(++ke,ie[ke]=Ye)}ie.length=ke+1;const ye=i.getParameter(i.UNPACK_ROW_LENGTH),Ne=i.getParameter(i.UNPACK_SKIP_PIXELS),Fe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let me=0,Re=ie.length;me<Re;me++){const Ye=ie[me],ze=Math.floor(Ye.start/4),Ee=Math.ceil(Ye.count/4),Ze=ze%S.width,N=Math.floor(ze/S.width),ve=Ee,we=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Ze,N,ve,we,V,ee,S.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ye),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,Fe)}}function Q(A,S,V){let ee=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ee=i.TEXTURE_3D);const ue=Ue(A,S),ie=S.source;t.bindTexture(ee,A.__webglTexture,i.TEXTURE0+V);const ke=n.get(ie);if(ie.version!==ke.__version||ue===!0){t.activeTexture(i.TEXTURE0+V);const ye=rt.getPrimaries(rt.workingColorSpace),Ne=S.colorSpace===Kn?null:rt.getPrimaries(S.colorSpace),Fe=S.colorSpace===Kn||ye===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let me=_(S.image,!1,s.maxTextureSize);me=he(S,me);const Re=r.convert(S.format,S.colorSpace),Ye=r.convert(S.type);let ze=y(S.internalFormat,Re,Ye,S.colorSpace,S.isVideoTexture);Ie(ee,S);let Ee;const Ze=S.mipmaps,N=S.isVideoTexture!==!0,ve=ke.__version===void 0||ue===!0,we=ie.dataReady,Le=T(S,me);if(S.isDepthTexture)ze=v(S.format===bs,S.type),ve&&(N?t.texStorage2D(i.TEXTURE_2D,1,ze,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,ze,me.width,me.height,0,Re,Ye,null));else if(S.isDataTexture)if(Ze.length>0){N&&ve&&t.texStorage2D(i.TEXTURE_2D,Le,ze,Ze[0].width,Ze[0].height);for(let ge=0,le=Ze.length;ge<le;ge++)Ee=Ze[ge],N?we&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Ee.width,Ee.height,Re,Ye,Ee.data):t.texImage2D(i.TEXTURE_2D,ge,ze,Ee.width,Ee.height,0,Re,Ye,Ee.data);S.generateMipmaps=!1}else N?(ve&&t.texStorage2D(i.TEXTURE_2D,Le,ze,me.width,me.height),we&&Ve(S,me,Re,Ye)):t.texImage2D(i.TEXTURE_2D,0,ze,me.width,me.height,0,Re,Ye,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){N&&ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,ze,Ze[0].width,Ze[0].height,me.depth);for(let ge=0,le=Ze.length;ge<le;ge++)if(Ee=Ze[ge],S.format!==fn)if(Re!==null)if(N){if(we)if(S.layerUpdates.size>0){const Oe=Yl(Ee.width,Ee.height,S.format,S.type);for(const je of S.layerUpdates){const mt=Ee.data.subarray(je*Oe/Ee.data.BYTES_PER_ELEMENT,(je+1)*Oe/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,je,Ee.width,Ee.height,1,Re,mt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Ee.width,Ee.height,me.depth,Re,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,ze,Ee.width,Ee.height,me.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?we&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Ee.width,Ee.height,me.depth,Re,Ye,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,ze,Ee.width,Ee.height,me.depth,0,Re,Ye,Ee.data)}else{N&&ve&&t.texStorage2D(i.TEXTURE_2D,Le,ze,Ze[0].width,Ze[0].height);for(let ge=0,le=Ze.length;ge<le;ge++)Ee=Ze[ge],S.format!==fn?Re!==null?N?we&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,Ee.width,Ee.height,Re,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,ze,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?we&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Ee.width,Ee.height,Re,Ye,Ee.data):t.texImage2D(i.TEXTURE_2D,ge,ze,Ee.width,Ee.height,0,Re,Ye,Ee.data)}else if(S.isDataArrayTexture)if(N){if(ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,ze,me.width,me.height,me.depth),we)if(S.layerUpdates.size>0){const ge=Yl(me.width,me.height,S.format,S.type);for(const le of S.layerUpdates){const Oe=me.data.subarray(le*ge/me.data.BYTES_PER_ELEMENT,(le+1)*ge/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,me.width,me.height,1,Re,Ye,Oe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Re,Ye,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,me.width,me.height,me.depth,0,Re,Ye,me.data);else if(S.isData3DTexture)N?(ve&&t.texStorage3D(i.TEXTURE_3D,Le,ze,me.width,me.height,me.depth),we&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Re,Ye,me.data)):t.texImage3D(i.TEXTURE_3D,0,ze,me.width,me.height,me.depth,0,Re,Ye,me.data);else if(S.isFramebufferTexture){if(ve)if(N)t.texStorage2D(i.TEXTURE_2D,Le,ze,me.width,me.height);else{let ge=me.width,le=me.height;for(let Oe=0;Oe<Le;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,ze,ge,le,0,Re,Ye,null),ge>>=1,le>>=1}}else if(Ze.length>0){if(N&&ve){const ge=xe(Ze[0]);t.texStorage2D(i.TEXTURE_2D,Le,ze,ge.width,ge.height)}for(let ge=0,le=Ze.length;ge<le;ge++)Ee=Ze[ge],N?we&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Re,Ye,Ee):t.texImage2D(i.TEXTURE_2D,ge,ze,Re,Ye,Ee);S.generateMipmaps=!1}else if(N){if(ve){const ge=xe(me);t.texStorage2D(i.TEXTURE_2D,Le,ze,ge.width,ge.height)}we&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,Ye,me)}else t.texImage2D(i.TEXTURE_2D,0,ze,Re,Ye,me);p(S)&&d(ee),ke.__version=ie.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function te(A,S,V){if(S.image.length!==6)return;const ee=Ue(A,S),ue=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);const ie=n.get(ue);if(ue.version!==ie.__version||ee===!0){t.activeTexture(i.TEXTURE0+V);const ke=rt.getPrimaries(rt.workingColorSpace),ye=S.colorSpace===Kn?null:rt.getPrimaries(S.colorSpace),Ne=S.colorSpace===Kn||ke===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Fe=S.isCompressedTexture||S.image[0].isCompressedTexture,me=S.image[0]&&S.image[0].isDataTexture,Re=[];for(let le=0;le<6;le++)!Fe&&!me?Re[le]=_(S.image[le],!0,s.maxCubemapSize):Re[le]=me?S.image[le].image:S.image[le],Re[le]=he(S,Re[le]);const Ye=Re[0],ze=r.convert(S.format,S.colorSpace),Ee=r.convert(S.type),Ze=y(S.internalFormat,ze,Ee,S.colorSpace),N=S.isVideoTexture!==!0,ve=ie.__version===void 0||ee===!0,we=ue.dataReady;let Le=T(S,Ye);Ie(i.TEXTURE_CUBE_MAP,S);let ge;if(Fe){N&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Ze,Ye.width,Ye.height);for(let le=0;le<6;le++){ge=Re[le].mipmaps;for(let Oe=0;Oe<ge.length;Oe++){const je=ge[Oe];S.format!==fn?ze!==null?N?we&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Oe,0,0,je.width,je.height,ze,je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Oe,Ze,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Oe,0,0,je.width,je.height,ze,Ee,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Oe,Ze,je.width,je.height,0,ze,Ee,je.data)}}}else{if(ge=S.mipmaps,N&&ve){ge.length>0&&Le++;const le=xe(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Ze,le.width,le.height)}for(let le=0;le<6;le++)if(me){N?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Re[le].width,Re[le].height,ze,Ee,Re[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ze,Re[le].width,Re[le].height,0,ze,Ee,Re[le].data);for(let Oe=0;Oe<ge.length;Oe++){const mt=ge[Oe].image[le].image;N?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Oe+1,0,0,mt.width,mt.height,ze,Ee,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Oe+1,Ze,mt.width,mt.height,0,ze,Ee,mt.data)}}else{N?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ze,Ee,Re[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ze,ze,Ee,Re[le]);for(let Oe=0;Oe<ge.length;Oe++){const je=ge[Oe];N?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Oe+1,0,0,ze,Ee,je.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Oe+1,Ze,ze,Ee,je.image[le])}}}p(S)&&d(i.TEXTURE_CUBE_MAP),ie.__version=ue.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Z(A,S,V,ee,ue,ie){const ke=r.convert(V.format,V.colorSpace),ye=r.convert(V.type),Ne=y(V.internalFormat,ke,ye,V.colorSpace),Fe=n.get(S),me=n.get(V);if(me.__renderTarget=S,!Fe.__hasExternalTextures){const Re=Math.max(1,S.width>>ie),Ye=Math.max(1,S.height>>ie);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,ie,Ne,Re,Ye,S.depth,0,ke,ye,null):t.texImage2D(ue,ie,Ne,Re,Ye,0,ke,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),oe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,ue,me.__webglTexture,0,ne(S)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,ue,me.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function k(A,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const ee=S.depthTexture,ue=ee&&ee.isDepthTexture?ee.type:null,ie=v(S.stencilBuffer,ue),ke=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=ne(S);oe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,ie,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,ie,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ie,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ke,i.RENDERBUFFER,A)}else{const ee=S.textures;for(let ue=0;ue<ee.length;ue++){const ie=ee[ue],ke=r.convert(ie.format,ie.colorSpace),ye=r.convert(ie.type),Ne=y(ie.internalFormat,ke,ye,ie.colorSpace),Fe=ne(S);V&&oe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Ne,S.width,S.height):oe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe,Ne,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function q(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(S.depthTexture);ee.__renderTarget=S,(!ee.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),D(S.depthTexture,0);const ue=ee.__webglTexture,ie=ne(S);if(S.depthTexture.format===Ts)oe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(S.depthTexture.format===bs)oe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Se(A){const S=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const ee=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ee){const ue=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ee.removeEventListener("dispose",ue)};ee.addEventListener("dispose",ue),S.__depthDisposeCallback=ue}S.__boundDepthTexture=ee}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const ee=A.texture.mipmaps;ee&&ee.length>0?q(S.__webglFramebuffer[0],A):q(S.__webglFramebuffer,A)}else if(V){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]===void 0)S.__webglDepthbuffer[ee]=i.createRenderbuffer(),k(S.__webglDepthbuffer[ee],A,!1);else{const ue=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,ie)}}else{const ee=A.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),k(S.__webglDepthbuffer,A,!1);else{const ue=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(A,S,V){const ee=n.get(A);S!==void 0&&Z(ee.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Se(A)}function I(A){const S=A.texture,V=n.get(A),ee=n.get(S);A.addEventListener("dispose",P);const ue=A.textures,ie=A.isWebGLCubeRenderTarget===!0,ke=ue.length>1;if(ke||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=S.version,o.memory.textures++),ie){V.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[ye]=[];for(let Ne=0;Ne<S.mipmaps.length;Ne++)V.__webglFramebuffer[ye][Ne]=i.createFramebuffer()}else V.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let ye=0;ye<S.mipmaps.length;ye++)V.__webglFramebuffer[ye]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ke)for(let ye=0,Ne=ue.length;ye<Ne;ye++){const Fe=n.get(ue[ye]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&oe(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ye=0;ye<ue.length;ye++){const Ne=ue[ye];V.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ye]);const Fe=r.convert(Ne.format,Ne.colorSpace),me=r.convert(Ne.type),Re=y(Ne.internalFormat,Fe,me,Ne.colorSpace,A.isXRRenderTarget===!0),Ye=ne(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,Re,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,V.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),k(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,S);for(let ye=0;ye<6;ye++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ne=0;Ne<S.mipmaps.length;Ne++)Z(V.__webglFramebuffer[ye][Ne],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne);else Z(V.__webglFramebuffer[ye],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);p(S)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let ye=0,Ne=ue.length;ye<Ne;ye++){const Fe=ue[ye],me=n.get(Fe);let Re=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Re=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Re,me.__webglTexture),Ie(Re,Fe),Z(V.__webglFramebuffer,A,Fe,i.COLOR_ATTACHMENT0+ye,Re,0),p(Fe)&&d(Re)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ye=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,ee.__webglTexture),Ie(ye,S),S.mipmaps&&S.mipmaps.length>0)for(let Ne=0;Ne<S.mipmaps.length;Ne++)Z(V.__webglFramebuffer[Ne],A,S,i.COLOR_ATTACHMENT0,ye,Ne);else Z(V.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,ye,0);p(S)&&d(ye),t.unbindTexture()}A.depthBuffer&&Se(A)}function U(A){const S=A.textures;for(let V=0,ee=S.length;V<ee;V++){const ue=S[V];if(p(ue)){const ie=w(A),ke=n.get(ue).__webglTexture;t.bindTexture(ie,ke),d(ie),t.unbindTexture()}}}const se=[],re=[];function O(A){if(A.samples>0){if(oe(A)===!1){const S=A.textures,V=A.width,ee=A.height;let ue=i.COLOR_BUFFER_BIT;const ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ke=n.get(A),ye=S.length>1;if(ye)for(let Fe=0;Fe<S.length;Fe++)t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const Ne=A.texture.mipmaps;Ne&&Ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Fe=0;Fe<S.length;Fe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Fe]);const me=n.get(S[Fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,me,0)}i.blitFramebuffer(0,0,V,ee,0,0,V,ee,ue,i.NEAREST),l===!0&&(se.length=0,re.length=0,se.push(i.COLOR_ATTACHMENT0+Fe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(se.push(ie),re.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Fe=0;Fe<S.length;Fe++){t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Fe]);const me=n.get(S[Fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ne(A){return Math.min(s.maxSamples,A.samples)}function oe(A){const S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function de(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function he(A,S){const V=A.colorSpace,ee=A.format,ue=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==qi&&V!==Kn&&(rt.getTransfer(V)===ct?(ee!==fn||ue!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function xe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=F,this.setTexture2D=D,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=be,this.setupRenderTarget=I,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=oe}function Sg(i,e){function t(n,s=Kn){let r;const o=rt.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===La)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fc)return i.BYTE;if(n===Oc)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===Pa)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===kn)return i.HALF_FLOAT;if(n===zc)return i.ALPHA;if(n===Hc)return i.RGB;if(n===fn)return i.RGBA;if(n===Ts)return i.DEPTH_COMPONENT;if(n===bs)return i.DEPTH_STENCIL;if(n===Vc)return i.RED;if(n===Da)return i.RED_INTEGER;if(n===Gc)return i.RG;if(n===Ua)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===yr||n===Mr||n===Sr||n===wr)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===Ko||n===Jo||n===jo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zo||n===Qo||n===ea)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zo||n===Qo)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ea)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ta||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ta)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===na)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ia)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ra)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===aa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===la)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ca)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ha)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ua)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===da)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ma||n===ga||n===_a)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ma)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===va||n===xa||n===ya||n===Ma)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new nh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Dt({vertexShader:wg,fragmentShader:Tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new X(new it(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Eg extends Zi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const _=typeof XRWebGLBinding<"u",p=new bg,d={},w=t.getContextAttributes();let y=null,v=null;const T=[],E=[],P=new fe;let R=null;const M=new Zt;M.viewport=new dt;const x=new Zt;x.viewport=new dt;const L=[M,x],F=new Xd;let W=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let te=T[Q];return te===void 0&&(te=new fo,T[Q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Q){let te=T[Q];return te===void 0&&(te=new fo,T[Q]=te),te.getGripSpace()},this.getHand=function(Q){let te=T[Q];return te===void 0&&(te=new fo,T[Q]=te),te.getHandSpace()};function D(Q){const te=E.indexOf(Q.inputSource);if(te===-1)return;const Z=T[te];Z!==void 0&&(Z.update(Q.inputSource,Q.frame,c||o),Z.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<T.length;Q++){const te=E[Q];te!==null&&(E[Q]=null,T[Q].disconnect(te))}W=null,K=null,p.reset();for(const Q in d)delete d[Q];e.setRenderTarget(y),m=null,f=null,u=null,s=null,v=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Y),w.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,k=null,q=null;w.depth&&(q=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=w.stencil?bs:Ts,k=w.stencil?ws:vi);const Se={colorFormat:t.RGBA8,depthFormat:q,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Se),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new mn(f.textureWidth,f.textureHeight,{format:fn,type:bn,depthTexture:new th(f.textureWidth,f.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Z={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new mn(m.framebufferWidth,m.framebufferHeight,{format:fn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(Q){for(let te=0;te<Q.removed.length;te++){const Z=Q.removed[te],k=E.indexOf(Z);k>=0&&(E[k]=null,T[k].disconnect(Z))}for(let te=0;te<Q.added.length;te++){const Z=Q.added[te];let k=E.indexOf(Z);if(k===-1){for(let Se=0;Se<T.length;Se++)if(Se>=E.length){E.push(Z),k=Se;break}else if(E[Se]===null){E[Se]=Z,k=Se;break}if(k===-1)break}const q=T[k];q&&q.connect(Z)}}const z=new C,ce=new C;function pe(Q,te,Z){z.setFromMatrixPosition(te.matrixWorld),ce.setFromMatrixPosition(Z.matrixWorld);const k=z.distanceTo(ce),q=te.projectionMatrix.elements,Se=Z.projectionMatrix.elements,be=q[14]/(q[10]-1),I=q[14]/(q[10]+1),U=(q[9]+1)/q[5],se=(q[9]-1)/q[5],re=(q[8]-1)/q[0],O=(Se[8]+1)/Se[0],ne=be*re,oe=be*O,de=k/(-re+O),he=de*-re;if(te.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(he),Q.translateZ(de),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),q[10]===-1)Q.projectionMatrix.copy(te.projectionMatrix),Q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const xe=be+de,A=I+de,S=ne-he,V=oe+(k-he),ee=U*I/A*xe,ue=se*I/A*xe;Q.projectionMatrix.makePerspective(S,V,ee,ue,xe,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Me(Q,te){te===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(te.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let te=Q.near,Z=Q.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(Z=p.depthFar)),F.near=x.near=M.near=te,F.far=x.far=M.far=Z,(W!==F.near||K!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),W=F.near,K=F.far),F.layers.mask=Q.layers.mask|6,M.layers.mask=F.layers.mask&3,x.layers.mask=F.layers.mask&5;const k=Q.parent,q=F.cameras;Me(F,k);for(let Se=0;Se<q.length;Se++)Me(q[Se],k);q.length===2?pe(F,M,x):F.projectionMatrix.copy(M.projectionMatrix),Ie(Q,F,k)};function Ie(Q,te,Z){Z===null?Q.matrix.copy(te.matrixWorld):(Q.matrix.copy(Z.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(te.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(te.projectionMatrix),Q.projectionMatrixInverse.copy(te.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Yi*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(Q){return d[Q]};let Ue=null;function Je(Q,te){if(h=te.getViewerPose(c||o),g=te,h!==null){const Z=h.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let k=!1;Z.length!==F.cameras.length&&(F.cameras.length=0,k=!0);for(let I=0;I<Z.length;I++){const U=Z[I];let se=null;if(m!==null)se=m.getViewport(U);else{const O=u.getViewSubImage(f,U);se=O.viewport,I===0&&(e.setRenderTargetTextures(v,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(v))}let re=L[I];re===void 0&&(re=new Zt,re.layers.enable(I),re.viewport=new dt,L[I]=re),re.matrix.fromArray(U.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(U.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(se.x,se.y,se.width,se.height),I===0&&(F.matrix.copy(re.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),k===!0&&F.cameras.push(re)}const q=s.enabledFeatures;if(q&&q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const I=u.getDepthInformation(Z[0]);I&&I.isValid&&I.texture&&p.init(I,s.renderState)}if(q&&q.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let I=0;I<Z.length;I++){const U=Z[I].camera;if(U){let se=d[U];se||(se=new nh,d[U]=se);const re=u.getCameraImage(U);se.sourceTexture=re}}}}for(let Z=0;Z<T.length;Z++){const k=E[Z],q=T[Z];k!==null&&q!==void 0&&q.update(k,te,c||o)}Ue&&Ue(Q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ve=new ph;Ve.setAnimationLoop(Je),this.setAnimationLoop=function(Q){Ue=Q},this.dispose=function(){}}}const hi=new En,Ag=new pt;function Rg(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,jc(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,w,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,v)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,w,y):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===qt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===qt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const w=e.get(d),y=w.envMap,v=w.envMapRotation;y&&(p.envMap.value=y,hi.copy(v),hi.x*=-1,hi.y*=-1,hi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),p.envMapRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(hi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,w,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*w,p.scale.value=y*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,w){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===qt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const w=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cg(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,y){const v=y.program;n.uniformBlockBinding(w,v)}function c(w,y){let v=s[w.id];v===void 0&&(g(w),v=h(w),s[w.id]=v,w.addEventListener("dispose",p));const T=y.program;n.updateUBOMapping(w,T);const E=e.render.frame;r[w.id]!==E&&(f(w),r[w.id]=E)}function h(w){const y=u();w.__bindingPointIndex=y;const v=i.createBuffer(),T=w.__size,E=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const y=s[w.id],v=w.uniforms,T=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,P=v.length;E<P;E++){const R=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,x=R.length;M<x;M++){const L=R[M];if(m(L,E,M,T)===!0){const F=L.__offset,W=Array.isArray(L.value)?L.value:[L.value];let K=0;for(let D=0;D<W.length;D++){const G=W[D],Y=_(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,F+K,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,K),K+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,y,v,T){const E=w.value,P=y+"_"+v;if(T[P]===void 0)return typeof E=="number"||typeof E=="boolean"?T[P]=E:T[P]=E.clone(),!0;{const R=T[P];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return T[P]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(w){const y=w.uniforms;let v=0;const T=16;for(let P=0,R=y.length;P<R;P++){const M=Array.isArray(y[P])?y[P]:[y[P]];for(let x=0,L=M.length;x<L;x++){const F=M[x],W=Array.isArray(F.value)?F.value:[F.value];for(let K=0,D=W.length;K<D;K++){const G=W[K],Y=_(G),z=v%T,ce=z%Y.boundary,pe=z+ce;v+=ce,pe!==0&&T-pe<Y.storage&&(v+=T-pe),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=Y.storage}}}const E=v%T;return E>0&&(v+=T-E),w.__size=v,w.__cache={},this}function _(w){const y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function p(w){const y=w.target;y.removeEventListener("dispose",p);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Pg{constructor(e={}){const{canvas:t=Ru(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,d=null;const w=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=Gt;let E=0,P=0,R=null,M=-1,x=null;const L=new dt,F=new dt;let W=null;const K=new He(0);let D=0,G=t.width,Y=t.height,z=1,ce=null,pe=null;const Me=new dt(0,0,G,Y),Ie=new dt(0,0,G,Y);let Ue=!1;const Je=new Ba;let Ve=!1,Q=!1;const te=new pt,Z=new C,k=new dt,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Se=!1;function be(){return R===null?z:1}let I=n;function U(b,B){return t.getContext(b,B)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ra}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",ge,!1),I===null){const B="webgl2";if(I=U(B,b),I===null)throw U(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let se,re,O,ne,oe,de,he,xe,A,S,V,ee,ue,ie,ke,ye,Ne,Fe,me,Re,Ye,ze,Ee,Ze;function N(){se=new z0(I),se.init(),ze=new Sg(I,se),re=new D0(I,se,e,ze),O=new yg(I,se),re.reversedDepthBuffer&&f&&O.buffers.depth.setReversed(!0),ne=new G0(I),oe=new ag,de=new Mg(I,se,O,oe,re,ze,ne),he=new N0(v),xe=new B0(v),A=new $d(I),Ee=new L0(I,A),S=new H0(I,A,ne,Ee),V=new X0(I,S,A,ne),me=new W0(I,re,de),ye=new U0(oe),ee=new og(v,he,xe,se,re,Ee,ye),ue=new Rg(v,oe),ie=new cg,ke=new mg(se),Fe=new P0(v,he,xe,O,V,m,l),Ne=new vg(v,V,re),Ze=new Cg(I,ne,re,O),Re=new I0(I,se,ne),Ye=new V0(I,se,ne),ne.programs=ee.programs,v.capabilities=re,v.extensions=se,v.properties=oe,v.renderLists=ie,v.shadowMap=Ne,v.state=O,v.info=ne}N();const ve=new Eg(v,I);this.xr=ve,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(G,Y,!1))},this.getSize=function(b){return b.set(G,Y)},this.setSize=function(b,B,J=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,Y=B,t.width=Math.floor(b*z),t.height=Math.floor(B*z),J===!0&&(t.style.width=b+"px",t.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(G*z,Y*z).floor()},this.setDrawingBufferSize=function(b,B,J){G=b,Y=B,z=J,t.width=Math.floor(b*J),t.height=Math.floor(B*J),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(Me)},this.setViewport=function(b,B,J,j){b.isVector4?Me.set(b.x,b.y,b.z,b.w):Me.set(b,B,J,j),O.viewport(L.copy(Me).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(Ie)},this.setScissor=function(b,B,J,j){b.isVector4?Ie.set(b.x,b.y,b.z,b.w):Ie.set(b,B,J,j),O.scissor(F.copy(Ie).multiplyScalar(z).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(b){O.setScissorTest(Ue=b)},this.setOpaqueSort=function(b){ce=b},this.setTransparentSort=function(b){pe=b},this.getClearColor=function(b){return b.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,J=!0){let j=0;if(b){let H=!1;if(R!==null){const _e=R.texture.format;H=_e===Na||_e===Ua||_e===Da}if(H){const _e=R.texture.type,Ae=_e===bn||_e===vi||_e===Ss||_e===ws||_e===La||_e===Ia,De=Fe.getClearColor(),Pe=Fe.getClearAlpha(),qe=De.r,Ke=De.g,Ge=De.b;Ae?(g[0]=qe,g[1]=Ke,g[2]=Ge,g[3]=Pe,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=qe,_[1]=Ke,_[2]=Ge,_[3]=Pe,I.clearBufferiv(I.COLOR,0,_))}else j|=I.COLOR_BUFFER_BIT}B&&(j|=I.DEPTH_BUFFER_BIT),J&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Fe.dispose(),ie.dispose(),ke.dispose(),oe.dispose(),he.dispose(),xe.dispose(),V.dispose(),Ee.dispose(),Ze.dispose(),ee.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",vn),ve.removeEventListener("sessionend",el),ii.stop()};function we(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=ne.autoReset,B=Ne.enabled,J=Ne.autoUpdate,j=Ne.needsUpdate,H=Ne.type;N(),ne.autoReset=b,Ne.enabled=B,Ne.autoUpdate=J,Ne.needsUpdate=j,Ne.type=H}function ge(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function le(b){const B=b.target;B.removeEventListener("dispose",le),Oe(B)}function Oe(b){je(b),oe.remove(b)}function je(b){const B=oe.get(b).programs;B!==void 0&&(B.forEach(function(J){ee.releaseProgram(J)}),b.isShaderMaterial&&ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,J,j,H,_e){B===null&&(B=q);const Ae=H.isMesh&&H.matrixWorld.determinant()<0,De=Ah(b,B,J,j,H);O.setMaterial(j,Ae);let Pe=J.index,qe=1;if(j.wireframe===!0){if(Pe=S.getWireframeAttribute(J),Pe===void 0)return;qe=2}const Ke=J.drawRange,Ge=J.attributes.position;let nt=Ke.start*qe,ut=(Ke.start+Ke.count)*qe;_e!==null&&(nt=Math.max(nt,_e.start*qe),ut=Math.min(ut,(_e.start+_e.count)*qe)),Pe!==null?(nt=Math.max(nt,0),ut=Math.min(ut,Pe.count)):Ge!=null&&(nt=Math.max(nt,0),ut=Math.min(ut,Ge.count));const Et=ut-nt;if(Et<0||Et===1/0)return;Ee.setup(H,j,De,J,Pe);let _t,ft=Re;if(Pe!==null&&(_t=A.get(Pe),ft=Ye,ft.setIndex(_t)),H.isMesh)j.wireframe===!0?(O.setLineWidth(j.wireframeLinewidth*be()),ft.setMode(I.LINES)):ft.setMode(I.TRIANGLES);else if(H.isLine){let We=j.linewidth;We===void 0&&(We=1),O.setLineWidth(We*be()),H.isLineSegments?ft.setMode(I.LINES):H.isLineLoop?ft.setMode(I.LINE_LOOP):ft.setMode(I.LINE_STRIP)}else H.isPoints?ft.setMode(I.POINTS):H.isSprite&&ft.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Es("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const We=H._multiDrawStarts,yt=H._multiDrawCounts,ot=H._multiDrawCount,en=Pe?A.get(Pe).bytesPerElement:1,yi=oe.get(j).currentProgram.getUniforms();for(let tn=0;tn<ot;tn++)yi.setValue(I,"_gl_DrawID",tn),ft.render(We[tn]/en,yt[tn])}else if(H.isInstancedMesh)ft.renderInstances(nt,Et,H.count);else if(J.isInstancedBufferGeometry){const We=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,yt=Math.min(J.instanceCount,We);ft.renderInstances(nt,Et,yt)}else ft.render(nt,Et)};function mt(b,B,J){b.transparent===!0&&b.side===Wt&&b.forceSinglePass===!1?(b.side=qt,b.needsUpdate=!0,Bs(b,B,J),b.side=ei,b.needsUpdate=!0,Bs(b,B,J),b.side=Wt):Bs(b,B,J)}this.compile=function(b,B,J=null){J===null&&(J=b),d=ke.get(J),d.init(B),y.push(d),J.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),b!==J&&b.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights();const j=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _e=H.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const De=_e[Ae];mt(De,J,H),j.add(De)}else mt(_e,J,H),j.add(_e)}),d=y.pop(),j},this.compileAsync=function(b,B,J=null){const j=this.compile(b,B,J);return new Promise(H=>{function _e(){if(j.forEach(function(Ae){oe.get(Ae).currentProgram.isReady()&&j.delete(Ae)}),j.size===0){H(b);return}setTimeout(_e,10)}se.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let lt=null;function Rn(b){lt&&lt(b)}function vn(){ii.stop()}function el(){ii.start()}const ii=new ph;ii.setAnimationLoop(Rn),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(b){lt=b,ve.setAnimationLoop(b),b===null?ii.stop():ii.start()},ve.addEventListener("sessionstart",vn),ve.addEventListener("sessionend",el),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(B),B=ve.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,B,R),d=ke.get(b,y.length),d.init(B),y.push(d),te.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Je.setFromProjectionMatrix(te,Sn,B.reversedDepth),Q=this.localClippingEnabled,Ve=ye.init(this.clippingPlanes,Q),p=ie.get(b,w.length),p.init(),w.push(p),ve.enabled===!0&&ve.isPresenting===!0){const _e=v.xr.getDepthSensingMesh();_e!==null&&Gr(_e,B,-1/0,v.sortObjects)}Gr(b,B,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(ce,pe),Se=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,Se&&Fe.addToRenderList(p,b),this.info.render.frame++,Ve===!0&&ye.beginShadows();const J=d.state.shadowsArray;Ne.render(J,b,B),Ve===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=p.opaque,H=p.transmissive;if(d.setupLights(),B.isArrayCamera){const _e=B.cameras;if(H.length>0)for(let Ae=0,De=_e.length;Ae<De;Ae++){const Pe=_e[Ae];nl(j,H,b,Pe)}Se&&Fe.render(b);for(let Ae=0,De=_e.length;Ae<De;Ae++){const Pe=_e[Ae];tl(p,b,Pe,Pe.viewport)}}else H.length>0&&nl(j,H,b,B),Se&&Fe.render(b),tl(p,b,B);R!==null&&P===0&&(de.updateMultisampleRenderTarget(R),de.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,B),Ee.resetDefaultState(),M=-1,x=null,y.pop(),y.length>0?(d=y[y.length-1],Ve===!0&&ye.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function Gr(b,B,J,j){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Je.intersectsSprite(b)){j&&k.setFromMatrixPosition(b.matrixWorld).applyMatrix4(te);const Ae=V.update(b),De=b.material;De.visible&&p.push(b,Ae,De,J,k.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Je.intersectsObject(b))){const Ae=V.update(b),De=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),k.copy(b.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),k.copy(Ae.boundingSphere.center)),k.applyMatrix4(b.matrixWorld).applyMatrix4(te)),Array.isArray(De)){const Pe=Ae.groups;for(let qe=0,Ke=Pe.length;qe<Ke;qe++){const Ge=Pe[qe],nt=De[Ge.materialIndex];nt&&nt.visible&&p.push(b,Ae,nt,J,k.z,Ge)}}else De.visible&&p.push(b,Ae,De,J,k.z,null)}}const _e=b.children;for(let Ae=0,De=_e.length;Ae<De;Ae++)Gr(_e[Ae],B,J,j)}function tl(b,B,J,j){const H=b.opaque,_e=b.transmissive,Ae=b.transparent;d.setupLightsView(J),Ve===!0&&ye.setGlobalState(v.clippingPlanes,J),j&&O.viewport(L.copy(j)),H.length>0&&ks(H,B,J),_e.length>0&&ks(_e,B,J),Ae.length>0&&ks(Ae,B,J),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function nl(b,B,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[j.id]===void 0&&(d.state.transmissionRenderTarget[j.id]=new mn(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?kn:bn,minFilter:gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const _e=d.state.transmissionRenderTarget[j.id],Ae=j.viewport||L;_e.setSize(Ae.z*v.transmissionResolutionScale,Ae.w*v.transmissionResolutionScale);const De=v.getRenderTarget(),Pe=v.getActiveCubeFace(),qe=v.getActiveMipmapLevel();v.setRenderTarget(_e),v.getClearColor(K),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear(),Se&&Fe.render(J);const Ke=v.toneMapping;v.toneMapping=Qn;const Ge=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),d.setupLightsView(j),Ve===!0&&ye.setGlobalState(v.clippingPlanes,j),ks(b,J,j),de.updateMultisampleRenderTarget(_e),de.updateRenderTargetMipmap(_e),se.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let ut=0,Et=B.length;ut<Et;ut++){const _t=B[ut],ft=_t.object,We=_t.geometry,yt=_t.material,ot=_t.group;if(yt.side===Wt&&ft.layers.test(j.layers)){const en=yt.side;yt.side=qt,yt.needsUpdate=!0,il(ft,J,j,We,yt,ot),yt.side=en,yt.needsUpdate=!0,nt=!0}}nt===!0&&(de.updateMultisampleRenderTarget(_e),de.updateRenderTargetMipmap(_e))}v.setRenderTarget(De,Pe,qe),v.setClearColor(K,D),Ge!==void 0&&(j.viewport=Ge),v.toneMapping=Ke}function ks(b,B,J){const j=B.isScene===!0?B.overrideMaterial:null;for(let H=0,_e=b.length;H<_e;H++){const Ae=b[H],De=Ae.object,Pe=Ae.geometry,qe=Ae.group;let Ke=Ae.material;Ke.allowOverride===!0&&j!==null&&(Ke=j),De.layers.test(J.layers)&&il(De,B,J,Pe,Ke,qe)}}function il(b,B,J,j,H,_e){b.onBeforeRender(v,B,J,j,H,_e),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(v,B,J,j,b,_e),H.transparent===!0&&H.side===Wt&&H.forceSinglePass===!1?(H.side=qt,H.needsUpdate=!0,v.renderBufferDirect(J,B,j,H,b,_e),H.side=ei,H.needsUpdate=!0,v.renderBufferDirect(J,B,j,H,b,_e),H.side=Wt):v.renderBufferDirect(J,B,j,H,b,_e),b.onAfterRender(v,B,J,j,H,_e)}function Bs(b,B,J){B.isScene!==!0&&(B=q);const j=oe.get(b),H=d.state.lights,_e=d.state.shadowsArray,Ae=H.state.version,De=ee.getParameters(b,H.state,_e,B,J),Pe=ee.getProgramCacheKey(De);let qe=j.programs;j.environment=b.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(b.isMeshStandardMaterial?xe:he).get(b.envMap||j.environment),j.envMapRotation=j.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,qe===void 0&&(b.addEventListener("dispose",le),qe=new Map,j.programs=qe);let Ke=qe.get(Pe);if(Ke!==void 0){if(j.currentProgram===Ke&&j.lightsStateVersion===Ae)return rl(b,De),Ke}else De.uniforms=ee.getUniforms(b),b.onBeforeCompile(De,v),Ke=ee.acquireProgram(De,Pe),qe.set(Pe,Ke),j.uniforms=De.uniforms;const Ge=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ge.clippingPlanes=ye.uniform),rl(b,De),j.needsLights=Ch(b),j.lightsStateVersion=Ae,j.needsLights&&(Ge.ambientLightColor.value=H.state.ambient,Ge.lightProbe.value=H.state.probe,Ge.directionalLights.value=H.state.directional,Ge.directionalLightShadows.value=H.state.directionalShadow,Ge.spotLights.value=H.state.spot,Ge.spotLightShadows.value=H.state.spotShadow,Ge.rectAreaLights.value=H.state.rectArea,Ge.ltc_1.value=H.state.rectAreaLTC1,Ge.ltc_2.value=H.state.rectAreaLTC2,Ge.pointLights.value=H.state.point,Ge.pointLightShadows.value=H.state.pointShadow,Ge.hemisphereLights.value=H.state.hemi,Ge.directionalShadowMap.value=H.state.directionalShadowMap,Ge.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ge.spotShadowMap.value=H.state.spotShadowMap,Ge.spotLightMatrix.value=H.state.spotLightMatrix,Ge.spotLightMap.value=H.state.spotLightMap,Ge.pointShadowMap.value=H.state.pointShadowMap,Ge.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=Ke,j.uniformsList=null,Ke}function sl(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Tr.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function rl(b,B){const J=oe.get(b);J.outputColorSpace=B.outputColorSpace,J.batching=B.batching,J.batchingColor=B.batchingColor,J.instancing=B.instancing,J.instancingColor=B.instancingColor,J.instancingMorph=B.instancingMorph,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function Ah(b,B,J,j,H){B.isScene!==!0&&(B=q),de.resetTextureUnits();const _e=B.fog,Ae=j.isMeshStandardMaterial?B.environment:null,De=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:qi,Pe=(j.isMeshStandardMaterial?xe:he).get(j.envMap||Ae),qe=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ke=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ge=!!J.morphAttributes.position,nt=!!J.morphAttributes.normal,ut=!!J.morphAttributes.color;let Et=Qn;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Et=v.toneMapping);const _t=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ft=_t!==void 0?_t.length:0,We=oe.get(j),yt=d.state.lights;if(Ve===!0&&(Q===!0||b!==x)){const Yt=b===x&&j.id===M;ye.setState(j,b,Yt)}let ot=!1;j.version===We.__version?(We.needsLights&&We.lightsStateVersion!==yt.state.version||We.outputColorSpace!==De||H.isBatchedMesh&&We.batching===!1||!H.isBatchedMesh&&We.batching===!0||H.isBatchedMesh&&We.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&We.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&We.instancing===!1||!H.isInstancedMesh&&We.instancing===!0||H.isSkinnedMesh&&We.skinning===!1||!H.isSkinnedMesh&&We.skinning===!0||H.isInstancedMesh&&We.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&We.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&We.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&We.instancingMorph===!1&&H.morphTexture!==null||We.envMap!==Pe||j.fog===!0&&We.fog!==_e||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ye.numPlanes||We.numIntersection!==ye.numIntersection)||We.vertexAlphas!==qe||We.vertexTangents!==Ke||We.morphTargets!==Ge||We.morphNormals!==nt||We.morphColors!==ut||We.toneMapping!==Et||We.morphTargetsCount!==ft)&&(ot=!0):(ot=!0,We.__version=j.version);let en=We.currentProgram;ot===!0&&(en=Bs(j,B,H));let yi=!1,tn=!1,ns=!1;const Mt=en.getUniforms(),rn=We.uniforms;if(O.useProgram(en.program)&&(yi=!0,tn=!0,ns=!0),j.id!==M&&(M=j.id,tn=!0),yi||x!==b){O.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Mt.setValue(I,"projectionMatrix",b.projectionMatrix),Mt.setValue(I,"viewMatrix",b.matrixWorldInverse);const jt=Mt.map.cameraPosition;jt!==void 0&&jt.setValue(I,Z.setFromMatrixPosition(b.matrixWorld)),re.logarithmicDepthBuffer&&Mt.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Mt.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,tn=!0,ns=!0)}if(H.isSkinnedMesh){Mt.setOptional(I,H,"bindMatrix"),Mt.setOptional(I,H,"bindMatrixInverse");const Yt=H.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Mt.setValue(I,"boneTexture",Yt.boneTexture,de))}H.isBatchedMesh&&(Mt.setOptional(I,H,"batchingTexture"),Mt.setValue(I,"batchingTexture",H._matricesTexture,de),Mt.setOptional(I,H,"batchingIdTexture"),Mt.setValue(I,"batchingIdTexture",H._indirectTexture,de),Mt.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&Mt.setValue(I,"batchingColorTexture",H._colorsTexture,de));const on=J.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&me.update(H,J,en),(tn||We.receiveShadow!==H.receiveShadow)&&(We.receiveShadow=H.receiveShadow,Mt.setValue(I,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(rn.envMap.value=Pe,rn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&B.environment!==null&&(rn.envMapIntensity.value=B.environmentIntensity),tn&&(Mt.setValue(I,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&Rh(rn,ns),_e&&j.fog===!0&&ue.refreshFogUniforms(rn,_e),ue.refreshMaterialUniforms(rn,j,z,Y,d.state.transmissionRenderTarget[b.id]),Tr.upload(I,sl(We),rn,de)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Tr.upload(I,sl(We),rn,de),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Mt.setValue(I,"center",H.center),Mt.setValue(I,"modelViewMatrix",H.modelViewMatrix),Mt.setValue(I,"normalMatrix",H.normalMatrix),Mt.setValue(I,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Yt=j.uniformsGroups;for(let jt=0,Wr=Yt.length;jt<Wr;jt++){const si=Yt[jt];Ze.update(si,en),Ze.bind(si,en)}}return en}function Rh(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Ch(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,B,J){const j=oe.get(b);j.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),oe.get(b.texture).__webglTexture=B,oe.get(b.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:J,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){const J=oe.get(b);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0};const Ph=I.createFramebuffer();this.setRenderTarget=function(b,B=0,J=0){R=b,E=B,P=J;let j=!0,H=null,_e=!1,Ae=!1;if(b){const Pe=oe.get(b);if(Pe.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(I.FRAMEBUFFER,null),j=!1;else if(Pe.__webglFramebuffer===void 0)de.setupRenderTarget(b);else if(Pe.__hasExternalTextures)de.rebindTextures(b,oe.get(b.texture).__webglTexture,oe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ge=b.depthTexture;if(Pe.__boundDepthTexture!==Ge){if(Ge!==null&&oe.has(Ge)&&(b.width!==Ge.image.width||b.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(b)}}const qe=b.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ae=!0);const Ke=oe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ke[B])?H=Ke[B][J]:H=Ke[B],_e=!0):b.samples>0&&de.useMultisampledRTT(b)===!1?H=oe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ke)?H=Ke[J]:H=Ke,L.copy(b.viewport),F.copy(b.scissor),W=b.scissorTest}else L.copy(Me).multiplyScalar(z).floor(),F.copy(Ie).multiplyScalar(z).floor(),W=Ue;if(J!==0&&(H=Ph),O.bindFramebuffer(I.FRAMEBUFFER,H)&&j&&O.drawBuffers(b,H),O.viewport(L),O.scissor(F),O.setScissorTest(W),_e){const Pe=oe.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pe.__webglTexture,J)}else if(Ae){const Pe=B;for(let qe=0;qe<b.textures.length;qe++){const Ke=oe.get(b.textures[qe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+qe,Ke.__webglTexture,J,Pe)}}else if(b!==null&&J!==0){const Pe=oe.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pe.__webglTexture,J)}M=-1},this.readRenderTargetPixels=function(b,B,J,j,H,_e,Ae,De=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){O.bindFramebuffer(I.FRAMEBUFFER,Pe);try{const qe=b.textures[De],Ke=qe.format,Ge=qe.type;if(!re.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-j&&J>=0&&J<=b.height-H&&(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+De),I.readPixels(B,J,j,H,ze.convert(Ke),ze.convert(Ge),_e))}finally{const qe=R!==null?oe.get(R).__webglFramebuffer:null;O.bindFramebuffer(I.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(b,B,J,j,H,_e,Ae,De=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe)if(B>=0&&B<=b.width-j&&J>=0&&J<=b.height-H){O.bindFramebuffer(I.FRAMEBUFFER,Pe);const qe=b.textures[De],Ke=qe.format,Ge=qe.type;if(!re.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,nt),I.bufferData(I.PIXEL_PACK_BUFFER,_e.byteLength,I.STREAM_READ),b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+De),I.readPixels(B,J,j,H,ze.convert(Ke),ze.convert(Ge),0);const ut=R!==null?oe.get(R).__webglFramebuffer:null;O.bindFramebuffer(I.FRAMEBUFFER,ut);const Et=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Cu(I,Et,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,nt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_e),I.deleteBuffer(nt),I.deleteSync(Et),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,J=0){const j=Math.pow(2,-J),H=Math.floor(b.image.width*j),_e=Math.floor(b.image.height*j),Ae=B!==null?B.x:0,De=B!==null?B.y:0;de.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,J,0,0,Ae,De,H,_e),O.unbindTexture()};const Lh=I.createFramebuffer(),Ih=I.createFramebuffer();this.copyTextureToTexture=function(b,B,J=null,j=null,H=0,_e=null){_e===null&&(H!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=H,H=0):_e=0);let Ae,De,Pe,qe,Ke,Ge,nt,ut,Et;const _t=b.isCompressedTexture?b.mipmaps[_e]:b.image;if(J!==null)Ae=J.max.x-J.min.x,De=J.max.y-J.min.y,Pe=J.isBox3?J.max.z-J.min.z:1,qe=J.min.x,Ke=J.min.y,Ge=J.isBox3?J.min.z:0;else{const on=Math.pow(2,-H);Ae=Math.floor(_t.width*on),De=Math.floor(_t.height*on),b.isDataArrayTexture?Pe=_t.depth:b.isData3DTexture?Pe=Math.floor(_t.depth*on):Pe=1,qe=0,Ke=0,Ge=0}j!==null?(nt=j.x,ut=j.y,Et=j.z):(nt=0,ut=0,Et=0);const ft=ze.convert(B.format),We=ze.convert(B.type);let yt;B.isData3DTexture?(de.setTexture3D(B,0),yt=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(de.setTexture2DArray(B,0),yt=I.TEXTURE_2D_ARRAY):(de.setTexture2D(B,0),yt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const ot=I.getParameter(I.UNPACK_ROW_LENGTH),en=I.getParameter(I.UNPACK_IMAGE_HEIGHT),yi=I.getParameter(I.UNPACK_SKIP_PIXELS),tn=I.getParameter(I.UNPACK_SKIP_ROWS),ns=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,_t.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_t.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,qe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ke),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ge);const Mt=b.isDataArrayTexture||b.isData3DTexture,rn=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const on=oe.get(b),Yt=oe.get(B),jt=oe.get(on.__renderTarget),Wr=oe.get(Yt.__renderTarget);O.bindFramebuffer(I.READ_FRAMEBUFFER,jt.__webglFramebuffer),O.bindFramebuffer(I.DRAW_FRAMEBUFFER,Wr.__webglFramebuffer);for(let si=0;si<Pe;si++)Mt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,oe.get(b).__webglTexture,H,Ge+si),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,oe.get(B).__webglTexture,_e,Et+si)),I.blitFramebuffer(qe,Ke,Ae,De,nt,ut,Ae,De,I.DEPTH_BUFFER_BIT,I.NEAREST);O.bindFramebuffer(I.READ_FRAMEBUFFER,null),O.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||oe.has(b)){const on=oe.get(b),Yt=oe.get(B);O.bindFramebuffer(I.READ_FRAMEBUFFER,Lh),O.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ih);for(let jt=0;jt<Pe;jt++)Mt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,on.__webglTexture,H,Ge+jt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,on.__webglTexture,H),rn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yt.__webglTexture,_e,Et+jt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Yt.__webglTexture,_e),H!==0?I.blitFramebuffer(qe,Ke,Ae,De,nt,ut,Ae,De,I.COLOR_BUFFER_BIT,I.NEAREST):rn?I.copyTexSubImage3D(yt,_e,nt,ut,Et+jt,qe,Ke,Ae,De):I.copyTexSubImage2D(yt,_e,nt,ut,qe,Ke,Ae,De);O.bindFramebuffer(I.READ_FRAMEBUFFER,null),O.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else rn?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(yt,_e,nt,ut,Et,Ae,De,Pe,ft,We,_t.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(yt,_e,nt,ut,Et,Ae,De,Pe,ft,_t.data):I.texSubImage3D(yt,_e,nt,ut,Et,Ae,De,Pe,ft,We,_t):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,_e,nt,ut,Ae,De,ft,We,_t.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,_e,nt,ut,_t.width,_t.height,ft,_t.data):I.texSubImage2D(I.TEXTURE_2D,_e,nt,ut,Ae,De,ft,We,_t);I.pixelStorei(I.UNPACK_ROW_LENGTH,ot),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,en),I.pixelStorei(I.UNPACK_SKIP_PIXELS,yi),I.pixelStorei(I.UNPACK_SKIP_ROWS,tn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ns),_e===0&&B.generateMipmaps&&I.generateMipmap(yt),O.unbindTexture()},this.initRenderTarget=function(b){oe.get(b).__webglFramebuffer===void 0&&de.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?de.setTextureCube(b,0):b.isData3DTexture?de.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?de.setTexture2DArray(b,0):de.setTexture2D(b,0),O.unbindTexture()},this.resetState=function(){E=0,P=0,R=null,O.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const br={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class es{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Lg=new $a(-1,1,1,-1,0,1);class Ig extends vt{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}}const Dg=new Ig;class ja{constructor(e){this._mesh=new X(Dg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Lg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class xh extends es{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=As.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ja(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class vc extends es{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Ug extends es{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ng{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new fe);this._width=n.width,this._height=n.height,t=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:kn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xh(br),this.copyPass.material.blending=On,this.clock=new fh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}vc!==void 0&&(o instanceof vc?n=!0:o instanceof Ug&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Fg extends es{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new He}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const Og={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ji extends es{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new He(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new mn(r,o,{type:kn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new mn(r,o,{type:kn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new mn(r,o,{type:kn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Og;this.highPassUniforms=As.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Dt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new fe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=As.clone(br.uniforms),this.blendMaterial=new Dt({uniforms:this.copyUniforms,vertexShader:br.vertexShader,fragmentShader:br.fragmentShader,blending:at,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new He,this._oldClearAlpha=1,this._basic=new zt,this._fsQuad=new ja(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new fe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ji.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ji.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Dt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ji.BlurDirectionX=new fe(1,0);ji.BlurDirectionY=new fe(0,1);const _r={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class kg extends es{constructor(){super(),this.uniforms=As.clone(_r.uniforms),this.material=new Od({name:_r.name,uniforms:this.uniforms,vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader}),this._fsQuad=new ja(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Pc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Lc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ca?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Dc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Uc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ic&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function bt(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ft(i,e,t,{repeat:n=[1,1],srgb:s=!0,anisotropy:r=4}={}){const o=document.createElement("canvas");o.width=i,o.height=e;const a=o.getContext("2d");t(a,i,e);const l=new Va(o);return l.wrapS=l.wrapT=Rr,l.repeat.set(n[0],n[1]),l.anisotropy=r,s&&(l.colorSpace=Gt),l}const $=(i,e={})=>new Xe({color:i,roughness:.82,metalness:.02,...e});function ae(i,e,t,n,s,r=0,o=0,a=0,l=[0,0,0],c=!0,h=!0){const u=new X(new xt(e,t,n),s);return u.position.set(r,o,a),u.rotation.set(l[0],l[1],l[2]),u.castShadow=c,u.receiveShadow=h,i.add(u),u}function Lt(i,e,t,n,s,r=0,o=0,a=0,l=10){const c=new X(new kt(e,t,n,l),s);return c.position.set(r,o,a),c.castShadow=!0,c.receiveShadow=!0,i.add(c),c}function Hn(i,e,t,n,s,r=6){const o=new C().subVectors(e,i),a=o.length(),l=new kt(n,t,a,r,1),c=new X(l,s);return c.position.copy(i).addScaledVector(o,.5),c.quaternion.setFromUnitVectors(new C(0,1,0),o.clone().normalize()),c.castShadow=!0,c}let ds=null;function Xt(){if(ds)return ds;const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,0.85)"),t.addColorStop(.5,"rgba(255,255,255,0.2)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),ds=new Va(i),ds.colorSpace=Gt,ds}function _n(i,e,t=2,n=.6,s=[0,0,0]){const r=new At({map:Xt(),color:e,transparent:!0,opacity:n,blending:at,depthWrite:!1,depthTest:!0}),o=new Ct(r);return o.scale.set(t,t,1),o.position.set(...s),i.add(o),o}function yh(i=220,e=.05,t=14207400,n=[18,9,18],s=4){const r=bt(s),o=new vt,a=new Float32Array(i*3),l=new Float32Array(i),c=new Float32Array(i),h=new Float32Array(i);for(let m=0;m<i;m++)a[m*3]=(r()-.5)*n[0],a[m*3+1]=r()*n[1],a[m*3+2]=(r()-.5)*n[2],l[m]=.08+r()*.22,c[m]=r()*Math.PI*2,h[m]=.4+r()*1.2;o.setAttribute("position",new It(a,3)),o.setAttribute("aSpeed",new It(l,1)),o.setAttribute("aPhase",new It(c,1)),o.setAttribute("aScale",new It(h,1));const u=new Dt({transparent:!0,depthWrite:!1,blending:at,uniforms:{uTime:{value:0},uSize:{value:e},uColor:{value:new He(t)},uHeight:{value:n[1]}},vertexShader:`
      attribute float aSpeed; attribute float aPhase; attribute float aScale;
      uniform float uTime; uniform float uSize; uniform float uHeight;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        p.y = mod(p.y + uTime * aSpeed, uHeight);
        p.x += sin(uTime * 0.22 + aPhase) * 0.55;
        p.z += cos(uTime * 0.17 + aPhase * 1.3) * 0.55;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = uSize * aScale * (240.0 / max(1.0, -mv.z));
        vAlpha = smoothstep(0.0, 0.8, p.y / uHeight) * (1.0 - smoothstep(0.75, 1.0, p.y / uHeight));
      }`,fragmentShader:`
      uniform vec3 uColor; varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.05, d) * 0.7 * vAlpha;
        gl_FragColor = vec4(uColor, a);
      }`}),f=new rd(o,u);return f.frustumCulled=!1,f}function Bg(i=420,e=[40,16,40],t=7){const n=yh(i,.09,16738890,e,t);return n.material.uniforms.uSize.value=.13,n}function zg(i=900,e=46,t=22){const n=bt(22),s=new vt,r=new Float32Array(i*2*3),o=new Float32Array(i*2),a=new Float32Array(i*2),l=new Float32Array(i*2);for(let u=0;u<i;u++){const f=(n()-.5)*e,m=(n()-.5)*e,g=n()*t,_=.35+n()*.55;for(let p=0;p<2;p++){const d=u*2+p;r[d*3]=f,r[d*3+1]=g,r[d*3+2]=m,o[d]=g,a[d]=14+n()*8,l[d]=p===0?0:_}}s.setAttribute("position",new It(r,3)),s.setAttribute("aBase",new It(o,1)),s.setAttribute("aSpeed",new It(a,1)),s.setAttribute("aLen",new It(l,1));const c=new Dt({transparent:!0,depthWrite:!1,blending:at,uniforms:{uTime:{value:0},uHeight:{value:t},uColor:{value:new He(10467017)},uOpacity:{value:.32}},vertexShader:`
      attribute float aBase; attribute float aSpeed; attribute float aLen;
      uniform float uTime; uniform float uHeight;
      varying float vA;
      void main() {
        vec3 p = position;
        p.y = mod(aBase - uTime * aSpeed, uHeight) + aLen;
        p.x += aLen * 0.18;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        vA = 1.0 - clamp((p.y / uHeight), 0.0, 1.0) * 0.5;
      }`,fragmentShader:`
      uniform vec3 uColor; uniform float uOpacity; varying float vA;
      void main() { gl_FragColor = vec4(uColor, uOpacity * vA); }`}),h=new Ha(s,c);return h.frustumCulled=!1,h}function Za(i=16763274,e=2.4,t=9,n=.075){const s=new Ki(e,t,24,1,!0),r=new zt({color:i,transparent:!0,opacity:n,blending:at,side:Wt,depthWrite:!1}),o=new X(s,r);return o.position.y=t/2,o}function Hg(){return Ft(512,512,(i,e,t)=>{const n=bt(91);i.fillStyle="#1d1510",i.fillRect(0,0,e,t);const s=50;for(let r=0;r<t;r+=s){const o=18+Math.floor(n()*14);i.fillStyle=`rgb(${o+22}, ${o+10}, ${o})`,i.fillRect(0,r+1,e,s-2),i.strokeStyle="rgba(0,0,0,0.6)",i.lineWidth=2,i.strokeRect(-1,r,e+2,s);for(let l=0;l<30;l++){i.strokeStyle=`rgba(${30+n()*30},${20+n()*18},12,${.15+n()*.25})`,i.lineWidth=.8;const c=r+n()*s;i.beginPath(),i.moveTo(0,c),i.bezierCurveTo(e*.3,c+n()*5,e*.6,c-n()*5,e,c+n()*3),i.stroke()}const a=n()*e;i.fillStyle="rgba(0,0,0,0.55)",i.fillRect(a,r,2,s)}},{repeat:[5,4]})}function vr(){return Ft(512,512,(i,e,t)=>{const n=bt(17);i.fillStyle="#4a4130",i.fillRect(0,0,e,t);const s=10;for(let o=0;o<s;o++)i.fillStyle=o%2?"rgba(118,102,73,0.18)":"rgba(20,18,12,0.1)",i.fillRect(o*e/s,0,e/s,t);i.strokeStyle="rgba(160,140,98,0.18)",i.lineWidth=2;for(let o=0;o<t;o+=128)for(let a=0;a<e;a+=128){i.save(),i.translate(a+64,o+64),i.beginPath();for(let l=0;l<4;l++){const c=l/4*Math.PI*2;i.ellipse(Math.cos(c)*24,Math.sin(c)*24,16,30,c,0,Math.PI*2)}i.stroke(),i.beginPath(),i.arc(0,0,8,0,Math.PI*2),i.stroke(),i.restore()}for(let o=0;o<200;o++)i.fillStyle=`rgba(10,8,5,${n()*.12})`,i.fillRect(n()*e,n()*t,2+n()*22,1+n()*4);const r=i.createLinearGradient(0,0,0,t);r.addColorStop(0,"rgba(0,0,0,0.24)"),r.addColorStop(.55,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,0,0,0.4)"),i.fillStyle=r,i.fillRect(0,0,e,t)},{repeat:[3,2]})}function Vg(){return Ft(512,512,(i,e,t)=>{const n=bt(41);i.fillStyle="#30322b",i.fillRect(0,0,e,t);for(let r=0;r<t;r+=26)i.fillStyle=r%52?"rgba(0,0,0,0.22)":"rgba(255,255,255,0.03)",i.fillRect(0,r,e,3),i.fillStyle=`rgba(${20+n()*16},${22+n()*14},${18+n()*10},0.35)`,i.fillRect(0,r+3,e,23);for(let r=0;r<60;r++)i.fillStyle="rgba(130,140,120,0.06)",i.fillRect(n()*e,n()*t,n()*100,2);const s=i.createLinearGradient(0,0,0,t);s.addColorStop(0,"rgba(0,0,0,0.35)"),s.addColorStop(1,"rgba(0,0,0,0.65)"),i.fillStyle=s,i.fillRect(0,0,e,t)},{repeat:[5,3]})}function Gg(){return Ft(512,512,(i,e,t)=>{const n=bt(5);i.fillStyle="#16181a",i.fillRect(0,0,e,t);for(let s=0;s<t;s+=28)for(let r=s/28%2?-34:0;r<e;r+=68)i.fillStyle=`rgba(${20+n()*12},${22+n()*10},${24+n()*10},1)`,i.fillRect(r+1,s+1,66,27),i.strokeStyle="rgba(0,0,0,0.5)",i.strokeRect(r+1,s+1,66,27)},{repeat:[6,3]})}function xc(){return Ft(512,512,(i,e,t)=>{const n=bt(76);i.fillStyle="#171a1b",i.fillRect(0,0,e,t);for(let s=0;s<8e3;s++){const r=20+Math.floor(n()*30);i.fillStyle=`rgba(${r},${r+2},${r+2},${.2+n()*.4})`,i.fillRect(n()*e,n()*t,1+n()*2,1+n()*2)}for(let s=0;s<18;s++){i.strokeStyle="rgba(0,0,0,0.6)",i.lineWidth=1+n()*2,i.beginPath();let r=n()*e,o=n()*t;i.moveTo(r,o);for(let a=0;a<8;a++)r+=(n()-.5)*50,o+=(n()-.5)*50,i.lineTo(r,o);i.stroke()}},{repeat:[8,8]})}function Mh(){return Ft(256,256,(i,e,t)=>{const n=bt(9);i.fillStyle="#2a1d1f",i.fillRect(0,0,e,t);for(let s=0;s<5e3;s++){const r=35+n()*30;i.fillStyle=`rgba(${r},${r*.72},${r*.7},0.5)`,i.fillRect(n()*e,n()*t,1.5,1.5)}i.strokeStyle="rgba(140,110,80,0.14)",i.lineWidth=1;for(let s=0;s<6;s++)i.beginPath(),i.arc(e/2,t/2,20+s*18,0,Math.PI*2),i.stroke()},{repeat:[4,4]})}function Er(){return Ft(512,512,(i,e,t)=>{const n=bt(33);i.fillStyle="#232728",i.fillRect(0,0,e,t);for(let s=0;s<4e3;s++){const r=22+n()*42;i.fillStyle=`rgba(${r},${r+3},${r+4},${.2+n()*.5})`,i.fillRect(n()*e,n()*t,2+n()*8,1+n()*5)}for(let s=0;s<30;s++){i.strokeStyle=`rgba(0,0,0,${.2+n()*.5})`,i.lineWidth=1+n()*3,i.beginPath();let r=n()*e,o=n()*t;i.moveTo(r,o);for(let a=0;a<5;a++)r+=(n()-.5)*120,o+=(n()-.5)*120,i.lineTo(r,o);i.stroke()}},{repeat:[4,3]})}function Hr(i=!1){return Ft(512,512,(e,t,n)=>{const s=t/2,r=n/2,o=e.createRadialGradient(s,r,20,s,r,250);o.addColorStop(0,"#d8cbb0"),o.addColorStop(.72,"#c3b28f"),o.addColorStop(1,"#8f7f62"),e.fillStyle=o,e.beginPath(),e.arc(s,r,250,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(60,45,30,0.85)",e.lineWidth=10,e.beginPath(),e.arc(s,r,238,0,Math.PI*2),e.stroke(),e.lineWidth=2,e.beginPath(),e.arc(s,r,208,0,Math.PI*2),e.stroke();const a=["XII","I","II","III","IIII","V","VI","VII","VIII","IX","X","XI"];e.fillStyle="#2d2318",e.textAlign="center",e.textBaseline="middle",e.font='600 46px "Cormorant Garamond", Georgia, serif';for(let l=0;l<12;l++){const c=l/12*Math.PI*2-Math.PI/2;e.fillText(a[l],s+Math.cos(c)*170,r+Math.sin(c)*170)}for(let l=0;l<60;l++){const c=l/60*Math.PI*2,h=200,u=l%5===0?190:196;e.strokeStyle="rgba(50,38,24,0.7)",e.lineWidth=l%5===0?3:1.5,e.beginPath(),e.moveTo(s+Math.cos(c)*h,r+Math.sin(c)*h),e.lineTo(s+Math.cos(c)*u,r+Math.sin(c)*u),e.stroke()}if(e.font='italic 30px "Cormorant Garamond", Georgia, serif',e.fillStyle="rgba(70,50,30,0.8)",e.fillText("Hollow",s,r+62),i){e.strokeStyle="rgba(20,12,6,0.85)",e.lineWidth=3;for(let l=0;l<7;l++){e.beginPath();let c=s+(Math.random()-.5)*80,h=r+(Math.random()-.5)*80;e.moveTo(c,h);for(let u=0;u<4;u++)c+=(Math.random()-.5)*120,h+=(Math.random()-.5)*120,e.lineTo(c,h);e.stroke()}}},{repeat:[1,1]})}function Ro(){return Ft(360,460,(i,e,t)=>{const n=bt(58),s=i.createLinearGradient(0,0,0,t);s.addColorStop(0,"#8b7c5e"),s.addColorStop(1,"#4e4534"),i.fillStyle=s,i.fillRect(0,0,e,t),i.fillStyle="rgba(40,34,24,0.5)",i.fillRect(0,t*.62,e,t*.38),[[80,190,.3],[150,160,.24],[230,175,.27],[300,200,.2],[185,230,.17]].forEach(([o,a,l],c)=>{i.fillStyle=c===4?"rgba(230,220,190,0.9)":"rgba(52,44,32,0.92)",i.beginPath(),i.arc(o,a,30*l*2,0,Math.PI*2),i.fill(),i.beginPath(),i.moveTo(o-50*l*2,t*.78),i.quadraticCurveTo(o,t*.44,o+50*l*2,t*.78),i.fill()}),i.strokeStyle="rgba(240,230,200,0.28)",i.lineWidth=1;for(let o=0;o<30;o++)i.beginPath(),i.moveTo(n()*e,n()*t),i.lineTo(n()*e,n()*t),i.stroke();i.strokeStyle="rgba(20,15,10,0.8)",i.lineWidth=4;for(let o=0;o<5;o++)i.beginPath(),i.arc(210+n()*30,190+n()*20,30+n()*40,0,Math.PI*2),i.stroke();i.fillStyle="rgba(25,20,14,0.65)",i.fillRect(0,0,e,12),i.fillRect(0,t-12,e,12)},{repeat:[1,1]})}function Co(i=0){return Ft(320,460,(e,t,n)=>{if(i===0){const s=e.createLinearGradient(0,0,0,n);s.addColorStop(0,"#18112d"),s.addColorStop(.55,"#4c1c44"),s.addColorStop(1,"#e0532f"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="#f7c86c",e.beginPath(),e.arc(t/2,n*.34,70,0,Math.PI*2),e.fill(),e.fillStyle="#1a0f26";for(let r=0;r<6;r++)e.beginPath(),e.moveTo(0,n*.52+r*24),e.lineTo(t*.3,n*.42+r*24),e.lineTo(t*.6,n*.56+r*24),e.lineTo(t,n*.46+r*24),e.lineTo(t,n),e.lineTo(0,n),e.fill();e.fillStyle="#f5e9d0",e.textAlign="center",e.font='700 44px "Barlow Condensed", sans-serif',e.fillText("STARFALL",t/2,n*.8),e.font='400 14px "Barlow Condensed", sans-serif',e.fillText("NOW PLAYING — HAWKINS THEATRE",t/2,n*.86)}else if(i===1){e.fillStyle="#0c1a22",e.fillRect(0,0,t,n);const s=e.createRadialGradient(t/2,n*.42,10,t/2,n*.42,190);s.addColorStop(0,"rgba(120,200,220,0.85)"),s.addColorStop(1,"rgba(10,30,40,0)"),e.fillStyle=s,e.fillRect(0,0,t,n),e.strokeStyle="rgba(150,220,230,0.6)",e.lineWidth=2;for(let r=0;r<12;r++)e.beginPath(),e.arc(t/2,n*.42,20+r*14,0,Math.PI*2),e.stroke();e.fillStyle="#e7f4f5",e.textAlign="center",e.font='700 38px "Barlow Condensed", sans-serif',e.fillText("THE THING",t/2,n*.72),e.font='400 13px "Barlow Condensed", sans-serif',e.fillText("MAN IS THE WARMEST PLACE",t/2,n*.79)}else e.fillStyle="#151515",e.fillRect(0,0,t,n),e.fillStyle="#c8a020",e.font='700 52px "Barlow Condensed", sans-serif',e.textAlign="left",e.fillText("HAWKINS",20,78),e.fillText("TIGERS",20,128),e.fillStyle="#e8e2d4",e.font='400 20px "Barlow Condensed", sans-serif',e.fillText("HOMECOMING '86",22,166),e.strokeStyle="#c8a020",e.lineWidth=3,e.beginPath(),e.moveTo(22,190),e.lineTo(t-22,190),e.stroke(),e.fillStyle="#8a1414",e.beginPath(),e.moveTo(t/2,240),e.lineTo(t/2+60,340),e.lineTo(t/2-60,340),e.fill(),e.fillStyle="#e8e2d4",e.font='italic 16px "Cormorant Garamond", serif',e.fillText("Go Tigers.",22,400);e.fillStyle="rgba(0,0,0,0.18)",e.fillRect(0,0,8,n)},{repeat:[1,1]})}function Wg(){return Ft(512,512,(i,e,t)=>{const n=e/2,s=t/2;i.fillStyle="#080808",i.fillRect(0,0,e,t),i.fillStyle="#0d0d0d",i.beginPath(),i.arc(n,s,250,0,Math.PI*2),i.fill();for(let r=0;r<70;r++)i.strokeStyle=`rgba(255,255,255,${.02+Math.random()*.05})`,i.lineWidth=.8,i.beginPath(),i.arc(n,s,70+r*2.5,0,Math.PI*2),i.stroke();i.fillStyle="#a83a2b",i.beginPath(),i.arc(n,s,66,0,Math.PI*2),i.fill(),i.fillStyle="#f0e3c4",i.textAlign="center",i.font='italic 22px "Cormorant Garamond", serif',i.fillText("Static Bloom",n,s-4),i.font='10px "Barlow Condensed", sans-serif',i.fillText("THE NEON VULTURES",n,s+16),i.fillStyle="#0a0a0a",i.beginPath(),i.arc(n,s,6,0,Math.PI*2),i.fill()},{repeat:[1,1]})}function Xg(){return Ft(256,512,(i,e,t)=>{i.clearRect(0,0,e,t),i.fillStyle="rgba(8,8,10,0.94)",i.beginPath(),i.arc(128,96,46,0,Math.PI*2),i.fill(),i.beginPath(),i.moveTo(128,136),i.bezierCurveTo(74,142,64,240,60,360),i.lineTo(196,360),i.bezierCurveTo(192,240,182,142,128,136),i.fill(),i.fillStyle="rgba(8,8,10,0.94)",i.beginPath(),i.ellipse(128,50,50,30,0,Math.PI,0),i.fill()},{repeat:[1,1]})}function Un(i,{x:e=0,y:t=0,z:n=0,w:s=1.5,h:r=2,lit:o=!1,color:a=16758122,rotY:l=0,hollow:c=!1,frameMat:h=null,glassMat:u=null}={}){const f=new Ce;f.position.set(e,t,n),f.rotation.y=l;const m=h||$(1578258,{roughness:.6});ae(f,s+.28,r+.28,.16,m,0,0,0,[0,0,0]);const g=new X(new it(s,r),u||new Xe({color:c?2754566:o?7293733:659737,emissive:c?6163206:o?16751685:198152,emissiveIntensity:c?1.4:o?.55:.15,roughness:.2,metalness:.1}));g.position.z=.09,f.add(g);const _=m;return ae(f,.05,r,.1,_,0,0,.1),ae(f,s,.05,.1,_,0,0,.1),ae(f,s,.07,.18,m,0,r/2+.06,.04),i.add(f),{group:f,glass:g}}function Is(i=1,e=9,t=1447446){const n=bt(i),s=new Ce,r=$(t,{roughness:.95}),o=(a,l,c,h,u)=>{const f=a.clone().addScaledVector(l,c),m=Hn(a,f,h,h*.55,r,5);if(m.castShadow=!0,s.add(m),u<=0)return;const g=u>2?3:2;for(let _=0;_<g;_++){const p=l.clone();p.x+=(n()-.5)*1.1,p.z+=(n()-.5)*1.1,p.y=Math.abs(p.y)*(.75+n()*.4),p.normalize(),o(f,p,c*(.55+n()*.22),h*.56,u-1)}};return o(new C(0,0,0),new C((n()-.5)*.2,1,(n()-.5)*.2).normalize(),e*.46,e*.045,4),s}function Sh({hollow:i=!1}={}){const e=new Ce,t=new Xe({map:Vg(),color:i?3813938:9146760,roughness:.88,metalness:.02}),n=$(i?1512470:2369055,{roughness:.8}),s=new Xe({map:Gg(),color:i?2893350:9145742,roughness:.92});$(i?854538:1381135),ae(e,13,4.3,9,t,0,2.15,-2),ae(e,12.4,3.7,8.2,t,0,5.9,-2.3),ae(e,13.3,.55,9.3,$(1776410,{roughness:.95}),0,.27,-2);const r=.68,o=ae(e,7.9,.28,9.8,s,-3.6,8.15,-2.1,[0,0,r]),a=ae(e,7.9,.28,9.8,s,3.6,8.15,-2.1,[0,0,-r]);i&&(o.rotation.z=.42,o.position.y=7.7,o.position.x=-4.3,a.rotation.x=.08);const l=new lh;l.moveTo(-6.5,0),l.lineTo(6.5,0),l.lineTo(0,3.2),l.lineTo(-6.5,0);const c=new Xa(l,{depth:.2,bevelEnabled:!1}),h=new X(c,t);h.position.set(0,7.15,2.35),h.castShadow=!0,e.add(h),ae(e,1.1,3.4,1.1,$(i?1709846:4928560),4.2,9.2,-4.5),ae(e,7.2,.22,3.4,$(2169879,{roughness:.9}),0,.55,3.4),ae(e,7.4,.2,.35,n,0,.66,5.1);for(const y of[-3.2,-1.1,1.1,3.2])ae(e,.24,3.1,.24,n,y,2.15,4.85);ae(e,7.4,.22,3.6,s,0,3.75,3.45,[-.07,0,0]);for(let y=0;y<3;y++)ae(e,4.2,.18,.55,$(2827808),0,.14+y*.18,5.55+(2-y)*.55);ae(e,2.1,3.15,.2,n,0,1.9,2.5);const u=ae(e,1.7,2.85,.16,$(i?1182988:2758929,{roughness:.65}),0,1.8,2.62);u.castShadow=!0;const f=new X(new gt(.055,8,8),$(9402954,{metalness:.8,roughness:.3}));f.position.set(.65,1.8,2.72),e.add(f);const m=new X(new Bt(.62,20,0,Math.PI),new Xe({color:3351572,emissive:i?6949382:16760438,emissiveIntensity:i?1.2:.5,roughness:.3}));m.position.set(0,3.63,2.6),m.rotation.z=Math.PI,e.add(m),Un(e,{x:-4.2,y:2.5,z:2.53,w:1.5,h:2.2,lit:!i,hollow:i}),Un(e,{x:4.2,y:2.5,z:2.53,w:1.5,h:2.2,lit:!i,hollow:i}),Un(e,{x:-4,y:6.2,z:1.72,w:1.35,h:1.9,lit:!1,hollow:i}),Un(e,{x:4,y:6.2,z:1.72,w:1.35,h:1.9,lit:!1,hollow:i}),Un(e,{x:0,y:8.15,z:2.5,w:1.1,h:1.3,lit:!1,hollow:i}),Un(e,{x:-6.53,y:2.7,z:-2.4,w:1.4,h:2.1,rotY:Math.PI/2,lit:!1,hollow:i}),Un(e,{x:6.53,y:2.7,z:-2.4,w:1.4,h:2.1,rotY:-Math.PI/2,lit:!1,hollow:i}),Un(e,{x:-6.53,y:6.2,z:-2.4,w:1.3,h:1.8,rotY:Math.PI/2,lit:!1,hollow:i}),Un(e,{x:6.53,y:6.2,z:-2.4,w:1.3,h:1.8,rotY:-Math.PI/2,lit:!1,hollow:i});const g=new X(new gt(.13,10,10),new Xe({color:16767392,emissive:i?6032134:16754251,emissiveIntensity:i?1.6:3}));if(g.position.set(.95,3.2,2.9),e.add(g),i){const y=new St(16725279,12,14,2);y.position.set(.95,3.2,3.1),e.add(y),_n(e,16729122,2.6,.45,[.95,3.2,2.95])}else{const y=new St(16753240,9,11,2);y.position.set(.95,3.2,3.1),e.add(y),_n(e,16756838,1.5,.35,[.95,3.2,2.95])}const _=Ft(128,96,(y,v,T)=>{y.clearRect(0,0,v,T),y.fillStyle="#d8c9a8",y.font='600 54px "Cormorant Garamond", serif',y.textAlign="center",y.fillText("37",v/2,66)},{repeat:[1,1]}),p=new X(new it(.5,.38),new zt({map:_,transparent:!0}));p.position.set(1.55,2.9,2.55),e.add(p);const d=$(i?789002:1910300,{roughness:1}),w=bt(71);for(let y=0;y<9;y++){const v=y%2?1:-1,T=new X(new qa(.5+w()*.65,1),d);T.position.set(v*(3.3+w()*3.4),.5+w()*.3,2.4+w()*.9),T.scale.set(1,.75,1),T.castShadow=!0,e.add(T)}if(i){const y=$(1706504,{roughness:.9});for(let v=0;v<12;v++){const T=[];let E=-6+w()*12,P=8.6,R=2.6;for(let L=0;L<6;L++)T.push(new C(E+(w()-.5)*1.4,P,R+(w()-.5)*.4)),P-=.55+w()*.9,E+=(w()-.5)*.8;const M=new zn(T),x=new X(new gn(M,20,.025+w()*.045,4,!1),y);e.add(x);for(let L=1;L<T.length-1;L+=2){const F=new X(new gt(.05+w()*.06,5,4),$(2820872));F.position.copy(T[L]).add(new C((w()-.5)*.2,0,.05)),e.add(F)}}}return{group:e,roofL:o,roofR:a}}function qg(i=180,e=659212,t=.9){const n=new Xe({color:e,roughness:t,metalness:.08}),s=new X(new it(i,i),n);return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s}function Yg(i=4,e=1780272){const t=new Xe({color:e,roughness:.06,metalness:.6,transparent:!0,opacity:.65}),n=new X(new Bt(i,26),t);return n.rotation.x=-Math.PI/2,n.position.y=.012,n}const $g=13214084,Kg=2759958;function $n(i,e,t,n,s=0,r=0,o=0){const a=new Ce;a.position.set(s,r,o);const l=new wn(e,Math.max(.01,t-e*2),4,8),c=new X(l,n);return c.position.y=-t/2,c.castShadow=!0,c.receiveShadow=!0,a.add(c),i.add(a),a}function Jg({name:i="RYAN",height:e=1.76,skin:t=$g,hair:n=Kg,hairStyle:s="short",jacket:r=2964036,shirt:o=1842722,pants:a=2369066,shoes:l=1184274,flashlight:c=!1,pose:h="stand",scale:u=1}={}){const f=new Ce;f.name=`actor-${i}`,f.scale.setScalar(u*(e/1.76));const m=new Ce;f.add(m);const g=$(t,{roughness:.72}),_=$(n,{roughness:.85}),p=$(r,{roughness:.88}),d=$(o,{roughness:.9}),w=$(a,{roughness:.94}),y=$(l,{roughness:.6}),v=$(657931,{roughness:.8}),T=.82,E=.39,P=new Ce;P.position.y=T,m.add(P);const R=$n(P,.085,E,w,-.115,0,0),M=$n(P,.085,E,w,.115,0,0),x=$n(R,.066,E,w,0,-E,0),L=$n(M,.066,E,w,0,-E,0),F=new X(new xt(.14,.1,.26),y);F.position.set(0,-.78-.02,.055),F.castShadow=!0,x.add(F);const W=F.clone();W.position.x=0,L.add(W);const K=new Ce;K.position.y=T+.04,m.add(K);const D=new X(new wn(.185,.42,5,10),p);D.position.y=.23,D.scale.set(1.2,1,.72),D.castShadow=!0,K.add(D);const G=new X(new xt(.03,.43,.02),v);G.position.set(0,.24,.142),K.add(G);const Y=new X(new Qt(.115,.02,5,12,Math.PI),d);Y.rotation.x=Math.PI/2,Y.position.y=.47,K.add(Y);const z=new Ce;z.position.set(-.21,.42,0),K.add(z);const ce=new Ce;ce.position.set(.21,.42,0),K.add(ce);const pe=$n(z,.06,.3,p,0,0,0),Me=$n(ce,.06,.3,p,0,0,0),Ie=$n(pe,.05,.28,p,0,-.3,0),Ue=$n(Me,.05,.28,p,0,-.3,0),Je=new X(new gt(.058,8,6),g);Je.position.y=-.29,Ie.add(Je);const Ve=new X(new gt(.058,8,6),g);Ve.position.y=-.29,Ue.add(Ve);const Q=new X(new kt(.052,.06,.1,7),g);Q.position.y=.51,K.add(Q);const te=new Ce;te.position.y=.61,K.add(te);const Z=new X(new gt(.115,18,16),g);Z.scale.set(.92,1.08,.94),Z.castShadow=!0,te.add(Z);const k=new X(new gt(.082,12,10),g);k.position.set(0,-.065,.015),k.scale.set(.88,.7,.9),te.add(k);const q=new X(new Ki(.018,.05,5),g);q.rotation.x=Math.PI/2,q.position.set(0,-.01,.108),te.add(q);const Se=$(1051658,{roughness:.3});for(const he of[-1,1]){const xe=new X(new gt(.012,6,6),Se);xe.position.set(he*.038,.015,.099),te.add(xe);const A=new X(new xt(.052,.009,.012),_);A.position.set(he*.04,.046,.1),A.rotation.z=he*.08,te.add(A)}if(s==="long"){const he=new X(new gt(.127,16,14),_);he.scale.set(1.02,1.05,1.02),he.position.y=.018,te.add(he);const xe=new X(new wn(.09,.2,4,8),_);xe.position.set(0,-.1,-.045),xe.scale.set(1.1,1,.55),te.add(xe);for(const A of[-1,1]){const S=new X(new wn(.035,.2,4,6),_);S.position.set(A*.1,-.1,.015),S.rotation.z=A*.08,te.add(S)}}else if(s==="curly")for(let he=0;he<14;he++){const xe=new X(new gt(.045+Math.random()*.02,7,6),_),A=he/14*Math.PI*2;xe.position.set(Math.cos(A)*.09,.07+Math.sin(he)*.025,Math.sin(A)*.07),te.add(xe)}else{const he=new X(new gt(.123,16,12,0,Math.PI*2,0,Math.PI*.62),_);he.position.y=.014,he.scale.set(1,1.05,1.02),te.add(he);const xe=new X(new xt(.15,.04,.05),_);xe.position.set(0,.088,.085),xe.rotation.x=-.18,te.add(xe)}let be=null;if(c){be=new Ce,be.position.set(0,-.29,.02),Ue.add(be);const he=new X(new kt(.025,.03,.22,8),$(1710620,{metalness:.6,roughness:.35}));he.rotation.x=Math.PI/2,he.position.z=.1,be.add(he);const xe=new X(new Bt(.033,10),new zt({color:16773839}));xe.position.z=.215,be.add(xe);const A=new Ls(16769200,c===!0?22:16,18,.44,.6,1.4);A.position.set(0,0,.2),A.castShadow=!1;const S=new Tt;S.position.set(0,-.1,4),be.add(S),A.target=S,be.add(A),be.rotation.x=.28;const V=new Ct(new At({map:null,color:16771264,transparent:!0,opacity:.28,blending:at,depthWrite:!1}));V.scale.setScalar(.22),V.position.z=.22,be.add(V)}const U={...{shoulderL:.1,shoulderR:-.1,armL:.08,armR:-.08,foreL:.18,foreR:.18,thighL:0,thighR:0,shinL:0,shinR:0,headX:0,headY:0,bodyX:0}};let se=0,re=0,O=0;const ne=he=>{U.bodyX=0,U.thighL=0,U.thighR=0,U.shinL=0,U.shinR=0,U.armL=.08,U.armR=-.08,U.foreL=.18,U.foreR=.18,U.shoulderL=.1,U.shoulderR=-.1,U.headX=0,U.headY=0,P.position.y=T,he==="slump"?(U.bodyX=.06,U.headX=.25,U.shoulderL=.24,U.shoulderR=-.24):he==="sit"?(P.position.y=T,U.thighL=-Math.PI/2+.06,U.thighR=-Math.PI/2-.06,U.shinL=Math.PI/2,U.shinR=Math.PI/2,U.armL=.4,U.armR=-.4,U.foreL=.9,U.foreR=.9):he==="reach"?(U.armR=-1.3,U.foreR=.1,U.shoulderR=-.35,U.headX=-.12):he==="hold"?(U.armL=1,U.armR=-1,U.foreL=.7,U.foreR=.7,U.shoulderL=.36,U.shoulderR=-.36):he==="cover"?(U.armL=1.5,U.armR=-1.5,U.shoulderL=.5,U.shoulderR=-.5,U.foreL=1.6,U.foreR=1.6,U.headX=.2):he==="fear"?(U.bodyX=-.05,U.armL=.4,U.armR=-.4,U.shoulderL=.3,U.shoulderR=-.3,U.headX=-.12):he==="point"?(U.armR=-1.55,U.foreR=.05):he==="kneel"?(P.position.y=T-.36,U.thighL=-1.35,U.thighR=.3,U.shinL=1.5,U.shinR=.2,U.headX=.15):he==="collapsed"&&(m.rotation.z=.04,P.position.y=T-.48,U.thighL=-1.1,U.thighR=-.7,U.shinL=1.2,U.shinR=1.4,U.armL=1.1,U.armR=-.5,U.foreL=1.4,U.headX=.35)};return ne(h),{root:f,body:m,head:te,torso:K,flashlightRig:be,setPose:ne,update:(he,xe=.016)=>{re>.01&&(se+=xe*5.8*re,U.thighL=Math.sin(se)*.65,U.thighR=-Math.sin(se)*.65,U.shinL=Math.max(0,-Math.sin(se))*.7,U.shinR=Math.max(0,Math.sin(se))*.7,U.armL=-Math.sin(se)*.5,U.armR=Math.sin(se)*.5);const A=Math.sin(he*1.4+f.position.x*.7)*.008,S=Math.sin(he*.53+f.position.z*.3)*.014;m.position.y=O+A,m.rotation.x+=(U.bodyX-m.rotation.x)*Math.min(1,xe*6),P.rotation.x+=(U.bodyX*.3-P.rotation.x)*Math.min(1,xe*6),R.rotation.x+=(U.thighL-R.rotation.x)*Math.min(1,xe*7),M.rotation.x+=(U.thighR-M.rotation.x)*Math.min(1,xe*7),x.rotation.x+=(U.shinL-x.rotation.x)*Math.min(1,xe*7),L.rotation.x+=(U.shinR-L.rotation.x)*Math.min(1,xe*7),z.rotation.z+=(U.shoulderL-z.rotation.z)*Math.min(1,xe*6),ce.rotation.z+=(U.shoulderR-ce.rotation.z)*Math.min(1,xe*6),pe.rotation.z+=(U.armL+S-pe.rotation.z)*Math.min(1,xe*5),Me.rotation.z+=(U.armR-S-Me.rotation.z)*Math.min(1,xe*5),Ie.rotation.x+=(U.foreL-Ie.rotation.x)*Math.min(1,xe*6),Ue.rotation.x+=(U.foreR-Ue.rotation.x)*Math.min(1,xe*6),te.rotation.x+=(U.headX+Math.sin(he*.7)*.012-te.rotation.x)*Math.min(1,xe*4),te.rotation.y+=(U.headY+Math.sin(he*.33+1)*.03-te.rotation.y)*Math.min(1,xe*4)},setWalking(he){re=he},setFloat(he){O=he},lookAtYaw(he){U.headY=he},setPosition(he,xe,A){f.position.set(he,xe,A)},setRotation(he){f.rotation.y=he}}}function jg(){const i=new Ce,e=$(722952,{roughness:.72,metalness:.12}),t=$(2760220,{roughness:.9}),n=new Xe({color:2754054,emissive:10358536,emissiveIntensity:1.4,roughness:.7}),s=new Ce;i.add(s);const r=new X(new wn(.21,.85,6,10),e);r.position.y=2.1,r.scale.set(.82,1,.55),s.add(r);for(let _=0;_<4;_++){const p=new X(new Qt(.18-_*.012,.012,5,12,Math.PI*1.25),t);p.position.set(0,2.38-_*.16,0),p.rotation.set(Math.PI/2,.3,0),s.add(p)}const o=new X(new gt(.12,10,8),n);o.position.set(0,2.3,.09),o.scale.set(1,1.4,.4),s.add(o);const a=new X(new kt(.055,.07,.4,6),t);a.position.y=2.72,s.add(a);const l=new Ce;l.position.y=3.02,s.add(l);const c=new X(new gt(.16,14,12),t);c.scale.set(.78,1.5,.78),l.add(c);const h=new X(new gt(.135,12,10),$(1182988));h.position.set(0,.01,.045),h.scale.set(.72,1.35,.5),l.add(h);for(const _ of[-1,1]){const p=new X(new gt(.033,8,6),new zt({color:197122}));p.position.set(_*.052,.05,.13),l.add(p);const d=new Ct(new At({color:16722454,transparent:!0,opacity:.55,blending:at,depthWrite:!1}));d.scale.setScalar(.06),d.position.copy(p.position).add(new C(0,0,.02)),l.add(d)}const u=[];for(const _ of[-1,1]){const p=new Ce;p.position.set(_*.22,2.52,0),s.add(p);const d=new X(new wn(.045,.7,4,6),t);d.position.y=-.38,p.add(d);const w=new Ce;w.position.y=-.76,p.add(w);const y=new X(new wn(.035,.78,4,6),t);y.position.y=-.4,w.add(y);const v=new Ce;v.position.y=-.82,w.add(v);for(let T=0;T<4;T++){const E=new X(new wn(.009,.22-T*.02,3,4),t);E.position.set((T-1.5)*.028,-.13,0),E.rotation.z=(T-1.5)*.08,v.add(E)}p.rotation.z=_*.16,u.push({shoulder:p,elbow:w})}const f=[];for(let _=0;_<8;_++){const p=[],d=_/8*Math.PI*2;for(let v=0;v<6;v++)p.push(new C(Math.cos(d)*(.08+v*.03),1.8-v*.28,Math.sin(d)*(.06+v*.02)));const w=new zn(p),y=new X(new gn(w,18,.012,4,!1),e);s.add(y),f.push(y)}const m=new Ct(new At({color:9309190,transparent:!0,opacity:.13,blending:at,depthWrite:!1}));return m.scale.setScalar(5.5),m.position.y=2.2,i.add(m),{root:i,body:s,head:l,update:(_,p)=>{s.position.y=Math.sin(_*.55)*.07,s.rotation.z=Math.sin(_*.31)*.035,u.forEach(({shoulder:d,elbow:w},y)=>{d.rotation.x=Math.sin(_*.4+y*1.6)*.12-.05,w.rotation.x=.18+Math.sin(_*.52+y)*.1}),l.rotation.y=Math.sin(_*.24)*.22,l.rotation.x=-.06+Math.sin(_*.37)*.04,f.forEach((d,w)=>{d.rotation.y=Math.sin(_*.3+w)*.06}),m.material.opacity=.1+Math.sin(_*.8)*.035}}}function Pt(i,e,t,n,s,r=0,o="stand",a=!0){const l=Jg({name:t,pose:o,...n});if(l.root.position.set(...s),l.root.rotation.y=r,i.add(l.root),e.actors.push(l),a){const c=new X(new Bt(.34,18),new zt({color:0,transparent:!0,opacity:.42,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.set(s[0],.018,s[2]),i.add(c),l.shadowDisc=c}return l}function jn(i,e,t,n,s=.75){const r=new X(new gt(s,12,8),new zt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}));return r.position.copy(n),r.userData.hotspotId=t,i.add(r),e.hotspotData.push({id:t,position:n.clone(),ringSize:Math.max(.4,s*.9)}),r}function Qa(i,e,t=130,n=null,s={}){const r=new gt(t,32,20),o=new Dt({side:qt,depthWrite:!1,transparent:!1,uniforms:{uTop:{value:new He(i)},uBottom:{value:new He(e)},uHorizon:{value:new He(n||e)},uTime:{value:0},uCloud:{value:s.cloud??0},uCloudColor:{value:new He(s.cloudColor||858658)}},vertexShader:`
      varying vec3 vWorld;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 uTop, uBottom, uHorizon, uCloudColor;
      uniform float uTime, uCloud;
      varying vec3 vWorld;
      varying vec2 vUv;
      float hash(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
      float noise(vec2 p){
        vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
      }
      void main(){
        float h = clamp(normalize(vWorld).y, -0.2, 1.0);
        vec3 col = mix(uBottom, uTop, smoothstep(-0.02, 0.62, h));
        col = mix(col, uHorizon, pow(1.0 - clamp(h + 0.02, 0.0, 1.0), 6.0) * 0.55);
        vec2 cp = vUv * vec2(6.0, 12.0);
        float n = noise(cp + vec2(uTime * 0.012, 0.0)) * 0.6 + noise(cp * 2.3 - uTime * 0.006) * 0.4;
        float band = smoothstep(0.02, 0.3, h) * (1.0 - smoothstep(0.55, 0.95, h));
        col = mix(col, uCloudColor, n * band * uCloud);
        gl_FragColor = vec4(col, 1.0);
      }`}),a=new X(r,o);return a.frustumCulled=!1,a}function wh(i,e,{count:t=800,extent:n=60,height:s=26,opacity:r=.3}={}){const o=zg(t,n,s);return o.material.uniforms.uOpacity.value=r,i.add(o),e.updaters.push(a=>{o.material.uniforms.uTime.value=a}),o}function ts(i,e,{count:t=180,area:n=[20,8,20],color:s=14207400,size:r=.05}={}){const o=yh(t,r,s,n);return i.add(o),e.updaters.push(a=>{o.material.uniforms.uTime.value=a}),o}function Th(i,{x:e=0,y:t=0,z:n=0,hourAngle:s=93.5,minuteAngle:r=42,scale:o=1,material:a=null}={}){const l=a||new Xe({color:1708554,roughness:.55,metalness:.2}),c=new Ce;c.position.set(e,t,n);const h=new Ce,u=new X(new xt(.07*o,.58*o,.035*o),l);u.position.y=.29*o,h.add(u);const f=new X(new Ki(.055*o,.16*o,4),l);f.position.y=.62*o,h.add(f),h.rotation.z=-Lr.degToRad(s),c.add(h);const m=new Ce,g=new X(new xt(.045*o,.86*o,.035*o),l);g.position.y=.43*o,m.add(g);const _=new X(new Ki(.04*o,.12*o,4),l);_.position.y=.92*o,m.add(_),m.rotation.z=-Lr.degToRad(r),c.add(m);const p=new X(new kt(.05*o,.05*o,.06*o,10),l);return p.rotation.x=Math.PI/2,p.position.z=.02,c.add(p),i.add(c),{group:c,hour:h,minute:m}}function Vr(i,{min:e=7,max:t=15,first:n=1.5,level:s=1.2}={}){let r=n;i.updaters.push((o,a,l)=>{o>r&&(l?.lightning?.(s),l?.onLightning&&l.onLightning(),r=o+e+Math.random()*(t-e))})}function bh(i,e,{base:t=1,speed:n=9,amount:s=.25,seed:r=0}={}){e.updaters.push(o=>{i.intensity=t*(1-s*.5+s*Math.sin(o*n+r)*Math.sin(o*n*.37+r*2))})}function Zg(i,e,t,n){const s=new Ce;s.position.set(e,0,t),s.rotation.y=n;const r=$(1778728,{roughness:.38,metalness:.45}),o=$(9081495,{roughness:.2,metalness:.9}),a=new Xe({color:462098,roughness:.08,metalness:.6});ae(s,4.8,.62,1.95,r,0,.72,0),ae(s,3,.62,1.75,r,-.2,1.3,0),ae(s,2.6,.48,1.62,a,-.2,1.34,.04),ae(s,1.5,.5,1.73,r,1.35,1.28,0),ae(s,4.85,.12,1.7,o,0,.98,0);for(const c of[-1.55,1.55])for(const h of[-.98,.98]){const u=new X(new kt(.38,.38,.24,14),$(657931));u.rotation.x=Math.PI/2,u.position.set(c,.4,h),s.add(u);const f=new X(new kt(.17,.17,.26,10),o);f.rotation.x=Math.PI/2,f.position.set(c,.4,h),s.add(f)}for(const c of[-2.42,2.42])ae(s,.1,.22,1.9,o,c,.55,0);for(const c of[-.72,.72]){const h=new X(new xt(.06,.14,.22),new Xe({color:5901580,emissive:7999240,emissiveIntensity:.5}));h.position.set(-2.44,.76,c),s.add(h)}const l=new Ct(new At({color:16767392,transparent:!0,opacity:.06,blending:at,depthWrite:!1}));return l.scale.setScalar(2.4),l.position.set(0,1.4,0),s.add(l),i.add(s),s}function Qg(i){const e=new Ce;e.position.set(-8.4,0,9.2);const t=$(1316890,{roughness:.55,metalness:.35});Lt(e,.09,.16,6.6,t,0,3.3,0,8),ae(e,1.7,.11,.11,t,.8,6.5,0),ae(e,.2,.34,.42,t,1.65,6.36,0);const n=new X(new gt(.17,10,8),new Xe({color:16769184,emissive:16756816,emissiveIntensity:4}));n.position.set(1.65,6.2,0),e.add(n);const s=new St(16756838,46,25,2);s.position.set(1.65,6.1,0),e.add(s),_n(e,16756838,3.2,.28,[1.65,6.2,0]),_n(e,16756838,10,.06,[1.65,6.2,0]);const r=Za(16756838,3.4,7.5,.028);return r.position.set(1.65,.3,0),e.add(r),i.add(e),{group:e,light:s}}function e_(i){const e=new Ce;e.position.set(-3.7,0,8.2),e.rotation.y=-.5,e.rotation.z=.12;const t=$(2764336,{roughness:.3,metalness:.8}),n=new Qt(.34,.028,6,20);for(const a of[-.55,.55]){const l=new X(n,t);l.position.set(a,.36,0),e.add(l);for(let c=0;c<8;c++){const h=new X(new kt(.006,.006,.62,3),t);h.position.set(a,.36,0),h.rotation.z=c/8*Math.PI,e.add(h)}}const s=[[-.55,.36],[-.1,.85],[.4,.85],[.55,.36],[.1,.36]];for(let a=0;a<s.length-1;a++){const l=new C(s[a][0],s[a][1],0),c=new C(s[a+1][0],s[a+1][1],0),h=Hn(l,c,.018,.018,t,5);e.add(h)}const r=new X(new kt(.016,.016,.42,5),t);r.rotation.x=Math.PI/2,r.position.set(.42,1,0),e.add(r);const o=new X(new xt(.24,.05,.14),$(1184274));o.position.set(-.13,.95,0),e.add(o),i.add(e)}function t_(i){const e=$(2762529,{roughness:.96});for(let t=0;t<12;t++){const n=-14+t*.9,s=.9+Math.random()*.2,r=ae(i,.06,s,.06,e,n,s/2,11.8);r.rotation.z=(Math.random()-.5)*.16}for(const t of[.42,.74]){const n=ae(i,10.5,.06,.04,e,-10,t,11.8);n.rotation.z=.012}for(let t=0;t<2;t++){const n=ae(i,2.2,.06,.04,e,2.8+t*1.4,.6,11.8);n.rotation.z=t?.3:-.22}}function n_(){const i=new Ce,e={group:i,shots:{},actors:[],hotspotData:[],updaters:[],defaultShot:"establish"},t=qg(180,462089,.92);i.add(t);const n=new X(new it(180,8),new Xe({map:xc(),color:6975603,roughness:.38,metalness:.24}));n.rotation.x=-Math.PI/2,n.position.set(0,.012,15),n.receiveShadow=!0,i.add(n);const s=new X(new it(4.6,7),new Xe({map:xc(),color:3817023,roughness:.5,metalness:.15}));s.rotation.x=-Math.PI/2,s.position.set(0,.016,8.4),i.add(s);for(const[T,E,P]of[[2.2,10.4,2.4],[-2.8,7.1,1.4],[5.5,12.2,2.2],[-6,14,1.6]]){const R=Yg(P);R.position.set(T,.02,E),i.add(R)}const r=$(2759693,{roughness:1}),o=bt(404);for(let T=0;T<220;T++){const E=new X(new Bt(.025+o()*.04,3),r);E.rotation.x=-Math.PI/2,E.rotation.z=o()*Math.PI,E.position.set((o()-.5)*26,.022,6+o()*14),i.add(E)}const a=Sh();i.add(a.group);const l=Ft(256,320,(T,E,P)=>{const R=T.createRadialGradient(E/2,P*.5,20,E/2,P*.5,E*.72);R.addColorStop(0,"rgba(255,190,110,0.92)"),R.addColorStop(.65,"rgba(180,96,38,0.55)"),R.addColorStop(1,"rgba(20,12,6,0.3)"),T.fillStyle=R,T.fillRect(0,0,E,P),T.fillStyle="rgba(16,10,8,0.92)",T.beginPath(),T.arc(E/2,P*.4,32,0,Math.PI*2),T.fill(),T.fillRect(E/2-13,P*.42,26,25),T.beginPath(),T.moveTo(E/2-44,P*.95),T.quadraticCurveTo(E/2-30,P*.48,E/2,P*.47),T.quadraticCurveTo(E/2+30,P*.48,E/2+44,P*.95),T.closePath(),T.fill(),T.fillStyle="rgba(0,0,0,0.35)";for(let M=0;M<P;M+=7)T.fillRect(0,M,E,2)},{repeat:[1,1]}),c=new X(new it(1.28,1.75),new zt({map:l,transparent:!0}));c.position.set(-4,6.2,1.845),i.add(c);const h=new St(16752720,8,7,2);h.position.set(-4,6.2,2.8),i.add(h);const u=new Ka(10336732,2);u.position.set(-16,24,18),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),u.shadow.camera.left=-28,u.shadow.camera.right=28,u.shadow.camera.top=26,u.shadow.camera.bottom=-12,u.shadow.camera.near=1,u.shadow.camera.far=70,u.shadow.bias=-.0015,i.add(u);const f=Qg(i);bh(f.light,e,{base:46,speed:2.1,amount:.1}),Zg(i,7.6,7,.22),e_(i),t_(i);const m=new Ce;m.position.set(3.4,0,11.2),ae(m,.1,1.1,.1,$(2762529),0,.55,0),ae(m,.46,.3,.34,$(3160634,{metalness:.5,roughness:.5}),0,1.15,0);const g=new X(new xt(.03,.18,.04),$(8133138));g.position.set(.26,1.26,0),m.add(g),i.add(m),[[-12.5,1.2,12,1],[12.8,-1.5,10,.9],[-15.5,9,11,1.1],[15.5,9.5,9,.85],[6.5,-6.5,11,1],[-7.5,-5.5,9,.75],[-21,-3,12,1.2],[21,-4,12,1.1]].forEach(([T,E,P,R],M)=>{const x=Is(100+M,P,790029);x.position.set(T,0,E),x.scale.setScalar(R),x.rotation.y=M*.8,i.add(x)});for(const[T,E,P]of[[-23,-7,!0],[22,-9,!1],[-30,-14,!1]]){const R=new Ce;if(R.position.set(T,0,E),ae(R,8,4.5,7,$(1120026),0,2.2,0),ae(R,8.6,.3,7.6,$(724753),0,4.6,0,[0,0,.32]),P){const M=new X(new it(1.1,1.3),new zt({color:16760183}));M.position.set(-2,2.7,3.52),R.add(M);const x=new St(16756320,14,12,2);x.position.set(-2,2.7,4.4),R.add(x)}i.add(R)}const p=Is(909,13,329222);p.position.set(-14,0,18),p.rotation.y=2.2,i.add(p);for(let T=0;T<5;T++){const E=new Ct(new At({map:Xt(),color:2307906,transparent:!0,opacity:.035,blending:at,depthWrite:!1}));E.scale.set(24,7,1),E.position.set(-12+T*6,1.6,6+T%2*4),i.add(E)}const d=Pt(i,e,"RYAN",{height:1.78,jacket:3162186,shirt:1711134,pants:2501166,hair:2365457,flashlight:!0},[1.25,0,8],Math.PI,"stand"),w=Pt(i,e,"SAM",{height:1.72,jacket:4865322,shirt:1972758,pants:2369066,hair:1577486,hairStyle:"curly",flashlight:!0},[3,0,8.5],Math.PI-.18,"stand");d.setPose("slump"),w.lookAtYaw(-.2),wh(i,e,{count:1e3,extent:60,height:26,opacity:.26}),ts(i,e,{count:110,area:[26,8,26],color:10137792,size:.04}),Vr(e,{min:8,max:14,first:2.4});const y=Qa(66311,661279,130,1519677,{cloud:.65,cloudColor:528922});i.add(y),e.updaters.push(T=>{y.material.uniforms.uTime.value=T});const v=new Ct(new At({map:Xt(),color:10138830,transparent:!0,opacity:.09,blending:at,depthWrite:!1}));return v.scale.set(38,38,1),v.position.set(-36,40,-60),i.add(v),e.shots={establish:{pos:[-10.5,2.5,16.5],look:[2,5,-.5],fov:38,handheld:.2},title:{pos:[-12,2.6,18.5],look:[2.4,5.3,0],fov:37,handheld:.16},approach:{pos:[-2.6,1.9,12.6],look:[0,3.5,2.2],fov:42,handheld:.5},porch:{pos:[.6,1.72,9.6],look:[0,3,2.6],fov:45,handheld:.55},door:{pos:[0,1.68,6.2],look:[0,1.9,2.5],fov:48,handheld:.7},group:{pos:[-1.4,1.58,11.7],look:[2,1.8,5],fov:44,handheld:.5},window:{pos:[-1,1.62,10.8],look:[-4,6.2,2.4],fov:31,handheld:.25},lawn:{pos:[5.6,1.35,9.2],look:[-2,3.2,2],fov:43,handheld:.4},street:{pos:[12,2,15],look:[0,3.5,0],fov:44,handheld:.3}},e.updaters.push(T=>{d.lookAtYaw(Math.sin(T*.23)*.12),w.lookAtYaw(-.2+Math.sin(T*.31+1)*.15)}),e.fog=new ni(463386,.0115),e.background=new He(198669),e.hemi=.22,e.hemiColor=4612216,e.hemiGround=526856,e.exposure=1.08,e.bloom=.68,e.bloomThreshold=.6,e.tint=14674677,e.saturation=.9,e.contrast=1.04,e.grain=.06,e.aberration=1.4,e.update=(T,E,P)=>{for(const R of e.updaters)R(T,E,P)},e.onEngine=T=>{e._engine=T},e}function i_(){return Ft(320,400,(i,e,t)=>{const n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#4a4130"),n.addColorStop(1,"#2c271d"),i.fillStyle=n,i.fillRect(0,0,e,t),i.strokeStyle="rgba(160,140,98,0.16)",i.lineWidth=2;for(let s=16;s<t;s+=64)for(let r=16;r<e;r+=64)i.beginPath(),i.ellipse(r,s,18,30,.4,0,Math.PI*2),i.stroke();i.fillStyle="#100d0a",i.beginPath(),i.moveTo(40,20),i.lineTo(190,12),i.lineTo(210,90),i.lineTo(178,150),i.lineTo(200,210),i.lineTo(150,250),i.lineTo(90,230),i.lineTo(54,160),i.lineTo(72,96),i.closePath(),i.fill(),i.strokeStyle="rgba(210,200,180,0.72)",i.lineWidth=3;for(let s=0;s<5;s++){for(let r=0;r<4;r++)i.beginPath(),i.moveTo(60+r*9,50+s*25),i.lineTo(60+r*9,70+s*25),i.stroke();i.beginPath(),i.moveTo(52,68+s*25),i.lineTo(96,50+s*25),i.stroke()}i.beginPath(),i.arc(150,190,30,0,Math.PI*2),i.stroke(),i.beginPath(),i.moveTo(150,190),i.lineTo(150,172),i.stroke(),i.beginPath(),i.moveTo(150,190),i.lineTo(162,198),i.stroke(),i.fillStyle="rgba(110,18,14,0.55)";for(let s=0;s<4;s++)i.beginPath(),i.ellipse(60+s*16,300,6,22,s*.16-.2,0,Math.PI*2),i.fill();i.beginPath(),i.ellipse(104,330,34,26,0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(0,0,0,0.32)",i.fillRect(0,t-60,e,60)},{repeat:[1,1]})}function s_(){const i=new Ce,e={group:i,shots:{},actors:[],hotspotData:[],updaters:[],defaultShot:"wide"},t=new Xe({map:Hg(),color:9075818,roughness:.72,metalness:.04}),n=new X(new it(14,10),t);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,i.add(n),ae(i,14,.2,10,$(723207),0,6.45,0),ae(i,14,6.5,.24,new Xe({map:vr(),color:9143406,roughness:.95}),0,3.25,-5),ae(i,14,6.5,.24,new Xe({map:vr(),color:7301463,roughness:.95}),0,3.25,5),ae(i,.24,6.5,10,new Xe({map:vr(),color:7827549,roughness:.95}),-7,3.25,0),ae(i,.24,6.5,10,new Xe({map:vr(),color:7169621,roughness:.95}),7,3.25,0);const s=$(2760985,{roughness:.85});for(const[O,ne,oe,de]of[[0,-4.86,13.8,.1],[0,4.86,13.8,.1],[-6.86,0,.1,9.8],[6.86,0,.1,9.8]])ae(i,oe,1.25,de,s,O,.625,ne),ae(i,oe,.09,de,$(3812640),O,1.28,ne);ae(i,13.8,.16,.12,$(1577743),0,.08,-4.86),ae(i,13.8,.16,.12,$(1577743),0,.08,4.86);const r=new X(new it(5.4,4.2),new Xe({map:Mh(),color:8019032,roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(0,.012,-1.5),i.add(r);const o=$(3023641,{roughness:.78}),a=12,l=.29,c=.35;for(let O=0;O<a;O++){const ne=(O+1)*l;ae(i,2.6,ne,c,o,5.1,ne/2,3-O*c)}ae(i,2.6,.22,2.2,o,5.1,a*l+.11,-1.75),ae(i,3.2,3.2,.2,$(788743),5.1,5,-3.1),ae(i,2.2,2.4,.3,new Xe({color:328965,roughness:1}),5.2,4.8,-2.92);const h=$(2365970,{roughness:.6}),u=8;for(let O=0;O<u;O++){const ne=2.85-O*.5,oe=.3+O*.5/c*l*.55,de=1;Lt(i,.025,.035,de,h,3.8,oe+de/2,ne,6);const he=new X(new gt(.05,8,6),h);he.position.set(3.8,oe+de-.02,ne),i.add(he)}const f=new C(3.8,1.35,3),m=new C(3.8,4.08,-1.05);i.add(Hn(f,m,.04,.04,h,8)),Lt(i,.07,.09,1.25,h,3.8,.62,3.15,8);const g=new Ce;g.position.set(-3.4,0,-4.45);const _=$(3679514,{roughness:.62,metalness:.04}),p=$(1970956,{roughness:.72});ae(g,1.5,3.3,.72,_,0,1.65,0),ae(g,1.72,.22,.85,p,0,3.38,0),ae(g,1.62,.42,.8,p,0,3.05,.02),ae(g,1.58,.22,.78,p,0,.13,.02);for(const O of[-.65,.65]){Lt(g,.03,.06,.25,p,O,3.55,0,6);const ne=new X(new gt(.07,8,6),p);ne.position.set(O,3.7,0),g.add(ne)}const d=new Xe({map:Hr(!1),color:13352350,emissive:4863e3,emissiveIntensity:.32,roughness:.5,metalness:.05}),w=new X(new Bt(.62,48),d);w.position.set(0,2.88,.375),g.add(w);const y=new X(new Qt(.63,.035,8,40),$(7164456,{metalness:.6,roughness:.35}));y.position.set(0,2.88,.39),g.add(y);const v=new X(new Bt(.6,40),new Xe({color:16777215,transparent:!0,opacity:.05,roughness:.05,metalness:.4}));v.position.set(0,2.88,.4),g.add(v);const T=Th(g,{x:0,y:2.88,z:.42,hourAngle:93.5,minuteAngle:42,scale:.82}),E=new Ce;E.position.set(0,2.2,.22),g.add(E),Lt(E,.012,.012,1.15,$(10123828,{metalness:.8,roughness:.3}),0,-.575,0,5);const P=new X(new kt(.17,.17,.03,20),$(11043894,{metalness:.85,roughness:.25}));P.rotation.x=Math.PI/2,P.position.y=-1.18,E.add(P),ae(g,1.16,1.55,.04,new Xe({color:2760726,transparent:!0,opacity:.6,roughness:.2}),0,1.35,.37);for(const O of[.55,1.35,2.15])ae(g,1.3,.04,.02,p,0,O,.38);i.add(g),jn(i,e,"clock_face",new C(-3.4,2.9,-3.85),.85);const R=new St(16764810,3.2,3.5,2);R.position.set(-3.4,2.9,-3.4),i.add(R),e.updaters.push(O=>{E.rotation.x=Math.sin(O*1.15)*.115,T.minute.rotation.z=-Lr.degToRad(42)+Math.sin(O*.27)*.006});const M=new Ce;M.position.set(.35,2.5,-4.86);const x=$(3811867,{roughness:.55});ae(M,1.55,1.9,.09,x,0,0,0);const L=new X(new it(1.3,1.65),new Xe({map:Ro(),color:12102542,roughness:.85,emissive:1708810,emissiveIntensity:.2}));L.position.z=.055,M.add(L),ae(M,1.64,.07,.14,$(2365968),0,.98,.02),i.add(M),jn(i,e,"creel_photo",new C(.35,2.5,-4.55),.9);for(const[O,ne]of[[-1.8,2.5],[1.9,2.6],[-5.6,2.7]]){const oe=new Ce;oe.position.set(O,ne,-4.84);const de=$(2365970,{roughness:.7});ae(oe,.62,.78,.06,de,0,0,0);const he=new X(new it(.5,.64),new Xe({map:Ro(),color:9076842,roughness:.9}));he.position.z=.04,oe.add(he),i.add(oe)}const F=new X(new it(1.45,1.8),new Xe({map:i_(),roughness:.95,transparent:!0}));F.position.set(3.25,2.15,-4.87),i.add(F),jn(i,e,"wall_scratches",new C(3.25,2.15,-4.55),.85);const W=new Ce;W.position.set(2.55,0,-1.5),ae(W,.95,.72,.7,$(2563349,{roughness:.8}),0,.36,0),ae(W,1.05,.06,.8,$(3483162),0,.73,0);const K=[],D=bt(12);for(let O=0;O<5;O++){const ne=.18+D()*.25,oe=(D()-.5)*.6,de=(D()-.5)*.35;Lt(W,.045,.055,ne,$(12363394,{roughness:.85}),oe,.76+ne/2,de,8);const he=new Ct(new At({map:Xt(),color:16754246,transparent:!0,opacity:.85,blending:at,depthWrite:!1}));he.scale.setScalar(.11),he.position.set(oe,.78+ne,de),W.add(he),K.push({sprite:he,phase:D()*6})}i.add(W);const G=new St(16751690,7,6,2);G.position.set(2.55,1.3,-1.5),i.add(G),jn(i,e,"candles",new C(2.55,1.15,-1.5),.72),e.updaters.push(O=>{K.forEach((ne,oe)=>{ne.sprite.scale.setScalar(.09+Math.sin(O*9+ne.phase)*.018+Math.sin(O*23+oe)*.008),ne.sprite.position.x+=Math.sin(O*5+oe)*6e-4}),G.intensity=6.5+Math.sin(O*7.3)*.9+Math.sin(O*17.1)*.4});const Y=$(10327943,{roughness:1}),z=new Ce;z.position.set(-1.7,0,-1.6),z.rotation.y=.08,ae(z,2.5,.42,1,$(2761756),0,.28,0),ae(z,2.5,.75,.28,$(2498584),0,.75,-.45),ae(z,.28,.55,1,$(2498584),-1.28,.55,0),ae(z,.28,.55,1,$(2498584),1.28,.55,0),ae(z,2.6,.1,1.08,Y,0,.53,.03),ae(z,2.6,.82,.06,Y,0,.9,-.6,[.06,0,0]),ae(z,2.52,.75,.08,Y,0,.35,.55,[.1,0,0]);for(let O=0;O<5;O++)ae(z,.2,.5,.1,Y,-1+O*.5,.28,.58,[.06,0,O%2?.08:-.08]);i.add(z);const ce=new Ce;ce.position.set(5.8,0,1.6),ce.rotation.y=-.5,ae(ce,.9,.45,.9,$(2366742),0,.3,0),ae(ce,.9,.9,.18,$(2366742),0,.7,-.4),ae(ce,.8,.08,.85,Y,0,.55,.02),i.add(ce);const pe=new Ce;pe.position.set(-6.7,0,.5),ae(pe,.5,2,3,$(2893085,{roughness:.9}),0,1,0),ae(pe,.32,1.2,1.9,$(394500),.14,.6,0),ae(pe,.7,.14,3.2,$(3944742),0,2.04,0);const Me=[];for(let O=0;O<3;O++){const ne=new Ct(new At({map:Xt(),color:16734750,transparent:!0,opacity:.5,blending:at,depthWrite:!1}));ne.scale.setScalar(.8-O*.15),ne.position.set(.28,.3+O*.12,-.5+O*.5),pe.add(ne),Me.push(ne)}const Ie=new St(16734752,9,7,2);Ie.position.set(-6,.7,.5),pe.add(Ie),i.add(pe);const Ue=new Ce;Ue.position.set(-6.83,3.15,.5),Ue.rotation.y=Math.PI/2,ae(Ue,1,1.3,.07,$(2760212),0,0,0);const Je=new X(new it(.82,1.1),new Xe({map:Ro(),color:10128757,roughness:.9}));Je.position.z=.045,Ue.add(Je),i.add(Ue),e.updaters.push(O=>{Ie.intensity=8+Math.sin(O*11.2)*1.4+Math.sin(O*23.7)*.7,Me.forEach((ne,oe)=>{ne.material.opacity=.35+Math.sin(O*6+oe)*.12})});const Ve=new Ce;Ve.position.set(0,4.3,-1),Lt(Ve,.02,.02,2.1,$(4008984),0,1.05,0,5);const Q=new X(new Qt(.8,.035,6,24),$(4863776,{metalness:.55,roughness:.45}));Q.rotation.x=Math.PI/2,Ve.add(Q);for(let O=0;O<6;O++){const ne=O/6*Math.PI*2,oe=Math.cos(ne)*.8,de=Math.sin(ne)*.8,he=Lt(Ve,.022,.022,.45,$(4008984),oe*.56,.22,de*.56,5);he.rotation.z=Math.PI/2,he.rotation.y=-ne,Lt(Ve,.045,.05,.14,$(12363394),oe,.1,de,8);const xe=new Ct(new At({map:Xt(),color:16760426,transparent:!0,opacity:.9,blending:at,depthWrite:!1}));xe.scale.setScalar(.13),xe.position.set(oe,.2,de),Ve.add(xe)}i.add(Ve);const te=new St(16760952,22,12,2);te.position.set(0,4.15,-1),i.add(te),bh(te,e,{base:22,speed:3.4,amount:.18,seed:2});const Z=new Ls(16764830,26,16,1.05,.8,1.2);Z.position.set(0,5.8,-.8),Z.target.position.set(0,0,-1.3),Z.castShadow=!0,Z.shadow.mapSize.set(1024,1024),Z.shadow.bias=-.002,i.add(Z),i.add(Z.target);const k=new Ce;k.position.set(-6.86,3.1,-1.9),k.rotation.y=Math.PI/2,ae(k,2.1,2.7,.18,$(1643792),0,0,0);const q=new X(new it(1.8,2.4),new Xe({color:2439498,emissive:2574186,emissiveIntensity:.55,roughness:.15,metalness:.2}));q.position.z=.1,k.add(q),ae(k,.05,2.4,.12,$(1643792),0,0,.12),ae(k,1.8,.05,.12,$(1643792),0,0,.12),ae(k,1.8,.05,.12,$(1643792),0,.8,.12),i.add(k);const Se=Za(8628684,1.4,8,.03);Se.position.set(-5.9,2.9,-1.9),Se.rotation.z=.9,i.add(Se);const be=new Ls(8300240,28,14,.5,.9,1.5);be.position.set(-6.4,3.4,-1.9),be.target.position.set(0,.3,.5),i.add(be),i.add(be.target);const I=bt(55);for(let O=0;O<22;O++){const ne=new X(new it(.16+I()*.18,.22+I()*.2),$(11708815,{roughness:1,side:Wt}));ne.rotation.x=-Math.PI/2,ne.rotation.z=I()*Math.PI,ne.position.set((I()-.5)*8,.02+O*4e-4,-4+I()*6),i.add(ne)}for(let O=0;O<10;O++){const ne=new X(new Bt(.03+I()*.03,3),$(3088400));ne.rotation.x=-Math.PI/2,ne.position.set((I()-.5)*12,.022,-4.8+I()*9),i.add(ne)}const U=Pt(i,e,"WREN",{height:1.64,jacket:2829117,shirt:1513247,pants:2302763,hair:1183244,hairStyle:"long",skin:12163972},[-4.85,0,-1.9],.55,"stand");Pt(i,e,"SAM",{height:1.7,jacket:4864552,shirt:1841172,pants:2500651,hair:1774350,hairStyle:"curly",flashlight:!0},[1.85,0,1.5],Math.PI+.2,"stand"),Pt(i,e,"RYAN",{height:1.78,jacket:2964807,shirt:1711134,pants:2501166,hair:2365457,flashlight:!0},[.35,0,2.7],Math.PI,"slump");const se=Pt(i,e,"DANA",{height:1.68,jacket:7828330,shirt:9078138,pants:6051919,hair:2759186,hairStyle:"long",skin:13018508},[5,3.62,-2.2],.15,"stand",!1),re=new Ct(new At({map:Xt(),color:7311294,transparent:!0,opacity:.1,blending:at,depthWrite:!1}));return re.scale.setScalar(1.4),re.position.set(0,1.2,0),U.root.add(re),ts(i,e,{count:220,area:[13,6,9],color:14075036,size:.055}),Vr(e,{min:9,max:16,first:4}),e.updaters.push(O=>{U.lookAtYaw(Math.sin(O*.26)*.17),se.lookAtYaw(.08+Math.sin(O*.3)*.08),re.material.opacity=.07+Math.sin(O*1.2)*.03}),e.shots={wide:{pos:[.55,1.88,4.5],look:[0,2.35,-4.7],fov:56,handheld:.32},explore:{pos:[.4,1.82,4.35],look:[0,1.95,-4.65],fov:59,handheld:.26},hall:{pos:[-1.2,1.72,3.6],look:[.2,2.1,-4.8],fov:48,handheld:.55},clock:{pos:[-1,1.9,-.4],look:[-3.4,2.85,-4.4],fov:38,handheld:.28},clock_close:{pos:[-2.35,2.72,-1.9],look:[-3.4,2.95,-4.35],fov:31,handheld:.18},wren:{pos:[-.2,1.7,.8],look:[-4.85,1.58,-1.9],fov:40,handheld:.3},stairs:{pos:[1.1,1.75,2.6],look:[4.9,2.9,-2.2],fov:46,handheld:.35},dana_stairs:{pos:[.15,1.62,2.2],look:[4.9,4.25,-2.2],fov:37,handheld:.28},door:{pos:[.1,1.7,-1.4],look:[0,1.7,3.6],fov:46,handheld:.4}},e.fog=new ni(460293,.018),e.background=new He(263171),e.hemi=.16,e.hemiColor=3752010,e.hemiGround=657156,e.exposure=1.02,e.bloom=.7,e.bloomThreshold=.58,e.tint=16050905,e.saturation=.94,e.contrast=1.05,e.grain=.065,e.aberration=1.1,e.update=(O,ne,oe)=>{for(const de of e.updaters)de(O,ne,oe)},e}function r_(){return Ft(512,512,(i,e,t)=>{const n=bt(61),s=i.createLinearGradient(0,0,0,t);s.addColorStop(0,"#3a4652"),s.addColorStop(1,"#26313b"),i.fillStyle=s,i.fillRect(0,0,e,t);for(let r=0;r<3500;r++)i.fillStyle=`rgba(${200+n()*30},${205+n()*25},${210+n()*25},${n()*.028})`,i.fillRect(n()*e,n()*t,1+n()*2,1+n()*2);for(let r=0;r<8;r++){const o=n()*e,a=n()*t,l=i.createRadialGradient(o,a,2,o,a,40+n()*80);l.addColorStop(0,"rgba(12,20,24,0.12)"),l.addColorStop(1,"rgba(12,20,24,0)"),i.fillStyle=l,i.fillRect(o-100,a-100,200,200)}i.fillStyle="rgba(10,14,18,0.35)",i.fillRect(0,t-40,e,40)},{repeat:[2,1]})}function o_(){return Ft(512,448,(i,e,t)=>{const n=bt(88),s=i.createLinearGradient(0,0,0,t);s.addColorStop(0,"#0b1a26"),s.addColorStop(.55,"#162b38"),s.addColorStop(1,"#050a0e"),i.fillStyle=s,i.fillRect(0,0,e,t),i.fillStyle="rgba(3,7,10,0.9)";for(let o=0;o<5;o++){const a=30+n()*(e-60);i.fillRect(a,t*.35,8+n()*10,t);for(let l=0;l<5;l++)i.beginPath(),i.ellipse(a+(n()-.5)*80,t*.25+n()*120,20+n()*40,8+n()*20,n()*3,0,Math.PI*2),i.fill()}for(let o=0;o<260;o++){i.strokeStyle=`rgba(170,200,220,${.04+n()*.12})`,i.lineWidth=.7+n()*1.2;const a=n()*e,l=n()*t,c=8+n()*30;i.beginPath(),i.moveTo(a,l),i.lineTo(a-2,l+c),i.stroke()}for(let o=0;o<40;o++)i.fillStyle=`rgba(190,215,230,${.08+n()*.2})`,i.beginPath(),i.arc(n()*e,n()*t,1+n()*3,0,Math.PI*2),i.fill();const r=i.createRadialGradient(e*.7,t*.15,5,e*.7,t*.15,150);r.addColorStop(0,"rgba(150,190,220,0.13)"),r.addColorStop(1,"rgba(150,190,220,0)"),i.fillStyle=r,i.fillRect(0,0,e,t),i.fillStyle="#151b20",i.fillRect(e/2-4,0,8,t),i.fillRect(0,t*.48-4,e,8),i.fillStyle="rgba(0,0,0,0.28)",i.fillRect(0,0,e,14)},{repeat:[1,1]})}function a_(){return Ft(300,380,(i,e,t)=>{i.fillStyle="#d9cfb8",i.fillRect(0,0,e,t),i.fillStyle="rgba(40,32,24,0.8)",i.font='600 26px "Cormorant Garamond", serif',i.textAlign="center",i.fillText("IT SEES YOU AT 3:07",e/2,46),i.strokeStyle="rgba(70,30,22,0.9)",i.lineWidth=6,i.beginPath(),i.arc(e/2,t*.56,80,0,Math.PI*2),i.stroke(),i.lineWidth=3;for(let n=0;n<12;n++){const s=n/12*Math.PI*2;i.beginPath(),i.moveTo(e/2+Math.cos(s)*64,t*.56+Math.sin(s)*64),i.lineTo(e/2+Math.cos(s)*76,t*.56+Math.sin(s)*76),i.stroke()}i.lineWidth=5,i.beginPath(),i.moveTo(e/2,t*.56),i.lineTo(e/2+40,t*.56-20),i.stroke(),i.beginPath(),i.moveTo(e/2,t*.56),i.lineTo(e/2-4,t*.56-58),i.stroke(),i.lineWidth=2.5;for(let n=0;n<3;n++){const s=90+n*60;i.beginPath(),i.arc(s,t*.83,12,0,Math.PI*2),i.stroke(),i.beginPath(),i.moveTo(s,t*.86),i.lineTo(s,t*.95),i.stroke(),i.beginPath(),i.moveTo(s-16,t*.9),i.lineTo(s+16,t*.9),i.stroke()}i.fillStyle="rgba(220,210,180,0.55)",i.fillRect(18,8,46,18),i.fillRect(e-64,8,46,18),i.strokeStyle="rgba(60,20,16,0.3)",i.lineWidth=1;for(let n=0;n<20;n++)i.beginPath(),i.moveTo(Math.random()*e,Math.random()*t),i.lineTo(Math.random()*e,Math.random()*t),i.stroke()},{repeat:[1,1]})}function l_(i){const e=new Ce;e.position.set(-3.8,.98,-2.9),e.rotation.y=.28,ae(e,.85,.12,.62,$(2763308,{roughness:.4,metalness:.4}),0,0,0);const t=new Ce;t.position.y=.075,e.add(t),Lt(t,.28,.28,.035,$(1118482,{roughness:.3}),0,0,0,28);const n=new X(new Bt(.275,40),new Xe({map:Wg(),roughness:.22,metalness:.35,color:10132122}));n.rotation.x=-Math.PI/2,n.position.y=.021,t.add(n),Lt(t,.012,.012,.06,$(11053224,{metalness:.8}),0,.04,0,6);const s=new Ce;s.position.set(.33,.08,-.22),e.add(s);const r=new X(new xt(.02,.02,.42),$(12171709,{metalness:.85,roughness:.25}));r.position.set(-.1,.02,.18),r.rotation.y=.58,s.add(r);const o=new X(new xt(.06,.025,.1),$(1776412));o.position.set(-.22,.02,.37),s.add(o),Lt(s,.035,.035,.03,$(9079434,{metalness:.7}),0,.02,0,8);for(const a of[-.3,.28]){const l=new X(new kt(.025,.025,.02,10),$(10132122,{metalness:.7}));l.position.set(a,.07,.22),e.add(l)}return i.add(e),{group:e,platter:t}}function c_(){const i=new Ce,e={group:i,shots:{},actors:[],hotspotData:[],updaters:[],defaultShot:"wide"},t=new Xe({map:r_(),color:9345700,roughness:.95}),n=$(2239024,{roughness:.8}),s=new X(new it(9,8),new Xe({map:Mh(),color:9075830,roughness:1}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,i.add(s),ae(i,9,3.3,.2,t,0,1.65,-4),ae(i,9,3.3,.2,t,0,1.65,4),ae(i,.2,3.3,8,t,-4.5,1.65,0),ae(i,.2,3.3,8,t,4.5,1.65,0),ae(i,9,.16,8,$(1448735),0,3.3,0);for(const[k,q,Se,be]of[[0,-3.88,8.8,.06],[0,3.88,8.8,.06],[-4.38,0,.06,7.8],[4.38,0,.06,7.8]])ae(i,Se,.16,be,n,k,.08,q),ae(i,Se,.06,be,n,k,1.08,q);const r=new Ce;r.position.set(-1.7,2,-3.9),ae(r,2.7,2.25,.14,$(1777958),0,0,0);const o=new X(new it(2.4,1.95),new zt({map:o_()}));o.position.z=.08,r.add(o);const a=new St(7249092,8,7,2);a.position.set(0,0,.8),r.add(a);const l=Lt(r,.025,.025,3.4,$(3812384,{metalness:.4}),0,1.28,.12,6);l.rotation.z=Math.PI/2;const c=$(5057582,{roughness:1,side:Wt});for(const k of[-1,1]){const q=new X(new it(.72,2.45,6,10),c);q.position.set(k*1.42,-.08,.16);const Se=q.geometry.attributes.position;for(let be=0;be<Se.count;be++){const I=Se.getX(be);Se.setZ(be,Math.sin(I*18)*.045+Math.sin(I*31)*.02)}q.geometry.computeVertexNormals(),r.add(q)}i.add(r);const h=new Ls(8563148,24,12,.55,.85,1.4);h.position.set(-1.7,3.3,-3.4),h.target.position.set(.4,.2,1.5),i.add(h),i.add(h.target);const u=new Ce;u.position.set(2.15,0,-2.5);const f=$(3811872,{roughness:.7});ae(u,1.95,.35,2.55,f,0,.35,0),ae(u,1.95,.9,.16,f,0,.85,-1.3),ae(u,2.02,.22,2.62,$(14209213,{roughness:1}),0,.62,.02),ae(u,2.05,.1,1.9,$(7022114,{roughness:1}),0,.74,.22);const m=new X(new it(2.08,1.5),$(8006692,{roughness:1}));m.rotation.x=-Math.PI/2,m.position.set(0,.795,.45),u.add(m);for(const k of[-1,1]){const q=new X(new xt(.78,.16,.44),$(14275781,{roughness:1}));q.position.set(k*.48,.8,-1.05),q.rotation.x=-.08,q.rotation.y=k*.06,u.add(q)}ae(u,2.05,.12,.6,$(4145996,{roughness:1}),0,.82,1),i.add(u);const g=new Ce;g.position.set(3.85,0,-3.15),ae(g,.7,.72,.7,$(3811872),0,.36,0),ae(g,.76,.05,.76,$(4863526),0,.74,0);for(const k of[.26,.52])ae(g,.62,.02,.03,$(2102799),0,k,.36);Lt(g,.06,.09,.3,$(2763308,{metalness:.5}),0,.91,0,8);const _=new X(new kt(.13,.22,.26,16,1,!0),new Xe({color:14202758,emissive:9065508,emissiveIntensity:.45,roughness:.9,side:Wt}));_.position.set(0,1.2,0),g.add(_);const p=new St(16756838,11,7,2);p.position.set(0,1.18,0),g.add(p);const d=new Ce;d.position.set(-.18,.79,.22),ae(d,.16,.1,.08,$(1315860),0,.05,0);const w=new X(new it(.12,.075),new zt({map:Hr(!1)}));w.position.z=.045,d.add(w),g.add(d),i.add(g);const y=new Ce;y.position.set(-3.85,0,-2.85),y.rotation.y=Math.PI/2,ae(y,2.1,.82,.62,$(3680285,{roughness:.72}),0,.42,0),ae(y,2.2,.06,.7,$(4863268),0,.86,0);for(let k=0;k<3;k++){ae(y,.62,.02,.02,$(2168335),-.68+k*.68,.55,.33);const q=new X(new gt(.03,6,6),$(9072704,{metalness:.6}));q.position.set(-.68+k*.68,.55,.35),y.add(q)}i.add(y);const v=l_(i),T=new Ce;T.position.set(-4,0,-1.5),ae(T,.72,.35,.5,$(7032624),0,.18,0);for(let k=0;k<8;k++)ae(T,.24,.31,.015,$([9251618,2898778,3955008,11569724][k%4]),-.2+k%4*.13,.19,.1+Math.floor(k/4)*.05,[0,0,k%2?.05:-.04]);i.add(T),[{wall:"right",z:-2,y:1.85,tex:Co(0)},{wall:"right",z:.1,y:1.8,tex:Co(1)},{wall:"right",z:2.1,y:1.95,tex:Co(2)}].forEach(({z:k,y:q,tex:Se})=>{const be=new X(new it(.82,1.18),new Xe({map:Se,roughness:.9,emissive:1709584,emissiveIntensity:.25}));be.position.set(4.39,q,k),be.rotation.y=-Math.PI/2,i.add(be);for(const[I,U]of[[.56,-.38],[.56,.38],[-.56,-.38],[-.56,.38]]){const se=new X(new it(.1,.05),new zt({color:14208174,transparent:!0,opacity:.5}));se.position.set(4.38,q+I,k+U),se.rotation.y=-Math.PI/2,se.rotation.z=.2,i.add(se)}});const P=new X(new it(.66,.82),new Xe({map:a_(),roughness:.95}));P.position.set(-3.6,1.95,-3.88),i.add(P);const R=new Ce,M=bt(31),x=[];for(let k=0;k<=30;k++){const q=-4.2+k/30*8.5,Se=3.05-Math.sin(k/30*Math.PI)*.22+Math.sin(k*2.1)*.03;x.push(new C(q,Se,-3.78))}const L=new vt().setFromPoints(x),F=new za(L,new Fs({color:3813928,transparent:!0,opacity:.7}));R.add(F);const W=[16763258,16768410,16755548,16770736],K=[];x.forEach((k,q)=>{if(q%2)return;const Se=new X(new gt(.026,6,5),new Xe({color:16769192,emissive:W[q%W.length],emissiveIntensity:2.4,roughness:.3}));Se.position.copy(k),R.add(Se);const be=new Ct(new At({map:Xt(),color:16760944,transparent:!0,opacity:.24,blending:at,depthWrite:!1}));be.scale.setScalar(.2),be.position.copy(k).add(new C(0,0,.03)),R.add(be),K.push({mesh:Se,glow:be,phase:M()*6})}),i.add(R),e.updaters.push(k=>{K.forEach((q,Se)=>{const be=.86+Math.sin(k*(2+Se%3)+q.phase)*.14;q.mesh.material.emissiveIntensity=2.2*be,q.glow.material.opacity=.22*be})});const D=new Ce;D.position.set(3.35,0,2.1),ae(D,1.6,.06,.9,$(3351834),0,.76,0);for(const[k,q]of[[-.72,-.35],[.72,-.35],[-.72,.35],[.72,.35]])ae(D,.06,.74,.06,$(2365970),k,.37,q);const G=new Ce;G.position.set(.1,.79,0),ae(G,.72,.34,.22,$(1842464,{roughness:.5,metalness:.3}),0,.17,0);for(const k of[-.24,.24])Lt(G,.11,.11,.02,$(855310),k,.18,.115,16).rotation.x=Math.PI/2,Lt(G,.045,.045,.025,$(9079434),k,.18,.115,12).rotation.x=Math.PI/2;ae(G,.2,.08,.03,$(3815996),0,.3,.115),D.add(G);for(let k=0;k<4;k++)ae(D,.16,.025,.1,$([1776414,9054256,2899800][k%3]),-.6+k*.18,.8,.25,[0,(k-1)*.2,0]);for(let k=0;k<3;k++){const q=new X(new it(.28,.36),$(12761246,{side:Wt}));q.rotation.x=-Math.PI/2,q.rotation.z=M()*.6,q.position.set(-.4+k*.25,.8,.1),D.add(q)}i.add(D);const Y=$(2897216,{roughness:1});for(let k=0;k<5;k++){const q=new X(new it(.3,.5,3,3),Y);q.rotation.x=-Math.PI/2+.2,q.rotation.z=M()*3,q.position.set(-1.4+M()*3,.03,1.5+M()*2),i.add(q)}for(let k=0;k<3;k++){const q=new X(new xt(.12,.09,.26),$(1315860));q.position.set(-2.4+M()*4,.045,2.8+M()*1),q.rotation.y=M()*3,i.add(q)}const z=Pt(i,e,"DANA",{height:1.67,jacket:8354416,shirt:9341310,pants:7038556,hair:2759186,hairStyle:"long",skin:13018508},[-1.7,0,-3.15],Math.PI,"slump"),ce=Pt(i,e,"WREN",{height:1.62,jacket:2829117,shirt:1513247,pants:2302763,hair:1183244,hairStyle:"long",skin:12163972},[2.45,0,2.2],Math.PI+.15,"stand"),pe=Pt(i,e,"SAM",{height:1.7,jacket:4864552,shirt:1841172,pants:2500651,hair:1774350,hairStyle:"curly",flashlight:!0},[3,0,-.7],Math.PI,"stand"),Me=Pt(i,e,"RYAN",{height:1.78,jacket:2964807,shirt:1711134,pants:2501166,hair:2365457,flashlight:!0},[.45,0,.85],Math.PI,"stand"),Ie=new Ct(new At({map:Xt(),color:7311294,transparent:!0,opacity:.09,blending:at,depthWrite:!1}));Ie.scale.setScalar(1.3),Ie.position.set(0,1.2,0),ce.root.add(Ie);const Ue=new Ct(new At({map:Xt(),color:16726824,transparent:!0,opacity:0,blending:at,depthWrite:!1}));Ue.scale.setScalar(2.6),Ue.position.set(-1.7,1.2,-3.15),i.add(Ue);const Je=new St(16726560,0,6,2);Je.position.set(-1.7,1.8,-3),i.add(Je),ts(i,e,{count:130,area:[8,3,7],color:14207400,size:.045}),Vr(e,{min:11,max:19,first:6});let Ve=!1,Q=0,te=0,Z=.35;return e.actions={levitate(k){Ve=!!k,k?z.setPose("fear"):z.setPose("slump")},setRecordSpin(k,q=7){Z=k?q:.35},lookup(){}},e.updaters.push((k,q)=>{te+=(Z-te)*Math.min(1,q*2),v.platter.rotation.y+=q*te,Q+=((Ve?.55:0)-Q)*Math.min(1,q*1.6),z.root.position.y=Q+Math.sin(k*.8)*.012*(Ve?1:.2),Ue.material.opacity+=((Ve?.3:0)-Ue.material.opacity)*Math.min(1,q*2),Ue.scale.setScalar(2.2+Math.sin(k*2.3)*.25+Q*1.5),Je.intensity+=((Ve?16:0)-Je.intensity)*Math.min(1,q*2),ce.lookAtYaw(.15+Math.sin(k*.24)*.1),Me.lookAtYaw(-.08+Math.sin(k*.3+1)*.08),pe.lookAtYaw(.12+Math.sin(k*.27+2)*.14)}),e.shots={wide:{pos:[0,1.62,3.8],look:[-.8,1.45,-3.2],fov:57,handheld:.35},dana_window:{pos:[-.4,1.66,.9],look:[-1.7,1.55,-3.2],fov:39,handheld:.32},dana_close:{pos:[-.55,1.62,-2.25],look:[-1.7,1.52,-3.15],fov:40,handheld:.28},dana_floor:{pos:[-.35,1.12,-1.1],look:[-1.7,.55,-3.1],fov:44,handheld:.45},dana_levitate:{pos:[-.2,.85,.7],look:[-1.7,2.35,-3.1],fov:49,handheld:.55},record:{pos:[.2,1.3,-1.35],look:[-3.8,1.08,-2.9],fov:36,handheld:.35},wren:{pos:[.7,1.66,.1],look:[2.45,1.55,2.2],fov:36,handheld:.3},sam:{pos:[2,1.6,-2.5],look:[3,1.52,-.7],fov:34,handheld:.3},ryan_close:{pos:[.45,1.62,-.95],look:[.45,1.52,.85],fov:33,handheld:.25},door:{pos:[.8,1.68,0],look:[2.5,1.6,2.8],fov:44,handheld:.4},close:{pos:[.2,1.6,.4],look:[.2,1.5,2.2],fov:40,handheld:.3}},e.fog=new ni(658704,.02),e.background=new He(329480),e.hemi=.2,e.hemiColor=4413804,e.hemiGround=723465,e.exposure=1.03,e.bloom=.66,e.bloomThreshold=.62,e.tint=15919839,e.saturation=.96,e.contrast=1.04,e.grain=.058,e.aberration=1.15,e.update=(k,q,Se)=>{for(const be of e.updaters)be(k,q,Se)},e}function h_(){return new Dt({transparent:!0,depthWrite:!1,side:Wt,blending:at,uniforms:{uTime:{value:0},uColorA:{value:new He(16722450)},uColorB:{value:new He(6160400)}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uColorA, uColorB;
      varying vec2 vUv;
      float hash(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
      float noise(vec2 p){
        vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
      }
      void main(){
        vec2 uv = vUv;
        float y = uv.y;
        float wobble = sin(y * 9.0 + uTime * 1.4) * 0.035 + sin(y * 21.0 - uTime * 0.8) * 0.014;
        float halfW = 0.18 + 0.12 * smoothstep(0.0, 0.5, y) * (1.0 - smoothstep(0.72, 1.0, y)) + wobble;
        float edge = abs(uv.x - 0.5);
        float mask = smoothstep(halfW, halfW - 0.035, edge);
        float n = noise(vec2(uv.x * 9.0, uv.y * 14.0 + uTime * 0.7)) * 0.6 + noise(vec2(uv.x * 24.0, uv.y * 30.0 - uTime)) * 0.4;
        vec3 col = mix(uColorB, uColorA, smoothstep(0.25, 0.9, n));
        float rim = smoothstep(halfW - 0.11, halfW - 0.02, edge);
        col += uColorA * rim * 1.7;
        float vert = smoothstep(0.0, 0.08, y) * (1.0 - smoothstep(0.9, 1.0, y));
        float a = mask * (0.5 + n * 0.5) * vert;
        gl_FragColor = vec4(col * (0.8 + n * 0.9) * 2.2, a);
      }`})}function u_(i){const e=new Ce;e.position.set(5.4,0,8.2),e.rotation.y=-.28;const t=$(2762015,{roughness:.95});ae(e,.1,2.2,.1,t,-.5,1.1,0),ae(e,.1,2.2,.1,t,.5,1.1,0);const n=Ft(512,320,(r,o,a)=>{const l=bt(13);r.fillStyle="#2a2d2b",r.fillRect(0,0,o,a),r.fillStyle="#0f1210",r.fillRect(5,5,o-10,a-10),r.strokeStyle="#b8b09a",r.lineWidth=4,r.strokeRect(10,10,o-20,a-20),r.fillStyle="#c6bda6",r.textAlign="center",r.font='600 42px "Barlow Condensed", sans-serif',r.fillText("HAWKINS QUARRY",o/2,72),r.font='400 27px "Barlow Condensed", sans-serif',r.fillText("NO TRESPASSING",o/2,112),r.strokeStyle="#7f1a14",r.lineWidth=4,r.beginPath(),r.moveTo(50,145),r.lineTo(o-50,145),r.stroke(),r.fillStyle="#a82a20",r.font='700 54px "Barlow Condensed", sans-serif',r.fillText("DANGER",o/2,210),r.font='400 22px "Barlow Condensed", sans-serif',r.fillStyle="#b9b09a",r.fillText("UNSTABLE GROUND — KEEP OUT",o/2,250);for(let c=0;c<70;c++)r.fillStyle=`rgba(0,0,0,${l()*.35})`,r.fillRect(l()*o,l()*a,2+l()*9,1+l()*3)},{repeat:[1,1]}),s=new X(new it(2.3,1.45),new Xe({map:n,roughness:.8,metalness:.2,side:Wt}));s.position.set(0,1.55,.06),e.add(s),ae(e,2.4,1.55,.07,$(1579545,{metalness:.5,roughness:.6}),0,1.55,0),i.add(e)}function d_(i){const e=new Ce,t=$(3681054,{roughness:.92});for(let s=0;s<12;s++){const r=4.4-s*.42;ae(e,1.05,.09,.34,t,-4,.02+Math.sin(s*1.7)*.02,r,[0,(Math.random()-.5)*.045,(Math.random()-.5)*.04])}const n=$(7100989,{roughness:1});for(const s of[-4.5,-3.5]){const r=[];for(let o=0;o<=10;o++){const a=4.4-o*.46;r.push(new C(s,1+Math.sin(o*.7)*.06,a))}for(let o=0;o<r.length-1;o++)e.add(Hn(r[o],r[o+1],.017,.017,n,4));for(let o=0;o<=10;o+=2)e.add(Hn(r[o],new C(s,.06,r[o].z),.014,.014,n,4))}i.add(e)}function f_(){const i=new Ce,e={group:i,shots:{},actors:[],hotspotData:[],updaters:[],defaultShot:"wide"},t=new Xe({map:Er(),color:5660513,roughness:.95,metalness:.02}),n=$(724238,{roughness:1}),s=new X(new it(70,22),new Xe({map:Er(),color:4870740,roughness:.95}));s.rotation.x=-Math.PI/2,s.position.set(0,0,15),s.receiveShadow=!0,i.add(s);const r=new X(new it(70,12),new Xe({map:Er(),color:4015431,roughness:.95}));r.rotation.x=-Math.PI/2,r.position.set(0,0,-5),r.receiveShadow=!0,i.add(r),ae(i,52,18,4,t,0,6,-12.5);const o=bt(717);for(let R=0;R<40;R++){const M=.5+o()*2.6,x=new X(new Jn(M,0),t);x.position.set((o()-.5)*40,.3+o()*12,-10.3+o()*.9),x.rotation.set(o()*3,o()*3,o()*3),x.scale.set(1,.7+o()*.7,.7),x.castShadow=!0,x.receiveShadow=!0,i.add(x)}for(const R of[-1,1]){const M=ae(i,6,14,20,t,R*18,5.2,1);M.rotation.y=R*.18;for(let x=0;x<8;x++){const L=new X(new Jn(1+o()*2,0),t);L.position.set(R*(15+o()*3),o()*8,8-x*2.2),i.add(L)}}const a=new X(new it(80,30),new Xe({color:264973,roughness:.08,metalness:.9}));a.rotation.x=-Math.PI/2,a.position.set(0,-4.2,2.5),i.add(a);const l=new X(new it(5.5,16),new zt({map:Xt(),color:16722452,transparent:!0,opacity:.1,blending:at,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.set(0,-4.1,.8),i.add(l);for(const R of[4.6,.1])ae(i,70,5,.7,n,0,-2.3,R);for(let R=0;R<18;R++){const M=.3+o()*1.4,x=new X(new Jn(M,0),t);x.position.set((o()-.5)*26,M*.2,(R%2?4.5:.2)+(o()-.5)*.6),x.rotation.set(o()*3,o()*3,o()*3),i.add(x)}d_(i),u_(i);const c=new X(new it(4.6,7.4),h_());c.position.set(0,3.5,-10.15),i.add(c);const h=new St(16722450,65,28,2);h.position.set(0,3.2,-8.6),i.add(h),_n(i,16722450,9,.22,[0,3.3,-9.7]),_n(i,16734771,4.5,.2,[0,3.3,-9.8]);const u=Za(16722450,2.2,12,.035);u.position.set(0,2.4,-9.7),i.add(u);const f=[];for(let R=0;R<11;R++){let M=(o()-.5)*1.4,x=2.8+o()*4;const L=[];for(let F=0;F<5;F++)L.push(new C(M,x,-10)),M+=(o()-.5)*1.6,x+=(o()-.4)*.8;f.push(...L.slice(0,-1),...L.slice(1))}const m=new vt().setFromPoints(f),g=new Ha(m,new Fs({color:16730658,transparent:!0,opacity:.55,blending:at}));i.add(g);for(const[R,M,x]of[[-2.4,1.5,1.4],[2.5,1.7,1.6],[-2.7,5.2,1.2],[2.6,5.4,1.3]]){const L=new X(new Jn(x,0),t);L.position.set(R,M,-9.6),L.rotation.set(o()*3,o()*3,o()*3),L.castShadow=!0,i.add(L)}[[-12,7,9],[11,9,10],[-9,-5,8],[9,-4,9],[16,15,11],[-16,14,10]].forEach(([R,M,x],L)=>{const F=Is(300+L,x,461065);F.position.set(R,0,M),F.scale.setScalar(.9+L%3*.15),i.add(F)});for(let R=0;R<14;R++){const M=[new C((o()-.5)*30,0,4+o()*12)];for(let x=1;x<4;x++)M.push(new C(M[x-1].x+(o()-.5)*.8,x*(.2+o()*.35),M[x-1].z+(o()-.5)*.6));for(let x=0;x<M.length-1;x++)i.add(Hn(M[x],M[x+1],.025,.012,n,4))}const p=$(3815988,{roughness:.7,metalness:.4});for(let R=0;R<6;R++)Lt(i,.035,.045,1,p,2.5+R*1.8,.5,5.5,6);i.add(Hn(new C(2.4,.95,5.5),new C(11,.8,5.5),.03,.03,p,6));const d=new Ka(9349576,1.5);d.position.set(-18,22,12),d.castShadow=!0,d.shadow.mapSize.set(1024,1024),d.shadow.camera.left=-30,d.shadow.camera.right=30,d.shadow.camera.top=24,d.shadow.camera.bottom=-12,d.shadow.camera.far=70,i.add(d);const w=new St(3825530,12,30,2);w.position.set(-9,5,8),i.add(w);const y=Pt(i,e,"RYAN",{height:1.78,jacket:2964807,shirt:1711134,pants:2501166,hair:2365457,flashlight:!0},[.4,0,-4],Math.PI+.06,"stand"),v=Pt(i,e,"WREN",{height:1.62,jacket:2829117,shirt:1513247,pants:2302763,hair:1183244,hairStyle:"long",skin:12163972},[-1.2,0,-4.4],.35,"stand"),T=Pt(i,e,"SAM",{height:1.7,jacket:4864552,shirt:1841172,pants:2500651,hair:1774350,hairStyle:"curly",flashlight:!0},[3.4,0,-2.1],.55,"stand"),E=new Ct(new At({map:Xt(),color:7311294,transparent:!0,opacity:.1,blending:at,depthWrite:!1}));E.scale.setScalar(1.3),E.position.set(0,1.2,0),v.root.add(E),e.actions={showSam(R){T.root.visible=!!R,T.shadowDisc&&(T.shadowDisc.visible=!!R),T.flashlightRig&&(T.flashlightRig.visible=!0)}},wh(i,e,{count:900,extent:70,height:30,opacity:.28}),ts(i,e,{count:90,area:[30,10,30],color:10335424,size:.04}),Vr(e,{min:7,max:13,first:3.2});const P=Qa(66054,529434,140,1188909,{cloud:.75,cloudColor:462873});return i.add(P),e.updaters.push(R=>{P.material.uniforms.uTime.value=R}),e.updaters.push((R,M)=>{c.material.uniforms.uTime.value=R,h.intensity=60+Math.sin(R*1.8)*12+Math.sin(R*7.3)*4,c.material.opacity=.8,l.material.opacity=.08+Math.sin(R*1.4)*.02,g.material.opacity=.4+Math.sin(R*1.2)*.16,v.lookAtYaw(.12+Math.sin(R*.25)*.16),T.lookAtYaw(.22+Math.sin(R*.33+1)*.18),y.lookAtYaw(.05+Math.sin(R*.21)*.08)}),e.shots={wide:{pos:[0,2.5,14],look:[0,4.6,-9],fov:46,handheld:.4},gate:{pos:[0,1.92,-1.8],look:[0,3.2,-9.3],fov:42,handheld:.4},ledge:{pos:[-5.7,1.9,7.2],look:[-1.2,1.1,-2.5],fov:44,handheld:.5},cliff:{pos:[-4.2,2.4,5.2],look:[-2.4,-1.3,1.2],fov:55,handheld:.6},wren:{pos:[1.2,1.68,-2.5],look:[-1.2,1.55,-4.4],fov:35,handheld:.3},sam:{pos:[2,1.62,-.5],look:[3.4,1.54,-2.1],fov:34,handheld:.32},walkie:{pos:[.45,1.66,-5.4],look:[.4,1.55,-4],fov:35,handheld:.3},gate_in:{pos:[0,1.9,-5.4],look:[0,3.1,-9.3],fov:52,handheld:.6},close:{pos:[.5,1.55,-2.8],look:[.4,1.5,-4],fov:38,handheld:.3},title:{pos:[0,2.8,16],look:[0,4.4,-9],fov:44,handheld:.3}},e.fog=new ni(463384,.0145),e.background=new He(132618),e.hemi=.2,e.hemiColor=4217456,e.hemiGround=329222,e.exposure=1.06,e.bloom=.82,e.bloomThreshold=.55,e.tint=14674418,e.saturation=.92,e.contrast=1.05,e.grain=.062,e.aberration=1.3,e.update=(R,M,x)=>{for(const L of e.updaters)L(R,M,x)},e}function p_(){const i=new it(80,80,90,90),e=i.attributes.position;for(let t=0;t<e.count;t++){const n=e.getX(t),s=e.getY(t),r=Math.sin(n*.24)*Math.cos(s*.19)*.55+Math.sin(n*.7+s*.5)*.18+Math.cos(n*.13-s*.31)*.35;e.setZ(t,r)}return i.computeVertexNormals(),i}function m_(i){const e=new Ce;e.position.set(-4.6,0,-3.4);const t=$(2366232,{roughness:.55,metalness:.35});for(const r of[-1.4,1.4])for(const o of[-.7,.7]){const a=new C(r,0,o),l=new C(r,3.1,0);i.add(Hn(a.clone().add(e.position),l.clone().add(e.position),.055,.045,t,6))}ae(i,2.9,.09,.09,t,-4.6,3.1,-3.4);const n=new Ce;n.position.set(-4.6,.85,-3.4),ae(n,.55,.06,.25,$(3812126),0,0,0);for(const r of[-.35,.35]){const o=[];for(let a=0;a<=6;a++)o.push(new C(r,3.05-a*.36,-3.4+Math.sin(a*.12)*.06));for(let a=0;a<o.length-1;a++)i.add(Hn(o[a],o[a+1],.014,.014,t,4))}i.add(n);const s=new Ct(new At({map:Xg(),color:1705477,transparent:!0,opacity:.32,depthWrite:!1,blending:_i}));return s.scale.set(1,2,1),s.position.set(-4.6,1.85,-3.4),i.add(s),i.add(e),{seat:n,ghost:s}}function g_(i){const e=[new C(.1,.3,-10.4),new C(-.3,.35,-8.2),new C(.6,.25,-6),new C(-.4,.3,-3.8),new C(.3,.3,-2),new C(1.1,.45,.2),new C(1,.52,.9)],t=new zn(e),n=new Xe({color:1705990,roughness:.7,emissive:9047816,emissiveIntensity:.9}),s=new X(new gn(t,90,.085,7,!1),n);s.castShadow=!0,i.add(s);const r=new zt({color:16726558,transparent:!0,opacity:.5,blending:at,depthWrite:!1}),o=new X(new gn(t,90,.028,5,!1),r);i.add(o);const a=$(1508869,{roughness:.9});for(let u=0;u<7;u++){const f=.1+u*.12,m=t.getPoint(f),g=[m];for(let d=1;d<4;d++)g.push(m.clone().add(new C((Math.random()-.5)*d*.8,Math.random()*.25,(Math.random()-.5)*d*.8)));const _=new zn(g),p=new X(new gn(_,12,.025,4,!1),a);i.add(p)}const l=new X(new gt(.3,14,12),new Xe({color:3803142,emissive:16722450,emissiveIntensity:1.4,roughness:.4}));l.position.set(1,.55,.9),l.scale.set(1,1.25,.9),i.add(l);const c=_n(i,16726560,2.2,.25,[1,.6,.9]),h=new St(16722450,6,6,2);return h.position.set(1,.8,.9),i.add(h),{tube:s,core:o,heart:l,heartGlow:c,heartLight:h,mat:n,coreMat:r}}function __(){const i=new Ce,e={group:i,shots:{},actors:[],hotspotData:[],updaters:[],defaultShot:"wide"},t=new Xe({map:Er(),color:5917256,roughness:.96,metalness:.02}),n=new X(p_(),t);n.rotation.x=-Math.PI/2,n.position.y=-.25,n.receiveShadow=!0,i.add(n);const s=bt(919),r=[];for(let D=0;D<26;D++){let G=(s()-.5)*46,Y=-8+s()*24;for(let z=0;z<7;z++){const ce=new C(G,.03,Y);G+=(s()-.5)*1.7,Y+=(s()-.5)*1.7;const pe=new C(G,.03,Y);r.push(ce,pe)}}const o=new vt().setFromPoints(r),a=new Ha(o,new Fs({color:16726558,transparent:!0,opacity:.3,blending:at}));i.add(a);const l=Sh({hollow:!0});l.group.position.set(0,0,-14),l.group.scale.setScalar(1.2),i.add(l.group);const c=new Ce;c.position.set(0,4.2,-10.7);const h=new X(new Bt(1.55,48),new Xe({map:Hr(!0),color:10111552,emissive:6949638,emissiveIntensity:.9,roughness:.7}));c.add(h);const u=new X(new Qt(1.6,.06,8,50),new Xe({color:2360837,emissive:16722450,emissiveIntensity:1.1,roughness:.6}));c.add(u);const f=new X(new xt(.1,1.3,.06),$(1705476));f.position.set(0,.65,.04),f.rotation.z=-1.63,c.add(f);const m=new X(new xt(.07,1.75,.06),$(1705476));m.position.set(0,.88,.05),m.rotation.z=-.73,c.add(m),i.add(c),jn(i,e,"clock_door",new C(0,4.2,-10.35),1.5);const g=_n(i,16722450,8,.22,[0,4.2,-10.6]),_=new St(16722450,46,26,2);_.position.set(0,4.2,-9.4),i.add(_);const p=g_(i);jn(i,e,"red_tether",new C(1,.7,.6),1.05);const d=m_(i);jn(i,e,"swing_set",new C(-4.6,1.55,-3.4),1.05);const w=Is(441,10,460037);w.position.set(5.6,0,-3.2),i.add(w);for(let D=0;D<9;D++){const G=new X(new gt(.16+s()*.12,8,6),new Xe({color:1705733,emissive:10489606,emissiveIntensity:.5,roughness:.6}));G.position.set(5.6+(s()-.5)*3.5,3+s()*5,-3.2+(s()-.5)*3.5),i.add(G)}jn(i,e,"dead_tree",new C(5.6,2,-3.2),1);const y=$(1312261,{roughness:.95});for(let D=0;D<24;D++){const G=[];let Y=(s()-.5)*26,z=-9+s()*18;for(let Me=0;Me<7;Me++)G.push(new C(Y,.05+Math.sin(Me*1.3+D)*.12,z)),Y+=(s()-.5)*2.2,z+=(s()-.5)*2.2;const ce=new zn(G),pe=new X(new gn(ce,22,.03+s()*.05,5,!1),y);i.add(pe),D%3===0&&_n(i,16722450,.5,.2,G[G.length-1].toArray())}for(let D=0;D<18;D++){const G=[];let Y=(s()-.5)*20,z=10+s()*2,ce=-11.5+s()*1.2;for(let Ie=0;Ie<6;Ie++)G.push(new C(Y+(s()-.5)*.5,z,ce)),z-=.8+s()*1,Y+=(s()-.5)*.5;const pe=new zn(G),Me=new X(new gn(pe,18,.02+s()*.03,4,!1),y);i.add(Me)}const v=[],T=[$(1708561),$(2365463),$(1051145)];for(let D=0;D<26;D++){const G=D%4;let Y;G===0?Y=new X(new Jn(.15+s()*.4,0),T[0]):G===1?Y=new X(new xt(.4+s()*.6,.05,.3+s()*.4),T[1]):G===2?Y=new X(new Bt(.15+s()*.25,3),T[2]):Y=new X(new xt(.2,.03,.3),$(3813928)),Y.position.set((s()-.5)*22,1.5+s()*9,-14+s()*15),Y.rotation.set(s()*6,s()*6,s()*6),i.add(Y),v.push({mesh:Y,baseY:Y.position.y,phase:s()*6,speed:.1+s()*.2})}for(let D=0;D<9;D++){const G=Is(500+D,7+s()*5,328708);G.position.set(-22+s()*44,0,-16+s()*8),i.add(G)}const E=new Ka(7245742,1.05);E.position.set(-14,18,16),E.castShadow=!0,E.shadow.mapSize.set(1024,1024),E.shadow.camera.left=-26,E.shadow.camera.right=26,E.shadow.camera.top=24,E.shadow.camera.bottom=-14,E.shadow.camera.far=60,i.add(E);const P=new St(16726552,30,40,2);P.position.set(-3,8,-6),i.add(P);const R=Pt(i,e,"RYAN",{height:1.78,jacket:2964807,shirt:1711134,pants:2501166,hair:2365457,flashlight:!0},[0,0,2.2],Math.PI,"stand"),M=Pt(i,e,"WREN",{height:1.62,jacket:2829117,shirt:1513247,pants:2302763,hair:1183244,hairStyle:"long",skin:12163972},[2.4,0,-3.6],.4,"stand"),x=Pt(i,e,"SAM",{height:1.7,jacket:4864552,shirt:1841172,pants:2500651,hair:1774350,hairStyle:"curly",flashlight:!0},[3.8,0,-2.2],.5,"stand"),L=new Ct(new At({map:Xt(),color:7311294,transparent:!0,opacity:.1,blending:at,depthWrite:!1}));L.scale.setScalar(1.4),L.position.set(0,1.2,0),M.root.add(L),e.actions={showSam(D){x.root.visible=!!D,x.shadowDisc&&(x.shadowDisc.visible=!!D)},burnTether(){p.mat.emissiveIntensity=.15,p.coreMat.opacity=.05,p.heart.material.emissiveIntensity=.1,p.heartGlow.material.opacity=.02,p.heartLight.intensity=0}};const F=Bg(600,[42,18,42],23);i.add(F),ts(i,e,{count:120,area:[30,12,30],color:16738890,size:.05}),e.updaters.push(D=>{F.material.uniforms.uTime.value=D});const W=Qa(1180162,3803142,150,7214604,{cloud:.9,cloudColor:2229252});i.add(W),e.updaters.push(D=>{W.material.uniforms.uTime.value=D});let K=2.2;return e.updaters.push((D,G,Y)=>{D>K&&(Y?.flash?.(1.7,16722450,.36),Y?.onLightning?.(),K=D+5+Math.random()*5),p.mat.emissiveIntensity=.65+Math.sin(D*1.7)*.35,p.coreMat.opacity=.35+Math.sin(D*1.7+1)*.18,p.heart.scale.setScalar(1+Math.sin(D*1.7)*.08),p.heartGlow.material.opacity=.18+Math.sin(D*1.7)*.1,p.heartLight.intensity=5+Math.sin(D*1.7)*2.5,g.material.opacity=.16+Math.sin(D*1.1)*.06,_.intensity=42+Math.sin(D*2.1)*9,d.seat.rotation.x=Math.sin(D*.8)*.11,d.ghost.position.x=-4.6+Math.sin(D*.8)*.18,d.ghost.material.opacity=.2+Math.sin(D*.6)*.08,v.forEach(z=>{z.mesh.position.y=z.baseY+Math.sin(D*z.speed+z.phase)*.5,z.mesh.rotation.y+=G*.04,z.mesh.rotation.x+=G*.02}),a.material.opacity=.2+Math.sin(D*.9)*.12,M.lookAtYaw(.1+Math.sin(D*.24)*.15),x.lookAtYaw(.2+Math.sin(D*.3+1)*.15),R.lookAtYaw(Math.sin(D*.2)*.1)}),e.shots={wide:{pos:[0,1.9,13],look:[0,3.6,-10],fov:55,handheld:.45},sky:{pos:[0,1.5,8],look:[0,14,-8],fov:60,handheld:.3},house:{pos:[0,1.8,4],look:[0,3.2,-10.5],fov:44,handheld:.4},explore:{pos:[0,1.85,12.2],look:[0,2.15,-10.2],fov:55,handheld:.3},vine:{pos:[2.9,1.15,3],look:[.6,.35,.4],fov:43,handheld:.55},tether:{pos:[2.5,1.65,3.3],look:[1,.75,.5],fov:36,handheld:.35},tether_fire:{pos:[1.8,1.2,2.4],look:[.9,.45,.45],fov:41,handheld:.5},house_open:{pos:[0,1.8,5.5],look:[0,3.3,-10.2],fov:53,handheld:.5},house_clock:{pos:[0,1.7,2],look:[0,5.2,-10.5],fov:49,handheld:.4},door_dark:{pos:[0,1.72,-6.2],look:[0,2.6,-10.4],fov:42,handheld:.45},wren:{pos:[.2,1.62,-.8],look:[2.4,1.55,-3.6],fov:35,handheld:.3},wren_bleed:{pos:[1.2,1.65,-1.6],look:[2.4,1.6,-3.6],fov:33,handheld:.25},wren_hold:{pos:[1.7,1.5,-1.3],look:[2.4,1.4,-3.6],fov:35,handheld:.3},sam:{pos:[1.6,1.6,-.6],look:[3.8,1.55,-2.2],fov:34,handheld:.3},sam_help:{pos:[.8,1.4,.8],look:[2.8,.9,-1.5],fov:44,handheld:.5},walkie:{pos:[.2,1.66,.7],look:[0,1.55,2.2],fov:35,handheld:.3},close:{pos:[.8,1.55,.2],look:[0,1.5,2.2],fov:38,handheld:.3}},e.fog=new ni(2229508,.018),e.background=new He(852482),e.hemi=.26,e.hemiColor=6957606,e.hemiGround=1180417,e.exposure=1,e.bloom=.85,e.bloomThreshold=.5,e.tint=16767439,e.saturation=.9,e.contrast=1.07,e.grain=.075,e.aberration=1.6,e.update=(D,G,Y)=>{for(const z of e.updaters)z(D,G,Y)},e}function v_(i,e,t,n,s){const r=bt(s),o=[];for(let a=0;a<n;a++){const l=.25+r()*.55,c=e+(r()-.5)*1.4,h=t+(r()-.5)*1.4,u=.035+r()*.03;Lt(i,u,u*1.1,l,$(12165756,{roughness:.9}),c,l/2,h,7);const f=new Ct(new At({map:Xt(),color:16754760,transparent:!0,opacity:.9,blending:at,depthWrite:!1}));f.scale.setScalar(.12+r()*.08),f.position.set(c,l+.04,h),i.add(f),o.push({sprite:f,phase:r()*6,base:.12+r()*.08})}return o}function x_(){const i=new Ce,e={group:i,shots:{},actors:[],hotspotData:[],updaters:[],defaultShot:"wide"},t=new Xe({color:1380369,roughness:.95,side:qt}),n=new X(new kt(14,14,15,40,1,!0),t);n.position.y=7.5,i.add(n);const s=new X(new Bt(14,40),$(328451,{roughness:1}));s.rotation.x=Math.PI/2,s.position.y=14.9,i.add(s);const r=new X(new Bt(14,60),new Xe({color:197894,roughness:.06,metalness:.9}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,i.add(r);const o=new X(new Qt(13.2,.35,8,60),$(1709076,{roughness:.9}));o.rotation.x=Math.PI/2,o.position.y=.08,i.add(o);const a=new Ce;for(let Z=0;Z<3;Z++){const k=new X(new Qt(4.5+Z*2.4,.018,4,80),new zt({color:9050640,transparent:!0,opacity:.18-Z*.04,blending:at,depthWrite:!1}));k.rotation.x=Math.PI/2,k.position.y=.015,a.add(k)}i.add(a);const l=new Ce;l.position.set(0,5.6,-9.1);const c=new X(new Qt(5,.38,10,64),$(2365976,{roughness:.8,metalness:.1}));c.position.z=.02,l.add(c);const h=new Xe({map:Hr(!1),color:12890765,emissive:7222802,emissiveIntensity:.55,roughness:.72}),u=new X(new Bt(4.85,64),h);u.position.z=.06,l.add(u);const f=Th(l,{x:0,y:0,z:.16,hourAngle:93.5,minuteAngle:42,scale:4.4}),m=new X(new Qt(4.5,.05,6,64),$(6965796,{metalness:.55,roughness:.35}));m.position.z=.12,l.add(m),i.add(l);const g=_n(i,16726552,15,.14,[0,5.6,-8.2]),_=new St(16726552,90,34,2);_.position.set(0,5.4,-6.4),i.add(_);const p=new Ce,d=bt(77);for(let Z=0;Z<14;Z++){const k=[];let q=(d()-.5)*3,Se=5.6+(d()-.5)*3;for(let I=0;I<5;I++)k.push(new C(q,Se,-8.72)),q+=(d()-.5)*2.2,Se+=(d()-.5)*2;const be=new za(new vt().setFromPoints(k),new Fs({color:16734762,transparent:!0,opacity:.8,blending:at}));p.add(be)}p.visible=!1,i.add(p);const w=new Ce;w.position.set(0,13.8,-7.6),i.add(w);const y=$(3023640,{metalness:.6,roughness:.4});Lt(w,.06,.08,9.2,y,0,-4.6,0,8);const v=new Ce;v.position.set(0,-9.3,0);const T=new X(new kt(.85,.85,.12,28),$(9070632,{metalness:.85,roughness:.25}));T.rotation.x=Math.PI/2,v.add(T);const E=new X(new Qt(.8,.06,8,28),$(12622410,{metalness:.9,roughness:.2}));E.position.z=.07,v.add(E),w.add(v);const P=[];[[-7.5,-1.5,6],[7.5,-2.5,7],[-9.5,3,5],[9,2,5],[-4.5,6.5,4],[5.5,6,4],[-11,-4,4],[10.5,-4.5,4]].forEach(([Z,k,q],Se)=>{P.push(...v_(i,Z,k,q,800+Se))});const M=new St(16751176,20,14,2);M.position.set(-7.5,1.2,-1.5),i.add(M);const x=new St(16751176,18,14,2);x.position.set(7.5,1.2,-2.5),i.add(x);const L=new St(16747068,14,12,2);L.position.set(0,1.2,5.5),i.add(L),e.updaters.push(Z=>{P.forEach((k,q)=>{const Se=k.base*(.85+Math.sin(Z*9+k.phase)*.18+Math.sin(Z*21+q)*.07);k.sprite.scale.setScalar(Se),k.sprite.position.y+=Math.sin(Z*4+q)*4e-4}),M.intensity=18+Math.sin(Z*7.1)*2+Math.sin(Z*17.3)*1,x.intensity=16+Math.sin(Z*8.7+1)*2,L.intensity=12+Math.sin(Z*6.3+2)*1.5});const F=$(1312519,{roughness:.9}),W=[];for(let Z=0;Z<20;Z++){const k=[],q=Z/20*Math.PI*2,Se=6+d()*5;let be=Math.cos(q)*Se,I=-1+Math.sin(q)*Se*.5,U=14.5;for(let O=0;O<7;O++)k.push(new C(be,U,I)),U-=1+d()*.8,be+=(d()-.5)*.8,I+=(d()-.5)*.8;const se=new zn(k),re=new X(new gn(se,26,.035+d()*.05,5,!1),F);i.add(re),W.push({tube:re,phase:d()*6})}const K=[];for(let Z=0;Z<22;Z++){let k;Z%4===0?k=new X(new xt(.7,.08,.5),$(2759957)):Z%4===1?k=new X(new Jn(.2+d()*.35,0),$(1709076)):Z%4===2?k=new X(new Qt(.3,.04,5,14),$(8018470,{metalness:.6})):k=new X(new Bt(.18+d()*.2,3),$(3813928)),k.position.set((d()-.5)*20,2+d()*9,-8+d()*12),k.rotation.set(d()*6,d()*6,d()*6),i.add(k),K.push({mesh:k,baseY:k.position.y,phase:d()*6,speed:.08+d()*.14})}const D=jg();D.root.position.set(-1.3,.2,-3.2),D.root.scale.setScalar(1.18),i.add(D.root);const G=Pt(i,e,"DANA",{height:1.67,jacket:8354416,shirt:9341310,pants:7038556,hair:2759186,hairStyle:"long",skin:13018508},[1.55,2.95,-6.1],.1,"fear",!1),Y=[];for(let Z=0;Z<6;Z++){const k=new C(1.55+(d()-.5)*.7,3.6+d()*.8,-6.1+(d()-.5)*.4),q=[k];for(let I=1;I<5;I++)q.push(k.clone().add(new C((d()-.5)*2.6,I*.5,(d()-.5)*1.4)));const Se=new zn(q),be=new X(new gn(Se,14,.03,4,!1),$(1705991));i.add(be),Y.push(be)}const z=_n(i,16722450,4.5,.16,[1.55,3.5,-6.1]),ce=Pt(i,e,"RYAN",{height:1.78,jacket:2964807,shirt:1711134,pants:2501166,hair:2365457,flashlight:!0},[.2,0,2.9],Math.PI,"fear"),pe=Pt(i,e,"WREN",{height:1.62,jacket:2829117,shirt:1513247,pants:2302763,hair:1183244,hairStyle:"long",skin:12163972},[1.7,0,-1.3],0,"stand"),Me=Pt(i,e,"SAM",{height:1.7,jacket:4864552,shirt:1841172,pants:2500651,hair:1774350,hairStyle:"curly",flashlight:!0},[3.5,0,.9],Math.PI+.3,"fear"),Ie=new Ct(new At({map:Xt(),color:8365007,transparent:!0,opacity:.12,blending:at,depthWrite:!1}));Ie.scale.setScalar(1.5),Ie.position.set(0,1.2,0),pe.root.add(Ie);const Ue=new Ls(12110040,28,22,.92,1,1.4);Ue.position.set(0,13.5,3.5),Ue.target.position.set(0,0,-2.5),Ue.castShadow=!0,Ue.shadow.mapSize.set(1024,1024),Ue.shadow.bias=-.002,i.add(Ue),i.add(Ue.target);const Je=new St(6063021,30,26,2);Je.position.set(6,8,7),i.add(Je);const Ve=new St(16722450,55,30,2);Ve.position.set(-6,5,-5),i.add(Ve),ts(i,e,{count:200,area:[22,14,22],color:16752768,size:.05});let Q=!1,te=2.95;return e.actions={showSam(Z){Me.root.visible=!!Z,Me.shadowDisc&&(Me.shadowDisc.visible=!!Z)},shatter(){Q||(Q=!0,p.visible=!0,u.material.color.set(459266),u.material.emissive.set(0),u.material.map=null,u.material.needsUpdate=!0,g.material.color.set(16730654),g.material.opacity=.4,_.intensity=160)},setDanaFloat(Z){}},e.updaters.push((Z,k)=>{w.rotation.z=Math.sin(Z*.98)*(Q?.02:.2),D.update(Z),G.root.position.y=te+Math.sin(Z*.7)*.1,G.setFloat(0),G.lookAtYaw(Math.sin(Z*.3)*.2),z.material.opacity=.1+Math.sin(Z*1.1)*.05,Y.forEach((q,Se)=>{q.rotation.y=Math.sin(Z*.24+Se)*.02}),W.forEach(({tube:q,phase:Se},be)=>{q.rotation.y=Math.sin(Z*.18+Se)*.03,q.rotation.x=Math.sin(Z*.14+be)*.02}),K.forEach(q=>{q.mesh.position.y=q.baseY+Math.sin(Z*q.speed+q.phase)*.6,q.mesh.rotation.y+=k*.035,q.mesh.rotation.z+=k*.015}),_.intensity=Q?130+Math.sin(Z*8)*30:82+Math.sin(Z*1.5)*8,g.material.opacity=Q?.3:.12+Math.sin(Z*1.2)*.04,Ve.intensity=48+Math.sin(Z*1.9)*8,pe.lookAtYaw(.06+Math.sin(Z*.25)*.08),ce.lookAtYaw(-.06+Math.sin(Z*.2)*.06),Q||(f.minute.rotation.z=-Lr.degToRad(42)+Math.sin(Z*4)*.0025),Q&&(f.hour.rotation.z+=k*.6,f.minute.rotation.z+=k*1.4)}),e.shots={wide:{pos:[0,1.95,8.8],look:[0,4.7,-6.2],fov:55,handheld:.4},dana_float:{pos:[0,1.4,1.2],look:[1.55,3.4,-6.1],fov:40,handheld:.4},villain:{pos:[.6,1.7,1.6],look:[-1.3,2.75,-3.2],fov:36,handheld:.3},wren:{pos:[.2,1.6,2.2],look:[1.7,1.6,-1.3],fov:34,handheld:.3},ryan_close:{pos:[.2,1.62,.9],look:[.2,1.55,2.9],fov:34,handheld:.28},clock:{pos:[0,1.9,3.5],look:[0,4.8,-9],fov:48,handheld:.35},clock_face:{pos:[0,2.4,-2.5],look:[0,4.8,-9],fov:52,handheld:.5},final_hold:{pos:[.2,1.3,1],look:[1.45,3.4,-6],fov:46,handheld:.6},shatter:{pos:[0,2.6,-2.2],look:[0,4.7,-9],fov:58,handheld:.8},shatter_fail:{pos:[0,2.6,-2.2],look:[0,4.7,-9],fov:58,handheld:.8},close:{pos:[.5,1.6,1.4],look:[.2,1.5,2.9],fov:40,handheld:.3}},e.fog=new ni(656131,.021),e.background=new He(262401),e.hemi=.22,e.hemiColor=5907488,e.hemiGround=328194,e.exposure=1.02,e.bloom=.9,e.bloomThreshold=.5,e.tint=16768466,e.saturation=.88,e.contrast=1.08,e.grain=.08,e.aberration=1.8,e.vignette=.72,e.update=(Z,k,q)=>{for(const Se of e.updaters)Se(Z,k,q)},e}const y_={exterior:n_,foyer:s_,bedroom:c_,quarry:f_,hollow:__,lair:x_};function M_(i){const e=y_[i];if(!e)throw new Error(`Unknown scene: ${i}`);return e()}const S_={uniforms:{tDiffuse:{value:null},uTime:{value:0},uResolution:{value:new fe(1,1)},uGrain:{value:.055},uVignette:{value:.62},uAberration:{value:1},uTint:{value:new He(1,1,1)},uSaturation:{value:1},uContrast:{value:1.02}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime, uGrain, uVignette, uAberration, uSaturation, uContrast;
    uniform vec2 uResolution;
    uniform vec3 uTint;
    varying vec2 vUv;

    float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    void main() {
      vec2 uv = vUv;
      vec2 c = uv - 0.5;
      float d = length(c);
      vec2 dir = normalize(c + 1e-6) * uAberration * 0.0016 * d;
      vec3 col;
      col.r = texture2D(tDiffuse, uv + dir).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - dir).b;

      col *= uTint;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSaturation);
      col = (col - 0.5) * uContrast + 0.5;

      float grain = hash(uv * uResolution + fract(uTime) * 137.0) - 0.5;
      col += grain * uGrain * (0.55 + 0.45 * (1.0 - l));

      float vig = smoothstep(0.82, 0.22, d);
      col *= mix(1.0, vig, uVignette);

      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }
  `},w_=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class T_{constructor(e){this.canvas=e,this.renderer=new Pg({canvas:e,antialias:!0,powerPreference:"high-performance",alpha:!1,stencil:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.55)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=Gt,this.renderer.toneMapping=Ca,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ac,this.scene=new Qu,this.camera=new Zt(40,window.innerWidth/window.innerHeight,.05,300),this.camera.position.set(0,2,12),this.sceneRoot=new Ce,this.scene.add(this.sceneRoot),this.flashLight=new Wd(12176885,0),this.scene.add(this.flashLight),this.hemi=new zd(4873074,657414,.28),this.scene.add(this.hemi),this.clock=new fh,this.time=0,this.paused=!1,this.spec=null,this.sceneId=null,this.shotName=null,this.camT=1,this.camDuration=1,this.camFrom={pos:new C,look:new C,fov:40},this.camTo={pos:new C,look:new C,fov:40},this.lookCurrent=new C(0,2,0),this.shake=0,this.shakeTarget=0,this.handheld=.35,this.flashLevel=0,this.flashDecay=.9,this.flashColor=new He(12571903),this.reduceFlashes=!1,this.grainOn=!0,this.exploreCallbacks=null,this.hotspotHover=null,this.pointer=new fe(-10,-10),this.raycaster=new qd,this.hotspotRings=[],this.lightningTimer=null,this.lastLightning=0,this._setupComposer(),this._bind(),this.renderer.setAnimationLoop(()=>this._tick())}_setupComposer(){const e=new fe(window.innerWidth,window.innerHeight);this.composer=new Ng(this.renderer),this.composer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderPass=new Fg(this.scene,this.camera),this.composer.addPass(this.renderPass),this.bloom=new ji(e,.62,.7,.72),this.composer.addPass(this.bloom),this.grade=new xh(S_),this.grade.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight),this.composer.addPass(this.grade),this.output=new kg,this.composer.addPass(this.output)}_bind(){window.addEventListener("resize",()=>this.resize()),window.addEventListener("pointermove",e=>{this.pointer.x=e.clientX/window.innerWidth*2-1,this.pointer.y=-(e.clientY/window.innerHeight)*2+1,this.exploreCallbacks&&this._updateHover()}),window.addEventListener("click",()=>{if(this.exploreCallbacks?.onClick){const e=this._pickHotspot();e&&this.exploreCallbacks.onClick(e)}})}resize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.55)),this.renderer.setSize(e,t),this.composer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.composer.setSize(e,t),this.grade.uniforms.uResolution.value.set(e,t)}async setScene(e,{shot:t=null,instant:n=!1}={}){this._disposeScene(),this.sceneId=e,this.spec=M_(e),this.spec.onEngine?.(this),this.sceneRoot.add(this.spec.group),this.scene.fog=this.spec.fog||null,this.scene.background=this.spec.background||new He(131587),this.scene.backgroundIntensity=this.spec.backgroundIntensity??1,this.renderer.toneMappingExposure=this.spec.exposure??1.05,this.bloom.strength=this.spec.bloom??.62,this.bloom.radius=this.spec.bloomRadius??.7,this.bloom.threshold=this.spec.bloomThreshold??.72,this.hemi.intensity=this.spec.hemi??.28,this.hemi.color.set(this.spec.hemiColor??4873074),this.hemi.groundColor.set(this.spec.hemiGround??526086),this.grade.uniforms.uTint.value.set(this.spec.tint??16777215),this.grade.uniforms.uGrain.value=this.grainOn?this.spec.grain??.055:0,this.grade.uniforms.uVignette.value=this.spec.vignette??.62,this.grade.uniforms.uSaturation.value=this.spec.saturation??1,this.grade.uniforms.uContrast.value=this.spec.contrast??1.02,this.grade.uniforms.uAberration.value=this.spec.aberration??1,this.hotspotRings=[],(this.spec.hotspotData||[]).forEach(r=>{if(!r.position)return;const o=this._makeRing(r);this.sceneRoot.add(o),this.hotspotRings.push(o)});const s=t||this.spec.defaultShot||Object.keys(this.spec.shots||{})[0];s&&this.setShot(s,{instant:!0}),this._updateHover()}_makeRing(e){const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d");n.strokeStyle="rgba(232,210,160,0.9)",n.lineWidth=2,n.beginPath(),n.arc(64,64,40,0,Math.PI*2),n.stroke(),n.strokeStyle="rgba(232,210,160,0.3)",n.lineWidth=1,n.beginPath(),n.arc(64,64,48,0,Math.PI*2),n.stroke(),n.beginPath(),n.arc(64,64,4,0,Math.PI*2),n.stroke();const s=new Va(t);s.colorSpace=Gt;const r=new At({map:s,color:15258272,transparent:!0,opacity:0,blending:at,depthWrite:!1,depthTest:!0}),o=new Ct(r);return o.position.copy(e.position),o.scale.setScalar(e.ringSize||.55),o.userData.hotspotId=e.id,o.userData.baseScale=e.ringSize||.55,o}_disposeScene(){this.spec&&(this.sceneRoot.remove(this.spec.group),this.spec.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{n.map&&n.map!==Eh&&n.map.dispose?.(),n.dispose?.()})}),this.hotspotRings.forEach(e=>{this.sceneRoot.remove(e),e.material.map?.dispose(),e.material.dispose()}),this.hotspotRings=[],this.spec=null)}setShot(e,{instant:t=!1,duration:n=1.1,onDone:s=null}={}){const r=this.spec?.shots?.[e]||this.spec?.shots?.[this.spec?.defaultShot];return r?(this.shotName=e,this.camFrom.pos.copy(this.camera.position),this.camFrom.look.copy(this.lookCurrent),this.camFrom.fov=this.camera.fov,this.camTo.pos.set(r.pos[0],r.pos[1],r.pos[2]),this.camTo.look.set(r.look[0],r.look[1],r.look[2]),this.camTo.fov=r.fov||40,this.shotDef=r,this.handheld=r.handheld??.35,t?(this.camT=1,this.camera.position.copy(this.camTo.pos),this.lookCurrent.copy(this.camTo.look),this.camera.fov=this.camTo.fov,this.camera.updateProjectionMatrix(),this.lookAtTarget=this.camTo.look.clone()):(this.camT=0,this.camDuration=n,this.lookAtTarget=this.camTo.look.clone()),this.onShotDone=s,!0):!1}setExplore(e,t=null){this.exploreCallbacks=e?t:null,this.hotspotHover=null,this._updateHover(),this.hotspotRings.forEach(n=>{n.visible=!!e})}markHotspot(e){const t=this.hotspotRings.find(n=>n.userData.hotspotId===e);t&&(t.userData.done=!0)}_pickHotspot(){if(!this.exploreCallbacks||!this.spec)return null;const e=[];this.raycaster.setFromCamera(this.pointer,this.camera),this.spec.group.traverse(n=>{n.userData?.hotspotId&&n.visible&&e.push(n)}),this.hotspotRings.forEach(n=>{n.visible&&e.push(n)});const t=this.raycaster.intersectObjects(e,!1);for(const n of t){const s=n.object.userData.hotspotId;if(s)return s}return null}_updateHover(){if(!this.exploreCallbacks)return;const e=this._pickHotspot();e!==this.hotspotHover&&(this.hotspotHover=e,this.exploreCallbacks.onHover?.(e))}addShake(e=.4,t=.4){this.shake=Math.max(this.shake,e),this.shakeTarget=t}flash(e=1,t=12571903,n=.9){this.flashLevel=this.reduceFlashes?e*.35:e,this.flashColor.set(t),this.flashDecay=n}lightning(){const e=performance.now();e-this.lastLightning<900||(this.lastLightning=e,this.flash(1.4,13623551,.55),setTimeout(()=>this.flash(.7,12571903,.5),130),setTimeout(()=>this.flash(1,14214911,.4),260))}showRings(e){this.hotspotRings.forEach(t=>{t.visible=e})}getSpec(){return this.spec}_tick(){const e=Math.min(this.clock.getDelta(),.05),t=this.paused?0:e;this.time+=t;const n=this.time;if(this.spec?.update&&this.spec.update(n,t,this),this.spec?.actors)for(const f of this.spec.actors)f.update?.(n,t);if(this.spec?.onTick&&this.spec.onTick(n,t,this),this.camT<1){this.camT=Math.min(1,this.camT+t/Math.max(.001,this.camDuration));const f=w_(this.camT);if(this.camera.position.lerpVectors(this.camFrom.pos,this.camTo.pos,f),this.lookCurrent.lerpVectors(this.camFrom.look,this.camTo.look,f),this.camera.fov=this.camFrom.fov+(this.camTo.fov-this.camFrom.fov)*f,this.camera.updateProjectionMatrix(),this.camT>=1&&this.onShotDone){const m=this.onShotDone;this.onShotDone=null,m()}}this.camT>=1&&(this.camera.position.copy(this.camTo.pos),this.lookCurrent.copy(this.camTo.look));const s=this.shake,r=this.handheld,o=Math.sin(n*1.31)*.5+Math.sin(n*2.17+1.4)*.3+Math.sin(n*.53)*.2,a=Math.sin(n*1.73+2.1)*.5+Math.sin(n*2.9)*.3+Math.sin(n*.37)*.2,l=Math.sin(n*.91+.6)*.5+Math.sin(n*1.53)*.3,c=Math.sin(n*22.1)*.5+Math.sin(n*31.7+1.2)*.5,h=Math.sin(n*18.3+2.1)*.5+Math.sin(n*27.3)*.5;this.camera.position.x+=o*.03*r+c*.12*s,this.camera.position.y+=a*.025*r+h*.1*s,this.camera.position.z+=l*.02*r,this.shake>.001&&(this.shake=Math.max(0,this.shake-t*(.6+this.shake*2.2)));const u=this.lookCurrent.clone();if(u.x+=o*.035*r+c*.14*s,u.y+=a*.03*r+h*.12*s,this.camera.lookAt(u),this.camera.rotation.z+=l*.0025*r+c*.004*s,this.flashLevel>.001?(this.flashLight.color.copy(this.flashColor),this.flashLight.intensity=this.flashLevel*(this.spec?.flashBoost??2.2),this.flashLevel*=Math.pow(.001,t/Math.max(.05,this.flashDecay))):this.flashLight.intensity=0,this.spec&&this.hotspotRings.length){const f=!!this.exploreCallbacks;this.hotspotRings.forEach((m,g)=>{const _=m.userData.baseScale;if(m.userData.done){m.material.opacity=f?.08:0,m.material.color.set(7037522),m.scale.setScalar(_*.8);return}const p=this.hotspotHover===m.userData.hotspotId;m.material.opacity=f?p?.95:.36+Math.sin(n*2+g)*.16:0,m.material.color.set(p?16768160:15258272),m.scale.setScalar(_*(p?1.22:1+Math.sin(n*2+g)*.04))})}this.grade.uniforms.uTime.value=n,this.spec?.gradeUpdate&&this.spec.gradeUpdate(this.grade.uniforms,n),this.composer.render()}}let Eh=null;function b_(i){Eh=i}function Zn(i){if(i==null)return"";if(i===" ")return"space";const e=String(i).toLowerCase();return e==="spacebar"?"space":e==="esc"?"escape":e==="control"?"control":e}function yn(i){const e=Zn(i);return{space:"SPACE",arrowleft:"←",arrowright:"→",arrowup:"↑",arrowdown:"↓",escape:"ESC",enter:"ENTER"}[e]||e.toUpperCase()}class E_{constructor(e,{assist:t=!1}={}){this.config=e,this.kind=e.kind||"press",this.assist=t,this.mult=t?1.45:1,this.window=(e.window||1800)*this.mult,this.keys=(e.keys||[e.key||"e"]).map(Zn),this.target=e.target||12,this.hold=(e.hold||1500)*(t?.75:1),this.remaining=this.window,this.index=0,this.mashCount=0,this.holdTime=0,this.holding=!1,this.status="active",this.lastInput=null,this.keyWindow=(e.window||1800)*(e.assistPerKey===!1,1)*this.mult}get progress(){if(this.kind==="mash")return Math.min(1,this.mashCount/this.target);if(this.kind==="hold")return Math.min(1,this.holdTime/this.hold);if(this.kind==="sequence"){const e=Math.min(1,1-this.remaining/this.keyWindow);return Math.min(1,(this.index+e*.85)/this.keys.length)}return Math.max(0,1-this.remaining/this.window)}get displayKeys(){return this.kind==="sequence"?this.keys:[this.keys[0]]}get activeKey(){return this.kind==="sequence"?this.keys[this.index]:this.keys[0]}fail(){this.status==="active"&&(this.status="failed")}succeed(){this.status==="active"&&(this.status="succeeded")}tick(e){if(this.status!=="active")return this.status;const t=Math.min(e,.1);if(this.kind==="hold"){if(this.holding){if(this.holdTime+=t,this.holdTime>=this.hold)return this.succeed(),this.status}else this.remaining-=t,this.remaining<=0&&this.fail();return this.status}return this.remaining-=t,this.remaining<=0&&(this.kind==="sequence"?this.fail():this.fail()),this.status}press(e){if(this.status!=="active")return this.status;const t=Zn(e);return this.lastInput=t,this.kind==="press"?(this.keys.includes(t)&&this.succeed(),this.status):this.kind==="mash"?(this.keys.includes(t)&&(this.mashCount+=1,this.mashCount>=this.target&&this.succeed()),this.status):this.kind==="sequence"?(t===this.keys[this.index]?(this.index+=1,this.index>=this.keys.length?this.succeed():this.remaining=this.keyWindow):this.fail(),this.status):this.kind==="hold"?(this.keys.includes(t)&&!this.holding&&(this.holding=!0,this.lastInput=t),this.status):this.status}release(e){if(this.status!=="active")return this.status;const t=Zn(e);return this.kind==="hold"&&this.keys.includes(t)&&this.holding&&this.holdTime<this.hold&&this.fail(),this.status}}function A_(i){return i.kind==="sequence"?i.keys.map(yn).join("  —  "):i.kind==="mash"?`MASH ${yn(i.key)}`:i.kind==="hold"?`HOLD ${yn(i.key)}`:`PRESS ${yn(i.key)}`}const yc=2*Math.PI*52,fs=i=>new Promise(e=>setTimeout(e,i)),Mc={creel_photo:{label:"THE FAMILY PHOTO",title:"The Creel Family, 1959",text:"Four faces, all of them smiling at something just outside the frame. Someone has scratched out the father. The mother is holding a clock that is not in any of the other photographs. In the corner, in pencil: HE COUNTED US FIRST."},wall_scratches:{label:"THE SCRATCHES",title:"Somebody Was Counting",text:"Four tally marks, over and over, cut deep into the wallpaper. Then a fifth, crooked and much newer. Under it, childish handwriting: 3:07 COMES BACK. The plaster beneath is warm to the touch, like something is breathing behind it."},clock_face:{label:"THE GRANDFATHER CLOCK",title:"It Is Always 3:07",text:"The pendulum is still. The hands are frozen at three and seven. There is no dust on the glass. Someone has been winding it. On the inside of the case, dozens of names are written in the same cramped hand. Dana's is the newest."},candles:{label:"FIVE CANDLES",title:"One for Each of Us",text:"Five candles, all burning, though the house has had no power for a year. The wax has pooled into the shape of a hand. When you lean closer, the flames bend toward you, every one of them, like people listening."},swing_set:{label:"THE SWING SET",title:"It Is Still Swinging",text:"A rusted swing set with one empty seat, moving in a wind you cannot feel. The chains are warm from small hands. Under the seat, pressed into the mud, are two sets of footprints. One belongs to a child. The other has too many toes."},red_tether:{label:"DANA'S TETHER",title:"A Pulse Under the Mud",text:"A red vine, thick as a wrist, runs from the ruined house to somewhere beneath your feet. It beats. Not fast. Not slow. The exact rhythm of Dana's heart, the one you used to fall asleep to through the wall."},clock_door:{label:"THE CLOCK DOOR",title:"A Door With No Hands",text:"The clock in the Hollow house is twelve feet tall and has no face, only a dark opening where the hands should be. Cold air pours out of it, carrying the smell of the foyer. Somewhere inside, a girl is humming Dana's song."},dead_tree:{label:"THE DEAD TREE",title:"Jonah's Tree",text:"You know this tree. It grew in the field behind your house until the Quake took the field. Carved into the bark, at the height a twelve-year-old could reach: R + J. The sap is running. It is red."}},Po=i=>i.replace(/_/g," ").toUpperCase();class R_{constructor(e){this.audio=e,this.engine=null,this.paused=!1,this.mode="idle",this.inspectOpen=!1,this._pending=new Set,this._keyHandler=null,this._pointerHandler=null,this._raf=null,this._typing=null,this._explore=null,this._ignorePickUntil=0,this._keyPulse=null;const t=n=>document.getElementById(n);this.$=t,this.el={hud:t("hud"),hudChapter:t("hud-chapter"),hudObjective:t("hud-objective"),hudTime:t("hud-time"),hudSignal:t("hud-signal"),subtitles:t("subtitles"),speaker:t("speaker"),line:t("line"),advance:t("advance-hint"),choices:t("choices"),choicePrompt:t("choice-prompt"),choiceList:t("choice-list"),choiceTimer:t("choice-timer-fill"),qte:t("qte"),qtePrompt:t("qte-prompt"),qteKey:t("qte-key"),qteHint:t("qte-hint"),ring:t("ring-progress"),explore:t("explore"),reticle:t("reticle"),hotspotLabel:t("hotspot-label"),exploreCounter:t("explore-counter"),inspect:t("inspect"),inspectTitle:t("inspect-title"),inspectText:t("inspect-text"),inspectCount:t("inspect-count"),toast:t("toast"),card:t("chapter-card"),cardNumeral:t("chapter-numeral"),cardTitle:t("chapter-title"),cardSub:t("chapter-sub"),fade:t("fade"),fadeCaption:t("fade-caption"),flash:t("flash"),damage:t("damage"),title:t("title-screen"),pause:t("pause-screen"),pauseTime:t("pause-time"),pauseFlags:t("pause-flags"),ending:t("ending-screen"),endingKicker:t("ending-kicker"),endingTitle:t("ending-title"),endingText:t("ending-text"),endingStats:t("ending-stats")},this.el.ring.style.strokeDasharray=String(yc),this.el.ring.style.strokeDashoffset="0",window.addEventListener("pointermove",n=>this._onPointerMove(n))}async fadeOut(e=""){e&&(this.el.fadeCaption.textContent=e,this.el.fadeCaption.classList.add("on")),this.el.fade.classList.remove("clear"),this.el.fade.classList.add("visible"),await fs(1050)}async fadeIn({caption:e=!1,wait:t=900}={}){this.el.fade.classList.remove("visible"),this.el.fade.classList.add("clear"),await fs(450),e||this.el.fadeCaption.classList.remove("on"),await fs(Math.max(0,t-450)),this.el.fadeCaption.classList.remove("on")}async showChapterCard({numeral:e,title:t,sub:n}){this.el.cardNumeral.textContent=e||"",this.el.cardTitle.textContent=t||"",this.el.cardSub.textContent=n||"",this.el.card.classList.remove("hidden"),await fs(3e3),this.el.card.classList.add("hidden"),await fs(950)}setHUD({chapter:e=null,objective:t=null,time:n=null}={}){e!=null&&(this.el.hudChapter.textContent=e),t!=null&&(this.el.hudObjective.textContent=t),n!=null&&(this.el.hudTime.innerHTML=`<span class="clock-dot"></span>${n}`)}setSignal(e=0){this.el.hudSignal.classList.toggle("hot",e>=3),this.el.hudSignal.style.opacity=e<=0?"0.35":"1"}setHUDVisible(e){this.el.hud.classList.toggle("hidden",!e)}say({who:e="",text:t="",narrator:n=!1,voice:s="",signal:r=null}){return new Promise(o=>{r!=null&&this.setSignal(r),this.mode="line",this.el.subtitles.classList.remove("hidden"),this.el.speaker.textContent=n?"":e||"",this.el.speaker.className=n?"narrator":s==="unknown"?"unknown":"",this.el.line.textContent="",this.el.advance.classList.remove("on");let a=0,l=!1,c=performance.now(),h=0;const u=t.length,f=n?42:34,m=()=>{a=u,this.el.line.textContent=t,this.el.advance.classList.add("on"),l=!0},g=()=>{if(this.mode==="line"){if(!l){m();return}w(),o(!0)}},_=v=>{if(this.paused)return;const T=Zn(v.key);(T==="space"||T==="enter")&&(v.preventDefault(),g())},p=v=>{this.paused||v.target.closest("button, input, .screen")||g()},d=v=>{if(this.mode!=="line")return;if(this.paused){c=v,this._raf=requestAnimationFrame(d);return}const T=Math.min(.05,(v-c)/1e3);if(c=v,!l){h+=T*f;const E=Math.floor(h);E>0&&(h-=E,a=Math.min(u,a+E),this.el.line.textContent=t.slice(0,a),a>=u&&m())}this._raf=requestAnimationFrame(d)},w=()=>{this.mode="idle",this._pending.delete(y),window.removeEventListener("keydown",_),window.removeEventListener("pointerdown",p),this._raf&&cancelAnimationFrame(this._raf),this._raf=null,this.el.subtitles.classList.add("hidden"),this.el.advance.classList.remove("on")},y=()=>{w(),o(null)};this._pending.add(y),this._typing={finishTyping:m},window.addEventListener("keydown",_),window.addEventListener("pointerdown",p),this._raf=requestAnimationFrame(d)})}hideSubtitles(){this.el.subtitles.classList.add("hidden")}showChoices({prompt:e,options:t,timer:n=12,defaultIndex:s=0}){return new Promise(r=>{this.mode="choice",this.hideSubtitles(),this.el.choices.classList.remove("hidden"),this.el.choicePrompt.textContent=e||"",this.el.choiceList.innerHTML="";let o=Math.min(s,t.length-1),a=null,l=n,c=performance.now();const h=[],u=d=>{o=(d+t.length)%t.length,h.forEach((w,y)=>w.classList.toggle("focused",y===o))},f=()=>{this.mode="idle",this._pending.delete(p),window.removeEventListener("keydown",g),this._raf&&cancelAnimationFrame(this._raf),this._raf=null,this.el.choices.classList.add("hidden")},m=(d,w=!1)=>{if(a!=null)return;a=d,h[d]?.classList.add("picked"),this.audio?.uiTick?.();const y=d;setTimeout(()=>{f(),r(y)},w?160:330)};t.forEach((d,w)=>{const y=document.createElement("button");y.className="choice-item",y.type="button";const v=document.createElement("span");v.className="idx",v.textContent=String(w+1).padStart(2,"0");const T=document.createElement("span");if(T.className="label",T.textContent=d.label,d.sub){const E=document.createElement("span");E.className="sub",E.textContent=d.sub,T.appendChild(E)}y.append(v,T),y.addEventListener("click",()=>m(w)),this.el.choiceList.appendChild(y),h.push(y)}),u(o);const g=d=>{if(this.paused)return;const w=Zn(d.key);w==="arrowup"||w==="w"?(d.preventDefault(),u(o-1),this.audio?.uiTick?.()):w==="arrowdown"||w==="s"?(d.preventDefault(),u(o+1),this.audio?.uiTick?.()):w==="enter"||w==="space"?(d.preventDefault(),m(o)):/^[1-9]$/.test(w)&&Number(w)<=t.length&&m(Number(w)-1)},_=d=>{if(this.mode==="choice"){if(!this.paused){const w=(d-c)/1e3;if(l=Math.max(0,l-w),this.el.choiceTimer.style.transform=`scaleX(${l/n})`,l<=0){m(Math.min(s,t.length-1),!0),this._raf=null;return}}c=d,this._raf=requestAnimationFrame(_)}},p=()=>{f(),r(null)};this._pending.add(p),window.addEventListener("keydown",g),this._raf=requestAnimationFrame(_)})}runQte(e,{assist:t=!1}={}){return new Promise(n=>{this.mode="qte",this.hideSubtitles();const s=new E_(e,{assist:t}),r=s.displayKeys;this.el.qte.classList.remove("hidden"),this.el.qtePrompt.innerHTML=e.prompt?`<span class="danger">${ps(e.prompt)}</span>`:"QUICK",this.el.qteHint.textContent=e.hint||A_(e),this.el.qteKey.textContent=(e.kind==="sequence",yn(r[0])),this.el.qteKey.classList.remove("hit","good","bad"),this._keyPulse=null,e.kind==="sequence"&&(this.el.qteKey.textContent=yn(r[0]));let o=performance.now(),a=!1;const l=()=>{let d=Math.max(0,Math.min(1,s.progress));if(s.kind==="press"&&(d=Math.max(0,1-s.remaining/s.window)),s.kind==="sequence"&&s.status==="active"&&(this.el.qteKey.textContent=yn(s.activeKey)),this.el.ring.style.strokeDashoffset=String(yc*(1-d)),s.kind==="mash")this.el.qteHint.textContent=`${e.hint||"MASH"} — ${s.mashCount} / ${s.target}`;else if(s.kind==="hold"){const w=Math.max(0,s.hold-s.holdTime)/1e3;this.el.qteHint.textContent=s.holding?`HOLD — ${w.toFixed(1)}s`:`${e.hint||"HOLD"} — ${s.remaining.toFixed(1)}s`}else s.kind==="sequence"&&(this.el.qteHint.textContent=r.map((w,y)=>y<s.index?`[${yn(w)}]`:yn(w)).join("  "))},c=p=>{a||(a=!0,this.el.qteKey.classList.add(p?"good":"bad"),l(),setTimeout(()=>{m(),n(p)},430))},h=()=>{this.el.qteKey.classList.add("hit"),clearTimeout(this._keyPulse),this._keyPulse=setTimeout(()=>this.el.qteKey.classList.remove("hit"),90)},u=p=>{if(this.paused)return;const d=Zn(p.key);["space","arrowup","arrowdown","arrowleft","arrowright","tab"].includes(d)&&p.preventDefault(),!p.repeat&&(s.kind,s.press(d),h(),this.audio?.uiTick?.())},f=p=>s.release(p.key),m=()=>{this.mode="idle",this._pending.delete(g),window.removeEventListener("keydown",u),window.removeEventListener("keyup",f),this._raf&&cancelAnimationFrame(this._raf),this._raf=null,this.el.qte.classList.add("hidden"),this.el.qteKey.classList.remove("hit","good","bad")},g=()=>{m(),n(null)};this._pending.add(g);const _=p=>{if(this.mode!=="qte")return;if(this.paused){o=p,this._raf=requestAnimationFrame(_);return}const d=Math.min(.1,(p-o)/1e3);if(o=p,s.tick(d),l(),s.status!=="active"){this._raf=null,c(s.status==="succeeded");return}this._raf=requestAnimationFrame(_)};window.addEventListener("keydown",u),window.addEventListener("keyup",f),this._raf=requestAnimationFrame(_),l()})}startExplore({hotspots:e=[],required:t=3,prompt:n="SEARCH"}={}){return new Promise(s=>{this.mode="explore",this.inspectOpen=!1,this.el.explore.classList.remove("hidden"),this.el.exploreCounter.textContent=`0 / ${t} FOUND`,this.el.hotspotLabel.classList.remove("on"),this.el.reticle.classList.remove("hot"),this.el.inspect.classList.add("hidden"),this.hideSubtitles(),this.toast(n,1700);const r=new Set;let o=!1,a=null,l=null;const c=()=>{this.el.exploreCounter.textContent=`${r.size} / ${t} FOUND`},h=p=>{if(a=p,this.el.reticle.classList.toggle("hot",!!p),p){const d=Mc[p];this.el.hotspotLabel.textContent=d?.label||Po(p),this.el.hotspotLabel.classList.add("on")}else this.el.hotspotLabel.classList.remove("on")},u=()=>{this.inspectOpen&&(performance.now()-(this._inspectAt||0)<260||(this.inspectOpen=!1,this.el.inspect.classList.add("hidden"),this._ignorePickUntil=performance.now()+320,this.mode="explore",o?g():a&&h(a)))},f=p=>{if(this.inspectOpen){if(p.type==="keydown"){const d=Zn(p.key);if(d!=="space"&&d!=="enter"&&d!=="escape")return;p.preventDefault()}u()}},m=p=>{if(!this.explore||this.mode!=="explore"||performance.now()<this._ignorePickUntil||!p)return;const d=Mc[p]||{label:Po(p),title:Po(p),text:""};this.mode="inspect",this.inspectOpen=!0,this._inspectAt=performance.now(),this.engine?.markHotspot?.(p),r.add(p),c(),this.audio?.uiTick?.(),this.el.inspectTitle.textContent=d.title,this.el.inspectText.textContent=d.text,this.el.inspectCount.textContent=`${r.size} / ${t} FOUND`,this.el.inspect.classList.remove("hidden"),this.el.hotspotLabel.classList.remove("on"),this.el.reticle.classList.remove("hot"),r.size>=t&&(o=!0)},g=()=>{this.explore&&(this.mode="idle",this.explore=null,this.engine?.setExplore?.(!1),this.el.explore.classList.add("hidden"),this.el.inspect.classList.add("hidden"),this.el.hotspotLabel.classList.remove("on"),this.el.reticle.classList.remove("hot"),this._pending.delete(_),window.removeEventListener("keydown",f),window.removeEventListener("pointerdown",f),clearTimeout(l),this.audio?.success?.(),s([...r]))},_=()=>{this.mode="idle",this.explore=null,this.engine?.setExplore?.(!1),this.el.explore.classList.add("hidden"),this.el.inspect.classList.add("hidden"),this.el.hotspotLabel.classList.remove("on"),window.removeEventListener("keydown",f),window.removeEventListener("pointerdown",f),s(null)};this._pending.add(_),this.explore={found:r,required:t,onHover:h,onClick:m,finish:g},window.addEventListener("keydown",f),window.addEventListener("pointerdown",f),this.engine?.setExplore?.(!0,{onHover:h,onClick:m})})}_onPointerMove(e){if(this.mode!=="explore"&&this.mode!=="inspect")return;const t=e.clientX,n=e.clientY;this.el.reticle.style.left=`${t}px`,this.el.reticle.style.top=`${n}px`,this.el.hotspotLabel.style.left=`${t}px`,this.el.hotspotLabel.style.top=`${n}px`}toast(e,t=2200){this.el.toast.textContent=e,this.el.toast.classList.add("on"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this.el.toast.classList.remove("on"),t)}flash(e="white",t=1){const n=this.el.flash;n.className=e==="blood"?"blood":e==="fire"?"fire":"",n.style.transition="none",n.style.opacity=String(Math.min(.85,.4+t*.3)),requestAnimationFrame(()=>{n.style.transition="opacity 0.5s ease",n.style.opacity="0"})}damage(){this.el.damage.style.opacity="1",clearTimeout(this._damageTimer),this._damageTimer=setTimeout(()=>{this.el.damage.style.opacity="0"},1100)}showPause({time:e="",flags:t={}}={}){this.el.pauseTime.textContent=e||"";const n=[],s=(r,o)=>n.push(`<div class="flag-row"><span>${ps(r)}</span><span>${ps(o)}</span></div>`);s("Door",t.entry==="loud"?"Kicked in":"Slip in quiet"),t.record&&s("Record",t.record==="static"?"Static Bloom":t.record==="wren"?"Wren's mixtape":"Jonah's tape"),t.method&&s("Tether",t.method==="fire"?"Burned":t.method==="wren"?"Wren's hands":"Bare hands"),s("Sam",t.broughtSam?"At your side":"Watching Dana"),t.strain&&s("Strain",`${t.strain} / 3`),t.fails&&s("Close calls",String(t.fails)),this.el.pauseFlags.innerHTML=n.join(""),this.el.pause.classList.remove("hidden")}hidePause(){this.el.pause.classList.add("hidden")}showEnding({number:e,title:t,text:n,epigraph:s,stats:r=[]}){this.mode="ending",this.hideSubtitles(),this.setHUDVisible(!1),this.el.endingKicker.textContent=`ENDING ${e} OF 4`,this.el.endingTitle.textContent=t,this.el.endingText.textContent=s?`${n}

${s}`:n,this.el.endingStats.innerHTML=r.map(o=>`<div class="ending-stat">${ps(o.label)}<b>${ps(o.value)}</b></div>`).join(""),this.el.ending.classList.remove("hidden")}hideEnding(){this.el.ending.classList.add("hidden")}cancelPending(){const e=[...this._pending];this._pending.clear();for(const t of e)t();this.mode="idle",this._raf&&cancelAnimationFrame(this._raf),this._raf=null,this._typing&&(this._typing=null),this.el.subtitles.classList.add("hidden"),this.el.choices.classList.add("hidden"),this.el.qte.classList.add("hidden"),this.el.explore.classList.add("hidden"),this.el.inspect.classList.add("hidden"),this.engine?.setExplore?.(!1),this.engine?.showRings?.(!1),this.explore=null}}function ps(i){return String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}const Be=(i,e,t,n={})=>({t:"line",who:i,text:e,next:t,...n}),$e=(i,e,t={})=>Be("",i,e,{narrator:!0,...t}),Sc={nodes:{chapter1:{t:"chapter",numeral:"I",title:"THE HOUSE ON MAPLE STREET",sub:"HAWKINS, INDIANA — MARCH 21, 1986",scene:"exterior",shot:"establish",time:"3:04 AM",objective:"Find Dana.",next:"c1_01",checkpoint:!0},c1_01:$e("One year ago, the earth opened under Hawkins and swallowed nine houses whole.","c1_02",{shot:"establish",signal:1}),c1_02:$e("The news called it a sinkhole. The town called it the Quake. Nobody called it what it was.","c1_03",{shot:"approach",signal:1}),c1_03:$e("Tonight, the ash still falls like dirty snow. And Dana has walked back into the house that started it all.","c1_04",{shot:"porch"}),c1_04:Be("SAM","She came in here? Ryan, this place has been condemned since the Quake. There are birds living in the walls.","c1_05",{shot:"group"}),c1_05:Be("RYAN","Her shoes are on the porch. Both of them. She never takes them off.","c1_06",{shot:"porch"}),c1_06:Be("SAM","It's 3:04 in the morning. Why is it always 3:04?","c1_choice_entry",{shot:"window",signal:2}),c1_choice_entry:{t:"choice",prompt:"The front door is swollen shut. Dana is somewhere inside.",timer:11,defaultIndex:0,options:[{label:"Kick the door in. Get her out.",sub:"Make noise. Make it fast.",set:{entry:"loud",dana:1},next:"c1_loud_1"},{label:"Slip in quiet. Don't spook her.",sub:"She is sleepwalking. She will not recognise you.",set:{entry:"quiet",dana:1},next:"c1_quiet_1"}]},c1_loud_1:$e("The door gives on the third kick. The sound rolls through the empty house like a gunshot.","c1_loud_2",{shot:"door",shake:.5}),c1_loud_2:Be("SAM","Subtle. Very subtle. I'm sure whatever's in there loves guests.","c1_foyer_1",{shot:"wide"}),c1_quiet_1:$e("You ease the door open with your shoulder. The hinges make a sound like a small animal being stepped on.","c1_quiet_2",{shot:"door"}),c1_quiet_2:Be("SAM","If she's sleepwalking, don't wake her. In the movies, waking them is how everybody dies.","c1_foyer_1",{shot:"wide"}),c1_foyer_1:{t:"scene",scene:"foyer",shot:"wide",time:"3:05 AM",objective:"Search the foyer.",next:"c1_foyer_2"},c1_foyer_2:$e("The house exhales. Dust turns slowly in the beam of your flashlight, and somewhere above you, a floorboard creaks under a foot that weighs nothing at all.","c1_foyer_3",{shot:"wide"}),c1_foyer_3:Be("SAM","There's no power. So why does it smell like candles?","c1_foyer_4",{shot:"hall"}),c1_foyer_4:{t:"line",who:"WREN",text:"Because I lit them.",next:"c1_foyer_5",shot:"wren",signal:3},c1_foyer_5:Be("SAM","Jesus— how long have you been standing there?","c1_foyer_6",{shot:"wren"}),c1_foyer_6:Be("WREN","Long enough. You're late.","c1_foyer_7",{shot:"wren"}),c1_foyer_7:Be("RYAN","Where's Dana?","c1_foyer_8",{shot:"wren"}),c1_foyer_8:Be("WREN","Upstairs. Dreaming with her eyes open. She touched the clock, Ryan. He saw her.","c1_foyer_9",{shot:"clock",signal:4}),c1_foyer_9:Be("WREN","Look around. But do not touch the clock. I mean it.","c1_explore",{shot:"wide",objective:"Find three signs of what happened here."}),c1_explore:{t:"explore",scene:"foyer",shot:"explore",prompt:"Search the foyer",hotspots:["creel_photo","wall_scratches","clock_face","candles"],required:3,objective:"Search the foyer.",next:"c1_explore_done"},c1_explore_done:$e("Behind you, the grandfather clock clears its throat.","c1_touch_1",{shot:"clock",sfx:"clock_chime",shake:.35,signal:4}),c1_touch_1:Be("WREN","Ryan. Don't—","c1_touch_2",{shot:"clock"}),c1_touch_2:$e("The hands are frozen at 3:07. You reach out before you decide to. The glass is warm, like skin.","c1_qte_break",{shot:"clock_close",signal:4}),c1_qte_break:{t:"qte",kind:"press",key:"e",window:1700,prompt:"SOMETHING HAS YOUR WRIST",hint:"BREAK FREE",success:"c1_break_ok",fail:"c1_break_fail",failSet:{dana:-1}},c1_break_ok:$e("You tear your hand back. A black handprint blooms under your skin, then fades. The clock face cracks from three to seven.","c1_break_after",{shot:"clock_close",shake:.6,sfx:"impact"}),c1_break_fail:$e("Fingers of cold smoke close around your wrist. You feel something lean close and breathe in, like you are a door left open. The clock lets go. It does not need you. Yet.","c1_break_after",{shot:"clock_close",shake:.8,sfx:"impact",damage:!0}),c1_break_after:Be("WREN","It knows your name now. That was either very brave or very stupid.","c1_upstairs",{shot:"wren",signal:3}),c1_upstairs:$e(`From the top of the stairs, a girl's voice, flat as a recording: "Three. Oh. Seven."`,"c1_dana_top",{shot:"stairs",sfx:"whisper",signal:4}),c1_dana_top:Be("DANA","Ryan. You came.","chapter2",{shot:"dana_stairs"}),chapter2:{t:"chapter",numeral:"II",title:"THE SIGNAL",sub:"3:06 AM — THE HOUSE ON MAPLE STREET",scene:"bedroom",time:"3:06 AM",objective:"Wake Dana.",next:"c2_01",checkpoint:!0},c2_01:$e("Dana is standing at the window in her nightgown, toes curled against the cold floor. Her eyes are open. They are not looking at anything.","c2_02",{shot:"dana_window",signal:3}),c2_02:Be("DANA","Three... oh... seven... three... oh... seven...","c2_03",{shot:"dana_close",sfx:"whisper"}),c2_03:Be("WREN","He marked her in the foyer. The clock is his door. At 3:07 he opens it and takes what he wants.","c2_04",{shot:"wren"}),c2_04:Be("SAM",`Okay. I'm going to say the thing nobody's saying. What is "he"?`,"c2_choice_response",{shot:"sam"}),c2_choice_response:{t:"choice",prompt:"Dana whispers your name like it is a question.",timer:10,defaultIndex:0,options:[{label:`"I'm here now, Dana. I'm not going anywhere."`,sub:"She needs her brother.",set:{dana:2,honest:!0},next:"c2_resp_here"},{label:'"You have to wake up. Right now."',sub:"Shake her out of it.",set:{dana:0,stern:!0},next:"c2_resp_wake"},{label:"Say nothing. Let Wren work.",sub:"You are afraid of what she will hear in your voice.",set:{wren:1,quiet:!0},next:"c2_resp_silent"}]},c2_resp_here:Be("DANA","You said that at the funeral, too.","c2_05",{shot:"dana_close",shake:.2}),c2_resp_wake:Be("DANA","Wake up? Ryan, I'm the only one here who's awake.","c2_05",{shot:"dana_close",shake:.4}),c2_resp_silent:$e("You say nothing. Wren glances at you, and for one second she looks almost disappointed.","c2_05",{shot:"wren"}),c2_05:Be("WREN","His name is the Hollow Man. He lives in the space between seconds. He feeds on people who are running from something they can't outrun.","c2_06",{shot:"wren"}),c2_06:Be("WREN","He doesn't kill them. He keeps them. Like photographs in a drawer.","c2_07",{shot:"dana_close"}),c2_07:Be("SAM","And the clock?","c2_08",{shot:"sam"}),c2_08:Be("WREN","The clock is the door. At 3:07 he crosses. We have one minute.","c2_09",{shot:"wren"}),c2_09:Be("SAM","It's 3:06.","c2_choice_record",{shot:"sam",signal:4}),c2_choice_record:{t:"choice",prompt:"Music is the only thing that anchors a marked soul. What do you put on the record player?",timer:12,defaultIndex:0,options:[{label:`"Static Bloom" — Dana's favourite.`,sub:"She knows every word.",set:{record:"static",dana:2},next:"c2_rec_static"},{label:"Wren's mixtape. The one she made for the dark.",sub:"Wren wrote every note for a night like this.",set:{record:"wren",wren:2},next:"c2_rec_mixtape"},{label:"The tape in your jacket. Jonah's tape.",sub:"You have not played it since the Quake.",set:{record:"jonah",dana:1,jonah:1},next:"c2_rec_brother"}]},c2_rec_static:Be("SAM","Dana's favourite. Of course. The song about not letting the lights take you.","c2_qte_music",{shot:"record"}),c2_rec_mixtape:Be("WREN","You kept it?","c2_qte_music",{shot:"wren"}),c2_rec_brother:$e("Jonah's handwriting on the label: FOR RYAN, WHEN IT GETS DARK. YOU OWE ME A SLUSHIE.","c2_qte_music",{shot:"record",shake:.3}),c2_qte_music:{t:"qte",kind:"mash",key:"space",window:3400,target:15,prompt:"THE RECORD IS SLIPPING",hint:"MASH SPACE TO KEEP IT SPINNING",success:"c2_music_ok",fail:"c2_music_fail"},c2_music_ok:$e("The needle catches. The room fills with drums and a woman singing about running. Dana's feet leave the floor. She rises six inches and hangs there, hair weightless, while Wren whispers something that makes the lamps flicker.","c2_10",{shot:"dana_levitate",signal:4}),c2_music_fail:$e("The record jumps. For half a second there is only static, and inside the static, a man's voice says your name. Dana's nose begins to bleed. You slam the needle back down.","c2_10",{shot:"dana_levitate",damage:!0,signal:4}),c2_10:$e("Dana drops to her knees. The music stops. The clock on her nightstand says 3:06.","c2_11",{shot:"dana_floor"}),c2_11:Be("DANA","He showed me the door, Ryan. It's under the quarry. It's been open this whole time.","c2_12",{shot:"dana_close"}),c2_12:Be("DANA","Jonah was there. I heard him. He said you left him.","c2_13",{shot:"ryan_close",shake:.35}),c2_13:Be("WREN","The Hollow Man wears the dead. He puts them on like coats. Don't believe anything he says with your brother's mouth.","c2_14",{shot:"wren"}),c2_14:Be("SAM","The quarry. My scanner picks up a signal there every night at 3:07. I thought it was a busted amplifier.","c2_choice_sam",{shot:"sam"}),c2_choice_sam:{t:"choice",prompt:"The quarry is three miles of dark and flooded tunnels. Sam is already reaching for his camera.",timer:12,defaultIndex:0,options:[{label:"Bring Sam. You'll need the camera.",sub:"He is scared. He is coming anyway.",set:{broughtSam:!0,sam:2},next:"c2_sam_bring"},{label:"Make Sam stay with Dana.",sub:"If the clock opens here, she cannot be alone.",set:{broughtSam:!1,dana:2,sam:-1},next:"c2_sam_stay"}]},c2_sam_bring:Be("SAM","I'm not staying behind. If this is the last tape I ever shoot, it's going to have a good third act.","chapter3",{shot:"sam",signal:3}),c2_sam_stay:Be("SAM","Fine. But if you die, I'm telling everyone you cried at the end of E.T.","chapter3",{shot:"sam"}),chapter3:{t:"chapter",numeral:"III",title:"THE QUARRY",sub:"3:06 AM — THREE MILES OUTSIDE HAWKINS",scene:"quarry",time:"3:06 AM",objective:"Reach the gate.",next:"c3_01",checkpoint:!0},c3_01:$e("The rain comes down in sheets. The quarry road ends where the guardrail used to be. Below, black water swallows the light from your flashlights whole.","c3_02",{shot:"wide",signal:3}),c3_02:Be("WREN","They dug too deep here in '59. Found something that was already waiting. The gate is at the bottom of the old mine.","c3_03",{shot:"gate"}),c3_03:Be("WREN","Stay on the ledge. The rock is older than it looks. It remembers being empty.","c3_branch_sam",{shot:"ledge"}),c3_branch_sam:{t:"branch",when:i=>!!i.broughtSam,yes:"c3_sam_yes",no:"c3_sam_no"},c3_sam_yes:Be("SAM","Ledge. Right. I'll just film from back here. For posterity. And for the police.","c3_04",{shot:"sam"}),c3_sam_no:$e(`Your walkie hisses. Dana's voice, thin as a thread: "Ryan? It's 3:06. Hurry."`,"c3_04",{shot:"walkie",signal:4}),c3_04:$e("Halfway across, the ledge crumbles under Ryan's boot. The flashlight tumbles end over end into the dark, and the dark does not make a sound when it lands.","c3_qte_ledge",{shot:"cliff",shake:.5}),c3_qte_ledge:{t:"qte",kind:"sequence",keys:["a","d","e"],window:1250,prompt:"CROSS THE LEDGE",hint:"A — D — E",success:"c3_ledge_ok",fail:"c3_ledge_fail"},c3_ledge_ok:$e("You throw yourself at the far wall, fingers finding a seam in the rock. Wren hauls you up by the jacket. For a moment, her hand is hot enough to steam in the rain.","c3_05",{shot:"ledge",signal:4}),c3_ledge_fail:$e("Your foot slips. The drop opens its mouth. Sam grabs your wrist, or maybe it is Wren, or maybe it is nobody at all, and you are on your knees on the ledge with your heart trying to climb out of your throat.","c3_05",{shot:"cliff",shake:.8,damage:!0}),c3_05:Be("WREN","There. Below the waterline. Do you see it?","c3_06",{shot:"gate",signal:4}),c3_06:$e("A seam of red light hangs in the rock like a wound that has been open for a very long time. It pulses, slow and wet. The rain around it falls upward.","c3_07",{shot:"gate"}),c3_07:Be("WREN","It opens for the one who lost someone. That's you, Ryan. I'm sorry.","c3_08",{shot:"wren"}),c3_08:Be("RYAN","What about Dana? What happens to her if we're too late?","c3_09",{shot:"ryan_close"}),c3_09:Be("WREN","He doesn't kill her. He keeps her. Forever, in a room where the song never ends and nobody ever comes.","c3_10",{shot:"wren"}),c3_10:$e("You step toward the light. The wound widens. It smells like rain on hot asphalt, and underneath that, like Jonah's jacket the summer before he died.","c3_11",{shot:"gate_in",signal:4}),c3_11:$e("The dark takes your hand. It is almost gentle.","chapter4",{shot:"gate_in",sfx:"gate"}),chapter4:{t:"chapter",numeral:"IV",title:"THE HOLLOW",sub:"3:06 AM — SOMEWHERE UNDER HAWKINS",scene:"hollow",time:"3:06 AM",objective:"Sever the tether.",next:"c4_01",checkpoint:!0},c4_01:$e("The other side of Hawkins is a photograph left in the sun. The sky is red, the trees are black, and everything you remember has been rearranged by someone who only ever read about houses.","c4_02",{shot:"wide",signal:4}),c4_02:$e("Spores drift upward like snow that forgot which way is down. Somewhere, a clock is ticking. It is not the clock you came through.","c4_03",{shot:"sky"}),c4_03:Be("WREN","Don't breathe too deep. Don't answer the voices. If you see Jonah, it isn't Jonah.","c4_04",{shot:"wren"}),c4_branch_sam:{t:"branch",when:i=>!!i.broughtSam,yes:"c4_sam_yes",no:"c4_sam_no"},c4_sam_yes:Be("SAM","There are two of me in my viewfinder. One of them is smiling. I hate it here.","c4_05",{shot:"sam"}),c4_sam_no:$e("The walkie is dead. Or the walkie is working, and Dana is whispering from a room that does not exist.","c4_05",{shot:"walkie",signal:4}),c4_05:Be("WREN","Dana's tether is anchored to this place. A vine. It will be warm. It will feel like a hand.","c4_explore",{shot:"house",objective:"Find Dana's tether."}),c4_explore:{t:"explore",scene:"hollow",shot:"explore",prompt:"Search the Hollow",hotspots:["swing_set","red_tether","clock_door","dead_tree"],required:3,objective:"Find Dana's tether.",next:"c4_vine_qte"},c4_vine_qte:{t:"qte",kind:"mash",key:"space",window:3e3,target:14,prompt:"THE VINE HAS YOUR ANKLE",hint:"MASH SPACE TO BREAK FREE",success:"c4_vine_ok",fail:"c4_vine_fail"},c4_vine_ok:$e("You wrench your leg free. The vine splits open and something inside it—teeth, or a hand, or a memory—snaps shut on empty air.","c4_06",{shot:"vine",shake:.6}),c4_vine_fail:$e("The vine drags you into the mud. It is warm. It has a pulse. Somewhere far away, Dana laughs in her sleep.","c4_vine_branch",{shot:"vine",shake:.8,damage:!0}),c4_vine_branch:{t:"branch",when:i=>!!i.broughtSam,yes:"c4_sam_save",no:"c4_wren_save"},c4_sam_save:$e("Sam swings the camera tripod down like a sword. The vine recoils. He helps you up with shaking hands and does not stop filming.","c4_06",{shot:"sam_help"}),c4_wren_save:$e("Wren closes her fist. The vine bursts into black ash. Blood runs from her nose and she wipes it away before you can say anything.","c4_wren_save_2",{shot:"wren_bleed",wrenWeak:!0}),c4_wren_save_2:Be("WREN","Don't look at me like that. I've had worse birthdays.","c4_06",{shot:"wren"}),c4_06:$e("Past the treeline, the Creel house waits. Here it never burned. Its windows are lit. Someone is playing the piano inside, badly, with too many fingers.","c4_07",{shot:"house"}),c4_07:Be("WREN","The tether runs from the house to Dana. If we cut it, he loses his grip on her. If we cut it wrong, we cut her.","c4_choice_sever",{shot:"tether",signal:4}),c4_choice_sever:{t:"choice",prompt:"The tether pulses under the mud. It is warm. It feels like a hand.",timer:12,defaultIndex:0,options:[{label:"Burn it with the flare.",sub:"Fire kills the vine. It might burn Dana too.",set:{method:"fire"},next:"c4_sev_fire"},{label:"Let Wren reach into the dark.",sub:"She can cut it from the inside. It will cost her.",set:{method:"wren",wren:2,wrenWeak:!0},next:"c4_sev_wren"},{label:"Cut it yourself. With your hands.",sub:"You are the one who left. Let it take something from you.",set:{method:"self",strain:1,jonah:1},next:"c4_sev_self"}]},c4_sev_fire:$e("The flare screams to life. Red light, real light, the first honest thing in this place. The vine hisses and pulls back from the heat like a struck dog.","c4_qte_sever",{shot:"tether_fire"}),c4_sev_wren:Be("WREN","Hold my hand. Whatever you hear in there, it isn't me.","c4_qte_sever",{shot:"wren_hold"}),c4_sev_self:$e("You put both hands into the mud and take hold of the tether. It is warm. It beats. It knows your name without being told.","c4_qte_sever",{shot:"tether"}),c4_qte_sever:{t:"qte",kind:"hold",key:"e",hold:1500,window:2400,prompt:"SEVER THE TETHER",hint:"HOLD E",success:"c4_sever_ok",fail:"c4_sever_fail"},c4_sever_ok:$e("The tether comes apart with a sound like a phone being hung up in another room. Dana's voice floods your head—one clean, terrified syllable—and then the house across the mud throws every window open at once.","c4_08",{shot:"house_open",shake:.7,sfx:"impact"}),c4_sever_fail:$e("The tether tightens around your wrists. For a second you see what Dana sees: a red room, a wooden chair, a clock with no face. Then it lets go, almost politely, and the house opens its eyes.","c4_08",{shot:"house_open",shake:.9,damage:!0}),c4_08:Be("WREN","He felt that. He's coming.","c4_09",{shot:"wren"}),c4_09:$e("Every clock in the Hollow begins to strike at once. Not three. Not seven. Some number that comes after both.","c4_10",{shot:"sky",signal:4,sfx:"clock_chime"}),c4_10:Be("SAM","Ryan. The house. The whole house is turning into a clock.","c4_11",{shot:"house_clock"}),c4_11:$e(`The front door opens inwards, into a darkness that is taller than the house. Somewhere inside, Jonah's voice says: "Took you long enough."`,"chapter5",{shot:"door_dark",signal:4}),chapter5:{t:"chapter",numeral:"V",title:"3:07",sub:"THE ROOM BETWEEN SECONDS",scene:"lair",time:"3:07 AM",objective:"End it.",next:"c5_01",checkpoint:!0},c5_01:$e("The room has no walls. It has a clock face, forty feet across, and everything else is the dark leaning in to listen.","c5_02",{shot:"wide",signal:4}),c5_02:$e("Dana hangs suspended beneath the hands, asleep or dead or somewhere in between. The pendulum swings through her shadow without touching her.","c5_03",{shot:"dana_float"}),c5_03:Be("HOLLOW MAN","Ryan. You brought the little signal girl. And the one with the camera. And my favourite: the boy who ran.","c5_04",{shot:"villain",voice:"unknown"}),c5_04:Be("RYAN","Let her go.","c5_05",{shot:"ryan_close"}),c5_05:Be("HOLLOW MAN","I did. Years ago. You remember, don't you? The floor gave way, and you had his hand, and then you didn't.","c5_06",{shot:"villain",shake:.4}),c5_06:Be("RYAN","That's not true.","c5_07",{shot:"ryan_close"}),c5_07:Be("HOLLOW MAN","It is the only true thing in this room. I keep it warm for you. Every night at 3:07.","c5_08",{shot:"villain"}),c5_08:Be("WREN","Ryan. Look at me. Not at him.","c5_09",{shot:"wren"}),c5_09:Be("HOLLOW MAN","One name for another. Take her place, and the clock stops. Everyone goes home. Dana grows up. Marries someone dull. Has children who never learn your name.","c5_choice_offer",{shot:"villain",signal:4}),c5_choice_offer:{t:"choice",prompt:"The clock hands are touching 3:07. The room is holding its breath.",timer:13,defaultIndex:1,options:[{label:"Offer yourself. Take Dana's place.",sub:"She goes home. You stay. The clock stops.",set:{sacrifice:!0,dana:2},next:"c5_offer_yes"},{label:"Refuse him. Tear the clock down.",sub:"Nobody gets left behind. Not again.",set:{sacrifice:!1,wren:1},next:"c5_offer_no"},{label:"Tell Wren to burn him. End it.",sub:"She has been waiting her whole life to be asked.",set:{sacrifice:!1,wren:2,wrenBurned:!0},next:"c5_offer_wren"}]},c5_offer_yes:Be("HOLLOW MAN","There he is. The boy who stays.","c5_10",{shot:"villain"}),c5_offer_no:Be("HOLLOW MAN","Then you have chosen the hard way. I do so love the hard way.","c5_10",{shot:"villain"}),c5_offer_wren:Be("WREN","I thought you'd never ask.","c5_10",{shot:"wren"}),c5_10:Be("DANA","Ryan— don't—","c5_11",{shot:"dana_float",shake:.3}),c5_11:$e("The clock strikes the hour. The floor falls away. You are holding Dana's hand, and the room is pulling her up, and the pendulum is coming down like a blade.","c5_qte_hold",{shot:"final_hold",shake:.6,signal:4}),c5_qte_hold:{t:"qte",kind:"hold",key:"e",hold:1700,window:2600,prompt:"DON'T LET GO",hint:"HOLD E",success:"c5_hold_ok",fail:"c5_hold_fail"},c5_hold_ok:$e("You hold. The pendulum shrieks past your shoulder. Dana's fingers dig into yours hard enough to bruise.","c5_qte_run",{shot:"final_hold"}),c5_hold_fail:$e("Your grip slips. Dana lurches upward, hair tangling in the hands of the clock. You catch her ankle. Something in your shoulder tears.","c5_qte_run",{shot:"final_hold",damage:!0}),c5_qte_run:{t:"qte",kind:"sequence",keys:["a","d","space"],window:1150,prompt:"GET TO THE CLOCK",hint:"A — D — SPACE",success:"c5_run_ok",fail:"c5_run_fail"},c5_run_ok:$e("You run across the falling floor. Wren is already at the clock face, both hands pressed to the glass, screaming a word that sounds like a struck bell.","c5_qte_strike",{shot:"clock_face"}),c5_run_fail:$e("The floor bucks. You go down hard, chin split, mouth full of dust that tastes like the Quake. The clock face is right there. You crawl.","c5_qte_strike",{shot:"clock_face",damage:!0}),c5_qte_strike:{t:"qte",kind:"press",key:"e",window:1150,prompt:"BREAK THE FACE",hint:"STRIKE NOW",success:"c5_strike_ok",fail:"c5_strike_fail"},c5_strike_ok:$e("Your fist goes through the clock face. Glass, then something softer. The Hollow Man screams with every voice he has ever stolen, including Jonah's. Especially Jonah's.","final_branch",{shot:"shatter",shake:1.2,flash:"blood",signal:4,set:{finalSuccess:!0}}),c5_strike_fail:$e("Your fist glances off the glass. The hands close around your wrist. The room turns, slowly, like a key in a lock. 3:07 becomes 3:07 becomes 3:07.","final_branch",{shot:"shatter_fail",shake:1,flash:"blood",set:{finalSuccess:!1}}),final_branch:{t:"branch",when:i=>Lo(i)==="ending_loop",yes:"ending_loop",no:"final_second"},final_second:{t:"branch",when:i=>Lo(i)==="ending_newhollow",yes:"ending_newhollow",no:"final_third"},final_third:{t:"branch",when:i=>Lo(i)==="ending_longway",yes:"ending_longway",no:"ending_signal"},ending_signal:{t:"end",id:"signal",number:1,title:"THE LAST SIGNAL",tone:"good",text:"The clock falls. Dawn comes up over Hawkins like an apology. Dana goes home. Wren goes quiet for a while, then starts eating lunch with you again. Sam's tape is blank for the first four minutes, and then it isn't. On the tape, behind the three of you walking away, a grandfather clock stands in the middle of the quarry, untouched. Its hands are moving. Somewhere, someone new is running from something. You are already reaching for the door.",epigraph:"Every ending is somebody's beginning."},ending_newhollow:{t:"end",id:"newhollow",number:2,title:"THE NEW HOLLOW",tone:"sacrifice",text:"You take Dana's place. The hands close gently, the way a book closes on a pressed flower. She wakes in her bed at 3:08 with no memory of the clock and a brother-shaped absence she cannot name. The Hollow Man keeps his promise: Dana grows up. She marries someone dull. She has children who never learn your name. In the room between seconds, you sit in the chair and listen to the ticks. Sometimes, at 3:07, a new voice starts running. You are learning how to call them home.",epigraph:"The clock stops for no one. But it can be made to wait."},ending_longway:{t:"end",id:"longway",number:3,title:"THE LONG WAY HOME",tone:"bittersweet",text:"Wren burns him. She burns brighter than the red sky and does not come back all the way. Dana wakes in the quarry with no mark on her wrist. The three of you walk home in the rain. Wren laughs at Sam's jokes one second late, every time, as if hearing them from another room. In the spring, she leaves Hawkins with a suitcase and a mixtape and a nosebleed she cannot explain. You get a postcard every year. It always says the same thing: DON'T LET THE LIGHTS TAKE YOU.",epigraph:"Some doors close from the inside."},ending_loop:{t:"end",id:"loop",number:4,title:"3:07",tone:"bad",text:"The clock hands close on your wrist. The room folds. You wake in your bed at 3:04 with the taste of ash in your mouth and Dana's shoes on the porch downstairs. Nine houses fell into the earth a year ago. The town calls it a sinkhole. The town is lying. Tonight, Dana walks back into the house that started it all. This time, you are almost sure you remember the way.",epigraph:"The signal never really ends. It just changes frequency."}}};function Lo(i){return i.finalSuccess?i.sacrifice?"ending_newhollow":i.wrenBurned||i.wrenWeak&&i.method==="wren"?"ending_longway":"ending_signal":"ending_loop"}function Bi(){return{dana:0,wren:0,sam:0,jonah:0,entry:"quiet",record:"static",method:"fire",broughtSam:!1,sacrifice:!1,finalSuccess:!1,wrenWeak:!1,wrenBurned:!1,strain:0,fails:0,found:0,honest:!1,quiet:!1,stern:!1}}const Io=[{id:"chapter1",numeral:"I",name:"The House on Maple Street"},{id:"chapter2",numeral:"II",name:"The Signal"},{id:"chapter3",numeral:"III",name:"The Quarry"},{id:"chapter4",numeral:"IV",name:"The Hollow"},{id:"chapter5",numeral:"V",name:"3:07"}],Do="hollowclock.save.v1",wc="hollowclock.settings.v1",Tc="hollowclock.unlocked.v1",xr=i=>new Promise(e=>setTimeout(e,i)),C_={exterior:"house",foyer:"house",bedroom:"bedroom",quarry:"quarry",hollow:"hollow",lair:"lair"},P_={static:"Static Bloom",wren:"Wren's mixtape",jonah:"Jonah's tape"},L_={fire:"The flare",wren:"Wren's hands",self:"Bare hands"};function Uo(i,e=null){try{const t=localStorage.getItem(i);return t?JSON.parse(t):e}catch{return e}}function No(i,e){try{localStorage.setItem(i,JSON.stringify(e))}catch{}}function I_(i){try{localStorage.removeItem(i)}catch{}}class D_{constructor({engine:e,ui:t,audio:n}){this.engine=e,this.ui=t,this.audio=n,this.ui.engine=e,this.flags=Bi(),this.chapter="chapter1",this.chapterStartFlags=Bi(),this.currentTime="3:04 AM",this.currentMood="title",this.token=0,this.running=!1,this.paused=!1,this._black=!1,this._endingPayload=null,this._chaptersReturn=null,this._returnToPause=!1,this._settings={assist:!1,reduceFlashes:!1,audio:!0,grain:!0,...Uo(wc,{})},this._bound=!1}async boot(e=()=>{}){e(.18,"TUNING THE SIGNAL"),this._bind(),this._applySettings(),await this.engine.setScene("exterior",{shot:"title"}),e(.72,"FINDING HAWKINS"),this.engine.paused=!1,this.ui.setHUDVisible(!1),this.ui.setSignal(0),this._updateContinueButton(),this._renderChapters(),this._setMood("title"),e(1,"THE CLOCK IS COUNTING DOWN"),await xr(320)}_bind(){if(this._bound)return;this._bound=!0;const e=(s,r)=>{const o=document.getElementById(s);o&&o.addEventListener("click",a=>{a.preventDefault(),r()})};e("btn-begin",()=>this._startFresh()),e("btn-continue",()=>this._continue()),e("btn-chapters",()=>this._openChapters("title")),e("btn-settings",()=>this._openSettings(!1)),e("btn-resume",()=>this._resume()),e("btn-restart",()=>this._restartChapter()),e("btn-pause-settings",()=>this._openSettings(!0)),e("btn-quit",()=>this._quitToTitle()),e("btn-again",()=>this._startFresh()),e("btn-ending-chapters",()=>this._openChapters("ending")),e("btn-ending-title",()=>this._quitToTitle()),document.querySelectorAll("[data-close]").forEach(s=>{s.addEventListener("click",()=>this._closePanel(s.dataset.close))});const t=(s,r)=>{const o=document.getElementById(s);o&&o.addEventListener("change",()=>{this._settings[r]=o.checked,this._saveSettings(),this._applySettings()})};t("opt-qte","assist"),t("opt-flash","reduceFlashes"),t("opt-audio","audio"),t("opt-grain","grain"),window.addEventListener("keydown",s=>{s.key==="Escape"&&(this.ui.inspectOpen||this.running&&(s.preventDefault(),this.paused?this._resume():this._pause()))});const n=()=>{this.audio.started||this.audio.init().then(()=>{this.audio.setEnabled(this._settings.audio),this.audio.setMood(this.running?this.currentMood:"title")}).catch(()=>{})};window.addEventListener("pointerdown",n,{once:!0}),window.addEventListener("keydown",n,{once:!0})}_applySettings(){const e=this._settings,t=document.getElementById("opt-qte"),n=document.getElementById("opt-flash"),s=document.getElementById("opt-audio"),r=document.getElementById("opt-grain");t&&(t.checked=!!e.assist),n&&(n.checked=!!e.reduceFlashes),s&&(s.checked=!!e.audio),r&&(r.checked=!!e.grain),this.engine.reduceFlashes=!!e.reduceFlashes,this.engine.grainOn=!!e.grain;const o=this.engine.grade?.uniforms?.uGrain;o&&(o.value=e.grain?this.engine.spec?.grain??.06:0),this.audio.setEnabled(!!e.audio)}_saveSettings(){No(wc,this._settings)}_savedGame(){const e=Uo(Do,null);return!e||!e.nodeId||!Sc.nodes[e.nodeId]?null:e}_saveCheckpoint(e){No(Do,{nodeId:e,chapter:this.chapter,flags:this._cloneFlags(this.flags),time:this.currentTime}),this._updateContinueButton()}_clearSave(){I_(Do),this._updateContinueButton()}_cloneFlags(e){return JSON.parse(JSON.stringify(e))}_unlocked(){const e=Uo(Tc,["chapter1"]);return Array.isArray(e)&&e.length?e:["chapter1"]}_unlock(e){const t=this._unlocked();t.includes(e)||(t.push(e),No(Tc,t))}_setMood(e){this.currentMood=e,this.audio.started&&this.audio.setMood(e,e==="lair"?.9:.6)}_updateContinueButton(){const e=document.getElementById("btn-continue");e&&e.classList.toggle("hidden",!this._savedGame()),this._shiftTitleMenu()}_shiftTitleMenu(){const e=!!this._savedGame();document.querySelectorAll(".title-menu .dyn").forEach((n,s)=>{n.textContent=String((e?4:3)+s)})}_showTitleScreen(){document.getElementById("title-screen")?.classList.remove("hidden")}_hideTitleScreen(){document.getElementById("title-screen")?.classList.add("hidden")}_hideAllScreens(){["title-screen","chapters-screen","settings-screen","pause-screen","ending-screen"].forEach(e=>document.getElementById(e)?.classList.add("hidden"))}_openChapters(e="title"){this._chaptersReturn=e,this._renderChapters(),document.getElementById("chapters-screen")?.classList.remove("hidden")}_renderChapters(){const e=document.getElementById("chapter-list");if(!e)return;const t=this._unlocked(),n=this._savedGame();e.innerHTML="",Io.forEach(s=>{const r=s.id==="chapter1"||t.includes(s.id),o=document.createElement("button");o.type="button",o.className=`chapter-row${r?"":" locked"}`,o.disabled=!r;const a=r?n?.chapter===s.id?"CONTINUE FROM HERE":"REPLAY CHAPTER":"LOCKED";o.innerHTML=`
        <span class="num">${s.numeral}</span>
        <span class="name">${s.name}<span class="sub">${this._chapterSub(s.id)}</span></span>
        <span class="state">${a}</span>`,r&&o.addEventListener("click",()=>this._startChapter(s.id)),e.appendChild(o)})}_chapterSub(e){return{chapter1:"THE HOUSE ON MAPLE STREET",chapter2:"3:06 AM — UPSTAIRS",chapter3:"THREE MILES OUTSIDE HAWKINS",chapter4:"SOMEWHERE UNDER HAWKINS",chapter5:"THE ROOM BETWEEN SECONDS"}[e]||""}_openSettings(e=!1){this._returnToPause=e,e&&document.getElementById("pause-screen")?.classList.add("hidden"),document.getElementById("settings-screen")?.classList.remove("hidden")}_closePanel(e){if(document.getElementById(e)?.classList.add("hidden"),e==="settings-screen"&&this._returnToPause&&this.paused){this._returnToPause=!1,this.ui.showPause({time:this.currentTime,flags:this.flags});return}this._returnToPause=!1,e==="chapters-screen"&&this._chaptersReturn==="ending"&&this._endingPayload&&(this.ui.showEnding(this._endingPayload),this._chaptersReturn=null)}async _startFresh(){await this._startRun("chapter1",Bi(),"chapter1")}async _continue(){const e=this._savedGame();if(!e){this._startFresh();return}await this._startRun(e.nodeId,{...Bi(),...e.flags},e.chapter)}async _startChapter(e){const t=this._savedGame(),n=t?{...Bi(),...t.flags}:{...this.flags};await this._startRun(e,n,e)}async _startRun(e,t,n){this.token++;const s=this.token;this.running=!0,this.paused=!1,this.ui.paused=!1,this.engine.paused=!1,this.ui.hidePause(),this.ui.hideEnding(),this.ui.cancelPending(),document.getElementById("chapter-card")?.classList.add("hidden"),this.flags={...Bi(),...this._cloneFlags(t)},this.chapter=n,this.currentTime="3:04 AM",this._endingPayload=null,this._chaptersReturn=null,this._returnToPause=!1,this.audio.resume();try{await this.audio.init()}catch{}if(this.audio.setEnabled(this._settings.audio),await this.ui.fadeOut(),s===this.token){this._hideAllScreens(),this._black=!0,this.ui.setHUDVisible(!0),this.ui.setSignal(0),this.ui.setHUD({chapter:"CHAPTER I",objective:"Find Dana.",time:this.currentTime});try{await this._runFrom(e,s)}catch(r){r?.name!=="Cancelled"&&(console.error("[THE HOLLOW CLOCK] run failed",r),this.ui.toast("THE SIGNAL BROKE — RETURNING TO TITLE",3e3),await xr(1600),await this._returnToTitle())}}}_cancelRun(){this.token++,this.running=!1,this.paused=!1,this.ui.paused=!1,this.engine.paused=!1,this.ui.cancelPending(),this.ui.hidePause()}async _runFrom(e,t){let n=e;for(;this.running&&t===this.token;){const s=Sc.nodes[n];if(!s)throw new Error(`Missing story node: ${n}`);this.currentNode=n;const r=await this._enterNode(n,s,t);if(t!==this.token||s.t==="end"||r===null)return;if(n=r||s.next,!n)throw new Error(`Story node has no continuation: ${this.currentNode}`)}}async _enterNode(e,t,n){if(t.set&&this._applySet(t.set),t.wrenWeak&&(this.flags.wrenWeak=!0),t.time&&(this.currentTime=t.time,this.ui.setHUD({time:t.time})),t.objective&&this.ui.setHUD({objective:t.objective}),t.signal!=null&&this.ui.setSignal(t.signal),t.shake&&this.engine.addShake(t.shake,.55),t.damage&&(this.flags.strain+=1,this.ui.damage(),this.audio.impact(!1)),t.sfx&&this._playSfx(t.sfx),t.flash){const s=t.flash==="blood"?13767711:16742970;this.engine.flash(1.5,s,.5),this.ui.flash(t.flash==="blood"?"blood":"fire",1)}switch(t.t){case"chapter":return this._enterChapter(e,t,n);case"line":return await this._prepareShot(t,n),n!==this.token?null:(this._applyNodeActions(e,t),await this.ui.say({who:t.who,text:t.text,narrator:!!t.narrator,voice:t.voice,signal:t.signal}),n===this.token?t.next:null);case"choice":{if(await this._prepareShot(t,n),n!==this.token)return null;const s=await this.ui.showChoices({prompt:t.prompt,options:t.options,timer:t.timer||12,defaultIndex:t.defaultIndex??0});if(s==null||n!==this.token)return null;const r=t.options[s]||t.options[0];return this._applySet(r.set||{}),this.audio.choose(),r.set?.method==="fire"&&this.engine.spec?.actions?.burnTether?.(),r.next}case"qte":{if(await this._prepareShot(t,n),n!==this.token)return null;e==="c2_qte_music"&&(this.engine.spec?.actions?.setRecordSpin?.(!0,7),this.audio.recordTone());const s=await this.ui.runQte(t,{assist:this._settings.assist});return s==null||n!==this.token?null:s?(this.audio.success(),t.success):(this.flags.fails+=1,this.flags.strain+=1,this._applySet(t.failSet||{},{additive:!0}),this.ui.damage(),this.engine.addShake(.5,.7),this.audio.fail(),t.fail)}case"explore":{if(await this._prepareShot(t,n),n!==this.token)return null;this.ui.setHUD({objective:t.objective||"Search."});const s=await this.ui.startExplore({hotspots:t.hotspots,required:t.required||3,prompt:t.prompt});return s==null||n!==this.token?null:(this.flags.found+=s.length,this.ui.toast(e==="c1_explore"?"THE HOUSE REMEMBERS":"THE HOLLOW REMEMBERS",2200),await xr(420),t.next)}case"scene":return await this._prepareShot(t,n),t.next;case"branch":return t.when(this.flags)?t.yes:t.no;case"fx":return t.next;case"end":return await this._finishEnding(t,n),null;default:throw new Error(`Unknown node type: ${t.t}`)}}async _enterChapter(e,t,n){if(this.chapter=e,this.chapterStartFlags=this._cloneFlags(this.flags),this._unlock(e),this._saveCheckpoint(e),this.currentTime=t.time||this.currentTime,this.ui.setHUD({chapter:`CHAPTER ${t.numeral} · ${t.title}`,objective:t.objective||"",time:this.currentTime}),this.ui.setSignal(0),this._black||await this.ui.fadeOut(),n!==this.token||(await this._changeScene(t.scene,t.shot,n),n!==this.token))return null;const s=this.ui.showChapterCard({numeral:t.numeral,title:t.title,sub:t.sub});return await this.ui.fadeIn({wait:0}),await s,this._black=!1,n!==this.token?(document.getElementById("chapter-card")?.classList.add("hidden"),null):(this.ui.setHUDVisible(!0),this.ui.toast(`CHAPTER ${t.numeral} — ${t.objective||""}`,2400),t.next)}async _prepareShot(e,t){if(e.scene&&e.scene!==this.engine.sceneId){if(await this.ui.fadeOut(),t!==this.token||(await this._changeScene(e.scene,e.shot,t),t!==this.token))return;await this.ui.fadeIn({wait:250});return}this.engine.spec&&e.shot&&e.shot!==this.engine.shotName&&this.engine.setShot(e.shot,{duration:1.2})}async _changeScene(e,t,n){e&&(await this.engine.setScene(e,{shot:t||null}),n===this.token&&(this._applySceneState(e),this._setMood(C_[e]||"house")))}_applySceneState(e){const t=this.engine.spec?.actions;t&&["quarry","hollow","lair"].includes(e)&&t.showSam?.(!!this.flags.broughtSam)}_applyNodeActions(e,t){const n=this.engine.spec?.actions;n&&((e==="c2_music_ok"||e==="c2_music_fail")&&(n.levitate?.(!0),n.setRecordSpin?.(!0,7)),e==="c2_10"&&(n.levitate?.(!1),n.setRecordSpin?.(!1,.35)),t.shot==="shatter"&&(n.shatter?.(),this.audio.stinger(),this.engine.addShake(1,1.2),this.ui.flash("blood",1.2)))}_applySet(e={},{additive:t=!1}={}){for(const[n,s]of Object.entries(e))t&&typeof s=="number"&&typeof this.flags[n]=="number"?this.flags[n]+=s:this.flags[n]=s}_playSfx(e){const t={clock_chime:()=>this.audio.clockChime(),whisper:()=>this.audio.whisper(),impact:()=>this.audio.impact(!0),gate:()=>this.audio.gate(),thunder:()=>this.audio.thunder(),creak:()=>this.audio.creak(),record:()=>this.audio.recordTone(),stinger:()=>this.audio.stinger()};(t[e]||t.creak)()}async _finishEnding(e,t){this.running=!1,this.ui.hideSubtitles(),this.ui.setHUDVisible(!1),this._clearSave(),await this.ui.fadeOut(),t===this.token&&(this.engine.paused=!0,this._setMood("ending"),this._endingPayload={number:e.number,title:e.title,text:e.text,epigraph:e.epigraph,stats:[{label:"THE DOOR",value:this.flags.entry==="loud"?"Kicked in":"Quiet"},{label:"THE RECORD",value:P_[this.flags.record]||"Static"},{label:"THE TETHER",value:L_[this.flags.method]||"Unknown"},{label:"CLOSE CALLS",value:String(this.flags.fails)}]},this.ui.showEnding(this._endingPayload),this.audio.clockChime(),await xr(350),await this.ui.fadeIn({wait:900}))}_pause(){!this.running||this.paused||(this.paused=!0,this.engine.paused=!0,this.ui.paused=!0,this.audio.suspend(),this.ui.showPause({time:this.currentTime,flags:this.flags}))}_resume(){this.paused&&(this.paused=!1,this.engine.paused=!1,this.ui.paused=!1,this.audio.resume(),this.ui.hidePause())}async _restartChapter(){const e=Io.find(t=>t.id===this.chapter)||Io[0];this._cancelRun(),document.getElementById("chapter-card")?.classList.add("hidden"),await this._startRun(e.id,this.chapterStartFlags,e.id)}async _quitToTitle(){this._cancelRun(),document.getElementById("chapter-card")?.classList.add("hidden"),await this._returnToTitle()}async _returnToTitle(){this._cancelRun(),this._hideAllScreens(),await this.ui.fadeOut(),this.engine.paused=!1,await this.engine.setScene("exterior",{shot:"title"}),this.engine.paused=!1,this.ui.setHUDVisible(!1),this.ui.hideSubtitles(),this.ui.setSignal(0),this._setMood("title"),this._updateContinueButton(),this._renderChapters(),this._showTitleScreen(),await this.ui.fadeIn({wait:900})}}class U_{constructor(){this.ctx=null,this.started=!1,this.enabled=!0,this.mood="title",this.intensity=.5,this.nextArp=0,this.scheduler=null,this.heartTimer=null,this.heartBpm=64,this.clockTimer=null,this.crackleTimer=null,this._drone=null,this._moodTargets={gain:.34,cutoff:420,detune:0}}async init(){if(this.started){this.ctx?.state==="suspended"&&await this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;this.ctx=t,this.started=!0,this.master=t.createGain(),this.master.gain.value=this.enabled?.85:0;const n=t.createDynamicsCompressor();n.threshold.value=-16,n.knee.value=20,n.ratio.value=3,n.attack.value=.006,n.release.value=.25,this.master.connect(n),n.connect(t.destination),this.reverb=t.createConvolver(),this.reverb.buffer=this._makeImpulse(3.4,2.6),this.reverbGain=t.createGain(),this.reverbGain.gain.value=.34,this.reverb.connect(this.reverbGain),this.reverbGain.connect(this.master),this.delay=t.createDelay(1.2),this.delay.delayTime.value=.34,this.delayFb=t.createGain(),this.delayFb.gain.value=.32,this.delayFilter=t.createBiquadFilter(),this.delayFilter.type="lowpass",this.delayFilter.frequency.value=1400,this.delay.connect(this.delayFilter),this.delayFilter.connect(this.delayFb),this.delayFb.connect(this.delay),this.delayGain=t.createGain(),this.delayGain.gain.value=.18,this.delayFilter.connect(this.delayGain),this.delayGain.connect(this.master),this.delayGain.connect(this.reverb),this.noiseBuffer=this._makeNoise(4,!0),this._buildDrone(),this._buildWind(),this.startScheduler(),this.setMood("title")}_makeImpulse(e,t){const n=this.ctx.sampleRate,s=Math.floor(n*e),r=this.ctx.createBuffer(2,s,n);for(let o=0;o<2;o++){const a=r.getChannelData(o);for(let l=0;l<s;l++){const c=l/s;a[l]=(Math.random()*2-1)*Math.pow(1-c,t)*(l<n*.02?.4:1)}}return r}_makeNoise(e,t=!1){const n=this.ctx.sampleRate,s=Math.floor(n*e),r=this.ctx.createBuffer(t?2:1,s,n);for(let o=0;o<r.numberOfChannels;o++){const a=r.getChannelData(o);let l=0;for(let c=0;c<s;c++){const h=Math.random()*2-1;l=l*.86+h*.14,a[c]=l}}return r}_noiseSource(e=!1){const t=this.ctx.createBufferSource();return t.buffer=this.noiseBuffer,t.loop=e,t}_buildDrone(){const e=this.ctx,t=e.createGain();t.gain.value=0,this.droneGain=t;const n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=380,n.Q.value=3.2,this.droneFilter=n,n.connect(t),t.connect(this.master),t.connect(this.reverb),this.droneOscs=[];const s=[41.2,55,82.4,110],r=[.34,.24,.12,.05];s.forEach((l,c)=>{const h=e.createOscillator();h.type=c%2?"sawtooth":"sine",h.frequency.value=l;const u=e.createGain();u.gain.value=r[c],h.connect(u),u.connect(n),h.start(),this.droneOscs.push({osc:h,gain:u,base:l})});const o=e.createOscillator();o.frequency.value=.07;const a=e.createGain();a.gain.value=130,o.connect(a),a.connect(n.frequency),o.start(),this._drone={out:t,filter:n}}_buildWind(){const e=this.ctx,t=this._noiseSource(!0),n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=420,n.Q.value=.7;const s=e.createGain();s.gain.value=.055;const r=e.createStereoPanner();r.pan.value=0,t.connect(n),n.connect(s),s.connect(r),r.connect(this.master),r.connect(this.reverb),t.start(),this.wind={src:t,bp:n,g:s,pan:r};const o=e.createOscillator();o.frequency.value=.045;const a=e.createGain();a.gain.value=260,o.connect(a),a.connect(n.frequency),o.start();const l=e.createOscillator();l.frequency.value=.021;const c=e.createGain();c.gain.value=.7,l.connect(c),c.connect(r.pan),l.start()}setEnabled(e){if(this.enabled=e,!this.ctx)return;const t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.linearRampToValueAtTime(e?.85:0,t+.35)}suspend(){this.ctx?.suspend()}resume(){this.ctx?.resume()}setMood(e,t=.5){if(this.mood=e,this.intensity=t,!this.ctx)return;const n=this.ctx.currentTime,s={title:{gain:.3,cutoff:300,detune:-8,arp:!1,arpRate:.46,wind:.05,notes:[0,7,3,10],base:55},house:{gain:.28,cutoff:330,detune:4,arp:!1,arpRate:.6,wind:.06,notes:[0,7,10],base:55},bedroom:{gain:.32,cutoff:520,detune:2,arp:!1,arpRate:.7,wind:.03,notes:[0,3,7,10],base:65.4},tension:{gain:.4,cutoff:700,detune:8,arp:!0,arpRate:.34,wind:.07,notes:[0,1,7,8,3],base:55},quarry:{gain:.38,cutoff:560,detune:-5,arp:!0,arpRate:.5,wind:.09,notes:[0,1,5,7],base:49},hollow:{gain:.46,cutoff:460,detune:12,arp:!0,arpRate:.42,wind:.11,notes:[0,1,6,7],base:41.2},lair:{gain:.5,cutoff:380,detune:-12,arp:!0,arpRate:.3,wind:.06,notes:[0,1,6,8],base:36.7},ending:{gain:.26,cutoff:620,detune:0,arp:!1,arpRate:.8,wind:.02,notes:[0,3,7],base:65.4},silence:{gain:0,cutoff:300,detune:0,arp:!1,arpRate:.6,wind:0,notes:[0],base:55}},r=s[e]||s.house;this._mood=r,this.droneGain.gain.cancelScheduledValues(n),this.droneGain.gain.linearRampToValueAtTime(r.gain,n+2.2),this.droneFilter.frequency.cancelScheduledValues(n),this.droneFilter.frequency.linearRampToValueAtTime(r.cutoff,n+2.6),this.droneOscs.forEach((o,a)=>{const l=[1,1,2,2][a]||1;o.osc.frequency.cancelScheduledValues(n),o.osc.frequency.linearRampToValueAtTime(r.base*l+(a===1?r.detune*.2:0),n+2.4)}),this.wind.g.gain.cancelScheduledValues(n),this.wind.g.gain.linearRampToValueAtTime(r.wind,n+2.4),r.arp?this.startClockTicks(e==="lair"||e==="hollow"):this.stopClockTicks()}startScheduler(){this.ctx&&(this.nextArp=this.ctx.currentTime+.1,this.scheduler&&clearInterval(this.scheduler),this.scheduler=setInterval(()=>this._schedule(),40))}_schedule(){if(!this.ctx||!this._mood?.arp||!this.enabled){this.ctx&&(this.nextArp=this.ctx.currentTime+.1);return}const e=this._mood,t=e.arpRate;for(;this.nextArp<this.ctx.currentTime+.12;){if((this.arpStep=(this.arpStep||0)+1)%2===0||Math.random()<.6){const s=Math.floor(Math.random()*e.notes.length),r=e.notes[s]+(Math.random()<.18?12:0),o=e.base*Math.pow(2,r/12)*4;this._pluck(o,t*.85,.045+Math.random()*.02)}this.nextArp+=t}}_pluck(e,t=.3,n=.05){const s=this.ctx,r=s.currentTime,o=s.createOscillator(),a=s.createOscillator();o.type="triangle",a.type="sine",o.frequency.value=e,a.frequency.value=e*2.01;const l=s.createGain();l.gain.setValueAtTime(0,r),l.gain.linearRampToValueAtTime(n,r+.008),l.gain.exponentialRampToValueAtTime(1e-4,r+t);const c=s.createBiquadFilter();c.type="lowpass",c.frequency.value=2600,o.connect(l),a.connect(l),l.connect(c),c.connect(this.master),c.connect(this.reverb),c.connect(this.delay),o.start(r),a.start(r),o.stop(r+t+.05),a.stop(r+t+.05)}noiseBurst({dur:e=.5,vol:t=.2,type:n="lowpass",freq:s=900,q:r=.8,sweep:o=null,dest:a=null}){if(!this.ctx||!this.enabled)return;const l=this.ctx,c=l.currentTime,h=this._noiseSource(),u=l.createBiquadFilter();u.type=n,u.frequency.setValueAtTime(s,c),u.Q.value=r,o&&u.frequency.exponentialRampToValueAtTime(Math.max(40,o),c+e);const f=l.createGain();f.gain.setValueAtTime(0,c),f.gain.linearRampToValueAtTime(t,c+.012),f.gain.exponentialRampToValueAtTime(1e-4,c+e),h.connect(u),u.connect(f),f.connect(a||this.master),f.connect(this.reverb),h.start(c),h.stop(c+e+.05)}thunder(){if(!this.ctx)return;this.noiseBurst({dur:2.6,vol:this.intensity>.7?.28:.18,type:"lowpass",freq:340,sweep:55,q:.5});const e=this.ctx,t=e.currentTime,n=e.createOscillator(),s=e.createGain();n.type="sine",n.frequency.setValueAtTime(58,t),n.frequency.exponentialRampToValueAtTime(24,t+2.2),s.gain.setValueAtTime(1e-4,t),s.gain.linearRampToValueAtTime(.22,t+.08),s.gain.exponentialRampToValueAtTime(1e-4,t+2.6),n.connect(s),s.connect(this.master),s.connect(this.reverb),n.start(t),n.stop(t+2.7)}impact(e=!1){if(!this.ctx||!this.enabled)return;const t=this.ctx,n=t.currentTime,s=t.createOscillator(),r=t.createGain();s.type="sine",s.frequency.setValueAtTime(e?130:95,n),s.frequency.exponentialRampToValueAtTime(34,n+.8),r.gain.setValueAtTime(e?.5:.3,n),r.gain.exponentialRampToValueAtTime(1e-4,n+.9),s.connect(r),r.connect(this.master),r.connect(this.reverb),s.start(n),s.stop(n+1),this.noiseBurst({dur:.3,vol:e?.3:.18,type:"bandpass",freq:1100,sweep:180,q:.6})}success(){this.ctx&&[880,1174.7,1760].forEach((e,t)=>{const n=this.ctx,s=n.currentTime+t*.045,r=n.createOscillator(),o=n.createGain();r.type="sine",r.frequency.value=e,o.gain.setValueAtTime(0,s),o.gain.linearRampToValueAtTime(.07-t*.015,s+.01),o.gain.exponentialRampToValueAtTime(1e-4,s+1.1),r.connect(o),o.connect(this.master),o.connect(this.reverb),r.start(s),r.stop(s+1.2)})}fail(){this.ctx&&([92,96.5,138].forEach((e,t)=>{const n=this.ctx,s=n.currentTime,r=n.createOscillator(),o=n.createGain();r.type=t===2?"square":"sawtooth",r.frequency.value=e,r.detune.value=t*9,o.gain.setValueAtTime(.001,s),o.gain.linearRampToValueAtTime(.08,s+.015),o.gain.exponentialRampToValueAtTime(1e-4,s+.7);const a=n.createBiquadFilter();a.type="lowpass",a.frequency.value=700,r.connect(a),a.connect(o),o.connect(this.master),o.connect(this.reverb),r.start(s),r.stop(s+.8)}),this.noiseBurst({dur:.2,vol:.12,type:"bandpass",freq:2400,q:.8}))}uiTick(){if(!this.ctx)return;const e=this.ctx,t=e.currentTime,n=e.createOscillator(),s=e.createGain();n.type="sine",n.frequency.value=1680,s.gain.setValueAtTime(.02,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.045),n.connect(s),s.connect(this.master),n.start(t),n.stop(t+.06)}choose(){if(!this.ctx)return;this.noiseBurst({dur:.4,vol:.08,type:"bandpass",freq:300,sweep:1600,q:.5});const e=this.ctx,t=e.currentTime,n=e.createOscillator(),s=e.createGain();n.type="triangle",n.frequency.value=220,s.gain.setValueAtTime(.001,t),s.gain.linearRampToValueAtTime(.05,t+.02),s.gain.exponentialRampToValueAtTime(1e-4,t+.5),n.connect(s),s.connect(this.master),s.connect(this.reverb),n.start(t),n.stop(t+.55)}clockChime(){if(!this.ctx)return;const e=196;[0,4,7,12].forEach((t,n)=>{const s=this.ctx,r=s.currentTime+n*.16,o=s.createOscillator(),a=s.createGain();o.type="sine",o.frequency.value=e*Math.pow(2,t/12),a.gain.setValueAtTime(1e-4,r),a.gain.linearRampToValueAtTime(.1,r+.01),a.gain.exponentialRampToValueAtTime(1e-4,r+2.2),o.connect(a),a.connect(this.master),a.connect(this.reverb),o.start(r),o.stop(r+2.3)})}whisper(){this.ctx&&(this.noiseBurst({dur:1.4,vol:.12,type:"bandpass",freq:700,sweep:1500,q:5}),this.noiseBurst({dur:.8,vol:.07,type:"bandpass",freq:1800,sweep:500,q:7}))}gate(){if(!this.ctx)return;this.noiseBurst({dur:2.4,vol:.24,type:"bandpass",freq:160,sweep:3200,q:.8});const e=this.ctx,t=e.currentTime;[55,110,220,330].forEach((n,s)=>{const r=e.createOscillator(),o=e.createGain();r.type="sine",r.frequency.setValueAtTime(n,t),r.frequency.exponentialRampToValueAtTime(n*2,t+2.2),o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(.04,t+.4),o.gain.exponentialRampToValueAtTime(1e-4,t+2.4),r.connect(o),o.connect(this.master),o.connect(this.reverb),r.start(t),r.stop(t+2.5)})}creak(){this.ctx&&this.noiseBurst({dur:1.1,vol:.06,type:"bandpass",freq:380,sweep:900,q:14})}tick(){if(!this.ctx||!this.enabled)return;const e=this.ctx,t=e.currentTime,n=e.createOscillator(),s=e.createGain();n.type="square",n.frequency.value=2100,s.gain.setValueAtTime(.018,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.02),n.connect(s),s.connect(this.master),n.start(t),n.stop(t+.03),this.noiseBurst({dur:.03,vol:.05,type:"highpass",freq:3e3})}startHeartbeat(e=78){if(!this.ctx)return;this.heartBpm=e,this.heartTimer&&clearInterval(this.heartTimer);const t=6e4/e,n=()=>{this.enabled&&(this._thump(0),this._thump(.16,.55))};n(),this.heartTimer=setInterval(n,t)}stopHeartbeat(){this.heartTimer&&clearInterval(this.heartTimer),this.heartTimer=null}_thump(e=0,t=1){if(!this.ctx)return;const n=this.ctx,s=n.currentTime+e,r=n.createOscillator(),o=n.createGain();r.type="sine",r.frequency.setValueAtTime(62,s),r.frequency.exponentialRampToValueAtTime(30,s+.22),o.gain.setValueAtTime(1e-4,s),o.gain.linearRampToValueAtTime(.18*t,s+.012),o.gain.exponentialRampToValueAtTime(1e-4,s+.25),r.connect(o),o.connect(this.master),r.start(s),r.stop(s+.3)}startClockTicks(e=!0){this.clockTimer&&clearInterval(this.clockTimer),this.clockTimer=null,e&&(this.clockTimer=setInterval(()=>this.tick(),1e3))}stopClockTicks(){this.clockTimer&&clearInterval(this.clockTimer),this.clockTimer=null}startCrackle(){this.ctx&&(this.crackleTimer&&clearInterval(this.crackleTimer),this.crackleTimer=setInterval(()=>{if(this.enabled&&Math.random()<.5){const e=.008+Math.random()*.018;this.noiseBurst({dur:.02+Math.random()*.03,vol:e,type:"highpass",freq:2200+Math.random()*2400})}},170))}stopCrackle(){this.crackleTimer&&clearInterval(this.crackleTimer),this.crackleTimer=null}recordTone(){if(!this.ctx)return;const e=this.ctx,t=e.currentTime;[261.6,329.6,392,523.2].forEach((n,s)=>{const r=e.createOscillator(),o=e.createGain();r.type=s===0?"triangle":"sine",r.frequency.value=n,o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(.035,t+.2),o.gain.setValueAtTime(.035,t+1.2),o.gain.exponentialRampToValueAtTime(1e-4,t+3.6),r.connect(o),o.connect(this.master),o.connect(this.reverb),r.start(t),r.stop(t+3.7)})}stinger(){if(!this.ctx)return;this.impact(!0),this.noiseBurst({dur:.9,vol:.2,type:"highpass",freq:1800,sweep:600,q:.7});const e=this.ctx,t=e.currentTime,n=e.createOscillator(),s=e.createGain();n.type="sawtooth",n.frequency.setValueAtTime(1400,t),n.frequency.exponentialRampToValueAtTime(180,t+.5),s.gain.setValueAtTime(1e-4,t),s.gain.linearRampToValueAtTime(.1,t+.01),s.gain.exponentialRampToValueAtTime(1e-4,t+.6),n.connect(s),s.connect(this.master),s.connect(this.reverb),n.start(t),n.stop(t+.7)}}const bc=document.getElementById("load-fill"),Ms=document.getElementById("load-status"),N_=document.getElementById("loading");function Ar(i,e){bc&&(bc.style.width=`${Math.round(i*100)}%`),e&&Ms&&(Ms.textContent=`${e}…`)}async function F_(){Ar(.05,"WAKING THE HOUSE");const i=document.getElementById("stage");if(!i)throw new Error("Stage canvas missing");b_(Xt());const e=new U_,t=new R_(e),n=new T_(i),s=new D_({engine:n,ui:t,audio:e});await s.boot((r,o)=>Ar(r,o)),Ar(1,"THE CLOCK IS COUNTING DOWN"),await new Promise(r=>setTimeout(r,220)),N_?.classList.add("done"),t.el.fade.classList.remove("visible"),t.el.fade.classList.add("clear"),window.__HOLLOW_CLOCK__={engine:n,ui:t,game:s,audio:e}}F_().catch(i=>{console.error("[THE HOLLOW CLOCK] boot failed",i),Ar(1,"THE SIGNAL BROKE"),Ms&&(Ms.textContent="THE SIGNAL BROKE — SEE CONSOLE",Ms.style.color="#ff3b2f")});
