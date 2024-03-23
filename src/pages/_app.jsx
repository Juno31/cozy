import '@/styles/globals.css';
import Head from 'next/head';
import OverlayProvider from '@/module/overlay/overlay-provider';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultHead />
      <OverlayProvider>
        <Component {...pageProps} />
      </OverlayProvider>
    </>
  );
}

const DefaultHead = () => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no"
      />
      <title>junoforest</title>
      <meta
        name="description"
        key={'description'}
        content="This is what I love"
      />
      <meta
        property="og:locale"
        key="og:locale"
        content="ko_KR"
      />
      <meta
        property="og:type"
        key="og:type"
        content="website"
      />
      <meta
        property="og:site_name"
        key="og:site_name"
        content="junoforest"
      />
      <meta
        property="og:title"
        key={'og:title'}
        content="junoforest"
      />
      <meta
        property="og:description"
        key="og:description"
        content="This is what I love"
      />
      <meta
        id="og:image"
        property="og:image"
        key="og:image"
        content="https://junoforest.com/assets/images/rainForest.jpeg"
      />
    </Head>
  );
};
