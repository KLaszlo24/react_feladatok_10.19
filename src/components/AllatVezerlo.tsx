interface AllatVezerloProps{
    nev: string;
    setNev: (nev: string) => void;
    kor: number;
    setKor: (kor: number) => void;
    allatHozzaadasa: () => void;
}

export function AllatVezerlo({nev, setNev, kor, setKor, allatHozzaadasa}: AllatVezerloProps){
    return (
    <div className="card shadow">
      <div className="card-body">
        <h3 className="card-title text-center mb-3">
          Új állat felvétele
        </h3>

        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <label className="form-label">
              Az állat neve: 
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Név"
              value={nev}
              onChange={(e) => setNev(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Az állat életkora: 
            </label>

            <input
              type="number"
              className="form-control"
              placeholder="Kor"
              value={kor}
              onChange={(e) => setKor(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-2">
          <button
            className="btn btn-primary"
            onClick={allatHozzaadasa}>Állat hozzáadása</button>
        </div>
      </div>
    </div>
  );
}