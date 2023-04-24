import Head from "next/head";
import { FC } from "react";
import { Navbar } from '../ui';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

const origin = (typeof window === 'undefined') ? "" : window.location.origin;

const Layout: FC<Props> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title || 'pokemon ApPepepe'}</title>
        <meta name="author" content="Luis Criado"/>
        <meta name="description" content={title}/>
        <meta name="keywords" content={title}/>
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta property="og:description" content="esta es pagina sobre PokeApi"/>
        <meta property="og:image" content={`${origin}/banner.png`}/>
      </Head>
      <Navbar />
      <main style={{ padding: '0px 20px'}}>
        {children}
      </main>
    </>
  )
}

export default Layout;