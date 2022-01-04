import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S38019p1Page } from './s38019p1.page';

describe('S38019p1Page', () => {
  let component: S38019p1Page;
  let fixture: ComponentFixture<S38019p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S38019p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S38019p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
