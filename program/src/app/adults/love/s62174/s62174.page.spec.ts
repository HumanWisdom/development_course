import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62174Page } from './s62174.page';

describe('S62174Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62174Page;
  let fixture: ComponentFixture<S62174Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62174Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62174Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
