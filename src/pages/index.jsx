import Navbar from "@/components/navbar/Navbar";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.app}>
      <div className={styles.app_topBg}></div>
      <div className={styles.app_container}>
        <Navbar />
      </div>
    </div>
  );
}
