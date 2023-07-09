import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function getSessionProps(context) {
  const { req, res, resolvedUrl } = context;
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=${resolvedUrl}`,
        permanent: false
      }
    };
  }
  return {
    props: {
      session
    }
  };
}