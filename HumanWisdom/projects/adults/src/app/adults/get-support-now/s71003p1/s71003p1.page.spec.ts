import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S71003p1Page } from './s71003p1.page';

describe('S71003p1Page', () => {
  let component: S71003p1Page;
  let fixture: ComponentFixture<S71003p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S71003p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S71003p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
