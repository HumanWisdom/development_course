import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S72001p1Page } from './s72001p1.page';

describe('S72001p1Page', () => {
  let component: S72001p1Page;
  let fixture: ComponentFixture<S72001p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S72001p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S72001p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
