import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const PrivacyPage = () => {
  return (
    <Card className="mx-4 mt-4">
      <CardHeader>
        <CardTitle className="text-4xl">Privacy Policy</CardTitle>
        <CardDescription>
          Welcome to our open-source bill splitter app. By using our app, you
          agree to the following privacy policy:
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <Separator />
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">1. Information Collection</h2>
          <p className="text-muted-foreground">
            We collect information that you provide to us directly, such as when
            you create an account or contact us for support.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">2. Use of Information</h2>
          <p className="text-muted-foreground">
            We use the information we collect to provide, maintain, and improve
            our services, as well as to communicate with you.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">3. Information Sharing</h2>
          <p className="text-muted-foreground">
            We do not share your personal information with third parties except
            as necessary to provide our services or as required by law.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">4. Data Security</h2>
          <p className="text-muted-foreground">
            We implement reasonable security measures to protect your
            information from unauthorized access, use, or disclosure.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">5. Changes to this Policy</h2>
          <p className="text-muted-foreground">
            We may update this privacy policy from time to time. You are advised
            to review this page periodically for any changes.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">6. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this privacy policy, please contact
            us at{" "}
            <Link
              className="text-primary duration-200 hover:text-foreground"
              href="https://t.me/lulu786"
            >
              telegram
            </Link>{" "}
            or{" "}
            <Link
              className="text-primary duration-200 hover:text-foreground"
              href="https://github.com/BioHazard786"
            >
              github
            </Link>
            .
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PrivacyPage;
