import { DialogDisplayerButton } from "../COMPONENTS/DialogDisplayerButton";

const INBOX_SVG = `<svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#000000"
        >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
        <path
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 27H8c-1.5 0-3-1.5-3-3v-8m0 0h5.5s1 3.5 5.5 3.5 5.5-3.5 5.5-3.5H27L23 5H9L5 16zM25 28v-8M21 24h8"
        ></path>
        </g>
    </svg>`;

const inboxField = {
  image: INBOX_SVG,
  name: "Inbox",
};

const ALL_SVG = `<svg
fill="#000000"
viewBox="0 0 32 32"
version="1.1"
xmlns="http://www.w3.org/2000/svg"
>
<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
<g
  id="SVGRepo_tracerCarrier"
  stroke-linecap="round"
  stroke-linejoin="round"
></g>
<g id="SVGRepo_iconCarrier">
  <title>border-all</title>
  <path
    d="M29 1.75h-26c-0.69 0-1.25 0.56-1.25 1.25v0 26c0 0.69 0.56 1.25 1.25 1.25h26c0.69-0.001 1.249-0.56 1.25-1.25v-26c-0-0.69-0.56-1.25-1.25-1.25h-0zM27.75 14.75h-10.5v-10.5h10.5zM14.75 4.25v10.5h-10.5v-10.5zM4.25 17.25h10.5v10.5h-10.5zM17.25 27.75v-10.5h10.5v10.5z"
  ></path>
</g>
</svg>`;

const allField = {
  image: ALL_SVG,
  name: "All",
};

const IMPORTANT_SVG = `<svg
viewBox="0 -0.5 21 21"
version="1.1"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
fill="#000000"
>
<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
<g
  id="SVGRepo_tracerCarrier"
  stroke-linecap="round"
  stroke-linejoin="round"
></g>
<g id="SVGRepo_iconCarrier">
  <title>important_message [#1448]</title>
  <desc>Created with Sketch.</desc>
  <defs></defs>
  <g
    id="Page-1"
    stroke="none"
    stroke-width="1"
    fill="none"
    fill-rule="evenodd"
  >
    <g
      id="Dribbble-Light-Preview"
      transform="translate(-139.000000, -520.000000)"
      fill="#000000"
    >
      <g
        id="icons"
        transform="translate(56.000000, 160.000000)"
      >
        <path
          d="M94.55,365.007 L94.55,372.007 C94.55,372.559 94.0796,373.007 93.5,373.007 C92.9204,373.007 92.45,372.559 92.45,372.007 L92.45,365.007 C92.45,364.455 92.9204,364.007 93.5,364.007 C94.0796,364.007 94.55,364.455 94.55,365.007 L94.55,365.007 Z M94.55,375.007 C94.55,375.559 94.0796,376.007 93.5,376.007 C92.9204,376.007 92.45,375.559 92.45,375.007 C92.45,374.455 92.9204,374.007 93.5,374.007 C94.0796,374.007 94.55,374.455 94.55,375.007 L94.55,375.007 Z M101.9,377 C101.9,377.552 101.4296,378 100.85,378 L86.15,378 C85.5704,378 85.1,377.552 85.1,377 L85.1,363 C85.1,362.448 85.5704,362 86.15,362 L100.85,362 C101.4296,362 101.9,362.448 101.9,363 L101.9,377 Z M101.9,360 L85.1,360 C83.93975,360 83,360.899 83,362.003 L83,362.007 L83,378.007 C83,379.112 83.93975,380 85.1,380 L101.9,380 C103.06025,380 104,379.108 104,378.003 L104,362.007 C104,360.902 102.95,360 101.9,360 L101.9,360 Z"
          id="important_message-[#1448]"
        ></path>
      </g>
    </g>
  </g>
</g>
</svg>`;

const importantField = {
  image: IMPORTANT_SVG,
  name: "Important",
};

