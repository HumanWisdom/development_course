import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62205Page } from './s62205.page';

describe('S62205Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62205Page;
  let fixture: ComponentFixture<S62205Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62205Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62205Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
