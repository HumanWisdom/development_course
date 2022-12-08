import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S29004Page } from './s29004.page';

describe('S29004Page', () => {
  let component: S29004Page;
  let fixture: ComponentFixture<S29004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S29004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S29004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
