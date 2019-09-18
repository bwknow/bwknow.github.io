import React, {useState} from 'react';

const InputElement = () => {
    const [inputText,
        setInputText] = useState("");
    const [history,
        setHistory] = useState([]);

    return <div><input
        onChange={(e) => {
        setInputText(e.target.value);
        setHistory([
            ...history,
            e.target.value
        ])
    }}
        placeholder="Enter text"/>{inputText}

        <hr/>
        <br/>
        <ul>
            {history.map((rec) => {
                return <div>{rec}</div>
            })}

        </ul>
    </div>;
}

export default InputElement