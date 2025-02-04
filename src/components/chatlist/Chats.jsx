import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styles from "@/components/chatlist/Chats.module.css";
import chat from "@/data/chatData.json";
import ChatlisHeader from "./chatlis_header/ChatlisHeader";
import ChatlistTabs from "./chatlist_tabs/ChatlistTabs";

const Chats = () => {
  const [chatData, setChatData] = useState([]);
  const [activeChat, setActiveChat] = useState(null); // Estado para o chat ativo

  useEffect(() => {
    setChatData(chat);
  }, []);

  const handleChatClick = (index) => {
    setActiveChat(index); // Atualiza o chat ativo
  };

  return (
    <div className={styles.chatsSection}>
      <ChatlisHeader />
      <ChatlistTabs />

      {/* CHAT LIST */}
      <div className={styles.chatlist}>
        {/* ARCHIVED CHAT LIST */}
        <button className={styles.chatlistArchived}>
          <div className={styles.archivedIconContainer}>
            <span>
              <Icon
                icon="material-symbols:archive-outline-rounded"
                width={28}
                height={28}
                color="#00a884"
              />
            </span>
          </div>
          <div className={styles.archivedTitleContainer}>
            <span>Arquivadas</span>
          </div>
          <div className={styles.archivedCountContainer}>
            <span>4</span>
          </div>
        </button>

        {/* CHATS */}
        {chatData.map((chat, index) => (
          <div
            className={`${styles.chatlistContainer} ${
              activeChat === index ? styles.activeChat : ""
            }`}
            key={index}
            onClick={() => handleChatClick(index)} // Ativa o chat clicado
          >
            <div className={styles.chatContainer}>
              <div className={styles.chatImage}>
                <img src={chat.foto || "/profile-pic.jpg"} alt={chat.nome} />
              </div>
              <div className={styles.chatBody}>
                <div>
                  <div className={styles.chatHeader}>
                    <h3>{chat.nome}</h3>
                    <span>{chat.data}</span>
                  </div>
                  <div className={styles.chatMensage}>
                    <p>{chat.mensagem}</p>
                    <span className={styles.chatMoreIcon}>
                      <Icon
                        icon="mdi:chevron-down"
                        width={26}
                        height={26}
                        color="#8696A0"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.chatFooter}>
          <div className={styles.chatFooterContainer}>
            <div className={styles.chatFooterContent}>
              <div>
                <span className={styles.footerIcon}>
                  <Icon
                    icon="uis:lock"
                    width={12}
                    height={12}
                    color="#111b21"
                  />
                </span>
                <span>Suas mensagens pessoais são protegidas com a {""}</span>
              </div>
              <a href="">criptografia de ponta a ponta</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
