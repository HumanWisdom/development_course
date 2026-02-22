import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { of } from 'rxjs';
import { ModuleEndComponent } from './module-end.component';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../../shared/models/program-model';

describe('ModuleEndComponent', () => {
  let component: ModuleEndComponent;
  let fixture: ComponentFixture<ModuleEndComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockAdultsService: jasmine.SpyObj<AdultsService>;
  let mockNgNavigatorShareService: jasmine.SpyObj<NgNavigatorShareService>;
  let mockPlatform: jasmine.SpyObj<Platform>;

  const mockModuleData = [
    { moduleId: '29', path: '/adults/breathing', moduleName: 'Breathing', lastScreen: 's29000', firstScreen: 's29001' }
  ];

  beforeEach(async () => {
    const mockDiv = document.createElement('div');
    mockDiv.id = 'myDiv';
    mockDiv.innerHTML = '<span>Certificate</span>';
    document.body.appendChild(mockDiv);

    mockRouter = jasmine.createSpyObj('Router', ['navigate'], {
      url: '/adults/breathing/s29000'
    });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockAdultsService = jasmine.createSpyObj<AdultsService>('AdultsService', ['getPoints', 'getModules', 'clickModule']);
    mockAdultsService.getPoints.and.returnValue(
      of({
        ModUserScrPc: [{ Module: 'Breathing', Percentage: '100.00' }],
        overallPercentage: 100
      })
    );
    mockAdultsService.getModules.and.returnValue(of(mockModuleData));
    mockAdultsService.clickModule.and.returnValue(
      of({ lastVisitedScreen: '29000', scenarios: [], MediaPercent: 100, FreeScrs: [] })
    );

    mockNgNavigatorShareService = jasmine.createSpyObj('NgNavigatorShareService', ['share'], {
      canShareFile: true
    });
    mockNgNavigatorShareService.share.and.returnValue(Promise.resolve());

    mockPlatform = jasmine.createSpyObj('Platform', [], { IOS: false });

    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => ProgramType.Adults,
      configurable: true
    });

    localStorage.setItem('userId', '123');
    localStorage.setItem('saveUsername', 'true');
    localStorage.setItem('shareToken', 'test-token');

    await TestBed.configureTestingModule({
      declarations: [ModuleEndComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AdultsService, useValue: mockAdultsService },
        { provide: NgNavigatorShareService, useValue: mockNgNavigatorShareService },
        { provide: Platform, useValue: mockPlatform }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleEndComponent);
    component = fixture.componentInstance;
    component.moduleId = 29;
    component.moduleLink = '/breathing';
    component.toc = 'breathing';
    component.moduleName = 'Breathing';
    component.sectionName = 'Nurture a Quiet Mind';
  });

  afterEach(() => {
    localStorage.clear();
    const myDiv = document.getElementById('myDiv');
    myDiv?.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('constructor', () => {
    it('should set isAdults to true when ProgramId is Adults', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => ProgramType.Adults,
        configurable: true
      });
      fixture = TestBed.createComponent(ModuleEndComponent);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => ProgramType.Teenagers,
        configurable: true
      });
      fixture = TestBed.createComponent(ModuleEndComponent);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });
  });

  describe('ngOnInit', () => {
    it('should use localStorage userId when saveUsername is true', fakeAsync(() => {
      fixture.detectChanges();
      tick(2100);
      expect(component.userId).toBe(123);
    }));

    it('should use sessionStorage for userId when saveUsername is false', fakeAsync(() => {
      const sessionStorageSpy = spyOn(sessionStorage, 'getItem').and.returnValue('456');
      localStorage.clear();
      localStorage.setItem('saveUsername', 'false');
      localStorage.setItem('userId', '123');
      sessionStorage.setItem('userId', '456');
      fixture = TestBed.createComponent(ModuleEndComponent);
      component = fixture.componentInstance;
      component.moduleId = 29;
      fixture.detectChanges();
      tick(2100);
      expect(sessionStorageSpy).toHaveBeenCalledWith('userId');
    }));

    it('should call GetModuleDataBasedOnProgramType and getDataForCertificate', fakeAsync(() => {
      fixture.detectChanges();
      tick(2100);
      expect(mockAdultsService.getModules).toHaveBeenCalledWith(ProgramType.Adults);
      expect(mockAdultsService.getPoints).toHaveBeenCalledWith(123);
    }));
  });

  describe('getDataForCertificate', () => {
    it('should set isModuleCompleted and isShowDownload when percentage is 100', fakeAsync(() => {
      mockAdultsService.getPoints.and.returnValue(
        of({ ModUserScrPc: [{ Module: 'Breathing', Percentage: '100.00' }] })
      );
      fixture.detectChanges();
      tick(2100);
      expect(component.isModuleCompleted).toBe(true);
      expect(component.isShowDownload).toBe(true);
    }));

    it('should handle five-circles exception case', fakeAsync(() => {
      Object.defineProperty(mockRouter, 'url', {
        get: () => '/adults/five-circles/s33000',
        configurable: true
      });
      mockAdultsService.getPoints.and.returnValue(
        of({ ModUserScrPc: [{ Module: '5 Circles of Wisdom', Percentage: '100.00' }] })
      );
      fixture = TestBed.createComponent(ModuleEndComponent);
      component = fixture.componentInstance;
      component.moduleId = 33;
      fixture.detectChanges();
      tick(2100);
      expect(component.isModuleCompleted).toBe(true);
    }));
  });

  describe('proceed', () => {
    it('should clear progressbarvalue and call routeResume', () => {
      spyOn(localStorage, 'setItem');
      component.proceed();
      expect(localStorage.setItem).toHaveBeenCalledWith('progressbarvalue', '');
      expect(mockRouter.navigate).toHaveBeenCalled();
    });
  });

  describe('routeResume', () => {
    it('should navigate to link when moduleId is 0', fakeAsync(() => {
      fixture.detectChanges();
      tick(2100);
      mockRouter.navigate.calls.reset();
      component.moduleId = 0;
      component.moduleLink = '/adults/breathing';
      component.programType = ProgramType.Adults;
      component.routeResume(0, '/adults/breathing');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/breathing']);
    }));

    it('should navigate to link when Teenagers and moduleId is 0', fakeAsync(() => {
      fixture.detectChanges();
      tick(2100);
      mockRouter.navigate.calls.reset();
      component.programType = ProgramType.Teenagers;
      component.moduleData = mockModuleData;
      component.routeResume(0, '/teenagers/breathing');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/breathing']);
    }));

    it('should call RouteToModule for Teenagers when moduleData matches', fakeAsync(() => {
      fixture.detectChanges();
      tick(2100);
      mockRouter.navigate.calls.reset();
      component.programType = ProgramType.Teenagers;
      component.moduleData = [{ ...mockModuleData[0], moduleId: '29' }] as any;
      component.routeResume(29, '/breathing');
      tick();
      expect(mockAdultsService.clickModule).toHaveBeenCalledWith(29, 123);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/breathing']);
    }));
  });

  describe('shareIndex', () => {
    it('should set socialShare and call ngNavigatorShareService.share', async () => {
      component.toc = 'breathing';
      await component.shareIndex();
      expect(component.socialShare).toBe(true);
      expect(component.shareUrl).toContain('happierme.app/adults/breathing');
      const shareCall = mockNgNavigatorShareService.share.calls.mostRecent();
      expect(shareCall.args[0].title).toBe('HappierMe Program');
      expect(shareCall.args[0].url).toContain('breathing');
    });
  });

  describe('goDashboard', () => {
    it('should navigate to curated URL when curated is set', () => {
      localStorage.setItem('curated', 'emotions');
      component.goDashboard();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/curated/manage-your-emotions']);
    });

    it('should navigate to adult-dashboard when no curated', () => {
      component.goDashboard();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/adult-dashboard']);
    });
  });

  describe('routeJournal', () => {
    it('should navigate to adults journal when programType is Adults', () => {
      component.programType = ProgramType.Adults;
      component.routeJournal();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/journal']);
    });

    it('should navigate to journal root when programType is Teenagers', () => {
      component.programType = ProgramType.Teenagers;
      component.routeJournal();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/journal/']);
    });
  });

  describe('routeForum', () => {
    it('should navigate to forum', () => {
      component.routeForum();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/forum']);
    });
  });

  describe('GetModuleDataBasedOnProgramType', () => {
    it('should fetch module data and update moduleList with SessionCnt', fakeAsync(() => {
      mockAdultsService.getModules.and.returnValue(
        of([{ ...mockModuleData[0], SessionCnt: 10 }] as any)
      );
      fixture.detectChanges();
      tick(2100);
      expect(component.moduleData).toBeDefined();
      expect(component.moduleData.length).toBeGreaterThan(0);
    }));
  });

  describe('ContinueToThisModule', () => {
    it('should call RouteToModule when moduleData matches moduleId', fakeAsync(() => {
      fixture.detectChanges();
      tick(2100);
      mockRouter.navigate.calls.reset();
      component.moduleId = 29;
      component.moduleData = [{ ...mockModuleData[0], moduleId: '29' }] as any;
      component.ContinueToThisModule();
      tick();
      expect(mockAdultsService.clickModule).toHaveBeenCalledWith(29, 123);
    }));
  });
});
