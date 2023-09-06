import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141039Page } from './s141039.page';

describe('S141039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141039Page;
  let fixture: ComponentFixture<S141039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
