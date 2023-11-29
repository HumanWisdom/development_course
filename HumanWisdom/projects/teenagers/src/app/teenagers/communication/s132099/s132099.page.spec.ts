import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132099Page } from './s132099.page';

describe('S132099Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132099Page;
  let fixture: ComponentFixture<S132099Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132099Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132099Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
