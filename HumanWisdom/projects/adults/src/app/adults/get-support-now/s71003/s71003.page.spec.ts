import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S71003Page } from './s71003.page';

describe('S71003Page', () => {
  let component: S71003Page;
  let fixture: ComponentFixture<S71003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S71003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S71003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
