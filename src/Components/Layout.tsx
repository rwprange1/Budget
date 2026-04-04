import {Outlet} from 'react-router-dom';
import Header from '../Header';
//import Footer from '../Footer';

interface LayoutProps{
    logout: () => void;
}

function Layout(props: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen w-full dark:bg-black bg-stone-100">
      <div className="flex grow bg-white  dark:bg-zinc-800 w-full md:w-3/4 dark:outline-1 dark:outline-purple-400 m-auto px-6">
        <main className='w-full'>
        
          <Header logout={props.logout} />

          <Outlet  />
          <div>Hello</div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
