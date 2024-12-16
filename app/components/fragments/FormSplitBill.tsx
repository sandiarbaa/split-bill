import { FriendType } from "@/app/types";

const FormSplitBill = ({ selectedFriend }: { selectedFriend: FriendType }) => {
  return (
    <form className="w-[350px] md:w-96 h-80 rounded-md border shadow p-8 bg-slate-300">
      <h2 className="text-lg font-bold uppercase">
        Patungan Bareng si {selectedFriend.name}
      </h2>

      <div className="mb-3 mt-5">
        <div className="my-3 flex justify-between">
          <label htmlFor="">Total Tagihan</label>
          <input
            type="text"
            name=""
            id=""
            className="border rounded w-20 h-7 text-sm px-2"
          />
        </div>

        <div className="my-3 flex justify-between">
          <label htmlFor="">Tagihan Kamu</label>
          <input
            type="text"
            name=""
            id=""
            className="border rounded w-20 h-7 text-sm px-2"
          />
        </div>

        <div className="my-3 flex justify-between">
          <label htmlFor="">Tagihan {selectedFriend.name}</label>
          <input
            type="text"
            name=""
            id=""
            className="border rounded w-20 h-7 text-sm px-2"
          />
        </div>

        <div className="my-3 flex justify-between">
          <label htmlFor="">Ditalangin Sama</label>
          <select
            name=""
            id=""
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