const NEXT_7_DAYS_SVG = `<svg
fill="#000000"
height="200px"
width="200px"
version="1.1"
id="Capa_1"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
viewBox="0 0 187.333 187.333"
xml:space="preserve"
>
<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
<g
  id="SVGRepo_tracerCarrier"
  stroke-linecap="round"
  stroke-linejoin="round"
></g>
<g id="SVGRepo_iconCarrier">
  <path
    d="M172.049,0h-11.828c-2.761,0-5,2.239-5,5v15.919h-14.407V5c0-2.761-2.239-5-5-5h-11.828c-2.761,0-5,2.239-5,5v15.919H104.58 V5c0-2.761-2.239-5-5-5H87.753c-2.761,0-5,2.239-5,5v15.919H68.346V5c0-2.761-2.239-5-5-5H51.518c-2.761,0-5,2.239-5,5v15.919 H32.112V5c0-2.761-2.239-5-5-5H15.284c-2.761,0-5,2.239-5,5v20.919v9.016v147.399c0,2.761,2.239,5,5,5h156.765c2.761,0,5-2.239,5-5 V34.934v-9.016V5C177.049,2.239,174.81,0,172.049,0z M100.718,99.053c0,17.165-13.965,31.131-31.131,31.131H56.714 c-4.553,0-8.258,3.705-8.258,8.258v8.258h47.262c2.761,0,5,2.239,5,5s-2.239,5-5,5H43.456c-2.761,0-5-2.239-5-5v-13.258 c0-10.067,8.19-18.258,18.258-18.258h12.873c11.651,0,21.131-9.479,21.131-21.131V87.797c0-11.651-9.479-21.131-21.131-21.131 c-11.651,0-21.131,9.48-21.131,21.131v0.395c0,2.761-2.239,5-5,5s-5-2.239-5-5v-0.395c0-17.166,13.965-31.131,31.131-31.131 c17.165,0,31.131,13.965,31.131,31.131V99.053z M148.877,151.7c0,2.761-2.239,5-5,5c-2.761,0-5-2.239-5-5V73.738l-10.985,10.985 c-1.953,1.952-5.118,1.952-7.071,0c-1.953-1.953-1.953-5.119,0-7.071l19.52-19.52c1.43-1.43,3.58-1.857,5.449-1.084 c1.868,0.774,3.086,2.597,3.086,4.62V151.7z"
  ></path>
</g>
</svg>`;

const next7DaysField = {
  image: NEXT_7_DAYS_SVG,
  name: "Next 7 Days",
};

const NEXT_MONTH_SVG = `<svg
height="200px"
width="200px"
version="1.1"
id="_x32_"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
viewBox="0 0 512 512"
xml:space="preserve"
fill="#000000"
>
<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
<g
  id="SVGRepo_tracerCarrier"
  stroke-linecap="round"
  stroke-linejoin="round"
></g>
<g id="SVGRepo_iconCarrier">
  <style type="text/css">
    .st0 {
      fill: #000000;
    }
  </style>
  <g>
    <path
      class="st0"
      d="M118.612,89.298c9.482,0,17.176-7.686,17.176-17.168v-54.96C135.788,7.687,128.094,0,118.612,0 c-9.482,0-17.177,7.687-17.177,17.169v54.96C101.435,81.611,109.13,89.298,118.612,89.298z"
    ></path>
    <path
      class="st0"
      d="M255.992,89.298c9.482,0,17.177-7.686,17.177-17.168v-54.96C273.169,7.687,265.474,0,255.992,0 c-9.483,0-17.176,7.687-17.176,17.169v54.96C238.816,81.611,246.51,89.298,255.992,89.298z"
    ></path>
    <path
      class="st0"
      d="M393.372,89.298c9.483,0,17.176-7.686,17.176-17.168v-54.96C410.549,7.687,402.855,0,393.372,0 c-9.483,0-17.176,7.687-17.176,17.169v54.96C376.196,81.611,383.89,89.298,393.372,89.298z"
    ></path>
    <path
      class="st0"
      d="M186.593,405.072c32.102,0,56.031-21.572,56.031-54.189c0-23.421-13.152-38.94-23.667-43.411v-0.524 c13.152-8.68,19.982-22.102,19.982-37.097c0-28.942-19.196-49.456-52.608-49.456c-28.942,0-48.678,16.575-52.624,38.146 c-0.262,1.573,0.524,2.892,2.112,3.154l22.357,5.264c1.588,0.263,2.637-0.262,3.161-1.842 c3.161-11.048,10.793-18.418,23.945-18.418c14.988,0,23.93,9.999,23.93,24.207c0,15.782-10.253,26.043-26.042,26.043h-7.108 c-1.572,0-2.622,1.048-2.622,2.629v20.784c0,1.58,1.049,2.629,2.622,2.629h7.632c17.623,0,29.203,11.055,29.203,29.203 c0,15.264-9.729,26.574-26.304,26.574c-14.74,0-23.421-8.419-27.106-18.942c-0.524-1.58-1.836-2.104-3.146-1.842l-22.897,5.266 c-1.572,0.524-2.359,1.834-2.097,3.415C136.868,391.133,158.701,405.072,186.593,405.072z"
    ></path>
    <path
      class="st0"
      d="M296.836,277.744l27.352-19.204h0.524v141.011c0,1.58,1.064,2.63,2.637,2.63h24.207 c1.573,0,2.622-1.049,2.622-2.63V225.914c0-1.573-1.048-2.629-2.622-2.629h-22.372c-2.097,0-3.408,0.524-4.734,1.58l-28.663,20.784 c-1.326,1.048-1.85,2.105-1.85,3.678v26.836C293.938,278.269,295.248,278.793,296.836,277.744z"
    ></path>
    <path
      class="st0"
      d="M427.001,44.899h-2.714v27.23c0,17.038-13.861,30.906-30.914,30.906c-17.038,0-30.914-13.869-30.914-30.906 v-27.23h-75.551v27.23c0,17.038-13.877,30.906-30.914,30.906s-30.914-13.869-30.914-30.906v-27.23h-75.552v27.23 c0,17.038-13.876,30.906-30.914,30.906S87.698,89.167,87.698,72.129v-27.23h-2.698c-37.082,0-67.133,30.059-67.133,67.133v332.835 c0,37.074,30.051,67.133,67.133,67.133h342.002c37.066,0,67.133-30.058,67.133-67.133V112.032 C494.134,74.958,464.067,44.899,427.001,44.899z M450.854,439.772c0,15.973-12.99,28.964-28.956,28.964H90.103 c-15.973,0-28.971-12.99-28.971-28.964V143.116h389.722V439.772z"
    ></path>
  </g>
</g>
</svg>`;

