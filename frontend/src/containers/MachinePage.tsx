
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Bot } from "lucide-react";
import { useTranslation } from "react-i18next";
import ThreeDPList from "@/components/Machine/ThreeDPList"; 
import ThreeDPImportButton from "@/components/Machine/ThreeDPImportButton";
import ThreeDPImportButtonByFile from "@/components/Machine/ThreeDPImportButtonByFile";
function MachinePage() {
  const { t } = useTranslation();
  // const [materials, setMaterials] = useState<MaterialInput[]>([]);

  return (
    <div className="w-10/12 flex flex-col mx-auto mt-20 mb-8 dark:text-white">
      
      <h1 className="dark:text-white p-1 flex flex-row items-center gap-2">
        <Bot className="dark:text-white" size={35} />
        {t("allMachines")}
      </h1>

      <Tabs defaultValue="3DP">
        <div className="flex flex-row-reverse">
          <div className="w-56 mt-1">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="3DP"
                className="dark:text-zinc-500 dark:bg-[#303030] bg-opacity-30 text-base font-semibold"
              >
                {t("3DP")}
              </TabsTrigger>
              <TabsTrigger
                value="others"
                className="dark:text-zinc-500 dark:bg-[#303030] bg-opacity-30 text-base font-semibold"
              >
                {t("other")}
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="3DP" className="w-full">
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <ThreeDPImportButton/>
            <ThreeDPImportButtonByFile/>
          </div>
          <div className="mt-2">
            <ThreeDPList/>
          </div>  
        </TabsContent>
        <TabsContent value="others">
          
        </TabsContent>
      </Tabs>
        
      
    </div>
  );
}

export { MachinePage };
