console.clear();
console.log("Height = " + window.innerHeight);
console.log("Width = " + window.innerWidth);

var Width = window.innerWidth;
var Height = window.innerHeight;

const logo = document.getElementById("logo-path");
const logoName = document.getElementById("logo-name-path");
const logosvg = document.getElementById("logo-svg");
const logoNameSvg = document.getElementById("logo-name-svg");
const logosvgDiv = document.getElementById("logo-div");
const logoContainerSvgDiv = document.getElementById("logo-container");
var introTag = document.getElementById("intro");
var minHeight = introTag.clientHeight;

function introTagHeight(){
    introTag.style.maxHeight = minHeight + 1 + "px";
    introTag.style.minHeight = minHeight + 1 + "px";
}
introTagHeight();

function handleWidthChange(){
if(Width <= 1023){
    logosvgDiv.style.width = "180.5px";
    logo.setAttribute("d","M 34.84 2.36 L 32.36 0.04 L 81.36 0.04 L 77.6 8.4 L 56.76 8.4 L 58.32 4.96 L 54.56 4.96 L 52.04 10.64 L 76.64 10.64 L 71.88 21.32 L 62.24 26.32 L 24.16 26.32 L 27.92 17.84 L 48.8 17.84 L 47.24 21.36 L 51 21.36 L 53.64 15.48 L 29 15.48 Q 31.8 9.16 34.84 2.36 Z M 135.28 2.36 L 132.8 0.04 L 175.12 0.04 L 180.36 4.84 L 170.8 26.32 L 149.24 26.32 L 158.76 4.96 L 155 4.96 L 145.48 26.32 L 124.6 26.32 L 135.28 2.36 Z M 85 2.4 L 82.52 0.08 L 124.12 0.08 L 129.4 4.88 L 119.92 26.32 L 98.96 26.32 L 101.8 19.92 L 98.04 19.92 L 95.2 26.32 L 74.44 26.32 L 85 2.4 Z M 19.44 26.32 L 0 26.32 L 10.68 2.32 L 8.2 0 L 31.16 0 L 19.44 26.32 Z M 108.44 5 L 104.72 5 L 100.72 14.04 L 104.44 14.04 L 108.44 5 Z");
    logoName.setAttribute("d","M 48.14 2.37 L 49.34 2.37 L 49.35 2.12 A 2.777 2.777 0 0 0 49.281 1.485 A 1.837 1.837 0 0 0 48.77 0.56 C 48.405 0.208 47.905 0.022 47.268 0.002 A 3.72 3.72 0 0 0 47.15 0 A 3.946 3.946 0 0 0 46.445 0.059 C 46.187 0.106 45.956 0.181 45.752 0.284 A 1.924 1.924 0 0 0 45.325 0.575 A 2.439 2.439 0 0 0 44.851 1.179 C 44.739 1.374 44.64 1.596 44.555 1.844 A 5.68 5.68 0 0 0 44.4 2.39 L 43.93 4.4 A 5.119 5.119 0 0 0 43.857 4.794 C 43.838 4.922 43.827 5.044 43.822 5.158 A 2.795 2.795 0 0 0 43.82 5.27 A 3.13 3.13 0 0 0 43.877 5.884 C 43.954 6.269 44.11 6.587 44.345 6.835 A 1.686 1.686 0 0 0 45.13 7.297 C 45.35 7.359 45.597 7.39 45.87 7.39 A 1.82 1.82 0 0 0 46.573 7.258 A 1.698 1.698 0 0 0 47.21 6.79 L 47.11 7.24 L 48.28 7.24 L 49.17 3.37 L 46.61 3.37 L 46.35 4.51 L 47.68 4.51 L 47.64 4.72 C 47.457 5.658 46.983 6.154 46.218 6.206 A 2.033 2.033 0 0 1 46.08 6.21 A 2.08 2.08 0 0 1 45.796 6.192 C 45.579 6.162 45.412 6.094 45.295 5.989 A 0.591 0.591 0 0 1 45.26 5.955 A 0.821 0.821 0 0 1 45.076 5.632 C 45.051 5.55 45.034 5.459 45.025 5.36 A 1.727 1.727 0 0 1 45.02 5.22 A 1.433 1.433 0 0 1 45.027 5.088 C 45.035 4.996 45.052 4.887 45.077 4.763 A 5.404 5.404 0 0 1 45.09 4.7 L 45.56 2.69 A 4.944 4.944 0 0 1 45.677 2.266 C 45.768 1.989 45.874 1.77 45.995 1.609 A 1.168 1.168 0 0 1 46.065 1.525 A 0.968 0.968 0 0 1 46.469 1.266 C 46.633 1.209 46.827 1.18 47.05 1.18 A 1.781 1.781 0 0 1 47.465 1.224 C 47.922 1.334 48.15 1.649 48.15 2.17 C 48.15 2.242 48.148 2.299 48.143 2.344 A 0.67 0.67 0 0 1 48.14 2.37 Z M 31.13 7.24 L 32.35 7.24 L 33.39 2.7 L 34.62 7.24 L 35.7 7.24 L 37.33 0.15 L 36.11 0.15 L 35.06 4.69 L 33.85 0.15 L 32.76 0.15 L 31.13 7.24 Z M 18.82 0.15 L 17.6 0.15 L 16.95 2.98 L 14.65 2.98 L 15.3 0.15 L 14.08 0.15 L 12.45 7.24 L 13.67 7.24 L 14.38 4.12 L 16.68 4.12 L 15.97 7.24 L 17.19 7.24 L 18.82 0.15 Z M 10.11 3.19 L 9.44 2.95 C 8.98 2.783 8.75 2.507 8.75 2.12 A 1.137 1.137 0 0 1 8.784 1.835 A 0.748 0.748 0 0 1 9.07 1.405 A 1.193 1.193 0 0 1 9.574 1.194 A 1.626 1.626 0 0 1 9.86 1.17 A 2.037 2.037 0 0 1 10.117 1.185 C 10.204 1.197 10.285 1.214 10.36 1.237 A 1.076 1.076 0 0 1 10.45 1.27 A 1.007 1.007 0 0 1 10.61 1.353 C 10.691 1.405 10.754 1.466 10.8 1.535 A 1.405 1.405 0 0 1 10.878 1.666 C 10.902 1.712 10.922 1.758 10.937 1.802 A 0.771 0.771 0 0 1 10.95 1.845 A 1.135 1.135 0 0 1 10.99 2.13 A 1.268 1.268 0 0 1 10.99 2.15 A 1.663 1.663 0 0 1 10.987 2.249 C 10.984 2.302 10.978 2.348 10.97 2.39 L 12.21 2.39 L 12.22 2.14 A 3.031 3.031 0 0 0 12.211 1.91 A 3.083 3.083 0 0 0 12.185 1.68 A 1.624 1.624 0 0 0 12.145 1.495 C 12.128 1.433 12.107 1.368 12.081 1.298 A 3.644 3.644 0 0 0 12.015 1.13 A 1.844 1.844 0 0 0 11.736 0.666 A 1.713 1.713 0 0 0 11.655 0.575 C 11.538 0.453 11.38 0.345 11.178 0.249 A 2.814 2.814 0 0 0 10.995 0.17 C 10.709 0.058 10.377 0.002 9.997 0 A 3.944 3.944 0 0 0 9.98 0 A 3.358 3.358 0 0 0 9.224 0.08 C 8.843 0.168 8.517 0.329 8.246 0.561 A 2.12 2.12 0 0 0 8.175 0.625 A 2.072 2.072 0 0 0 7.544 1.852 A 2.957 2.957 0 0 0 7.51 2.31 A 1.905 1.905 0 0 0 7.614 2.949 A 1.718 1.718 0 0 0 7.84 3.38 A 1.86 1.86 0 0 0 8.548 3.969 A 2.346 2.346 0 0 0 8.76 4.06 L 9.42 4.31 A 2.031 2.031 0 0 1 9.778 4.484 C 9.903 4.563 10.004 4.652 10.081 4.75 A 0.838 0.838 0 0 1 10.26 5.28 A 1.042 1.042 0 0 1 10.223 5.565 A 0.714 0.714 0 0 1 9.885 6 A 1.593 1.593 0 0 1 9.289 6.202 A 2.05 2.05 0 0 1 9.01 6.22 C 8.787 6.22 8.592 6.188 8.424 6.123 A 1.214 1.214 0 0 1 8.415 6.12 A 1.528 1.528 0 0 1 8.257 6.048 C 8.206 6.021 8.161 5.993 8.121 5.963 A 0.669 0.669 0 0 1 8.035 5.885 A 1.09 1.09 0 0 1 7.863 5.635 A 1.277 1.277 0 0 1 7.83 5.565 A 1.954 1.954 0 0 1 7.786 5.456 C 7.76 5.384 7.744 5.322 7.736 5.268 A 0.533 0.533 0 0 1 7.735 5.26 C 7.725 5.18 7.72 5.1 7.72 5.02 L 7.72 4.93 L 6.48 4.93 L 6.47 5.14 C 6.47 5.293 6.482 5.45 6.505 5.61 A 1.694 1.694 0 0 0 6.545 5.8 C 6.576 5.917 6.621 6.047 6.68 6.19 A 1.961 1.961 0 0 0 6.957 6.666 A 1.806 1.806 0 0 0 7.055 6.78 A 1.373 1.373 0 0 0 7.282 6.972 C 7.362 7.026 7.453 7.078 7.553 7.126 A 2.9 2.9 0 0 0 7.745 7.21 A 2.47 2.47 0 0 0 8.27 7.35 C 8.439 7.377 8.619 7.39 8.81 7.39 A 3.84 3.84 0 0 0 9.643 7.305 C 10.03 7.219 10.368 7.068 10.656 6.852 A 2.392 2.392 0 0 0 10.76 6.77 A 2.017 2.017 0 0 0 11.457 5.532 A 2.997 2.997 0 0 0 11.5 5.01 C 11.5 4.577 11.38 4.203 11.14 3.89 A 1.923 1.923 0 0 0 10.552 3.386 A 2.622 2.622 0 0 0 10.11 3.19 Z M 54.8 0.15 L 53.73 4.8 A 4.416 4.416 0 0 1 53.619 5.193 C 53.516 5.499 53.391 5.729 53.245 5.885 A 0.941 0.941 0 0 1 52.86 6.128 C 52.759 6.163 52.645 6.187 52.521 6.199 A 2.187 2.187 0 0 1 52.3 6.21 C 52.003 6.21 51.778 6.164 51.626 6.073 A 0.564 0.564 0 0 1 51.565 6.03 C 51.436 5.927 51.363 5.77 51.345 5.559 A 1.266 1.266 0 0 1 51.34 5.45 A 2.133 2.133 0 0 1 51.356 5.198 C 51.371 5.075 51.395 4.943 51.43 4.8 L 52.5 0.15 L 51.28 0.15 L 50.31 4.37 A 5.278 5.278 0 0 0 50.193 5.05 A 4.316 4.316 0 0 0 50.17 5.49 A 2.841 2.841 0 0 0 50.219 6.034 C 50.291 6.403 50.443 6.697 50.675 6.915 A 1.637 1.637 0 0 0 51.334 7.286 C 51.564 7.355 51.826 7.39 52.12 7.39 A 3.738 3.738 0 0 0 52.86 7.321 C 53.309 7.231 53.681 7.05 53.975 6.78 C 54.323 6.461 54.593 6.005 54.787 5.412 A 5.821 5.821 0 0 0 54.93 4.89 L 56.02 0.15 L 54.8 0.15 Z M 0.25 6.13 L 0 7.24 L 4.84 7.24 L 5.09 6.13 L 3.28 6.13 L 4.41 1.26 L 6.22 1.26 L 6.47 0.15 L 1.63 0.15 L 1.38 1.26 L 3.19 1.26 L 2.06 6.13 L 0.25 6.13 Z M 62.82 1.31 L 65.17 1.31 L 63.81 7.24 L 65.03 7.24 L 66.39 1.31 L 68.74 1.31 L 69.01 0.15 L 63.09 0.15 L 62.82 1.31 Z M 23.26 0.15 L 22.04 0.15 L 18.2 7.24 L 19.51 7.24 L 20.35 5.65 L 22.52 5.65 L 22.63 7.24 L 23.84 7.24 L 23.26 0.15 Z M 29.46 0.15 L 28.24 0.15 L 24.4 7.24 L 25.71 7.24 L 26.55 5.65 L 28.72 5.65 L 28.83 7.24 L 30.04 7.24 L 29.46 0.15 Z M 72.86 0.15 L 71.64 0.15 L 67.8 7.24 L 69.11 7.24 L 69.95 5.65 L 72.12 5.65 L 72.23 7.24 L 73.44 7.24 L 72.86 0.15 Z M 60.33 0.15 L 57.6 0.15 L 55.97 7.24 L 57.19 7.24 L 57.86 4.3 L 59.49 4.3 C 60.218 4.3 60.824 4.146 61.308 3.838 A 2.497 2.497 0 0 0 61.535 3.675 C 62.052 3.258 62.31 2.66 62.31 1.88 A 1.895 1.895 0 0 0 62.224 1.297 A 1.533 1.533 0 0 0 61.79 0.625 A 1.71 1.71 0 0 0 61.101 0.249 C 60.931 0.2 60.743 0.169 60.539 0.156 A 3.447 3.447 0 0 0 60.33 0.15 Z M 87.38 0.15 L 86 0.15 L 80.24 7.24 L 81.62 7.24 L 87.38 0.15 Z M 93.58 0.15 L 92.2 0.15 L 86.44 7.24 L 87.82 7.24 L 93.58 0.15 Z M 99.78 0.15 L 98.4 0.15 L 92.64 7.24 L 94.02 7.24 L 99.78 0.15 Z M 105.98 0.15 L 104.6 0.15 L 98.84 7.24 L 100.22 7.24 L 105.98 0.15 Z M 112.18 0.15 L 110.8 0.15 L 105.04 7.24 L 106.42 7.24 L 112.18 0.15 Z M 118.38 0.15 L 117 0.15 L 111.24 7.24 L 112.62 7.24 L 118.38 0.15 Z M 124.58 0.15 L 123.2 0.15 L 117.44 7.24 L 118.82 7.24 L 124.58 0.15 Z M 130.78 0.15 L 129.4 0.15 L 123.64 7.24 L 125.02 7.24 L 130.78 0.15 Z M 136.98 0.15 L 135.6 0.15 L 129.84 7.24 L 131.22 7.24 L 136.98 0.15 Z M 143.18 0.15 L 141.8 0.15 L 136.04 7.24 L 137.42 7.24 L 143.18 0.15 Z M 149.38 0.15 L 148 0.15 L 142.24 7.24 L 143.62 7.24 L 149.38 0.15 Z M 155.58 0.15 L 154.2 0.15 L 148.44 7.24 L 149.82 7.24 L 155.58 0.15 Z M 161.78 0.15 L 160.4 0.15 L 154.64 7.24 L 156.02 7.24 L 161.78 0.15 Z M 59.71 3.14 L 58.13 3.14 L 58.55 1.31 L 60.08 1.31 A 1.98 1.98 0 0 1 60.428 1.338 C 60.833 1.411 61.04 1.626 61.05 1.984 A 0.983 0.983 0 0 1 61.05 2.01 C 61.05 2.711 60.663 3.086 59.89 3.135 A 2.861 2.861 0 0 1 59.71 3.14 Z M 22.28 1.99 L 22.45 4.51 L 20.95 4.51 L 22.28 1.99 Z M 28.48 1.99 L 28.65 4.51 L 27.15 4.51 L 28.48 1.99 Z M 71.88 1.99 L 72.05 4.51 L 70.55 4.51 L 71.88 1.99 Z");
    logosvg.setAttribute("height","29.324");
    logoNameSvg.setAttribute("height","11.777");
    logosvg.setAttribute("width","180.5");
    logoContainerSvgDiv.style.width = "180.5px";
}

if(Width > 1024){
    logo.setAttribute("d","M 67.938 4.602 L 63.102 0.078 L 158.652 0.078 L 151.32 16.38 L 110.682 16.38 L 113.724 9.672 L 106.392 9.672 L 101.478 20.748 L 149.448 20.748 L 140.166 41.574 L 121.368 51.324 L 47.112 51.324 L 54.444 34.788 L 95.16 34.788 L 92.118 41.652 L 99.45 41.652 L 104.598 30.186 L 56.55 30.186 A 8122.453 8122.453 0 0 1 65.003 11.174 A 9077.367 9077.367 0 0 1 67.938 4.602 Z M 263.796 4.602 L 258.96 0.078 L 341.484 0.078 L 351.702 9.438 L 333.06 51.324 L 291.018 51.324 L 309.582 9.672 L 302.25 9.672 L 283.686 51.324 L 242.97 51.324 L 263.796 4.602 Z M 165.75 4.68 L 160.914 0.156 L 242.034 0.156 L 252.33 9.516 L 233.844 51.324 L 192.972 51.324 L 198.51 38.844 L 191.178 38.844 L 185.64 51.324 L 145.158 51.324 L 165.75 4.68 Z M 37.908 51.324 L 0 51.324 L 20.826 4.524 L 15.99 0 L 60.762 0 L 37.908 51.324 Z M 211.458 9.75 L 204.204 9.75 L 196.404 27.378 L 203.658 27.378 L 211.458 9.75 Z");
    logoName.setAttribute("d","M 57.088 11.552 L 59.696 0.208 L 58.256 0.208 L 56.288 8.736 L 53.824 0.208 L 52.464 0.208 L 49.856 11.552 L 51.296 11.552 L 53.248 3.056 L 55.728 11.552 L 57.088 11.552 Z M 71.184 4.128 L 70.496 7.04 A 9.836 9.836 0 0 0 70.38 7.646 C 70.35 7.838 70.329 8.017 70.317 8.185 A 4.514 4.514 0 0 0 70.304 8.512 A 4.354 4.354 0 0 0 70.412 9.513 A 2.937 2.937 0 0 0 71.144 10.896 A 2.686 2.686 0 0 0 72.355 11.614 C 72.642 11.698 72.958 11.75 73.303 11.768 A 5.548 5.548 0 0 0 73.6 11.776 A 3.811 3.811 0 0 0 74.856 11.576 A 3.316 3.316 0 0 0 76 10.896 L 75.856 11.552 L 77.184 11.552 L 78.592 5.44 L 74.576 5.44 L 74.256 6.816 L 76.848 6.816 L 76.544 8.112 A 4.645 4.645 0 0 1 76.318 8.831 C 76.128 9.289 75.875 9.642 75.56 9.888 C 75.096 10.251 74.469 10.432 73.68 10.432 C 72.541 10.432 71.893 9.962 71.734 9.021 A 2.972 2.972 0 0 1 71.696 8.528 A 3.615 3.615 0 0 1 71.719 8.142 C 71.733 8.008 71.754 7.864 71.783 7.71 A 9.267 9.267 0 0 1 71.888 7.216 L 72.608 4.144 A 7.313 7.313 0 0 1 72.847 3.327 C 73.058 2.741 73.325 2.296 73.648 1.992 C 74.107 1.56 74.757 1.344 75.6 1.344 C 76.739 1.344 77.387 1.814 77.546 2.755 A 2.972 2.972 0 0 1 77.584 3.248 A 6.171 6.171 0 0 1 77.582 3.419 C 77.58 3.475 77.578 3.528 77.575 3.578 A 3.246 3.246 0 0 1 77.568 3.664 L 78.96 3.664 L 78.976 3.2 A 4.249 4.249 0 0 0 78.87 2.222 A 2.838 2.838 0 0 0 78.136 0.856 A 2.681 2.681 0 0 0 76.985 0.176 C 76.699 0.088 76.383 0.033 76.038 0.011 A 5.624 5.624 0 0 0 75.68 0 A 5.813 5.813 0 0 0 74.511 0.11 C 73.766 0.263 73.161 0.576 72.696 1.048 C 72.008 1.747 71.504 2.773 71.184 4.128 Z M 27.472 11.552 L 30.08 0.208 L 28.64 0.208 L 27.552 4.944 L 22.912 4.944 L 24 0.208 L 22.56 0.208 L 19.952 11.552 L 21.392 11.552 L 22.592 6.352 L 27.232 6.352 L 26.032 11.552 L 27.472 11.552 Z M 16.096 5.312 L 14.96 4.88 A 3.349 3.349 0 0 1 14.417 4.622 C 14.233 4.511 14.082 4.389 13.964 4.254 A 1.22 1.22 0 0 1 13.648 3.424 A 2.641 2.641 0 0 1 13.716 2.806 A 1.696 1.696 0 0 1 14.28 1.872 C 14.685 1.534 15.216 1.358 15.873 1.345 A 4.006 4.006 0 0 1 15.952 1.344 C 16.295 1.344 16.594 1.384 16.849 1.463 A 1.914 1.914 0 0 1 17.048 1.536 C 17.325 1.657 17.53 1.818 17.664 2.019 A 1.073 1.073 0 0 1 17.688 2.056 C 17.821 2.275 17.912 2.477 17.96 2.664 C 18.008 2.851 18.032 3.045 18.032 3.248 A 6.171 6.171 0 0 1 18.03 3.419 C 18.028 3.475 18.026 3.528 18.023 3.578 A 3.246 3.246 0 0 1 18.016 3.664 L 19.44 3.664 L 19.456 3.248 C 19.456 3.013 19.437 2.776 19.4 2.536 C 19.372 2.355 19.316 2.15 19.233 1.923 A 5.534 5.534 0 0 0 19.144 1.696 A 2.738 2.738 0 0 0 18.73 1.002 A 2.54 2.54 0 0 0 18.608 0.864 C 18.434 0.682 18.197 0.519 17.897 0.375 A 4.209 4.209 0 0 0 17.624 0.256 A 3.562 3.562 0 0 0 16.832 0.049 A 4.831 4.831 0 0 0 16.128 0 A 5.285 5.285 0 0 0 14.905 0.134 A 3.649 3.649 0 0 0 13.296 0.952 A 3.139 3.139 0 0 0 12.245 3.065 A 4.396 4.396 0 0 0 12.224 3.504 A 2.546 2.546 0 0 0 13.333 5.655 C 13.648 5.887 14.031 6.087 14.48 6.256 L 15.616 6.688 A 3.47 3.47 0 0 1 16.205 6.959 C 16.412 7.081 16.58 7.218 16.71 7.37 A 1.346 1.346 0 0 1 17.04 8.272 A 2.291 2.291 0 0 1 16.847 9.248 C 16.544 9.898 15.886 10.276 14.871 10.384 A 6.142 6.142 0 0 1 14.224 10.416 A 3.754 3.754 0 0 1 13.722 10.384 C 13.485 10.352 13.274 10.296 13.088 10.216 C 12.787 10.087 12.565 9.912 12.42 9.691 A 1.153 1.153 0 0 1 12.408 9.672 C 12.264 9.443 12.165 9.224 12.112 9.016 C 12.059 8.808 12.032 8.592 12.032 8.368 A 5.542 5.542 0 0 1 12.036 8.139 C 12.04 8.056 12.045 7.978 12.053 7.905 A 3.032 3.032 0 0 1 12.064 7.808 L 10.64 7.808 L 10.608 8.384 C 10.608 8.651 10.629 8.912 10.672 9.168 A 2.845 2.845 0 0 0 10.749 9.499 C 10.799 9.669 10.867 9.852 10.952 10.048 A 2.622 2.622 0 0 0 11.425 10.783 A 2.473 2.473 0 0 0 11.536 10.896 A 2.229 2.229 0 0 0 11.886 11.166 C 12.009 11.244 12.146 11.317 12.297 11.385 A 4.689 4.689 0 0 0 12.584 11.504 A 3.825 3.825 0 0 0 13.347 11.7 C 13.605 11.74 13.881 11.76 14.176 11.76 C 15.477 11.76 16.525 11.448 17.32 10.824 A 3.041 3.041 0 0 0 18.463 8.811 A 4.529 4.529 0 0 0 18.512 8.128 A 2.911 2.911 0 0 0 18.412 7.345 A 2.229 2.229 0 0 0 17.904 6.424 C 17.499 5.981 16.896 5.611 16.096 5.312 Z M 87.872 7.728 L 89.6 0.208 L 88.176 0.208 L 86.464 7.632 C 86.322 8.265 86.121 8.789 85.863 9.204 A 2.818 2.818 0 0 1 85.432 9.744 A 2.395 2.395 0 0 1 84.197 10.372 A 3.442 3.442 0 0 1 83.536 10.432 A 3.402 3.402 0 0 1 83.022 10.396 C 82.646 10.338 82.35 10.212 82.136 10.016 C 81.913 9.813 81.772 9.51 81.713 9.106 A 3.31 3.31 0 0 1 81.68 8.624 A 3.411 3.411 0 0 1 81.697 8.304 C 81.717 8.089 81.756 7.835 81.814 7.543 A 14.049 14.049 0 0 1 81.872 7.264 L 83.504 0.208 L 82.08 0.208 L 80.512 7.04 C 80.398 7.538 80.327 7.983 80.3 8.375 A 5.062 5.062 0 0 0 80.288 8.72 C 80.288 9.437 80.426 10.03 80.701 10.499 A 2.322 2.322 0 0 0 81.096 11 C 81.582 11.467 82.253 11.723 83.109 11.769 A 5.34 5.34 0 0 0 83.392 11.776 A 4.575 4.575 0 0 0 85.391 11.361 C 86.617 10.773 87.444 9.562 87.872 7.728 Z M 2.608 0.208 L 2.32 1.456 L 5.472 1.456 L 3.424 10.304 L 0.288 10.304 L 0 11.552 L 7.744 11.552 L 8.032 10.304 L 4.864 10.304 L 6.912 1.456 L 10.064 1.456 L 10.352 0.208 L 2.608 0.208 Z M 110.08 1.584 L 110.4 0.208 L 100.96 0.208 L 100.64 1.584 L 104.64 1.584 L 102.352 11.552 L 103.792 11.552 L 106.08 1.584 L 110.08 1.584 Z M 29.2 11.552 L 30.752 11.552 L 32.32 8.624 L 36.416 8.624 L 36.64 11.552 L 38.064 11.552 L 37.056 0.208 L 35.424 0.208 L 29.2 11.552 Z M 39.12 11.552 L 40.672 11.552 L 42.24 8.624 L 46.336 8.624 L 46.56 11.552 L 47.984 11.552 L 46.976 0.208 L 45.344 0.208 L 39.12 11.552 Z M 108.56 11.552 L 110.112 11.552 L 111.68 8.624 L 115.776 8.624 L 116 11.552 L 117.424 11.552 L 116.416 0.208 L 114.784 0.208 L 108.56 11.552 Z M 92.08 0.208 L 89.472 11.552 L 90.896 11.552 L 92.064 6.448 L 95.248 6.448 A 7.411 7.411 0 0 0 96.477 6.353 C 97.252 6.222 97.896 5.958 98.408 5.56 A 2.839 2.839 0 0 0 99.429 3.944 C 99.511 3.613 99.552 3.247 99.552 2.848 A 2.771 2.771 0 0 0 99.413 1.952 A 2.309 2.309 0 0 0 98.712 0.928 C 98.247 0.529 97.618 0.296 96.825 0.229 A 5.957 5.957 0 0 0 96.32 0.208 L 92.08 0.208 Z M 139.856 0.208 L 138.208 0.208 L 128.416 11.552 L 130.064 11.552 L 139.856 0.208 Z M 149.776 0.208 L 148.128 0.208 L 138.336 11.552 L 139.984 11.552 L 149.776 0.208 Z M 159.696 0.208 L 158.048 0.208 L 148.256 11.552 L 149.904 11.552 L 159.696 0.208 Z M 169.616 0.208 L 167.968 0.208 L 158.176 11.552 L 159.824 11.552 L 169.616 0.208 Z M 179.536 0.208 L 177.888 0.208 L 168.096 11.552 L 169.744 11.552 L 179.536 0.208 Z M 189.456 0.208 L 187.808 0.208 L 178.016 11.552 L 179.664 11.552 L 189.456 0.208 Z M 199.376 0.208 L 197.728 0.208 L 187.936 11.552 L 189.584 11.552 L 199.376 0.208 Z M 209.296 0.208 L 207.648 0.208 L 197.856 11.552 L 199.504 11.552 L 209.296 0.208 Z M 219.216 0.208 L 217.568 0.208 L 207.776 11.552 L 209.424 11.552 L 219.216 0.208 Z M 229.136 0.208 L 227.488 0.208 L 217.696 11.552 L 219.344 11.552 L 229.136 0.208 Z M 239.056 0.208 L 237.408 0.208 L 227.616 11.552 L 229.264 11.552 L 239.056 0.208 Z M 248.976 0.208 L 247.328 0.208 L 237.536 11.552 L 239.184 11.552 L 248.976 0.208 Z M 258.896 0.208 L 257.248 0.208 L 247.456 11.552 L 249.104 11.552 L 258.896 0.208 Z M 95.408 5.072 L 92.384 5.072 L 93.184 1.584 L 96.176 1.584 C 97.317 1.584 97.932 1.997 98.021 2.822 A 2.036 2.036 0 0 1 98.032 3.04 A 3.019 3.019 0 0 1 97.983 3.602 C 97.944 3.812 97.879 3.996 97.79 4.156 A 1.32 1.32 0 0 1 97.344 4.632 A 2.439 2.439 0 0 1 96.707 4.913 C 96.501 4.973 96.274 5.016 96.026 5.042 A 5.918 5.918 0 0 1 95.408 5.072 Z M 35.904 1.984 L 36.304 7.28 L 33.04 7.28 L 35.904 1.984 Z M 45.824 1.984 L 46.224 7.28 L 42.96 7.28 L 45.824 1.984 Z M 115.264 1.984 L 115.664 7.28 L 112.4 7.28 L 115.264 1.984 Z");
    logosvg.setAttribute("height","51.324");
    logosvg.setAttribute("width","351.702");
    logoNameSvg.setAttribute("height","11.777");
    logoNameSvg.setAttribute("width","258.896");
}
}

handleWidthChange();


window.addEventListener('resize', handleWidthChange());
