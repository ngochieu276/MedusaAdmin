import { SVGProp } from '../dto.svg';

export default function Question({ width = 20, height = 20, color = '#6B7280', fill = 'none' }: SVGProp) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.57031 7.53002C7.76623 6.97307 8.15294 6.50344 8.66194 6.20429C9.17094 5.90515 9.76939 5.7958 10.3513 5.89561C10.9332 5.99542 11.461 6.29795 11.8412 6.74962C12.2214 7.20129 12.4295 7.77295 12.4286 8.36335C12.4286 10.03 9.92865 10.8633 9.92865 10.8633"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99609 13.6927H10.0048"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
