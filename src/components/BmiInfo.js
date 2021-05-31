import React from 'react'
import './BmiInfo.css'

function BmiInfo() {
    return (
        <div className="bmiInfo">
            <h1>Vücut Kitle İndeksi Nedir ?</h1>
            <hr />
            <p>Vücut kitle indeksi; ağırlığın boyun karesine bölünmesi formülü ile hesaplanmaktadır. Burada ağırlık kilogram ve boy da metre cinsinden alınmaktadır. VKİ olarak kısaltılmaktadır. Body mass index olarak da bilinmektedir ve BMI da denmektedir. Bireyin ideal kilosunu görebilmesi ve hangi ağırlık kategorisinde olduğunu öğrenebilmesi açısından kullanılan bir formüldür. Ancak vücut yağı ve kas kütlesi için detaylı bir bilgi vermediğinden, özellikle vücut geliştirme ile ilgilenenler için tatmin edici bir sonuç vermeyebilmektedir. Çünkü aşırı kas kütlesine sahip olduklarından sadece boy ve ağırlık ile yapılan hesaplama sonucunda BMI değerleri yüksek çıkabilmektedir. Ayrıca kas kütlesini kaybetmiş olan yaşlı bir bireyin yağ oranının fazla olduğu da vücut kitle indeksi ile görülememektedir.</p>
            <hr />
            <img className="infoImg mt-3" src="https://www.dralpercelik.com/wp-content/uploads/2021/02/vucut-kitle-indeksi.png" alt="" />
            <hr />
            <h1 className="mt-3">Vücut Kitle İndeksi Hesaplaması Nasıl Yapılır?</h1>
            <hr />
            <p>VKİ olarak kısaltılan vücut kitle indeksi hesaplaması, kilonun boyun karesine bölünmesiyle yapılmaktadır. Ağırlığınız boyunuzun karesine bölündüğünde çıkan sonucun ifade ettiği anlam, Dünya Sağlık Örgütü’nün referans aralığı kapsamında hesaplanmaktadır. Çıkan sonuç 30’un üzerindeyse obez, 40’ın üzerindeyse morbid obez ve 50’nin üzerindeyse süper obez olarak kabul edilmektedir.
            Vücut kitle indeksi hesaplaması yapılırken sadece ağırlık ve boy dikkate alınmaktadır. Ancak detaylı vücut kitle indeksi için hesaplama kapsamında yaş, cinsiyet, vücut yağ yüzdesi ve bel çevresi gibi değerler de dikkate alınmaktadır. Vücut kitle indeksi hesaplaması sonucunda vücudunda sağlığını bozacak ölçüde aşırı yağ birikimi olanlar, uzman kontrolünde hesaplayarak bu değerleri kendileri için ideal olan seviyeye getirebilmektedirler.
            </p>
        </div>
    )
}

export default BmiInfo
