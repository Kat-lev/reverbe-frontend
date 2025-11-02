import { useMessages } from "../hooks/useMessages";
import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";

function ScrollPage() {
  const { messages, loading } = useMessages();

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
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <h1 className="text-2xl font-bold mt-8 mb-4">Reverbe - Missatges</h1>

        {messages.map((msg) => (
          <Card key={msg.id} data={msg} variant="scroll" />
        ))}
      </main>
    </div>
  );
}

export default ScrollPage;
