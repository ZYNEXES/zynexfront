import AboutUs from "@/components/about/body";
import Chart from "@/components/about/chart";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function AboutPage() {
    return (
        <div>
        <Navbar />
        <Chart/>
       <AboutUs />
         <Footer />
       </div>
    )
}