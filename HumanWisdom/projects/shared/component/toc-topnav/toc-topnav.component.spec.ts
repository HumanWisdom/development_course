import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TocTopnavComponent } from './toc-topnav.component';

describe('TocTopnavComponent', () => {
  let component: TocTopnavComponent;
  let fixture: ComponentFixture<TocTopnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TocTopnavComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TocTopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
