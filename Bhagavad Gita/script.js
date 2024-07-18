const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fc67eab140mshdbdff4fa926cd48p190615jsneca443d030f1',
        'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
    }
};




const fetchChapters = async () => {
    try {
        const response = await fetch(url, options);
        const res = await response.json();
        let ihtml = "";
        for (items in res) {
            ihtml +=
                `<div class="card col-12 col-md-6 col-lg-4 col-xl-3 m-5 p-2">
					<img
						src="https://wallpaperaccess.com/full/4524218.jpg"
						class="card-img-top bg-dark"
						alt="..." />
					<div class="card-body d-flex flex-column">
						<h5 class="card-title"><strong>नाम </strong>: ${res[items].name}</h5>
						<p class="card-text">
							<strong>सारांश</strong>: ${res[items].chapter_summary_hindi}
						</p>
						<button type="button" class="btn mt-auto btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop${res[items].chapter_number}">
							<strong>श्लोक पढ़ें</strong>
						</button>
					</div>
				</div>
	
				<!-- Modal -->
				<div class="modal fade" id="staticBackdrop${res[items].chapter_number}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				<div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
					<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="staticBackdropLabel">${res[items].name}</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<div class="accordion" id="accordionExample">
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					</div>
					</div>
				</div>
				</div>`
            document.getElementsByClassName("row")[0].innerHTML = ihtml;
        }
    } catch (error) {
        console.error(error);
    }
}


const fetchVerses = async () => {
    try {
        for (let i = 1; i <= 18; i++) {
            const link = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${i}/verses/`;
            try {
                const value = await fetch(link, options);
                const result = await value.json();
                let ihtm = "";
                for (item in result) {
                    ihtm += `
					<div class="accordion-item">
						<h2 class="accordion-header" id="headingOne">
						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${result[item].chapter_number}-${result[item].verse_number}" aria-expanded="true" aria-controls="collapseOne">
							${result[item].text}<br><strong>भावार्थ: </strong>
						</button>
						</h2>
						<div id="collapse${result[item].chapter_number}-${result[item].verse_number}" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
						<div class="accordion-body">
							<p class="d-flex flex-column">${result[item].translations[0].description}<br><br><span class="ml-auto"><strong>लेखक का नाम: </strong>${result[item].translations[0].author_name}</span></p><hr>
							<p class="d-flex flex-column">${result[item].translations[1].description}<br><br><span class="ml-auto"><strong>लेखक का नाम: </strong>${result[item].translations[1].author_name}</span></p><hr>
							<p class="d-flex flex-column">${result[item].translations[2].description}<br><br><span class="ml-auto"><strong>लेखक का नाम: </strong>${result[item].translations[2].author_name}</span></p><hr>
							<p class="d-flex flex-column">${result[item].translations[3].description}<br><br><span class="ml-auto"><strong>लेखक का नाम: </strong>${result[item].translations[3].author_name}</span></p><hr>
							<p class="d-flex flex-column">${result[item].translations[4].description}<br><br><span class="ml-auto"><strong>लेखक का नाम: </strong>${result[item].translations[4].author_name}</span></p><hr>
							<p class="d-flex flex-column">${result[item].translations[5].description}<br><br><span class="ml-auto"><strong>लेखक का नाम: </strong>${result[item].translations[5].author_name}</span></p><hr>
							<p class="d-flex flex-column">${result[item].translations[6].description}<br><br><span class="ml-auto"><strong>लेखक का नाम: </strong>${result[item].translations[6].author_name}</span></p>
						</div>
						</div>
					</div>`
                    document.getElementsByClassName("accordion")[i - 1].innerHTML = ihtm;
                }
            } catch (error) {
                console.error(error.message);
            }
        }
    } catch (error) {
        console.error(error.message)
    }
}

fetchChapters()
fetchVerses()
