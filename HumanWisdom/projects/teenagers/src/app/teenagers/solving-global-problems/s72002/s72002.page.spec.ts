import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S72002Page } from './s72002.page';

describe('S72002Page', () => {
  let component: S72002Page;
  let fixture: ComponentFixture<S72002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S72002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S72002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
