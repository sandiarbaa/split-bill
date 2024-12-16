const FormAddFriend = () => {
  return (
    <form
      action=""
      className="border shadow rounded-md p-4 mt-5 w-[350px] md:w-96 bg-slate-300"
    >
      <div className="flex justify-between">
        <label htmlFor="nama">🙍‍♂️Nama:</label>
        <input
          type="text"
          id="nama"
          className="border text-sm shadow rounded-md ml-5 w-52 px-2"
        />
      </div>

      <div className="flex justify-between my-5">
        <label htmlFor="gambar">📸Gambar:</label>
        <input
          type="text"
          id="gambar"
          className="border text-sm shadow rounded-md ml-5 w-52 px-2"
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
