import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom'

function Websitecreate() {
  const formRef = useRef(null)
  const [isSending, setIsSending] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)
  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitMessage(null)

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setSubmitMessage({ type: 'error', text: 'Email service is not configured yet.' })
      return
    }

    setIsSending(true)
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      formRef.current.reset()
      setSubmitMessage({ type: 'success', text: 'Your request was sent successfully.' })
    } catch (error) {
      console.error('EmailJS submission failed:', error)
      const errorDetails = error?.text || error?.message || 'Please check your EmailJS service and template settings.'
      setSubmitMessage({ type: 'error', text: `Unable to send your request: ${errorDetails}` })
    } finally {
      setIsSending(false)
    }
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
          
          <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
            <input type="hidden" name="to_email" value="melngar650@gmail.com" />
            <div className="Right">
              <input type="text" name="user_name" className='InputBox' placeholder='Enter Your Name' required />
              <input type="text" name="country" className='InputBox' placeholder='Enter Your Country' required />
              <textarea name="description" className='InputBox TextArea' placeholder='Enter Your Description' required></textarea>
              
              <button className='InputBox SentButton' type='submit' disabled={isSending}>
                {isSending ? 'Sending...' : 'Send It'}
              </button>
            </div>
            
            <div className="Left">
              <input type="tel" name="phone" className='InputBox' placeholder='Enter Your Number' required />
              <input type="email" name="user_email" className='InputBox' placeholder='Enter Your Email' required />
              <textarea name="reference_link" className='InputBox TextArea' placeholder='Enter A Link Website Like You Want'></textarea>
            </div>
          </form>
          {submitMessage && (
            <p className={`SubmitMessage ${submitMessage.type}`} role="status">
              {submitMessage.text}
            </p>
          )}
          <div className="Ciricle BottomRight"></div>
        </div>
      </div>
    </div>
  )
}

export default Websitecreate
