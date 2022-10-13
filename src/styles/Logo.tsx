import { SVGAttributes } from "react"; 

interface LogoProps extends React.SVGAttributes<HTMLOrSVGElement> {

}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={106}
      height={94}
      viewBox="0 0 106 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M105.312 47.141c0-6.875-8.737-13.391-22.131-17.432 3.09-13.454 1.717-24.158-4.337-27.586C77.45 1.32 75.819.94 74.036.94v4.717c.987 0 1.782.19 2.447.55 2.92 1.65 4.186 7.933 3.199 16.015-.237 1.988-.623 4.082-1.095 6.22-4.208-1.016-8.801-1.799-13.631-2.307-2.898-3.913-5.903-7.467-8.93-10.577 6.998-6.41 13.567-9.922 18.032-9.922V.918c-5.904 0-13.631 4.146-21.445 11.339C44.8 5.107 37.072 1.002 31.17 1.002V5.72c4.443 0 11.033 3.49 18.031 9.858a100.25 100.25 0 00-8.866 10.556c-4.85.508-9.445 1.29-13.652 2.327a62.962 62.962 0 01-1.116-6.135c-1.009-8.08.236-14.364 3.134-16.035.644-.38 1.481-.55 2.469-.55V1.023c-1.804 0-3.435.381-4.852 1.185-6.032 3.427-7.384 14.11-4.271 27.523C8.694 33.792 0 40.287 0 47.14c0 6.875 8.737 13.391 22.131 17.432-3.09 13.454-1.717 24.158 4.337 27.586 1.395.803 3.026 1.184 4.83 1.184 5.902 0 13.63-4.146 21.444-11.339 7.814 7.15 15.541 11.255 21.444 11.255 1.803 0 3.435-.381 4.852-1.185 6.032-3.427 7.384-14.11 4.271-27.522 13.31-4.041 22.003-10.557 22.003-17.411zm-27.949-14.11c-.794 2.729-1.781 5.542-2.898 8.356a99.67 99.67 0 00-2.812-5.077 114.291 114.291 0 00-3.09-4.95c3.047.444 5.988.994 8.8 1.67zm-9.831 22.53c-1.674 2.855-3.392 5.563-5.173 8.08-3.199.276-6.44.424-9.703.424-3.241 0-6.483-.148-9.66-.402a116.384 116.384 0 01-5.194-8.039 109.631 109.631 0 01-4.465-8.42c1.33-2.834 2.833-5.669 4.443-8.44 1.674-2.856 3.392-5.564 5.173-8.082 3.199-.274 6.44-.423 9.703-.423 3.241 0 6.483.148 9.66.402a116.381 116.381 0 015.194 8.04 109.614 109.614 0 014.465 8.419 117.821 117.821 0 01-4.443 8.44zm6.933-2.75a89.77 89.77 0 012.963 8.42 97.562 97.562 0 01-8.844 1.691c1.052-1.628 2.103-3.3 3.09-5.013.988-1.693 1.911-3.406 2.791-5.099zM52.7 75.382a87.604 87.604 0 01-5.968-6.77c1.932.085 3.907.148 5.904.148 2.017 0 4.014-.042 5.967-.148a82.917 82.917 0 01-5.903 6.77zm-15.97-12.46a98.102 98.102 0 01-8.802-1.672c.794-2.729 1.782-5.542 2.898-8.356a99.672 99.672 0 002.812 5.077 139.594 139.594 0 003.091 4.95zm15.863-44.024a87.583 87.583 0 015.967 6.77 134.861 134.861 0 00-5.903-.148c-2.018 0-4.014.042-5.968.148a82.897 82.897 0 015.904-6.77zM36.707 31.36a116.507 116.507 0 00-5.882 10.091 89.79 89.79 0 01-2.962-8.42 105.606 105.606 0 018.844-1.67zM17.28 57.846C9.681 54.651 4.765 50.462 4.765 47.141c0-3.321 4.916-7.531 12.515-10.704 1.846-.783 3.864-1.481 5.946-2.137 1.224 4.146 2.834 8.462 4.83 12.883-1.975 4.4-3.563 8.695-4.765 12.82a65.83 65.83 0 01-6.01-2.158zm11.549 30.23c-2.92-1.65-4.186-7.932-3.199-16.014.236-1.988.623-4.083 1.095-6.22 4.207 1.016 8.801 1.8 13.631 2.307 2.898 3.913 5.903 7.467 8.93 10.577-6.998 6.41-13.567 9.922-18.032 9.922-.966-.021-1.781-.212-2.425-.571zm50.917-16.12c1.009 8.082-.236 14.365-3.134 16.036-.644.38-1.481.55-2.469.55-4.443 0-11.033-3.49-18.031-9.858 3.005-3.11 6.01-6.643 8.866-10.556 4.85-.508 9.445-1.29 13.652-2.327.494 2.136.88 4.188 1.116 6.156zm8.264-14.11c-1.846.783-3.863 1.481-5.946 2.137-1.223-4.146-2.833-8.462-4.83-12.883 1.975-4.4 3.564-8.695 4.766-12.82a68.747 68.747 0 016.032 2.158c7.599 3.194 12.515 7.383 12.515 10.704-.022 3.321-4.938 7.531-12.537 10.704z"
        fill="#81D8F7"
      />
      <path
        d="M52.635 56.809c5.417 0 9.81-4.329 9.81-9.668 0-5.34-4.393-9.668-9.81-9.668-5.418 0-9.81 4.329-9.81 9.668 0 5.34 4.392 9.668 9.81 9.668z"
        fill="#81D8F7"
      />
    </svg>
  )
}

