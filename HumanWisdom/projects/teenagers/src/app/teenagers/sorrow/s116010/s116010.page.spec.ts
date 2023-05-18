import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116010Page } from './s116010.page';

describe('S116010Page', () => {
      
    let component:  S116010Page;
  let fixture: ComponentFixture<S116010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
