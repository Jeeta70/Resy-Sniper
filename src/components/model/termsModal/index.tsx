import { Model } from "@/components";
import {
  CredenzaBody,
  CredenzaClose,
  CredenzaHeader,
} from "@/components/ui/credenza";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";

const Index = () => {
  return (
    <Model className="bg-[#263238] text-[#e0e0e0] h-screen max-w-[700px] p-3 sm:top-0 sm:mt-0">
      <div className="flex">
        <CredenzaHeader className="text-xl">Terms of Service</CredenzaHeader>
        <CredenzaClose className="ml-auto sm:hidden">
          <X />
        </CredenzaClose>
      </div>
      <Separator className="border-[1px] border-[#37474f]" />
      <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
        <ScrollArea className="h-[85vh] text-start">
          <p className="mb-4">
            These Terms of Service ("Agreement") govern your access to and use
            of the Resy Sniper platform ("Service") provided by Resy Sniper. By
            using the Service, you agree to comply with and be bound by this
            Agreement.
          </p>
          <h5 className="text-xl font-bold mb-4">0. Affiliation Disclaimer</h5>
          <p className="mb-4">
            Resy Sniper is not associated with, affiliated with, or endorsed by
            Resy, OpenTable, or any other third-party reservation platforms. Use
            of third-party names does not imply any partnership or endorsement.
          </p>

          <h5 className="text-xl font-bold mb-4">1. Use of Service</h5>
          <p className="mb-4">
            1.1 Account Creation: You are required to create an account to use
            the Service. You agree to provide accurate and complete information
            during the registration process.
          </p>
          <p className="mb-4">
            1.2 User Responsibility: You are responsible for maintaining the
            confidentiality of your account credentials and for any activities
            or actions that occur under your account.
          </p>
          <h5 className="text-xl font-bold mb-4">3. Information Sharing</h5>
          <p className="mb-4">
            1.3 Reservation Bookings: Resy Sniper automatically books
            reservations on your behalf. However, we cannot guarantee the
            availability of reservations or the performance of third-party
            platforms such as Resy and OpenTable.
          </p>

          <h5 className="text-xl font-bold mb-4">2. Limitations and Liability</h5>
          <p className="mb-4">
            2.1 Account Suspension: Your Resy or OpenTable account may be
            subject to suspension or termination by the respective platform. We
            are not liable for any loss or damages resulting from the suspension
            or termination of your account.
          </p>
          <p className="mb-4">
            2.2 Refunds: In the event of account suspension or termination, we
            do not owe any refunds for the Service.
          </p>
          <h5 className="text-xl font-bold mb-4">3. Intellectual Property</h5>
          <p>
            3.1 Ownership: All intellectual property rights related to the
            Service, including but not limited to trademarks, copyrights, and
            proprietary information, belong to Resy Sniper.
          </p>
          <p className="mb-4">
            3.2 Use Restrictions: You are prohibited from copying, modifying,
            distributing, or using any of our intellectual property without
            prior written consent.
          </p>
          <h5 className="text-xl font-bold mb-4">4. Data Privacy</h5>
          <p className="mb-4">
            4.1 User Data: Resy Sniper collects and stores user account
            credentials (username and password) for the purpose of providing the
            Service. We are committed to safeguarding the privacy and security
            of your data in accordance with our Privacy Policy.
          </p>
          <h5 className="text-xl font-bold mb-4">5. Modification and Termination</h5>
          <p className="mb-4">
            5.1 Modification: We reserve the right to modify or update this
            Agreement at any time. Continued use of the Service after
            modifications indicates your acceptance of the revised terms.
          </p>
          <p className="mb-4">
            5.2 Termination: We may suspend or terminate your access to the
            Service at our discretion, without prior notice or liability, for
            any reason including breach of this Agreement.
          </p>
          <h5 className="text-xl font-bold mb-4">6. Governing Law</h5>
          <p className="mb-4">
            This Agreement shall be governed by and construed in accordance with
            the laws of California. Any legal actions arising from or related to
            this Agreement shall be filed exclusively in the courts located in
            California.
          </p>
        </ScrollArea>
      </CredenzaBody>
    </Model>
  );
};

export default Index;
