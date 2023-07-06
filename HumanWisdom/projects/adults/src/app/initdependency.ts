import { AdultsService } from "./adults/adults.service";

export function initDependency(
  services: AdultsService,
  ) {
  services.emaillogin();
  return () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };
}
