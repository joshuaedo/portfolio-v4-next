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
