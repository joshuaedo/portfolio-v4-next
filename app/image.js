export function Arrow({ h, w, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 65 65"
      className={`${h} ${w}`}
    >
      <path
        d="M49.462 1V35.055H45.679V7.451L6.651 46.4 3.976 43.726 43 4.78H15.321V1z"
        fill={color}
        stroke={color}
      ></path>
    </svg>
  );
}

import amazonOne from "../public/images/home/amazon/1.jpg";
import amazonTwo from "../public/images/home/amazon/2.jpg";

import appleOne from "../public/images/home/apple/1.jpg";
import appleTwo from "../public/images/home/apple/2.jpg";

import googleOne from "../public/images/home/google/1.jpg";
import googleTwo from "../public/images/home/google/2.jpg";

import joshuaGPTOne from "../public/images/home/joshuaGPT/1.png";
import joshuaGPTTwo from "../public/images/home/joshuaGPT/2.jpg";
import joshuaGPTThree from "../public/images/home/joshuaGPT/3.jpg";

import netflixOne from "../public/images/home/netflix/1.jpg";
import netflixTwo from "../public/images/home/netflix/2.jpg";

import spotifyOne from "../public/images/home/spotify/1.jpg";
import spotifyTwo from "../public/images/home/spotify/2.jpg";

export const homeImages = [
  amazonOne,
  amazonTwo,
  appleOne,
  appleTwo,
  googleOne,
  googleTwo,
  joshuaGPTOne,
  joshuaGPTTwo,
  joshuaGPTThree,
  netflixOne,
  netflixTwo,
  spotifyOne,
  spotifyTwo,
];
