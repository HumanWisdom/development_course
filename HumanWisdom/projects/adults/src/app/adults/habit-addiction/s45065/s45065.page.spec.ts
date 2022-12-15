import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45065Page } from './s45065.page';

describe('S45065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45065Page;
  let fixture: ComponentFixture<S45065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
