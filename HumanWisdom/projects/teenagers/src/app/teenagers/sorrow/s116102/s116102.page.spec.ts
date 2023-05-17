import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116102Page } from './s116102.page';

describe('S116102Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116102Page;
  let fixture: ComponentFixture<S116102Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116102Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116102Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
