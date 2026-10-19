
type OsztalyAdatokProps = {
  jelenlevok: number;
  hangulat: string;
};

function OsztalyAdatok({jelenlevok,hangulat,}: OsztalyAdatokProps) {
  let hangulatSzin = "secondary";

  if (hangulat === "Jó") {
    hangulatSzin = "success";
  } else if (hangulat === "Kiváló") {
    hangulatSzin = "primary";
  }

  return (
    <div className="card shadow mb-4">
      <div className="card-body text-center">
        <h3 className="card-title mb-3">
          Osztály adatai
        </h3>

        <p className="fs-5">
          Jelenlévő diákok száma:{" "}
          <strong>{jelenlevok} fő</strong>
        </p>

        <p className="fs-5">
          Osztály hangulata:{" "}
          <span className={`badge bg-${hangulatSzin}`}>
            {hangulat}
          </span>
        </p>
      </div>
    </div>
  );
}

export default OsztalyAdatok;
