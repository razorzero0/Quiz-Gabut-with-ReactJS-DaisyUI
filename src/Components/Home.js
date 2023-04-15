import Navbar from "./Layouts/Navbar";
import { Link } from "react-router-dom";
import Footer from "./Layouts/Footer";

const Home = () => {
  return (
    <div className="home max-w-full ">
      <Navbar />
      <div className="heroHome shadow-2xl border border-y-primary   items-start ">
        <div className="  flex justify-center mt-12">
          <h1 className="text-center  w-80 text-primary text-xl font-bold">
            Pilih Bahasa Pemrogaman
          </h1>
        </div>
        <div className="flex justify-center  mt-8">
          <div className="hero kotak mt-10 w-52 shadow-2xl bg-primary mx-8 rounded-2xl">
            <div className="hero-content text-center">
              <div className="max-w-md text-white">
                <h1 className="text-xl font-bold">javascript</h1>
                <p className="py-2">10 Soal</p>
                <Link to="/js/1">
                  <button className="btn btn-primary border-md border-white">
                    Mulai
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="hero kotak1 mt-10 w-52 shadow-2xl bg-primary mx-8 rounded-2xl">
            <div className="hero-content text-center">
              <div className="max-w-md text-white">
                <h1 className="text-xl font-bold">PHP</h1>
                <p className="py-2">10 Soal </p>
                <Link to="/php/1">
                  <button className="btn btn-primary border-solid border-white">
                    Mulai
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="hero mt-4 w-52 bg-base-200 m-4 rounded-2xl">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-xl font-bold">Hello there</h1>
      <p className="py-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Mulai</button>
    </div>
  </div>
</div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
