import React from 'react'
import { Link } from 'react-router-dom'
import { FastAccessIcons } from './FastAccessIcons'

function Delta() {
  function Shortcut(NOx){
    const TheUrl = `/${NOx.Url}`
    const shortcutStyle = {
      '--shortcut-color': NOx.color,
    }
    return(
      <Link to={TheUrl} >
        <div className="Shortcut" style={shortcutStyle}>
          <div className="Shortcut_Image_Styler">{NOx.Icon}</div>
          <h4 className='Shortcut_Name_Styler'>{NOx.NameOfIt}</h4>
        </div>
      </Link>
    )
  }
  return (
    <div className='Sections Delta' id="SeeMore">
      <h2 className='Arabic'>الوصول السريع</h2>
      <h2 className='English'>Fast Access</h2>
      <div className="ShortcutsSlider">
        {FastAccessIcons.map((p)=>(
          <Shortcut
            key={p.id}
            Icon={p.icon}
            NameOfIt={p.name} 
            Url={p.url}
            color={p.color}
          />
        ))}
      </div>
    </div>
  )
}

export default Delta