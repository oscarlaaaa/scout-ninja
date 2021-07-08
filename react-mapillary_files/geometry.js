google.maps.__gjsload__('geometry', function(_){var gw=function(a,b){return Math.abs(_.Ge(b-a,-180,180))},hw=function(a,b,c,d,e){if(!d){c=gw(a.lng(),c)/gw(a.lng(),b.lng());if(!e)return e=Math.sin(_.Fc(a.lat())),e=Math.log((1+e)/(1-e))/2,b=Math.sin(_.Fc(b.lat())),_.Gc(2*Math.atan(Math.exp(e+c*(Math.log((1+b)/(1-b))/2-e)))-Math.PI/2);a=e.fromLatLngToPoint(a);b=e.fromLatLngToPoint(b);return e.fromPointToLatLng(new _.O(a.x+c*(b.x-a.x),a.y+c*(b.y-a.y))).lat()}e=_.Fc(a.lat());a=_.Fc(a.lng());d=_.Fc(b.lat());b=_.Fc(b.lng());c=_.Fc(c);return _.Ge(_.Gc(Math.atan2(Math.sin(e)*
Math.cos(d)*Math.sin(c-b)-Math.sin(d)*Math.cos(e)*Math.sin(c-a),Math.cos(e)*Math.cos(d)*Math.sin(a-b))),-90,90)},iw=function(){},jw={containsLocation:function(a,b){var c=_.Ge(a.lng(),-180,180),d=!!b.get("geodesic"),e=b.get("latLngs"),f=b.get("map");f=!d&&f?f.getProjection():null;for(var g=!1,h=0,k=e.getLength();h<k;++h)for(var l=e.getAt(h),m=0,q=l.getLength();m<q;++m){var r=l.getAt(m),u=l.getAt((m+1)%q),v=_.Ge(r.lng(),-180,180),x=_.Ge(u.lng(),-180,180),w=Math.max(v,x);v=Math.min(v,x);(180<w-v?c>=
w||c<v:c<w&&c>=v)&&hw(r,u,c,d,f)<a.lat()&&(g=!g)}return g||jw.isLocationOnEdge(a,b)}};_.Pa("module$exports$PolyGeometry.containsLocation",jw.containsLocation);
jw.isLocationOnEdge=function(a,b,c){c=c||1E-9;var d=_.Ge(a.lng(),-180,180),e=b instanceof _.vj,f=!!b.get("geodesic"),g=b.get("latLngs");b=b.get("map");b=!f&&b?b.getProjection():null;for(var h=0,k=g.getLength();h<k;++h)for(var l=g.getAt(h),m=l.getLength(),q=e?m:m-1,r=0;r<q;++r){var u=l.getAt(r),v=l.getAt((r+1)%m),x=_.Ge(u.lng(),-180,180),w=_.Ge(v.lng(),-180,180),F=Math.max(x,w),G=Math.min(x,w);if(x=1E-9>=Math.abs(_.Ge(x-w,-180,180))&&(Math.abs(_.Ge(x-d,-180,180))<=c||Math.abs(_.Ge(w-d,-180,180))<=
c)){x=a.lat();w=Math.min(u.lat(),v.lat())-c;var L=Math.max(u.lat(),v.lat())+c;x=x>=w&&x<=L}if(x)return!0;if(180<F-G?d+c>=F||d-c<=G:d+c>=G&&d-c<=F)if(u=hw(u,v,d,f,b),Math.abs(u-a.lat())<c)return!0}return!1};_.Pa("module$exports$PolyGeometry.isLocationOnEdge",jw.isLocationOnEdge);var kw={},lw={},mw;
for(mw in jw)lw.Ge=mw,kw[lw.Ge]=function(a){return function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];console.warn('Invoking "PolyGeometry.'+a.Ge+'()" is not supported, use "google.maps.geometry.poly.'+a.Ge+'()" instead.');_.P(kw,"Lagpg");return jw[a.Ge].apply(jw,_.la(c))}}(lw),lw={Ge:lw.Ge};_.z.PolyGeometry=kw;var nw={computeHeading:function(a,b){var c=_.gf(a),d=_.hf(a);a=_.gf(b);b=_.hf(b)-d;return _.Ge(_.Gc(Math.atan2(Math.sin(b)*Math.cos(a),Math.cos(c)*Math.sin(a)-Math.sin(c)*Math.cos(a)*Math.cos(b))),-180,180)}};_.Pa("module$exports$Spherical.computeHeading",nw.computeHeading);
nw.computeOffset=function(a,b,c,d){b/=d||6378137;c=_.Fc(c);var e=_.gf(a);a=_.hf(a);d=Math.cos(b);b=Math.sin(b);var f=Math.sin(e);e=Math.cos(e);var g=d*f+b*e*Math.cos(c);return new _.J(_.Gc(Math.asin(g)),_.Gc(a+Math.atan2(b*e*Math.sin(c),d-f*g)))};_.Pa("module$exports$Spherical.computeOffset",nw.computeOffset);
nw.computeOffsetOrigin=function(a,b,c,d){c=_.Fc(c);b/=d||6378137;d=Math.cos(b);var e=Math.sin(b)*Math.cos(c);b=Math.sin(b)*Math.sin(c);c=Math.sin(_.gf(a));var f=e*e*d*d+d*d*d*d-d*d*c*c;if(0>f)return null;var g=e*c+Math.sqrt(f);g/=d*d+e*e;var h=(c-e*g)/d;g=Math.atan2(h,g);if(g<-Math.PI/2||g>Math.PI/2)g=e*c-Math.sqrt(f),g=Math.atan2(h,g/(d*d+e*e));if(g<-Math.PI/2||g>Math.PI/2)return null;a=_.hf(a)-Math.atan2(b,d*Math.cos(g)-e*Math.sin(g));return new _.J(_.Gc(g),_.Gc(a))};
_.Pa("module$exports$Spherical.computeOffsetOrigin",nw.computeOffsetOrigin);nw.interpolate=function(a,b,c){var d=_.gf(a),e=_.hf(a),f=_.gf(b),g=_.hf(b),h=Math.cos(d),k=Math.cos(f);b=nw.lh(a,b);var l=Math.sin(b);if(1E-6>l)return new _.J(a.lat(),a.lng());a=Math.sin((1-c)*b)/l;c=Math.sin(c*b)/l;b=a*h*Math.cos(e)+c*k*Math.cos(g);e=a*h*Math.sin(e)+c*k*Math.sin(g);return new _.J(_.Gc(Math.atan2(a*Math.sin(d)+c*Math.sin(f),Math.sqrt(b*b+e*e))),_.Gc(Math.atan2(e,b)))};
_.Pa("module$exports$Spherical.interpolate",nw.interpolate);nw.lh=function(a,b){var c=_.gf(a);a=_.hf(a);var d=_.gf(b);b=_.hf(b);return 2*Math.asin(Math.sqrt(Math.pow(Math.sin((c-d)/2),2)+Math.cos(c)*Math.cos(d)*Math.pow(Math.sin((a-b)/2),2)))};nw.computeDistanceBetween=function(a,b,c){c=c||6378137;return nw.lh(a,b)*c};_.Pa("module$exports$Spherical.computeDistanceBetween",nw.computeDistanceBetween);
nw.computeLength=function(a,b){b=b||6378137;var c=0;a instanceof _.ai&&(a=a.getArray());for(var d=0,e=a.length-1;d<e;++d)c+=nw.computeDistanceBetween(a[d],a[d+1],b);return c};_.Pa("module$exports$Spherical.computeLength",nw.computeLength);nw.computeArea=function(a,b){return Math.abs(nw.computeSignedArea(a,b))};_.Pa("module$exports$Spherical.computeArea",nw.computeArea);
nw.computeSignedArea=function(a,b){b=b||6378137;a instanceof _.ai&&(a=a.getArray());for(var c=a[0],d=0,e=1,f=a.length-1;e<f;++e)d+=nw.sm(c,a[e],a[e+1]);return d*b*b};_.Pa("module$exports$Spherical.computeSignedArea",nw.computeSignedArea);nw.sm=function(a,b,c){return nw.tm(a,b,c)*nw.Dn(a,b,c)};nw.tm=function(a,b,c){var d=[a,b,c,a];a=[];for(c=b=0;3>c;++c)a[c]=nw.lh(d[c],d[c+1]),b+=a[c];b/=2;d=Math.tan(b/2);for(c=0;3>c;++c)d*=Math.tan((b-a[c])/2);return 4*Math.atan(Math.sqrt(Math.abs(d)))};
nw.Dn=function(a,b,c){a=[a,b,c];b=[];for(c=0;3>c;++c){var d=a[c],e=_.gf(d);d=_.hf(d);var f=b[c]=[];f[0]=Math.cos(e)*Math.cos(d);f[1]=Math.cos(e)*Math.sin(d);f[2]=Math.sin(e)}return 0<b[0][0]*b[1][1]*b[2][2]+b[1][0]*b[2][1]*b[0][2]+b[2][0]*b[0][1]*b[1][2]-b[0][0]*b[2][1]*b[1][2]-b[1][0]*b[0][1]*b[2][2]-b[2][0]*b[1][1]*b[0][2]?1:-1};var ow={},pw={},qw;
for(qw in nw)pw.Ee=qw,ow[pw.Ee]=function(a){return function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];console.warn('Invoking "Spherical.'+a.Ee+'()" is not supported, use "google.maps.geometry.spherical.'+a.Ee+'()" instead.');_.P(ow,"Lags");return nw[a.Ee].apply(nw,_.la(c))}}(pw),pw={Ee:pw.Ee};_.z.Spherical=ow;var rw={decodePath:function(a){for(var b=_.Ce(a),c=Array(Math.floor(a.length/2)),d=0,e=0,f=0,g=0;d<b;++g){var h=1,k=0;do{var l=a.charCodeAt(d++)-63-1;h+=l<<k;k+=5}while(31<=l);e+=h&1?~(h>>1):h>>1;h=1;k=0;do l=a.charCodeAt(d++)-63-1,h+=l<<k,k+=5;while(31<=l);f+=h&1?~(h>>1):h>>1;c[g]=new _.J(1E-5*e,1E-5*f,!0)}c.length=g;return c}};_.Pa("module$exports$PolylineCodec.decodePath",rw.decodePath);
rw.encodePath=function(a){a instanceof _.ai&&(a=a.getArray());return rw.Vo(a,function(b){return[Math.round(1E5*b.lat()),Math.round(1E5*b.lng())]})};_.Pa("module$exports$PolylineCodec.encodePath",rw.encodePath);rw.Vo=function(a,b){for(var c=[],d=[0,0],e,f=0,g=_.Ce(a);f<g;++f)e=b?b(a[f]):a[f],rw.mk(e[0]-d[0],c),rw.mk(e[1]-d[1],c),d=e;return c.join("")};rw.mk=function(a,b){rw.Wo(0>a?~(a<<1):a<<1,b)};
rw.Wo=function(a,b){for(;32<=a;)b.push(String.fromCharCode((32|a&31)+63)),a>>=5;b.push(String.fromCharCode(a+63))};var sw={},tw={},uw;for(uw in rw)tw.Fe=uw,sw[tw.Fe]=function(a){return function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];console.warn('Invoking "PolylineCodec.'+a.Fe+'()" is not supported, use "google.maps.geometry.encoding.'+a.Fe+'()" instead.');_.P(sw,"Lagpc");return rw[a.Fe].apply(rw,_.la(c))}}(tw),tw={Fe:tw.Fe};_.z.PolylineCodec=sw;_.z.google.maps.geometry={encoding:rw,spherical:nw,poly:jw};_.n=iw.prototype;_.n.decodePath=rw.decodePath;_.n.encodePath=rw.encodePath;_.n.computeDistanceBetween=nw.computeDistanceBetween;_.n.interpolate=nw.interpolate;_.n.computeHeading=nw.computeHeading;_.n.computeOffset=nw.computeOffset;_.n.computeOffsetOrigin=nw.computeOffsetOrigin;_.If("geometry",new iw);});
