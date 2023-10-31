import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53076Page } from './s53076.page';

describe('S53076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53076Page;
  let fixture: ComponentFixture<S53076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
