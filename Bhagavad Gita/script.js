const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc67eab140mshdbdff4fa926cd48p190615jsneca443d030f1',
		'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
	}
};

try {
	const  response = fetch(url, options);
	response.then((v)=>{
        return v.json()
    }).then((res)=>{
        ihtml = ""
		for(items in res)
		{
			console.log(res[items]);
			ihtml += 
			`<div class="card col-12 col-md-6 col-lg-4 col-xl-3 m-5 p-2">
				<img
					src="https://sourabhmore.com/wp-content/uploads/2021/04/Bhagwat-Gita.jpg"
					class="card-img-top bg-dark"
					alt="..." /> 
				<div class="card-body">
					<h5 class="card-title">${res[items].name}</h5>
					<p class="card-text">
						Some quick example text to build on the card title
						and make up the bulk of the card's content.
					</p>
					<a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
			</div>`
			document.getElementsByClassName("rows")[0].innerHTML = ihtml;
		}
	})
} catch (error) {
	console.error(error);
}
