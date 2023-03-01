import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

export interface Props {
  className: string;
}

export default function Tiptap({ className }: Props) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
    editorProps: {
      attributes: {
        class:
          "mx-auto h-full m-2 p-2 prose dark:prose-invert prose l:prose-l focus:outline-none",
      },
    },
  });

  return (
    <EditorContent
      className={
        className + " overflow-auto bg-white dark:bg-rwb-background-dark"
      }
      editor={editor}
    />
  );
}
