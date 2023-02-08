import { createSlice } from "@reduxjs/toolkit";
import { marked } from "marked";

const content = `
  # Welcome to my React Markdown Previewer!
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  You can also make text **bold**... whoa!
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  - And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  ![freeCodeCamp Logo"](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

const initialState = {
  editorText: `${content}`,
};

marked.setOptions({
  breaks: true,
});

export const markdownSlice = createSlice({
  name: "markdown",
  initialState,
  reducers: {
    setEditorText: (state, action) => {
      return { ...state, editorText: action.payload };
    },
  },
});

export const { setEditorText } = markdownSlice.actions;

export default markdownSlice.reducer;
