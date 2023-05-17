import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116046Page } from './s116046.page';

describe('S116046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116046Page;
  let fixture: ComponentFixture<S116046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