const nextMonthField = {
  image: NEXT_MONTH_SVG,
  name: "Next Month",
};

const PROJECTS_SVG = `<svg
viewBox="0 0 512 512"
version="1.1"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
fill="#000000"
>
<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
<g
  id="SVGRepo_tracerCarrier"
  stroke-linecap="round"
  stroke-linejoin="round"
></g>
<g id="SVGRepo_iconCarrier">
  <title>tasks-all</title>
  <g
    id="Page-1"
    stroke="none"
    stroke-width="1"
    fill="none"
    fill-rule="evenodd"
  >
    <g
      id="Combined-Shape"
      fill="#000000"
      transform="translate(70.530593, 46.125620)"
    >
      <path
        d="M185.469407,39.207713 L356.136074,39.207713 L356.136074,81.8743797 L185.469407,81.8743797 L185.469407,39.207713 Z M185.469407,188.541046 L356.136074,188.541046 L356.136074,231.207713 L185.469407,231.207713 L185.469407,188.541046 Z M185.469407,337.87438 L356.136074,337.87438 L356.136074,380.541046 L185.469407,380.541046 L185.469407,337.87438 Z M119.285384,-7.10542736e-15 L144.649352,19.5107443 L68.6167605,118.353113 L2.84217094e-14,58.3134476 L21.0721475,34.2309934 L64.0400737,71.8050464 L119.285384,-7.10542736e-15 Z M119.285384,149.333333 L144.649352,168.844078 L68.6167605,267.686446 L2.84217094e-14,207.646781 L21.0721475,183.564327 L64.0400737,221.13838 L119.285384,149.333333 Z M119.285384,298.666667 L144.649352,318.177411 L68.6167605,417.01978 L2.84217094e-14,356.980114 L21.0721475,332.89766 L64.0400737,370.471713 L119.285384,298.666667 Z"
      ></path>
    </g>
  </g>
</g>
</svg>`;

const projectsField = {
  image: PROJECTS_SVG,
  name: "Projects",
  otherComponents: [DialogDisplayerButton(["newProject"])],
};

const todoListFields = [
  inboxField,
  allField,
  importantField,
  next7DaysField,
  nextMonthField,
  projectsField,
];

export function getTodoListFields() {
  return todoListFields;
}

export const TodoList = {
  getTodoListFields,
};