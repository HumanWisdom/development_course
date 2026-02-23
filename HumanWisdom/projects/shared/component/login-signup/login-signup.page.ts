import { Component, ElementRef, NgZone, OnInit, AfterViewInit, Renderer2, ViewChild } from "@angular/core";
import { AbstractControl, NgForm, UntypedFormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { PlatformModule } from '@angular/cdk/platform';
import { LogEventService } from "../../services/log-event.service";
import { OnboardingService } from "../..//services/onboarding.service";
import { SharedService } from "../../services/shared.service";
import { environment } from "../../../environments/environment";
import { NavigationService } from "../../services/navigation.service";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../shared.module";
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from "ng-recaptcha";
import { Constant } from "../../services/constant";
import { CommonService } from "../../services/common.service";
import { HomeStateService } from "../../services/home-state.service";
import { ProgramType } from "../../models/program-model";
declare var $: any;
declare var google: any;
declare var FB: any;
@Component({
  selector: "app-common-login",
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PlatformModule,
    RecaptchaModule,

    RecaptchaFormsModule,
    SharedModule],
  standalone: true,
  providers: [

    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6Lfi18QqAAAAAIBaGMBh91M3we0ZnAdU_StbpwiR',
      } as RecaptchaSettings,
    },
  ],
  templateUrl: "./login-signup.page.html",
  styleUrls: ["./login-signup.page.scss"],
})
export class LoginSignupPage implements OnInit, AfterViewInit {
  //static progress mapping
  mediaAudio = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com";
  mediaVideo = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com";

  @ViewChild("enablemodal") enablemodal: ElementRef;
  @ViewChild("closemodal") closemodal: ElementRef;
  @ViewChild("enabletab") enabletab: ElementRef;
  @ViewChild("enableotpmodal") enableotpmodal: ElementRef;
  @ViewChild("closeotpmodal") closeotpmodal: ElementRef;
  isAdults: boolean = true;
  user: any;
  userId: any;
  idToken: any;
  email: any;
  password: any;
  showAlert = false;
  renderGoogle = false;
  successPassword = JSON.parse(sessionStorage.getItem("successPassword"));
  showSuccessPassword: any;
  saveUsername = false;
  urlEmail: any;
  urlPassword: any;
  urlKey: any;
  loginResponse: any;
  socialFirstName: any;
  socialLastName: any;
  socialEmail: any;
  userName: any;
  deferredPrompt: any;
  showButton = true;
  enableLogin = false;
  scrId: any;
  hideSocial = false;
  x = [];
  isSignUp = true;
  value: number = 100;
  showWarning = false;
  showMessage = false;
  agree = false;
  showVerify = false;
  verificationCode: any;
  codeVerified = false;
  signUser: any;
  video = 3;
  audio = 4;
  token: string | undefined;
  t = new Date();
  private clientId = '1840609876679041'; // Replace with your Instagram App Client ID
  private redirectUri = environment.clientUrl + "/adults/adult-dashboard";
  private authUrl = `https://api.instagram.com/oauth/authorize`;
  private accessToken: string | null = null;
  minDate =
    this.t.getFullYear() +
    "-" +
    this.addZero(this.t.getMonth() + 1) +
    "-" +
    this.addZero(this.t.getDate());
  message: any;
  isValidCaptach: boolean = false;
  get fullname() {
    return this.registrationForm?.get("fullname");
  }
  get emailvalid() {
    return this.registrationForm?.get("email");
  }
  get passwordvalid() {
    return this.registrationForm?.get("ogpassword");
  }

  get passwordvalidation() {
    return this.registrationForm?.get("confirmPassword").value !== this.registrationForm.get("ogpassword").value;
  }

  get confirmpasswordvalid() {
    return this.registrationForm?.get("confirmPassword");
  }

  // registrationForm=new FormGroup({
  //   firstName:new FormControl(''),
  //   lastName:new FormControl(''),
  //   email:new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl('')
  // })
  registrationForm: any;

  content = '';
  enableAlert = false;
  passwordhide: boolean = true;
  confirmpasswordhide: boolean = true;


  ngAfterViewInit(): void {
    // Check if we need to force re-initialization (e.g., after logout)
    const forceReinit = sessionStorage.getItem('forceGoogleReinit') === 'true';
    if (forceReinit) {
      sessionStorage.removeItem('forceGoogleReinit');
    }

    // Load Google Sign-In script if not already loaded
    this.loadGoogleSignInScript().then(() => {
      if (typeof google !== 'undefined' && google.accounts) {
        // Cancel any existing prompts before re-initializing
        if (forceReinit && google.accounts.id) {
          try {
            google.accounts.id.cancel();
          } catch (e) {
            console.warn('Error canceling Google prompts:', e);
          }
        }

        // Initialize Google Identity Services
        google.accounts.id.initialize({
          client_id: environment.googleClientId,
          callback: (response: any) => this.handleCredentialResponse(response),
        });
        this.hideSocial = true;
        // Render Google buttons safely (force re-render if coming from logout)
        this.renderGoogleButtonSafely('googleBtnSignup', forceReinit);
        this.renderGoogleButtonSafely('googleBtnLogin', forceReinit);
      }
    }).catch((error) => {
      console.error('Failed to load Google Sign-In:', error);
    });
  }

  private renderGoogleButtonSafely(buttonId: string, forceReinit: boolean = false): void {
    // Wait a bit to ensure DOM is ready (especially after tab switches)
    setTimeout(() => {
      const buttonContainer = document.getElementById(buttonId);
      if (!buttonContainer) {
        // Element doesn't exist (likely hidden by *ngIf), skip rendering
        return;
      }

      // Check if button is already rendered by looking for Google button elements
      const hasExistingButton = buttonContainer.querySelector('div[id*="google"], div[class*="abcRioButton"], div[class*="gsi"], div[role="button"]');

      // If button already exists and we're not forcing reinit, don't re-render
      if (hasExistingButton && !forceReinit) {
        return;
      }

      // Ensure Google API is available
      if (typeof google === 'undefined' || !google.accounts || !google.accounts.id) {
        console.warn(`Google Sign-In API not available when trying to render ${buttonId}`);
        return;
      }

      // Clear container before rendering (in case of any leftover content)
      buttonContainer.innerHTML = '';

      // Render the button
      try {
        google.accounts.id.renderButton(buttonContainer, {
          type: 'icon',
          theme: 'outline',
          size: 'large',
        });
        // Style the button after rendering
        setTimeout(() => {
          this.styleGoogleButton(buttonId);
        }, 100);
      } catch (error) {
        console.error(`Error rendering Google button ${buttonId}:`, error);
      }
    }, forceReinit ? 200 : 50); // Longer delay if forcing reinit to ensure cleanup is complete
  }

