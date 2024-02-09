import { Profile } from "./profile/Profile";
import { FriendList } from "./friendList/FriendList";
import { TransactionHistory } from "./transactionHistory/TransactionHistory";

import userData from "./profile/userdata.json";
import friends from "./friendList/friends.json";
import transactions from "./transactionHistory/transactions.json";

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
