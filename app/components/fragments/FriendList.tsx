import { FriendType } from "@/app/types";
import Friend from "./Friend";

const FriendList = ({
  friends,
  onSelected,
}: {
  friends: FriendType[];
  onSelected: (friend: FriendType) => void;
}) => {
  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend friend={friend} key={index} onSelected={onSelected} />
      ))}
    </ul>
  );
};

export default FriendList;
