"use strict";(self.webpackChunkangular_movies=self.webpackChunkangular_movies||[]).push([[592],{4550:(c,i,r)=>{r.d(i,{I:()=>_});var o=r(4004),n=r(262),s=r(8256),p=r(529);let _=(()=>{class t{constructor(e){this.http=e,this.apiKey="b4016224ea90dc523669a794dc2764e4",this.baseUrl=`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}`}getTopMovies(){return this.http.get(`${this.baseUrl}&language=pt-BR&region=BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000`).pipe((0,o.U)(e=>e.results),(0,o.U)(e=>e.map(a=>({...a,posterUrl:`https://image.tmdb.org/t/p/w185${a.poster_path}`}))),(0,n.K)(e=>(console.error("Erro ao buscar os filmes:",e),[])))}getMoreLikedMovies(){return this.http.get("https://lessa-portfolio.com.br/movies")}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(p.eN))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);