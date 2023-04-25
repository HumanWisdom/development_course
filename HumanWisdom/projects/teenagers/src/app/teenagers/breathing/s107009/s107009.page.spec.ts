import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S107009Page } from './s107009.page';

describe('S107009Page', () => {
  let component: S107009Page;
  let fixture: ComponentFixture<S107009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S107009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S107009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