  private styleGoogleButton(buttonId: string): void {
    const buttonContainer = document.getElementById(buttonId);
    if (buttonContainer) {
      // Wait a bit more for Google button to fully render
      setTimeout(() => {
        // Find the Google button element (it's usually a div with class containing 'abcRioButton' or 'gsi')
        const googleButton = buttonContainer.querySelector('div[id*="google"], div[class*="abcRioButton"], div[class*="gsi"], div[role="button"]') as HTMLElement;
        if (googleButton) {
          // Hide the Google button but keep it functional
          buttonContainer.style.position = 'relative';
          googleButton.style.opacity = '0';
          googleButton.style.position = 'absolute';
          googleButton.style.pointerEvents = 'auto';
          googleButton.style.width = '100%';
          googleButton.style.height = '100%';
          googleButton.style.zIndex = '1';
          // Remove default Google button styling
          googleButton.style.background = 'transparent';
          googleButton.style.border = 'none';
          googleButton.style.borderWidth = '0';
          googleButton.style.outline = 'none';
          googleButton.style.boxShadow = 'none';
          googleButton.style.padding = '0';
          googleButton.style.margin = '0';
          googleButton.style.width = '100%';
          googleButton.style.height = '100%';
          googleButton.style.display = 'flex';
          googleButton.style.alignItems = 'center';
          googleButton.style.justifyContent = 'center';
          googleButton.style.minWidth = 'auto';
          googleButton.style.minHeight = 'auto';

          // Remove border on focus/active/hover
          googleButton.addEventListener('focus', () => {
            googleButton.style.border = 'none';
            googleButton.style.outline = 'none';
            googleButton.style.boxShadow = 'none';
          });

          // Style the icon inside
          const icon = googleButton.querySelector('svg, img, [class*="icon"], [class*="Icon"]') as HTMLElement;
          if (icon) {
            icon.style.width = '100%';
            icon.style.height = 'auto';
            icon.style.maxWidth = '100%';
            icon.style.display = 'block';
          }

          // Also style any nested divs
          const nestedDivs = googleButton.querySelectorAll('div');
          nestedDivs.forEach((div: HTMLElement) => {
            div.style.background = 'transparent';
            div.style.border = 'none';
            div.style.borderWidth = '0';
            div.style.outline = 'none';
            div.style.boxShadow = 'none';
          });

          // Style the wrapper button
          const wrapper = document.getElementById(buttonId + 'Wrapper');
          if (wrapper) {
            wrapper.style.border = 'none';
            wrapper.style.borderWidth = '0';
            wrapper.style.outline = 'none';

            // Apply conditional color filter based on ProgramId
            // Adults (ProgramId 9) = white, Teenagers (ProgramId 11) = red
            if (SharedService.ProgramId === ProgramType.Adults) {
              // White filter: brightness(0) invert(1)
              wrapper.style.backgroundColor = 'none !important';
            } else if (SharedService.ProgramId === ProgramType.Teenagers) {
              // Red filter: brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)
              wrapper.style.backgroundColor = 'none !important';
            }
          }

          // Also apply filter to the iframe if it exists (Google button is rendered in iframe)
          const iframe = buttonContainer.querySelector('iframe') as HTMLIFrameElement;
          if (iframe) {
            // Function to get container-div by ID and remove background color and border
            const styleContainerDiv = () => {
              try {
                const iframeDoc = iframe.contentDocument || (iframe.contentWindow as any)?.document;
                if (iframeDoc) {
                  const containerDiv = iframeDoc.getElementById('container-div');
                  if (containerDiv) {
                    // Remove background color and border
                    (containerDiv as HTMLElement).style.background = 'none';
                    (containerDiv as HTMLElement).style.backgroundColor = 'transparent';
                    (containerDiv as HTMLElement).style.border = 'none';
                    (containerDiv as HTMLElement).style.borderWidth = '0';
                    (containerDiv as HTMLElement).style.borderStyle = 'none';

                    // Inject CSS to ensure styles persist
                    if (!iframeDoc.getElementById('container-div-styles')) {
                      const style = iframeDoc.createElement('style');
                      style.id = 'container-div-styles';
                      style.textContent = '#container-div { background: none !important; background-color: transparent !important; border: none !important; border-width: 0 !important; border-style: none !important; }';
                      iframeDoc.head.appendChild(style);
                    }
                  }
                }
              } catch (e) {
                // Cross-origin restriction - cannot access iframe content
                console.log('Cannot access iframe content (cross-origin restriction)');
              }
            };

            // Try to style when iframe loads
            iframe.onload = () => setTimeout(styleContainerDiv, 100);
            // Also try after delays in case iframe is already loaded
            setTimeout(styleContainerDiv, 500);
            setTimeout(styleContainerDiv, 1000);

            if (SharedService.ProgramId === ProgramType.Adults) {
              // White filter for adults
              //  iframe.style.filter = 'brightness(0) invert(1)';
            } else if (SharedService.ProgramId === ProgramType.Teenagers) {
              // Red filter for teenagers
              wrapper.style.backgroundColor = 'none !important';
            }
          }
        }
      }, 200);
    }
  }

