import Link from "next/link";
import { Container } from "@/components/common/Container";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container className="flex flex-col gap-4 py-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Global Trade Products. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/products" className="hover:text-gray-900">
            Products
          </Link>
          <Link href="/contact" className="hover:text-gray-900">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
