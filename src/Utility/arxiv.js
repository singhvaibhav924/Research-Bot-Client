export async function fetchArxivData(ids, setRefItems) {
    try {
        const url = `http://export.arxiv.org/api/query?id_list=${ids.join(',')}`;
        const response = await fetch(url);
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "application/xml");

        const entries = xmlDoc.getElementsByTagName('entry');
        const results = [];
        let i = 0
        for (let entry of entries) {
            const title = entry.getElementsByTagName('title')[0].textContent;
            const summary = entry.getElementsByTagName('summary')[0].textContent;
            const authorElements = entry.getElementsByTagName('author');
            const authors = Array.from(authorElements).map(author => author.getElementsByTagName('name')[0].textContent);
            results[i] = {id: ids[i], title: title, authors: authors, summary: summary}
            i++;
        }
        setRefItems(results)
    } catch (error) {
      console.error('Error fetching or parsing data:', error);
    }
  }