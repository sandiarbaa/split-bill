import { FriendType } from "@/app/types";
import Friend from "./Friend";

const FriendList = ({
  friends,
  onSelected,
  selectedFriend
}: {
  friends: FriendType[];
  onSelected: (friend: FriendType) => void;
  selectedFriend: FriendType | null;
}) => {
  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend friend={friend} key={index} onSelected={onSelected} selectedFriend={selectedFriend}/>
      ))}
    </ul>
  );
};

export default FriendList;
