import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S72003Page } from './s72003.page';

describe('S72003Page', () => {
  let component: S72003Page;
  let fixture: ComponentFixture<S72003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S72003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S72003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
