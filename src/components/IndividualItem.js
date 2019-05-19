import React from "react";

const IndividualItem = props =>  {
    return (
      <div className='tree-cell'>
        <h1>{props.firstName}</h1>
        <p>{props.gender}</p>
      </div>
    )
}


export default IndividualItem; 