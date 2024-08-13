import { Loader } from "lucide-react";

function LoaderSpinner() {
  return (
    <div className="flex-center h-screen w-full">
      <Loader
        className="animate-spin dark:text-sky-300 text-blue-500"
        size={60}
      />
    </div>
  );
}

export default LoaderSpinner;
