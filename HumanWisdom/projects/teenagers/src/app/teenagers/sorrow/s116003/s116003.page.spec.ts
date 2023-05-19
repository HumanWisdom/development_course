import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116003Page } from './s116003.page';

describe('S116003Page', () => {
      
    let component:  S116003Page;
  let fixture: ComponentFixture<S116003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
