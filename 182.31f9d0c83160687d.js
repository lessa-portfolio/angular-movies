"use strict";(self.webpackChunkangular_movies=self.webpackChunkangular_movies||[]).push([[182],{182:(x,p,s)=>{s.r(p),s.d(p,{TopMoviesModule:()=>m});var a=s(6895),d=s(3900),e=s(8256),g=s(4550),c=s(529);let h=(()=>{class o{constructor(t){this.http=t}likeMovie(t,i){const n=(new c.WM).set("Authorization",`Bearer ${i}`);return this.http.post("https://lessa-portfolio.com.br/likes/like",{movieId:t},{headers:n})}dislikeMovie(t,i){const n=(new c.WM).set("Authorization",`Bearer ${i}`);return this.http.post("https://lessa-portfolio.com.br/likes/dislike",{movieId:t},{headers:n})}getLikedMovies(t){const i=(new c.WM).set("Authorization",`Bearer ${t}`);return this.http.get("https://lessa-portfolio.com.br/likes",{headers:i})}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(c.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var v=s(9833);function u(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"li"),e._UZ(1,"img",1),e.TgZ(2,"div",2)(3,"div",3)(4,"h3"),e._uU(5),e.qZA(),e.TgZ(6,"p"),e._uU(7),e.qZA()(),e.TgZ(8,"div",4),e.NdJ("click",function(){const l=e.CHM(t).$implicit,f=e.oxw();return e.KtG(f.toggleLike(l.id))}),e._UZ(9,"img",5),e.qZA()(),e.TgZ(10,"p"),e._uU(11),e.qZA()()}if(2&o){const t=r.$implicit;e.xp6(1),e.Q6J("src",t.posterUrl,e.LSH),e.xp6(4),e.Oqu(t.title),e.xp6(2),e.Oqu(t.release_date),e.xp6(2),e.Q6J("src",t.liked?"assets/heart-filled.svg":"assets/heart.svg",e.LSH),e.xp6(2),e.Oqu(t.overview)}}let M=(()=>{class o{constructor(t,i,n){this.moviesService=t,this.likeService=i,this.router=n,this.topMovies=[]}ngOnInit(){this.loadMovies()}loadMovies(){const t=sessionStorage.getItem("token")||"";t?this.moviesService.getTopMovies().pipe((0,d.w)(i=>(this.topMovies=i.slice(0,10),this.likeService.getLikedMovies(t)))).subscribe({next:i=>{this.topMovies.forEach(n=>{n.liked=i.includes(n.id.toString())})},error:i=>this.redirectToLogin(i)}):this.router.navigate(["/login"])}toggleLike(t){const i=sessionStorage.getItem("token")||"";this.topMovies.find(l=>l.id===t)?.liked?this.likeService.dislikeMovie(t,i).subscribe({next:()=>this.loadMovies(),error:l=>this.redirectToLogin(l)}):this.likeService.likeMovie(t,i).subscribe({next:()=>this.loadMovies(),error:l=>this.redirectToLogin(l)})}redirectToLogin(t){console.error("Erro na requisi\xe7\xe3o POST:",t),this.router.navigate(["/login"])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(g.I),e.Y36(h),e.Y36(v.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-top-movies"]],decls:4,vars:1,consts:[[4,"ngFor","ngForOf"],["alt","P\xf4ster",3,"src"],[1,"content"],[1,"title"],[3,"click"],["alt","Heart Icon",3,"src"]],template:function(t,i){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Top 10 Movies in Brazil"),e.qZA(),e.TgZ(2,"ul"),e.YNc(3,u,12,5,"li",0),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngForOf",i.topMovies))},dependencies:[a.sg],styles:["h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:32px}ul[_ngcontent-%COMP%]{max-width:1440px;width:100%;display:flex;justify-content:center;align-items:flex-start;flex-wrap:wrap;flex-direction:row;margin:0 auto 32px;list-style:none;gap:16px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:280px;display:flex;justify-content:center;align-items:center;flex-direction:column;padding:12px;gap:8px;background-color:#202024;border:solid 1px #1c2a24;border-radius:8px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline-block;max-height:100px;overflow:hidden;text-overflow:ellipsis}.content[_ngcontent-%COMP%]{width:100%;display:flex;align-items:flex-start;justify-content:space-between;gap:8px}.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{height:65px}"]}),o})(),m=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.ez,v.Bz.forChild([{path:"",component:M}])]}),o})()}}]);