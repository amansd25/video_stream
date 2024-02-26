import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/contants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery]=useState();
  const[suggestion, setSuggestion] =useState([]);
  const[showSuggestions, setShowSuggestions] =useState(false);


  const searchCache = useSelector((store)=> store.search);
  const dispatch = useDispatch();  



  useEffect(()=>{
    //API call
   
    // make an api call after every key press
    //but if the diffrence between 2 Api calls is <200ms
    //decline the api ca;;
    const timer = setTimeout(()=>{
    if(searchCache[searchQuery]){
      setSuggestion(searchCache[searchQuery]);
    }else{
      getSearchSuggestions();
    }
   },200);
    
    return()=>{
      clearTimeout(timer);
    };
  },[searchQuery]);
  /****
   * key-p
   * -render the component
   * -useEffect();
   * -start timer => make api call after 200ms
   * 
   * 
   * 
   * -key-ph
   * -re-render the component 
   * -UseEffect();
   * -start new timer => make an API call after 200ms 
   */
  const getSearchSuggestions = async () =>{
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json(); 
    //console.log(json[1]);
    setSuggestion(json[1]);

    //update Cache
    dispatch(
      cacheResults({
        [searchQuery]:json[1],
      })
    );
  };
 

const toggleMenuHandler = ()=> {
  dispatch(toggleMenu());
};

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img 
            onClick={() => toggleMenuHandler()}
            className='h-8 cursor-pointer'
            alt='Menu'
            src='https://www.svgrepo.com/show/506800/burger-menu.svg'/>
            <a href='/'>
            <img 
            className='h-8 mx-2'
            alt='youtube-logo'
            src='https://www.shutterstock.com/image-vector/youtube-logo-social-media-icon-260nw-2310134969.jpg'/>
            </a>
        </div>
        <div className='col-span-10 px-10'>
        <div>
            <input
            className='w-1/2 border border-gray-400 p-2 rounded-l-full'
            type='text'
            value={searchQuery}
            onChange={(e) =>setSearchQuery(e.target.value)}
            onFocus={()=> setShowSuggestions(true)}
            onBlur={()=> setShowSuggestions(false)}
            />
            <button
            className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200'
            >Search🔍</button>
        </div>
      {( showSuggestions && <div className='fixed  bg-white px-1 py-2 shadow-lg rounded-lg  border-gray-50'>
          <ul>
            {suggestion.map((s)=>(<li className='py-2 shadow-sm hover:bg-slate-200'>🔍{s}</li>))}
            
          </ul>
        </div>
        )}
        </div>
        <div className='col-span-1'>
            <img
            className='h-10'
            alt='User_icon'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8co3uvnUsGDu6romq0A5rnZoHFYntms1j1rqwm4Lu_8iaDjmLHTABjIHEY_ITG2yEczE&usqp=CAU'/>
        
    </div>
    </div>
  )
}

export default Head