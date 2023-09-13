import { SVGProp } from '../dto.svg';

export default function Inventory({ width = 20, height = 20, color = '#6B7280', fill = 'none' }: SVGProp) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.0138 16.5423V8.79977C17.0138 8.59442 16.9323 8.39749 16.7871 8.25229C16.6419 8.10709 16.4449 8.02551 16.2396 8.02551H13.1426"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.07812 16.5422V4.15414C3.07812 3.94879 3.1597 3.75186 3.3049 3.60666C3.4501 3.46146 3.64703 3.37988 3.85238 3.37988H12.3692C12.5745 3.37988 12.7714 3.46146 12.9166 3.60666C13.0618 3.75186 13.1434 3.94879 13.1434 4.15414V16.5422"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.98047 6.6521H10.2389"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.98047 9.96106H10.2389"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.97989 16.5422H10.2383V13.2089H5.97989V16.5422Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.7878 16.5422H2.30273"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
}
