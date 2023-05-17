import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116090Page } from './s116090.page';

describe('S116090Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116090Page;
  let fixture: ComponentFixture<S116090Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116090Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116090Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
