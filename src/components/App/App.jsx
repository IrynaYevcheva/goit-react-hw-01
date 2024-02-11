import { Profile } from "../profile/Profile";
import { FriendList } from "../friendList/FriendList";
import { TransactionHistory } from "../transactionHistory/TransactionHistory";

import userData from "../../data/userdata.json";
import friends from "../../data/friends.json";
import transactions from "../../data/transactions.json";

export default function App() {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
