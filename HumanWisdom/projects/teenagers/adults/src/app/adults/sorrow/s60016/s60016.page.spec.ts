import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60016Page } from './s60016.page';

describe('S60016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60016Page;
  let fixture: ComponentFixture<S60016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
