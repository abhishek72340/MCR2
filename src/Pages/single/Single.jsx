import React from 'react'
import './Single.css';
import {useParams} from 'react-router-dom';
import {data} from '../../DB.jsx';
export default function Single() {
    const {id}=useParams;
    const singleData=data.find(item=>item.uuid===id);
   
  return (
    <div id='single-data'>
        <h2 id='single-goal'>{singleData.goal}</h2>
        <img src={singleData.thumbnail} alt="img" />
       
    </div>
  )
}
