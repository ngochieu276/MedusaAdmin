import { SVGProp } from '../dto.svg';

export default function Pricing({ width = 20, height = 20, color = '#6B7280', fill = 'none' }: SVGProp) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.75 7.5H2.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.75 12.5H2.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M3.33464 10H1.66797"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.69727 4.6967C5.74616 3.64781 7.08253 2.9335 8.53739 2.64411C9.99225 2.35472 11.5002 2.50325 12.8707 3.07091C14.2411 3.63856 15.4125 4.59986 16.2366 5.83323C17.0607 7.0666 17.5006 8.51664 17.5006 10C17.5006 11.4834 17.0607 12.9334 16.2366 14.1668C15.4125 15.4001 14.2411 16.3614 12.8707 16.9291C11.5002 17.4968 9.99225 17.6453 8.53739 17.3559C7.08253 17.0665 5.74616 16.3522 4.69727 15.3033"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M10 6.25V7.00737" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M8.125 8.52196C8.17767 8.07456 8.40336 7.66555 8.75379 7.38246C9.10421 7.09936 9.55152 6.96468 10 7.00722"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 13.7502V12.9928"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.875 11.4779C11.8223 11.9253 11.5966 12.3343 11.2462 12.6174C10.8958 12.9005 10.4485 13.0352 10 12.9926"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.8273 8.19142C11.6899 7.82424 11.4381 7.51093 11.1091 7.2977C10.7801 7.08446 10.3913 6.9826 10 7.00712"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.17188 11.8083C8.30928 12.1755 8.56105 12.4888 8.89004 12.7021C9.21904 12.9153 9.60785 13.0172 9.99913 12.9926"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.125 8.52209C8.125 8.83309 8.23276 9.13449 8.42993 9.375C8.6271 9.6155 8.90151 9.78027 9.20647 9.84126L10.7935 10.1587C11.0985 10.2197 11.3729 10.3844 11.5701 10.6249C11.7672 10.8655 11.875 11.1668 11.875 11.4778"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
}
