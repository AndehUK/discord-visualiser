import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="items-center gap-x-2">
      <Image
        src="/logo-full.png"
        height={261}
        width={1436}
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark-full.png"
        height={261}
        width={1436}
        alt="Logo"
        className="hidden dark:block"
      />
    </Link>
  );
};
