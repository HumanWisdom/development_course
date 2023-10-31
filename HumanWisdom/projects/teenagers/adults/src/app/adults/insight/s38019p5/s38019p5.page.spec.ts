import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S38019p5Page } from './s38019p5.page';

describe('S38019p5Page', () => {
  let component: S38019p5Page;
  let fixture: ComponentFixture<S38019p5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S38019p5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S38019p5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
