import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53218Page } from './s53218.page';

describe('S53218Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53218Page;
  let fixture: ComponentFixture<S53218Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53218Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53218Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
