"use client";
import { useState } from "react";
import FormAddFriend from "./components/fragments/FormAddFriend";
// import FormSplitBill from "./components/fragments/FormSplitBill";
import FriendList from "./components/fragments/FriendList";
import { FriendType } from "./types";

const initialFriend: FriendType[] = [
  {
    id: 118836,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Andi",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Joko",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function Home() {
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);

  const handleShowAddFriend = () => {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  };

  return (
    <main className="container mx-auto px-10 md:px-16 lg:px-20 my-10 flex justify-center">
      <section>
        <div className="flex gap-x-5">
          <FriendList friends={initialFriend} />
          {/* <FormSplitBill /> */}
        </div>

        <div className="flex flex-col items-end w-[350px] md:w-96">
          <div></div>
          {showAddFriend && <FormAddFriend />}
          <button className="button w-32 mt-5" onClick={handleShowAddFriend}>
            {showAddFriend ? "Tutup" : "Tambah Teman"}
          </button>
        </div>
      </section>
    </main>
  );
}
