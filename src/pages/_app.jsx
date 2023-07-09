import { SessionProvider } from "next-auth/react"
import '@/styles/globals.css'
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import Navbar from "@/components/navbar/Navbar";

export async function getServerSideProps({ req, res, resolvedUrl, }) {
  const session = await getServerSession(req, res, authOptions)
  console.log('session', session);
  if(!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=${resolvedUrl}`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      session
    }
  }
}

export default function App({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

