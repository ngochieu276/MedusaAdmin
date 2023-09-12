import { SVGProp } from '../dto.svg';

export default function Setting({ width = 20, height = 20, color = '#6B7280', fill = 'none' }: SVGProp) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.1613 2.5H9.83605C9.4439 2.5 9.06782 2.65804 8.79053 2.93934C8.51324 3.22064 8.35746 3.60218 8.35746 4V4.135C8.35719 4.39804 8.28875 4.65639 8.15899 4.88413C8.02923 5.11186 7.84271 5.30098 7.61816 5.4325L7.30027 5.62C7.07549 5.75165 6.82052 5.82096 6.56097 5.82096C6.30142 5.82096 6.04645 5.75165 5.82167 5.62L5.71078 5.56C5.37149 5.36145 4.9684 5.30758 4.59001 5.41023C4.21161 5.51288 3.88882 5.76365 3.6925 6.1075L3.52985 6.3925C3.33413 6.7367 3.28104 7.14562 3.38222 7.5295C3.4834 7.91337 3.7306 8.24084 4.06954 8.44L4.18043 8.515C4.4039 8.64588 4.58972 8.83382 4.71942 9.06012C4.84911 9.28643 4.91817 9.54323 4.91973 9.805V10.1875C4.92076 10.4518 4.85293 10.7117 4.72311 10.9409C4.59328 11.17 4.40607 11.3603 4.18043 11.4925L4.06954 11.56C3.7306 11.7592 3.4834 12.0866 3.38222 12.4705C3.28104 12.8544 3.33413 13.2633 3.52985 13.6075L3.6925 13.8925C3.88882 14.2363 4.21161 14.4871 4.59001 14.5898C4.9684 14.6924 5.37149 14.6386 5.71078 14.44L5.82167 14.38C6.04645 14.2483 6.30142 14.179 6.56097 14.179C6.82052 14.179 7.07549 14.2483 7.30027 14.38L7.61816 14.5675C7.84271 14.699 8.02923 14.8881 8.15899 15.1159C8.28875 15.3436 8.35719 15.602 8.35746 15.865V16C8.35746 16.3978 8.51324 16.7794 8.79053 17.0607C9.06782 17.342 9.4439 17.5 9.83605 17.5H10.1613C10.5535 17.5 10.9296 17.342 11.2069 17.0607C11.4842 16.7794 11.6399 16.3978 11.6399 16V15.865C11.6402 15.602 11.7086 15.3436 11.8384 15.1159C11.9682 14.8881 12.1547 14.699 12.3792 14.5675L12.6971 14.38C12.9219 14.2483 13.1769 14.179 13.4364 14.179C13.696 14.179 13.9509 14.2483 14.1757 14.38L14.2866 14.44C14.6259 14.6386 15.029 14.6924 15.4074 14.5898C15.7858 14.4871 16.1086 14.2363 16.3049 13.8925L16.4675 13.6C16.6633 13.2558 16.7164 12.8469 16.6152 12.463C16.514 12.0791 16.2668 11.7517 15.9279 11.5525L15.817 11.4925C15.5913 11.3603 15.4041 11.17 15.2743 10.9409C15.1445 10.7117 15.0766 10.4518 15.0777 10.1875V9.8125C15.0766 9.54818 15.1445 9.28829 15.2743 9.05912C15.4041 8.82995 15.5913 8.63966 15.817 8.5075L15.9279 8.44C16.2668 8.24084 16.514 7.91337 16.6152 7.5295C16.7164 7.14562 16.6633 6.7367 16.4675 6.3925L16.3049 6.1075C16.1086 5.76365 15.7858 5.51288 15.4074 5.41023C15.029 5.30758 14.6259 5.36145 14.2866 5.56L14.1757 5.62C13.9509 5.75165 13.696 5.82096 13.4364 5.82096C13.1769 5.82096 12.9219 5.75165 12.6971 5.62L12.3792 5.4325C12.1547 5.30098 11.9682 5.11186 11.8384 4.88413C11.7086 4.65639 11.6402 4.39804 11.6399 4.135V4C11.6399 3.60218 11.4842 3.22064 11.2069 2.93934C10.9296 2.65804 10.5535 2.5 10.1613 2.5Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.9987 11.6666C10.9192 11.6666 11.6654 10.9204 11.6654 9.99992C11.6654 9.07944 10.9192 8.33325 9.9987 8.33325C9.07822 8.33325 8.33203 9.07944 8.33203 9.99992C8.33203 10.9204 9.07822 11.6666 9.9987 11.6666Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
}