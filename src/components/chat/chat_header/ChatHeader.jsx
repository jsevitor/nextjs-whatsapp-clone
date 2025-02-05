import { Icon } from "@iconify/react";
import Image from "next/image";
import styles from "@/components/chat/chat_header/ChatHeader.module.css";

const ChatHeader = () => {
  return (
    <header className={styles.chatHeader}>
      <div>
        <span className={styles.chatUserImg} title="Dados do perfil">
          <Image
            className={styles.profilePic}
            src={"/profile-pic.jpg"}
            width={36}
            height={36}
            alt="Profile Picture"
          />
        </span>
      </div>
      <div className={styles.chatUserInfo}>
        <div className={styles.chatUserName}>
          <h3>Joao</h3>
        </div>
      </div>

      <div className={styles.chatOptions}>
        <div className={styles.chatVideoCall}>
          <span
            className={styles.cameraIcon}
            title="Baixe o app para fazer ligações"
          >
            <Icon
              icon="ph:video-camera-fill"
              width={22}
              height={22}
              color="#A2ACB2"
            />
          </span>
          <span>
            <Icon
              icon="mdi:chevron-down"
              width={10}
              height={10}
              color="#A2ACB2"
            />
          </span>
        </div>
        <div className={styles.chatSearch} title="Pesquisar...">
          <span className={styles.searchIcon}>
            <Icon
              icon="material-symbols:search-rounded"
              width={24}
              height={24}
              color="#566771"
            />
          </span>
        </div>
        <div className={styles.chatMoreOptions} title="Mais opções">
          <span className={styles.dotsIcon}>
            <Icon
              icon="pepicons-pop:dots-y"
              width={24}
              height={24}
              color="#566771"
            />
          </span>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
