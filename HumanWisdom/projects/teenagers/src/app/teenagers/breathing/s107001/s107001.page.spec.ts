import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S107001Page } from './s107001.page';

describe('S107001Page', () => {
  let component: S107001Page;
  let fixture: ComponentFixture<S107001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S107001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S107001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
