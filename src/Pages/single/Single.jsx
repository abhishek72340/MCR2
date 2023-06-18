import React from 'react'
import {useParams} from 'react-router-dom';
import {data} from '../../DB.jsx';
export default function Single() {
    const {id}=useParams;
    const singleData=data.find(item=>item.uuid===id);
    console.log(singleData)
  return (
    <div>
        {singleData.goal}
        
    </div>
  )
}
