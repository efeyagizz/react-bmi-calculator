import React from 'react'
import './DietList.css'

function DietList2() {
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
            <div className="card-body">
                <ul className="list">
                Sabah
                <li className="lists">Dilediğiniz kadar domates, salatalık, biber, maydanoz, roka, nane</li>
                <li className="lists">2 adet iyi haşlanmış yumurta</li>
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
                <li className="lists">1 kase mercimek çorbası</li>
                <li className="lists">1 büyük kase salatalık, biber, domatesli semizotu salatası</li>
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
                <li className="lists">2 ince dilim karpuz</li>
                <li className="lists">4 yemek kaşığı lor peyniri</li>
                <li className="lists">5 tam ceviz içi</li>
                <li className="lists">1 kase bol domatesli, salatalıklı semizotu salatası</li>
                </ul>
            </div>
            </div>
        </div>
        

      </div>
    </div>
    )
}

export default DietList2
