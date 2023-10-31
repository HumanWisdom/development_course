import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45045Page } from './s45045.page';

describe('S45045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45045Page;
  let fixture: ComponentFixture<S45045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
