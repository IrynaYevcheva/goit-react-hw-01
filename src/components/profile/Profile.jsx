import styles from "./Profile.module.css";

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.info}>
        <img
          className={styles.avatar}
          src={avatar}
          alt="User avatar"
          width="100"
        />
        <p className={styles.username}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.listItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.value}>{followers}</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Views</span>
          <span className={styles.value}>{views}</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

// export const Profile = ({
//   username,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// }) => {
//   return (
//     <div className={styles.profile}>
//       <div className={styles.info}>
//         <img
//           className={styles.avatar}
//           src={avatar}
//           alt="User avatar"
//           width="100"
//         />
//         <p className={styles.username}>{username}</p>
//         <p className={styles.tag}>@{tag}</p>
//         <p className={styles.location}>{location}</p>
//       </div>

//       <ul className={styles.stats}>
//         {[followers, views, likes].map((i, idx) => (
//           <li key={idx}>
//             <span className={styles.label}>{i}</span>
//             <span className={styles.value}>{i}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
