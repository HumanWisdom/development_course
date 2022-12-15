import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53178Page } from './s53178.page';

describe('S53178Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53178Page;
  let fixture: ComponentFixture<S53178Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53178Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53178Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
