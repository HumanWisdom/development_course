import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S72004p1Page } from './s72004p1.page';

describe('S72004p1Page', () => {
  let component: S72004p1Page;
  let fixture: ComponentFixture<S72004p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S72004p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S72004p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
