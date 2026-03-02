// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { WisdomScorePage } from './wisdom-score.page';
// import { Router } from '@angular/router';
// import { Location } from '@angular/common';
// import { SharedService } from '../../../services/shared.service';
// import { ProgramType } from '../../../models/program-model';
// import { TeenagersService } from '../../../../teenagers/src/app/teenagers/teenagers.service';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

// describe('WisdomScorePage', () => {
//   let component: WisdomScorePage;
//   let fixture: ComponentFixture<WisdomScorePage>;
//   let mockRouter: jasmine.SpyObj<Router>;
//   let mockLocation: jasmine.SpyObj<Location>;
//   let mockTeenagersService: jasmine.SpyObj<TeenagersService>;
//   let mockProgramId: any;
//   let mockRouterUrl: string;

//   beforeEach(async () => {
//     mockRouterUrl = '/adults/wisdom-survey/wisdom-score';
//     mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl'], {
//       url: mockRouterUrl
//     });
//     mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));
//     Object.defineProperty(mockRouter, 'url', {
//       get: () => mockRouterUrl,
//       configurable: true
//     });

//     mockLocation = jasmine.createSpyObj('Location', ['back']);
//     mockTeenagersService = jasmine.createSpyObj('TeenagersService', []);

//     mockProgramId = ProgramType.Adults;
//     Object.defineProperty(SharedService, 'ProgramId', {
//       get: () => mockProgramId,
//       configurable: true
//     });
//     spyOn(SharedService, 'getprogramName').and.returnValue('adults');
//     spyOn(SharedService, 'getDashboardUrls').and.returnValue('/adults/home' as any);
//     spyOn(SharedService, 'getDataFromLocalStorage').and.returnValue(null);

//     await TestBed.configureTestingModule({
//       declarations: [WisdomScorePage],
//       schemas: [NO_ERRORS_SCHEMA],
//       providers: [
//         { provide: Router, useValue: mockRouter },
//         { provide: Location, useValue: mockLocation },
//         { provide: TeenagersService, useValue: mockTeenagersService }
//       ]
//     }).compileComponents();

//     fixture = TestBed.createComponent(WisdomScorePage);
//     component = fixture.componentInstance;
//   });

//   afterEach(() => {
//     localStorage.clear();
//     sessionStorage.clear();
//   });

//   describe('Component Initialization', () => {
//     it('should create the component', () => {
//       expect(component).toBeTruthy();
//     });

//     it('should set isAdults to true when ProgramId is Adults', () => {
//       mockProgramId = ProgramType.Adults;
//       Object.defineProperty(SharedService, 'ProgramId', {
//         get: () => mockProgramId,
//         configurable: true
//       });
//       fixture = TestBed.createComponent(WisdomScorePage);
//       component = fixture.componentInstance;
//       expect(component.isAdults).toBe(true);
//     });

//     it('should set isAdults to false when ProgramId is Teenagers', () => {
//       mockProgramId = ProgramType.Teenagers;
//       Object.defineProperty(SharedService, 'ProgramId', {
//         get: () => mockProgramId,
//         configurable: true
//       });
//       fixture = TestBed.createComponent(WisdomScorePage);
//       component = fixture.componentInstance;
//       expect(component.isAdults).toBe(false);
//     });
//   });

//   describe('ngOnInit', () => {
//     it('should set isSubscriber to true when Subscriber is 1', () => {
//       localStorage.setItem('Subscriber', '1');
//       component.ngOnInit();
//       expect(component.isSubscriber).toBe(true);
//     });

//     it('should set isSubscriber to false when Subscriber is not 1', () => {
//       localStorage.setItem('Subscriber', '0');
//       component.ngOnInit();
//       expect(component.isSubscriber).toBe(false);
//     });

//     it('should get userId from localStorage when saveUsername is true', () => {
//       localStorage.setItem('saveUsername', 'true');
//       localStorage.setItem('userId', JSON.stringify(123));
//       component.ngOnInit();
//       expect(component.userId).toBe(123);
//     });

//     it('should get userId from sessionStorage when saveUsername is false', () => {
//       localStorage.setItem('saveUsername', 'false');
//       sessionStorage.setItem('userId', JSON.stringify(456));
//       component.ngOnInit();
//       expect(component.userId).toBe(456);
//     });

//     it('should set isUseCloseButton from window.history.state', () => {
//       const mockState = { isUseCloseButton: true };
//       Object.defineProperty(window, 'history', {
//         writable: true,
//         configurable: true,
//         value: {
//           state: mockState
//         }
//       });
//       component.ngOnInit();
//       expect(component.isUseCloseButton).toBe(true);
//     });

//     it('should parse wisdomRecomm from localStorage', () => {
//       const mockRecomm = [{ id: 1, title: 'Test' }];
//       localStorage.setItem('wisdomRecomm', JSON.stringify(mockRecomm));
//       component.ngOnInit();
//       expect(component.wisdomRecomm).toEqual(mockRecomm);
//     });

//     it('should set empty array when wisdomRecomm is not in localStorage', () => {
//       localStorage.removeItem('wisdomRecomm');
//       component.ngOnInit();
//       expect(component.wisdomRecomm).toEqual([]);
//     });

