import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62056Page } from './s62056.page';

describe('S62056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62056Page;
  let fixture: ComponentFixture<S62056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
