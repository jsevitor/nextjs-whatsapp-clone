import styles from "@/components/chat/chat_footer/ChatFooter.module.css";
import { Icon } from "@iconify/react";

const ChatFooter = () => {
  return (
    <footer className={styles.main}>
      <div className={styles.chatFooter}>
        <div>
          <span>
            <Icon
              icon="ic:baseline-plus"
              width={30}
              height={30}
              color="#54656F"
            />
          </span>
        </div>
        <div className={styles.chatbox}>
          teste
          <input type="text" />
        </div>
        <div>
          <span>
            <Icon
              icon="material-symbols:mic"
              width={24}
              height={24}
              color="#54656F"
            />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default ChatFooter;
