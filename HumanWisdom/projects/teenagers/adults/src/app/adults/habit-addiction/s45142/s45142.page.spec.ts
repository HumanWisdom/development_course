import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45142Page } from './s45142.page';

describe('S45142Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45142Page;
  let fixture: ComponentFixture<S45142Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45142Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45142Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
