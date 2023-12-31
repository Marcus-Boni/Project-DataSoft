import Head from 'next/head';
import { useSession } from 'next-auth/react';

import Dashboard from './dashboard';
import { Header } from '@/components/Header';
import { SideMenu } from '@/components/SideMenu';
import { Login } from '@/components/Login';
import scss from '../styles/Home.module.scss';

const Home: React.FC = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>DataSoft - Data Dashboard</title>
        <meta name="description" content="A Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={scss.main}>
        {session && (
          <>
            <SideMenu />
            <Dashboard />
          </>
        )}
        <Login />
      </main>
    </>
  );
};

export default Home;
