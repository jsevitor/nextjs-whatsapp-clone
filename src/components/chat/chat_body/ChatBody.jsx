import styles from "@/components/chat/chat_body/ChatBody.module.css";
import { Icon } from "@iconify/react";

const ChatBody = ({ data }) => {
  if (!data) return <p>Selecione um chat</p>;

  const formatDate = (dateString) => {
    const isTimeFormat = /^\d{2}:\d{2}$/.test(dateString);

    return isTimeFormat ? "HOJE" : dateString;
  };

  return (
    <div className={styles.main}>
      <div className={styles.messages}>
        <div className={styles.messagesContainer}>
          <div className={`${styles.message} ${styles.date}`}>
            <span className={styles.messageDate}>{formatDate(data.data)}</span>
          </div>
        </div>
        <div className={styles.messagesContainer}>
          <div
            className={`${
              data.status === "enviado" ? styles.messageOut : styles.messageIn
            } ${styles.message}`}
          >
            <div
              className={`${styles.messageBox} ${
                data.status === "enviado" ? styles.out : styles.in
              }`}
            >
              <div className={styles.messageText}>
                <span>{data.mensagem}</span>
              </div>
              <div className={styles.messageChecker}>
                <div className={styles.messageTime}>{data.hora}</div>
                {data.status === "enviado" && (
                  <div className={styles.messageCheck}>
                    <Icon
                      icon="quill:checkmark-double"
                      width={16}
                      height={16}
                      color="#8696A0"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
