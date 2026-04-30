import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className=" bg-amber-200 rounded-3xl">
        <div className="px-5 sm:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="pixgen logo"
                  width={70}
                  height={70}
                  className="w-auto h-auto"
                />

                <h2 className="text-lg font-semibold leading-tight text-[#5A3E2B]">
                  Summer <br />
                  Essentials
                </h2>
              </div>

              <p className="text-sm text-gray-700 leading-6 max-w-xs">
                Everything you need for beach days, pool parties, and sunny
                adventures.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#5A3E2B] mb-3">
                Company
              </h3>

              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link href="/about" className="hover:text-black transition">
                    About
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="hover:text-black transition">
                    Contact
                  </Link>
                </li>

                <li>
                  <Link href="/terms" className="hover:text-black transition">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#5A3E2B] mb-3">
                Social
              </h3>

              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link
                    href="https://www.facebook.com/"
                    className="hover:text-black transition"
                  >
                    Facebook
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://www.instagram.com/"
                    className="hover:text-black transition"
                  >
                    Instagram
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://twitter.com/"
                    className="hover:text-black transition"
                  >
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-5 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-700">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Nafis Sahriar - All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-black transition">
                Privacy
              </Link>

              <Link href="/terms" className="hover:text-black transition">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
