import { SVGProp } from '../dto.svg';

export default function Factory({ width = 20, height = 20, color = '#6B7280', fill = 'none' }: SVGProp) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.5736 15.265V9.07094C15.5736 8.90666 15.5083 8.74912 15.3922 8.63296C15.276 8.5168 15.1184 8.45154 14.9542 8.45154H12.4766"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.42578 15.2649V5.35451C4.42578 5.19023 4.49104 5.03269 4.6072 4.91653C4.72336 4.80037 4.88091 4.73511 5.04518 4.73511H11.8586C12.0229 4.73511 12.1804 4.80037 12.2966 4.91653C12.4128 5.03269 12.478 5.19023 12.478 5.35451V15.2649"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.74805 7.35278H10.1548"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M6.74805 10H10.1548" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M6.74758 15.2649H10.1543V12.5982H6.74758V15.2649Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.1947 15.2649H3.80664"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
