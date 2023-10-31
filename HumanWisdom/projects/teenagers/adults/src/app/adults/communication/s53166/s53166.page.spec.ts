import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53166Page } from './s53166.page';

describe('S53166Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53166Page;
  let fixture: ComponentFixture<S53166Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53166Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53166Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
