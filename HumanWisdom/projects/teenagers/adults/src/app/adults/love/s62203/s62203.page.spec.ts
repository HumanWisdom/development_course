import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62203Page } from './s62203.page';

describe('S62203Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62203Page;
  let fixture: ComponentFixture<S62203Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62203Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62203Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
