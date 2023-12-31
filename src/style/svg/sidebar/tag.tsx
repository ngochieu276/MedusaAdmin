import { SVGProp } from '../dto.svg';

export default function Tag({ width = 20, height = 20, color = '#6B7280', fill = 'none' }: SVGProp) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.0689 11.7665L11.7707 17.0661C11.6335 17.2036 11.4705 17.3126 11.2911 17.387C11.1117 17.4614 10.9194 17.4997 10.7251 17.4997C10.5309 17.4997 10.3386 17.4614 10.1592 17.387C9.97978 17.3126 9.81679 17.2036 9.67953 17.0661L3.33203 10.7243V3.33301H10.7214L17.0689 9.68217C17.3442 9.95914 17.4987 10.3338 17.4987 10.7243C17.4987 11.1149 17.3442 11.4896 17.0689 11.7665V11.7665Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M7.5 7.5H7.50755" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}
