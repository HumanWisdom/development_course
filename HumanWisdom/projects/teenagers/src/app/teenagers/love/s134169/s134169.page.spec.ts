import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134169Page } from './s134169.page';

describe('S134169Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134169Page;
  let fixture: ComponentFixture<S134169Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134169Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134169Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
