import { SVGProp } from '../dto.svg';

export default function ArrowRight({ width = 20, height = 20, color = '#6B7280', fill = 'none' }: SVGProp) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path d="M3.125 10H16.25" stroke={color} stroke-width="1.5" stroke-linecap="round" />
      <path
        d="M11.875 5L16.875 10L11.875 15"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
