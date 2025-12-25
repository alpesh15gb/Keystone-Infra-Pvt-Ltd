declare module 'owl.carousel' {
  interface JQuery {
    owlCarousel(options?: any): JQuery;
  }
}

declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}