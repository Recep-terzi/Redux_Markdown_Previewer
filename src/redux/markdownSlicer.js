import { createSlice } from "@reduxjs/toolkit";

export const markdownSlicer = createSlice({
  name: "markdown",
  initialState: {
    buttonText: `Heading
  =======
  
  Sub-heading
  -----------
  
  ### Another deeper heading
  
  Paragraphs are separated
  by a blank line.
  
  Leave 2 spaces at the end of a line to do a
  line break
  
  Text attributes *italic*, **bold**,
  ${`monospace`}, ~~strikethrough~~ .
  
  Shopping list:
  
    * apples
    * oranges
    * pears
  
  Numbered list:
  
    1. apples
    2. oranges
    3. pears
  
  The rain---not the reign---in
  Spain.
  
   *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`,
    display: false,
    text: "",
  },
  reducers: {
    buttonText: (state, action) => {
      action.payload = state.buttonText;
    },
    setDisplay: (state) => {
      state.display = !state.display;
    },
    markdownText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { buttonText, setDisplay, markdownText } = markdownSlicer.actions;

export default markdownSlicer.reducer;
