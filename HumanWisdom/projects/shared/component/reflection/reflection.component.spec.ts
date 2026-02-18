// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { ReflectionComponent } from './reflection.component';
// import { Router } from '@angular/router';
// import { AdultsService } from '../../../adults/src/app/adults/adults.service';
// import { SharedService } from '../../services/shared.service';
// import { ProgramType } from '../../models/program-model';
// import { of, throwError } from 'rxjs';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { HttpClientTestingModule } from '@angular/common/http/testing';

// describe('ReflectionComponent', () => {
//     let component: ReflectionComponent;
//     let fixture: ComponentFixture<ReflectionComponent>;
//     let mockRouter: jasmine.SpyObj<Router>;
//     let mockAdultsService: jasmine.SpyObj<AdultsService>;
//     let mockSharedService: jasmine.SpyObj<SharedService>;

//     const mockReflectionList = {
//         ListOfReflection: [
//             { ReflectionId: '1', Que: 'What did you learn today?', Response: 'I learned about mindfulness' },
//             { ReflectionId: '2', Que: 'How do you feel?', Response: 'null' },
//             { ReflectionId: '3', Que: 'What are you grateful for?', Response: 'Family and friends' }
//         ]
//     };

//     beforeEach(waitForAsync(() => {
//         // Create spy objects
//         mockRouter = jasmine.createSpyObj('Router', ['navigate'], { url: '/adults/path/s12345' });
//         mockAdultsService = jasmine.createSpyObj('AdultsService', ['screenProgress', 'addUserRefPost']);
//         mockSharedService = jasmine.createSpyObj('SharedService', ['init']); // Dummy method to satisfy Jasmine

//         // Setup default return values
//         mockAdultsService.screenProgress.and.returnValue(of('75'));
//         mockAdultsService.addUserRefPost.and.returnValue(of(true));

//         // Mock ProgramId using Object.defineProperty
//         Object.defineProperty(SharedService, 'ProgramId', {
//             get: () => ProgramType.Adults,
//             configurable: true
//         });

//         TestBed.configureTestingModule({
//             declarations: [ReflectionComponent],
//             imports: [HttpClientTestingModule],
//             providers: [
//                 { provide: Router, useValue: mockRouter },
//                 { provide: AdultsService, useValue: mockAdultsService },
//                 { provide: SharedService, useValue: mockSharedService }
//             ],
//             schemas: [NO_ERRORS_SCHEMA]
//         }).compileComponents();
//     }));

//     beforeEach(() => {
//         localStorage.clear();
//         localStorage.setItem('userId', JSON.stringify('user123'));
//         localStorage.setItem('guest', 'F');
//         localStorage.setItem('Subscriber', '1');
//         localStorage.setItem('progressbarvalue', '50');
//         localStorage.setItem('qrList', JSON.stringify(mockReflectionList));

//         fixture = TestBed.createComponent(ReflectionComponent);
//         component = fixture.componentInstance;

//         // Set default input values
//         component.reflection = 'What did you learn today?';
//         component.hint = 'Think about your experiences';
//         component.rid = '1';
//         component.toc = 'wisdom/toc';
//     });

//     afterEach(() => {
//         localStorage.clear();
//         if (fixture) {
//             fixture.destroy();
//         }
//     });

//     describe('Component Initialization', () => {
//         it('should create the component', () => {
//             expect(component).toBeTruthy();
//         });

//         it('should initialize with default values', () => {
//             expect(component.reflectionData).toBe('');
//             expect(component.showheaderbar).toBe(true);
//             expect(component.enableReadonly).toBe(false);
//             expect(component.textDisabled).toBe(false);
//             expect(component.placeholder).toBe('Write your answer here');
//             expect(component.showHintModal).toBe(false);
//             expect(component.isShowBulb).toBe(false);
//         });

//         it('should set isAdults to true for Adults program', () => {
//             SharedService.ProgramId = ProgramType.Adults;
//             fixture = TestBed.createComponent(ReflectionComponent);
//             component = fixture.componentInstance;

//             expect(component.isAdults).toBe(true);
//         });

//         it('should set isAdults to false for Teenagers program', () => {
//             SharedService.ProgramId = ProgramType.Teenagers;
//             fixture = TestBed.createComponent(ReflectionComponent);
//             component = fixture.componentInstance;

//             expect(component.isAdults).toBe(false);
//         });

//         it('should get userId from localStorage', () => {
//             expect(component.userId).toBe('user123');
//         });

//         it('should parse qrList from localStorage', () => {
//             expect(component.qrList).toEqual(mockReflectionList);
//         });
//     });

//     describe('ngOnInit', () => {
//         it('should call isIOSApp', () => {
//             component.ngOnInit();

//             expect(SharedService.isIOSApp).toHaveBeenCalled();
//         });

//         it('should set isIos based on platform', () => {
//             (SharedService.isIOSApp as jasmine.Spy).and.returnValue(true);
//             component.ngOnInit();

//             expect(component.isIos).toBe(true);
//         });

//         it('should extract screen number from router URL', () => {
//             component.ngOnInit();

//             expect(component.scrNumber).toBe('2345');
//         });

//         it('should call getProgress with screen number', () => {
//             spyOn(component, 'getProgress');
//             component.ngOnInit();

//             expect(component.getProgress).toHaveBeenCalledWith('2345');
//         });

//         it('should set guest to true when localStorage guest is T', () => {
//             localStorage.setItem('guest', 'T');
//             component.ngOnInit();

//             expect(component.guest).toBe(true);
//         });

//         it('should set guest to false when localStorage guest is F', () => {
//             localStorage.setItem('guest', 'F');
//             component.ngOnInit();

//             expect(component.guest).toBe(false);
//         });

//         it('should set Subscriber to true when localStorage Subscriber is 1', () => {
//             localStorage.setItem('Subscriber', '1');
//             component.ngOnInit();

//             expect(component.Subscriber).toBe(true);
//         });

//         it('should set Subscriber to false when localStorage Subscriber is 0', () => {
//             localStorage.setItem('Subscriber', '0');
//             component.ngOnInit();

//             expect(component.Subscriber).toBe(false);
//         });

//         it('should disable text and change placeholder for guest users', () => {
//             localStorage.setItem('guest', 'T');
//             component.ngOnInit();

//             expect(component.textDisabled).toBe(true);
//             expect(component.placeholder).toBe('Start your free trial to access your online journal');
//         });

//         it('should disable text and change placeholder for non-subscribers', () => {
//             localStorage.setItem('guest', 'F');
//             localStorage.setItem('Subscriber', '0');
//             component.ngOnInit();

//             expect(component.textDisabled).toBe(true);
//             expect(component.placeholder).toBe('Start your free trial to access your online journal');
//         });

//         it('should set programName to empty string for teenagers', () => {
//             SharedService.ProgramId = ProgramType.Teenagers;
//             fixture = TestBed.createComponent(ReflectionComponent);
//             component = fixture.componentInstance;
//             component.rid = '1';
//             localStorage.setItem('qrList', JSON.stringify(mockReflectionList));

//             component.ngOnInit();

//             expect(component.programName).toBe('');
//         });

//         it('should set programName to adults for Adults program', () => {
//             SharedService.ProgramId = ProgramType.Adults;
//             component.ngOnInit();

//             expect(component.programName).toBe('adults');
//         });

//         it('should call findReflection', () => {
//             spyOn(component, 'findReflection');
//             component.ngOnInit();

//             expect(component.findReflection).toHaveBeenCalled();
//         });

//         it('should show hint bulb when hint is provided', () => {
//             component.hint = 'This is a helpful hint';
//             component.ngOnInit();

//             expect(component.isShowBulb).toBe(true);
//         });

//         it('should not show hint bulb when hint is empty', () => {
//             component.hint = '';
//             component.ngOnInit();

//             expect(component.isShowBulb).toBe(false);
//         });

//         it('should not show hint bulb when hint is only whitespace', () => {
//             component.hint = '   ';
//             component.ngOnInit();

//             expect(component.isShowBulb).toBe(false);
//         });
//     });

