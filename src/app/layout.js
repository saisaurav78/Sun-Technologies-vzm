import "./globals.css";
import Navbar from "../components/Navbar";
import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets:["latin"],
  preload:true
}
);
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8'></meta>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Sun Technologies Vzm is a trusted IT sales and services provider in Vizianagaram, offering computer sales, laptop repairs, CCTV installations, and IT services for businesses and individuals.'
        />
        <meta
          name='keywords'
          content='IT sales, Computer shops, computer sales, laptop repairs, CCTV installations, IT services, Vizianagaram, computer service, Computer parts, CCTV maintenance'
        />
        <meta name='author' content='Sun Technologies Vzm' />
        <meta name='robots' content='index, follow' />

        <title>Sun Technologies Vzm</title>
      </head>
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
