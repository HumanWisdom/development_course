import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S41019p1Page } from './s41019p1.page';

describe('S41019p1Page', () => {
  let component: S41019p1Page;
  let fixture: ComponentFixture<S41019p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S41019p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S41019p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
