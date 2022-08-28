import React, { useState, useRef, useEffect } from "react";
import "./Markdown.Module.css";
import { useDispatch, useSelector } from "react-redux";
import { setDisplay, markdownText } from "../../redux/markdownSlicer";
import { Markdown } from "react-marked-renderer";
const Markdown2 = () => {
  const [text, setText] = useState("");
  //   const [display, setDisplay] = useState(false);
  const selector = useSelector((state) => state.markdown.buttonText);
  const [data, setData] = useState(selector);
  const textSelector = useSelector((state) => state.markdown.text);
  const display = useSelector((state) => state.markdown.display);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const textingText = () => {
    display
      ? (inputRef.current.value = selector) &&
        setData((inputRef.current.value = selector))
      : (inputRef.current.value = "this is user input");
  };
  dispatch(markdownText(text));
  console.log(textSelector);
  return (
    <>
      <div className="info-button-div">
        <button
          className="info-button"
          onClick={() => {
            dispatch(setDisplay());
            textingText();
          }}
        >
          ?
        </button>
      </div>
      <div className="container">
        <header>
          <p className="header-text"> Markdown Previewer </p>
        </header>
        <main>
          <div className="row">
            <div className="col">
              <textarea
                type="text"
                className="user-input"
                ref={inputRef}
                value={display ? data : text}
                onChange={(e) => setText(e.target.value)}
              />{" "}
            </div>
            <div className="col markdown-text">
              {/* <textarea
                type="text"
                className="user-input"
                ref={inputRef}
                value={display ? data : text}
              /> */}
              <Markdown markdown={display ? data : text} />
            </div>
          </div>
        </main>
        <footer>
          <p className="footer-text">2022, created by Pyson</p>
        </footer>
      </div>
    </>
  );
};

export default Markdown2;
