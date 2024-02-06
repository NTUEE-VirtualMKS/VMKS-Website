import { MDXEditor } from "@mdxeditor/editor/MDXEditor";
import { allPlugins } from "./allPlugins.ts";
import "../../CSS/markdown.css";

type OverviewProps = {
  markdown: string;
  overviewRef: React.MutableRefObject<null>;
};

function Overview({ markdown, overviewRef }: OverviewProps) {
  return (
    <MDXEditor
      markdown={markdown}
      ref={overviewRef}
      plugins={allPlugins("Hello, world")}
      readOnly
    />
  );
}

export default Overview;
