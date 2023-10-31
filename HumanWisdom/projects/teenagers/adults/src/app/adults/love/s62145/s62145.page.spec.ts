import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62145Page } from './s62145.page';

describe('S62145Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62145Page;
  let fixture: ComponentFixture<S62145Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62145Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62145Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
