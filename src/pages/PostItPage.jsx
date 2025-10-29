import React, {useState} from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { mockMessages } from "../mockData";

function PostItPage() {
  const [selected, setSelected] = useState(null);

  return (
  <div className="min-h-screen bg-gray-100">
    <Header />
    <main
        className="
          max-w-7xl mx-auto mt-14
          p-4 sm:p-6 lg:p-8 
          grid gap-6
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        "
      >
        {mockMessages.slice(0, 6).map((msg) => (
          <div
            key={msg.id}
            onClick={() => setSelected(msg)}
            className="cursor-pointer transform hover:scale-105 hover:rotate-1 transition"
          >
          <Card data={msg} variant="postit" />
          </div>
        ))}
      </main>
      {selected && (
        <Modal onClose={() => setSelected(null)}>
          <Card data={selected} variant="single" />
        </Modal>
      )}
  </div>
  );
}

export default PostItPage;