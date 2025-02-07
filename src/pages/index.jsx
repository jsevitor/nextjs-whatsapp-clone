import Chat from "@/components/chat/Chat";
import Chats from "@/components/chatlist/Chats";
import Intro from "@/components/intro/Intro";
import Navbar from "@/components/navbar/Navbar";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeChat, setActiveChat] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setActiveChat(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.app_topBg}></div>
      <div className={styles.app_container}>
        <Navbar />
        <Chats activeChat={activeChat} setActiveChat={setActiveChat} />
        {activeChat === null ? <Intro /> : <Chat activeChatData={activeChat} />}
      </div>
    </div>
  );
}
