export default function MinProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://newsimg.sedaily.com/2020/05/28/1Z2XCSYAIX_1.jpg"
        alt="user-image"
        className="h-16 w-16 rounded-full border p-[2px]"
      />

      <div className="flex-1 ml-4">
        <h2 className="font-bold">codewithsahand</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>

      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
}
