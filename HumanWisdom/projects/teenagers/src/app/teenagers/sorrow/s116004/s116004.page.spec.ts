import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116004Page } from './s116004.page';

describe('S116004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116004Page;
  let fixture: ComponentFixture<S116004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
