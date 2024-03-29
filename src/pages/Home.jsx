import { Outlet } from 'react-router-dom';
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import { CryptoProvider } from '@/context/CryptoContext';
import { StorageProvider } from '@/context/StorageContext';
import { TrendProvider } from '@/context/TrendingContext';

const Home = () => {
  return (
    <CryptoProvider>
      <TrendProvider>
        <StorageProvider>
          <main className='relative flex flex-col items-center content-center w-full h-full text-white font-nunito'>
            <div className='fixed w-screen h-screen bg-gray-300 -z-10' />
            <Logo />
            <Navigation />

            <Outlet />
          </main>
        </StorageProvider>
      </TrendProvider>
    </CryptoProvider>
  );
};

export default Home;
