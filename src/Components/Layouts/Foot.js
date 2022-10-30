import React, { useState } from 'react'
import {
    Link,
    useParams
  } from "react-router-dom";

const Foot = (props) => {
    let {id} = useParams();
    let result = Number(id);
    let plus = result + 1;
    let min;
    result === 1 ? min = 1 : min = result - 1;
    

    
return (<div className="flex mt-3 justify-between sticky">
<div>

<Link to={"/" + min }><button class="btn w-24 btn-accent">Kembali</button></Link>
</div>
<div >
<button class="btn bg-warning btn-warning"><input type="checkbox"  class="checkbox m-2 bg-white" />Simpan Jawaban</button>
</div>
<div >

    <Link to={"/" + plus }><button class="btn bg- btn-secondary">
Selanjutnya
    </button></Link>
</div>


</div>


)}

export default Foot