import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25032tPage } from './s25032t.page';

describe('S25032tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25032tPage;
  let fixture: ComponentFixture<S25032tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25032tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25032tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
