import { OctagonX } from "lucide-react";

function Suggestion({ search, name }: { search: string; name: string }) {
  return (
    <>
      {search ? (
        <section className="flex flex-col size-full flex-center">
          <OctagonX size={280} className="text-red-500" />
          <div className="flex-center w-full flex-col">
            <p className="w-full text-5xl text-center font-bold text-white p-2">
              "{search}" Not Found
            </p>
          </div>
        </section>
      ) : (
        <section className="flex flex-col size-full flex-center">
          <div className="flex-center w-full flex-col mt-40">
            <p className="w-full text-5xl text-center font-bold text-white p-2">
              No {name}
            </p>
          </div>
        </section>
      )}
    </>
  );
}

export default Suggestion;
