import React from 'react'
import './DietList.css'

function DietList4() {
    return (
        <div className="dietList">
        <h2>Size Uygun Bir Diyet Listesi</h2>
        <div className="listChart container">
          <div className="row">
              <div className="card col-sm-4" style={{ width: "18rem" }}>
              <img
                  src="https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  className="card-img-top imgTop"
                  alt="..."/>
              <div className="card-body">
                  <ul className="list">
                  Sabah
                  <li className="lists">1 dilim tam buğday/çavdar/ruşeymli ekmek </li>
                  <li className="lists">2 dilim dil peyniri </li>
                  <li className="lists">Domates/salatalık</li>
                  <li className="lists">5-6 adet zeytin</li>
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
                  <li className="lists">Ton balıklı veya ızgara balıklı salata</li>
                  <li className="lists">1 büyük kase salatalık, biber, domatesli semizotu salatası</li>
                  <li className="lists">1 adet galeta veya 1 dilim esmer ekmek</li>
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
                  <li className="lists">1 orta boy zeytinyağlı enginar</li>
                  <li className="lists">2-3 kaşık yoğurt</li>
                  <li className="lists">2 tane mürdüm eriği vb.</li>
                  <li className="lists">1 kase bol domatesli, salatalıklı semizotu salatası</li>
                  </ul>
              </div>
              </div>
          </div>
          
  
        </div>
      </div>
    )
}

export default DietList4
