import { FriendType } from "@/app/types";
import { FormEvent, useState } from "react";

const FormSplitBill = ({
  selectedFriend,
  onSplitBill,
}: {
  selectedFriend: FriendType;
  onSplitBill: (value: number) => void;
}) => {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  // kalau ada isinya -> ambil selisih antara total tagihan dan tagihan kamu
  const friendBill: number | string =
    amount && myBill ? Number(amount) - Number(myBill) : "";
  const [whoIsPaying, setWhoIsPaying] = useState<"user" | "friend">("user");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!amount || !myBill) return;
    onSplitBill(whoIsPaying === "user" ? Number(friendBill) : -myBill); // kalo yg bayar user maka friend yg hutang, dan sebaliknya
  };

  return (
    <form
      className="w-[350px] md:w-96 h-80 rounded-md border shadow p-8 bg-slate-300"
      onSubmit={handleSubmit}
    >
      <h2 className="text-lg font-bold uppercase">
        Patungan Bareng si {selectedFriend.name}
      </h2>

      <div className="mb-3 mt-5">
        <div className="my-3 flex justify-between">
          <label htmlFor="">Total Tagihan</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded w-20 h-7 text-sm px-2"
          />
        </div>

        <div className="my-3 flex justify-between">
          <label htmlFor="">Tagihan Kamu</label>
          <input
            type="text"
            value={myBill}
            onChange={(e) => setMyBill(e.target.value)}
            className="border rounded w-20 h-7 text-sm px-2"
          />
        </div>

        <div className="my-3 flex justify-between">
          <label htmlFor="">Tagihan {selectedFriend.name}</label>
          <input
            type="text"
            value={friendBill}
            disabled
            className="border rounded w-20 h-7 text-sm px-2"
          />
        </div>

        <div className="my-3 flex justify-between">
          <label htmlFor="">Ditalangin Sama</label>
          <select
            value={whoIsPaying}
            onChange={(e) =>
              setWhoIsPaying(e.target.value as "user" | "friend")
            }
            className="border rounded w-20 h-7 text-sm px-2"
          >
            <option value="user">Kamu</option>
            <option value="friend">{selectedFriend.name}</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between">
        <div></div>
        <button className="button w-20">Tambah</button>
      </div>
    </form>
  );
};

export default FormSplitBill;