//     describe('findReflection', () => {
//         it('should find and set reflection data by ReflectionId', () => {
//             component.rid = '1';
//             component.reflectionA = mockReflectionList.ListOfReflection;

//             component.findReflection();

//             expect(component.reflection).toBe('What did you learn today?');
//             expect(component.reflectionData).toBe('I learned about mindfulness');
//         });

//         it('should handle null response', () => {
//             component.rid = '2';
//             component.reflectionA = mockReflectionList.ListOfReflection;

//             component.findReflection();

//             expect(component.reflection).toBe('How do you feel?');
//             expect(component.reflectionData).toBe('');
//         });

//         it('should not update reflection if ReflectionId not found', () => {
//             component.rid = '999';
//             component.reflection = 'Original question';
//             component.reflectionData = 'Original data';
//             component.reflectionA = mockReflectionList.ListOfReflection;

//             component.findReflection();

//             expect(component.reflection).toBe('Original question');
//             expect(component.reflectionData).toBe('Original data');
//         });
//     });

//     describe('sharedForum', () => {
//         it('should set shared property', () => {
//             const testValue = { test: 'data' };
//             component.sharedForum(testValue);

//             expect(component.shared).toEqual(testValue);
//         });
//     });

//     describe('confirmShare', () => {
//         beforeEach(() => {
//             component.reflectionData = 'My reflection response';
//             component.rid = '1';
//             component.userId = 'user123';
//             component.reflectionA = [...mockReflectionList.ListOfReflection];
//         });

//         it('should call addUserRefPost with correct parameters', () => {
//             component.confirmShare();

//             const expectedObj = {
//                 'Post': 'My reflection response',
//                 'ReflectionID': '1',
//                 'UserId': 'user123'
//             };
//             expect(mockAdultsService.addUserRefPost).toHaveBeenCalledWith(expectedObj);
//         });

//         it('should update reflection response in reflectionA array', (done) => {
//             component.confirmShare();

//             setTimeout(() => {
//                 expect(component.reflectionA[0].Response).toBe('My reflection response');
//                 done();
//             }, 100);
//         });

//         it('should update qrList in localStorage', (done) => {
//             component.confirmShare();

//             setTimeout(() => {
//                 const storedList = JSON.parse(localStorage.getItem('qrList'));
//                 expect(storedList.ListOfReflection[0].Response).toBe('My reflection response');
//                 done();
//             }, 100);
//         });

//         it('should set confirmed to true', (done) => {
//             component.confirmShare();

//             setTimeout(() => {
//                 expect(component.confirmed).toBe(true);
//                 done();
//             }, 100);
//         });

//         it('should enable readonly mode', (done) => {
//             component.confirmShare();

//             setTimeout(() => {
//                 expect(component.enableReadonly).toBe(true);
//                 done();
//             }, 100);
//         });

//         it('should handle service error gracefully', () => {
//             mockAdultsService.addUserRefPost.and.returnValue(throwError({ error: 'Server error' }));

//             expect(() => component.confirmShare()).not.toThrow();
//         });
//     });

//     describe('next', () => {
//         beforeEach(() => {
//             component.reflectionA = [...mockReflectionList.ListOfReflection];
//             component.rid = '2';
//         });

//         it('should emit reflectionData when data is provided', () => {
//             spyOn(component.sendResponse, 'emit');
//             component.reflectionData = 'My new response';

//             component.next();

//             expect(component.sendResponse.emit).toHaveBeenCalledWith('My new response');
//         });

//         it('should emit null when no data is provided', () => {
//             spyOn(component.sendResponse, 'emit');
//             component.reflectionData = '';

//             component.next();

//             expect(component.sendResponse.emit).toHaveBeenCalledWith(null);
//         });

//         it('should update reflection response in array', () => {
//             component.reflectionData = 'Updated response';

//             component.next();

//             expect(component.reflectionA[1].Response).toBe('Updated response');
//         });

//         it('should update qrList in localStorage', () => {
//             component.reflectionData = 'Updated response';

//             component.next();

//             const storedList = JSON.parse(localStorage.getItem('qrList'));
//             expect(storedList.ListOfReflection[1].Response).toBe('Updated response');
//         });

