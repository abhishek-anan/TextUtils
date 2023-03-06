import React ,{useState}  from 'react'

export default function Textform(props) {
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Convert to Upper case","success")
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Convert to Lower case","success")
    }

    const handleCopy = () =>{
        var text = document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Successfully Copied","success")
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ] +/)
        setText(newText.join(" "))
        props.showAlert("Extre space Remove Successfully","success")
    }

    const handleTitleClick = ()=>{
        let newText = text.split(" ")
        let newText1 = ""
        for (var i=0;i<newText.length;i++){
            let a = newText[i].charAt(0)
            a = newText[i].charAt(0).toUpperCase()
            let b =a + newText[i].slice(1,newText[i].length)
            if(newText1 === ''){
                newText1 = newText1 + b
            }else{
                newText1 = newText1 + " " + b
            }
        }

        setText(newText1)
        props.showAlert("Convert to Title case","success")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const count = (text1) => {
        if(text1.charAt(text1.length-1) === ' '){
            return text1.split(" ").length - 1
        }else if (text1.length === 0){
            return 0;
        }
        else{
            return text1.split(" ").length
        }
    }
    const [text,setText] = useState("");
  return (
    <>
        <div className='container' style ={{color:props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-4">
            <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor:props.mode === 'dark'?'#042745':'white',color:props.mode === 'dark'?'white':'black'}} id="mybox" rows="8"></textarea>
            </div>  
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleTitleClick}>Titlecase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra space</button>
        </div>
        <div className="container my-4" style ={{color:props.mode === 'dark'?'white':'#042745'}}>
            <h2>Your Text Summary</h2>
            <p>{count(text)} words and {text.length} characters</p>
            <p>{0.08 * count(text)} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0?text:"Enter something in the textbox above to preview here"}</p>

        </div>
    </>
  )
}
