import { FriendType } from "@/app/types";
import Image from "next/image";

const Friend = ({
  friend,
  onSelected,
  selectedFriend,
}: {
  friend: FriendType;
  onSelected: (friend: FriendType) => void;
  selectedFriend: FriendType | null;
}) => {
  const isSelected: boolean = selectedFriend?.id === friend.id;

  return (
    <li
      key={friend.id}
      className="border shadow rounded-md p-4 w-[350px] md:w-96 flex gap-x-5"
    >
      <div>
        <Image src={friend.image} alt={friend.name} width={48} height={48} />
      </div>
      <div className="flex gap-x-5 items-center">
        <div>
          <h3 className="font-semibold">{friend.name}</h3>

          {friend.balance < 0 && (
            <p className="red">
              Kamu berhutang Rp{Math.abs(friend.balance)} ke {friend.name}
            </p>
          )}

          {friend.balance > 0 && (
            <p className="green">
              {friend.name} berhutang Rp{Math.abs(friend.balance)} ke Kamu
            </p>
          )}

          {friend.balance === 0 && (
            <p>Kamu dan {friend.name} tidak ada hutang</p>
          )}
        </div>
        <button
          className=" bg-slate-500 rounded-md w-20 h-8 text-sm text-white font-semibold hover:bg-slate-600 transition duration-300"
          // butuh anonymous function, karena trigger handler nya butuh parameter untuk dikirim ke handler nya di parent
          onClick={() => onSelected(friend)}
        >
          {isSelected ? "Tutup" : "Tambah"}
        </button>
      </div>
    </li>
  );
};

export default Friend;
