export function Logo({ wh }: { wh?: number }): JSX.Element {
  return (
    <svg
      fill="none"
      height={wh || 52}
      viewBox="0 0 52 52"
      width={wh || 52}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 10.4111V22.0548L41 41.5883V29.9452L10 10.4111Z"
        fill="currentColor"
      />
      <path
        d="M41 41.5883L24.3961 52H10.0278V41.5883L41 41.5883Z"
        fill="currentColor"
      />
      <path
        d="M10 10.4111L26.5484 0H40.9722V10.4111L10 10.4111Z"
        fill="currentColor"
      />
    </svg>
  );
}
