import { ThreeDPInput } from "@/shared/type";
import { useState, useRef } from "react";
import { read, utils } from "xlsx";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";
import { ChangeEvent } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/client";
import { ADD_THREE_DP_MUTATION, GET_ALL_THREEDPS_QUERY } from "@/graphql";
import { useUser } from "@/contexts/UserContext";
function ThreeDPImportButtonByFile() {
  const { t } = useTranslation();
  const ref = useRef<HTMLInputElement>(null);
  const [length, setLength] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [isFileUploadLoading, setIsFileUploadLoading] = useState(false);
  const [threeDPs, setThreeDPs] = useState<ThreeDPInput[]>([]);
  const cursor = null;
  const limit = 12;

  const { toast } = useToast();
  const { user } = useUser();
  const [add3DP, { loading, error }] = useMutation(ADD_THREE_DP_MUTATION, {
    refetchQueries: [
      {
        query: GET_ALL_THREEDPS_QUERY,
        variables: {
          cursor: cursor,
          limit: limit,
        },
      },
    ],
  });

  const handleAddThreeDPs = async (threeDPs: ThreeDPInput[]) => {
    setIsFileUploadLoading(true);
    threeDPs.map(async (threeDP) => {
      await add3DP({
        variables: {
          threeDpInput: {
            name: threeDP.name,
            position: threeDP.position,
            description: threeDP.description,
            photoLink: threeDP.photoLink,
            tutorialLink: threeDP.tutorialLink,
            broken: threeDP.broken,
          },
        },
      });
    });
    if (loading) {
      toast({ title: "Uploading tools..." });
    }
    if (error) {
      toast({ title: `${error.message}`, variant: "destructive" });
    } else {
      setThreeDPs([]);
      setLength(0);
      toast({ title: "ThreeDPs added successfully!" });
      setFile(null);
      setIsFileUploadLoading(false);
    }
  };

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
        setThreeDPs([]);
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
            const rowThreeDPs: ThreeDPInput[] = rows.map((row: any) => {
              return {
                name: row["name"],
                position: row["position"],
                description: row["description"],
                photoLink: row["photoLink"],
                tutorialLink: row["tutorialLink"],
                broken: row["broken"] === 1 ? true : false,
              };
            });
            setThreeDPs(rowThreeDPs);
            setLength(rowThreeDPs.length);
          }
        };
        reader.readAsArrayBuffer(file);
      }
    }
  };

  return (
    <>
      {user?.isAdmin && (
        <>
          <div className="hidden sm:flex sm:flex-row sm:justify-end">
            <div className="w-full" onClick={() => ref?.current?.click()}>
              <Input
                type="file"
                accept=".csv"
                className="hidden"
                ref={ref}
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
            {length !== 0 && (
              <Button
                onClick={() => handleAddThreeDPs(threeDPs)}
                className={
                  "my-3 px-4 py-2 bg-blue-500 hover:bg-blue-500 hover:bg-opacity-90 text-white rounded-r rounded-l-none lowercase shadow-lg transform active:scale-95 transition-transform duration-200"
                }
                disabled={isFileUploadLoading}
              >
                {isFileUploadLoading ? t("uploading") + "..." : t("upload")}
              </Button>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default ThreeDPImportButtonByFile;
