<template>
    <main class="flex flex-col justify-center h-screen h-[85vh] w-full">
      <p class="font-['Cabinet_Grotesk'] text-5xl md:text-6xl xl:text-7xl max-w-3xl xl:max-w-4xl text-neutral-400 leading-relaxed">Favour is a <br class="md:hidden"> <span class="font-medium text-7xl lg:text-8xl xl:text-9xl text-[#E9E6FF]"> designer</span> specialising in <span class="font-medium text-7xl lg:text-8xl xl:text-9xl text-[#E9E6FF]">UI, UX</span> and <span class="font-medium text-7xl lg:text-8xl xl:text-9xl text-[#E9E6FF]">Product Design.</span></p>
      <svg class="hidden sm:block" id="creative" width="492" height="108" viewBox="0 0 492 108" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.592 101.28C39.68 101.28 49.024 95.776 55.424 86.816L53.376 83.616C47.36 89.376 40.576 92.832 34.944 92.832C25.6 92.832 19.84 84.896 19.84 72.096C19.84 55.328 29.44 40.736 40.704 40.736C42.24 40.736 43.392 40.992 44.544 41.504L52.608 52.512H55.68L60.16 41.248C54.016 36.768 47.744 34.464 40.448 34.464C20.736 34.464 5.888 51.488 5.888 73.888C5.888 90.528 15.616 101.28 30.592 101.28Z" stroke="white" stroke-width="1" mask="url(#path-1-outside-1_1_6)"/>
        <path d="M84.674 99.616C89.282 66.208 101.954 45.856 112.578 45.216L119.234 52H122.434L125.634 38.688C122.946 35.872 119.618 34.464 115.906 34.464C106.434 34.464 98.114 43.552 89.922 63.904L88.77 63.264C91.842 44.704 92.354 41.504 92.354 39.456C92.354 36.384 90.562 34.464 87.49 34.464C82.114 34.464 75.202 39.072 64.962 49.184L66.114 52.256L79.042 45.344L79.682 45.856L71.874 101.28L84.674 99.616Z" stroke="white" stroke-width="1" mask="url(#path-1-outside-1_1_6)"/>
        <path d="M153.595 101.28C163.579 101.28 173.307 95.776 180.475 85.92L178.427 82.72C171.387 89.248 164.219 92.704 157.691 92.704C148.475 92.704 143.099 85.408 142.715 72.608C144.763 72.992 146.683 73.12 149.499 73.12C168.571 73.12 182.523 63.392 182.523 50.208C182.523 40.864 174.715 34.464 162.939 34.464C143.739 34.464 128.763 51.616 128.763 73.504C128.763 90.272 138.491 101.28 153.595 101.28ZM170.363 49.824C170.363 60.064 160.379 67.872 146.811 67.872C145.275 67.872 143.995 67.872 142.843 67.744C144.123 53.024 152.955 41.248 163.451 40.352C167.803 41.504 170.363 44.96 170.363 49.824Z" stroke="white" stroke-width="1" mask="url(#path-1-outside-1_1_6)"/>
        <path d="M210.65 101.28C221.274 101.28 230.234 92.064 238.17 71.968L239.322 72.608C236.122 91.424 235.738 94.368 235.738 96.288C235.738 98.976 237.402 101.28 240.858 101.28C245.85 101.28 252.506 97.184 263.13 86.688L261.85 83.488L248.922 90.4L248.41 89.888L255.834 35.872L253.53 34.08L248.154 36.896C242.522 35.232 238.298 34.464 234.33 34.464C211.93 34.464 193.37 54.048 193.37 78.496C193.37 92.576 200.154 101.28 210.65 101.28ZM215.642 92.32C210.266 92.32 207.066 86.944 207.066 77.984C207.066 58.528 218.97 42.272 232.922 39.968C235.994 40.608 239.066 41.76 242.394 43.552C237.658 69.024 224.73 92.32 215.642 92.32Z" stroke="white" stroke-width="1" mask="url(#path-1-outside-1_1_6)"/>
        <path d="M287.778 101.28C294.05 101.28 300.066 98.208 312.354 87.328L311.202 84L296.738 92.064C295.458 92.448 294.434 92.576 293.41 92.576C290.722 92.576 289.57 91.296 289.57 88.352C289.57 87.072 289.698 85.408 289.954 83.744L295.842 42.656H315.042L316.066 35.744H296.866L299.17 19.104L296.866 17.824L284.45 35.616L272.29 37.28L271.522 42.656H283.426L277.666 81.824C277.154 85.024 276.77 88.608 276.77 90.144C276.77 97.696 280.354 101.28 287.778 101.28Z" stroke="white" stroke-width="1" mask="url(#path-1-outside-1_1_6)"/>
        <path d="M345.014 23.2C350.774 23.2 355.254 18.848 355.254 13.216C355.254 8.736 351.798 5.664 347.574 5.664C342.198 5.664 337.462 9.888 337.462 15.648C337.462 19.872 340.534 23.2 345.014 23.2ZM333.494 101.28C338.87 101.28 345.91 97.056 356.79 86.688L355.51 83.488L342.582 90.4L342.07 89.888L348.854 47.392C349.622 42.656 349.878 40.608 349.878 39.456C349.878 36.768 348.342 34.464 345.142 34.464C339.766 34.464 332.726 38.816 321.846 49.184L323.126 52.256L336.054 45.344L336.566 45.856L329.782 88.352C329.014 93.088 328.886 95.136 328.886 96.416C328.886 99.104 330.294 101.28 333.494 101.28Z" stroke="white" stroke-width="1" mask="url(#path-1-outside-1_1_6)"/>
        <path d="M396.081 98.848C417.073 67.744 426.161 52 426.161 43.424C426.161 40.224 424.881 36.64 423.089 34.592L412.209 38.56L411.569 41.632L415.665 49.312C414.001 57.504 408.753 67.36 397.617 85.152C394.673 68.64 391.857 54.688 387.249 41.376C385.457 36.128 383.665 34.464 380.081 34.464C375.217 34.464 369.073 39.456 360.753 50.08L362.673 52.768L373.809 45.472H374.705C379.057 57.504 383.409 73.632 388.913 101.28L396.081 98.848Z" stroke="white" stroke-width="1" mask="url(#path-1-outside-1_1_6)"/>
        <path d="M457.97 101.28C467.954 101.28 477.682 95.776 484.85 85.92L482.802 82.72C475.762 89.248 468.594 92.704 462.066 92.704C452.85 92.704 447.474 85.408 447.09 72.608C449.138 72.992 451.058 73.12 453.874 73.12C472.946 73.12 486.898 63.392 486.898 50.208C486.898 40.864 479.09 34.464 467.314 34.464C448.114 34.464 433.138 51.616 433.138 73.504C433.138 90.272 442.866 101.28 457.97 101.28ZM474.738 49.824C474.738 60.064 464.754 67.872 451.186 67.872C449.65 67.872 448.37 67.872 447.218 67.744C448.498 53.024 457.33 41.248 467.826 40.352C472.178 41.504 474.738 44.96 474.738 49.824Z" stroke="white" stroke-width="1" mask="url(#path-1-outside-1_1_6)"/>
      </svg>
      <div class="absolute top-[85vh]">
        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_ascfjwtt.json" background="transparent" speed="1" style="width: 50px; height: 50px;" loop autoplay></lottie-player>
      </div>
      
    </main>
</template>
<style scoped>
#creative {
  position: absolute;
  right: 10px;
  top: 80vh;
  opacity: 0.1;
}
#creative path:nth-child(1) {
  stroke-dasharray: 278.8;
  stroke-dashoffset: 278.8;
  animation: line-animation 3s ease forwards 0.3s;
}
#creative path:nth-child(2) {
  stroke-dasharray: 291.4;
  stroke-dashoffset: 291.4;
  animation: line-animation 3s ease forwards 0.6s;
}
#creative path:nth-child(3) {
  stroke-dasharray: 353.6;
  stroke-dashoffset: 353.6;
  animation: line-animation 3s ease forwards 0.9s;
}
#creative path:nth-child(4) {
  stroke-dasharray: 434.8;
  stroke-dashoffset: 434.8;
  animation: line-animation 3s ease forwards 1.2s;
}
#creative path:nth-child(5) {
  stroke-dasharray: 287.2;
  stroke-dashoffset: 287.2;
  animation: line-animation 3s ease forwards 1.5s;
}
#creative path:nth-child(6) {
  stroke-dasharray: 266.9;
  stroke-dashoffset: 266.9;
  animation: line-animation 3s ease forwards 1.8s;
}
#creative path:nth-child(7) {
  stroke-dasharray: 301;
  stroke-dashoffset: 301;
  animation: line-animation 3s ease forwards 2.1s;
}
#creative path:nth-child(8) {
  stroke-dasharray: 353.6;
  stroke-dashoffset: 353.6;
  animation: line-animation 3s ease forwards 2.3s;
}

@keyframes line-animation {
  to {
    stroke-dashoffset: 0; 
  }
}
</style>