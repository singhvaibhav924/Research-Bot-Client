import "./Styles/RefItem.css"
export default function RefItem(props) {
    return(
        <div id = "ref-item" onClick={()=> {openInNewTab(props.id)}}>
            <div id = "title"><p>{props.title}</p></div>
            <div id = "authors"><p>{props.authors}</p></div>
            <div id = "summary"><p>{props.summary}</p></div>
        </div>
    )
}

const openInNewTab = (id) => {
    let url = `https://www.arxiv.org/abs/${id}`
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }