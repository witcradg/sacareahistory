import { ArrowUpRight, InfoIcon } from "lucide-react";
import Link from "next/link";

export function SmtpMessage() {
  return (
    <div className="flex justify-center w-full">
      <div className="bg-muted/50 px-5 py-3 mb-14 border rounded-md flex max-w-md w-full">
        <InfoIcon size={16} className="mt-0.5" />
        <div className="flex flex-col gap-1 ml-1">
          <small className="text-sm text-secondary-foreground m-auto">
            <strong> Note:</strong> Signups must be approved by an admin before users can log in.
          </small>
          <div>
            <Link
              href="/faq/"
              target="_blank"
              className="text-primary/50 hover:text-primary flex items-center text-sm gap-1"
            >
              Learn more <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
