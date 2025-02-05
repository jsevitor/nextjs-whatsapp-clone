import styles from "@/components/intro/Intro.module.css";
import { Icon } from "@iconify/react";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.introContainer}>
        <div></div>
        <div className={styles.introContent}>
          <div>
            <img src="/static.png" alt="" />
          </div>
          <div className={styles.introText}>
            <h1>Baixar o WhatsApp para Windows</h1>
            <span className={styles.introCaption}>
              Baixe o novo app para Windows para fazer ligações, usar o
              compartilhamento de tela e ter uma experiência de uso mais rápida.
            </span>
            <span className={styles.introBtn}>
              <button>Baixar da Microsoft Store</button>
            </span>
          </div>
        </div>
        <div className={styles.introFooter}>
            <span className={styles.introFooterIcon}>
              <Icon icon="uis:lock" width={11} height={11} color="#8696a0" />
            </span>
            Suas mensagens pessoais são protegidas com a criptografia de ponta a
            ponta.
          </div>
      </div>
    </div>
  );
};

export default Intro;
