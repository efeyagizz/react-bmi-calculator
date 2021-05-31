import React from "react";
import "./DietList.css";

function DietList() {
  return (
    <div className="dietList">
      <h2>Size Uygun Bir Diyet Listesi</h2>
      <div className="listChart container">
        <div className="row">
            <div class="card col-sm-4" style={{ width: "18rem" }}>
            <img
                src="https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                className="card-img-top imgTop"
                alt="..."/>
            <div class="card-body">
                <ul className="list">
                Sabah
                <li className="lists">1 dilim tam buğday veya çavdar ekmeği</li>
                <li className="lists">1 yemek kaşığı labne peyniri</li>
                <li className="lists">5 tam ceviz içi</li>
                <li className="lists">Dilediğiniz kadar pulbiber, kimyon, karabiber</li>
                </ul>
            </div>
            </div>
            <div className="card col-sm-4" style={{ width: "18rem" }}>
            <img
                src="https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                className="card-img-top imgTop"
                alt="..."/>
            <div className="card-body">
                <ul className="list">
                Öğle
                <li className="lists">6-7 kaşık zeytinyağlı taze fasülye vb. sebze yemeği </li>
                <li className="lists">1 dilim ekmek</li>
                <li className="lists">1 kase yoğurt ve 1 çay kaşığı toz zerdeçalı karıştırıp yiyin.</li>
                <li className="lists">Dilediğiniz kadar maydanoz, roka, nane, dereotu</li>
                </ul>
            </div>
            </div>
            <div className="card col-sm-4" style={{ width: "18rem" }}>
            <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                className="card-img-top imgTop"
                alt="..."/>
            <div className="card-body">
                <ul className="list">
                Akşam
                <li className="lists">160 g Izgara veya ton balığı</li>
                <li className="lists">Haşlanmış/fırında sebzeler (kabak/patlıcan/biber vb.)</li>
                <li className="lists">5 tam ceviz içi</li>
                <li className="lists">1 kase bol domatesli, salatalıklı semizotu salatası</li>
                </ul>
            </div>
            </div>
        </div>
        

      </div>
    </div>
  );
}

export default DietList;