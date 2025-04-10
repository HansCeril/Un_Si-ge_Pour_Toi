"use client";
import React, { useEffect } from 'react';
import { Amplify } from 'aws-amplify';

import { Authenticator, Heading, Radio, RadioGroupField, useAuthenticator, View } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { usePathname, useRouter } from 'next/navigation';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID!,
      userPoolClientId:
        process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID!,
    },
  },
});
console.log(process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID)
const components = {
  Header() {
    return (
      <View className="mt-4 mb-7">
        <Heading level={3} className="!text-2xl !font-bold">
          Un siège
          <span className="text-secondary-500 font-light hover:!text-primary-300">
            Pour Toi
          </span>
        </Heading>
        <p className="text-muted-foreground mt-2">
          <span className="font-bold">Bienvenue !</span> Connecter vous pour continuer
        </p>
      </View>
    );
  },
  SignIn: {
    Footer() {
      const { toSignUp } = useAuthenticator();
      return (
        <View className="text-center mt-4">
          <p className="text-muted-foreground">
            Pas encore de compte ?{" "}
            <button
              onClick={toSignUp}
              className="text-primary hover:underline bg-transparent border-none p-0"
            >
              Inscrivez-vous ici
            </button>
          </p>
        </View>
      );
    },
  },
  SignUp: {
    FormFields() {
      const { validationErrors } = useAuthenticator();

      return (
        <>
          <Authenticator.SignUp.FormFields />
          <RadioGroupField
            legend="Rôle"
            name="custom:role"
            errorMessage={validationErrors?.["custom:role"]}
            hasError={!!validationErrors?.["custom:role"]}
            isRequired
          >
            <Radio value="passager">Passager</Radio>
            <Radio value="conducteur">Conducteur</Radio>
          </RadioGroupField>
        </>
      );
    },

    Footer() {
      const { toSignIn } = useAuthenticator();
      return (
        <View className="text-center mt-4">
          <p className="text-muted-foreground">
            Vous avez déjà un compte?{" "}
            <button
              onClick={toSignIn}
              className="text-primary hover:underline bg-transparent border-none p-0"
            >
              Connectez-vous
            </button>
          </p>
        </View>
      );
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: "Entrez votre adresse email",
      label: "Adresse email",
      isRequired: true,
    },
    password: {
      placeholder: "Entrez votre mot de passe",
      label: "Mot de passe",
      isRequired: true,
    },
  },
  signUp: {
    username: {
      order: 1,
      placeholder: "Choisissez un nom d'utilisateur",
      label: "Nom d'utilisateur",
      isRequired: true,
    },
    email: {
      order: 2,
      placeholder: "Entrez votre adresse email",
      label: "Adresse email",
      isRequired: true,
    },
    password: {
      order: 3,
      placeholder: "Créez un mot de passe",
      label: "Mot de passe",
      isRequired: true,
    },
    confirm_password: {
      order: 4,
      placeholder: "Confirmez votre mot de passe",
      label: "Confirmer le mot de passe",
      isRequired: true,
    },
  },
};


const Auth = ({children}: {children: React.ReactNode}) => {
  const { user } = useAuthenticator((context) => [context.user])
  const router = useRouter();
  const pathname = usePathname();

  const isAuthPage = pathname.match(/^\/(signin|signup)$/);
  const isDashboardPage = pathname.startsWith("/conducteur") || pathname.startsWith("/passager");

  // Redirect authenticated users away from auth pages
  useEffect(() => {
    if (user && isAuthPage) {
      router.push("/");
    }
  }, [user, isAuthPage, router]);

  // Allow access to public pages without authentication
  if (!isAuthPage && !isDashboardPage) {
    return <>{children}</>;
  }
  return (
    <div className='h-full'>
      <Authenticator
        initialState={pathname.includes("signup") ? "signUp" : "signIn"}
        components={components}
        formFields={formFields}
      >
        {() => <>{children}</>}
      </Authenticator>
    </div>
    
  );
  
}

export default Auth;