import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62118Page } from './s62118.page';

describe('S62118Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62118Page;
  let fixture: ComponentFixture<S62118Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62118Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62118Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
