import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25021tPage } from './s25021t.page';

describe('S25021tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25021tPage;
  let fixture: ComponentFixture<S25021tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25021tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25021tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
