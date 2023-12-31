import { SVGProp } from '../dto.svg';

export default function Promote({ width = 20, height = 20, color = '#6B7280', fill = 'none' }: SVGProp) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 16L16 10" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M11.1339 9.36612C11.622 9.85427 11.622 10.6457 11.1339 11.1339C10.6457 11.622 9.85427 11.622 9.36612 11.1339C8.87796 10.6457 8.87796 9.85427 9.36612 9.36612C9.85427 8.87796 10.6457 8.87796 11.1339 9.36612Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.1339 14.9491C17.622 15.4373 17.622 16.2287 17.1339 16.7169C16.6457 17.205 15.8543 17.205 15.3661 16.7169C14.878 16.2287 14.878 15.4373 15.3661 14.9491C15.8543 14.461 16.6457 14.461 17.1339 14.9491Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.5 16C3.65917 16 2.5 14.8408 2.5 13V6C2.5 4.15917 3.9925 2.9165 5.83333 2.9165H14.1667C16.0075 2.9165 17.5 4.15917 17.5 6"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
}
