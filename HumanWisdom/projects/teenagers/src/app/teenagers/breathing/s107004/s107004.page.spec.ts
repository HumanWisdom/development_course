import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S107004Page } from './s107004.page';

describe('S107004Page', () => {
  let component: S107004Page;
  let fixture: ComponentFixture<S107004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S107004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S107004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
