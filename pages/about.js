import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { home_background_off_on } from "../actions";
import styles from "../styles/about.module.css";
import { filmDATA } from "../actions/data";

import Aos from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos";

const About = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(home_background_off_on(false));
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  console.log(filmDATA);

  return (
    <div>
      <div className={styles.contain}>
        <span className={styles.title}>Harry Potter hakkında</span>
        <div className={styles.startWrapper}>
          <div className={styles.startWrapperClone}>
            <img src="images/hp.jpeg" alt="" />
            <div className={styles.textWrapper}>
              <p>
                Harry Potter, İngiliz yazar J. K. Rowling tarafından yazılan
                yedi fantastik romandan oluşan seri. Romanlar, Hogwarts Cadılık
                ve Büyücülük Okulu'nda eğitim gören genç büyücü Harry Potter ile
                arkadaşları Hermione Granger ve Ron Weasley'nin yaşamlarını konu
                alır.
              </p>
              <p>
                Serinin ilk romanı Harry Potter ve Felsefe Taşı'nın 26 Haziran
                1997'de yayımlanmasından bu yana kitaplar dünya çapında büyük
                bir popülerlik ve ticari başarı elde etti. Eleştirmenlerden
                olumlu eleştiriler alan kitaplar, çocukların yanı sıra geniş bir
                yetişkin kitlenin de ilgisini çekti ve genç yetişkin
                edebiyatının temel taşlarından biri olarak kabul gördü. Şubat
                2018 itibarıyla 80 dile çevrilerek dünya genelinde 500 milyondan
                fazla satan seri, tarihin en çok satan kitap serisi hâline
                geldi.Serinin son dört kitabı arka arkaya tarihin en hızlı satan
                kitabı rekorunu kırdı. Son kitap, piyasaya çıktığı ilk 24 saat
                içinde ABD'de yaklaşık 11 milyon kopya sattı.
              </p>
              <p>
                Serinin yedi kitabı, Warner Bros. Pictures tarafından sekiz
                filmden oluşan bir seriye dönüştürüldü. Şubat 2020 itibarıyla
                Harry Potter film serisi tüm zamanların en yüksek hasılat yapan
                üçüncü film serisidir. 2016 itibarıyla Harry Potter
                franchise'ının toplam değerinin 25 milyar dolar olduğu tahmin
                edilmekte, bu da onu tüm zamanların en çok hasılat elde eden
                medya frenchise'larından biri yapmaktadır.
              </p>
            </div>
          </div>
          <p>
            Harry Potter dünyası; fantezi, drama, büyüme, okul hikâyesi (gizem,
            gerilim, macera, korku ve romantizm unsurlarını içeren) dâhil olmak
            üzere birçok edebî türü kapsar. Rowling'e göre serinin ana teması
            ölümdür. Serideki diğer başlıca temalar ise önyargı, yozlaşma ve
            çılgınlıktır.
          </p>
          <p>
            Harry Potter dünyası; fantezi, drama, büyüme, okul hikâyesi (gizem,
            gerilim, macera, korku ve romantizm unsurlarını içeren) dâhil olmak
            üzere birçok edebî türü kapsar. Rowling'e göre serinin ana teması
            ölümdür. Serideki diğer başlıca temalar ise önyargı, yozlaşma ve
            çılgınlıktır.
          </p>
        </div>
      </div>

      <span className={styles.title}>Harry Potter FİLMLERİ</span>
      <div className={styles.filmContain}>
        {filmDATA.map((film) => (
          <div key={film.id} className={styles.filmWrapper}>
            <img src={film.img} alt="" />
            <div className={styles.contentWrapper}>
              <span>{film.name}</span>
              <p>Çıkış Yılı : {film.year}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.contain}>
        <span className={styles.title}>
          Hogwarts Cadılık ve Büyücülük Okulu
        </span>
        <div data-aos="fade-right" className={styles.startWrapper}>
          <div className={styles.startWrapperClone}>
            <img src="images/hp2.jpeg" alt="" />
            <div className={styles.textWrapper}>
              <p>
                Kısa adıyla Hogwarts, İskoçya'da bulunur ve sihir aleminin
                prestijli okullarından biridir. 11. yüzyılda çağın en önemli 4
                büyücüsü tarafından kurulmuştur. Dört okul binası da onların
                soyadını taşır; Godric Gryffindor, Helga Hufflepuff, Rowena
                Ravenclaw ve Salazar Slytherin.
              </p>
              <p>
                Yedi yıllık eğitim sürecine başlayacak öğrencilerini on bir
                yaşından itibaren alır. Öğrenciler Hogwarts Ekspresi ile okula
                gelirler. Hogwarts, her yıl 1 Eylül'de açılmaktadır ve o gün her
                zaman bir pazartesiye denk gelmektedir. Her yıl 1. sınıfların
                hangi binaya gideceklerini belirlemek için bir seçme yapılır. Bu
                seçim "Seçmen Şapka" tarafından yapılır. Bu şapka okula yeni
                başlayan birinci sınıfların binalarını seçer ancak seçmen şapka
                öğrencinin isteklerine göre de seçim yapabilir. Bu seçimden
                sonra öğrenci 7 yıl boyunca binasına bağlı şekilde büyücülük
                eğitimi görür. Yaptıkları her iyi ve kötü hareket binalarına
                puan kazandırır veya kaybettirir. Her bina dönem sonunda en
                fazla puana sahip olmak ister çünkü yıl sonunda en yüksek puanı
                alan bina bölüm kupasını alır. Bölüm kupası diğer yılın sonuna
                kadar o binanın öğretmeninin ofisinde durur.
              </p>
            </div>
          </div>
          <p>
            Hogwarts kampüsünün en şatafatlı yapısını oluşturan Hogwarts
            Şatosu'nun tüm karmaşık oda ve geçitlerini bilen biri yoktur.
            Katların arasında bulunan merdivenlerin sıklıkla değişmesi bu
            hareketli şatonun tamamıyla öğrenilememesinin nedenlerinden biridir.
            Fakat Çapulcu Haritası, işaretlenemez yerler dışında tüm Hogwarts'ı
            göstermektedir. Çapulcu Haritası; Aylak (Remus Lupin), Kılkuyruk
            (Peter Pettigrew), Patiayak (Sirius Black) ve Çatalak (James Potter)
            tarafından yapılmıştır. Okulun kurulduğu dönemle ilintili olarak 18.
            yüzyıl mimarisinden etkilenen okulun içi, ünlü büyücü ve cadıların
            heykelleri, portreleri ve yine büyü dünyasıyla ilgili birçok
            nesneyle süslenmiştir.
          </p>
          <p>
            Hogwarts'ta, şatodan başka bu şatonun çevrelediği bir göl, bir
            Quidditch sahası ve Bitkibilim (Büyücülük dünyasında bitkileri
            inceleyen bir bilim dalı) derslikler ve Hagrid'in kulübesi ile
            bahçesi bulunur. Okul, öğrencilere yasak olan Yasak Orman ile
            çevrilidir. Okulun Latince sloganı "Draco Dormiens Nunquam
            Titillandus"un Türkçe çevirisi "Uyuyan Bir Ejderhayı Asla
            Gıdıklama"dır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
