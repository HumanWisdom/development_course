import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S38019p6Page } from './s38019p6.page';

describe('S38019p6Page', () => {
  let component: S38019p6Page;
  let fixture: ComponentFixture<S38019p6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S38019p6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S38019p6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
