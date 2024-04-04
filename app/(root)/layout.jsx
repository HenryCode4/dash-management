import Navbar from "@/components/Navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative '>
        <Navbar />
        <div className="hidden md:block w-full h-[70px] bg-[#FAFDFC] blur-lg top-[60px] absolute"></div>
        {children}
        <div className="hidden md:block w-full h-[70px] -bottom-2 bg-[#FAFDFC] blur-lg absolute"></div>
        </body>
    </html>
  );
}
