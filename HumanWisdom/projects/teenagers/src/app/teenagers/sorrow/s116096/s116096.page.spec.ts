import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116096Page } from './s116096.page';

describe('S116096Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116096Page;
  let fixture: ComponentFixture<S116096Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116096Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116096Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
