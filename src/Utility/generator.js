export function generateLitReview(abstract, words, papers, setPage, output) {
    let url = process.env.REACT_APP_API_URL
    let data = {
        abstract : abstract,
        words : words,
        papers : papers
    }
    fetchPlus(url, {
        method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
    }).then((res) => {
        output = res
        setPage("o")
    })
}

function fetchPlus(url, options = {}) {
    console.log("Sending data on URL "+ url)
    return fetch(url, options)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        console.log("Retrying in 10 secs")
        setTimeout(10000)
        return fetchPlus(url, options)
      })
      .catch((error) => console.error(error.message))
}