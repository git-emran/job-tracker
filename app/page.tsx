import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Button variant="default"> Default Button</Button>
      <Button variant='outline' >
        <Camera />
      </Button>
    </div>
  );
}
