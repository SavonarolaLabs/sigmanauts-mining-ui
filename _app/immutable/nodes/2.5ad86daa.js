import{s as yt,n as vt}from"../chunks/scheduler.e108d1fd.js";import{S as Et,i as Pt,g as l,s as m,m as k,h as r,j as f,y as se,c as b,n as w,f as i,k as o,l as qe,a as Ye,x as e,o as I,z as Ct,A as xt}from"../chunks/index.f2f39a4a.js";import{b as mt}from"../chunks/paths.029f5070.js";function bt(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}const Tt=/<li>\n<b>Stats for Miner: (?<Address>.*)<\/b><br><br>\nPending Shares: (?<PendingShares>.*)<br>\nPending Balance: (?<PendingBalance>.*)\(this will typically be zero as payments are made a few moments after the block clears\)<br>\nTotal Paid: (?<TotalPaid>.*)<br>\nToday Paid: (?<TodayPaid>.*)<br>\nLast Payment: (?<LastPayment>.*)<br>\nLast Payment Link: <a href="https:\/\/explorer.ergoplatform.com\/en\/transactions\/(?<LastPaymentLink>.*)" target="_blank">Click here<\/a>/gm,Ht=/<b>Overall Pool Stats:<\/b><br><br>\nPool Hashrate: (?<PoolHashrate>.*)<br>\nConnected Miners: (?<ConnectedMiners>.*)<br>\nNetwork Hashrate: (?<NetworkHashrate>.*)<br>\nNetwork Difficulty: (?<NetworkDifficulty>.*)<br>\nStats Updated: (?<StatsUpdated>.*)/gm,It=/<b>Latest Block Information:<\/b><br><br>\nPool ID: (?<PoolID>.*)<br>\nBlock Height: (?<BlockHeight>.*)<br>\nNetwork Difficulty: (?<NetworkDifficulty>.*)<br>\nStatus: (?<Status>.*)<br>\nConfirmation Progress: (?<ConfirmationProgress>.*)<br>\nEffort: (?<Effort>.*)<br>\nTransaction Confirmation Data: (?<TransactionConfirmationData>.*)<br>\nReward: (?<Reward>.*)<br>\nInfo Link:  <a href="https:\/\/explorer.ergoplatform.com\/en\/blocks\/(?<InfoLink>.*)" target="_blank">Click here<\/a><br>\nHash: (?<Hash>.*)<br>\nMiner: (?<Miner>.*)<br>\nSource: (?<Source>.*)<br>\nCreated: (?<Created>.*)<br>\n<\/li>/gm,Mt=/<li>\n<b>Worker #(?<Number>.*)<\/b><br><br>\nName: (?<Name>.*)<br>\nHashrate: (?<Hashrate>.*)<br>\nShares per Second: (?<SharesPerSecond>.*)<br>\n<\/li>/gm;function gt(a){return{minerStats:Nt(a),poolStats:Lt(a),workers:Bt(a),latestBlocks:Vt(a)}}function Nt(a){const t=Tt.exec(a);return t?t.groups:null}function Lt(a){const t=Ht.exec(a);return t?t.groups:null}function Vt(a){let t,s=[];for(;(t=It.exec(a))!==null;)s.push(t.groups);return s}function Bt(a){let t,s=[];for(;(t=Mt.exec(a))!==null;)s.push(t.groups);return s}function xe(a){return a&&a.substring(0,4)+"..."+a.slice(-4)}function pt(a){let t=Math.floor((new Date-a)/1e3),s=t/31536e3;if(s>1){const c=Math.floor(s);return c==1?c+" year":c+" years"}if(s=t/2592e3,s>1){const c=Math.floor(s);return c==1?c+" month":c+" months"}if(s=t/86400,s>1){const c=Math.floor(s);return c==1?c+" day":c+" days"}if(s=t/3600,s>1){const c=Math.floor(s);return c==1?c+" hour":c+" hours"}if(s=t/60,s>1){const c=Math.floor(s);return c==1?c+" minute":c+" minutes"}const u=Math.floor(t);return u==1?u+" second":u+" seconds"}function _t(a,t,s){const u=a.slice();return u[5]=t[s],u}function Dt(a){var D;let t,s,u='<th class="svelte-1hodyrh">Found</th> <th class="optional-md svelte-1hodyrh">Reward</th> <th class="optional-md svelte-1hodyrh">Height</th> <th class="optional-md svelte-1hodyrh">Difficulty</th> <th class="svelte-1hodyrh">Block Hash</th> <th class="svelte-1hodyrh">Miner</th> <th class="svelte-1hodyrh">Effort</th> <th class="optional-md svelte-1hodyrh">Status</th>',c,y=bt((D=a[1])==null?void 0:D.latestBlocks),h=[];for(let n=0;n<y.length;n+=1)h[n]=St(_t(a,y,n));return{c(){t=l("table"),s=l("tr"),s.innerHTML=u,c=m();for(let n=0;n<h.length;n+=1)h[n].c();this.h()},l(n){t=r(n,"TABLE",{class:!0});var g=f(t);s=r(g,"TR",{class:!0,"data-svelte-h":!0}),se(s)!=="svelte-dro003"&&(s.innerHTML=u),c=b(g);for(let p=0;p<h.length;p+=1)h[p].l(g);g.forEach(i),this.h()},h(){o(s,"class","text-slate-400 svelte-1hodyrh"),o(t,"class","mining mt-10 svelte-1hodyrh")},m(n,g){Ye(n,t,g),e(t,s),e(t,c);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(t,null)},p(n,g){var p;if(g&7){y=bt((p=n[1])==null?void 0:p.latestBlocks);let v;for(v=0;v<y.length;v+=1){const S=_t(n,y,v);h[v]?h[v].p(S,g):(h[v]=St(S),h[v].c(),h[v].m(t,null))}for(;v<h.length;v+=1)h[v].d(1);h.length=y.length}},d(n){n&&i(t),Ct(h,n)}}}function St(a){let t,s,u=pt(Date.parse(a[5].Created))+"",c,y,h,D,n=(+a[5].Reward).toFixed(2)+"",g,p,v,S=a[5].BlockHeight+"",V,le,E,T=(+a[5].NetworkDifficulty).toFixed(0)+"",ie,ce,B,N,q=xe(a[5].Hash)+"",re,G,Y,A,j,Q=xe(a[5].Miner)+"",L,O,J,P=(+a[5].Effort).toFixed(2)*100+"",Z,we,de,_,M=a[5].Status+"",F,ye,fe,X;function he(){return a[3](a[5])}return{c(){t=l("tr"),s=l("td"),c=k(u),y=k(" ago"),h=m(),D=l("td"),g=k(n),p=m(),v=l("td"),V=k(S),le=m(),E=l("td"),ie=k(T),ce=m(),B=l("td"),N=l("a"),re=k(q),Y=m(),A=l("td"),j=l("button"),L=k(Q),O=m(),J=l("td"),Z=k(P),we=k("%"),de=m(),_=l("td"),F=k(M),ye=m(),this.h()},l(R){t=r(R,"TR",{class:!0});var d=f(t);s=r(d,"TD",{class:!0});var z=f(s);c=w(z,u),y=w(z," ago"),z.forEach(i),h=b(d),D=r(d,"TD",{class:!0});var K=f(D);g=w(K,n),K.forEach(i),p=b(d),v=r(d,"TD",{class:!0});var Te=f(v);V=w(Te,S),Te.forEach(i),le=b(d),E=r(d,"TD",{class:!0});var Ee=f(E);ie=w(Ee,T),Ee.forEach(i),ce=b(d),B=r(d,"TD",{class:!0});var ee=f(B);N=r(ee,"A",{href:!0});var oe=f(N);re=w(oe,q),oe.forEach(i),ee.forEach(i),Y=b(d),A=r(d,"TD",{class:!0});var ue=f(A);j=r(ue,"BUTTON",{});var Pe=f(j);L=w(Pe,Q),Pe.forEach(i),ue.forEach(i),O=b(d),J=r(d,"TD",{class:!0});var W=f(J);Z=w(W,P),we=w(W,"%"),W.forEach(i),de=b(d),_=r(d,"TD",{class:!0});var $=f(_);F=w($,M),$.forEach(i),ye=b(d),d.forEach(i),this.h()},h(){o(s,"class","svelte-1hodyrh"),o(D,"class","optional-md svelte-1hodyrh"),o(v,"class","optional-md svelte-1hodyrh"),o(E,"class","optional-md svelte-1hodyrh"),o(N,"href",G=`https://explorer.ergoplatform.com/en/blocks/${a[5].Hash}`),o(B,"class","text-green-300 svelte-1hodyrh"),o(A,"class","text-green-300 svelte-1hodyrh"),o(J,"class","svelte-1hodyrh"),o(_,"class","optional-md svelte-1hodyrh"),o(t,"class","svelte-1hodyrh")},m(R,d){Ye(R,t,d),e(t,s),e(s,c),e(s,y),e(t,h),e(t,D),e(D,g),e(t,p),e(t,v),e(v,V),e(t,le),e(t,E),e(E,ie),e(t,ce),e(t,B),e(B,N),e(N,re),e(t,Y),e(t,A),e(A,j),e(j,L),e(t,O),e(t,J),e(J,Z),e(J,we),e(t,de),e(t,_),e(_,F),e(t,ye),fe||(X=xt(j,"click",he),fe=!0)},p(R,d){a=R,d&2&&u!==(u=pt(Date.parse(a[5].Created))+"")&&I(c,u),d&2&&n!==(n=(+a[5].Reward).toFixed(2)+"")&&I(g,n),d&2&&S!==(S=a[5].BlockHeight+"")&&I(V,S),d&2&&T!==(T=(+a[5].NetworkDifficulty).toFixed(0)+"")&&I(ie,T),d&2&&q!==(q=xe(a[5].Hash)+"")&&I(re,q),d&2&&G!==(G=`https://explorer.ergoplatform.com/en/blocks/${a[5].Hash}`)&&o(N,"href",G),d&2&&Q!==(Q=xe(a[5].Miner)+"")&&I(L,Q),d&2&&P!==(P=(+a[5].Effort).toFixed(2)*100+"")&&I(Z,P),d&2&&M!==(M=a[5].Status+"")&&I(F,M)},d(R){R&&i(t),fe=!1,X()}}}function At(a){var $e,Qe,Xe,et,tt,at,st,lt,rt,ot,nt,it,ct,dt,ft,ht;let t,s,u,c=`<a href="${mt}/"><div class="font-bold text-green-400 text-3xl" style="margin-left:35px">SMG</div></a>`,y,h,D,n,g="Hashrate:",p,v,S=((Qe=($e=a[1])==null?void 0:$e.poolStats)==null?void 0:Qe.NetworkHashrate)+"",V,le,E,T,ie="Difficulty:",ce,B,N=((et=(Xe=a[1])==null?void 0:Xe.poolStats)==null?void 0:et.NetworkDifficulty)+"",q,re,G,Y,A=xe((at=(tt=a[1])==null?void 0:tt.minerStats)==null?void 0:at.Address)+"",j,Q,L,O,J,P,Z,we="Sigmanauts Pool",de,_,M,F,ye="Latest Blocks Found",fe,X,he=(((lt=(st=a[1])==null?void 0:st.latestBlocks)==null?void 0:lt.length)??0)+"",R,d,z,K,Te="Total Paid",Ee,ee,oe=(((ot=(rt=a[1])==null?void 0:rt.minerStats)==null?void 0:ot.TotalPaid)??0)+"",ue,Pe,W,$,Oe="Pending Shares",ze,Ce,He=(((it=(nt=a[1])==null?void 0:nt.minerStats)==null?void 0:it.PendingShares)??0)+"",Ze,We,ne,ve,Ke="Hashrate Share",Ge,me,Ie=(((dt=(ct=a[1])==null?void 0:ct.workers)==null?void 0:dt.map(kt).reduce(wt,0))??0).toFixed(1)+"",Fe,je,Je,C=((ht=(ft=a[1])==null?void 0:ft.latestBlocks)==null?void 0:ht.length)>0&&Dt(a);return{c(){t=l("div"),s=l("div"),u=l("div"),u.innerHTML=c,y=m(),h=l("div"),D=l("div"),n=l("div"),n.textContent=g,p=m(),v=l("div"),V=k(S),le=m(),E=l("div"),T=l("div"),T.textContent=ie,ce=m(),B=l("div"),q=k(N),re=m(),G=l("div"),Y=l("div"),j=k(A),Q=m(),L=l("div"),O=l("div"),J=m(),P=l("div"),Z=l("div"),Z.textContent=we,de=m(),_=l("div"),M=l("div"),F=l("div"),F.textContent=ye,fe=m(),X=l("div"),R=k(he),d=m(),z=l("div"),K=l("div"),K.textContent=Te,Ee=m(),ee=l("div"),ue=k(oe),Pe=m(),W=l("div"),$=l("div"),$.textContent=Oe,ze=m(),Ce=l("div"),Ze=k(He),We=m(),ne=l("div"),ve=l("div"),ve.textContent=Ke,Ge=m(),me=l("div"),Fe=k(Ie),je=k(" %"),Je=m(),C&&C.c(),this.h()},l(x){t=r(x,"DIV",{class:!0});var H=f(t);s=r(H,"DIV",{class:!0,style:!0});var te=f(s);u=r(te,"DIV",{class:!0,"data-svelte-h":!0}),se(u)!=="svelte-8a2k6u"&&(u.innerHTML=c),y=b(te),h=r(te,"DIV",{class:!0});var be=f(h);D=r(be,"DIV",{class:!0});var ge=f(D);n=r(ge,"DIV",{class:!0,"data-svelte-h":!0}),se(n)!=="svelte-1ddb9j1"&&(n.textContent=g),p=b(ge),v=r(ge,"DIV",{});var Me=f(v);V=w(Me,S),Me.forEach(i),ge.forEach(i),le=b(be),E=r(be,"DIV",{class:!0});var pe=f(E);T=r(pe,"DIV",{class:!0,"data-svelte-h":!0}),se(T)!=="svelte-r91mry"&&(T.textContent=ie),ce=b(pe),B=r(pe,"DIV",{});var Ne=f(B);q=w(Ne,N),Ne.forEach(i),pe.forEach(i),be.forEach(i),re=b(te),G=r(te,"DIV",{class:!0});var Le=f(G);Y=r(Le,"DIV",{class:!0});var Ve=f(Y);j=w(Ve,A),Ve.forEach(i),Le.forEach(i),te.forEach(i),Q=b(H),L=r(H,"DIV",{class:!0});var _e=f(L);O=r(_e,"DIV",{class:!0,style:!0}),f(O).forEach(i),J=b(_e),P=r(_e,"DIV",{class:!0});var ae=f(P);Z=r(ae,"DIV",{class:!0,"data-svelte-h":!0}),se(Z)!=="svelte-ljg4g7"&&(Z.textContent=we),de=b(ae),_=r(ae,"DIV",{class:!0,style:!0});var U=f(_);M=r(U,"DIV",{class:!0});var De=f(M);F=r(De,"DIV",{class:!0,"data-svelte-h":!0}),se(F)!=="svelte-1md4wa4"&&(F.textContent=ye),fe=b(De),X=r(De,"DIV",{class:!0});var Be=f(X);R=w(Be,he),Be.forEach(i),De.forEach(i),d=b(U),z=r(U,"DIV",{class:!0});var Se=f(z);K=r(Se,"DIV",{class:!0,"data-svelte-h":!0}),se(K)!=="svelte-1r71jwh"&&(K.textContent=Te),Ee=b(Se),ee=r(Se,"DIV",{class:!0});var Ae=f(ee);ue=w(Ae,oe),Ae.forEach(i),Se.forEach(i),Pe=b(U),W=r(U,"DIV",{class:!0});var ke=f(W);$=r(ke,"DIV",{class:!0,"data-svelte-h":!0}),se($)!=="svelte-1k1bltk"&&($.textContent=Oe),ze=b(ke),Ce=r(ke,"DIV",{class:!0});var ut=f(Ce);Ze=w(ut,He),ut.forEach(i),ke.forEach(i),We=b(U),ne=r(U,"DIV",{class:!0});var Re=f(ne);ve=r(Re,"DIV",{class:!0,"data-svelte-h":!0}),se(ve)!=="svelte-1dvr24w"&&(ve.textContent=Ke),Ge=b(Re),me=r(Re,"DIV",{class:!0});var Ue=f(me);Fe=w(Ue,Ie),je=w(Ue," %"),Ue.forEach(i),Re.forEach(i),U.forEach(i),Je=b(ae),C&&C.l(ae),ae.forEach(i),_e.forEach(i),H.forEach(i),this.h()},h(){o(u,"class","flex flex-col items-center"),o(n,"class","text-slate-400 text-sm"),o(D,"class","optional-md svelte-1hodyrh"),o(T,"class","text-slate-400 text-sm"),o(E,"class","optional-md svelte-1hodyrh"),o(h,"class","flex gap-6 grow justify-center"),o(Y,"class","font-bold text-white"),o(G,"class","flex items-center justify-center"),o(s,"class","flex gap-4 w-full p-4"),qe(s,"border-bottom","1px solid rgba(255,255,255,0.2)"),o(O,"class","h-full main-img bg-red-400 svelte-1hodyrh"),qe(O,"background-image",'url("'+mt+'/mines.png")'),o(Z,"class","uppercase mb-8 font-bold text-5xl"),o(F,"class","uppercase text-slate-400"),o(X,"class","font-bold mt-2"),o(M,"class","widget p-3 grow svelte-1hodyrh"),o(K,"class","uppercase text-slate-400"),o(ee,"class","font-bold mt-2"),o(z,"class","widget p-3 grow svelte-1hodyrh"),o($,"class","uppercase text-slate-400"),o(Ce,"class","font-bold mt-2"),o(W,"class","widget p-3 grow svelte-1hodyrh"),o(ve,"class","uppercase text-slate-400"),o(me,"class","font-bold mt-2"),o(ne,"class","widget p-3 grow svelte-1hodyrh"),o(_,"class","w-full flex gap-4 flex-wrap"),qe(_,"height","min-content"),o(P,"class","flex flex-col w-full p-10 custom-bg svelte-1hodyrh"),o(L,"class","flex grow"),o(t,"class","flex flex-col h-full")},m(x,H){Ye(x,t,H),e(t,s),e(s,u),e(s,y),e(s,h),e(h,D),e(D,n),e(D,p),e(D,v),e(v,V),e(h,le),e(h,E),e(E,T),e(E,ce),e(E,B),e(B,q),e(s,re),e(s,G),e(G,Y),e(Y,j),e(t,Q),e(t,L),e(L,O),e(L,J),e(L,P),e(P,Z),e(P,de),e(P,_),e(_,M),e(M,F),e(M,fe),e(M,X),e(X,R),e(_,d),e(_,z),e(z,K),e(z,Ee),e(z,ee),e(ee,ue),e(_,Pe),e(_,W),e(W,$),e(W,ze),e(W,Ce),e(Ce,Ze),e(_,We),e(_,ne),e(ne,ve),e(ne,Ge),e(ne,me),e(me,Fe),e(me,je),e(P,Je),C&&C.m(P,null)},p(x,[H]){var te,be,ge,Me,pe,Ne,Le,Ve,_e,ae,U,De,Be,Se,Ae,ke;H&2&&S!==(S=((be=(te=x[1])==null?void 0:te.poolStats)==null?void 0:be.NetworkHashrate)+"")&&I(V,S),H&2&&N!==(N=((Me=(ge=x[1])==null?void 0:ge.poolStats)==null?void 0:Me.NetworkDifficulty)+"")&&I(q,N),H&2&&A!==(A=xe((Ne=(pe=x[1])==null?void 0:pe.minerStats)==null?void 0:Ne.Address)+"")&&I(j,A),H&2&&he!==(he=(((Ve=(Le=x[1])==null?void 0:Le.latestBlocks)==null?void 0:Ve.length)??0)+"")&&I(R,he),H&2&&oe!==(oe=(((ae=(_e=x[1])==null?void 0:_e.minerStats)==null?void 0:ae.TotalPaid)??0)+"")&&I(ue,oe),H&2&&He!==(He=(((De=(U=x[1])==null?void 0:U.minerStats)==null?void 0:De.PendingShares)??0)+"")&&I(Ze,He),H&2&&Ie!==(Ie=(((Se=(Be=x[1])==null?void 0:Be.workers)==null?void 0:Se.map(kt).reduce(wt,0))??0).toFixed(1)+"")&&I(Fe,Ie),((ke=(Ae=x[1])==null?void 0:Ae.latestBlocks)==null?void 0:ke.length)>0?C?C.p(x,H):(C=Dt(x),C.c(),C.m(P,null)):C&&(C.d(1),C=null)},i:vt,o:vt,d(x){x&&i(t),C&&C.d()}}}const kt=a=>+a.SharesPerSecond,wt=(a,t)=>a+100*t;function Zt(a,t,s){let u="9eZPTmn8zp5GJ7KZwTo8cEuxNdezWaY3hBbLeWid7EAZedzb9tD",c={minerStats:{Address:"9eZPTmn8zp5GJ7KZwTo8cEuxNdezWaY3hBbLeWid7EAZedzb9tD",PendingShares:"257.759997458062",PendingBalance:"0 ",TotalPaid:"2.9606 ERG",TodayPaid:"0",LastPayment:"2023-09-28T23:49:55.404233Z",LastPaymentLink:"a9308015385803c3d9115ce770055f3c4eb262856b7fa4ab3cdbeb1d085c6fa1"},poolStats:{PoolHashrate:"6.7247944 g/h",ConnectedMiners:"7",NetworkHashrate:"19.1144200670115 t/h",NetworkDifficulty:"2293730408041379",StatsUpdated:"2023-09-29T16:00:00Z"},workers:[{Number:"1",Name:"qx3080",Hashrate:"160.99869 MH/s",SharesPerSecond:"0.035"},{Number:"2",Name:"qx3090",Hashrate:"337.330589 MH/s",SharesPerSecond:"0.073"}],latestBlocks:[{PoolID:"ErgoSigmanauts",BlockHeight:"1100468",NetworkDifficulty:"513409.339078689",Status:"confirmed",ConfirmationProgress:"1",Effort:"1.52859983632597",TransactionConfirmationData:"2b87c059130342c6",Reward:"36.0033",InfoLink:"9a8ef707ab2511c80f369c65f5bcdd2a4579c3ba8f58a4b39c9fedb4bf62a1c8",Hash:"9a8ef707ab2511c80f369c65f5bcdd2a4579c3ba8f58a4b39c9fedb4bf62a1c8",Miner:"9hashqSPuP8Y9wfvkeW8Th4o4GUEDPDnJuZH1p9XupTCyXaJocM",Source:"ErgoSigmanauts",Created:"2023-09-27T23:34:37.068514Z"},{PoolID:"ErgoSigmanauts",BlockHeight:"1097673",NetworkDifficulty:"584774.232242884",Status:"confirmed",ConfirmationProgress:"1",Effort:"3.57595857342234",TransactionConfirmationData:"24c68528b4ee4956",Reward:"36.0042",InfoLink:"8b1aaecd19515c51877222af326f5c0cc7f17c059896ad00cc57bf4cfeec1c05",Hash:"8b1aaecd19515c51877222af326f5c0cc7f17c059896ad00cc57bf4cfeec1c05",Miner:"9fYvQMsMN3NNaw33cAFnRdyHy1DpxtxfADvGqUV3ocLptw4HpcP",Source:"ErgoSigmanauts",Created:"2023-09-24T01:01:20.952316Z"},{PoolID:"ErgoSigmanauts",BlockHeight:"1094505",NetworkDifficulty:"529469.026306957",Status:"confirmed",ConfirmationProgress:"1",Effort:"0.295473575160825",TransactionConfirmationData:"4002d585b13ee149",Reward:"36.00275",InfoLink:"8d1f05f0881104200c79c28cdba2226ed3b46f850bab4ae7352c1f22fe38227f",Hash:"8d1f05f0881104200c79c28cdba2226ed3b46f850bab4ae7352c1f22fe38227f",Miner:"9eZPTmn8zp5GJ7KZwTo8cEuxNdezWaY3hBbLeWid7EAZedzb9tD",Source:"ErgoSigmanauts",Created:"2023-09-19T14:57:26.034039Z"},{PoolID:"ErgoSigmanauts",BlockHeight:"1094037",NetworkDifficulty:"551849.696699577",Status:"confirmed",ConfirmationProgress:"1",Effort:"0.195021239206627",TransactionConfirmationData:"22efbeebd035a934",Reward:"36.0066",InfoLink:"5ee133f0971d5e5dea7b7a0fd0fb2de9bc351be6aa749c505a44a37224122cf0",Hash:"5ee133f0971d5e5dea7b7a0fd0fb2de9bc351be6aa749c505a44a37224122cf0",Miner:"9iQS22vfWdF2N84Lvv9jgAMFGLyL7t17SWbHGEfaddaG7ZbL3fJ",Source:"ErgoSigmanauts",Created:"2023-09-18T23:10:27.032377Z"}]};async function y(){h(u)}async function h(n){var V;let g=new FormData;g.append("wallet",n);const v=await(await fetch("https://my.ergoport.dev/cgi-bin/mining/mining_all.html",{method:"POST",body:g})).text(),S=gt(v);if((V=S==null?void 0:S.minerStats)!=null&&V.Address)s(1,c=S);else{const E=await(await fetch("https://my.ergoport.dev/cgi-bin/mining/mining_all.html",{method:"POST",body:g})).text(),T=gt(E);s(1,c=T)}}return[u,c,y,n=>{s(0,u=n.Miner),y()}]}class Wt extends Et{constructor(t){super(),Pt(this,t,Zt,At,yt,{})}}export{Wt as component};