import { GetCustomDataDescriptorsFn, SiteData } from "@clipisode/theme";

export const getCustomDataDescriptors: GetCustomDataDescriptorsFn = () => {
  return [];
};

export const siteData: any = {
  customCssKey: "styles.css",
  customJsKey: "theme.js",
  meta: {
    // values: TOPIC_TITLE
    title: "TOPIC_TITLE • Audacy Beach Festival",
    description: "Send a video (no app needed) to Yungblud",
  },
  introScreen: {
    // values: SOCIAL_NETWORK, BROWSER_NAME, TITLE, INVITATION_DISPLAY_NAME, URL_TAG, EXTRA_TERMS, BRAND_SLUG, TERMS_SLUG, TERMS_NAME, BRAND_NAME
    introScreenHeader: ` `,
    recordButtonLabel: "Record a video now",
    uploadLinkLabel: `<p class="text-center text-black">Or <span class="underline">upload a video</span>. It's easy. Nothing to install.</p>`,
    // Or upload a video.
    readyDescription: `
      <h1 class="text-center text-black font-heading font-extrabold p-0 text-2xl">Hang on</h1>
      <p class="text-left text-gray-700 text-sm py-3">The SOCIAL_NETWORK browser doesn’t support direct camera uploads on Android.</p>
      <h1 class="text-center text-black font-heading font-extrabold p-0 text-2xl">Good news</h1>
      <p class="text-left text-gray-700 text-sm py-3">Just tap the three dots menu and choose <span class="whitespace-nowrap">“Open in BROWSER_NAME”</span> to send your video story to <span class="whitespace-nowrap">INVITATION_DISPLAY_NAME</span>.</p>
    `,
  },
  introScreenDesktop: {
    // values: THEME_FILE_ROOT, TOPIC_TITLE, QR_CODE, INVITATION_DISPLAY_NAME, URL_TAG, INVITATION_URL
    markup: `
      <div class="flex flex-col items-center justify-between text-center flex-grow ">
        <div class="flex flex-col items-center justify-between text-center">
          <div class="m-2">
            <a href="https://www.audacybeachfestival.com/">
              <img src="THEME_FILE_ROOT/icon.png" class="h-12 rounded-full" />
            </a>
          </div>
          <h1 class="font-heading mt-3 mb-6 text-xl md:text-2xl max-h-32 md:max-h-48 overflow-hidden">Send INVITATION_DISPLAY_NAME a video. Ask a question or tell a story. (Just keep it under 30 seconds.)</h1>
        </div>
        <div class="m-8">QR_CODE</div>
        <div>
          <p class="m-4 mb-6 text-base">Point your camera at the QR code to open it on your phone and send a video. <span class="whitespace-nowrap">It's easy.</span> Nothing <span class="whitespace-nowrap">to install.</span></p>
        </div>
      </div>
    `,
  },
  nameScreen: {
    // values: UPLOAD_PERCENTAGE, INVITATION_DISPLAY_NAME, SOCIAL_NETWORK
    saveButtonLabel: "Save my video",
    nameScreenHeader: `
      <div class="my-2 flex flex-col items-center">
        <img src="THEME_FILE_ROOT/icon.png" class="h-16 rounded-full" />
      </div>
    `,
  },
  closedScreen: {
    // values: THEME_FILE_ROOT, INVITATION_DISPLAY_NAME
    markup: `
      <div>
        <h1 class="p-0 my-3 mx-3 text-center">Too late</h1>
        <p class="p-0 mt-1 mb-6 mx-3 text-center">This invitation link is now closed.</p>
      </div>
    `,
  },
  successScreen: {
    // values: THEME_FILE_ROOT, INVITATION_DISPLAY_NAME, URL_TAG <- needs /success?tag=FOO
    markup: `
      <div id="message">
        <h1 class="my-3 mx-3 text-center">Great work</h1>
        <p class="my-3 mx-3 text-center text-black">We got your video for INVITATION_DISPLAY_NAME. Thanks!</p>
      </div>
    `,
  },
};
