import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S108008Page } from './s108008.page';

describe('S108008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S108008Page;
  let fixture: ComponentFixture<S108008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S108008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S108008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
