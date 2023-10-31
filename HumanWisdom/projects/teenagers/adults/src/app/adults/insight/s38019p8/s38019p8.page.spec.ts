import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S38019p8Page } from './s38019p8.page';

describe('S38019p8Page', () => {
  let component: S38019p8Page;
  let fixture: ComponentFixture<S38019p8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S38019p8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S38019p8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
