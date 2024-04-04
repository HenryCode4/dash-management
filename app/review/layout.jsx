import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";


export default function ReviewLayout({ children }) {
  
  return (
    <html lang="en">
      <body className='relative '>
        <Navbar />
        
        {children}
        </body>
    </html>
  );
}
