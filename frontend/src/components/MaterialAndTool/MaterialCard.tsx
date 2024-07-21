import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MaterialType } from "@/shared/type";
import { DELETE_MATERIAL_MUTATION } from "@/graphql";
import { useMutation } from "@apollo/client";
import { ALL_MATERIAL_QUERY } from "@/graphql/queries";
import LoaderSpinner from "../LoaderSpinner";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@/context/UserContext";

function MaterialCard({ material }: { material: MaterialType }) {
  const { toast } = useToast();
  const { user } = useUser();

  const [deleteMaterial, { loading, error }] = useMutation(
    DELETE_MATERIAL_MUTATION,
    {
      refetchQueries: [{ query: ALL_MATERIAL_QUERY }],
    }
  );

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this material?")) {
      deleteMaterial({
        variables: {
          deleteMaterialId: material.id,
        },
      });
      if (loading) return <LoaderSpinner />;
      if (error) {
        toast({ title: `${error.message}`, variant: "destructive" });
      } else {
        toast({ title: "Material deleted successfully!" });
      }
    }
  };

  return (
    <div
      className="bg-transparent mb-5 w-full xs:w-full sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-3/12"
      key={material.id}
    >
      <div className="flex flex-col justify-between h-full border p-3 bg-[#181b20] w-11/12 mx-auto rounded-lg">
        <Link to={`/MaterialAndToolPage/Material/${material.id}`}>
          <img
            src={material.photoLink}
            alt={material.name}
            className="w-10/12 mx-auto mt-2"
          />
          <h2 className="text-white text-24">{material.name}</h2>
          <p className="text-white text-16">
            型號: {material?.partName ? `${material?.partName}` : "無"}
          </p>
          <p className="text-white text-16">位置: {material.position}</p>
          <p className="text-white text-16">
            剩餘數量: {material?.remain}（個）
          </p>
          <p className="text-white text-16">使用量: {material?.usage}（個）</p>
        </Link>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          {user?.isAdmin && (
            <Button
              onClick={handleDelete}
              className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200"
            >
              刪除
            </Button>
          )}
          <Button
            className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
            disabled={!user}
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfXeqhK9OoII0DYkdMv8injfqSh0k3Y0exXxrEI0_GQvTn2LQ/viewform"
              target="_blank"
            >
              借用
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MaterialCard;
