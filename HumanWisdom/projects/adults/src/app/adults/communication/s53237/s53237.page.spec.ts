import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53237Page } from './s53237.page';

describe('S53237Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53237Page;
  let fixture: ComponentFixture<S53237Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53237Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53237Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
