import React from "react";
import { mockMessages } from "../mockData";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";


function OneToOnePage() {
   const { id } = useParams();
  const navigate = useNavigate();

  const currentIndex = mockMessages.findIndex((m) => m.id === id);
  const message = mockMessages[currentIndex] || mockMessages[0];

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % mockMessages.length;
    navigate(`/style2/${mockMessages[nextIndex].id}`);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + mockMessages.length) % mockMessages.length;
    navigate(`/style2/${mockMessages[prevIndex].id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 sm:px-8 py-12">
    <Header />
      <Card data={message} variant="single" />

      <div className="flex gap-4">
        <Button variant="secondary" onClick={handlePrev}>
          ← Anterior
        </Button>
        <Button variant="primary" onClick={handleNext}>
          Siguiente →
        </Button>
      </div>

      <p className="text-sm text-gray-500 mt-2">
        Missatge {currentIndex + 1} de {mockMessages.length}
      </p>
    </div>
  );
}

export default OneToOnePage;