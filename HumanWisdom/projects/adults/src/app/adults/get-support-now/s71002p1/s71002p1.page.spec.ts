import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S71002p1Page } from './s71002p1.page';

describe('S71002p1Page', () => {
  let component: S71002p1Page;
  let fixture: ComponentFixture<S71002p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S71002p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S71002p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
