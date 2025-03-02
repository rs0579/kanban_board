import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    return jwtDecode<JwtPayload>(this.getToken());
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is lolgged in
    const token = this.getToken();
    // Check if the token is expired THE DOUBLE NEGATION !! IS USED TO CONVERT THE VALUE TO A BOOLEAN TO EMPHASIZE THAT THE VALUE IS A BOOLEAN
    return !!token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    if (decoded?.exp && decoded?.exp < Date.now()/1000) {
      return true;
    }
  } catch (error) {
    return false;
  }
  }

  getToken(): string {
    // TODO: return the token
   const loggedUser = localStorage.getItem('token') || '';
    return loggedUser;
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
  localStorage.setItem('token', idToken);
  window.location.assign('/');
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
    localStorage.removeItem('token');
    window.location.assign('/login');
  }
}

export default new AuthService();
