import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141024Page } from './s141024.page';

describe('S141024Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141024Page;
  let fixture: ComponentFixture<S141024Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141024Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141024Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
