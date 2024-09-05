import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import Header from './components/CommonComp/Header';
import PostProvider from '@/context/PostContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
export const metadata = {
  title: 'Hackathon Generator',
  description: 'Generate a new hackathon',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${inter.variable} `}>
        <Header />
        <PostProvider>{children}</PostProvider>
      </body>
    </html>
  );
}
