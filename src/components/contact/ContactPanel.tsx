type ContactPanelProps = {
  productName?: string;
};

export function ContactPanel({ productName }: ContactPanelProps) {
  const message = productName
    ? `Hello, I would like to know more about ${productName}.`
    : "Hello, I would like to know more about your products.";

  const whatsappUrl = `https://wa.me/12345678900?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-950">Sales Inquiry</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        Use these placeholder contact channels for the MVP. Replace them with
        your real sales contact details before launch.
      </p>
      <div className="mt-6 grid gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-md bg-green-600 px-4 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          Contact on WhatsApp
        </a>
        <a
          href="mailto:sales@example.com"
          className="inline-flex h-11 items-center justify-center rounded-md border border-slate-300 px-4 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
        >
          Email Sales
        </a>
      </div>
      <div className="mt-6">
        <p className="text-sm font-medium text-slate-700">WeChat QR Code</p>
        <div className="mt-3 flex aspect-square w-36 items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 text-center text-xs text-slate-500">
          QR placeholder
        </div>
      </div>
    </div>
  );
}
