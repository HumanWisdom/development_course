import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S72002p1Page } from './s72002p1.page';

describe('S72002p1Page', () => {
  let component: S72002p1Page;
  let fixture: ComponentFixture<S72002p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S72002p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S72002p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
