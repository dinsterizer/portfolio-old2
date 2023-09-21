import type { APIRoute } from 'astro'

export const prerender = false;

export const POST: APIRoute = async (event) => {
  const body = await event.request.json()

  const res = await fetch("https://api.brevo.com/v3/contacts/doubleOptinConfirmation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "api-key": import.meta.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      email: body.email,
      includeListIds: [parseInt(import.meta.env.BREVO_RSS_LIST_ID)],
      templateId:parseInt(import.meta.env.BREVO_RSS_CONFIRMATION_TEMPLATE_ID),
      redirectionUrl: event.site?.toString(),
    }),
  })

  return new Response(JSON.stringify({ success: true }))
}
