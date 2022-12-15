import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S72001Page } from './s72001.page';

describe('S72001Page', () => {
  let component: S72001Page;
  let fixture: ComponentFixture<S72001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S72001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S72001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
