import "@mdxeditor/editor/style.css";
import { storage } from "./firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import "../../CSS/markdown.css";
import { MDXEditor } from "@mdxeditor/editor/MDXEditor";
import { reactSandpackConfig } from "./reactSandpackConfig";
import {
  toolbarPlugin,
  codeBlockPlugin,
  sandpackPlugin,
  codeMirrorPlugin,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  linkPlugin,
  linkDialogPlugin,
  imagePlugin,
  tablePlugin,
  frontmatterPlugin,
  directivesPlugin,
  AdmonitionDirectiveDescriptor,
  diffSourcePlugin,
  KitchenSinkToolbar,
} from "@mdxeditor/editor";

const imageUploadHandler = async (image: File) => {
  if (!image) {
    return "image upload fail!";
  }
  const imageUpload = image.name + v4();
  const imageRef = ref(storage, `images/${imageUpload}`);
  await uploadBytes(imageRef, image).then(() => {
    alert("Image Uploaded!");
  });
  const imageURL = await getDownloadURL(ref(storage, `images/${imageUpload}`))
    .then((url) => {
      // `url` is the download URL for `images/${image.name}`
      console.log(url);
      return url;
    })
    .catch((error) => {
      // Handle any errors
      return `${error}`;
    });

  return imageURL;
};

const allPlugins = (diffMarkdown: string) => [
  toolbarPlugin({
    toolbarContents: () => {
      return (
        <>
          <KitchenSinkToolbar />
        </>
      );
    },
  }),
  listsPlugin(),
  quotePlugin(),
  headingsPlugin(),
  linkPlugin(),
  linkDialogPlugin(),
  // eslint-disable-next-line @typescript-eslint/require-await
  imagePlugin({ imageUploadHandler }),
  tablePlugin(),
  thematicBreakPlugin(),
  frontmatterPlugin(),
  codeBlockPlugin({ defaultCodeBlockLanguage: "txt" }),
  sandpackPlugin({ sandpackConfig: reactSandpackConfig }),
  codeMirrorPlugin({
    codeBlockLanguages: {
      js: "JavaScript",
      css: "CSS",
      txt: "text",
      tsx: "TypeScript",
      cplusplus: "C++",
      java: "Java",
      c: "C",
    },
  }),
  directivesPlugin({ directiveDescriptors: [AdmonitionDirectiveDescriptor] }),
  diffSourcePlugin({ viewMode: "rich-text", diffMarkdown }),
  markdownShortcutPlugin(),
];

type TextAreaProps = {
  markdown?: string;
  editorRef: React.MutableRefObject<any>;
  placeholder?: string;
};

function TextArea({ markdown, editorRef, placeholder }: TextAreaProps) {
  if (!markdown) markdown = "";
  return (
    <>
      <div>
        <MDXEditor
          markdown={markdown}
          plugins={allPlugins("")}
          ref={editorRef}
          placeholder={placeholder ? placeholder : ""}
        />
      </div>
    </>
  );
}

export default TextArea;
