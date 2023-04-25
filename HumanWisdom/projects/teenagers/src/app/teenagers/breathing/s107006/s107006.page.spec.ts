import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S107006Page } from './s107006.page';

describe('S107006Page', () => {
  let component: S107006Page;
  let fixture: ComponentFixture<S107006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S107006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S107006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
