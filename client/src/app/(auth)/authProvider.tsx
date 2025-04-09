import React from 'react';
import { Amplify } from 'aws-amplify';

import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { usePathname, useRouter } from 'next/navigation';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID!,
      userPoolClientId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID!,
    }
  }
});

const Auth = ({children}: {children: React.ReactNode}) => {
  // const { user } = useAuthenticator((context) => [context.user])
  const router = useRouter();
  const pathname = usePathname();

  const isAuthPage = pathname.match(/^\/(signin|signup)$/);
  const isDashboardPage =
  pathname.startsWith("/manager") || pathname.startsWith("/tenants");
  return (
    <div className='h-full'>
      <Authenticator
        initialState={pathname.includes("signup") ? "signUp" : "signIn"}
      >
        {() => <>{children}</>}
      </Authenticator>
    </div>
    
  );
  
}

export default Auth;