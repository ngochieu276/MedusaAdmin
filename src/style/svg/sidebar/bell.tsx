import { SVGProp } from '../dto.svg';

export default function Bell({ width = 20, height = 20, color = '#6B7280', fill = 'none' }: SVGProp) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 6.66699C15 5.34091 14.4732 4.06914 13.5355 3.13146C12.5979 2.19378 11.3261 1.66699 10 1.66699C8.67392 1.66699 7.40215 2.19378 6.46447 3.13146C5.52678 4.06914 5 5.34091 5 6.66699C5 12.5003 2.5 14.167 2.5 14.167H17.5C17.5 14.167 15 12.5003 15 6.66699Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.4419 17.5C11.2954 17.7526 11.0851 17.9622 10.8321 18.1079C10.5791 18.2537 10.2922 18.3304 10.0003 18.3304C9.70828 18.3304 9.42142 18.2537 9.1684 18.1079C8.91539 17.9622 8.7051 17.7526 8.55859 17.5"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
