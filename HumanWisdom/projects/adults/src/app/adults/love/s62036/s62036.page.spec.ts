import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62036Page } from './s62036.page';

describe('S62036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62036Page;
  let fixture: ComponentFixture<S62036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
