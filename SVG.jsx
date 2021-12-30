import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { Svg } from "../styles/Style.js";

const SVG = ({ css, svgFile, onClick, viewBox, onInput }) => {
  const [svg, setSvg] = useState();

  const [totalSVG, setTotalSVG] = useState();

  useEffect(() => {
    fetch(svgFile)
      .then((res) => res.text())
      .then((res) => {
        setTotalSVG(res);
      });
  }, [svgFile]);

  useEffect(() => {
    setSvg(
      totalSVG?.substring(totalSVG.indexOf("<p"), totalSVG?.indexOf("</svg>"))
    );
  }, [totalSVG]);

  return (
    <>
      {svgFile ? (
        <Svg
          css={
            css ||
            `width:0px;
        height:0px`
          }
          onClick={onClick}
          viewBox={viewBox || "0 0 28 28"}
        >
          {svg ? parse(svg) : null}
        </Svg>
      ) : (
        <svg
          onClick={onClick}
          className={"absolute right-3 cursor-pointer"}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 2.91L13.09 0L8 5.09L2.91 0L0 2.91L5.09 8L0 13.09L2.91 16L8 10.91L13.09 16L16 13.09L10.91 8L16 2.91Z"
            fill="#D64747"
          />
        </svg>
      )}
    </>
  );
};

export default SVG;
