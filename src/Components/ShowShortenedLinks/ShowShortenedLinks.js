import { useState } from 'react';
import './ShowShortenedLinks.css'
import '../../App.css'
const ShowShortenedLinks  = ({links}) => {
    const [copyState, setCopyState] = useState('Copy')
    const [bgColor, setBgColor] = useState('hsl(180, 66%, 49%)')
    const handleCopy = (e) => {
        setCopyState('Copied!');
        setBgColor('hsl(255, 11%, 22%)',);
        //navigator.clipboard.writeText(link.short_link)
    }
    return ( 
        <div className="ShowShortenedLinks">
            <ul className="links">
            {links.map(link => {
                return(
                    <li key={link.id} className = "link">
                        <div className="links-flex">
                            <p>{link.original_link}</p>
                        </div>
                        <div className="generated">
                            <p>{link.short_link}</p>
                            <button key={link.id} onClick={(e)=>handleCopy(e)} style ={{background: bgColor }}>{copyState}</button>
                        </div>
                    </li>
                )
            })}
            </ul>
        </div>
     );
}
 
export default ShowShortenedLinks ;