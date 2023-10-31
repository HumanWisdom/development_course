import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45016Page } from './s45016.page';

describe('S45016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45016Page;
  let fixture: ComponentFixture<S45016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
