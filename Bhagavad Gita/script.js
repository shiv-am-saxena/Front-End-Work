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
			console.log(res[items])

		}
	})
} catch (error) {
	console.error(error);
}
// document.getElementsByClassName("navbar-brand")[0]