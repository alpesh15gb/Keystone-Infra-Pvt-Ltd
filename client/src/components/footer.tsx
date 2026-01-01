import { Twitter, Linkedin, Phone, Facebook, Instagram } from "lucide-react";
import logoPath from "@/assets/logo.png";
import EditableText from '@/components/editable-text';

interface FooterProps {
  isEditMode?: boolean;
}

export function Footer({ isEditMode = false }: FooterProps) {
  return (
    <footer className="bg-stripe-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="mb-4">
              <img src={logoPath} alt="Keystone Infra" className="h-12" />
            </div>
            <EditableText
              id="footer-description"
              isEditMode={isEditMode}
              element="p"
              multiline={true}
              className="text-gray-400 mb-6 max-w-md"
            >
              Established civil engineering and infrastructure development company. ISO certified, 20+ years experience, building India's infrastructure future.
            </EditableText>
            <div className="flex space-x-4" role="navigation" aria-label="Social media links">
              <a
                href="https://in.linkedin.com/company/keystone-infra-private-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Follow Keystone Infra on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/p/Keystone-Infra-Pvt-Ltd-100091361364694/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Follow Keystone Infra on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/keystone_infra/?igsh=MjZuOHYxODV0bzBq#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Follow Keystone Infra on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="tel:+919393645644"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Call Keystone Infra at +91 9393645644"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>




        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">

        </div>
      </div>
    </footer>
  );
}
