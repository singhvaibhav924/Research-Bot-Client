import "./Styles/Input.css"
import {useState} from 'react';
import {generateLitReview} from "../Utility/generator.js"
export default function Input(props) {
    let abstract = "We explore the possibility of using exponents for Image Augmentation in Convolutional Neural Networks (CNN). Furthermore we also explore the extent of controlled non-linearity we can introduce in the Neural Networks using this augmentation technique."
    const [msg, setMsg] = useState("")
    const [abs, setAbs] = useState(abstract);
    const [words, setWords] = useState(500);
    const [papers, setPapers] = useState(4);
    const handleChange = (event, fx) => {
        fx(event.target.value);
      }
    return(
        <div id = "inp-container">
            <div id = "inp">
            <p class = "field">Enter the Abstract of your paper:</p>
            <textarea id="abstract" name="abstract" rows="22" cols="50" onChange={(e)=> {
                handleChange(e, setAbs)
            }}>{abs}</textarea>
            <p class = "field"> Maximum no. of words:</p>
            <input type="text" name="no-of-words" placeholder="500" onChange={(e)=> {
                handleChange(e, setWords)
            }}/>
            <p class = "field">No. of Research Papers to cite:</p>
            <input type="text" name="no-of-papers" placeholder="4" onChange={(e)=> {
                handleChange(e, setPapers)
            }}/>
            <p id = "msg">{msg}</p>
            <button type='button' id = "submit" onClick={()=> {
                if(abs==="") {
                    setMsg("Input the abstract first")
                } else if(words==="") {
                    setMsg("Input the no. of words")
                } else if(Number.isNaN(words)) {
                    setMsg("No. of words must be a number")
                } else if(papers==="") {
                    setMsg("Input the no. of papers")
                } else if(Number.isNaN(papers)) {
                    setMsg("No. of papers must be a number")
                } else {
                    setMsg("Hang Tight... This might take a few seconds")
                    generateLitReview(abs, words, papers, props.setPage, props.setOutput)
                }
            }}>Submit</button> 
            </div>
        </div>
    )
}