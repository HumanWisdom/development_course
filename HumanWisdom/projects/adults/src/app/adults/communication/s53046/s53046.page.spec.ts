import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53046Page } from './s53046.page';

describe('S53046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53046Page;
  let fixture: ComponentFixture<S53046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
