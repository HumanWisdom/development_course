import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116045Page } from './s116045.page';

describe('S116045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116045Page;
  let fixture: ComponentFixture<S116045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
