import { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "@/components/chat/chat_footer/ChatFooter.module.css";

const ChatFooter = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <footer className={styles.main}>
      <div className={styles.chatFooter}>
        <div>
          <button className={styles.pulsBtnIcon} title="Anexar">
            <Icon
              icon="ic:baseline-plus"
              width={30}
              height={30}
              color="#54656F"
            />
          </button>
        </div>
        <div className={styles.chatbox}>
          <div className={styles.chatboxContainer}>
            <div className={styles.chatSticks}>
              <button>
                <Icon
                  icon="fluent:sticker-20-regular"
                  width={24}
                  height={24}
                  color="#54656F"
                />
              </button>
            </div>
            <div className={styles.chatInput}>
              <input
                type="text"
                placeholder="Digite uma mensagem"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={styles.chatMic}>
          <button>
            <Icon
              icon={inputValue.trim() ? "mdi:send" : "material-symbols:mic"}
              width={28}
              height={28}
              color="#54656F"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ChatFooter;
