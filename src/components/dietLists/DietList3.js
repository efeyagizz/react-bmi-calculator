import React from 'react'
import './DietList.css'

function DietList3() {
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
                <li className="lists">Domates ve mantarlı 2 yumurtadan omlet</li>
                <li className="lists">1 dilim tam buğday ekmeği</li>
                <li className="lists">Yeşillik ( taze nane/maydanoz/roka vb.)</li>
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
                <li className="lists">1 kase sebze çorbası</li>
                <li className="lists">Izgara/fırın tavuk</li>
                <li className="lists">8-10 adet çiğ badem</li>
                <li className="lists">1 orta boy armut</li>
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
                <li className="lists">1 kase sebze çorbası</li>
                <li className="lists">Izgara/fırın tavuk</li>
                <li className="lists">5-6 kaşık mercimek yemeği</li>
                <li className="lists">3-4 kaşık yoğurt</li>
                </ul>
            </div>
            </div>
        </div>
        

      </div>
    </div>
    )
}

export default DietList3
