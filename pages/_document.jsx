import { Html, Head, Main, NextScript } from 'next/document'
import {Navbar, Footer} from "../components";
export default function Document() {
  return (
    <Html className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
      <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ZZ2DDDLC5X"
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-ZZ2DDDLC5X');
            `,
        }}
      />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Adrian Solomon CV"/>
        <meta name="description" content="I am dedicated to crafting intuitive and seamless user experiences for websites and applications."/>
        <meta name="keywords" content="website design trinidad, graphic designers trinidad, website developers trinidad,"/>
        <meta name="robots" content="index,follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
        <meta name="revisit-after" content="5 days"/>
        <meta name="author" content="Adrian Randy Solomon"/>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.50.1/dist/full.css" rel="stylesheet" type="text/css" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css" rel="stylesheet" type="text/css" />
        <meta name="theme-color"  />
      </Head>
      <Navbar/>
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer/>
    </Html>
  )
}