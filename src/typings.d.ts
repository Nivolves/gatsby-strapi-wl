interface CSSModule {
  [className: string]: string;
}
declare module '*.svg' {
  const content: string;
  export default content;
}
