import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53148Page } from './s53148.page';

describe('S53148Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53148Page;
  let fixture: ComponentFixture<S53148Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53148Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53148Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
