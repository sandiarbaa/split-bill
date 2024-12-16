import { FriendType } from "@/app/types";
import { useState, FormEvent } from "react";

const FormAddFriend = ({
  onAddFriend,
}: {
  onAddFriend: (FriendType: FriendType) => void;
}) => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("https://i.pravatar.cc/48");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name || !image) return;

    const id: number = Number(crypto.randomUUID());

    const newFriend: FriendType = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("");
  };

  return (
    <form
      className="border shadow rounded-md p-4 mt-5 w-[350px] md:w-96 bg-slate-300"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-between">
        <label htmlFor="nama">🙍‍♂️Nama:</label>
        <input
          type="text"
          id="nama"
          className="border text-sm shadow rounded-md ml-5 w-52 px-2 py-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex justify-between my-5">
        <label htmlFor="gambar">📸Gambar:</label>
        <input
          type="text"
          id="gambar"
          className="border text-sm shadow rounded-md ml-5 w-52 px-2 py-1"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className="flex justify-between">
        <div></div>
        <button type="submit" className="button w-52">
          Tambah
        </button>
      </div>
    </form>
  );
};

export default FormAddFriend;
