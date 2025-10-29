import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { mockMessages } from "../mockData";

function PostItPage() {
  return (
  <div className="min-h-screen bg-gray-100">
    <Header />
    <main
        className="
          max-w-7xl mx-auto 
          p-4 sm:p-6 lg:p-8 
          grid gap-6
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        "
      >
        {mockMessages.slice(0, 6).map((msg) => (
          <Card key={msg.id} data={msg} variant="postit" />
        ))}
      </main>
  </div>
  );
}

export default PostItPage;