const ArrowDown = (prop) => {
  return (
    <svg
      width="15"
      height="8"
      viewBox="0 0 15 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.54837 7.95157C7.28576 7.95203 7.02565 7.90058 6.78299 7.80019C6.54032 7.69979 6.3199 7.55243 6.13437 7.36657L0.84137 2.07257L2.25537 0.658569L7.54837 5.95157L12.8414 0.658569L14.2554 2.07257L8.96237 7.36557C8.77693 7.55161 8.55653 7.69916 8.31387 7.79972C8.0712 7.90029 7.81105 7.9519 7.54837 7.95157Z"
        fill={prop.color}
      />
    </svg>
  );
};

export default ArrowDown;