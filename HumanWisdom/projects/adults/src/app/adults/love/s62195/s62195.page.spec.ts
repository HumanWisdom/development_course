import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62195Page } from './s62195.page';

describe('S62195Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62195Page;
  let fixture: ComponentFixture<S62195Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62195Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62195Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
