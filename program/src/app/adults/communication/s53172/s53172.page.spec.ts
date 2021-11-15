import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53172Page } from './s53172.page';

describe('S53172Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53172Page;
  let fixture: ComponentFixture<S53172Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53172Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53172Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
