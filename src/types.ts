export interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {};
}

// Google Ads gtag type declaratie
export {};

declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}
