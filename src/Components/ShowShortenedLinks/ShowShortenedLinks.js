import './ShowShortenedLinks.css'
import '../../App.css'
import Button from './Button/Button';

const ShowShortenedLinks  = ({links}) => {
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
                            <Button short = {link.short_link}/>
                        </div>
                    </li>
                )
            })}
            </ul>
        </div>
     );
}
 
export default ShowShortenedLinks ;