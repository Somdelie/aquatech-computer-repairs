import { Button } from "@/components/ui/button";
import { Icons } from "./Icons";


export function SocialLoginButtons() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3 w-full">
      <Button type="button" variant="outline">
        <Icons.google />
        <span>Google</span>
      </Button>
      <Button type="button" variant="outline">
        <Icons.gitHub />
        <span>Github</span>
      </Button>
    </div>
  );
}