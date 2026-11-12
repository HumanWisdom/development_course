import { Injectable } from "@angular/core";

const STORAGE_KEY = "pendingSignupCredentials";

/**
 * Holds the signup credentials so the email verification step can log the newly created
 * user in afterwards. Kept in memory plus sessionStorage (tab scoped, removed as soon as
 * the login runs) so reloading the verify page does not leave the user half signed up.
 */
@Injectable({
  providedIn: "root",
})
export class SignupCredentialsService {
  private _email = "";
  private _password = "";

  constructor() {
    this.restore();
  }

  set(email: string, password: string) {
    this._email = email || "";
    this._password = password || "";
    try {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ email: this._email, password: this._password })
      );
    } catch {
      // Storage full or disabled - the in-memory copy still works for this page
    }
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  hasCredentials(): boolean {
    return !!this._email && !!this._password;
  }

  clear() {
    this._email = "";
    this._password = "";
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // Nothing to clean up
    }
  }

  private restore() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return;
      }
      const parsed = JSON.parse(raw);
      this._email = parsed?.email || "";
      this._password = parsed?.password || "";
    } catch {
      this._email = "";
      this._password = "";
    }
  }
}
