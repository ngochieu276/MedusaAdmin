import { SVGProp } from '../dto.svg';

export default function GiftCard({ width = 20, height = 20, color = '#6B7280', fill = 'none' }: SVGProp) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.8346 9.58325V16.2499H4.16797V9.58325"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.5 6.25H2.5V9.58333H17.5V6.25Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M10 16.25V6.25" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M10 6.25004H6.78571C6.31211 6.25004 5.85791 6.03055 5.52302 5.63985C5.18814 5.24915 5 4.71924 5 4.16671C5 3.61417 5.18814 3.08427 5.52302 2.69357C5.85791 2.30287 6.31211 2.08337 6.78571 2.08337C9.28571 2.08337 10 6.25004 10 6.25004Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 6.25004H13.2143C13.6879 6.25004 14.1421 6.03055 14.477 5.63985C14.8119 5.24915 15 4.71924 15 4.16671C15 3.61417 14.8119 3.08427 14.477 2.69357C14.1421 2.30287 13.6879 2.08337 13.2143 2.08337C10.7143 2.08337 10 6.25004 10 6.25004Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
}
