import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressSliderComponent } from './progress-slider.component';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

describe('ProgressSliderComponent', () => {
  let component: ProgressSliderComponent;
  let fixture: ComponentFixture<ProgressSliderComponent>;
  let originalProgramId: PropertyDescriptor | undefined;

  beforeEach(() => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      value: ProgramType.Adults,
      writable: true,
      configurable: true
    });

    TestBed.configureTestingModule({
      declarations: [ProgressSliderComponent],
      imports: [FormsModule, NgxSliderModule],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(ProgressSliderComponent);
    component = fixture.componentInstance;
    component.q = 'How satisfied are you?';
    component.r = 1;
    component.pFilter = 'Very';
    component.nFilter = 'Not';
    fixture.detectChanges();
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
  });

  describe('component creation and ngOnInit', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should set isAdults true when ProgramId is Adults', () => {
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults false when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        value: ProgramType.Teenagers,
        writable: true,
        configurable: true
      });
      fixture = TestBed.createComponent(ProgressSliderComponent);
      component = fixture.componentInstance;
      component.q = 'Q';
      component.r = 1;
      component.pFilter = 'P';
      component.nFilter = 'N';
      fixture.detectChanges();
      expect(component.isAdults).toBe(false);
    });

    it('should have default rating 0 and slideChange false', () => {
      expect(component.rating).toBe(0);
      expect(component.slideChange).toBe(false);
    });

    it('should have options floor 1 and ceil 5', () => {
      expect(component.options.floor).toBe(1);
      expect(component.options.ceil).toBe(5);
    });
  });

  describe('selectRating', () => {
    it('should emit sendRating with JSON string containing Id and Rating', () => {
      component.r = 2;
      component.rating = 3;
      spyOn(component.sendRating, 'emit');
      component.selectRating(3);
      expect(component.sendRating.emit).toHaveBeenCalledWith(
        JSON.stringify({ Id: 2, Rating: 3 })
      );
    });
  });

  describe('getSlideChange', () => {
    it('should set slideChange to true and emit sendRating', () => {
      component.r = 1;
      component.rating = 4;
      spyOn(component.sendRating, 'emit');
      component.getSlideChange({});
      expect(component.slideChange).toBe(true);
      expect(component.sendRating.emit).toHaveBeenCalledWith(
        JSON.stringify({ Id: 1, Rating: 4 })
      );
    });
  });
});
