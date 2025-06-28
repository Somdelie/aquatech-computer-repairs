import Footer from "@/components/front/Footer";
import Navbar from "@/components/front/Navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <main className="">{children}</main>
    </div>
  );
}
