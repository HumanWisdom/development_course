import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132087Page } from './s132087.page';

describe('S132087Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132087Page;
  let fixture: ComponentFixture<S132087Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132087Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132087Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
