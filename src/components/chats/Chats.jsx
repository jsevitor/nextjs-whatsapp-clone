import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import styles from "@/components/chats/Chats.module.css";

const Chats = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const inputRef = useRef(null);

  const handleSearchClick = () => {
    setIsSearching(true);
    inputRef.current.focus();
  };

  const handleBackClick = () => {
    setIsSearching(false);
    inputRef.current.blur();
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={styles.chatsSection}>
      {/* HEADER */}
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.headerTitle}>
            <h1>Conversas</h1>
          </div>
          <div className={styles.headerOptions}>
            <span>
              <Icon icon="ci:chat-add" width={24} height={24} color="#54656f" />
            </span>
            <span>
              <Icon
                icon="pepicons-pop:dots-y"
                width={24}
                height={24}
                color="#54656f"
              />
            </span>
          </div>
        </div>
      </header>

      {/* SEARCH BAR */}
      <div className={styles.searchBar}>
        <div className={styles.searchBarContainer}>
          <button onClick={isSearching ? handleBackClick : handleSearchClick}>
            {isSearching ? (
              <Icon
                icon={"material-symbols:search-rounded"}
                width={24}
                height={24}
                color="#54656f"
              />
            ) : (
              <Icon
                icon={"material-symbols:arrow-back-rounded"}
                width={24}
                height={24}
                color="#00a884"
              />
            )}
          </button>
          <input
            ref={inputRef}
            type="text"
            name="search"
            id="search"
            placeholder="Pesquisar"
          />
        </div>
      </div>

      {/* TABS */}
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
            className={
              activeTab === "grupos" ? styles.activeTab : styles.tabsBtn
            }
          >
            <span>Grupos</span>
          </button>
        </div>
      </div>

      {/* CHATS */}
      <div className={styles.chats}>
        <div className={styles.chatsContainer}>
          <button>
            <span>{/* <Icon icon={} width={} height={} color="" /> */}</span>
            <div>Arquivadas</div>
            <div>4</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chats;
