import { useQuery } from "@apollo/client";
import { SEARCH_TOOL_BY_NAME_QUERY } from "@/graphql/queries";
import type { ToolType } from "@/shared/type.ts";
import LoaderSpinner from "../LoaderSpinner";
import ToolCard from "./ToolCard";
import Suggestion from "../Suggestion";

function ToolList({ search }: { search: string }) {
  const { data, loading, error } = useQuery(SEARCH_TOOL_BY_NAME_QUERY, {
    variables: { name: search },
  });
  if (loading) return <LoaderSpinner />;
  if (error) throw new Error(`Error! ${error.message}`);

  const allTools = data?.SearchToolsByName;
  const tools = allTools?.map((tool) => {
    const filteredTool = {
      id: tool!.id,
      name: tool!.name,
      description: tool!.description,
      photoLink: tool!.photoLink,
      position: tool!.position,
      category: tool!.category,
      usage: tool!.usage,
      remain: tool!.remain,
      tutorialLink: tool!.tutorialLink,
      partName: tool!.partName,
      toolLikeIds: tool!.toolLikeIds,
    };
    return filteredTool;
  });

  return (
    <div className="flex flex-col gap-4 flex-wrap justify-start xs:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row xs:gap-5 sm:gap-0 md:gap-0 lg:gap-0 xl:gap-0">
      {tools?.length !== 0 ? (
        tools?.map((tool: ToolType) => {
          return <ToolCard key={tool.id} tool={tool} />;
        })
      ) : (
        <Suggestion search={search} name="Tool" />
      )}
    </div>
  );
}

export default ToolList;
