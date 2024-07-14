import { Loader } from "lucide-react";

function LoaderSpinner() {
  return (
    <div className="flex-center h-screen w-full">
      <Loader className="animate-spin text-sky-300" size={50} />
    </div>
  );
}

export default LoaderSpinner;
