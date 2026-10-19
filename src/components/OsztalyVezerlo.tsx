
type OsztalyVezerloProps = {
  jelenletNovelese: () => void;
  jelenletCsokkentese: () => void;
  hangulatValtoztatas: () => void;
};

function OsztalyVezerlo({jelenletNovelese,jelenletCsokkentese,hangulatValtoztatas,}: OsztalyVezerloProps) {
  return (
    <div className="card shadow">
      <div className="card-body text-center">
        <h3 className="card-title mb-3">
          Vezérlőpanel
        </h3>

        <div className="d-flex justify-content-center flex-wrap gap-2">
          <button
            className="btn btn-success"
            onClick={jelenletNovelese}>Jelenlét növelése
          </button>

          <button
            className="btn btn-danger"
            onClick={jelenletCsokkentese}>Jelenlét csökkentése
          </button>

          <button
            className="btn btn-primary"
            onClick={hangulatValtoztatas}>Hangulat változtatása
          </button>
        </div>
      </div>
    </div>
  );
}

export default OsztalyVezerlo;
