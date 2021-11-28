import React from 'react';

const NewsChannelsContentCard = (props) => {
    return (
        <div className="col-10 mx-auto">
            <p id="title">{props.title}</p>
            <p id="link"><a href={props.link} target="_blank" rel="noreferrer">{props.link}</a></p>
            <hr id="hr" />
        </div>
    )
}

export default NewsChannelsContentCard;
