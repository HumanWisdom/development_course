import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53089Page } from './s53089.page';

describe('S53089Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53089Page;
  let fixture: ComponentFixture<S53089Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53089Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53089Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
