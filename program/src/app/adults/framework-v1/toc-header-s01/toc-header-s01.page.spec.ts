import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TocHeaderS01Page } from './toc-header-s01.page';

describe('TocHeaderS01Page', () => {
  let component: TocHeaderS01Page;
  let fixture: ComponentFixture<TocHeaderS01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TocHeaderS01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TocHeaderS01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
