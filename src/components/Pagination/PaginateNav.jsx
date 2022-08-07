import React from 'react';
import './pagination.css';
import {useDispatch} from 'react-redux';
function PaginateNav({data}) {
  const dispatch = useDispatch();
function paginate(idx){
  dispatch({type: 'changePage',position:{start:idx,end:idx+10}})
  console.log(idx);
}
  return (
    <div className="pagination-Sec">
      <div  className="pageBtn">prev</div>
        {data && data.map((item,idx)=>{
          return (
            <div onClick={()=>{paginate(idx+1)}} key={idx} className="pageBtn">{idx+1}</div>
          )
        })}
        <div  className="pageBtn">next</div>
    </div>
  )
}

export default PaginateNav