//         it('should not update array when reflectionData is empty', () => {
//             const originalResponse = component.reflectionA[1].Response;
//             component.reflectionData = '';

//             component.next();

//             expect(component.reflectionA[1].Response).toBe(originalResponse);
//         });
//     });

//     describe('previous', () => {
//         it('should emit goPrevious event', () => {
//             spyOn(component.goPrevious, 'emit');

//             component.previous();

//             expect(component.goPrevious.emit).toHaveBeenCalled();
//         });
//     });

//     describe('getProgress', () => {
//         it('should call screenProgress service', () => {
//             component.getProgress('12345');

//             expect(mockAdultsService.screenProgress).toHaveBeenCalledWith('12345');
//         });

//         it('should update progress value', (done) => {
//             mockAdultsService.screenProgress.and.returnValue(of('85'));

//             component.getProgress('12345');

//             setTimeout(() => {
//                 expect(component.progress).toBe(85);
//                 done();
//             }, 100);
//         });

//         it('should save progress to localStorage', (done) => {
//             mockAdultsService.screenProgress.and.returnValue(of('90'));

//             component.getProgress('12345');

//             setTimeout(() => {
//                 expect(localStorage.getItem('progressbarvalue')).toBe('90');
//                 done();
//             }, 100);
//         });

//         it('should set showheaderbar to true after delay', (done) => {
//             component.showheaderbar = false;

//             component.getProgress('12345');

//             setTimeout(() => {
//                 expect(component.showheaderbar).toBe(true);
//                 done();
//             }, 150);
//         });

//         it('should handle service error', () => {
//             mockAdultsService.screenProgress.and.returnValue(throwError({ error: 'Error' }));

//             expect(() => component.getProgress('12345')).not.toThrow();
//         });
//     });

//     describe('getProgramTypeName', () => {
//         it('should return Adults for ProgramType.Adults', () => {
//             const result = component.getProgramTypeName(ProgramType.Adults);

//             expect(result).toBe('Adults');
//         });

//         it('should return Teenagers for ProgramType.Teenagers', () => {
//             const result = component.getProgramTypeName(ProgramType.Teenagers);

//             expect(result).toBe('Teenagers');
//         });

//         it('should return undefined for invalid program type', () => {
//             const result = component.getProgramTypeName(999);

//             expect(result).toBeUndefined();
//         });
//     });

//     describe('goToToc', () => {
//         it('should navigate to table of contents for adults', () => {
//             component.programName = 'adults';
//             component.toc = 'wisdom/toc';

//             component.goToToc();

//             expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/wisdom/toc']);
//         });

//         it('should navigate to table of contents for teenagers', () => {
//             component.programName = '';
//             component.toc = 'curated-for-you';

//             component.goToToc();

//             expect(mockRouter.navigate).toHaveBeenCalledWith(['/curated-for-you']);
//         });
//     });

//     describe('goToDash', () => {
//         it('should navigate to adult dashboard for Adults program', () => {
//             SharedService.ProgramId = ProgramType.Adults;

//             component.goToDash();

//             expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/adult-dashboard']);
//         });

//         it('should navigate to teenager dashboard for Teenagers program', () => {
//             SharedService.ProgramId = ProgramType.Teenagers;
//             component.programName = 'teenagers';

//             component.goToDash();

//             expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenager-dashboard']);
//         });

//         it('should default to adult dashboard for unknown program', () => {
//             SharedService.ProgramId = 999;

//             component.goToDash();

//             expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/adult-dashboard']);
//         });
//     });

//     describe('goToForum', () => {
//         it('should navigate to forum with program name', () => {
//             (SharedService.getprogramName as jasmine.Spy).and.returnValue('adults');

//             component.goToForum();

//             expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/forum']);
//         });

//         it('should navigate to teenagers forum', () => {
//             (SharedService.getprogramName as jasmine.Spy).and.returnValue('teenagers');

//             component.goToForum();

//             expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/forum']);
//         });
//     });

//     describe('Hint Modal Functionality', () => {
//         it('should show hint modal', () => {
//             component.showHint();

