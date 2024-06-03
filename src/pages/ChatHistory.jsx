import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dummyMessages = {
  "Luiz": [
    { text: "Olá Luiz, tudo bem?", sender: "Thiago" },
    { text: "Tudo sim. Pode me enviar mais informações sobre a camiseta?", sender: "Luiz" },
    { text: "Tudo bem e com você? Posso sim.", sender: "Thiago" },
  ],
  "Thiago": [
    { text: "Olá Thiago, como vai?", sender: "Luiz" },
    { text: "Estou bem, obrigado! E você?", sender: "Thiago" },
  ],
  "Giovanna": [
    { text: "Oi Giovanna, tudo bem?", sender: "Thiago" },
    { text: "Sim, Thiago. E com você?", sender: "Giovanna" },
  ],
};

export function ChatHistory() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
    <Header/>
    <div className="inset-0 flex items-center justify-center my-20">
      <div className="md:max-w-[70%] w-full rounded-[40px] flex flex-col rounded-br-[80px] relative">
        <div className="flex-1 flex flex-col md:flex-row h-full">
         
          <div className="flex-1 flex flex-col gap-3 p-5 bg-white rounded-tr-[40px] rounded-br-[80px] rounded-tl-[80px] justify-center shadow-custom">
            <div className="flex flex-col items-center px-5 py-8 w-full">
              <span className="text-primary text-4xl text-center font-semibold">
                Histórico de Mensagens
              </span>
              <div className="mt-4">
                {Object.keys(dummyMessages).map((user) => (
                  <div key={user} className="mt-2">
                    <button
                      className="text-lg font-bold text-primary focus:outline-none"
                      onClick={() => setSelectedUser(user)}
                    >
                      {`Conversa com ${user}`}
                    </button>
                    {selectedUser === user && (
                      <div className="mt-2">
                        {dummyMessages[user].map((message, index) => (
                          <div
                            key={index}
                            className={`w-full py-2 px-4 my-1 rounded-lg text-center ${
                              message.sender === selectedUser ? "bg-primary text-white self-end" : "bg-gray-200 text-black self-start"
                            }`}
                          >
                            {message.text}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <Link to="/chat">
                <Button
                  variant="default"
                  className="bg-primary text-white text-lg h-10 ml-2 mt-4"
                >
                  Voltar ao Chat
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
