import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53157Page } from './s53157.page';

describe('S53157Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53157Page;
  let fixture: ComponentFixture<S53157Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53157Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53157Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
