import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S38019p2Page } from './s38019p2.page';

describe('S38019p2Page', () => {
  let component: S38019p2Page;
  let fixture: ComponentFixture<S38019p2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S38019p2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S38019p2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
