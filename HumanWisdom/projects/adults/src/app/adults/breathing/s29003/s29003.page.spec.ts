import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S29003Page } from './s29003.page';

describe('S29003Page', () => {
  let component: S29003Page;
  let fixture: ComponentFixture<S29003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S29003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S29003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
