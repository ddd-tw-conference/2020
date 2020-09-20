declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "!!raw-loader!*" {
  const content: string;
  export default content;
}
