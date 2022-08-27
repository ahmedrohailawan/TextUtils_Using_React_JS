import React, {useState} from 'react'
import './Textform.css'


function Textform(props) {

    const HandleOnChange = (event) =>{
        setText(event.target.value)
    }
    
    const UpperCaseClickHandle = () =>{
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showalert("Successfully Converted to UpperCase...","success")
    }

    const LowerCaseClickHandle = () =>{
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showalert("Successfully Converted to LowerCase...","success")
    }

    const CapitalizedClickHandle = () =>{
        const tolower = text.toLowerCase()
        const newtext = tolower;
        const array = newtext.split(" ");
        for (let i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].substring(1);
        }
        const capitalized = array.join(" ");
        setText(capitalized)
        props.showalert("Successfully Capitalized Text...","success")
    }

    const ExtraSpacesClickHandle = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showalert("Extra Spaces were Removed Successfully...","success")
    }

    const SpeakClickHandle = () =>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showalert("Speaking...","success")
    }

    const StopSpeakClickHandle = () =>{
        window.speechSynthesis.cancel()
        props.showalert("Stop Speaking...","success")
    }
    
    const ClearTextClickHandle = () =>{
        let newtext = " "
        setText(newtext)
        props.showalert("Successfully Cleared..","success")
    }
    const CopyClickHandle = () =>{
        navigator.clipboard.writeText(text);
        props.showalert("Successfully Copied to Clipboard..","success")
    }

    const PasteClickHandle = () =>{
        navigator.clipboard.readText().then((clipText) => setText(clipText));
        props.showalert("Successfully Pasted..","success")
    }

    const [text, setText] = useState('');
    
    return (
        <>
        <div className="container">
            <h2 style={{color: props.mode ==="dark" ? "white": "#2588ef"}}> {props.heading} </h2>
            <div className="form-group">
                <textarea className="form-control" value={text} onChange={HandleOnChange} id="mybox" rows="8"style={{backgroundColor: props.mode === "dark" ? "black":"white",border: props.mode === "dark" ? "2px solid white":"2px solid #2588ef",color: props.mode === "dark" ? "white":"black"}}></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-${props.mode}`} onClick={UpperCaseClickHandle}>UpperCase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode}`} onClick={CapitalizedClickHandle}>Capitalize</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode}`} onClick={LowerCaseClickHandle}>LowerCase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode}`} onClick={ExtraSpacesClickHandle}>Remove spaces</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode}`} onClick={SpeakClickHandle}>Speak</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode}`} onClick={StopSpeakClickHandle}>Stop</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode}`} onClick={ClearTextClickHandle}>Clear Text</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode}`} onClick={CopyClickHandle}>Copy</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode}`} onClick={PasteClickHandle}>Paste</button>
            <h3 className="h2_left" style={{color: props.mode ==="dark" ? "white" : "#2588ef"}}>Text Summary</h3>
            <p className="minute_to_read" style={{color: props.mode === "dark" ? "white" : "black"}}>{((text.trim().split(" ")).filter(function (element) { return element !== "";})).length* 0.008} Minutes to Read Above Text</p>
            <p className="length_of_word_and_character" style={{color: props.mode === "dark" ? "white" : "black"}}>{((text.trim().split(/\s+/)).filter(function (element) { return element !== "";})).length} words and {text.length} characters</p>
            <h3 className="h2_left" style={{color: props.mode ==="dark" ? "white" : "#2588ef"}}>Preview</h3>
            <p style={{color: props.mode === "dark" ? "white" : "black"}}> {text.length>0 ? text: "Enter something above to preview it here..."} </p>

        </div>
        </>
    )
}

export default Textform
