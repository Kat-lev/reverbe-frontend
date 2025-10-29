import { useState } from "react";
import { mockMessages } from "../mockData"; 
import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";

function ScrollPage() {
    const [messages] = useState(mockMessages);
    
    return (
     <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <h1 className="text-2xl font-bold mb-4">Reverbe — Missatges</h1>

        {messages.map((msg) => (
          <Card key={msg.id} data={msg} />
        ))}
      </main>
    </div>
  );
}

export default ScrollPage;