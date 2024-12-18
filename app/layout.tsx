import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ClerkProvider, SignIn, SignedIn, SignedOut } from '@clerk/nextjs';
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
          <SidebarProvider>
            <SignedOut>
              <div className='flex justify-center items-center h-screen w-full'>
                <SignIn forceRedirectUrl='/dashboard' />
              </div>
            </SignedOut>
            <SignedIn>
              <AppSidebar />
              <main>
                <SidebarTrigger />
                {children}
              </main>
            </SignedIn>
          </SidebarProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
