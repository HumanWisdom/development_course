import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116101Page } from './s116101.page';

describe('S116101Page', () => {
      
    let component:  S116101Page;
  let fixture: ComponentFixture<S116101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
