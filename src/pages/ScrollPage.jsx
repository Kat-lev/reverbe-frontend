import { useState } from "react";
import { mockMessages } from "../mockData"; 
import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";

function ScrollPage() {
    const [messages] = useState(mockMessages);
    
    return (
     <div className="min-h-screen bg-gray-50 text-gray-900">
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