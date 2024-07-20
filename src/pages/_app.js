import "@/styles/globals.css";
import 'leaflet/dist/leaflet.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';


export default function App({ Component, pageProps }) {
  <DefaultSeo {...SEO} />
  return <Component {...pageProps} />;
}
