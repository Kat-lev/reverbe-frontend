import React from "react";
import { useMessages } from "../hooks/useMessages";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";

function OneToOnePage() {
  const { messages, loading } = useMessages();
  const { id } = useParams();
  const navigate = useNavigate();

  if (loading) return <div className="min-h-screen flex items-center justify-center">Carregant missatges...</div>;
  if (!messages.length) return <div className="min-h-screen flex items-center justify-center">Cap missatge disponible</div>;

  const currentIndex = messages.findIndex((m) => m.id === id);
  const message = currentIndex !== -1 ? messages[currentIndex] : messages[0];

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % messages.length;
    navigate(`/style2/${messages[nextIndex].id}`);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + messages.length) % messages.length;
    navigate(`/style2/${messages[prevIndex].id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 sm:px-8 py-12">
      <Header />

      <Card data={message} variant="single" />

      <div className="flex gap-4 mt-4">
        <Button variant="secondary" onClick={handlePrev}>
          ←
        </Button>
        <Button variant="primary" onClick={handleNext}>
          →
        </Button>
      </div>

      <p className="text-sm text-gray-500 mt-2">
        Missatge {currentIndex !== -1 ? currentIndex + 1 : 1} de {messages.length}
      </p>
    </div>
  );
}

export default OneToOnePage;
