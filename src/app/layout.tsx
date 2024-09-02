import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-yellow-400 flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto px-4 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
