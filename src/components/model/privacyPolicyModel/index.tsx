import { Model } from "@/components";
import { CredenzaBody, CredenzaClose, CredenzaHeader } from "@/components/ui/credenza";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";

const Index = () => {
  return (
    <Model className="bg-[#263238] text-[#e0e0e0] h-full max-w-[700px] p-3">
      <div className="flex">
        <CredenzaHeader className="text-xl">Privacy Policy</CredenzaHeader>
        <CredenzaClose className="ml-auto sm:hidden"><X /></CredenzaClose>
      </div>
      <Separator className="border-[1px] border-[#37474f]" />
      <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
        <ScrollArea className="h-[90vh] text-start">
          <p className="mb-4">
            This Privacy Policy ("Policy") outlines the types of personal
            information collected, how it is used, and the measures taken to
            protect your privacy while using the Resy Sniper platform
            ("Service") provided by Resy Sniper LLC. By using the Service, you
            consent to the collection and use of your personal information as
            described in this Policy.
          </p>
          <h5 className="text-xl font-bold mb-4">1. Information Collection</h5>
          <p className="mb-4">
            1.1 User Information: When you create an account, we collect
            personal information such as your name, email address, and contact
            details. We also store your Resy and OpenTable account credentials
            (username and password) securely.
          </p>
          <p className="mb-4">
            1.2 Usage Data: We may collect information about your interactions
            with the Service, including the dates and times of access, IP
            address, and device information.
          </p>
          <h5 className="text-xl font-bold mb-4">2. Information Use</h5>
          <p className="mb-4">
            2.1 Service Provision: We use the collected information to provide
            and improve the Service, including facilitating reservation bookings
            and managing your account.
          </p>
          <p className="mb-4">
            2.2 Communication: We may send you service-related notifications,
            updates, and promotional emails. You have the option to opt out of
            receiving marketing communications.
          </p>
          <h5 className="text-xl font-bold mb-4">3. Information Sharing</h5>
          <p className="mb-4">
            3.1 Third-Party Services: We may share your personal information
            with trusted third-party service providers for purposes such as data
            storage, analytics, and customer support.
          </p>
          <p className="mb-4">
            3.2 Legal Compliance: We may disclose your information if required
            by law, court order, or government request, or to protect our
            rights, property, or safety.
          </p>
          <h5 className="text-xl font-bold mb-4">4. Data Security</h5>
          <p className="mb-4">
            4.1 Security Measures: We implement industry-standard security
            measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction.
          </p>
          <p className="mb-4">
            4.2 Data Retention: We retain your personal information for as long
            as necessary to fulfill the purposes outlined in this Policy, unless
            a longer retention period is required by law.
          </p>
          <h5 className="text-xl font-bold mb-4">5. User Rights</h5>
          <p>
            5.1 Access and Correction: You may access, update, or correct your
            personal information by accessing your account settings or
            contacting us directly.
          </p>
          <p className="mb-4">
            5.2 Account Deletion: You may request the deletion of your account
            and associated personal information by contacting us. However,
            please note that certain data may be retained as required by law or
            for legitimate business purposes.
          </p>
          <h5 className="text-xl font-bold mb-4">6. Children's Privacy</h5>
          <p className="mb-4">
            The Service is not intended for individuals under the age of 13. We
            do not knowingly collect personal information from children. If you
            believe we have inadvertently collected information from a child,
            please contact us to request its deletion.
          </p>
          <h5 className="text-xl font-bold mb-4">7. Changes to the Policy</h5>
          <p className="mb-4">
            We reserve the right to modify or update this Privacy Policy at any
            time. Any changes will be reflected on this page with a revised
            effective date. We encourage you to review this Policy periodically
            for any updates.
          </p>
          <h5 className="text-xl font-bold mb-4">8. Contact Us</h5>
          <p className="mb-4">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us at
            support@resysniper.com.
          </p>
        </ScrollArea>
      </CredenzaBody>
    </Model>
  );
};

export default Index;
