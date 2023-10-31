import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62141Page } from './s62141.page';

describe('S62141Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62141Page;
  let fixture: ComponentFixture<S62141Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62141Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62141Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
