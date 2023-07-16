import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53065Page } from './s132067.page';

describe('S53065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53065Page;
  let fixture: ComponentFixture<S53065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
