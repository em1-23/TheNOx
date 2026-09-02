import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom'

const EMAILJS_SERVICE_ID = 'service_xxxxxxx'
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxxx'

function Websitecreate() {
  const [formData, setFormData] = useState({
    Name: '',
    Number: '',
    TypeOfTheProject: '',
    SvgPngLogoLink: '',
    Email: '',
    Countery: '',
    ForYouOrCompany: '',
  })

  const handel = async (e) => {
    e.preventDefault()

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.Name,
          number: formData.Number,
          project_type: formData.TypeOfTheProject,
          logo_link: formData.SvgPngLogoLink,
          email: formData.Email,
          country: formData.Countery,
          client_type: formData.ForYouOrCompany,
          to_email: 'melngar650@gmail.com',
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      )

      alert('تم إرسال الرسالة بنجاح')
      setFormData({
        Name: '',
        Number: '',
        TypeOfTheProject: '',
        SvgPngLogoLink: '',
        Email: '',
        Countery: '',
        ForYouOrCompany: '',
      })
    } catch (error) {
      console.error('EmailJS error:', error)
      alert('حدث خطأ أثناء الإرسال، برجاء المحاولة مرة أخرى.')
    }
  }

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function Input(No) {
    const label = String(No.label || '')
    const letters = label.split('')

    return (
      <div className="wave-group">
        <input
          required
          type={No.type}
          className="input"
          name={No.name}
          value={No.value}
          onChange={(e) => No.onChange(No.name, e.target.value)}
        />
        <span className="bar"></span>
        <label className="label">
          {letters.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              className="label-char"
              style={{ '--index': index }}
            >
              {letter}
            </span>
          ))}
        </label>
      </div>
    )
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
          <div className="Ciricle Center">FOCUS</div>
          <img src="/IMgs/IMG.png" alt="Image Of Me" />
        </div>
        <div className="Slider Right_Slider_Form">
          <h1>Enter Your Information To Contact With You</h1>
          <form onSubmit={handel}>
            <div className="Right">
              <Input type="text" label="Name" name="Name" value={formData.Name} onChange={handleInputChange} />
              <Input type="tel" label="Number" name="Number" value={formData.Number} onChange={handleInputChange} />
              <Input type="text" label="Type Of The Project" name="TypeOfTheProject" value={formData.TypeOfTheProject} onChange={handleInputChange} />
              <Input type="text" label="Svg/Png Logo Link" name="SvgPngLogoLink" value={formData.SvgPngLogoLink} onChange={handleInputChange} />
            </div>
            <div className="Left">
              <Input type="email" label="Email" name="Email" value={formData.Email} onChange={handleInputChange} />
              <Input type="text" label="Countery" name="Countery" value={formData.Countery} onChange={handleInputChange} />
              <Input type="text" label="For You Or Company" name="ForYouOrCompany" value={formData.ForYouOrCompany} onChange={handleInputChange} />
            </div>
            <button className="SentButton" type="submit">Send</button>
          </form>
          <div className="Ciricle BottomRight"></div>
        </div>
      </div>
    </div>
  )
}

export default Websitecreate