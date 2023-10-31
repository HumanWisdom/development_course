import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53109Page } from './s53109.page';

describe('S53109Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53109Page;
  let fixture: ComponentFixture<S53109Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53109Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53109Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
