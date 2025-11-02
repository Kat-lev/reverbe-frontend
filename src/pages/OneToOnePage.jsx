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

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Carregant missatges...
      </div>
    );
  if (!messages.length)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Cap missatge disponible
      </div>
    );

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
  <div
    className="relative min-h-screen flex flex-col items-center text-gray-900 transition-colors duration-500 px-4 sm:px-8 py-12"
    style={{
      backgroundColor: "var(--primary)",
      color: "var(--secondary)",
    }}
  >
    <Header />

    <Button
      variant="secondary"
      onClick={handlePrev}
      className="fixed left-4 md:left-10 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 shadow-lg"
    >
      ←
    </Button>

    <Button
      variant="secondary"
      onClick={handleNext}
      className="fixed right-4 md:right-10 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 shadow-lg"
    >
      →
    </Button>

    <div className="w-full flex justify-center mt-12 mb-8">
      <Card data={message} variant="single" />
    </div>

    <p className="text-sm text-gray-500 mb-10">
      Missatge {currentIndex !== -1 ? currentIndex + 1 : 1} de {messages.length}
    </p>
  </div>
);
}

export default OneToOnePage;
