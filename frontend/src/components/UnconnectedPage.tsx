import { WifiOff } from "lucide-react";
import { Button } from "./ui/button";

function UnconnectedPage() {
  return (
    <section className="flex flex-col size-full items-center mt-36 h-96">
      <WifiOff size={280} className="text-white" />
      <div className="flex-center w-full flex-col mt-2">
        <p className="w-full text-4xl text-center font-bold text-white">
          Connect to the internet
        </p>
        <p className="w-full text-lg text-center font-semibold text-white">
          You're offline. Check your connection.
        </p>
        <Button
          onClick={() => window.location.reload()}
          className="mt-4 border border-sky-300 text-sky-300 transform active:scale-90 transition-transform duration-200"
        >
          Retry
        </Button>
      </div>
    </section>
  );
}

export default UnconnectedPage;
