/*!
Copyright (C) 2020 MrTang <olddrivero.king@qq.com>
*/
;var jsob_v="jsob.v0.1.6";(function(l,m,o,q,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD,bE,bF,bG,bH,bI,bJ,bK,bL,bM,bN,bO,bP,bQ,bR,bS,bT,bU,bV,bW,bX,bY,bZ,ca,cb,cc,cd,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,cu,cv,cw,cx,cy,cz,cA,cB,cC,cD,cE,cF,cG,cH,cI,cJ,cK,cL,cM,cN,cO,cP,cQ,cR,cS,cT,cU,cV,cW,cX,cY,cZ,da,db,dc,dd,de,df,dg,dh,di,dj,dk,dl,dm,dn,do,dp,dq,dr,ds,dt,du,dv,dw,dx,dy,dz,dA,dB,dC,dD,dE,dF,dG,dH,dI){if("‮"!==dx){return}var dJ=arguments;for(var dK=dF;dK<dy;dK++){if(typeof dJ[dK]!==dz){continue}dJ[dK]=dJ[dK][dA](dB,function(a){return{'\u200c':dF,'\u200d':dG}[a]})[dA](dC,function(a){return dD[dE](dI(a,dH))})}var dL=(function(){var j={trace:function trace(){},yy:{},symbols_:{"error":l,"JSONString":m,"STRING":o,"JSONNumber":q,"NUMBER":s,"JSONNullLiteral":t,"NULL":u,"JSONBooleanLiteral":v,"TRUE":w,"FALSE":x,"JSONText":y,"JSONValue":z,"EOF":A,"JSONObject":B,"JSONArray":C,"{":D,"}":E,"JSONMemberList":F,"JSONMember":G,":":H,",":I,"[":J,"]":K,"JSONElementList":L,"$accept":M,"$end":N},terminals_:{2:O,4:P,6:Q,8:R,10:S,11:T,14:U,17:V,18:W,21:X,22:Y,23:Z,24:ba},productions_:[M,[m,N],[q,N],[t,N],[v,N],[v,N],[y,l],[z,N],[z,N],[z,N],[z,N],[z,N],[z,N],[B,l],[B,m],[G,m],[F,N],[F,m],[C,l],[C,m],[L,N],[L,m]],performAction:function anonymous(a,b,c,d,e,f,g){var h=f[bb]-N;switch(e){case N:this[bc]=a[bd](be,bc+bf)[bd](bg,bh)[bd](bi,bj)[bd](bk,bl)[bd](bm,bn)[bd](bo,bp)[bd](bq,br);break;case l:this[bc]=Number(a);break;case m:this[bc]=bs;break;case o:this[bc]=bt;break;case q:this[bc]=bu;break;case s:return this[bc]=f[h-N];break;case z:this[bc]={};break;case A:this[bc]=f[h-N];break;case B:this[bc]=[f[h-l],f[h]];break;case C:this[bc]={};this[bc][f[h][M]]=f[h][N];break;case D:this[bc]=f[h-l];f[h-l][f[h][M]]=f[h][N];break;case E:this[bc]=[];break;case F:this[bc]=f[h-N];break;case G:this[bc]=[f[h]];break;case H:this[bc]=f[h-l];f[h-l][bv](f[h]);break}},table:[{3:q,4:[N,y],5:s,6:[N,z],7:m,8:[N,v],9:o,10:[N,w],11:[N,x],12:N,13:l,15:t,16:u,17:[N,A],23:[N,B]},{1:[m]},{14:[N,C]},{14:[l,t],18:[l,t],22:[l,t],24:[l,t]},{14:[l,u],18:[l,u],22:[l,u],24:[l,u]},{14:[l,v],18:[l,v],22:[l,v],24:[l,v]},{14:[l,w],18:[l,w],22:[l,w],24:[l,w]},{14:[l,x],18:[l,x],22:[l,x],24:[l,x]},{14:[l,y],18:[l,y],22:[l,y],24:[l,y]},{14:[l,m],18:[l,m],22:[l,m],24:[l,m]},{14:[l,o],18:[l,o],22:[l,o],24:[l,o]},{14:[l,q],18:[l,q],22:[l,q],24:[l,q]},{14:[l,N],18:[l,N],21:[l,N],22:[l,N],24:[l,N]},{14:[l,l],18:[l,l],22:[l,l],24:[l,l]},{3:G,4:[N,y],18:[N,D],19:E,20:F},{3:q,4:[N,y],5:s,6:[N,z],7:m,8:[N,v],9:o,10:[N,w],11:[N,x],13:J,15:t,16:u,17:[N,A],23:[N,B],24:[N,H],25:I},{1:[l,s]},{14:[l,z],18:[l,z],22:[l,z],24:[l,z]},{18:[N,K],22:[N,L]},{18:[l,C],22:[l,C]},{21:[N,bw]},{14:[l,E],18:[l,E],22:[l,E],24:[l,E]},{22:[N,bx],24:[N,by]},{22:[l,G],24:[l,G]},{14:[l,A],18:[l,A],22:[l,A],24:[l,A]},{3:G,4:[N,y],20:bz},{3:q,4:[N,y],5:s,6:[N,z],7:m,8:[N,v],9:o,10:[N,w],11:[N,x],13:bA,15:t,16:u,17:[N,A],23:[N,B]},{14:[l,F],18:[l,F],22:[l,F],24:[l,F]},{3:q,4:[N,y],5:s,6:[N,z],7:m,8:[N,v],9:o,10:[N,w],11:[N,x],13:bB,15:t,16:u,17:[N,A],23:[N,B]},{18:[l,D],22:[l,D]},{18:[l,B],22:[l,B]},{22:[l,H],24:[l,H]}],defaultActions:{16:[l,s]},parseError:function parseError(a,b){throw new Error(a);},parse:function parse(b){var c=this,stack=[M],vstack=[bs],lstack=[],table=this[bC],yytext=bD,yylineno=M,yyleng=M,recovering=M,TERROR=l,EOF=N;this[bF][bE](b);this[bF][bG]=this[bG];this[bG][bF]=this[bF];if(typeof this[bF][bH]==bI)this[bF][bH]={};var d=this[bF][bH];lstack[bv](d);if(typeof this[bG][bJ]===bK)this[bJ]=this[bG][bJ];function popStack(n){stack[bb]=stack[bb]-l*n;vstack[bb]=vstack[bb]-n;lstack[bb]=lstack[bb]-n}function lex(){var a;a=c[bF][bL]()||N;if(typeof a!==bM){a=c[bN][a]||a}return a}var e,preErrorSymbol,state,action,a,r,yyval={},p,len,newState,expected;while(bt){state=stack[stack[bb]-N];if(this[bO][state]){action=this[bO][state]}else{if(e==bs)e=lex();action=table[state]&&table[state][e]}_handle_error:if(typeof action===bI||!action[bb]||!action[M]){if(!recovering){expected=[];for(p in table[state])if(this[bP][p]&&p>l){expected[bv](bQ+this[bP][p]+bQ)}var f=bD;if(this[bF][bR]){f=bS+(yylineno+N)+bT+this[bF][bR]()+bU+expected[bV](bW)+bX+this[bP][e]+bQ}else{f=bS+(yylineno+N)+bY+(e==N?bZ:(bQ+(this[bP][e]||e)+bQ))}this[bJ](f,{text:this[bF][ca],token:this[bP][e]||e,line:this[bF][cb],loc:d,expected:expected})}if(recovering==m){if(e==EOF){throw new Error(f||cc);}yyleng=this[bF][cd];yytext=this[bF][ce];yylineno=this[bF][cb];d=this[bF][bH];e=lex()}while(N){if((TERROR[cf]())in table[state]){break}if(state==M){throw new Error(f||cc);}popStack(N);state=stack[stack[bb]-N]}preErrorSymbol=e;e=TERROR;state=stack[stack[bb]-N];action=table[state]&&table[state][TERROR];recovering=m}if(action[M]instanceof Array&&action[bb]>N){throw new Error(cg+state+ch+e);}switch(action[M]){case N:stack[bv](e);vstack[bv](this[bF][ce]);lstack[bv](this[bF][bH]);stack[bv](action[N]);e=bs;if(!preErrorSymbol){yyleng=this[bF][cd];yytext=this[bF][ce];yylineno=this[bF][cb];d=this[bF][bH];if(recovering>M)recovering--}else{e=preErrorSymbol;preErrorSymbol=bs}break;case l:len=this[ci][action[N]][N];yyval[bc]=vstack[vstack[bb]-len];yyval[cj]={first_line:lstack[lstack[bb]-(len||N)][ck],last_line:lstack[lstack[bb]-N][cl],first_column:lstack[lstack[bb]-(len||N)][cm],last_column:lstack[lstack[bb]-N][cn]};r=this[cp][co](yyval,yytext,yyleng,yylineno,this[bG],action[N],vstack,lstack);if(typeof r!==bI){return r}if(len){stack=stack[cq](M,-N*len*l);vstack=vstack[cq](M,-N*len);lstack=lstack[cq](M,-N*len)}stack[bv](this[ci][action[N]][M]);vstack[bv](yyval[bc]);lstack[bv](yyval[cj]);newState=table[stack[stack[bb]-l]][stack[stack[bb]-N]];stack[bv](newState);break;case m:return bt}}return bt}};var k=(function(){var f=({EOF:N,parseError:function parseError(a,b){if(this[bG][bJ]){this[bG][bJ](a,b)}else{throw new Error(a);}},setInput:function(a){this[cr]=a;this[cs]=this[ct]=this[cu]=bu;this[cb]=this[cd]=M;this[ce]=this[cv]=this[ca]=bD;this[cw]=[cx];this[bH]={first_line:N,first_column:M,last_line:N,last_column:M};return this},input:function(){var a=this[cr][M];this[ce]+=a;this[cd]++;this[ca]+=a;this[cv]+=a;var b=a[ca](cy);if(b)this[cb]++;this[cr]=this[cr][cq](N);return a},unput:function(a){this[cr]=a+this[cr];return this},more:function(){this[cs]=bt;return this},less:function(n){this[cr]=this[ca][cq](n)+this[cr]},pastInput:function(){var a=this[cv][cz](M,this[cv][bb]-this[ca][bb]);return(a[bb]>G?cA:bD)+a[cz](-G)[bd](cB,bD)},upcomingInput:function(){var a=this[ca];if(a[bb]<G){a+=this[cr][cz](M,G-a[bb])}return(a[cz](M,G)+(a[bb]>G?cA:bD))[bd](cB,bD)},showPosition:function(){var a=this[cC]();var c=new Array(a[bb]+N)[bV](cD);return a+this[cE]()+bh+c+cF},next:function(){if(this[cu]){return this[U]}if(!this[cr])this[cu]=bt;var a,match,tempMatch,index,col,lines;if(!this[cs]){this[ce]=bD;this[ca]=bD}var b=this[cG]();for(var i=M;i<b[bb];i++){tempMatch=this[cr][ca](this[cH][b[i]]);if(tempMatch&&(!match||tempMatch[M][bb]>match[M][bb])){match=tempMatch;index=i;if(!this[cJ][cI])break}}if(match){lines=match[M][ca](cK);if(lines)this[cb]+=lines[bb];this[bH]={first_line:this[bH][cl],last_line:this[cb]+N,first_column:this[bH][cn],last_column:lines?lines[lines[bb]-N][bb]-N:this[bH][cn]+match[M][bb]}this[ce]+=match[M];this[ca]+=match[M];this[cd]=this[ce][bb];this[cs]=bu;this[cr]=this[cr][cq](match[M][bb]);this[cv]+=match[M];a=this[cp][co](this,this[bG],this,b[index],this[cw][this[cw][bb]-N]);if(this[cu]&&this[cr])this[cu]=bu;if(a)return a;else return}if(this[cr]===bD){return this[U]}else{this[bJ](cL+(this[cb]+N)+cM+this[bR](),{text:bD,token:bs,line:this[cb]})}},lex:function lex(){var r=this[cN]();if(typeof r!==bI){return r}else{return this[bL]()}},begin:function begin(a){this[cw][bv](a)},popState:function popState(){return this[cw][cO]()},_currentRules:function _currentRules(){return this[cP][this[cw][this[cw][bb]-N]][cH]},topState:function(){return this[cw][this[cw][bb]-l]},pushState:function begin(a){this[cQ](a)}});f[cJ]={};f[cp]=function anonymous(a,b,c,d){var e=d switch(c){case M:break;case N:return s break;case l:b[ce]=b[ce][cz](N,b[cd]-l);return o break;case m:return D break;case o:return E break;case q:return J break;case s:return K break;case t:return I break;case u:return H break;case v:return w break;case w:return x break;case x:return u break;case y:return A break;case z:return cR break}};f[cH]=[cS,cT,cU,cV,cW,cX,cY,cZ,da,db,dc,dd,de,df];f[cP]={"INITIAL":{"rules":[M,N,l,m,o,q,s,t,u,v,w,x,y,z],"inclusive":bt}};return f})()j[bF]=k;return j})();if(typeof require!==bI&&typeof exports!==bI){exports[dg]=dL;exports[dh]=function(){return dL[dh][di](dL,arguments)}exports[dj]=function commonjsMain(a){if(!a[N])throw new Error(dk+a[M]+dl);if(typeof process!==bI){var b=require(dn)[dm](require(do)[bV](process[dp](),a[N]),dq)}else{var c=require(dr)[do](require(dr)[dp]());var b=c[bV](a[N])[ds]({charset:dt})}return exports[dg][dh](b)}if(typeof module!==bI&&require[dj]===module){exports[dj](typeof process!==bI?process[du][cq](N):require(dw)[dv])}}})(2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,1,"‍‍‌‌‍‌‍‍‍‍‌‌‍‌‍‍‍‌‌‍‌‍‍‌‍‍‍‍‍‍‍‌‌‍‌","‍‌‍‌‌‍‍‍‌‍‌‍‌‌‍‌‍‌‌‍‌‍‌‌‍‌‌‍‍‌‌‍‍‍‌‍‌‌‌‍‍‍","‍‌‌‍‍‍‌‍‌‍‌‍‌‍‍‌‌‍‍‌‍‍‌‌‌‌‍‌‍‌‌‌‍‌‍‍‌‍‌‌‍‌","‍‌‌‍‍‍‌‍‌‍‌‍‌‍‍‌‌‍‍‌‌‍‌‌‍‍‌‌","‍‌‍‌‍‌‌‍‌‍‌‌‍‌‍‌‍‌‍‌‍‍‌‌‌‍‌‍","‍‌‌‌‍‍‌‍‌‌‌‌‌‍‍‌‌‍‍‌‌‍‌‍‌‌‍‍‍‌‌‌‍‌‍","‍‌‌‌‍‌‍‍‌‌‍‍‍‍‍‌‌‌‍‍‌","‍‍‍‍‌‍‍","‍‍‍‍‍‌‍","‌‍‍‍‌‍‌","‌‍‌‍‍‌‌","‍‌‍‍‌‍‍","‍‌‍‍‍‌‍","‍‍‌‍‍‌‌‍‍‌‌‍‌‍‍‍‌‍‍‍‌‍‍‌‌‍‍‍‍‍‍‌‍‌‌‍‍‌‍‌‌‌","‌‍‌‌‍‌‌","‍‍‍‌‌‍‌‍‍‌‌‍‌‍‍‍‍‌‌‌‌‍‍‌‍‍‌‌‍‍‌‌‌‌‍‍‍‌‌‌‍‍‍‍‌‌‍‌‍",/\\(\\|")/g,"‌‍‍‌‌‌‍",/\\n/g,"‌‌‌‍‌‍‌",/\\r/g,"‌‌‌‍‍‌‍",/\\t/g,"‌‌‌‍‌‌‍",/\\v/g,"‌‌‌‍‌‍‍",/\\f/g,"‌‌‌‍‍‌‌",/\\b/g,"‌‌‌‍‌‌‌",null,true,false,"‍‍‍‌‌‌‌‍‍‍‌‍‌‍‍‍‍‌‌‍‍‍‍‌‍‌‌‌",26,28,27,29,30,31,"‍‍‍‌‍‌‌‍‍‌‌‌‌‍‍‍‌‌‌‍‌‍‍‌‍‍‌‌‍‍‌‌‍‌‍","","‍‍‍‌‌‍‍‍‍‌‌‍‌‍‍‍‍‌‍‌‌‍‌‌‍‌‌‍‍‍‌‍‍‍‌‍‍‍‌‌‌‌‍‍‍‌‍‌‍‍‍‍‌‍‌‌","‍‍‌‍‍‌‌‍‍‌‌‍‌‍‍‍‍‍‌‌‌‍‍‌‌‍‌‍‍‍‍‌‌‍‌","‍‍‍‍‌‌‍‍‍‍‍‌‌‍","‍‍‍‍‌‌‍‍‍‍‍‌‌‍‍‍‌‍‍‌‌‍‍‌‍‍‌‌‍‍‌‍‍‍‍‍‍‌‌‌‍‍","‍‍‍‌‍‌‍‍‍‌‍‍‍‌‍‍‌‌‍‌‌‍‍‌‌‍‌‍‍‍‌‌‍‍‌‍‍‌‍‌‌‍‍‍‌‍‍‍‌‍‍‌‌‍‌‍‍‍‌‌‍‌‌","‍‍‍‌‌‌‌‍‍‌‌‌‌‍‍‍‍‌‌‍‌‍‍‍‌‌‍‍‍‍‌‌‍‌‍‍‌‌‌‍‌‍‍‍‍‌‌‍‌‍‍‍‌‌‍‌‍‍‌‍‍‍‍‍‍‍‌‌‍‌","‍‍‌‌‍‍‌‍‍‍‌‍‌‍‍‍‌‍‍‍‌‍‍‌‌‌‍‍‍‍‍‌‍‌‌‍‍‌‍‌‌‍‍‍‌‍‍‍‍‍‍‌‍‍‍‌","‍‍‌‍‍‌‌‍‍‌‌‍‌‍‍‍‍‍‌‌‌","‍‍‌‍‍‍‌‍‍‍‌‍‌‍‍‍‌‍‍‌‍‍‍‌‌‌‍‌‍‍‌‌‍‌‍‍‍‍‌‌‍‌","‍‍‍‌‌‍‍‍‍‍‍‌‌‍‍‍‌‍‍‌‍‍‍‌‌‌‍‌‍‍‌‍‍‍‍‍‍‌‍‍‌‌‍‍‍‌‌‍‍‍‌‍‍‍‍‍","‍‍‌‌‍‌‌‍‍‌‌‍‌‍‍‍‌‌‍‍‌‍‍‌‌‌‌‍‍‍‍‌‍‌‍‍‍‌‍‍‌‌‍‍‍‌‍‌‌‍‌‌‌‌‌‍‍‍‌‌‌‍‍‍‍‍‌‍‌‌‍‍‌‍‌‌‍‍‍‌‍‍‍‍‍‍‌‍‍‍‌‍‍‍‌‌‍‍","‍‍‍‌‍‌‌‍‍‌‌‍‌‍‍‍‍‌‌‍‌‍‍‌‍‍‌‍‍‍‌‍‌‌‍‍‍‌‍‍‍‌‍‍‌‌‌‌‍‍‍‌‍‍‌‌‍‍‍‌‌‍‍‍‌‍‍‍‍‍","‌‍‌‌‍‍‍","‍‍‍‌‌‍‍‍‍‌‍‌‌‌‍‍‌‍‍‍‍‍‍‍‌‍‍‍‍‌‍‌‌‌‌‍‍‌‍‍‍‍‍‍‍‌‌‍‍‍‍‌‍‌‌‍‍‍‍‌‍‌‌‍‍‌‍‌‌‍‍‍‌‍‍‍‍‍‍‌‍‍‍‌","‍‌‍‌‌‌‌‍‍‌‌‌‌‍‍‍‍‌‌‍‌‍‍‍‌‌‍‍‍‍‌‌‍‌‍‌‍‌‌‌‌‌‍‍‌‌‍‌‍‍‍‍‌‌‍‌‍‍‍‌‌‍‌‍‍‌‍‍‍‍‍‍‍‌‌‍‌‌‍‌‌‌‌‌‍‍‌‍‍‍‍‍‍‌‍‍‍‌‌‍‌‌‌‌‌‍‍‌‍‍‌‌‍‍‌‍‌‌‍‍‍‌‍‍‍‌‍‍‌‌‍‌‍‌‍‌‌‌‌‌","‌‍‍‍‌‍‌‌‌‌‍‌‍‌","‌‌‌‍‌‍‌‍‌‌‌‍‌‍‍‍‍‍‌‌‌‍‍‍‌‌‌‌‍‍‌‌‍‌‍‍‍‌‌‌‍‍‍‍‍‌‍‌‌‍‍‌‍‌‌‍‍‍‌‍‍‍‌‍‍‌‌‍‍‍‌‍‌‌‌‌‌","‍‍‌‍‌‍‌‍‍‌‍‍‍‍‍‍‌‍‌‌‍‍‍‌‍‍‍‌","‌‍‌‍‍‌‌‌‍‌‌‌‌‌","‌‍‌‍‍‌‌‌‍‌‌‌‌‌‍‍‌‌‍‍‍‍‍‌‍‍‍‍‍‍‍‌‍‌‌‌‍‌‌‌‌‌‌‍‌‌‍‍‍","‌‍‍‍‌‍‌‌‍‌‌‌‌‌‍‌‍‌‍‌‍‍‍‌‍‍‍‌‍‍‌‌‍‌‍‍‍‍‍‌‌‌‍‍‍‌‌‌‌‍‍‌‌‍‌‍‍‍‌‌‌‍‍‍‍‍‌‍‌‌‍‍‌‌‍‌‍‍‍‌‌‍‌‌‌‍‌‌‌‌‌","‍‍‌‌‍‌‍‍‍‌‍‍‍‌‍‍‌‌‍‌‌‌‍‌‌‌‌‌‍‍‌‍‍‍‍‍‍‌‌‍‍‌‌‍‌‌‌‌‌‍‍‌‍‌‌‍‍‍‌‍‍‍‌‍‍‍‌‌‌‌‍‍‍‌‍‌‍‍‍‍‌‍‌‌","‍‍‌‍‍‌‍‍‍‌‌‌‌‍‍‍‍‌‍‌‌‍‍‌‌‌‍‍‍‍‌‍‌‌‌","‍‍‍‍‌‌‍‍‍‍‍‌‌‍‍‍‌‍‍‌‌‍‍‌‍‌‌‍‍‍‌‍‍‍‌‍‍‌‌‍‌‍‍‍‌‍‍‍‌‍‍‌‍‍‍‍","‍‌‍‌‌‌‌‍‍‌‌‌‌‍‍‍‍‌‌‍‌‍‍‍‌‌‍‍‍‍‌‍‌‌‍‍‍‌‍‍‍‌‍‍‌‌‍‍‍‌‍‌‌‌‌‌‍‍‌‍‌‌‌‍‍‌‌‌‌‍‍‍‌‍‍‌‌‍‍‍‌‍‌‌‍‍‌‌‍‌‍‍‍‌‌‍‌‌‌‍‌‍‍‍‌","‍‍‍‍‌‌‍‍‍‍‍‌‌‍‍‍‌‍‍‌‌‍‍‌‌‍‌‍‍‍‌‍‍‍‌‍‍‌‌‍‍‍","‍‍‍‍‌‌‍‍‍‍‍‌‌‍‍‍‍‌‍‌‌‍‍‌‌‍‌‍‍‍‍‍‌‌‌‍‍‍‌‍‌‌","‍‍‍‌‍‌‌‍‍‌‍‍‍‍‍‌‍‌‌‍‍‍‍‍‌‍‌‌‍‍‍‌‌‍‌‍‍‌‍‌‌‍‍‍‌‍‍‍‌‍‍‌‌‍‍‍","‍‌‍‌‌‌‌‍‍‌‌‌‌‍‍‍‍‌‌‍‌‍‍‍‌‌‍‍‍‍‌‌‍‌‍‌‍‌‌‌‌‌‍‌‌‌‍‌‍‍‍‍‌‌‍‌‍‍‍‌‌‍‌‍‍‌‍‍‍‍‍‍‍‌‌‍‌‌‍‍‍‌‍‌‌‍‌‌‌‌‌‍‍‌‍‍‌‍‍‍‍‌‍‌‍‍‍‌‍‍‌‌‍‍‍‌‍‌‌‍‍‌‍‌‌‍‍‍‍‌‌‌‌‍‍‌‍‍‌‌‍‍‌‌‍‌‍‌‍‌‌‌‌‌‍‍‌‌‌‌‍‍‍‌‌‌‍‍‍‍‍‌‍‌‌‍‍‌‍‌‌‍‍‍‌‍‍‍‍‍‍‌‍‍‍‌‍‍‍‌‌‍‍‌‍‌‌‌‌‌‍‍‍‌‌‌‌‍‍‌‍‍‍‍‍‍‍‌‌‍‍‍‍‍‌‌‍‍‍‍‌‍‌‌‍‍‍‌‌‌‍‌‍‍‌‍‍‌‌‍‍‌‌‍‌‍‌‍‌‌‌‌‌‍‍‌‌‌‌‍‍‍‍‌‍‌‌‌‍‌‌‌‌‌‍‍‍‌‌‍‍‍‍‍‌‍‌‌‍‍‌‌‌‌‍‍‍‍‌‍‌‌‍‍‌‌‍‌‍‌‍‍‍‌‍‌‌‍‌‌‌‌‌","‌‍‌‍‍‌‌‌‍‌‌‌‌‌‍‍‍‌‍‌‌‍‍‌‍‍‍‍‍‍‌‍‌‍‍‍‍‌‌‍‌‍‍‍‌‍‍‍‌‌‍‍‍‌‍‌‌‍‌‌‌‌‌","‍‍‍‌‌‌‌‍‍‍‌‌‍‌‍‍‌‍‍‍‍‍‍‌‌‍‌‌‍‍‍‌‍‌‍‍‍‌‌‌‍‍‍‍‍‌‍‌‌‍‍‌‍‌‌‍‍‍‌‍‍‍‍‍‍‌‍‍‍‌‍‍‍‌‌‍‍‍‌‍‍‍‍‍","‍‌‍‍‍‍‍‌‍‌‌‍‌‌","‍‍‌‌‍‍‌‍‍‌‍‌‌‍‍‍‍‌‌‍‌‍‍‍‌‌‍‍‍‍‍‌‍‌‌‍‌‍‍‍‍‍‍‍‌‍‍‌‌‍‍‌‍‌‌‍‍‍‌‍‍‍‌‍‍‌‌‍‌‍","‍‍‌‍‍‌‌‍‍‌‌‌‌‍‍‍‍‌‌‍‍‍‍‍‌‍‌‌‍‌‍‍‍‍‍‍‍‌‍‍‌‌‍‍‌‍‌‌‍‍‍‌‍‍‍‌‍‍‌‌‍‌‍","‍‍‌‌‍‍‌‍‍‌‍‌‌‍‍‍‍‌‌‍‌‍‍‍‌‌‍‍‍‍‍‌‍‌‌‍‌‍‍‍‍‍‍‍‌‌‌‍‍‍‍‌‍‍‍‍‍‍‌‍‍‌‌‍‍‍‌‍‌‍‍‍‌‍‍‌‍‍‍‌‍‍‍‌","‍‍‌‍‍‌‌‍‍‌‌‌‌‍‍‍‍‌‌‍‍‍‍‍‌‍‌‌‍‌‍‍‍‍‍‍‍‌‌‌‍‍‍‍‌‍‍‍‍‍‍‌‍‍‌‌‍‍‍‌‍‌‍‍‍‌‍‍‌‍‍‍‌‍‍‍‌","‍‍‌‌‌‍‍‍‍‌‌‌‌‍‍‍‌‍‍‌‌‍‍‌‍‍‌‌","‍‍‍‌‌‌‌‍‍‌‌‍‌‍‍‍‍‌‌‍‌‍‍‌‌‍‍‌‍‍‌‍‍‍‍‍‍‍‌‌‍‌‍‍‌‍‍‌‍‍‌‌‌‌‌‍‍‍‌‌‌‍‍‍‍‍‌‍‌‌‍‍‌‍‌‌‍‍‍‌‍‍‍‍‍‍‌‍‍‍‌","‍‍‍‌‌‍‍‍‍‌‍‍‌‌‍‍‌‍‌‌‍‍‍‌‌‌‍‍‍‍‌‌‍‌‍","‍‌‍‍‍‍‍‍‍‌‍‌‌‍‍‍‌‍‍‍‌‍‍‍‌‌‌‌‍‍‍‌‍‌‍‍‍‍‌‍‌‌","‍‌‍‍‍‍‍‍‍‌‍‍‌‍‍‍‌‍‍‍‍‍‍‍‌‌‍‌‍‍‌‌‍‌‍","‍‌‍‍‍‍‍‍‍‌‍‍‌‌‍‍‌‌‍‌‍‍‍‍‌‌‍‍‍‍‍‌‌‍‍","‍‍‌‌‍‌‌‍‍‌‍‍‍‍‍‍‌‍‍‍‌‍‍‌‌‍‌‍","‍‍‌‍‍‌‍‍‍‌‌‌‌‍‍‍‍‌‍‌‌‍‍‌‌‌‍‍‍‍‌‍‌‌‌‍‍‌‌‍‌‍‍‍‌‌‍‌‌","‍‍‌‌‌‍‍‍‍‌‍‍‍‍‍‍‌‍‍‍‌‍‍‌‌‍‌‌‍‍‌‍‌‌‍‍‍‍‌‍‌‌‍‍‌‍‌‌‍‍‍‌‍‍‍‍‍‍‌‍‍‍‌‍‌‍‌‌‍‍‍‍‍‌‍‌‌‍‍‌‌‌‌‍‍‍‌‌‌‍‍‍‍‌‍‌‍‍","‍‌‌‍‌‌‍‍‌‌‍‍‍‌‍‌‌‍‌‌‍‍‌‍‌‍‌‌‍‌‌‍‌‌‍‍‌‌‌‌‌‍‍‌‌‍‍‌‌",/\n/,"‍‍‍‌‌‍‍‍‍‍‌‍‌‍‍‍‌‌‌‍‌‍‍‍‌‌‍‍‍‍‍‌‍‌‌‍‍‍‌‌‍‌","‌‍‌‍‍‍‌‌‍‌‍‍‍‌‌‍‌‍‍‍‌",/\n/g,"‍‍‍‌‌‌‌‍‍‌‌‌‌‍‍‍‍‌‌‍‍‍‍‍‌‍‌‌‍‌‌‍‌‌‍‍‍‌‍‍‍‌‍‍‍‌‌‌‌‍‍‍‌‍‌‍‍‍‍‌‍‌‌","‌‍‌‍‍‌‍","‍‍‍‌‍‌‍‍‍‍‌‌‌‌‍‍‌‌‌‍‍‍‍‌‍‍‍‍‍‍‌‍‍‌‍‍‍‌‍‌‌‍‍‍‌‍‍‍‌‍‍‌‌‍‍‍‍‌‌‍‌‌‍‍‍‌‍‍‍‌‍‍‍‌‌‌‌‍‍‍‌‍‌‍‍‍‍‌‍‌‌","‍‌‍‍‍‍‌","‍‌‍‍‍‍‍‍‍‌‌‌‍‍‍‍‍‌‍‌‍‍‍‍‌‌‍‌‍‍‍‌‌‍‌‍‍‌‌‍‌‍‍‍‌‍‍‍‌‍‍‍‌‍‌‌‍‌‍‌‌‍‌‍‍‍‌‍‌‍‍‍‌‍‍‌‌‍‍‌‌‍‌‍‍‍‍‌‌‍‍","‍‍‍‌‌‍‌‍‍‍‌‍‌‍‍‍‌‍‍‌‌‍‍‌‌‍‌‍‍‍‍‌‌‍‍","‍‍‌‌‍‍‌‍‍‌‍‍‌‌‍‍‌‌‍‌‍‍‍‍‍‌‌‌","‍‍‌‍‍‍‍‍‍‍‌‌‌‌‍‍‍‌‍‌‌‍‍‌‍‌‌‍‍‍‌‍‍‍‍‍‍‌‍‍‍‌‍‍‍‌‌‍‍",/\n.*/g,"‍‌‌‍‍‌‌‍‍‌‌‍‌‍‍‍‍‍‌‌‌‍‍‌‍‌‌‍‍‍‌‌‌‍‍‍‍‌‌‌‌‍‍‍‌‍‍‌‌‌‍‌‌‌‌‌‍‍‌‌‍‌‍‍‍‍‌‌‍‌‍‍‍‌‌‍‌‍‍‌‍‍‍‍‍‍‍‌‌‍‌‌‍‌‌‌‌‌‍‍‌‍‍‍‍‍‍‌‍‍‍‌‌‍‌‌‌‌‌‍‍‌‍‍‌‌‍‍‌‍‌‌‍‍‍‌‍‍‍‌‍‍‌‌‍‌‍‌‍‌‌‌‌‌","‌‍‌‍‍‍‌‌‍‌‌‌‌‌‍‌‍‌‍‌‍‍‍‌‍‍‍‌‍‍‍‌‌‍‌‍‍‌‌‍‌‍‍‍‌‌‌‍‍‍‍‌‍‍‍‍‍‍‌‌‍‍‍‍‍‌‍‍‍‌‍‍‌‍‌‌‍‍‍‍‍‌‍‌‍‍‌‌‍‌‍‍‍‌‌‍‌‌‌‍‌‌‌‌‌‍‍‍‌‍‌‌‍‍‌‌‍‌‍‍‍‍‍‌‌‌‍‍‍‌‍‌‌‌‍‌‍‍‍‌‌‌‌‍‌‍‌","‍‍‌‍‍‍‌‍‍‌‌‍‌‍‍‍‍‍‌‌‌‍‍‍‌‍‌‌","‍‍‍‌‌‌‌‍‍‌‍‍‍‍‍‍‍‌‌‌‌","‍‍‌‌‌‍‍‍‍‌‍‍‍‍‍‍‌‍‍‍‌‍‍‌‌‍‌‌‍‍‌‍‌‌‍‍‍‍‌‍‌‌‍‍‌‍‌‌‍‍‍‌‍‍‍‍‍‍‌‍‍‍‌‍‍‍‌‌‍‍","‍‍‌‌‌‍‌‍‍‌‌‍‌‍‍‍‌‌‍‍‍‍‍‌‍‌‌‍‍‍‌‍‍‍‌","‍‌‌‍‌‌‍‍‌‌‍‍‍‌‍‌‍‌‍‍‌‍‌‌‌‌‌‍‍‌‌‍‍‌‌‍‌‌‍‌‌‍‍‌‌‌‍‌‌",/^(?:\s+)/,/^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/,/^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?::)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:$)/,/^(?:.)/,"‍‍‍‌‌‌‌‍‍‌‌‌‌‍‍‍‍‌‌‍‌‍‍‍‌‌‍‍‍‍‌‌‍‌‍‍‍‍‌‌‍‌","‍‍‍‌‌‌‌‍‍‌‌‌‌‍‍‍‍‌‌‍‌‍‍‍‌‌‍‍‍‍‌‌‍‌‍","‍‍‌‌‌‌‍‍‍‍‌‌‌‌‍‍‍‌‌‌‌‍‍‌‍‍‌‌‍‍‍‍‌‌‍","‍‍‌‍‍‌‍‍‍‌‌‌‌‍‍‍‌‍‌‌‍‍‍‌‍‍‍‌","‍‌‍‌‍‌‍‍‍‍‌‌‍‍‍‍‌‌‌‌‍‍‍‌‌‍‍‍‍‍‌‌‍‌‍‌‍‍‍‌‍‌‌‍‌‌‌‌‌","‌‍‌‌‌‌‌‍‌‌‌‍‍‌‍‌‌‍‌‌‍‍‌‌‍‍‌‌‍‌‌‌‍‌‍","‍‍‍‌‌‍‌‍‍‌‌‍‌‍‍‍‌‌‌‌‍‍‍‌‌‍‌‌‍‌‌‌‍‍‌‍‍‌‍‌‌‍‍‍‌‍‍‌‌‍‍‌‌‍‌‍‍‌‍‌‌‍‍‍‍‍‍‌‌‍‍‍‌‍‍‍‌‍‍‌‌‌‍‍","‍‍‌‌‍‍‌‍‍‍‌‌‍‍","‍‍‍‌‌‌‌‍‍‌‌‌‌‍‍‍‍‌‍‌‌‍‍‌‍‌‌‌","‍‍‌‌‌‍‍‍‍‍‌‍‍‍‍‍‌‌‍‌‌","‍‍‍‌‍‌‍‍‍‍‌‍‌‌‍‍‌‌‍‍‌‌‍‍‍‌‌‌","‍‍‌‌‍‍‌‍‍‌‍‌‌‍‍‍‌‍‍‌‌‍‍‌‌‍‌‍","‍‍‍‌‌‍‌‍‍‌‌‍‌‍‍‍‌‌‌‌‍‍‍‌‌‍‌‌","‍‍‍‌‍‌‍‍‍‍‌‍‌‌‍‍‌‌‍‍‌‌‍‌‍‍‌‍‌‍‍‍‌‌‌","‍‍‌‌‌‌‍‍‍‍‌‌‍‌‍‍‌‌‍‍‍‍‍‍‌‍‍‌","‍‍‌‌‌‌‍‍‍‍‌‌‍‌‍‍‌‌‍‍‍‍‍‍‌‌‍‍","‍‍‍‌‌‍‍‍‍‍‍‌‌‍‍‍‍‌‌‍‍‍‍‍‌‍‌‌‍‍‌‌‍‌‍‍‍‌‍‍‌‍","‮",165,"string","replace",/./g,/.{7}/g,String,"fromCharCode",0,1,2,parseInt);