//     it('should process wisdomRecomm and set cleanPath for BLOG module', () => {
//       const mockRecomm = [{
//         module: 'BLOG',
//         path: '/adults/blog/article',
//         image_path: '/image.jpg',
//         title: 'Test Blog'
//       }];
//       localStorage.setItem('wisdomRecomm', JSON.stringify(mockRecomm));
//       component.ngOnInit();
//       expect(component.wisdomRecomm[0].cleanPath).toBe('/adults/blog/article');
//     });

//     it('should process wisdomRecomm and set cleanPath for non-BLOG module', () => {
//       const mockRecomm = [{
//         module: 'VIDEO',
//         path: '/adults/video/test/123',
//         image_path: '/image.jpg',
//         title: 'Test Video'
//       }];
//       localStorage.setItem('wisdomRecomm', JSON.stringify(mockRecomm));
//       component.ngOnInit();
//       expect(component.wisdomRecomm[0].cleanPath).toBe('/adults/video/test');
//     });

//     it('should set justSignedUp to true for new users', () => {
//       localStorage.setItem('token', JSON.stringify('test-token'));
//       localStorage.setItem('guest', 'F');
//       localStorage.setItem('loginResponse', JSON.stringify({ NoOfVisits: 1 }));
//       component.ngOnInit();
//       expect(component.justSignedUp).toBe(true);
//     });

//     it('should set justSignedUp to true when isFromSignupFlow is T', () => {
//       localStorage.setItem('token', JSON.stringify('test-token'));
//       localStorage.setItem('guest', 'F');
//       localStorage.setItem('isFromSignupFlow', 'T');
//       localStorage.setItem('loginResponse', JSON.stringify({ NoOfVisits: 5 }));
//       component.ngOnInit();
//       expect(component.justSignedUp).toBe(true);
//     });
//   });

//   describe('navigateToRecommendation', () => {
//     beforeEach(() => {
//       component.isSubscriber = false;
//     });

//     it('should navigate to free trial when not subscriber and module is not BLOG', () => {
//       const item = {
//         module: 'VIDEO',
//         cleanPath: '/adults/video/test'
//       };
//       component.navigateToRecommendation(item);
//       expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/subscription/start-your-free-trial');
//     });

//     it('should navigate to recommendation when subscriber', () => {
//       component.isSubscriber = true;
//       const item = {
//         module: 'VIDEO',
//         cleanPath: '/adults/video/test',
//         title: 'Test Video'
//       };
//       component.navigateToRecommendation(item);
//       expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/video/test'], {
//         state: { title: 'Test Video' }
//       });
//     });

//     it('should navigate to blog using navigateByUrl when module is BLOG', () => {
//       component.isSubscriber = false;
//       const item = {
//         module: 'BLOG',
//         cleanPath: '/adults/blog/article',
//         title: 'Test Blog'
//       };
//       component.navigateToRecommendation(item);
//       expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/adults/blog/article', {
//         state: { title: 'Test Blog' }
//       });
//     });

//     it('should use teenagers route for free trial when on teenagers route', () => {
//       mockRouterUrl = '/teenagers/wisdom-survey/wisdom-score';
//       Object.defineProperty(mockRouter, 'url', {
//         get: () => mockRouterUrl,
//         configurable: true
//       });
//       const item = {
//         module: 'VIDEO',
//         cleanPath: '/teenagers/video/test'
//       };
//       component.navigateToRecommendation(item);
//       expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/teenagers/subscription/start-your-free-trial');
//     });
//   });

//   describe('receiveBookmark', () => {
//     it('should set bookmark to 1 when e is true', () => {
//       component.receiveBookmark(true);
//       expect(component.bookmark).toBe(1);
//     });

//     it('should set bookmark to 0 when e is false', () => {
//       component.bookmark = 1;
//       component.receiveBookmark(false);
//       expect(component.bookmark).toBe(0);
//     });
//   });

//   describe('submitProgress', () => {
//     it('should navigate to discovering-wisdom s27032', () => {
//       (SharedService.getprogramName as jasmine.Spy).and.returnValue('adults');
//       component.submitProgress();
//       expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/adults/discovering-wisdom/s27032');
//     });
//   });

//   describe('prev', () => {
//     it('should navigate to discovering-wisdom s27020', () => {
//       (SharedService.getprogramName as jasmine.Spy).and.returnValue('adults');
//       component.prev();
//       expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/adults/discovering-wisdom/s27020');
//     });
//   });

//   describe('parseint', () => {
//     it('should parse string to integer', () => {
//       expect(component.parseint('123')).toBe(123);
//       expect(component.parseint('45.67')).toBe(45);
//     });
//   });

//   describe('routeToDashboard', () => {
//     it('should set isFromSignupFlow to F and navigate to dashboard', () => {
//       (SharedService.getDashboardUrls as jasmine.Spy).and.returnValue('/adults/home' as any);
//       component.routeToDashboard();
//       expect(localStorage.getItem('isFromSignupFlow')).toBe('F');
//       expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/adults/home');
//     });
//   });

//   describe('formatTitle', () => {
//     it('should format percent as string with %', () => {
//       expect(component.formatTitle(50)).toBe('50%');
//       expect(component.formatTitle(100)).toBe('100%');
//       expect(component.formatTitle(0)).toBe('0%');
//     });
//   });
// });

