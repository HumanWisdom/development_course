import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49027Page } from './s49027.page';

describe('S49027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49027Page;
  let fixture: ComponentFixture<S49027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
