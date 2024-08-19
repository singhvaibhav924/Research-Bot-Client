export function generateLitReview(abstract, words, papers, setPage, setOutput) {
    let url = 'https://singhvaibhav924-research-bot.hf.space/generateLiteratureSurvey/';
    let data = {
        abstract: abstract,
        words: words,
        papers: papers
    };
    console.log(data);
    fetchPlus(url, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((res) => {
        setOutput(res)
        setPage("o");
    });
}
function fetchPlus(url, options) {
    console.log("Sending data to URL " + url);
    return fetch(url, options)
        .then((res) => {
            if (res.ok) {
                return res.json();  // Return JSON if the response is okay
            } else {
                console.log("Retrying in 10 secs");
                return new Promise((resolve) => {
                    setTimeout(() => resolve(fetchPlus(url, options)), 10000);  // Retry after 10 seconds and resolve the returned promise
                });
            }
        })
        .catch((error) => console.error(error.message));
}