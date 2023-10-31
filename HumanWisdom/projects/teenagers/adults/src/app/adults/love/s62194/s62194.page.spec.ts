import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62194Page } from './s62194.page';

describe('S62194Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62194Page;
  let fixture: ComponentFixture<S62194Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62194Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62194Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
