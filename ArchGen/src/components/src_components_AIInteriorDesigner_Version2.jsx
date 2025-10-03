import React, { useState } from 'react'
import { SketchPicker } from 'react-color'
// Simple AI interior designer mockup.

function AIInteriorDesigner() {
  const [color, setColor] = useState('#fff1e6')
  return (
    <div style={{background:'#ffe', padding:'1rem', borderRadius:8, marginBottom:16}}>
      <h3>AI Interior Designer</h3>
      <p>
        Choose a wall color:
      </p>
      <SketchPicker
        color={color}
        onChangeComplete={c => setColor(c.hex)}
      />
      <div style={{
        marginTop: 20,
        width: 80, height: 40, background: color, border: '1px solid #bbb', borderRadius: 6
      }}>
        Wall preview
      </div>
      <p style={{marginTop:10, fontSize:13}}>(Integrate with ML backend for AI-powered style, furniture, etc.)</p>
    </div>
  )
}

export default AIInteriorDesigner