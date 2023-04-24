import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S107003Page } from './s107003.page';

describe('S107003Page', () => {
  let component: S107003Page;
  let fixture: ComponentFixture<S107003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S107003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S107003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
