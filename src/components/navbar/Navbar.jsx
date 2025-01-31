import { useState } from "react";
import styles from "@/components/navbar/Navbar.module.css";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Navbar = () => {
  // Estado para controlar o ícone ativo
  const [activeIcon, setActiveIcon] = useState("");

  // Função para lidar com o clique nos ícones
  const handleIconClick = (iconName) => {
    setActiveIcon(iconName); // Atualiza o ícone ativo
  };

  return (
    <nav className={styles.navbar}>
      <div>
        <ul className={styles.menu_options}>
          <li
            title="Conversas"
            onClick={() => handleIconClick("conversas")}
            className={activeIcon === "conversas" ? styles.active : ""}
          >
            <Icon
              icon={
                activeIcon === "conversas"
                  ? "material-symbols:chat"
                  : "material-symbols:chat-outline"
              }
              width="32"
              height="32"
              color="#54656f"
            />
          </li>
          <li
            title="Status"
            onClick={() => handleIconClick("status")}
            className={activeIcon === "status" ? styles.active : ""}
          >
            <Icon icon="f7:status" width="32" height="32" color="#54656f" />
          </li>
          <li
            title="Canais"
            onClick={() => handleIconClick("canais")}
            className={activeIcon === "canais" ? styles.active : ""}
          >
            <Icon
              icon={
                activeIcon === "canais"
                  ? "majesticons:chat-status"
                  : "majesticons:chat-status-line"
              }
              width="32"
              height="32"
              color="#54656f"
            />
          </li>
          <li
            title="Comunidades"
            onClick={() => handleIconClick("comunidades")}
            className={activeIcon === "comunidades" ? styles.active : ""}
          >
            <Icon
              icon={
                activeIcon === "comunidades"
                  ? "material-symbols:groups"
                  : "material-symbols:groups-outline-rounded"
              }
              width="32"
              height="32"
              color="#54656f"
            />
          </li>
        </ul>
      </div>
      <div>
        <ul className={styles.menu_options}>
          <li
            title="Configurações"
            onClick={() => handleIconClick("configuracoes")}
            className={activeIcon === "configuracoes" ? styles.active : ""}
          >
            <Icon
              icon={
                activeIcon === "configuracoes" ? "mdi:gear" : "mdi:gear-outline"
              }
              width="32"
              height="32"
              color="#54656f"
            />
          </li>
          <li title="Perfil">
            <Image
              className={styles.profilePic}
              src={"/profile-pic.jpg"}
              width={36}
              height={36}
              alt="Profile Picture"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
