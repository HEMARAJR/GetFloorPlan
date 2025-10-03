import React from 'react'
import Floorplan2DEditor from '../components/Floorplan2DEditor'
import Floorplan3DView from '../components/Floorplan3DView'
import Floorplan360View from '../components/Floorplan360View'
import AIInteriorDesigner from '../components/AIInteriorDesigner'

function Editor() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem'}}>
      <h2>Editor</h2>
      <Floorplan2DEditor />
      <Floorplan3DView />
      <Floorplan360View />
      <AIInteriorDesigner />
    </div>
  )
}

export default Editor