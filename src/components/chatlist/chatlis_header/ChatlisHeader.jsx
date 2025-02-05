import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import styles from "@/components/chatlist/chatlis_header/ChatlisHeader.module.css";

const ChatlisHeader = () => {
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);

  const handleSearchClick = () => {
    setIsSearching(true);
    inputRef.current.focus();
  };

  const handleBackClick = () => {
    setIsSearching(false);
    inputRef.current.blur();
  };
  return (
    <>
      {/* HEADER */}
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.headerTitle}>
            <h1>Conversas</h1>
          </div>
          <div className={styles.headerOptions}>
            <span title="Nova conversa">
              <Icon icon="ci:chat-add" width={24} height={24} color="#54656f" />
            </span>
            <span title="Mais opções">
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
    </>
  );
};

export default ChatlisHeader;
