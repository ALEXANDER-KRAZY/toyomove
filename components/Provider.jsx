"useClient";
import { SessionProvider } from 'next-auth/react';
//get children and current session using props
const Provider = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider
