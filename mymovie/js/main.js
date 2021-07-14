async function get(url,ul){
		let res=await fetch(url);
		let data=await res.json();
		let o='';
		data.results.forEach(function(movie){
			o+=`<li>
			<img src="https://image.tmdb.org/t/p/w342/${movie.poster_path}">
			<h4>${(movie.title) ? movie.title : (movie.name) ? movie.name : movie.original_name}</h4>
			</li>`;
			})
		document.getElementById(ul).innerHTML=o;
	

}
get('https://api.themoviedb.org/3/trending/movie/day?api_key=96720994e176bb4de36d509ff7aacfbe','movies');
get('https://api.themoviedb.org/3/trending/movie/week?api_key=96720994e176bb4de36d509ff7aacfbe','movies2');
get('https://api.themoviedb.org/3/trending/tv/day?api_key=96720994e176bb4de36d509ff7aacfbe','series');
get('https://api.themoviedb.org/3/trending/tv/week?api_key=96720994e176bb4de36d509ff7aacfbe','series2');
get('https://api.themoviedb.org/3/movie/upcoming?api_key=96720994e176bb4de36d509ff7aacfbe','upm');
get('https://api.themoviedb.org/3/tv/on_the_air?api_key=96720994e176bb4de36d509ff7aacfbe','on');
get('https://api.themoviedb.org/3/discover/movie?api_key=96720994e176bb4de36d509ff7aacfbe','pop');
/*function get(url,ul){
	fetch(url)
	.then((res)=>res.json())
	.then((data)=>{
		let o='';
data.results.forEach(function(movie){
			o+=`<li>
			<img src="https://image.tmdb.org/t/p/w342/${movie.poster_path}">
			<h4>${(movie.title) ? movie.title : (movie.name) ? movie.name : movie.original_name}</h4>
			</li>`;
			
		});
		document.getElementById(ul).innerHTML=o;
	})
}*/