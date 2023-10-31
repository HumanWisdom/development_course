import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S38019p4Page } from './s38019p4.page';

describe('S38019p4Page', () => {
  let component: S38019p4Page;
  let fixture: ComponentFixture<S38019p4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S38019p4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S38019p4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
