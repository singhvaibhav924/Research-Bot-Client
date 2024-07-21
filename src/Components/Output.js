import "./Styles/Output.css"
import RefItem from "./RefItem"
export default function Output(props) {

    return(
        <div id = "out-container">
            <div id = "out">
            <p class = "field">Generated Literature Review:</p>
            <textarea id="abstract" name="abstract" rows="22" cols="50">props.output["summary"]</textarea>
            <p class = "field">Cited Papers:</p>
            <div class = 'list-container'>
                <RefItem />
                <RefItem />
                <RefItem />
                <RefItem />
                <RefItem />
            </div>
            <button type='button' id = "generate-new" onClick={()=> {props.setPage("i")}}>Generate New</button>
            </div>
        </div>
    )
}