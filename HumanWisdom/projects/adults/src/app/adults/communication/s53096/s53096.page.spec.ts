import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53096Page } from './s53096.page';

describe('S53096Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53096Page;
  let fixture: ComponentFixture<S53096Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53096Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53096Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
