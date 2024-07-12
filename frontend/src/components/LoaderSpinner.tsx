import { Loader } from "lucide-react";

function LoaderSpinner() {
  return (
    <div className="flex-center h-screen w-full">
      <Loader className="animate-spin" size={30} />
    </div>
  );
}

export default LoaderSpinner;
