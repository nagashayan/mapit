import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">MAPiT</h3>
            <p className="text-sm text-gray-600">
              Working towards an inclusive and progressive India, free from religious and caste barriers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link href="/resources" className="text-sm text-gray-600 hover:text-primary">Resources</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-600 hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: info@mapit.org</li>
              <li>Phone: +91 XXX XXX XXXX</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} MAPiT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;