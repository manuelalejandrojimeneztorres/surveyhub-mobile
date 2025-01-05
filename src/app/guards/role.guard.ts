import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';

export const roleGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuthenticated = await authService.isSignedIn();

  if (!isAuthenticated) {
    router.navigate(['/signin']);
    return false;
  }

  const requiredRoles: string[] = route.data?.['roles'] || [];
  const token = await authService.getToken();

  if (token) {
    const decodedToken: any = jwtDecode(token);
    const systemUserRoles: string[] = decodedToken?.roles || [];

    const hasRequiredRole = requiredRoles.some((role) => systemUserRoles.includes(role));

    if (!hasRequiredRole) {
      router.navigate(['/unauthorized']);
      return false;
    }

    return true;
  }

  router.navigate(['/unauthorized']);
  return false;
};
