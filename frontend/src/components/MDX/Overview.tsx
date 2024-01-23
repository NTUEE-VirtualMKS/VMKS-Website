import { MDXEditor } from "@mdxeditor/editor/MDXEditor";
import { allPlugins } from "./allPlugins.ts";
import "../../CSS/markdown.css";

type OverviewProps = {
  markdown: string;
  ref: any;
};

function Overview({ markdown, ref }: OverviewProps) {
  return (
    <MDXEditor
      markdown={markdown}
      ref={ref}
      plugins={allPlugins("Hello, world")}
      readOnly
    />
  );
}

export default Overview;
