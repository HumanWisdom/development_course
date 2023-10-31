import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53035Page } from './s53035.page';

describe('S53035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53035Page;
  let fixture: ComponentFixture<S53035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
