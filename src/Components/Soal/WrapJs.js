
import ListSoal from "./ListSoal";

import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
export default function Soal(){
       
return(
  <div className='max-w-3xl '>
  <Navbar/>
    <div className="soal-wrap flex-wrap border border-y-primary  shadow-xl  justify-between ">      
        <ListSoal/>       
        {/* <Button /> */}      
    </div>
    <Footer/>
    </div>

  )

}
