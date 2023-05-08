let url = "https://kontests.net/api/v1/all";
try {
	const  response = fetch(url);
	response.then((v)=>{
        return v.json()
    }).then((res)=>{
        ihtml = ""
		for(items in res)
		{
			ihtml += `
            <div class="card col-12 col-md-6 col-lg-4 col-xl-3 m-5 p-2">
                <h1 class="card-img-top bg-light">${res[items].site}</h1>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title"><strong>${res[items].name}</strong></h5>
                    <p class="card-text">
                        <strong>Start-time</strong>: ${res[items].start_time}<br>
                        <strong>End-time</strong>: ${res[items].end_time}<br>
                        <strong>Duration</strong>: ${res[items].duration}
                    </p>
                    <a href="${res[items].url}" class="btn mt-auto btn-primary" target="_blank">Go to contest</a>
                </div>
            </div>
            `
			document.getElementsByClassName("row")[0].innerHTML = ihtml;
		}
	}).catch((error)=>{
        document.body.style.backgroundImage = `url("https://www.pixel4k.com/wp-content/uploads/2018/10/error-inscription-text-word-4k_1540575225.jpg")`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        console.error(error);
    })
} catch (error) {
    document.body.style.backgroundImage = `url("https://www.pixel4k.com/wp-content/uploads/2018/10/error-inscription-text-word-4k_1540575225.jpg")`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
	console.error(error);
}
