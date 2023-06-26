import React from 'react';
import ListCard from './ListCard';
function ListInput(props)
{
    const renderList = props.values.map((item)=>{
        return(
            <ListCard items={item}></ListCard>
            )
    })
    return(
        <div>{renderList}</div>
    );
}
export default ListInput;
