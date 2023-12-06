import '@/styles/globals.css'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app'
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
    <Head>
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     </Head>
   <Header />
  <motion.div
          key={router.route}
          initial='initial'
          animate='animate'
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
        >
            <Component {...pageProps} />
    </motion.div> 
  <Footer />
  </>
  )
}
