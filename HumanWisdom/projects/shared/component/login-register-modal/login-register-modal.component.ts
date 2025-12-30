import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, EventEmitter, Output, Input, HostListener, NgZone } from "@angular/core";
import { UntypedFormBuilder, Validators, AbstractControl, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { LogEventService } from "../../services/log-event.service";
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { Router, RouterModule } from "@angular/router";
import { OnboardingService } from "../../services/onboarding.service";
import { SharedService } from "../../services/shared.service";
import { Constant } from "../../services/constant";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared.module";
import { environment } from "../../../../projects/environments/environment";
import { ProgramType } from '../../../shared/models/program-model';

declare var google: any;
declare var FB: any;
@Component({
  selector: 'Login-register-modal',
  templateUrl: './login-register-modal.component.html',
  styleUrls: ['./login-register-modal.component.scss'],
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PlatformModule,
    SharedModule],
  standalone: true,
  providers: [],
})
export class LoginRegisterModalComponent implements OnInit, AfterViewInit {
  @ViewChild('actclosemodal') actclosemodal: ElementRef;
  @ViewChild('redeemsubscription') redeemsubscription: ElementRef;
  @ViewChild('activemodal') activemodal: ElementRef;

  @Output() closeModal = new EventEmitter<boolean>();
  @Input() isAdvertpage = false;

  login = 'Login';
  public isGuestuser = false
  public isFirsttime = false
  public isSubscriber = false
  public isLoggedIn = false
  public firstpage = true;
  public secondpage = false;
  public thirdpage = false;
  public fourthpage = false;
  public fifthpage = false;
  public sixthpage = false;
  public loginemail: any = '';
  public userId = 100
  public email: any = '';
  public verificationCode: any;
  public loginpassword: any = '';
  public user: any
  public idToken: any
  public socialFirstName: any
  public socialLastName: any
  public socialEmail: any
  public yearormonth = ''
  public modaldata = {}
  public activationCode: any = ''
  public loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  mediaAudio = "https://d1tenzemoxuh75.cloudfront.net"
  mediaVideo = "https://d1tenzemoxuh75.cloudfront.net"
  public video = 3
  public audio = 4
  public saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  public userName: any
  public showWarning = false;
  enableIcon = false;
  enableAlert = false;
  content = '';
  enablecancel = false;
  public registrationForm: any;
  enabledModal = false;
  passwordhide: boolean = true;
  confirmpasswordhide: boolean = true;
  alertenabled: boolean = false;
    isAdults: boolean = true;


