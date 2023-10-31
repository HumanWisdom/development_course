import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53136Page } from './s53136.page';

describe('S53136Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53136Page;
  let fixture: ComponentFixture<S53136Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53136Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53136Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
