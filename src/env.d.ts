/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly BREVO_API_KEY: string;
    readonly BREVO_RSS_LIST_ID: string;
    readonly BREVO_RSS_CONFIRMATION_TEMPLATE_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
