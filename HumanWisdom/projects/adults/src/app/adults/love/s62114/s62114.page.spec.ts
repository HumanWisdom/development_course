import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62114Page } from './s62114.page';

describe('S62114Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62114Page;
  let fixture: ComponentFixture<S62114Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62114Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62114Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
