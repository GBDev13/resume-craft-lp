import Script from "next/script";

export const UmamiTracker = () => {
  return (
    <Script
      async
      src="https://umami.gbdev.me/script.js"
      data-website-id="aae22e02-f753-4887-9302-0106355fc708"
    />
  );
};
