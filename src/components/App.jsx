import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import friends from '../JsonData/friends.json';
import user from '../JsonData/user.json';
import data from '../JsonData/data.json';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../JsonData/transactions.json';

export const App = () => {
  return (
    <div className="app">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
