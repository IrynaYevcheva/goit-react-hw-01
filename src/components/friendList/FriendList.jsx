import { FriendListItem } from "../friendListItem/FriendListItem";
import styles from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map((friend) => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </ul>
  );
};
