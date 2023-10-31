import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62170Page } from './s62170.page';

describe('S62170Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62170Page;
  let fixture: ComponentFixture<S62170Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62170Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62170Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
