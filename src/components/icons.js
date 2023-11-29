import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path fill="none" d="M0 0h512v512H0z" />
      <path
        fill="currentColor"
        d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
      />
    </svg>
  );
  
  export const TwitterIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 209"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path fill="none" d="M0 0h256v209H0z" />
      <path
        fill="#55acee"
        d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
      />
    </svg>
  );
  // #0A66C2
  export const LinkedInIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <g fill="none">
        <rect width={256} height={256} fill="#fff" rx={60} />
        <rect width={256} height={256} fill="#0A66C2" rx={60} />
        <path
          fill="#fff"
          d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
        />
      </g>
    </svg>
  );
  
  export const PinterestIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="#CB1F27"
        d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239-.36-8.938-.064-19.668 2.228-29.393 2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136 11.643 0 17.268 8.745 17.268 19.217 0 11.704-7.465 29.211-11.304 45.426-3.207 13.578 6.808 24.653 20.203 24.653 24.252 0 40.586-31.149 40.586-68.055 0-28.054-18.895-49.052-53.262-49.052-38.828 0-63.017 28.956-63.017 61.3 0 11.152 3.288 19.016 8.438 25.106 2.368 2.797 2.697 3.922 1.84 7.134-.614 2.355-2.024 8.025-2.608 10.272-.852 3.242-3.479 4.401-6.409 3.204-17.884-7.301-26.213-26.886-26.213-48.902 0-36.361 30.666-79.961 91.482-79.961 48.87 0 81.035 35.364 81.035 73.325 0 50.213-27.916 87.726-69.066 87.726-13.819 0-26.818-7.47-31.271-15.955 0 0-7.431 29.492-9.005 35.187-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0 57.314 0 0 57.309 0 128.002Z"
      />
    </svg>
  );
  
  export const DribbbleIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="#E74D89"
        d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"
      />
      <path
        fill="#B2215A"
        d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
      />
    </svg>
  );
  
  export const SunIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <g strokeDasharray="2">
          <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.2s"
              values="4;2"
            />
          </path>
          <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.2s"
              dur="0.2s"
              values="4;2"
            />
          </path>
        </g>
        <path
          fill="currentColor"
          d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
          opacity="0"
        >
          <set attributeName="opacity" begin="0.5s" to="1" />
        </path>
      </g>
      <g fill="currentColor" fillOpacity="0">
        <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
          <animate
            id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
            dur="0.4s"
            values="1;0"
          />
        </path>
      </g>
      <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
        <circle cx="12" cy="12" r="12" fill="#fff" />
        <circle cx="22" cy="2" r="3" fill="#fff">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.1s"
            dur="0.4s"
            values="2;6"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="3;12"
          />
        </circle>
        <circle cx="22" cy="2" r="1">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.1s"
            dur="0.4s"
            values="2;6"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="1;10"
          />
        </circle>
      </mask>
      <circle
        cx="12"
        cy="12"
        r="6"
        fill="currentColor"
        mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
      >
        <set attributeName="opacity" begin="0.5s" to="0" />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="6;10"
        />
      </circle>
    </svg>
  );
  
  export const MoonIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
      <g
        fill="none"
        stroke="currentColor"
        strokeDasharray="2"
        strokeDashoffset="2"
        strokeLinecap="round"
        strokeWidth="2"
      >
        <path d="M0 0">
          <animate
            fill="freeze"
            attributeName="d"
            begin="1.2s"
            dur="0.2s"
            values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
          />
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.2s"
            dur="0.2s"
            values="2;0"
          />
        </path>
        <path d="M0 0">
          <animate
            fill="freeze"
            attributeName="d"
            begin="1.5s"
            dur="0.2s"
            values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
          />
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.5s"
            dur="1.2s"
            values="2;0"
          />
        </path>
        <animateTransform
          attributeName="transform"
          dur="30s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        />
      </g>
      <g fill="currentColor">
        <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.2s"
            dur="0.4s"
            values="1;0"
          />
        </path>
      </g>
      <g
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
        <set attributeName="opacity" begin="0.6s" to="0" />
      </g>
      <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
        <circle cx="12" cy="12" r="12" fill="#fff" />
        <circle cx="18" cy="6" r="12" fill="#fff">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.6s"
            dur="0.4s"
            values="18;22"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.6s"
            dur="0.4s"
            values="6;2"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.6s"
            dur="0.4s"
            values="12;3"
          />
        </circle>
        <circle cx="18" cy="6" r="10">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.6s"
            dur="0.4s"
            values="18;22"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.6s"
            dur="0.4s"
            values="6;2"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.6s"
            dur="0.4s"
            values="10;1"
          />
        </circle>
      </mask>
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="currentColor"
        mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.6s" to="1" />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;6"
        />
      </circle>
    </svg>
  );
  
  export const CircularText = ({ className, ...rest }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="496"
    height="496"
    viewBox="0 0 496 496"
    xmlSpace="preserve"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <g
      transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path d="M2340 4132 c0 -44 3 -127 7 -186 l6 -107 91 3 c77 3 91 6 94 21 3 15 -5 17 -71 17 l-75 0 -7 165 c-7 152 -9 165 -26 165 -17 0 -19 -8 -19 -78z" />
      <path d="M2761 4007 c-109 -148 -117 -163 -99 -170 12 -4 22 -6 23 -5 1 2 15 21 30 43 16 22 30 41 31 43 1 2 38 -6 82 -18 l80 -22 7 -53 c5 -41 11 -54 26 -58 25 -7 25 1 -6 213 -14 95 -25 173 -25 175 0 2 -7 5 -15 8 -10 4 -51 -44 -134 -156z m133 -26 l7 -59 -61 15 c-41 11 -59 20 -56 28 2 7 24 40 48 73 l43 60 6 -29 c4 -15 9 -55 13 -88z" />
      <path d="M3209 3913 c-77 -119 -94 -163 -79 -208 18 -55 86 -105 142 -105 52 0 87 31 163 148 66 103 73 118 60 131 -18 18 -9 27 -88 -95 -90 -140 -122 -162 -187 -129 -73 38 -68 90 20 227 39 60 68 114 65 119 -15 23 -37 2 -96 -88z" />
      <path d="M1501 3906 c-9 -11 7 -36 79 -122 49 -59 89 -109 87 -110 -1 -1 -76 11 -167 27 -178 31 -220 35 -220 19 0 -16 223 -280 237 -280 32 0 17 29 -65 128 -50 59 -87 108 -82 110 4 1 88 -11 186 -27 106 -18 182 -27 188 -21 5 5 1 19 -10 34 -45 59 -210 255 -215 255 -4 1 -12 -5 -18 -13z" />
      <path d="M1907 3767 c-22 -15 -13 -47 13 -47 26 0 30 11 16 38 -10 19 -14 20 -29 9z" />
      <path d="M3571 3558 c-127 -98 -141 -112 -128 -125 13 -14 27 -6 127 71 62 48 114 85 115 84 2 -2 -15 -86 -37 -187 -26 -120 -36 -187 -30 -193 7 -7 61 29 157 102 131 100 145 114 132 128 -14 13 -27 6 -119 -65 -57 -43 -108 -82 -114 -86 -6 -3 7 74 28 171 42 197 43 212 26 212 -7 -1 -78 -51 -157 -112z" />
      <path d="M1081 3432 c-57 -28 -94 -83 -99 -146 -2 -29 1 -70 7 -89 21 -63 113 -127 181 -127 34 0 91 22 121 47 64 54 85 143 50 219 -18 40 -78 97 -92 88 -10 -6 -89 -151 -89 -162 0 -6 6 -12 14 -15 10 -4 26 14 51 59 40 71 50 72 81 13 28 -55 13 -119 -40 -168 -37 -35 -127 -41 -174 -12 -67 42 -90 125 -56 197 19 39 69 74 107 74 16 0 31 8 37 20 10 18 8 20 -27 20 -21 0 -53 -8 -72 -18z" />
      <path d="M3845 3116 c-43 -19 -92 -78 -106 -128 -14 -53 0 -117 36 -164 24 -31 109 -73 121 -61 13 12 -6 37 -39 51 -50 20 -81 69 -81 128 0 78 58 138 141 145 119 10 195 -109 135 -211 -34 -57 -11 -90 26 -38 41 57 47 137 14 197 -16 30 -64 72 -95 84 -38 15 -115 13 -152 -3z" />
      <path d="M834 2925 c-4 -9 -4 -19 0 -22 3 -3 83 -25 178 -48 147 -36 174 -40 182 -28 4 8 4 18 0 23 -5 4 -79 24 -164 44 -85 20 -163 39 -173 42 -10 3 -20 -1 -23 -11z" />
      <path d="M838 2634 c-96 -51 -63 -214 43 -214 51 0 74 23 106 105 33 81 62 101 107 71 22 -14 26 -24 26 -61 0 -45 -27 -85 -57 -85 -7 0 -13 -9 -13 -20 0 -31 37 -25 76 14 29 29 34 41 34 80 0 84 -35 126 -105 126 -45 0 -75 -29 -100 -95 -10 -28 -29 -61 -41 -75 -20 -20 -28 -23 -51 -14 -53 18 -56 106 -5 129 13 6 22 19 22 32 0 27 -5 28 -42 7z" />
      <path d="M3800 2572 c0 -23 33 -32 117 -32 l54 0 -3 -97 -3 -98 -87 3 c-82 4 -88 3 -88 -16 0 -24 25 -28 233 -38 132 -6 137 -6 137 14 0 17 -9 20 -77 26 l-78 7 5 96 5 96 83 -2 c75 -2 82 -1 82 17 0 18 -10 20 -107 26 -60 4 -145 9 -190 12 -78 6 -83 5 -83 -14z" />
      <path d="M1146 2261 c-3 -4 3 -39 14 -77 11 -38 20 -72 20 -75 0 -3 -21 -11 -47 -17 -27 -6 -55 -13 -64 -17 -13 -5 -20 7 -35 64 -14 55 -22 71 -36 71 -22 0 -22 -12 -2 -79 8 -29 13 -58 11 -65 -6 -14 -99 -38 -108 -28 -3 4 -14 37 -23 73 -15 57 -20 66 -37 62 -10 -3 -19 -6 -19 -7 0 -8 50 -179 54 -183 4 -4 344 85 354 93 2 1 -9 45 -24 98 -24 88 -42 114 -58 87z" />
      <path d="M3737 2121 c-6 -24 0 -31 25 -31 23 0 36 29 17 41 -22 14 -36 10 -42 -10z" />
      <path d="M1175 1858 c-51 -18 -97 -59 -118 -107 -18 -40 -19 -52 -9 -98 8 -40 59 -138 87 -171 2 -2 73 43 158 98 l156 102 -26 41 c-73 119 -160 166 -248 135z m125 -53 c34 -17 96 -103 84 -114 -5 -5 -60 -41 -122 -81 -107 -69 -114 -72 -127 -54 -50 66 -61 141 -29 195 36 61 129 87 194 54z" />
      <path d="M1543 1551 c-10 -16 -9 -22 3 -32 12 -10 18 -9 31 4 13 13 14 19 3 31 -16 21 -23 20 -37 -3z" />
      <path d="M3352 1523 c-31 -6 -89 -64 -97 -96 -14 -55 18 -110 71 -123 16 -4 53 2 99 16 57 18 76 20 93 11 39 -21 36 -75 -7 -108 -20 -16 -64 -16 -79 -1 -8 8 -15 8 -28 -3 -15 -12 -14 -15 6 -31 37 -30 94 -24 138 16 33 30 37 40 37 81 0 39 -5 51 -28 71 -33 28 -67 30 -128 8 -60 -21 -95 -21 -119 1 -28 25 -25 52 9 86 30 30 86 40 107 19 7 -7 16 -6 29 4 18 13 18 14 -6 29 -29 19 -66 26 -97 20z" />
      <path d="M1707 1423 c-14 -13 -6 -22 46 -52 28 -17 58 -35 66 -40 11 -7 8 -19 -18 -65 -18 -31 -34 -56 -36 -56 -2 0 -31 17 -65 37 -51 30 -63 34 -71 22 -13 -21 -13 -22 51 -57 33 -18 60 -37 60 -42 0 -6 -13 -30 -28 -55 l-28 -44 -64 38 c-58 35 -65 37 -76 22 -7 -9 -12 -17 -11 -17 12 -10 161 -94 166 -94 5 0 176 280 189 310 3 7 -151 100 -166 100 -5 0 -12 -3 -15 -7z" />
      <path d="M2975 1295 c-5 -2 -22 -6 -37 -9 -57 -13 -128 -98 -128 -155 0 -14 5 -18 20 -14 11 3 20 10 20 15 0 6 8 26 17 45 48 101 203 97 255 -7 66 -131 -66 -265 -194 -196 -26 14 -39 16 -53 9 -16 -10 -14 -13 21 -36 71 -46 146 -44 217 5 105 74 86 262 -33 323 -27 13 -89 25 -105 20z" />
      <path d="M2016 1255 c-4 -11 8 -19 46 -30 29 -8 57 -15 64 -15 7 0 15 -4 18 -9 3 -4 -13 -75 -35 -156 -40 -146 -43 -175 -16 -175 9 0 29 57 61 176 26 97 45 178 43 180 -7 7 -140 44 -158 44 -9 0 -19 -7 -23 -15z" />
      <path d="M2344 1183 c4 -10 39 -93 79 -185 50 -117 77 -168 88 -168 11 0 31 40 69 138 29 75 61 158 71 185 l19 47 -23 0 c-18 0 -26 -10 -40 -50 l-18 -50 -83 0 -83 0 -21 50 c-16 38 -26 50 -43 50 -16 0 -20 -4 -15 -17z m224 -135 c-3 -7 -16 -43 -29 -80 -13 -38 -26 -68 -29 -68 -3 0 -13 19 -22 43 -9 23 -23 59 -32 80 l-16 37 66 0 c49 0 65 -3 62 -12z" />
    </g>
  </svg>
  );
  
  export const LinkArrow = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={`w-full h-auto ${className}`}
      {...rest}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
      />
    </svg>
  );
  
  
export default TwitterIcon;
