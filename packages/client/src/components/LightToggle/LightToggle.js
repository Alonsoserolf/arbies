import React from 'react'
import { connect } from "react-redux";
import { toggleLight } from '../../store/theme/actions'
import './LightToggle.scss'

function LightToggle({ toggleLight }) {
  return (
    <div className="toggle-box" onChange={() => toggleLight()}>
      <input type="checkbox" name="checkbox1" id="toggle-box-checkbox"/>
      <label htmlFor="toggle-box-checkbox" className="toggle-box-label-left"></label>
      <label htmlFor="toggle-box-checkbox" className="toggle-box-label"></label>
    </div>
  )
}

export default connect(null, ({ toggleLight }))(LightToggle)
