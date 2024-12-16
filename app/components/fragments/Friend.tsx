import { FriendType } from "@/app/types";
import Image from "next/image";

const Friend = ({ friend }: { friend: FriendType }) => {
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
        <button className=" bg-slate-500 rounded-md w-14 h-8 text-white font-semibold">
          Pilih
        </button>
      </div>
    </li>
  );
};

export default Friend;
