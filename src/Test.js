import React, {useState, useEffect, useRef} from 'react'

function Test() {
  const [name, setName] = useState('')
  const renderCount = useRef(0)

  
  useEffect (() => {
    renderCount.current = renderCount.current + 1 
  })
    
  return (
    <div>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <div>Mi nombre es {name}</div>
        <div>I render {renderCount.current} veces</div>
    </div>
  )
}

export default Test