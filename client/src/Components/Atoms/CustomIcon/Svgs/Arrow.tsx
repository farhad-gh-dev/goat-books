import React from "react";

export const Arrow: React.FC = (props) => {
  return (
    <svg
      width="25"
      height="12"
      viewBox="0 0 25 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.5356 0.0860462C18.3058 0.192646 18.1004 0.396154 18.027 0.589972C17.9537 0.783789 17.9585 1.18111 18.0417 1.36524C18.0808 1.45246 18.8927 2.29556 19.8757 3.26465L21.6412 5.009L11.141 5.03323L0.635787 5.05746L0.449942 5.17375C0.347238 5.23674 0.205408 5.37725 0.132048 5.48385C0.0195627 5.6486 0 5.73582 0 6.00231C0 6.26881 0.0195627 6.35603 0.132048 6.52078C0.205408 6.62737 0.347238 6.76789 0.449942 6.83088L0.635787 6.94717L11.141 6.9714L21.6412 6.99563L19.8757 8.73998C18.8927 9.70907 18.0808 10.5522 18.0417 10.6394C17.9585 10.8235 17.9537 11.2208 18.027 11.4147C18.2031 11.8847 18.8438 12.1366 19.3035 11.9234C19.5138 11.8265 24.7028 6.77758 24.8789 6.49655C25.0451 6.23005 25.0402 5.75035 24.8642 5.4887C24.6588 5.18344 19.5138 0.17811 19.3035 0.0812016C19.0687 -0.0302439 18.7802 -0.0253983 18.5356 0.0860462Z"
        fill="black"
      />
    </svg>
  );
};