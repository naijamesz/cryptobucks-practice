import { useContext, useState } from 'react';
import searchIcon from '@/assets/search-icon.svg';
import { CryptoContext } from '@/context/CryptoContext';
import debounce from 'lodash.debounce';

const SearchInput = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('');
  const { searchData, setCoinSearch, setSearchData, error } = useContext(CryptoContext);

  let handleInput = e => {
    e.preventDefault();
    let query = e.target.value;
    handleSearch(query);
    setSearchText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleSearch(searchText);
  };

  const selectCoin = coin => {
    setCoinSearch(coin);
    setSearchText('');
    setSearchData();
  };
  return (
    <>
      <form className='relative flex items-center w-full xl:w-96 lg:w-60 lg:ml-7 font-nunito' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          value={searchText}
          onChange={e => handleInput(e)}
          placeholder='search here...'
          className='w-full pl-2 bg-gray-200 border border-transparent rounded placeholder:text-gray-100 placeholder:text-base required outline-0 focus:border-cyan '
        />
        <button type='submit' className='absolute cursor-pointer right-1'>
          <img src={searchIcon} alt='CryptoBucks' className='w-full h-auto' />
        </button>
      </form>

      {searchText.length > 0 ? (
        <ul className='absolute right-0 z-10 w-full py-2 overflow-x-hidden bg-gray-200 rounded top-11 lg:w-96 backdrop-filter backdrop-blur-md bg-opacity-60 scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200 h-96 '>
          {searchData ? (
            searchData.map(coin => {
              return (
                <li
                  key={coin.id}
                  className='flex items-center my-2 ml-4 cursor-pointer'
                  onClick={() => selectCoin(coin.id)}>
                  <img src={coin.thumb} alt={coin.id} className='w-[1rem] h-[1rem] mx-1.5' />
                  <span>{coin.name}</span>{' '}
                </li>
              );
            })
          ) : !error.search ? (
            <div className='flex items-center justify-center w-full h-full'>
              <div
                className='w-8 h-8 border-4 border-solid rounded-full border-cyan border-b-gray-200 animate-spin'
                role='status'
              />
              <span className='ml-2 text-base'>Searching...</span>
            </div>
          ) : error.search ? (
            <h1 className='flex items-center justify-center w-full min-h-full text-center text-md text-red'>
              {error.search ? error.search : 'Something unexpected happened!'}
            </h1>
          ) : null}
        </ul>
      ) : null}
    </>
  );
};

const Search = () => {
  const { getSearchResult } = useContext(CryptoContext);

  const debounceFunc = debounce(function (val) {
    getSearchResult(val);
  }, 2000);

  const handleSearch = val => {
    debounceFunc(val);
  };

  return (
    <div className='relative'>
      <SearchInput handleSearch={handleSearch} />
    </div>
  );
};

export default Search;
