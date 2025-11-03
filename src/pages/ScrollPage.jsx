import { useMessages } from "../hooks/useMessages";
import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import { useState } from "react";
import Metadata from "../components/Metadata.jsx";

function ScrollPage() {
  const { messages, loading } = useMessages();
  const [dataEnabled, setDataEnabled] = useState(false);
  const [authorEnabled, setAuthorEnabled] = useState(false);
  const [dataOrder, setDataOrder] = useState("newest");
  const [authorOrder, setAuthorOrder] = useState("az");


  if (loading)
    return (<div className="min-h-screen flex items-center justify-center">Carregant missatges...</div>
    );

  if (!messages.length)
    return (<div className="min-h-screen flex items-center justify-center">Cap missatge disponible</div>
    );

  return (
    <div className="min-h-screen text-gray-900 transition-colors duration-500"
     style={{
    backgroundColor: "var(--primary)",
    color: "var(--secondary)",
  }}>
      <Header 
        dataEnabled={dataEnabled}
        setDataEnabled={setDataEnabled}
        authorEnabled={authorEnabled}
        setAuthorEnabled={setAuthorEnabled}
        dataOrder={dataOrder}
        setDataOrder={setDataOrder}
        authorOrder={authorOrder}
        setAuthorOrder={setAuthorOrder}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <h1 className="text-2xl font-bold mt-8 mb-4">Reverbe - Missatges</h1>

        {messages.map((msg) => (
          <Card key={msg.id} data={msg} variant="scroll" dataEnabled={dataEnabled} authorEnabled={authorEnabled} />
        ))}
      </main>
    </div>
  );
}

export default ScrollPage;
