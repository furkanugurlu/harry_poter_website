import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { home_background_off_on } from "../actions";

import InfoWrapper from "../component/infoWrapper";

import styles from "../styles/home.module.css";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(home_background_off_on(true));
    return () => {
      dispatch(home_background_off_on(false));
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>harry potter yazarı</div>
      <div className={styles.authorWrapper}>
        <div className={styles.authorImage}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/440px-J._K._Rowling_2010.jpg" />
        </div>
        <div className={styles.authorText}>
          <p>
            Joanne Kathleen "Jo" Rowling veya bilinen adıyla J. K. Rowling (d.
            31 Temmuz 1965, İngiltere), Harry Potter adlı fantastik roman
            serisinin İngiliz yazarı. Kathleen, kendisine verilen bir ad
            olmamasına rağmen, büyükannesinin onuruna bu adı almıştır.
          </p>
          <p>
            Joanne Rowling, 31 Temmuz 1965'te Chipping Sodburry, İngiltere'de
            doğdu. Ailesiyle birlikte Bristol'e, daha sonra da Chepstow'a
            taşındı. Liseyi Wyedean Comprehensive'de okuduktan sonra Exeter
            Üniversitesinde Fransız Dili ve Edebiyatı eğitimini tamamladı ve
            Londra'ya yerleşerek araştırmacı ve iki dil bilen bir sekreter
            olarak İnsan Hakları Örgütünde çalışmaya başladı. Harry Potter
            serisinin dışında dört romanı daha yayımlanan Rowling, polisiye
            türündeki üç eserini Robert Galbraith mahlasıyla yazmıştır. İlk
            eseriyse 6 yaşındayken yazdığı "Tavşan" adlı hikâyesidir.
          </p>
        </div>
      </div>

      <InfoWrapper
        title="Hogwarts"
        image="https://images.unsplash.com/photo-1593679900565-208954fbf96e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcnJ5JTIwcG90ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        p1="Hogwarts Cadılık ve Büyücülük Okulu, İngiliz yazar J.K. Rowling tarafından kaleme alınan Harry Potter serisindeki cadılık ve büyücülük eğitimi veren kurgusal okul."
        p2="Kısa adıyla Hogwarts, İskoçya'da bulunur ve sihir aleminin prestijli okullarından biridir. 11. yüzyılda 1000'li yıllarda çağın en önemli 4 büyücüsü tarafından kurulmuştur. Dört okul binası da onların soyadlarını taşır: Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw ve Salazar Slytherin."
        p3="Yedi yıllık eğitim sürecine başlayacak öğrencilerini on bir yaşından itibaren alır. Öğrenciler Hogwarts Express ile okula gelirler. Hogwarts, her yıl 1 Eylül'de açılmaktadır. Her yıl 1. sınıfların hangi binaya gideceklerini belirlemek için bir seçme yapılır. Bu seçim 'Seçmen Şapka' tarafından yapılır."
        p4="Hogwarts kampüsünün en şatafatlı yapısını oluşturan Hogwarts Şatosu'nun tüm karmaşık oda ve geçitlerini bilen biri yoktur. Katların arasında bulunan merdivenlerin her cuma değişmesi bu hareketli şatonun tamamıyla öğrenilememesinin nedenlerinden biridir. Fakat Çapulcu Haritası işaretlenemez yerler dışında tüm Hogwarts'ı göstermektedir. Çapulcu Haritası; Aylak (Remus Lupin), Kılkuyruk (Peter Pettigrew), Patiayak (Sirius Black) ve Çatalak (James Potter) tarafından yapılmıştır. Okulun kurulduğu dönemle ilintili olarak 18. yy mimarisinden etkilenen okulun içi, ünlü büyücü ve cadıların heykelleri, portreleri ve yine büyü dünyasıyla ilgili birçok nesneyle süslenmiştir."
      />
      <InfoWrapper
        title="Harry Potter"
        image="https://i2.wp.com/shiftdelete.net/wp-content/uploads/2021/09/harry-potter-izleme-sirasi-2021.jpg?fit=1280%2C720&ssl=1"
        p1="Harry Potter, İngiliz yazar J. K. Rowling tarafından yazılan yedi fantastik romandan oluşan seri. Romanlar, Hogwarts Cadılık ve Büyücülük Okulu'nda eğitim gören genç büyücü Harry Potter ile arkadaşları Hermione Granger ve Ron Weasley'nin yaşamlarını konu alır."
        p2="Serinin ilk romanı Harry Potter ve Felsefe Taşı'nın 26 Haziran 1997'de yayımlanmasından bu yana kitaplar dünya çapında büyük bir popülerlik ve ticari başarı elde etti. Eleştirmenlerden olumlu eleştiriler alan kitaplar, çocukların yanı sıra geniş bir yetişkin kitlenin de ilgisini çekti ve genç yetişkin edebiyatının temel taşlarından biri olarak kabul gördü.[1] Şubat 2018 itibarıyla 80 dile çevrilerek dünya genelinde 500 milyondan fazla satan seri, tarihin en çok satan kitap serisi hâline geldi.[2] Serinin son dört kitabı arka arkaya tarihin en hızlı satan kitabı rekorunu kırdı. Son kitap, piyasaya çıktığı ilk 24 saat içinde ABD'de yaklaşık 11 milyon kopya sattı."
        p3="Serinin yedi kitabı, Warner Bros. Pictures tarafından sekiz filmden oluşan bir seriye dönüştürüldü. Şubat 2020 itibarıyla Harry Potter film serisi tüm zamanların en yüksek hasılat yapan üçüncü film serisidir. 2016 itibarıyla Harry Potter franchise'ının toplam değerinin 25 milyar dolar olduğu tahmin edilmekte,[3] bu da onu tüm zamanların en çok hasılat elde eden medya frenchise'larından biri yapmaktadır."
      />
    </div>
  );
}

export default Home;
