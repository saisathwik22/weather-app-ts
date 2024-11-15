import type { PropsWithChildren } from "react";
import Header from "./header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='bg-gradient-to-br from-background to-muted'>
      <Header />
      <main className='min-h-screen mx-auto px-4 py-8 container'>
        {children}
      </main>
      <footer className='border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60'>
        <div className='mx-auto container px-4 text-center text-gray-400'>
          <p>Made by Sai Sathwik</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
