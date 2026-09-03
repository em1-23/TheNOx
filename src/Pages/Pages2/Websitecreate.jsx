import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom'

function Websitecreate() {
  const [imagePreview, setImagePreview] = useState(null)
  const [fileObject, setFileObject] = useState(null)
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFileObject(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }
  const handleSubmit = (es) => {
    es.preventDefault()
    console.log("تم إرسال البيانات والملف:", fileObject)
  }
  return (
    <div className='Section WebsiteCreate H'>
      <div className="Header">
        <h3 className="Name">Create Your Website</h3>
        <Link to="/"><h1 className='LogoName'>{"</>"} NoxCode</h1></Link>
      </div>
      <div className="FormStyler">
        <div className="Slider Left_Slider_Photo">
          <div className="Ciricle Ciricle_Blah">
            <h1>Create Your Website</h1>
            <h3>Come And Get Your WebSite Now</h3>
            <p></p>
          </div>
          <div className="Ciricle Bottom"></div>
          <div className="Ciricle Center"></div>
        </div>
        <div className="Slider Right_Slider_Form">
          <h1>Enter Your Information To Contact With You</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="Right">
              <input type="text" className='InputBox' placeholder='Enter Your Name' />
              <input type="text" className='InputBox' placeholder='Enter Your Countery' />
              <textarea className='InputBox TextArea' placeholder='Enter Your Description'></textarea>
              <input 
                type="file" 
                id="FileSvg" 
                accept="image/*"
                onChange={handleImageChange} 
                hidden 
              />
              <label htmlFor="FileSvg" className='InputBox Label'>
                {imagePreview ? (
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="UploadedPreviewImage"
                  />
                ) : (
                  "Upload Your Logo"
                )}
              </label>
              <button className='InputBox SentButton' type='submit'>Send It</button>
            </div>
            
            <div className="Left">
              <input type="tel" className='InputBox' placeholder='Enter Your Number' />
              <input type="email" className='InputBox' placeholder='Enter Your Email' />
              <textarea className='InputBox TextArea' placeholder='Enter A Link Website Like You Want'></textarea>
            </div>
          </form>
          <div className="Ciricle BottomRight"></div>
        </div>
      </div>
    </div>
  )
}

export default Websitecreate
