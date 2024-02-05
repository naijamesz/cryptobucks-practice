/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useRef } from 'react';
import paginationArrow from '@/assets/pagination-arrow.svg';
import submitIcon from '@/assets/submit-icon.svg';
import { CryptoContext } from '@/context/CryptoContext';

const PerPage = () => {
  const { setPerPage } = useContext(CryptoContext);
  const inputRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    let val = inputRef.current.value;
    if (val !== 0) {
      setPerPage(val);
      inputRef.current.value = val;
    }
  };

  return (
    <form className='relative flex items-center mr-6 font-nunito' onSubmit={handleSubmit}>
      <label htmlFor='currency' className='relative flex items-center justify-center'>
        <span className='mr-2 lowercase'>per page: </span>
      </label>

      <input
        type='number'
        ref={inputRef}
        name='currency'
        min='1'
        max='100'
        placeholder='10'
        className='w-8 h-6 text-sm leading-4 text-center bg-gray-200 border border-transparent rounded appearance-none hover:appearance-none placeholder:text-gray-100 placeholder:text-sm required outline-0 focus:border-cyan '
      />
      <button type='submit' className='ml-1 cursor-pointer'>
        <img src={submitIcon} alt='CryptoBucks' className='w-full h-auto' />
      </button>
    </form>
  );
};

const Pagination = () => {
  const { setPage, perPage, cryptoData, page } = useContext(CryptoContext);

  const TotalNumbers = Math.ceil(13220 / perPage);

  const next = () => {
    if (page === TotalNumbers) {
      return null;
    } else {
      setPage(page + 1);
    }
  };
  const prev = () => {
    if (page === 1) {
      return null;
    } else {
      setPage(page - 1);
    }
  };
  const multiStepNext = () => {
    if (page + 3 >= TotalNumbers) {
      //   console.log(page + 3);
      setPage(TotalNumbers - 1);
    } else {
      setPage(page + 3);
    }
  };
  const multiStepPrev = () => {
    if (page - 3 >= TotalNumbers) {
      setPage(TotalNumbers + 1);
    } else {
      setPage(page - 2);
    }
  };

  if (cryptoData && cryptoData.length >= perPage) {
    return (
      <div className='flex flex-col items-center mt-4 md:flex-row md:mt-0 '>
        <PerPage />
        <ul className='flex items-center justify-end mt-4 text-sm sm:mt-0'>
          <li className='flex items-center'>
            <button className='w-8 outline-0 hover:text-cyan' onClick={() => prev()}>
              <img className='w-full h-auto rotate-180' src={paginationArrow} alt='prev' />
            </button>
          </li>

          {page + 1 === TotalNumbers || page === TotalNumbers ? (
            <li>
              <button
                className='flex items-center justify-center w-8 h-8 text-lg rounded-full outline-0 hover:text-cyan'
                onClick={() => multiStepPrev()}>
                ...
              </button>
            </li>
          ) : null}

          {page - 1 !== 0 ? (
            <li>
              <button
                className='outline-0 hover:text-cyan bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-1.5'
                onClick={() => prev()}>
                {page - 1}
              </button>
            </li>
          ) : null}

          <li>
            <button
              disabled
              className='bg-cyan text-gray-300 font-bold rounded-full w-8 h-8 flex items-center justify-center mx-1.5'>
              {page}
            </button>
          </li>
          {page + 1 !== TotalNumbers && page !== TotalNumbers ? (
            <li>
              <button
                className='outline-0 hover:text-cyan bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-1.5'
                onClick={() => next()}>
                {page + 1}
              </button>
            </li>
          ) : null}

          {page + 1 !== TotalNumbers && page !== TotalNumbers ? (
            <li onClick={() => multiStepNext()}>
              <button
                className='flex items-center justify-center w-8 h-8 text-lg rounded-full outline-0 hover:text-cyan'
                onClick={() => multiStepNext()}>
                ...
              </button>
            </li>
          ) : null}

          {page !== TotalNumbers ? (
            <li onClick={() => setPage(TotalNumbers)}>
              <button
                className='outline-0 hover:text-cyan bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-1.5'
                onClick={() => multiStepNext()}>
                {TotalNumbers}
              </button>
            </li>
          ) : null}
          <li className='flex items-center'>
            <button className='w-8 outline-0 hover:text-cyan' onClick={() => next()}>
              <img className='w-full h-auto' src={paginationArrow} alt='prev' />
            </button>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
