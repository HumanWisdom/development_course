import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S72003p1Page } from './s72003p1.page';

describe('S72003p1Page', () => {
  let component: S72003p1Page;
  let fixture: ComponentFixture<S72003p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S72003p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S72003p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
