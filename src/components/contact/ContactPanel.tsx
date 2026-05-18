import { company } from "@/data/company";
import Image from 'next/image'

type ContactPanelProps = {
  productName?: string;
};

export function ContactPanel({ productName }: ContactPanelProps) {
  const message = productName
    ? `Hello, I would like to know more about ${productName}.`
    : "Hello, I would like to know more about your products.";

  const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <h2 className="text-xl font-semibold text-gray-900">Sales Inquiry</h2>
      <p className="mt-3 text-sm leading-6 text-gray-500">
        Contact {company.englishName} for model details, pricing, packaging,
        and export cooperation.
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
          href={`mailto:${company.email}`}
          className="inline-flex h-11 items-center justify-center rounded-md border border-gray-300 px-4 text-sm font-semibold text-gray-900 transition hover:border-gray-400 hover:bg-surface"
        >
          Email Sales
        </a>
      </div>
      <div className="mt-6">
        <p className="text-sm font-medium text-gray-600">WeChat QR Code</p>
        <div className="mt-3 flex aspect-square w-36 items-center justify-center rounded-md border border-dashed border-gray-300 bg-surface text-center text-xs text-gray-400">
            <Image  src="/images/contact/wechat-qr.jpg"
                    alt="WeChat QR"
                    width={300}
                    height={300}></Image>
        </div>
      </div>
    </div>
  );
}
