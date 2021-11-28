import React from 'react';
const HomedashboardCard = (props) => {
    return (
        <>
          <div id="card" className="col-5 mx-auto mb-5">
               <div className="row">
                  <div className="col-12">
                        <p id="cardHeader">{props.header}</p>
                  </div>
                  <div className="col-6">
                        <img id="cardImage" src={props.cardImage} alt={props.header} />
                  </div>
                  <div className="col-6">
                        <p id="cardLink"><a href={props.url} target="_blank" rel="noreferrer">{props.string}</a></p>
                  </div>
               </div>
          </div>
        </>
    )
}

export default HomedashboardCard;
