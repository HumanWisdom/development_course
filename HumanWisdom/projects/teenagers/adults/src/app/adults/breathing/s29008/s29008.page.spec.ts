import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S29008Page } from './s29008.page';

describe('S29008Page', () => {
  let component: S29008Page;
  let fixture: ComponentFixture<S29008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S29008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S29008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
