import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45096Page } from './s45096.page';

describe('S45096Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45096Page;
  let fixture: ComponentFixture<S45096Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45096Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45096Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
