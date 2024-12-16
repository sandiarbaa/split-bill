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
  return (
    <main className="container mx-auto px-10 md:px-16 lg:px-20 my-10">
      <section>
        <FriendList friends={initialFriend} />
      </section>
    </main>
  );
}
