import fetch from node-fetch;
const legolasP = fetch("https://the-one-api.dev/v2/character");

fetch('https://the-one-api.dev/v2/character', { 
    method: 'post', 
    headers: new Headers({
        'Authorization': 'Basic '+btoa('ON1X5b10XRtPEAV1wvJY'), 
        'Content-Type': 'application/x-www-form-urlencoded'
    }), 
    body: 'A=1&B=2'
});

Promise.all([legolasP])
    .then(responses => {
        responses.forEach(r =>{
            r.json().then(character =>{
                console.log(character.name);
            })
        });
    });