//             expect(component.showHintModal).toBe(true);
//         });

//         it('should close hint modal', () => {
//             component.showHintModal = true;

//             component.closeHint();

//             expect(component.showHintModal).toBe(false);
//         });

//         it('should calculate reflection question offset when showing hint', (done) => {
//             // Create mock DOM elements
//             const mockReflectionQtn = document.createElement('div');
//             mockReflectionQtn.className = 'v3_reflection_qtn';
//             const mockHeader = document.createElement('div');
//             mockHeader.className = 'reflection-hint-header';

//             spyOn(document, 'querySelector').and.callFake((selector: string) => {
//                 if (selector === '.v3_reflection_qtn') return mockReflectionQtn;
//                 if (selector === '.reflection-hint-header') return mockHeader;
//                 return null;
//             });

//             component.showHint();

//             setTimeout(() => {
//                 expect(component.showHintModal).toBe(true);
//                 done();
//             }, 10);
//         });
//     });

//     describe('Input Properties', () => {
//         it('should accept reflection input', () => {
//             component.reflection = 'Test reflection question';

//             expect(component.reflection).toBe('Test reflection question');
//         });

//         it('should accept hint input', () => {
//             component.hint = 'Test hint';

//             expect(component.hint).toBe('Test hint');
//         });

//         it('should accept bg input', () => {
//             component.bg = 'background-color';

//             expect(component.bg).toBe('background-color');
//         });

//         it('should accept bg_tn input', () => {
//             component.bg_tn = 'teenager-background';

//             expect(component.bg_tn).toBe('teenager-background');
//         });

//         it('should accept bg_cft input', () => {
//             component.bg_cft = 'cft-background';

//             expect(component.bg_cft).toBe('cft-background');
//         });

//         it('should accept toc input', () => {
//             component.toc = 'wisdom/toc';

//             expect(component.toc).toBe('wisdom/toc');
//         });

//         it('should accept rid input', () => {
//             component.rid = '123';

//             expect(component.rid).toBe('123');
//         });

//         it('should handle reflectionResponse setter', () => {
//             // The setter currently does nothing, but we test it doesn't throw
//             expect(() => {
//                 component.reflectionResponse = 'test data';
//             }).not.toThrow();
//         });
//     });

//     describe('Edge Cases', () => {
//         it('should handle missing qrList in localStorage', () => {
//             localStorage.removeItem('qrList');

//             expect(() => {
//                 fixture = TestBed.createComponent(ReflectionComponent);
//                 component = fixture.componentInstance;
//             }).not.toThrow();
//         });

//         it('should handle missing userId in localStorage', () => {
//             localStorage.removeItem('userId');
//             fixture = TestBed.createComponent(ReflectionComponent);
//             component = fixture.componentInstance;

//             expect(component.userId).toBeNull();
//         });

//         it('should handle missing progressbarvalue in localStorage', () => {
//             localStorage.removeItem('progressbarvalue');
//             fixture = TestBed.createComponent(ReflectionComponent);
//             component = fixture.componentInstance;

//             expect(component.progress).toBe(0);
//         });

//         it('should handle empty reflectionA array', () => {
//             component.reflectionA = [];
//             component.rid = '1';

//             expect(() => component.findReflection()).not.toThrow();
//         });

//         it('should handle undefined reflectionA', () => {
//             component.reflectionA = undefined;
//             component.rid = '1';

//             expect(() => component.next()).not.toThrow();
//         });

//         it('should handle null router URL', () => {
//             Object.defineProperty(mockRouter, 'url', { value: null });

//             component.ngOnInit();

//             expect(component.scrNumber).toBeUndefined();
//         });

//         it('should handle URL without slash', () => {
//             Object.defineProperty(mockRouter, 'url', { value: 'noSlashUrl' });

//             component.ngOnInit();

//             expect(component.scrNumber).toBeDefined();
//         });
//     });

//     describe('Output Events', () => {
//         it('should have sendResponse output', () => {
//             expect(component.sendResponse).toBeDefined();
//         });

//         it('should have goPrevious output', () => {
//             expect(component.goPrevious).toBeDefined();
//         });
//     });
// });
