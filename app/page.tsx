import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Card className="px-16 py-8 gap-8 flex flex-col w-full max-w-xs">
        <CardTitle className="text-center text-[2.5em]">Welcome</CardTitle>
        <CardDescription className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum
          quos officia magni velit nihil?
        </CardDescription>
        <CardFooter className="flex w-full justify-center">
          {!hasEnvVars ? (
            <EnvVarWarning />
          ) : (
            <Suspense>
              <AuthButton className="flex gap-6"/>
            </Suspense>
          )}
        </CardFooter>
      </Card>
    </main>
  );
}
