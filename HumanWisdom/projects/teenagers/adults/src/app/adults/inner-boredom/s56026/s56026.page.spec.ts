import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56026Page } from './s56026.page';

describe('S56026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56026Page;
  let fixture: ComponentFixture<S56026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
