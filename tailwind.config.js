/** @type {import('tailwindcss').Config} */
// 'tailwindcss' 설정 파일입니다.

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // 웹 페이지 파일의 경로 패턴
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // 컴포넌트 파일의 경로 패턴
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // 앱 파일의 경로 패턴
  ],
  mode: "jit", // 'jit' (Just-in-Time) 모드를 사용하여 테일윈드CSS를 최적화합니다.

  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // 'Inter' 글꼴을 사용하도록 확장합니다.
      },
      colors: {
        "black-100": "#2B2C35", // 'black-100' 색상 정의
        "primary-blue": {
          DEFAULT: "#2B59FF", // 'primary-blue' 기본 색상 정의
          100: "#F5F8FF", // 'primary-blue' 100 버전의 색상 정의
        },
        "secondary-orange": "#f79761", // 'secondary-orange' 색상 정의
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)", // 'light-white' 기본 색상 정의
          100: "rgba(59,60,152,0.02)", // 'light-white' 100 버전의 색상 정의
        },
        grey: "#747A88", // 'grey' 색상 정의
      },
      backgroundImage: {
        pattern: "url('/pattern.png')", // 'pattern' 배경 이미지 설정
        "hero-bg": "url('/hero-bg.png')", // 'hero-bg' 배경 이미지 설정
      },
    },
  },
  plugins: [], // 플러그인을 추가하지 않음
};
