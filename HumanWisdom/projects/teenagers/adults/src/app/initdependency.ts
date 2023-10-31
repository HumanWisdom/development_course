import { AdultsService } from "./adults/adults.service";

export function initDependency(
  services: AdultsService,
  ) {
    if (!(localStorage.getItem("isloggedin")) || localStorage.getItem("isloggedin") !== 'T') {
      services.emaillogin();
    }
  return () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };
}
