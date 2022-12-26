import React, {useState} from 'react'

export default function TextForm(props) {

   const handleUpClick = ()=>{
    props.showAlert('Text Converted UpperCase','success')
    console.log("Upper Case was Clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
   }

   const handleLowClick = ()=>{
    props.showAlert('Text Converted LowerCase','success')
    let newText = text.toLowerCase();
    setText(newText);
   }

   const handleClearClick = ()=>{
    props.showAlert('Clear Text Area','success')
    let newText = '';
    setText(newText);
   }
   

   const handleCopyClick = ()=>{
    props.showAlert('Text Copied in clipboard','success')
    console.log("I am Copy")
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
   // console.log("Clear"+ text);
   // let newText = '';
   // setText(newText);
   }


    // const countWord = ()=>{
    
    //     if (text.length > 0){
    //         return text.trim().split(/[ ]+/).length;
    //     }else{
    //         return 0;
    //     }
    // }
   const handleOnChange = (event) =>{
    console.log("handle on change");
    setText(event.target.value);
   }
   
   const handleExtraSpaces = () =>{
    props.showAlert('Removed Extra spaces From Text','success')
      let newText =text.split(/[ ]+/);
      setText(newText.join(" "))
   }

    const [text, setText] = useState('');
    //text = "next texgt";   // wrong way to change
    //setText("next text");  // right way

    return (
        <>
    
                <div className="container" >
                    <div className="mb-3">
                        <h1>{props.heading} </h1>
                        <label htmlFor="myBox" className="form-label">Example Text area</label>
                        <textarea className="form-control" value={text} onChange = {handleOnChange} id="myBox" style={{backgroundColor : props.mode === 'dark' ?'grey' :'white',color : props.mode === 'dark' ?'white' :'black' , cursor : 'pointer'}}  rows="8"></textarea>
                    </div>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
                <div className="container my-3" style={{color : props.mode === 'dark' ?'white' :'black'}}>
                    <h2>Your text summary</h2>
                    <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length } words,{text.length} Character</p>
                    <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} minute read</p>
                    <h2>Prieview</h2>
                    <p>{text}</p>
                </div>
           
        </>
    )
}
