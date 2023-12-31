import { SVGProp } from '../dto.svg';

export default function Cart({ width = 20, height = 20, color = '#6B7280', fill = 'none' }: SVGProp) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.70194 11.7848L4.18359 5.34766H16.6726C17.3165 5.34766 17.7883 5.89045 17.6321 6.45189L16.2987 11.242C16.0959 11.9695 15.4075 12.5043 14.5766 12.579L7.83454 13.1848C6.82956 13.2745 5.91065 12.6713 5.70194 11.7848V11.7848Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.18418 5.34722L3.54123 2.68213H1.83594"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.2108 15.7988C13.7968 15.7988 13.4608 16.1349 13.4649 16.5488C13.4649 16.9628 13.8009 17.2988 14.2149 17.2988C14.6288 17.2988 14.9648 16.9628 14.9648 16.5488C14.9628 16.1349 14.6267 15.7988 14.2108 15.7988Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.20006 15.7988C6.78557 15.7988 6.44906 16.1344 6.45316 16.5478C6.44906 16.9632 6.78763 17.2988 7.20212 17.2988C7.61661 17.2988 7.95312 16.9632 7.95312 16.5499C7.95312 16.1344 7.61661 15.7988 7.20006 15.7988Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
