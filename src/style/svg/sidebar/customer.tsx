import { SVGProp } from '../dto.svg';

export default function Customer({ width = 20, height = 20, color = '#6B7280', fill = 'none' }: SVGProp) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.5 16.1319C2.5 13.7414 3.84325 11.8032 5.5 11.8032H8.5C10.1567 11.8032 11.5 13.7414 11.5 16.1319"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.85616 4.63701C9.88129 5.66214 9.88129 7.32419 8.85616 8.34932C7.83103 9.37445 6.16898 9.37445 5.14385 8.34932C4.11872 7.32419 4.11872 5.66214 5.14385 4.63701C6.16898 3.61188 7.83103 3.61188 8.85616 4.63701"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 11.1074H15.25C16.4927 11.1074 17.5 12.4779 17.5 14.1689"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.4508 5.16734C16.1831 5.89957 16.1831 7.08675 15.4508 7.81899C14.7186 8.55122 13.5314 8.55122 12.7992 7.81899C12.0669 7.08675 12.0669 5.89957 12.7992 5.16734C13.5314 4.43511 14.7186 4.43511 15.4508 5.16734"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
