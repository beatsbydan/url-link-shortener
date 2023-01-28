import { useState } from 'react'
import './Button.css'
const Button = ({short}) => {
    const [copyState, setCopyState] = useState('Copy')
    const [bgColor, setBgColor] = useState('hsl(180, 66%, 49%)')
    const handleCopy = () => {
        setCopyState('Copied!');
        setBgColor('hsl(255, 11%, 22%)',);
        navigator.clipboard.writeText(short)    
    }
    return (
        <div className="Button">
            <button onClick={handleCopy} style ={{background: bgColor }}>{copyState}</button>
        </div>
    );
}
 
export default Button;