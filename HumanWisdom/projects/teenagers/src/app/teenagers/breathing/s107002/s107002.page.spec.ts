import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S107002Page } from './s107002.page';

describe('S107002Page', () => {
  let component: S107002Page;
  let fixture: ComponentFixture<S107002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S107002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S107002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
