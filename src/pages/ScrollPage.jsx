import { useState } from "react";
import { mockMessages } from "../mockData"; 
import Navbar from "../components/Navbar.jsx";

function ScrollPage() {
    const [messages] = useState(mockMessages);
    
    return (
    <>
    <div>
      <Navbar />
      <h1>Reverbe — Missatges</h1>
      {messages.map((msg) => (
        <div key={msg.id}>
          <h2>{msg.assumpte}</h2>
          <p>{msg.cos}</p>
          <p>
            Enviat per {msg.remitent} — {new Date(msg.data).toLocaleString()}
          </p>

          {msg.reverberacions.length > 0 && (
            <div>
              <h3>Reverberacions:</h3>
              {msg.reverberacions.map((rev) => (
                <div key={rev.id}>
                  <p>{rev.cos}</p>
                  <p>
                    — {rev.remitent}, {new Date(rev.data).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
    </>
    );
}

export default ScrollPage;