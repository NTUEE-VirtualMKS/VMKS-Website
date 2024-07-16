import { MaterialInput } from "@/shared/type";
import { read, utils } from "xlsx";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

function ImportButton({
  setMaterials,
}: {
  setMaterials: (materials: MaterialInput[]) => void;
}) {
  const { toast } = useToast();
  const handleImport = (e: any) => {
    const files = e.target.files;
    if (files.length) {
      const file = files[0];
      if (file.type !== "text/csv") {
        toast({
          title: "Invalid file type",
          variant: "destructive",
        });
      } else {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          const wb = read(event.target.result);
          const sheets = wb.SheetNames;

          if (sheets.length) {
            const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
            const rowMaterials: MaterialInput[] = rows.map((row: any) => {
              return {
                name: row["name"],
                partName: row["partName"],
                category: row["category"],
                valuable: row["valuable"] === 1 ? true : false,
                position: row["position"],
                description: row["description"],
                photoLink: row["photoLink"],
                usage: row["usage"],
                tutorialLink: row["tutorialLink"],
                fee: row["fee"],
                remain: row["remain"],
              };
            });
            setMaterials(rowMaterials);
          }
        };
        reader.readAsArrayBuffer(file);
      }
    }
  };

  return (
    <Input
      type="file"
      className="my-3 bg-[#15171C] text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
      onChange={(e) => handleImport(e)}
    />
  );
}

export default ImportButton;
