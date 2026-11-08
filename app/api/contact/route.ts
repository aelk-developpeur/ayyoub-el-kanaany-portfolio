const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxLengths = {
  name: 100,
  email: 254,
  message: 5000,
};

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Le formulaire est invalide." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Le formulaire est invalide." }, { status: 400 });
  }

  const { name, email, message, locale } = body as Record<string, unknown>;
  const isEnglish = locale === "en";
  const errorText = {
    invalid: isEnglish ? "The form is invalid." : "Le formulaire est invalide.",
    required: isEnglish ? "All fields are required." : "Tous les champs sont obligatoires.",
    check: isEnglish
      ? "Check the fields and their lengths, then try again."
      : "Vérifie les champs et leurs longueurs, puis réessaie.",
    notConfigured: isEnglish
      ? "The contact form is not configured yet."
      : "Le formulaire de contact n’est pas encore configuré.",
    sendFailed: isEnglish
      ? "Your message could not be sent. Please try again or email me directly."
      : "L’envoi a échoué. Réessaie ou contacte-moi par email.",
  };
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return Response.json({ error: errorText.required }, { status: 400 });
  }

  const normalizedName = name.trim();
  const normalizedEmail = email.trim();
  const normalizedMessage = message.trim();

  if (
    !normalizedName ||
    normalizedName.length > maxLengths.name ||
    !emailPattern.test(normalizedEmail) ||
    normalizedEmail.length > maxLengths.email ||
    !normalizedMessage ||
    normalizedMessage.length > maxLengths.message
  ) {
    return Response.json(
      { error: errorText.check },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    console.error("Contact form is missing RESEND_API_KEY, CONTACT_EMAIL, or FROM_EMAIL.");
    return Response.json(
      { error: errorText.notConfigured },
      { status: 503 },
    );
  }

  let delivery: Response;
  try {
    delivery = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: normalizedEmail,
        subject: `Message du portfolio — ${normalizedName}`,
        text: `Nom : ${normalizedName}\nEmail : ${normalizedEmail}\n\n${normalizedMessage}`,
      }),
    });
  } catch (error) {
    console.error("Could not connect to Resend to deliver a portfolio contact message.", error);
    return Response.json(
      { error: errorText.sendFailed },
      { status: 502 },
    );
  }

  if (!delivery.ok) {
    console.error("Resend rejected a portfolio contact message.", delivery.status);
    return Response.json({ error: errorText.sendFailed }, { status: 502 });
  }

  return Response.json({
    message: isEnglish
      ? "Message sent. Thanks for getting in touch!"
      : "Message envoyé. Merci pour ton email !",
  });
}
