const ArrowLeft = (prop) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_4975)">
        <path
          d="M13.3708 5.56491H3.37079L6.66379 2.27191L5.24979 0.85791L0.956789 5.15091C0.581846 5.52597 0.371216 6.03458 0.371216 6.56491C0.371216 7.09524 0.581846 7.60385 0.956789 7.97891L5.24979 12.2719L6.66379 10.8579L3.37079 7.56491H13.3708V5.56491Z"
          fill={prop.color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_4975">
          <rect
            width="14"
            height="13"
            fill="white"
            transform="translate(0 0.258301)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowLeft;
