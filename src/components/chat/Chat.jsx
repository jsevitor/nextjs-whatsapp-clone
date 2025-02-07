import ChatHeader from "./chat_header/ChatHeader";
import ChatBody from "./chat_body/ChatBody";
import ChatFooter from "./chat_footer/ChatFooter";
import styles from "@/components/chat/Chats.module.css";

const Chat = ({ activeChatData }) => {
  if (!activeChatData) return null;

  return (
    <div className={styles.main}>
      <div className={styles.chat}>
        <ChatHeader name={activeChatData.nome} picture={activeChatData.foto} />
        <ChatBody data={activeChatData} />
        <ChatFooter />
      </div>
    </div>
  );
};

export default Chat;
