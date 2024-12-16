"use client";
import { useState } from "react";
import FormAddFriend from "./components/fragments/FormAddFriend";
import FormSplitBill from "./components/fragments/FormSplitBill";
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
  const [friends, setFriends] = useState<FriendType[]>(initialFriend);
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
  const [selectedFriend, setSelectedFriend] = useState<null | FriendType>(null);

  const handleShowAddFriend = () => {
    setShowAddFriend((showAddFriend) => !showAddFriend);
    setSelectedFriend(null);
  };

  const handleAddFriend = (friend: FriendType) => {
    setFriends((friends) => [...friends, friend]);
  };

  const handleSelectedFriend = (friend: FriendType) => {
    setSelectedFriend(
      (selected) => (selected?.id === friend.id ? null : friend) // kalo data objectnya sama -> null, kalo beda, reassign friend
    );
    setShowAddFriend(false);
  };

  return (
    <main className="container mx-auto px-10 md:px-16 lg:px-20 my-10 flex justify-center">
      <section>
        <div className="flex gap-x-5">
          <FriendList friends={friends} onSelected={handleSelectedFriend} />
          {/* kalau state selectedFriend ada data (tidak null), maka tampilkan FormSplitBill */}
          <div className="hidden lg:block">
            {selectedFriend && <FormSplitBill />}
          </div>
        </div>

        <div className="flex flex-col items-end w-[350px] md:w-96">
          <div></div>
          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
          <button className="button w-32 mt-5" onClick={handleShowAddFriend}>
            {showAddFriend ? "Tutup" : "Tambah Teman"}
          </button>
          <div className="block lg:hidden mt-5">
            {selectedFriend && <FormSplitBill />}
          </div>
        </div>
      </section>
    </main>
  );
}
