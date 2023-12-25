import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createPortal, flushSync } from 'react-dom'

function App() {
  const [count, setCount] = useState(20)
  const [num, setnum] = useState(20)
  const handleClick=()=>{
    // flushSync(()=>{
    //   setCount(count=>count+=1)
    // })
    // // console.log(refButton.current);
    
    // flushSync(()=>{
    //   setCount(count=>count+=1)
    // })
      // setCount(count=>count+=1)
      // setCount(count=>count+=1)
      setCount(count=>count+=1)
  }
  const refButton = useRef()
  useEffect(() => {
    const { height } = refButton.current.getBoundingClientRect();
    setnum(count=>count+=1)
    console.log(height,111);
  }, [count]);
  console.log('0000');
  
  useEffect(() => {
    const { height } = refButton.current.getBoundingClientRect();
    console.log(height,count,222);
  }, [count]);

  return (
    <div onClick={handleClick}>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={refButton} style={{height:count}} onClick={() => setCount((count) => count + 1)}>
          count is {count}--- {num}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <div>
  <p>这个子节点被放置在父节点 div 中。</p>
  {createPortal(
    <p>这个子节点被放置在 document body 中。</p>,
    document.body
  )}
</div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
