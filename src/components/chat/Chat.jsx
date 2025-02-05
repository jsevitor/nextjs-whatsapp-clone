import { useEffect, useState } from "react";
import Image from "next/image";
import data from "@/data/chatData.json";
import styles from "@/components/chat/Chats.module.css";
import { Icon } from "@iconify/react";
import ChatHeader from "./chat_header/ChatHeader";
import ChatBody from "./chat_body/ChatBody";
import ChatFooter from "./chat_footer/ChatFooter";

const Chat = () => {
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    setChatData(data);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.chat}>
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
      </div>
    </div>
  );
};

export default Chat;
