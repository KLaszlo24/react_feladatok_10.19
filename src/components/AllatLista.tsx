
import type { Allat } from "../App";

interface AllatListaProps {
  allatok: Allat[];
  eletkorNovelese: (id: number) => void;
  allatTorlese: (id: number) => void;
};

export function AllatLista({allatok, eletkorNovelese, allatTorlese,}: AllatListaProps) {
  return (
    <div className="card shadow mt-4">
      <div className="card-body">
        <h3 className="card-title mb-3">Gondozott állatok</h3>

        {allatok.length === 0 ? (
          <p className="text-muted">
            Jelenleg nincs állat a nyilvántartásban.
          </p>
        ) : (
          <ul className="list-group">
            {allatok.map((allat) => (
              <li
                key={allat.id}
                className="list-group-item d-flex justify-content-between align-items-center flex-wrap gap-2"
              >
                <div>
                  <strong>{allat.nev}</strong>
                  <span className="ms-2 text-secondary">
                    {allat.kor} éves
                  </span>
                </div>

                <div className="d-flex gap-2">
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => eletkorNovelese(allat.id)}>Kor növelése
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => allatTorlese(allat.id)}>Törlés
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
