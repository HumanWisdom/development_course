import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53073Page } from './s53073.page';

describe('S53073Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53073Page;
  let fixture: ComponentFixture<S53073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
