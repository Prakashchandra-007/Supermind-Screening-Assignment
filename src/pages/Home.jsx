import React from "react";
import CategoriesTab from "../components/Categories_tabs/CategoriesTab";
import CoinCards from "../components/CoinCards/CoinCards";
import PaginateNav from "../components/Pagination/PaginateNav";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import {useSelector} from 'react-redux';
import FetchData from '../api/FetchData';
import "./header.css";
function Home(props) {
  const arrayData = useSelector(state=>state.dataArray);
  const pageNumber = useSelector(state=>state.pageNumber);
  let arr = arrayData;
  const [cardList, setCardList] = useState(arrayData);
  useEffect(()=>{
    setCardList(arrayData.slice(pageNumber.start,pageNumber.end));
  },[arrayData])
  // create categories
  let CategoriSet = new Set();
  arr &&
    arr.map((items) => {
      items.tags.map((tag) => {
        CategoriSet.add(tag);
      });
    });
  let categories = [...CategoriSet];
  let newArr = [];
  function filteration(keyword) {
    newArr =
      arr &&
      arr.filter((obj) => {
        return obj.tags.includes(keyword);
      });
    setCardList(newArr);
  }
  // console.log(cardList && cardList.length);
 
  return (
    <div>
      {/* Header */}
      <div className="header">
        {categories &&
          categories.map((category, indx) => {
            return (
              <CategoriesTab
                filteration={filteration}
                key={indx}
                cat={category}
              />
            );
          })}
      </div>

      {/* body */}
      {cardList &&
        cardList.map((obj) => {
          return (
            <Link  to={{ pathname: '/details',search: `?id=${obj.id}`, query: { id: obj.id } }}  key={obj.id}>
              <CoinCards Carddetails={obj} />
            </Link>
          );
        })}
      {/* pagination */}
      <PaginateNav data={cardList} />
    </div>
  );
}

export default Home;
