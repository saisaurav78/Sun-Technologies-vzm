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
        <title>Sun Technologies Vzm</title>
      </head>
      <body className={roboto.className}>
        <Navbar/>
          {children}
      </body>
    </html>
  );
}
