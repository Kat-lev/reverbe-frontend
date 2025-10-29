import React from "react";
import Button from "./Button";

export default function Card({ data }) {
  const [showReverberacions, setShowReverberacions] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("ca-ES", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-subject">{data.assumpte}</h3>
        <p className="card-sender">{data.remitent}</p>
        <p className="card-date">{formatDate(data.data)}</p>
      </div>

      <div className="card-body">
        <pre className="card-body-text">{data.cos}</pre>
      </div>

      {data.reverberacions?.length > 0 && (
        <div className="card-footer">
          <Button
          variant="primary"
          onClick={() => setShowReverberacions(!showReverberacions)}
            >
             {showReverberacions
            ? "Ocultar reverberacions"
            : `Mostrar reverberacions (${data.reverberacions?.length || 0})`}
        </Button>

          {showReverberacions && (
            <div className="reverberacions">
              {data.reverberacions.map((rev) => (
                <div key={rev.id} className="reverberacio">
                  <h4>{rev.assumpte}</h4>
                  <p className="rev-sender">{rev.remitent}</p>
                  <p className="rev-date">{formatDate(rev.data)}</p>
                  <pre className="rev-body">{rev.cos}</pre>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}