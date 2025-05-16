import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button variant="default"> Default Button</Button>
      <Button variant='outline' >
        <Camera />
      </Button>
    </div>
  );
}
