import React from "react";

const Avatar: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
    >
      <g id="avatar" transform="translate(-816 -396)">
        <circle
          id="Ellipse_1"
          data-name="Ellipse 1"
          cx="30"
          cy="30"
          r="30"
          transform="translate(816 396)"
          fill="rgba(0,0,0,0.5)"
        />
        <ellipse
          id="Ellipse_2"
          data-name="Ellipse 2"
          cx="10"
          cy="9.5"
          rx="10"
          ry="9.5"
          transform="translate(836 405)"
          fill="#fff"
        />
        <path
          id="Path_1"
          data-name="Path 1"
          d="M18.521.687c10.5,0,18.657,4.8,19.131,8.195S29.021,21.689,18.521,21.689-.568,12.584-.621,9.306,8.021.687,18.521.687Z"
          transform="translate(827.564 428.579)"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

export default Avatar;
