import { useLayoutEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '../ui/button';
import { ButtonLoader } from '..';


const Pagination = ({ isLoading }: { isLoading: boolean }) => {
   const [searchParams, setSearchParams] = useSearchParams();
   const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));
   // const perPage = !searchParams.get('per_page') ? 12 : Number(searchParams.get('per_page'));

   useLayoutEffect(() => {
      // searchParams.set('page', '1');
      // searchParams.set('per_page', '12');
      // setSearchParams(searchParams);
      // return ()=>{
      //    searchParams.delete('page');
      //    searchParams.delete('per_page');
      // }
   }, [])

   const nextPage = async () => {
      const next = (page === 1 ? 4 : page + 1);
      const nextPerPage = 4
      searchParams.set('page', next.toString());
      searchParams.set('per_page', nextPerPage.toString());
      setSearchParams(searchParams);
   };


   return (
      <div className='justify-center items-center flex '> <Button onClick={nextPage}>{isLoading ? <ButtonLoader /> : "Show more"}</Button></div>
   );
};

export default Pagination;
