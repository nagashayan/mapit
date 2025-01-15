// import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-8">
            Have questions or want a demo? We'd love to hear from you.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">Jubilee Hills, Hyderabad<br />Telangana</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">info@mapit.org</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+91 XXX XXX XXXX</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* <ContactForm /> */}
        </div>
      </div>
    </div>
  );
}