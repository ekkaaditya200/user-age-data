import React from "react";
function ListCard(props){
    const {name,age}=props.items;
    return(
        <div className="card">
            <div>{name}</div>
            <div>{age}</div>
        </div>
    )
};

export default ListCard;