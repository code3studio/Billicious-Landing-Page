import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const TermsPage = () => {
  return (
    <Card className="mx-4 mt-4">
      <CardHeader>
        <CardTitle className="text-4xl">Terms and Conditions</CardTitle>
        <CardDescription>
          Welcome to our open-source bill splitter app. By using our app, you
          agree to the following terms and conditions:
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <Separator />
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">
            By accessing and using our app, you accept and agree to be bound by
            the terms and provision of this agreement.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">2. Open Source License</h2>
          <p className="text-muted-foreground">
            Our app is licensed under the MIT License. You are free to use,
            modify, and distribute the app in accordance with the terms of the
            MIT License.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">3. User Responsibilities</h2>
          <p className="text-muted-foreground">
            You are responsible for maintaining the confidentiality of your
            account and password and for restricting access to your computer.
            You agree to accept responsibility for all activities that occur
            under your account or password.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">4. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            In no event shall the creators of the app be liable for any damages
            (including, but not limited to, damages for loss of data or profit,
            or due to business interruption) arising out of the use or inability
            to use the app.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">5. Changes to the Terms</h2>
          <p className="text-muted-foreground">
            We reserve the right to modify these terms at any time. You should
            check this page periodically for changes. By using this app after we
            post any changes, you agree to accept those changes, whether or not
            you have reviewed them.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">6. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms, please contact us at
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

export default TermsPage;
