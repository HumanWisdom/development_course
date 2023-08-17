import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62169Page } from './s134172.page';

describe('S62169Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62169Page;
  let fixture: ComponentFixture<S62169Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62169Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62169Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
