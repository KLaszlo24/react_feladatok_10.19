import { useState } from 'react'
import OsztalyAdatok from './components/OsztalyAdatok'
import OsztalyVezerlo from './components/OsztalyVezerlo';

function App(){
  const [hangulat, setHangulat]=useState<string>("Átlagos")
  const [jelenlevok, setJelenlevok]=useState<number>(24)

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
    </div>
  )
}

export default App
