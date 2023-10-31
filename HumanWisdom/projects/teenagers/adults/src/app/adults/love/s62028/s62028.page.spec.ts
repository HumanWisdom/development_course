import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62028Page } from './s62028.page';

describe('S62028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62028Page;
  let fixture: ComponentFixture<S62028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
