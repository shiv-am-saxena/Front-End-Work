const loadScript = (url) =>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script");
        script.src = url;
        document.body.insertAdjacentElement("beforeend",script);
        script.onload = (script)=>{
            resolve("Success");
        };
        script.onerror = () => { reject("Bhai Error")}
    });
}
let p = loadScript("http://localhost:5500/Portfolio/index.js");
p.then(value =>
    {
        alert(value)
        return new Promise((resolve,reject)=>
        {
            let sc = document.createElement("script");
            sc.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js";
            document.body.insertAdjacentElement("beforeend",sc);
            sc.onload = (sc)=>{
                resolve("Double Success");
            };
            sc.onerror = () =>{ reject("Bhai phir se Error")}
            
        })
    }).then(value =>{
        alert(value)
    })
    .catch(alert)