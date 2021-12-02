import React, {useContext} from 'react'
import RSSContext from '../rssContext/RSSContext';
const ICard = (props) => {

    let context = useContext(RSSContext);

    let temp;
    const rssLink = (x)=>{
        temp = x;
        context.getRSSLink(temp);
    }

    return (
        <div id="card" className="col-5" onClick={()=>{
            rssLink(props.url)
        }}>
            <p id="newsChannelsSectors" >{props.cardContent}</p>
        </div>
    )
}

export default ICard
