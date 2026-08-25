import React, { useState } from 'react'

function Delta() {
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [trastCode, setTrastCode] = useState()
  const [selectedColor, setSelectedColor] = useState('');
  const handel = (e) =>{
    e.target.Default;
  }
  const handleSend = (e) => {
    e.preventDefault();
    if (!selectedColor) {
      alert("من فضلك اختر لون أولاً!");
      return;
    }
    console.log("الـ ID أو الـ Value المختار للإرسال هو:", selectedColor);
    // هنا تقدر تبعت الـ selectedColor للـ API بتاعك مباشرة
  };

  function RadioInput(No){
    const uniqId = `color_${No.Name}_${No.Id}`
    return(
      <>
        <input
        type="radio"
        name="Color"
        id={uniqId}
        value={No.value}
        onChange={(e)=> onChange(e.target.value)}
        style={{display:"none"}}
      />
        <label htmlFor={uniqId} className='ColorStyler'>
          <div className="Top" style={{backgroundColor: No.upColor}}></div>
          <div className="Bottom" style={{backgroundColor: No.downColor}}></div>
        </label>        
      </>
    )
  }
  
  const ColorOptions = [
    { id: 'red', value: 'Red_Style', upColor: '#ff0000', downColor: '#550000' },
    { id: 'cyan', value: 'Cyan_Style', upColor: '#00ffff', downColor: '#005555' },
    { id: 'blue', value: 'Blue_Style', upColor: '#0000ff', downColor: '#000055' }
  ]

  return (
    <div className='Sections Delta' id="OrderOne">
      <span className="Topic">Order One</span>
      <h1 className="SpecialUnderName">Order And Styling Website</h1>
      <div className="FormSection">
        <form onSubmit={handleSend}>
          <h3>Before You Start To Fill The Inputs Read The Rules </h3>
          <input type="text" className='Box' placeholder="Enter Your Name" />
          <input type="email" className='Box' placeholder="Enter Your Email" />
          <input type="text" className='Box' placeholder="Enter A Code Trust" />
          {ColorOptions.map((color)=>(
            <RadioInput 
              key={color.id}
              id={color.id}
              name="Color"
              value={color.value}
              upColor={color.upColor}
              downColor={color.downColor}
              selectedValue={selectedColor}
              onChange={setSelectedColor}
            />
          ))}
          <button type="submit">Sent It</button>
        </form>
        <p className="Rules"></p>
      </div>
    </div>
  )
}

export default Delta