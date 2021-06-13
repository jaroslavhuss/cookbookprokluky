import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="searchNar"
     value={keyword}
     placeholder={"search recipe"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar