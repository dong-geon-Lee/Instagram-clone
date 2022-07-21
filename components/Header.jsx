import Image from "next/image";

export default function Header() {
  return (
    <div>
      {/* Left */}
      <div className="flex items-center justify-between max-w-6xl">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://1iwky71fbek0h7wy43b8a0i2-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/Instagram-Text.png"
            layout="fill"
            className="object-contain"
          />
        </div>

        <div className="cursor-pointer h-24 w-10 relative lg:hidden">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png"
            layout="fill"
            className="object-contain"
          />
        </div>

        <h1>Right sides</h1>
      </div>

      {/* Middle */}

      {/* Right */}
    </div>
  );
}
