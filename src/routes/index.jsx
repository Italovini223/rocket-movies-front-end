import {BrowserRouter} from  'react-router-dom'
import { AppRoutes } from './apps.routes'
import { AuthRoutes } from './auth.routes'
import { useAuth } from '../hooks/auth'
export function Routes() {
  const {user} = useAuth();
  return(
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}