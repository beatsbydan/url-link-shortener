import {useState} from 'react'
import './Shortener.css'
import '../../../App.css'
import ShowShortenedLinks from '../../ShowShortenedLinks/ShowShortenedLinks'
import useLocalStorage from '../../useLocalStorage/useLocalStorage'
// import { useEffect } from 'react'
const Shortener = () => {
    const [border, setBorder] = useState(null);
    const [error, setError] = useState(null);
    const [link, setLink] = useState("");
    const [links, setLinks] = useLocalStorage('myLinks',[])
    const handleChange = (e) => {
        setLink(e.target.value);
    }
    const handleLinkShortener = (e) => {
        e.preventDefault();
        if(link === ""){
            setError('Please add a link');
            setBorder('red');  
        }
        else{
            setError(null);
            setBorder(null);
        }
        const shorten = async() => {
            const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
            const data = await res.json();
            let result = {
                id: data.result.code,
                original_link: data.result.original_link,
                short_link: data.result.full_short_link
            }
            setLinks((state)=> [...state, result])
        }
        setTimeout(shorten,1500)
        setLink("");
    }
    return (  
        <div className="Shortener">
            <div className="shortener">
                <form action="#" onSubmit={handleLinkShortener}>
                    <div className="input">
                        <input type="url" onChange={handleChange} name='link' placeholder="Shorten a link here..." value={link} style ={{borderColor : border}} />
                        <em>{error}</em>
                    </div>
                    <button onClick={handleLinkShortener} type="submit"> Shorten It!</button>
                </form>
            </div>
            {<ShowShortenedLinks links = {links} />}
        </div>
    );
}
 
export default Shortener;