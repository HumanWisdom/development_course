import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S41019p5Page } from './s41019p5.page';

describe('S41019p5Page', () => {
  let component: S41019p5Page;
  let fixture: ComponentFixture<S41019p5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S41019p5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S41019p5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
