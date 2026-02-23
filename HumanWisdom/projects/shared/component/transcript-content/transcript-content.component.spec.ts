import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { TranscriptContentComponent } from './transcript-content.component';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';

describe('TranscriptContentComponent', () => {
  let component: TranscriptContentComponent;
  let fixture: ComponentFixture<TranscriptContentComponent>;
  let mockCaptureService: jasmine.SpyObj<NgxCaptureService>;
  let mockAdultsService: jasmine.SpyObj<AdultsService>;
  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    mockCaptureService = jasmine.createSpyObj('NgxCaptureService', ['getImage']);
    mockAdultsService = jasmine.createSpyObj('AdultsService', ['screenProgress']);
    mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', ['params'], { snapshot: { params: {} } });

    await TestBed.configureTestingModule({
      declarations: [TranscriptContentComponent],
      providers: [
        { provide: NgxCaptureService, useValue: mockCaptureService },
        { provide: AdultsService, useValue: mockAdultsService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(TranscriptContentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept bg and title inputs', () => {
    component.bg = 'bg-dark';
    component.title = 'Transcript Title';
    fixture.detectChanges();
    expect(component.bg).toBe('bg-dark');
    expect(component.title).toBe('Transcript Title');
  });

  describe('ngOnInit', () => {
    it('should set isAdults true when ProgramId is Adults', () => {
      SharedService.ProgramId = ProgramType.Adults;
      component.ngOnInit();
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults false when ProgramId is Teenagers', () => {
      SharedService.ProgramId = ProgramType.Teenagers;
      component.ngOnInit();
      expect(component.isAdults).toBe(false);
    });
  });
});
