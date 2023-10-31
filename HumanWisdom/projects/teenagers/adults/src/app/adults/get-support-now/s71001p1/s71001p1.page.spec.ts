import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S71001p1Page } from './s71001p1.page';

describe('S71001p1Page', () => {
  let component: S71001p1Page;
  let fixture: ComponentFixture<S71001p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S71001p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S71001p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
