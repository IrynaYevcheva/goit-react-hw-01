import styles from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p className={isOnline ? styles.isOnline : styles.isOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};
