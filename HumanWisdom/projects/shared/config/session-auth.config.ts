/** Temporarily off — was firing after successful login/SSO when early API calls returned 401. */
export const SESSION_EXPIRED_ALERT_ENABLED = false;

/** Ignore session-expired handling briefly after login while token/state settles. */
export const POST_LOGIN_GRACE_MS = 30000;

export const LOGIN_COMPLETED_AT_KEY = 'loginCompletedAt';

export function markLoginCompleted(): void {
  if (typeof window === 'undefined') {
    return;
  }
  sessionStorage.setItem(LOGIN_COMPLETED_AT_KEY, String(Date.now()));
}

export function isWithinPostLoginGracePeriod(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  const raw = sessionStorage.getItem(LOGIN_COMPLETED_AT_KEY);
  if (!raw) {
    return false;
  }
  const elapsed = Date.now() - Number(raw);
  return Number.isFinite(elapsed) && elapsed >= 0 && elapsed < POST_LOGIN_GRACE_MS;
}

export function getStoredAccessToken(): string {
  try {
    const raw = localStorage.getItem('token');
    if (!raw) {
      return '';
    }
    const parsed = JSON.parse(raw);
    return typeof parsed === 'string' && parsed.length > 0 ? parsed : '';
  } catch {
    return '';
  }
}

export function shouldShowSessionExpiredAlert(): boolean {
  return SESSION_EXPIRED_ALERT_ENABLED && !isWithinPostLoginGracePeriod();
}
