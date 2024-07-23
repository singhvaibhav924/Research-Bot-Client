import React, { useEffect, useState } from "react";
import {fetchArxivData} from "../Utility/arxiv.js"
import "./Styles/Output.css";
import RefItem from "./RefItem";

export default function Output(props) {
    const [refItems, setRefItems] = useState([]);
    useEffect(() => { 
        const ids = props.output["ids"];
        const initialItems = ids.map(id => ({ id: id, title: "Loading...", authors: "Loading...", summary: "Loading..." }));
        setRefItems(initialItems);
        fetchArxivData(ids, setRefItems);
    }, [props.output["ids"]]);

    return (
        <div id="out-container">
            <div id="out">
                <p className="field">Generated Literature Review:</p>
                <textarea
                    id="abstract"
                    name="abstract"
                    rows="22"
                    cols="50"
                >
                    {props.output["summary"]}
                </textarea>
                <p className="field">Cited Papers:</p>
                <div className="list-container">
                    {refItems.map(item => (
                        <RefItem id = {item.id} title={`Title: ${item.title}`} authors={`Authors: ${item.authors}`} summary={`Summary: ${item.summary}`} />
                    ))}
                </div>
                <button type="button" id="generate-new" onClick={() => props.setPage("i")}>
                    Generate New
                </button>
            </div>
        </div>
    );
}
