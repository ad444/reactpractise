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
        <div id="card" className="col-5">
            <p id="newsChannelsSectors" onClick={()=>{
                rssLink(props.url)
            }}>{props.cardContent}</p>
        </div>
    )
}

export default ICard
