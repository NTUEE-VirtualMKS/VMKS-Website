import { MaterialInput } from "@/shared/type";
import { read, utils } from "xlsx";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";
import { ChangeEvent } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import type { MaterialImportButtonProps } from "@/shared/type";

function MaterialImportButton({
  setMaterials,
  setLength,
  fileRef,
  file,
  setFile,
  isFileUploadLoading,
}: MaterialImportButtonProps) {
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
        setFile(null);
      } else {
        setFile(file);
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
    <div className="w-full" onClick={() => fileRef?.current?.click()}>
      <Input
        type="file"
        accept=".csv"
        className="hidden"
        ref={fileRef}
        onChange={handleImport}
      />
      <Button
        className={cn(
          "my-3 px-4 py-2 bg-blue-500 hover:bg-blue-500 hover:bg-opacity-90 text-white rounded shadow-lg transform active:scale-95 transition-transform duration-200",
          file && "rounded-r-none"
        )}
        disabled={isFileUploadLoading}
      >
        {file ? `${file.name}` : "select file"}
      </Button>
    </div>
  );
}

export default MaterialImportButton;
