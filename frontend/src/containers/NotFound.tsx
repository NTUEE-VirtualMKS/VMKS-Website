import { OctagonX } from "lucide-react";

function NotFound() {
  return (
    <>
      <section className="flex flex-col size-full items-center mt-36 h-96">
        <OctagonX size={400} className="text-red-500" />
        <div className="flex-center w-full flex-col">
          <p className="w-full text-5xl text-center font-bold text-white p-2">
            Page Not Found
          </p>
        </div>
      </section>
    </>
  );
}

export default NotFound;
