import { useState } from "react";
import styles from "@/components/chatlist/chatlist_tabs/ChatlistTabs.module.css";

const ChatlistTabs = () => {
  const [activeTab, setActiveTab] = useState("tudo");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.tabsContainer}>
        <button
          onClick={() => handleTabClick("tudo")}
          className={activeTab === "tudo" ? styles.activeTab : styles.tabsBtn}
        >
          <span>Tudo</span>
        </button>
        <button
          onClick={() => handleTabClick("nao_lidas")}
          className={
            activeTab === "nao_lidas" ? styles.activeTab : styles.tabsBtn
          }
        >
          <span>Não Lidas</span>
        </button>
        <button
          onClick={() => handleTabClick("favoritas")}
          className={
            activeTab === "favoritas" ? styles.activeTab : styles.tabsBtn
          }
        >
          <span>Favoritas</span>
        </button>
        <button
          onClick={() => handleTabClick("grupos")}
          className={activeTab === "grupos" ? styles.activeTab : styles.tabsBtn}
        >
          <span>Grupos</span>
        </button>
      </div>
    </div>
  );
};

export default ChatlistTabs;
