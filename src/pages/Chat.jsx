import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom"; 

export function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate(); 

  function sendMessage() {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");
    }
  }

  function handleBackToLogin() {
    navigate("/");
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-300">
      <div className="md:max-w-[70%] w-full bg-primary rounded-[40px] flex flex-col rounded-br-[80px] relative">
        <div className="flex-1 flex flex-col md:flex-row h-full">
          <div className="flex-1 md:w-1/2 flex flex-col gap-3 p-5 items-center justify-center">
            <img src="src/assets/Logo Transparente.png" alt="logo"/>
          </div>
          <div className="flex-1 flex flex-col gap-3 p-5 bg-white rounded-tr-[40px] rounded-br-[80px] rounded-tl-[80px] justify-center">
            <div className="flex flex-col items-center px-5 py-8 w-full">
              <span className="text-bg-primary text-4xl text-center font-normal">
                Chat
              </span>
              <div className="flex flex-col h-64 overflow-y-auto w-full mt-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`w-full py-2 px-4 my-1 rounded-lg ${
                      message.sender === "user" ? "bg-primary text-white self-end" : "bg-gray-200 text-black self-start"
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
              <div className="flex w-full mt-4">
                <Input
                  placeholder="Digite sua mensagem"
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1"
                />
                <Button
                  variant="default"
                  type="button"
                  className="bg-primary text-white text-lg h-10 ml-2"
                  onClick={sendMessage}
                >
                  Enviar
                </Button>
              </div>
              <Button
                variant="default"
                type="button"
                className="bg-primary text-white text-lg w-full rounded-[5px] h-14 mt-4"
                onClick={handleBackToLogin} 
              >
                Voltar para o Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
