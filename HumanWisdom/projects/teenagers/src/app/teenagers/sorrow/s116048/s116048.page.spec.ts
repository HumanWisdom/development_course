import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116048Page } from './s116048.page';

describe('S116048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116048Page;
  let fixture: ComponentFixture<S116048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
