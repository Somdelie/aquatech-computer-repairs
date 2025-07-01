import Image from "next/image";
import Link from "next/link";


export function AppLogoIcon() {
  return (
       <Link href="/" className="flex items-center">
           <Image 
            src="/aqua-logo.png"
            alt="Aquatech Computers Logo"
            width={150}
            height={100}
            // className="h-24 w-36 object-contain"	
           />
          </Link>
  );
}