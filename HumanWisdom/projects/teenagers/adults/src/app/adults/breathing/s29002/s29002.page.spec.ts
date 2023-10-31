import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S29002Page } from './s29002.page';

describe('S29002Page', () => {
  let component: S29002Page;
  let fixture: ComponentFixture<S29002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S29002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S29002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
