import SoalPHP from "./SoalPHP";

import React, { useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

const ListSoalPHP = () => {
  const history = useHistory();
  const [jawab, setJawab] = useState(3);
  let { id } = useParams();
  let plus = Number(id) + 1;
  const c = String(jawab);
  let final = Number(id);
  let b = Number(id) - 1;
  let pilih = SoalPHP[b].pilihan;

  function handleClick(e) {
    if (e.target.value === SoalPHP[b].Jawaban) {
      let path = `/php/${plus}`;
      history.push(path);
      e.target.checked = false;
      // window.location.reload();
    } else {
      setJawab((prev) => prev - 1);
    }
  }
  const a = (
    <div>
      <p>
        {SoalPHP[b].id}. {SoalPHP[b].soal}{" "}
      </p>
      <ul>
        <li className="flex mt-2">
          <input
            onClick={handleClick}
            type="radio"
            value="A"
            name="radio-1"
            className="radio mx-2"
          />
          &nbsp; A. &nbsp; {pilih[0].jawab}
        </li>
        <li className="flex mt-2">
          <input
            onClick={handleClick}
            type="radio"
            value="B"
            name="radio-1"
            className="radio mx-2"
          />
          &nbsp; B. &nbsp; {pilih[1].jawab}
        </li>
        <li className="flex mt-2">
          <input
            onClick={handleClick}
            type="radio"
            value="C"
            name="radio-1"
            className="radio mx-2"
          />
          &nbsp; C. &nbsp; {pilih[2].jawab}
        </li>
        <li className="flex mt-2">
          <input
            onClick={handleClick}
            type="radio"
            value="D"
            name="radio-1"
            className="radio mx-2"
          />
          &nbsp; D. &nbsp; {pilih[3].jawab}
        </li>
      </ul>
    </div>
  );

  const refreshPage = () => {
    let path = `/php/1`;
    history.push(path);
    window.location.reload();
  };
  const modal = (
    <div>
      <label htmlFor="my-modal" className=""></label>
      <input type="checkbox" checked id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Sayang sekali, anda gagal!</h3>
          <p className="py-4">Jangan menyerah, Coba lagi!!</p>
          <div className="modal-action fle justify-between">
            <label htmlFor="my-modal">
              <Link to="/" className="btn btn-primary">
                Kembali Home
              </Link>
            </label>
            <label htmlFor="my-modal">
              <Link onClick={refreshPage}>
                <button className="btn btn-primary">Coba lagi</button>
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
  const modalResult = (
    <div>
      <label htmlFor="my-modal" className=""></label>
      <input type="checkbox" checked id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box text-center">
          <h3 className="font-bold text-lg">Congratulations!</h3>
          <p className="py-4">
            Anda berhasil menyelesaikan Quiz, Silahkan coba quiz lainnya!!
          </p>
          <div className="modal-action ">
            <label htmlFor="my-modal">
              <Link to="/" className="btn btn-primary">
                Kembali Home
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full flex">
      <h1 className="hp text-white font-bold">
        <i className="bi bi-heart-fill text-red-500"></i> {c}
      </h1>
      {c < 1 && modal}
      {final > 10 && modalResult}
      {a}
    </div>
  );
};

export default ListSoalPHP;
