import { FriendType } from "@/app/types";
import Friend from "./Friend";

const FriendList = ({ friends }: {friends: FriendType[]}) => {
  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend friend={friend} key={index} />
      ))}
    </ul>
  );
};

export default FriendList;
