import { MaterialInput } from "@/shared/type";
import { read, utils } from "xlsx";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";
import { ChangeEvent } from "react";

function MaterialImportButton({
  setMaterials,
  setLength,
}: {
  setMaterials: (materials: MaterialInput[]) => void;
  setLength: (length: number) => void;
}) {
  const { toast } = useToast();
  const handleImport = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
      const file = files[0];
      if (file.type !== "text/csv") {
        toast({
          title: "Invalid file extension",
          description: "CSV file only",
          variant: "destructive",
        });
        setMaterials([]);
        setLength(0);
      } else {
        const reader = new FileReader();
        reader.onload = (event: ProgressEvent<FileReader>) => {
          const wb = read(event.target?.result);
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
            setLength(rowMaterials.length);
          }
        };
        reader.readAsArrayBuffer(file);
      }
    }
  };

  return (
    <Input
      type="file"
      className="my-3 dark:bg-[#15171C] text-blue-500 dark:text-sky-300 border border-blue-500 dark:border-sky-300 bg-transparent hover:bg-transparent transform active:scale-95 transition-transform duration-200 shadow"
      onChange={(e) => handleImport(e)}
    />
  );
}

export default MaterialImportButton;
