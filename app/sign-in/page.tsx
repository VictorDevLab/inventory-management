import { SignIn } from "@stackframe/stack";
import Link from "next/link";

export default function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">
            <div className="max-w-md w-full space-y-7">
              <SignIn />
              <Link href="/">Go Home</Link>
            </div>
        </div>
    )
}