  // Trigger Google Sign-In by clicking the hidden button
  triggerGoogleSignIn(buttonId: string, event?: Event): void {
    console.log('=== triggerGoogleSignIn called ===', buttonId);

    // Prevent default but don't stop propagation - let it bubble to hidden button
    if (event) {
      event.preventDefault();
    }

    const buttonContainer = document.getElementById(buttonId);
    if (!buttonContainer) {
      console.log('Button container not found:', buttonId);
      return;
    }

    // Function to try triggering the click with retries
    const tryTriggerClick = (attempt: number = 1, delay: number = 0) => {
      setTimeout(() => {
        console.log(`Attempt ${attempt} to trigger Google Sign-In for:`, buttonId);

        // Method 1: Find the hidden button and temporarily enable it, then click
        const hiddenButton = buttonContainer.querySelector('.google-button-hidden') as HTMLElement;
        if (hiddenButton) {
          console.log('Found hidden button, attempting to click');

          try {
            // Temporarily enable pointer events and make visible
            const originalPointerEvents = hiddenButton.style.pointerEvents;
            const originalOpacity = hiddenButton.style.opacity;

            hiddenButton.style.pointerEvents = 'auto';
            hiddenButton.style.opacity = '1';
            hiddenButton.style.zIndex = '20';

            // Find the iframe inside
            const iframe = hiddenButton.querySelector('iframe') as HTMLIFrameElement;
            if (iframe) {
              iframe.style.pointerEvents = 'auto';

              // Get the center position
              const rect = hiddenButton.getBoundingClientRect();
              const centerX = rect.left + rect.width / 2;
              const centerY = rect.top + rect.height / 2;

              // Try clicking the hidden button directly
              hiddenButton.click();
              console.log('Called hiddenButton.click()');

              // Also dispatch click events
              const clickEvent = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
                buttons: 1,
                clientX: centerX,
                clientY: centerY
              });

              hiddenButton.dispatchEvent(clickEvent);
              iframe.dispatchEvent(clickEvent);

              // Restore styles after a delay
              setTimeout(() => {
                hiddenButton.style.pointerEvents = originalPointerEvents || 'none';
                hiddenButton.style.opacity = originalOpacity || '0';
                hiddenButton.style.zIndex = '1';
                if (iframe) {
                  iframe.style.pointerEvents = 'none';
                }
              }, 300);

              return;
            }
          } catch (e) {
            console.log('Error clicking hidden button:', e);
          }
        }

        // Method 2: Try to find and click the Google button div
        const googleButton = buttonContainer.querySelector('div[role="button"], div[id*="google"], div[class*="abcRioButton"], div[class*="gsi"]') as HTMLElement;
        if (googleButton) {
          console.log('Found Google button div, attempting to click');
          try {
            googleButton.style.pointerEvents = 'auto';
            googleButton.style.opacity = '1';
            googleButton.click();
            console.log('Called googleButton.click()');

            setTimeout(() => {
              googleButton.style.pointerEvents = 'none';
              googleButton.style.opacity = '0';
            }, 200);
          } catch (e) {
            console.log('Error clicking Google button:', e);
          }
          return;
        }

        console.log('Could not find clickable element, retrying...');
        if (attempt < 3) {
          tryTriggerClick(attempt + 1, 200);
        }
      }, delay);
    };

    // Start trying immediately
    tryTriggerClick(1, 0);
  }

  constructor(
    private zone: NgZone,
    private fb: UntypedFormBuilder,
    private router: Router,
    public logeventservice: LogEventService,
    private activate: ActivatedRoute,
    private service: OnboardingService,
    private navigtionService: NavigationService,
    private renderer: Renderer2, private el: ElementRef,
    private commonService: CommonService,
    private homeStateService: HomeStateService
  ) {
    this.loadRecaptchaScript();
    this.initializeRegistrationForm();
    this.loadFacebookSDK();
    // let acceptCookie = localStorage.getItem('acceptcookie');
    // if(acceptCookie === null)
    //   this.router.navigate(['/adults/help-support/cookie-policy'])
    this.activate.queryParams.subscribe((params) => {
      this.urlEmail = params["email"];
      this.urlPassword = params["pwd"];
      let res = localStorage.getItem("isloggedin");
      if (res === "T") {
        this.router.navigate(['/adults/adult-dashboard'])
      } else {
        this.enableLogin = true;
      }
      this.urlKey = params["key"];
      // Print the parameter to the console.
    });
    localStorage.setItem("remember", "T");
    localStorage.setItem("firsttime", "T");
  }

  handleCredentialResponse(response: any) {
    console.log('=== handleCredentialResponse CALLBACK TRIGGERED ===');
    console.log('Response received:', response);

    // JWT token from Google
    const idToken = response.credential;
    console.log('Google ID Token:', idToken ? 'Token present (' + idToken.substring(0, 20) + '...)' : 'No token');

    // IMPORTANT: run inside Angular zone
    this.zone.run(() => {
      // Send token to backend
      console.log('Processing Google credential in Angular zone');
      this.handleCredential(response);
      // this.authService.googleLogin(idToken)
    });
  }

  loadRecaptchaScript() {
    if (!document.getElementById('recaptcha-script')) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?render=6Lfi18QqAAAAAIBaGMBh91M3we0ZnAdU_StbpwiR';
      script.id = 'recaptcha-script'; // Set an ID for easy identification
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }

  ngOnInit() {
    // Clear owl animation session so GIF and dialogue play again after login
    sessionStorage.removeItem('owl_gif_shown');
    localStorage.removeItem('owl_gif_shown');
    localStorage.removeItem('owl_dialogue_shown');

    if (document.getElementById('password-reveal')) {
      document.getElementById('password-reveal').style.display = 'none';
    }

    setTimeout(() => {
      if (localStorage.getItem("emailCode") === "T") {
        let userid = localStorage.getItem("userIdCode");
        //   this.service.verifyUser(userid).subscribe((res) => { });
      }
    }, 4000);
    // if (!this.router.url.includes('/log-in')) {
    //   window.history.pushState('', '', '/log-in');
    // }
    this.isAdults = SharedService.ProgramId === 9;
    const lastUrl = this.navigtionService.getLastUrlVisited()
    if (lastUrl != null && lastUrl.includes('forgotpassword')) {
      this.isSignUp = false;
    }

    // If coming from logout, ensure Google buttons are cleared
    const forceReinit = sessionStorage.getItem('forceGoogleReinit') === 'true';
    if (forceReinit) {
      // Clear any existing Google button containers
      const buttonContainers = ['googleBtnSignup', 'googleBtnLogin'];
      buttonContainers.forEach(buttonId => {
        const container = document.getElementById(buttonId);
        if (container) {
          container.innerHTML = '';
        }
      });
    }
  }


  forbiddenNameValidator(
    control: AbstractControl
  ): { [key: string]: any } | null {
    const forbidden = /admin/.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  }

  PasswordValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get("ogpassword");
    const confirmPassword = control.get("confirmPassword");
    if (password.pristine || confirmPassword.pristine) return null;
    return password &&
      confirmPassword &&
      password.value != confirmPassword.value
      ? { misMatch: true }
      : null;
  }



  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  signup() {
    this.service
      .addUser({
        FName: this.registrationForm.get("fullname").value.split(" ")[0],
        Lname:
          this.registrationForm.get("fullname").value.split(" ")[1] ===
            undefined
            ? ""
            : this.registrationForm.get("fullname").value.split(" ")[1],
        Email: this.registrationForm.get("email").value,
        Pwd: this.registrationForm.get("ogpassword").value,
      })
      .subscribe(
        (res) => {
          if (res > 0) {
            this.signUser = res;
            this.email = this.registrationForm.get("email").value;
            this.password = this.registrationForm.get("ogpassword").value;
            localStorage.setItem("signUser", JSON.stringify(this.signUser));
            this.initializeRegistrationForm();
            this.content = Constant.AccountCreated;
            this.enableAlert = true;
            localStorage.setItem(
              "signupfirst",
              'T'
            );
          }
        },
        (error) => {
          console.log(error.error.Message);
          this.message = error.error.Message;
          this.content = this.message;
          this.enableAlert = true;
          this.showWarning = true;
        },
        () => {
          /*if(this.showWarning=false)
          {
            this.showMessage=true
          }*/
        }
      );
  }

  verifyCode() {
    this.service
      .verifyCode({
        Email: this.registrationForm.get("email").value,
        VCode: this.verificationCode,
      })
      .subscribe(
        (res) => {
          if (res) {
            this.codeVerified = true;
            this.initializeRegistrationForm();
            this.closeotpmodal.nativeElement.click();
            this.closemodal.nativeElement.click();
            this.isSignUp = false;
            localStorage.setItem(
              "codeVerified",
              JSON.stringify(this.codeVerified)
            );
            localStorage.setItem(
              "email",
              JSON.stringify(this.registrationForm.get("email").value)
            );
            localStorage.setItem(
              "password",
              JSON.stringify(this.registrationForm.get("ogpassword").value)
            );
            setTimeout(() => {
              this.content = "Code has been verified , Login with Your Credentials";
              this.enableAlert = true;
            }, 1000)
            localStorage.setItem(
              "signupfirst",
              'T'
            );
          }
        },
        (err) => {
          this.content = err.error["Message"];
          this.enableAlert = true;
        }
      );
  }

  sharedForum(value) {
    this.agree = value;
  }

  googleLogin(reqtype) {
    if (reqtype == "signup")
      this.logeventservice.logEvent('google_signup');
    else
      this.logeventservice.logEvent('google_login');

    this.handleGoogleSignIn();
  }

  private handleGoogleSignIn(): void {
    // Ensure Google script is loaded
    if (typeof google === 'undefined' || !google.accounts) {
      this.loadGoogleSignInScript()
        .then(() => {
          this.initializeGoogleSignIn();
        })
        .catch((error) => {
          console.error('Failed to load Google Sign-In:', error);
          this.content = "Google Sign-In is not available. Please refresh the page.";
          this.enableAlert = true;
        });
    } else {
      this.initializeGoogleSignIn();
    }
  }

  private initializeGoogleSignIn(): void {
    if (typeof google === 'undefined' || !google.accounts) {
      this.content = "Google Sign-In is not available. Please refresh the page.";
      this.enableAlert = true;
      return;
    }

    try {
      // Initialize Google Identity Services
      google.accounts.id.initialize({
        client_id: environment.googleClientId,
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true
      });

      // Prompt the user to sign in
      google.accounts.id.prompt((notification: any) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          // One Tap not available, use button flow instead
          this.showGoogleSignInButton();
        }
      });
    } catch (error) {
      console.error('Error initializing Google Sign-In:', error);
      this.showGoogleSignInButton();
    }
  }

  private showGoogleSignInButton(): void {
    if (typeof google === 'undefined' || !google.accounts) {
      this.content = "Google Sign-In is not available. Please refresh the page.";
      this.enableAlert = true;
      return;
    }

    // Create overlay for button
    const overlay = document.createElement('div');
    overlay.id = 'google-signin-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 10000;
      display: flex;
      justify-content: center;
      align-items: center;
    `;

    const container = document.createElement('div');
    container.id = 'google-signin-container';
    container.style.cssText = `
      background-color: white;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      min-width: 300px;
      text-align: center;
      position: relative;
    `;

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 28px;
      cursor: pointer;
      color: #666;
      line-height: 1;
      padding: 0;
      width: 30px;
      height: 30px;
    `;
    closeBtn.onclick = () => {
      if (document.body.contains(overlay)) {
        document.body.removeChild(overlay);
      }
    };
    container.appendChild(closeBtn);

    overlay.appendChild(container);
    document.body.appendChild(overlay);

    // Close on outside click
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        document.body.removeChild(overlay);
      }
    });

    // Render Google button
    setTimeout(() => {
      try {
        google.accounts.id.renderButton(container, {
          type: 'standard',
          theme: 'outline',
          size: 'large',
          text: 'signin_with',
          width: '250'
        });
      } catch (error) {
        console.error('Error rendering Google button:', error);
        if (document.body.contains(overlay)) {
          document.body.removeChild(overlay);
        }
        this.content = "Google Sign-In failed to initialize. Please refresh the page.";
        this.enableAlert = true;
      }
    }, 100);
  }

  private handleCredential(response: any): void {
    // Close overlay if exists

    try {
      // Decode JWT to get user information
      const payload = this.decodeJwt(response.credential);
      this.idToken = response.credential;
      this.socialFirstName = payload.given_name || '';
      this.socialLastName = payload.family_name || '';
      this.socialEmail = payload.email || '';

      if (!this.socialEmail) {
        this.content = "Unable to retrieve email from Google account. Please try again.";
        this.enableAlert = true;
        return;
      }

      // Verify with backend
      this.service.verifyGoogle({
        TokenID: this.idToken,
        FName: this.socialFirstName,
        LName: this.socialLastName,
        Email: this.socialEmail,
        VCode: "",
        Pwd: "",
      }).subscribe(
        (res) => {
          if (res) {
            this.setUpLoginConfiguration(res);
          } else {
            this.content = "Google login verification failed. Please try again.";
            this.enableAlert = true;
          }
        },
        (error) => {
          console.error('Google verification error:', error);
          this.content = error.error?.Message || error.message || "Google login verification failed. Please try again.";
          this.enableAlert = true;
        }
      );
    } catch (error) {
      console.error('Error processing Google response:', error);
      this.content = "Google login failed. Please try again.";
      this.enableAlert = true;
    }
  }

  private decodeJwt(token: string): any {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error decoding JWT:', error);
      throw error;
    }
  }

  private loadGoogleSignInScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Check if already loaded
      if (typeof google !== 'undefined' && google.accounts) {
        resolve();
        return;
      }

      // Check if script already exists
      const existingScript = document.getElementById('google-signin-script') ||
        document.querySelector('script[src*="accounts.google.com/gsi/client"]');

      if (existingScript) {
        // Wait for script to load
        let attempts = 0;
        const maxAttempts = 50;
        const checkInterval = setInterval(() => {
          attempts++;
          if (typeof google !== 'undefined' && google.accounts) {
            clearInterval(checkInterval);
            resolve();
          } else if (attempts >= maxAttempts) {
            clearInterval(checkInterval);
            reject(new Error('Google Sign-In script timeout'));
          }
        }, 100);
        return;
      }

      // Load script dynamically
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.id = 'google-signin-script';
      script.async = true;
      script.defer = true;

      script.onload = () => {
        // Wait for google object
        setTimeout(() => {
          if (typeof google !== 'undefined' && google.accounts) {
            resolve();
          } else {
            let attempts = 0;
            const maxAttempts = 20;
            const checkInterval = setInterval(() => {
              attempts++;
              if (typeof google !== 'undefined' && google.accounts) {
                clearInterval(checkInterval);
                resolve();
              } else if (attempts >= maxAttempts) {
                clearInterval(checkInterval);
                reject(new Error('Google object not available'));
              }
            }, 100);
          }
        }, 200);
      };

      script.onerror = () => {
        reject(new Error('Failed to load Google Sign-In script'));
      };

      document.head.appendChild(script);
    });
  }


  fbLogin(reqtype) {
    if (reqtype == "signup")
      this.logeventservice.logEvent('facebook_signup');
    else
      this.logeventservice.logEvent('facebook_login');

    this.handleFacebookLogin();
  }

  private handleFacebookLogin(): void {
    if (typeof FB === 'undefined') {
      console.error('Facebook SDK not loaded');
      this.content = "Facebook login is not available. Please refresh the page.";
      this.enableAlert = true;
      return;
    }

    FB.login((response: any) => {
      if (response.authResponse) {
        // User logged in successfully
        const accessToken = response.authResponse.accessToken;
        const userId = response.authResponse.userID;

        // Get user info
        FB.api('/me', { fields: 'id,name,email,first_name,last_name' }, (userInfo: any) => {
          if (userInfo && !userInfo.error) {
            this.idToken = accessToken;
            this.socialFirstName = userInfo.first_name || '';
            this.socialLastName = userInfo.last_name || '';
            this.socialEmail = userInfo.email || '';

            if (!this.socialEmail) {
              this.content = "Please ensure that you use an email based authentication with your Facebook account or try another method";
              this.enableAlert = true;
              return;
            }

            this.service
              .verifyFb({
                TokenID: this.idToken,
                FName: this.socialFirstName,
                LName: this.socialLastName,
                Email: this.socialEmail,
                VCode: "",
                Pwd: "",
              })
              .subscribe((res) => {
                if (res) {
                  this.setUpLoginConfiguration(res);
                } else {
                  this.content = "Facebook login verification failed. Please try again.";
                  this.enableAlert = true;
                }
              }, (error) => {
                console.error('Facebook verification error:', error);
                this.content = error.error?.Message || "Facebook login failed. Please try again.";
                this.enableAlert = true;
              });
          } else {
            console.error('Error fetching Facebook user info:', userInfo.error);
            this.content = "Failed to fetch Facebook user information. Please try again.";
            this.enableAlert = true;
          }
        });
      } else {
        // User cancelled login or did not fully authorize
        if (response.status !== 'unknown') {
          this.content = "Facebook login was cancelled. Please try again.";
          this.enableAlert = true;
        }
      }
    }, { scope: 'email,public_profile' });
  }

  private loadFacebookSDK(): void {
    if (document.getElementById('facebook-jssdk')) {
      return; // Script already loaded
    }

    // Initialize Facebook SDK
    (window as any).fbAsyncInit = () => {
      FB.init({
        appId: environment.facebookAppId,
        cookie: true,
        xfbml: true,
        version: 'v18.0'
      });
    };

    // Load Facebook SDK script
    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }

  emailLogin() {
    localStorage.removeItem("token");
    if (this.urlEmail) {
      this.service.verifyUser(this.urlEmail).subscribe((res) => { });
    }
    this.service.emailLogin(this.email, this.password).subscribe(
      (res) => {
        this.setUpLoginConfiguration(res);
      },
      (error) => {
        console.log(error);
      },
      () => {

      }
    );
  }

  public setUpLoginConfiguration(res: any) {
    if (res.UserId === 0) {
      this.showAlert = true;
      this.content = "You have entered wrong credentials. Please try again.";
      this.enableAlert = true;
      this.email = "";
      this.password = "";
    } else if (res.UserId === -1) {
      this.showAlert = true;
      this.content = "Email was Not Verified. Please signup again with the same Email ID to verify it.";
      this.enableAlert = true;
      this.email = "";
      this.password = "";
    } else {
      // Clear home state on successful login so API's isExpanded values are used fresh
      this.homeStateService.resetState();

      const accessObj: any = window;
      (accessObj)?.Moengage.add_unique_user_id(res.UserId.toString()).then(() => {
        (accessObj)?.Moengage.add_email(this.email);
        (accessObj)?.Moengage.add_first_name(res.Name);
      })
      this.loginResponse = res;
      if (this.loginResponse.LastVisit && new Date(this.loginResponse.LastVisit).getDate()) {
        if (new Date().getDate() > new Date(this.loginResponse.LastVisit).getDate()) {
          SharedService.FirstLoginOfTheDay = true;
        }
      }
      localStorage.setItem("socialLogin", "F");
      localStorage.setItem("isloggedin", "T");
      localStorage.setItem("guest", "F");
      localStorage.setItem("btnclick", "F");
      localStorage.setItem(
        "loginResponse",
        JSON.stringify(this.loginResponse)
      );
      localStorage.setItem("IsPartner", this.loginResponse.IsPartner);
      localStorage.setItem("PartnerOption", this.loginResponse.PartnerOption);
      sessionStorage.setItem(
        "loginResponse",
        JSON.stringify(this.loginResponse)
      );
      localStorage.setItem("token", JSON.stringify(res.access_token));
      localStorage.setItem("Subscriber", res.Subscriber);
      localStorage.setItem("SubscriberType", res.SubscriberType);
      localStorage.setItem('NoOfDPVisits', res.NoOfDPVisits?.toString() || '0');
      localStorage.setItem("userId", JSON.stringify(this.userId));
      localStorage.setItem("RoleID", JSON.stringify(res.RoleID));
      localStorage.setItem("email", res.Email);
      localStorage.setItem("pswd", this.password);
      localStorage.setItem("name", res.Name);
      localStorage.setItem("first", "T");
      localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio));
      localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo));
      localStorage.setItem("video", JSON.stringify(this.video));
      localStorage.setItem("audio", JSON.stringify(this.audio));
      localStorage.setItem("isPartner", res.IsPartner);
      localStorage.setItem("userName", JSON.stringify(res.Name));
      localStorage.setItem("userEmail", JSON.stringify(res.Email));
      localStorage.setItem("userID", res.UserId);
      this.showAlert = false;
      this.userId = res.UserId;
      this.userName = res.Name;
      localStorage.setItem(
        "loginResponse",
        JSON.stringify(this.loginResponse)
      );
      sessionStorage.setItem(
        "loginResponse",
        JSON.stringify(this.loginResponse)
      );
      localStorage.setItem("userId", JSON.stringify(this.userId));
      localStorage.setItem("token", JSON.stringify(res.access_token));
      if (this.saveUsername == true) {
        localStorage.setItem("userId", JSON.stringify(this.userId));
        localStorage.setItem("userEmail", JSON.stringify(this.email));
        localStorage.setItem("userName", JSON.stringify(this.userName));
      } else {
        sessionStorage.setItem("userId", JSON.stringify(this.userId));
        sessionStorage.setItem("userEmail", JSON.stringify(this.email));
        sessionStorage.setItem("userName", JSON.stringify(this.userName));
      }
      this.service.getuser(res.UserId).subscribe(userInfo => {
        if (userInfo) {
          localStorage.setItem("userDetails", JSON.stringify(userInfo[0]));
          // Trigger update to refresh hamburger menu and other components
          //  this.service.updateUserDetails.next(true);
          if (userInfo[0]?.SurveyDone == '0') {
            setTimeout(() => {
              this.commonService.updateSurveyData(1);
            }, 160000);
            // document.getElementById('test1').click();
          }
        }
      })
      this.freescreens();
      let roleid = JSON.parse(localStorage.getItem("RoleID"));
      let emailcode = localStorage.getItem("emailCode");
      if (localStorage.getItem("btnClickBecomePartner") == "T") {
        if (
          localStorage.getItem("SubscriberType") == "Monthly" ||
          localStorage.getItem("SubscriberType") == "Free" ||
          localStorage.getItem("SubscriberType") == "Annual"
        ) {
          localStorage.setItem("btnClickBecomePartner", "false");
          this.router.navigate(['adults/partnership-app']);
        }
      }
      let acceptCookie = localStorage.getItem("activeCode");
      let subscribePage = localStorage.getItem("subscribepage");
      let pers = localStorage.getItem("personalised");
      let persub = localStorage.getItem("personalised subscription");
      let option = localStorage.getItem("introoption");
      let giftwisdom = localStorage.getItem("giftwisdom");
      const url = SharedService.UrlToRedirect;
      if (url == '/adults/subscription/try-free-and-subscribe' && SharedService.isSubscriber()) {
        this.router.navigate(['adults/adult-dashboard']);
        return;
      }
      else if (url == '/teenagers/subscription/try-free-and-subscribe' && SharedService.isSubscriber()) {
        this.router.navigate(['/teenagers/teenager-dashboard']);
        return;
      }
      else if (url != null) {
        SharedService.UrlToRedirect = null;
        this.router.navigate([url]);
      }
      else if (option === "T") {
        localStorage.setItem("introoption", "F");
        localStorage.setItem("isloggedin", "T");
        this.router.navigate(["/intro/personalised-for-you"]);
      } else {
        if (pers && persub && pers === "T") {
          localStorage.setItem("isloggedin", "T");
          this.router.navigate(["/onboarding/payment"], {
            state: { quan: "1", plan: persub },
          });
        }

        if (acceptCookie === "T" || subscribePage === "T") {
          localStorage.setItem("isloggedin", "T");
          if (acceptCookie === "T") {
            localStorage.setItem("activeCode", "F");
          }
          if (subscribePage === "T") {
            localStorage.setItem("subscribepage", "F");
          }
          if (roleid === 8 && emailcode === "T") {
            localStorage.setItem("isloggedin", "T");
            this.router.navigate(["/onboarding/change-password"]);
          } else {
            if (localStorage.getItem("emailCode") === "T") {
              localStorage.setItem("emailCode", "F");
            }
            if (giftwisdom === 'T') {
              this.router.navigate(["/onboarding/add-to-cart"]);
            } else if (this.loginResponse.Subscriber === 0) {
              this.router.navigate(["/onboarding/add-to-cart"]);
            } else {
              this.router.navigate(["/onboarding/viewcart"])
            }
          }
        } else {
          if (roleid === 8 && emailcode === "T") {
            localStorage.setItem("isloggedin", "T");
            this.router.navigate(["/onboarding/change-password"]);
          } else {
            if (localStorage.getItem("emailCode") === "T") {
              localStorage.setItem("emailCode", "F");
            }
            localStorage.setItem("isloggedin", "T");
            if (localStorage.getItem("btnClickBecomePartner") == "T") {
              if (
                localStorage.getItem("SubscriberType") == "Monthly" ||
                localStorage.getItem("SubscriberType") == "Free" ||
                localStorage.getItem("SubscriberType") == "Annual"
              ) {
                localStorage.setItem("btnClickBecomePartner", "F");
                this.router.navigate(['adults/partnership-app']);
              }
            } else {
              if (pers && persub && pers === "T") {
                localStorage.setItem("isloggedin", "T");
                this.router.navigate(["/onboarding/viewcart"], {
                  state: { quan: "1", plan: persub },
                });
              } else {
                if (this.service.navigateToUpgradeToPremium
                ) {
                  if (localStorage.getItem("IsPartner") == "1") {
                    if (
                      localStorage.getItem("PartnerOption") ==
                      "ReceiveIncome"
                    ) {
                      this.service.navigateToUpgradeToPremium = false;
                      this.router.navigate([
                        "/adults/partnership-report/income-activity"]);
                    } else {
                      this.service.navigateToUpgradeToPremium = false;
                      this.router.navigate([
                        "/adults/partnership-report/tree-plantation-report"]);
                    }
                  } else {
                    this.service.navigateToUpgradeToPremium = false;
                    this.router.navigate(['adults/partnership-app']);
                  }
                } else {
                  localStorage.setItem("NoOfVisits", this.loginResponse?.NoOfVisits);
                  if (this.loginResponse?.NoOfVisits === 1) {
                    localStorage.setItem(
                      "signupfirst", 'F'
                    );
                    if (SharedService.ProgramId === 9) {
                      this.router.navigate(["/adults/change-topic"], {
                        state: {
                          routedFromLogin: true,
                        }
                      });
                    } else if (SharedService.ProgramId === 11) {
                      this.router.navigate(["/teenagers/change-topic"], {
                        state: {
                          routedFromLogin: true,
                        }
                      });
                    }

                  } else {
                    this.router.navigate([`${SharedService.getprogramName()}/repeat-user`]);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  routetoUrl(url) {

    // this.router.navigate(["/" + SharedService.getprogramName() + url]);
    window.open("/" + SharedService.getprogramName() + url, "_blank")
  }
  getfreeuser() {
    this.freescreens();
  }


  getrenew() {
    this.closemodal.nativeElement.click();
    localStorage.setItem("isloggedin", "T");
    this.router.navigate(["/onboarding/add-to-cart"]);
  }

  getsignuptab() {
    this.isSignUp = true;
    this.showAlert = false;
    this.passwordhide = true;
    this.confirmpasswordhide = true;
    this.hideSocial = false;
    setTimeout(() => {
      this.hideSocial = true;
    }, 1000);
    // Wait for Angular to update the DOM after tab switch
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        // Ensure Google script is loaded, then render buttons safely
        this.loadGoogleSignInScript().then(() => {
          if (typeof google !== 'undefined' && google.accounts) {
            // Initialize Google Identity Services
            google.accounts.id.initialize({
              client_id: environment.googleClientId,
              callback: (response: any) => this.handleCredentialResponse(response),
            });

            // Render Google buttons safely (will skip if already rendered)
            const forceReinit = sessionStorage.getItem('forceGoogleReinit') === 'true';
            if (forceReinit) {
              sessionStorage.removeItem('forceGoogleReinit');
            }
            this.renderGoogleButtonSafely('googleBtnSignup', forceReinit);
            this.renderGoogleButtonSafely('googleBtnLogin', forceReinit);
          }
        }).catch((error) => {
          console.error('Failed to load Google Sign-In:', error);
        });
      }, 100);
    });
  }

  freescreens() {
    this.service.freeScreens().subscribe((res) => {
      this.x = [];
      let result = res.map((a) => a.FreeScrs);
      let arr;
      result = result.forEach((element) => {
        if (element && element.length !== 0) {
          this.x.push(element.map((a) => Number.parseInt(a.ScrNo)));
          arr = Array.prototype.concat.apply([], this.x);
        }
      });
      // this.closemodal.nativeElement.click()
      localStorage.setItem("freeScreens", JSON.stringify(arr));
      // localStorage.setItem("isloggedin", 'T')
      // this.router.navigate(['/adults/adult-dashboard'])
    });
  }



  signInWithApple(reqtype) {
    if (reqtype == "signup")
      this.logeventservice.logEvent('apple_signup');
    else
      this.logeventservice.logEvent('apple_login');
    const CLIENT_ID = "humanwisdom.web.service";
    localStorage.setItem('appleLogin', 'T');
    let REDIRECT_API_URL = environment.appleSignInAPIAdults;
    if (!SharedService.isAdultProgram()) {
      REDIRECT_API_URL = environment.appleSignInAPITeenagers;
    }
    window.open(
      `https://appleid.apple.com/auth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
        REDIRECT_API_URL
      )}&response_type=code id_token&scope=name email&response_mode=form_post`, "_self"
    );
    // this.pollPopup(popup);
  }
  private pollPopup(popup): void {
    const intervalId = setInterval(() => {
      if (popup && !popup.closed) {
        try {
          if (localStorage.getItem('isloggedin') == 'T') {
            setTimeout(() => {
              this.handleAppleLoginResponse();
            }, 200);
          }
        } catch (e) {
          clearInterval(intervalId);
          console.error('Unable to access popup location:', e);
        }
      } else {
        clearInterval(intervalId);
        const token = localStorage.getItem('token');
        if (token != null || token != '') {
          popup.close();
        }
        console.log('Popup was closed');

      }
    }, 1000); // Poll every 500 milliseconds
  }

  handleAppleLoginResponse() {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate([SharedService.getDashboardUrls()]);
    }
  }


  routedashboard() {
    this.logeventservice.logEvent('Guest_Login');
    localStorage.setItem('btnclick', 'F')
    this.router.navigateByUrl(SharedService.getDashboardUrls());
  }

  navigate(url) {
    this.router.navigate([url]);
  }

  getAlertcloseEvent(event) {
    if (this.content == Constant.AccountCreated) {
      this.emailLogin();
    }
    this.content = '';
    this.enableAlert = false;
  }

  routeForgotPassword() {
    if (this.isAdults) {
      this.router.navigate(['/adults/onboarding/forgotpassword'])
    } else {
      this.router.navigate(['/teenagers/onboarding/forgotpassword'])
    }
  }

  getLoginTab() {
    this.isSignUp = false;
    this.passwordhide = true;
    this.confirmpasswordhide = true;
    this.hideSocial = false;
    setTimeout(() => {
      this.hideSocial = true;
    }, 500);
    // Wait for Angular to update the DOM after tab switch
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        // Ensure Google script is loaded, then render buttons safely
        this.loadGoogleSignInScript().then(() => {
          if (typeof google !== 'undefined' && google.accounts) {
            // Initialize Google Identity Services
            google.accounts.id.initialize({
              client_id: environment.googleClientId,
              callback: (response: any) => this.handleCredentialResponse(response),
            });

            // Render Google buttons safely (will skip if already rendered)
            const forceReinit = sessionStorage.getItem('forceGoogleReinit') === 'true';
            if (forceReinit) {
              sessionStorage.removeItem('forceGoogleReinit');
            }
            this.renderGoogleButtonSafely('googleBtnSignup', forceReinit);
            this.renderGoogleButtonSafely('googleBtnLogin', forceReinit);
          }
        }).catch((error) => {
          console.error('Failed to load Google Sign-In:', error);
        });
      }, 100);
    });
  }

  initializeRegistrationForm() {
    this.registrationForm = this.fb.group(
      {
        fullname: ["", [Validators.required, Validators.minLength(6)]],
        email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        ogpassword: ["", [Validators.required, Validators.minLength(6), this.passwordStrengthValidator]],
        confirmPassword: ["", [Validators.required, Validators.minLength(6), this.passwordStrengthValidator]],
        privacychk: [false, [Validators.requiredTrue]],
      }
      ,
      { validator: this.PasswordValidator }
    );
    this.token = undefined;
  }

  passwordStrengthValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (!value) {
      return null;
    }
    const hasLetter = /[a-zA-Z]/.test(value);
    const hasDigit = /\d/.test(value);
    return !hasLetter || !hasDigit ? { passwordStrength: true } : null;
  }

  hideFunction(type) {
    if (type === 'password') {
      this.passwordhide = !this.passwordhide;
    } else {
      this.confirmpasswordhide = !this.confirmpasswordhide;
    }
  }

  onKeyPress($event) {
    const revealDiv = this.el.nativeElement.querySelector('#password-reveal');
    if (revealDiv) {
      this.renderer.setStyle(revealDiv, 'display', 'none');
    }

  }

  public verifyCaptcha(): void {
    const self = this;  // Store the component's 'this' context
    grecaptcha.ready(function () {
      grecaptcha.execute('6Lfi18QqAAAAAIBaGMBh91M3we0ZnAdU_StbpwiR', { action: 'submit' }).then(function (token) {
        self.service.verifyCaptcha(token).subscribe(res => {
          if (res) {
            self.signup();
          } else {
            alert("Unexpected error ocurred ,try again after refreshing the page.");
          }
        });
      });
    });
  }


  loginWithInstagram() {
    const url = `${this.authUrl}?client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=user_profile,user_media&response_type=code`;
    const popup = window.open(
      url,
      'instagram-login-popup',
      'width=500,height=600',
    );
    setTimeout(() => {
      this.pollPopup(popup)
    }, 1000);
  }

  // private pollPopup(popup) {
  //   const intervalId = setInterval(() => {
  //     if (popup && !popup.closed) {
  //       try {

  //       } catch (e) {
  //         clearInterval(intervalId);
  //         // Handle cross-origin access errors
  //         console.error('Unable to access popup location:', e);
  //       }
  //     } else {
  //       clearInterval(intervalId);
  //       console.log('Popup was closed');
  //       this.service.verifyInstagramLogin(localStorage.getItem('instaToken')).subscribe((res) => {
  //         if (res) {
  //           this.loginResponse = res;
  //           this.service.getuser(res.UserId).subscribe(userInfo => {
  //             if (userInfo) {
  //               localStorage.setItem("userDetails", JSON.stringify(userInfo[0]));
  //             }
  //           })
  //           localStorage.setItem("guest", "F");
  //           localStorage.setItem("remember", "T");
  //           localStorage.setItem("socialLogin", "T");
  //           localStorage.setItem(
  //             "mediaAudio",
  //             JSON.stringify(this.mediaAudio)
  //           );
  //           localStorage.setItem(
  //             "mediaVideo",
  //             JSON.stringify(this.mediaVideo)
  //           );
  //           localStorage.setItem("video", JSON.stringify(this.video));
  //           localStorage.setItem("audio", JSON.stringify(this.audio));
  //           localStorage.setItem("btnclick", "F");
  //           localStorage.setItem(
  //             "loginResponse",
  //             JSON.stringify(this.loginResponse)
  //           );
  //           sessionStorage.setItem(
  //             "loginResponse",
  //             JSON.stringify(this.loginResponse)
  //           );
  //           localStorage.setItem(
  //             "token",
  //             JSON.stringify(this.loginResponse.access_token)
  //           );
  //           localStorage.setItem("Subscriber", this.loginResponse.Subscriber);
  //           localStorage.setItem("userId", JSON.stringify(this.userId));
  //           localStorage.setItem("email", this.socialEmail);
  //           localStorage.setItem("FnName", this.socialFirstName);
  //           localStorage.setItem("RoleID", JSON.stringify(res.RoleID));
  //           localStorage.setItem("LName", this.socialLastName);
  //           localStorage.setItem("pswd", "");
  //           localStorage.setItem("name", this.loginResponse.Name);
  //           localStorage.setItem("first", "T");
  //           if (parseInt(this.loginResponse.UserId) == 0) {
  //             this.showAlert = true;
  //             this.content = "You have entered wrong credentials. Please try again.";
  //             this.enableAlert = true;
  //             this.email = "";
  //             this.password = "";
  //           }
  //           else {
  //             this.showAlert = false;
  //             this.userId = this.loginResponse.UserId;
  //             this.userName = this.loginResponse.Name;
  //             localStorage.setItem(
  //               "loginResponse",
  //               JSON.stringify(this.loginResponse)
  //             );
  //             sessionStorage.setItem(
  //               "loginResponse",
  //               JSON.stringify(this.loginResponse)
  //             );
  //             localStorage.setItem("userId", JSON.stringify(this.userId));
  //             localStorage.setItem(
  //               "token",
  //               JSON.stringify(this.loginResponse.access_token)
  //             );
  //             if (this.saveUsername == true) {
  //               localStorage.setItem("userId", JSON.stringify(this.userId));
  //               localStorage.setItem(
  //                 "userEmail",
  //                 JSON.stringify(this.socialEmail)
  //               );
  //               localStorage.setItem(
  //                 "userName",
  //                 JSON.stringify(this.userName)
  //               );
  //             } else {
  //               sessionStorage.setItem("userId", JSON.stringify(this.userId));
  //               sessionStorage.setItem(
  //                 "userEmail",
  //                 JSON.stringify(this.socialEmail)
  //               );
  //               sessionStorage.setItem(
  //                 "userName",
  //                 JSON.stringify(this.userName)
  //               );
  //             }
  //             this.service.getuser(res.UserId).subscribe(userInfo => {
  //               if (userInfo) {
  //                 localStorage.setItem("userDetails", JSON.stringify(userInfo[0]));
  //               }
  //             })
  //             let pers = localStorage.getItem("personalised");
  //             let persub = localStorage.getItem("personalised subscription");
  //             let acceptCookie = localStorage.getItem("activeCode");
  //             let subscribePage = localStorage.getItem("subscribepage");
  //             let option = localStorage.getItem("introoption");
  //             let giftwisdom = localStorage.getItem("giftwisdom");
  //             const url = SharedService.UrlToRedirect;
  //             if (url != null) {
  //               SharedService.UrlToRedirect = null;
  //               this.router.navigate([url]);
  //             }
  //             else if (option === "T") {
  //               localStorage.setItem("introoption", "F");
  //               localStorage.setItem("isloggedin", "T");
  //               this.router.navigate(["/intro/personalised-for-you"]);
  //             }
  //             else {
  //               if (acceptCookie === "T" || subscribePage === "T") {
  //                 localStorage.setItem("isloggedin", "T");
  //                 if (acceptCookie === "T") {
  //                   localStorage.setItem("activeCode", "F");
  //                 }
  //                 if (subscribePage === "T") {
  //                   localStorage.setItem("subscribepage", "F");
  //                 }
  //                 if (giftwisdom === 'T') {
  //                   this.router.navigate(["/onboarding/add-to-cart"]);
  //                 } else if (this.loginResponse.Subscriber === 0) {
  //                   this.router.navigate(["/onboarding/add-to-cart"]);
  //                 } else {
  //                   this.router.navigate(["/onboarding/viewcart"])
  //                 }
  //               }
  //               else {
  //                 localStorage.setItem("isloggedin", "T");
  //                 if (pers && persub && pers === "T") {
  //                   this.router.navigate(["/onboarding/viewcart"], {
  //                     state: { quan: "1", plan: persub },
  //                   });
  //                 }
  //                 else {
  //                   localStorage.setItem("NoOfVisits", this.loginResponse?.NoOfVisits);
  //                   if (this.loginResponse?.NoOfVisits === 1) {
  //                     localStorage.setItem(
  //                       "signupfirst", 'F'
  //                     );
  //                     /* if(SharedService.ProgramId === 9) {
  //                       this.router.navigate(["/adults/change-topic"], {
  //                         state: {
  //                           routedFromLogin: true,
  //                         }
  //                       });
  //                     }else if(SharedService.ProgramId === 11) {
  //                       // window.location.href = environment.clientUrl+"/teenagers/change-topic";
  //                       this.router.navigate(["/teenagers/change-topic"], {
  //                         state: {
  //                           routedFromLogin: true,
  //                         }
  //                       });
  //                     } */
  //                     this.router.navigate(["/" + SharedService.getprogramName() + "/change-topic"], {
  //                       state: {
  //                         routedFromLogin: true,
  //                       }
  //                     });

  //                   }
  //                   else {
  //                     /* if(SharedService.ProgramId === 9) {
  //                       this.router.navigate(["/adults/repeat-user"]);
  //                     }else if(SharedService.ProgramId === 11) {
  //                    //   window.location.href = environment.clientUrl+"/teenagers/change-topic";
  //                       this.router.navigate(["/teenagers/change-topic"], {
  //                         state: {
  //                           routedFromLogin: true,
  //                         }
  //                       });
  //                     }
  //                     } */

  //                     this.router.navigate(["/" + SharedService.getprogramName() + "/repeat-user"]);
  //                   }
  //                 }
  //               }

  //               /* if(this.urlEmail)
  //               {
  //                 this.service.verifyUser(this.userId)
  //                 .subscribe(res=>{

  //                 })
  //               }*/
  //             }
  //           }
  //         }
  //       });

  //     }
  //   }, 1000); // Poll every 500 milliseconds
  // }

  resolved(captchaResponse: string) {
    this.service.verifyCaptcha(captchaResponse).subscribe(res => {
      if (res) {
        this.isValidCaptach = res.valid;
      }
    })
  }

}
