
import ListSoalPHP from "./ListSoalPHP";
import Footer from '../Layouts/Footer'
import Navbar from "../Layouts/Navbar";
export default function Soal(){
       
return(
  <div className='max-w-3xl '>
  <Navbar/>
    <div className="soal-wrap flex-wrap  rounded-lg shadow-xl border justify-between ">      
        <ListSoalPHP/>       
        {/* <Button /> */}      
    </div>
    <Footer/>
    </div>

  )

}
