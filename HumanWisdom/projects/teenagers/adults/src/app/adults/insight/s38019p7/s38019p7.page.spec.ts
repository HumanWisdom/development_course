import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S38019p7Page } from './s38019p7.page';

describe('S38019p7Page', () => {
  let component: S38019p7Page;
  let fixture: ComponentFixture<S38019p7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S38019p7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S38019p7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
