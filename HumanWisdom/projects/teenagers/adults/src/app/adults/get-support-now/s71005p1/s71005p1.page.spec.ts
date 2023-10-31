import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S71005p1Page } from './s71005p1.page';

describe('S71005p1Page', () => {
  let component: S71005p1Page;
  let fixture: ComponentFixture<S71005p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S71005p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S71005p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
