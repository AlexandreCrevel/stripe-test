import {
  ClerkProvider,
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { shadesOfPurple } from '@clerk/themes';
import './globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [shadesOfPurple],
        variables: { colorPrimary: 'blue' },
      }}
    >
      <html lang='en'>
        <body className='w-full h-full justify-center items-center'>
          <SignedOut>
            <div className='flex justify-center items-center h-screen w-full'>
              <SignIn forceRedirectUrl='/dashboard' />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
            {children}
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
