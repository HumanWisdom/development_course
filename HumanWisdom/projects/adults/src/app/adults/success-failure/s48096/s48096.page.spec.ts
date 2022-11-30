import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48096Page } from './s48096.page';

describe('S48096Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48096Page;
  let fixture: ComponentFixture<S48096Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48096Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48096Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
