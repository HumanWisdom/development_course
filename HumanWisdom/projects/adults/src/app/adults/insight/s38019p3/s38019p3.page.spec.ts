import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S38019p3Page } from './s38019p3.page';

describe('S38019p3Page', () => {
  let component: S38019p3Page;
  let fixture: ComponentFixture<S38019p3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S38019p3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S38019p3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
