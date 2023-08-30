import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140065Page } from './s140065.page';

describe('S140065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140065Page;
  let fixture: ComponentFixture<S140065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
