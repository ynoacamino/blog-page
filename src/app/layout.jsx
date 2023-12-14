import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './components/navBar/NavBar';
import Footer from './components/Home/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full flex flex-col items-center justify-start relative">
          <NavBar />
          <div className="w-full max-w-6xl">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
