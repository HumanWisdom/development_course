import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { FindInspiration } from './find-inspiration.component';
import { LogEventService } from '../../services/log-event.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';

describe('FindInspiration', () => {
  let component: FindInspiration;
  let fixture: ComponentFixture<FindInspiration>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);
    mockLogEventService.logEvent.and.stub();

    spyOn(SharedService, 'getprogramName').and.returnValue('adults' as any);

    await TestBed.configureTestingModule({
      declarations: [FindInspiration],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: LogEventService, useValue: mockLogEventService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(FindInspiration);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isAdults true when ProgramId is Adults', () => {
    SharedService.ProgramId = ProgramType.Adults;
    fixture = TestBed.createComponent(FindInspiration);
    component = fixture.componentInstance;
    expect(component.isAdults).toBe(true);
  });

  it('should set isAdults false when ProgramId is Teenagers', () => {
    SharedService.ProgramId = ProgramType.Teenagers;
    fixture = TestBed.createComponent(FindInspiration);
    component = fixture.componentInstance;
    expect(component.isAdults).toBe(false);
  });

  it('should have inspirationItems populated', () => {
    expect(component.inspirationItems).toBeDefined();
    expect(component.inspirationItems.length).toBeGreaterThan(0);
  });

  describe('routeTo', () => {
    it('should log event and navigate when routeTo is called with url', () => {
      component.routeTo('podcast');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_FI_podcast');
      expect(SharedService.getprogramName).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['adults/podcast']);
    });
  });
});
