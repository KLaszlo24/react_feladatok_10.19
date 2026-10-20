import { useState } from 'react'
import OsztalyAdatok from './components/OsztalyAdatok'
import OsztalyVezerlo from './components/OsztalyVezerlo';
import "bootstrap/dist/css/bootstrap.min.css";
import { AllatVezerlo } from './components/AllatVezerlo';
import { AllatLista } from './components/AllatLista';

export interface Allat{
  id: number;
  nev: string;
  kor: number;
}

function App(){

  const [hangulat, setHangulat]=useState<string>("Átlagos")
  const [jelenlevok, setJelenlevok]=useState<number>(24)
  const [allatok, setAllatok] = useState<Allat[]>([
    { id: 1, nev: "Bodri", kor: 4 },
    { id: 2, nev: "Kandúr", kor: 2 },
    { id: 3, nev: "Füles", kor: 7 },
  ]);

  function jelenletNovelese() {
    if (jelenlevok < 30) {
      setJelenlevok(jelenlevok + 1);
    }
  }

  function jelenletCsokkentese() {
    if (jelenlevok > 0) {
      setJelenlevok(jelenlevok - 1);
    }
  }

  function hangulatValtoztatas() {
    if (hangulat === "Átlagos") {
      setHangulat("Jó");
    } else if (hangulat === "Jó") {
      setHangulat("Kiváló");
    } else {
      setHangulat("Átlagos");
    }
  }


  //Állatok innen:(hogy lássam)
  const [nev, setNev] = useState("");
  const [kor, setKor]=useState(0)
  
  
  function allatHozzaadasa() {

    if (nev === "" || kor === 0 || kor < 0 || !Number.isInteger(kor)) {
      return;
    }

    const Ujjallat: Allat = {
      id: Math.max(0, ...allatok.map((allat) => allat.id)) + 1,
      nev: nev.trim(),
      kor: Number(kor),
    }

    setAllatok((elozoAllatok)=>[...elozoAllatok, Ujjallat]);

    setNev("");
    setKor(0);
  }

 function eletkorNovelese(id: number) {
  setAllatok((elozoAllatok) =>
      elozoAllatok.map((allat) =>
        allat.id === id
          ? { ...allat, kor: allat.kor + 1 }
          : allat
      )
    );
 }

 function allatTorlese(id: number) {
    setAllatok((elozoAllatok) =>
      elozoAllatok.filter((allat) => allat.id !== id)
    );
  }


  //10.20 - Extra feladat, mert a tobbi mar megvan

  function allatokEletkorNoveles() {
  setAllatok((elozoAllatok) =>
    elozoAllatok.map((allat) => ({
      ...allat,
      kor: allat.kor + 1,
    }))
  );
}






  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        Osztálytermi napló
      </h1>

      <OsztalyAdatok
        jelenlevok={jelenlevok}
        hangulat={hangulat}
      />

      <OsztalyVezerlo
        jelenletNovelese={jelenletNovelese}
        jelenletCsokkentese={jelenletCsokkentese}
        hangulatValtoztatas={hangulatValtoztatas}
      />

      <br />
      <br />
      <br />
      <br />

      <h1 className="text-center mb-4">
        Állatmenhely nyilvántartó
      </h1>

      <AllatVezerlo
        nev={nev}
        setNev={setNev}
        kor={kor}
        setKor={setKor}
        allatHozzaadasa={allatHozzaadasa}
      />

      <AllatLista
        allatok={allatok}
        eletkorNovelese={eletkorNovelese}
        allatTorlese={allatTorlese}
        allatokEletkorNoveles={allatokEletkorNoveles}
      />
    </div>

    
  );
}

export default App
