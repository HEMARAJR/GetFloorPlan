import React, { useRef, useState } from 'react'
import './Floorplan2DEditor.css'

// Very basic SVG-based 2D floorplan editor starter.
// Extend this with drag/drop, snapping, interactive arrows, etc.
function Floorplan2DEditor() {
  const [rect, setRect] = useState({x: 50, y: 50, width: 200, height: 120})
  const [dragging, setDragging] = useState(false)
  const [start, setStart] = useState(null)
  const svgRef = useRef(null)

  // Arrow drag handler: resize room
  const handleArrowDown = (e, direction) => {
    setDragging(direction)
    setStart({x: e.clientX, y: e.clientY, ...rect})
  }
  const handleMouseMove = (e) => {
    if (!dragging) return
    let dx = e.clientX - start.x
    let dy = e.clientY - start.y
    let next = {...rect}
    if (dragging === 'right') next.width = Math.max(60, start.width + dx)
    if (dragging === 'bottom') next.height = Math.max(40, start.height + dy)
    setRect(next)
  }
  const handleMouseUp = () => setDragging(false)

  React.useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }
  })

  return (
    <div className="floorplan-2d-editor">
      <h3>2D Floorplan Editor</h3>
      <svg ref={svgRef} width={400} height={250} style={{background:'#fff8', border:'1px solid #bbb'}}>
        {/* Room rectangle */}
        <rect x={rect.x} y={rect.y} width={rect.width} height={rect.height}
          stroke="#4676fa" strokeWidth={3} fill="#dce6fa" rx={4}/>
        {/* Room label */}
        <text x={rect.x+rect.width/2} y={rect.y+rect.height/2} textAnchor="middle" alignmentBaseline="middle"
              fontSize="20" fill="#222">Living Room</text>
        {/* Right arrow for resizing width */}
        <g style={{cursor:'ew-resize'}} onMouseDown={e=>handleArrowDown(e,'right')}>
          <rect x={rect.x+rect.width-10} y={rect.y+rect.height/2-10} width={20} height={20} fill="#4676fa" rx={3}/>
          <polygon points={`
            ${rect.x+rect.width+2},${rect.y+rect.height/2}
            ${rect.x+rect.width-5},${rect.y+rect.height/2-7}
            ${rect.x+rect.width-5},${rect.y+rect.height/2+7}
          `} fill="#fff"/>
        </g>
        {/* Bottom arrow for resizing height */}
        <g style={{cursor:'ns-resize'}} onMouseDown={e=>handleArrowDown(e,'bottom')}>
          <rect x={rect.x+rect.width/2-10} y={rect.y+rect.height-10} width={20} height={20} fill="#4676fa" rx={3}/>
          <polygon points={`
            ${rect.x+rect.width/2},${rect.y+rect.height+2}
            ${rect.x+rect.width/2-7},${rect.y+rect.height-5}
            ${rect.x+rect.width/2+7},${rect.y+rect.height-5}
          `} fill="#fff"/>
        </g>
        {/* Measurements */}
        <text x={rect.x+rect.width/2} y={rect.y-8} textAnchor="middle" fontSize="14" fill="#444">
          {rect.width} cm
        </text>
        <text x={rect.x-30} y={rect.y+rect.height/2} textAnchor="end" fontSize="14" fill="#444">
          {rect.height} cm
        </text>
      </svg>
      <p>Drag the arrows to resize the room. Extend this with more rooms, snapping, etc.</p>
    </div>
  )
}

export default Floorplan2DEditor