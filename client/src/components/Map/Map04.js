import React from "react";
import { Path } from "./MapIndex.style";

function Map04({ pickMap, lenderMap }) {
  return (
    <svg width="800" height="600" viewBox="0 -70 800 720" cursor="pointer">
      <Path
        lenderMap={lenderMap["0".isShow]}
        id={0}
        onClick={(e) => pickMap("04", e)}
        d="m426.15 229.91l-.17-.08-1.22 12.75-.33.37-2.16 1.29-1.21.74-8.56 5.24-.6.47-.75.59-.05.04-.4.31-.29.23-2.17 1.74-.05.04-.16.16-.21.27-.35.44-.15.21-.82 1.06-4.93 6.37.32-.02-3.21 4.66 1.61.65.2.12.64.36.1.07.18.12.07.04.18.13.77.69 2.46 3.28.61.9.94 1.7.23.72-.28.05.05.17.41.83.15.3 1.44 2.67 1.21 1.72.45.17 5.57 1.04 1.9-2.08 1.08.91 1.64 2.17.7 1.1.04.52.1 1.46-.45 1.8 7.13 4.53 2.36 3.12 2.86 2.98.81.4 2.49-.4.8 1.1 1.67 3.01.68 2.62.5.23 5.23-.68 5.3-2.31 1.2-2.87 2.85-2.63 3.18-1.12.68-.17.23-.06 1.49-.39 2.39-.71 1.22-1.31 4.96-9.98.18-1.4.54-2.5.48-2.11.77-.51.92-.04 1.03.05 1.17.06-.09-1.25-1.03-3.3-.93-2.62-.12-.58-.62-4.14 1.04-5.41.59-.02.05 0 .16 0 .19-.24.2-.34.16-.58.03-.12.03-.22.13-1.16.03-.29.04-.42-.02-.34-.02-.3.01-.89.09-.53.03-.16.67-2.49.24-6.38.8-4.66.02-.47.02-.79-.01-.38 0-.09-.02-.12-.05-.21-.04-.23-.09-.38-.55-.93-7.96-.48-1.05-.04-2.12-.13-3.6-.24-2.95-1.28-1.83-.21-.13-.02-9.91-.28-5.13.45-1.98.17-11.93-5.3z"
      />
      <Path
        lenderMap={lenderMap["1".isShow]}
        id={1}
        onClick={(e) => pickMap("04", e)}
        d="m293.85 293.97l1.63-1.12 3.91-2.48 5-2.88 3.72.88 2.65.45 5.68 1.09 2.35.56.89.3.85.34.45.19.11.05.15.07.89.44.45.25 5 2.77.98 1.31 3.41 2.1.49.07.99.35 1.22.51.37.16 1.9.97 1.07 1.76-3.01 1.5-.22.08-1.13.39-1.54.51-.07.01-.38.09-.24.08-.17.06-.16.06-.22.17-.77 2.37.74.67 3.61.22 2.56-.07.03-.01 1.26-.18.95-.04.4-.01.33 3.11 1.01 2.68 1.71 3.41 1.08 1.4.68.64.46.43.67.6 6.02 4.91 4.59 1.32 1.62.02.3 0 .38.42.75 3.09.98 3.39 2.71 1.12 3.6 1.04 4.16-.11 1.48-.05 1.27-.26 3.17-1.92 1.73-2.26.05 1.33.06 1.09.73.83 2.02 1.11 1.67.59 2.1 1.68.6 1.8.17.46.2.37.19.32 2.49 3.48.56.61 1.77.9 2.26.5.49.11 1.9 2.55.95 4.64.33 1.55.24.32.07.09 2.42-.05 1.67-.06.14-.08.47-.26 1.11-.62 1.53-.47 3.37-.44.93.06.67.24.98.36 1.93-.84.27-.18 7.26-7.68-.1-1.96-.62-1.01-.77-1.33-.04-.61.15-4.37-1.04-6.07-.49-2.29-1.86-4.13.02-.02.37-.38 3.06-3.02 4.12.76 1.41.5 2.53.7 2.16.15 3.02-.36 1.01-.57 1.5-1.11.9-1 6.23-1.31.55-.52.93-.88.06-.36.11-.7.07-.41-.88-1.44-.48-1.36 1.12-2.32.54-.76 1.68-3.81-5.23.68-.5-.23-.68-2.62-1.67-3.01-.8-1.1-2.49.4-.81-.4-2.86-2.98-2.36-3.12-7.13-4.53.45-1.8-.1-1.46-.04-.52-.7-1.1-1.64-2.17-1.08-.91-1.9 2.08-5.57-1.04-.45-.17-1.21-1.72-1.44-2.67-.15-.3-.41-.83-.05-.17.28-.05-.23-.72-.94-1.7-.61-.9-2.46-3.28-.77-.69-.18-.13-.07-.04-.18-.12-.1-.07-.64-.36-.2-.12-1.61-.65 3.21-4.66-.32.02 4.93-6.37.82-1.06.15-.21.35-.44.21-.27.16-.16.05-.04 2.17-1.74.29-.23.4-.31.05-.04.75-.59.6-.47 8.56-5.24 1.21-.74 2.16-1.29.33-.37 1.22-12.75-.13-1.6-.27-2.05-9.17 2.4-1.5.32-11.51 3.47-.24.07-.16.05-1.6.55-4.89 1.83-8.5 3.27-.06-.21-4.31-2.34-2.09.42-.03 0-2.28-.78-2.45-.98-.49-2.48-9.64-.04.45-2.47-1.04-1.6-2.18.02-.22 0-.7-.01-.53-.01-1.57-.03-.8-.03-1.58-.04-.31-.21-.04-.03-1.19-1.85-.05-.16 1.73-1.95-.44-.43-3.7-3.25-2.05-.35-.37-.05-1.78.08-3.99-2.99-4.8 2.41-5.07-.53-4.09-2.1-.11.41-.18.87-.21 1.32-.94 1.58-.16.26-.21.34-.59.43-.24.09-1.47-.21-4.42.47-2.05 1.3.03.52-.34.5-.02.03-.97.82-.17.14-.02 0-.71-.04-.98-.35-2.13-.56-.12-.03-4.97-.76-2.15-.03-4.35-2.26-3.74-2.06-.05-.04-.62-.34-.19-.06-.62-.23-.84-.01-.2 0-1.45.14-.88.16-.71.11-.14.02-.06.01-1.04.12-1.87-.81-2.84 2.74-.33.32-3.95 5.99-.09.18-.22.47-.03.07-.58 1.93-1.07 1.31-.88.7-1.14.9-1.43.15-.9 3.53-.43 1.71-.42 3.07-.93 6.29-.21 1.42-.36 1.51-.77 2.13-.88 2.44-.34 1.23-.73 3.23-.27 1.63 5.55 6.99.34.23.58.39 1.39.92.33.11 1.3.45 8.35 2.91.54 1.99.74 2.21.08.19.63 1.56.46 2.38.13.92.13 1.02.12 2.15.03.53-.01.92-.1 2.29-.05 1.31-.04.33-.25 2.65-.05.57z"
      />
      <g onClick={(e) => pickMap("04", e)}>
        <Path
          lenderMap={lenderMap["2".isShow]}
          id={2}
          d="m322.58 292.11l-.45-.25-.89-.44-.15-.07-.11-.05-.45-.19-.85-.34-.89-.3-2.35-.56-5.68-1.09-2.65-.45-3.72-.88-5 2.88-3.91 2.48-1.66 1.14-1.67-.7-.78.78-.06.06-.39.4-1.22 1.22-2.79 2.82-.23.15-4.99 3.39-1.05 3.09.19.87-2.02.87-.43.17-1.4.51-.83.2-12.33.1-17.54-.2-12.48-.03-.14-.04.01-2.48.01-2.21-28.65-.08-.32 0 0 .35-.02 2.96 0 1.08-.34.16-.42.17-2.17-.01-3.79-.01-.53 0 0 .39-.02 4.33-2.98-.01-.09 0-.93 0-.8-.01-.32.33-.49.5-1.1 1.12-.54.55-.28 2.51-.9.05-2.59.15-2.64 4.06-5.27 9.15-1.63 2.94-1.17 2.16-1.87 4.74-.14.88-.12.64-.14.43-.43 1.23-.23.5-.51 1.06-.31.56-.71 1.27-.98 1.38-.81.8-.78.75-.33.28-.85.75-.44.39-.85.77-1.36 1.22-.81.75-.52.49-.14.13-.79 1.02-1.03 1.34-.68.91-.61.83-.48.66-2.79 4.74-4.76 7.32-1.32 2.2-.14.75-.12.64-.03.18.03.59.2.46.36.52.57.62.12.11 2.23 2.31 2.92 3.19 3.09 4.69.74 1.31 1.23 1.53 1.42.91 1.46.92 4.02 2.32.41.24.98.39 3.14 1.24 19.35 8.96 5 2.6 9.22 5.48.31.29.88.83.25.24.58.53 6.52 4.66 1.49.97 1.55 1 1.85 1.2.5.71.53.77.98 1.78.06.14.19.45.33.82.04.11.11.5.2.9 1.12 7.27.37 2.16-.04 3.42-.01.83-.01.47-.04 1.36-.33 1.82-.88 3.17-.85 1.21-.29.41-.08.1-.1.09-.4.4-.92.93-9.64 8.16-3.24 2.14-.1.06-.27.13-.4.2-.64.29-2.54.72-1.94.54-5.34.52-1.25.08-3.37.19-8.73-2.67-13.07-3.64-5.59-.79-2.33-.29-6.23-.46-.63-.04-2.18-.1-3.7-.18-3.02-.62-3.55-1.06-1.78-.55-3.06-1.28-3.92-1.65-10.21-3.37-2.17-.54-2.47-.6-4.12-.67-.04-.01-1.41.24-1.66.69-2.02 1.04-4.39 4.1-.72.68-.1 1.32-.37 5.29.11 2.84.73 3.23.24 1.03.1.45.24.77 1.21 3.93.2.51.33.85 1.3 3.34.61 1.46.42.98.96 2.26 1.11 1.99.31.54.21.37.15.27 1.13 1.52.37.5.32.41 2.13 2.77.79 1 .85 1.07 1.8 2.27 14.68 12.89 1.16.89.96.72 1.09.81 12.55 8.95 3.46 2.07 8.61 5.2 2.01 1.49 6.75 5.53 2.12 3.24.94 1.45 2.05 9.41.24 1.51.14.88.21 1.47.12.86-.15.63-.62 2.69-.15.64-.09.38-6.99 7.15-.87 1.48-.76 1.3-1.3 1.72-.65.86-.88 1.14-5.26 5.81-.46.47-.68.68-.7.71-14.35 6.16-3.26.77-1.23.28-2.71.63-1.53 1.37-.87.94-.86.93.14.93.17.25.26.19 1.72 1.2 6.25 2.12.14.03 7.52.6.04-.02 1.91-3.24.29-1.15.66-.44.02-.01.72-.23 1.87-.02 2.2-.09.92-.9.93-.97 1.58-1.34 7.29-3.07.09.06.57.36.18.12.97-.92 4.1-1.65 5.16-1.41 2.85.96 3.18 2.29 8.55-2.76 1.32-.97 1.96-2.41.69-1.56 4.2-1.62 4.08-3.65.31-.46.26-.35.52-.6.34-.36.29-.26.11-.07.24-.1.24-.04 2.27-.3.76.24.23.11.58.38 2.92 2.12 1.48 1.08 1.37 1.02 1.73.48.02-.01 1.02-1.58.19-.62 1.54-2.44 6-7.59.78-.77.13-.05.22-.07 1.12.49.31.14 1.06-.07.39-.1.86-.22 1.23-2.83.03-.4-.3-1.36 6.7-4.21.86-2.28.08-.09.08-.1.31-.04.18.01.2.03.29.09.29.12 1.45.79 2.91.04 2.99 1.04 1.06.1 4.73-.74 1.22-1.54.1-.23.13-.47.01-.22-.11-.45.01-.13.03-.05.04-.06.05-.04 1.31-.63.53-.24 1.1-.3.41-.08.61-.11.12-.01 3.58 2.72.65.39 3.09 1.76.46.25.75.41 4.6.17 1.77.01.55-.23 4.74-2.61 1.64-1.46.22-.19.77-.68.43-.17.73-.21.38-.07 1.78-.01.62.19.78.24.94.73.62 1.1.06.4.13 1.04.02.62 0 .14 0 .42.43 1.35.5 1.35.81.24.39.11.21.04.57 0 .39-.06.05-.01 7.71-1.24 1.87-.53 8.35-3.58.2-.29.13-.12 5.66.01 2.32.16 1.36.22.82.04 1.51-.06 1.51-.28.44-.14.8-.29.76-.41 1.45-1.24 1.42-1.34 1.72-1.66.58-.61.09-.11 1.14-3.38.05-.49-.05-.95-.1-.32-2.11-2.47-1.25-1.39-.43-.27-1.68-1.02.01-.24.04-2.74.46-4.58.92-3.27.21-1.19.23-5.07-.12-2.46.44-.68 1.18-1.82.04-5.16-.19-1.06-.1-.39-.16-.19-.69-.82-.85-1.02-.24-.54-.29-.65.13-.62.05-.21.43-.66.6-.75.72-.72.99-.54.13.01 2.15.11 3.41-.63 2.01-.51 1.91-2.2.05-.36 2.88-3.21 5.23-2.14 4.18-1.61 4.65-1.62 2.78.2 2.8-.46-.16-.91-.33-1.88-.05-.26-.07-1.59-.08-1.88 2.11-3.22 1.47-2.02 2.01-3.62-1.43-1.16-3.37-2.59 1.08-5.9 1.83-3.67-3.96-6.21-.83-2.63-.76-1.19-.1-.11-.9-1.02-.49-.38-.38-.29-.29-.44-.91-1.39 7.79-5.36 7.23-2.21 5.2-1.39 1.11-.21 1.07-.25.91-.22 1.99-2.39 1.65-2.34 1.36-1.06 6.87-4.17.88-.45 2.62-1.18 2.33-.05.85-.27 3.92-1.72 1.87-1.17.78-1.32 2.14-4.65.48-1.85.29-1.06.43-.38 1.33-.89 2.7-.27 1.46 1.13.51.83 4.08 1.52 1.27-.06 2.99-1.41 3.83-1.81 5.84-2.68 2.74.48 1.15 1.34 1.09 1.46.97 1.4.12.22.6 1.04 5.75 4.02.45.24.22.12 2.51-1.08 1.18-.58 2.81-4.16-.41-1.22.59-.99 1.38-.19.61 0 3.17.6 2.4.31 2.19-.06 2.42-.15 3.51-1.19 1.45-.77 1.97-1.32 2.3.12.11 0 .03.01 4.66.57.14.14.19.22 1.77 1.98.33 4.26-.54 2.16.69 1 .5.61.33.54.19.9-.55 1.01-1.09.65-1.07.31-.04.01-1.61 1.34-2.59 2.59-.28 1.28.01.18.02.47 3.92 3.41.07.02 1.95.54 1.71 1.8.84 1.01.49.85 1.09 2.79-.06 1.19-.31.63-1.5 1.18-.85.63-.66.48-.42.32-.06.06-.42.5-.12 1.21-.04 4.58.11.45 5.09 5.5 1.15.78.67.37 1.55 1.03-.02 2.39 6.08.8.72-1.53 3.16-1.96 5.49-2.81.61-.18 5.93.68 2.42.29.57.48 1.62 0 2.91-.6 4.65-1.14 3.92-1.7.74-1.77.06-.22.72-2.79 8.9-3.43.85-.72 1.53-1.28.43-.99.33-.63 1.41-2.12 5.65-2.58 4.31-1.23 4 1.78 6.3.59.37-.05.03-.05.02-.05 1.05-2.05.11-.2 2.28-.69 2.5-.3 4.05.15.54.12 1.78.13.11 0 5.26-.75.41-.48.02-.68-.02-.15-.14-.5-.24-.74-.22-2.16-.04-.84.08-.39 2.68-2.16 1.27-.87 2.89-1.35 3.28-2.21.57-.45.58-.6.29-.66 1.21-2.77-.08-2.93-.81-1.23-1.59-1.23-1.73-1.59.07-2.39.22-.61 1.22-.73 2.85-2.29 2.23-1.96-1.33-2.61-.42-1.79.47-2.61.11-.05.64-.34.49-.26.23-.4.18-.4.25-.56.13-.91.14-1.88.08-2.61.52-1.82.07-.2.01-.03.48-.32.59-.62-.39-1.63-.3-.58-.29-.36-.87-.89-1.45-1.07-.9-.56-1.58-4.99-.01-.45-.01-.39-.04-.9-.18-.5-2.76-4.09-.51-.66-.61-.62-2.16-.22-.08.07-.01 0-.31-.18-.55-.4-.15-.28-.33-1.48-.05-2.12.51-1 .75-1.36.11-.39.03-.09.17-.91-.27-2.7-.77-2.47-.63-.9-.41.04-.34-.05-.82-.27-1.41-1.92-1.4-2.05-1.62-2.99-.04-.12-.38-1.17-.14-.85-.1-.68.01-1.21 1.59-6.14-1.67-.99-3.87-3.2-2.95-1.09-2.46-1.98-3.1-.14-5.22-1.15-.31-.38-.65-.75-5.72-1.51-2.82-.71-1.92-.17-.9-.03-5.61-.08-4.59-.97-1.41-.81-.88-1.14-.87-3.19-2.52-.16-4.2.66-2.76.37-2.89.15-.48-.05-2.1-.19-.91-.8-3.71-.99-4.59-.23-1.75.08-2.39.27-.91.37 0 .01-2.7.92-.47-.41-1.45-1.38-1.54-1.49-.32-.17-.26-.14-.78-.27-.65-.16-3.25-.77-2.84.12-6.81 3.17-10.91-1.62-5.93-1.42-1.74-.49-.17-.04-1.39-.34-1.33.12-1.23.2-4.42.13-.63-1.07-6.86-3.28-1.26-.38-5.3 2.31-1.68 3.81-.54.76-1.12 2.32.48 1.36.88 1.44-.07.41-.11.7-.06.36-.93.88-.55.52-6.23 1.31-.9 1-1.5 1.11-1.01.57-3.02.36-2.16-.15-2.53-.7-1.41-.5-4.12-.76-3.06 3.02-.37.38-.02.02 1.86 4.13.49 2.29 1.04 6.07-.15 4.37.04.61.77 1.33.62 1.01.1 1.96-7.26 7.68-.27.18-1.93.84-.98-.36-.67-.24-.93-.06-3.37.44-1.53.47-1.11.62-.47.26-.14.08-1.67.06-2.42.05-.07-.09-.24-.32-.33-1.55-.95-4.64-1.9-2.55-.49-.11-2.26-.5-1.77-.9-.56-.61-2.49-3.48-.19-.32-.2-.37-.17-.46-.6-1.8-2.1-1.68-1.67-.59-2.02-1.11-.73-.83-.06-1.09-.05-1.33-1.73 2.26-3.17 1.92-1.27.26-1.48.05-4.16.11-3.6-1.04-2.71-1.12-.98-3.39-.75-3.09-.38-.42-.3 0-1.62-.02-4.59-1.32-6.02-4.91-.67-.6-.46-.43-.68-.64-1.08-1.4-1.71-3.41-1.01-2.68-.33-3.11-.4.01-.95.04-1.26.18-.03.01-2.56.07-3.61-.22-.74-.67.77-2.37.22-.17.16-.06.17-.06.24-.08.38-.09.07-.01 1.54-.51 1.13-.39.22-.08 3.01-1.5-1.07-1.76-1.9-.97-.37-.16-1.22-.51-.99-.35-.49-.07-3.41-2.1-.98-1.31-5-2.77z"
        />
        <Path
          lenderMap={lenderMap["3".isShow]}
          id={3}
          d="m283.94 121.22l-.15-.13-.61-.55-1.42-.82-2.71-1.23-3.73-1.28-2.8-.38-6.14-.28-4.12-3.23-1.33-.7-2.91-.12-1.09-.35-1.46-.56-.95-.96-1.81-.46-.46 1.17-.51 3.21-.01.06.19.73.26.96-1.46 3.28-.98.63-.92.59-1.04.68-.57.37-1.58.24-1.28.12-4.71-.52-3.89-.19-1.18.11-.65.38-.56 1.34-4.11 3.39-7.25.76-2.68.65-3.38 1.83-.87.69-.58.86-.1.17-.05.08-.09.19-.01.02.05.03.01.01.11.1 0 .01.12.13.11.22 0 .01-.01.05-.01.07-.16.26-.08.09-1.31.17-.19-.04-.32-.15-1.99-1-.33 1.61.08 2.67-.24.6-1.12 2.21-.45.47-3.97 1.08-.18-.03-.38-.05-.08-.01-3.13 1.17-.05.29-.16 2.79-1.21 5.38-.89 2.47-1.49 1.88-1.42.92-.93.74-5.27 6.77-.68 1.23-.02.06-.14.36-.47 1.43-.48 1.77-2.59 3.53-4.29.3-2.41.06-.9.14-4.14.65.01 1.51.22 3.69-.24 1.09-.07.26-1.23 3.85-.48.85-.25.42-.53.59-.27.3-.32.33-.53.67-.03.05-.57.89-1.78 3.59-5.91 12.14-1.58 6.19-.23.68-.78 2.18-.59 1.29-.25.4-1.59 2.09-.24.27-.55.62-.15.15-.6.57-.51.49-.58.84-.62 1.19-1.02 2.17-.88 4.47-.17 2.38-.03 3.62-.02 6.12.03.95.07.93 4.36 2.2 3.71-1.13 2.41.1 8.49.02 20.56.18 7.24.18 1.14.44 3.46 1.3 4.92.35 12.69 1.08 2.94.75 1.77.46 2.17.55 3.51.17 3.19.16 2.7.13 2.9.14 7.61 1.82 6.89 3.17.93.42 3.68 1.92 1.24.64 2.17 1.13 7.69 2.3 1.31.39 3.09.26.19-.06.73-3.23.34-1.23.88-2.44.77-2.13.36-1.51.21-1.42.93-6.29.42-3.07.43-1.71.9-3.53 1.43-.15 1.14-.9.88-.7 1.07-1.31.58-1.93.03-.07.22-.47.09-.18 3.95-5.99.33-.32 2.84-2.74 1.87.81 1.04-.12.06-.01.14-.02.71-.11.88-.16 1.45-.14.2 0 .84.01.62.23.19.06.62.34.05.04 3.74 2.06 4.35 2.26 2.15.03 4.97.76.12.03 2.13.56.98.35.71.04.02 0 .17-.14.97-.82.02-.03.34-.5-.03-.52 2.05-1.3 4.42-.47 1.47.21.24-.09.59-.43.21-.34.16-.26.94-1.58.21-1.32.18-.87.11-.41 4.09 2.1 5.07.53 4.8-2.41 1.53-2.23 1.06-1.81.07-.13.25-.49-1.16-5.42-.24-.72-.24-.59-.39-.91-.2-.39-1.18-2.21-.87-.81-.3-.16-2.26-3.67-.08-.13.38-1.06.3-.29 1.19-.94 5.63-1.59 4.68-.96.42-.29.99-.69.83-1.77-.44-.14-.05-.02-1.62-.69-.77-.34-1.55-.8-.41-.23-2.79-1.33-2.78-1.19-8.42-2.32-.4-.04-.52-.07-.87-.05-4.62.02-.94.09-.63.06-1.14.43-3.07 2.15-.96 2.67.62.63-.72.78-.3.26-1.3 1.11-1.05.85-.47.2-.62.24-.19.05-.44.12-.24.07-.7.19-.1.03-.07-.91-.01-.65-.01-.41-.2-.89-.77-1.64-.34-.44-.32-.11-.25.05-3.29.87-.47.12-2.61-3.28-1.98-3.44-.96-1.73-.71-1.78-2-1.8-1.03-.22-1.4-.17-.68.13-.69.21-.18.09-2.79 1.57-1.15.86-.34.5-.57 1.7-.79-.26-1.94-.99-4.94-2.03-.99-.3-1.54 1.1-.93 1-1.55.99-.6.32-.55-.28-.42-.22-1.88-1-1.84-1.46-.76-.83-1.03-1.14-2.41-1.63-.28-.18-.2-.13-.55-.35-.9-1.08-.29-4.05.07-3.26-.37-1.56-.01-.06-.87-.99-1.27-1.15-.66-.99.81-1.31.96-.99 1.01-.4.81-.32 1.2-.22 3.2-2.68 1.67-1.54.7-.71.24-.25 1.28-3 .47-1.29-.68-.83-.28-5.53-.05-1.85.27-.66.22-.45 1.15-1.72 1.37-1.92.43-.96.74-1.63.68-5.53-.11-1.32-.16-1.6-.05-.52-.84-1.49z"
        />
      </g>
      <Path
        lenderMap={lenderMap["4".isShow]}
        id={4}
        onClick={(e) => pickMap("04", e)}
        d="m601.11 5.85l-.64-.85-4.39.81-7.88 2.12-3.2-.38-2.75-.31-4.12-.3-.72.54-3.08 1.72-6.65.12-4.77-.14-2.71.88-1.32.73-1.71 2.17-.14.18-1.82.58-5.1.3-.01 0-3.55.05-5.72.59-.53.67-1.06 1.34-2.99 1.09-.17-.08-.82-.4-1.96-1.08-.68-.61-2.17-1.06-3.26-1.33-.53-.1-.02.01-2.14.34-2.18-.17-.91-.16.02.02-1.1 1.36-1.65.47-.49.05-.7.06-.27.03-1.17-.02-2.3.15-.86.07-3.06 1.17-2.63 1.34-.38.21-6.45-1.06-1.5.15-.87.13-.6.28-.4 1.09-.24.45-2.47.53-1.96.01-2.66-.56-1.82-.06-.54 2.01-.55 2.04-.72 2.16-.63 1.68-1.76 1.44-6.19 5.32-3.6 4.56-5.04 6.19-1.18 1.43.26.04 2.05.28 1.85.72 4.55 2.54.64.48 3.09 2.42.6.51.24.21.48.41.82 1.14.48 1.4 5.21 5.04.83.4 1.02.57.07.05.19.12.13.21.34.54.75 1.76.17 1-.02.04-.07.14-1.15 1.48-.66.96-.23.33-.15 2.06.43.45.42.37.04.03 2.8 2.32 3.01 3.47.03.04.13.21.29.45-.7 1.65-.9 1.3.54 1.81 1.91 1.05.51.22.2.09 1.17.77.05.05 2.16 3.64.01.13-.2 2.14-.03.03-.33.22-1.51 1.04-1.4 1.47-1.21 3.38-.42 5.55.23 3.24.09.07.16.13 1.04-.21.4-.08.86.12 1.08.41.36.25.71.49.25 6.31-.22 2.12-.18.16-1.52 3.75-.23 1.61 2.2 3.35 1.47 1.66.63.44.43 1.18.02 1.12-.01.02-.53.59-.35.14-.58.23.78-.1.01 0 .85.05.73.05 3.02 3.03.29.57.45 1.01.11.67.02 1.85.01.47.06 1.34.09 1.56.13 1.16.08.29.07.25.2.7.39 5.64-.01 1.27-.14 2.69-.64 8.81-.71.55-1.27.06-2.25.06-1.23.03-1.19 2.11-.58 1.38-.1.73-.02.21-.02.19 2.74 9.42 4.19 5.21-.06.49-.07.71-.02.12-5.32 5.26-3.6-2.14-4.74-2.13-3.28 2.14-4.17 3.06-.11.13-.62.78-.7 1.09-.2.4-.29.61-.05.23-.1.49-.22.7-.17.46-.23.18-.76.27-.2.03-.04.01-3.53 4.72-.36.86-.97 1.28-1.03 1.19-4.68 3.8 1.44.92 3.65 1.8.24.12 2.64 1.56.89 2.04.44 1.02 1.13 3.91.49 1.19.25.03 5.13.49.06.01 12.44 1.21.04.01 3.89.31.31-.33.32-.35.67-.73 3.33-3.74 1.3-1.6.17-.19.15-.16.23-.12 0 0 .4-.19.77-.22.23-.07 1.96-.55.67-.19 2.71-.77.19-.1.54-.32.13-.08 1.11-.66 3.75-2.22.28-.16.24-.15.59-.35 1.33-.78.43-.23.04.05.15.21 5.36-1.99 3.29-.75.26 0 .34.07.66.24.12.05.52.31.69.45.97.66.92.68.32.2.18.09.21.11.2.09.3.1.27.08.63.12.12.02.05 0 .15.01.76.05 3.78-.82.52-.32 2.04 3.08 1.42.87.68.42 2.34.96 1.51.4 1.64.24 1.76.33.08.01 6.64-.66.53-.19.79-.3.31-.87 4.58 1.66 1.03 1.3.61.76.16.2.25.35.41.74.24.42.18.58.26.49.97 1.87 1.08 1.91.5 4.73-.38.98.08.84.53.72.57.6 1 .8.71.44 4.87 1.75.2.06.76.21.19-.01 7.4.17 5.71.15 3.81.25 2.47 1.16 5.94.26 3.08-.78 6.43-3.1 1.14-.6.05-.02.38-.15 5.84-.66.66.22 1.4.47 10.36 1.23 2.58 2.89-.44.31 1.46 1.25 4.39 2.56 3.26 2.15 2.23 1.8.33.19.1.06.12.07.84.49.84.48 1.82.22 1.06.12.31.03.31.03.19-.02.32-.04 1.11-.14.11-.05.43-.23.4-.2 1.36-.71 1.45-1.09 5.76-4.05.08-.05.05-.03.32-.16.5-.13 2.64-.81 4.19-1.33.25-.1.18-.2 1.97-2.87.48-.86.78-1.07 2.47-3.29.3-.36.04-.05.04-.04.36-.29.36-.24.47-.31.6-.3.04-.02.17-.08.43-.21.84-.41.27-.12.25-.12.32-.15.57-.25.67-.32.64-.3.77-.48.02-.33.01-.54.01-.15.07-2.41-1.48-3.1 1.08-2.6 1.6-2.09-3.08-3.37.24-3.38.33-.65 2.45-5.07.48-1.42.53-5.7-1.65-4.89-3.46-6.44-.29-.88-.15-.46-.71-5.16-.66-5.36.09-.54.09-.59.08-.45.42-.67 1.28-1.3 2-.85.71-.3-.89-2.12-2.54-4.97-.69-1.34-.79-1.33-1.58-2.02-.07-.04-.14-.09-.41-.25-.06-.04-3.78-2.07-3.17-1.08-2.16-.57-4.18-1.04-2.26-1.12-1.72-1.3-.27-1.1-.13-.5-.01-.06-2.05-3.56-1.48-2.52-1.06-1.01-.62-.57-.28-.29-1.57-1.65-1.35-2.12 1.43.01.92-1.37.13-.87-.31-2.8 1.13-2.45 2.61-3.02-1.53-.88 1.7-2.43 4.16-5.5.31-1.14.08-.27-.41-1.04-.14-.35-2.1-4.13.07-1.83.2-.77-2.54-5.34-1.24-2.15-.96-.59-1.25-.78-.22-.13-.24-.15.12-.23.34-.45.09-.13.02-.02.32-.42.48-.61 2.02-1.31 1.06-.59.15-.07 1.05-.33.86-.63.45-.54.17-.25.13-.18.48-3.77 1.26-5.62 1.72-4.05 1.17-5.18-.18-.3-.36-.61-.72-.76-2.28-.93-.96-.28-2.25-.58-1.77-.78-2.12-1.43-1.15-1.02-1.07-2.38-.34-1.55-.5-1.3-1.07-.89-.8-.65-3.18-1.28-.37-.25-.25-.17-.76-.52-1.48-1.88-.34-.43.31-3.1.58-2.69.41-.64.27-.41 1.42-.75.09-.04.08-.04 1.43-1.62 1-1.65-.22-.17-.72-2.22-.31-.65-.25-.52-1.72-2.12-.83-.7-.24-.2-2.12-.66-2.59-3.94-1.14-2.17-1.35-1.45-.75-.61-5.32-3.57-1.47-.2-.45-.63-.64-.47-4.35-1.57-2.84-.54-5.56-.83-6.4-.9-.44-.02-1.22-.05-2.9-.47-2.51-.72-2.39-.78-6.08-2.96-1.09-3.46z"
      />
      <Path
        lenderMap={lenderMap["5".isShow]}
        id={5}
        onClick={(e) => pickMap("04", e)}
        d="m488.74 61.41l-.83-.4-5.21-5.04-.48-1.4-.82-1.14-.48-.41-.24-.21-.6-.51-3.09-2.42-.64-.48-4.55-2.54-1.85-.72-2.05-.28-.26-.04-.73 2.77-3.32.6-3.13.61-3.27.74-4.61 1.71.17 3.63-4.16 2.31-9.98 2.82-2.85-1.1-3.86-.56-8.25.17-10.32 4.89.01 1.57 0 .14-1.4 1.14-4.38.59-1.94-.5-2.59.18-2.1.75-1 .71-.09.41-.51 3.77-2.77 8.24-1.01 3.36-.92-.55-3.05-1.87-2.87-2.02-2.74-2.59-.48-.97.1-1.74-.24-2.02-.85-1.84-2.87-4.24-.12-.38.22-1.45-.36-.48-.95-.68-2.62-1.05-2.62-.86-1.79-.67-6.2-3.64-3.45-1.44-1.08.08-2.44.18-.01 0-.74 1.98-1.99 4.55-.35.58 1.57 5.69.82 1.53 1.42 4.28.81 3.51.1.47.69 3.26 3.47 1.7.95.54 1.41 2.65.51.95 0 0-.03.25-.26 1.14-.16.71-.61 1.85-.38.89-.58 1.34-.69 2.62-.55 2.49.05.13.09.2.53 1.13.91.5.23 1.23.31 3.23-.95.81 1.33 4.61.71.7.49 4.82-1.05 2.15-.07.43-.1.98.15.98-1.1 1.95-3.32 5.66-1.88 5.36-.77 3.9-1.18-.07-.43.2-1 .46-1.35.7-1.61 1.03-3.34 3.48-.32.49.15.71 0 1.73-1.2 1.44-6.85 5.15-5.04 2.08-.89.03-4.8 2.29-4.62 5.52-1.87 5.71-1.1 4.04-.21.87-.09 1.04 1.11.66.04.03.58 1.22-1.29 7.19-.18.35 3.07-2.15 1.14-.43.63-.06.94-.09 4.62-.02.87.05.52.07.4.04 8.42 2.32 2.78 1.19 2.79 1.33.41.23 1.55.8.77.34 1.62.69.05.02.44.14 3 2.94 7.91.91.44-.08.31-.06.34-.08 2.12-.91.33-.46.38-.57.78-1.14.22-.36 1.36-2.35.25-.69.12-.58.03-.32.01-.04.01-.1.03-.24.23-.43 1.78-1.69 1.06-1.01.21-.19 1.65-.58.84-.29.28-.1 1.25-.43.17-.06 1.15-.2.54-.1.33-.06 1.72-.31 7.93-3.21 1.94 2.57-.27.18-1.12 1.06-.71.82.05.06 2.98 3.27.34.37.15.16.19.2.29.2.11.08.02.02.03.01.03.02.09.05.03.02.1.05.12.05.22.08.15.05.22.07.25.05 1.87.28 7.03 1.04 1.85.26 6.7 1.13 1.26.04 7.76 1.23.25-.02.98.15 1.7.31.4.16 4.63 1.9.09.04.5.22 2.9 1.27-2.66 8.6 5.88 1.21 6.12 1.17-.04.29 1.14.23.56.07 5.65 1.12.71.15 1.04.21.67.29 0 .75-.13.05 2.33-.27 6.87 1.26 2.96.88.61.17.77.11.59.03.05 0 1.64-.06.66-.09.27-.03.96-.13.06-.02 1.62-.45.54-.16 2.58-.78-3.65-1.8-1.44-.92 4.68-3.8 1.03-1.19.97-1.28.36-.86 3.53-4.72.04-.01.2-.03.76-.27.23-.18.17-.46.22-.7.1-.49.05-.23.29-.61.2-.4.7-1.09.62-.78.11-.13 4.17-3.06 3.28-2.14 4.74 2.13 3.6 2.14 5.32-5.26.02-.12.07-.71.06-.49-4.19-5.21-2.74-9.42.02-.19.02-.21.1-.73.58-1.38 1.19-2.11 1.23-.03 2.25-.06 1.27-.06.71-.55.64-8.81.14-2.69.01-1.27-.39-5.64-.2-.7-.07-.25-.08-.29-.13-1.16-.09-1.56-.06-1.34-.01-.47-.02-1.85-.11-.67-.45-1.01-.29-.57-3.02-3.03-.73-.05-.85-.05-.01 0-.78.1.58-.23.35-.14.53-.59.01-.02-.02-1.12-.43-1.18-.63-.44-1.47-1.66-2.2-3.35.23-1.61 1.52-3.75.18-.16.22-2.12-.25-6.31-.71-.49-.36-.25-1.08-.41-.86-.12-.4.08-1.04.21-.16-.13-.09-.07-.23-3.24.42-5.55 1.21-3.38 1.4-1.47 1.51-1.04.33-.22.03-.03.2-2.14-.01-.13-2.16-3.64-.05-.05-1.17-.77-.2-.09-.51-.22-1.91-1.05-.54-1.81.9-1.3.7-1.65-.29-.45-.13-.21-.03-.04-3.01-3.47-2.8-2.32-.04-.03-.42-.37-.43-.45.15-2.06.23-.33.66-.96 1.15-1.48.07-.14.02-.04-.17-1-.75-1.76-.34-.54-.13-.21-.19-.12-.07-.05-1.02-.57z"
      />
      <Path
        lenderMap={lenderMap["6".isShow]}
        id={6}
        onClick={(e) => pickMap("04", e)}
        d="m417.41 188.51l-1.26-.04-6.7-1.13-1.85-.26-7.03-1.04-1.87-.28-.25-.05-.22-.07-.15-.05-.22-.08-.12-.05-.1-.05-.03-.02-.09-.05-.03-.02-.03-.01-.02-.02-.11-.08-.29-.2-.19-.2-.15-.16-.34-.37-2.98-3.27-.05-.06.71-.82 1.12-1.06.27-.18-1.94-2.57-7.93 3.21-1.72.31-.33.06-.54.1-1.15.2-.17.06-1.25.43-.28.1-.84.29-1.65.58-.21.19-1.06 1.01-1.78 1.69-.23.43-.03.24-.01.1-.01.04-.03.32-.12.58-.25.69-1.36 2.35-.22.36-.78 1.14-.38.57-.33.46-2.12.91-.34.08-.31.06-.44.08-7.91-.91-3-2.94-.83 1.77-.99.69-.42.29-4.68.96-5.63 1.59-1.19.94-.3.29-.38 1.06.08.13 2.26 3.67.3.16.87.81 1.18 2.21.2.39.39.91.24.59.24.72 1.16 5.42-.25.49-.07.13-1.06 1.81-1.53 2.23 3.99 2.99 1.78-.08.37.05 2.05.35 3.7 3.25.44.43-1.73 1.95.05.16 1.19 1.85.04.03.31.21 1.58.04.8.03 1.57.03.53.01.7.01.22 0 2.18-.02 1.04 1.6-.45 2.47 9.64.04.49 2.48 2.45.98 2.28.78.03 0 2.09-.42 4.31 2.34.06.21 8.5-3.27 4.89-1.83 1.6-.55.16-.05.24-.07 11.51-3.47 1.5-.32 9.17-2.4 0-.02-.4-2.53-.08-.54-.02-.16-.08-.74 1.38-1.1.02-.02.38-.26.24-.18.72-.51 1.04-.7.52-.34.03-.02.72-.46.23-.18.26-.21 1.14-.93.59-.62.4-.42.02-.04.15-.3.57-.85-.31-3.56-.27.31-.12.11-.21.13-.18.11-1.38.52-.86.09-.77.05-1.7-1.74-.07-.46-.07-.54.01-.1.01-.06.09-.26 1.36-2.75.01-.01.02-.03.06-.08.17-.13.01 0 .03-.03.08-.03.2-.05 1.5-.53-.31-4.28 3.25.64 2.66-8.6-2.9-1.27-.5-.22-.09-.04-4.63-1.9-.4-.16-1.7-.31-.98-.15-.25.02-7.76-1.23z"
      />
      <Path
        lenderMap={lenderMap["7".isShow]}
        id={7}
        onClick={(e) => pickMap("04", e)}
        d="m541.55 206.39l-.21-.11-.18-.09-.32-.2-.92-.68-.97-.66-.69-.45-.52-.31-.12-.05-.66-.24-.34-.07-.26 0-3.29.75-5.36 1.99-.15-.21-.04-.05-.43.23-1.33.78-.59.35-.24.15-.28.16-3.75 2.22-1.11.66-.13.08-.54.32-.19.1-2.71.77-.67.19-1.96.55-.23.07-.77.22-.4.19 0 0-.23.12-.15.16-.17.19-1.3 1.6-3.33 3.74-.67.73-.32.35-.31.33-3.89-.31-.04-.01-12.44-1.21-.06-.01-5.13-.49-.25-.03-1.44 3.97-.09.2-.11.21-.35.58-.16.27-.14.22-.25.41-.3.31-.44.23-1.62.78-2.53 1.99-.19.89-1.02.52-.64 1.42-.11.52-.07.48-.07.5-.03.17-.01.09-.05.42 0 .01 0 1.23.04.58.11 1.37 0 .03.03.37.02.18 0 .06.17.89.09.16.55.93.09.38.04.23.05.21.02.12 0 .09.01.38-.02.79-.02.47-.8 4.66-.24 6.38-.67 2.49-.03.16-.09.53-.01.89.02.3.02.34-.04.42-.03.29-.13 1.16-.03.22-.03.12-.16.58-.2.34-.19.24-.16 0-.05 0-.59.02-1.04 5.41.62 4.14.12.58.93 2.62 1.03 3.3.09 1.25-1.17-.06-1.03-.05-.92.04-.77.51-.48 2.11-.54 2.5-.18 1.4-4.96 9.98-1.22 1.31-2.39.71-1.49.39-.23.06-.68.17-3.18 1.12-2.85 2.63-1.2 2.87 1.26.38 6.86 3.28.63 1.07 4.42-.13 1.23-.2 1.33-.12 1.39.34.17.04 1.74.49 5.93 1.42 10.91 1.62 6.81-3.17 2.84-.12 3.25.77.65.16.78.27.26.14.32.17 1.54 1.49 1.45 1.38.47.41 2.7-.92 0-.01.91-.37 2.39-.27 1.75-.08 4.59.23 3.71.99.91.8 2.1.19.48.05 2.89-.15 2.76-.37 4.2-.66 2.52.16.87 3.19.88 1.14 1.41.81 4.59.97 5.61.08.9.03 1.92.17 2.82.71 5.72 1.51.65.75.31.38 5.22 1.15 3.1.14 2.46 1.98 2.95 1.09 3.87 3.2 1.67.99.01-.03 6.86-3.09 1.08-.02.42-.11 1.33-.34.76-.2.65-.53.33-.42.64-1.12.1-.33.09-.9.11-.46.23-.46 2.02-1.28.93-.3 1.81.01.57 1.14.84.99 1.42 1.04 1.36.33 3.36-1.01.62-.44.1-.12.04-.44.02-.7.08-.57.13-.19.16-.23.03-.04 2.81-2.33.07-.05 1.4-.8.39-.23 2.25-.68.86-.22 2.45-3.53.06-.15.03-.04 3.41-2.48.12-.07 9.52-3.39.96-.29-1.35-2.71-1.07-.89-1.42-4.77-1.02-3.81-.03-.11.01-1.14-.06-.98-.29-.95-.43-.46-.54-.58-1.55-1.66-2.08-1.52-1.58-.94-.2-.2-.57-.53-.57-1.84-.07-.36-.07-.35.08-4.34.02-.27.39-.48 1.3-1.31.74-.44.02-.09.02-.17.02-.1.01-.09.5-.66.27-.31.54-.63.5-.46 4.56-4.13 1-.65 3.66-2.46 1.67-1.39.83-.29.66.03.28.02.73.42.05.02.05.03.02.02.13.08.52.83.14.24.2.29.02 0 .13.01.28-.07 3.14-1.3 1.2-.54.1-.17.12-.4.02-.04.03-.13-.88-1.69-.12-.18-.19-.23-.18-.23-.18-.28-.05-.1-.02-.1.03-1.41.42-1.11 2.03-2.5.73-.81.62-2.76.03-.21.31-2.78-.14-1.02-.48-1.14-.07-.17-1.31-3.2-.21-4.83.02-.09 0-.01-.03-.07-1.47-1.18-.35-.26-.64-.23-1.4-.68-1.26-2.16 1.62-1.29.08-.04 1.58-.16.29-.03.64.09.45.17.71.14.44-.31-2.58-2.89-10.36-1.23-1.4-.47-.66-.22-5.84.66-.38.15-.05.02-1.14.6-6.43 3.1-3.08.78-5.94-.26-2.47-1.16-3.81-.25-5.71-.15-7.4-.17-.19.01-.76-.21-.2-.06-4.87-1.75-.71-.44-1-.8-.57-.6-.53-.72-.08-.84.38-.98-.5-4.73-1.08-1.91-.97-1.87-.26-.49-.18-.58-.24-.42-.41-.74-.25-.35-.16-.2-.61-.76-1.03-1.3-4.58-1.66-.31.87-.79.3-.53.19-6.64.66-.08-.01-1.76-.33-1.64-.24-1.51-.4-2.34-.96-.68-.42-1.42-.87-2.04-3.08-.52.32-3.78.82-.76-.05-.15-.01-.05 0-.12-.02-.63-.12-.27-.08-.3-.1-.2-.09z"
      />
      <Path
        lenderMap={lenderMap["8".isShow]}
        id={8}
        onClick={(e) => pickMap("04", e)}
        d="m455.69 207.86l0-.75-.67-.29-1.04-.21-.71-.15-5.65-1.12-.56-.07-1.14-.23.04-.29-6.12-1.17-5.88-1.21-3.25-.64.31 4.28-1.5.53-.2.05-.08.03-.03.03-.01 0-.17.13-.06.08-.02.03-.01.01-1.36 2.75-.09.26-.01.06-.01.1.07.54.07.46 1.7 1.74.77-.05.86-.09 1.38-.52.18-.11.21-.13.12-.11.27-.31.31 3.56-.57.85-.15.3-.02.04-.4.42-.59.62-1.14.93-.26.21-.23.18-.72.46-.03.02-.52.34-1.04.7-.72.51-.24.18-.38.26-.02.02-1.38 1.1.08.74.02.16.08.54.4 2.53 0 .02.27 2.05.13 1.6.17.08 11.93 5.3 1.98-.17 5.13-.45 9.91.28.13.02 1.83.21 2.95 1.28 3.6.24 2.12.13 1.05.04 7.96.48-.09-.16-.17-.89 0-.06-.02-.18-.03-.37 0-.03-.11-1.37-.04-.58 0-1.23 0-.01.05-.42.01-.09.03-.17.07-.5.07-.48.11-.52.64-1.42 1.02-.52.19-.89 2.53-1.99 1.62-.78.44-.23.3-.31.25-.41.14-.22.16-.27.35-.58.11-.21.09-.2 1.44-3.97-.49-1.19-1.13-3.91-.44-1.02-.89-2.04-2.64-1.56-.24-.12-2.58.78-.54.16-1.62.45-.06.02-.96.13-.27.03-.66.09-1.64.06-.05 0-.59-.03-.77-.11-.61-.17-2.96-.88-6.87-1.26-2.33.27.13-.05z"
      />
      <text id={0} onClick={(e) => pickMap("04", e)} x="430" y="275" fill="#B0AFAF">
        남구
      </text>
      <text id={1} onClick={(e) => pickMap("04", e)} x="340" y="280" fill="#B0AFAF">
        달서구
      </text>
      <text id={2} onClick={(e) => pickMap("04", e)} x="280" y="420" fill="#B0AFAF">
        달성군
      </text>
      <text id={3} onClick={(e) => pickMap("04", e)} x="220" y="210" fill="#B0AFAF">
        달성군
      </text>
      <text id={4} onClick={(e) => pickMap("04", e)} x="565" y="130" fill="#B0AFAF">
        동구
      </text>
      <text id={5} onClick={(e) => pickMap("04", e)} x="420" y="130" fill="#B0AFAF">
        북구
      </text>
      <text id={6} onClick={(e) => pickMap("04", e)} x="380" y="215" fill="#B0AFAF">
        서구
      </text>
      <text id={7} onClick={(e) => pickMap("04", e)} x="530" y="275" fill="#B0AFAF">
        수성구
      </text>
      <text id={8} onClick={(e) => pickMap("04", e)} x="440" y="225" fill="#B0AFAF">
        중구
      </text>
    </svg>
  );
}

export default Map04;
