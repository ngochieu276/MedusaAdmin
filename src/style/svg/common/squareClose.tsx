import { SVGProp } from '../dto.svg';

export default function SquareClose({ width = 20, height = 20, color = '#6B7280', fill = 'none' }: SVGProp) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 14L14 6M6 6L14 14"
        stroke="#030712"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
