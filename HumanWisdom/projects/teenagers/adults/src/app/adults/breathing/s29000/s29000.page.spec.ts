import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S29000Page } from './s29000.page';

describe('S29000Page', () => {
  let component: S29000Page;
  let fixture: ComponentFixture<S29000Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S29000Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S29000Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
