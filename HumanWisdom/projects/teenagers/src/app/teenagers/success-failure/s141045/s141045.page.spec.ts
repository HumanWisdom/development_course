import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141045Page } from './s141045.page';

describe('S141045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141045Page;
  let fixture: ComponentFixture<S141045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
