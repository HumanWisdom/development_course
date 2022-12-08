import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56003tPage } from './s56003t.page';

describe('S56003tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56003tPage;
  let fixture: ComponentFixture<S56003tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56003tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56003tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
