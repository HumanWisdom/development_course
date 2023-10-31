import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S71002Page } from './s71002.page';

describe('S71002Page', () => {
  let component: S71002Page;
  let fixture: ComponentFixture<S71002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S71002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S71002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
