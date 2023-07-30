import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134079Page } from './s134079.page';

describe('S134079Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134079Page;
  let fixture: ComponentFixture<S134079Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134079Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134079Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
