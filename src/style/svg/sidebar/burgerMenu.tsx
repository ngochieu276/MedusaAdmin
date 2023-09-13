import { SVGProp } from '../dto.svg';

export default function BurgerMenu({ width = 20, height = 20, color = '#6B7280', fill = 'none' }: SVGProp) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 10H17.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2.5 5H17.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2.5 15H17.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}
