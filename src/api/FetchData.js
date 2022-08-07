import { useSelector, useDispatch } from "react-redux/es/exports";

import axios from "axios";
// import {useDispatch} from 'react-redux';

// const url ="https://supermind-staging.vercel.app/api/test/listing";
async function FetchData() {
    let dispatch = useDispatch();
    const res = await axios.get(
      "https://supermind-staging.vercel.app/api/test/graph"
    );
    dispatch({type:'graphData',value:res.data})
    // setDataArray(res.data);
  }

export default FetchData;