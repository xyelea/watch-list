"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { FC } from "react";

interface AuthFormProps {}

const AuthForm: FC<AuthFormProps> = ({}) => {
  const supabase = createClientComponentClient();

  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      showLinks={false}
      providers={[]}
      redirectTo="http://localhost:3001/auth/callback"
      // theme="dark"
      appearance={{
        className: {
          input: "bg-gray-700 border-gray-600 text-white",
          button: "bg-white-400 text-gray-900 hover:bg-gray-600",
          //..
        },
      }}
    />
  );
};

export default AuthForm;
