import "./Styles/RefItem.css"
export default function RefItem(props) {
    return(
        <div id = "ref-item">
            <div id = "title"><p>props.title</p></div>
            <div id = "authors"><p>props.authors</p></div>
            <div id = "summary"><p>props.summary</p></div>
        </div>
    )
}