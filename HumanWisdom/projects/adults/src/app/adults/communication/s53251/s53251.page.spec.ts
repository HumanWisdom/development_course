import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53251Page } from './s53251.page';

describe('S53251Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53251Page;
  let fixture: ComponentFixture<S53251Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53251Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53251Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
