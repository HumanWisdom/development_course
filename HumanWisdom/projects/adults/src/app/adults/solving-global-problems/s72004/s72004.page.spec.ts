import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S72004Page } from './s72004.page';

describe('S72004Page', () => {
  let component: S72004Page;
  let fixture: ComponentFixture<S72004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S72004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S72004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