  constructor(
    public platform: Platform,
    private router: Router,
    private services: OnboardingService,
    public fb: UntypedFormBuilder,
    public service: AdultsService,
    public logeventservice: LogEventService,
    private zone: NgZone
  ) {
    setTimeout(() => {  
      this.enableIcon = true;
      // Render Google buttons when icons are enabled
      this.renderGoogleButtonsWhenReady();
    }, 4000);
    if (SharedService.ProgramId == ProgramType.Adults) {
            this.isAdults = true;
          } else {
            this.isAdults = false;
          }

    this.registrationForm = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(3)]],
      lname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3)]],
    }, { validator: this.PasswordValidator })
    localStorage.setItem('personalised', 'T');
    let guest = localStorage.getItem('guest');
    let firsttime = localStorage.getItem('first');
    if (firsttime === 'T' || !firsttime) {
      this.isFirsttime = true
    }
    if (guest === 'T') {
      this.isGuestuser = true
    }
    let sub: any = localStorage.getItem('Subscriber');
    let login: any = localStorage.getItem("isloggedin");
    if (sub && sub === '1') {
      this.isSubscriber = true;
    } else {
      this.isSubscriber = false;
    }
    if (login && login === 'T') {
      this.isLoggedIn = true;
      this.login = 'Logout';
    } else {
      this.isLoggedIn = false;
    }
    let namedata = localStorage.getItem('name')?.split(' ')
    this.modaldata['email'] = localStorage.getItem('email');
    if (namedata?.length > 0) {
      this.modaldata['firstname'] = namedata[0];
      this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
    }
    // Load Facebook SDK
    this.loadFacebookSDK();
  }

  @HostListener('document:mousedown', ['$event'])
  onClick(event: MouseEvent): void {
    if (!this.enableAlert && !this.alertenabled && !this.activemodal.nativeElement.contains(event.target)) {
      this.actclosemodal?.nativeElement?.click();
      this.closeModal.emit(false);
    }
  }

  loginGoogle(reqtype = '') {
    if (reqtype == "signup")
      this.logeventservice.logEvent('google_signup');
    else
      this.logeventservice.logEvent('google_login');
    
    // Determine which button to trigger based on current page
    const buttonId = this.firstpage ? 'googleBtnSignup' : 'googleBtnLogin';
    this.triggerGoogleSignIn(buttonId);
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
          googleButton.style.borderStyle = 'none';
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
            googleButton.style.borderWidth = '0';
            googleButton.style.borderStyle = 'none';
            googleButton.style.outline = 'none';
            googleButton.style.boxShadow = 'none';
          });
          
          googleButton.addEventListener('mouseenter', () => {
            googleButton.style.border = 'none';
            googleButton.style.borderWidth = '0';
            googleButton.style.borderStyle = 'none';
            googleButton.style.outline = 'none';
            googleButton.style.boxShadow = 'none';
          });
          
          googleButton.addEventListener('mouseleave', () => {
            googleButton.style.border = 'none';
            googleButton.style.borderWidth = '0';
            googleButton.style.borderStyle = 'none';
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
            div.style.borderStyle = 'none';
            div.style.outline = 'none';
            div.style.boxShadow = 'none';
          });
          
          // Style the wrapper button - remove all borders
          const wrapper = document.getElementById(buttonId + 'Wrapper');
          if (wrapper) {
            wrapper.style.border = 'none';
            wrapper.style.borderWidth = '0';
            wrapper.style.borderStyle = 'none';
            wrapper.style.outline = 'none';
            wrapper.style.boxShadow = 'none';
            
            // Also remove border on wrapper focus/hover
            wrapper.addEventListener('focus', () => {
              wrapper.style.border = 'none';
              wrapper.style.borderWidth = '0';
              wrapper.style.borderStyle = 'none';
              wrapper.style.outline = 'none';
              wrapper.style.boxShadow = 'none';
            });
          }
          
          // Also apply border removal to the iframe if it exists (Google button is rendered in iframe)
          const iframe = buttonContainer.querySelector('iframe') as HTMLIFrameElement;
          if (iframe) {
            iframe.style.border = 'none';
            iframe.style.borderWidth = '0';
            iframe.style.borderStyle = 'none';
            iframe.style.outline = 'none';
            
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
                  
                  // Also remove borders from all elements in iframe
                  const allElements = iframeDoc.querySelectorAll('*');
                  allElements.forEach((el: HTMLElement) => {
                    el.style.border = 'none';
                    el.style.borderWidth = '0';
                    el.style.borderStyle = 'none';
                    el.style.outline = 'none';
                  });
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
        // Wait for script to load - but resolve even if timeout (script is loaded)
        let attempts = 0;
        const maxAttempts = 100; // Increased timeout
        const checkInterval = setInterval(() => {
          attempts++;
          if (typeof google !== 'undefined' && google.accounts) {
            clearInterval(checkInterval);
            resolve();
          } else if (attempts >= maxAttempts) {
            clearInterval(checkInterval);
            // Script exists, resolve anyway - google object might be available later
            console.warn('Google script exists but object not ready yet - resolving anyway');
            resolve();
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
            const maxAttempts = 50; // Increased from 20
            const checkInterval = setInterval(() => {
              attempts++;
              if (typeof google !== 'undefined' && google.accounts) {
                clearInterval(checkInterval);
                resolve();
              } else if (attempts >= maxAttempts) {
                clearInterval(checkInterval);
                // Resolve anyway - script is loaded, object might be available later
                console.warn('Google object not immediately available after script load - resolving anyway');
                resolve();
              }
            }, 100);
          }
        }, 500); // Increased initial delay
      };
      
      script.onerror = () => {
        reject(new Error('Failed to load Google Sign-In script'));
      };
      
      document.head.appendChild(script);
    });
  }

  handleCredentialResponse(response: any) {
    console.log('=== handleCredentialResponse CALLBACK TRIGGERED ===');
    console.log('Response received:', response);
    
    // JWT token from Google
    const idToken = response.credential;
    console.log('Google ID Token:', idToken ? 'Token present (' + idToken.substring(0, 20) + '...)' : 'No token');

    // IMPORTANT: run inside Angular zone
    this.zone.run(() => {
      // Process the credential
      console.log('Processing Google credential in Angular zone');
      this.processGoogleCredential(idToken);
    });
  }

  private processGoogleCredential(idToken: string): void {
    try {
      // Decode JWT to get user information
      const payload = this.decodeJwt(idToken);
      this.idToken = idToken;
      this.socialFirstName = payload.given_name || '';
      this.socialLastName = payload.family_name || '';
      this.socialEmail = payload.email || '';

      if (!this.socialEmail) {
        this.content = "Unable to retrieve email from Google account. Please try again.";
        this.enableAlert = true;
        return;
      }

      // Verify with backend (same logic as before)
      this.services
        .verifyGoogle({
          TokenID: this.idToken,
          FName: this.socialFirstName,
          LName: this.socialLastName,
          Email: this.socialEmail,
          VCode: "",
          Pwd: "",
        })
        .subscribe((res) => {
          if (res) {
            this.setUpGoogleLoginConfiguration(res);
          } else {
            this.content = "Google login verification failed. Please try again.";
            this.enableAlert = true;
          }
        }, (error) => {
          console.error('Google verification error:', error);
          this.content = error.error?.Message || "Google login failed. Please try again.";
          this.enableAlert = true;
        });
    } catch (error) {
      console.error('Error processing Google credential:', error);
      this.content = "Google login failed. Please try again.";
      this.enableAlert = true;
    }
  }

  private setUpGoogleLoginConfiguration(res: any): void {
    if (res.UserId === 0) {
      this.content = "You have entered wrong credentials. Please try again.";
      this.enableAlert = true;
      this.email = "";
    } else {
      this.firstpage = false;
      this.fifthpage = false;
      this.thirdpage = true;
      this.enabledModal = false;
      this.loginResponse = res;
      this.actclosemodal.nativeElement.click();
      this.services.getuser(res.UserId).subscribe(userInfo => {
        if (userInfo) {
          localStorage.setItem("userDetails", JSON.stringify(userInfo[0]));
        }
      });
      
      localStorage.setItem("guest", "F");
      localStorage.setItem("remember", "T");
      localStorage.setItem("socialLogin", "T");
      localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio));
      localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo));
      localStorage.setItem("video", JSON.stringify(this.video));
      localStorage.setItem("audio", JSON.stringify(this.audio));
      localStorage.setItem("btnclick", "F");
      localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse));
      sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse));
      localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token));
      localStorage.setItem("Subscriber", this.loginResponse.Subscriber);
      localStorage.setItem("userId", JSON.stringify(this.userId));
      localStorage.setItem("email", this.socialEmail);
      localStorage.setItem("FnName", this.socialFirstName);
      localStorage.setItem("RoleID", JSON.stringify(res.RoleID));
      localStorage.setItem("LName", this.socialLastName);
      localStorage.setItem("pswd", "");
      localStorage.setItem("name", this.loginResponse.Name);
      localStorage.setItem("first", "T");
      
      this.userId = this.loginResponse.UserId;
      this.userName = this.loginResponse.Name;
      localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse));
      sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse));
      localStorage.setItem("userId", JSON.stringify(this.userId));
      localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token));
      
      if (this.saveUsername == true) {
        localStorage.setItem("userId", JSON.stringify(this.userId));
        localStorage.setItem("userEmail", JSON.stringify(this.socialEmail));
        localStorage.setItem("userName", JSON.stringify(this.userName));
      } else {
        sessionStorage.setItem("userId", JSON.stringify(this.userId));
        sessionStorage.setItem("userEmail", JSON.stringify(this.socialEmail));
        sessionStorage.setItem("userName", JSON.stringify(this.userName));
      }
      
      this.services.getuser(res.UserId).subscribe(userInfo => {
        if (userInfo) {
          localStorage.setItem("userDetails", JSON.stringify(userInfo[0]));
        }
      });
      
      let pers = localStorage.getItem("personalised");
      let persub = localStorage.getItem("personalised subscription");
      let acceptCookie = localStorage.getItem("activeCode");
      let subscribePage = localStorage.getItem("subscribepage");
      let option = localStorage.getItem("introoption");
      let giftwisdom = localStorage.getItem("giftwisdom");
      const url = SharedService.UrlToRedirect;
      
      if (url != null) {
        SharedService.UrlToRedirect = null;
        this.router.navigate([url]);
      } else if (option === "T") {
        localStorage.setItem("introoption", "F");
        localStorage.setItem("isloggedin", "T");
        this.router.navigate(["/intro/personalised-for-you"]);
      } else {
        if (acceptCookie === "T" || subscribePage === "T") {
          localStorage.setItem("isloggedin", "T");
          if (acceptCookie === "T") {
            localStorage.setItem("activeCode", "F");
          }
          if (subscribePage === "T") {
            localStorage.setItem("subscribepage", "F");
          }
          if (giftwisdom === 'T') {
            this.router.navigate(["/onboarding/add-to-cart"]);
          } else if (this.loginResponse.Subscriber === 0) {
            this.router.navigate(["/onboarding/add-to-cart"]);
          } else {
            this.router.navigate(["/onboarding/viewcart"]);
          }
        } else {
          localStorage.setItem("isloggedin", "T");
          if (pers && persub && pers === "T") {
            this.router.navigate(["/onboarding/viewcart"], {
              state: { quan: "1", plan: persub },
            });
          } else {
            localStorage.setItem("NoOfVisits", this.loginResponse?.NoOfVisits);
            if (this.loginResponse?.NoOfVisits === 1) {
              localStorage.setItem("signupfirst", 'F');
              this.router.navigate(["/" + SharedService.getprogramName() + "/change-topic"], {
                state: {
                  routedFromLogin: true,
                }
              });
            } else {
              this.router.navigate(["/" + SharedService.getprogramName() + "/repeat-user"]);
            }
          }
        }
      }
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

  // closeFn(event) {
  //   if (this.enabledModal && this.activemodal.nativeElement.contains(event.target)) {
  //     setTimeout(() => {
  //       this.closeModal.emit(false);
  //     })
  //   }
  // }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem("userId"))
  }

  ngAfterViewInit(): void {
    this.already(this.isLoggedIn ? 'login' : 'register');
    
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
        
        // Render Google buttons safely (force re-render if coming from logout)
        this.renderGoogleButtonSafely('googleBtnSignup', forceReinit);
        this.renderGoogleButtonSafely('googleBtnLogin', forceReinit);
      }
    }).catch((error) => {
      console.error('Failed to load Google Sign-In:', error);
    });
  }

  get fname() {
    return this.registrationForm.get('fname')
  }
  get lname() {
    return this.registrationForm.get('lname')
  }
  get emailvalid() {
    return this.registrationForm.get('email')
  }
  get passwordvalid() {
    return this.registrationForm.get('password')
  }
  get confirmpasswordvalid() {
    return this.registrationForm.get('confirmPassword')
  }

  already(value) {
    if (!this.enabledModal) {
      this.redeemsubscription.nativeElement.click();
      setTimeout(() => {
        this.enabledModal = true;
      }, 1000)
    }
    if (value === 'login') {
      this.firstpage = false;
      this.fourthpage = false;
      this.thirdpage = false;
      this.passwordhide = true;
      this.confirmpasswordhide = true;
      this.fifthpage = true;
      
      // Re-render Google buttons when switching to login page
      setTimeout(() => {
        this.renderGoogleButtonsWhenReady();
      }, 300);
    } else if (value === 'register') {
      this.firstpage = true;
      this.passwordhide = true;
      this.confirmpasswordhide = true;
      this.secondpage = false;
      this.fifthpage = false;
      
      // Re-render Google buttons when switching to register page
      setTimeout(() => {
        this.renderGoogleButtonsWhenReady();
      }, 300);
    }
  }

  private renderGoogleButtonsWhenReady(): void {
    // Wait for Angular to update the DOM after page switch
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

            // Render Google buttons safely (force re-render when switching pages)
            this.renderGoogleButtonSafely('googleBtnSignup', true);
            this.renderGoogleButtonSafely('googleBtnLogin', true);
          }
        }).catch((error) => {
          console.error('Failed to load Google Sign-In:', error);
        });
      }, 100);
    });
  }

  PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')
    const confirmPassword = control.get('confirmPassword')
    if (password.pristine || confirmPassword.pristine)
      return null
    return password && confirmPassword && password.value != confirmPassword.value ?
      { 'misMatch': true } : null

  }

  signup() {
    this.services.addUser({
      "FName": this.registrationForm.get('fname').value,
      "Lname": this.registrationForm.get('lname').value,
      "Email": this.registrationForm.get('email').value,
      "Pwd": this.registrationForm.get('password').value,
    })
      .subscribe(res => {
        if (res > 0) {
          this.userId = res
          this.email = this.registrationForm.get('email').value
          if (this.router.url.includes('/redeem-subscription') || this.router.url.includes('/redeem-gift-card')) {
            localStorage.setItem("email", this.registrationForm.get('email').value)
            localStorage.setItem("pswd", this.registrationForm.get('password').value)
            this.emaillogin('second')
          } else {
            this.firstpage = false;
            this.secondpage = true;
          }
        }
      },
        error => {
          this.content = error.error['Message'];
          this.enableAlert = true;
          this.alertenabled = true;
          // window.alert(error.error.Message)
        },
        () => {
        }
      )
  }

  resendotp() {
    this.service.resendotp(this.userId)
      .subscribe(() => {
      }, (err) => {
        console.log(err);
      })
    this.firstpage = false;
    this.secondpage = true;
  }

  verifyCode() {
    this.services.verifyCode({
      "Email": this.registrationForm.get('email').value,
      "VCode": this.verificationCode
    })
      .subscribe(res => {

        if (res > 0) {
          localStorage.setItem("email", this.registrationForm.get('email').value)
          localStorage.setItem("pswd", this.registrationForm.get('password').value)
          this.emaillogin('second')
        }
      }, (err) => {
        this.content = err.error['Message'];
        this.enableAlert = true;
        this.alertenabled = true;
        // window.alert(err.error['Message'])
      })
  }

  emaillogin(val = '') {
    let email = val === '' || val === 'second' ? localStorage.getItem("email") : this.loginemail;
    let password = val === '' || val === 'second' ? localStorage.getItem("pswd") : this.loginpassword;
    this.services.emailLogin(email, password)
      .subscribe(
        res => {
          if (res?.Errors) {
            this.content = res?.Errors;
            this.enableAlert = true;
            this.alertenabled = true;
          } else {
            if (val === 'act') {
              localStorage.setItem("isloggedin", 'T')
              localStorage.setItem("remember", 'T')
              this.fifthpage = false;
            } else if (val === 'second') {
              localStorage.setItem("isloggedin", 'T')
              localStorage.setItem("remember", 'T')
              this.secondpage = false;
            }
            // this.firstpage = false
            // this.fifthpage = false
            // this.thirdpage = true
            this.enabledModal = false
            localStorage.setItem("isloggedin", 'T')
            this.isLoggedIn = true
            this.loginResponse = res

            localStorage.setItem('guest', 'F');
            localStorage.setItem("remember", 'T')
            localStorage.setItem('socialLogin', 'T');
            localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio))
            localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo))
            localStorage.setItem("video", JSON.stringify(this.video))
            localStorage.setItem("audio", JSON.stringify(this.audio))
            localStorage.setItem('btnclick', 'F')
            localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
            sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
            localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token))
            localStorage.setItem("Subscriber", this.loginResponse.Subscriber)
            localStorage.setItem("userId", JSON.stringify(this.userId))
            localStorage.setItem("email", email)
            localStorage.setItem("FnName", this.loginResponse.Name.split(' ')[0])
            localStorage.setItem("RoleID", JSON.stringify(res.RoleID))
            localStorage.setItem("LName", this.socialLastName)
            localStorage.setItem("pswd", '')
            localStorage.setItem("name", this.loginResponse.Name)
            localStorage.setItem("first", 'T')
            let namedata = localStorage.getItem('name').split(' ')
            this.modaldata['email'] = localStorage.getItem('email');
            this.modaldata['firstname'] = namedata[0];
            this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
            if (parseInt(this.loginResponse.UserId) == 0) {

            }
            else {
              this.userId = this.loginResponse.UserId
              this.userName = this.loginResponse.Name
              localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
              sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
              localStorage.setItem("userId", JSON.stringify(this.userId))
              localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token))
              if (this.saveUsername == true) {
                localStorage.setItem("userId", JSON.stringify(this.userId))
                localStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
                localStorage.setItem("userName", JSON.stringify(this.userName))
              }
              else {
                sessionStorage.setItem("userId", JSON.stringify(this.userId))
                sessionStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
                sessionStorage.setItem("userName", JSON.stringify(this.userName))
              }
              let acceptCookie = localStorage.getItem('activeCode');
              let subscribePage = localStorage.getItem('subscribepage');
              if (acceptCookie === 'T' || subscribePage === 'T') {
                localStorage.setItem("isloggedin", 'T')
                if (acceptCookie === 'T') {
                  localStorage.setItem("activeCode", 'F')
                }
                if (subscribePage === 'T') {
                  localStorage.setItem("subscribepage", 'F')
                }
              } else {
                localStorage.setItem("isloggedin", 'T')
              }
            }
            this.actclosemodal?.nativeElement?.click();
            this.closeModal.emit(false);
            if (this.isAdvertpage) {
              if (SharedService.getDataFromLocalStorage(Constant.HwpSubscriptionPlan) == Constant.AnnualPlan ||
                SharedService.getDataFromLocalStorage(Constant.HwpSubscriptionPlan) == Constant.MonthlyPlan
              ) {
                this.router.navigateByUrl('/adults/subscription/proceed-to-payment');;
              } else {
                this.router.navigate(['/adults/redeem-subscription']);
              }
            }
          }
        },
        error => { console.log(error) },
        () => {
        }
      )
  }

  // googleLogin(d = '') {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  //   this.authService.authState.subscribe((user) => {
  //     this.user = user;
  //     this.idToken = user.idToken
  //     this.socialFirstName = user.firstName
  //     this.socialLastName = user.lastName
  //     this.socialEmail = user.email

  //     this.services.verifyGoogle({
  //       "TokenID": this.idToken,
  //       "FName": this.socialFirstName,
  //       "LName": this.socialLastName,
  //       "Email": this.socialEmail,
  //       "VCode": "",
  //       "Pwd": ""
  //     })
  //       .subscribe(res => {

  //         if (res) {
  //           this.firstpage = false
  //           this.fifthpage = false
  //           this.thirdpage = true
  //           this.enabledModal = false
  //           this.loginResponse = res
  //           localStorage.setItem('guest', 'F');
  //           localStorage.setItem("remember", 'T')
  //           localStorage.setItem('socialLogin', 'T');
  //           localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio))
  //           localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo))
  //           localStorage.setItem("video", JSON.stringify(this.video))
  //           localStorage.setItem("audio", JSON.stringify(this.audio))
  //           localStorage.setItem('btnclick', 'F')
  //           localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //           sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //           localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token))
  //           localStorage.setItem("Subscriber", this.loginResponse.Subscriber)
  //           localStorage.setItem("userId", JSON.stringify(this.userId))
  //           localStorage.setItem("email", this.socialEmail)
  //           localStorage.setItem("FnName", this.socialFirstName)
  //           localStorage.setItem("RoleID", JSON.stringify(res.RoleID))
  //           localStorage.setItem("LName", this.socialLastName)
  //           localStorage.setItem("pswd", '')
  //           localStorage.setItem("name", this.loginResponse.Name)
  //           localStorage.setItem("first", 'T')
  //           let namedata = localStorage.getItem('name').split(' ')
  //           this.modaldata['email'] = localStorage.getItem('email');
  //           this.modaldata['firstname'] = namedata[0];
  //           this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
  //           if (parseInt(this.loginResponse.UserId) == 0) {

  //           }
  //           else {
  //             this.userId = this.loginResponse.UserId
  //             this.userName = this.loginResponse.Name
  //             localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //             sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //             localStorage.setItem("userId", JSON.stringify(this.userId))
  //             localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token))
  //             if (this.saveUsername == true) {
  //               localStorage.setItem("userId", JSON.stringify(this.userId))
  //               localStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
  //               localStorage.setItem("userName", JSON.stringify(this.userName))
  //             }
  //             else {
  //               sessionStorage.setItem("userId", JSON.stringify(this.userId))
  //               sessionStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
  //               sessionStorage.setItem("userName", JSON.stringify(this.userName))
  //             }
  //             let acceptCookie = localStorage.getItem('activeCode');
  //             let subscribePage = localStorage.getItem('subscribepage');
  //             if (acceptCookie === 'T' || subscribePage === 'T') {
  //               localStorage.setItem("isloggedin", 'T')
  //               if (acceptCookie === 'T') {
  //                 localStorage.setItem("activeCode", 'F')
  //               }
  //               if (subscribePage === 'T') {
  //                 localStorage.setItem("subscribepage", 'F')
  //               }
  //             } else {
  //               localStorage.setItem("isloggedin", 'T')
  //             }
  //           }
  //           this.actclosemodal.nativeElement.click();
  //           this.closeModal.emit(false);
  //           if (this.isAdvertpage) {
  //             if (SharedService.getDataFromLocalStorage(Constant.HwpSubscriptionPlan) == Constant.AnnualPlan ||
  //               SharedService.getDataFromLocalStorage(Constant.HwpSubscriptionPlan) == Constant.MonthlyPlan
  //             ) {
  //               this.router.navigateByUrl('/adults/subscription/proceed-to-payment');;
  //             } else {
  //               this.router.navigate(['/adults/redeem-subscription']);
  //             }
  //           }
  //         }
  //       })
  //   },
  //     error => console.log(error),
  //     () => {

  //     });
  // }

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

            // IMPORTANT: run inside Angular zone
            this.zone.run(() => {
              this.services
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
                    this.setUpFacebookLoginConfiguration(res);
                  } else {
                    this.content = "Facebook login verification failed. Please try again.";
                    this.enableAlert = true;
                  }
                }, (error) => {
                  console.error('Facebook verification error:', error);
                  this.content = error.error?.Message || "Facebook login failed. Please try again.";
                  this.enableAlert = true;
                });
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

  private setUpFacebookLoginConfiguration(res: any): void {
    if (res.UserId === 0) {
      this.content = "You have entered wrong credentials. Please try again.";
      this.enableAlert = true;
      this.email = "";
    } else {
      this.firstpage = false;
      this.fifthpage = false;
      this.thirdpage = true;
      this.enabledModal = false;
      this.loginResponse = res;
      this.actclosemodal.nativeElement.click();
      this.services.getuser(res.UserId).subscribe(userInfo => {
        if (userInfo) {
          localStorage.setItem("userDetails", JSON.stringify(userInfo[0]));
        }
      });
      
      localStorage.setItem("guest", "F");
      localStorage.setItem("remember", "T");
      localStorage.setItem("socialLogin", "T");
      localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio));
      localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo));
      localStorage.setItem("video", JSON.stringify(this.video));
      localStorage.setItem("audio", JSON.stringify(this.audio));
      localStorage.setItem("btnclick", "F");
      localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse));
      sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse));
      localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token));
      localStorage.setItem("Subscriber", this.loginResponse.Subscriber);
      localStorage.setItem("userId", JSON.stringify(this.userId));
      localStorage.setItem("email", this.socialEmail);
      localStorage.setItem("FnName", this.socialFirstName);
      localStorage.setItem("RoleID", JSON.stringify(res.RoleID));
      localStorage.setItem("LName", this.socialLastName);
      localStorage.setItem("pswd", "");
      localStorage.setItem("name", this.loginResponse.Name);
      localStorage.setItem("first", "T");
      
      if (parseInt(this.loginResponse.UserId) == 0) {
        this.content = "You have entered wrong credentials. Please try again.";
        this.enableAlert = true;
        this.email = "";
      } else {
        this.userId = this.loginResponse.UserId;
        this.userName = this.loginResponse.Name;
        localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse));
        sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse));
        localStorage.setItem("userId", JSON.stringify(this.userId));
        localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token));
        
        if (this.saveUsername == true) {
          localStorage.setItem("userId", JSON.stringify(this.userId));
          localStorage.setItem("userEmail", JSON.stringify(this.socialEmail));
          localStorage.setItem("userName", JSON.stringify(this.userName));
        } else {
          sessionStorage.setItem("userId", JSON.stringify(this.userId));
          sessionStorage.setItem("userEmail", JSON.stringify(this.socialEmail));
          sessionStorage.setItem("userName", JSON.stringify(this.userName));
        }
        
        this.services.getuser(res.UserId).subscribe(userInfo => {
          if (userInfo) {
            localStorage.setItem("userDetails", JSON.stringify(userInfo[0]));
          }
        });
        
        let pers = localStorage.getItem("personalised");
        let persub = localStorage.getItem("personalised subscription");
        let acceptCookie = localStorage.getItem("activeCode");
        let subscribePage = localStorage.getItem("subscribepage");
        let option = localStorage.getItem("introoption");
        let giftwisdom = localStorage.getItem("giftwisdom");
        const url = SharedService.UrlToRedirect;
        
        if (url != null) {
          SharedService.UrlToRedirect = null;
          this.router.navigate([url]);
        } else if (option === "T") {
          localStorage.setItem("introoption", "F");
          localStorage.setItem("isloggedin", "T");
          this.router.navigate(["/intro/personalised-for-you"]);
        } else {
          if (acceptCookie === "T" || subscribePage === "T") {
            localStorage.setItem("isloggedin", "T");
            if (acceptCookie === "T") {
              localStorage.setItem("activeCode", "F");
            }
            if (subscribePage === "T") {
              localStorage.setItem("subscribepage", "F");
            }
            if (giftwisdom === 'T') {
              this.router.navigate(["/onboarding/add-to-cart"]);
            } else if (this.loginResponse.Subscriber === 0) {
              this.router.navigate(["/onboarding/add-to-cart"]);
            } else {
              this.router.navigate(["/onboarding/viewcart"]);
            }
          } else {
            localStorage.setItem("isloggedin", "T");
            if (pers && persub && pers === "T") {
              this.router.navigate(["/onboarding/viewcart"], {
                state: { quan: "1", plan: persub },
              });
            } else {
              localStorage.setItem("NoOfVisits", this.loginResponse?.NoOfVisits);
              if (this.loginResponse?.NoOfVisits === 1) {
                localStorage.setItem("signupfirst", 'F');
                this.router.navigate(["/" + SharedService.getprogramName() + "/change-topic"], {
                  state: {
                    routedFromLogin: true,
                  }
                });
              } else {
                this.router.navigate(["/" + SharedService.getprogramName() + "/repeat-user"]);
              }
            }
          }
        }
      }
    }
  }

  freescreens() {
    this.service.freeScreens().subscribe((res) => {
      let x = [];
      let result = res.map((a) => a.FreeScrs);
      let arr;
      result = result.forEach((element) => {
        if (element && element.length !== 0) {
          x.push(element.map((a) => parseInt(a.ScrNo)));
          arr = Array.prototype.concat.apply([], x);
        }
      });
      localStorage.setItem("freeScreens", JSON.stringify(arr));
    });
  }


  public setUpLoginConfiguration(res: any) {
    if (res.UserId === 0) {
      this.content = "You have entered wrong credentials. Please try again.";
      this.enableAlert = true;
      this.email = "";
    } else if (res.UserId === -1) {
      this.content = "Email was Not Verified. Please signup again with the same Email ID to verify it.";
      this.enableAlert = true;
      this.email = "";
    } else {
      const accessObj: any = window;
      (accessObj)?.Moengage.add_unique_user_id(res.UserId.toString()).then(() => {
        (accessObj)?.Moengage.add_email(this.email);
        (accessObj)?.Moengage.add_first_name(res.Name);
      })
      this.loginResponse = res;

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
      localStorage.setItem("userId", JSON.stringify(this.userId));
      localStorage.setItem("RoleID", JSON.stringify(res.RoleID));
      localStorage.setItem("email", this.email);
      localStorage.setItem("name", res.Name);
      localStorage.setItem("first", "T");
      localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio));
      localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo));
      localStorage.setItem("video", JSON.stringify(this.video));
      localStorage.setItem("audio", JSON.stringify(this.audio));
      localStorage.setItem("isPartner", res.IsPartner);
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
      this.services.getuser(res.UserId).subscribe(userInfo => {
        if (userInfo) {
          localStorage.setItem("userDetails", JSON.stringify(userInfo[0]));
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
                if (this.services.navigateToUpgradeToPremium
                ) {
                  if (localStorage.getItem("IsPartner") == "1") {
                    if (
                      localStorage.getItem("PartnerOption") ==
                      "ReceiveIncome"
                    ) {
                      this.services.navigateToUpgradeToPremium = false;
                      this.router.navigate([
                        "/adults/partnership-report/income-activity"]);
                    } else {
                      this.services.navigateToUpgradeToPremium = false;
                      this.router.navigate([
                        "/adults/partnership-report/tree-plantation-report"]);
                    }
                  } else {
                    this.services.navigateToUpgradeToPremium = false;
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
                    if (this.router.url.includes('/redeem-subscription') || this.router.url.includes('/redeem-gift-card')) {
                        this.secondpage = false;
                        this.thirdpage = false;
                        this.fifthpage = false;
                        this.actclosemodal?.nativeElement?.click();
                        this.closeModal.emit(false);
                        this.enabledModal = false;
                        let type = 'adults'
                        if( SharedService.ProgramId == 11){
                          type='teenagers';
                        }
                        if(this.router.url.includes('/redeem-subscription')){
                          this.router.navigate([`/${type}/redeem-subscription`]);
                        }
                        else if(this.router.url.includes('/redeem-gift-card')){
                          this.router.navigate([`/${type}/redeem-gift-card`]);
                        } 
                    }else{
                    if (SharedService.ProgramId === 9) {
                      this.router.navigate(["/adults/repeat-user"]);
                    } else if (SharedService.ProgramId === 11) {
                      this.router.navigate(["/teenazgers/repeat-user"]);
                    }
                  }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  signInWithApple(reqtype) {
    if (reqtype == "signup")
      this.logeventservice.logEvent('apple_signup');
    else
      this.logeventservice.logEvent('apple_login');
    const CLIENT_ID = "humanwisdom.web.service";
    localStorage.setItem('appleLogin','T');
    let REDIRECT_API_URL = environment.appleSignInAPIAdults;
    if(!SharedService.isAdultProgram()){
      REDIRECT_API_URL = environment.appleSignInAPITeenagers;
    }
     window.open(
      `https://appleid.apple.com/auth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
        REDIRECT_API_URL
      )}&response_type=code id_token&scope=name email&response_mode=form_post`,"_self"
    );
   // this.pollPopup(popup);
  }

  handleAppleLoginResponse() {
    const token = localStorage.getItem('token');
    let programType='adults';
    if(SharedService.ProgramId==11){
      programType = 'teenagers';
    }
     if (token) {
      if(this.router.url.includes('/redeem-subscription')){
        this.router.navigate([`/${programType}/redeem-subscription`]);
      }
      else if(this.router.url.includes('/redeem-gift-card')){
        this.router.navigate([`/${programType}/redeem-gift-card`]);
      }else{
        this.router.navigate([SharedService.getDashboardUrls()]);
      } 
    } 
  }
  



  getAlertcloseEvent(event) {
    this.content = '';
    this.enablecancel = false;
    this.enableAlert = false;
    setTimeout(() => {
      this.alertenabled = false;
    }, 200)
    // if (event === 'ok') {
    //   this.logeventservice.logEvent('click_logout_Hamburger')
    //   if (this.platform.isBrowser) {
    //     localStorage.setItem("isloggedin", "F");
    //     localStorage.setItem("guest", "T");
    //     localStorage.setItem("navigateToUpgradeToPremium", "false");
    //     localStorage.setItem("btnClickBecomePartner", "false");
    //     this.router.navigate(["/onboarding/login"]);
    //   }
    // }
  }

  closeModalevent() {
    this.enabledModal = false;
    this.closeModal.emit(false)
  }


  hideFunction(type) {
    if (type === 'password') {
      this.passwordhide = !this.passwordhide;
    } else {
      this.confirmpasswordhide = !this.confirmpasswordhide;
    }
  }
}
